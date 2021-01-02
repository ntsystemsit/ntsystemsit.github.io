---
author: tto
category: tak
date: 2021-01-02
excerpt: "Get MX Records for a domain."
external help file: tak-help.xml
layout: pshelp
Module Name: TAK
online version:
redirect_from: ["/PowerShell/TAK/Get-MxRecord/", "/PowerShell/TAK/get-mxrecord/", "/PowerShell/get-mxrecord/"]
schema: 2.0.0
title: Get-MxRecord
---

# Get-MxRecord

## SYNOPSIS
Get MX Records for a domain.

## SYNTAX

```
Get-MxRecord [-Domain] <String> [[-Server] <IPAddress>] [-ResolvePTR] [<CommonParameters>]
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
Specify the Domain name for the query.

```yaml
Type: String
Parameter Sets: (All)
Aliases: DomainName

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Server
Specify the DNS server to query.

```yaml
Type: IPAddress
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResolvePTR
Also resolve PTR

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

### [string]
## OUTPUTS

### [Selected.Microsoft.DnsClient.Commands.DnsRecord_MX]
## NOTES

## RELATED LINKS
