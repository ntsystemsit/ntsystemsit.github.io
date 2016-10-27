---
layout: post
title: "Test-TCPConnection"
date: 2016-10-27 12:35:25 +0200
comments: true
author: thomas torggler
category: TAK
tags: OnlineHelp Lync PowerShell
---
# Test-TCPConnection

## Synopsis
Test if a TCP Connection can be established. 
<!-- more -->

## Description
This function uses System.Net.Sockets.Tcpclient to test if a TCP connection can be established with a ComputerName on a given port. Much like the "telnet-client" which is not available by default.

## Examples
```powershell
Test-TcpConnection -ComputerName www.ntsystems.it
```
This example tests if port 80 can be reached on www.ntsystems.it

```powershell
Test-TcpConnection -ComputerName www.ntsystems.it -Port 25 -Count 4
```
This example tests for 4 times if port 25 can be reached on www.ntsystems.it