---
layout: post
title: "TMG–Fehler beim Ausführen von Abfragen im Log"
date: 2011-02-03 21:35:00 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["de", "Security", "SQL"]
redirect_from: ["/post/TMGe28093Fehler-beim-Ausfuhren-von-Abfragen-im-Log", "/post/tmge28093fehler-beim-ausfuhren-von-abfragen-im-log"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Letztens hatte ich ein seltsames Problem auf meinen TMG 2010 Server. Ich logge auf die lokale SQL Express Datenbank und konnte keine Abfragen im Log aus der TMG Konsole mehr machen. Nach dem Start einer Abfrage erscheint der folgende Fehler:</p>
<p>&nbsp;</p>
<p><a href="/assets/image_297.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/image_thumb_295.png" alt="image" width="244" height="90" border="0" /></a></p>
<p><br />Daraufhin habe ich den SQL Server &uuml;berpr&uuml;ft, konnte aber keine Probleme feststellen. Im Management Studio lie&szlig;en sich die Logs durch SELECT Anweisung abfragen.</p>
<p>Das Problem liegt an der Formatierung des Datums und taucht durch das Service Pack 1 (KB2288910) auf TMG&rsquo;s in deutscher Sprache auf.</p>
<p>Das Problem l&auml;sst sich aber relativ einfach beheben: Man verbindet sich mit dem Management Studio auf die SQL Instanz und &auml;ndert die Standard-Sprache des Benutzerkontos &ldquo;<strong>NT Authority\NetworkService</strong>&rdquo; auf <strong>Schwedisch</strong> um. Nachdem man nun die SQL Dienste neu startet kann man problemlos wieder das Abfragen im LOG starten.</p>
<p><br />Gr&uuml;&szlig;e <br />dn</p>
