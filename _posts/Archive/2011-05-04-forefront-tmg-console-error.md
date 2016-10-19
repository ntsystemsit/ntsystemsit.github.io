---
layout: post
title: "Forefront TMG Console – Script Error"
date: 2011-05-04 21:07:00 +0200
comments: true
category: Archive
tags: ["Client", "de", "Security"]
redirect_from: ["/post/Forefront-TMG-Console-Error", "/post/forefront-tmg-console-error"]
author: thomas torggler
---
<!-- more -->
<p>Seit der Installation von Internet Explorer 9 bekomme ich auf meinem Windows 7 Client folgende Fehlermeldungen beim &Ouml;ffnen der Forefront TMG Management Console:</p>
<p>Script Error: An Error has occurred in the script on this page.</p>
<p><a href="/assets/archive/image_310.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_308.png" alt="image" width="244" height="158" border="0" /></a></p>
<p>Forefront TMG Error: Refresh failed <br />Error 0x80020003: Member not found</p>
<p><a href="/assets/archive/image_311.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_309.png" alt="image" width="244" height="173" border="0" /></a></p>
<p>Dieses Problem kann man einfach l&ouml;sen, man schnappt sich ein Notepad (Achtung: mit administrativen Rechten) und &ouml;ffnet die Datei &ldquo;TabsHandler.htc&rdquo;. Diese befindet sich standardm&auml;&szlig;ig unter folgendem Pfad: &ldquo;C:\Program Files\Microsoft Forefront Threat Management Gateway\UI_HTMLs\TabsHandler&rdquo;</p>
<p>In dieser Datei gibt es drei Zeilen die mit &ldquo;m_aPages [niPage].m_tdMain.style.paddingTop&rdquo; beginnen. Diese drei Zeilen m&uuml;ssen mit &ldquo;//&rdquo; auskommentiert werden und schon l&auml;uft die Konsole wieder normal. Hier noch ein Beispiel:</p>
<p><code>// m_aPages [niPage].m_tdMain.style.paddingTop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = ((m_nBoostUp &lt; 0) ? -m_nBoostUp : 0) ;</code></p>
<p>&nbsp;</p>
<p>so long, <br />tom</p>
{% include imported_disclaimer.html %}
