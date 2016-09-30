---
layout: post
title: "Exchange 2013 clean install but many MSExchange Common 106 errors"
date: 2013-05-23 20:07:00 +0200
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["en", "Exchange"]
alias: ["/post/Exchange-2013-clean-install-but-many-MSExchange-Common-106-errors.aspx", "/post/exchange-2013-clean-install-but-many-msexchange-common-106-errors.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p><strong>Update:</strong> 09.06.2013 Updated the PowerShell script and some additional information about event logs. /tom</p>
<p>Today I installed 4 Exchange 2013 servers. All of them have many &ldquo;MSExchange Common&rdquo; 106 errors in the Application Log indicating&nbsp;that Performance Counters could not be updated:</p>
<p>Performance counter updating error. Counter name is LDAP Queries Issued by Expanded Groups., category name is Expanded Groups Cache. Optional code: 3. Exception: The exception thrown is : System.InvalidOperationException: The requested Performance Counter is not a custom counter, it has to be initialized as ReadOnly</p>
<p>The problem is that the performance counters are not registered correctly. I wrote a simple script to re-register all the Exchange 2013&nbsp;performance counters. Now the Application log looks much better <img class="wlEmoticon wlEmoticon-smile" src="/assets/wlEmoticon-smile_2.png" alt="Smiley" /></p>
<p>First open Powershell in Admin Mode, then execute the following code:</p>
<script type="text/javascript" src="http://PoshCode.org/embed/4196"></script>
<p>Note that New-PerfCounters actually deletes and re-creates the performance counter, there is no need to use Remove-PerfCounters first. The script might throw some errors if performance counters cannot be created or files are invalid, other than that no information is displayed, no news is good news, I guess ;) For more information check the Application Log of the server, two events are logged for every performance counter. Event ID 1001 indicates that the counter has been removed, while Event ID 1000 is logged as soon as the counter has been loaded again.</p>
<p>If an antivirus software is running on the server, it could be disabled temporarily to improve performance.</p>
<p>Special thanks to <a href="https://twitter.com/msxfaq" target="_blank">@msxfaq</a>&nbsp;:)</p>
<p>&nbsp;</p>
<p>Greetings <br />nd</p>
