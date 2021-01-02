---
author: tto
category: TAK
date: 2021-01-02
excerpt: 'Test the Lyncdiscover service for Skype for Business/Lync deployments'
external help file: tak-help.xml
layout: post
Module Name: TAK
online version:
redirect_from: ["https://onprem.wtf/PowerShell/TAK/Test-SfBDiscover", "https://onprem.wtf/PowerShell/TAK/test-sfbdiscover", "https://onprem.wtf/PowerShell/test-sfbdiscover"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Test-SfBDiscover
---

# Test-SfBDiscover

## SYNOPSIS
Test the Lyncdiscover service for Skype for Business/Lync deployments

## SYNTAX

```
Test-SfBDiscover [-SipDomain] <String> [-Http] [-internal] [-Online] [<CommonParameters>]
```

## DESCRIPTION
This function uses Invoke-RestMethod to test if the Lyncdiscover service is responding for a given domain.

## EXAMPLES

### EXAMPLE 1
```
Test-LyncDiscover -SipDomain uclab.eu -Http
This example gets Lyncdiscover information over http for the domain uclab.eu
```

## PARAMETERS

### -SipDomain
Specifies a DNS domain name to test

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Http
Use HTTP instead of HTTPS

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

### -internal
Use internal name (lyncdiscoverinternl) instead of the external one (lyncdiscover)

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

### -Online
Test against Office 365 endpoints

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
