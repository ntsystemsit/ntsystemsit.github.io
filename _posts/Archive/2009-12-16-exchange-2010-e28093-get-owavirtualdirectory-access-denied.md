---
layout: post
title: "Exchange 2010 – Get-OwaVirtualDirectory Access Denied"
date: 2009-12-16 22:05:00 +0100
comments: true
category: Archive
tags: ["Server", "Exchange"]
redirect_from: ["/post/Exchange-2010-e28093-Get-OwaVirtualDirectory-Access-Denied", "/post/exchange-2010-e28093-get-owavirtualdirectory-access-denied"]
author: thomas torggler
language: de
---
<!-- more -->
<p>Wird Exchange 2010 Server in einer Exchange 2007 Umgebung installiert erscheint folgender Fehler wenn man in der Exchange Management Console unter “Server Configuration” die Client Access Rolle verwalten möchte. </p>  <p>“An IIS directory entry couldn't be created. The error message is Access is denied. HResult = -2147024891. It was running the command 'Get-OwaVirtualdirectory'”</p>  <p><a href="/assets/archive/image_80.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_80.png" width="244" height="177" /></a></p>  <p>Den selben Fehler erhält man wenn man in der Exchange Management Shell den Befehl “Get-OwaVirtualDirectory” ausführt, macht die EMC eigentlich auch, nur mit Bild drum herum :).</p>  <p><a href="/assets/archive/image_81.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_81.png" width="244" height="33" /></a></p>  <p>Der Grund dafür ist wohl dass Exchange 2010 keine Berechtigungen auf der entsprechenden Website im IIS auf dem 2007 Client Access Server erhält.</p>  <p><strong>Die Lösung: </strong>Alle Exchange 2010 Server sollen Mitglied der lokalen Administratoren auf allen Exchange 2007 Servern sein. Also am besten die Gruppe “Exchange Trusted Subsystems” zu den Lokalen Admins auf den Exchange 2007 Server hinzufügen.</p>  <p>Alternativ kann man der Gruppe “Exchange Trusted Subsystems” auch Berechtigungen (Full Control) auf der entsprechenden Website (Default Website) im direkt im IIS geben.</p>  <p>viele Grüße   <br />tt</p>
{% include imported_disclaimer.html %}
