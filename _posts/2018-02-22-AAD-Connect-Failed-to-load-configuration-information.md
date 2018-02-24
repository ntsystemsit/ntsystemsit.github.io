---
layout: post
title: "Azure AD Connect: Failed to load configuration information"
date: 2018-02-22 19:25:06 +0200
comments: true
category: Cloud
tags: Cloud Azure Office365
author: thomas torggler
---

When upgrading Azure AD Connect (ADSync), the wizard fails with the error: "Failed to load configuration information from primary ADFS server".

<!-- more -->

# Problem 

This can happen if the federation service was moved to a different machine after installing Azure AD Connect. Subsequent updates to the synchronization service fail with the above error message. This is because AD Connect stores the name of the original ADFS server in the _PersistedState_ XML file.

The fils is located at: _C:\ProgramData\AADConnect\PersistedState.xml_ 

The ADFS servername is stored in the _IAdfsContext.TargetAdfsServers_ property, oh and it's Base64 encoded. PowerShell can be used to easily read the file:

```powershell
[xml]$xml = Get-Content "C:\ProgramData\AADConnect\PersistedState.xml"
$xml.PersistedStateContainer.Elements.PersistedStateElement
```

# Solution

Simply update the value of the _IAdfsContext.TargetAdfsServers_ with the servername of the new ADFS machine, as the servername has to be Base64 encoded, the following PowerShell code can be used to convert a string:

```powershell
$name = "adfs01.example.com"
[System.Convert]::ToBase64String([System.Text.Encoding]::Unicode.GetBytes($name))
```

Cheers,

Tom