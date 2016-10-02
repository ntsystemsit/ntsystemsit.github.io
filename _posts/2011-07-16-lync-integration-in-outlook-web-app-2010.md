---
layout: post
title: "Lync Integration in Outlook Web App 2010"
date: 2011-07-16 16:54:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Server"]
redirect_from: ["/post/Lync-Integration-in-Outlook-Web-App-2010", "/post/lync-integration-in-outlook-web-app-2010"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Seit einiger Zeit ist der Nachfolger des Office Communication Servers verf&uuml;gbar, Lync 2010 vereint Enterprise Voice, Instant Messaging, Presence sowie Live Meeting, weitere Details gibts hier: <a href="http://lync.microsoft.com/en-us/Pages/default.aspx">http://lync.microsoft.com/en-us/Pages/default.aspx</a></p>
<p>Auch Outlook Web App kann als Lync Client konfiguriert werden, folgende Features werden direkt von OWA unterst&uuml;tzt, es wird daf&uuml;r kein Client auf dem PC ben&ouml;tigt:</p>
<ul>
<li>Presence, der Status anderer wird angezeigt, au&szlig;erdem kann man seinen Status &auml;ndern bzw. sich an- und abmelden </li>
<li>Die Lync Kontaktliste wird angezeigt </li>
<li>Instant Messaging mit einem Web Client </li>
</ul>
<h1>Prerequisites</h1>
<ul>
<li>Auf dem Client Access Server m&uuml;ssen die Komponenten f&uuml;r Microsoft Office Communications Server 2007 R2 Web Service Provider installiert werden. </li>
<li>Der Common Name im Zertifikat des Client Access Servers muss der FQDN des Client Access Servers sein. Wenn es sich um ein CAS Array handelt muss der Common Name dem FQDN des CAS Array entsprechen. </li>
<li>Instant Messaging muss auf dem Client Access Server aktiviert werden </li>
<li>In der Lync Umgebung muss ein Trusted Application Pool und eine Trusted Application erstellt und aktiviert werden. </li>
</ul>
<h1>Exchange Client Access Server/Array Konfiguration</h1>
<p>Folgende Pakete herunterladen:</p>
<ol>
<li>Office Communication Web Service Provider:      <br /><a title="http://www.microsoft.com/download/en/details.aspx?displaylang=en&amp;id=2310" href="http://www.microsoft.com/download/en/details.aspx?displaylang=en&amp;id=2310">http://www.microsoft.com/download/en/details.aspx?displaylang=en&amp;id=2310</a> </li>
<li>Hotfix f&uuml;r den OC Web Service Provider:      <br /><a title="http://www.microsoft.com/download/en/details.aspx?displaylang=en&amp;id=797" href="http://www.microsoft.com/download/en/details.aspx?displaylang=en&amp;id=797">http://www.microsoft.com/download/en/details.aspx?displaylang=en&amp;id=797</a> </li>
<li>Hotfix f&uuml;r Unified Communication API:      <br /><a title="http://www.microsoft.com/download/en/details.aspx?id=7557" href="http://www.microsoft.com/download/en/details.aspx?id=7557">http://www.microsoft.com/download/en/details.aspx?id=7557</a> </li>
</ol>
<p>Als erstes wird jetzt CWAOWASSPMain.msi installiert, dieses Paket erstellt einen Ordner (Standard: C:\Web Service Provider Installer Package\) und kopiert die ben&ouml;tigten Installationsdateien f&uuml;r den OC Web Service Provider in diesen Ordner. Jetzt in diesen Ordner wechseln und die Pakete in folgender Reihenfolge installieren</p>
<ol>
<li>vcredist_x64.exe </li>
<li>UcmaRedist.msi </li>
<li>CWAOWASSP.msi </li>
</ol>
<p>Jetzt fehlen noch die Hotfixes aus den Downloads 2 und 3, auch diese Pakete installieren</p>
<ol>
<li>UcmaRedist.msp </li>
<li>CWAOWASSP.msp </li>
</ol>
<p>Die ben&ouml;tigte Software ist somit installiert, jetzt muss Instant Messaging noch aktiviert werden. Die Konfiguration daf&uuml;r wird am OWA Virtual Directory gemacht. Der InstantMessagingType wird auf OCS ge&auml;ndert, als InstantMessagingServerName wird der Lync Server angegeben. Au&szlig;erdem muss der Thumbprint des Zertifikates das f&uuml;r TLS verwendet werden soll angegeben werden und InstantMessaging aktiviert werden. Folgende PowerShell Befehl erledigt dieses Schritte:</p>
<blockquote>
<p>$iiscert = (Get-ExchangeCertificate | Where {$_.Services -like "*IIS*"}).Thumbprint</p>
</blockquote>
<blockquote>
<p>Get-OWAVirtualDirectory -Server ex14.ntsystems.local | Set-OWAVirtualDirectory -InstantMessagingType OCS -InstantMessagingEnabled:$true -InstantMessagingCertificateThumbprint $iiscert -InstantMessagingServerName lync.ntsystems.local</p>
</blockquote>
<p>Achtung: Wenn bei Get-OWAVirtualDirectory der Parameter Server weggelassen wird werden alle Virtual Directories der Exchange Umgebung konfiguriert. Bei InstantMessagingServerName muss der FQDN des Lync Servers angegeben werden.</p>
<p>In einem CAS Array m&uuml;ssen diese Schritte auf allen Servern wiederholt werden.</p>
<h1>Lync Server Konfiguration</h1>
<p>Mit dem Lync Server Topology Builder wird jetzt unter &ldquo;Trusted Application Servers&rdquo; ein neuer Application Pool angelegt. Dieser Pool wird als Single Computer Pool angelegt, der FQDN muss dabei entweder dem Namen des Client Access Server oder dem Namen des CAS Arrays entsprechen.</p>
<p><a href="/assets/image_330.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_328.png" border="0" alt="image" width="244" height="193" /></a></p>
<p>Jetzt wird der Lync Server Frontend Pool ausgew&auml;hlt, welcher f&uuml;r diese Applikation verwendet werden soll.</p>
<p><a href="/assets/image_331.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_329.png" border="0" alt="image" width="244" height="193" /></a></p>
<p>Der Server ist jetzt erstellt, Standardm&auml;&szlig;ig ist &ldquo;Enable replication of configuration data to this pool&rdquo; aktiviert, das wird nicht ben&ouml;tigt und kann in den Eigenschaften des soeben erstellten Objektes deaktiviert werden.</p>
<p><a href="/assets/image_332.png"><img style="background-image: none; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_330.png" border="0" alt="image" width="244" height="69" /></a></p>
<p>Jetzt kann die &Auml;nderung der Topologie ver&ouml;ffentlicht werden, dazu klickt auf Action, Topology und Publish.</p>
<p>Es fehlt noch die CSTrustedApplication, diese wird &uuml;ber die Lync Server Management Shell angelegt. Auch dabei muss wieder der FQDN des Client Access Servers oder des CAS Arrays angegeben werden, au&szlig;erdem wird ein Port f&uuml;r die Applikation angegeben, nat&uuml;rlich muss ein Port verwendet werden der frei ist. (netstat &ndash;an zeigt verwendete Ports an). Mit folgendem PowerShell Befehl wird die Applikation erstellt:</p>
<blockquote>
<p>New-CsTrustedApplication -ApplicationID OWA -TrustedApplicationPoolFqdn ex14.ntsystems.local -Port 4999</p>
</blockquote>
<p>Diese Konfiguration muss noch aktiviert werden, das wird mit folgendem PowerShell cmdlet gemacht:</p>
<blockquote>
<p>Enable-CsTopology</p>
</blockquote>
<h1>Enjoy</h1>
<p>Die Konfiguration ist jetzt abgeschlossen, ab jetzt sind die neuen Features in Outlook Web App aktiv&hellip;</p>
<p><a href="/assets/image_333.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_331.png" border="0" alt="image" width="244" height="215" /></a></p>
<h1>Troubleshooting</h1>
<ol>
<li>FQDN &ndash; Der CN im Zertifikat des Client Access Servers (oder Arrays) muss passen. Mit Get-CsTrustedApplication bzw. Get-CsTrustedApplicationComputer kann man die Lync Konfiguration nochmal &uuml;berpr&uuml;fen </li>
<li>Lync Server Logging Tool &ndash; bei vielen Problemen hilft das Log des SIPStack </li>
</ol>
<p>&nbsp;</p>
<p>viel Spa&szlig;    <br />tom</p>
