---
layout: post
title: "Windows 7 - Sicherheitsproblem in UAC"
date: 2009-08-10 14:58:20 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Client"]
redirect_from: ["/post/Windows-7-Sicherheitsproblem-in-UAC", "/post/windows-7-sicherheitsproblem-in-uac"]
author: thomas torggler
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Auf diversen Blogs ist zu lesen dass es ein Problem mit der Benutzerkontensteuerung (UAC, User Account Control) in Windows 7 gibt. Das habe ich mir gestern kurz angesehen und hier ist das Ergebnis. (getestet mit Windows 7 RC, 7100)</p>  <p>Es war möglich mit dem Tool von <a href="http://www.pretentiousname.com/misc/win7_uac_whitelist2.html" target="_blank">Leo Davidson</a> ein beliebiges Programm mit administrativen Rechten zu starten ohne eine UAC abfrage hervorzurufen. <strong>Aber </strong>ich musste Mitglied einer Gruppe mit administrativen Rechten sein (z.B. Administratoren), als normaler User funktionierte es nicht. Wenn man also mit in der UAC nur noch “Ja ich will&quot; klicken müsste, dann kann man sie mit dem Code Injection Issue umgehen, wird ein Passwort abgefragt funktioniert das Ganze anscheinend nicht.</p>  <p>Meiner Meinung nach handelt es sich hier also um ein Problem, jedoch ist es in meinen Augen nicht so dramatisch. Im Enterprise Umfeld sollte eh kein User Mitglied in administrativen Gruppen sein und zu Hause wird man wohl kaum (gewollt) seinen eigenen PC abschießen. Trotzdem sollte sich Microsoft das Problem zu Herzen nehmen, denn der Entwickler hat es genau Dokumentiert und laut eigenen Angaben MS schon seit längerem informiert.</p>  <p>Links zu Artikeln Rund um dieses Thema:</p>  <p><a href="http://www.istartedsomething.com/20090130/uac-security-flaw-windows-7-beta-proof/" target="_blank">Long Zheng 1</a>, <a href="http://www.istartedsomething.com/20090611/uac-in-windows-7-still-broken-microsoft-wont-fix-code-injection-vulnerability/comment-page-2/" target="_blank">2</a>, <a href="http://www.istartedsomething.com/20090613/windows-7-uac-code-injection-vulnerability-video-demonstration-source-code-released/" target="_blank">Video</a>    <br /><a href="http://www.pretentiousname.com/misc/win7_uac_whitelist2.html" target="_blank">Leo Davidson</a></p>  <p>viele Grüße   <br />tt</p>
