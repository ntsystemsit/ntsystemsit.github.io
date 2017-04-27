---
layout: post
title: "PowerShell–Rekursiv nach Änderungsdatum sortieren"
date: 2011-09-08 21:12:00 +0200
comments: true
category: Archive
tags: ["PowerShell"]
redirect_from: ["/post/PowerShell-Rekursiv-nach-Anderungsdatum-sortieren", "/post/powershell-rekursiv-nach-anderungsdatum-sortieren"]
author: thomas torggler
language: de
---
<!-- more -->
<p>Ganze Ordnerstrukturen oder Laufwerke nach Dateien zu durchsuchen die zuletzt ge&auml;ndert worden sind kann ganz sch&ouml;n m&uuml;hsam sein. Mit der PowerShell geht das in einem Oneliner.</p>
<p><code>PS X:\&gt; Get-ChildItem C:\Windows\Logs -Recurse | Sort-Object -Property LastWriteTime &ndash;Descending | Where-Object {$_.Mode -notlike "d*"} | Select-Object -First 10 | Format-Table -Property LastWriteTime,FullName &ndash;AutoSize</code></p>
<p>Dieses Beispiel durchsucht C:\Windows\Logs rekursiv und sortiert Absteigend nach &ldquo;LastWriteTime&rdquo;. Ordner werden standardm&auml;&szlig;ig auch zur&uuml;ckgegeben, diese werden mit &ldquo;Where-Object&rdquo; gefiltert. Da mich nur die 10 Dateien interessieren die zuletzt ge&auml;ndert wurden verwende ich &ldquo;Select-Object&rdquo;. Anschlie&szlig;end wird die Ausgabe noch Formatiert. Das Ganze sieht dann so aus:</p>
<p><a href="/assets/archive/image_342.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_340.png" border="0" alt="image" width="644" height="124" /></a></p>
<p>M&ouml;chte man das Ergebnis in eine Datei schreiben, bietet sich das cmdlet &ldquo;Export-CSV&rdquo; an, daf&uuml;r &auml;ndert man die &ldquo;Select-Object&rdquo; Abfrage z.B. folgenderma&szlig;en:</p>
<p><code>PS X:\&gt; Get-ChildItem C:\Windows\Logs -Recurse | Sort-Object -Property LastWriteTime -Descending | Where-Object {$_.Mode -notlike "d*"} | Select-Object &ndash;Property FullName,CreationTime,LastWriteTime,LastAccessTime,Length,Attributes | Export-Csv Report.csv</code></p>
<p>Das Ergebnis sieht dann so aus:</p>
<p><a href="/assets/archive/image_343.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_341.png" border="0" alt="image" width="644" height="58" /></a></p>
<p>Durch &Auml;nderungen der Where, Select, Format cmdlets bzw. Parameter l&auml;sst sich eine Vielzahl von Ausgaben erzeugen, f&uuml;r weitere Informationen und Hilfe zu den einzelnen cmdlets:</p>
<p><code>Get-Help cmdlet &ndash;Online</code></p>
<p><strong>Achtung:</strong> Der Parameter &ldquo;Recurse&rdquo; geht durch alle untergeordneten Verzeichnisse, das kann je nach Struktur ziemlich lange dauern. Au&szlig;erdem gelten Berechtigungen nat&uuml;rlich auch f&uuml;r die PowerShell, man kann also nicht Ordner durchsuchen auf die man keine Rechte hat, das sieht dann so aus:</p>
<p><a href="/assets/archive/image_344.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_342.png" border="0" alt="image" width="644" height="70" /></a></p>
<p>have fun!    <br />tom</p>
{% include imported_disclaimer.html %}
