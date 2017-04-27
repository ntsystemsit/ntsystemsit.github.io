---
layout: post
title: "E14 SP1 Import/Export Update"
date: 2010-08-28 22:03:00 +0200
comments: true
category: Archive
tags: ["Exchange"]
redirect_from: ["/post/E14-SP1-ImportExport-Update", "/post/e14-sp1-importexport-update"]
author: thomas torggler
language: de
---
<!-- more -->
<p>Vor kurzem habe ich in <a href="/post/ImportExport-Mailbox.aspx">diesem Post</a> &uuml;ber die Import/Export-Mailbox cmdlets geschrieben.</p>
<p>Mit Exchange 2010 SP1 wurde die Import/Export Funktionalit&auml;t ge&auml;ndert und die cmdlets werden durch MailboxImportRequest und MailboxExportRequest ersetzt. Die Vorteile die daraus Resultieren sind folgende:</p>
<ul>
<li>Import/Export von Online Archiven</li>
<li>Verwendet Exchange MAPI Provider, Outlook muss nicht mehr auf dem Server installiert werden</li>
<li>cmdlets verwenden UNC Pfade (PST Files m&uuml;ssen nicht mehr auf den Server kopiert werden)</li>
</ul>
<p>Beispiel:</p>
<p>New-MailboxImportRequest-Mailbox&nbsp;test -IsArchive&nbsp;-FilePath \\server\test.pst</p>
<p>Dieser Befehl Importiert den Inhalt der Datei test.pst in das Online Archiv der Mailbox "test".</p>
{% include imported_disclaimer.html %}
