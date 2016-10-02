---
layout: post
title: "Forefront TMG 2010–RSA Authentication Manager 7.1"
date: 2010-07-13 22:33:00 +0200
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["de", "Server", "Security"]
alias: ["/post/Forefront-TMG-2010e28093RSA-Authentication-Manager-71.aspx", "/post/forefront-tmg-2010e28093rsa-authentication-manager-71.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>&nbsp;</p>
<p>Wer das Vergn&uuml;gen hat die beiden genannten Systeme zum kommunizieren zu bewegen wird sich &uuml;ber die &uuml;ppige Dokumentation freuen die es zu den Vorg&auml;ngerprodukten gibt&hellip; die&nbsp;hilft so gut wie gar nicht weiter.</p>
<p>&nbsp;</p>
<p>Ich gehe davon aus das RSA Authentication Manager 7.1 Sp3 bereits installiert wurde, ein Realm bzw. Security Domain eingerichtet wurde. Man meldet sich also an der RSA Security Console an und erstellt einen neuen &ldquo;Authentication Agent&rdquo;. Dazu klickt man auf Access, Authentication Agents, Add New.</p>
<p>&nbsp;</p>
<p><a href="/assets/rsa.jpg"><img class="wlDisabledImage" style="display: inline; border-width: 0px;" title="rsa" src="/assets/rsa_thumb.jpg" alt="rsa" width="244" height="119" border="0" /></a></p>
<p>&nbsp;</p>
<p>Jetzt m&uuml;ssen die Felder ausgef&uuml;llt werden, also der Hostname des TMG Servers (Array), die IP Adressen die dazu geh&ouml;ren (nat&uuml;rlich nur die vom betreffenden Netzwerk). Bei Agent Type habe ich Standard Agent verwendet und das funktioniert, habe leider keine Dokumentation gefunden aus der hervorgeht welchen Typ man verwenden sollte. Bei &ldquo;Agent may be Accessed by&rdquo; kann konfiguriert werden ob sich alle (aktiven) Benutzer &uuml;ber den Authentication Agent anmeldn k&ouml;nnen oder nur Mitglieder bestimmter Gruppen.</p>
<p>Anschli&szlig;end muss man nur noch auf Save klicken und der Authentication Agent ist erstellt.</p>
<p>&nbsp;</p>
<p>Jetzt braucht man eine Konfigurationsdatei f&uuml;r TMG Server. Also wieder auf Access, Authentication Agents klicken und dieses mal &ldquo;Genereate Configuration File&rdquo; w&auml;hlen.</p>
<p>&nbsp;</p>
<p><a href="/assets/rsa2.jpg"><img class="wlDisabledImage" style="display: inline; border-width: 0px;" title="rsa2" src="/assets/rsa2_thumb.jpg" alt="rsa2" width="244" height="244" border="0" /></a></p>
<p>&nbsp;</p>
<p>Wenn man dann auf &ldquo;Generate Config File&rdquo; klickt, erh&auml;lt man eine Zip Datei die eine Datei sdconf.rec beinhaltet. Diese Datei muss auf allen TMG Array Mitgliedern in folgende Pfade kopiert werden.</p>
<ul>
<li>%windir%\system32</li>
<li>%programfiles%\Microsoft Forefront Threat Management Gateway\sdconfig</li>
</ul>
<p>&nbsp;</p>
<p>Achtung: Die Datei muss unbedingt an beiden Orten vorhanden sein, sonst kommt es zu Fehlern wie: &ldquo;106: The Web Server is busy. Try again later.&rdquo;</p>
<p>&nbsp;</p>
<p>Die RSA betreffende Konfiguration ist damit eigentlich schon abgeschlossen. Also sehen wir uns die Ver&ouml;ffentlichung am TMG an.</p>
<p>&nbsp;</p>
<p>Es wird einfach eine normale Web Ver&ouml;ffentlichung konfiguriert, beim erstellen des Web Listeners ist auf folgendes Acht zu geben:</p>
<p>&nbsp;</p>
<p><a href="/assets/listener.jpg"><img class="wlDisabledImage" style="display: inline; border-width: 0px;" title="listener" src="/assets/listener_thumb.jpg" alt="listener" width="212" height="244" border="0" /></a></p>
<p>&nbsp;</p>
<p>Die Authentifizierung erfolgt &uuml;ber ein HTML Formular, wenn hier noch &ldquo;Collect addinoal delegation in the form&rdquo; ausgew&auml;hlt wird kann der Benutzer zus&auml;tzlich zum Username und RSA Passcode noch sein Active Directory Kennwort eingeben und TMG leitet es an den Web Server weiter. Daf&uuml;r muss dann bei der Ver&ouml;ffentlichungsregel die Authentication Delegation auf Basic gesetzt werden und der Web Server dahinter muss nat&uuml;rlich Basic Authentication akzeptieren.</p>
<p>&nbsp;</p>
<p><a href="/assets/listener_1.jpg"><img class="wlDisabledImage" style="display: inline; border-width: 0px;" title="listener" src="/assets/listener_thumb_1.jpg" alt="listener" width="244" height="221" border="0" /></a><a href="/assets/listener2.jpg"><img class="wlDisabledImage" style="display: inline; border-width: 0px;" title="listener2" src="/assets/listener2_thumb.jpg" alt="listener2" width="208" height="244" border="0" /></a></p>
<p>&nbsp;</p>
<p>Das Integrierte HTML Formular von TMG sieht dann je nach Einstellung so aus. Will man OWA ver&ouml;ffentlichen kann man verwendet man nat&uuml;rlich besser den Assistant &ldquo;Publish Exchange Web Client Access&rdquo;. Achtung: Auf den Client Access Servern muss Basic Authentication aktiviert werden (Server Configuration, Client Access, owa).</p>
<p>&nbsp;</p>
<p><a href="/assets/image_147.png"><img class="wlDisabledImage" style="margin: 0px; display: inline; border: 0px;" title="image" src="/assets/image_thumb_145.png" alt="image" width="210" height="244" border="0" /></a></p>
<p>&nbsp;</p>
<p>Achtung: Mutlihomed TMG</p>
<p>Forefront TMG wird in den allermeisten Konfigurationen mit mehreren Netzwerkkarten installiert, ist ja schlie&szlig;lich eine Firewall. Dadurch wei&szlig; TMG (genauer gesagt ACEClient) nicht &uuml;ber welche Netzwerkkarte er den RSA Server erreichen kann, man sieht im Event Log die Warnung: &ldquo;Multihomed host detected; Primary IP assumed is : x.x.x.x&rdquo;. Die Event ID ist 1012 die Source ACECLIENT.</p>
<p>Das kann man beheben indem man zu Schl&uuml;ssel HKLM\Software\SDTI einen Schl&uuml;ssel ACIClient hinzuf&uuml;gt. Dieser bekommt dann einen String Value mit dem Namen &ldquo;PrimaryInterfaceIP&rdquo;. Der Wert entspricht der IP Adresse, des TMG, &uuml;ber die der RSA Server erreicht werden kann.</p>
<p>&nbsp;</p>
<p><a href="/assets/listener2_1.jpg"><img class="wlDisabledImage" style="display: inline; border-width: 0px;" title="listener2" src="/assets/listener2_thumb_1.jpg" alt="listener2" width="244" height="90" border="0" /></a></p>
<p>&nbsp;</p>
<p>Viele Gr&uuml;&szlig;e</p>
<p>tom</p>
