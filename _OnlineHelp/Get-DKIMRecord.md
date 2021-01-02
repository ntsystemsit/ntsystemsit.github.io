---
author: tto
category: TAK
date: 2020-12-22
excerpt: 'Get DKIM Record for a domain.'
external help file: tak-help.xml
layout: post
Module Name: TAK
online version:
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Get-DKIMRecord
---

# Get-DKIMRecord

## SYNOPSIS
Get DKIM Record for a domain.

## SYNTAX

```
Get-DKIMRecord [-DomainName] <String> [[-Selector] <String[]>] [[-Server] <String>] [<CommonParameters>]
```

## DESCRIPTION
This function uses Resolve-DNSName to get the DKIM Record for a given domain.
Objects with a DomainName property,
such as returned by Get-AcceptedDomain, can be piped to this function.
The function defaults to "selector1" as this
is typically used with Exchange Online.

## EXAMPLES

### EXAMPLE 1
```
Get-AcceptedDomain | Get-DKIMRecord
```

This example gets DKIM records for all domains returned by Get-AcceptedDomain.

## PARAMETERS

### -DomainName
Specify the Domain name to use in the query.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Selector
Specify a selector name to use in the query.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: @("selector1","selector2")
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
Specify a DNS server to query.

```yaml
Type: String
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

## OUTPUTS

## NOTES

## RELATED LINKS
