---
layout: post
title: "Outlook Autodiscover and what to do when migrating from Exchange 2010 to 2013"
date: 2013-08-15 14:07:00 +0200
comments: true
category: Archive
tags: ["en", "Exchange"]
redirect_from: ["/post/Outlook-Autodiscover-and-what-to-do-when-migrating-from-Exchange-2010-to-2013", "/post/outlook-autodiscover-and-what-to-do-when-migrating-from-exchange-2010-to-2013"]
author: daniel nitz
---
<!-- more -->
<p>Outlook Clients &gt;= 2007 use Autodiscover to detect the connection settings to connect to the Exchange Server.</p>
<p>When a CAS Server is installed, the server hosts a virtual directory in IIS named &ldquo;Autodiscover&rdquo;.</p>
<p><a href="/assets/archive/image_567.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/archive/image_thumb_565.png" alt="image" width="207" height="159" border="0" /></a></p>
<p>Outlook and mobile phones contact this virtual directory and download the autodiscover.xml file if one of the following condition occurs:</p>
<p>- When you configure a mailbox <br />- When the mailbox is already configured but Outlook or the mobile phones is unable to connect to the Exchange server <br />- Outlook contacts periodically the Autodiscover service to update the connection settings if needed</p>
<p>The client discovers and connects to the Autodiscover service in a different way if located internal and external.</p>
<p><strong>If Outlook is external</strong></p>
<p>When the Outlook Client is outside the cooperate network it uses DNS to discover the Autodiscover URL by searching an A Record with autodiscover.domain.com or an SRV record that points to the public name.</p>
<p><strong>If Outlook is internal</strong></p>
<p>When the Outlook Client is inside the cooperate network it searches in AD for a SCP (service connection point) object. The SCP object is an entry for each CAS server in ActiveDirectory that contains the Autodiscover URL. You can check the SCP object by using the cmdlet <strong>Get-ClientAccessServer </strong>or ADSIedit. If you want to update the SCP records, use the cmdlet instead of ADSIedit.</p>
<p><strong>What do I have to do if I&rsquo;m upgrading from Exchange 2010 to 2013?</strong></p>
<p>When you upgrade from Exchange 2010 to 2013 one of the first steps is to make the CAS 2013 internet facing. So clients get the autodiscover.xml file and settings via the Exchange 2013 servers. The CAS knows if the mailbox is hosted on an Exchange 2013 server, then the CAS sends you the settings to connect to the 2013 environment, or on the old 2010, then the CAS sends you the settings to connect to Exchange 2010 (CAS 2013 proxies the requests to 2010).</p>
<p>This is OK for external Clients. But for internal clients connections you have to update the SCP object from the old 2010 Exchange CAS server to point to the new 2013 CAS server. This is necessary because Exchange 2013 servers provide additional AutoDiscover information to clients to improve the discovery process. From this time when internal clients connect to the Autodiscover service they contact every time the 2013 CAS and get the connection settings. <br />You can update the SCP object and so updating the URL by using the cmdlet Set-ClientAccessServer like in the following example:</p>
<p>Set-ClientAccessServer CAS2010SERVER -AutoDiscoverServiceInternalUri <a href="https://cas2013server.domain.local/Autodiscover/Autodiscover.xml">https://cas2013server.domain.local/Autodiscover/Autodiscover.xml</a></p>
<p>Greetings <br />dn</p>
{% include imported_disclaimer.html %}
