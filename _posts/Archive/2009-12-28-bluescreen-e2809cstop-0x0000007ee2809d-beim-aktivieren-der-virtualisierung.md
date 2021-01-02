---
layout: post
title: "BlueScreen “Stop 0x0000007E” beim aktivieren der Virtualisierungs-Technologie"
date: 2009-12-28 09:25:03 +0100
comments: true
category: Archive
tags: ["Hyper-V", "Server-2008-R2"]
redirect_from: ["/post/BlueScreen-e2809cStop-0x0000007Ee2809d-beim-aktivieren-der-Virtualisierung", "/post/bluescreen-e2809cstop-0x0000007ee2809d-beim-aktivieren-der-virtualisierung"]
author: daniel nitz
language: de
---
<!-- more -->
<p>Nachdem im BIOS die Virtualisierungs-Technologie aktiviert wird, kann es zu einem BlueScreen bei starten des Servers kommen. Im BlueScreen wird folgender Fehlercode mitgeteilt: 0x0000007E.</p>  <p>Betroffen sind folgende Produkte:</p>  <li> Windows Server 2008 R2 Standard </li>  <li> Windows Server 2008 R2 Enterprise </li>  <li> Windows Server 2008 R2 Datacenter</li>  <li> Hyper-V Server 2008 R2</li>  <p>&#160;</p>  <p>Microsoft hat dazu den <a href="http://support.microsoft.com/kb/974598" target="_blank">KB-Artikel 974598</a> und einen Hotfix veröffentlicht. </p>  <p>Um den Server wieder flott zu bekommen, muss die Virtualisierungs-Technologie deaktiviert werden. Danach muss der Server gestartet und der Hitfix installiert werden.   <br />Nachdem der Hotfix installiert wurde, kann die Virtualisierungs-Technologie wieder aktiviert und das System gestartet startet.</p>  <p>Grüße   <br />dn</p>
{% include imported_disclaimer.html %}
