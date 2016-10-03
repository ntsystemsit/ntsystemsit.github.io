---
layout: post
title: "Windows 7 Bootloader, OS hinzufügen"
date: 2009-10-08 21:27:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Client"]
redirect_from: ["/post/Windows-7-Bootloader-OS-hinzufugen", "/post/windows-7-bootloader-os-hinzufugen"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Der Windows Vista / 7 Bootloader hat sich ja im vergleich zu Windows XP geändert. In den früheren Windows Version konnte man die Datei Boot.ini bearbeiten um den Bootloader zu sagen was er tun soll. Ab der Version Vista nutzt man das Commandline-Tool <strong>bcdedit.exe</strong>.     <br />Auf meinen Computer habe ich 2 Windows 7 Installationen. Auf C:\befindet sich die erste, die zweite auf der Partition D:\     <br />Da ich das zweite Windows 7 durch den Restore eines Images aufgespielt habe, erscheint dies natürlich nicht automatisch in der Betriebssystemauswahl. Um das zweite Betriebssystem dem Bootloader hinzuzufügen, müssen folgende Schritte durchgeführt werden:</p>  <p><strong>1) Commandline mit Administratorrechte öffnen</strong></p>  <p><font size="2"><strong>2) Einen neuen Eintrag dem Bootloader hinzufügen</strong></font></p>  <p><font size="2">bcdedit /create /d “Windows 7 zweite Installation” /application osloader      <br />      <br />Nachdem dieser Befehl ausgeführt wurde, bekommen wir eine ID       <br />Bsp: {34jhjsk5-34j4-33jj-b6ne-99ggfjej48776395}</font></p>  <p><font size="2"><strong>3) Nun müssen wir den Bootloader noch sagen wo sich das zweite Betriebssystem befindet (D:)</strong></font></p>  <p><font size="2">bcdedit /set {34jhjsk5-34j4-33jj-b6ne-99ggfjej48776395} device partition=C:      <br /></font><font size="2">bcdedit /set {34jhjsk5-34j4-33jj-b6ne-99ggfjej48776395} osdevice partition=D:</font></p>  <p><font size="2"><strong>4) Nun fügen wir den Pfad für den Bootloader und dem System Root Verzeichnis hinzu</strong></font></p>  <p><font size="2">bcdedit /set {34jhjsk5-34j4-33jj-b6ne-99ggfjej48776395} path \Windows\system32\winload.exe      <br /></font></p>  <p><font size="2">bcdedit /set {34jhjsk5-34j4-33jj-b6ne-99ggfjej48776395} systemroot \Windows</font></p>  <p><font size="2"><strong>5) Als letztes stellen wir noch die Reihenfolge der Auflistung der Betriebssysteme fest</strong></font></p>  <p><font size="2">bcdedit /displayorder {34jhjsk5-34j4-33jj-b6ne-99ggfjej48776395} /addlast</font></p>  <p><font size="2"><strong>Noch zur Info: Den Namen, der bei der Betriebssystemauswahl angezeigt wird, könnt ihr mit diesen Command ändern:</strong></font></p>  <p>bcdedit /set {current} description &quot;Windows 7 erste Installation&quot;</p>  <p><font size="2">Grüße, dn</font></p>
