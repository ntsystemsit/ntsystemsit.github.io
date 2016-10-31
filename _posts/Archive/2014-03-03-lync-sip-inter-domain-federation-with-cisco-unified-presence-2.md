---
layout: post
title: "Lync: SIP inter-domain federation with Cisco Unified Presence - 2"
date: 2014-03-03 19:53:56 +0100
comments: true
category: Archive
tags: ["en", "Lync"]
redirect_from: ["/post/Lync-SIP-inter-domain-federation-with-Cisco-Unified-Presence-2", "/post/lync-sip-inter-domain-federation-with-cisco-unified-presence-2"]
author: thomas torggler
---
<!-- more -->
<p>In <a href="/post/Lync-SIP-inter-domain-federation-with-Cisco-Unified-Presence-1.aspx" target="_blank">my last post</a> I went through the required configuration steps on the Cisco Unified Presence Server, in this post I will cover the Lync Server configuration as well as some troubleshooting aspects.</p>  <h1>Lync configuration</h1>  <p>On the Lync server side we have to create a trusted application pool along with a trusted application in order for Lync to accept SIP requests from the CUPS. This is done using the Lync Server Management Shell:</p>  <p><code>New-CsTrustedApplicationPool -Identity cups.tomt.local -Registrar lync01.tomt.local -ThrottleAsServer $true -TreatAsAuthenticated $true -OutboundOnly $false -RequiresReplication $false -Site 1 </code></p>  <p><code>New-CsTrustedApplication -TrustedApplicationPoolFqdn cups.tomt.local -Port 5062 -ApplicationId CUPS</code></p>  <p>After that we need a static route pointing to the CUP Server so that Lync knows where to find Users within a certain address space (@tomt.local in our case).</p>  <p><code>$r = New-CsStaticRoute -TLSRoute -Destination cups.tomt.local -Port 5062 -MatchUri tomt.local -UseDefaultCertificate $true      <br />Set-CsStaticRoutingConfiguration -Route @{Add=$r}</code></p>  <p><strong>Note:</strong> As we are using TLS as transport protocol, we create a new TLSRoute, the destination parameter specifies where requests for a certain domain (MatchUri) are routed to, as always with TLS, the common name of the certificate must match the FQDN entered as destination. I am using Port 5062 because that is the default port for the “Peer Authentication Listener” on CUP. </p>  <p>Once this configuration is in place, we need to make sure the Lync Server trusts the certificate used on the CUPS, so I made sure the CA that issued the CUPS certificate was present in the Lync Servers “Trusted Roots” store.</p>  <p>Nice work, Lync users can now see Cisco users presence states and they can even chat with each other :)</p>  <p><a href="/assets/archive/image_625.png"><img title="image" style="border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; display: inline; border-top-width: 0px" border="0" alt="image" src="/assets/archive/image_thumb_623.png" width="244" height="243" /></a> <a href="/assets/archive/image_626.png"><img title="image" style="border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; display: inline; border-top-width: 0px" border="0" alt="image" src="/assets/archive/image_thumb_624.png" width="144" height="244" /></a>&#160;<a href="/assets/archive/image_627.png"><img title="image" style="border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; display: inline; border-top-width: 0px" border="0" alt="image" src="/assets/archive/image_thumb_625.png" width="135" height="244" /></a> </p>  <p>Ok, now that we have a working configuration, let’s have a look at troubleshooting.</p>  <h1>Problem Points</h1>  <p><strong>Note: </strong>This post is in progress, I will add more troubleshooting steps over the next couple of days.</p>  <p>I will list some of the more problematic points here, so just in case you have a half working configuration, make sure to check for the following issues:</p>  <h2>Unsupported Certificate</h2>  <p>If the Lync Server certificate does not include the Enhanced Key Usage of “Client Authentication”, the TLS handshake fails. As the error occurs before the two systems are speaking SIP, we will have to rely on NetMon or Wireshark to troubleshoot the TLS Handshake, sure enough it shows an “Encrypted Alert”:</p>  <p><a href="/assets/archive/image_628.png"><img title="image" style="border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; display: inline; border-top-width: 0px" border="0" alt="image" src="/assets/archive/image_thumb_626.png" width="244" height="22" /></a>&#160; </p>  <p>In the Binary data of the handshake we can see the alert value is 2B (hex) which translates to decimal 43 an means: unsupported certificate.</p>  <p><a href="/assets/archive/image_629.png"><img title="image" style="border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; display: inline; border-top-width: 0px" border="0" alt="image" src="/assets/archive/image_thumb_627.png" width="244" height="106" /></a> </p>  <p>So to fix this, re-issue the Lync Server certificate (Default, Web Services don’t matter here) and make sure the template includes the Client Authentication enhanced key usage.</p>  <h2>Lync Client signs out when searching for federated user</h2>  <p>This is one of the oddest behaviors of the Lync 2013 clients that I have ever seen. A Lync user searches for another user which is homed on the Cisco Unified Presence server. As soon as the user completes the entry of the sip address (and the Lync Server sends a SUBSCRIBE message to the CUPS) the Lync user is signed out of the client.</p>  <p>Same thing happens if a CUPS user sends an IM to the Lync user. The Lync client log shows that CUPS is trying to do MD5 authentication (yes md5 in 2014….) and that the Lync Clients handles this by signing out.</p>  <p>### client error log ###</p>  <p>Check the ACL configuration on the CUP Server, all Lync Servers and Clients must be excluded from MD5 authentication. Also check that your static Route on Lync points to the Peer Authentication listener.</p>  <p>&#160;</p>  <h2></h2>  <p>So long,    <br />Tom</p>
{% include imported_disclaimer.html %}