---
layout: post
title: "Citrix XenApp6 Fehler beim starten des Webservice"
date: 2011-07-18 21:27:33 +0200
comments: true
category: Archive
tags: ["Citrix"]
redirect_from: ["/post/Citrix-XenApp6-Fehler-beim-starten-des-Webservice", "/post/citrix-xenapp6-fehler-beim-starten-des-webservice"]
author: daniel nitz
language: de
---
<!-- more -->
<p>Letztens bin ich auf ein seltsamen Problem in XenApp6 gestoßen:</p>  <p>Sobald man den Webservice startet und einen Verbindungsversuch unternimmt, beendet sich der ApplicationPool und Verbindungen werden terminiert.</p>  <p>Im EventLog wird folgender Fehler protokolliert:</p>  <p>&#160;</p>  <p><code>Log Name: Application</p>    <p>Source: Microsoft-Windows-IIS-W3SVC-WP</p>    <p>Date: 17/06/2011 09:37:36</p>    <p>Event ID: 2307</p>    <p>Task Category: None</p>    <p>Level: Error</p>    <p>Keywords: Classic</p>    <p>User: N/A</p>    <p>Computer: ts1.ntsystems.it</p>    <p>Description:</p>    <p>The worker process for application pool 'CitrixWebInterface5.3.0AppPool' encountered an error 'Failed to decrypt attribute 'password'</p>    <p>' trying to read configuration data from file '<a href="file:///\\%3f\C:\inetpub\temp\apppools\CitrixWebInterface5.3.0AppPool.config">\\?\C:\inetpub\temp\apppools\CitrixWebInterface5.3.0AppPool.config</a>', line number '150'. The data field contains the error code.</code></p>  <p>&#160;</p>  <p><strong>Lösung</strong></p>  <p>Um den Fehler zu beheben und das Webinterface richtig starten zu können, müssen in der Datei <strong>C:\Windows\System32\inetsrv\config\applicationHost.config</strong> die Zeilen zwischen</p>  <p><strong>&lt;configProtectedData&gt;</strong> gelöscht werden. Wichtig ist dabei, dass IIS vorher beendet wurde. Danach muss der Service wieder gestartet, der ApplicationPool lässt sich nun auch normal starten. Eingehende Verbindungen zum Webinterface werden nun auch richtig verarbeitet.</p>  <p>&#160;</p>  <p>Grüße   <br />dn</p>
{% include imported_disclaimer.html %}
