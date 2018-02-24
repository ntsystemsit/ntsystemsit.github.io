---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
Module Name: tak
online version:
redirect_from: ["/post/convertfrom-base64"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: ConvertFrom-Base64
---

# ConvertFrom-Base64

## SYNOPSIS
Convert Base64 to ClearText String

## SYNTAX

```
ConvertFrom-Base64 [-String] <String[]> [<CommonParameters>]
```

## DESCRIPTION
This Function uses \[System.Convert\] to convert Base64 encoded String to ClearText.
Beleive it or not, works on Linux/macOS!

## EXAMPLES

### EXAMPLE 1
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
