---
layout: post
title: "SharePoint–Dienstkonto wechseln, Probleme mit Kerberos"
date: 2011-03-06 20:23:00 +0100
comments: true
category: Archive
tags: ["Sharepoint"]
redirect_from: ["/post/SharePoint-Dienstkonto-wechseln", "/post/sharepoint-dienstkonto-wechseln"]
author: daniel nitz
language: de
---
<!-- more -->
<p>Wird das Dienstkonto f&uuml;r die SharePoint-Webseite vom Netzwerk-Konto auf ein Dom&auml;nen-Konto ge&auml;ndert, und Kerberos in Kombination mit Windows-Authentifizierung verwendet wird, k&ouml;nnen sich die Clients nicht mehr an der Webseite authentifizieren.</p>
<p>Der Dialog zum Eingeben der Credentials wird immer wieder angezeigt, die Authentifizierung kann jedoch nicht richtig verarbeitet werden.</p>
<p>Um das Problem zu beheben, muss im IIS die Kernelmodus-Authentifizierung aktiviert werden, die standardm&auml;&szlig;ig nach der Installation von SharePoint deaktiviert ist:</p>
<p><a href="/assets/archive/image_299.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_297.png" border="0" alt="image" width="244" height="136" /></a></p>
<p><br />Nun k&ouml;nnen sich die Clients wieder ganz normal an der SharePoint-Webseite authentifizieren.</p>
<p>&nbsp;</p>
<p>Gr&uuml;&szlig;e   <br />dn</p>
{% include imported_disclaimer.html %}
