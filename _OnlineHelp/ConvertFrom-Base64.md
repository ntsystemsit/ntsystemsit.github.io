---
author: tto
category: TAK
date: 2021-01-02
excerpt: 'Convert Base64 to ClearText String'
external help file: tak-help.xml
layout: post
Module Name: TAK
online version:
redirect_from: ["/PowerShell/TAK/ConvertFrom-Base64", "/PowerShell/TAK/convertfrom-base64", "/PowerShell/convertfrom-base64"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: ConvertFrom-Base64
---

# ConvertFrom-Base64

## SYNOPSIS
Convert Base64 to ClearText String

## SYNTAX

```
ConvertFrom-Base64 [-String] <String[]> [[-Encoding] <Object>] [<CommonParameters>]
```

## DESCRIPTION
This Function uses \[System.Convert\] to convert Base64 encoded String to ClearText.
The Encoding parameter can be used to specify which encoding to use.
Believe it or not, works on Linux/macOS!

## EXAMPLES

### EXAMPLE 1
```
ConvertFrom-Base64 'YXdlc29tZSwgaXNuJ3QgaXQ/'
```

This example converts the given Base64 encoded string to clear text.

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

### -Encoding
The Encoding to use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: Default
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
