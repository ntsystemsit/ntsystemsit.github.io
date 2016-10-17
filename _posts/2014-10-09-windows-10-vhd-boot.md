---
layout: post
title: "Windows 10 VHD Boot"
date: 2014-10-09 18:51:00 +0200
comments: true
category: Archive
tags: ["Client"]
redirect_from: ["/post/Windows-10-VHD-Boot", "/post/windows-10-vhd-boot"]
author: thomas torggler
---
<!-- more -->
<p>Seit einigen Tagen ist die Technical Preview von Windows 10 verfügbar. Auf meinem Notebook nutze ich Windows 8.1 und habe das Hyper-V Feature aktiviert um virtuelle Maschinen betreiben zu können. In so einer VM habe ich auch Windows 10 installiert und getestet.</p> <p>Nach ersten erfolgreichen Tests, wollte ich dann doch mein Notebook mal mit Windows 10 booten, also habe ich mit “bcdedit” einen neuen Eintrag im Bootloader erstellt und die virtual Hard Disk der Windows 10 VM als “device” und “osdevice” angegeben.</p> <p>Wichtig: Vor einer Änderung sollte man die aktuelle Konfiguration immer sichern:</p> <p><code>bcdedit /export "C:\Users\thomas\Documents\bcdedit"</code></p> <p>Dieser Befehl kopiert den Boot Configuration Eintrag für das aktuelle Betriebssystem. Der neue Eintrag erhält eine eigene GUID, diese wird gleich ausgegeben und wird in den darauffolgenden Befehlen verwendet.</p> <p><code>bcdedit /copy {default} /d "Win10 Preview”</code></p> <p>Mit folgenden Befehlen werden die Einstellungen für den neuen Eintrag angepasst, die virtuelle Festplatte der Windows 10 VM wird als “device” konfiguriert, die GUID des oben erstellten Eintrags muss verwendet werden: <p><code>bcdedit /set {&lt;new-GUID&gt;} device vhd=[C:]\temp\win10_preview.vhdx <p>bcdedit /set {&lt;new-GUID&gt;} osdevice vhd=[C:]\temp\win10_preview.vhdx <p>bcdedit /set {&lt;new-GUID&gt;} detecthal on</code></p> <p>Wenn das Notebook jetzt neu gestartet wird, kann ich im Bootloader zwischen Windows 8.1 und der Tech Preview von Windows 10 wählen. Auch die virtuelle Maschine kann nach wie vor verwendet werden. <p><br>Viel Spaß,<br>Tom&nbsp; </p>
{% include imported_disclaimer.html %}
