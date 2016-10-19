---
layout: post
title: "Windows 8 - Installation in VHD"
date: 2011-09-16 22:00:00 +0200
comments: true
category: Archive
tags: ["de", "Client"]
redirect_from: ["/post/Windows-8-Installation-in-VHD", "/post/windows-8-installation-in-vhd"]
author: thomas torggler
---
<!-- more -->
<p>In diesem Post (<a title="Windows 7 - Nativer VHD Support" href="/post.aspx?id=6b426c87-4f8a-4911-a884-8ccfdeeb5ba4">Windows 7 - Nativer VHD Support</a>) habe ich vor einiger Zeit beschrieben wie man Windows 7 in eine VHD installieren kann.</p>
<p>Nun, das funktioniert genau gleich f&uuml;r das&nbsp;Windows 8 Developer Preview! Hier nochmal eine kuze Zusammenfassung:</p>
<ol>
<li>VHD erstellen: Diskpart; <strong>create vdisk file="E:\VHD\win8-1.vhd" type=fixed maximum=20480</strong> erstellt eine 20GB VHD vom Typ "Fixed", die Datei belegt also den vollen Speicher auf der Festplatte</li>
<li>Von Windows 8 Installationsmedium booten</li>
<li>mit <strong>"Shift"+"F10" </strong>eine Eingabeaufforderung &ouml;ffnen</li>
<li>VHD ausw&auml;hlen: Diskpart; <strong>select vdisk file="E:\VHD\win8-1.vhd"</strong></li>
<li><strong>attach vhd</strong></li>
<li>Diskpart und Eingabeaufforderung schlie&szlig;en, Windows 8 installieren.</li>
</ol>
<p>Der neue Bootmanager ist &uuml;brigens auch im Metrostyle ;)</p>
<p>Wie Windows 7 kann man auch <a href="/post.aspx?id=926634b0-a77d-4cf4-a201-48074a5e0cf1">Windows 8 vom USB Stick installieren</a>, auch diese Anleitung funtioniert weiterhin!</p>
<p>enjoy!!</p>
{% include imported_disclaimer.html %}
