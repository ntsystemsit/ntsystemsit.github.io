---
layout: post
title: "Migration: ntSystems Mail von Aruba nach Office 365"
date: 2014-02-01 19:41:00 +0100
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["de", "Office 365"]
alias: ["/post/Migration-ntSystems-Mail-von-Aruba-nach-Office-365.aspx", "/post/migration-ntsystems-mail-von-aruba-nach-office-365.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Nachdem einigem &uuml;berlegen haben wir uns entschieden Mail f&uuml;r die Domain ntsystems.it nach Office 365 zu migrieren. Wir verwenden einen E1 Plan, dieser bietet f&uuml;r 6,5&euro; pro User und Monat eine Exchange Mailbox, Lync, SharePoint und SkyDrive sowie Yammer.</p>
<h1>Aruba</h1>
<p>Der aktuelle Provider (und auch Hoster dieser Seite) ist Arbua. An dieser Stelle muss ich sagen, dass wir bisher zwar keine gr&ouml;&szlig;eren Probleme mit unseren Mails hatten, das Mail System allerdings nicht mehr wirklich zeitgem&auml;&szlig; ist, so fehlen z.B. Features wie Kalender, Active Sync und die Anmeldung erfolgt standardm&auml;&szlig;ig &uuml;ber http (ja richtig, unverschl&uuml;sselt. Im Jahr 2014.). Freundlicherweise wird ein Link zu einer &ldquo;Secure Version&rdquo; angezeigt&hellip;</p>
<h1>DNS</h1>
<p>Es gibt leider kein Angebot von Aruba, bei dem WebHosting und das Verwalten der DNS Zone m&ouml;glich w&auml;ren. Nach einigem hin und her, konnte ich den Support schlie&szlig;lich dazu bewegen, die ben&ouml;tigten DNS Eintr&auml;ge f&uuml;r Office 365 zu erstellen. Damit die Domain zu Office 365 hinzugef&uuml;gt werden kann, muss zun&auml;chst ein TXT Record mit einem von Microsoft vorgegebenen Wert erstellt werden:</p>
<p>Type: TXT <br />Name: @ <br />TXT Value: MS=ms93664998 <br />TTL: 1 Hour</p>
<p>Jetzt kann die Domain verifiziert werden, sobald dieser Vorgang abgeschlossen ist, k&ouml;nnen Benutzer hinzugef&uuml;gt werden. Diesen Schritt habe ich &uuml;bersprungen und stattdessen der Domain ein Verwendungszweck zugewiesen. In unserem Fall: Exchange Online.</p>
<p><a href="/assets/image_617.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/image_thumb_615.png" alt="image" width="244" height="179" border="0" /></a></p>
<p>Sobald der Verwendungszweck ausgew&auml;hlt ist, werden weitere DNS Eintr&auml;ge ben&ouml;tigt, diese sind:</p>
<p><a href="/assets/image_618.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/image_thumb_616.png" alt="image" width="244" height="158" border="0" /></a>&nbsp;</p>
<p>Auch diese Eintr&auml;ge hat der Support freundlicherweise erstellt, wichtig ist hierbei, dass Office 365 die Eintr&auml;ge &uuml;berpr&uuml;ft, der MX Eintrag muss also die Priorit&auml;t 0 haben und auch der TTL Wert muss &uuml;bereinstimmen, damit die Domain hinzugef&uuml;gt werden kann.</p>
<h1>Mail</h1>
<p>Eine serverseitige Migration der Inhalte war nicht m&ouml;glich, Inhalten konnten &uuml;ber einen Client (Outlook) oder &uuml;ber das &ldquo;Connected Account&rdquo; Feature von Office 365, &uuml;bernommen werden. Mit diesem Feature kann ein Benutzer bis zu f&uuml;nf Postf&auml;cher zu seinem Office 365 Konto hinzuf&uuml;gen. Unterst&uuml;tzt werden Konten die POP oder IMAP unterst&uuml;tzen.</p>
<p>Viele Gr&uuml;&szlig;e aus der Cloud :) <br />Tom</p>
