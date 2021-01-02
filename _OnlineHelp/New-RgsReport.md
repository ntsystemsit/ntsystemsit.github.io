---
author: tto
category: TAK
date: 2021-01-02
excerpt: 'Gather information about Skype for Business Response Groups, Queues, Agent Groups.'
external help file: tak-help.xml
layout: post
Module Name: TAK
online version:
redirect_from: ["/PowerShell/TAK/New-RgsReport", "/PowerShell/TAK/new-rgsreport", "/PowerShell/new-rgsreport"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: New-RgsReport
---

# New-RgsReport

## SYNOPSIS
Gather information about Skype for Business Response Groups, Queues, Agent Groups.

## SYNTAX

```
New-RgsReport [[-Filter] <String>] [-Path] <FileInfo> [-Html] [-PassThru] [<CommonParameters>]
```

## DESCRIPTION
This function uses varios cmdlets of the Lync module (or an appropriate remote session) to 
gather information about Response Groups.

## EXAMPLES

### EXAMPLE 1
```
Get-RgsReport -Filter Office -Path .\Desktop\report.csv
```

This example creates a CSV report for all RGS workflows matching Office.

### EXAMPLE 2
```
Get-RgsReport -Filter Office -Path .\Desktop\report.html -Html
```

This example creates a HTML report for all RGS workflows matching Office.

### EXAMPLE 3
```
Get-RgsReport -Filter Office -Path .\Desktop\report.html -Html -PassThru | Out-GridView
```

This example creates a HTML report for all RGS workflows matching Office, because the PassThru switch is present,
the collected data will also be written to the pipeline.
From there we can use it and pipe it to Out-GridView or do whatever.

## PARAMETERS

### -Filter
{{ Fill Filter Description }}

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

### -Path
{{ Fill Path Description }}

```yaml
Type: FileInfo
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Html
{{ Fill Html Description }}

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

### -PassThru
{{ Fill PassThru Description }}

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

### None.
## OUTPUTS

### [psobject]
## NOTES
Author: @torggler

## RELATED LINKS
