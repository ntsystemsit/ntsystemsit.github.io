---
layout: post
title: "Server 2008 Core / Hyper-V Netzwerkschnittstelle umbenennen"
date: 2009-12-28 09:17:29 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Server", "Hyper-V"]
redirect_from: ["/post/Server-2008-Core-Hyper-V-Netzwerkschnittstelle-umbenennen", "/post/server-2008-core-hyper-v-netzwerkschnittstelle-umbenennen"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Um auf einem Server Core oder auch Hyper-V Server die Netzwerkschnittstelle umzubenennen, wird das Tool <strong>netsh</strong> verwendet.</p>  <p>Um z.B. “LAN-Verbindung 5” in “iSCSI 10” umzubenennen, muss folgender Befehl ausgeführt werden:</p>  <p><strong>netsh interface set interface name=”LAN-Verbindung 5” newname=”iSCSI 10”</strong></p>  <p>Grüße   <br />dn</p>
