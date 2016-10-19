---
layout: post
title: "WSUS auf anderen Server verschieben"
date: 2010-01-12 22:18:00 +0100
comments: true
category: Archive
tags: ["Server"]
redirect_from: ["/post/WSUS-verschieben", "/post/wsus-verschieben"]
author: daniel nitz
---
<!-- more -->
<p>Um den WSUS Server auf einer anderen physischen Maschine zu verschieben müssen folgende Schritte unternommen werden:</p>  <p>1) WSUS auf dem Zielserver installieren</p>  <p>2) Einstellungen manuell vom Quellserver zum Zielserver übernehmen</p>  <p>3) Mit NTBackup das Verzeichnis WSUSContent vom Quellserver sichern (Kopieren ist auch möglich)</p>  <p><a href="/assets/archive/image_93.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_93.png" width="220" height="244" /></a> </p>  <p>4) Daten mit NTBackup auf dem Zielserver in den entsprechenden Ordner wiederherstellen</p>  <p>5) Metadaten vom Quellserver exportieren</p>  <ul>   <li>CMD öffnen und zum Ordner <strong>Tools </strong>unter <strong>C:\Programme\Update Services\</strong> wechseln</li>    <li>Folgenden Befehl eintippen um die Metadaten zu exportieren: <strong>wsusutil.exe export export.cab export.log</strong></li>    <li>2 Files wurden erstellt (Export.cab und Export.log)</li> </ul>  <ul><a href="/assets/archive/image_94.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_94.png" width="244" height="121" /></a> </ul>  <p>6) Metadaten zum Zielserver importieren</p>  <ul>   <li>Mit dem Befhl <strong>wsusutil.exe import export.cab import.log</strong> werden die zuvor exportierten Metadaten am Zielserver importiert</li>    <br />    <p>     <ul>Info: Es kann einige Zeit vergehen, bis der Import Vorgang vollständig abgeschlossen wurde.</ul> 7) GPO abändern und auf den neuen WSUS Server verweisen</p>    <p>Grüße     <br />dn</p> </ul>
{% include imported_disclaimer.html %}
