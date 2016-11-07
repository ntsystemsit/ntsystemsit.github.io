---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
online version: 
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Get-MacAddressVendor
---

# Get-MacAddressVendor

## SYNOPSIS
Mac Address vendor lookup.

## SYNTAX

```
Get-MacAddressVendor [-MacAddress] <Object>
```

## DESCRIPTION
This function uses Invoke-WebRequest to look up the vendor of a Mac Address' Organizationally Unique Identifier (OUI).

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
Get-MacAddressVendor -MacAddress '00-50-56-C0-00-01','00:0F:FE:E8:4F:27'
```

This example looks up the vendor for the two specified Mac Addresses.

### -------------------------- EXAMPLE 2 --------------------------
```
Get-NetAdapter | Get-MacAddressVendor
```

This example looks up the vendor of all network adapters returned by Get-NetAdapter.

### -------------------------- EXAMPLE 3 --------------------------
```
Get-NetAdapterConfig -ComputerName Server01.domain.local | Get-MacAddressVendor
```

This example looks up the vendor of all network adapters returned by Get-NetAdapterConfig which supports remoting.

### -------------------------- EXAMPLE 4 --------------------------
```
Get-DhcpServerv4Lease -ComputerName DhcpServer -ScopeId 192.168.1.0 | Get-MacAddressVendor
```

This example looks up the vendor of all currently assigned address leases on a DHCP Server.

## PARAMETERS

### -MacAddress
Specifiy a MAC Address to look up

```yaml
Type: Object
Parameter Sets: (All)
Aliases: ClientId, MA

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

### System.Management.Automation.PSObject

## NOTES

## RELATED LINKS

