---
layout: post
title: "Exchange 2010 Send on behalf for distribution Groups"
date: 2012-03-12 20:46:58 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Exchange"]
redirect_from: ["/post/Exchange-2010-Send-on-behalf-for-distribution-Groups", "/post/exchange-2010-send-on-behalf-for-distribution-groups"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Tipp: Damit man die “send on behalf” Berechtigung einem Benutzer für eine Verteilergruppe geben kann, ist ein einfacher Powershell Befehl nötig:</p>  <p>Set-DistributionGroup GroupName -GrantSendOnBehalfTo UserName</p>  <p>&#160;</p>  <p>Grüße</p>  <p>dn</p>
