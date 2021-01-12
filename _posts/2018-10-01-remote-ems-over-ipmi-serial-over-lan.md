---
layout: post
title: "Remote EMS over IPMI serial-over-lan"
date: 2018-10-01 21:25:16 +0200
comments: true
category: Skype4B
tags: Network PowerShell Server AudioCodes
author: thomas torggler
date_modified: false
---

Using standards-based IPMI to get some sort of out-of-band management for AudioCodes' embedded server modules.

<!-- more -->

## Background

We've installed a number of session border controllers with embedded server modules for our international customers. The embedded server modules are typically used to run Skype for Business survivable branch servers which provide limited calling services in case of a connectivity issue with the Front End pools. Because IT personnel is not available in branch sites or the devices are installed in data centres with limited access, we relied upon Intel's AMT for out-of-band management of the earlier version of the server module.

AudioCodes upgraded the embedded server module and it turns out, the new version no longer has an AMT chip. Studying the data sheet of the OEM that builds the module, we found that it _Supports IPMI v1.5 and Serial-over-LAN function_. The OEM couldn't help much so I basically googled/tried my way to this solution, maybe my experience saves someone a few hours in the future.

## Intelligent Platform Management Interface (IPMI)

First of all, I had to read up on IPMI. According to [Wikipedia](https://en.wikipedia.org/wiki/Intelligent_Platform_Management_Interface) it provides management and monitoring capabilities **independently** of the host system's CPU, firmware (BIOS or UEFI) and operating system. Windows does implement some basic functionality through CIM and the _PcsvDevice_ PowerShell module, but, apart from that, we have to rely on other tools such as _ipmiutil_ to communicate with this interface.

[ipmiutil](http://ipmiutil.sourceforge.net/) is an open-source utility to manage and interpret IPMI systems with common software. If used inside the OS on the server, it can access and configure the local Baseboard Management Controller (BMC). Once configured, the utility can be used to invoke IPMI functions remotely.

### IPMI configuration

To show the current configuration of the local BMC we can use the following examples:

```powershell
.\ipmiutil.exe config
.\ipmiutil.exe lan -l
```

To set an IP address and the username/password to use for remote connections, we can use something like this:

```powershell
.\ipmiutil.exe lan -e -I 192.168.120.131 -S 255.255.255.0 -G 192.168.120.254 -L 5 -p ipmipass -u ipmiadmin
``` 

The above example sets the IP address of the BMC to 192.168.120.131/24 and the default gateway to 192.168.120.254. Additionally, we set the username to _ipmiadmin_ and the password to _ipmipass_. 

We verify the configuration using the _ipmiutil config_ from the first example, if it looks good, we can try the same from a remote system:

```powershell
[PS] ~\ipmiutil> .\ipmiutil.exe config -N 192.168.120.131 -U ipmiadmin -R ipmipass
ipmiutil config ver 3.10
Connecting to node  192.168.120.131
-- BMC version 1.08, IPMI version 2.0
### ipmiutil config, GetPefEntry ...
# GetPefEntry(1): ret = 193 Invalid Command
### ipmiutil config, GetLanEntry for channel 5 ...
LanParam 5,0,0:  00
LanParam 5,1,0:  14
LanParam 5,2,0:  14 14 14 14 00
LanParam 5,3,0:  c0 a8 78 83
# LanParam(5,3,0) IP address: 192.168.120.131
LanParam 5,4,0:  01
LanParam 5,5,0:  c4 00 ad 01 f5 73
...
```

In the above example, we run _ipmiutil config_ on another machine and use the -N parameter to specify a remote host, -U and -R are used to specify the username and password, respectively. The output shows the connection succeeded and thus, we have remote connectivity.

Now we have an way to manage certain features of the remote system **independently** from the operating system that's installed on said system. We can, for example, use _ipmiutil reset_ to control the systems power state.

```powershell
.\ipmiutil.exe reset -c -N 192.168.120.131 -U ipmiadmin -R ipmipass
.\ipmiutil.exe reset -d -N 192.168.120.131 -U ipmiadmin -R ipmipass
.\ipmiutil.exe reset -u -N 192.168.120.131 -U ipmiadmin -R ipmipass
```

The above lines power cycle, power down or power up the remote system. Use with caution.

If the BMC is not reachable from a remote system, I've found `ipmiutil reset -k` useful. This does reset the BMC, without affecting the OS.

## Serial over LAN (sol) and Emergency Management Services (EMS)

Apart from controlling the systems power state, IPMI also implements serial-over-lan connectivity. This can be used to connect to a remote system's serial console using an IP connection. Now on Windows servers we do not typically use serial connections, at least not for management. But, as it happens, the Emergency Management Services console provides exactly that: a special management console over serial connections. The Emergency Services are not enabled by default, so we have to enable it and make sure it uses our serial-over-lan connection.

To do this, we use the _bcdedit_ utility (from an administrative command-line), first to redirect the EMS console to serial port #2, then to enable EMS for the current Windows installation:

```powershell
bcdedit /emssettings EMSPORT:2 EMSBAUDRATE:115200
bcdedit /ems on 
```

To activate the change and enable EMS, Windows must be rebooted. After that, we can go ahead and start our first _sol_ session using the following command:

```powershell
[PS] ~\ipmiutil> .\ipmiutil.exe sol -a -N 192.168.120.131 -U ipmiadmin -R ipmipass
ipmiutil sol ver 3.10
Connecting to node  192.168.120.131
-- BMC version 1.08, IPMI version 2.0
Opening lanplus connection to node 192.168.120.131 ...
[SOL session is running, use '~.' to end, '~?' for help.]

SAC>
```

The SAC prompt indicates we are now connected to the _special administration console_. This console can be used to retrieve information about the system, it's network interfaces and running processes. We can also connect to the OS via cmd.

```sac
SAC>cmd
SAC>ch -si 1
```

The above example creates a new _cmd channel_ and connects to it. It will prompt for credentials to connect to Windows and, upon success, we have a remote cmd.exe interface. Type in powershell and enjoy :)

Finally, we can use -d to disconnect from the sol session:

```powershell
.\ipmiutil.exe sol -d -N 192.168.120.131 -U ipmiadmin -R ipmipass
```

This is also useful if the sol session fails with the message: "SOL payload already active on another session".


## Security

Now as you can see, enabling IPMI and making the SAC available over serial-over-lan, adds another way of managing the system. This can be convenient but it also increases the system's attack surface. Make sure to limit access to IPMI endpoints and don't use high-privilege accounts when logging into the SAC remotely.   

Links:

- [Sourceforge download and man page](http://ipmiutil.sourceforge.net/)
- [AudioCodes 1000 sbc](https://www.audiocodes.com/solutions-products/products/session-border-controllers-sbcs/mediant-1000-sbc)
- [Boot Parameters to Enable EMS Redirection](https://docs.microsoft.com/en-us/windows-hardware/drivers/devtest/boot-parameters-to-enable-ems-redirection)