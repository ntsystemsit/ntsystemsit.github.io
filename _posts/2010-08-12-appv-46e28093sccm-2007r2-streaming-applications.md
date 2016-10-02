---
layout: post
title: "AppV 4.6–SCCM 2007R2 Streaming Applications"
date: 2010-08-12 18:48:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["AppV", "Server"]
redirect_from: ["/post/AppV-46e28093SCCM-2007R2-Streaming-Applications", "/post/appv-46e28093sccm-2007r2-streaming-applications"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Seit System Center Configuration Manager 2007 R2 kann man Virtuelle Applikationen verteilen. Daf&uuml;r m&uuml;ssen ein paar Einstellungen im SCCM gemacht werden, der SCCM Advanced Client sowie der AppV Client m&uuml;ssen auf den Clients installiert werden.</p>
<h4>Einstellungen SCCM 2007R2</h4>
<ul>
<li>Eigenschaften von &ldquo;Site Database, Site Management, <em>Sitename,</em> Site Settings, Client Agents, Advertised Programs Client Agent&rdquo; &ouml;ffnen 
<ul>
<li>unter General muss &ldquo;Allow virtual application package advertisemet&rdquo; muss werden <br /><a href="/assets/image_209.png"><img class="wlDisabledImage" style="border-right-width: 0px; margin: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_207.png" border="0" alt="image" width="226" height="244" /></a> </li>
</ul>
</li>
<li>Eigenschaften von &ldquo;Site Database, Site Management, <em>Sitename,</em> Site Settings, Site Systems, <em>Servername,</em> ConfigMgr distribution point&rdquo; &ouml;ffnen 
<ul>
<li>unter General muss &ldquo;Allow Clients to transfer content from this distribution Point using BITS, HTTP, and HTTPS&rdquo; aktiviert werden </li>
<li>unter Virtual Application muss &ldquo;Enable virtual application streaming&rdquo; aktiviert werden <br /><a href="/assets/image_210.png"><img class="wlDisabledImage" style="border-right-width: 0px; margin: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_208.png" border="0" alt="image" width="214" height="244" /></a>&nbsp;<a href="/assets/image_211.png"><img class="wlDisabledImage" style="border-right-width: 0px; margin: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_209.png" border="0" alt="image" width="214" height="244" /></a> </li>
</ul>
</li>
</ul>
<h4>AppV Client deployment</h4>
<ul>
<li>Unter &ldquo;%ProgramFiles%\Microsoft Configuration Manager\Tools\VirtualApp&rdquo; die Datei &ldquo;AppVirtMgmtClient.sms&rdquo; anpassen. 
<ul>
<li>Version=4.6 (wenn AppV Client 4.6 verwendet wird) </li>
<li>Commandline=setup.exe /s /v"/quiet /norestart /qn"0\"\" (<a href="http://technet.microsoft.com/en-us/library/cc843737.aspx" target="_blank">Application Virtualization Client Installer Command-Line Parameters</a>) </li>
</ul>
</li>
<li>Ein neues Paket aus einer Definition erstellen: &ldquo;Site Database, Computer Management, Software Distribution, Packages&rdquo; Rechtsklicken und &ldquo;New, Package From Definition&rdquo; w&auml;hlen. </li>
<li>Mit &ldquo;Browse&rdquo; die Datei AppVirtMgmtClient.sms ausw&auml;hlen <br /><a href="/assets/image_212.png"><img class="wlDisabledImage" style="border-right-width: 0px; margin: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_210.png" border="0" alt="image" width="244" height="208" /></a> </li>
<li>Im n&auml;chten Fenster &ldquo;Always obtain files from a source directory&rdquo; w&auml;hlen <br /><a href="/assets/image_213.png"><img class="wlDisabledImage" style="border-right-width: 0px; margin: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_211.png" border="0" alt="image" width="244" height="208" /></a> </li>
<li>Als Pfad wird ein Netzwerkfreigabe gew&auml;hlt auf welcher der AppV Client entpackt wurde, folgende Dateien und Ordner sollten vorhanden sein: 
<ul>
<li>setup.exe </li>
<li>setup.msi </li>
<li>Support\Watson\dw20shared.msi </li>
</ul>
</li>
<li>Auf Finish klicken und das Paket wurde erstellt </li>
</ul>
<p>Jetzt muss noch ein Advertisement f&uuml;r das Paket erstellt werden.</p>
<ul>
<li>Rechtsklick auf &ldquo;Site Database, Computer Management, Software Distribution, Advertisements&rdquo; und New Advertisement w&auml;hlen. Einen Namen eingeben, das Paket ausw&auml;hlen welches im vorigen Schritt erstellt wurde und eine Collection ausw&auml;hlen welche den Client erhalten soll. <br /><a href="/assets/image_214.png"><img class="wlDisabledImage" style="border-right-width: 0px; margin: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_212.png" border="0" alt="image" width="244" height="211" /></a> </li>
<li>Mandatory Assignment hinzuf&uuml;gen <br /><a href="/assets/image_215.png"><img class="wlDisabledImage" style="border-right-width: 0px; margin: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_213.png" border="0" alt="image" width="244" height="157" /></a> </li>
<li>Art der Verteilung w&auml;hlen, in dem Fall &ldquo;Download from distribution point and run locally&rdquo; <br /><a href="/assets/image_216.png"><img class="wlDisabledImage" style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_214.png" border="0" alt="image" width="244" height="211" /></a> </li>
<li>An dieser Stelle kann auf Finish geklickt werden, f&uuml;r die &uuml;brigen Einstellungen akzeptiere ich die Standards. </li>
</ul>
<p>Jetzt wurde das Paket und die Zuweisung erstellt, die Clients die in der Collection sind erhalten die Software.</p>
<h4>Virtuelle Applikation importieren</h4>
<p>Nachdem die Virtuelle Applikation im Sequencer erstellt wurde (wie z.B. <a href="/post/AppVe28093Adobe-Reader-Sequencing-Receipe.aspx" target="_blank">hier erkl&auml;rt</a>) muss sie im System Center Configuration Manager importiert werden.</p>
<ul>
<li>Ein neues virtuelles Paket erstellen: &ldquo;Site Database, Computer Management, Software Distribution, Packages&rdquo; Rechtsklicken und &ldquo;New, Virtual Application Package&rdquo; w&auml;hlen. Im ersten Fenster muss die XML Datei des Pakets angegeben werden. <br /><a href="/assets/image_217.png"><img class="wlDisabledImage" style="border-right-width: 0px; margin: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_215.png" border="0" alt="image" width="244" height="203" /></a> </li>
<li>Das Fenster &ldquo;General&rdquo; ist eigentlich selbsterkl&auml;rend, Name, Hersteller usw. k&ouml;nnen eingegeben werden. </li>
<li>Im Fenster &ldquo;Data Source&rdquo; wird eine Netzwerkfreigabe angegeben auf der das Paket erstellt wird, von dieser Freigabe wird das Paket dann auf die Distribution Points verteilt (<strong>Achtung:</strong> der Angegebene Order muss existieren und vorhandene Daten werden &uuml;berschrieben!) <br /><a href="/assets/image_218.png"><img class="wlDisabledImage" style="border-right-width: 0px; margin: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_216.png" border="0" alt="image" width="244" height="203" /></a> </li>
<li>Jetzt kann wieder auf Finish geklickt werden, die Standards der restlichen Einstellungen sind ok. </li>
</ul>
<p>Das Virtuelle Paket wurde nun also auch erstellt. Jetzt fehlt noch ein Advertisement f&uuml;r dieses.</p>
<ul>
<li>Das Advertisement wird genau gleich erstellt wie jenes f&uuml;r den AppV Client, der einzige unterschied liegt in der Auswahl der Verteilungsmethode hier w&auml;hlt man &ldquo;Stream virtual applications from distribution point&rdquo; <br /><a href="/assets/image_219.png"><img class="wlDisabledImage" style="border-right-width: 0px; margin: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_217.png" border="0" alt="image" width="216" height="244" /></a>&nbsp; </li>
</ul>
<p><br />Nach kurzer Zeit werden die Clients auch dieses Advertisement erhalten. Sind Desktopverkn&uuml;pfungen oder Dateizuordnungen konfiguriert werden diese auf dem Client bereits angewandt. Das hei&szlig;t ein .pdf File bekommt in diesem Beispiel bereits den virtuellen Adobe Reader zugewiesen. Beim ersten Starten des Programmes wird der Inhalt des Paketes heruntergeladen, d.h. der erste Start dauert ein bisschen, alle weiteren Starts verlaufen wesentlich schneller, dabei wird nur auf Updates &uuml;berpr&uuml;ft, alle anderen Files sind bereits lokal vorhanden.</p>
<p>tom</p>
