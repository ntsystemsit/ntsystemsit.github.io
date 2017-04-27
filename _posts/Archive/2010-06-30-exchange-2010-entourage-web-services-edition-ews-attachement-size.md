---
layout: post
title: "Exchange 2010 Entourage Web Services Edition- EWS Attachement Size"
date: 2010-06-30 21:03:00 +0200
comments: true
category: Archive
tags: ["Exchange", "Server"]
redirect_from: ["/post/Exchange-2010-Entourage-Web-Services-Edition-EWS-Attachement-Size", "/post/exchange-2010-entourage-web-services-edition-ews-attachement-size"]
author: thomas torggler
language: de
---
<!-- more -->
<p>&nbsp;</p>
<p>Auch MAC Clients k&ouml;nnen mit Exchange 2010 arbeiten. Daf&uuml;r gibt es entweder den Microsoft Entourage Client oder den integrierten MAC Mail Client. Entourage muss in der Web Services Edition verwendet werden, da Exchange 2010 kein WebDAV mehr unterst&uuml;tzt, die aktuelle Version von MAC Mail (Snow Leopard) macht das von Haus aus.</p>
<p>&nbsp;</p>
<p>Will man allerdings einen Anhang gr&ouml;&szlig;er als ca. 12MB verschicken meckert sowohl Entourage als auch MAC Mail. Entourage bringt folgende Fehlermeldung: &ldquo;HTTP-Fehler: Die Anforderung kann vom Server nicht verarbeitet werden&rdquo;.</p>
<p>&nbsp;</p>
<p><a href="/assets/archive/amc.jpg"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="HTTP-Fehler: Die Anforderung kann vom Server nicht verarbeitet werden" src="/assets/archive/amc_thumb.jpg" border="0" alt="HTTP-Fehler: Die Anforderung kann vom Server nicht verarbeitet werden" width="244" height="208" /></a></p>
<p>&nbsp;</p>
<p>Man kontrolliert also erstmal die Gr&ouml;&szlig;enbeschr&auml;nkungen der betreffenden Mailbox, die der Send und Receive Connectoren und in der Transport Konfiguration, am schnellsten geht das wohl in der Management Shell mit folgenden cmdlets:</p>
<ul>
<li>get-TransportConfig | fl maxSendSize </li>
<li>get-SendConnector | fl name, maxMessageSize </li>
<li>get-ReceiveConnector | fl name, maxMessageSize </li>
<li>get-Mailbox name | fl maxSendSize</li>
</ul>
<p>&nbsp;</p>
<p>Sind die Werte an diesen Stellen ok, dann kann der User mit dem Microsoft Office Outlook Client den Anhang ohne Probleme senden, nur mit Entourage bzw. Mac Mail tritt das Problem auf.</p>
<p>&nbsp;</p>
<p>Das Problem liegt am Exchange Web Service, das ist eine ASP.NET Applikation und verwendet daher Konfigurationsdateien aus der IIS Konfiguration. Diese k&ouml;nnen in weder in der EMS noch in EMC gesehen bzw. ge&auml;ndert werden.</p>
<p>&nbsp;</p>
<p>Nun gibt es leider keine ausreichende Dokumentation von Microsoft, also versuche ich hier alles, was in den tiefen des Internet herumschwirrt, zusammenzufassen.</p>
<p>&nbsp;</p>
<p><strong>Backup</strong></p>
<p>Achtung: Vor der Bearbeitung von Konfigurationsdateien unbedingt ein Backup der Datei erstellen!!</p>
<p>&nbsp;</p>
<p><strong>EWS </strong></p>
<p>Treten die Probleme nur im Zusammenhang mit EWS auf reicht folgende &Auml;nderung der Konfiguration am Client Access Server (bzw. an alles CAS wenn mehrere im Einsatz sind):</p>
<p>&nbsp;</p>
<ul>
<li>In der Datei %windir%\Program Files\Microsoft\Exchange Server\V14\ClientAccess\exchweb\ews\web.config muss der Wert von &ldquo;maxReceivedMessageSize&rdquo; unter &lt;EWSMessageEncoderSoap11Element /&gt; ge&auml;ndert werden, <strong>ACHTUNG: Angabe in Byte!!</strong> 
<ul>
<li>Im folgenden Beispiel wird der Wert auf 50MB gesetzt <br />&lt;EWSMessageEncoderSoap11Element /&gt; <br />&lt;httpsTransport maxReceivedMessageSize="52428800" &hellip;.&gt; </li>
</ul>
</li>
</ul>
<p>&nbsp;</p>
<ul>
<li>Mit appcmd.exe muss noch der Wert von maxAllowedContentLength angepasst werden, <strong>ACHTUNG: Angabe in Byte!!</strong> 
<ul>
<li>Im folgenden Beispiel wird der Wert auf 50MB gesetzt <br />appcmd set config "Default Web Site/ews" -section:requestFiltering /requestLimits.maxAllowedContentLength:52428800 </li>
</ul>
</li>
</ul>
<p>&nbsp;</p>
<ul>
<li>In manchen Foren bzw. anderen Blogs findet man immer wieder den Parameter &ldquo;maxRequestLength&rdquo; der auch in der web.config Datei vom EWS angepasst werden soll. Allerdings hat dieser Parameter per Default schon den gr&ouml;&szlig;tm&ouml;glichen Wert eingestellt, ich rate also davon ab diesen Parameter zu ver&auml;ndern.</li>
</ul>
<p>&nbsp;</p>
<ul>
<li>Die Internet Information Services m&uuml;ssen neu gestartet werden (iisreset) um die &Auml;nderung zu &uuml;bernehmen.</li>
</ul>
<p>&nbsp;</p>
<p><strong>OWA</strong></p>
<p>Dieses Problem gibt es auch in Outlook Web App, man kann standardm&auml;&szlig;ig keine Anh&auml;nge &uuml;ber 30MB hochladen. Auch hier ist wieder eine Einstellung in der web.config schuld. OWA ist eine ASP.NET Anwendung und die maximale Gr&ouml;&szlig;e der zu &uuml;bertragenden Daten wird mit dem Parameter maxRequestLength konfiguriert.</p>
<p>Hier wird also diese Einstellung interessant, in der web.config von OWA ist diese n&auml;mlich per Default auf 30000 gesetzt.</p>
<p>&nbsp;</p>
<ul>
<li>In der Datei %windir%\Program Files\Microsoft\Exchange Server\V14\ClientAccess\Owa\web.config muss der Wert von maxRequestLength ge&auml;ndert werden, <strong>ACHTUNG: Angabe in KiloByte!!</strong> 
<ul>
<li>Im folgenden Beispiel wird der Wert auf 50MB gesetzt <br />&lt;httpRuntime maxRequestLength="51200" /&gt;</li>
</ul>
</li>
</ul>
<p>&nbsp;</p>
<ul>
<li>Die Internet Information Services m&uuml;ssen neu gestartet werden (iisreset) um die &Auml;nderung zu &uuml;bernehmen.</li>
</ul>
<p>&nbsp;</p>
<p>F&uuml;r dieses Problem gibt es sogar einen Artikel im TechNet: <a href="http://technet.microsoft.com/en-us/library/aa996835.aspx" target="_blank">Configure Maximum Message Size in Outlook Web App</a></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>Tipp:</strong> Man kann mit der PowerShell ganz einfach Werte in Byte und wieder Retour konvertieren. Einfach mal 50mb eintippen und versuchen.</p>
<p><a href="/assets/archive/image_146.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="powershell" src="/assets/archive/image_thumb_144.png" border="0" alt="powershell" width="224" height="136" /></a></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>Naja, ich hoffe ich kann damit einigen weiterhelfen.</p>
<p>&nbsp;</p>
<p>Gr&uuml;&szlig;e</p>
<p>tom</p>
{% include imported_disclaimer.html %}
