---
layout: post
title: "Sending events to Splunk's HTTP Event Collector with PowerShell"
date: 2018-12-02
comments: true
category: PowerShell
tags: PowerShell
author: thomas torggler
date_modified: false
---

Using _Invoke-RestMethod_ to send events to a Splunk instance.

<!-- more -->

## Splunk

If you don't know Splunk this article is not going to give a thorough introduction. Let's just say it's a pretty fancy log collector/analytics tool. According to the company's profile, [Splunk](https://www.splunk.com/) turns machine data into answers. The goal of this article is to demonstrate how to use PowerShell to send events to the HTTP Event Collector which is Splunk's REST interface to ingest logs.

### Enable Event Collector and create API Key (Token)

Connect to your Splunk's web interface with appropriate permissions and using _Settings_, _Data inputs_, click on _HTTP Event Collector_. If you are not already using the Event Collector service it has to be enabled using the _Global Settings_ button in the top right corner.

![splunk-enable]({{ site.url }}/assets/2018/12-02-splunk-enable.png)

Then use the _New Token_ button to create a new API key and configure how Splunk handles data it receives using this token. In the first step, give a name to the token you are about to create.

![splunk-new-token]({{ site.url }}/assets/2018/12-02-splunk-token1.png)

The second step is about handling the data, select an appropriate source type, I use _json_ in this case, and the the right _App Context_. I select the _search_ app for this example, though it can be any installed Splunk app. At the bottom of step two, select the index where Splunk will store the data. If you are not sure which index to use, create a new one. I created an index with the name of _PowerShell_ and assigned it to the _search_ application as selected before.

![splunk-new-token]({{ site.url }}/assets/2018/12-02-splunk-token2.png)

Review the configuration in the last step and create the new token. Take note of the Token Value, you will need it later.

Once the token has been created, you can click on _Start Searching_ and Splunk will automatically create the right search for you. As we have not yet sent data, the search should not return any results.

## PowerShell Send-SplunkEvent

I put together a quick wrapper for _Invoke-RestMethod_ that makes sending logs to Splunk relatively easy. All you need is the API key (Token Value) from above and the URI of your event collector service. For this example I am using a Splunk instance on my local machine, so the Uri is "http://localhost:8088/services/collector", for a production environment, you would probably use _https_ and replace _localhost_ with the name of your instance.

The idea behind the script was to sort through logs from different systems in PowerShell, turn them into structured data and send them to Splunk. As logs originate on systems other than the one where this script runs, the _HostName_ parameter can be used to specify the 'host' property of the event and the _DateTime_ parameter can be used to set the 'time' property.

### Examples and usage

The script has two required parameters, _InputObject_ and _Key_. Use the InputObject parameter to pass an object (or hashtable) to the script. This will be turned into json, using PowerShell's ConvertTo-Json and then sent to the REST API using Invoke-RestMethod.

Use the _Key_ parameter to pass the HTTP Event Collector token that we created above to the script.

```powershell
.\Send-SplunkEvent.ps1 -InputObject @{message="Hello Splunk!";severity="INFO"} -Key <token> 
Get-Service wuauserv | .\Send-SplunkEvent.ps1 -Key <token> -Uri http://localhost:8088/services/collector
```

The first example just sends a custom hashtable with the two fields _message_ and _severity_. The second example gets a service object and converts it into a json object before sending it. 

Note: The _Uri_ parameter defaults to localhost, you will have to specify it like in the second example, if sending to a remote instance.

### Search

Now search for the events in the newly created _PowerShell_ index: `index="powershell" sourcetype=_json` 

![splunk-new-search]({{ site.url }}/assets/2018/12-02-splunk-search.png)

## Performance

As the script is making a new RESTful call for every single event, this is not the fastest way to get logs into Splunk. I have made some tests to compare WindowsPowerSell with the Core edition, here is what I've found:

```powershell
Measure-Command { Get-Process | .\Send-SplunkEvent.ps1 -Key <token> }
```

The above command takes 30 seconds on WindowsPowerShell, while it takes about 280 seconds on Core (tested with 6.1.0 and 6.2.0 preview 2).

{% include psgallery.html packagename="Send-SplunkEvent" type="Script" reponame="PowerShell" %}

Links:

- [Send-SplunkEvent]({{site.url}}/PowerShell/Send-SplunkEvent/)
- [Splunk REST API Reference](https://docs.splunk.com/Documentation/Splunk/7.2.0/RESTREF/RESTinput)
- [PowerShell Invoke-RestMethod](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-restmethod?view=powershell-6)
