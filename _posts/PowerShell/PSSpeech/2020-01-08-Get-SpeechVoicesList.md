---
author: thomas torggler
category: PSSPEECH
layout: post
Module Name: PSSpeech
online version:
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Get-SpeechVoicesList
---

# Get-SpeechVoicesList

## SYNOPSIS
Get a list of available voices from the speech service.

## SYNTAX

```
Get-SpeechVoicesList [[-Region] <Object>] [[-Token] <Object>] [<CommonParameters>]
```

## DESCRIPTION
This function uses Invoke-RestMethod to get a list of available voices from the Azure Cognitive Services Speech Service.
Use the Token parameter
to specify a token created with Get-SpeechToken and use the Region parameter to specify a region other than the default westeurope.
If the Token parameter is not specified, the global variable created by Save-SpeechToken is used.

## EXAMPLES

### EXAMPLE 1
```
Get-SpeechVoicesList
This example gets a list of available voices.
```

## PARAMETERS

### -Region
{{ Fill Region Description }}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: Westeurope
Accept pipeline input: False
Accept wildcard characters: False
```

### -Token
{{ Fill Token Description }}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: $Global:PSSpeechToken
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
General notes

## RELATED LINKS