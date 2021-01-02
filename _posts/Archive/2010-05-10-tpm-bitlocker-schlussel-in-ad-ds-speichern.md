---
layout: post
title: "TPM / BitLocker Schlüssel in AD DS speichern"
date: 2010-05-10 22:24:00 +0200
comments: true
category: Archive
tags: ["Client", "de", "Server", "Server-2008", "Server-2008-R2"]
redirect_from: ["/post/TPM-BitLocker-Schlussel-in-AD-DS-speichern", "/post/tpm-bitlocker-schlussel-in-ad-ds-speichern"]
author: daniel nitz
language: de
---
<!-- more -->
<p>Wenn BitLocker im Unternehmen aktiviert wird, empfiehlt es sich die Wiederherstellungsinformationen in Active Directory zu sichern. Diese Anleitung richtet sich an Windows Server 2008 / 2008 R2 und Windows 7 als Client-Betriebssystem. Die Anleitung beschreibt, welche Schritte erforderlich sind um TPM- und BitLocker Schl&uuml;ssel in AD DS zu speichern, als <strong>Beispiel </strong>wird<strong> jenes Volume verschl&uuml;sselt, welches das Betriebssystem enth&auml;lt</strong>. <br /> <br />Wir unterscheiden hier zwischen <strong>2 diverse Schl&uuml;ssel</strong>:</p>
<p><strong>TPM</strong>: Hierbei wird der Besitzerschl&uuml;ssel des TPM Bausteins in AD DS gespeichert <br /><strong>BitLocker</strong>: Hierbei handelt es sich um den Wiederherstellungsschl&uuml;ssel f&uuml;r die betreffende Partition</p>
<p><strong>Schritt 1: AD DS zum speichern von TPM Besitzerschl&uuml;ssel vorbereiten</strong></p>
<p>Als erstes muss AD DS f&uuml;r das speichern des TPM Besitzerschl&uuml;ssels konfiguriert werden. Sofern Server 2003 als DC verwendet wird, muss vorher noch ein <a href="http://technet.microsoft.com/en-us/library/dd875529(WS.10).aspx" target="_blank">Schema-Update</a> durchgef&uuml;hrt werden. F&uuml;r die Betriebssysteme Server 2008 und Server 2008 R2 ist dies nicht notwendig, da diese die Erweiterung bereits mitbringen.</p>
<p>Damit der Client den TPM Besitzerschl&uuml;ssel in AD DS speichern kann, muss das Script <a href="http://gallery.technet.microsoft.com/ScriptCenter/en-us/b4dee016-053e-4aa3-a278-3cebf70d1191" target="_blank">Add-TPMSelfWriteACE.vbs</a> auf dem DC ausgef&uuml;hrt werden. Dieses Script setzt die Berechtigungen des Attributs <strong>msTPM-OwnerInformation</strong> so, dass der Client seinen TPM Schl&uuml;ssel einf&uuml;gen kann.</p>
<p><strong>ACHTUNG</strong>: Sollte man nicht das Server-Betriebssystem in englischer Sprachversion verwenden, so muss das Script noch angepasst werden: Anstatt die Berechtigung <strong>&ldquo;SELF&rdquo;</strong> zu setzen, muss diese z.B. f&uuml;r Deutsch in <strong>&ldquo;SELBST&rdquo;</strong> ersetzt werden. Sonst l&auml;uft das Script nicht erfolgreich durch.</p>
<p><a href="/assets/archive/image_113.png" target="_blank"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_113.png" alt="image" width="244" height="161" border="0" /></a></p>
<p><strong>Schritt 2: Setzen der GPO&rsquo;s</strong></p>
<p>Da nun Active Directory zum speichern von TPM Schl&uuml;sseln vorbereitet ist, setzten wir die Gruppenrichtlinien und weisen den Client an, die Wiederherstellungsschl&uuml;ssel in Active Directory zu speichern.</p>
<p><strong>BitLocker</strong></p>
<p>Computerkonfiguration / Administrative Vorlagen / Windows-Komponenten / BitLocker Laufwerksverschl&uuml;sselung / Betriebssystemlaufwerke</p>
<p><span style="font-size: small;"><strong>&rdquo;Festlegen, wie BitLocker-gesch&uuml;tzte Betriebssystemlaufwerke wiederhergestellt werden k&ouml;nnen&rdquo;</strong></span></p>
<p>Anhand dieser Richtlinie wei&szlig;en wir den Client an die Wiederherstellungsinformationen in der Active Directory zu speichern. BitLocker kann erst aktiviert werden, sobald die Widerherstellungsinformationen in Active Directory hinterlegt sind.</p>
<p><a href="/assets/archive/image_114.png" target="_blank"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_114.png" alt="image" width="240" height="244" border="0" /></a></p>
<p><strong>TPM</strong></p>
<p>Computerkonfiguration / Administrative Vorlagen / System / Trusted Platform Module-Dienste</p>
<p><strong>&ldquo;TPM-Sicherung in Active-Directory-Dom&auml;nendienste aktivieren&rdquo;</strong></p>
<p>Anhand dieser Richtlinie wird der Client angewiesen den TPM Besitzerschl&uuml;ssel in der Active Directory zu speichern.</p>
<p><a href="/assets/archive/image_115.png" target="_blank"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_115.png" alt="image" width="244" height="226" border="0" /></a></p>
<p><strong>Schritt 3: TPM am Client initialisieren</strong></p>
<p>Wenn der TPM am Client initialisiert wird, wird ein Besitzerschl&uuml;ssel generiert.</p>
<p><a href="/assets/archive/image_116.png" target="_blank"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_116.png" alt="image" width="244" height="190" border="0" /></a></p>
<p>In Active Directory werden die Informationen im Attribut <strong>msTPM-OwnerInformation</strong> mitgeschrieben.</p>
<p><a href="/assets/archive/image_117.png" target="_blank"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_117.png" alt="image" width="213" height="244" border="0" /></a></p>
<p><strong>Schritt 4: Verwaltungsprogramm f&uuml;r BitLocker-Schl&uuml;ssel installieren</strong></p>
<p>Server 2008 liefert eine zus&auml;tzliche Registerkarte f&uuml;r Active Directory um BitLocker-Schl&uuml;ssel anzuzeigen. Vorher muss jedoch das Feature <strong>Verwaltungsdienstprogramm f&uuml;r BitLocker </strong>aktiviert werden.</p>
<p><a href="/assets/archive/image_118.png" target="_blank"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_118.png" alt="image" width="244" height="204" border="0" /></a></p>
<p>Nach der Aktivierung findet man eine neue Registerkarte in den Computerkonten.</p>
<p><a href="/assets/archive/image_119.png" target="_blank"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_119.png" alt="image" width="244" height="50" border="0" /></a>&nbsp;</p>
<p><strong>Schritt 5: BitLocker aktivieren und Wiederherstellungsschl&uuml;ssel einsehen</strong></p>
<p>Nun k&ouml;nnen wir am Client BitLocker f&uuml;r das Volume aktivieren, welches das Betriebssystem enth&auml;lt.</p>
<p><a href="/assets/archive/image_120.png" target="_blank"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_120.png" alt="image" width="244" height="181" border="0" /></a></p>
<p>Nach der Aktivierung kann der Wiederherstellungsschl&uuml;ssel im jeweiligen Computerkonto in der Registerkarte <strong>&ldquo;BitLocker-Wiederherstellung&rdquo; </strong>eingesehen werden.</p>
<p><a href="/assets/archive/image_121.png" target="_blank"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_121.png" alt="image" width="244" height="240" border="0" /></a></p>
<p>Gr&uuml;&szlig;e <br />dn</p>
{% include imported_disclaimer.html %}
