---
layout: post
title: "Prepare Windows Server 2012 for Lync 2013"
date: 2013-03-18 21:26:00 +0100
comments: true
category: Archive
tags: ["Lync", "Skype4B"]
redirect_from: ["/post/Prepare-Windows-Server-2012-for-Lync-2013", "/post/prepare-windows-server-2012-for-lync-2013"]
author: daniel nitz
---
<!-- more -->
<p>To prepare a Windows Server 2012 for a Lync 2013 installation, install the following features manually before you run the Lync setup:</p>  <p>.Net Framework 3.5</p>  <p>Windows Identity Foundation 3.5   <br />Media Foundation    <br />HTTP Activation    <br /></p>  <p>Use the Powershell to speed up the installation:</p>  <p><strong>Install-WindowsFeature –name NET-Framework-Core –source D:\sources\sxs</strong> (the Windows 2012 Disk is mounted on D: )</p>  <p><strong>Install-WindowsFeature –name Windows-Identity-Foundation,Server-Media-Foundation,NET-HTTP-Activation</strong></p>  <p>If you have to prepare the AD schema, install also the AD DS Administration Tools.</p>
{% include imported_disclaimer.html %}
