---
layout: post
title: "Patching Office Web Apps Server"
date: 2013-03-28 17:36:00 +0100
comments: true
category: Archive
tags: ["Server"]
redirect_from: ["/post/Patching-Office-Web-Apps-Server", "/post/patching-office-web-apps-server"]
author: thomas torggler
---

<!-- more -->

Today I started my day with an Office Web Apps Farm that was not working anymore. After reviewing the Event Log I figured something strange happened… :)

<a href="/assets/archive/image_499.png"><img title="image" style="border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px; display: inline" border="0" alt="image" src="/assets/archive/image_thumb_497.png" width="244" height="158" /></a> 

The Event Log was basically full with .Net Runtime and Application Errors, I’ll paste some for reference:

```
Log Name: Application
Source: .NET Runtime
Event ID: 1026
Application: ppteditingbackendwatchdog.exe
Framework Version: v4.0.30319
Description: The process was terminated due to an unhandled exception.
Exception Info: System.TypeInitializationException
Stack:
&#160;&#160; at Microsoft.Office.Web.Common.ServiceInstanceFinder.GetLocalAgentInstance(Microsoft.Office.Web.Common.OfficeServiceType)
&#160;&#160; at Microsoft.Office.Web.Common.WatchdogHelper.PrepareRegistrations(Microsoft.Office.Web.Common.OfficeServiceType)
&#160;&#160; at Microsoft.Office.Web.Common.WatchdogHelper.WatchMachines(Microsoft.Office.Web.Common.OfficeServiceType, CheckServiceInstance, Microsoft.Office.Web.Common.OfficeServiceType, System.String)
&#160;&#160; at Microsoft.Office.Server.Powerpoint.Watchdog.EditingBackend.Program.Main(System.String[])
...
Log Name: Application
Source: Application Error
Event ID: 1000
Faulting application name: ppteditingbackendwatchdog.exe, version: 15.0.4481.1000, time stamp: 0x50ee5a9e
Faulting module name: KERNELBASE.dll, version: 6.2.9200.16451, time stamp: 0x50988aa6
Exception code: 0xe0434352
Fault offset: 0x000000000003811c
Faulting process id: 0x94c
Faulting application start time: 0x01ce2b83409e789a
Faulting application path: C:\Program Files\Microsoft Office Web Apps\PowerPointEditingServicesWatchdog_App\ppteditingbackendwatchdog.exe
Faulting module path: C:\Windows\system32\KERNELBASE.dll
Report Id: 7e88e5ec-9776-11e2-93f3-0050569e79e3
Faulting package full name:
Faulting package-relative application ID: 
```

There would be the same errors for all of the Web Apps (Excel, Word...) Needless to say, neither SharePoint 2013 nor Lync 2013 would be able to leverage features that required Web Apps Server. So, what’s next? 

Well I continued digging through the Event Log and realized that the Server was patched and restarted very recently, as part of the patching someone applied [KB2760445]("http://www.microsoft.com/en-us/download/details.aspx?id=36981" target="_blank"). Sweet.

So I started searching TechNet for information on that Update for Office Web Apps and found a nice article on how to [Apply software updates to Office Web Apps Server]("http://technet.microsoft.com/en-us/library/jj966220.aspx"). Basically it goes like this: After patching the Server, you will have to re-create the Office Web Apps Farm. In my case, I simply removed the farm using

```
Remove-OfficeWebAppsMachine
```

and then re-used the same cmdlet I used to [create the Web Apps Farm](/post/office-2013-web-apps) initially.

```
New-OfficeWebAppsFarm -InternalUrl "https://myOWAserver.tomt.local" -ExternalUrl "https://office.ntsystems.it" –CertificateName "ntSystems OfficeWebApps" –EditingEnabled
```

All set.

If there is one take-away from this, it is very likely: Read that documentation, oh, and please, do test!

Tom

{% include imported_disclaimer.html %}
