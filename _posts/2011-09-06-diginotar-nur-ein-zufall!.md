---
layout: post
title: "DigiNotar–nur ein Zufall!?"
date: 2011-09-06 23:25:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["de", "Client", "Server"]
redirect_from: ["/post/DigiNotar-nur-ein-Zufall!", "/post/diginotar-nur-ein-zufall!"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Vor einigen Tagen wurde bekannt das bereits Anfang Juni(!!) bei einem Hack der niederl&auml;ndischen Zertifizierungsstelle &ldquo;DigiNotar&rdquo; mehr als 500 &ldquo;gef&auml;lschte&rdquo; Zertifikate ausgestellt wurden.</p>
<p>Unter den Zertifikaten befinden sich folgende Wildcard Zertifikate:</p>
<ul>
<li>*.*.com <br />*.*.org <br />*.10million.org <br />*.android.com <br />*.aol.com <br />*.azadegi.com <br />*.balatarin.com <br />*.comodo.com <br />*.digicert.com <br />*.globalsign.com <br />*.google.com <br />*.JanamFadayeRahbar.com <br />*.logmein.com <br />*.microsoft.com <br />*.mossad.gov.il <br />*.mozilla.org <br />*.RamzShekaneBozorg.com <br />*.SahebeDonyayeDigital.com <br />*.skype.com <br />*.startssl.com <br />*.thawte.com <br />*.torproject.org <br />*.walla.co.il <br />*.windowsupdate.com</li>
</ul>
<p>Eine vollst&auml;ndige Liste der Zertifikate gibt es <a href="https://blog.torproject.org/blog/diginotar-damage-disclosure" target="_blank">hier.</a></p>
<h4>&nbsp;</h4>
<p>Der Angriff wurde entdeckt weil in Googles Chrome Browser die g&uuml;ltigen Zertifikate fix hinterlegt sind, der Browser also beim Anzeigen vermeintlich authentischer Google Inhalte gemeckert hat. Wenn die &ldquo;T&auml;ter&rdquo; den &ldquo;User Agent String&rdquo; von Chrome gefiltert h&auml;tten, wer wei&szlig; wann (und ob) dieser Hack &ouml;ffentlich geworden w&auml;re&hellip;</p>
<p>Vermutungen wie viele derartige Angriffe bisher unerkannt geblieben sind und wer dahinter steckt &uuml;berlasse ich anderen. Ich hoffe allerdings dass die Debatte um Sicherheit und das &ldquo;Web of Trust&rdquo; weitergef&uuml;hrt wird und durch solche krassen Vorf&auml;lle mehr Aufmerksamkeit bekommt.</p>
<h4>&nbsp;</h4>
<h4>&nbsp;</h4>
<h1>Betroffene CAs</h1>
<p>Folgende Zertifizierungsstellen m&uuml;ssen aus allen Browsern, Applikationen und Betriebssystemen verschwinden, sie gelten als NICHT mehr Vertrauensw&uuml;rdig:</p>
<table style="width: 601px;" border="0" cellspacing="0" cellpadding="2">
<tbody>
<tr>
<td valign="top" width="201"><strong>Certificate</strong></td>
<td valign="top" width="199"><strong>Issued by</strong></td>
<td valign="top" width="199"><strong>Thumbprint</strong></td>
</tr>
<tr>
<td valign="top" width="201">DigiNotar Root CA</td>
<td valign="top" width="199">DigiNotar Root CA</td>
<td valign="top" width="199">c0 60 ed 44 cb d8 81 bd 0e f8 6c 0b a2 87 dd cf 81 67 47 8c</td>
</tr>
<tr>
<td valign="top" width="201">Root CA G2</td>
<td valign="top" width="199">DigiNotar Root CA G2</td>
<td valign="top" width="199">43 d9 bc b5 68 e0 39 d0 73 a7 4a 71 d8 51 1f 74 76 08 9c c3</td>
</tr>
<tr>
<td valign="top" width="201">PKIoverheid CA Overheid</td>
<td valign="top" width="199">Staat der Nederlanden Overheid CA</td>
<td valign="top" width="199">b5 33 34 5d 06 f6 45 16 40 3c 00 da 03 18 7d 3b fe f5 91 56</td>
</tr>
<tr>
<td valign="top" width="201">PKIoverheid CA Organisatie - G2</td>
<td valign="top" width="199">Staat der Nederlanden Organisatie CA - G2</td>
<td valign="top" width="199">5d e8 3e e8 2a c5 09 0a ea 9d 6a c4 e7 a6 e2 13 f9 46 e1 79</td>
</tr>
<tr>
<td valign="top" width="201">PKIoverheid CA Overheid en Bedrijven</td>
<td valign="top" width="199">Staat der Nederlanden Overheid CA</td>
<td valign="top" width="199">40 aa 38 73 1b d1 89 f9 cd b5 b9 dc 35 e2 13 6f 38 77 7a f4</td>
</tr>
</tbody>
</table>
<h1>Windows Update</h1>
<p>Microsoft hat inzwischen reagiert und ein Windows Update zur Verf&uuml;gung gestellt, genauere Informationen findet man im <a href="http://www.microsoft.com/technet/security/advisory/2607712.mspx" target="_blank">Microsoft Security Advisory (2607712)</a>.</p>
<p>Wie an vielen Stellen zu lesen ist soll es mit diesen Zertifikaten m&ouml;glich sein gef&auml;lschte Windows Updates zu verteilen, das ist laut Microsoft NICHT der Fall. Der Windows Update Client installiert ausschlie&szlig;lich Pakete die mit dem &ldquo;Microsoft Root Certificate&rdquo; signiert sind.</p>
<h4>&nbsp;</h4>
<h1>Firefox</h1>
<p>F&uuml;r Mozilla Firefox wir ein Update in k&uuml;rze erwartet, hier empfiehlt es sich die genannten CAs manuell zu entfernen!</p>
<p>Unter Einstellungen, Erweitert, Verschl&uuml;sselung klickt man auf &ldquo;Zertifikate anzeigen&rdquo;. Jetzt bekommt man eine Liste der Zertifizierungsstellen und kann das Vertrauen entziehen.</p>
<p>Weitere Infos im <a href="http://blog.mozilla.com/security/2011/08/29/fraudulent-google-com-certificate/" target="_blank">Mozilla Security Blog.</a></p>
<p>&nbsp;<a href="/assets/image_340.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_338.png" alt="image" width="244" height="227" border="0" /></a><a href="/assets/image_341.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_339.png" alt="image" width="244" height="130" border="0" /></a></p>
<h4>&nbsp;</h4>
<h1>Apple</h1>
<p>Apple hat wohl zur Zeit andere Priorit&auml;ten, MAC Benutzer sollten auf jeden Fall manuell die oben genannten Zertifikate entfernen. Chester Wisniewski von <a href="http://nakedsecurity.sophos.com" target="_blank">Sophos</a> beschreibt das Ganze so:</p>
<blockquote>
<p>What about Apple users? Well, apparently they are too busy playing Angry Birds and making pictures in Photoshop to worry about pesky certificate issues.</p>
<p>My advice if you run a Mac? Use BootCamp and Windows 7 until Apple decides to provide a patch. Or I guess you could use Firefox (not Chome, it also uses Apple's KeyChain)...</p>
</blockquote>
<p>Ein erster Bericht der Security Consultants Fox-IT zum Thema ist verf&uuml;gbar:</p>
<p><a title="http://www.rijksoverheid.nl/ministeries/bzk/documenten-en-publicaties/rapporten/2011/09/05/diginotar-public-report-version-1.html" href="http://www.rijksoverheid.nl/ministeries/bzk/documenten-en-publicaties/rapporten/2011/09/05/diginotar-public-report-version-1.html">http://www.rijksoverheid.nl/ministeries/bzk/documenten-en-publicaties/rapporten/2011/09/05/diginotar-public-report-version-1.html</a></p>
<p>stay secure <img class="wlEmoticon wlEmoticon-winkingsmile" src="/assets/wlEmoticon-winkingsmile.png" alt="Zwinkerndes Smiley" /> <br />tom</p>
