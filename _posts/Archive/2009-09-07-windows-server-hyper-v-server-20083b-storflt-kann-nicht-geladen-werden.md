---
layout: post
title: "Windows Server / Hyper-V Server 2008; storflt kann nicht geladen werden"
date: 2009-09-07 21:00:00 +0200
comments: true
category: Archive
tags: ["Server"]
redirect_from: ["/post/Windows-Server-Hyper-V-Server-20083b-storflt-kann-nicht-geladen-werden", "/post/windows-server-hyper-v-server-20083b-storflt-kann-nicht-geladen-werden"]
author: daniel nitz
---
<!-- more -->
<p>Nachdem ich alle meine Hyper-V Server 2008&#160; auf SP2 aktualisiert habe, erhalte ich beim Start der Maschinen einen Fehler im Ereignisprotokoll, dass <strong>storflt</strong> nicht geladen werden konnte.</p>  <p><a href="/assets/archive/image_69.png" target="_blank"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_69.png" width="244" height="167" /></a> </p>  <p>Dieser Fehler ergibt sich aus upgedateten Treibern für den Hypervisor durch SP2 und wird nur auf physischen Maschinen protokolliert. </p>  <p>Der Eventlog-Eintrag kann einfach ignoriert werden.</p>  <p>Mit dem Befehl <strong>sc delete storflt</strong> wird der Dienst storflt gelöscht und der Fehler nicht mehr protokolliert. Dies darf jedoch <strong>nur für den Windows Server 2008</strong> gemacht werden, <strong>nicht für den Hyper-V Server</strong>, da dieser den Service für die virtuellen Maschinen braucht.</p>  <p>Sollte der Service auf einem Hyper-V Server gelöscht werden, bleibt dieser beim Starten mit einem Bluescreen stehen. Durch die <strong>“Letzte bekannte Konfiguration”</strong> kann der Server aber wieder gestartet werden.</p>  <p>Grüße, dn</p>
{% include imported_disclaimer.html %}
