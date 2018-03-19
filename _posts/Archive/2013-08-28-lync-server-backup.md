---
layout: post
title: "Lync Server Backup"
date: 2013-08-28 21:37:00 +0200
comments: true
category: Archive
tags: ["en", "Lync", "Skype4B"]
redirect_from: ["/post/Lync-Server-Backup", "/post/lync-server-backup"]
author: thomas torggler
---
<!-- more -->
<p>As with all systems a sound backup and recovery strategy is key when deploying Lync. This post will cover some basic ideas about what (and how) to backup in a Lync Topology. </p>  <p>Lync, being essentially a SIP proxy, does not store a lot of data. It cannot be compared to the likes of Exchange or SQL, systems that are all about storing stuff. With Lync, we need availability, the rest is real time traffic/ presence information, only interesting in the moment when it happens.</p>  <h1>What?</h1>  <p>So what does Lync store then?</p>  <p><strong>Topology, Policies, Configuration</strong> </p>  <p>The topology contains all relevant information about Lync Servers and applications. Once the servers are set up, administrators start configuring voice and client policies, trunk settings and all the other good stuff.</p>  <p>We can export all of this configuration settings using the cmdlet: Export-CsConfiguration.</p>  <p><strong>User Settings, Buddy Lists </strong></p>  <p>After configuring the server side of things it’s time to enable some users for Lync, as the admin does so, configuration about the users, like their RegistrarPool ,SipAddress and LineUri are saved within the Lync system. Once the user logs on and starts to add contacts to their buddy list, those get stored on the Lync Servers as well.</p>  <p>We can export all of this information using the cmdlet: Export-CsUserData</p>  <p><strong>Response Group</strong></p>  <p>If Lync Response Groups are configured there is some configuration information to store for them as well. This can be exported using the cmdlet: Export-CsRGSConfiguration</p>  <p><strong>Location Service</strong></p>  <p>The same idea applies to the Location Services, if configured, the configuration can be exported using the cmdlet: Export-CsLisConfiguration</p>  <p><strong>Lync File Store</strong></p>  <p>Sure enough, the Lync file store needs to be included in the backup plan as well. This is not stored inside Lync, it typically resides on a highly available fileserver.</p>  <p>Now if that external fileserver is backed up regularly, just make sure it is included in your backup/recovery documentation and try to restore it regularly. If it is not included in existing backup strategies consider using robocopy.</p>  <p><strong>Monitoring and Archiving Data</strong></p>  <p>Monitoring and Archiving data are not really stored inside Lync, either. Data is stored within the LcsCDR, QoEMetrics and LcsLog databases on a SQL server. There are no Lync tools available to backup this data, it is typically backed up using existing backup software for SQL or through SQL Management Studio.</p>  <p>As with the Lync file store, make sure to include backup/restore dependencies and scenarios in the Lync documentation.</p>  <p><strong>Persistent Chat Data</strong></p>  <p>Lync 2013 introduced the persistent chat feature, now for the first time we really do store instant messages and attachments sent by users.</p>  <p>Data is stored within the Persistent Chat Database and can be exported using the cmdlet: Export-CsPersistentChatData. If existing backup software for SQL is available, the persistent chat database is typically backed up like any other application database.</p>  

# How?

Now that we know what there is to backup, let’s have a look at how. I did point out the Export-* cmdlets and they’re the tool of choice for backing up Lync configuration information and settings.

> Note: The account used to run the Export-* cmdlets needs to be member of the RTCUniversalServerAdmins group.

I’ve come up with a quick script that invokes the mentioned Export-* cmdlets. The script can be found on my [Github](https://github.com/tomtorggler/PowerShell/blob/master/New-SfBBackup.ps1).

Find more information about the script on the [help page]({{site.baseurl}}/PowerShell/New-SfBBackup/).

Tom

{% include imported_disclaimer.html %}
