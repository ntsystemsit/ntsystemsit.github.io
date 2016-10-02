---
layout: post
title: "“DATA ENCRYPTION” Fehler bei RDP Verbindung"
date: 2009-09-08 23:00:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Server 2003", "Server"]
redirect_from: ["/post/e2809cDATA-ENCRYPTIONe2809d-Fehler-bei-RDP-Verbindung", "/post/e2809cdata-encryptione2809d-fehler-bei-rdp-verbindung"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Kürzlich hatte ich ein seltsames Problem mit der RDP Verbindung auf einem meiner Server die im Ausland stehen und nur über RDP erreichbar sind.   <br />Jedes Mal wenn ich eine RDP Verbindung starten wollte, erschien die Fehlermeldung, dass ein Netzwerkfehler vorliegt.</p>  <p>Im Eventlog wurde ein Fehler protokolliert, dass die RDP-Protokollkomponente “DATA ENCRYPTION” ein Problem verursachte.</p>  <p><a href="/assets/image_70.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/image_thumb_70.png" width="220" height="244" /></a> </p>  <p>Glücklicherweise funktionierte der Zugriff durch <a href="http://download.cnet.com/AdminMagic/3000-7240_4-10164246.html" target="_blank">AdminMagic</a> noch, sodass ich mit der Fehlerbehebung beginnen konnte.</p>  <p>Um die RDP Verbindung wieder flott zu bekommen muss folgender Registry-Eintrag gelöscht werden:</p>  <p><strong>HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\TermService\     <br /></strong><strong>Parameters\ Certificate</strong></p>  <p>Nach einem Neustart des Servers konnte ich mich wieder via RDP auf dem Server verbinden.</p>  <p>Grüße, dn</p>
