---
layout: post
title: "Create a SAS token for AzCopy"
date: 2019-06-17 09:25:06 +0200
comments: true
category: DevOps
tags: PowerShell Cloud Azure
author: thomas torggler
updated: false
---

I've spent way too much time trying to figure this out, so here goes a quick note that hopefully saves someone a minute.

<!-- more -->

## AzCopy

Is a command-line tool that can be used to copy data to all kinds of Azure storage. In this post I am focusing on the Azure Files service because I want to use AzCopy to copy data from an existing file server to a new file share in Azure.

According to the documentation, AzCopy supports authentication via Azure AD (using `azcopy login`) and SAS-token. For the files part, however, only SAS-token authentication is supported.

## Shared Access Signatures?

A shared access signature, SAS, is a string that can be used to delegate access to resources in Azure. It looks something like that:

```
?sv=2018-11-09&sig=<..key..>&se=2019-06-20T13%3A49%3A02Z&srt=sco&ss=bfqt&sp=racupwdl
```

There is some documentation out there on how to create the SAS token with the SDK but I couldn't find much that I could easily use. So after some searching around I found the `New-AzStorageAccountSASToken` cmdlet in the Az PowerShell module.

## PowerShell Az Module

The Az module is the latest version (I believe) of the PowerShell module to manage Azure. We are going to use it to create the SAS token, so if you don't have it already, install via the PowerShell Gallery (requires PowerShell 5.1): 

```
Install-Module Az -AllowClobber
```

Once installed I can login to my Azure subscription and create the token:

```
Connect-AzAccount
$StorageContext = New-AzStorageContext -StorageAccountName mystorageaccount -StorageAccountKey "storageaccountkey=="
New-AzStorageAccountSASToken -Service File -ResourceType Service,Container,Object -Permission racwdlup -Context $StorageContext -ExpiryTime (Get-Date).AddDays(+3)
```

The `-ExpiryTime` parameter can be used to set an expiration time for the generated token. I believe the default is one hour, so if you expect the copy job to take longer adjust accordingly.

Please note: I could also create the storage context without specifying the `-StorageAccountKey` parameter, but that would lead to the following error message when creating the token:

```
New-AzStorageAccountSASToken : Cannot create Shared Access Signature unless Account Key credentials are used.
```

## Copying the data

Actually copying files or directories to Azure Files is pretty straight-forward once we have the SAS-token, we just pass it along with the url.

To copy a single file:

```
.\azcopy.exe cp D:\Data\file.txt "https://mystorageaccount.file.core.windows.net/myshare/file.txt?sv=2018-11-09&sig=<key>&se=2019-06-20T13%3A49%3A02Z&srt=sco&ss=f&sp=racupwdl"
```

To copy a directory:

```
.\azcopy.exe cp D:\Data "https://mystorageaccount.file.core.windows.net/myshare?sv=2018-11-09&sig=<key>&se=2019-06-20T13%3A49%3A02Z&srt=sco&ss=f&sp=racupwdl" --recursive
```


## Links
 - https://github.com/Azure/azure-storage-azcopy
 - https://docs.microsoft.com/en-us/powershell/module/az.storage/new-azstorageaccountsastoken
 - https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-files
 - https://docs.microsoft.com/en-us/azure/storage/common/storage-dotnet-shared-access-signature-part-1

