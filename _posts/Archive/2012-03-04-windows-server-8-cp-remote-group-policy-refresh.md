---
layout: post
title: "Windows Server 8 CP–Remote Group Policy refresh"
date: 2012-03-04 14:35:10 +0100
comments: true
category: Archive
tags: ["Server", "Server 2012"]
redirect_from: ["/post/Windows-Server-8-CP-Remote-Group-Policy-refresh", "/post/windows-server-8-cp-remote-group-policy-refresh"]
author: thomas torggler
language: de
---
<!-- more -->
<p>Mit Windows Server 8 kann man einen Group Policy refresh auf remote Computern initiieren. Verwendet wird dazu die GPMC oder natürlich PowerShell.</p>  <h1>Group Policy Management Console</h1>  <p><a href="/assets/archive/image_388.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_386.png" width="244" height="173" /></a></p>  <p>Man wählt die OU aus in der sich die Computerkonten befinden auf denen man das Update ausführen möchte. Achtung: Man kann das GP Update nur auf Computerkonten initiieren, es werden aber Computer und Benutzerrichtlinien aktualisiert.</p>  <p>Mit einem Rechtsklick auf die OU kann man “Group Policy Update…” auswählen. Der Dialog um das Update zu bestätigen zeigt an um wie viele Computer es sich handelt.</p>  <p><a href="/assets/archive/image_389.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_387.png" width="244" height="158" /></a></p>  <p>Klickt man auf “Yes” wird “gpupdate /force” auf den erreichbaren Computern ausgeführt.</p>  <p><a href="/assets/archive/image_390.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_388.png" width="244" height="188" /></a></p>  <p>Ein kurzer Report wird angezeigt, in dem evtl. Fehler sichtbar sind.</p>  <h1>PowerShell</h1>  <p>Mit dem cmdlet “Invoke-GPUpdate” aus dem Modul “GroupPolicy” kann man das GP Update auch per PowerShell starten.</p>  <p><code>Invoke-GPUpdate –Computer “win8cp-dc1”</code></p>  <h1>Firewall</h1>  <p>Damit das Remote GP Update funktioniert müssen folgende Windows Firewall Regeln aktiviert sein (Verbindungen akzeptieren)</p>  <ul>   <li>Remote Scheduled Tasks Management (RPC)</li>    <li>Remote Scheduled Tasks Management (RPC-EPMAP)</li>    <li>Windows Management Instrumentation (WMI-IN)</li> </ul>  <p>&#160;</p>  <p>tom</p>
{% include imported_disclaimer.html %}
