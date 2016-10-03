---
layout: post
title: "Exchange 2010, Outlook doesn’t show attachments"
date: 2012-08-13 15:50:39 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Exchange"]
redirect_from: ["/post/Exchange-2010-Attachments", "/post/exchange-2010-attachments"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Last Week I had into the problem that Outlook 2010 didn’t show some attachments. After a research on technet I found out that this attachment was a not referenced inline-attachment.</p>  <p>To fix this behavior and make Outlook showing the attachment you have to do the following:</p>  <p>- Stop the Exchange Transport service.    <br />- Locate the EdgeTransport.exe.config file. This file is located in the following path:     <br />C:\Program Files\Microsoft\Exchange Server\Bin\ </p>  <p>In the EdgeTransport.exe.config file, add the following entry between the </p>  <p><strong><em>&lt;appSettings&gt;</em></strong> element and the <strong><em>&lt;/appSettings&gt; </em></strong>element: </p>  <p><strong><em>&lt;add key=&quot;TreatInlineDispositionAsAttachment&quot; value=&quot;true&quot; /&gt;</em></strong> </p>  <p>- Start the Transport service</p>  <p>Greetings    <br />dn</p>
