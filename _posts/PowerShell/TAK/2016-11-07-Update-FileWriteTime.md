---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
online version: 
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Update-FileWriteTime
excerpt: "Touch a file."
---

# Update-FileWriteTime

## SYNOPSIS
Touch a file.

## SYNTAX

```
Update-FileWriteTime [-Name] <String[]> [-Date <DateTime>]
```

## DESCRIPTION
This function checks whether a given file exists, and if so, updates the LastWriteTime property of the given file.
Should the file not exist, a new, empty file is created.

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
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

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

