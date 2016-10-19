---
layout: post
title: "Wireshark und Windows 8"
date: 2012-03-09 22:27:00 +0100
comments: true
category: Archive
tags: ["Client", "de", "Server 2012"]
redirect_from: ["/post/Wireshark-und-Windows-8", "/post/wireshark-und-windows-8"]
author: thomas torggler
---
<!-- more -->
<p>Eines der ersten Tools das auf meinen Ger&auml;ten installiert wird ist das Analysetool Wireshark.</p>
<p>Nach der Installation auf Windows 8 konnte ich keine neuen Captures starten, es war kein Interface verf&uuml;gbar.</p>
<p><a href="/assets/archive/image_397.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_395.png" alt="image" width="244" height="189" border="0" /></a></p>
<p>Das Problem scheint am WinPCAP Treiber zu liegen, die L&ouml;sung war einfach. Ich habe den WinPCAP im &ldquo;Kompatibilit&auml;tsmodus&rdquo; Windows 7 neu installiert.</p>
<p><a href="/assets/archive/image_398.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_396.png" alt="image" width="198" height="244" border="0" /></a></p>
<p>&nbsp;</p>
<p>Download WinPCAP: <a href="http://www.winpcap.org">www.winpcap.org</a></p>
<p>have fun!</p>
{% include imported_disclaimer.html %}
