---
layout: post
title: "Connect to Office 365 with Powershell"
date: 2014-01-05 15:14:00 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["en", "Office 365"]
redirect_from: ["/post/Connect-to-Office-365-with-Powershell", "/post/connect-to-office-365-with-powershell"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>In this Post I explain how to connect to Office 365 with Powershell and manage Exchange and Lync.</p>
<p>1. Install Microsoft Online Services Sign-In Assistant for IT Professionals BETA <br /><a title="http://www.microsoft.com/en-us/download/details.aspx?id=39267" href="http://www.microsoft.com/en-us/download/details.aspx?id=39267">http://www.microsoft.com/en-us/download/details.aspx?id=39267</a></p>
<p>2. Install the Office 365 cmdlets <br /><a href="http://go.microsoft.com/fwlink/p/?linkid=236297">http://go.microsoft.com/fwlink/p/?linkid=236297</a></p>
<p>3. Set Execution Policy to Remote Signed <br /><em>Set-ExecutionPolicy RemoteSigned</em></p>
<p><strong>Exchange Online</strong></p>
<p>4. Connect to Exchange Online</p>
<p>Import-Module MSOnline <br />$ExchangeOnlineCred = Get-Credential <br />$ExchangeOnlineSession = New-PSSession &ndash;ConfigurationName Microsoft.Exchange -ConnectionUri <a href="https://ps.outlook.com/powershell">https://ps.outlook.com/powershell</a> -Credential $ExchangeOnlineCred -Authentication Basic -AllowRedirection <br />Import-PSSession $ExchangeOnlineSession -AllowClobber <br />Connect-MsolService &ndash;Credential $ExchangeOnlineCred</p>
<p>Now you are connected to Exchange Online:</p>
<p><a href="/assets/image_615.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_613.png" alt="image" width="244" height="119" border="0" /></a></p>
<p><br /><strong>Lync Online</strong></p>
<p>4. Install Windows PowerShell Module for Lync Online <br /><a title="http://www.microsoft.com/en-us/download/details.aspx?id=39366" href="http://www.microsoft.com/en-us/download/details.aspx?id=39366">http://www.microsoft.com/en-us/download/details.aspx?id=39366</a></p>
<p>5. Connect to Lync Online</p>
<p>Import-module lynconlineconnector <br />$LyncOnlineCred = Get-Credential <br />$LyncOnlineSession = New-CsOnlineSession -Credential $LyncOnlineCred <br />Import-PSSession $LyncOnlineSession</p>
<p><a href="/assets/image_616.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_614.png" alt="image" width="244" height="121" border="0" /></a></p>
<p>Greetings <br />dn</p>
