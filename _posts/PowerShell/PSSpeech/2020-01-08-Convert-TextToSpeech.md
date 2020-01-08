---
author: thomas torggler
category: PSSPEECH
layout: post
Module Name: PSSpeech
online version:
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Convert-TextToSpeech
---

# Convert-TextToSpeech

## SYNOPSIS
Convert a string to audio using Azure Cognitive Services.

## SYNTAX

```
Convert-TextToSpeech [[-Region] <Object>] [[-Token] <Object>] [-Text] <String> [-Path] <FileInfo>
 [[-Voice] <Object>] [[-OutputFormat] <Object>] [<CommonParameters>]
```

## DESCRIPTION
This function uses Invoke-RestMethod to call the Azure Cognitive Service Speech Service API, convert a string to speech, and save the resulting audio to a file.

## EXAMPLES

### EXAMPLE 1
```
Convert-TextToSpeech -Text "Hi, this is a test." -Path test.mp3
This example converts the string "Hi, this is a test." to speech and saves the audio to the test.mp3 file.
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

### -Text
{{ Fill Text Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
{{ Fill Path Description }}

```yaml
Type: FileInfo
Parameter Sets: (All)
Aliases:

Required: True
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Voice
{{ Fill Voice Description }}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: En-GB-HarryNeural
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputFormat
{{ Fill OutputFormat Description }}

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
Default value: Audio-16khz-32kbitrate-mono-mp3
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None.
## OUTPUTS

### None.
## NOTES
General notes

## RELATED LINKS
