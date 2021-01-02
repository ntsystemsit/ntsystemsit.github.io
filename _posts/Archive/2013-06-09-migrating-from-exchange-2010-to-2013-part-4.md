---
layout: post
title: "Migrating from Exchange 2010 to 2013 – part 4"
date: 2013-06-09 17:12:00 +0200
comments: true
category: Archive
tags: ["en", "Exchange"]
redirect_from: ["/post/Migrating-from-Exchange-2010-to-2013-part-4", "/post/migrating-from-exchange-2010-to-2013-part-4"]
author: thomas torggler
---
<!-- more -->
<p>Hello everybody, after thinking about <a href="/post/Migrating-from-Exchange-2010-to-2013-part-1.aspx" target="_blank">installation</a>, <a href="/post/Migrating-from-Exchange-2010-to-2013-part-2.aspx" target="_blank">client access</a> and <a href="/post/Migrating-from-Exchange-2010-to-2013-part-3.aspx" target="_blank">mail routing</a>, we are getting ready to move some mailboxes.</p>
<p>So, we talked about Exchange 2013 CAS being a pretty smart proxy, that&rsquo;s why we had to append ?ExchClientVer=15 to the ECP URL in order to get to the new Admin Center while the Mailbox was still on Exchange 2010. Obviously, once the mailbox gets moved to Exchange 2013 this is no longer required. Another thing that will change as we move mailboxes from Exchange 2010 to 2013 is the Outlook Profile, it does no longer show the RPCClientAccess endpoint as Server, instead it gets updated to show the &lt;Mailbox GIUD&gt;@&lt;Primary SMTP domain&gt;.</p>
<h1>Moving mailboxes</h1>
<h1>&nbsp;</h1>
<p>There are a couple of things to take into consideration before moving mailboxes to the 2013 server. As we learned in part two of this series, it is essential to move the namespaces used by Exchange to the new CAS prior to moving mailboxes, users would not be able to access mailboxes if the names would still point to an Exchange 2010 CAS. Another important check is whether new mailbox servers have been provisioned with enough disk space to accommodate the moved users, and if the properties of the mailbox database, such as ProhibitSendReceiveQuota and OfflineAddressBook have been set to desired values. Assuming that everything is fine, we go ahead and create some move requests, very much the same way as we did in Exchange 2010.</p>
<p>New-MoveRequest &ndash;Identity <a href="mailto:user3@tomt.it">user3@tomt.it</a> &ndash;TargetDatabase mbd01</p>
<p><a href="/assets/archive/image_534.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_532.png" alt="image" width="244" height="40" border="0" /></a></p>
<p>This command moves the mailbox of user3 to the target mailbox database mdb01 which is hosted on Exchange 2013. Like in 2010, the move is performed online, so the user is able to work in his mailbox until the move request is finished. Once the move request completes, the user will be prompted to restart Outlook, this is when the Profile gets updated to show the GUID instead of the server name or RPCClientAccessServer property.</p>
<p><a href="/assets/archive/image_535.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_533.png" alt="image" width="244" height="116" border="0" /></a></p>
<p>Note that this is the users mailbox GUID, as that is the user&rsquo;s unique identifier within the Exchange Organization, it will be different for every user. This GUID is used to locate the active mailbox database copy, in Exchange 2013 all protocols are provided to the user by the server that is hosting the active mailbox database copy.</p>
<h1>Batch moves</h1>
<p>In Exchange 2010 we had the ability to do batch move requests, but it was more like creating many move requests and assigning the same BatchName to them, Get-MoveRequest was used to retrieve information about the move requests. Now Exchange 2013 comes with some new cmdlets that are dealing with batch migrations: *-MigrationBach.</p>
<p>Honestly I do think those new cmdlets are a little complicated, I guess they were primarily introduced to make hybrid or cloud move requests easier, in an on-premises world they might not be that useful. I created a New-MigrationBatch and then started the migration. The first thing we need is a CSV file with a column called EmailAddress, so let&rsquo;s get all users homed on the Exchange 2010 server, and export them to CSV:</p>
<p>Get-Mailbox -Server ex14 | select @{n="EmailAddress";e={$_.PrimarySmtpAddress}} | Export-Csv -NoTypeInformation -Path .\BatchMove.csv</p>
<p>Now we can use this CSV file to create a new MigrationBatch, you see what I mean with a little complicated&hellip;</p>
<p>New-MigrationBatch -Local -Name BatchMove -CSVData ([System.IO.File]::ReadAllBytes(".\BatchMove.csv")) -TargetDatabases mdb01</p>
<p>It&rsquo;s looking like that in PowerShell:</p>
<p><a href="/assets/archive/image_536.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_534.png" alt="image" width="244" height="81" border="0" /></a></p>
<p>Ok, once we have created the MigrationBatch, we can go ahead and start the migration to actually move data over to the new Exchange.</p>
<p>Get-MigrationBatch | Start-MigrationBatch</p>
<p>The Get-MigrationStatistics cmdlet can be used to get information about the ongoing migrations, once all mailboxes are moved, TotalCount and SyncedCount should show the same value. Get-MigrationUser can be used to get information about the individual mailboxes being moved. The Get-MigrationBatch cmdlet includes a Report property containing links to CSV reports about the MigrationBatch.</p>
<p>Note that the Start-MigrationBatch does not complete the move requests, use the Get-MoveRequest cmdlet to show the individual move requests and their state, it will be AutoSuspended. The Complete-MigrationBatch cmdlet is used to complete the move requests:</p>
<p>Get-MigrationBatch | Complete-MigrationBatch</p>
<p><a href="/assets/archive/image_537.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_535.png" alt="image" width="244" height="78" border="0" /></a></p>
<p>If we run the Get-MoveRequest cmdlet again, we will finally see that mailboxes have been moved to Exchange 2013.</p>
<p><a href="/assets/archive/image_538.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_536.png" alt="image" width="244" height="56" border="0" /></a></p>
<p>Since there is not much documentation available, yet, I will stick with the &ldquo;old&rdquo; way and just use New-MoveRequest to move mailboxes for now.</p>
<h1>&nbsp;</h1>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h1>Outlook Profile</h1>
<p>Ok so now that we have migrated our users over to the new Exchange it&rsquo;s time to have a look at Outlook, as mentioned above, the profiles will be updated and no longer show a server name, but it will also be using RPC over HTTP on the internal network:</p>
<p><a href="/assets/archive/image_539.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_537.png" alt="image" width="244" height="99" border="0" /></a></p>
<p>The proxy settings of the Outlook profile is updated, too, it will now select &ldquo;On fast networks, connect using HTTP first&hellip;&rdquo; by default.</p>
<p><a href="/assets/archive/image_540.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_538.png" alt="image" width="244" height="208" border="0" /></a></p>
<p>The AutoDiscover.xml file now contains more information for clients, while Exchange 2010 had the following three Type nodes &lt;EXCH&gt;,&lt;EXPR&gt; and &lt;WEB&gt; the new AutoDiscover.xml contains two &lt;EXHTTP&gt; nodes for internal and external OutlookAnywhere settings.</p>
<p>It is very important to update Outlook to the minimum required version by Exchange 2013 before moving mailboxes, as older Outlook versions will not be able to interpret the new xml file.</p>
<p>Well, and that&rsquo;s it for part four. We do have one big thing left for part five, public folders.</p>
<p>&nbsp;</p>
<p>Stay tuned,</p>
<p>tom</p>
{% include imported_disclaimer.html %}
