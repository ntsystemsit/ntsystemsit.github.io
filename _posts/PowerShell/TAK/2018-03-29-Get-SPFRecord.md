---
author: thomas torggler
category: TAK
external help file: tak.exchange-help.xml
layout: post
Module Name: tak
online version:
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Get-SPFRecord
---

# Get-SPFRecord

## SYNOPSIS
Get SPF Record for a domain.

## SYNTAX

```
Get-SPFRecord [[-DomainName] <String>] [[-Server] <String>] [<CommonParameters>]
```

## DESCRIPTION
This function uses Resolve-DNSName to get the SPF Record for a given domain.
Objects with a DomainName property,
such as returned by Get-AcceptedDomain, can be piped to this function.

## EXAMPLES

### EXAMPLE 1
```
Get-AcceptedDomain | Get-SPFRecord
```

This example gets SPF records for all domains returned by Get-AcceptedDomain.

## PARAMETERS

### -DomainName
{{Fill DomainName Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Server
{{Fill Server Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
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
