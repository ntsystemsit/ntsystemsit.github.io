---
layout: post
title: "Forefront 2010 – Dienste starten nicht automatisch"
date: 2010-02-17 20:21:00 +0100
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["de", "Server", "Security"]
alias: ["/post/Forefront-2010-e28093-Dienste-starten-nicht-automatisch.aspx", "/post/forefront-2010-e28093-dienste-starten-nicht-automatisch.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Wer Forefront 2010 installiert und das Logging nicht separat konfiguriert wird sich wom&ouml;glich wundern warum bei einem Neustart folgende Dienste nicht starten:</p>
<ul>
<li>Microsoft Forefront TMG Control</li>
<li>Microsoft Fronfront TMG Firewall</li>
<li>Microsoft Forefront TMG Job Scheduler</li>
<li>Microsoft Forefront TMG Managed Control</li>
</ul>
<p>Forefront beantwortet somit keine Anfragen und jeglicher Zugriff von allen au&szlig;er den Management Computern wird blockiert.</p>
<p>Das liegt daran dass Standardm&auml;&szlig;ig eine Lokale SQL Instanz also Logging Ziel konfiguriert ist, der SQL Dienst aber erst nach den Forefront Diensten startet&hellip; Und wenn Forefront nicht Protokollieren kann dann wird der Dienst beendet. Im Eventlog steht:</p>
<blockquote>
<p>The Microsoft Forefront TMG Control service terminated with service-specific error %%278540.</p>
</blockquote>
<p>L&ouml;sen l&auml;sst sich das Problem ganz einfach, entweder man stellt auf Logging to File</p>
<p><a href="/assets/image_99.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/image_thumb_99.png" alt="image" width="220" height="244" border="0" /></a>&nbsp;</p>
<p>oder man Konfiguriert die vier oben genannten Dienste f&uuml;r verz&ouml;gerten Start.</p>
<p><a href="/assets/image_100.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/image_thumb_100.png" alt="image" width="217" height="244" border="0" /></a>&nbsp;</p>
<p>&Uuml;ber die Sinnhaftigkeit dieser Standardkonfiguration muss man wohl nichts mehr sagen&hellip;</p>
<p>tom</p>
