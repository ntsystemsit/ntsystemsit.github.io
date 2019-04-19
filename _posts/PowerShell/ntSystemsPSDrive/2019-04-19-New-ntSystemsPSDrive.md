---
author: thomas torggler
category: NTSYSTEMSPSDRIVE
external help file: ntSystemsPSDrive-help.xml
layout: post
Module Name: ntSystemsPSDrive
online version:
schema: 2.0.0
tags: OnlineHelp PowerShell
title: New-ntSystemsPSDrive
---

# New-ntSystemsPSDrive

## SYNOPSIS
A SHiPS provider for ntSystems.it.

## SYNTAX

```
New-ntSystemsPSDrive [[-Name] <String>] [[-Root] <String>] [<CommonParameters>]
```

## DESCRIPTION
This module uses the SHiPS module to create a PowerShell provider for the blog. 

## EXAMPLES

### Example 1
```powershell
PS C:\> New-ntSystemsPSDrive
```

This example creates the PSDrive ntSystems:. Use it like you would use any drive: dir ntSystems:

## PARAMETERS

### -Name
The name of the PSDrive.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Root
The root entry point.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

[Microsoft.PowerShell.SHiPS.SHiPSDrive]

### System.Object
## NOTES

## RELATED LINKS

https://ntsystems.it/PowerShell/ntSystemsPSDrive/