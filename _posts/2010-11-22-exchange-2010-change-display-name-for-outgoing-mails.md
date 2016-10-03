---
layout: post
title: "Exchange 2010, change Display Name for outgoing Mails"
date: 2010-11-22 21:40:25 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Exchange"]
redirect_from: ["/post/Exchange-2010-change-Display-Name-for-outgoing-Mails", "/post/exchange-2010-change-display-name-for-outgoing-mails"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Mit Exchange Server 2010 ist es sehr einfach den Display Name für ausgehende Mails zu ändern.</p>  <p>Zunächst muss das Feature für die Remote-Domänen aktiviert werden. Mit den folgenden Befehl wird das Feature für alle Remote-Domänen aktiviert:</p>  <p><strong>Get-RemoteDomain | Set-RemoteDomain –UseSimpleDisplayName $true</strong></p>  <p>In den Einstellungen der Mailbox&#160; befindet sich die Eigenschaft <strong>Simple display name</strong>. Hier lässt sich der angepasste Display Name einfügen. </p>  <p><strong>ACHTUNG:</strong> Befindet sich kein Wert im Feld Simple Display Name nachdem das Feature aktiviert wurde, sendet Exchange die Mail-Adresse.</p>  <p><a href="/assets/image_284.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/image_thumb_282.png" width="205" height="244" /></a></p>  <p>&#160;</p>  <p>Alle Mails, die nun die Organisation verlassen, werden mit den angepassten Display Name versendet:</p>  <p><a href="/assets/image_285.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/image_thumb_283.png" width="244" height="69" /></a></p>  <p>&#160;</p>  <p>Anbei noch ein Shell-Beispiel um schnell für eine Liste (CSV-Import Datei) von Benutzern den Simple Display Name mit&#160; <strong><em>Name + Firma GmbH</em></strong> zu setzen.</p>  <p><strong>Import-CVS &quot;C:\Import-File.csv&quot; | Foreach {Set-Mailbox -Identity $_.Name -SimpleDisplayName ($_.Name + &quot; - Firma GmbH/Srl&quot;)}     <br />      <br /></strong>Beispiel für CSV-Import Datei</p>  <p><em>Name     <br />Daniel Nitz      <br />Max Mustermann</em></p>  <p>Grüße   <br />dn</p>
