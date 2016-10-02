---
layout: post
title: "ActiveDirectory DisplayName mit Umlauten und AudioCodes ISDN"
date: 2014-05-04 12:39:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["de", "Lync"]
redirect_from: ["/post/ActiveDirectory-DisplayName-mit-Umlauten-und-AudioCodes-ISDN", "/post/activedirectory-displayname-mit-umlauten-und-audiocodes-isdn"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Vor einigen Tagen bin ich in einem Lync Projekt auf das Problem gesto&szlig;en, dass bestimmte Benutzer keine Anrufe in das PSTN (ISDN E1) t&auml;tigen konnten. Der Kunde setzt ein AudioCodes Gateway ein, die Syslogs des Gatways sind zur Fehlersuche sehr gut geeignet. Das Gateway bekommt die SIP Signalisierung von Lync sowie die Q.931 Signalisierung aus dem ISDN mit.</p>
<p>Nach kurzer Suche hat sich herausgestellt, dass Benutzer welche keine Anrufe t&auml;tigen konnten, folgenden Fehler verursachten:</p>
<blockquote>
<p>&lt;132&gt;[S=831454] Error Indication: Last Command (Primitive) was not performed due to cause 100&nbsp; [Trunk:0 Bchannel:1 ConnID:2] [Code:0x23127] <br />&lt;133&gt;[S=831455] (&nbsp;&nbsp; lgr_psbrdex)(833974&nbsp;&nbsp;&nbsp; )&nbsp;&nbsp; <strong>recv &lt;-- UnHandled event:</strong> EV_ISDN_ERROR_INDICATION (317) <br />&lt;133&gt;[S=831456] [SID:766997237] (&nbsp;&nbsp; lgr_psbrdex)(833975&nbsp;&nbsp;&nbsp; )&nbsp;&nbsp; <strong>pstn recv &lt;-- CALL_RELEASED</strong> Trunk:0 Conn:2 RetCause:73 NetCause:255 <br />&lt;132&gt;[S=831457] REPORT_TYPE_ERROR_IN: ErrorCauseString = Incorrect parameter type, DiagnosticString= Condition unknown, ErrorCause = d, Diagnostic =&nbsp; [Trunk:0 Bchannel:-1 ConnID:-1] [Code:0x23127] <br />&lt;133&gt;[S=831458] [SID:766997237] (&nbsp;&nbsp; lgr_psbrdif)(833976&nbsp;&nbsp;&nbsp; )&nbsp;&nbsp; pstn send --&gt; PlaceCall: Trunk:0 BChannel:1 ConnID:2 SrcPN=xxx SrcSN= DstPN=151xxxxxxxx DstSN= SrcNT=4 SrcNP=1 SrcPres=0 SrcScrn=0 DstNT=2 DstNP=1 ServiceCap=M RdrctNum= RdNT=0 RdNP=0 RdPres=0 RdScrn=0 RdRsn=-1 Excl=1 <strong>Display=M&uuml;ller, Max</strong> IE= UUIE=0, RawData:0 CLIRReason:-1 OrigPN= OLI=-1 OffhookInd=0 <br />&lt;133&gt;[S=831462] [SID:766997237] (&nbsp;&nbsp; lgr_psbrdif)(833980&nbsp;&nbsp;&nbsp; )&nbsp;&nbsp; <strong>Abnormal Disconnect cause:255</strong>#?reason(255)? Trunk:0 Conn:2</p>
</blockquote>
<p>Die Normalisierung der Nummern ist bei allen Benutzern identisch, daran konnte es nicht liegen, nach einiger Zeit ist mir aufgefallen, dass Benutzer die keine Anrufe t&auml;tigen konnten einen Umlaut im Active Directory Anzeigenamen hatten&hellip; Dieser Namen wurde bei einem Benutzer zu Testzwecken umbenannt und schon konnte dieser auch telefonieren.</p>
<h1>L&ouml;sung</h1>
<p>Das Attribut DisplayName bei allen Benutzern zu &auml;ndern kam nat&uuml;rlich nicht in Frage, gl&uuml;cklicherweise gibt es eine Einstellung auf dem AudioCodes Gateway mit der man das verhalten steuern kann.</p>
<p>Eine M&ouml;glichkeit ist es, den &ldquo;Calling Name&rdquo; nicht ins ISDN zu signalisieren, dazu kann man den Parameter &ldquo;Remove Calling Name&rdquo; auf dem entsprechenden Trunk auf &ldquo;Enable&rdquo; setzen.</p>
<p><a href="/assets/image_630.png"><img style="display: inline; border: 0px;" title="image" src="/assets/image_thumb_628.png" alt="image" width="244" height="16" border="0" /></a></p>
<p>Alternativ kann &uuml;ber die AdminPage&nbsp;(oder&nbsp;die INI Datei)&nbsp;der Parameter &ldquo;ISO8859CharacterSet&rdquo; auf &ldquo;0&rdquo; gesetzt werden, dieser &auml;ndert die Umlaute in &ldquo;Latin-Only&rdquo; Zeichen, so wird &ldquo;&auml;&rdquo; zu &ldquo;a&rdquo;, &ldquo;&ouml;&rdquo; zu &ldquo;o&rdquo; usw&hellip;</p>
<p>Dieser Parameter kann auch &uuml;ber das CLI gesetzt werden, dazu verbindet man sich per SSH auf das Gateway. Die Einstellung&nbsp;versteckt&nbsp;sich hier:&nbsp;&nbsp;</p>
<blockquote>
<p>configure voip<br />&nbsp; gw digitalgw digital-gw-parameters<br />&nbsp;&nbsp; iso8859-charset no-accented</p>
</blockquote>
<p>&nbsp;</p>
<p>Tom</p>
