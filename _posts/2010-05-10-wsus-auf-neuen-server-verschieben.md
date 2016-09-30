---
layout: post
title: "WSUS auf neuen Server verschieben"
date: 2010-05-10 21:27:00 +0200
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["Server"]
alias: ["/post/WSUS-auf-neuen-Server-verschieben.aspx", "/post/wsus-auf-neuen-server-verschieben.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p style="text-align: justify;">Daniel hat in <a href="/post/WSUS-verschieben.aspx">diesem Artikel</a> bereits dar&uuml;ber geschrieben.</p>
<p style="text-align: justify;">Im Gro&szlig;en und Ganzen habe ich die Migration genau gleich gemacht. Also WSUS auf dem neuen Server installiert, WSUS Content kopiert und mit "wsutil export datei.cab datei.log" und "wsutil import datei.cab datei.log" die Updates importiert. Allerdings wollte ich die Einstellungen nicht manuell &uuml;bernehmen, daf&uuml;r gibt es WSUSMigrate.</p>
<p style="text-align: justify;">Man findet das Tool im <a href="http://technet.microsoft.com/en-us/wsus/default.aspx" target="_blank">WSUS TechCenter</a> unter API Samples and Tools. Installiert man diese, erh&auml;lt man diverse zus&auml;tzliche Tools f&uuml;r WSUS, unter anderm WSUSMigrationImport und WSUSMigrationExport mitsamt kurzem HowTo.</p>
<p style="text-align: justify;">Also habe ich diese Tools auf dem alten sowie auf dem neuen Server installiert und mit "WSUSMigrationExport datei.xml" die Gruppen und Approvals exportiert. Auf dem neuen Server kann man dann mit Parametern entscheiden welche Einstellungen man importieren m&ouml;chte. Die verf&uuml;gbaren Parameter f&uuml;r WSUSMigrationImport sind:</p>
<ul>
<li>
<div style="text-align: justify;">TargetGroups -&gt; Importiert nur Gruppen</div>
</li>
<li>
<div style="text-align: justify;">Approvals -&gt; Importiert nur Update Approvals</div>
</li>
<li>
<div style="text-align: justify;">All -&gt; Importiert Gruppen und Approvals</div>
</li>
</ul>
<p style="text-align: justify;">Man kann auch entscheiden was mit den Gruppen passieren soll die es auf dem Zielserver eventuell schon gibt, daf&uuml;r gibt es diese Parameter:</p>
<ul>
<li>
<div style="text-align: justify;">None -&gt; Beh&auml;lt die bestehenden Gruppen</div>
</li>
<li>
<div style="text-align: justify;">DeleteUnmatchedGroups -&gt; L&ouml;scht Gruppen vom Zielserver die nicht in der XML Datei vorhanden sind</div>
</li>
</ul>
<p style="text-align: justify;">Noch ein Beispiel f&uuml;r den Import Befehl:<br />"WSUSMigrationImport datei.xml All None" -&gt; Importiert alle Gruppen und Approvals und ver&auml;ndert bestehende Gruppen auf dem Zielserver nicht.</p>
<p style="text-align: justify;">so long!<br />tomt</p>
