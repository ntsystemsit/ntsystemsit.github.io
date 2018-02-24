---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
Module Name: tak
online version:
redirect_from: ["/post/add-etchostsentry"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Add-EtcHostsEntry
---

# Add-EtcHostsEntry

## SYNOPSIS
Add an entry to local hosts file.

## SYNTAX

```
Add-EtcHostsEntry [-IPAddress] <String> [-Fqdn] <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Adds a lines to the /etc/hosts file of the local computer.
Requires write access to /etc/hosts - if running PowerShell Core on  Linux/macOS try "sudo powershell"

## EXAMPLES

### EXAMPLE 1
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
