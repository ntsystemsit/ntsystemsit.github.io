---
layout: post
title: "Windows Server 8 CP–DHCP Server Failover"
date: 2012-03-09 22:56:00 +0100
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["Server", "Server 2012"]
alias: ["/post/Windows-Server-8-CP-DHCP-Server-Failover.aspx", "/post/windows-server-8-cp-dhcp-server-failover.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>In Windows Server Versionen bis 2008R2 gab es f&uuml;r eine ausfallsichere DHCP Umgebung zwei M&ouml;glichkeiten, ein sogenanntes Split Scope Deployment oder ein Windows Failover Cluster. Beide Varianten haben Nachteile, im Split Scope Deployment teilen sich mehrere DHCP Server einen Bereich. F&auml;llt ein Server aus, gibt es auf den verbleibenden Servern unter Umst&auml;nden nicht genug freie Adressen, auch Leases bzw. Reservierungen sind nicht konsistent. Ein Failover Cluster hat einen gewissen administrativen Aufwand (Shared Storage) und erfordert Windows Server Enterprise Lizenzen f&uuml;r alle Knoten im Cluster.</p>
<h1>Windows Server 8 DHCP Server Failover</h1>
<p>DHCP Server Failover bietet die M&ouml;glichkeit zwei DHCP Server f&uuml;r einen Bereich zu konfigurieren. Es muss sich dabei um Windows 8 DHCP Server handeln, andere Hersteller oder &auml;ltere Server Betriebssysteme werden nicht unterst&uuml;tzt. Im Load Sharing Modus bedienen beide Server Client Anfragen und replizieren die Lease Informationen. F&auml;llt ein Server aus kann der zweite Server bereits bestehende Leases verl&auml;ngern. Au&szlig;erdem verf&uuml;gen beide Server &uuml;ber den gesamten Bereich, Reservierungen und Optionen werden ebenfalls zwischen den Servern repliziert und sind so konsistent.</p>
<h1>Load Sharing Mode</h1>
<p>Im Standard Modus wird ein Failover Relationship im Load Sharing betrieben, das bedeuted Clientanfragen werden gleichm&auml;&szlig;ig auf die beiden DHCP Server verteilt. Die Verteilung der Anfragen kann &uuml;ber den Wert load-balancing ratio konfiguriert werden. Der Load Sharing Mode eignet sich f&uuml;r Server im selben Standort.</p>
<h1>Hot Standby Mode</h1>
<p>Alternativ k&ouml;nnen die DHCP Server im Hot Standby Mode betrieben werden, dabei ist ein Server &ldquo;aktiv&rdquo; und bedient Clientanfragen. Der zweite Server &uuml;bernimmt diese Aufgabe sobald er erste nicht mehr verf&uuml;gbar ist. Die Entscheidung ob ein Server &ldquo;aktiv&rdquo; oder &ldquo;standby&rdquo; ist, kann f&uuml;r jeden DHCP Bereich getroffen werden, ein Server kann also standby f&uuml;r einen Bereich sein und gleichzeitig aktiv f&uuml;r einen andern. Der Hot Standby Mode eignet sich f&uuml;r Au&szlig;enstellen oder kleinere Standorte an denen kein zweiter Server vor Ort ist und ein Server im entfernten Rechenzentrum nur im Problemfall &uuml;bernehmen soll.</p>
<h1>DHCP Rolle installieren</h1>
<p>Die DHCP Server Rolle wird &uuml;ber den Server Manager hinzugef&uuml;gt, dazu verwendet man den Add Roles and Features Wizard.</p>
<p><a href="/assets/image_399.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_397.png" border="0" alt="image" width="244" height="180" /></a></p>
<p>Die entsprechende Rolle ausw&auml;hlen, und entscheiden ob der Server automatisch neustarten soll, das ist f&uuml;r DHCP nicht notwendig.</p>
<p><a href="/assets/image_400.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_398.png" border="0" alt="image" width="244" height="180" /></a></p>
<p>Nach der Installation wei&szlig;t der Post-Install configuration Wizard darauf hin, dass man den Server noch im Active Directory autorisieren muss.</p>
<p><a href="/assets/image_401.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_399.png" border="0" alt="image" width="244" height="180" /></a></p>
<p>Nat&uuml;rlich kann man die Rolle auch mit der PowerShell hinzuf&uuml;gen, verwendet wird dazu das Modul ServerManager (PowerShell v3 importiert Module automatisch, also kein Import-Module):</p>
<p><a href="/assets/image_402.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_400.png" border="0" alt="image" width="244" height="106" /></a></p>
<p>Auch nach dieser Insatllation wei&szlig;t der ServerManager auf notwendige Post-Install Schritte hin</p>
<p><a href="/assets/image_403.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_401.png" border="0" alt="image" width="226" height="244" /></a></p>
<p>Es sind jetzt zwei DHCP Server verf&uuml;gbar, nun geht es an die Failover Konfiguration.</p>
<h1>DHCP Server Failover Konfiguration</h1>
<p>&Uuml;ber einen Rechtsklick auf einen DHCP Server im Server Manager &ouml;ffnet man die bekannte dhcpmgmt Konsole (doch nicht &uuml;berall Metro).</p>
<p>Ein neuer Bereich wird, wie immer, mit einem Rechtsklick auf den IPv4 Knoten erstellt. Dabei hat sich mit WS8 nichts ge&auml;ndert, man w&auml;hlt einen Namen, das Subnet bzw. den IP Range sowie Optionen wie Gateway und DNS Server.</p>
<p><a href="/assets/image_404.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_402.png" border="0" alt="image" width="244" height="173" /></a></p>
<p>Jetzt kann man entscheiden ob man DHCP Failover f&uuml;r den gesamten Server oder f&uuml;r jeden einzelnen Bereich konfigurieren will. Je nach dem f&uuml;r welche Konfiguration man sich entscheidet, beginnt man mit der Konfiguration auf dem IPv4 Knoten oder auf dem jeweiligen Bereich.</p>
<p><a href="/assets/image_405.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_403.png" border="0" alt="image" width="244" height="173" /></a></p>
<p>Mit &ldquo;Configure Failover&rdquo; wird die Konfiguration gestartet, als ersten Schritt muss man den Partner-Server angeben.</p>
<p><a href="/assets/image_406.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_404.png" border="0" alt="image" width="224" height="244" /></a></p>
<p>Nach der Auswahl des Partner-Servers werden einige Voraussetzungen f&uuml;r eine erfolgreiche Failover Beziehung &uuml;berpr&uuml;ft, unter anderem wird &uuml;berpr&uuml;ft ob der Server erreichbar ist, ob mindestens Windows Server 8 Beta installiert ist, ob der angemeldete Benutzer &uuml;ber ausreichende Rechte verf&uuml;gt (Mitglied der Gruppe DHCP Administrators) und ob auf dem Partner &uuml;berhaupt ein DHCP Server l&auml;uft. Sind die Vorrausetzungen ok, wird ein Dialog f&uuml;r die Konfiguration des Failover Relationships angezeigt.</p>
<p><a href="/assets/image_407.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_405.png" border="0" alt="image" width="224" height="244" /></a></p>
<p>In diesem Dialog wird der Failover Mode konfiguriert. Au&szlig;erdem kann die Load Sharing ratio hier festgelegt werden. Maximum Client Lead Time gibt die tempor&auml;re Lease Zeit f&uuml;r neue Clients an, deren Anfragen der Failover Server bedient. Auch die Zeit nach der ein Server im Partner-Down-State den gesamten Bereich &uuml;bernimmt wird durch die MCLT gesetzt.</p>
<p><a href="/assets/clip_image001_3.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="clip_image001" src="/assets/clip_image001_thumb_3.png" border="0" alt="clip_image001" width="224" height="244" /></a></p>
<p>Wird der Hot Standby Mode gew&auml;hlt, kann anstelle der Load Sharing ratio die Menge an Adressen Konfiguriert werden, welche f&uuml;r den Standby Server reserviert werden. Sollten keine Adressen reserviert werden, kann der Standby Server erst dann neue Clients bedienen, wenn er den gesamten Bereich &uuml;bernommen hat, das dauert standardm&auml;&szlig;ig eine Stunde (MCTLT).</p>
<p>Das Auto State Switchover interval gibt an nach welcher Zeit ein Server vom communication interrupted in den partner down state wechselt. Standardm&auml;&szlig;ig passiert das nach 10 Minuten.</p>
<p><a href="/assets/image_408.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_406.png" border="0" alt="image" width="224" height="244" /></a></p>
<p>Hat man die Optionen konfiguriert wird die Partnerschaft konfiguriert. F&uuml;r die Failover Konfiguration wird TCP Port 647 verwendet.</p>
<p>In den Eigenschaften des Bereiches gibt es den neuen Reiter Failover, dort kann man den Status der Failover Partnerschaft und die konfigurierten Optionen sehen.</p>
<p><a href="/assets/image_409.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_407.png" border="0" alt="image" width="218" height="244" /></a></p>
<h1>Konfiguration &auml;ndern oder l&ouml;schen</h1>
<p>Um die Konfiguration zu &auml;ndern, &ouml;ffnet man die Eigenschaften des IPv4 Konten und w&auml;hlt dort unter Failover die entsprechende Partnerschaft aus.</p>
<p><a href="/assets/image_410.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_408.png" border="0" alt="image" width="209" height="244" /></a></p>
<p>Mit Edit kann man die ausgew&auml;hlte Partnerschaft &auml;ndern, mit delete wird diese gel&ouml;scht.</p>
<p><a href="/assets/image_411.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_409.png" border="0" alt="image" width="199" height="244" /></a></p>
<h1>Verify Failover</h1>
<p>Mit einem Netzwerk Analyse Tool sieht man die DHCP Kommunikation, hier ist zu beobachten dass der Client zwei DHCP Offers bekommt. Eine von jedem Server in der Failover Konfiguration.</p>
<p><a href="/assets/image_412.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_410.png" border="0" alt="image" width="244" height="26" /></a></p>
<p>Beide DHCP Offers sind bis auf die angebotene Lease Time identisch, der &ldquo;aktive&rdquo; Server bietet eine Adresse mit der im Bereich konfigurierten Lease Time an (8 Tage).</p>
<p><a href="/assets/image_413.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_411.png" border="0" alt="image" width="244" height="77" /></a></p>
<p>W&auml;hrend die Lease Time im Offer des &ldquo;standby&rdquo; Servers der Maximum Client Lead Time entspricht.</p>
<p><a href="/assets/image_414.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_412.png" border="0" alt="image" width="244" height="69" /></a></p>
<p>&nbsp;</p>
<p>so long, tom</p>
