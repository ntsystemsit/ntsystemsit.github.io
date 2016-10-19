---
layout: post
title: "Forefront Threat Management Gateway 2010"
date: 2009-12-23 20:32:00 +0100
comments: true
category: Archive
tags: ["de", "Security"]
redirect_from: ["/post/Forefront-Thread-Management-Gateway-2010", "/post/forefront-thread-management-gateway-2010"]
author: thomas torggler
---
<!-- more -->
<p>Der Nachfolger des beliebten MS Internet Security and Acceleration Servers (ISA) ist seit Mitte November verf&uuml;gbar. Nat&uuml;rlich wurde der Name ge&auml;ndert&nbsp;sowas ist&nbsp;nach einigen Versionen&nbsp;immer n&ouml;tig ;) Das Ding wurde in die Forefront Produktlinie aufgenommen und hei&szlig;t jetzt Forefront Threat Management Gateway 2010. TMG gibt es wie ISA als Standard und Enterprise Edition, die <strong>Unterschiede</strong> findet man <a href="http://technet.microsoft.com/en-us/library/ee207137.aspx" target="_blank">hier</a>.</p>
<p>Wichtig zu erw&auml;hnen ist dass Forefront TMG nur mehr als 64 Bit Version verf&uuml;gbar ist, es gibt eine Testversion f&uuml;r 32 Bit Systeme, ist Produktiv allerdings nicht unterst&uuml;tzt. <br />Die Genauen <strong>Systemvoraussetzungen</strong> gibt es <a href="http://technet.microsoft.com/en-us/library/dd896981.aspx" target="_blank">hier</a>.</p>
<p>Die wichtigsten neuen Features kurz im &Uuml;berblick:</p>
<ul>
<li>Web Protection Subscription Service
<ul>
<li>Bietet HTTP/HTTPS Traffic Inspection</li>
<li>URL Filterung in Zusammenarbeit mit MRS (Microsoft&nbsp;Reputation Services) mehr dazu z.B. bei <a href="http://edge.technet.com/Media/Forefront-TMG-URL-Filtering-and-MRS/">Technet Edge</a></li>
</ul>
</li>
<li>E-Mail Support
<ul>
<li>arbeitet mit Exchange Edge Transport zusammen</li>
</ul>
</li>
<li>NIS Network Inspection System</li>
<li>Intrusion Prevention</li>
<li>Enhanced NAT
<ul>
<li><strong>endlich </strong>eine 1-to-1 NAT Funktion, d.h. man kann selbst entscheiden welche interne Adresse auf welche externe &uuml;bersetzt wird</li>
</ul>
</li>
<li>VoIP Support</li>
<li>64 Bit Support</li>
</ul>
<p>Startet man das Setup bekommt man mal etwas wirklich cooles, das Preparation Tool.&nbsp;Dieses Tool installiert alle&nbsp;ben&ouml;tigten Serverrollen und Features. Diese sind je nach Installation unterschiedlich:</p>
<p>Forefront TMG services</p>
<ul>
<li>Windows Installer 4.5</li>
<li>.Net Framework 3.5 SP1</li>
<li>Windows PowerShell</li>
<li>Windows Web Services API (WWSAPI)</li>
<li>Network Policy Server (NPAS-Policy-Server)</li>
<li>NPAS Routing and Remote Access Services (NPAS-RRAS-Services)</li>
<li>Active Directory Lightweight Directory Services (ADLDS)</li>
<li>Network Load Balancing (NLB)</li>
</ul>
<p>Forefront TMG management only</p>
<ul>
<li>Windows Installer 4.5</li>
<li>.Net Framework 3.5 SP1</li>
<li>Windows PowerShell</li>
</ul>
<p>Forefront TMG EMS (nur Enterprise Version)</p>
<ul>
<li>Windows Installer 4.5</li>
<li>.Net Framework 3.5 SP1</li>
<li>Windows PowerShell</li>
<li>Active Directory Lightweight Directory Services (ADLDS)</li>
</ul>
<p><a href="/assets/archive/image_87.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_87.png" alt="image" width="244" height="171" border="0" /></a></p>
<p>Ist der Preparation Wizard abgeschlossen, kann mit der Installation des TMG begonnen werden.</p>
<p><a href="/assets/archive/image_88.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_88.png" alt="image" width="244" height="180" border="0" /></a></p>
<p>Die Installation dauert einige Zeit, wenn sie abgeschlossen ist kann man die Management Konsole &ouml;ffnen und mit der Konfiguration beginnen. Zuerst sind noch mit einfachen Wizards die Netzwerkeinstellungen, Updates und URL Filtering bzw. Web Protection Subscription zu konfigurieren.</p>
<p><a href="/assets/archive/image_89.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_89.png" alt="image" width="244" height="219" border="0" /></a></p>
<p>Wenn jetzt noch der Web Access Wizard ausgef&uuml;hrt wird kann man gleich noch eine erste Regel erstellen. Man kann ausw&auml;hlen welche URL Kategorien man sperren m&ouml;chte, ob man Web und HTTPS inspection aktivieren m&ouml;chte und wenn ja mit welchem Zertifikat. Au&szlig;erdem kann hier gleich das Caching aktiviert werden.</p>
<p>Alles in allem scheint TMG wirklich ein sehr interessantes Produkt zu werden, das deutlich mehr kann als nur den ISA Server zu ersetzen. In n&auml;chster Zeit werde ich sicher noch einiges dar&uuml;ber berichten.</p>
<p>viele Gr&uuml;&szlig;e.<br />tom</p>
{% include imported_disclaimer.html %}
