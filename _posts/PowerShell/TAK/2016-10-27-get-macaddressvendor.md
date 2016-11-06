---
layout: post
title: "Get-MacAddressVendor"
date: 2016-10-27 12:35:25 +0200
comments: true
author: thomas torggler
category: TAK
tags: OnlineHelp Lync PowerShell
---

## SYNOPSIS

Mac Address vendor lookup.

<!-- more -->

## SYNTAX

```powershell
Get-MacAddressVendor [-MacAddress] <Object> [<CommonParameters>]
```

## DESCRIPTION

This function uses Invoke-WebRequest to look up the vendor of a Mac Address' Organizationally Unique Identifier (OUI).

## PARAMETERS

```powershell
-MacAddress <Object>
Specifiy a MAC Address to look up

Required?                    true
Position?                    1
Default value
Accept pipeline input?       true (ByPropertyName)
Accept wildcard characters?  false
```

## INPUTS
You can pipe objects with a `MacAddress` property to this function.

## OUTPUTS
`[PSObject]` This functions writes a custom object to the pipeline.

## EXAMPLE 1

```powershell
PS C:\>Get-MacAddressVendor -MacAddress '00-50-56-C0-00-01','00:0F:FE:E8:4F:27'
```

This example looks up the vendor for the two specified Mac Addresses.
 
## EXAMPLE 2

```powershell
PS C:\>Get-NetAdapter | Get-MacAddressVendor
```

This example looks up the vendor of all network adapters returned by Get-NetAdapter.

## EXAMPLE 3

```powershell
PS C:\>Get-NetAdapterConfig -ComputerName Server01.domain.local | Get-MacAddressVendor
```

This example looks up the vendor of all network adapters returned by Get-NetAdapterConfig which supports remoting.

## EXAMPLE 4

```powershell
PS C:\>Get-DhcpServerv4Lease -ComputerName DhcpServer -ScopeId 192.168.1.0 | Get-MacAddressVendor
```

This example looks up the vendor of all currently assigned address leases on a DHCP Server.

## EXAMPLE 5

```powershell
Get-MacAddressVendor -MacAddress a0:99:9b

Name                           Value                                                                                                      ----                           -----                                                                                                      MacAddress                     a0999b                                                                                                     Country                        United States
Vendor                         Apple
OUI                            A0999B000000-A0999BFFFFFF

```
