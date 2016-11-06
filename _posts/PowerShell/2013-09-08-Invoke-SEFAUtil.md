---
layout: post
title: "Invoke-SEFAUtil"
date: 2013-09-08 17:49:00 +0200
comments: true
author: thomas torggler
category: PowerShell
tags: PowerShell OnlineHelp Lync
redirect_from: ["/page/PS-Invoke-SEFAUtilps1", "/page/ps-invoke-sefautilps1"]
---

This is a wrapper function for the SEFAUtil.exe tool from the Lync Resource Kit Tools. It's intended purpose is to make dealing with the cmdline tool easier.

<!-- more -->

## SYNTAX

```powershell
.\Invoke-SEFAUtil.ps1 [[-Path] <FileInfo>] [-Server] <String> [-InputObject <Object>] [[-Username] <String[]>] [[-LogFile] <FileInfo>] [-AddTeamMember <String>] [-RemoveTeamMember <String>] [-DelayRingTeam <Int32>] [-DisableTeamCall] [-SimulRingTeam] [-WhatIf] [-Confirm] [<CommonParameters>]

.\Invoke-SEFAUtil.ps1 [[-Path] <FileInfo>] [-Server] <String> [-InputObject <Object>] [[-Username] <String[]>] [[-LogFile] <FileInfo>] [-AddDelegate <String>] [-RemoveDelegate <String>] [-DelayRingDelegates <Int32>] [-FwdToDelegates] [-SimulRingDelegates] [-DisableDelegation] [-WhatIf] [-Confirm] [<CommonParameters>]

.\Invoke-SEFAUtil.ps1 [[-Path] <FileInfo>] [-Server] <String> [-InputObject <Object>] [[-Username] <String[]>] [[-LogFile] <FileInfo>] [-EnableSimulRing <String>] [-DisableSimulRing] [-WhatIf] [-Confirm] [<CommonParameters>]

.\Invoke-SEFAUtil.ps1 [[-Path] <FileInfo>] [-Server] <String> [-InputObject <Object>] [[-Username] <String[]>] [[-LogFile] <FileInfo>] [-EnableFwdNoAnswer <String>] [-EnableFwdImmediate <String>] [-CallAnswerwaitTime <Int32>] [-DisableFwdImmediate] [-DisableFwdNoAnswer] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The default Value for the Path parameter assumes Lync 2013 Resource Kit Tools are installed at `C:\Program Files\Microsoft Lync Server 2013\ResKit`. This function requires version 3 of PowerShell as well as the Lync Module for user validation. Note: Check the related links for a really cool GUI wrapper by MVP Johan Veldhuis.

## RELATED LINKS

- [Invoke-SEFAUtil – a PowerShell wrapper function](https://ntsystems.it/post/invoke-sefautil-a-powershell-wrapper-function)
- [Updated: Invoke-SEFAUtil](https://ntsystems.it/post/updated-invoke-sefautil)
- [SefaUtil GUI](https://johanveldhuis.nl/sefautil-gui/sefautil-gui/)
- [Skype for Business Server 2015 Resource Kit Tools Documentation](http://technet.microsoft.com/en-us/library/jj945604.aspx)


## EXAMPLE 1

```powershell
.\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Username thomas@tomt.it 
```

This example invokes SEFAUtil without additional parameters, call forwarding settings for the user thomas@tomt.it are shown.

## EXAMPLE 2

```powershell
.\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Username thomas@tomt.it -EnableSimulRing +391231234567
```

This example enables Simul Ring for the user thomas@tomt.it. The destination number for Simul Ring is +391231234567.

## EXAMPLE 3

```powershell
.\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Username thomas@tomt.it -AddTeamMember user10@tomt.it
``` 

This example adds user10@tomt.it to thomas@tomt.it. This will also enable Simul Ring for the user.

## EXAMPLE 4

```powershell
.\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Username thomas@tomt.it -DelayRingTeam 10 
```

This example set's the delay for Team Calls to 10 seconds for the user thomas@tomt.it

## EXAMPLE 5

```powershell
.\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Username thomas@tomt.it –DisableTeamCall
```

This example disables Team Call for thomas@tomt.it

## EXAMPLE 6

```powershell 
Get-CsUser -OU "OU=users,OU=tomt,DC=tomt,DC=local" | .\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Verbose -AddDelegate thomas@tomt.it
```

This example uses Get-CsUser to get all Lync Users from within the specified Organizational Unit and adds thomas@tomt.it as delegate.

{% include psgallery.html packagename="Invoke-SEFAUtil" type="Script" reponame="PowerShell" %}