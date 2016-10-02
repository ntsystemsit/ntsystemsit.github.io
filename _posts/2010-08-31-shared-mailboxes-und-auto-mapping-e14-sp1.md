---
layout: post
title: "Shared Mailboxes und Auto Mapping E14 Sp1"
date: 2010-08-31 20:05:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Exchange"]
redirect_from: ["/post/Shared-Mailboxes-und-Auto-Mapping-E14-Sp1", "/post/shared-mailboxes-und-auto-mapping-e14-sp1"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Shared und Ressourcen Postf&auml;cher gibt es schon l&auml;nger. Mit Exchange 2010 SP1 kommt aber ein neues Feature das den Admins das leben um einiges erleichtert. Wie das Kind hei&szlig;t ist noch nicht zu erfahren, es wird in div. Blogs und Foren &ldquo;Auto Mapping&rdquo; genannt.</p>
<p>Um dieses neue Feature zu verwenden muss man nur auf einem Exchange 2010 SP1 Server Berechtigungen auf eine Shared Mailbox setzen, existieren die Berechtigungen bereits m&uuml;ssen sie entfern und nochmal gesetzt werden.</p>
<p><a href="/assets/image_227.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" src="/assets/image_thumb_225.png" border="0" alt="image" width="242" height="244" /></a>&nbsp; <a href="/assets/image_232.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" src="/assets/image_thumb_230.png" border="0" alt="image" width="244" height="214" /></a></p>
<p>Beim setzen der Berechtigungen werden n&auml;mlich die Benutzer, die von der Berechtigung profitieren, in das ActiveDirectory Attribut msExchDelegatedListLink aufgenommen.</p>
<p><a href="/assets/image_231.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" src="/assets/image_thumb_229.png" border="0" alt="image" width="234" height="244" /></a></p>
<p>Outlook sucht beim starten nach Mailboxen mit dem DN des Benutzers und verbindet diese automatisch. Ein weiterer Vorteil ist dass die Mailbox vom Benutzer nicht geschlossen oder entfernt werden kann, so werden die Helpdesk Calls weiter reduziert ;)</p>
<p>Das Ganze funktioniert &uuml;brigens auch f&uuml;r Ressourcen (Room/Equipment) Mailboxen.</p>
<p>tom</p>
<p>special thanks to: <a href="http://www.stevieg.org/aboutme/">Steve Goodman</a></p>
