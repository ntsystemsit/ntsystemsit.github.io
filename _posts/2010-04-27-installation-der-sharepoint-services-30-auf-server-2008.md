---
layout: post
title: "Installation der Sharepoint Services 3.0 auf Server 2008"
date: 2010-04-27 21:47:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Server", "Server 2008", "Server 2008 R2", "Sharepoint"]
redirect_from: ["/post/Installation-der-Sharepoint-Services-30-auf-Server-2008", "/post/installation-der-sharepoint-services-30-auf-server-2008"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Die Installation der Sharepoint Services kann sich unter Server 2008 / 2008 R2 als schwierig erweisen, wenn der Windows Installer während der Installationsphase einen falsch angegeben Parameter meldet:</p>  <p><a href="/assets/image_103.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/image_thumb_103.png" width="244" height="202" /></a> </p>  <p>Das Problem hängt hierbei mit der “Windows Internal Database” zusammen.</p>  <p><strong>Lösung:</strong> Vor der Installation folgendes Kommando eingeben:    <br /><strong>ocsetup.exe &quot;WSSEE&quot; /quiet /norestart /x:&quot; /lv* C:\bak.log</strong></p>  <p>Grüße   <br />dn</p>
