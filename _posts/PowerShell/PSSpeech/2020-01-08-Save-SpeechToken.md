---
author: thomas torggler
category: PSSPEECH
layout: post
Module Name: PSSpeech
online version:
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
Explanation of what the example does
```

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
