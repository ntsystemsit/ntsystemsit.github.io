---
layout: post
title: "PowerShell Implicit Remoting"
date: 2012-02-25 18:47:00 +0100
comments: true
category: Archive
tags: ["PowerShell"]
redirect_from: ["/post/PowerShell-Implicit-Remoting", "/post/powershell-implicit-remoting"]
author: thomas torggler
language: de
---
<!-- more -->
<p>Eine der wichtigsten Funktionen der PowerShell ist die M&ouml;glichkeit cmdlet&rsquo;s (ScriptBlocks) auf remoten System auszuf&uuml;hren. Dazu wird eine PowerShell Sesion mit dem Remote Computer erstellt, die Befehle werden remote ausgef&uuml;hrt und das Ergebnis lokal angezeigt.</p>
<p>Nun gibt es verschiedene Module f&uuml;r das Verwalten von Serverrollen wie z.B. Active Directory, Exchange 2010 oder Lync 2010. Will ich von meinem Client aus diese cmdlet&rsquo;s verwenden muss ich die Module installieren. Oder?</p>
<h1>Session erstellen und Modul Laden</h1>
<p>Man erstellt eine neue PSSessoin mit einem Computer auf dem das entsprechende Modul installiert ist.</p>
<p><code>$ADSession = New-PSSession &ndash;ComputerName dc01.domain.local</code></p>
<p>Dann wird das Modul in der gerade erstellten Session geladen:</p>
<p><code>Invoke-Command {Import-Module ActiveDirectory}&nbsp; -Session $ADSession</code></p>
<h1>Import-PSSession</h1>
<p>Befehle aus einer Session k&ouml;nnen mit Import-PSSession in die aktuelle PowerShell Sitzung &uuml;bernommen werden, man kann entweder alle Verf&uuml;gbaren cmdlet&rsquo;s importieren oder nur einen Teil. In diesem Beispiel interessieren mich die cmdlets aus dem ActiveDirectory Modul, die entsprechenden Nouns beginnen mit AD, ich kann also auf *-AD* Filtern und so nur ActiveDirectory cmdlet&rsquo;s &uuml;bernehmen.</p>
<p><code>Import-PSSession -Session $ADSession-CommandName *-AD*</code></p>
<p>So kann ich in meiner aktuellen PS Sitzung die AD cmdlet&rsquo;s wie Get-ADUser verwenden. Schlie&szlig;e ich das aktuelle PS Fenster wars das mit den AD cmdlet&rsquo;s.</p>
<h1>Export-PSSession</h1>
<p>Damit man sich diese Befehle nicht merken muss und die cmdlet&rsquo;s einfach wiederverwendet kann, erstellt Export-PSSession automatisch ein Modul mit den gew&uuml;nschten remote cmdlet&rsquo;s.</p>
<p><code>Export-PSSession $ADSession -OutputModule AD -CommandName *-AD* &ndash;AllowClobber</code></p>
<p>Jetzt kann man das aktuelle PowerShell Fenster schlie&szlig;en, ein Modul wurde erstellt das wie gewohnt geladen werden kann.</p>
<p><code>Import-Module AD</code></p>
<p>Die Befehle aus dem Modul sind jetzt verf&uuml;gbar, allerdings gibt es noch keine PSSession. Diese muss jedoch nicht manuell erstellt werden, f&uuml;hrt man den ersten Befehl aus dem Modul aus (Get-ADUser username) wird automatisch eine PS Session mit dem remote Computer erstellt und das cmdlet ausgef&uuml;hrt.</p>
<p>So kann man also auf jedem beliebigen Client (auf dem nur PowerShell v2 installiert ist) cmdlet&rsquo;s ausf&uuml;hren die auf dem Server laufen.</p>
<h1>Exchange und Lync</h1>
<p>Exchange und Lync bieten einen eigenen Endpoint f&uuml;r PowerShell Verbindungen, man gibt diesen bei der Erstellung der PSSession als ConnectionURI an.</p>
<p><code>$exSession = New-PSSession -ConnectionUri 'http://ex14.domain.local/powershell/&rsquo; -ConfigurationName Microsoft.Exchange -Authentication Kerberos</p>
<p>$lyncSession = New-PSSession &ndash;ConnectionUri &lsquo;https://lync.domain.local/ocspowershell&rsquo;</code></p>
<p>Hat man die gew&uuml;nschte Session erstellt kann man sie wie gehabt mit Import-PSSession gleich verwenden oder mit Export-PSSession ein Modul erstellen.</p>
<h1>Prefix</h1>
<p>Damit man die lokalen und remoten cmdlet&rsquo;s unterscheiden kann, gibt es den Parameter &ndash;Prefix f&uuml;r die cmdlet&rsquo;s Import-Module und Import-PSSession.</p>
<p><code>Import-Module AD &ndash;Prefix &lsquo;r&rsquo;</code></p>
<p>So wird jedem Noun ein &lsquo;r&rsquo; vorgestellt, ich verwende also z.B. Get-rMailbox, Get-rADUser usw.</p>
<p>&nbsp;</p>
<p>Ich denke diese wenig bekannte Funktionalit&auml;t zeigt wie genial das Konzept der PowerShell ist, mit Windows 8 sollen jede Menge weitere cmdlet&rsquo;s dazukommen. PowerShell wird das ultimative Admin Werkzeug werden.</p>
<p>&nbsp;</p>
<p>so long, happy hacking!</p>
<p>tom</p>
{% include imported_disclaimer.html %}
