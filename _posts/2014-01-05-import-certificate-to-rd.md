---
layout: post
title: "Import Certificate to RD"
date: 2014-01-05 13:36:39 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Server 2012", "en", "Server 2012 R2", "Remote Desktop"]
redirect_from: ["/post/Import-Certificate-to-RD", "/post/import-certificate-to-rd"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>With Server 2012 the MMC “<strong><em>Remote Desktop Session Host Configuration</em></strong>” doesn’t exist anymore. If you want to import a specific certificate to the RD Session Host you can do the following:</p>  <p>1. Import the certificate to the machines personal store</p>  <p><a href="/assets/image_614.png"><img title="image" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; border-left: 0px; display: inline; padding-right: 0px" border="0" alt="image" src="/assets/image_thumb_612.png" width="244" height="201" /></a></p>  <p>2. Then use the following commands to import the certificate to the Session Host:</p>  <p>$pass = ConvertTo-SecureString <em>“CERTIFICATE-PASSWORD”</em> -AsPlainText –Force    <br />$thumbprint = (Import-PfxCertificate -Password $pass -CertStoreLocation cert:\localMachine\my -FilePath '<a href="file://\\LocationToCertificate\certificate.pfx').thumbprint">\\LocationToCertificate\certificate.pfx').thumbprint</a>    <br />$path = (Get-WmiObject -class &quot;Win32_TSGeneralSetting&quot; -Namespace root\cimv2\terminalservices -Filter &quot;TerminalName='RDP-tcp'&quot;).__path    <br />Set-WmiInstance -Path $path -argument @{SSLCertificateSHA1Hash=&quot;$Thumbprint&quot;}</p>  <p>Now the certificate is imported.</p>  <p>Greetings   <br />dn</p>
