---
layout: post
title: "Outlook 2003 / Exchange 2010 Probleme beim Öffnen freigegebener Kalender"
date: 2011-09-13 21:27:00 +0200
comments: true
category: Archive
tags: ["Exchange"]
redirect_from: ["/post/Outlook-2003-Exchange-2010-Probleme-beim-Offnen-freigegebener-Kalender", "/post/outlook-2003-exchange-2010-probleme-beim-offnen-freigegebener-kalender"]
author: daniel nitz
language: de
---
<!-- more -->
<p>In einer Umgebung mit Exchange 2010 und Outlook 2003 als Mail Client kann es beim &Ouml;ffnen freigegebener Kalender zu Problemen kommen. Dabei erscheint folgende Fehlermeldung:</p>
<p><a href="/assets/archive/image_345.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_343.png" border="0" alt="image" width="244" height="45" /></a></p>
<p>&nbsp;</p>
<p>Anders als &lt; Office 2007 &ouml;ffnet Outlook 2003 die Verbindung direkt zu den Mailboxserver und nicht &uuml;ber den Address-Book Service. Um dieses Problem zu beheben, muss das Verbindungslimit, welches standardgem&auml;&szlig; 20 betr&auml;gt, angehoben werden. Hierzu erstellen wir eine neue ThrottlingPolicy und weisen diese dem Benutzer zu:</p>
<p>&nbsp;</p>
<p><strong>New-ThrottlingPolicy &ndash;name Outlook2003Calendar</strong></p>
<p><strong>Set-ThrottlingPolicy &ndash;identity Outlook2003Calendar &ndash;RCAMaxConcurrency 100</strong></p>
<p><strong>Set-Mailbox &ndash;Identity &ldquo;MAILBOX-USER&rdquo; &ndash;ThrottlingPolicy Outlook2003Calendar</strong></p>
<p>&nbsp;</p>
<p>Gr&uuml;&szlig;e   <br />dn</p>
{% include imported_disclaimer.html %}
