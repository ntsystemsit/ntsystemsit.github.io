---
layout: post
title: "WDS Remoteinstallationsordner verschieben"
date: 2010-03-17 22:31:00 +0100
comments: true
category: Archive
tags: ["Server"]
redirect_from: ["/post/WDS-Remoteinstallationsordner-verschieben", "/post/wds-remoteinstallationsordner-verschieben"]
author: daniel nitz
language: de
---
<!-- more -->
<p>Um in den Deployment Services den Installationsorder zu verschieben müssen folgende Befehle ausgeführt werden:</p>  <p><strong>wdsutil /uninitialize-server</strong></p>  <p>Dann den Ordner an seinen neuen Platz verschieben</p>  <p><strong>wdsutil /initialize-server /reminst:<em>Laufwerksbuchstabe\Ordner</em></strong></p>  <p>Grüße   <br />dn</p>
{% include imported_disclaimer.html %}
