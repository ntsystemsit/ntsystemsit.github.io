---
author: tto
category: TAK
date: 2021-01-02
excerpt: 'Import IIS log files with default header.'
external help file: tak-help.xml
layout: post
Module Name: TAK
online version:
redirect_from: ["/PowerShell/TAK/Import-IISLog", "/PowerShell/TAK/import-iislog", "/PowerShell/import-iislog"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Import-IISLog
---

# Import-IISLog

## SYNOPSIS
Import IIS log files with default header.

## SYNTAX

```
Import-IISLog [[-Path] <String>] [[-Filter] <String>] [[-Tail] <Int32>] [-Wait] [<CommonParameters>]
```

## DESCRIPTION
This function imports IIS log files from CSV format.

## EXAMPLES

### EXAMPLE 1
```
Import-IISLog
Import the latest log found in the default log folder.
```

### EXAMPLE 2
```
Import-IISLog -Tail 10 -Wait
Import the latest 10 lines of the latest log found in the default log folder and wait for new lines until stopped with ctrl-c.
```

## PARAMETERS

### -Path
{{ Fill Path Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: C:\inetpub\logs\LogFiles\*
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
{{ Fill Filter Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: *.log
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tail
{{ Fill Tail Description }}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: -1
Accept pipeline input: False
Accept wildcard characters: False
```

### -Wait
{{ Fill Wait Description }}

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

### <none>
## OUTPUTS

### [IISLogEntry]
## NOTES
General notes

## RELATED LINKS
