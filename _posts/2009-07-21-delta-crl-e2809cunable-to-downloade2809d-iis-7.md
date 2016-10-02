---
layout: post
title: "Delta CRL “Unable to Download” IIS 7"
date: 2009-07-21 14:40:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: []
redirect_from: ["/post/Delta-CRL-e2809cUnable-to-Downloade2809d-IIS-7", "/post/delta-crl-e2809cunable-to-downloade2809d-iis-7"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Erstmal herzlich willkommen in unserem Blog ;)</p>
<p><br />und zweitens ein Problemchen &uuml;ber das ich in dieser Woche gestolpert bin: <br />IIS 7 blockiert aus Sicherheitsgr&uuml;nden sogenannte Double-Escape Sequenzen ("+" "-"). Da die Delta CRL jedoch standardm&auml;&szlig;ig ein "+" im Namen hat schl&auml;gt der Download fehl. <br />M&ouml;chte man die CRL's bzw. Delta CRL's in seiner PKI &uuml;ber http ver&ouml;ffentlichen kann man sich durch abschalten dieser Sicherheitsfunktion f&uuml;r die betreffenden Virtual Directories helfen:</p>
<p>%windir%\system32\inetsrv\appcmd.exe set config "Default Web Site/<em>virtual Directory</em>" -section:system.webServer/security/requestFiltering -allowDoubleEscaping:true <br /><em>"virtual Directory"</em> entspricht dem Virtuellen Verzeichnis in dem die Delta CRL ver&ouml;ffentlicht wird.</p>
<p>hier der entsprechende KB Artikel: <a href="http://support.microsoft.com/kb/942076">http://support.microsoft.com/kb/942076</a></p>
<p>mfg <br />tt</p>
