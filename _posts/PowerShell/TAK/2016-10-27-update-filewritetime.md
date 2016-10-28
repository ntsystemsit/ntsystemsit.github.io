---
layout: post
title: "Update-FileWriteTime"
date: 2016-10-28 12:35:25 +0200
comments: true
author: thomas torggler
category: TAK
tags: OnlineHelp PowerShell
---
# Update-FileWriteTime


## SYNOPSIS
Touch a file.


## SYNTAX
```powershell
Update-FileWriteTime [-Name] <String[]> [-Date <DateTime>] [<CommonParameters>]
```


## DESCRIPTION
This function checks whether a given file exists, and if so, updates the LastWriteTime property of the given file. Should the file not exist, a new, empty file is created. This function works on Linux/macOS


## PARAMETERS
```powershell
-Name <String[]>
    One or more filenames to be touched
    
    Required?                    true
    Position?                    1
    Default value
    Accept pipeline input?       true (ByValue)
    Accept wildcard characters?  false

-Date <DateTime>
    Specify a specific date for LastWriteTime

    Required?                    false
    Position?                    named
    Default value                (Get-Date)
    Accept pipeline input?       false
    Accept wildcard characters?  false

<CommonParameters>
    This cmdlet supports the common parameters: Verbose, Debug,
    ErrorAction, ErrorVariable, WarningAction, WarningVariable,
    OutBuffer, PipelineVariable, and OutVariable. For more information, see
    about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).
```


## EXAMPLE 1
```powershell
PS C:\>touch myfile
```


This example creates myfile if it does not exist in the current directory.
If the file does exist, the LastWriteTime property will be updated.