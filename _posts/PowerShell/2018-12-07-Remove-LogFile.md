---
layout: post
title:  "Remove-LogFile"
comments: true
author: thomas torggler
category: PowerShell
tags: ["PowerShell", "OnlineHelp"]
excerpt: "Remove log files."
---

## SYNOPSIS
Deletes log files.

## SYNTAX

```
Remove-LogFile.ps1 -Path <Object> [-Age <Int32>] [-Filter <String>] [-LogFile <FileInfo>] [-Recurse] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Deletes log files, parameters can be used to specify the root folder, whether or not to include subfolders, a file extension filter and the age. This is intended to be run as scheduled task to regularly clean-up log files. 

## EXAMPLES

### Example 1
```powershell
.\Remove-LogFile.ps1 -Path C:\inetpub\logs -Age 7 -Recurse
```

This example removes all *.log files older than 7 days from C:\inetpub\logs and any subfolders.

## PARAMETERS

### -Age
Specify a number of days. Files with a LastWriteTime older than this will be deleted.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Specify file extension filter. Defaults to '*.log'.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogFile
Specify a path to a log file. The script will log information and erros to the file.

```yaml
Type: FileInfo
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
Specify folder in which logs will be deleted.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Recurse
Include subfolders.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
