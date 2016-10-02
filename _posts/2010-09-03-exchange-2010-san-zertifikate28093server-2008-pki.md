---
layout: post
title: "Exchange 2010 SAN Zertifikat–Server 2008 PKI"
date: 2010-09-03 12:52:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Exchange"]
redirect_from: ["/post/Exchange-2010-SAN-Zertifikate28093Server-2008-PKI", "/post/exchange-2010-san-zertifikate28093server-2008-pki"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Zertifikate f&uuml;r den Exchange 2010 Client Zugriff beinhalteten mehrere Subject Names. Standardm&auml;&szlig;ig werden sogenannte SAN Zertifikate von Server 2008 Certificate Authorities nicht unterst&uuml;tzt.</p>
<p>Damit die CA ein SAN Zertifikat ausstellen kann muss folgender Befehl von einer Eingabeaufforderung mit administrativen Rechten ausgef&uuml;hrt werden:</p>
<p>certutil &ndash;setreg policy\EditFlags +EDITF_ATTRIBUTESUBJECTALTNAME2</p>
<p><a href="/assets/image_262.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" src="/assets/image_thumb_260.png" border="0" alt="image" width="244" height="175" /></a></p>
<p>Anschlie&szlig;end m&uuml;ssen die CA Dienste neu gestartet werden. Am besten mit "net stop certsvc &amp;&amp; net start certsvc&rdquo;.</p>
<p>Will man jetzt einen Certificate Request &uuml;ber die MMC einreichen erscheint folgender Fehler:</p>
<p>&ldquo;The request contains no Certificate template information. 0x80094801 (-2146875391) Denied by Policy Module 0x80094801, the request does not contain a Certificate template extension or the Certificate Template request attribute.&rdquo;</p>
<p>Man muss den Request &uuml;ber die Certificate Web Services einreichen, standardm&auml;&szlig;ig l&auml;uft die auf der CA unter /certsrv, in unserem Fall also: http://dc01.ntsystems.local/certsrv. Dort w&auml;hlt man Request a Certificate, advanced certificate request und submit a certificate using a (&hellip;) file. In das Textfeld wird der gesamte Inhalt der .req Datei kopiert, bei Certificate Template wird Web Server ausgew&auml;hlt. Wenn der Request erfolgreich war, kann man die .cer Datei herunterladen und in Exchange den Request fertigstellen (Complete Pending Request).</p>
<p>Alternativ kann der Request mit &ldquo;certutil&rdquo; eingereicht werden, wobei mit dem Parameter &ldquo;/attrib&rdquo; das Template gew&auml;hlt wird.</p>
<p>Beispiel: certreq.exe -submit -attrib "CertificateTemplate:WebServer" c:\certreq.req</p>
<p>&nbsp;</p>
<p>tom<br />live vom ntSystems techDAY :)</p>
