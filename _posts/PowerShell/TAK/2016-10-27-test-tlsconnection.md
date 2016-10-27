---
layout: post
title: "Test-TLSConnection"
date: 2016-10-27 12:35:25 +0200
comments: true
author: thomas torggler
category: TAK
tags: OnlineHelp Lync PowerShell
---
# Test-TLSConnection

## Synopsis
Test if TLS Connection can be established.
<!-- more -->

## Description
This function uses System.Net.Sockets.Tcpclient and System.Net.Security.SslStream to connect to a ComputerName and authenticate via TLS. This is useful to check if a TLS connection can be established and if the certificate used on the remote computer is trusted on the local machine. If the connection can be established, the certificate's properties will be output as custom object.

## Examples
```powershell
Test-TlsConnection -ComputerName www.ntsystems.it
```
This example connects to www.ntsystems.it on port 443 (default) and outputs the certificate's properties.

```powershell
Test-TlsConnection -ComputerName sipdir.online.lync.com -Port 5061 -SaveCert
```
This example connects to sipdir.online.lync.com on port 5061 and saves the certificate to the temp folder.


