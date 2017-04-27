---
layout: post
title: "Windows 7 – Update von RC (7100) auf RTM (7600)"
date: 2009-10-13 19:32:14 +0200
comments: true
category: Archive
tags: ["Client"]
redirect_from: ["/post/Windows-7-e28093-Update-von-RC-auf-RTM", "/post/windows-7-e28093-update-von-rc-auf-rtm"]
author: thomas torggler
language: de
---
<!-- more -->
<p>Es ist zwar nicht wirklich empfohlen, gewünscht oder supported aber es geht. </p>  <p>Windows 7 RTM Installationsdateien auf einen (<a href="/post/Windows-7-e28093-Installation-mit-USB-Stick.aspx" target="_blank">vorbereiteten</a>) USB Stick kopieren. In der Datei \Sources\cversion.ini muss der Wert MinClient auf 7100.0 (die entsprechende Build Nr. von der man updaten will) gesetzt werden. Man sollte für so ein Update einige Zeit einplanen, bei mir dauerte es ca. zwei Stunden. Das gilt übrigens auch für unterstützte Updates. Eine normale Windows 7 Installation ist bekanntlich in 20 Minuten abgeschlossen.</p>  <p>Ein Update von x86 auf x64 oder umgekehrt lässt sich so natürlich auch nicht machen, dafür ist immer eine neuinstallation nötig. In <a href="/post/Upgrade-auf-Windows-7.aspx" target="_blank">diesem Post</a> erklärt Daniel nochmal genau welche Updates unterstützt werden.</p>  <p>Nochmal: ich empfehle dieses Workaround nicht für produktive Systeme, ich habe mein Notebook so aktualisiert und alles läuft wunderbar, aber es ist wie gesagt kein produktiv genutzter PC.</p>  <p>Gruß    <br />tt</p>
{% include imported_disclaimer.html %}
