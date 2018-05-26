---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
Module Name: tak
online version:
redirect_from: ["/post/show-wlanprofile"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Show-WlanProfile
---

# Show-WlanProfile

## SYNOPSIS
Get wlan pre-shared key.

## SYNTAX

```
Show-WlanProfile [[-Name] <Object>] [<CommonParameters>]
```

## DESCRIPTION
This function invokes the netsh tool to get the pre-shared key for a given wireless lan profile.

## EXAMPLES

### EXAMPLE 1
```
Show-WlanProfile "my_net"
```

This example shows the key for the wlan profile "my_net"

### EXAMPLE 2
```
Get-WlanProfile | Show-WlanProfile
```

This example shows the keys for all known wlan profiles on the system.

## PARAMETERS

### -Name


```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
