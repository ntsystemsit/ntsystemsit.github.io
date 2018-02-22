---
layout: post
title: "Testing Exchange Web Services with PowerShell"
date: 2018-02-17 19:25:06 +0200
comments: true
category: PowerShell
tags: PowerShell Exchange Office365
author: thomas torggler
---

When dealing wiht Exchange Servers I often need to check if the web services are running on a given machine, if the correct records have been published for a given domain or compare Autodiscover responses from different machines.  Like I did for Skype for Business / Lync, I wrote a quick PowerShell function to help me with this task. The function is available through my [TAK Module]({{ site.url }}/PowerShell/TAK/)

<!-- more -->

The best way to check Exchange functionality is obviously the [Remote Connectivity Analyzer](https://testconnectivity.microsoft.com/). I wrote this tool for the fun of it, and because I want to be able check certain endpoints directly, without relying on DNS.

# Autodiscover

The first function I added to the module, is _Test-ExchangeAutodiscover_. As the name implies, it can be used to test the autodiscover reply for a given mailbox. The function uses the following logic to find and query autodiscover records. It also has a _ComputerName_ paramater that can be used to test a specific server, skipping the DNS lookups.

This [support article](https://support.microsoft.com/en-us/help/3211279/outlook-2016-implementation-of-autodiscover) explains the Autodiscover implementation of Outlook 2016. I ignored SCP records and information from local XML files or registry keys, as my main interest is to check whether or not the webserivces on a certain Exchange Server are working. So skipping the metioned sources, it came down to the following list:

1. Office 365: https://autodiscover-s.outlook.com/autodiscover/autodiscover.xml 

 - The first test is to verify if the mailbox is on Office 365. Can be disabled with the _ExcludeExplicitO365Endpoint_ group policy.

3. Root Domain query: https://<domain>/autodiscover/autodiscover.xml 

4. Autodiscover Domain query: https://autodiscover.<domain>/autodiscover/autodiscover.xml 

6. HTTP Redirect: Check the Autodiscover domain for HTTP redirect. Can be disabled with the _ExcludeHttpRedirect_ group policy.

 - Note: Any Autodiscover payload retrieved over HTTP is discarded! The HTTP probe only looks for a redirect (301, 302)

7. SRV Record query: https: _autodiscover._tcp.<domain name>

 - Outlook tries to get an Autodiscover payload from the first service entry using HTTPS.


