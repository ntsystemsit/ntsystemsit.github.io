---
layout: post
title: "SoftAP - Windows 7 Wireless Access Point"
date: 2011-04-12 18:29:00 +0200
comments: true
category: Archive
tags: ["Client", "de"]
redirect_from: ["/post/SoftAP-Windows-7-Wireless-Access-Point", "/post/softap-windows-7-wireless-access-point"]
author: thomas torggler
language: de
---
<!-- more -->
<p>Hinter dem Namen SoftAp oder Virtual WIFI verbirgt sich ein tolles Feature von Windows 7, es erm&ouml;glicht durch das Erstellen eines virtuellen Netzwerkadapters das Betreiben eines Access Point mit Windows 7. Damit man einen virtuellen Wlan Adapter erstellen kann muss nat&uuml;rlich ein Wlan Adapter installiert und aktiviert sein.</p>
<p>Man erstellt den Virtual WIFI Adapter mit Hilfe des Command-Line Tools "netsh", dazu ben&ouml;tigt man eine Administrative Eingabeaufforderung in die man dann folgenden Befehl eintippt:</p>
<p><code>netsh wlan set hostednetwork mode=allow ssid=* key=* keyUsage=persistent</code></p>
<p>An der Stelle der "*" kommt die SSID (ohne Leerzeichen) und der WPA2 Key, wurde dieser Befehl abgesetzt wird der virtuelle Adapter erstellt.<br />&nbsp;<br />Jetzt muss das Hostednetwork gestartet werden, damit sich Clients verbinden k&ouml;nnen:</p>
<p><code>netsh wlan start hostednetwork</code></p>
<p><br /><strong>Internet Connection Sharing</strong></p>
<p>Wenn man auf dem Windows 7 Rechner eine Internetverbindung hat kann man diese dem Hostednetwork zur Verf&uuml;gung stellen. Dazu &ouml;ffnet man die Eigenschaften des Adapters der die Internetverbindung herstellt und w&auml;hlt "Freigabe". Hier muss man die Checkbox bei "Anderen Benutzern im Netzwerk gestatten...." setzen und darunter den Virtual WIFI Adapter ausw&auml;hlen.</p>
<p>Bei einem Neustart des Rechners startet das Wlan nicht automatisch mit. Ohne neustart kann das Hostednetwork mit folgendem Befehl gestoppt werden:</p>
<p><code>netsh wlan stop hostednetwork</code></p>
<p>Um den Status des Hostednetwork zu sehen verwendet man folgenden Befehl:</p>
<p><code>netsh wlan show hostednetwork</code></p>
<p>Daniel Melanchthon beschreibt in <a href="http://blogs.technet.com/b/dmelanchthon/archive/2009/09/24/virtual-wifi-macht-windows-7-zum-access-point.aspx" target="_blank">diesem Artikel</a> weitere Details zu Virtual WIFI.</p>
<p>&nbsp;</p>
<p><strong>Update</strong></p>
<p>Das Ganze funktioniert nat&uuml;rlich auch unter Windows 8 :)</p>
<p>Gut zu wissen: Das "hostednetwork" unterst&uuml;tzt leider&nbsp;nur das v&ouml;llig &uuml;berf&uuml;llte 2,4 GHz Band: "Radio types supported (Direct Sequence Spread Spectrum [DSSS], 802.11g, 802.11b)"</p>
<p>Hier der Link zur entsprechenden TechNet Seite: <a href="http://technet.microsoft.com/en-us/library/cc755301(v=WS.10).aspx">http://technet.microsoft.com/en-us/library/cc755301(v=WS.10).aspx</a></p>
<p>&nbsp;</p>
<p>Tom</p>
{% include imported_disclaimer.html %}
