---
layout: post
title: "WPAD und Server 2008"
date: 2010-01-12 21:34:00 +0100
comments: true
category: Archive
tags: ["Server 2008", "Server 2008 R2", "Server", "Client"]
redirect_from: ["/post/WPAD-und-Server-2008", "/post/wpad-und-server-2008"]
author: daniel nitz
---
<!-- more -->
<p>Heute habe ich meinen Windows Server 2008 R2 Server zum Domänencontroller promoted. D.h. Domänendienste, GC und DNS wurden installiert. Zudem habe ich als primären DNS Server die lokale Maschine angegeben.</p>  <p>Nach einiger Zeit wunderte ich mich, dass das Internet nicht mehr funktioniert. Als Gateway betreibe ich eine ISA Server 2006, der Proxy wird über WPAD automatisch konfiguriert.</p>  <p>Windows Server 2008 besitzt für DNS ein neues Sicherheitsfeature, welches WPAD nicht zulässt <strong><em>(DNS Global Query Blocklist).</em></strong></p>  <p><strong>dnscmd /info /enableglobalqueryblocklist</strong> –&gt; zeigt ob das Sicherheitsfeature aktiv ist. 1 = True, 0 False</p>  <p><strong>dnscmd /config /enableglobalqueryblocklist 0</strong> –&gt; schaltet das Sicherheitsfeature aus</p>  <p>Wenn das Sicherheitsfeature abgeschaltet wird, muss der DNS Server noch neu gestartet werden.</p>  <p>Grüße   <br />dn</p>
{% include imported_disclaimer.html %}
