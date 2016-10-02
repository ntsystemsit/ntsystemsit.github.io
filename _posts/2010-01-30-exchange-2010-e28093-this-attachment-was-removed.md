---
layout: post
title: "Exchange 2010 – This Attachment was removed"
date: 2010-01-30 16:19:00 +0100
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["Exchange"]
alias: ["/post/Exchange-2010-e28093-This-Attachment-was-removed.aspx", "/post/exchange-2010-e28093-this-attachment-was-removed.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Ich betreibe seit einiger Zeit eine Exchange 2010 Umgebung bestehend aus einem Edge Transport Server und einem Multi-Role Exchange Server im Lan.</p>
<p>Standardm&auml;&szlig;ig ist am Edge Transport Server der &ldquo;Attachment Filter Agent&rdquo; aktiv, dieser ist daf&uuml;r verantwortlich, potentiell gef&auml;hrliche Anh&auml;nge zu filtern. Will man also z.B. eine .exe Datei verschicken muss man diesen Agent deaktivieren. Das wird auf dem Edge Transport Server gemacht und zwar per PowerShell.</p>
<blockquote>
<p>Disable-TransportAgent -Identity "Attachment Filter agent"</p>
</blockquote>
<p>Ich schlage allerdings vor dieses Sicherheitsfeature nicht auszuschalten. Man kann diverse Einstellungen vornehmen, so kann z.B. festgelegt werden dass ein unsicherer Anhang nicht entfernt wird sondern das Mail direkt &ldquo;rejected&rdquo; wird.</p>
<p>Man kann die Attachment Filter Eintr&auml;ge &uuml;ber folgendes cmdlets selbst bearbeiten.</p>
<blockquote>
<p>Add-AttachmentFilterEntry -Name &lt;FileName&gt; -Type FileName</p>
</blockquote>
<blockquote>
<p>Add-AttachmentFilterEntry -Name &lt;MIMEContentType&gt; -Type ContentType</p>
</blockquote>
<p>Au&szlig;erdem kann man das Verhalten des Attachment Filter Agent festlegen und zwar &uuml;ber das set-AttachmentFilterListConfig cmdlet</p>
<blockquote>
<p>Set-AttachmentFilterListConfig -Action -Reject -RejectResponse "Versenden von Mails mit unsicheren Anh&auml;ngen nicht erlaubt!"</p>
</blockquote>
<p>Genauere Syntax und Infos zu den Parametern findet man im TechNet:</p>
<p><a title="http://technet.microsoft.com/en-us/library/bb123483.aspx" href="http://technet.microsoft.com/en-us/library/bb123483.aspx">Set-AttachmentFilterListConfig</a> <br /><a href="http://technet.microsoft.com/en-us/library/bb123931.aspx">Add-AttachmentFilterEntry</a></p>
<p>&nbsp;</p>
<p>na dann, sch&ouml;nes Wochenende! <br />tom</p>
