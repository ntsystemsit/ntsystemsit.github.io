---
layout: post
title: "Disable Azure Backup Protection for a VM with Azure PowerShell"
date: 2017-02-15 19:25:06 +0200
comments: true
category: PowerShell
tags: PowerShell Azure RM
author: daniel nitz
---

My Azure credits burn faster than expected :) So I decided to remove some VM’s and Backup that I used for a customer’s demonstration. Since I don’t use the Azure Portal for configuration anymore, I fired up Powershell and did the Job. With the following commands, I show you how to stop the Backup for a Virtual Machine and delete the associated Recovery Points.

<!-- more -->

# Delete Azure VM

```powershell
Login-AzureRmAccount
# Select Azure RM Subscription
Select-AzureRmSubscription -SubscriptionId ***************

$container = Get-AzureRmRecoveryServicesBackupContainer -Name VIRTUAL-MACHINE-NAME  -ContainerType AzureVM
$BackupItem = Get-AzureRmRecoveryServicesBackupItem $container -WorkloadType AzureVM 
Disable-AzureRmRecoveryServicesBackupProtection -Item $BackupItem -RemoveRecoveryPoints
```

I know you may think this is quite simple and why is this guy writing a post with only 3 lines of code.  It’s because Tom moved our blog to Git and this is my first blog post that I try to upload and don't wanted to wait :)

Greetings

