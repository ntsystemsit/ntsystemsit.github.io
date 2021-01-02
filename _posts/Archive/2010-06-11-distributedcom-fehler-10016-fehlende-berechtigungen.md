---
layout: post
title: "DistributedCOM Fehler 10016, fehlende Berechtigungen"
date: 2010-06-11 16:41:00 +0200
comments: true
category: Archive
tags: ["Server", "Server-2008", "Server-2008-R2"]
redirect_from: ["/post/DistributedCOM-Fehler-10016-fehlende-Berechtigungen", "/post/distributedcom-fehler-10016-fehlende-berechtigungen"]
author: daniel nitz
language: de
---
<!-- more -->
<p>Wenn auf euren Server DistributedCOM Fehler mit der ID 10016 vorkommen, so bedeutet das meist, dass erforderliche Berechtigungen fehlen.</p>  <p><strong>Beispiel:</strong> Der Benutzer <strong>NETZWERKDIENST</strong> hat keine Berechtigung die Komponente mit der ID <strong>000C101C-0000-0000-C000-000000000046</strong> zu aktivieren</p>  <p><a href="/assets/archive/image_130.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_130.png" width="244" height="133" /></a> </p>  <p>In diesem Fall muss dem Benutzer <strong>NETZWERKDIENST</strong> lediglich das Benutzerrecht gegeben werden um die jeweilige Komponente zu starten. Als erstes wird die Komponente über das Tool <strong>Komponentendienste </strong>gesucht. </p>  <p>Wenn ihr die Einstellungen der Komponente nicht ändern könnt, habt ihr selbst nicht die notwendigen Berechtigungen. </p>  <p><a href="/assets/archive/image_131.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_131.png" width="188" height="244" /></a> </p>  <p>Die könnt ihr euch aber selber zuweisen indem ihr in der <strong>Registry</strong> unter <strong>HKEY_CLASSES_ROOT\AppID</strong> den Schlüssel mit der ID sucht und in den Berechtigungen der Gruppe Administratoren oder euch selbst den Besitz übertragt und das Recht <strong>Vollzugriff</strong> gebt.</p>  <p><a href="/assets/archive/image_132.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_132.png" width="202" height="244" /></a> </p>  <p>Danach lassen sich die Einstellungen der Komponente ändern und ihr könnt den jeweiligen Benutzer die erforderlichen Rechte geben.</p>  <p><a href="/assets/archive/image_133.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_133.png" width="204" height="244" /></a>&#160;</p>  <p>Grüße   <br />dn</p>
{% include imported_disclaimer.html %}
