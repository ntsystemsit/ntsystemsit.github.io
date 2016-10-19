---
layout: post
title: "Migrating from Exchange 2010 to 2013 – part 3"
date: 2013-05-26 16:09:00 +0200
comments: true
category: Archive
tags: ["Exchange"]
redirect_from: ["/post/Migrating-from-Exchange-2010-to-2013-part-3", "/post/migrating-from-exchange-2010-to-2013-part-3"]
author: thomas torggler
---
<!-- more -->
<p>Hello again and welcome back to the third part of our journey to Exchange 2013. In the previous two posts (<a href="/post/Migrating-from-Exchange-2010-to-2013-part-1.aspx" target="_blank">part 1</a>, <a href="/post/Migrating-from-Exchange-2010-to-2013-part-2.aspx" target="_blank">part 2</a>) we covered preparing and installing Exchange 2013, as well as some news with the Client Access Server role and some design considerations. Now in this part we will try to cover some key aspects of transport in the new Exchange.</p>
<h1>Hub Transport Role</h1>
<p>As you already know, there is no Hub Transport server role in Exchange 2013, the transport pipeline has been split into three services, one of which is running on the CAS, the other two on the MBX role.</p>
<h2>Front End Transport service</h2>
<p>This service is running on the CAS role, like all other CAS services, it is nothing more than a stateless (but smart) proxy for inbound and outbound SMTP connections. Neither message queuing, nor message filtering happens here. The front end transport service talks to the transport service on the MBX server role.</p>
<h2>Transport service</h2>
<p>This service runs on the Mailbox server role, like the hub transport role in Exchange 2010, this service performs message queuing, inspection, categorization and so on. Very much NOT like in Exchange 2010, though, this service never talks to a mailbox database. This service routes messages between the front end transport service, the transport service and the mailbox transport service.</p>
<h2>Mailbox Transport service</h2>
<p>This service runs on the Mailbox server role, too. It receives messages via SMTP from the transport service and connects via RPC to the mailbox database to deliver the message. It also connects to mailbox databases via RPC to retrieve messages and forward them to the transport service, again using SMTP.</p>
<p>This shows one thing very clearly, through the use of SMTP, Exchange 2013 is able to break the close relationship between server roles that existed in previous versions. The front end transport role in CAS does no longer use RPC, an thus, could be running a different software version than the mailbox server, communication between mailbox servers, specifically between the mailbox transport service and the transport service, also uses SMTP and has no requirement to be on the same software version.</p>
<p>I used Wireshark to capture an incoming mail proxied through the CAS:</p>
<p><a href="/assets/archive/image_525.png"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_523.png" alt="image" width="244" height="66" border="0" /></a></p>
<p>The Client (10.1.1.10) connects to the CAS (10.1.1.21) using TCP 25, all SMTP messages are exchanged between those two nodes. Note, that the CAS does only send the &ldquo;250 Queued Mail for delivery&rdquo; <strong>after</strong> connecting to the transport service on the Mailbox Server (10.1.1.25), since the Front End Transport service does not queue mails locally, this &ldquo;smart proxy&rdquo; functionality ensures that the message gets stored in the mailbox servers queue, before sending an OK to the client. The connection between CAS and MBX uses TCP 2525 and is encrypted using TLS, this is why Wireshark is not able to encode it as SMTP.</p>
<p>There is whole section on Transport on TechNet: <a title="http://technet.microsoft.com/en-us/library/aa996349.aspx" href="http://technet.microsoft.com/en-us/library/aa996349.aspx">http://technet.microsoft.com/en-us/library/aa996349.aspx</a></p>
<h1>Migration Send and Receive connectors</h1>
<p>Now that we know (a little bit) how transport works in Exchange 2013, we can start to include Exchange 2013 servers to the send connectors and configure the appropriate receive connectors.</p>
<p>To add Exchange 2013 servers as sources to the existing send connectors, use the Exchange Admin Center and navigate to &ldquo;mail flow, send connectors&rdquo;. Then select the send connector to edit and add the new source server under &ldquo;scoping&rdquo;</p>
<p><a href="/assets/archive/image_522.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_520.png" alt="image" width="244" height="219" border="0" /></a></p>
<p>We could also use PowerShell to add additional SourceTransportServers to the connector, be aware though, that the existing servers have to be included in the command.</p>
<p><code>Set-SendConnector &ndash;Id ToInternet &ndash;SourceTransportServers ex14,ex15</code></p>
<p>Another interesting flag sits under the &ldquo;general&rdquo; node of the send connector&rsquo;s properties: Proxy though client access server&rdquo;</p>
<p><a href="/assets/archive/image_523.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_521.png" alt="image" width="244" height="167" border="0" /></a></p>
<p>So what&rsquo;s that all about? If this flag is checked, outbound mails are not sent directly by the mailbox server&rsquo;s transport role, but are proxied through a Client Access Server. This could be interesting if only a subset of Exchange Servers (CAS) were allowed to connect to the internet via SMTP. With multi role servers, which are recommended for many environments, this flag will have no effect.</p>
<p>Ok, so now we have got our outbound mail flow configured, what about incoming mails? Receive connectors are per-server settings, so we have to check the configuration of existing connectors and configure the new server accordingly.</p>
<p><code>Get-ReceiveConnector &ndash;Server ex14 | ft Identity,Enabled,Bindings,RemoteIpRanges</code></p>
<p>This command shows all receive connectors on the 2010 server, along with the Ports used and the remote IP addresses that are allowed to use this connector. Obviously, if there are custom AD permissions or authentication methods defined, those have to be configured on the new server, too.</p>
<p>Nice, now we have got client access and transport covered, the next post will finally include moving some mailboxes to the new Exchange server.</p>
<p>&nbsp;</p>
<p>so long, <br />tom</p>
{% include imported_disclaimer.html %}
