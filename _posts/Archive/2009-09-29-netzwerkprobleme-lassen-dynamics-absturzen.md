---
layout: post
title: "Netzwerkprobleme lassen Dynamics abstürzen"
date: 2009-09-29 18:42:00 +0200
comments: true
category: Archive
tags: ["Server"]
redirect_from: ["/post/Netzwerkprobleme-lassen-Dynamics-absturzen", "/post/netzwerkprobleme-lassen-dynamics-absturzen"]
author: daniel nitz
language: de
---
<!-- more -->
<p>Wie ich in einem meiner <a href="/post/Fehler-bei-HP-Netzwerkkarten-Update.aspx" target="_blank">letzten Posts</a> versprochen hatte, hier der Post über die Dynamics Netzwerkprobleme.</p>  <p>Mein <a href="http://www.microsoft.com/germany/dynamics/" target="_blank">Microsoft Dynamics</a> Server arbeitete immer sehr zuverlässig, das EventLog war frei von den unbeliebten “roten Kreuzen”. Bis an den Tag x, an dem der Dynamics Service seinen Dienst verweigerte und im laufenden Betrieb stoppte. Im EventLog wurden folgende Fehlermeldungen protokolliert:</p>  <p><a href="/assets/archive/image_74.png" target="_blank"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; margin-left: 0px; border-left-width: 0px; margin-right: 0px" title="image" border="0" alt="image" align="left" src="/assets/archive/image_thumb_74.png" width="220" height="244" /></a><a href="/assets/archive/image_75.png" target="_blank"><img style="border-right-width: 0px; display: block; float: none; border-top-width: 0px; border-bottom-width: 0px; margin-left: auto; border-left-width: 0px; margin-right: auto" title="image" border="0" alt="image" src="/assets/archive/image_thumb_75.png" width="221" height="244" /></a> </p>  <p>Der Fehler <strong>“Error 1450 in module 1..\server.cpp(498) </strong>weißt auf zu wenig Server-Ressourcen hin. Dieser Fehler konnte durch die Korrektur nicht optimaler Einstellungen an der Auslagerungsdatei behoben werden.</p>  <p>Der Fehler <strong>“Error 3 in module 244..\server.cpp(351)</strong> weißt auf einen TCP-Fehler hin. Durch die Installation der neuesten Soft- und Firmware der Netzwerkkarte konnte ich das Problem beheben.</p>  <p>Nun ist das EventLog wieder sauber und der Server hat bisher seinen Betrieb nicht wieder unterbrochen.</p>  <p>Grüße, dn</p>
{% include imported_disclaimer.html %}
