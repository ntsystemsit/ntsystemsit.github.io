---
author: tto
category: TAK
date: 2021-01-02
excerpt: 'Convert a SubnetMask to PrefixLength or vice-versa.'
external help file: tak-help.xml
layout: post
Module Name: TAK
online version:
redirect_from: ["https://onprem.wtf/PowerShell/TAK/Convert-SubnetMask", "https://onprem.wtf/PowerShell/TAK/convert-subnetmask"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Convert-SubnetMask
---

# Convert-SubnetMask

## SYNOPSIS
Convert a SubnetMask to PrefixLength or vice-versa.

## SYNTAX

```
Convert-SubnetMask [-SubnetMask] <Object> [<CommonParameters>]
```

## DESCRIPTION
Long description

## EXAMPLES

### EXAMPLE 1
```
Convert-SubnetMask 24
255.255.255.0
```

This example converts the PrefixLength 24 to a dotted SubnetMask.

### EXAMPLE 2
```
Convert-SubnetMask 255.255.0.0
16
```

This example counts the relevant network bits of the dotted SubnetMask 255.255.0.0.

## PARAMETERS

### -SubnetMask
SubnetMask to convert

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### [string]
## OUTPUTS

### [string]
## NOTES
Logic from: https://d-fens.ch/2013/11/01/nobrainer-using-powershell-to-convert-an-ipv4-subnet-mask-length-into-a-subnet-mask-address/

## RELATED LINKS
