---
layout: post
title: "Ersten WS08R2 DC im vorhandenen Forest installieren"
date: 2009-12-17 22:35:00 +0100
comments: true
category: Archive
tags: ["Server", "Server-2008-R2"]
redirect_from: ["/post/Ersten-WS08R2-DC-im-vorhandenen-Forest-installieren", "/post/ersten-ws08r2-dc-im-vorhandenen-forest-installieren"]
author: thomas torggler
language: de
---
<!-- more -->
<p>Neue Features wie das AD Administrative Center (hat Daniel <a href="/post/Active-Directory-Verwaltungscenter.aspx">hier</a>&nbsp;schon&nbsp;vorgestellt)&nbsp;oder der AD Recycle Bin erfordern Windows Server 2008 R2 Domain Controller. Das Administrative Center braucht nur einen neuen DC, f&uuml;r den Recycle Bin muss das Forest Functional Level auf WS08R2 gestuft werden, mehr dazu in einem n&auml;chsten Beitrag.</p>
<p>Um die Domain auf den ersten 2008 R2 DC vorzubereiten muss wie auch schon bei fr&uuml;heren Updates zuerst das AD Schema aktualisiert werden (auf Version 47). Dazu wird auf einem bestehenden DC die Windows Server 2008 R2 CD eingelegt, man muss nat&uuml;rlich mit einem Benutzer mit Schema Admin Rechten anmelden. Im Ordner Support\adprep befinden sich die Dateien adprep.exe und adprep32.exe. Wie der Dateiname schon sagt wird mit adprep.exe die Schemaerweiterung bei x64 Systemen durchgef&uuml;hrt, mit adprep32.exe wird das Schema auf x86 DCs erweitert.</p>
<p>Folgende Parameter werden ben&ouml;tigt:</p>
<ul>
<li>adprep[32].exe /forestprep 
<ul>
<li>Bereitet den gesamten Forest auf WS08R2 vor</li>
</ul>
</li>
<li>adprep[32].exe /domainprep /gpprep 
<ul>
<li>Muss auf dem Infrastruktur Master ausgef&uuml;hrt werden</li>
<li>Bereitet die Domain vor und setzt Berechtigungen auf Sysvol Share f&uuml;r RSoP Planning Mode</li>
</ul>
</li>
<li>adprep[32].exe /rodcprep 
<ul>
<li>Muss nur ausgef&uuml;hrt werden wenn ein RODC vorhanden ist, bzw. installiert werden soll</li>
</ul>
</li>
</ul>
<p>Jetzt sind Domain und Forest bereit f&uuml;r den neuen DC und der Windows Server 2008R2 kann mit dcpromo hochgestuft werden.</p>
<p>viele Gr&uuml;&szlig;e <br />tt</p>
{% include imported_disclaimer.html %}
