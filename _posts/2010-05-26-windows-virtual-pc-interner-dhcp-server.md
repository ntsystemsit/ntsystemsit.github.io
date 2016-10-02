---
layout: post
title: "Windows Virtual PC / interner DHCP Server"
date: 2010-05-26 21:39:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Client"]
redirect_from: ["/post/Windows-Virtual-PC-interner-DHCP-Server", "/post/windows-virtual-pc-interner-dhcp-server"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Wenn man mit Windows Virtual PC eine DHCP Infrastruktur virtualisiert, wird der Client keine IP-Adresse bekommen, sofern die Netzwerke auf <strong>“Internes Netzwerk” </strong>geschalten wurden.    <br />Das Verhalten ist weniger ein Problem, sondern ein Feature, das sich leicht deaktivieren lässt.     <br />Sobald man die Netzwerkeinstellungen des Clients auf <strong>“Internes Netzwerk” </strong>ändert, erhalt er eine Adresse aus dem Pool <strong>196.254.0.16 – 196.254.10.254 <em>(APIPA ist von 169.254.0.0-196.254.255.255)</em></strong>    <br />    <br />Um diesen internen DHCP Server zu deaktivieren müssen zuerst alle VM’s heruntergefahren bzw. gespeichert werden. Dann muss folgende Datei geöffnet werden:</p>  <p><strong>%localappdata%\microsoft\Windows Virtual PC\options.xml</strong>    <br />    <br />In dieser Datei tauschen wir im Abschnitt dhcp enabled den Wert <strong>TRUE </strong>durch <strong>FALSE</strong>.    <br />    <br /><a href="/assets/image_129.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/image_thumb_129.png" width="244" height="98" /></a> </p>  <p>Nach dieser Änderung kann der Client IP Adressen vom aufgesetzten DHCP Server empfangen.</p>  <p>Grüße   <br />dn</p>
