---
author: tto
category: TAK
date: 2021-01-02
excerpt: 'Get SPF Record for a domain. If the include tag is present, recursively get that SPF Record, too.'
external help file: tak-help.xml
layout: post
Module Name: TAK
online version:
redirect_from: ["https://onprem.wtf/PowerShell/TAK/Get-SPFRecord", "https://onprem.wtf/PowerShell/TAK/get-spfrecord", "https://onprem.wtf/PowerShell/get-spfrecord"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Get-SPFRecord
---

# Get-SPFRecord

## SYNOPSIS
Get SPF Record for a domain.
If the include tag is present, recursively get that SPF Record, too.

## SYNTAX

```
Get-SPFRecord [-DomainName] <String> [[-Server] <String>] [-Recurse] [<CommonParameters>]
```

## DESCRIPTION
This function uses Resolve-DNSName to recursively get the SPF Record for a given domain.
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
Specify the Domain name for the query.

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
Specify the Domain name for the query.

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

### -Recurse
{{ Fill Recurse Description }}

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

## OUTPUTS

## NOTES

## RELATED LINKS
