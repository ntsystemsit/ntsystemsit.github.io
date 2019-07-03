---
layout: post
title: "Powershell Script to enable specific Office 365 Service"
date: 2019-02-05 09:25:06 +0200
comments: true
category: Azure
tags: PowerShell Azure
author: daniel nitz
updated: false
---

Currently I'm in an Exchange Migration project to migrate all mailboxes from Exchange onPremise to Exchange Online. Yeah.. of course.. killing Exchange onPrem... again :)

<!-- more -->

I have the following situation that all users already have Office 365 Licenses assigned like E1 / E3 or E5. There are some users that don't have all Office 365 services the license includes enabled and so there are some disabled services. The license situation is not really structured.. When I'm going to migrate the mailboxes to Exchange Online I need to enable the Exchange service for every user so they can access the mailbox.

It doesn't sound like a big deal but the tricky part is I want to preserve the disabled services for every user. I cannot apply a default license to all users and I'm too lazy to click through all users and enable the Exchange Online switch manually..

So now I want to share with you a script that does all the magic automatically.. Maybe its also helpful for you in some situations.

Please consider:

I'm not a DEV :)
- The Scripts works for one service at a time
- The Script works for E1 / E3 / E5 licenses but can easily extend to include other license types
- I write out a LOG file with the detail the script does
- The user list can also be a CSV file

```powershell
# Connect
Connect-MsolService

# Load User List
$UserList = "User1@domain.local","User2@domain.local","User3@domain.local"
$LogFile = "C:\Users\nitz_\LOG\LicenseLog.txt"
# Troubleshoot
#$UserList = "user1@domain.com"
#$User = "user1@domain.com"

ForEach($User in $UserList){
    If (Get-MsolUser -User $User)
    {
        #Variable
        $UserLicense = $Null
        $ChangeLicense = $false

        # Check what License the user has
        $LicensesAssigned = (Get-MsolUser -User $User).Licenses.AccountSkuId
        If ($LicensesAssigned -like "*ENTERPRISEPREMIUM*" -and $LicensesAssigned -notlike "*STANDARDPACK*" -and $LicensesAssigned -notlike "*ENTERPRISEPACK*"){
            Write-Host "User $User has E5"
            $LicenseToActivate = "EXCHANGE_S_ENTERPRISE"
            $UserLicense = "ENTERPRISEPREMIUM"
            $ChangeLicense = $True
            Add-content $Logfile -value "User $User has E5"
        }
        ElseIf($LicensesAssigned -notlike "*ENTERPRISEPREMIUM*" -and $LicensesAssigned -notlike "*STANDARDPACK*" -and $LicensesAssigned -like "*ENTERPRISEPACK*"){
            Write-Host "User $User has E3"
            $LicenseToActivate = "EXCHANGE_S_ENTERPRISE"
            $UserLicense = "ENTERPRISEPACK"
            $ChangeLicense = $True
            Add-content $Logfile -value "User $User has E3"
        }
        ElseIf($LicensesAssigned -notlike "*ENTERPRISEPREMIUM*" -and $LicensesAssigned -like "*STANDARDPACK*" -and $LicensesAssigned -notlike "*ENTERPRISEPACK*"){
            Write-Host "User $User has E1"
            $LicenseToActivate = "EXCHANGE_S_STANDARD"
            $UserLicense = "STANDARDPACK"
            $ChangeLicense = $True
            Add-content $Logfile -value "User $User has E1"
        }
        Else{
            Write-Host "User $User has License mismatch, please check" -ForegroundColor Red
            Add-content $Logfile -value "ERROR -- User $User has License mismatch, please check"
        }


        # Change License
        If($ChangeLicense)
        {
            $DisabledLicenses = @()
                $License = (Get-MsolUser -User $User).Licenses | where{$_.AccountSkuId -like "*$UserLicense*"}
                ForEach($LicenseOption in $License.ServiceStatus){
                    If($LicenseOption.ProvisioningStatus -eq "Disabled"){
                        If($LicenseOption.ServicePlan.ServiceName -eq $LicenseToActivate){
                            Write-Host "Skip disabling License $LicenseToActivate for User $User" -ForegroundColor Green
                        }Else{
                            If($DisabledLicenses -eq $Null){$DisabledLicenses = $LicenseOption.ServicePlan.ServiceName}
                            Else{$DisabledLicenses = $DisabledLicenses + $LicenseOption.ServicePlan.ServiceName}                
                        }
                    }
                }
                Add-content $Logfile -value "User $User has disabled Plans $DisabledLicenses"
                # Assign new License Option
                $LicenseOptions = New-MsolLicenseOptions -AccountSkuId $License.AccountSkuId -DisabledPlans $DisabledLicenses
                Write-Host "Applying License Option to User $User" -ForegroundColor Green
                Set-MsolUserLicense -UserPrincipalName $User -LicenseOptions $LicenseOptions
                Add-content $Logfile -value "User $User assigned new License Option"
        }

    }else{
        Add-content $Logfile -value "ERROR -- User $User NOT FOUND"
    }
}
```

Feel free to use this script or just to take the basic functions and improve it to fulfill your special needs.

Daniel
