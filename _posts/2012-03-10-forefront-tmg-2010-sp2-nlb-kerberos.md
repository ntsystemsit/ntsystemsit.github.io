---
layout: post
title: "Forefront TMG 2010 SP2–NLB Kerberos"
date: 2012-03-10 16:44:00 +0100
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["de", "Server", "Security"]
alias: ["/post/Forefront-TMG-2010-SP2-NLB-Kerberos.aspx", "/post/forefront-tmg-2010-sp2-nlb-kerberos.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Seit kurzem ist das Service Pack 2 f&uuml;r den Nachfolger von ISA 2006 verf&uuml;gbar. Neben Bugfixes und verbesserten Fehlerseiten ist vor allem die M&ouml;glichkeit den Firewall Service als Domain User zu starten interessant. Dadurch erh&auml;lt man die M&ouml;glichkeit den SPN f&uuml;r die virtuelle IP Adresse des NLB Custer auf eine Benutzerkonto zu binden, wenn der Firewall Service dann mit diesem Konto gestartet wird, funktioniert Kerberos Authentifizierung auch im NLB.</p>
<h1>&nbsp;</h1>
<h1>&nbsp;</h1>
<h1>NLB und Kerberos</h1>
<p>F&uuml;r ein erfolgreiche Kerberos Authentifizierung muss der Service Principal Name den der Client verwendet um sich mit dem Server zu verbinden im Active Directory Account des Servers registriert sein. Der SPN muss im gesamten Forest eindeutig sein, d.h. nur ein Account kann den SPN f&uuml;r die NBL IP Adresse verwenden. Verbinden sich Clients mit anderen Knoten im Cluster schl&auml;gt die Kerberos Authentifizierung fehl, da der SPN nicht stimmt.</p>
<p>Bisher konnte der &ldquo;Microsoft Forefront TMG Firewall Service&rdquo; nur als Network Service laufen, d.h. f&uuml;r Kerberos Authentifizierungen wurde das Computerkonto jedes TMG Servers verwendet.</p>
<p><a href="/assets/image_415.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_413.png" alt="image" width="244" height="18" border="0" /></a></p>
<p>Mit Service Pack 2 kann man den Firewall Dienst als Dom&auml;nenbenutzer starten, registriert man auf diesen Dom&auml;nenbenutzer die ben&ouml;tigten SPNs funktioniert die Kerberos Authentifizierung im Clusterbetrieb.</p>
<h1>Service Account Sicherheit</h1>
<p>Aus Sicherheitsgr&uuml;nden sollte man ein eigenes Benutzerkonto f&uuml;r den TMG Service anlegen, dieses Benutzerkonto sollte ausschlie&szlig;lich f&uuml;r TMG verwendet werden und keine weiteren Berechtigungen in der Domain haben. Au&szlig;erdem sollte man das Konto aus der Gruppe &ldquo;Domain Users&rdquo; entfernen, und eine andere Gruppe als prim&auml;re Gruppe definieren. Auch dieses Gruppe sollte kein Berechtigungen in der Domain oder auf einem anderen System haben.</p>
<p>Forefront TMG erteilt dem Benutzerkonto automatisch die minimal ben&ouml;tigten Berechtigungen wenn man den Firewall Service f&uuml;r dieses Konto konfiguriert. Auch auf dem TMG ist somit keine Konfiguration von Berechtigungen f&uuml;r das Service Account notwendig.</p>
<h1>Konfiguration</h1>
<p>Nach der Installation von Service Pack 2 kann man in den Eigenschaften des Arrays, im Reiter &ldquo;Credentials&rdquo; das Konto ausw&auml;hlen unter dem der Firewall Service in Zukunft laufen soll.</p>
<p><a href="/assets/image_416.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_414.png" alt="image" width="190" height="244" border="0" /></a></p>
<h1>SPN hinzuf&uuml;gen</h1>
<p>Um einen Serivce Principal Name zum Service Account hinzuzuf&uuml;gen, kann man z.B. das Tool &ldquo;setspn&rdquo; verwenden.</p>
<p>Registrierte SPNs anzeigen:</p>
<blockquote>
<p>setspn &ndash;L benutzername</p>
<p>setspn &ndash;L computername</p>
</blockquote>
<p>Neuen SPN registrieren:</p>
<blockquote>
<p>setspn -S http/myArray.ntsystems.local tmgSvcUsr</p>
</blockquote>
<p>Der Parameter &ndash;S &uuml;berpr&uuml;ft zuerst ob der SPN nicht bereits von einem anderen Konto verwendet wird, anschlie&szlig;end wird er zum Konto hinzugef&uuml;gt.</p>
<h1>Verify Kerberos Authentication</h1>
<p>Mit einem Netzwerk Analyse Tool sieht man dass vor der Registrierung des SPN NTLM f&uuml;r Proxy Authentifizierung verwendet wird.</p>
<p><a href="/assets/image_417.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_415.png" alt="image" width="244" height="32" border="0" /></a></p>
<p>Wurde der Firewall Service als Domain User gestartet und der ben&ouml;tigte SPN registriert, wird Kerberos verwendet.</p>
<p><a href="/assets/image_418.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_416.png" alt="image" width="244" height="22" border="0" /></a></p>
<p>Der Client verwendet jetzt GSS-API, also Kerberos, um sich zu authentifizieren. Mit &ldquo;klist&rdquo; kann man sehen dass der Client jetzt ein Ticket f&uuml;r den Array Namen hat.</p>
<p><a href="/assets/image_419.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_417.png" alt="image" width="244" height="99" border="0" /></a></p>
<p>Achtung: Es m&uuml;ssen alle Mitglieder im Array aktualisiert werden, bevor der Firewall Service als Domain User gestartet werden kann. Au&szlig;erdem sollte man den SPN erst dann hinzuf&uuml;gen, wenn der Firewall Service als Domain User l&auml;uft da es sonst zu Authentifizierungsproblemen kommt.</p>
<p>&nbsp;</p>
<p>Weitere Informationen zu &ldquo;Kerberos authentication on an NLB array&rdquo; im TechNet: <a title="http://technet.microsoft.com/en-us/library/hh454304.aspx" href="http://technet.microsoft.com/en-us/library/hh454304.aspx">http://technet.microsoft.com/en-us/library/hh454304.aspx</a></p>
<p>Um Forefront TMG SP2 installieren zu k&ouml;nnen muss Forefront TMG SP1 Update 1 installiert sein, Download: <a title="http://www.microsoft.com/download/en/details.aspx?id=11445" href="http://www.microsoft.com/download/en/details.aspx?id=11445">http://www.microsoft.com/download/en/details.aspx?id=11445</a></p>
<p>&nbsp;</p>
<p>so long, tom</p>
