---
layout: post
title: "Invoke-SEFAUtil"
date: 2013-09-08 17:49:00 +0200
comments: true
published: true
tags: ["blog", "archives", "PowerShell"]
excerpt_separator: <!-- more -->
redirect_from: ["/page/PS-Invoke-SEFAUtilps1", "/page/ps-invoke-sefautilps1"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>This is a wrapper function for the SEFAUtil.exe tool from the Lync Resource Kit Tools. It's intended purpose is to make dealing with the cmdline tool easier.</p>  <p>The default Value for the Path parameter assumes Lync 2013 Resource Kit Tools are installed at C:\Program Files\Microsoft Lync Server 2013\ResKit.</p>  <p>This function requires version 3 of PowerShell as well as the Lync Module for user validation.</p>  <p>Note: Check the related links for a really cool GUI wrapper by MVP Johan Veldhuis.</p>  <h1>Example 1</h1>  <p>.\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Username thomas@tomt.it </p>  <p>This example invokes SEFAUtil without additional parameters, call forwarding settings for the user thomas@tomt.it are shown.</p>  <h1>Example 2</h1>  <p>.\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Username thomas@tomt.it -EnableSimulRing +391231234567 </p>  <p>This example enables Simul Ring for the user thomas@tomt.it. The destination number for Simul Ring is +391231234567.</p>  <h1>Example 3</h1>  <p>.\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Username thomas@tomt.it -AddTeamMember user10@tomt.it </p>  <p>This example adds user10@tomt.it to thomas@tomt.it. This will also enable Simul Ring for the user.</p>  <h1>Example 4</h1>  <p>.\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Username thomas@tomt.it -DelayRingTeam 10 </p>  <p>This example set's the delay for Team Calls to 10 seconds for the user <a href="mailto:thomas@tomt.it">thomas@tomt.it</a></p>  <h1>Example 5</h1>  <p>.\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Username thomas@tomt.it –DisableTeamCall</p>  <p>This example disables Team Call for <a href="mailto:thomas@tomt.it">thomas@tomt.it</a></p>  <h1>Example 6</h1>  <p>Get-CsUser -OU "OU=users,OU=tomt,DC=tomt,DC=local" | .\Invoke-SEFAUtil.ps1 -Server ly15.tomt.local -Verbose -AddDelegate <a href="mailto:thomas@tomt.it">thomas@tomt.it</a></p>  <p>This example uses Get-CsUser to get all Lync Users from within the specified Organizational Unit and adds <a href="mailto:thomas@tomt.it">thomas@tomt.it</a> as delegate.</p>  <p></p>  <h1>Related Links</h1>  <p><a href="/post/Invoke-SEFAUtil-a-PowerShell-wrapper-function.aspx">/post/Invoke-SEFAUtil-a-PowerShell-wrapper-function.aspx</a>     <br><a href="http://technet.microsoft.com/en-us/library/jj945604.aspx">http://technet.microsoft.com/en-us/library/jj945604.aspx</a>     <br><a title="http://johanveldhuis.nl/en/sefautil-gui/" href="http://johanveldhuis.nl/en/sefautil-gui/">http://johanveldhuis.nl/en/sefautil-gui/</a></p>  <h1>Download&nbsp;</h1><strong>&nbsp; </strong><p>I uploaded the Script to the <a href="https://www.powershellgallery.com/packages/Invoke-SEFAUtil" target="_blank"><font color="#428bca">PowerShell Gallery</font></a>, so you can easily download it&nbsp;using:</p><p><blockquote><p> Save-Script -Name Invoke-SEFAUtil -Path &lt;path&gt;&nbsp;&nbsp;<br></code></p><p>The latest version of the script can be found here:</p>  <p><iframe width="165" height="128" src="https://skydrive.live.com/embed?cid=9BFCE0941114C6E8&amp;resid=9BFCE0941114C6E8%2113252&amp;authkey=ACsbIC9ezwzD9-w" frameborder="0" scrolling="no"></iframe></p>