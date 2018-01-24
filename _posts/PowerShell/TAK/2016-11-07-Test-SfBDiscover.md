---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
online version: 
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Test-SfBDiscover
redirect_from: "/PowerShell/TAK/Test-LyncDiscover/"
---

# Test-SfBDiscover

## SYNOPSIS
Test the Lyncdiscover service for Skype for Business/Lync deployments

## SYNTAX

```
Test-SfBDiscover [-SipDomain] <String> [-Http] [-internal]
```

## DESCRIPTION
This function uses Invoke-WebRequest to test if the Lyncdiscover service is responding for a given domain.

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
Test-SfBDiscover -SipDomain uclab.eu -Http
```

This example gets Lyncdiscover information over http for the domain uclab.eu

## PARAMETERS

### -SipDomain
Specifies a DNS domain name to test

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

### -Http
Use HTTP instead of HTTPS

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
Use internal name (lyncdiscoverinternl) instead of the external one (lyncdiscover)

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

