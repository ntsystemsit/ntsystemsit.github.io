---
layout: post
title: "Cisco AAA–NPS RADIUS Server"
date: 2011-07-03 10:49:46 +0200
comments: true
category: Archive
tags: ["Server", "Network"]
redirect_from: ["/post/Cisco-AAA-NPS-RADIUS-Server", "/post/cisco-aaa-nps-radius-server"]
author: thomas torggler
---
<!-- more -->
<p>In größeren Netzwerken kann es aufgrund der Firmenrichtlinie oder der Gesetzgebung notwendig sein sich an den Netzwerkgeräten mit persönlichen User Accounts anmelden zu müssen. Man kann dafür natürlich für jeden Netzwerkadministrator ein persönliches Account auf allen Geräten anlegen, oder man authentifiziert gegen einen RADIUS Server. Dieser RADIUS Server kann z.B. ein Network Policy Server sein, der seit Windows Server 2008 den IAS abgelöst hat. Der Vorteil so einer Implementierung liegt auf der Hand, die Authentifizierung wird über das Zentrale Active Directory gesteuert und Benutzerkonten müssen nur an einem Ort gepflegt werden.</p>  <h1>NPS</h1>  <p>Die NPS Serverrolle muss auf einem Server hinzugefügt werden, ob das ein dedizierter Server ist oder ob man die Rolle auf einem andern mitlaufen lässt hängt von der Größe der Umgebung ab. Die Rolle kann wie jede andere über den Servermanager oder das PowerShell cmdlet Add-WindosFeature hinzugefügt werden. Damit das cmdlet verfügbar ist muss das Modul ServerManager geladen werden.</p>  <p><a href="/assets/archive/image_316.png"><img style="background-image: none; border-right-width: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_314.png" width="244" height="181" /></a><a href="/assets/archive/image_317.png"><img style="background-image: none; border-right-width: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_315.png" width="244" height="181" /></a></p>  <p><a href="/assets/archive/image_318.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_316.png" width="244" height="71" /></a></p>  <p>Für RADIUS reicht der NPAS-Policy-Server. Wen die Rolle hinzugefügt wurde kann NPS konfiguriert werden, der erste Schritt ist es den NPS Server im Active Directory zu registrieren. Rechtsklick auf NPS (local) und “Register Server in Active Directory” wählen&quot;</p>  <p><a href="/assets/archive/image_319.png"><img style="background-image: none; border-right-width: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_317.png" width="244" height="172" /></a></p>  <p>Der zweite Schritt ist die Konfiguration des Accounting, bzw. Logging, dafür gibt es in der NPS Konsole unter dem Punkt “Accounting” drei Einstellungsmöglichkeiten.</p>  <p>Der “Configure Accounting Wizard” erleichtert einem Konfiguration:</p>  <p><a href="/assets/archive/image_320.png"><img style="background-image: none; border-right-width: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_318.png" width="240" height="244" /></a><a href="/assets/archive/image_321.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_319.png" width="240" height="244" /></a></p>  <p>Ich entscheide mich für das Logging in ein Textdokument, je nach Umgebung kann man auch einen zentralen SQL Server angeben.</p>  <p>Den Ordner für die Log Files lege ich auf eine zweite Partition. </p>  <p>Der NPS Server ist nun konfiguriert, es fehlen noch die RADIUS Clients sowie das Regelwerk das definiert wer sich anmelden darf.</p>  <h1></h1>  <h1>Radius Clients</h1>  <p>Jedes Netzwerkgerät das über NPS authentifizieren will muss dort als RADIUS Client angelegt werden, in diesem Schritt werden der Name, die IP Adresse und der Pre-Shared Key für jeden Client festgelegt. Der Pre-Shared Key wird verwendet um den RADIUS Client zu authentifizieren, der Benutzer meldet sich mit seinem Benutzernamen und Passwort an.</p>  <p>Um einen RADIUS Client anzulegen erweitert man den Ordner “RADIUS Clients and Servers” in der NPS Konsole, Rechtslick auf “RADIUS Clients” und “New” öffnet den Dialog “New RADIUS Client”.</p>  <p>Unter dem Reiter “Settings” wird der Friendly name konfiguriert, dieser ist später wichtig für die Konfiguration der Regeln. Außerdem gibt man hier die IP Adresse des Clients an, der Pre-Shared Key kann manuell eingegeben werden, ich empfehle jedoch ihn automatisch zu generieren. (Achtung: einige alte Geräte unterstützen nur Keys bis zu einer bestimmten Länge)</p>  <p><a href="/assets/archive/image_322.png"><img style="background-image: none; border-right-width: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_320.png" width="194" height="244" /></a></p>  <p>Unter Advanced könnte man noch ein bestimmtes RADIUS Feature Set auswählen, normalerweise reicht aber der Standard aus. </p>  <h1></h1>  <h1>Connection Request Policy</h1>  <p>Über die Connection Request Policy wird definiert welcher RADIUS Client wie authentifiziert wird. NPS kann auch als RADIUS Proxy arbeiten und könnte daher anfragen eines Clients selbst authentifizieren und die eines andern an einen Remote RADIUS Server weiterleiten, dieser Server muss zuerst unter “RADIUS Clients and Servers” angelegt werden.</p>  <p>Die Standardregel ist so konfiguriert dass alle anfragen Lokal, also gegenüber Active Directory, authentifiziert werden.</p>  <h1>Network Policy</h1>  <p>Die Network Policy definiert wer sich unter welchen Umständen authentifizieren darf. Da beide Standardregeln keinen Zugriff zulassen müssen wir eine neue Network Policy anlegen, Rechtsklick auf “Network Policy” und “New” öffnet den Dialog “New Network Policy”.</p>  <p><a href="/assets/archive/image_323.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_321.png" width="244" height="209" /></a></p>  <p>Auf der ersten Seite wird eine Name für die neue Richtlinie konfiguriert, der Rest bleibt Standard.</p>  <p><a href="/assets/archive/image_324.png"><img style="background-image: none; border-right-width: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_322.png" width="244" height="209" /></a></p>  <p>Auf dieser Seite werden die Konditionen definiert unter welchen die Authentifizierung erfolgreich ist. Man kann z.B. den RADIUS Client und eine bestimmt AD Gruppe hinzufügen, die beiden Kriterien sind “AND” verknüpft, müssen also beide zutreffen. Der Benutzer der sich am Client “cisco_1” anmeldet muss also Mitglied der Gruppe NetworkAdmins sein damit er sich authentifizieren darf.</p>  <p><a href="/assets/archive/image_325.png"><img style="background-image: none; border-right-width: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_323.png" width="244" height="209" /></a></p>  <p>Im nächsten Schritt wird festgelegt ob diese Regel den Zugriff erlaubt oder verweigert.</p>  <p><a href="/assets/archive/image_326.png"><img style="background-image: none; border-right-width: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_324.png" width="244" height="209" /></a></p>  <p>PAP muss als Authentifizierungsmethode hinzugefügt werden, man wird darauf hingewiesen dass diese Methode nicht sicher ist da das Passwort in Clear-Text über die Leitung geht, das muss man wohl oder übel in kauf nehmen.</p>  <p><a href="/assets/archive/image_327.png"><img style="background-image: none; border-right-width: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_325.png" width="244" height="209" /></a></p>  <p>Hier könnte man weitere verbindungsspezifische Einstellungen machen, für die Authentifizierung an Netzwerkgeräte wird das allerdings nicht benötigt.</p>  <p><a href="/assets/archive/image_328.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_326.png" width="244" height="209" /></a>&#160;<a href="/assets/archive/image_329.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="/assets/archive/image_thumb_327.png" width="244" height="213" /></a></p>  <p>Im letzten Schritt werden die Einstellungen konfiguriert die der RADIUS Server in der Antwort mitschickt, hier kann man sogenannte Attribute-Value (AV)-Pairs konfigurieren. Diese AV-Pairs sind Herstellerabhängig, bei Cisco z.B. kann man mit Attribut 6 den Service-Type definieren, gibt man “Administrative” an landet ein authentifiziert User direkt im “enable” Mode. Framed-Protcol PPP kann gelöscht werden, Service-Type ändere ich auf “Administrative”</p>  <p>&#160;</p>  <p>Somit ist der NPS Server fertig konfiguriert und bereit Anfragen von einem RADIUS Client mit der IP 10.1.1.254 und dem richtigen Pre-Shared Key zu beantworten. Nur Benutzer die Mitglied der Gruppe NetworkAdmins sind dürfen sich am RADIUS Client anmelden, ist die Authentifizierung erfolgreich sollte der Benutzer gleich im “enable” Mode sein.</p>  <p>&#160;</p>  <p>Im nächsten Artikel konfiguriere ich einen Cisco Switch für RADIUS Authentifizierung.</p>  <p>tom</p>
{% include imported_disclaimer.html %}