---
layout: page
title: "Start-LyncBackup"
date: 2013-08-28 12:35:25 +0200
comments: true
published: true
author: thomas torggler
tags: ["blog", "archives", "PowerShell"]
redirect_from: ["/page/PS-Start-LyncBackupps1", "/page/ps-start-lyncbackupps1"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>This script exports Lync Core Data and Settings according to the documentation availabe on <a href="http://technet.microsoft.com/en-us/library/hh202170.aspx" target="_blank">TechNet</a>. It is intended to be run as scheduled task, the Retention parameter can be used to indicate how long to keep existing backup files in the target directory.</p>
<p><strong>Inputs</strong></p>
<p>None. This script does not take any pipeline input.</p>
<p><strong>Outputs</strong></p>
<p>None. This script does not write any output to the pipeline.</p>
<p><strong>Permissions</strong></p>
<p>The Account used to run this script needs to be member of the RTCUniversalServerAdmins group.</p>
<p><strong>Example 1</strong></p>
<p>.\Start-LyncBackup.ps1 -PoolFqdn lyncpool01.example.com -Path \\SERVER\Share\CSBackup</p>
<p>This example exports Lync config and saves it into a subfolder at <a href="file://\\SERVER\Share\CSBackup">\\SERVER\Share\CSBackup</a>&nbsp;</p>
<p><strong>Example 2</strong></p>
<p>.\Start-LyncBackup.ps1 -PoolFqdn lyncpool01.example.com -Path \\SERVER\Share\CSBackup -Retention 10</p>
<p>This example exports Lync config and saves it into a subfolder at <a href="file://\\SERVER\Share\CSBackup">\\SERVER\Share\CSBackup</a>. It deletes existing backups in the destination directory if they are older than 10 days.</p>
<p><strong>Notes</strong></p>
<p>Author: Thomas Torggler; @torggler<br />Date: 2013-08-17 <br />Version: 1.1 <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.1 Added Retention parameter and some error handling. <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.0: Basics <br />To-do: Support for 2010, Multiple pools, include Lync file store, autodiscovery&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
