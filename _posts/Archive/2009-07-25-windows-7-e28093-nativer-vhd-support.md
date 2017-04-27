---
layout: post
title: "Windows 7 – Nativer VHD Support"
date: 2009-07-25 23:30:00 +0200
comments: true
category: Archive
tags: ["Client"]
redirect_from: ["/post/Windows-7-e28093-Nativer-VHD-Support", "/post/windows-7-e28093-nativer-vhd-support"]
author: thomas torggler
language: de
---
<!-- more -->
<p>Das neue Windows kann von Haus aus VHDs als Festplatten einbinden. So kann man sich z.B. ein Testsystem installieren ohne die Festplatt partitionieren zu m&uuml;ssen.</p>
<p>Virtuelle Festplatten k&ouml;nnen direkt in der Datentr&auml;gerverwaltung erstellt werden (rechtsklick auf Datentr&auml;gerverwaltung, neue virtuelle Festplatte).</p>
<p><a href="/assets/archive/image_8.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/archive/image_thumb_8.png" border="0" alt="image" width="244" height="165" /></a></p>
<p>Will man Windows 7 auf der zu erstellenden VHD installieren muss man die Festplatte mit fester Gr&ouml;&szlig;e erstellen.</p>
<p>&nbsp;<a href="/assets/archive/image_9.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/archive/image_thumb_9.png" border="0" alt="image" width="239" height="244" /></a></p>
<p>Windows 7 von einem beliebigem Installationsmedium (<a href="/post/Windows-7-e28093-Installation-mit-USB-Stick.aspx" target="_blank">USB Stick</a>, DVD) starten und mit Shift-F10 eine Eingabeaufforderung starten. Jetzt muss man die vorhin erstellte VHD mit diskpart einbinden. Dazu wird die VHD mit selet vdisk file=c:\pfad\zur\datei.vhd ausgew&auml;lt und mit attach vdisk angebunden.</p>
<p>Die Installation von Windows 7 kann jetzt normal fortgesetzt werden, die Warnung dass Windows auf einer virtuellen Festplatte nicht installiert werden kann, ignoriert man einfach.</p>
<p>mfg <br />tt</p>
{% include imported_disclaimer.html %}
