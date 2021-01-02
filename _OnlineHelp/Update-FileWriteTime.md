---
author: tto
category: TAK
date: 2021-01-02
excerpt: "Touch a file."
external help file: tak-help.xml
layout: pshelp
Module Name: tak
online version:
redirect_from: ["/PowerShell/tak/Update-FileWriteTime", "/PowerShell/tak/update-filewritetime", "/PowerShell/update-filewritetime"]
schema: 2.0.0
title: Update-FileWriteTime
---

# Update-FileWriteTime

## SYNOPSIS
Touch a file.

## SYNTAX

```
Update-FileWriteTime [-Name] <String[]> [-Date <DateTime>] [<CommonParameters>]
```

## DESCRIPTION
This function checks whether a given file exists, and if so, updates the LastWriteTime property of the given file.
Should the file not exist, a new, empty file is created.
This function works on Linux/macOS.

## EXAMPLES

### EXAMPLE 1
```
touch myfile
```

This example creates myfile if it does not exist in the current directory.
If the file does exist, the LastWriteTime property will be updated.

## PARAMETERS

### -Name
One or more filenames to be touched

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Date
Specify a specific date for LastWriteTime

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: (Get-Date)
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
