---
author: tto
category: PSSpeech
date: 2020-12-22
excerpt: 'Get OAuth token for authorization to Azure Cognitive Services.'
external help file: psspeech-help.xml
layout: post
Module Name: PSSpeech
online version:
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Get-SpeechToken
---

# Get-SpeechToken

## SYNOPSIS
Get OAuth token for authorization to Azure Cognitive Services.

## SYNTAX

```
Get-SpeechToken [-Region] <String> [-Key] <String> [<CommonParameters>]
```

## DESCRIPTION
This function uses Invoke-RestMethod to get a bearer token that can be used in the Authorization header when calling 
Azure Cognitive Services.
This requires access to an Azure subscription and API key for the speech service.

## EXAMPLES

### EXAMPLE 1
```
Get-SpeechToken -Region <region> -Key <apikey>
```

This example gets a token using the provided key and region.

## PARAMETERS

### -Region
{{ Fill Region Description }}

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

### -Key
{{ Fill Key Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None.
## OUTPUTS

### [psobject]
## NOTES
Key should probably be a secure string, update once secrets management module is released.
The token is stored in $script:SpeechToken and can be retrieved with Get-SpeechTokenResult

## RELATED LINKS
