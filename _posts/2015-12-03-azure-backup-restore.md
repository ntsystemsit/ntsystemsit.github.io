---
layout: post
title: "Azure Backup: Restore"
date: 2015-12-03 19:48:00 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Cloud", "de"]
redirect_from: ["/post/Azure-Backup-Restore", "/post/azure-backup-restore"]
author: thomas torggler
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>In <a href="/post/Azure-Backup.aspx">diesem Post</a> habe ich beschrieben, wie man Daten mit Azure Backup sichert, nun wollen wir diese wiederherstellen.
</p><p>&nbsp;
&nbsp;</p><p><span style="color:#1e4e79; font-size:16pt">Backup Agent
</span></p><p>Die Wiederherstellung wird über den Azure Backup Agent gestartet, im ersten Schritt wählt man aus, welcher Server wiederhergestellt werden soll.
</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/112615_1448_AzureBackup1.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p>Anschließend werden die wiederherzustellenden Dateien über die Suche oder einen Filesystem Browser ausgewählt. 
</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/112615_1448_AzureBackup2.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/112615_1448_AzureBackup3.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p>Wie üblich kann man die Dateien am ursprünglichen Ort wiederherstellen, oder einen anderen Pfad angeben. Außerdem kann ausgewählt werden, ob die Berechtigungen (ACL) wiederhergestellt werden sollen. 
</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/112615_1448_AzureBackup4.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p>Nach der Bestätigung wird der Wiederherstellungsprozess gestartet, dieser wird auch im Azure Portal angezeigt und protokolliert.
</p><p>
&nbsp;</p><p>Weitere Infos und Doku: <a href="https://azure.microsoft.com/en-us/documentation/services/backup/">https://azure.microsoft.com/en-us/documentation/services/backup/</a></p>
