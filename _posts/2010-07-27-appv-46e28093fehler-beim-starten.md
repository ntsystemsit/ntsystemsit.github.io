---
layout: post
title: "AppV 4.6–Fehler beim Starten"
date: 2010-07-27 18:34:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Client", "Server"]
redirect_from: ["/post/AppV-46e28093Fehler-beim-starten", "/post/appv-46e28093fehler-beim-starten"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Heute mal ein neues Thema auf ntSystems, Applikations Virtualisierung. Viele Hersteller setzen auf diese Technologie, unter anderem Microsoft mit SoftGrid bzw. AppV.</p>
<p>Erscheint beim Starten der Applikation der Fehler: &ldquo;Auf die Angegebene Instanz von Application Virtualization Server konnte nicht zugegriffen werden&rdquo; mit einem Fehlercode wie &ldquo;xxxxxxx-xxxxxx0A-10000002&rdquo; dann wurde die Umgebungsvariable SFT_SOFTGRIDSERVER am AppV Client nicht gesetzt.</p>
<p><a href="/assets/image_200.png"><img class="wlDisabledImage" style="border-right-width: 0px; margin: 0px 10px 0px 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_198.png" border="0" alt="image" width="244" height="139" /></a></p>
<p>Beim Erstellen der virtuellen Applikation (sequencing) wird standardm&auml;&szlig;ig diese Variable verwendet, der Client kann damit allerdings nicht viel anfangen. Also einfach auf den AppV Clients die Variable setzen und als Wert den FQDN des AppV Management Servers eintragen.</p>
<p>Tipp: Daf&uuml;r bieten sich nat&uuml;rlich Group Policy Preferences an.</p>
<p>Erscheint der Fehler: &ldquo;Die angegeben Anwendung ist nicht vorhanden&rdquo; mit einem Fehlercode wie dem &ldquo;xxxxxxx-xxxxxxxx-00000A09&rdquo; deutet das auf einen falschen Namen hin. Der Fehler kann auch auftreten w&auml;hrend ein Programm l&auml;uft, z.B. wenn es sich bei der Anwendung um einen Proxy des Office Deplyment Kit for AppV handelt. Beim Ausf&uuml;hren von "msiexec /i offvirt.msi" muss auf die richtigen Namen geachtet werden. Mehr dazu in einem separaten Post.</p>
<p>&nbsp;<a href="/assets/errora09.png"><img class="wlDisabledImage" style="border-bottom: 0px; border-left: 0px; margin: 0px 10px 0px 0px; display: inline; border-top: 0px; border-right: 0px" title="errora09" src="/assets/errora09_thumb.png" border="0" alt="errora09" width="244" height="122" /></a></p>
<p>Ein weiterer Fehler ist folgender:</p>
<p>Am AppV Sequenzer wird standardm&auml;&szlig;ig das RTSPS (322) Protokoll verwendet, das muss allerdings erstmal konfiguriert werden (Zertifikat usw.). Zum Testen eignet sich auch RTSP das Port 554 verwendet. Das kann direkt beim Erstellen des Paketes ausgew&auml;hlt werden, alternativ kann man auch die .osd Datei bearbeiten und den Link anpassen.</p>
<p>Anstelle von "RTSPS://%SFT_SOFTGRIDSERVER%:322/DefaultApp.sft" wird also "RTSP://%SFT_SOFTGRIDSERVER%:554/DefaultApp.sft" gesetzt.</p>
<p>&nbsp;</p>
<p>Soviel zum Thema Applikations Virtualisierung. Ich arbeite an weiteren Posts die den Vorgang des Sequencen und Verteilen von Applikationen beschreiben.</p>
<p>stay tuned, <br />tom</p>
