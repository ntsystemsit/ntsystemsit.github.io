---
layout: post
title: "Invoke-SEFAUtil – a PowerShell wrapper function"
date: 2013-08-07 22:18:00 +0200
comments: true
category: PowerShell
tags: ["en", "Lync", "PowerShell", "Skype4B"]
redirect_from: ["/post/Invoke-SEFAUtil-a-PowerShell-wrapper-function", "/post/invoke-sefautil-a-powershell-wrapper-function"]
author: thomas torggler
date_modified: 2018-03-01
---

I had to use SEFAUtil to get some tasks done the other day. As I prefer using PowerShell over just another command line tool, I decided to come up with a quick wrapper function that is intended to make my life a little easier.

<!-- more -->

If you don't know what SEFAUtil is and how to configure it, check out this [great post](http://blogs.technet.com/b/jenstr/archive/2010/12/07/how-to-get-sefautil-running.aspx) or [this one](http://www.msxfaq.de/lync/sefautil.htm) if you prefer German ;) In a nutshell, it's a command line tool to configure Skype for Business (Lync) Voice Features (like call forwarding, team call) on behalf of end-users.

**Warning:** I do not recommend using this in production without understanding what it does, although I did test it in my lab, it may break something!

Ok, having that said, how do I use thins thing? First of all you will need a copy of this script on the computer where you have been running SEFAUtil until now. As the computer is authenticated using a certificate (it must be configured as a trusted application), you will not be able to run this from anywhere. Once you've downloaded the script, start a Skype for Business Management Shell and use like in the following examples:

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


The complete online help can be found [here]({{ site.baseurl }}/PowerShell/Invoke-SEFAUtil/)


What I did in this script, is basically wrap PowerShell around SEFAUtil.exe, I did add some parameter validation, it can only run against Lync users for example. It does write a logfile to the $temp directory and supports PowerShells common parameters like _Verbose_ and _WhatIf_.


{% include psgallery.html packagename="Invoke-SEFAUtil" type="Script" reponame="PowerShell" %}


> Note: The script requires the Lync Module to be available on the Computer where it will be run, it does also require PowerShell version 3.

> Note: Changing the CallAnswerTime only does not work, a limitation of the SEFAUtil.exe does not allow this setting to be changed without also configuring CallForwarding


so long,

Tom 

