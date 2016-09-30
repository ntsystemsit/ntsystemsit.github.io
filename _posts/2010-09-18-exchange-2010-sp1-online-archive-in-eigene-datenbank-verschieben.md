---
layout: post
title: "Exchange 2010 SP1 Online Archive in eigene Datenbank verschieben"
date: 2010-09-18 02:14:15 +0200
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["Exchange", "Server"]
alias: ["/post/Exchange-2010-SP1-Online-Archive-in-eigene-Datenbank-verschieben.aspx", "/post/exchange-2010-sp1-online-archive-in-eigene-datenbank-verschieben.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Mit Exchange 2010 wurden Online Archive eingeführt, mit SP1 hat man die Möglichkeit Archive in einer eigenen Datenbank zu verwalten. Die Vorteile liegen auf der Hand, man kann Archivdaten so auf billigeren, langsamen Storge legen, kann verschiedene Backup/Restore SLAs für Produktiv- und Archivdaten anbieten usw…</p>  <p>Wer Online Archive bereits mit Exchange 2010 RTM verwendet hat und diese jetzt auf eine andere Datenbank schieben muss kann wie folgt vorgehen.</p>  <h6></h6>  <h4>EMC</h4>  <p>In der EMC wurden mit SP1 die Wizards für einen neuen Move Request angepasst, dort kann man das Archiv auswählen und nur dieses verschieben.</p>  <p><a href="/assets/image_270.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: ; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/image_thumb_268.png" width="244" height="213" /></a></p>  <h4>EMS</h4>  <p>In der EMS gibt es neue Parameter für das cmdlet New-MoveRequest, hier ein Beispiel in dem das Archiv des Benutzers test.user in die Datenbank adb01 verschoben wird.</p>  <p>new-MoveRequest <em>test.user</em> –ArchiveOnly –ArchiveTargetDatabase <em>adb01</em></p>  <p><em></em></p>  <p>tom</p>
