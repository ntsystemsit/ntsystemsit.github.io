---
author: tto
category: TAK
date: 2021-01-02
excerpt: 'Convert a String to Base64'
external help file: tak-help.xml
layout: post
Module Name: TAK
online version:
redirect_from: ["https://onprem.wtf/PowerShell/TAK/ConvertTo-Base64", "https://onprem.wtf/PowerShell/TAK/convertto-base64", "https://onprem.wtf/PowerShell/convertto-base64"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: ConvertTo-Base64
---

# ConvertTo-Base64

## SYNOPSIS
Convert a String to Base64

## SYNTAX

```
ConvertTo-Base64 [-String] <String[]> [[-Encoding] <Object>] [<CommonParameters>]
```

## DESCRIPTION
This Function uses \[System.Convert\] to convert a ClearText String to Base64.
The Encoding parameter can be used to specify which encoding to use.
Believe it or not, works on Linux/macOS!

## EXAMPLES

### EXAMPLE 1
```
ConvertTo-Base64 'my cleartext'
```

This example converts 'my cleartext' to Base64 using 'Default' encoding.

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
