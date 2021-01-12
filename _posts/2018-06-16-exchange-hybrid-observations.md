---
layout: post
title: "Exchange Hybrid Observations"
date: 2018-06-16 11:29:06 +0200
comments: true
category: Cloud
tags: Office365 Hybrid Exchange
author: tto
date_modified: 2018-09-20
---

Like I did [here]({{ site.url }}/post/Skype-for-Business-Hybrid-Observations) with Skype for Business, I'm collecting some observations and useful snippets about Exchange in hybrid environments.

<!-- more -->

## Completing individual migration users

Recently we have been using the _CompleteAfter_ flag in favour of the older _SuspendWhenReadyToComplete_ to set a date for migration batches to complete. To update this timestamp for a single mailbox in a batch, we can use the following command:

```powershell
Get-MoveRequest tom | Set-MoveRequest -CompleteAfter (Get-Date).AddHours(-1)
```

In the above example, the move request for the mailbox _tom_ will be completed immediately without affecting other mailboxes in the batch.

## Getting details about BadItems

Part of every migration are mailboxes with items that are either corrupt or cannot be imported to Exchange Online for some reason. Now if we don't just increase the _BadItemLimit_ counter but want more information about the corrupt items, we can get more information by using the `-IncludeReport` parameter with the `Get-MigrationUser` cmdlet:

```powershell
$Stats = Get-MigrationUserStatistics -Identity tom@ntsystems.it -IncludeReport 
$Stats.Report.BadItems
```

## Recipient Permissions

The *RecipientPermission cmdlets are used to manage _SendAs_ permissions in Exchange Online. A nice goody of the `Get-RecipientPermission` cmdlet is the option to find permissions by assignee, i.e. by user _to whom_ the permissions are granted. To get all entries that grant permissions to the user _tom_ we use the `-Trustee` parameter like this:

```powershell
Get-RecipientPermission -Trustee tom
```

Likewise, we can find all permissions by access right using the `-AccessRights` parameter. The following example gets all entries that grant _SendAs_ permissions: 

```powershell
Get-RecipientPermission -AccessRights SendAs
```

## Shared Mailboxes

Starting with the June 2018 quarterly updates (2013 CU21 and 2016 CU10), the management of shared mailboxes in hybrid scenarios got easier. A _-Shared_ parameter got added to the _*RemoteMailbox_ cmdlets, instead creating a shared mailbox on-prem and then moving it to Exchange Online, we can now use `New-RemoteMailbox -Name Office -Shared`. 

You have already updated to CU21/CU10 but the _Shared_ parameter is not available? Run `.\setup.exe /PrepareAD /IAcceptExchangeServerLicenseTerms`

More Info: [KB4133605](https://support.microsoft.com/help/4133605/cmdlets-to-create-modify-remote-shared-mailbox-in-on-premises-exchange)


Tom
