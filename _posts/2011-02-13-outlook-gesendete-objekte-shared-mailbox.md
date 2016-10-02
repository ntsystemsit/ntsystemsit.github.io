---
layout: post
title: "Outlook–gesendete Objekte–Shared Mailbox"
date: 2011-02-13 14:07:00 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Exchange", "Client"]
redirect_from: ["/post/Outlook-gesendete-Objekte-Shared-Mailbox", "/post/outlook-gesendete-objekte-shared-mailbox"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Wie in <a href="/post/Shared-Mailboxes-und-Auto-Mapping-E14-Sp1.aspx" target="_blank">diesem Post</a> beschrieben kann man mit Exchange 2010 einfach Shared Mailboxen verbinden. Wenn ein User Send-As Berechtigungen auf eine solche Mailbox hat und ein Mail schickt, wird das Mail im Ordner “Sent Items” des jeweiligen Users gespeichert. Damit die gesendete Nachricht in den Sent Items der shared Mailbox gespeichert wird muss man folgenden Eintrag in der Registry erstellen (auf den Clients).</p>  <p>Unter dem Schlüssel: “HKEY_CURRENT_USER\Software\Microsoft\Office\14.0\Outlook\Preferences” wird ein REG_DWORD mit dem Namen “DelegateSentItemsStyle” und dem Wert “1” erstellt.</p>  <p><a href="/assets/image_298.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/image_thumb_296.png" width="220" height="244" /></a></p>  <p>In einer Active Directory Umgebung bieten sich natürlich die Group Policy Preferences dafür an.</p>
