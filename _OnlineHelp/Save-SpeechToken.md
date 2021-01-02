---
author: tto
category: PSSpeech
date: 2021-01-02
excerpt: 'Save a token for the current session.'
external help file: psspeech-help.xml
layout: post
Module Name: PSSpeech
online version:
redirect_from: ["/PowerShell/PSSpeech/Save-SpeechToken", "/PowerShell/PSSpeech/save-speechtoken", "/PowerShell/save-speechtoken"]
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Save-SpeechToken
---

# Save-SpeechToken

## SYNOPSIS
Save a token for the current session.

## SYNTAX

```
Save-SpeechToken [[-Token] <Object>] [<CommonParameters>]
```

## DESCRIPTION
This function takes a token as retreived from Get-SpeechToken and creates a variable in the global scope and saves the token.

## EXAMPLES

### EXAMPLE 1
```
Get-SpeechToken -Key <yourkey> | Save-SpeechToken
```

This example first gets a token then saves it to a global variable in the current PowerShell session.

### EXAMPLE 2
```
Get-SpeechToken -Key <yourkey> -OutVariable token
PS C:\> Save-SpeechToken -Token $token
```

This example first gets a token then saves it to a global variable in the current PowerShell session.

## PARAMETERS

### -Token
{{ Fill Token Description }}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### [psobject]
## OUTPUTS

### None.
## NOTES

## RELATED LINKS
