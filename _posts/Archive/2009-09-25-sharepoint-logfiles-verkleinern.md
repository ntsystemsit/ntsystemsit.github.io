---
layout: post
title: "Sharepoint LogFiles verkleinern"
date: 2009-09-25 18:52:00 +0200
comments: true
category: Archive
tags: ["Sharepoint"]
redirect_from: ["/post/Sharepoint-LogFiles-verkleinern", "/post/sharepoint-logfiles-verkleinern"]
author: daniel nitz
language: de
---
<!-- more -->
<p>In letzter Zeit ist mir aufgefallen, dass der freie Speicherplatz auf meinem Sharepoint-Server immer kleiner wird. Nachdem ich mich ein bisschen auf der Partition umgesehen hatte fielen mir die großen LOG Files der Sharepoint Datenbank auf.    <br />Wenn ihr wie ich Sharepoint in den Standardeinstellungen inkl. der Windows Internal Database installiert habt, so legt Sharepoint die Files unter <strong>C:\WINDOWS\SYSMSI\SSEE\MSSQL.2005\MSSQL\Data</strong> ab.     <br />    <br />In meinem Fall hat das Content-Log 8 GB und das Config-Log 5 GB verbraten.     <br />    <br />Um die LogFiles nun zu verkleinern muss zunächst <a href="http://www.microsoft.com/downloadS/details.aspx?familyid=08E52AC2-1D62-45F6-9A4A-4B76A8564A2B&amp;displaylang=de" target="_blank">SQL Server Management Express</a> installiert werden.</p>  <p>Danach muss die Datenbank mit den folgenden Parameter geöffnet werden: <a href="file://\\.\pipe\MSSQL$MICROSOFT##SSEE\sql\query"><strong>\\.\pipe\MSSQL$MICROSOFT##SSEE\sql\query</strong></a></p>  <p><a href="/assets/archive/image_71.png" target="_blank"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_71.png" width="244" height="180" /></a> </p>  <p>Nachdem die Datenbank geöffnet wurde wählt man die Datenbank aus, deren LogFiles verkleinert werden sollen. Nach einem Rechtsklick auf die Datenbank wählt man <strong>Tasks / Verkleinern / Dateien</strong></p>  <p>Nun erscheint das Optionsfenster. Hier muss als Dateityp <strong>Protokoll </strong>ausgewählt werden. Als Information erhält man hier wie groß das aktuelle LogFile und zu wie viel es belegt ist. Im unteren Bereich kann der Speicherplatz neu organisiert werden. (In meinem Fall 2 GB)</p>  <p><a href="/assets/archive/image_72.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_72.png" width="244" height="218" /></a> </p>  <p>Nachdem die Eingaben bestätigt werden, schrumpft das LogFile auf die angegebene Größe zusammen.    <br />Dieser Schritt kann für alle Datenbanken vorgenommen werden, dessen LogFile zu groß ist.</p>  <p>Grüße, dn</p>
{% include imported_disclaimer.html %}
