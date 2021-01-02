---
author: tto
category: TAK
date: 2021-01-02
excerpt: "Test Exchange Autodiscover Web Service."
external help file: tak.exchange-help.xml
layout: pshelp
Module Name: tak
online version:
redirect_from: ["/PowerShell/tak/Test-ExchangeAutodiscover", "/PowerShell/tak/test-exchangeautodiscover", "/PowerShell/test-exchangeautodiscover"]
schema: 2.0.0
title: Test-ExchangeAutodiscover
---

# Test-ExchangeAutodiscover

## SYNOPSIS
Test Exchange Autodiscover Web Service.

## SYNTAX

```
Test-ExchangeAutodiscover [[-EmailAddress] <String>] [[-ComputerName] <String>] [[-Credential] <PSCredential>]
 [-ExcludeExplicitO365Endpoint] [[-Report] <FileInfo>] [<CommonParameters>]
```

## DESCRIPTION
This function tests the Exchange Autodiscover Web Serivce for a given Emailaddress.
If ComputerName is not specified,
the function tries to look up the Autodiscover service using the Outlook Clients logic.
Locally cached and SCP data
are not evaluated.

## EXAMPLES

### EXAMPLE 1
```
Test-ExchangeAutodiscover thomas@ntsystems.it -Credential (Get-Credential)
```

This example tests the Autodiscover service for the given mailbox.
It will query dns for autodiscover.ntsystems.it and _autodiscover._tcp.ntsystems.it. 
It will then try to retrieve an Autodiscover payload from https://ntsystems.it, https://autodiscover.ntsystems.it and the Office 365 endpoint.

## PARAMETERS

### -EmailAddress
{{ Fill EmailAddress Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ComputerName
{{ Fill ComputerName Description }}

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

### -Credential
{{ Fill Credential Description }}

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeExplicitO365Endpoint
{{ Fill ExcludeExplicitO365Endpoint Description }}

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

### -Report
{{ Fill Report Description }}

```yaml
Type: FileInfo
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### [psobject]
## NOTES

## RELATED LINKS
