---
layout: post
title: "Deploying Labs using Azure Resource Manager"
date_modified: 2021-01-12 17:25:06 +0200
tags: ["en", "Azure", "Cisco"]
redirect_from: ["/post/Deploying-Labs-using-Azure-Resource-Manager", "/post/deploying-labs-using-azure-resource-manager"]
author: tto
---

I did a demo of Cisco CSR 1000v on Azure the other day and the easy deployment of a small test-network was part of that demo.<!-- more --> I really enjoyed deploying the lab using ARM templates, so why not share the love?  

## So what's ARM?

Azure Resource Manager is the "new" deployment model for all kinds of resources within Azure. The great thing about it is, that it works with template and parameter files, so we can easily prepare an environment and deploy it over and over again, with either the same or different parameters. 

## CSR 1000v?

That's what the customer wanted to see and why I got do a demo on Azure in the first place. Cisco provides images in the Azure Marketplace (<a href="https://azure.microsoft.com/en-us/marketplace/">https://azure.microsoft.com/en-us/marketplace/</a>) so that customers can run a fully featured IOS XE router in the cloud. 

## The Lab network

So as mentioned above, i wanted to demo the setup of a quick lab along with the CSR, having only the router and no endpoints to connect to, doesn't make to much sense. I used the Azure Resource Manager to create a new resource group and a new virtual network with two subnets. One of which would be CSR's "public" facing subnet (with a Public IP associated) the other one was my "backend" network for cloud workloads (without Public IPs). A Nano Server was quick to deploy and provided the "backend" for my lab. 

<a href="/assets/archive/image_743.png"><img title="image" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; margin: 0px; display: inline; padding-right: 0px" border="0" alt="image" src="/assets/archive/image_thumb_741.png" width="228" height="244"></a> <h1>The template</h1> 

I did use Visual Studio to modify and adapt the ARM template to my needs, but really any "json"-capable text editor/ISE can be used.  

The template consists of two files, the template itself and a file for parameters. In my case, I did use the parameter file just for the passwords of the CSR and the Nano Server, the other parameters are assigned directly in the template file. There is room for improvement in this case, as the template would be more flexible if it had less "hardcoded" information.  

The template specifies how the virtual network, subnets and eventually the CSR and Nano Servers should be deployed. 

## Deploy

Once ready, the template can be be deployed to any Azure Subscription using a number of methods: One can deploy directly from Visual Studio or PowerShell or even from the cross-platform CLI on a Mac. 

### Using PowerShell

First, we have to create a Resource Group to which the template will be deployed: 

```powershell
$RGName = 'rg-tomt-lab' 
$RGLocation = 'westeurope' 
New-AzureRmResourceGroup -Name $RGName -Location $RGLocation 
```

Then we prepare a variable which specifies the resource group, the template file and the parameters file. 

```powershell
$Params = @{ 
    'ResourceGroupName' = $RGName
    'TemplateFile' = 'C:\azure\azure_arm_csr_nano_template.json'
    'TemplateParameterFile' = 'C:\azure\azure_arm_csr_nano_parameters.json' 
}
```

Using the Test-* cmdlet we can simulate deployment and verify that all checks out: 

```powershell
Test-AzureRmResourceGroupDeployment @Params -Verbose
```

And if everything looks good, we can go ahead and finally create the deployment: 

```powershell
New-AzureRmResourceGroupDeployment @Params -Verbose
```

### Using the xPlat CLI

Almost the same thing can be be done using the cross-platform CLI, which is what I use on my Mac. 

Create a Resource Group: 

```
azure group create -n rg-csr-lab -l "West Europe"
```

Deploy the template 

```
azure group deployment create -f azure_arm_csr_nano_template.json -e azure_arm_csr_nano_parameters.json -g rg-csr-lab -n CSR01
```

Find the template, parameters file and more detailed information for deployment at my GitHub: <a href="https://github.com/tomtorggler/Azure">https://github.com/tomtorggler/Azure</a> 

So, once the template is prepared, deployment is just a piece of cake! That’s how deploying labs just got a lot quicker, don’t you think? 

Enjoy,

&mdash; Tom
