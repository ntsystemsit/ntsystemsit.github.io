---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
online version: 
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Connect-SfB
redirect_from: ["/PowerShell/TAK/Connect-Lync/", "/PowerShell/TAK/connect-lync/"]
---

# Connect-SfB

## SYNOPSIS
A quick function to connect to Lync Servers. 

## SYNTAX

```
Connect-SfB [-Server] <Object> [-Credential <PSCredential>]
```

## DESCRIPTION
A wrapper function for New- and Import-PSSession to make connecting to remote Lync Servers easier.

## EXAMPLES

### Example 1
```
PS C:\> Connect-SfB s4bfe01.ntsystems.it -Credential (Get-Credential)
```

This example prompts the user for credentials and connects to the server at s4bfe01.ntsystems.it using the specified credentials.

## PARAMETERS

### -Credential
Specify the account used to connect to the Server.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
Specify the name of the Skype for Business / Lync Server to connect to.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

## INPUTS

### System.Object


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

