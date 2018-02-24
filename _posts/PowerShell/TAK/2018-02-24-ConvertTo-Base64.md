---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
Module Name: tak
online version:
redirect_from: ["/post/convertto-base64"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: ConvertTo-Base64
---

# ConvertTo-Base64

## SYNOPSIS
Convert a String to Base64

## SYNTAX

```
ConvertTo-Base64 [-String] <String[]> [<CommonParameters>]
```

## DESCRIPTION
This Function uses \[System.Convert\] to convert a ClearText String to Base64

## EXAMPLES

### EXAMPLE 1
```
ConvertTo-Base64 'my cleartext'
```

Beleive it or not, works on Linux/macOS!

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
