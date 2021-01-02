---
author: tto
category: TAK
date: 2020-12-22
excerpt: 'Test the ADFS web service'
external help file: tak-help.xml
layout: post
Module Name: TAK
online version:
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Test-FederationService
---

# Test-FederationService

## SYNOPSIS
Test the ADFS web service

## SYNTAX

```
Test-FederationService [-ComputerName] <String> [<CommonParameters>]
```

## DESCRIPTION
This function uses Invoke-RestMethod to test if the federation service metadata can be retrieved from a given server.

## EXAMPLES

### EXAMPLE 1
```
Test-FederationService -ComputerName fs.uclab.eu 
This example gets federation service xml information over the server fs.uclab.eu
```

## PARAMETERS

### -ComputerName
Specifies the name of the federation server

```yaml
Type: String
Parameter Sets: (All)
Aliases: Server

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
