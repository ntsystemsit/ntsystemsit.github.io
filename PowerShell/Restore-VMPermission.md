---
layout: post
title: "Restore-VMPermission"
date: 2013-09-27 21:46:00 +0200
comments: true
published: true
author: thomas torggler
category: PowerShell
tags: ["blog", "archives", "PowerShell"]
redirect_from: ["/page/PS-Restore-VMPermissionps1", "/page/ps-restore-vmpermissionps1"]
---

# SYNOPSIS
Adds permissions for the VMId to all assigned disks.

# SYNTAX
```
.\Restore-VMPermission.ps1 [-VM] <String[]> [-WhatIf] [-Confirm] [<CommonParameters>]
```

# DESCRIPTION
This script uses the Hyper-V Module to update permissions for all assigned disks on one ore more VMs. This is useful if you move/replace VHDs and the read permission ACE for VMId is missing.

# PARAMETERS
    -VM <String[]>
        VM, specify the VM that needs permissions fixed.

        Required?                    true
        Position?                    1
        Default value
        Accept pipeline input?       true (ByPropertyName)
        Accept wildcard characters?  false

    -WhatIf [<SwitchParameter>]

        Required?                    false
        Position?                    named
        Default value
        Accept pipeline input?       false
        Accept wildcard characters?  false

    -Confirm [<SwitchParameter>]

        Required?                    false
        Position?                    named
        Default value
        Accept pipeline input?       false
        Accept wildcard characters?  false

    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see
        about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

# INPUTS
    You can pipe objcets with a VMName property, such as returned by Get-VM, to this script.


# OUTPUTS
    None. This script does not write any objects to the pipeline.


# EXAMPLE 1
```
PS C:\>Restore-VMPermission.ps1 -VM dc01
```
This example adds permission for dc01 VMId to the ACL of all assigned disks for dc01.

# EXAMPLE 2
```
PS C:\>Get-VM | Restore-VMPermission.ps1
``` 
This example uses Get-VM to get all VMs on the local machine. It gets all disks for all VMs and adds the required premissions for VMId to the ACL.

{% include psgallery.html packagename="Restore-VMPermission" type="Script" reponame="PowerShell" %}