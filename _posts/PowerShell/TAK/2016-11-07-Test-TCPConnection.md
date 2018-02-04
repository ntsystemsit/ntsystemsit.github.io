---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
online version: 
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Test-TCPConnection
excerpt: "Test if a TCP Connection can be established."
---

# Test-TCPConnection

## SYNOPSIS
Test if a TCP Connection can be established.

## SYNTAX

```
Test-TCPConnection [-ComputerName] <Object> [[-Port] <Object>] [-Count <Int32>]
```

## DESCRIPTION
This function uses System.Net.Sockets.Tcpclient to test if a TCP connection can be established with a 
ComputerName on a given port.
Much like "telnet" which is not installed by default.

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
Test-TcpConnection -ComputerName www.ntsystems.it
```

This example tests if port 80 can be reached on www.ntsystems.it

### -------------------------- EXAMPLE 2 --------------------------
```
Test-TcpConnection -ComputerName www.ntsystems.it -Port 25 -Count 4
```

This example tests for 4 times if port 25 can be reached on www.ntsystems.it

## PARAMETERS

### -ComputerName
Specifies the DNS name of the computer to test

```yaml
Type: Object
Parameter Sets: (All)
Aliases: HostName, Server, RemoteHost

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Port
Specifies the TCP port to test on the remote computer.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: RemotePort

Required: False
Position: 2
Default value: 80
Accept pipeline input: False
Accept wildcard characters: False
```

### -Count
Specifies the number of tests to run, this can be useful when testing load-balanced services; default is 1

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: 1
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

### System.Boolean

## NOTES

## RELATED LINKS

