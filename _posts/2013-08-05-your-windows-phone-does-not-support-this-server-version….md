---
layout: post
title: "Your Windows phone does not support this server version…"
date: 2013-08-05 21:50:00 +0200
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["en", "Exchange"]
alias: ["/post/Your-Windows-phone-does-not-support-this-server-version….aspx", "/post/your-windows-phone-does-not-support-this-server-version….aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>This is just a a quick post about an interesting issue I&rsquo;ve seen today, interesting it was, at least to me. I was at a customer&rsquo;s site publishing Exchange 2010 using a Sophos &ldquo;Unified Threat Management&rdquo; box. Well, we all have to live in a post TMG world, don&rsquo;t we?</p>
<p>After installing the certificate on the box we configured the &ldquo;virtual web servers&rdquo; and the corresponding &ldquo;real web servers&rdquo;. Outlook Web App worked straight away so we went ahead and tried to connect a Windows Phone 8 using ActiveSync.</p>
<p>That didn&rsquo;t go so well, the Phone would not connect and instead give a strange error message saying:</p>
<blockquote>
<p>Error 85002028: Your Windows phone does not support this server version.</p>
</blockquote>
<p>Ok, that&rsquo;s where the interesting begins. I quickly fired up <a href="http://aka.ms/ExRCA" target="_blank">Remote Connectivity Analyzer</a> which provided a much clearer error description along with a link to <a href="http://support.microsoft.com/kb/927465" target="_blank">this KB article</a>.</p>
<p>It turned out that we had not installed the intermediate CA certificate on the Sophos box. As the Winodws Phone requires the Reverse Proxy to send the whole chain down for verification, this simply didn&rsquo;t work. Here comes a quote from the above KB article.</p>
<blockquote>
<p>Windows Mobile-based devices do not generally contain intermediate CA certificates in their certificate store. Internet Information Services (IIS) sends the whole certificate chain to the device. However, IIS does this only if it can verify the whole chain. By default, the device does not contain these certificates. Therefore, the server must send them. The device must contain only the root certificate in its certificate store.</p>
</blockquote>
<p>Makes sense, finally.</p>
<p>until next time, <br />tom</p>
