---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
online version: 
schema: 2.0.0
tags: OnlineHelp PowerShell
title: ConvertFrom-SID
excerpt: "Get the account name for a SID."
---

# ConvertFrom-SID

## SYNOPSIS
Get the account name for a SID.

## SYNTAX

```
ConvertFrom-SID [-SID] <SecurityIdentifier>
```

## DESCRIPTION
Use \[System.Security.Principal.SecurityIdentifier\].Translate() to get the samAccountName for a SID

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
ConvertFrom-SID -Sid S-1-5-21-2330142668-2157844774-769409458
```

### -------------------------- EXAMPLE 2 --------------------------
```
"S-1-3-1" | ConvertFrom-SID
```

## PARAMETERS

### -SID
SID, specify the SID to translate.

```yaml
Type: SecurityIdentifier
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

