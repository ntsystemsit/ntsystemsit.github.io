---
layout: post
title:  "Start-TestWebServer"
comments: true
author: thomas torggler
category: PowerShell
tags: ["PowerShell", "OnlineHelp"]
excerpt: "Webserver for load balancer testing."
---

# Start-TestWebServer

## SYNOPSIS
Webserver for load balancer testing.

## SYNTAX

```
Start-TestWebServer.ps1 [[-Port] <Int32>] [-CreateFirewallRule]
```

## DESCRIPTION
Start a web listener that listens on a specified port and simply answers to any request, returning JSON object containing the request.
Requires administrative rights to create the listener.

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
.\Start-TestWebServer -Port 8001
```

Start the test WebServer on port 8001.

### -------------------------- EXAMPLE 2 --------------------------
```
.\Start-TestWebServer -Port 80 -CreateFirewallRule
Invoke-RestMethod -Uri http://localhost | Select-Object UserAgent
```

Start the test WebServer on port 80 and create a Firewall Rule to allow traffic to the specified port.
The Invoke-RestMethod cmdlet is used to send a request to the listener and parse the output.

## PARAMETERS

### -Port
Specify a TCP port number for the HTTP listener to use.
Defaults to 8000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: 1
Default value: 8000
Accept pipeline input: False
Accept wildcard characters: False
```

### -CreateFirewallRule
Use this switch to automatically create a Windows Firewall rule to allow incoming connections on the specified port.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None.

## OUTPUTS

### None.

## NOTES

## RELATED LINKS

[https://ntsystems.it/PowerShell/start-testwebserver/](https://ntsystems.it/PowerShell/start-testwebserver/)

{% include psgallery.html packagename="Start-TestWebServer" type="Script" reponame="PowerShell" %}
