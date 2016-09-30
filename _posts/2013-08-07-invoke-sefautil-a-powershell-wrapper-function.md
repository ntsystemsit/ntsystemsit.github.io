---
layout: post
title: "Invoke-SEFAUtil – a PowerShell wrapper function"
date: 2013-08-07 22:18:00 +0200
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["en", "Lync", "PowerShell"]
alias: ["/post/Invoke-SEFAUtil-a-PowerShell-wrapper-function.aspx", "/post/invoke-sefautil-a-powershell-wrapper-function.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>I had to use SEFAUtil to get some tasks done the other day. As I prefer using PowerShell over just another command line tool, I decided to come up with a quick wrapper function that is intended to make my life a little easier.</p>
<p>If you don&rsquo;t know what SEFAUtil is and how to configure it, check out this <a href="http://blogs.technet.com/b/jenstr/archive/2010/12/07/how-to-get-sefautil-running.aspx" target="_blank">great post.</a>Or <a href="http://www.msxfaq.de/lync/sefautil.htm" target="_blank">this one</a> if you prefer German ;) In a nutshell, it&rsquo;s a command line tool to configure Lync Voice Features (like call forwarding, team call) on behalf of end-users.</p>
<p><strong>Warning: I do not recommend using this in production without understanding what it does, although I did test it in my lab, it may break something!</strong></p>
<p>Ok, having that said, how do I use thins thing? First of all you will need a copy of this script on the computer where you have been running SEFAUtil until now. As the computer is authenticated using a certificate, you will not be able to run this from anywhere. Once you downloaded the script, start a Lync Management Shell and use it like in the following examples.</p>
<p>What I did in this script, is basically wrap PowerShell around SEFAUtil.exe, I did add some parameter validation, it can only run against Lync users for example. It does write a logfile to the $temp directory and supports PowerShells common parameters like &ndash;Verbose and &ndash;WhatIf.</p>
<h1>Examples</h1>
<p>.\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Username thomas@tomt.it</p>
<p>This example invokes SEFAUtil without additional parameters, call forwarding settings for the user thomas@tomt.it are shown. <br />---</p>
<p>.\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Username thomas@tomt.it -EnableSimulRing +391231234567</p>
<p>This example enables Simul Ring for the user thomas@tomt.it. The destination number for Simul Ring is +391231234567. <br />---</p>
<p>.\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Username thomas@tomt.it -AddTeamMember user10@tomt.it</p>
<p>This example adds user10@tomt.it to thomas@tomt.it. This will also enable Simul Ring for the user. <br />---</p>
<p>.\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Username thomas@tomt.it -DelayRingTeam 10</p>
<p>This example set's the delay for Team Calls to 10 seconds for the user <a href="mailto:thomas@tomt.it">thomas@tomt.it</a> <br />---</p>
<p>.\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Username thomas@tomt.it -DisableTeamCall</p>
<p>This example disables Team Call for thomas@tomt.it</p>
<p>---</p>
<h1>Download</h1>
<p>The latest version of the script can be found here:</p>
<p><iframe src="https://skydrive.live.com/embed?cid=9BFCE0941114C6E8&amp;resid=9BFCE0941114C6E8%2113252&amp;authkey=ACsbIC9ezwzD9-w" frameborder="0" scrolling="no" width="165" height="128"></iframe></p>
<p>Note: The script requires the Lync Module to be available on the Computer where it will be run, it does also require PowerShell version 3.</p>
<p>Note: Changing the CallAnswerTime only does not work, a limitation of the SEFAUtil.exe does not allow this setting to be changed without also configuring CallForwarding</p>
<p>&nbsp;</p>
<p>so long, <br />tom</p>
