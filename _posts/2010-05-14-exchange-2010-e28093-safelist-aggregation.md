---
layout: post
title: "Exchange 2010 – SafeList Aggregation"
date: 2010-05-14 22:00:00 +0200
comments: true
category: Archive
tags: ["Exchange", "Server"]
redirect_from: ["/post/Exchange-2010-e28093-SafeList-Aggregation", "/post/exchange-2010-e28093-safelist-aggregation"]
author: thomas torggler
---
<!-- more -->
<p>In Exchange 2010 gibt es viele M&ouml;glichkeiten sich vor Spam zu sch&uuml;tzen, unter anderem kann jeder User seine pers&ouml;nliche Black- und White List in den Outlook Junk-E-Mail Optionen pflegen.</p>
<p>Ist ein Edge Transport Server in der Exchange Organisation vorhanden, kann man diese pers&ouml;nlichen Listen direkt an der Edge, also an der ersten M&ouml;glichkeit anwenden und so die Effizienz steigern und false positives verringern. Ist die SafeList Aggregation aktiviert werden sichere Mails dem Empf&auml;nger direkt zugestellt, ohne von weitern Filter Agents gepr&uuml;ft zu werden. Au&szlig;erdem werden die blockierten Absender bei der ersten M&ouml;glichkeit blockiert.</p>
<p>Sichere Absender sind alle (E-Mail Adressen oder Domains) die in der entsprechenden Liste eingetragen sind. Outlook Kontakte und E-Mail Adressen an die der Benutzer eine Nachricht sendet k&ouml;nnen optional ausgew&auml;hlt werden.</p>
<p><a href="/assets/archive/image_122.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" src="/assets/archive/image_thumb_122.png" border="0" alt="image" width="186" height="244" /></a> <a href="/assets/archive/image_123.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" src="/assets/archive/image_thumb_123.png" border="0" alt="image" width="186" height="244" /></a></p>
<p>Die Informationen die der Benutzer in Outlook konfiguriert werden als sogenannte SafeList Collection auf dem Mailbox Server des Benutzers gespeichert. Eine SafeList Collection kann bis zu 1024 Eintr&auml;ge beinhalten.</p>
<p>Das Update-SafeList cmdlet aktualisiert diese Collection im ActiveDriectory, dort werden die Informationen (Hashes) in den Attributen msExchSafeSenderHash, msExchSafeRecipientHash, und msExchBlockedSendersHash gespeichert.</p>
<p><a href="/assets/archive/image_124.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" src="/assets/archive/image_thumb_124.png" border="0" alt="image" width="244" height="28" /></a></p>
<p><a href="/assets/archive/image_125.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" src="/assets/archive/image_thumb_125.png" border="0" alt="image" width="244" height="18" /></a></p>
<p>&Uuml;ber den EdgeSync Service werden die Attribute dann mit der ADLDS Instanz am Edge Transport Server synchronisiert (one-way).</p>
<p>Will man also die SafeList Collection eines einzelnen Users aktualisieren verwendet man &ldquo;update-safelist mail.box&rdquo;.</p>
<p>Sollen die Collections aller Mailboxen aktualisiert werden dann kann man das z.B. so machen: Get-Mailbox | Update-SafeList. Um die Edge Synchronisierung anzusto&szlig;en (Testumgebung) kann man noch Start-EdgeSychronization verwenden.</p>
<p><a href="/assets/archive/image_127.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="image" src="/assets/archive/image_thumb_127.png" border="0" alt="image" width="244" height="19" /></a></p>
<p>Wenn es sich um eine gr&ouml;&szlig;ere Organisation handelt werden mit Get-Mailbox wom&ouml;glich nicht alle Mailboxen zur&uuml;ckgegeben, daf&uuml;r eignet sich folgende Kommandos.</p>
<p>Set-AdServerSettings -ViewEntireForest $true <br />Get-Mailbox -ResultSize Unlimited -RecipientTypeDetails UserMailbox | Update-Safelist</p>
<p>Wenn man diese beiden Kommandos in einer Datei speichert kann man einfach einen geplanten Task erstellen der die SafeList automatisch aktualisiert.</p>
<p><strong>Achtung:</strong> Damit die SafeList Aggregation funktioniert muss der Content Filtering Agent am Edge Transport Server laufen. Das kann mit &ldquo;Get-ContentFilterConfig&rdquo; einfach &uuml;berpr&uuml;ft werden.</p>
<p>tomt</p>
{% include imported_disclaimer.html %}
