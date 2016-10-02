---
layout: post
title: "App-V and the start menu folder redirection issue"
date: 2014-04-04 18:06:00 +0200
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["AppV", "en"]
alias: ["/post/App-V-and-the-start-menu-folder-redirection-issue.aspx", "/post/app-v-and-the-start-menu-folder-redirection-issue.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>If you are using redirected start menu and App-V you might get into some issues with the management of the App-V application shortcuts. First let&rsquo;s start with some background information.</p>
<p><strong>Start Menu</strong> <br />The Windows start menu is located in the following folder&hellip;. If you are using folder redirection, you can redirect the folder to a fileserver. This is a very often seen scenario in RDS and Citrix deployments.</p>
<p><strong>App-V and the Start Menu</strong> <br />When you publish an application for a group of users, App-V can create the folder and shortcuts in the start menu. You can manage this in the management website from App-V.</p>
<p><strong>App-V and the System Account</strong> <br />After you install the App-V Client on your desktop or terminalserver machine, you can find the following service &ldquo;<strong>Microsoft App-V Client</strong>&rdquo; in the services. The App-V Client services runs with the local system account. If you change this account to a domain user account with the needed permissions, you get errors when publishing / un-publishing applications.</p>
<p><strong>The issue</strong>: You are using redirected start menu and remove an user from an App-V publishing group. The App-V Client does not delete the programs folder and shortcuts in the users start menu.</p>
<p>The reason is, that the local System account, under which the App-V Client services runs, doesn&rsquo;t have the permissions to delete the folder and shortcuts from the fileserver where your start menu is located.</p>
<p><strong>There are 2 work around</strong></p>
<p>1. Don&rsquo;t redirect the start menu</p>
<p>If you don&rsquo;t use start menu redirection, you don&rsquo;t run into this issue</p>
<p>2. Redirect the start menu and use a script to delete death program shortcuts</p>
<p>I don&rsquo;t want to disable the start menu redirection and wrote a script to find &ldquo;death&rdquo; shortcuts and delete them with the appropriate folder. You can specify the following script as user logon script:</p>
<p>Start-Sleep -Seconds 10</p>
<p>$ErrorActionPreference = "SilentlyContinue" <br />$StarMenuPath = "REDIRECTED_FOLDER" + [Environment]::UserName + "\Start Menu"</p>
<p>$Shortcuts = gci $StarMenuPath -Recurse -Filter "*.lnk" <br />ForEach ($Shortcut in $Shortcuts) { <br />&nbsp;&nbsp;&nbsp; $WshShell = New-Object -ComObject WScript.Shell <br />&nbsp;&nbsp;&nbsp; $LocalAppDataPath = $env:LOCALAPPDATA <br />&nbsp;&nbsp;&nbsp; $Link = $WshShell.CreateShortcut($Shortcut.Fullname) <br />&nbsp;&nbsp;&nbsp; $PathToApp = $Link.TargetPath <br />&nbsp;&nbsp;&nbsp; $PathToApp = $PathToApp.replace("C:\Windows\system32\config\systemprofile\AppData\Local",$LocalAppDataPath) <br />&nbsp;&nbsp;&nbsp; IF((!(Test-Path $PathToApp)) -and ($PathToApp.Contains("AppV"))){ <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Remove-item -LiteralPath $Shortcut.Fullname -Force <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $RemainingFiles = $Null <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $RemainingFiles = gci $Shortcut.Directory.FullName -Recurse <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; If($RemainingFiles -eq $Null){ <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Remove-Item $Shortcut.Directory.FullName -Force <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; } <br />&nbsp;&nbsp;&nbsp; } <br />}</p>
<p><strong>Microsoft will fix this</strong> <br />I opened a MS call and last week I got an email that the issue for this problem will be fixed in the upcoming Spring release.</p>
<p>Greetings <br />dn</p>
