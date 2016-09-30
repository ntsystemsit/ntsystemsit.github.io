---
layout: post
title: "lost & found: TP4, TH2, Win32-OpenSSH, VS Code"
date: 2015-11-25 19:08:00 +0100
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["Client", "en", "Server"]
alias: ["/post/lost-found-TP4-TH2-Win32-OpenSSH-VS-Code.aspx", "/post/lost-found-tp4-th2-win32-openssh-vs-code.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<h1>Tech Preview 4
</h1><p>The latest preview of Windows Server 2016 has been released, it brings many new features including options for Containers and Nano Server.
</p><p>Download it from the Evaluation Center: <a href="http://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-technical-preview">http://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-technical-preview</a>
	</p><h1>Windows 10 1511
</h1><p>Aka. Threshold 2 was released, pulled, and re-released, apparently because of <a href="http://arstechnica.co.uk/information-technology/2015/11/windows-10-november-update-was-pulled-for-forgetting-privacy-settings-its-now-back/">some privacy settings</a>. Windows Insiders got it a little earlier and so it landed on my Surface Pro 3. It leaves much more of a stable impression than "RTM" and fixed most of the problems I had.
</p><h1>OpenSSH comes to Windows
</h1><p>Yes, that's right, some folks at Microsoft <a href="http://blogs.msdn.com/b/powershell/archive/2015/06/03/looking-forward-microsoft-support-for-secure-shell-ssh.aspx">heard the calls</a> and started a project on GitHub, aiming to bring OpenSSH to the Windows-world. The wiki page at GitHub has some info about installing, which is quite simple:
</p><p>Once downloaded, run the following commands from an administrative PowerShell:
</p><p style="margin-left: 36pt;"><span style="font-family: Consolas; font-size: 10pt;">Expand-Archive .\OpenSSH-Win32.zip
</span></p><p style="margin-left: 36pt;"><span style="font-family: Consolas; font-size: 10pt;">cd .\OpenSSH-Win32\OpenSSH-Win32\
</span></p><p style="margin-left: 36pt;"><span style="font-family: Consolas; font-size: 10pt;">.\ssh-keygen.exe -t ecdsa -f ssh_host_ecdsa_key
</span></p><p style="margin-left: 36pt;"><span style="font-family: Consolas; font-size: 10pt;">.\sshd.exe install
</span></p><p style="margin-left: 36pt;"><span style="font-family: Consolas; font-size: 10pt;">Start-Service sshd
</span></p><p>And don't forget to create a firewall rule: 
</p><p style="margin-left: 36pt;"><span style="font-family: Consolas; font-size: 10pt;">New-NetFirewallRule -Protocol TCP -LocalPort 22 -Direction Inbound -Action Allow -DisplayName SSH
</span></p><p>Then I was able to connect from my MacBook: 
</p><p><img alt="" src="/assets/112515_1908_lostfoundT1.png">
	</p><p>Find more info, a wiki and the download over at GitHub: <a href="https://github.com/PowerShell/Win32-OpenSSH">https://github.com/PowerShell/Win32-OpenSSH</a>
	</p><h1>Visual Studio Code
</h1><p>A free, cross platform code editor with interesting language support.
</p><p><a href="https://code.visualstudio.com">https://code.visualstudio.com</a>
	</p><p>
&nbsp;</p><p>Have fun,
</p><p>Tom</p>
