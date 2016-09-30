---
layout: post
title: "Exchange 2010 Send on behalf for distribution Groups"
date: 2012-03-12 20:46:58 +0100
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["Exchange"]
alias: ["/post/Exchange-2010-Send-on-behalf-for-distribution-Groups.aspx", "/post/exchange-2010-send-on-behalf-for-distribution-groups.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Tipp: Damit man die “send on behalf” Berechtigung einem Benutzer für eine Verteilergruppe geben kann, ist ein einfacher Powershell Befehl nötig:</p>  <p>Set-DistributionGroup GroupName -GrantSendOnBehalfTo UserName</p>  <p>&#160;</p>  <p>Grüße</p>  <p>dn</p>
