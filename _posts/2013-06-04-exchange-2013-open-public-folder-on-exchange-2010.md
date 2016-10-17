---
layout: post
title: "Exchange 2013, Open Public Folder on Exchange 2010"
date: 2013-06-04 20:41:00 +0200
comments: true
category: Archive
tags: ["en", "Exchange"]
redirect_from: ["/post/Exchange-2013-Open-Public-Folder-on-Exchange-2010", "/post/exchange-2013-open-public-folder-on-exchange-2010"]
author: daniel nitz
---
<!-- more -->
<p>You may notice that with the Exchange 2013 defualt settings on Outlook Anywhere you are unable to open public folders located on you &ldquo;old&rdquo; Exchange 2010 server. You get an authentication pop up and the following error:</p>
<p><a href="/assets/archive/image_531.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_529.png" alt="image" width="244" height="33" border="0" /></a></p>
<p>Microsoft has released a KB (<a href="http://support.microsoft.com/kb/2834139/en-us">http://support.microsoft.com/kb/2834139/en-us</a>) article how to get that work.</p>
<p>Simply change your Outlook Anywhere settings to use internal and external NTLM with requirement of SSL:</p>
<p>Get-OutlookAnywhere &ndash;server ex01 | Set-OutlookAnywhere -ExternalClientAuthenticationMethod NTLM -InternalClientAuthenticationMethod NTLM -ExternalClientsRequireSsl $true -InternalClientsRequireSsl $true</p>
<p><a href="/assets/archive/image_530.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_528.png" alt="image" width="244" height="62" border="0" /></a></p>
<p>The next time the client gets the Autodiscover File, it sets the Logon Network Security Settings of the Outlook Profile from &ldquo;<strong>Anonymous Authentication&rdquo; </strong>to &ldquo;<strong>Negotiate Authentication</strong>&rdquo; and you can open the public folders located on Exchange 2010.</p>
<p><a href="/assets/archive/image_532.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_530.png" alt="image" width="187" height="244" border="0" /></a></p>
<p>Greetings <br />dn</p>
{% include imported_disclaimer.html %}
