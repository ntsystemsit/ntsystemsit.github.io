---
author: tto
category: TAK
date: 2020-12-22
excerpt: 'Wohis request.'
external help file: tak-help.xml
layout: post
Module Name: TAK
online version:
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Invoke-WhoisRequest
---

# Invoke-WhoisRequest

## SYNOPSIS
Wohis request.

## SYNTAX

```
Invoke-WhoisRequest [-DomainName] <String> [<CommonParameters>]
```

## DESCRIPTION
This function creats a New-WebServiceProxy and then uses the GetWhoIs method to query whois information from www.webservicex.net

## EXAMPLES

### EXAMPLE 1
```
Invoke-WhoisRequest -DomainName ntsystems.it
This example queries whois information for the domain ntsystems.it
```

## PARAMETERS

### -DomainName
{{ Fill DomainName Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases: domain

Required: True
Position: 1
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
