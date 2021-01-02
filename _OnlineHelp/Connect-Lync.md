---
author: tto
category: TAK
date: 2021-01-02
excerpt: 'Connect to Skype for Business Server or Online.'
external help file: tak-help.xml
layout: post
Module Name: TAK
online version:
redirect_from: ["/PowerShell/TAK/Connect-Lync", "/PowerShell/TAK/connect-lync", "/PowerShell/connect-lync"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Connect-Lync
---

# Connect-Lync

## SYNOPSIS
Connect to Skype for Business Server or Online.

## SYNTAX

## DESCRIPTION
This function uses New-PSSession or New-CsOnlineSession to connect to Skype for Business (or Lync) Servers
or Skype for Business Online.
The resulting PS Session is then imported and makes cmdlets available in the current session.
The Timeout and ProxyType parameters are used to configure the PSSessionOption with respective values.

## EXAMPLES

### EXAMPLE 1
```
Connect-SfB -Online -AdminDomain uclab
This example connects to Skype for Business Online setting the OverrideAdminDomain to uclab.onmicrosoft.com
```

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None.
## OUTPUTS

### None.
## NOTES
Author: @torggler

## RELATED LINKS
