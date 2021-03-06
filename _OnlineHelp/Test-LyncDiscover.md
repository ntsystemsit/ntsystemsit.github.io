---
author: tto
category: tak
date: 2021-01-02
excerpt: "Test the Lyncdiscover service for Skype for Business/Lync deployments"
external help file: tak-help.xml
layout: pshelp
Module Name: TAK
online version:
redirect_from: ["/PowerShell/TAK/Test-LyncDiscover/", "/PowerShell/TAK/test-lyncdiscover/", "/PowerShell/test-lyncdiscover/"]
schema: 2.0.0
title: Test-LyncDiscover
---

# Test-LyncDiscover

## SYNOPSIS
Test the Lyncdiscover service for Skype for Business/Lync deployments

## SYNTAX

## DESCRIPTION
This function uses Invoke-RestMethod to test if the Lyncdiscover service is responding for a given domain.

## EXAMPLES

### EXAMPLE 1
```
Test-LyncDiscover -SipDomain uclab.eu -Http
```

This example gets Lyncdiscover information over http for the domain uclab.eu

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
