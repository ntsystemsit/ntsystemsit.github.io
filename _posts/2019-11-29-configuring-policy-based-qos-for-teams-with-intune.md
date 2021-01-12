---
layout: post
title: "Configuring policy-based QoS for Teams with Intune"
date: 2019-11-29 20:12:06 +0200
comments: true
category: Cloud
tags: Workplace Intune Teams 
author: tto
date_modified: 2020-08-14
---

Traditional Active Directory with group policy has no place in the big-picture of the modern workplace, so we need a novel solution to apply policy-based QoS to our Teams clients.<!-- more --> One could argue that QoS has no place in the modern workplace either, but that's a discussion for another day.

## Configuration Service Provider

So a CSP or configuration service provider is pretty much exactly what everyone with some traditional enterprise IT background would expect from a group policy object, but delivered from the cloud and, at least in theory, applicable to various types of devices. According to Microsoft Docs it is "an interface to read, set, modify, or delete configuration settings on the device. These settings map to registry keys or files." 

You can find a link to the CSP reference below.

## NetworkQoSPolicy CSP 

Now it turns out there is a CSP for policy-based QoS but it just applies to Surface Hub devices. If you're lucky enough to configure QoS on such a device, here is a screenshot of the settings you will most likely use. 

> The port numbers may be different in your environment.
{:title="Warning"}

{% include img.html img="/assets/2019/11-29-01.png" %}

## MSFT_NetQosPolicySettingData

So here we are trying to configure QoS settings on our Windows 10 clients but CSPs are of no great help. Luckily we can use PowerShell to configure policy-based QoS and Intune provides an easy way to deploy PowerShell scripts to our clients.

To configure Windows 10 to tag packets sent by the Teams.exe and on the configured source ports for each modality, we could use three simple commands like in the example below:

```powershell
New-NetQosPolicy -NetworkProfile All -AppPathNameMatchCondition Teams.exe -IPSrcPortStartMatchCondition 50020 -IPSrcPortEndMatchCondition 50039 -DSCPValue 46 -Name "Teams Audio"
New-NetQosPolicy -NetworkProfile All -AppPathNameMatchCondition Teams.exe -IPSrcPortStartMatchCondition 50400 -IPSrcPortEndMatchCondition 50059 -DSCPValue 34 -Name "Teams Video" 
New-NetQosPolicy -NetworkProfile All -AppPathNameMatchCondition Teams.exe -IPSrcPortStartMatchCondition 50069 -IPSrcPortEndMatchCondition 50070 -DSCPValue 28 -Name "Teams AppSharing"
```

You can find a link to the cmdlet reference for `New-NetQosPolicy` below.

Save the above commands to a file with ps1 extension and head over to [endpoint.microsoft.com](https://endpoint.microsoft.com/#blade/Microsoft_Intune_DeviceSettings/DevicesMenu/powershell). Create a new script for Windows 10, upload the the ps1 file and set it to run in system context and using the 64 bit PowerShell host. Now assign the script to a group that contains your devices.

{% include img.html img="/assets/2020/08-14 223129.png" %}

Once the script was applied you can use `Get-NetQosPolicy` to verify the policies were applied correctly.


## Teams Meeting Settings

For the above configuration to make any sense, we first have to specify a port range for each modality in the Microsoft Teams admin center.

You can find a link to the Teams admin center below.

The following screenshot shows an example configuration where a distinct port range is used for each type of traffic, this allows us to distinguish the traffic types and apply different DSCP tags using policy-based QoS.

{% include img.html img="/assets/2019/11-29-02.png" %}

Special thanks to Mr. Workplace Expert [Dave Wenger](https://twitter.com/WengerDave)! Check out his blog in the links below.

## Links
 - [Configuration service provider reference](https://docs.microsoft.com/en-us/windows/client-management/mdm/configuration-service-provider-reference)
 - [New-NetQosPolicy](https://docs.microsoft.com/en-us/powershell/module/netqos/new-netqospolicy)
 - [Microsoft Teams admin center](https://admin.teams.microsoft.com/meetings/settings)
 - <https://blog.contoso-bern.ch/>
