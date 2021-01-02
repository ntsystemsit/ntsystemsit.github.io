---
layout: post
title: "New-SfBBackup"
date: 2013-08-28 12:35:25 +0200
comments: true
author: thomas torggler
category: PowerShell
tags: OnlineHelp Lync PowerShell
redirect_from: ["/PowerShell/Start-LyncBackup/", "/page/PS-Start-LyncBackupps1", "/page/ps-start-lyncbackupps1"]

---
This script exports Lync Core Data and Settings according to the documentation availabe on [TechNet](http://technet.microsoft.com/en-us/library/hh202170.aspx)
It is intended to be run as scheduled task, the Retention parameter can be used to indicate how long to keep existing backup files in the target directory.

<!-- more -->

# Inputs
None. This script does not take any pipeline input.

# Outputs
None. This script does not write any output to the pipeline.

# Permissions
The Account used to run this script needs to be member of the RTCUniversalServerAdmins group.

# Example 1
```powershell
.\New-SfBBackup.ps1 -PoolFqdn lyncpool01.example.com -Path \\SERVER\Share\CSBackup
```

This example exports Lync config and saves it into a subfolder at `\\SERVER\Share\CSBackup`

# Example 2
```powershell 
.\New-SfBBackup.ps1 -PoolFqdn lyncpool01.example.com -Path \\SERVER\Share\CSBackup -Retention 10
```

This example exports Lync config and saves it into a subfolder at `\\SERVER\Share\CSBackup`. It deletes existing backups in the destination directory if they are older than 10 days.

{% include psgallery.html packagename="Invoke-SEFAUtil" type="Script" reponame="PowerShell" %}