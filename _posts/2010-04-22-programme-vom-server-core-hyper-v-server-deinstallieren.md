---
layout: post
title: "Programme vom Server Core / Hyper-V Server deinstallieren"
date: 2010-04-22 21:35:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Hyper-V", "Server"]
redirect_from: ["/post/Programme-vom-Server-Core-Hyper-V-Server-deinstallieren", "/post/programme-vom-server-core-hyper-v-server-deinstallieren"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Der Server 2008 Core und der Hyper-V Server haben keine Oberfläche um Programme zu deinstallieren (Add/Remove programs).</p>  <p>Um Programme deinstallieren zu können, öffnen wir die Registrierung. (Üblicherweise Remoteregistrierung von einem Client aus). Unter    <br /><strong>HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall</strong>    <br />werden die installierten Programme gelistet.</p>  <p><a href="/assets/image_102.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/image_thumb_102.png" width="244" height="120" /></a> </p>  <p>Wenn man den Wert im Schlüssel <strong>“UninstallString”</strong> in der Kommandozeile des Servers eingibt, wird der Windows Installer gestartet und deinstalliert das Programm.</p>  <p>Grüße   <br />dn</p>
