---
layout: post
title: "Buchen einer Ressource in Outlook 2010 mit Exchange 2k3"
date: 2010-05-04 19:02:00 +0200
comments: true
category: Archive
tags: ["Exchange"]
redirect_from: ["/post/Buchen-einer-Ressource-in-Outlook-2010-mit-Exchange-2k3", "/post/buchen-einer-ressource-in-outlook-2010-mit-exchange-2k3"]
author: daniel nitz
---
<!-- more -->
<p>Wenn man mit Outlook 2010 &uuml;ber einen Exchange Server in der Version 2003 eine Ressource buchen m&ouml;chte (z.B. Konferenzraum f&uuml;r eine Besprechung) wird das unter Umst&auml;nden nicht funktionieren. <br />Die Besprechungsanfrage wird zwar allen Teilnehmern gesendet und auch im eigenen Kalender eingetragen, die Ressource jedoch nicht gebucht, sprich im Ressourcenkalender nicht eingetragen. <br /> <br />Dieses Problem tretet nur in der Konstellation von Outlook 2010 auf einem Exchange Server 2003 SP* auf.</p>
<p><strong>L&ouml;sung:</strong> Damit die Ressource wieder gebucht werden kann, muss in der Registry des PC&rsquo;s wo Outlook 2010 installiert ist, folgender Schl&uuml;ssel angelegt werden:</p>
<p><strong>HKCU\Software\Microsoft\Office\14.0\Outlook\Options\Calendar</strong></p>
<p><strong>REG_DWORD <br />EnableDirectBooking <br />1 (HEX)</strong></p>
<p><span style="font-size: small;">Gr&uuml;&szlig;e <br />dn</span></p>
{% include imported_disclaimer.html %}
