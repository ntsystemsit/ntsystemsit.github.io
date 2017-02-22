---
layout: post
title: "Get started with Azure ARM Templates"
date: 2017-02-20 19:25:06 +0200
comments: true
category: Azure
tags: Azure RM
author: daniel nitz
---

To start with the deployment using Azure ARM Templates is quite easy. A first step can be to deploy an Azure SQL Database. But let’s start with a bit of background information:

# Templates

We can create a template (in JSON format) that defines and configures the Azure solution. When we create a solution from the portal, the solution automatically includes a deployment template. So, we don’t have to create our template from scratch but we can download the templates for the existing deployments. 
To get the templates open the "Resource Group" section in the Azure Portal and click on Deployments

![ARM]({{ site.url }}/assets/2017/2017-02-22 09_25_52-rg_z2010 - Microsoft Azure.png)

Click on "View Templates"

![ARM]({{ site.url }}/assets/2017/2017-02-22 09_28_44-SQLDatabase - Microsoft Azure.png)

What we can see now is the Template and Parameter file. When we start a new deployment, we have to define parameters for the resource template, these needs to be entered in before the deployment can start. 

![ARM]({{ site.url }}/assets/2017/2017-02-22 09_30_14-Template - Microsoft Azure.png)

You can find other ARM templates on the following [Website](https://azure.microsoft.com/en-us/resources/templates/)

# Deployment

We are going to deploy a new SQL Database, so my template looks like this:

```powershell
{
    "$schema": "http://schema.management.azure.com/schemas/2014-04-01-preview/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "collation": {
            "type": "String"
        },
        "databaseName": {
            "type": "String"
        },
        "edition": {
            "type": "String"
        },
        "requestedServiceObjectiveId": {
            "type": "String"
        },
        "maxSizeBytes": {
            "type": "String"
        },
        "serverName": {
            "type": "String"
        },
        "serverLocation": {
            "type": "String"
        },
        "diagnosticStorageAccountId": {
            "defaultValue": "",
            "type": "String"
        },
        "diagnosticsTemplate": {
            "defaultValue": "",
            "type": "String"
        },
        "sampleName": {
            "defaultValue": "",
            "type": "String"
        }
    },
    "resources": [
        {
            "type": "Microsoft.Sql/servers/databases",
            "name": "[concat(parameters('serverName'), '/', parameters('databaseName'))]",
            "apiVersion": "2014-04-01-preview",
            "location": "[parameters('serverLocation')]",
            "properties": {
                "collation": "[parameters('collation')]",
                "edition": "[parameters('edition')]",
                "maxSizeBytes": "[parameters('maxSizeBytes')]",
                "requestedServiceObjectiveId": "[parameters('requestedServiceObjectiveId')]",
                "sampleName": "[parameters('sampleName')]"
            }
        }
    ]
}
```

Let's focus on the parameter file that specifies the deployment. It should look like this:

```powershell
{
    "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentParameters.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "collation": {
            "value": "SQL_Latin1_General_CP1_CI_AS"
        },
        "databaseName": {
            "value": "Database3"
        },
        "edition": {
            "value": "Basic"
        },
        "requestedServiceObjectiveId": {
            "value": "dd6d99bb-f193-4ec1-86f2-4fe4rscbc49c"
        },
        "maxSizeBytes": {
            "value": "2147483648"
        },
        "serverName": {
            "value": "sqllogicalz2010"
        },
        "serverLocation": {
            "value": "westeurope"
        },
        "diagnosticStorageAccountId": {
            "value": ""
        },
        "diagnosticsTemplate": {
            "value": ""
        },
        "sampleName": {
            "value": "AdventureWorksLT"
        }
    }
}
```

I modified that Database Name because I want my new Database called "Database3". Lets save both files to the local machine (or GitHub if you want). Name the template file NewSQLDatabase.json and the parameter file Parameter-NewSQLDatabase.json.

The deployment is now ready for deploying. Lets fire up Powershell and push the change to Azure. First we have to connect to the Azure Account and select our subscription

```powershell
# Connect to Azure RM Account
Login-AzureRmAccount

# Select Azure RM Subscription
Select-AzureRmSubscription -SubscriptionId c2a12a42-0179-*************
```

With the "New-AzureRmResourceGroupDeployment" cmdlet we start the deployment process using our template and parameter file. 

```powershell
# ARM Template SQL Database
New-AzureRmResourceGroupDeployment -Name SQLDatabase -ResourceGroupName rg_Z2010 -TemplateFile "F:\Templates\SQL Database\NewSQLDatabase.json" -TemplateParameterFile "F:\Parameters\SQL Database\Parameter-NewSQLDatabase.json"
```

After we executed the command we should see similar output and the Database is running on Azure :)

![ARM]({{ site.url }}/assets/2017/2017-02-22 10_45_54-Azure_ ARM Template erstellen - OneNote.png)


<!-- more -->

Stay tuned for further posts
Daniel

