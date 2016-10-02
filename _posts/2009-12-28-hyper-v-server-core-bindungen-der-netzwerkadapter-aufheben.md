---
layout: post
title: "Hyper-V Server / Core Bindungen der Netzwerkadapter aufheben"
date: 2009-12-28 12:04:23 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Hyper-V", "Server"]
redirect_from: ["/post/Hyper-V-Server-Core-Bindungen-der-Netzwerkadapter-aufheben", "/post/hyper-v-server-core-bindungen-der-netzwerkadapter-aufheben"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Wenn man den Hyper-V Server bzw. den Server Core verwendet und an den Netzwerkschnittstellen die Bindungen verändern möchte, kommt man um das Editieren der Registry nicht herum.   <br />In meinen Fall möchte ich die “Datei und Druckerfreigabe” von den iSCSI Adaptern loslösen.</p>  <p>Als erstes muss die ID der Netzwerkadapter ermittelt werden</p>  <p><strong><em>wmic nicconfig get Description,SettingID</em></strong></p>  <p>Danach erhält man eine Liste mit den Adaptern und deren ID</p>  <p><a href="/assets/image_90.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/image_thumb_90.png" width="244" height="91" /></a> </p>  <p>Nun beginnt die Arbeit in der Registry: Zunächst muss der Schlüssel <strong>Bind</strong> unter </p>  <p><strong>HKEY_LOCAL_MACHINE\system\currentcontrolset\services\lanmanserver\     <br />linkage</strong></p>  <p>geöffnet werden. Hier erhält man eine Liste mit den Netzwerkadaptern und ihren Bindungen zum Protokoll der “Datei und Druckerfreigabe”.</p>  <p><a href="/assets/image_92.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/image_thumb_92.png" width="244" height="217" /></a> </p>  <p>Der nächste Schritt besteht darin, die Bindungen aufzuheben, indem man alle Zeilen wo die entsprechende Adapter-ID vorkommt löscht.   <br />Änderungen werden nach einem Reboot aktiv.</p>  <p>Anbei noch eine Liste mit den Protokollen und ihren Schlüsseln:</p>  <p><strong>File and Printer Sharing: LanmanServer     <br />Client for MS Networks: LanmanWorkstation      <br />Link-Layer Discovery Mapper I/O Driver: lltdio      <br />Link-Layer Topology Discovery Responder: rspndr      <br />TCP/IP v4: tcpip      <br />TCP/IP v6: tcpip6</strong></p>  <p>Grüße   <br />dn    </p>
