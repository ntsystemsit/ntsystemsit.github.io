---
layout: post
title: "Exchange 2010 Update-HybridConfiguration"
date: 2014-02-12 07:49:00 +0100
comments: true
category: Archive
tags: ["Exchange", "Office365", "de"]
redirect_from: ["/post/Exchange-2010-Update-HybridConfiguration", "/post/exchange-2010-update-hybridconfiguration"]
author: thomas torggler
language: de
---
<!-- more -->
<p>Ein schneller Tipp für Hybrid-Admins ;)</p>  <p>Beim ausführen des Hybrid Configuration Wizard auf einem Exchange 2010 Server tritt folgender Fehler auf:</p>  <p><code>Fehler beim Aktualisieren der Hybridkonfiguration: 'System.Management.Automation.Remoting.PSRemotingTransportException: Beim Ausführen von Daten vom Remoteserver ist folgender Fehler aufgetreten: [ClientAccessServer=DB3PR05CAXXX,BackEndServer=db3pr05mbXXX.eurprd05.prod.outlook.com, RequestId=ce4f8474-2bcc-4b3b-b4e4-5089f60f2372,<strong>TimeStamp=2/11/2014 10:11:28 AM</strong>] The request for the Windows Remote Shell with ShellId FC244D6B-C78E-4605-B7E1-91A480CD914B failed because the shell was not found on the server. Possible causes are: the specified ShellId is incorrect or the shell no longer exists on the server. Provide the correct ShellId or create a new shell and retry the operation. Weitere Informationen finden Sie im Hilfethema &quot;about_Remote_Troubleshooting&quot;.</p>    <p>Weitere Informationen zur Fehlerbehebung finden Sie in der Protokolldatei &quot;Update-HybridConfiguration&quot; unter C:\Program Files\Microsoft\Exchange Server\V14\Logging\Update-HybridConfiguration\HybridConfiguration_2_11_2014_10_10_45_635277102457617512.log.</code></p>  <p>Wieder mal hat das Problem mit den unterschiedlichen Datumsformaten zu tun, der Server hatte deutsche Regionaleinstellungen. </p>  <p><a href="/assets/archive/image_620.png"><img title="image" style="border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px; display: inline" border="0" alt="image" src="/assets/archive/image_thumb_618.png" width="221" height="244" /></a> </p>  <p>Diese müssen auf English (USA) geändert werden und schon läuft der Wizard ohne Probleme durch.</p>  <p>Gruß,   <br />Tom</p>
{% include imported_disclaimer.html %}
