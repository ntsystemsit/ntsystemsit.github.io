---
layout: post
title: "TMG 2010 unable to authenticate users after reboot"
date: 2010-11-22 22:01:00 +0100
comments: true
category: Archive
tags: ["de", "Server", "Security"]
redirect_from: ["/post/TMG-2010-unable-to-authenticate-users", "/post/tmg-2010-unable-to-authenticate-users"]
author: daniel nitz
language: de
---
<!-- more -->
<p>Nach dem Upgrade von ISA Server 2006 auf TMG 2010 musste ich eine Reihe von Probleme bez&uuml;glich der Authentifizierung feststellen. Nach jedem Neustart des Servers dauerte es zwischen einer halben und 2 Stunden bis der TMG Clients gegen AD erfolgreich authentifizierte. In der Zwischenzeit wurden die Verbindung aufgrund fehlender Authentifizierung abgelehnt.</p>
<p>Auch das EventLog protokollierte folgende Fehler:</p>
<p><a href="/assets/archive/image_286.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_284.png" alt="image" width="244" height="171" border="0" /></a></p>
<p><a href="/assets/archive/image_287.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_285.png" alt="image" width="244" height="170" border="0" /></a></p>
<p>Im ADAM Log wurde folgender Fehler protokolliert:</p>
<p><a href="/assets/archive/image_288.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_286.png" alt="image" width="244" height="181" border="0" /></a></p>
<p>&nbsp;</p>
<p>Mein Problem habe ich dadurch gel&ouml;st, indem ich ein Computer-Zertifikat f&uuml;r den <strong>FQDN</strong> des TMG von meiner Zertifizierungsstelle angefragt und installiert habe. Anschlie&szlig;end habe ich den <strong>Netzwerkdienst</strong> Lesen-Berechtigungen f&uuml;r das Verzeichnis <strong><em>C:\ProgramData\Microsoft\Crypto\RSA\MachineKeys</em></strong> gegeben (hier werden die Computerzertifikate gespeichert).</p>
<p><strong>INFO</strong>: Wenn der Request f&uuml;r das Zertifikat fehschl&auml;gt, muss in den Systemregeln der strikte RPC Filter deaktiviert werden:</p>
<p><a href="/assets/archive/image_289.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_287.png" alt="image" width="244" height="191" border="0" /></a></p>
<p>&nbsp;</p>
<p>Nachdem diese Schritte abgeschlossen wurden, konnte ich im EventLog sehen wie die SSL-Verbindungen erfolgreich hergestellt wurden:</p>
<p><a href="/assets/archive/image_290.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_288.png" alt="image" width="244" height="132" border="0" /></a></p>
<p><a href="/assets/archive/image_291.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_289.png" alt="image" width="244" height="128" border="0" /></a></p>
<p>&nbsp;</p>
<p>Nach einem Neustart werden Verbindungen nun sofort authentifiziert.</p>
<p>Gr&uuml;&szlig;e <br />dn</p>
{% include imported_disclaimer.html %}
