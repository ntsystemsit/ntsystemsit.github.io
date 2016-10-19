---
layout: post
title: "How to build an UAG 2010 Array for Exchange publishing–Part 1"
date: 2013-05-22 21:26:00 +0200
comments: true
category: Archive
tags: ["en", "Exchange", "Lync"]
redirect_from: ["/post/How-to-build-an-UAG-2010-Array-for-Exchange-publishing-Part-1", "/post/how-to-build-an-uag-2010-array-for-exchange-publishing-part-1"]
author: daniel nitz
---
<!-- more -->
<p>As TMG is not &ldquo;available&rdquo; anymore, I decided to use UAG 2010 with SP3 for the Exchange / Lync 2013 publishing. UAG SP3 supports Exchange 2013 and Lync 2013. In Part 1 of the Post I&rsquo;m going to explain how to build the UAG 2010 Array.</p>
<p>First we have to prepare 2 Windows Server 2008 R2 Server each of them with 2 NIC&rsquo;s and at least 4GB RAM. The NIC&rsquo;s should be configured in this way:</p>
<p><strong>INTERNAL</strong></p>
<table style="width: 400px;" border="0" cellspacing="0" cellpadding="2">
<tbody>
<tr>
<td valign="top" width="200">Default Gateway</td>
<td valign="top" width="200">should not be defined</td>
</tr>
<tr>
<td valign="top" width="200">DNS Servers</td>
<td valign="top" width="200">should be defined</td>
</tr>
<tr>
<td valign="top" width="200">Register this connection&rsquo;s address in DNS</td>
<td valign="top" width="200">Enabled</td>
</tr>
<tr>
<td valign="top" width="200">File and Printer Sharing for Microsoft Networks</td>
<td valign="top" width="200">Enabled</td>
</tr>
<tr>
<td valign="top" width="200">Client for Microsoft Networks</td>
<td valign="top" width="200">Enabled</td>
</tr>
<tr>
<td valign="top" width="200">NetBIOS over TCP/IP</td>
<td valign="top" width="200">Enabled</td>
</tr>
<tr>
<td valign="top" width="200">LMHOSTS lookup</td>
<td valign="top" width="200">Enabled</td>
</tr>
</tbody>
</table>
<p>&nbsp;<strong>EXTERNAL</strong>&nbsp;</p>
<p>&nbsp;</p>
<table style="width: 402px;" border="0" cellspacing="0" cellpadding="2">
<tbody>
<tr>
<td valign="top" width="200">Default Gateway</td>
<td valign="top" width="200">should be defined</td>
</tr>
<tr>
<td valign="top" width="200">DNS Servers</td>
<td valign="top" width="200">should not be defined</td>
</tr>
<tr>
<td valign="top" width="200">Register this connection&rsquo;s address in DNS</td>
<td valign="top" width="200">Disabled</td>
</tr>
<tr>
<td valign="top" width="200">File and Printer Sharing for Microsoft Networks</td>
<td valign="top" width="200">Disabled</td>
</tr>
<tr>
<td valign="top" width="200">Client for Microsoft Networks</td>
<td valign="top" width="200">Disabled</td>
</tr>
<tr>
<td valign="top" width="200">NetBIOS over TCP/IP</td>
<td valign="top" width="200">Disabled</td>
</tr>
<tr>
<td valign="top" width="200">LMHOSTS lookup</td>
<td valign="top" width="200">Disabled</td>
</tr>
</tbody>
</table>
<p>The order should modified that NIC INTERNAL becomes the first NIC used:</p>
<p><a href="/assets/archive/image_510.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_508.png" alt="image" width="219" height="244" border="0" /></a></p>
<p>The Next steps are to install <strong>NLB</strong> (<strong>without configuring it</strong>) and <strong>UAG</strong> on both nodes. Install UAG in the following order:</p>
<ol>
<li>UAG 2010 SP1 Update 1</li>
<li>If Update 1 fails, download and install it manually</li>
<li>UAG 2010 SP1 Updat 1</li>
<li>TMG 2010 SP2</li>
<li>UAG 2010 SP2</li>
<li>UAG 2010 SP3</li>
</ol>
<p>When UAG is fully installed, we have to configure it. Lets start on the node that becomes the Array Manager.</p>
<p>Open UAG and select the Network Settings</p>
<p><a href="/assets/archive/image_511.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_509.png" alt="image" width="244" height="231" border="0" /></a></p>
<p>Then we have to define the Topology: Select the node as Array Member and specify credentials</p>
<p><a href="/assets/archive/image_512.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_510.png" alt="image" width="244" height="221" border="0" /></a><a href="/assets/archive/image_513.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_511.png" alt="image" width="244" height="230" border="0" /></a></p>
<p>Before you join the 2nd node as the array member, open the TMG console and add the 2nd server to the &ldquo;<strong>Managed Server Computers</strong>&rdquo; group. Install the Policy.</p>
<p><a href="/assets/archive/image_514.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_512.png" alt="image" width="220" height="244" border="0" /></a></p>
<p>Open the UAG console on the 2nd server and join him to the array</p>
<p><a href="/assets/archive/image_515.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_513.png" alt="image" width="244" height="233" border="0" /></a><a href="/assets/archive/image_516.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_514.png" alt="image" width="244" height="156" border="0" /></a></p>
<p><span style="background-color: #ffff00;">TIP: If the UAG services on the 2nd node don&rsquo;t start, copy the content of folder C:\Program Files\Microsoft Forefront Unified Access Gateway\von\Conf from the manager to the member server. Then start the services.</span></p>
<p>Now we have to configure the NLB from the UAG console. Open Network Load Balancing from the Admin menu and add the first VIP IP:</p>
<p><a href="/assets/archive/image_517.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_515.png" alt="image" width="244" height="114" border="0" /></a></p>
<p>Next you have to save and activate the configuration. UAG is now building the NLB cluster with both nodes. You can check the activity with the UAG Activation Monitor:</p>
<p><a href="/assets/archive/image_518.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_516.png" alt="image" width="244" height="109" border="0" /></a></p>
<p>Finally we have to open the WebMonitor and navigate to the Array Monitor section. There we have to start the NLB nodes:</p>
<p><a href="/assets/archive/image_519.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_517.png" alt="image" width="244" height="80" border="0" /></a></p>
<p>After you have started the nodes, the NLB status changes to &ldquo;Converged&rdquo;</p>
<p><a href="/assets/archive/image_520.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_518.png" alt="image" width="244" height="69" border="0" /></a></p>
<p><span style="background-color: #ffff00;">INFO: When you open the NLB manager, you will get RPC errors. The reason is that DCOM does not work with TMG/UAG. But don&rsquo;t worry, the cluster is OK if the Web Monitor doesn&rsquo;t show errors.</span></p>
<p>In Part 2 I will explain how to publish Exchange 2013 OWA / OA and ActiveSync.</p>
<p>Greetings <br />dn</p>
{% include imported_disclaimer.html %}
