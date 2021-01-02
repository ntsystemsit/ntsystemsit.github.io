---
author: tto
category: TAK
date: 2021-01-02
excerpt: 'Import DHCP Server Log files.'
external help file: tak-help.xml
layout: post
Module Name: TAK
online version:
redirect_from: ["https://onprem.wtf/PowerShell/TAK/Import-DhcpServerLog", "https://onprem.wtf/PowerShell/TAK/import-dhcpserverlog"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Import-DhcpServerLog
---

# Import-DhcpServerLog

## SYNOPSIS
Import DHCP Server Log files.

## SYNTAX

```
Import-DhcpServerLog [[-Path] <Object>] [[-Filter] <Object>] [[-ComputerName] <Object>] [<CommonParameters>]
```

## DESCRIPTION
This function imports DHCP Server Log files from CSV format.

## EXAMPLES

### EXAMPLE 1
```
Import-DhcpServerLog
Import all logs found in the default log folder.
```

## PARAMETERS

### -Path
{{ Fill Path Description }}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: C:\Windows\System32\dhcp
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
{{ Fill Filter Description }}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: DhcpSrvLog*.log
Accept pipeline input: False
Accept wildcard characters: False
```

### -ComputerName
{{ Fill ComputerName Description }}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
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
