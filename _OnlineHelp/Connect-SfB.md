---
author: tto
category: tak
date: 2021-01-02
excerpt: "Connect to Skype for Business Server or Online."
external help file: tak-help.xml
layout: pshelp
Module Name: tak
online version:
redirect_from: ["/PowerShell/tak/Connect-SfB", "/PowerShell/tak/connect-sfb", "/PowerShell/connect-sfb"]
schema: 2.0.0
title: Connect-SfB
---

# Connect-SfB

## SYNOPSIS
Connect to Skype for Business Server or Online.

## SYNTAX

### Server
```
Connect-SfB -Server <Object> [-Credential <PSCredential>] [-Timeout <Int32>] [-ProxyType <ProxyAccessType>]
 [<CommonParameters>]
```

### Online
```
Connect-SfB [-AdminDomain <String>] [-Timeout <Int32>] [-ProxyType <ProxyAccessType>] [<CommonParameters>]
```

## DESCRIPTION
This function uses New-PSSession or New-CsOnlineSession to connect to Skype for Business (or Lync) Servers
or Skype for Business Online.
The resulting PS Session is then imported and makes cmdlets available in the current session.
The Timeout and ProxyType parameters are used to configure the PSSessionOption with respective values.

This function requires the MicrosoftTeams Module: https://www.powershellgallery.com/packages/MicrosoftTeams/1.1.6

## EXAMPLES

### EXAMPLE 1
```
Connect-SfB -Online -AdminDomain uclab
This example connects to Skype for Business Online setting the OverrideAdminDomain to uclab.onmicrosoft.com
```

## PARAMETERS

### -Server
Specifies the ServerName that the session will be connected to

```yaml
Type: Object
Parameter Sets: Server
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -AdminDomain
Specify the admin doamin to connect to (OverrideAdminDomain parameter)

```yaml
Type: String
Parameter Sets: Online
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
Credential used for connection; if not specified, the currently logged on user will be used

```yaml
Type: PSCredential
Parameter Sets: Server
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Timeout
Session idle timeout in seconds

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: 3600
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyType
ProxyAccessType to use for the PsSession

```yaml
Type: ProxyAccessType
Parameter Sets: (All)
Aliases:
Accepted values: None, IEConfig, WinHttpConfig, AutoDetect, NoProxyServer

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None.
## OUTPUTS

### None.
## NOTES
Author: @torggler

## RELATED LINKS
