---
layout: post
title: "Azure Backup"
date: 2015-09-06 14:08:00 +0200
comments: true
category: Archive
tags: ["Cloud", "de"]
redirect_from: ["/post/Azure-Backup", "/post/azure-backup"]
author: thomas torggler
---
<!-- more -->
<p><span style="color:black">Seit einiger Zeit bieten die Recovery Services in Microsoft Azure die Möglichkeit, virtuelle Maschinen oder ganze Rechenzentren zu sichern. Das ist vor allem für Unternehmen interessant, die sich kein DR Rechenzentrum leisten können/wollen.
</span></p><p><span style="color:black">Mit Azure Backup gibt es dazu auch&nbsp;die Möglichkeit einzelne Server, Clients oder nur bestimmte Daten in die Cloud zu sichern. So kann jeder an den Luxus eines off-site Backups kommen. Im folgenden Beispiel konfiguriere ich Azure Backup für meinen Windows 10 Client.
</span>&nbsp;</p><p><span style="color:#1e4e79; font-size:16pt">Backup Vault
</span></p><p><span style="color:black">Als Grundvoraussetzung benötigt man natürlich eine Azure Subscription, hier kann man sich das Ganze im Free Trial anschauen: <a href="https://azure.microsoft.com/en-us/pricing/free-trial/">https://azure.microsoft.com/en-us/pricing/free-trial/</a>
&nbsp;	</span></p><p><span style="color:black">In der Subscription wird ein Backup Vault benötigt, dort werden die Backups gespeichert. Um ein Backup Vault zu erstellen, ist nach wie vor das "alte" Management Portal nötig, dieses erreicht man über: <a href="https://manage.windowsazure.com">https://manage.windowsazure.com</a>
&nbsp;	</span></p><p><span style="color:black">Unter New, Data Services, Recovery Services erstellt man das Backup Vault.
</span></p><p><img alt="" src="/assets/archive/090615_1407_AzureBackup1.png"><span style="color:black">
</span></p><p><span style="color:black">Einmal angelegt muss man nur noch die "Vault credentials" herunterladen, diese findet man im Dashboard des neu angelegten Vaults.
</span></p><p><img alt="" src="/assets/archive/090615_1407_AzureBackup2.png"><span style="color:black">
</span></p><p><span style="color:#1e4e79; font-size:16pt">Backup Agent
</span></p><p><span style="color:black">Der Backup Agent wird auf dem Client/Server installiert, welcher in das Azure Backup Vault gesichert werden soll. Der aktuelle Backup Agent kann hier heruntergeladen werden: <a href="http://aka.ms/azurebackup_agent">http://aka.ms/azurebackup_agent</a>
&nbsp;	</span></p><p><span style="color:black">Einmal installiert, kann man die lokale Maschine über "Register Server" hinzufügen, in dem Wizard werden die "Vault Credentials" importiert. Diese verwendet der Agent um das Vault zu finden und sich zu authentifizieren. 
</span></p><p><img alt="" src="/assets/archive/090615_1407_AzureBackup3.png"></p><p><span style="color:black">Die Daten werden lokal verschlüsselt und über eine https Verbindung übertragen. Der Benutzer erstellt ein Kennwort für diese Verschlüsselung, die auch in der Cloud erhalten bleibt (at rest). Das Kennwort wird in einer Textdatei gespeichert und sollte sicher aufbewahrt werden.
</span></p><p><img alt="" src="/assets/archive/090615_1407_AzureBackup4.png"><span style="color:black">
&nbsp;	</span></p><p><span style="color:black">Sobald der Client/Server registriert wurde, kann man das Backup konfigurieren. Im ersten Schritt wählt man die Daten aus, welche gesichert werden sollen.
</span></p><p><img alt="" src="/assets/archive/090615_1407_AzureBackup5.png"><span style="color:black">
		</span></p><span style="color:black"><p><span lang="DE" style="mso-bidi-font-size:11.0pt;mso-ascii-font-family:Calibri;mso-hansi-font-family:&#10;Calibri;color:black;mso-ansi-language:DE"><font face="Calibri" size="3">Dann gibt man unter Backup Schedule
and Retention Policy an, wann Backups erstellt werden sollen und wie diese
aufbewahrt werden.</font></span></p></span><p><img alt="" src="/assets/archive/090615_1407_AzureBackup6.png"><span style="color:black">
&nbsp;	</span></p><p><span style="color:black">That's it. Das Backup kann mit Backup Now gestartet werden, oder man wartet bis der geplante Task das erledigt.
</span></p><p><img alt="" src="/assets/archive/090615_1407_AzureBackup7.png"><span style="color:black">
&nbsp;	</span></p><p><span style="color:#1e4e79; font-size:16pt">Kosten
</span></p><p><span style="color:black">Die Kosten für&nbsp;das Backup Vault können unter folgendem Link nachgelesen werden:
</span></p><p><a href="http://azure.microsoft.com/en-us/pricing/details/backup/">http://azure.microsoft.com/en-us/pricing/details/backup/</a><span style="color:black">
&nbsp;	</span></p>
{% include imported_disclaimer.html %}
