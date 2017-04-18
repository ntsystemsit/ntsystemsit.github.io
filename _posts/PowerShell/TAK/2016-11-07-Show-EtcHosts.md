---
author: thomas torggler
category: TAK
external help file: tak-help.xml
layout: post
online version: 
schema: 2.0.0
tags: OnlineHelp PowerShell
title: Show-EtcHosts
---

# Show-EtcHosts

## SYNOPSIS
Display \etc\hosts file content.

## SYNTAX

```
Show-EtcHosts
```

## DESCRIPTION
This funtion gets the content of the hosts file, parses the lines and outputs 
a custom object with HostName and IPAddress properties.

## EXAMPLES

### Example 1
```
PS C:\> Show-EtcHosts

HostName                 IPAddress
--------                 ---------
localhost                127.0.0.1
broadcasthost            255.255.255.255
...
```

This example parses content from the local \etc\hosts file and outputs a custom object.

## PARAMETERS

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

