---
layout: post
title: "Send Check Point Logs to Azure Sentinel (beta)"
date: 2019-07-15 09:25:06 +0200
comments: true
category: Security
tags: Azure Cloud Security
author: thomas torggler
updated: false
---

Azure Sentinel is Microsoft's new, cloud-native security information and event management (SIEM) tool. In my simplistic point-of-view it is a security-focused, machine-learning-driven add-on for Log Analytics (OMS). Today we will be looking into ingesting Check Point Firewall logs into Log Analytics.   

<!-- more -->

## Log Analytics Agent (linux)

Log Analytics currently lists only linux-based agents for syslog forwarding. In this case I installed Ubuntu Server 18.10, for production it maybe better to stick with 18.04. The following command installs required components:

```
sudo apt install python auditd
```

From the Azure Portal, copy the snippet to install the Log Analytics agent (non-Azure Linux VM). It should look something like this and already have the correct values for workspace id and key.

```
sudo wget https://raw.githubusercontent.com/Microsoft/OMS-Agent-for-Linux/master/installer/scripts/onboard_agent.sh && sh onboard_agent.sh -w <workspace-id> -s <workspace-key> -d opinsights.azure.com
``` 

Finally, download the security configuration file for OMS agent. This contains the required regular expressions for the oms.security event type:

```
sudo wget -O /etc/opt/microsoft/omsagent/<workspace-id>/conf/omsagent.d/security_events.conf "https://aka.ms/syslog-config-file-linux"
```

## Syslog (rsyslog.d)a

Now with the Log Analytics agent ready, we need to configure rsyslog to accept logs from the firewall and forward them to the agent.

Uncomment the following lines in the file `/etc/rsyslog.conf` to enable the _rsyslog_ listener on udp port 514:

```
module(load="imudp")
input(type="imudp" port="514")
```

Now lets create a new configuration file to tell rsyslog to forward all events that contain the string "Check Point" to the Log Analytics agent. Azure Sentinel documentation creates the file at `/etc/rsyslog.d/security-config-omsagent.conf`:

```
:msg, contains, "Check Point" @127.0.0.1:25226
```

At last it may be a good idea to change the default configuration in such a way that not all logs are written to a file. The default configuration for rsyslog is located at `/etc/rsyslog.d/50-default.conf`. Just modify the line with `*.*` accordingly:

```
#*.*;auth,authpriv.none         -/var/log/syslog
local.*;auth,authpriv.none      -/var/log/syslog
```

When we're done with the configuration we use the following commands to restart the Log Analytics Agent and the rsyslog service:

```
sudo /opt/microsoft/omsagent/bin/service_control restart <workspace-id>
Sudo service rsyslog restart
``` 

## Check Point

Check Point publish information about how to configure log export in the article sk122323, see links below. On version R80.20 the required packages are already installed and we just add a log export target like this. Note that this is using export mode shell: 

```
cp_log_export add name azsentinel target-server 10.1.1.1 target-port 514 protocol udp format cef
```

Make sure to select CEF log format. The existing configuration can be verified with:

```
cp_log_export show

name: azsentinel
     enabled: true
     target-server: 10.1.1.1
     target-port: 514
     protocol: udp
     format: cef
     read-mode: raw
```

## Troubleshoot

According to the Sentinel documentation it can take a while before the first logs show up in Log Analytics, in my case it didn't take more than five minutes. But if they don't show up at all, the following steps can be helpful for troubleshooting:

Check if syslog services are listening:

```
tom@azsentinel:~$ netstat -anu
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State
udp        0      0 127.0.0.53:53           0.0.0.0:*
udp        0      0 0.0.0.0:514             0.0.0.0:*
udp        0      0 127.0.0.1:25224         0.0.0.0:*
udp        0      0 127.0.0.1:25226         0.0.0.0:*
udp        0      0 0.0.0.0:33569           0.0.0.0:*
udp6       0      0 :::514                  :::*
```

Note: rsyslog listens on 514 and the omsagent listens on 25224 and 25226, the latter is of interest in this case.

Check if logs are coming in from Check Point:

```
sudo tcpdump -A -ni any port 514 -vv
``` 

Check if logs are forwarded to omsagent:

```
sudo tcpdump -A -ni any port 25226 -vv
```

Log Analytics Agent log file:

```
sudo tail /var/opt/microsoft/omsagent/log/omsagent.log
``` 


## Links
 - [Check Point Log Export (sk122323)](https://supportcenter.checkpoint.com/supportcenter/portal?eventSubmit_doGoviewsolutiondetails=&solutionid=sk122323)
 - [Azure Sentinel Documentation](https://docs.microsoft.com/en-us/azure/sentinel/)