---
layout: post
title: "Remove-EtcHostsEntry"
date: 2016-10-27 12:35:25 +0200
comments: true
author: thomas torggler
category: TAK
tags: OnlineHelp Lync PowerShell
---
# Remove-EtcHostsEntry

## SYNOPSIS 
Remove an entry from local hosts file by it's IP address.
<!-- more -->

## SYNTAX 

```powershell
Remove-EtcHostsEntry [[-IPAddress] <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Find an IP address and remove all lines where it appears from the \etc\hosts file of the local computer.