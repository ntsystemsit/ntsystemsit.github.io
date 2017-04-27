---
layout: post
title: "Servergespeicherte TS-Profile, Fehler 1543"
date: 2009-09-29 23:11:00 +0200
comments: true
category: Archive
tags: ["Server", "Client", "Server 2008", "Server 2003"]
redirect_from: ["/post/Servergespeicherte-TS-Profile-Fehler-1543", "/post/servergespeicherte-ts-profile-fehler-1543"]
author: daniel nitz
language: de
---
<!-- more -->
<p>Auf meinem Terminalserver-Cluster 2008 habe ich mehrere EventLog Warnungen mit der ID 1543 (User Profile Service) bemerkt. Die Einträge deuten darauf hin, dass das UserProfil nicht synchronisiert werden konnte. Die Einträge konnte man auf allen Servern im TS Cluster finden.</p>  <p><a href="/assets/archive/image_76.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_76.png" width="244" height="172" /></a> </p>  <p>Etwas zur Struktur: Als Server setze ich Windows Server 2008 ein, die Server sind auf Hyper-V Servern virtualisiert. Als Speicherort für die Profile benutze ich das DSF Feature von Server 2003 R2.</p>  <p>Zuerst dache ich mir, dass es da Probleme mit dem Netzwerk gibt. Eines wollte ich aber noch versuchen bevor ich mit der Analyse des Netzwerkes starte: <strong>Windows-Defender</strong>.</p>  <p>Nachdem ich den <strong>Windows-Defender</strong> auf allen Terminalservern deaktiviert hatte, konnte das Problem nicht mehr reproduziert werden. Anscheinend blockiert der Windows-Defender bei der Anmeldungen bestimmte Vorgänge, die der Server braucht um das User-Profil herunterzuladen. </p>  <p>Grüße, dn</p>
{% include imported_disclaimer.html %}
