---
layout: post
title: "Import/Export Mailbox"
date: 2010-08-08 13:40:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Exchange"]
redirect_from: ["/post/ImportExport-Mailbox", "/post/importexport-mailbox"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Mit den cmdlets import-Mailbox und export-Mailbox kann Inhalt von einer Mailbox exportiert oder in eine Mailbox importiert werden. Soviel sagt eigentlich der Name auch ;)</p>
<p>Diese cmdlets sind standardm&auml;&szlig;ig aber nicht verf&uuml;gbar, bzw. hat ein &bdquo;normaler&ldquo; Exchange Organization Administrator keine Berechtigungen sie zu verwenden. Bevor diese Berechtigungen gesetzt werden sollte man RBAC (Role Based Access Control) verstehen.</p>
<p>Man erstellt eine neue Universelle Gruppe im Active Directory, ich gebe ihr einen beschreibenden Namen &bdquo;Enterprise Import Export Users&ldquo;. Jetzt wei&szlig;e ich dieser Gruppe die Management Rolle &bdquo;Mailbox Import Export&ldquo; zu, dazu verwende ich folgendes cmdlet in der Exchange Management Shell:</p>
<p style="padding-left: 30px">New-ManagementRoleAssignment -Name "Import Export Role" -SecurityGroup "Enterprise Import Export Users" -Role "Mailbox Import Export"</p>
<p>Mitglieder dieser Gruppe haben jetzt die notwendigen Berechtigungen um die Import/Export cmdlets zu verwenden, die Exchange Management Shell bzw. Management Konsole m&uuml;ssen neu gestartet werden.</p>
<h4>Import-Mailbox</h4>
<p>Wird verwendet um PST Daten in Mailboxen zu importieren. Wenn die PST Dateien im Format &lt;Exchange Alias&gt;.pst vorhanden sind kann man auch mehrere Imports gleichzeitig machen.</p>
<p>Mit diesem Befehlt werden alle Elemente aus c:\pst\test.pst in die Mailbox &ldquo;test&rdquo; importiert.</p>
<p style="padding-left: 30px">Import-Mailbox &ndash;identity test &ndash;PstFolderPath c:\pst\test.pst</p>
<p>Mit diesem Befehl werden alle Dateien im Ordner c:\pst in die entsprechenden Mailboxen importiert, wichtig ist dabei der Name der PST Files.</p>
<p style="padding-left: 30px">Dir c:\pst |Import-Mailbox</p>
<h4>Export-Mailbox</h4>
<p>Wird verwendet um Objekte von Mailboxen zu exportieren, als Ziel kann eine andere Mailbox oder eine PST Datei anagegeben werden. H&auml;ufig wird dieses cmdlet verwendet um Objekte aus einer Recovery Datenbank wieder in der urspr&uuml;nglichen Mailbox herzustellen.</p>
<p>Mit diesem Befehl werden alle Elemente aus der Mailbox &ldquo;test&rdquo; in den Ordner &ldquo;testdata&rdquo; der Mailbox &ldquo;export&rdquo; kopiert.</p>
<p style="padding-left: 30px">Export-Mailbox -Identity test -TargetMailbox export -TargetFolder testdata</p>
<p>Mit diesem Befehl werden alle Element aus der Mailbox "test" in die PST Datei auf C:\pst exportiert. Achtung: F&uuml;r diesen Befehl wird Outlook (x64)&nbsp;auf dem Exchange Server ben&ouml;tigt der den Export durchf&uuml;hren soll. Nach Best Practice sollte das ein separater Server sein der sonst keine Mailboxen h&auml;lt.</p>
<p style="padding-left: 30px">Export-Mailbox -Identity test -PstFolderPath c:\pst\test.pst</p>
<p>Genauere Informationen gibts im Technet: <a href="http://technet.microsoft.com/en-us/library/aa998579.aspx" target="_blank">Export-Mailbox</a>, <a href="http://technet.microsoft.com/en-us/library/bb629586.aspx" target="_blank">Import-Mailbox</a></p>
<p>tom</p>
