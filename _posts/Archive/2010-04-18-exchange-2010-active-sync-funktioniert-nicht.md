---
layout: post
title: "Exchange 2010 - Active Sync funktioniert nicht"
date: 2010-04-18 21:02:00 +0200
comments: true
category: Archive
tags: ["Events", "Exchange"]
redirect_from: ["/post/Exchange-2010-Active-Sync-funktioniert-nicht", "/post/exchange-2010-active-sync-funktioniert-nicht"]
author: thomas torggler
---
<!-- more -->
<p>Ja es ist ruhig zur Zeit auf ntSystems&hellip; das liegt daran dass die beiden Autoren zur Zeit ihre MCSA/MCSE Zertifizierungen auf MCITP-EA aktualisieren. Wir sind auch ganz gut im Rennen, aber einige Pr&uuml;fungen fehlen noch. Naja, bald gibt&rsquo;s hoffentlich wieder mehr zum Lesen.</p>
<p>Inzwischen die L&ouml;sung f&uuml;r folgendes Problem:</p>
<p>ActiveSync funktioniert mit Exchange 2010 nicht, <strong>Event ID: 1053 Source: MSExchange ActiveSync </strong>wird Protokolliert. Aus der Beschreibung des Fehlers erkennt man auch schon das Problem, fehlende Berechtigungen.</p>
<p><code><strong>Exchange ActiveSync doesn't have sufficient permissions to create the container &ldquo;CN&rdquo; under Active Directory &hellip; </strong></p>
<p><strong>Active directory response: 00000005: SecErr: DSID-03152492, problem 4003 (INSUFF_ACCESS_RIGHTS), data 0 </strong></p>
<p><strong>Make sure the user has inherited permission granted to domain\Exchange Servers to allow List, Create child, Delete child of object type "msExchangeActiveSyncDevices" and doesn't have any deny permissions that block such operations.</strong></code></p>
<p>Also einfach die in der Fehlermeldung beschriebenen Berechtigungen setzen, oder die Vererbung auf dem Active Directory User Objekt wieder aktivieren.</p>
<p>Um Berechtigungen im Active Directory zu setzen muss unter &ldquo;View&rdquo; die Option &ldquo;Advanced Features&rdquo; aktiviert werden. Dann&nbsp;wird unter den Eigenschaften des Benutzers der Reiter &ldquo;Security&rdquo; angezeigt.</p>
<p>tt</p>
{% include imported_disclaimer.html %}
