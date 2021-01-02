---
author: tto
category: tak
date: 2021-01-02
excerpt: "Test if a TCP Connection can be established."
external help file: tak-help.xml
layout: pshelp
Module Name: Tak
online version:
redirect_from: ["/PowerShell/Tak/Test-TCPConnection", "/PowerShell/Tak/test-tcpconnection", "/PowerShell/test-tcpconnection"]
schema: 2.0.0
title: Test-TCPConnection
---

# Test-TCPConnection

## SYNOPSIS
Test if a TCP Connection can be established.

## SYNTAX

```
Test-TCPConnection [-ComputerName] <Object> [[-Port] <Object>] [-Count <Int32>] [<CommonParameters>]
```

## DESCRIPTION
This function uses System.Net.Sockets.Tcpclient to test if a TCP connection can be established with a
ComputerName on a given port.
Much like "telnet" which is not installed by default.

## EXAMPLES

### EXAMPLE 1
```
Test-TcpConnection -ComputerName www.ntsystems.it
```

This example tests if port 80 can be reached on www.ntsystems.it

### EXAMPLE 2
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### System.Boolean
## NOTES

## RELATED LINKS
