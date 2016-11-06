---
layout: post
title: "Show-EtcHosts"
date: 2016-10-27 12:35:25 +0200
comments: true
author: thomas torggler
category: TAK
tags: OnlineHelp Lync PowerShell
---

## SYNOPSIS 

Display \etc\hosts file content.

<!-- more -->

## SYNTAX 

```powershell
Show-EtcHosts [<CommonParameters>]
```

## DESCRIPTION 

This funtion gets the content of the hosts file, parses the lines and outputs a custom object with HostName and IPAddress properties.
