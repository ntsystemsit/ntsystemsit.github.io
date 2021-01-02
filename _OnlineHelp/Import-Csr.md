---
author: tto
category: TAK
date: 2021-01-02
excerpt: "Import certificate signing request from base64 text."
external help file: tak-help.xml
layout: pshelp
Module Name: tak
online version:
redirect_from: ["/PowerShell/tak/Import-Csr", "/PowerShell/tak/import-csr", "/PowerShell/import-csr"]
schema: 2.0.0
title: Import-Csr
---

# Import-Csr

## SYNOPSIS
Import certificate signing request from base64 text.

## SYNTAX

```
Import-Csr [[-Path] <FileInfo>] [-ShowText] [<CommonParameters>]
```

## DESCRIPTION
This function uses the Windows Subsystem for Linux to invoke \`openssl\` to decode a certificate signing request.

## EXAMPLES

### EXAMPLE 1
```
Import-Csr c:\temp\cert.req
```

This example imports a CSR located at the given path and decodes it's contents.

## PARAMETERS

### -Path
{{ Fill Path Description }}

```yaml
Type: FileInfo
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowText
{{ Fill ShowText Description }}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None
## OUTPUTS

### [psobject]
## NOTES
Author: @torggler
Date: 2019-06-14

## RELATED LINKS
