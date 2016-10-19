---
layout: post
title: "Netlogon Fehler 5719 auf Server (nicht DC)"
date: 2009-10-21 18:54:22 +0200
comments: true
category: Archive
tags: ["Server"]
redirect_from: ["/post/Netlogon-Fehler-5719-auf-Server-(nicht-DC)", "/post/netlogon-fehler-5719-auf-server-(nicht-dc)"]
author: daniel nitz
---
<!-- more -->
<p>Wenn der Fehler NETLOGON 5719 direkt nach dem starten des Servers (nicht DC) protokolliert wird, bedeutet das folgendes: Die Netlogon-Prozess hat stattgefunden bevor das Netzwerk bereit war und somit standen beim Anmeldeprozess keine Domänencontroller für die Authentifizierung zur Verfügung.</p>  <p><a href="/assets/archive/image_78.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_78.png" width="220" height="244" /></a></p>  <p>Es gibt 2 Möglichkeiten das Problem zu beheben:</p>  <p><strong>1) Update des Netzwerkkartentreibers</strong></p>  <p>Als allererstes sollte der Netzwerkkartentreiber geupdated werden. In den meisten Fällen erledigt sich das Problem damit. Ich empfehle den Treiber immer von der Support-Webseite des Servers herunterzuladen, nicht vom NIC-Hersteller direkt (Bsp: Server von HP und Netzwerkkarte von Intel). Diese Treiber auf der Support-Webseite des Servers sind getestet und für das System freigegeben.</p>  <p><strong>2) Den Netlogon Service zwingen auf das Netzwerk zu warten</strong></p>  <p>Wenn der aktuelle Netzwerkkartentreiber nichts bringt, kann man den Netlogon-Prozess so zum warten zwingen:</p>  <p>In der Registry muss der Eintrag <strong>“TermService”</strong> dem Schlüssel <strong>“DependOnService” </strong>hinzugefügt werden.    <br /><strong>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Netlogon</strong></p>  <p>Nachdem der Server neu gestartet wurde, sollte das Problem behoben sein.</p>  <p>Grüße, dn</p>
{% include imported_disclaimer.html %}
