---
layout: post
title: "Windows Server 8–Virtualized Domain Controller"
date: 2012-03-23 23:15:00 +0100
comments: true
category: Archive
tags: ["Server-2012"]
redirect_from: ["/post/Windows-Server-8-Virtualized-Domain-Controller", "/post/windows-server-8-virtualized-domain-controller"]
author: thomas torggler
language: de
---
<!-- more -->
<p>In bisherigen Version von Windows Server und Active Directory hatte das Betreiben von virtuellen DCs einige Nachteile im Vergleich zu anderen virtuellen Servern. So konnten Domain Controller z.B. nicht von der Snapshot F&auml;higkeit des Hypervisors profitieren, das zur&uuml;cksetzen eines DCs auf einen Snapshot hatte fatale Auswirkungen auf die Gesamtstruktur.</p>
<h1>VDC Safe Restore</h1>
<p>Im Active Direcotry Replikationsmodell wird jede Transaktion mit einer fortlaufenden Nummer (Update Sequence Number) versehen. Domain Controller &ldquo;merken&rdquo; sich diese Nummern sowie eine eindeutige ID des Replikationspartners (Invocation ID) von dem sie die jeweilige &Auml;nderung erhalten haben. Wird ein DC auf einen fr&uuml;heren Zeitpunkt zur&uuml;ckgesetzt (Snapshot) k&ouml;nnte er bereits verwendete USNs wiederverwenden, seine Replikationspartner akzeptieren diese Transaktionen nicht mehr, sie haben diese bereits erhalten. Der wiederhergestellte DC kann nicht mehr replizieren und wird in den sogenannten &ldquo;USN Rollback Protection&rdquo; Status gesetzt. Der DC muss jetzt manuell aus dem AD entfernt werden.</p>
<p>In Windows Server 8 Active Directory gibt es ein Feature das dieses Problem verhindern soll. &Uuml;ber die ACPI Table stellt der Hypervisor die VM-Generation ID zur Verf&uuml;gung, diese wird im RAM des jeweiligen Domain Controllers gespeichert.</p>
<p>Wird ein Snapshot angewandt, wird diese VM-Generation ID zur&uuml;ckgesetzt, so merkt der Domain Controller dass er wiederhergestellt wurde.</p>
<p><a href="/assets/archive/image_421.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_419.png" border="0" alt="image" width="244" height="171" /></a>&nbsp;<a href="/assets/archive/image_424.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_422.png" border="0" alt="image" width="244" height="171" /></a></p>
<p>Der wiederhergestellte DC setzt seine Invocation ID zur&uuml;ck und da seine Replikationspartner diese ID noch nicht kennen kann die Replikation wieder aufgenommen werden. Au&szlig;erdem wird der SYSVOL Ordner &ldquo;nicht autorisierend&rdquo; wiederhergestellt und folgendes Ereignis wird im &ldquo;Directory Service&rdquo; Event Log protokolliert.</p>
<p><a href="/assets/archive/image_422.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_420.png" border="0" alt="image" width="244" height="171" /></a></p>
<p>Folgendes Active Directory Attribut wird f&uuml;r die VM-Generation ID verwendet. <a href="http://msdn.microsoft.com/en-us/library/windows/desktop/hh446580(v=VS.85).aspx">Hier</a> geht&rsquo;s zum entsprechenden Eintrag im MSDN.</p>
<p><code>ms-DS-Generation-Id</code></p>
<p><a href="/assets/archive/image_423.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/archive/image_thumb_421.png" border="0" alt="image" width="219" height="244" /></a></p>
<p>VDC Safe Restore muss (und kann) nicht konfiguriert werden, sofern der Hypervisor das VM-Generation ID Feature unterst&uuml;tzt ist es automatisch aktiv. Aktuell unterst&uuml;tzt nur Windows Server 8 Hyper-V dieses Feature, andere Herstellen werden hoffentlich bald nachziehen.</p>
<p>Achtung, dieses Feature soll die USN Rollback Problematik l&ouml;sen, es ist auf keinem Fall ein Ersatz f&uuml;r ein konsistentes Backup! Der DC wird &ldquo;nicht autorisierend&rdquo; wiederhergestellt.</p>
<p>&nbsp;</p>
<p>so long,</p>
<p>tom</p>
{% include imported_disclaimer.html %}
