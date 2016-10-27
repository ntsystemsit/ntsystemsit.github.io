---
layout: post
title: "Test-LyncDNS"
date: 2016-10-27 12:35:25 +0200
comments: true
author: thomas torggler
category: TAK
tags: OnlineHelp Lync PowerShell
---
# Test-LyncDNS

## SYNOPSIS
Test DNS entries for Lync deployments.
<!-- more -->

## SYNTAX
```powershell
Test-LyncDNS [-SipDomain] <String> [[-NameServer] <IPAddress>] [-OpenDNS] [-internal] [-testConnection] [<CommonParameters>]
```

## DESCRIPTION
This function uses Resolve-DnsName to query well-known DNS records for Lync deployments.
The NameSever parameter can be used to specify a nameserver.

## PARAMETERS
### -SipDomain &lt;String&gt;
Specifies the DNS domain name to test
```
Required?                    true
Position?                    1
Default value
Accept pipeline input?       false
Accept wildcard characters?  false
```
 
### -NameServer &lt;IPAddress&gt;
Specifies the nameserver which is used by Resolve-DnsName
```
Required?                    false
Position?                    2
Default value
Accept pipeline input?       false
Accept wildcard characters?  false
```
 
### -OpenDNS &lt;SwitchParameter&gt;
A quick way to use OpenDns servers instead of using NameServer
```
Required?                    false
Position?                    named
Default value                False
Accept pipeline input?       false
Accept wildcard characters?  false
```
 
### -internal &lt;SwitchParameter&gt;
Do also query for internal records, they should only resolve when testing from the internal network
```
Required?                    false
Position?                    named
Default value                False
Accept pipeline input?       false
Accept wildcard characters?  false
```
 
### -testConnection &lt;SwitchParameter&gt;
Do also test a TLS connection to the servers received from the query
```
Required?                    false
Position?                    named
Default value                False
Accept pipeline input?       false
Accept wildcard characters?  false
```

## INPUTS


## OUTPUTS


## NOTES


## EXAMPLES
### EXAMPLE 1
```powershell
PS C:\>Test-LyncDNS -SipDomain uclab.eu

This example queries DNS records for the domain uclab.eu
```