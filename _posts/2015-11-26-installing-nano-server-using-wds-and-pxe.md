---
layout: post
title: "Installing Nano Server using WDS and PxE "
date: 2015-11-26 14:51:00 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["en", "Server"]
redirect_from: ["/post/Installing-Nano-Server-using-WDS-and-PxE", "/post/installing-nano-server-using-wds-and-pxe"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Technical Preview 4 of Windows Server 2016 brings along new "packages" for Nano Server, it can now run DNS and IIS along other roles. See <a href="https://technet.microsoft.com/en-us/library/mt126167.aspx">TechNet</a> for a complete list. So to get started with Nano, I tried to deploy it via WDS.
</p><p>&nbsp;
&nbsp;</p><p><span style="color:#1e4e79; font-size:16pt">Prepare
</span></p><p>Nano Server is not installed like other editions of Windows Server, one has to build a customized image with the roles and packages one needs. This underscores the very nature of Nano Server, being a minimal install with minimal overhead.
</p><p>Now to create this image we have to mount the Windows 2016 TP4 ISO on our workstation. In the NanoServer folder right at the root of the ISO, we find the .wim along with two PowerShell scripts. There is quite a detailed guide available on <a href="https://technet.microsoft.com/en-us/library/mt126167.aspx">TechNet</a> so I am not going into to much detail here:
</p><p>&nbsp;
&nbsp;</p><p>First import the Module: 
</p><p style="margin-left: 27pt"><span style="font-family:Consolas; font-size:10pt">ipmo .\NanoServerImageGenerator.psm1
</span></p><p>&nbsp;
&nbsp;</p><p>As I ran the New-NanoServerImage cmdlet before, it already converted the WIM to VHD (that's the VHD you'll find at the "BasePath") so I can omit "MediaPath" for subsequent runs and save a little time:
</p><p>&nbsp;
&nbsp;</p><p style="margin-left: 27pt"><span style="font-family:Consolas; font-size:10pt">New-NanoServerImage -BasePath C:\nanotemp -TargetPath C:\Nano\Nano_dns.vhd -OEMDrivers -Packages Microsoft-NanoServer-DNS-Package -ComputerName nano_dns -DomainName tomt.it -Language en-us
</span></p><p>&nbsp;
&nbsp;</p><p style="margin-left: 27pt"><img src="/assets/112615_1451_InstallingN1.png" alt="">
	</p><p style="margin-left: 27pt">&nbsp;
&nbsp;</p><p>Note: I had to specify the Language parameter as I my system is not using en-us. I am planning to run the VHD on VMware, that's why I included "OEMDrivers" and not "GuestDrivers".
</p><p>&nbsp;
&nbsp;</p><p><span style="color:#1e4e79; font-size:16pt">WDS 
</span></p><p>The steps above created a VHD at the target path and in the next step I am adding this VHD as an install image to WDS:
</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/112615_1451_InstallingN2.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p>I changed the name to avoid confusion :)
</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/112615_1451_InstallingN3.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p>The same can be achieved using PowerShell:
</p><p>&nbsp;
&nbsp;</p><p style="margin-left: 27pt"><span style="font-family:Consolas; font-size:10pt">Import-WdsInstallImage -Path C:\nano\Nano_dns.vhd -NewImageName "Nano_dns_10.0.10586"
</span></p><p style="margin-left: 27pt">&nbsp;
&nbsp;</p><p>That's basically it, now we have to create a new VM an pxe-boot from the WDS.
</p><p>&nbsp;
&nbsp;</p><p><span style="color:#1e4e79; font-size:16pt">Install
</span></p><p>I created a new VM using the "Windows 2016" template in Fusion, but before installing I reduced the size of the new virtual disk to 10G, which still is way to much ;)
</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/112615_1451_InstallingN4.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/112615_1451_InstallingN5.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p>Very few miutes later our new DNS server is ready.
</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/112615_1451_InstallingN6.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p>There is nothing really to be done on the server console, the "Emergency Console" can be used to configure networking, the rest is done with RSAT or PowerShell remoting.
</p><p>&nbsp;
&nbsp;</p><p><span style="color:#1e4e79; font-size:16pt">DNS
</span></p><p>To test the functionality of my newest Nano Server, I actually set up DNS:
</p><p>&nbsp;
&nbsp;</p><p>So first of all, using Get-WindowsFeature I checked which features were installed and which ones were available. As you can see from the screenshot, there are not very many features available:
</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/112615_1451_InstallingN7.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p>Using the following command, I installed DNS Server role: 
</p><p style="margin-left: 27pt"><span style="font-family:Consolas; font-size:10pt">Add-WindowsFeature -ComputerName nano_dns -Name DNS
</span></p><p>&nbsp;
&nbsp;</p><p>After that, I was able to add the Server to the DNS Management console and configure DNS zones:
</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/112615_1451_InstallingN8.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p>&nbsp;
&nbsp;</p><p>Oh, and of those of you who care, the size of the virtual harddisk is 626,6MB. Awesome, right? :)
</p><p>&nbsp;
&nbsp;</p><p><img src="/assets/112615_1451_InstallingN9.png" alt="">
	</p><p>&nbsp;
&nbsp;</p><p>&nbsp;
&nbsp;</p><p>Enjoy, Tom
</p>
