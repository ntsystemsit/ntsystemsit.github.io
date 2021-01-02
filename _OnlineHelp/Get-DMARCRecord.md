---
author: tto
category: tak
date: 2021-01-02
excerpt: "Get DMARC Record for a domain."
external help file: tak-help.xml
layout: pshelp
Module Name: tak
online version:
redirect_from: ["/PowerShell/tak/Get-DMARCRecord", "/PowerShell/tak/get-dmarcrecord", "/PowerShell/get-dmarcrecord"]
schema: 2.0.0
title: Get-DMARCRecord
---

# Get-DMARCRecord

## SYNOPSIS
Get DMARC Record for a domain.

## SYNTAX

```
Get-DMARCRecord [-DomainName] <String> [[-Server] <String>] [<CommonParameters>]
```

## DESCRIPTION
This function uses Resolve-DNSName to get the DMARC Record for a given domain.
Objects with a DomainName property,
such as returned by Get-AcceptedDomain, can be piped to this function.

## EXAMPLES

### EXAMPLE 1
```
Get-AcceptedDomain | Get-DMARCRecord
```

This example gets DMARC records for all domains returned by Get-AcceptedDomain.

## PARAMETERS

### -DomainName
Specify the Domain name to use for the query.

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

### -Server
Specify a DNS server to query.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
