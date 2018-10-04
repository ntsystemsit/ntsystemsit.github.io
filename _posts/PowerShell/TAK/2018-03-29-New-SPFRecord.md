---
author: thomas torggler
category: TAK
external help file: tak.exchange-help.xml
layout: post
Module Name: tak
online version:
schema: 2.0.0
tags: OnlineHelp PowerShell
title: New-SPFRecord
---

# New-SPFRecord

## SYNOPSIS
Create SPF record for a given mail domain.

## SYNTAX

```
New-SPFRecord [[-DomainName] <String>] [-mx] [-a] [-ptr] [[-IncludeIP] <IPAddress[]>]
 [[-IncludeDomain] <String>] [[-IncludeHost] <String>] [[-Action] <String>] [<CommonParameters>]
```

## DESCRIPTION
This function helps with creating SPF records for mail domains.
The SPF record should look something like this:

v=spf1 mx a ptr ip4:127.1.1.1/24 a:host.example.com include:example.com -all

More information: https://www.ietf.org/rfc/rfc4408.txt

## EXAMPLES

### EXAMPLE 1
```
Get-AcceptedDomain | New-SPFRecord -mx -IncludeDomain spf.protection.outlook.com -IncludeIP 192.0.2.1,2001:DB8::1 -Action Fail
```

DomainName : uclab.eu
Record     : "v=spf1 mx ip4:192.0.2.1 ip6:2001:DB8::1 include:spf.protection.outlook.com -all"

The above example creates SPF records for all accepted domains in Exchange (Online).

## PARAMETERS

### -DomainName


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

### -mx


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

### -a


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

### -ptr


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

### -IncludeIP


```yaml
Type: IPAddress[]
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeDomain


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

### -IncludeHost


```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Action


```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: Fail
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### [string]
[AcceptedDomain]

This function accepts a string or objects with a DomainName property (such as returned by Get-AcceptedDomain) as input.

## OUTPUTS

### [psobject]

This function writes a custom object to the pipeline.

## NOTES
Author: @torggler

## RELATED LINKS