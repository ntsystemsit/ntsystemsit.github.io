---
layout: post
title: "VB.Net PowerShell Script starten"
date: 2012-07-24 19:16:57 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["PowerShell"]
redirect_from: ["/post/VBNet-PowerShell-Script-starten", "/post/vbnet-powershell-script-starten"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Vor einigen Tage habe ich versucht ein PowerShell Script über ein VB.Net Programm zu starten.    <br />Hat mich ein wenig Zeit gekostet :)</p>  <p>Anbei der Code:</p>  <p>Public Function RunCreatePasswordPowerShell(ByVal script As String) As Integer    <br />&#160;&#160;&#160;&#160;&#160;&#160;&#160; Dim execProcess As New System.Diagnostics.Process     <br />&#160;&#160;&#160;&#160;&#160;&#160;&#160; Dim psScriptTextArg = &quot;-Command &quot;&quot;&amp; &quot; + script + &quot; &quot; + &quot;'&quot; + System.Environment.CurrentDirectory + &quot;'&quot; + &quot;&quot;&quot;&quot;     <br />&#160;&#160;&#160;&#160;&#160;&#160;&#160; execProcess.StartInfo.WorkingDirectory = Environment.SystemDirectory &amp; &quot;\WindowsPowershell\v1.0\&quot;     <br />&#160;&#160;&#160;&#160;&#160;&#160;&#160; execProcess.StartInfo.FileName = &quot;powershell.exe&quot;     <br />&#160;&#160;&#160;&#160;&#160;&#160;&#160; execProcess.StartInfo.Arguments = psScriptTextArg     <br />&#160;&#160;&#160;&#160;&#160;&#160;&#160; execProcess.StartInfo.UseShellExecute = True     <br />&#160;&#160;&#160;&#160;&#160;&#160;&#160; Return execProcess.Start     <br />&#160;&#160;&#160; End Function</p>  <p><strong>Erklärung:</strong></p>  <p>Die Funktion RunCreatePasswordPowerShell wird mit einer String Variable als Argument aufgerufen (script). Diese String Variable beinhaltet den Pfad zu unserem PowerShell Script.    <br />In meinen speziellen Fall geben ich beim zusammenstellen der Argumente noch die den aktuellen Pfad mit. </p>  <p>Eventuell noch interessant: Dieses PowerShell Script welches ich hier aufrufe erstellt verschlüsselte PasswordFiles, welche dann über die PowerShell weiter verwendet werden können. Anbei der Code dazu:</p>  <p>param(    <br />&#160;&#160;&#160; [parameter(Mandatory = $true)]     <br />&#160;&#160;&#160; [string]$CurrentDirectory     <br />)     <br />$PasswdFilename = read-host &quot;Filename&quot;     <br />$Passwd = read-host &quot;Password&quot; -assecurestring | convertfrom-securestring     <br />$PasswdPathFile = $CurrentDirectory + $PasswdFilename + &quot;-Pass.txt&quot;     <br />$Passwd | Out-File $PasswdPathFile</p>  <p>Grüße    <br />dn</p>
