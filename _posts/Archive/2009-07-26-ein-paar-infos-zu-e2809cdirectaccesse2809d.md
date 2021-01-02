---
layout: post
title: "Ein paar Infos zu “DirectAccess”"
date: 2009-07-26 21:25:10 +0200
comments: true
category: Archive
tags: ["Server-2008-R2", "Client", "Server"]
redirect_from: ["/post/Ein-paar-Infos-zu-e2809cDirectAccesse2809d", "/post/ein-paar-infos-zu-e2809cdirectaccesse2809d"]
author: daniel nitz
language: de
---
<!-- more -->
<p>Mit Windows 7 und Windows Server 2008 R2 kommt ein neues Remote-Verbindungs-Feature: DirectAccess. </p>  <p>DirectAccess ist der traditionellen VPN Verbindung sehr ähnlich, bietet jedoch entscheidende Vorteile: Clientcomputer initiieren automatisch eine gesicherte Verbindung zum Ziel. Somit bedarf es keinen Eingriff des Users, denn er ist sofort mit dem Zielnetzwerk verbunden. </p>  <p>DirectAcces baut eine IPv6 Verbindung zum DirectAccess Server auf. Sollte die Firewall den IPv6 Verkehr blocken, so wird IP over HTTPS verwendet. Somit kann also jede Firewall mit geöffneten Web-Ports passiert werden.</p>  <p>Man kann DirectAccess in 3 verschiedene Modi betreiben:</p>  <ul>   <li><strong>Full Intranet Access</strong>: Die Verbindung vom Clientcomputer über das Internet ist authentifiziert und verschlüsselt </li>    <li><strong>Selected Server Access</strong>: Die Verbindung vom Clientcomputer über das Internet ist authentifiziert und verschlüsselt. Die Verbindung vom Clientcomputer zum internen Netzwerk ist authentifiziert </li>    <li><strong>End-to-End Access</strong>: Die Verbindung vom Clientcomputer über das Internet zum internen Netzwerk ist verschlüsselt und authentifiziert </li> </ul>  <p><a href="/assets/archive/image_10.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_10.png" width="237" height="244" /></a> </p>  <p>Ein weiterer Vorteil bezieht sich auf das Patch- und Richtlinienmanagement. Befindet sich der Client mehrere Wochen nicht im internen Netzwerk, könnte es unter Umständen sein, dass er in dieser Zeit keine Updates vom Server bezieht. Mit DirectAccess ist der Client ständig in Verbindung mit den internen Servern und kann Updates sowie die aktuellen GPO’s beziehen.</p>  <p>Um DirectAccess benutzen zu können ist zwingend Windows 7, Windows Server 2008 R2 und eine PKI nötig. Der Client muss außerdem der Domäne angehören.</p>  <p>Grüße, dn</p>
{% include imported_disclaimer.html %}
