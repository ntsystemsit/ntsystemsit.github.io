---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
online version: 
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Test-SfBDNS
redirect_from: ["/PowerShell/TAK/Test-LyncDNS/", "/PowerShell/TAK/test-lyncdns/"]
---

# Test-SfBDNS

## SYNOPSIS
Test DNS entries for Skype for Business / Lync deployments.

## SYNTAX

```
Test-SfBDNS [-SipDomain] <String> [[-NameServer] <IPAddress>] [-OpenDNS] [-internal] [-testConnection]
```

## DESCRIPTION
This function uses Resolve-DnsName to query well-known DNS records for Skype for Business / Lync deployments.
The NameSever parameter can be used to specify a nameserver.

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
Test-SfBDNS -SipDomain uclab.eu
```

This example queries DNS records for the domain uclab.eu

## PARAMETERS

### -SipDomain
Specifies the DNS domain name to test

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NameServer
Specifies the nameserver which is used by Resolve-DnsName

```yaml
Type: IPAddress
Parameter Sets: (All)
Aliases: Server

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OpenDNS
A quick way to use OpenDns servers instead of using NameServer

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

### -internal
Do also query for internal records, they should only resolve when testing from the internal network

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

### -testConnection
Do also test a TLS connection to the servers received from the query

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

## NOTES

## RELATED LINKS

