---
layout: post
title: "Exchange 2010, w3wp.exe belegt sehr viel RAM"
date: 2010-07-26 18:29:11 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Exchange"]
redirect_from: ["/post/Exchange-2010-w3wpexe-belegt-sehr-viel-RAM", "/post/exchange-2010-w3wpexe-belegt-sehr-viel-ram"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Heute musste ich auf meinen Exchange Server 2010 feststellen, dass eine Instanz vom w3wp.exe Dienst läuft, die über 1 GB an RAM beansprucht.</p>  <p>Um die RAM-Auslastung zu verringern müssen die Recycling Einstellungen für den entsprechenden Applikation Pool im IIS konfiguriert werden.</p>  <p>Als erstes öffnet man den IIS Manager und wechselt zu den “Application Pools”</p>  <p>&#160;</p>  <p><a href="/assets/image_198.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/image_thumb_196.png" width="244" height="84" /></a> </p>  <p>   <br />Um den verantwortlichen Application Pool zu finden kann jeder einzelne Pool durch Rechtsklick / Recycling zum Aufräumen gezwungen werden. Ist der verantwortliche Pool gefunden kann man die Recycling Vorgänge in den Eigenschaften automatisieren. Bsp: Alle 12 Stunden den Recycling-Vorgang starten.</p>  <p>&#160;</p>  <p><a href="/assets/image_199.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/image_thumb_197.png" width="244" height="213" /></a> </p>  <p>&#160;</p>  <p>Grüße   <br />dn</p>
