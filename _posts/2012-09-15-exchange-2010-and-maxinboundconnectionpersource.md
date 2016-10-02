---
layout: post
title: "Exchange 2010 and MaxInboundConnectionPerSource"
date: 2012-09-15 09:08:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Exchange", "Server"]
redirect_from: ["/post/Exchange-2010-and-MaxInboundConnectionPerSource", "/post/exchange-2010-and-maxinboundconnectionpersource"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Exchange receive connectors do have a setting of <span style="color: black;">MaxInboundConnectionPerSource which limits the maximum number of connections from a single IP address at any moment. So with a default value of 20, there are no more than 20 connections from a specific IP address allowed.</span> The following warning is logged in the transport server's application log if the limit is exceeded:</p>
<p style="margin-left: 36pt;">Event ID: 1021</p>
<p style="margin-left: 36pt;">Event Source: MSExchangeTransport</p>
<p style="margin-left: 36pt;">Message Text: Receive connector 'Connector Name' rejected an incoming connection from IP address '10.10.10.10'. The maximum number of connections per source ('20') for this connector has been reached by this source IP address.</p>
<p>The sender of a mail might receive the following message:</p>
<p style="margin-left: 36pt;">Deferred: 421 4.3.2 The maximum number of concurrent connections has exceeded a limit, closing transmission channel" Status 4.0.0, "Transient failure"</p>
<p>According to <a href="http://tools.ietf.org/html/rfc5321">RFC</a> this is not a permanent error, so the sender's mail server should try to send the message again after some delay.</p>
<p style="margin-left: 36pt;">"The command was not accepted, and the requested action did not occur. However, the error condition is temporary, and the action may be requested again."</p>
<h1>Set-ReceiveConnector</h1>
<p>To view the configured value of MaxInboundConnectionPerSource use the Get-ReceiveConnector cmdlet, to change the value use the Set-ReceiveConnector cmdlet with the &ndash;<span style="color: black;">MaxInboundConnectionPerSource parameter. </span></p>
<p><span style="color: black;"></span></p>
<p><span style="color: black;">The following example increases the value to 100 </span></p>
<p style="margin-left: 36pt;"><span style="color: black;"><span style="color: black;">Get-ReceiveConnector default* | Select Name,MaxInbound*</span></span></p>
<p style="margin-left: 36pt;"><span style="color: black;">Get-ReceiveConnector default* | Set-ReceiveConnector -MaxInboundConnectionPerSource 100 </span></p>
<p><span style="color: black;">More info on: <a href="http://technet.microsoft.com/en-us/library/bb125140.aspx">TechNet</a> </span></p>
<p>&nbsp;</p>
<p>So long<br />tom</p>
