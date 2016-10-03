---
layout: post
title: "Subdomain Certificate Enrollment"
date: 2011-06-12 15:06:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["de", "Client", "Server"]
redirect_from: ["/post/Subdomain-Certificate-Enrollment", "/post/subdomain-certificate-enrollment"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Wenn man f&uuml;r einen Server aus einer Subdomain ein Zertifikat aus der Zertifizierungsstelle in der Root-Domain ausstellen m&ouml;chte, wird das aufgrund fehlender Berechtigungen nicht funktionieren. Um das Zertifikat erfolgreich ausstellen zu k&ouml;nnen muss der Computer bzw. die Dom&auml;nencomputer Mitglieder der Gruppe <strong>CERTSVC_DCOM_ACCESS</strong> der Root-Domain sein:</p>
<p><a href="/assets/image_314.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/image_thumb_312.png" alt="image" width="221" height="244" border="0" /></a></p>
<p>Danach ist es notwendig den Server neu zu starten, welcher das Zertifikat erhalten soll.</p>
<p>Nun kann das Zertifikat ausgestellt werden.</p>
<p>Gr&uuml;&szlig;e <br />dn</p>
