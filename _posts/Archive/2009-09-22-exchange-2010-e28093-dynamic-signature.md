---
layout: post
title: "Exchange 2010 – Dynamic Signature"
date: 2009-09-22 19:30:00 +0200
comments: true
category: Archive
tags: ["Server"]
redirect_from: ["/post/Exchange-2010-e28093-Dynamic-Signature", "/post/exchange-2010-e28093-dynamic-signature"]
author: thomas torggler
language: de
---
<!-- more -->
<p>Ein leidiges Thema mit den bisherigen Exchange und Outlook Versionen war die zentrale Verwaltung von Signaturen. Die meisten Administratoren verwendeten Skripts oder dritthersteller Tools um das Problem einigerma&szlig;en in den Griff zu bekommen.</p>
<p>Mit Exchange 2010 stellt Microsoft (endlich) eine M&ouml;glichkeit vor um die Signaturen zentral zu verwalten und dynamisch zu erstellen. Verwendet wird dazu der seit Exchange 2007 bekannte Disclaimer, dieser wurde erweitert und kennt jetzt HTML Tags und Attribute aus dem Active Directory.</p>
<p>Konfiguriert wird der Disclaimer in der Hub Transport Rolle auf Organisationsebene. Man erstellt eine neue Transport Rule indem man einfach mit rechts auf den Knoten Hub Transport klickt und &ldquo;New Transport Rule&rdquo; ausw&auml;hlt.</p>
<p><a href="/assets/archive/newtr.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="New Transport Rule" src="/assets/archive/newtr_thumb.png" border="0" alt="New Transport Rule" width="244" height="213" /></a></p>
<p>Nachdem man Namen und Beschreibung vergeben hat, kann per Filter festgelegt werden f&uuml;r welche Mails diese Regel gelten soll. Mehr Details zu den Filterm&ouml;glichkeiten: <a href="http://technet.microsoft.com/en-us/library/dd638183(EXCHG.140).aspx" target="_blank">Exchange 2010 Transport Rule Predicates</a>.&nbsp;</p>
<p><a href="/assets/archive/trcon.jpg"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="Transpor Rule Conditions" src="/assets/archive/trcon_thumb.jpg" border="0" alt="Transpor Rule Conditions" width="244" height="213" /></a></p>
<p>Als Action w&auml;hlt man &ldquo;Append disclaimer text and fallback to action if unable to apply&rdquo;. Dort kann ein beliebiger Text eingegeben werden den man mit HTML Tags formatieren und mit Platzhaltern wie %%DisplayName%% personalisieren kann. Neben dem Text kann man auch die Fallback Action festlegen, d.h. was Exchange mit der Nachricht machen soll wenn der Disclaimer nicht angewendet werden kann. Es gibt drei M&ouml;glichkeiten:</p>
<ul>
<li>wrap: die originale Nachricht wird in einen Anhang gepackt, und der Disclaimer wird in die neue Nachricht eingef&uuml;gt.</li>
<li>reject: die Nachricht wird nicht &uuml;bermittelt, der Sender erh&auml;lt ein NDR in dem steht warum die Nachricht nicht &uuml;bermittelt werden konnte.</li>
<li>ignore: die Nachricht wird unver&auml;ndert &uuml;bermittelt, es wird kein Disclaimer angeh&auml;ngt.</li>
</ul>
<p><a href="/assets/archive/tracti.jpg"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="Transport Rule Actions" src="/assets/archive/tracti_thumb.jpg" border="0" alt="Transport Rule Actions" width="244" height="213" /></a></p>
<p>Einige Details noch im Technet: <a href="http://technet.microsoft.com/en-us/library/bb124352(EXCHG.140).aspx" target="_blank">Understanding Disclaimers</a></p>
<p>Zum Schluss kann man noch Au&szlig;nahmen definieren, f&uuml;r welche die Regel nicht zutreffen soll:</p>
<p><a href="/assets/archive/trex.jpg"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="Transport Rule Exceptions" src="/assets/archive/trex_thumb.jpg" border="0" alt="Transport Rule Exceptions" width="244" height="213" /></a></p>
<p>Jetzt fehlt noch der klick auf New und die Regel wird erstellt. Es wird ab jetzt also jedem Mail das den Konditionen entspricht der Disclaimer Text angef&uuml;gt, egal ob es von OWA oder Outlook kommt.</p>
<p>Eine endg&uuml;ltige L&ouml;sung stellt diese Funktion nicht dar, denn ein Nachteil des Disclaimers ist dass er am Ende der Nachricht eingef&uuml;gt wird. Antwortet man also auf ein Email so steht die Signatur (Disclaimer) ganz unten, unter dem zitiertem Mail. Alles in allem ist das meiner Meinung nach ein Schritt in die richtige Richtung, allerdings fehlt noch einiges bis zum Ziel.</p>
{% include imported_disclaimer.html %}
