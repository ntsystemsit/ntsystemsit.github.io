---
layout: post
title: "Windows 8 to Go"
date: 2012-03-12 20:36:00 +0100
comments: true
category: Archive
tags: ["Client", "de"]
redirect_from: ["/post/Windows-8-to-Go", "/post/windows-8-to-go"]
author: daniel nitz
---
<!-- more -->
<p>Mit Windows 8 kommt ein neues Feature "Windows 8 to Go", welches bereits in der CP verf&uuml;gbar ist. Damit ist es m&ouml;glich die Windows Umgebung per USB-Stick oder anderen Datentr&auml;ger mitzunehmen.</p>
<p>Als erstes muss der USB Stick bootf&auml;hig gemacht werden. Diese Prozedur ist dieselbe, die Thomas bereits in folgenden Post erkl&auml;rt um Windows 7/8 vom <a href="/post/Windows-7-e28093-Installation-mit-USB-Stick.aspx" target="_blank">USB Stick zu installieren</a>.</p>
<p>Anbei nochmal kurz die Befehle:</p>
<p>- <em>diskpart</em></p>
<p>- <em>list disk</em></p>
<p>- <em>select disk X </em>(USB Datentr&auml;ger ausw&auml;hlen)</p>
<p>- <em>create partition primary</em></p>
<p><em>- format fs=ntfs quick</em></p>
<p><em>- active</em></p>
<p>&nbsp;</p>
<p>Jetzt muss noch der PC neu gestartet werden und Windows 8 installiert werden. Als Datentr&auml;ger empfiehlt sich hier ein USB 3.0 Speichermedium.</p>
<p>&nbsp;</p>
<p>Gr&uuml;&szlig;e</p>
<p>dn</p>
{% include imported_disclaimer.html %}
