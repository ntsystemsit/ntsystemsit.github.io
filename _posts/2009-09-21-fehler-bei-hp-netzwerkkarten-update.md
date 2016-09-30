---
layout: post
title: "Fehler bei HP Netzwerkkarten Update"
date: 2009-09-21 21:13:42 +0200
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["Server"]
alias: ["/post/Fehler-bei-HP-Netzwerkkarten-Update.aspx", "/post/fehler-bei-hp-netzwerkkarten-update.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Zu Abwechslung mal ein Problem aus der HP Welt:</p>  <p>Für heute habe ich das Firmware / Treiber Update meiner HP ML 350 G5 Server geplant. Zuerst habe ich mir die neueste Firmware-CD von HP gezogen und diese dann installieren lassen. Alles verlief ohne Probleme.    <br />Danach wollte ich die Treiber updaten und habe bemerkt, dass jede Komponente geupdated wurde, nur der Treiber der Netzwerkkarte (v. 5.0.16.0) nicht.     <br />Das war sehr ärgerlich, denn dieser Treiber war der Wichtigste, denn es gab Netzwerkprobleme mit Microsoft Dynamics. </p>  <p>Folgender Fehler wurde ausgegeben: “HP Virtual Bus Device installation requires a newer version. Version 4.6.16.0 is required.”</p>  <p>Um den Treiber dennoch installieren zu können, muss zuerst auf die Version 4.6.16.0 geupdated werden, dann kann man erst die neueste Version installieren: <a href="http://h20000.www2.hp.com/bizsupport/TechSupport/SoftwareDescription.jsp?lang=en&amp;cc=us&amp;prodTypeId=15351&amp;prodSeriesId=428936&amp;prodNameId=3288114&amp;swEnvOID=1005&amp;swLang=8&amp;mode=2&amp;taskId=135&amp;swItem=MTX-156474dccfe74f73add73cce58" target="_blank">Link zum Treiber v4.6.16.0</a></p>  <p> Grüße, dn</p>  <p>PS: Wenn die Netzwerkprobleme mit Dynamics behoben sind, werde ich dazu noch einen Post veröffentlichen. (kleiner Ausflug in die ERP-Software :) )</p>
