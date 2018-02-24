---
author: thomas torggler
category: TAK
external help file: tak.exchange-help.xml
layout: post
Module Name: tak
online version:
redirect_from: ["/post/get-mxrecord"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Get-MxRecord
---

# Get-MxRecord

## SYNOPSIS
Get MX Records for a domain.

## SYNTAX

```
Get-MxRecord [[-Domain] <String>] [<CommonParameters>]
```

## DESCRIPTION
Uses Resolve-DnsName to get MX Records, Priority and the IP Address of the records.

## EXAMPLES

### EXAMPLE 1
```
Get-MxRecord ntsystems.it
```

This example gets the MX record for the domain ntsystems.it.

## PARAMETERS

### -Domain
{{Fill Domain Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### [string]

## OUTPUTS

### [Selected.Microsoft.DnsClient.Commands.DnsRecord_MX]

## NOTES

## RELATED LINKS
