---
layout: post
title: "Installing vSphere PowerCLI"
date: 2011-06-11 10:56:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["Server", "VMware"]
redirect_from: ["/post/Installing-vSphere-PowerCLI", "/post/installing-vsphere-powercli"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Mit vSphere PowerCLI bietet VMware ein PowerShell Snapin das mit &uuml;ber 250 cmdlets die Verwaltung der vSphere Umgebung vereinfacht bzw. Automatisierung&nbsp; erm&ouml;glicht.</p>
<p>Die aktuelle Version kann unter <a href="http://vmware.com/go/powercli">http://vmware.com/go/powercli</a> heruntergeladen werden.</p>
<p>&nbsp;</p>
<p>Die Installationsroutine installiert au&szlig;er den PowerShell Snapins die VMware VIX API, die das Management von virtuellen Maschinen erm&ouml;glicht. Diese API erlaubt es Programme direkt im Gastsystem der VM ausf&uuml;hren bzw. Dateien zu manipulieren.</p>
<p>Nachdem das License Agreement akzeptiert wurde, kann man den Pfad f&uuml;r die Installation festlegen, jetzt noch auf installieren klicken und das wars.</p>
<p><a href="/assets/image_312.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/image_thumb_310.png" border="0" alt="image" width="244" height="187" /></a></p>
<p>Auf dem Desktop wurde eine Verkn&uuml;pfung zu PowerCLI angelegt, sonst findet man sie unter Start, Programme, VMware, VMware vSphere PowerCLI.</p>
<p>Wenn man die PowerCLI startet wird das PSSnapin &ldquo;VMware.VimAutomation.Core&rdquo; geladen, dieses kann nat&uuml;rlich auch in einer &ldquo;normalen&rdquo; PowerShell Session mit Add-PSSnapin hinzugef&uuml;gt werden.</p>
<p><a href="/assets/image_313.png"><img style="background-image: none; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="image" src="/assets/image_thumb_311.png" border="0" alt="image" width="244" height="125" /></a></p>
<p>Wie in der Titelleist zu erkennen ist, ist die PowerCLI standardm&auml;&szlig;ig &ldquo;not connected&rdquo;, um auf die Virtuelle Umgebung zugreifen zu k&ouml;nnen muss man eine Verbindung mit dem vCenter Server herstellen. Dazu verwendet man das Connect-VIServer cmdlet, z.B.:</p>
<blockquote>
<p>Connect-VIServer <em>vcenter.ntsystems.local</em> &ndash;credential (Get-Credential)</p>
</blockquote>
<p>Mit diesem Befehl verbindet man die PowerCLI mit dem vCenter Server und kann alternative Anmeldeinformationen mitgeben, wenn der Benutzer mit dem die PowerCLI gestartet wurde ausreichende Rechte im vCenter hat kann man &ndash;credential nat&uuml;rlich weglassen.</p>
<p>Wenn die Verbindung hergestellt wurde kann man mit PowerCLI arbeiten und sich z.B. eine Liste der VMs ausgeben lassen die nicht eingeschaltet sind:</p>
<blockquote>
<p>Get-VM | ?{$_.PowerState -notlike "*On*"}</p>
</blockquote>
<p>Alternativ kann man PowerCLI auch direkt mit einem ESX/ESXi Host verbinden, das ist z.B n&ouml;tig um mit Get-ESXTop Performance Informationen &uuml;ber einen Host zu sammeln.</p>
<p>&nbsp;</p>
<p>Die Hilfe zur PowerCLI kann einfach mit dem cmdlet Get-PowerCLIHelp aufgerufen werden, empfehlenswert ist auch Get-PowerCLICommunity.</p>
<p>&nbsp;</p>
<p>Hier noch ein kleiner Tipp: Wer die PowerShell ISE verwendet kann eigene Add-Ons hinzuf&uuml;gen. Ich habe ein einfaches Add-On gebastelt um das PowerCLI Snapin in die ISE Session zu laden. Dazu einfach folgendes Script in das ISE Profil kopieren. Um die ISE Profil Datei zu &ouml;ffnen &ldquo;notepad $profile.CurrentUserCurrentHost&rdquo; in der ISE ausf&uuml;hren.</p>
<p>&nbsp;</p>
<blockquote>
<p>$psISE.CurrentPowerShellTab.AddOnsMenu.SubMenus.Add(     <br />&nbsp; "Connect to vCenter",      <br />&nbsp;&nbsp;&nbsp; {      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Add-PSSnapin VMware.VimAutomation.Core      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $VIServer = Read-Host -Prompt "ESX/ESXi Host or vCenter Server FQDN"      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if(Test-Connection $VIServer -Quiet) {Connect-VIServer $VIServer}      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; else {Write-Output "Server not reachable"}      <br />&nbsp;&nbsp;&nbsp; },      <br />&nbsp; "Control+Alt+V"      <br />)</p>
</blockquote>
<p>Die Profildatei sollte signiert sein, wie man das macht habe ich <a href="/post/Signing-PowerShell-Scripts.aspx" target="_blank">hier</a> beschrieben.</p>
<p>&nbsp;</p>
<p>so long   <br />tom</p>
