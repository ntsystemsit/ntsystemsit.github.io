---
layout: post
title: "WebDav, IIS7 publishing over ISA Server Part 1"
date: 2010-09-01 18:45:00 +0200
comments: true
category: Archive
tags: ["Client", "Server"]
redirect_from: ["/post/WebDav-IIS7-publishing-over-ISA-Server-Part-1", "/post/webdav-iis7-publishing-over-isa-server-part-1"]
author: daniel nitz
language: de
---
<!-- more -->
<p><code>Dies ist der erste aus 2 Teilen zum Thema WebDav. WebDav (Web-based Distributed Authoring and Versioning) ist ein offizieller Standard, Dateien im Internet bereitzustellen.</p>
<p>Der Vorteil von WebDav ist, dass es nicht wie FTP oder SSH spezielle Ports verwendet, sondern &uuml;ber HTTP und HTTPS &uuml;bertragen wird und somit durch jede Firewall kommt, welche Port 80 und 443 ge&ouml;ffnet hat.</p>
<p>Im ersten Teil werde ich zeigen wie ein Verzeichnis unter IIS7 erstellt und &uuml;ber WebDav freigegeben wird. Im 2. Teil werde ich beschreiben wie man das Ganze &uuml;ber den ISA Server ver&ouml;ffentlicht.</p>
<p>&nbsp;</p>
<p><strong>Server</strong></p>
<p>Sofern <strong>IIS</strong> nicht installiert ist, besteht der erste Schritt darin den Webserver zu installieren</p>
<p>Zus&auml;tzlich zum Webserver muss das <strong>Feature WebDav</strong> hinzugef&uuml;gt werden.</p>
<p><a href="/assets/archive/image_237.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" src="/assets/archive/image_thumb_235.png" border="0" alt="image" width="244" height="180" /></a></p>
<p>Der n&auml;chste Schritt besteht darin, eine neue Webseite in IIS zu erstellen. Als physikalischen Pfad geben wir das Verzeichnis ein, welches &uuml;ber WebDav freigegeben werden soll.</p>
<p><a href="/assets/archive/image_238.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" src="/assets/archive/image_thumb_236.png" border="0" alt="image" width="244" height="115" /></a></p>
<p>Zus&auml;tzlich binden wir die Webseite auf Port 443 HTTPS und w&auml;hlen das jeweilige Zertifikat aus.</p>
<p>Als n&auml;chstes m&uuml;ssen unter Authentifizierung die <strong>Anonyme Authentifizierung</strong> deaktivieren und <strong>Windows-</strong> und <strong>Standardauthentifizierung</strong> aktivieren.</p>
<p><a href="/assets/archive/image_239.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" src="/assets/archive/image_thumb_237.png" border="0" alt="image" width="244" height="108" /></a></p>
<p>Bei den Webseiteneinstellung befindet sich das Feature WebDav-Erstellungsregeln.</p>
<p><a href="/assets/archive/image_240.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" src="/assets/archive/image_thumb_238.png" border="0" alt="image" width="244" height="188" /></a></p>
<p>In den Einstellungen muss zun&auml;chst WebDav aktiviert werden und danach eine neue Erstellungsregel erstellt werden. Die Erstellungsregel definiert die jeweiligen Zugriffsrechte.</p>
<p><a href="/assets/archive/image_241.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" src="/assets/archive/image_thumb_239.png" border="0" alt="image" width="189" height="244" /></a></p>
<p>Die Konfiguration ist nun abgeschlossen. Ich empfehle jedoch um <strong>Probleme mit&nbsp;Zielpfade auf &nbsp;entfernten Servern</strong> zu vermeiden, zus&auml;tzlich unter den <strong>Verbindungseinstellungen</strong> der Webseite, einen Benutzer anzugeben, der Zugriffsrechte auf die Webseite hat.</p>
<p><a href="/assets/archive/image_242.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" src="/assets/archive/image_thumb_240.png" border="0" alt="image" width="244" height="135" /></a></p>
<p>&nbsp;</p>
<p><strong>Client</strong></p>
<p>Um das WebDav-Verzeichnis zu mappen, muss der Client ein neues Netzlaufwerk verbinden und die Option &ldquo;<strong><em>Verbindung mit einer Webseite herstellen, auf der Sie Dokumente und Bilder speichern k&ouml;nnen</em></strong>&rdquo; ausw&auml;hlen.</p>
<p>Als Adresse geben wir <a href="https://Servername">https://Servername</a> ein</p>
<p><a href="/assets/archive/image_243.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" src="/assets/archive/image_thumb_241.png" border="0" alt="image" width="244" height="199" /></a></p>
<p>Jetzt k&ouml;nnen wir auf das Verzeichnis &uuml;ber HTTPS zugreifen.</p>
<p>Gr&uuml;&szlig;e <br />dn</code></p>
{% include imported_disclaimer.html %}
