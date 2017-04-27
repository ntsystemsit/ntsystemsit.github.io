---
layout: post
title: "Upgrade Windows Server 2008R2 Sp1 - BlackBerry Monitoring Service startet nicht"
date: 2011-05-10 22:45:00 +0200
comments: true
category: Archive
tags: ["Server"]
redirect_from: ["/post/Upgrade-Windows-Server-2008R2-Sp1-BlackBerry-Monitoring-Service-startet-nicht", "/post/upgrade-windows-server-2008r2-sp1-blackberry-monitoring-service-startet-nicht"]
author: thomas torggler
language: de
---
<!-- more -->
<p>Nach dem Update auf Windows Server 2008R2 Sp1 starten die Monitoring Services des BlackBerry Enterprise Servers nicht mehr. Betroffen sind folgende Dienste:</p>  <p><code>BBMonitoringService_APP - BlackBerry Monitoring Service - Application Core</p>    <p>BBMonitoringService_DCS - BlackBerry Monitoring Service - Data Collection Subsystem</p>    <p>BBMonitoringService_ENG - BlackBerry Monitoring Service - Polling Engine</code></p>  <p>Im Eventlog (Application) werden folgende Fehler protokolliert:</p>  <p><code>Source: BBMonitoringService_ENG Event ID: 3</p>    <p>Source: BBMonitoringService_DCS Event ID: 3</p>    <p>Source: BBMonitoringService_APP Event ID: 3</code></p>  <p>Die Lösung: Im %temp% Verzeichnis gibt es einen Ordner “gen_py”, die Inhalte dieses Ordners müssen gelöscht werden, dann starten die Dienste wieder.</p>  <p>Achtung: Der Ordner “gen_py” muss in allen Temp Verzeichnissen gelöscht werden, also C:\Windows\Temp und im User Verzeichnis des BesAdmin Accounts.</p>  <p><a href="http://www.blackberry.com/btsc/KB26571" target="_blank">Hier ein Link</a> zum Artikel in der RIM KB.</p>  <p>tom</p>
{% include imported_disclaimer.html %}
