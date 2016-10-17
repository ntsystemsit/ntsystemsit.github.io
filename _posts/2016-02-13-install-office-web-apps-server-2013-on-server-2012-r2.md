---
layout: post
title: "Install Office Web Apps Server 2013 on Server 2012 R2"
date: 2016-02-13 19:15:00 +0100
comments: true
category: Archive
tags: ["en", "Server"]
redirect_from: ["/post/Install-Office-Web-Apps-Server-2013-on-Server-2012-R2", "/post/install-office-web-apps-server-2013-on-server-2012-r2"]
author: thomas torggler
---
<!-- more -->
<p>A quick hint about installing WAC Server. As it happens, Office Web Apps Server&nbsp;2013&nbsp;only added support for 2012R2 with SP1, and even though SP1 is about 3x the file size of RTM, you cannot install it without RTM;&nbsp;RTM setup fails and that’s where I found myself this morning. <h3>Copy SP1 files to ‘updates’ folder</h3> <p>Download the service pack 1 for WAC Server from this link: <a href="http://go.microsoft.com/fwlink/p/?LinkId=510097">http://go.microsoft.com/fwlink/p/?LinkId=510097</a> <p>Then extract the service pack using /extract to a folder on the disk. Like this:  <p><code>wacserversp2013-kb2880558-fullfile-x64-glb.exe /extract:C:\temp\wacsp1</code></p> <p>Now copy all the extracted files into the “updates” folder of the RTM install files. Once the updates are there, RTM setup works on 2012R2 and automatically installs SP1, too. <p>Note: Make sure to follow other requirements, as listed on <a href="https://technet.microsoft.com/en-us/library/jj219435" target="_blank">TechNet</a> <p>Enjoy, Tom </p>
{% include imported_disclaimer.html %}
