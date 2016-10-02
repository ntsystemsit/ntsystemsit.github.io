---
layout: post
title: "ActiveSync, ForeFront TMG and AccountLockoutThreshold"
date: 2013-02-25 16:20:00 +0100
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["en", "Server", "Security"]
alias: ["/post/ActiveSync-ForeFront-TMG-and-AccountLockoutThreshold.aspx", "/post/activesync-forefront-tmg-and-accountlockoutthreshold.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>The use of smartphones and other mobile email clients has been increasing for quite some time. With ActiveSync being one of the widest-used protocols comes the need to manage another set of devices. As users are forced to change their domain account&rsquo;s passwords from time to time, some might forget to update their smartphones as well.</p>
<h1>The Problem</h1>
<p>So, as a user changes their password, the mobile device will continuously try to sync with a wrong set of credentials. Now depending on the rate at which it tries to sync, this might very well lock-out the users AD account, depending on the Domains Password Policy.</p>
<p>Another possibility to consider is an attacker who could create quite a disturbance by locking out accounts intentionally, using any published Web Site with Forms Base Authentication.</p>
<h1>The Solution</h1>
<p>Forefront TMG 2010 SP2 comes with a new feature, called AccountLockoutThreshold. Forefront TMG keeps track of failed logons and locks the account locally, after a specified amount of failures. After that, any other attempt to authenticate via TMG is not forwarded to Active Directory/LDAP, so that the users account does not get locked-out continuously .</p>
<p>The AccountLockoutThreshold feature is local to the Forefront TMG server, so if there is an array of publishing servers, it has to be configured on each of them. It can only be configured for Web Listeners using Forms Based Authentication.</p>
<p>To configure AccountLockoutThreshold we need to use PowerShell, there is no GUI that exposes this setting. A great script to control the settings is available in the <a href="http://gallery.technet.microsoft.com/scriptcenter/Retrieve-and-modify-18a029ba" target="_blank">Script Center</a>. So, we copy the script and save it to a *.ps1 file on the Desktop of the TMG Server, then we use dot-sourcing to load it into an administrative PowerShell session.</p>
<p><strong>Example: </strong>I saved the script to AccountLockout.ps1 on the Desktop. Use &ldquo;. .\Desktop\AccountLockout.ps1&rdquo; to import the script.</p>
<p>The Get-AccountLockoutSetting cmdlet is used to retrieve the current settings.</p>
<p><a href="/assets/image_495.png"><img style="display: inline; border: 0px;" title="image" src="/assets/image_thumb_493.png" alt="image" width="244" height="47" border="0" /></a>&nbsp;</p>
<p>The Set-AccountLockoutSetting cmdlet is used to configure the feature.</p>
<p><strong>Example: </strong>I use &ldquo;Set-AccountLockoutSetting -WebListener OWA -EnableAccountLockout $true -AccountLockoutThreshold 5 -AccountLockoutResetTime 300&rdquo; to enable the AccountLockout feature, accounts will get locked out for 300 seconds if there are 5 consecutive failed attempts.</p>
<p><a href="/assets/image_496.png"><img style="display: inline; border: 0px;" title="image" src="/assets/image_thumb_494.png" alt="image" width="244" height="61" border="0" /></a></p>
<p>Once configured, the following event will be logged to the Application Log of the TMG server if an account gets locked out locally:</p>
<p>Source: Microsoft Forefront TMG Web Proxy <br />Event ID: 32581 <br />Level: Error <br />Text: limit for consecutive logon failures has been reached. Additional logon attempts by domain.local\user.name will be automatically rejected for the next 300 seconds</p>
<p><a href="/assets/image_497.png"><img style="display: inline; border: 0px;" title="image" src="/assets/image_thumb_495.png" alt="image" width="244" height="171" border="0" /></a></p>
<p>Unfortunately TMG has been discontinued and is no longer available for customers, but for anyone already using it, this should help you dealing with Account Lockout Policies and ActiveSync devices.</p>
<p>&nbsp;</p>
<p>so long, <br />tom</p>
