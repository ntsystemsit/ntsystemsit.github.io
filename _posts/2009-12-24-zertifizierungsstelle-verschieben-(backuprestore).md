---
layout: post
title: "Zertifizierungsstelle verschieben (Backup/Restore)"
date: 2009-12-24 18:20:00 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Server"]
redirect_from: ["/post/Zertifizierungsstelle-verschieben-(BackupRestore)", "/post/zertifizierungsstelle-verschieben-(backuprestore)"]
author: thomas torggler
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Eine Zertifizierungsstelle geh&ouml;rt zu den Serverrollen die &uuml;ber viele Jahre gleich bleiben und einige Hardware- bzw. Betriebsystem- Lifecycles &uuml;berdauern. Aus diesem Grund kann es vorkommen dass man eine CA von einem Server auf einen anderen migrieren muss.</p>
<p>Wichtig dabei ist dass der Name des Servers sich nicht &auml;ndern sollte, kann man eine &Auml;nderung nicht verhindern gibt es <a href="http://support.microsoft.com/kb/298138" target="_blank">hier</a> einen KB Artikel der die Vorgehensweise beschreibt. Aber wie gesagt, besser/einfacher ist es den Namen nicht zu &auml;ndern.</p>
<p>Nun denn, zuerst gilt es eine Strategie zu w&auml;hlen, ich habe es so gemacht dass ich die CA gesichert habe, CA deinstalliert, DC heruntergestuft, Server aus der Domain genommen. Neuen Server mit gleichem Namen installiert, zum DC hochgestuft, CA installiert, CA widerhergestellt und l&auml;uft.</p>
<p>Also zum ersten Schritt, Sichern einer Zertifizierungsstelle:</p>
<ul>
<li>Im CA SnapIn auf den CA Namen klicken und All Tasks &ndash;&gt; Backup CA w&auml;hlen</li>
<li>Beide Checkboxen (Private key and CA certificate and Certificate database, certificate database log) aktivieren</li>
<li>Einen Ordner angeben wohin das Ganze gesichert wird (sollte leer sein)</li>
<li>Ein Kennwort f&uuml;r den Private Key angeben (sollte man sich nat&uuml;rlich merken)</li>
<li>regedit &ouml;ffnen und zum Schl&uuml;ssel <strong>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\CertSvc\Configuration</strong> wechseln, Rechtsklick auf den Schl&uuml;ssel und Export w&auml;hlen. Wieder einen Ordner w&auml;hlen um den Registry Key abzulegen.</li>
</ul>
<p style="margin-right: 0px" dir="ltr">Deinstallieren einer Zertifizierungsstelle:</p>
<ul dir="ltr">
<li>
<div style="margin-right: 0px">Server Manager &ouml;ffnen, Remove Roles w&auml;hlen</div>
</li>
<li>
<div style="margin-right: 0px">Active Directory Certificate Services entfernen</div>
</li>
<li>
<div style="margin-right: 0px">Neu Starten und fertig</div>
</li>
<li>
<div style="margin-right: 0px">folgende Daten bleiben auf dem Server (Achtung bei Entsorgung!!)</div>
</li>
<li>CA database, CA public and private keys, CA's certificates in the Personal store</li>
<li>CA chain's root certificate in the Trusted Root Certification Authorities store</li>
<li>CA chain's intermediate certificates in the Intermediate Certification Authorities store</li>
<li>The CA's CRL</li>
</ul>
<p dir="ltr">Wiederherstellen einer Zertifizierungsstelle:</p>
<ul>
<li>
<div>Server Manager &ouml;ffnen, Add Roles w&auml;hlen</div>
</li>
<li>
<div>Active Directory Certificate Services hinzuf&uuml;gen</div>
</li>
<li>
<div>Bei &ldquo;Specify Type&rdquo; den entsprechenden Typ ausw&auml;hlen, Standalone oder Enterprise</div>
</li>
<li>
<div>Bei &ldquo;Set up Private Key&rdquo; muss man &ldquo;Use existing private Key&rdquo; w&auml;hlen, darunter &ldquo;Select a certificate and use its associated private key&rdquo;</div>
</li>
<li>
<div>Jetzt wird das vorher gesicherte Zertifikat (*.p12 Datei) ausgew&auml;hlt und das entsprechende Passwort eingegeben</div>
</li>
<li>
<div>Bei &ldquo;Configure Database&rdquo; ist noch darauf zu achten dass der CertLog Ordner im gleichen Pfad liegt wie auf dem alten Server (Standard %systemroot%\system32\CertLog)</div>
</li>
<li>
<div>Jetzt wird die CA installiert <br /></div>
</li>
<li>Ist die Installation abgeschlossen, die Dienstkonsole &ouml;ffnen (services.msc) und den Dienst &ldquo;Active Directory Certificate Services&rdquo; beenden</li>
<li>Jetzt das vorher exportierte Registry File doppelklicken und die Einstellungen importieren</li>
<li>CA SnapIn &ouml;ffnen und auf den CA Namen klicken, All Tasks &ndash;&gt; Restore CA w&auml;hlen</li>
<li>Wieder beide Checkboxen (Private key and CA certificate and Certificate database, certificate database log) aktivieren</li>
<li>Jetzt kann der Dienst &ldquo;Active Directory Certificate Services&rdquo; wieder gestartet werden und die CA l&auml;uft wieder</li>
</ul>
<p dir="ltr">Weihnachtliche Gr&uuml;&szlig;e <br />tom</p>
<p style="margin-right: 0px">&nbsp;</p>
