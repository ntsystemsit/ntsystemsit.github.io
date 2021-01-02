---
author: tto
category: tak
date: 2021-01-02
excerpt: "Get internal and external URLs for PowerPoint sharing."
external help file: tak-help.xml
layout: pshelp
Module Name: tak
online version:
redirect_from: ["/PowerShell/tak/Test-OOSFarm", "/PowerShell/tak/test-oosfarm", "/PowerShell/test-oosfarm"]
schema: 2.0.0
title: Test-OOSFarm
---

# Test-OOSFarm

## SYNOPSIS
Get internal and external URLs for PowerPoint sharing.

## SYNTAX

```
Test-OOSFarm [-ComputerName] <String> [<CommonParameters>]
```

## DESCRIPTION
This function uses Invoke-RestMethod to get and parse hosting discovery information for Office Online Server farms.
If successfull, it returns a custom object with the internal and external URL for PowerPoint sharing.

## EXAMPLES

### EXAMPLE 1
```
Test-OOSFarm -Name oos.example.com
This example tries to retrieve information from https://oos.example.com/hosting/discovery
```

## PARAMETERS

### -ComputerName
Specifies the name of the OOS server/farm

```yaml
Type: String
Parameter Sets: (All)
Aliases: Server, Farm, Name

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### <none>
## OUTPUTS

### [psobject]
## NOTES
General notes

## RELATED LINKS
