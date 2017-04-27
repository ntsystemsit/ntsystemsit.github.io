---
layout: post
title: "Create VMWare ESXi Flash Drive"
date: 2011-03-11 20:13:00 +0100
comments: true
category: Archive
tags: ["Server", "VMware"]
redirect_from: ["/post/Create-VMWare-ESXi-Flash-Drive", "/post/create-vmware-esxi-flash-drive"]
author: thomas torggler
language: de
---
<!-- more -->
<p>Der Hypervisor von VMWare kann auf einem USB Stick installiert werden, so kann man die vorhandenen Festplatten des Servers als Datastore f&uuml;r Virtuelle Maschinen verwenden oder Server ohne interne Festplatten als ESXi Hosts verwenden.</p>
<p>Dazu braucht man:</p>
<ul>
<li>einen USB Stick (min. 2GB)</li>
<li>VMWare Workstation (oder <a href="http://downloads.vmware.com/d/info/desktop_downloads/vmware_player/3_0" target="_blank">Player</a>)</li>
<li>VMWare ESXi Installationsimage (<a href="http://downloads.vmware.com/d/info/datacenter_downloads/vmware_vsphere_hypervisor_esxi/4_0" target="_blank">VMWare ESXi</a>)</li>
</ul>
<p>Dann kanns losgehen, mit VMWare Workstation (oder Player) wird eine neue Virtuelle Maschine erstellt.</p>
<p><a href="/assets/archive/image_300.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_298.png" border="0" alt="image" width="244" height="222" /></a></p>
<p>Als Pfad f&uuml;r das Installationsimage wird das Image von ESXi 4.1 angegeben.</p>
<p><a href="/assets/archive/image_301.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_299.png" border="0" alt="image" width="244" height="222" /></a></p>
<p>Als Gastbetriebssystem wird VMware ESX ausgew&auml;hlt.</p>
<p><a href="/assets/archive/image_302.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_300.png" border="0" alt="image" width="244" height="222" /></a></p>
<p>Ein Ordner f&uuml;r die Konfigurationsdateien und die virtuelle Festplatte muss angegeben werden, hier kann einfach ein Ordner auf der Lokalen Festplatte verwende werden.</p>
<p><a href="/assets/archive/image_303.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_301.png" border="0" alt="image" width="244" height="222" /></a></p>
<p>Die Gr&ouml;&szlig;e der virtuellen Festplatte kann man so akzeptieren, diese wird nicht verwendet.</p>
<p><a href="/assets/archive/image_304.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_302.png" border="0" alt="image" width="244" height="222" /></a></p>
<p>Die virtuelle Maschine ist eigentlich erstellt, allerdings muss noch ein USB Controller hinzugef&uuml;gt werden, dazu auf &ldquo;Customize Hardware&rdquo; klicken</p>
<p><a href="/assets/archive/image_305.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_303.png" border="0" alt="image" width="244" height="222" /></a></p>
<p>und den USB Controller hinzuf&uuml;gen.</p>
<p><a href="/assets/archive/image_306.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_304.png" border="0" alt="image" width="244" height="213" /></a></p>
<p><a href="/assets/archive/image_307.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_305.png" border="0" alt="image" width="244" height="213" /></a></p>
<p><a href="/assets/archive/image_308.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_306.png" border="0" alt="image" width="244" height="177" /></a></p>
<p>Jetzt kann man die virtuelle Maschine starten, und auch gleich &uuml;ber &ldquo;VM&rdquo; und &ldquo;Removable Devices&rdquo; den USB Stick verbinden (muss nat&uuml;rlich am PC angeschlossen sein&hellip;)</p>
<p><a href="/assets/archive/image_309.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_307.png" border="0" alt="image" width="244" height="52" /></a></p>
<p>Bei der Installation des ESXi Servers wird der USB Stick als Ziel angegeben, ACHTUNG: Alle Daten auf dem USB Stick werden gel&ouml;scht, der Stick wird neu formatiert.</p>
<p><a href="/assets/archive/image36.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/archive/image36_thumb.png" border="0" alt="image" width="244" height="114" /></a></p>
<p>Sobald die Installation abgeschlossen ist, kann man die VM herunterfahren, auf dem USB Stick ist jetzt VMWare ESXi installiert. Von diesem Stick kann man jeden (unterst&uuml;tzten) Server booten und als ESXi Host verwenden.</p>
<p>&nbsp;</p>
<p>Achtung: bei der Installation auf USB wird keine Scratch Partition erstellt, Infos dazu hier: <a href="/post/ESXi&ndash;Persistent-Scratch-Location.aspx">/post/ESXi&ndash;Persistent-Scratch-Location.aspx</a></p>
<p>&nbsp;</p>
<p>so long,   <br />tom</p>
{% include imported_disclaimer.html %}
