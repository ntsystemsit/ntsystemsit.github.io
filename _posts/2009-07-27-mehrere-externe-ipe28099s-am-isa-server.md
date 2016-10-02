---
layout: post
title: "Mehrere externe IP’s am ISA Server"
date: 2009-07-27 13:23:45 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Server", "Security"]
redirect_from: ["/post/Mehrere-externe-IPe28099s-am-ISA-Server", "/post/mehrere-externe-ipe28099s-am-isa-server"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Stellt euch folgende Situation vor:</p>  <p>Ihr habt einen ISA Server als Firewall und mehrere öffentliche IP Adressen zur Verfügung. Die Adressen werden dem externen Interface des ISA Servers zugewiesen.    <br />Beispiel:</p>  <h6></h6>  <p>200.200.200.1 –&gt; VPN   <br />200.200.200.2 –&gt; OWA    <br />200.200.200.3 –&gt; Veröffentlichte Webseite    <br />200.200.200.4 –&gt; Sonstiges</p>  <p>Der MX-Reccord der Domäne leitet Mails der IP Adresse 200.200.200.2 weiter. Von der 200.200.200.2 werden die Mails dem internen Mailserver zugestellt. Der Zielverkehr für das externe Netzwerk wird über die erste IP Adresse am externen Interface geleitet. Folglich wird Internetverkehr, sowie Mails über die öffentliche IP 200.200.200.1 geleitet (nach Standardkonfiguration).</p>  <p>Wenn eurer Mailserver selbst die DNS-Auflösung vornimmt und Mails dem Ziel zustellt, tut er das mit der 200.200.200.1</p>  <p>Mailserver führen vermehrt ein Reverse-DNS-Lookup durch, um den Versender zu verifizieren. In dieser Konfiguration stellt das aber ein Problem dar, da die Mails über die 200.200.200.1 versendet werden, der MX aber auf die 200.200.200.2 zeigt. Folglich kann es passieren, dass Mails nicht angenommen werden oder man landet gleich direkt auf der Blacklist.</p>  <p>Um dieses Problem zu beheben hat man 2 Möglichkeiten:</p>  <ol>   <li>Mails über einen Smarthost senden</li>    <li>Die öffentliche IP Adresse des Mail Servers am externen Interface des ISA Servers als erste Adresse eintragen</li> </ol>  <p>&#160;</p>  <p>ISA Server unterstützt bis jetzt (aktuelle Version 2006) nicht die Anbindung mehrerer öffentlicher IP Adressen.</p>  <p>Grüße, dn</p>
