---
layout: post
title: "Terminal-Lizenzserver, 4105"
date: 2010-02-09 21:45:00 +0100
comments: true
category: Archive
tags: ["Server", "Server-2008", "Server-2003"]
redirect_from: ["/post/Terminal-Lizenzserver-4105", "/post/terminal-lizenzserver-4105"]
author: daniel nitz
language: de
---
<!-- more -->
<p>Nach der Domänenmigration von 2003 zu 2008 kann es geg. zu Problemen am Terminal-Lizenzserver kommen, dass Lizenzattribute für Benutzer nicht aktualisiert werden können.</p>  <p><a href="/assets/archive/image_96.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_96.png" width="244" height="169" /></a> </p>  <p>Das Problem ist, dass nach der Migration der Domäne die Benutzer-Berechtigungen für die Gruppe <strong>“Terminalserver-Lizenzserver”</strong> nicht aktualisiert werden.</p>  <p>Um die Benutzerberechtigungen für die bestehenden Benutzer manuell zu setzen müssen der Gruppe Terminalserver-Lizenzserver folgende Berechtigungen zugewiesen werden: <strong>“Terminalserver-Lizenzserver</strong> <strong>lesen” </strong>und <strong>”Terminalserver-Lizenzserver schreiben” </strong></p>  <p><a href="/assets/archive/image_97.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_97.png" width="184" height="244" /></a> </p>  <p>Grüße   <br />dn</p>
{% include imported_disclaimer.html %}
