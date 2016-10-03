---
layout: post
title: "Troubleshooting Sharepoint Error Messages"
date: 2013-08-11 20:46:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["en", "Sharepoint"]
redirect_from: ["/post/Troubleshooting-Sharepoint-Error-Messages", "/post/troubleshooting-sharepoint-error-messages"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>When you get a Sharepoint error message, they are sometimes not very helpful and it can be tricky to figure out what’s going wrong.</p>  <p><a href="/assets/image_566.png"><img title="image" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="image" src="/assets/image_thumb_564.png" width="244" height="193" /></a></p>  <p>At this point the Sharepoint EventLog can help you getting more details. With the Powershell commandlet <strong>get-splogevent </strong>you can search the corresponding exception message. The correlation ID is the key.</p>  <p>If I’m searching the corresponding exception message from the error shown on the printscreen above, I execute following command:</p>  <p>get-splogevent | where-object {$_.Correlation -eq &quot;88ab369c-71dd-108f-df09-ea6c74999562&quot;} | fl</p>  <p>Greetings    <br />dn</p>
