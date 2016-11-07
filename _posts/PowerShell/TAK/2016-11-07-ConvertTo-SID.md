---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
online version: 
schema: 2.0.0
tags: OnlineHelp PowerShell
title: ConvertTo-SID
---

# ConvertTo-SID

## SYNOPSIS
Get the SID for an account name

## SYNTAX

```
ConvertTo-SID [-SamAccountName] <NTAccount>
```

## DESCRIPTION
Use \[System.Security.Principal.SecurityIdentifier\].Translate() to get the SID for a samAccountName

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
ConvertTo-SID -SamAccountName ttorggler
```

### -------------------------- EXAMPLE 2 --------------------------
```
"ntsystems\ttorggler" | ConvertTo-SID
```

## PARAMETERS

### -SamAccountName
SamAccountName, specify the account name to translate.

```yaml
Type: NTAccount
Parameter Sets: (All)
Aliases: Value

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

## INPUTS

### You can pipe input to this function.

## OUTPUTS

### Returns string values.

## NOTES

## RELATED LINKS

