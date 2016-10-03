---
layout: post
title: "AppV Streaming Server"
date: 2011-03-23 21:03:13 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["AppV", "Client", "Server"]
redirect_from: ["/post/AppV-Streaming-Server", "/post/appv-streaming-server"]
author: thomas torggler
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Verwendet man AppV für Applikationsvirtualisierung mit Clients in Standorten mit langsamer Anbindung (WAN) kann ein Updates eines Paketes ziemlich lange dauern, außerdem wird es von jedem Client einzeln heruntergeladen.</p>  <p>Der AppV Streaming Server könnte die Lösung für dieses Problem sein. Mit dem Desktop Optimization Pack kommen neben den Installationsdateien für den AppV Management (Full) Server auch die Dateien für den Streaming Server. Die Installation gestaltet sich einfach, man wählt das Streaming Protokoll, sollte natürlich jenes sein das der Management Server verwendet. Außerdem muss man den Pfad für den “Content” Ordner angeben, diesen muss man manuell anlegen und freigeben (\\<em>servername</em>\Content, Leseberechtigungen für Benutzer reichen aus).</p>  <p>Die Installation ist abgeschlossen und der Dienst “Application Virtualization Streaming Server” (AppVirtServer) sollte gestartet sein.</p>  <p>Im Application Event Log wird bei jedem Start des AppVirtServer Dienstes folgender Fehler Protokolliert:</p>  <p><code>Error:</p>    <p>Source: Application Virtualization Server</p>    <p>Event ID: 44937</p>    <p>Empty package map for package content root: [D:\Content\].</code></p>  <p>Dieser Fehler wird für jedes Packet das auf dem AppV Management Server verfügbar ist einmal Protokolliert, und zwar so lange bis man die Daten aus dem Content Share des AppV Management Servers auf den Streaming Server kopiert. Es reicht aus die .sft Files zu kopieren, wichtig ist dabei dass eventuelle Unterordner auch angelegt werden.</p>  <p>Sind die Daten kopiert (d.h. beide Content Shares gleich) kann ist der Streaming Server bereit.</p>  <p>&#160;</p>  <p>Die Clients im Remote Netzwerk wissen allerdings nichts von diesem Server, d.h. Updates werden immer noch vom Management Server heruntergeladen. Über folgenden Registry Key gibt man den Clients die Information, in diesem Fall verwendet der Streaming Server RTSP:</p>  <p><code>HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\SoftGrid\4.5\Client\Configuration</p>    <p>REG_SZ ApplicationSourceRoot</p>    <p>rtsp://<em>servername</em>:554/</code></p>  <p>Ab jetzt ist es nur mehr Wichtig bei Paket Updates daran zu denken alle Content Shares zu aktualisieren. </p>  <p>&#160;</p>  <p>tomt</p>
