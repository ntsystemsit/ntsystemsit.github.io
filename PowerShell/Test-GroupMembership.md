---
layout: post
title: "Test-GroupMembership"
date: 2013-09-08 17:22:00 +0200
comments: true
published: true
author: thomas torggler
tags: ["blog", "archives", "PowerShell"]
redirect_from: ["/page/PS-Test-GroupMembership", "/page/ps-test-groupmembership"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>This function uses [ADSI] to test group membership based on the constructed security token of the principal. You can pipe objects to this function.</p>  <p>The function writes $true or $false fore each tested object.</p>  <p>This function makes use of Richard Muellers &quot;PowerShell script to check group membership&quot;. Check the related link.</p>  <p><strong>Inputs</strong></p>  <p>You can pipe an ADAccount object, such as returned by Get-AdUser or Get-AdComputer, to Test-GroupMembership.</p>  <p><strong>Outputs</strong></p>  <p>Test-GroupMembership returns $true or $false for each tested account.</p>  <p><strong>Example 1</strong></p>  <p>Get-AdUser -Filter * | Test-GroupMemership -GroupName &quot;Domain Users&quot;</p>  <p>This example gets users from Active Directory and tests wether or not they are member of the &quot;Domain Users&quot; security group.</p>  <p><strong>Example 2</strong></p>  <p>Get-AdComputer -Filter * | Test-GroupMemership -GroupName &quot;Domain Computers&quot;</p>  <p>This example gets computers from Active Directory and tests wether or not they are member of the &quot;Domain Computers&quot; security group.</p>  <p><strong>Related Links</strong></p>  <p>Richard Muellers Script in the TechNet ScriptCenter:    <br /><a href="http://gallery.technet.microsoft.com/scriptcenter/5adf9ad0-1abf-4557-85cd-657da1cc7df4">http://gallery.technet.microsoft.com/scriptcenter/5adf9ad0-1abf-4557-85cd-657da1cc7df4</a></p>  <h1>Download</h1>  <p>The latest version of the script can be found here:</p>  <p><iframe height="128" src="https://skydrive.live.com/embed?cid=9BFCE0941114C6E8&amp;resid=9BFCE0941114C6E8%2113252&amp;authkey=ACsbIC9ezwzD9-w" frameborder="0" width="165" scrolling="no"></iframe></p>
