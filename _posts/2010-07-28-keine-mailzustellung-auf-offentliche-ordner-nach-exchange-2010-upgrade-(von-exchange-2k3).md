---
layout: post
title: "Keine Mailzustellung auf Öffentliche Ordner nach Exchange 2010 Upgrade (von Exchange 2k3)"
date: 2010-07-28 17:00:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Exchange"]
redirect_from: ["/post/Keine-Mailzustellung-auf-Offentliche-Ordner-nach-Exchange-2010-Upgrade-(von-Exchange-2k3)", "/post/keine-mailzustellung-auf-offentliche-ordner-nach-exchange-2010-upgrade-(von-exchange-2k3)"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Nachdem der letzte Exchange 2003 Server aus der Struktur entfernt wird, bleiben dennoch die Administrative Gruppe und verschiedene Ordner-Strukturen in der AD Konfiguration zurück.</p>  <p>Dies kann unter Umständen den Mailfluss zu den Öffentlichen Ordnern stören. Man erhält dann folgende&#160; Unzustellbarkeitsberichte vom Exchange Server:</p>  <p><a href="/assets/image_201.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/image_thumb_199.png" width="244" height="72" /></a> </p>  <p>Um das Problem zu beheben muss zunächst der ADSI Editor geöffnet werden. In der Unterstruktur</p>  <p>&#160;</p>  <p><strong>Configuration / CN=Configuration,DC=YOURDOMAIN / CN= Services / CN= YOUR ORGANISATION / CN= Administrative Groups / CN= First administrative Group /</strong></p>  <p><a href="/assets/image_202.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/image_thumb_200.png" width="195" height="244" /></a>&#160;</p>  <p>der Ordner<strong> CN=Servers</strong> gelöscht werden (sofern dieser auch leer ist)</p>  <p>&#160;</p>  <p>Nun werden Mails den Öffentlichen Ordnern wieder zugestellt</p>  <p>Grüße   <br />dn</p>
