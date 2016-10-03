---
layout: post
title: "Sharepoint Foundation 2010, Fehler Web.config, requestFiltering"
date: 2010-07-20 12:49:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Sharepoint"]
redirect_from: ["/post/Sharepoint-Foundation-2010", "/post/sharepoint-foundation-2010"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Wer im Eventlog des Sharepoint-Foundation-Servers auf folgende Fehlermeldung st&ouml;&szlig;t:</p>
<p><a href="/assets/image_188.png" target="_blank"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_186.png" border="0" alt="image" width="244" height="200" /></a></p>
<p>TEXT:</p>
<p>Protokollname: Application <br />Quelle:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Microsoft-SharePoint Products-SharePoint Foundation <br />Datum:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20.07.2010 00:00:01 <br />Ereignis-ID:&nbsp;&nbsp; 2137 <br />Aufgabenkategorie:Integrit&auml;t <br />Ebene:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fehler <br />Schl&uuml;sselw&ouml;rter: <br />Benutzer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NETZWERKDIENST <br />Computer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Miami.**** <br />Beschreibung: <br />SharePoint-Integrit&auml;tsanalyse: Fehler. Die Datei 'Web.config' weist falsche Einstellungen f&uuml;r das Element 'requestFiltering' auf. <br />F&uuml;r das requestFiltering-Element in der Datei 'web.config' muss das Attribut 'allowDoubleEncoding ' auf 'true' festgelegt sein, damit Dateinamen, die das Zeichen + enthalten, unterst&uuml;tzt werden. Au&szlig;erdem muss es &uuml;ber ein untergeordnetes Element 'requestLimits' verf&uuml;gen, dessen Attribute 'maxAllowedContentLength' auf '2147483647' festgelegt ist, um Konflikte mit Dateiuploads zu vermeiden. <br />Stellen Sie sicher, dass das Element 'requestFiltering' in der Datei 'web.config' vorhanden ist, dass das Attribut 'allowDoubleEncoding' auf 'true' festgelegt ist, dass ein untergeordnetes Element 'requestLimits' vorhanden ist und dass der Wert 'maxAllowedContentLength' auf '2147483647' festgelegt ist. Weitere Informationen zu dieser Regel finden Sie unter <a href="http://go.microsoft.com/fwlink/?LinkID=163442">http://go.microsoft.com/fwlink/?LinkID=163442</a>.</p>
<p>dem wird dieser Fix helfen:</p>
<ul>
<li>IIS Manager &ouml;ffnen </li>
<li>Zur Sharepoint webseite wechseln </li>
<li>Den Konfigurationseditor &ouml;ffnen </li>
</ul>
<p><a href="/assets/image_189.png" target="_blank"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_187.png" border="0" alt="image" width="244" height="185" /></a></p>
<ul>
<li>Abschnitt &ldquo;<strong>requestFiltering</strong>&rdquo; w&auml;hlen </li>
</ul>
<p><a href="/assets/image_192.png" target="_blank"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_190.png" border="0" alt="image" width="197" height="244" /></a></p>
<ul>
<li>Zu &ldquo;<strong>requestLimits</strong>&rdquo; wechseln und den Wert <strong>maxAllowedContentLenght</strong> in 2147483647 &auml;ndern, danach Konfiguration &uuml;bernehmen </li>
</ul>
<p><a href="/assets/image_193.png" target="_blank"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" src="/assets/image_thumb_191.png" border="0" alt="image" width="244" height="107" /></a></p>
<p>Gr&uuml;&szlig;e <br />dn</p>
