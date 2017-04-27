---
layout: post
title: "Server Logs in SQL Datenbank importieren"
date: 2009-07-29 19:39:00 +0200
comments: true
category: Archive
tags: ["Security", "SQL"]
redirect_from: ["/post/Server-Logs-in-SQL-Datenbank-importieren", "/post/server-logs-in-sql-datenbank-importieren"]
author: daniel nitz
language: de
---
<!-- more -->
<p>Als ich letztens die &Uuml;berwachungsrichtlinien der Dom&auml;ne &uuml;berarbeitet habe, sind mir mehrfach fehlgeschlagene &ldquo;Objektzugriffe&rdquo; von Clients aufgefallen, die versuchten in Bereiche einzudringen, f&uuml;r die sie keine Berechtigung haben. Da das EventLog am Server jedoch kein dauerhafter Speicher f&uuml;r Log Files und f&uuml;r Auswertungen relativ umst&auml;ndlich ist, schreibe ich die Logs in eine SQL Datenbank. Anschlie&szlig;end werden die Daten so bereinigt, dass nur noch Ereignisse des Typs &ldquo;Objektzugriff&rdquo; enthalten sind.</p>
<p>Wie ich dabei vorgegangen bin erkl&auml;rt dieser Beitrag</p>
<p><strong>Schritt 1 &ndash; SQL Server installieren</strong> <br /><br />Als erstes habe ich mir einen neuen Server auf meiner Hyper-V Umgebung bereitgestellt und auf diesen dann Microsoft SQL Server 2008 installiert.</p>
<p><strong>Schritt 2 &ndash; Tabellen erstellen</strong></p>
<p>Um meine EventLogs zu speichern habe ich 2 gleiche Tabelle erstellt. Eine f&uuml;r das tempor&auml;re Speichern der EventLogs (&ldquo;tblTMPLog&rdquo;) und eine f&uuml;r das dauerhafte Speichern (&ldquo;tblSecurityObject&rdquo;). Die tempor&auml;re Tabelle wird deshalb verwendet, da die Daten vor dem eigentlichen Speichern noch bereinigt werden.</p>
<p><a href="/assets/archive/image_11.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/archive/image_thumb_11.png" border="0" alt="image" width="244" height="187" /></a></p>
<p><strong>Schritt 3 &ndash; EventLogs exportieren</strong></p>
<p>Um die Event Logs vom Server zu exportieren hilft uns das Tool &ldquo;<a href="http://www.systemtools.com/cgi-bin/download.pl?DumpEvt">DUMPEVT</a>&rdquo;. Es exportiert Logs vom Server und schreibt sie in ein File. Die Logs werden dabei vom Server <strong>nicht</strong> gel&ouml;scht. Auch merkt sich das Tool welche Logs vom Server schon exportiert wurden, sodass ein Mehrfach-Export nicht passieren kann.</p>
<p>DUMPEVT habe ich heruntergeladen, und unter C:\DUMPEVT entpackt.</p>
<p>Nun kann man sich schon von der Befehlszeile Logs vom Server holen</p>
<p>&ldquo;C:\DUMPEVT\DUMPEVT.exe /logfile=<em><strong>sec</strong></em> /outfile=C:\DUMPEVT\<strong><em>evtlog.csv</em></strong> <br />/computer=<strong><em>localhost</em></strong></p>
<p>Die Logs werden wie angegeben in die Datei evtlog.csv geschrieben</p>
<p><a href="/assets/archive/image_12.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/archive/image_thumb_12.png" border="0" alt="image" width="283" height="109" /></a></p>
<p>Es ist auch m&ouml;glich DUMPEVT vom SQL Server aus zu steuern. Daf&uuml;r muss als erstes das Feature &ldquo;xp_cmdshell&rdquo; aktiviert werden (sofern nicht nicht geschehen).</p>
<p>Mit den folgenden Code kann man sich dann die Logs holen</p>
<p>master..xp_cmdshell 'C:\DUMPEVT\DUMPEVT.exe /logfile=<strong><em>sec </em></strong>/outfile=C:\DUMPEVT\<strong><em>evtlog.csv</em></strong> <br />/computer=<strong><em>localhost'</em></strong></p>
<p><strong><br />Schritt 4 &ndash; Logs in die SQL Datenbank importieren</strong></p>
<p>Um die Logs in SQL zu importieren wird zun&auml;chst die tempor&auml;re Tabelle gel&ouml;scht und dann &uuml;ber den <strong>BULK INSERT </strong>Befehl eingelesen.</p>
<p>DELETE FROM tblTMPLog <br />BULK INSERT tblTMPLog FROM 'c:\dumpevt\evtlog.csv' <br />WITH (FIELDTERMINATOR = ',')</p>
<p><strong>Schritt 5 &ndash; Tabelle bereinigen</strong></p>
<p>Wenn ich jetzt ein SELECT * FROM tblTMPLog ausf&uuml;hre, erhalte ich folgende Ausgabe:</p>
<p><a href="/assets/archive/image_13.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" src="/assets/archive/image_thumb_13.png" border="0" alt="image" width="421" height="186" /></a></p>
<p>Um die Daten zu bereinigen, entferne ich alle Ereignisse, die nicht die Kategorie &ldquo;Objektzugriff&rdquo;, ID &ldquo;560&rdquo; aufweisen. Im Field Data werden Sonderzeichen entfernt, die vom Export des Logs entstanden sind.</p>
<p>DELETE FROM tblTMPLog WHERE NOT Category = 'Objektzugriff' <br />DELETE FROM tblTMPLog WHERE NOT EventID = '560' <br />Update tblTMPLog Set Data = Replace(Data, ' ', '') <br />Update tblTMPLog Set Data = Replace(Data, '^', '') <br />Update tblTMPLog Set Data = Replace(Data, '`', '')</p>
<p><strong>Schritt 6 &ndash; Tempor&auml;re Tabelle &uuml;bertragen</strong></p>
<p>Nachdem die Daten bereinigt wurden, kann die tempor&auml;re Tabelle in die fixe Tabelle &uuml;bertragen werden. Wenn n&ouml;tig, kann man sich an dieser Stelle die Daten noch ein wenig zurechtr&uuml;cken.</p>
<p><em>Bsp: Nur die Information &ldquo;Objektname&rdquo; wird f&uuml;r das Field Data &uuml;bertragen.&nbsp; <br /><br />&nbsp;</em><a href="/assets/archive/image_14.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" src="/assets/archive/image_thumb_14.png" border="0" alt="image" width="289" height="200" /></a>&nbsp; <br /><em><br />UPDATE tblSecurityObject <br />SET Data = SUBSTRING(Data,CHARINDEX('Objektname:', Data)+12,CHARINDEX('Handlekennung:', Data) - CHARINDEX('Objektname:', Data)-12) <br />WHERE CHARINDEX('Objektname:', Data) &gt; 0</em></p>
<p><strong>Schritt 7 &ndash; Auswertung</strong></p>
<p>Nachdem die Daten sich auf dem SQL Server befinden, kann man diese entsprechend sauber auswerten und speichern.</p>
<p>Bsp: Programm in C# um die SQL Daten anzuzeigen</p>
<p><a href="/assets/archive/image_15.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" src="/assets/archive/image_thumb_15.png" border="0" alt="image" width="364" height="127" /></a></p>
<p>&nbsp;</p>
<p>Viel Spa&szlig; beim importieren und auswerten, dn</p>
<p><span style="font-size: xx-small;">- Vielen Dank an Robert van den Berg, der in seinem </span><a href="http://www.sql-server-performance.com/articles/per/event_logs_dumpevt_p1.aspx"><span style="font-size: xx-small;">Blog</span></a><span style="font-size: xx-small;"> das Thema bereits &auml;hnlich behandelt hat -</span></p>
{% include imported_disclaimer.html %}
