---
layout: post
title: "Sharepoint Foundation Serach, 14"
date: 2010-08-09 21:36:00 +0200
comments: true
category: Archive
tags: ["Sharepoint"]
redirect_from: ["/post/Sharepoint-Foundation-Serach-14", "/post/sharepoint-foundation-serach-14"]
author: daniel nitz
language: de
---
<!-- more -->
<p>Wenn ihr auf folgende Fehlermeldung auf eurem Sharepoint 2010 Server stoßt:</p>  <p>&#160;</p>  <p><em>Protokollname: Application     <br />Quelle: Microsoft-SharePoint Products-SharePoint Foundation Search      <br />Datum: 09.08.2010 16:51:10      <br />Ereignis-ID: 14      <br />Aufgabenkategorie:Gatherer      <br />Ebene: Warnung      <br />Schlüsselwörter:      <br />Benutzer: LOKALER DIENST      <br />Computer: Miami.domain.local      <br />Beschreibung:      <br />Die Startadresse 'sts4://jobportal:8015/contentdbid={4cee0e9c-fee5-498f-86b7-9855d89539ff}' kann nicht durchforstet werden.</em></p>  <p><em>Kontext: Anwendung 'Suchabfragen_über_Hilfethemen_bedienen', Katalog 'Search'</em></p>  <p><em>Details:</em></p>  <p><em>Zugriff verweigert. Vergewissern Sie sich, dass das Standardkonto für den Inhaltszugriff Zugriff auf dieses Repository hat, oder fügen Sie eine Durchforstungsregel zum Durchforsten dieses Repositorys hinzu. Wenn es sich bei dem zu durchforstenden Repository um ein SharePoint-Repository handelt, vergewissern Sie sich, dass das verwendete Konto über die Berechtigung &quot;Alles lesen&quot; für die durchforstete SharePoint-Webanwendung verfügt. (0x80041205)</em></p>  <p>   <br />bedeutet das, dass ihr eine Webanwendung unter einer URL betreibt, die nicht dem Computername des Server entspricht. Dafür verantwortlich ist das sog. <strong>Loopback check security feature</strong>, welches ab Windows Server 2003 SP1 implementiert ist. Es lehnt die Authentifizierung ab, wenn die URL nicht mit dem Computernamen übereinstimmt und verhindert somit, dass die Sharepoint Suche die Webseite indiziert.</p>  <p>Hier ein Workaround um das Problem zu beheben:</p>  <p>In der Registry des Sharepoint Servers muss unter </p>  <p><strong>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa</strong></p>  <p>der Schlüssel (DWORD) “<strong>DisableLoopbackCheck</strong>” mit <strong>Wert 1</strong> erstellt werden. Nach einem Neustart ist das Security Feature deaktiviert und es werden keine Warnungen mehr ins EventLog geschrieben.</p>  <p>Grüße   <br />dn</p>
{% include imported_disclaimer.html %}
