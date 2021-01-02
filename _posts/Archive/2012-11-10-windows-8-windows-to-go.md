---
layout: post
title: "Windows 8 – Windows To Go"
date: 2012-11-10 10:59:00 +0100
comments: true
category: Archive
tags: ["Client", "en"]
redirect_from: ["/post/Windows-8-Windows-To-Go", "/post/windows-8-windows-to-go"]
author: thomas torggler
---
<!-- more -->
<p>Windows to Go (WTG) is a new feature available in the Windows 8 Enterprise Edition. It enables the deployment of Windows 8 to USB thumb drives so that an End User can really plug in their USB drive and boot their Enterprise environment on any machine. Now, for security reasons the thumb drive can be encrypted using BitLocker and the User has no access to local hard disks of the &ldquo;host&rdquo;.</p>
<h2>Hardware</h2>
<p>WTG requires a &ldquo;fixed drive&rdquo;, that is, you cannot use any USB drive, it must be &ldquo;Certified&rdquo;. I am using a Kingston DataTraveler Workspace (<a href="http://www.kingston.com/wtg">www.kingston.com/wtg</a>) other supported devices are listed on TechNet: <a href="http://technet.microsoft.com/en-us/library/hh831833.aspx" target="_blank">Windows To Go: Feature Overview</a></p>
<p>Even though its not required USB 3 is highly recommended to speed things up. If you have no WTG certified drive handy, try using a USB hard disk.</p>
<h2>Deploy</h2>
<p>Deployment is really simple, simply open &ldquo;Windows To Go&rdquo; from Control Panel. The WTG Wizard starts, and the first thing you have to select is which drive to use.</p>
<p><a href="/assets/archive/image_449.png"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_447.png" alt="image" width="244" height="182" border="0" /></a></p>
<p>In the next step you select the Windows 8 Image, for testing I mounted a Windows 8 Enterprise DVD. In a real-world scenario you would use your customized Image for deployment.</p>
<p><a href="/assets/archive/image_450.png"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_448.png" alt="image" width="244" height="182" border="0" /></a></p>
<p>Set a password to BitLocker the device (highly recommended).</p>
<p><a href="/assets/archive/image_451.png"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_449.png" alt="image" width="244" height="182" border="0" /></a></p>
<p>Obviously all data on the drive is lost, so if that is not a problem, click &ldquo;Create&rdquo;.</p>
<p><a href="/assets/archive/image_452.png"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_450.png" alt="image" width="244" height="182" border="0" /></a></p>
<p>Yeah, that&rsquo;s it. In the last step you can choose to reboot the machine or just finish and close.</p>
<p><a href="/assets/archive/image_453.png"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_451.png" alt="image" width="244" height="182" border="0" /></a></p>
<h2>Boot and Work</h2>
<p>So now you have created a new WTG Workspace that can be used to boot Windows from almost any PC. If the PC can run Windows 7 or 8, it almost certainly will run Windows to Go. The first time you boot WTG it takes some time, just as every new Windows installation takes some time. After the quick, first steps you can start working, you&rsquo;ll notice that there is no access to the hard drives of the host computer. If local access is needed, simply open &ldquo;Disk Management&rdquo; and make the disks available (Requires Administrative permissions).</p>
<p>If you shut down Windows To Go and remove your USB drive, the local Computer starts, absolutely unaffected by WTG. BYOD just got a lot simpler, IT just needs to hand out USB drives and doesn&rsquo;t need to be supporting all kind of different environments Users might have on their devices.</p>
<p>On the other hand, Users do not have to worry about IT enforcing policies on there private-owned devices.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>If you ask me, that&rsquo;s pretty cool :) <br />tom</p>
{% include imported_disclaimer.html %}
