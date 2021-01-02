---
author: tto
category: TAK
date: 2020-12-22
excerpt: 'Test DNS entries for Skype for Business / Lync deployments.'
external help file: tak-help.xml
layout: post
Module Name: TAK
online version:
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Test-LyncDNS
---

# Test-LyncDNS

## SYNOPSIS
Test DNS entries for Skype for Business / Lync deployments.

## SYNTAX

## DESCRIPTION
This function uses Resolve-DnsName to query well-known DNS records for Skype for Business / Lync deployments.
The NameSever parameter can be used to specify a nameserver.

## EXAMPLES

### EXAMPLE 1
```
Test-LyncDNS -SipDomain uclab.eu
This example queries DNS records for the domain uclab.eu
```

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
