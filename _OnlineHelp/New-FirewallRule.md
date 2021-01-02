---
author: tto
category: TAK
date: 2021-01-02
excerpt: 'Create a new Windows Firewall Rule.'
external help file: tak-help.xml
layout: post
Module Name: TAK
online version:
redirect_from: ["/PowerShell/TAK/New-FirewallRule", "/PowerShell/TAK/new-firewallrule", "/PowerShell/new-firewallrule"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: New-FirewallRule
---

# New-FirewallRule

## SYNOPSIS
Create a new Windows Firewall Rule.

## SYNTAX

```
New-FirewallRule [[-Port] <Int32>] [[-Protocol] <String>] [[-Store] <String>] [<CommonParameters>]
```

## DESCRIPTION
This function is wrapper for New-NetFirewallRule with the goal of making it easier to create simple firewall rules and have consistent naming.

## EXAMPLES

### EXAMPLE 1
```
New-FirewallRule -Port 6060
This example creats a new firewall rule to allow connections on tcp/6060.
```

## PARAMETERS

### -Port
{{ Fill Port Description }}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: 0
Accept pipeline input: False
Accept wildcard characters: False
```

### -Protocol
{{ Fill Protocol Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: TCP
Accept pipeline input: False
Accept wildcard characters: False
```

### -Store
{{ Fill Store Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: PersistentStore
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None.
## OUTPUTS

### None.
## NOTES
Author: @torggler

## RELATED LINKS
