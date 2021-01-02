---
author: tto
category: tak
date: 2021-01-02
excerpt: "Get hash for a string."
external help file: tak-help.xml
layout: pshelp
Module Name: TAK
online version:
redirect_from: ["/PowerShell/TAK/Get-TakHash", "/PowerShell/TAK/get-takhash", "/PowerShell/get-takhash"]
schema: 2.0.0
title: Get-TakHash
---

# Get-TakHash

## SYNOPSIS
Get hash for a string.

## SYNTAX

```
Get-TakHash [-String] <String> [[-Algorithm] <Object>] [<CommonParameters>]
```

## DESCRIPTION
This function uses various various crypto service providers to get the hash value for a given input string.

## EXAMPLES

### EXAMPLE 1
```
Get-TakHash "Hello World!"
```

This example returns the MD5 hash of "Hello World!".

### EXAMPLE 2
```
Get-TakHash "Hello World!" -Algorithm Sha256
```

This example gets the SHA256 hash of "Hello World!".

## PARAMETERS

### -String
{{ Fill String Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Algorithm
{{ Fill Algorithm Description }}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
