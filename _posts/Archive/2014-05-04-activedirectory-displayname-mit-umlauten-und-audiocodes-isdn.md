---
layout: post
title: "ActiveDirectory DisplayName mit Umlauten und AudioCodes ISDN"
date: 2014-05-04 12:39:00 +0200
comments: true
category: "Lync"
tags: ["de", "Lync"]
redirect_from: ["/post/ActiveDirectory-DisplayName-mit-Umlauten-und-AudioCodes-ISDN", "/post/activedirectory-displayname-mit-umlauten-und-audiocodes-isdn"]
author: thomas torggler
language: de
updated: 2017-08-03
---
Vor einigen Tagen bin ich in einem Lync Projekt auf das Problem gestoßen, dass bestimmte Benutzer keine Anrufe in das PSTN (ISDN E1) t&auml;tigen konnten. Der Kunde setzt ein AudioCodes Gateway ein, die Syslogs des Gatways sind zur Fehlersuche sehr gut geeignet. Das Gateway bekommt die SIP Signalisierung von Lync sowie die Q.931 Signalisierung aus dem ISDN mit.

<!-- more -->

Nach kurzer Suche hat sich herausgestellt, dass Benutzer welche keine Anrufe t&auml;tigen konnten, folgenden Fehler verursachten:

```
<132>[S=831454] Error Indication: Last Command (Primitive) was not performed due to cause 100  [Trunk:0 Bchannel:1 ConnID:2] [Code:0x23127] 
<133>[S=831455] (   lgr_psbrdex)(833974    )   recv <-- UnHandled event: EV_ISDN_ERROR_INDICATION (317) 
<133>[S=831456] [SID:766997237] (   lgr_psbrdex)(833975    )   pstn recv <-- CALL_RELEASED Trunk:0 Conn:2 RetCause:73 NetCause:255 
<132>[S=831457] REPORT_TYPE_ERROR_IN: ErrorCauseString = Incorrect parameter type, DiagnosticString= Condition unknown, ErrorCause = d, Diagnostic =  [Trunk:0 Bchannel:-1 ConnID:-1] [Code:0x23127] 
<133>[S=831458] [SID:766997237] (   lgr_psbrdif)(833976    )   pstn send --> PlaceCall: Trunk:0 BChannel:1 ConnID:2 SrcPN=xxx SrcSN= DstPN=151xxxxxxxx DstSN= SrcNT=4 SrcNP=1 SrcPres=0 SrcScrn=0 DstNT=2 DstNP=1 ServiceCap=M RdrctNum= RdNT=0 RdNP=0 RdPres=0 RdScrn=0 RdRsn=-1 Excl=1 Display=Müller, Max IE= UUIE=0, RawData:0 CLIRReason:-1 OrigPN= OLI=-1 OffhookInd=0 
<133>[S=831462] [SID:766997237] (   lgr_psbrdif)(833980    )   Abnormal Disconnect cause:255#?reason(255)? Trunk:0 Conn:2
```

Die Normalisierung der Nummern ist bei allen Benutzern identisch, daran konnte es nicht liegen, nach einiger Zeit ist mir aufgefallen, dass Benutzer die keine Anrufe tätigen konnten einen Umlaut im Active Directory Anzeigenamen hatten... Dieser Namen wurde bei einem Benutzer zu Testzwecken umbenannt und schon konnte dieser auch telefonieren.

# Lösung

Das Attribut `DisplayName` bei allen Benutzern zu ändern kam natürlich nicht in Frage, glücklicherweise gibt es eine Einstellung auf dem AudioCodes Gateway mit der man das Verhalten steuern kann.

Eine Möglichkeit ist es, den `Calling Name` nicht ins ISDN zu signalisieren, dazu kann man den Parameter `Remove Calling Name` auf dem entsprechenden Trunk auf `Enable` setzen.

![admin page](http://ntsystems.it/assets/archive/image_630.png)

Alternativ kann über die AdminPage (oder die INI Datei) der Parameter `ISO8859CharacterSet` auf “0” gesetzt werden, dieser ändert die Umlaute in `Latin-Only` Zeichen, so wird “ä” zu “a”, “ö” zu “o” usw…

Dieser Parameter kann auch &uuml;ber das CLI gesetzt werden, dazu verbindet man sich per SSH auf das Gateway. Die Einstellung versteckt sich hier:

```
configure voip
  gw digitalgw digital-gw-parameters
   iso8859-charset no-accented
```


Tom