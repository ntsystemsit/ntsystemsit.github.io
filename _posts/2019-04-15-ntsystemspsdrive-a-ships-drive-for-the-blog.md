---
layout: post
title: "ntSystemsPSDrive: a SHiPS drive for the blog"
date: 2019-04-19
comments: true
category: PowerShell
tags: PowerShell Jekyll ntSystems
author: thomas torggler
updated: false
---

Some time ago I wrote a post about [Consuming ntSystems with PowerShell](https://link). It boils down to this: we have a json-based API that is available via https://ntsystems.it/api/v1/ and returns json elements for posts and pages on the blog. For more information check out the linked post. Then I wanted play around with the SHiPS module for some time and finally got around to doing it this past weekend. Now I'm happy to be sharing another method do consume ntSystems with PowerShell: It can be mounted as PSDrive.

<!-- more -->

## PSProvider

PowerShell has always had the concept of _providers_ which serve as a way of accessing and interacting with data that would otherwise not be easily available at the command-line. According to `about_Providers` they are Microsoft .NET Framework-based programs that make the data in a specialized data store available in PowerShell so that you can view and manage it.

There are some built-in providers such as _Alias_, _Certificate_, and _Registry_ that you will be familiar with. Essentially they provide a file-system-like view into the data stores, so we can easily see all defined aliases with the following command:

```powershell
Get-ChildItem -Path Alias:
```

We can see installed certificates in the _Cert:_ drive and access the registry via _hkcu:_ and _hklm:_. Not only can we list the content of the data stores with cmdlets such as _Get-ChildItem_, we can also modify values with _Set-Item_ or _Set-ItemProperty_ like this:

```powershell
# Create a new REG_SZ 
New-ItemProperty -Path HKCU:\Environment\ -PropertyType string -Name TestPS -Value "test pwsh"

# Create an alias
New-Item Alias:\test -Value "Get-Process"

# Remove expired Certificates
Get-ChildItem Cert:\CurrentUser\my | Where-Object NotAfter -lt (Get-Date) | Remove-Item
```

Well, you get it by now: providers make it relatively easy to work data stored in certain locations.

Some vendors, such as VMware, add providers to their PowerShell tools. So after installing PowerCLI and connecting to a server, we can browse the inventory using: 

```powershell
Get-ChildItem vi:
Get-ChildItem vmstore:
```

We can see all available drives using `Get-PSDrive`.

There are not too many 3rd-party providers out there, probably because it was quite hard to write them. Enter SHiPS.


## Simple Hierarchy in PowerShell (SHiPS)

According to the SHiPS GitHub repository, "developing PowerShell provider got so much easier". The module leverages PowerShell classes to create the hierarchy and items that are then exposed as a PS Drive.

How easy you ask? Well I gave it a shot the other day and here is the result.
    

## ntSystemsPSDrive

As stated above, the module requires the SHiPS module and builds on top of it. So in the code we first declare the following:

```powershell
using namespace Microsoft.PowerShell.SHiPS
```

Then we go ahead and create classes for our navigation nodes, folders (items containing child items) inherit from `SHiPSDirectory` and leafs (like files) inherit from `SHiPSLeaf`. 

In the classes we define constructors and methods as needed, if a folder shall be used as root node, i.e. the entry point used by `New-PSDrive`, it must have a constructor with the node name as parameter.

```powershell
Home([string]$name): base($name) { }
```

All folder nodes must define a `GetChildItem()` method that is called when browsing the directory.

```powershell
[object[]] GetChildItem() { }
```

So for example the `Home` node in the module ntSystemsPSDrive is used as root (entry point) when mounting the PSDrive:

```powershell
New-PSDrive -Name $Name -PSProvider SHiPS -Root "ntSystemsPSDrive#Home" -Scope Global -ErrorAction Stop
```

To create such a node and its contents, we define a class like this :

```powershell
class Home : SHiPSDirectory {
    # required constructor for root nodes
    Home([string]$name): base($name) {
    }
    # The method GetChildItems is called when listing directory content
    [object[]] GetChildItem() {
        $obj = @()
        $obj += [ntSystemsType]::new("Category")
        $obj += [ntSystemsType]::new("Tags")
        $obj += [ntSystemsType]::new("Author")
        $obj += [ntSystemsType]::new("Language")
        return $obj
    }
}
```

The above example contains the constructor required for root nodes as well as a method _GetChildItem_ that returns an array of objects when it gets called.

See it in action: 

```powershell
Import-Module ntSystemsPSDrive
New-ntSystemsPSDrive
dir ntSystems:
dir ntSystems: -Depth 1
Get-ChildItem 'ntSystems:\Posts by Category\PowerShell\' | Select-Object -Property name,url
Get-Content 'ntSystems:\Posts by Category\ntSystems\Jekyll Fun: Consuming ntSystems with PowerShell' 
```

Pretty cool, right? Thanks for reading, have fun!

Tom


## Links

 - [SHiPS](https://github.com/powershell/ships/)
 - [SHiPS Architecture](https://github.com/PowerShell/SHiPS/blob/development/docs/Design.md)