---
layout: post
title: "Azure Backup - Part One"
date: 2016-03-27 10:18:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Azure", "en"]
redirect_from: ["/post/Azure-Backup-Part-One", "/post/azure-backup-part-one"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>On Azure you can choose basically between two different Backup Options:</p> <p>1. Direct Backup Azure VM to Backup Vault<br>2. Backup Applications like SQL, Sharepoint… and Files, System State through Microsoft Azure Backup Server</p> <p>Today I will give you a short overview of the service.<a href="https://manage.windowsazure.com/@leonhardfeichterdatef.onmicrosoft.com#">  <p></a> <h2>Prerequisites</h2> <p>- Backup Vault: First of all you have to create a Backup Vault (Thomas described this already in a former <a href="/post/Azure-Backup.aspx">post</a>)<br>- If you use Microsoft Azure Backup Server a Internet Connection is needed</p> <h2>Costs</h2> <p>The costs are counted by instance and space used. An instance is either a Azure VM Server using Backup Option 1 or a Server to Backup specified with Microsoft Azure Backup Server using Option 2. (Price table from 12.2015)</p> <p><a href="/assets/image_701.png"><img title="image" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="image" src="/assets/image_thumb_699.png" width="918" height="343"></a></p> <p>When you create the Backup Vault you can choose between LRS or GRS. This can only be specified at the beginning.<br>If you started already some Backups the GRS storage cannot be switched to LRS anymore. You have to recreate the backup vault. </p> <p><a href="/assets/image_702.png"><img title="image" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="image" src="/assets/image_thumb_700.png" width="521" height="204"></a></p> <p>&nbsp;</p> <p>For the Backup Data <em>Azure</em> <em>Block Blob </em>Storage is used. The costs can be seen from the following price table from 12.2015</p> <p><a href="/assets/image_703.png"><img title="image" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="image" src="/assets/image_thumb_701.png" width="822" height="468"></a></p> <p>&nbsp;</p> <p>In <strong>Part 2</strong> I create a Backup Plan for some Azure VM’s and restore a Test-VM<br><strong>Part 3</strong> covers a OnPrem Backup using Option 2 with Microsoft Azure Backup Server. I make a full Backup and full restore assuming the VM’s don’t exist anymore.</p> <p>Greetings</p>
