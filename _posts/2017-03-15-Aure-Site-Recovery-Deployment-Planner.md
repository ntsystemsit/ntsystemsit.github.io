---
layout: post
title: "Azure Site Recovery Deployment Planner"
date: 2017-03-15 20:25:06 +0200
comments: true
category: Azure
tags: Azure ASR
author: daniel nitz
---

Today I was super excited about the first tests with the Azure Site Recovery Deployment Planner. Sometimes calculating the Bandwidth, Storage, local infrastructure needed for Site Recovery can be very tricky. Therefore, I’m happy that Microsoft released a helpful tool to get the right information needed. 

<!-- more -->

The planner is a command-line tool in public preview for VMWare only, so the final version is not completed yet. Profiling the environment can be done remotely, so no agents or pieces of software on ESX Server or vCenter is needed. 
The planner provides following details:
-	Compatibility assessment
-	Network bandwidth need versus RPO assessment
-	Azure infrastructure requirements
-	On-premises infrastructure requirements

# Requirements

The planner needs following components:
-	Windows Server 2012 R2
-	.Net Framework 4.5
-	VMware vSphere PowerCLI 6.0 R3
-	Microsoft Visual C++ Redistributable for Visual Studio 2012
-   Microsoft Excel

# Profiling

First of all, we have to start profiling the VM’s that we want to protect with Azure ASR. The tool connects to the vCenter server (or ESX) to collect performance data. There is no performance impact on the VM’s because the performance data of the vCenter is taken and no data from inside the VM. The tool basically queries every 15 minutes the vCenter to get the performance data.

As first step we create a VM list with VM’s we want to profile. Connect to the vCenter with the VMWare CLI:

```powershell
Connect-VIServer -Server
```

Export the list of all VM’s to a Text File

```powershell
Get-VM |  Select Name | Sort-Object -Property Name >  C:\Service\Output.txt
```

You should get a list like this. I deleted the not needed VM's from the Textfile and saved the changes.

![TextFile]({{ site.url }}/assets/2017/2017-03-15 20_36_34-Azure DR_ Depoloyment Planner - OneNote.png)

Now we are ready to start profiling. Microsoft recommends to profile at least 15 days. In our test we will profile 24 hours. From a Powershell window we can start profiling with the following command:

```powershell
.\ASRDeploymentPlanner.exe -Operation StartProfiling -Directory “C:\vCenter1_ProfiledData” -Server vCenter1.FQDN -VMListFile “C:\Service\Output.txt” -NoOfDaysToProfile 0.04 -User vCenterUser1
```

A complete list of all switches can be seen [here](https://docs.microsoft.com/en-us/azure/site-recovery/site-recovery-deployment-planner).

If you see following output in powershell you are all right. In my case, there are some VM’s not running and therefore a warning is displayed because the tool can obviously not collect performance data.

![PowerShellOutput]({{ site.url }}/assets/2017/2017-03-15 20_44_10-Azure DR_ Depoloyment Planner - OneNote.png)

# Generate report

After profiling is completed we can see that the tool created some performance CSV Files:

![Explorer]({{ site.url }}/assets/2017/2017-03-15 20_46_15-Azure DR_ Depoloyment Planner - OneNote.png)

Now we can run the tool in report-generation mode to get the report

```powershell
.\ASRDeploymentPlanner.exe -Operation GenerateReport -Server vCenter1.FQDN -Directory “C:\vCenter1_ProfiledData” -VMListFile “C:\Service\Output.txt”
```

A complete list of all switches can be seen [here](https://docs.microsoft.com/en-us/azure/site-recovery/site-recovery-deployment-planner).

The report is named as "DeploymentPlannerReport" and can be opened with Excel.

![Report]({{ site.url }}/assets/2017/2017-03-15 20_49_42-DeploymentPlannerReport_63625173741434777714.xlsm - Excel.png)

What we can see from the Excel Report is basically the number of profiled, compatible and incompatible VM’s. If we click on details, we can get the name of the not compatible VM. In my case a VM’s has a Disk with 10TB VMDK attached. (Azure has a limit of 1TB per disk).

![Report]({{ site.url }}/assets/2017/2017-03-15 21_26_43-DeploymentPlannerReport_63625173741434777714.xlsm - Excel.png)

I selected in the right corner a desired RPO with 15 minutes. Based on this value the report start calculating the Mbit/s needed.

In the Required Network Bandwidth section there are 3 graphs:

![Report]({{ site.url }}/assets/2017/2017-03-15 21_28_11-DeploymentPlannerReport_63625173741434777714.xlsm - Excel.png)

-   To meet RPO 100 percent of the time: The recommended bandwidth in Mbps to be allocated to meet the desired RPO 100 percent of the time. 
-   To meet RPO 90 percent of the time: If we cannot set the bandwidth needed to meet your desired RPO 100 percent of the time, we can choose to go with a lower bandwidth setting that can meet a desired RPO 90 percent of the time. 
(In my case 100 and 90 RPO are both 2 Mbit.. maybe there is still a bug with the calculation. Because the tool is in preview I guess this will be fixed before GA)
-   Achieved Throughput: This is the real Throughput that can be measured with the following command: 

```powershell
ASRDeploymentPlanner.exe -Operation GetThroughput
```

In my case this is $Null because I have to change the QoS rules and didn’t execute the test acutally.

Based on the storage activity the planner recommends the storage accounts needed. I have one VM with heavy storage operations that needs Premium disks (SSD).

![Report]({{ site.url }}/assets/2017/2017-03-15 21_28_02-DeploymentPlannerReport_63625173741434777714.xlsm - Excel.png)

Very interesting is the recommendation about the local infrastructure. In my case, only one server is needed to replicate the VM’s to Azure.

![Report]({{ site.url }}/assets/2017/2017-03-15 21_29_12-DeploymentPlannerReport_63625173741434777714.xlsm - Excel.png)

The WhatIf Graph shows what would happen if we decide to use a throughput to meet 90% of the RPO. Actually, I don’t fully understand the sense of the graph. Helpful would be to choose the bandwidth in a combo box or something similar and then see what happens.

![Report]({{ site.url }}/assets/2017/2017-03-15 21_30_24-DeploymentPlannerReport_63625173741434777714.xlsm - Excel.png)

In the Recommended VM batch size for initial replication section, Microsoft shows the recommendation of number of VMs that can be protected in parallel to complete the initial replication within 72 hours with the suggested bandwidth to meet desired RPO 100 percent of the time being set. The value can be changed using the GoalToCompleteIR parameter during report generation.

![Report]({{ site.url }}/assets/2017/2017-03-15 21_33_38-DeploymentPlannerReport_63625173741434777714.xlsm - Excel.png)

Let’s switch to the “Input” Tab in Excel. Here we can see some very interesting values. The most interesting values for me is: Total Data to be replicated for initial replication

![Report]({{ site.url }}/assets/2017/2017-03-15 21_41_57-DeploymentPlannerReport_63625173741434777714.xlsm - Excel.png)

# Conclusion

Some things don’t work as expected. But we have to consider that the tool is in public preview, so many changes and improvements are expected. Stay tuned for further updates.

Daniel

