---
layout: post
title: "Sharepoint Web Apps lassen sich nicht installieren"
date: 2010-08-11 22:27:00 +0200
comments: true
category: Archive
tags: ["Sharepoint"]
redirect_from: ["/post/Sharepoint-Web-Apps-lassen-sich-nicht-installieren", "/post/sharepoint-web-apps-lassen-sich-nicht-installieren"]
author: daniel nitz
---
<!-- more -->
<p>Wenn man die Sharepoint Webseite nicht über den default Port 80 betreibt, bricht die Installation der Sharepoint Webservices bei der Erstellung der Beispieldaten ab.</p>  <p><a href="/assets/archive/image_208.png" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_206.png" width="244" height="210" /></a> </p>  <p>&#160;</p>  <p>Um das Problem zu umgehen empfiehlt es sich die Sharepoint Webseite während der Installation auf Port 80 zu binden. Dazu sind folgende 2 Schritte notwendig:</p>  <ul>   <li>In der Sharepoint Zentraladministration muss der alternative Zugriff auf Port 80 gebunden werden</li>    <li>Im IIS Manger muss ebenfalls die Bindung neu festgelegt werden</li> </ul>  <p>Danach läuft die Installation vollständig durch und die Webseite kann wieder auf den ursprünglichen Port gebunden werden.</p>  <p>Grüße   <br />dn</p>
{% include imported_disclaimer.html %}
