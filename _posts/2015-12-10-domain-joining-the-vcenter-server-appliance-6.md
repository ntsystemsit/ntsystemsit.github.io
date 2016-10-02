---
layout: post
title: "Domain-joining the vCenter Server Appliance 6"
date: 2015-12-10 18:42:00 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["en", "Server", "VMware"]
redirect_from: ["/post/Domain-joining-the-vCenter-Server-Appliance-6", "/post/domain-joining-the-vcenter-server-appliance-6"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>In <a href="/post/getting-started-with-vcenter-server-appliance-6.aspx">this post</a>, we started out by deploying the VCSA to a new environment, today we'll see how to join the VCSA to an Active Directory domain and authenticate using domain accounts.
</p><p>&nbsp;
&nbsp;</p><p><span style="color:#1e4e79; font-size:16pt">Prepare
</span></p><p>To join a domain we need the distinguished name of the organizational unit where we want the VCSA's computer object to be created, as well as an account with the required permissions to join a machine to the domain.
</p><p>To get the DN use your tool of choice, like PowerShell: 
</p><p style="margin-left: 27pt">Get-ADOrganizationalUnit -Filter {Name -like "servers"} | Select-Object -ExpandProperty DistinguishedName 
</p><p>&nbsp;
&nbsp;</p><p>Before joining the vCenter Server Appliance to the domain, make sure DNS is working perfectly, that includes reverse lookup.
</p><p>&nbsp;
&nbsp;</p><p><span style="color:#1e4e79; font-size:16pt">Join
</span></p><p>Now sign-in to the vCenter using the local SSO domain created during setup and go to Administration/System Configuration/Nodes. Select the VCSA from the list of Nodes and in the right pane, go to Manage/Active Directory and click the "Join" button on the right.
</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/120315_1941_Domainjoini1.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p>&nbsp;
&nbsp;</p><p>Specify the domain name and DN of the organizational unit as well as the credentials to use.
</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/120315_1941_Domainjoini2.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p>After joining the domain, a restart is required. To perform a restart, either use SSH or use the "Reboot" button in the "Actions" menu.
</p><p>&nbsp;
&nbsp;</p><p>Once the VCSA is restarted we can see that a Computer object has been created in AD. Now we log-in again, still using the local account, and go to Administration/Configuration where we select "Identity Sources" in the right pane, using the "+" button, add a new Identity Source. 
</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/120315_1941_Domainjoini3.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p><span style="color:#1e4e79; font-size:16pt">Configure Permissions
</span></p><p>Once the Identity Source has been added, we can configure roles and permissions for AD accounts. This can be done using Administration/Global Permissions. Using the "+" button, we assign an AD user or group to a vCenter Role.
</p><p><img src="/assets/120315_1941_Domainjoini4.png" alt=""></p><p><img src="/assets/120315_1941_Domainjoini5.png" alt="">&nbsp;&nbsp;</p><p>Alternatively, we can add AD users or groups to the preconfigured groups that can be found in the "Single Sign-On" section of the Administration menu.
</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/120315_1941_Domainjoini6.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p><span style="color:#1e4e79; font-size:16pt">Verify 
</span></p><p>Finally we can log-out of the local admin account and log-in using our AD user, which should be able to access resources, as specified by the assigned roles. Note: Users with no assigned roles will also be able to log-in, obviously they won't see any objects.
</p><p>&nbsp;
&nbsp;</p><p><span style="color:#1e4e79; font-size:16pt">Troubleshoot
</span></p><p>Now if some of the steps don't work, for example you cannot log-in or you cannot access AD users or groups in the configuration, double-check DNS and have a look at the following log files:
</p><p style="margin-left: 27pt">/var/log/vmware/sso/vmware-sts-idmd.log&nbsp;
</p><p style="margin-left: 27pt">/storage/log/vmware/sso/ssoAdminServer.log
</p><p style="margin-left: 27pt">
&nbsp;</p><p>I got "Cannot load the users for the selected domain" in the Web Client and found the &nbsp;following lines in the above mentioned logs:
</p><p>
&nbsp;</p><p>Failed to get non-GC connection to domain
</p><p>com.vmware.identity.idm.IDMException: Failed to establish server connection
</p>
