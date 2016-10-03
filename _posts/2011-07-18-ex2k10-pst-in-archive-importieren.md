---
layout: post
title: "EX2k10 PST in Archive importieren"
date: 2011-07-18 21:20:31 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Exchange"]
redirect_from: ["/post/EX2k10-PST-in-Archive-importieren", "/post/ex2k10-pst-in-archive-importieren"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Um PST Files in ein Exchange 2010 SP1 Archive-Mailbox zu verschieben muss zunächst sichergestellt werden, dass der <strong>Microsoft Exchange Mailbox Replication</strong> Dienst gestartet ist. Zudem muss der Gruppe “<strong>Exchange Trusted Subsystem Security Group</strong>” NTFS und Freigabeberechtigungen für das PST File gegeben werden.</p>  <p>&#160;</p>  <p>Um den Import durchzuführen muss jetzt das entsprechende Benutzerkonto der neuen Gruppe “<strong>Mailbox Import Export Group</strong>” hinzugefügt werden:</p>  <p>New-RoleGroup &quot;Mailbox Import Export Group&quot; -Roles &quot;Mailbox Import Export&quot;</p>  <p>Add-RoleGroupMember &quot;Mailbox Import Export Group&quot; -Member &quot;Administrator&quot;</p>  <p>&#160;</p>  <p>Nun kann das PST File über den Befehl <strong>New-MailboxImportRequest</strong> in das Archiv importiert werden. </p>  <p>Anbei ein Script, wo man im File Users.csv PST Files den jeweiligen Benutzern zuweisen und den Import Request generieren kann:</p>  <p><code>import-csv &quot;Users.csv&quot;|ForEach{</p>    <p>New-MailboxImportRequest -Mailbox $_.user -FilePath $_.Path -BadItemLimit 50 -IsArchive</p>    <p>}</code></p>  <p><strong>Bsp für Users.csv:</strong></p>  <p>User,Path   <br />daniel.nitz,\\share\daniel-PST.PST</p>  <p>&#160;</p>  <p>Grüße   <br />dn</td></tr></p>
