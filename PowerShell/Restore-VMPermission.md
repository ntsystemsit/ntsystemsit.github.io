---
layout: post
title: "Restore-VMPermission"
date: 2013-09-27 21:46:00 +0200
comments: true
published: true
tags: ["blog", "archives", "PowerShell"]
excerpt_separator: <!-- more -->
redirect_from: ["/page/PS-Restore-VMPermissionps1", "/page/ps-restore-vmpermissionps1"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>This script is intended for test/demo environments only. It uses the Hyper-V Module to update permissions for all assigned disks on one ore more VMs. This is useful if you move/replace VHDs and the read permission ACE for VMId is missing.</p>
  <p><strong>Inputs</strong></p>
  <p>You can pipe objects with a VMName property, such as returned by Get-VM, to this script.</p>
  <p><strong>Outputs</strong></p>
  <p>None. This script does not write any objects to the pipeline. </p>
  <p><strong>Role</strong></p>
  <p>Get-VM does not return anything without administrative rights. Depending on the location of the virtual disk files, administrative permissions might be required to update ACLs.</p>
  <p><strong>Example 1</strong></p>
  <p>.\Restore-VMPermission.ps1 -VM dc01</p>
  <p>This example adds permission the VMId of dc01 to the ACL of all assigned disks for dc01.</p>
  <p><strong>Example 2</strong></p>
  <p>Get-VM | .\Restore-VMPermission.ps1</p>
  <p>This example uses Get-VM to get all VMs on the local machine. It gets all disks for all VMs and adds the required permissions for the VMId of the VM to the ACL of every disk.</p>
  <h1>Download&nbsp;</h1>
  <p>I uploaded the Script to the <a href="https://www.powershellgallery.com/packages/Restore-VMPermission" target="_blank">PowerShell Gallery</a>, so you can easily download it&nbsp;using:</p>
<p> <blockquote>
Save-Script -Name Restore-VMPermission -Path &lt;path&gt;&nbsp;&nbsp;</blockquote></p>
<p>Alternatively, the latest version of the script can be found here:</p>
  <p><iframe width="165" height="128" src="https://skydrive.live.com/embed?cid=9BFCE0941114C6E8&amp;resid=9BFCE0941114C6E8%2113252&amp;authkey=ACsbIC9ezwzD9-w" frameborder="0" scrolling="no"></iframe></p>
