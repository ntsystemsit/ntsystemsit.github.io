---
layout: post
title: "Server 2008 R2, Disk Management und DiskPart lässt sich nicht starten"
date: 2012-08-06 20:00:30 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Server 2008 R2"]
redirect_from: ["/post/Server-2008-R2-Disk-Management-und-DiskPart-lasst-sich-nicht-starten", "/post/server-2008-r2-disk-management-und-diskpart-lasst-sich-nicht-starten"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Mit Windows Server 2008 R2 kommt es manchmal vor, dass ich Volumes nicht extenden konnte und der Wizard folgenden Fehler anzeigt: <strong><em>“Unable to connect to Virtual Disk Service”</em></strong></p>  <p>&#160;</p>  <p><a href="/assets/image_447.png"><img title="image" style="border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; display: inline; border-top-width: 0px" border="0" alt="image" src="/assets/image_thumb_445.png" width="244" height="129" /></a> </p>  <p>Mit Diskpart sieht das dann so aus: <strong><em>“Diskpart encountered an error starting the COM service”</em></strong>&#160;</p>  <p><a href="/assets/image_448.png"><img title="image" style="border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; display: inline; border-top-width: 0px" border="0" alt="image" src="/assets/image_thumb_446.png" width="244" height="157" /></a> </p>  <p>Im EventLog ist folgender Fehler zu finden:</p>  <p><strong><em>Unable to start a DCOM Server: {9C38ED61-D565-4728-AEEE-C80952F0ECDE}. The error:        <br />&quot;1260&quot;         <br />Happened while starting this command:         <br />C:\Windows\System32\vdsldr.exe –Embedding</em></strong></p>  <p><strong><u>Workaround</u></strong></p>  <p>Hierzu habe ich einen kleinen Workaround um die Disk schnell zu extenden: CMD öffnen und folgendes Kommando starten: <strong><em>C:\Windows\System32\vdsldr.exe –Embedding </em></strong></p>  <p>Nun funktioniert Diskpart und die Disk kann extended werden. </p>  <p>Grüße    <br />dn</p>
