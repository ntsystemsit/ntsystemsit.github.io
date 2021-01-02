---
layout: post
title:  "Send-SplunkEvent"
comments: true
author: thomas torggler
category: PowerShell
tags: ["PowerShell", "OnlineHelp"]
excerpt: "Send events to Splunk's HTTP Event Collector."
---


## SYNOPSIS
Send events to Splunk's HTTP Event Collector.

## SYNTAX

```
Send-SplunkEvent.ps1 [-InputObject] <Object> [[-HostName] <String>] [[-DateTime] <DateTime>] [[-Uri] <String>] [[-Key] <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This function uses Invoke-RestMethod to send structured data to Splunk HTTP Event Collector.
Use the 
HostName and DateTime parameters to control Splunk's 'host' and 'time' properties for the generated event.

## EXAMPLES

### EXAMPLE 1
```
.\Send-SplunkEvent.ps1 -InputObject @{message="Hello Splunk!"} -Key <token>
```

This example sends a simple event containing "message": "Hello Splunk!" to the event collector running on the local system.

### EXAMPLE 2
```
Import-Csv logs.csv | .\Send-SplunkEvent -Key <token> -HostName SBC1 -Uri "https://splunk01.example.com:8088/services/collector"
```

This example imports logs from a CSV file and sends each one of them to event collector running on splunk01.example.com.
The HostName parameter specifies which host created the logs.

## PARAMETERS

### -InputObject
Data object that will be sent to Splunk's HTTP Event Collector.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -HostName
HostName to be used for Splunk's 'host' property.
Default's to name of the local system.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: (hostname)
Accept pipeline input: False
Accept wildcard characters: False
```

### -DateTime
Date and Time of the event.
Defaults to now() on the local system.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: (Get-Date)
Accept pipeline input: False
Accept wildcard characters: False
```

### -Uri
URI of the Splunk HTTP Event Collector instance.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: Http://localhost:8088/services/collector
Accept pipeline input: False
Accept wildcard characters: False
```

### -Key
Key for the Splunk HTTP Event Collector instance.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### [psobject]

## OUTPUTS

### None.

## NOTES
Author: @torggler

## RELATED LINKS

[https://ntsystems.it/PowerShell/Send-SplunkEvent/](https://ntsystems.it/PowerShell/Send-SplunkEvent/)

{% include psgallery.html packagename="Send-SplunkEvent" type="Script" reponame="PowerShell" %}
