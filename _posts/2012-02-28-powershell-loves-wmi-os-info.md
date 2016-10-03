---
layout: post
title: "PowerShell loves WMI – OS Info"
date: 2012-02-28 21:20:37 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["PowerShell"]
redirect_from: ["/post/PowerShell-loves-WMI-OS-Info", "/post/powershell-loves-wmi-os-info"]
author: thomas torggler
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Mit dem cmdlet Get-WmiObject kann Windows PowerShell auf WMI Objekte zugreifen. Man kann also z.B. die Eigenschaften der Klasse “Win32_OperatingSystem” anzeigen und daraus Informationen über das Betriebssystem erhalten.</p>  <p>Die vollständige Liste der Eigenschaften (und Methoden) gibt es im <a href="http://msdn.microsoft.com/en-us/library/windows/desktop/aa394239(v=vs.85).aspx" target="_blank">MSDN</a>. Oder natürlich mit folgendem Befehl:</p>  <p><code>Get-WmiObject -Class win32_OperatingSystem -Property * | select *</code></p>  <h1>Interessante Eigenschaften</h1>  <p>OperatingSystemSKU: Enthält die installierte Version des Betriebssystems, z.B. Ultimate, Enterprise, Datacenter Server Edition</p>  <p>ProductType: Workstation, Domain Controller, Server</p>  <p>BuildNumber: Enthält die Build Nummer des Betriebssystems</p>  <p>OSArchitecture: 32-Bit oder 64-Bit</p>  <h1>Filter</h1>  <p>Man kann aufgrund dieser Eigenschaften einfache Filter für Scripts erstellen und so z.B. sicherstellen dass ein bestimmtes Script nur auf einem bestimmten Betriebssystem ausgeführt wird.</p>  <p><code>#Variable OS erstellen, enthält alle Informationen der angegebenen Klasse</p>    <p>$OS = Get-WMIObject –Class Win32_OperatingSystem</p>    <p>if($OS.OperatingSystemSKU -eq &quot;4&quot; -and $OS.Caption -like &quot;*Windows 7*&quot;) {</p>    <p>#Code für Windows 7 Enterprise</p>    <p>} else {</p>    <p>#Code für jedes andere OS</p>    <p>}</p>    <p>if ($os.OSArchitecture -eq &quot;64-bit&quot;){</p>    <p>#Code für x64 </p>    <p>} else {</p>    <p>#Code für x86</p>    <p>}</code></p>  <p>Das sind natürlich sehr einfache Beispiele, wie mächtig WMI ist kann man sich am besten in der <a href="http://msdn.microsoft.com/en-us/library/windows/desktop/aa394572(v=vs.85).aspx" target="_blank">WMI Reference</a> ansehen. Außerdem enthält das Beispiel keine Fehlerüberprüfung, läuft irgendwas schief, wars das.</p>  <h1>Remote</h1>  <p>Natürlich kann man auch Informationen über einen oder mehrere remote Computer auswerten. Das cmdlet Get-WmiObject hat den Parameter Computername über den man einen oder mehrere Computernamen (getrennt mit Komma) abfragen kann. Über Pipline Input kann man dem cmdlet Computernamen aus einem Textfile oder dem ActiveDirectory übergeben.</p>  <p><code>Get-WmiObject –Class win32_OperatingSystem –Computer mypc1,mypc2</p>    <p>Get-ADComputer -Filter 'Name -like &quot;*Server*&quot;'| Get-WmiObject –Class win32_OperatingSystem</code></p>  <p>&#160;</p>  <p>so long,</p>  <p>tom</p>
