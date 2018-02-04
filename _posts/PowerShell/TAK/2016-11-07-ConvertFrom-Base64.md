---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
online version: 
schema: 2.0.0
tags: OnlineHelp PowerShell
title: ConvertFrom-Base64
excerpt: "Convert Base64 to ClearText String."
---

# ConvertFrom-Base64

## SYNOPSIS
Convert Base64 to ClearText String.

## SYNTAX

```
ConvertFrom-Base64 [-String] <String[]>
```

## DESCRIPTION
This Function uses \[System.Convert\] to convert Base64 encoded String to ClearText.

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
ConvertFrom-Base64 'YXdlc29tZSwgaXMgaXQ/'
```

## PARAMETERS

### -String
One or more Strings to be converted

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

