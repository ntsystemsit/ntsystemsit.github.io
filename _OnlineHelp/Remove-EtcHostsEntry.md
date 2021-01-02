---
author: tto
category: TAK
date: 2020-12-22
excerpt: 'Remove an entry from local hosts file by its IP address.'
external help file: tak-help.xml
layout: post
Module Name: TAK
online version:
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Remove-EtcHostsEntry
---

# Remove-EtcHostsEntry

## SYNOPSIS
Remove an entry from local hosts file by its IP address.

## SYNTAX

```
Remove-EtcHostsEntry [[-IPAddress] <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Find an IP address and remove all lines where it appears from the \etc\hosts file of the local computer.

## EXAMPLES

### EXAMPLE 1
```
Remove-EtcHostsEntry -IPAddress 1.1.1.1
```

This example removes following lines from the hosts file
1.1.1.1 test.test
1.1.1.1 another.test.com

## PARAMETERS

### -IPAddress
IPAddress of the hosts entry to be added

```yaml
Type: String
Parameter Sets: (All)
Aliases: ip

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
