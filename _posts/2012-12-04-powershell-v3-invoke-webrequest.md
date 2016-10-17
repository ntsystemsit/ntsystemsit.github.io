---
layout: post
title: "PowerShell v3 Invoke-WebRequest"
date: 2012-12-04 17:14:00 +0100
comments: true
category: Archive
tags: ["PowerShell"]
redirect_from: ["/post/PowerShell-v3-Invoke-WebRequest", "/post/powershell-v3-invoke-webrequest"]
author: thomas torggler
---
<!-- more -->
<p>Today I have a quick function to download the current Sysinternals Suite from <a title="http://live.sysinternals.com
" href="http://live.sysinternals.com">http://live.sysinternals.com</a>. I created this mainly to learn/try some concepts of PowerShell, if you have any hints/ideas feel free to drop me a mail.</p>
<p>This function leverages the new &lsquo;Invoke-WebRequest&rsquo; cmdlet, available in PowerShell v3, so, obviously V3 is required.</p>
<p>Example use:</p>
<p><code>Update-SysinternalsSuite -Path C:\tools\sysinterals &ndash;AsJob</code></p>
<p>This downloads the Sysinternals Tools to C:\tools\sysinternals. If the specified folder does not exist, the script creates it. It also makes use of background jobs, so you can keep using PowerShell during the download.</p>
<p>I&rsquo;ve posted the Function to PoshCode:</p>
<p>&nbsp;</p>
<p>enjoy, <br />tom</p>
{% include imported_disclaimer.html %}
