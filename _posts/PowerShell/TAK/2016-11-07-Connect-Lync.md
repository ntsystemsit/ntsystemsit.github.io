---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
online version: 
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Connect-Lync
---

# Connect-Lync

## SYNOPSIS
A quick function to connect to Lync Servers. 

## SYNTAX

```
Connect-Lync [-Server] <Object> [-Credential <PSCredential>]
```

## DESCRIPTION
A wrapper function for New- and Import-PSSession to make connecting to remote Lync Servers easier.

## EXAMPLES

### Example 1
```
PS C:\> Connect-Exchange s4bfe01.ntsystems.it -Credential (Get-Credential)
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
Specify the name of the Lync Server to connect to.

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

