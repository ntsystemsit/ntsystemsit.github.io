---
author: tto
category: tak
date: 2021-01-02
excerpt: "Get the account name for a SID."
external help file: tak-help.xml
layout: pshelp
Module Name: tak
online version:
redirect_from: ["/PowerShell/tak/ConvertFrom-SID", "/PowerShell/tak/convertfrom-sid", "/PowerShell/convertfrom-sid"]
schema: 2.0.0
title: ConvertFrom-SID
---

# ConvertFrom-SID

## SYNOPSIS
Get the account name for a SID.

## SYNTAX

```
ConvertFrom-SID [-SID] <SecurityIdentifier> [<CommonParameters>]
```

## DESCRIPTION
Use \[System.Security.Principal.SecurityIdentifier\].Translate() to get the samAccountName for a SID

## EXAMPLES

### EXAMPLE 1
```
ConvertFrom-SID -Sid S-1-5-21-2330142668-2157844774-769409458
```

### EXAMPLE 2
```
"S-1-3-1" | ConvertFrom-SID
```

## PARAMETERS

### -SID
SID, specify the SID to translate.

```yaml
Type: SecurityIdentifier
Parameter Sets: (All)
Aliases: Value

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### You can pipe input to this function.
## OUTPUTS

### Returns string values.
## NOTES

## RELATED LINKS
