---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
online version: 
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Test-TLSConnection
excerpt: "Test if TLS Connection can be established."
---

# Test-TLSConnection

## SYNOPSIS
Test if TLS Connection can be established.

## SYNTAX

```
Test-TLSConnection [-ComputerName] <Object> [[-Port] <Object>] [[-FilePath] <FileInfo>] [-SaveCert] [-Silent]
```

## DESCRIPTION
This function uses System.Net.Sockets.Tcpclient and System.Net.Security.SslStream to connect to a ComputerName and 
authenticate via TLS.
This is useful to check if a TLS connection can be established and if the certificate used on 
the remote computer is trusted on the local machine.
If the connection can be established, the certificate's properties will be output as custom object.
Optionally the certificate can be downloaded using the -SaveCert switch.

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
Test-TlsConnection -ComputerName www.ntsystems.it
```

This example connects to www.ntsystems.it on port 443 (default) and outputs the certificate's properties.

### -------------------------- EXAMPLE 2 --------------------------
```
Test-TlsConnection -ComputerName sipdir.online.lync.com -Port 5061 -SaveCert
```

This example connects to sipdir.online.lync.com on port 5061 and saves the certificate to the temp folder.

## PARAMETERS

### -ComputerName
Specifies the DNS name of the computer to test

```yaml
Type: Object
Parameter Sets: (All)
Aliases: HostName, Server, RemoteHost, Name

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Port
Specifies the TCP port on which the TLS service is running on the computer to test

```yaml
Type: Object
Parameter Sets: (All)
Aliases: RemotePort

Required: False
Position: 2
Default value: 443
Accept pipeline input: False
Accept wildcard characters: False
```

### -FilePath
Specifies a path to a file (.cer) where the certificate should be saved if the SaveCert switch parameter is used

```yaml
Type: FileInfo
Parameter Sets: (All)
Aliases: 

Required: False
Position: 3
Default value: "$env:TEMP\$computername.cer"
Accept pipeline input: False
Accept wildcard characters: False
```

### -SaveCert
Saves the remote certificate to a file, the path can be specified using the FilePath parameter

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

### -Silent
Only returns true or false, instead of a custom object with some information.

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

## INPUTS

## OUTPUTS

### System.Management.Automation.PSObject

### System.Boolean

## NOTES

## RELATED LINKS

