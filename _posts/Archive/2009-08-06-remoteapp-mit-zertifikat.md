---
layout: post
title: "RemoteApp mit Zertifikat"
date: 2009-08-06 21:22:00 +0200
comments: true
category: Archive
tags: ["Client", "Server", "Server 2008"]
redirect_from: ["/post/RemoteApp-mit-Zertifikat", "/post/remoteapp-mit-zertifikat"]
author: thomas torggler
language: de
---
<!-- more -->
<p>Die Sicherheit von RemoteApp Programmen kann erh&ouml;ht werden indem die Echtheit des Servers mit einem Zertifikat best&auml;tigt wird. Daf&uuml;r habe ich ein Computerzertifikat f&uuml;r den Terminal Server ausgestellt der die RemoteApp Programme hosted. Das ausgestellte Zertifikat muss nat&uuml;rlich g&uuml;ltig sein, d.h. Datum und Namen m&uuml;ssen stimmen und die ausstellende CA (Enterprise CA in meinem Fall) muss vertrauensw&uuml;rdig sein.&nbsp;</p>
<p>Um RemoteApp Programme mit Zertifikaten zu signieren muss man nicht wie bei den Makros (wie Daniel <a href="/post/Zertifikat-fur-Makros-der-Domane-bereitstellen.aspx" target="_blank">schreibt</a>) eine Richtlinie f&uuml;r Softwareeinschr&auml;nkung erstellen, sondern man erstellt ein GPO in dem man den Fingerabdruck des Zertifikates zu den Vertrauensw&uuml;rdigen RDP-Herausgebern hinzuf&uuml;gt. Die entsprechende Einstellung findet sich als Computer oder Benutzerkonfiguration unter:</p>
<p><code>Administrative Vorlagen/Windows-Komponenten/Remote Desktop Services/Remotedesktopverbindungs-Client/SHA1-Fingerabdr&uuml;cke von Zertifikaten angeben, die vertrauensw&uuml;rdige RDP-Herausgeber darstellen</code></p>
<p>So wird die Identit&auml;t des Remotecomputers verifiziert und beim verbinden erh&auml;lt der Benutzer keine Abfrage ob er dem Herausgeber auch wirklich vertraut.</p>
{% include imported_disclaimer.html %}
