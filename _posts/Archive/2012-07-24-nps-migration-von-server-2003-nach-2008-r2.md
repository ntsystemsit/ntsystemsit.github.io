---
layout: post
title: "NPS Migration von Server 2003 nach 2008 R2"
date: 2012-07-24 18:55:15 +0200
comments: true
category: Archive
tags: ["Server-2008-R2"]
redirect_from: ["/post/NPS-Migration-von-Server-2003-nach-2008-R2", "/post/nps-migration-von-server-2003-nach-2008-r2"]
author: daniel nitz
language: de
---
<!-- more -->
<p>Den IAS Server von Server 2003 zu Server 2008 R2 zu migrieren ist eine sehr einfache Migration:</p>  <p>Zunächst muss das Migrationstool <strong>iasmigreader</strong> auf den Windows Server 2003 kopiert werden.</p>  <p>Das Migrationstool befindet sich entweder auf der Server 2008 R2 CD unter <em>D:\sources\dlmanifests\microsoft-windows-iasserver-migplugin</em> oder auf dem Server 2008 R2 unter <em>C:\Windows\SysWow64</em></p>  <p>Über die Kommandozeile wird das Tool aufgerufen um auf dem 2003 Server die Konfiguration in das vordefinierte Textfile <strong><em>ias.txt </em></strong>zu exportieren.</p>  <p><strong>ACHTUNG: Beim Import von 32BIT zu 64BIT Systemen muss folgendes vorher gemacht werden. Sonst gibt es Probleme mit der PEAP Authentifizierungsmethode:</strong></p>  <p>Import File öffnen den Wert 0 in SystemInfo auf 0000000009 ändern:</p>  <p><a href="/assets/archive/image_444.png"><img title="image" style="border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; display: inline; border-top-width: 0px" border="0" alt="image" src="/assets/archive/image_thumb_442.png" width="244" height="26" /></a> </p>  <p><a href="/assets/archive/image_445.png"><img title="image" style="border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; display: inline; border-top-width: 0px" border="0" alt="image" src="/assets/archive/image_thumb_443.png" width="244" height="21" /></a> </p>  <p></p>  <p>Nun kann das File auf dem 2008 Server importiert werden:    <br />Netsh nps import filename=&quot;paht\ias.txt&quot;</p>  <p>Grüße    <br />dn</p>
{% include imported_disclaimer.html %}
