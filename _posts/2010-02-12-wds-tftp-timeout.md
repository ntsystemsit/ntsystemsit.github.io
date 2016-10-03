---
layout: post
title: "WDS TFTP TimeOut"
date: 2010-02-12 16:31:00 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Server", "Server 2008 R2", "Server 2008", "Server 2003"]
redirect_from: ["/post/WDS-TFTP-TimeOut", "/post/wds-tftp-timeout"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Wenn die Windows Deployment Services auf derselben Maschine wie der DNS Server laufen, wird WDS nach der Installation des DNS-Patches <a href="http://support.microsoft.com/kb/953230" target="_blank">KB953230</a> (wird auch über Windows Updare verteilt) möglicherweise nicht mehr funktionieren. Wenn der Client versucht über PXE zu booten erscheint folgende Meldung: <strong>PXE-E32: TFTP open timeout</strong></p>  <p>Um dieses Problem zu beheben muss folgendes an den WDS Diensten verändert werden:</p>  <p><strong>Server 2003 – 2008</strong></p>  <p>In den Eigenschaften des WDS Servers muss der UDP Portbereich zu den Werten <strong>50000 bis 65000</strong> verändert werden.</p>  <p><a href="/assets/image_98.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" border="0" alt="image" src="/assets/image_thumb_98.png" width="244" height="210" /></a> </p>  <p><strong>     <br />Server 2008 R2</strong></p>  <p>Wenn als OS Server 2008 R2 verwendet wird, kann auch die Option aktiviert werden, dass WDS automatisch nach verfügbaren WinSock Ports abfragt und nicht den vorkonfigurierten UDP Portbereich verwendet. Dazu muss der Schlüssel <strong>UDPPortPolicy</strong> unter <strong>HKLM\System\CurrentControlSet\Services\WDSServer\Parameters</strong> von 1 auf 0 gesetzt werden.</p>  <p>Grüße   <br />dn</p>
