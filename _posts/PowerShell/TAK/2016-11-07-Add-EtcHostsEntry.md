---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
online version: 
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Add-EtcHostsEntry
excerpt: "Add an entry to local hosts file."
---

# Add-EtcHostsEntry

## SYNOPSIS
Add an entry to local hosts file.

## SYNTAX

```
Add-EtcHostsEntry [-IPAddress] <String> [-Fqdn] <String> [-WhatIf] [-Confirm]
```

## DESCRIPTION
Adds a lines to the \etc\hosts file of the local computer.

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
Add-EtcHostsEntry -IPAddress 1.1.1.1 -Fqdn test.fqdn
```

This example adds following line to the hosts file
1.1.1.1 test.test

## PARAMETERS

### -IPAddress
IPAddress of the hosts entry to be added

```yaml
Type: String
Parameter Sets: (All)
Aliases: ip

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fqdn
FQDN of the hosts entry to be added

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 2
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

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

