---
layout: post
title: "Exchange 2010 – Edge Subscription"
date: 2009-12-17 22:09:00 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Server", "Exchange"]
redirect_from: ["/post/Exchange-2010-e28093-Edge-Subscription", "/post/exchange-2010-e28093-edge-subscription"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Exchange 2010 bringt wie sein Vorg&auml;nger die Edge Transport Rolle mit. In Exchange 2007 wurde bei jeder Synchronisation die gesamte Konfiguration repliziert, dieser Prozess wurde mit Exchange 2010 verbessert, jetzt ist die erste Replikation vollst&auml;ndig, bei allen weiteren werden nur noch die &Auml;nderungen repliziert (incremental updates).<br />Diese Serverrolle kann als einzige nicht mit anderen Rollen auf einem Server installiert werden, der Grund daf&uuml;r ist auch einfach erkl&auml;rt: der Edge Transport Server wird als Mail Relay in der DMZ eingesetzt und ist kein Dom&auml;nenmitglied bzw. hat nur sehr eingeschr&auml;nkten Zugriff auf das LAN.</p>
<p>Vor der Installation des Edge Transport Servers muss die interne Hub Transport Rolle konfiguriert werden. Das hei&szlig;t Accepted Domains und die Connectoren m&uuml;ssen konfiguriert werden. <a href="http://technet.microsoft.com/en-us/library/dd335218.aspx" target="_blank">Hier ein Link</a> zur entsprechenden Technet Seite.</p>
<p>Die Installation des Edge Transport Servers gestaltet sich sehr einfach. Man braucht einen x64 Server 2008 (am besten R2) in der Standard Edition. Dort wird das .net Framework installiert. Au&szlig;erdem wird ein Verzeichnisdienst ben&ouml;tigt, der Edge Transport Server muss ja wissen welche Empf&auml;nger es im Active Directory gibt. Active Direcotry Lightweight Directory Services (ADLDS), der Nachfolger des ADAM, und die entsprechende Verwaltungskonsole werden also auch installiert.</p>
<p>Am schnellsten geht das wohl &uuml;ber die PowerShell:</p>
<ul>
<li>Import-Module ServerManager</li>
<li>Add-WindowsFeature NET-Framework,RSAT-ADDS,ADLDS &ndash;Restart</li>
</ul>
<p>Nach dem Neustart muss noch der Starttyp eines Dienstes ge&auml;ndert werden, auch wieder in der PowerShell:</p>
<ul>
<li>Set-Service NetTcpPortSharing -StartupType Automatic</li>
</ul>
<p>Der Server ist jetzt soweit vorbereitet, man muss (wenn nicht schon passiert) noch den DNS Suffix der internen Domain (z.B: domain.local) eintragen.</p>
<p>Da der Server in der DMZ stehen soll, muss auf der Firewall folgendes konfiguriert werden:</p>
<ul>
<li>DNS: Port 53 (tcp/udp) Richtung interne DNS Server</li>
<li>SMTP:&nbsp;Port 25 (tcp)&nbsp;Richtung interner Hub Transport Server</li>
<li>EdgeSync:&nbsp;Port 50636 (tcp)&nbsp;Richtung interner Hub Transport Server (Replikationspartner)</li>
</ul>
<p>Jetzt kann das Exchange 2010 Setup ausgef&uuml;hrt werden, bei dem die &ldquo;Custom Installation&rdquo; gew&auml;hlt wird und dort nur die Edge Transport Rolle und die Management Tools installiert werden. Die Installation ist schnell abgeschlossen, was jetzt noch ben&ouml;tigt wird ist die Synchronisation zwischen Edge Transport und internem Exchange (HUB) Server. Wichtig: Auf dem Edge Transport Server ist keine Konfiguration (Accepted Domains usw.) n&ouml;tig, diese Einstellungen werden mit der Edge Synchronisierung &uuml;bernommen.</p>
<p>Auf dem Edge Transport Server ein neues Subscription File erstellt. Es wird einfach New-EdgeSubscription -FileName "C:\filename.xml" in der EMS eingegeben. Die eben erstellte Datei wird auf den Hub Transport Server &uuml;bertragen, dort wird&nbsp;mit dem selben cmdlet die EdgeSync erstellt. New-EdgeSubscription -FileName "C:\EdgeSubscriptionInfo.xml" -Site "Name-der-AD-Site". Nat&uuml;rlich kann man die EdgeSync auch in der EMC erstellen, dazu in der Organization Configuration die Hub Transport Rolle ausw&auml;hlen, dort auf den Edge Subscription Tab wechseln und New Edge Subscription w&auml;hlen. Jetzt muss noch der Active Directory Standort gew&auml;hlt werden und das xml File angegben werden. Auch hier k&ouml;nnen die Connectoren auf Wunsch automatisch erstellt werden.</p>
<p>Wichtig: Der interne Hub Transport Server muss den Edge Transport Server per DNS Name aufl&ouml;sen k&ouml;nnen!</p>
<p>Durch die EdgeSync werden die ben&ouml;tigten Connectoren erstellt und die relevanten Einstellungen &uuml;bernommen. So wird z.B. die Konfiguration des Default Recipient Connector sowie die Accepted Domains vom internen Server &uuml;bernommen.</p>
<p>Weiterf&uuml;hrend kann ich das <a href="http://technet.microsoft.com/en-us/exchange/2010/default.aspx">Exchange 2010 TechCenter</a> empfehlen.<br />Sehr lesenswert ist auch der Exchange Team Blog, zu finden in der Blogroll.</p>
<p>viele Gr&uuml;&szlig;e<br />tt</p>
