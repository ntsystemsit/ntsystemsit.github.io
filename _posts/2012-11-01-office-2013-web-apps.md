---
layout: post
title: "Office 2013 Web Apps"
date: 2012-11-01 11:12:00 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Server 2012", "Sharepoint"]
redirect_from: ["/post/Office-2013-Web-Apps", "/post/office-2013-web-apps"]
author: thomas torggler
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>So October has been pretty quiet around here, but I have some cool stuff to share with you today.</p>
<p>Office 2013 RTM'd some time ago and so did all the server products. So with SharePoint 2013 available on TechNet I decided to set up some demo sites to get a feel for the product, after looking for a new version of the Office Web Apps I realized that there was some change coming here.</p>
<h2>Office Web Apps Server</h2>
<p>Office 2013 Web Apps are no longer installed on SharePoint servers directly, it became a stand-alone product instead. Not only does that stand-alone product bring new design and scalability possibilities, it is also possible to share the Web Apps with Exchange and Lync 2013.</p>
<h2>Prerequisites</h2>
<p>To install Office Web Apps Server on a Windows Server 2012 box the following roles and features must be installed as a prerequisite:</p>
<p style="background: white;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: blue;">Add-WindowsFeature</span> <span style="color: blueviolet;">Web-Server<span style="color: darkgray;">,<span style="color: blueviolet;">Web-Mgmt-Tools<span style="color: darkgray;">,<span style="color: blueviolet;">Web-Mgmt-Console<span style="color: darkgray;">,<span style="color: blueviolet;">Web-WebServer<span style="color: darkgray;">,<span style="color: blueviolet;">Web-Common-Http<span style="color: darkgray;">,<span style="color: blueviolet;">Web-Default-Doc<span style="color: darkgray;">,<span style="color: blueviolet;">Web-Static-Content<span style="color: darkgray;">,<span style="color: blueviolet;">Web-Performance<span style="color: darkgray;">,<span style="color: blueviolet;">Web-Stat-Compression<span style="color: darkgray;">,<span style="color: blueviolet;">Web-Dyn-Compression<span style="color: darkgray;">,<span style="color: blueviolet;">Web-Security<span style="color: darkgray;">,<span style="color: blueviolet;">Web-Filtering<span style="color: darkgray;">,<span style="color: blueviolet;">Web-Windows-Auth<span style="color: darkgray;">,<span style="color: blueviolet;">Web-App-Dev<span style="color: darkgray;">,<span style="color: blueviolet;">Web-Net-Ext45<span style="color: darkgray;">,<span style="color: blueviolet;">Web-Asp-Net45<span style="color: darkgray;">,<span style="color: blueviolet;">Web-ISAPI-Ext<span style="color: darkgray;">,<span style="color: blueviolet;">Web-ISAPI-Filter<span style="color: darkgray;">,<span style="color: blueviolet;">Web-Includes<span style="color: darkgray;">,<span style="color: blueviolet;">InkandHandwritingServices</span> </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p>
<p><br />If you want to use https for the Web Apps a proper certificate must be available on the server, too. To display the certificates installed on a computer try the following command:<br /><br /><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: blue;">Get-ChildItem <span style="color: blueviolet;">Cert:\LocalMachine\my</span> <span style="color: darkgray;">|</span> select</span> <span style="color: blueviolet;">Subject<span style="color: darkgray;">,<span style="color: blueviolet;">FriendlyName<span style="color: blue;"> <br /></span><br /></span></span></span></span>The Web Apps Server can also be installed on Windows Server 2008R2, find the prerequisites on <a href="http://technet.microsoft.com/en-us/library/jj219455(v=office.15).aspx">TechNet</a>.</p>
<h2>Installing Office Web Apps Server and creating the farm</h2>
<p>The actual installation of the Server is pretty straightforward, just download the ISO and double click it (love that&hellip;). The only thing you can choose during setup is the installation path.</p>
<p style="background: white;">Once done with the installation, you can go ahead and use PowerShell to create a new Web Apps Farm. Not surprisingly the cmdlet to be used is New-OfficeWebAppsFarm, the following parameters have to be used to create a farm:</p>
<p style="background: white;">-InternalUrl: the URL used for internal Clients</p>
<p style="background: white;">-ExternalUrl: the URL used for Clients on the Internet</p>
<p style="background: white;">-CertificateName: set the FriendlyName of the certificate to be used for the farm</p>
<p style="background: white;">-EditingEnabled: enable editing of files in the browser (SharePoint)</p>
<p style="background: white;"><br />The following example creates a farm</p>
<p style="background: white;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: blue;">New-OfficeWebAppsFarm</span> <span style="color: navy;">-InternalUrl</span> <span style="color: darkred;">"https://myOWAserver.tomt.local"</span> <span style="color: navy;">-ExternalUrl</span> <span style="color: darkred;">"https://office.ntsystems.it"</span> <span style="color: navy;">&ndash;CertificateName</span> <span style="color: darkred;">"ntSystems OfficeWebApps"</span> <span style="color: navy;">&ndash;EditingEnabled </span></span></p>
<p><br />To verify that the farm has been created successfully, open a browser and go to <a href="https://myowaserver.tomt.local/hosting/discovery">https://myowaserver.tomt.local/hosting/discovery</a> you should see some XML information about your internal and external URLs.</p>
<h2>SharePoint 2013</h2>
<p>Now to connect your SharePoint 2013 farm to the brand new Web Apps farm, fire up an administrative SharePoint Management Shell and use the New-SPWOPIBinding cmdlet. Use the &ndash;ServerName parameter to specify the internal URL of the Web Apps farm:</p>
<p style="background: white;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: blue;">New-SPWOPIBinding</span> <span style="color: navy;">-ServerName</span> <span style="color: blueviolet;">https://myOWAserver.tomt.local</span> </span></p>
<p style="background: white;">&nbsp;</p>
<p>After that you can have a look at the WOPI Zone, if users are accessing the SharePoint from internal and external clients you might want to change the zone from its default value of "internal-https" to "external-https":</p>
<p style="background: white;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: blue;">Set-SPWOPIZone</span> <span style="color: navy;">&ndash;zone</span> <span style="color: darkred;">"external-https"</span> </span></p>
<p style="background: white;">&nbsp;</p>
<p>Almost done, if you are using https on your SharePoint web applications you should be ready to go. If you are using http for SharePoint you need to set AllowOAuthOverHttp to true. This needs to be done in the SharePoint Management Shell using the following commands:</p>
<p style="background: white;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: orangered;">$config</span> <span style="color: darkgray;">=</span> (<span style="color: blue;">Get-SPSecurityTokenServiceConfig</span>) </span></p>
<p style="background: white;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: orangered;">$config<span style="color: darkgray;">.</span>AllowOAuthOverHttp <span style="color: darkgray;">=</span> $true</span> </span></p>
<p style="background: white;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: orangered;">$config<span style="color: darkgray;">.</span>Update()</span> </span></p>
<p style="background: white;">&nbsp;</p>
<p>To check if it worked, use:(<span style="color: blue;">Get-SPSecurityTokenServiceConfig</span>)<span style="color: darkgray;">.</span>AllowOAuthOverHttp </p>
<h2>Try it&hellip;</h2>
<p>Ready to see it? Open a browser, go to your SharePoint 2013 sites and create a new Document or open an existing one, should be looking like that:</p>
<p><img src="/assets/110112_1016_Office2013W1.png" alt="" /></p>
<p>&nbsp;</p>
<p>So long,<br />tom</p>
