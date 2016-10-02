---
layout: post
title: "Migration ISA Server 2k4, 2k6 zu TMG, WPAD"
date: 2010-09-25 14:04:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Client", "de", "Server", "Security"]
redirect_from: ["/post/Migration-ISA-Server-2k4-2k6-zu-TMG-WPAD", "/post/migration-isa-server-2k4-2k6-zu-tmg-wpad"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Wenn der ISA Server zu TMG oder einem anderen physischen Server migriert wird und sich dadurch der Servername &auml;ndert, funktioniert unter Umst&auml;nden die automatische Browserkonfiguration &uuml;ber WPAD bei DHCP Clients nicht mehr.</p>
<p><strong>WPAD</strong></p>
<p>Das <strong>Web Proxy Autodiscovery Protocol</strong> (WPAD) ist ein Protokoll, mit dem Web-Clients automatisiert zu verwendende Web-Proxies innerhalb eines Computernetzwerkes finden k&ouml;nnen, indem eine Proxy autoconfiguration (PAC)-Datei unter einer erratbaren URL gespeichert wird, beispielsweise <code><span style="font-family: Georgia;">http://wpad.example.com/wpad.dat</span></code></p>
<p>WPAD wird in den DHCP Einstellungen sowie in DNS konfiguriert um DHCP Clients und jene Ger&auml;te mit den automatischen Einstellungen zu versorgen, die eine statische IP Adresse besitzen.</p>
<p>Das Problem nach Migrationen / Serverumzug des ISA / TMG Servers bei DHCP Clients erkl&auml;rt sich so:</p>
<p>Am DHCP Server wird eine neue Option (252) konfiguriert, die den Pfad zur WPAD.dat Datei bereitstellt. Sobald ein neuer DHCP Client sich vom DHCP Server eine IP Adresse holt, bekommt er auch eine Lease-Zeit zugewiesen, wie lange er die Adresse verwenden darf. Die Lease wird standardm&auml;&szlig;ig nach der H&auml;lfte der Lease-Zeit verl&auml;ngert. <br />Solange sich der Client in dieser Lease befindet und die IP Adresse dem DHCP Server anbietet, wird die WPAD Datei nicht aktualisiert.</p>
<p>&Auml;ndert sich jetzt der Servername des ISA / TMG Servers und ist in der Option 252 vom DHCP Server der jeweilige Servername eingetragen, so erhalten die DHCP Clients nicht die neue Konfiguration. Man m&uuml;sste bei jedem Client, der sich in einer Lease befindet die Befehle <strong>ipconfig /release </strong>und <strong>ipconfig /renew </strong>ausf&uuml;hren um einen manuellen Refresh durchzuf&uuml;hren.</p>
<p>Es gibt mehrere Methoden das Problem zu umgehen:</p>
<p><strong>Methode 1</strong> &ndash; Option 252 von Anfang an mit dem CNAME WPAD konfigurieren</p>
<p>Wenn man in den DHCP Einstellungen nicht den FQDN des Servers verwendet, sondern den CNAME WPAD (so wie man es f&uuml;r DNS konfigurieren muss), so wird der CNAME WPAD immer auf den jeweiligen aktuellen Server zeigen. <br /><strong>ACHTUNG</strong>: Dies muss nat&uuml;rlich von Anfang an so erfolgen!!</p>
<p><a href="/assets/image_272.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/image_thumb_270.png" alt="image" width="244" height="150" border="0" /></a></p>
<p><strong>Methode 2 </strong>&ndash; Clients daran hindern die WPAD Option von DHCP zu zeihen.</p>
<p>Durch hinzuf&uuml;gen des Registry Keys: <strong>AutoProxyDetectType</strong> mit dem<strong> Wert 2</strong> unter <br /><strong>HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Internet Settings</strong></p>
<p>werden die Clients angewiesen das WPAD File &uuml;ber DNS anzufragen.</p>
<p><a href="/assets/image_273.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/image_thumb_271.png" alt="image" width="244" height="51" border="0" /></a></p>
<p>Gr&uuml;&szlig;e <br />dn</p>
