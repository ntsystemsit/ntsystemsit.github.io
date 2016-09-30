---
layout: post
title: "Domain Controller umbenennen"
date: 2009-12-24 17:25:00 +0100
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["Server 2008 R2", "Server 2008", "Server"]
alias: ["/post/Domain-Controller-umbenennen.aspx", "/post/domain-controller-umbenennen.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Es kann vorkommen dass man bei der Wahl der Servernamen mal danebengreift oder einfach im Nachhinein einen anderen Namen braucht. Wenn z.B. eine Zertifizierungsstelle wiederhergestellt werden soll dann ist der Computername wichtig.</p>  <p>Um also einen Domain Controller (2008, 2008R2) umzubenennen geht man am besten so vor (Achtung: Ein Neustart ist nötig).</p>  <p>Zuerst wird ein zusätzlicher DNS-Hostname hinzugefügt.</p>  <blockquote>   <p>netdom computername altername.domain.local /add:neuername.domain.local</p> </blockquote>  <p>Wichtig ist nun die Replikation mit allen anderen DCs abzuwarten oder manuell anzustoßen (repadmin, AD Sites and Services). Alle DCs müssen die Änderung im Computerkonto mitbekommen, in allen DNS Servern muss der zusätzliche Namen als Ressource Record aufscheinen. </p>  <p>Erst nachdem die Replikation abgeschlossen ist darf man zum nächsten Schritt gehen. Man kann das Ergebnis der Replikation sehen indem man mit ADSI Edit die Eigenschaften des entsprechenden Computerkontos anzeigt, dort muss das Attribut &quot;msDS-AdditionalDnsHostName” den Wert neuername.domain.local haben. Alternativ zu ADSI Edit kann man auch das SnapIn Active Directory Users and Computers verwenden, allerdings muss man dazu unter “View” die “Advanced Features” aktivieren damit man die Attribute sieht.</p>  <p>Ist die Replikatoin erfolgt wird der neue Computername als Primärer gesetzt.</p>  <blockquote>   <p>netdom computername altername.domain.local /makeprimary:neuername.domain.local</p> </blockquote>  <p>Nach diesem Schritt ist wiederum die Replikation abzuwarten/anzustoßen. Es ändert sich der Name des Computerobjektes und das Attribut “msDS-AdditionalDnsHostName” bekommt den Wert “altername.domain.local”.</p>  <p>Jetzt muss der Server neu gestartet werden.</p>  <p>Zum Schluss wird der alte Namen noch entfernt.</p>  <blockquote>   <p>netdom computername neuername.domain.local /remove:altername.domain.local</p> </blockquote>  <p>Man kommt nicht um den Neustart herum, so funktioniert aber alles reibungslos.</p>  <p>Grüße.   <br />tt</p>