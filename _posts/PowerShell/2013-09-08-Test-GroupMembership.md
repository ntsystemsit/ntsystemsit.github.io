---
layout: post
title: "Test-GroupMembership"
date: 2013-09-08 17:22:00 +0200
comments: true
author: thomas torggler
category: PowerShell
tags: ["blog", "archives", "PowerShell", "OnlineHelp"]
redirect_from: ["/page/PS-Test-GroupMembership", "/page/ps-test-groupmembership"]
---
This function uses [ADSI] to test group membership based on the constructed security token of the principal. You can pipe objects to this function. The function writes $true or $false for each tested object.

<!-- more --> 
This function makes use of Richard Muellers "PowerShell script to check group membership". Check the related link.

# Inputs
[Microsoft.ActiveDirectory.Management.ADAccount]
You can pipe an ADAccount object, such as returned by Get-AdUser or Get-AdComputer, to Test-GroupMembership.

# Outputs
[bool]
Test-GroupMembership returns $true or $false for each tested account.

# Example 1
{% highlight powershell %}
Get-AdUser -Filter * | Test-GroupMemership -GroupName "Domain Users"
{% endhighlight %}

This example gets users from Active Directory and tests wether or not they are member of the "Domain Users" security group.

# Example 2
{% highlight powershell %}
Get-AdComputer -Filter * | Test-GroupMemership -GroupName "Domain Computers"
{% endhighlight %}

This example gets computers from Active Directory and tests wether or not they are member of the "Domain Computers" security group.

# Related Links
Richard Muellers Script in the TechNet ScriptCenter: [http://gallery.technet.microsoft.com/scriptcenter/5adf9ad0-1abf-4557-85cd-657da1cc7df4](http://gallery.technet.microsoft.com/scriptcenter/5adf9ad0-1abf-4557-85cd-657da1cc7df4)

{% include psgallery.html packagename="Test-GroupMembership" type="Script" reponame="PowerShell" %}