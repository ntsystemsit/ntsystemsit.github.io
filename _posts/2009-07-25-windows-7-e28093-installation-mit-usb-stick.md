---
layout: post
title: "Windows 7 – Installation mit USB Stick"
date: 2009-07-25 22:12:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Client"]
redirect_from: ["/post/Windows-7-e28093-Installation-mit-USB-Stick", "/post/windows-7-e28093-installation-mit-usb-stick"]
author: thomas torggler
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Windows 7 kann von einem USB Wechseldatentr&auml;ger aus installiert werden. So kann es problemlos auf Netbooks und anderen Ger&auml;ten ohne ein optisches Laufwerk installiert werden. Ich verwende eigentlich immer diese Variante da USB Sticks in der Regel schneller sind als DVD Laufwerke.</p>
<p>Um den USB Stick vorzubereiten verwendet man das Programm diskpart (standartm&auml;&szlig;ig installiert). Diskpart wird in einer Eingabeaufforderung mit administrativen Rechten gestartet.</p>
<p>Wenn Diskpart gestartet wurde "list disks" ausf&uuml;hren, um die installierten Laufwerke anzuzeigen.</p>
<p>Mit "select disk" wird der USB Stick ausgew&auml;hlt, dann wird er mit "clean" gel&ouml;scht (ACHTUNG: Alle Daten auf dem Stick gehen verloren)</p>
<p>Jetzt wird mit "create partition primary" eine Prim&auml;re Partition erstellt die mit "active" als Aktiv gesetzt wird (damit das BIOS davon booten kann). Jetzt fehlt noch das Dateisystem das mit "format fs=fat32 quick" festgelegt wird. Mit "assign" wei&szlig;t man noch einen Laufwerksbuchstaben zu.</p>
<p><a href="/assets/image_7.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; margin-left: 0px; border-left-width: 0px; margin-right: 0px" title="image" src="/assets/image_thumb_7.png" border="0" alt="image" width="244" height="198" /></a></p>
<p>Dieser Prozess kann auch &uuml;ber GUI ausgef&uuml;hrt werden, wichtig ist nur dass am Ende eine prim&auml;re, aktive Fat32 Partition auf dem USB Stick vorhanden ist.</p>
<p>Zu Schluss kopiert man noch alle Daten von der Windows 7 DVD auf den USB Stick. So erstellt man einen Bootf&auml;higen Stick, man muss nur noch dem BIOS beibringen davon zu starten und schon kann Windows installiert werden.</p>
<p>Genauere Details zu Diskpart gibts im entsprechenden <a href="http://support.microsoft.com/kb/300415/de" target="_blank">KB Artikel.</a></p>
