---
layout: post
title: "Configure Exchange 2013 CAS Array with WNLB and enable Kerberos support for OA"
date: 2013-06-01 16:18:00 +0200
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["en", "Exchange"]
alias: ["/post/Configure-Exchange-2013-CAS-Array-with-WNLB-and-enable-Kerberos-support-for-OA.aspx", "/post/configure-exchange-2013-cas-array-with-wnlb-and-enable-kerberos-support-for-oa.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Like Tom described in his Post <a href="/post/Migrating-from-Exchange-2010-to-2013-part-2.aspx">Migrating from Exchange 2010 to 2013 &ndash; part 2</a> the major changes in the Exchange 2013 CAS role, I explain in this post how to configure high available CAS Array with WNLB.</p>
<p>First you have to install WLNB on both CAS nodes and create the Cluster and VIP. The CAS Servers need only one NIC, we use the Multicast operation mode.</p>
<p><a href="/assets/image_526.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_524.png" alt="image" width="244" height="199" border="0" /></a></p>
<p>Next we create the Port Rules. In this example I create a port rule for the whole port range. Because there is not need of Affinity we can safely disable the the feature:</p>
<p><a href="/assets/image_527.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_525.png" alt="image" width="244" height="234" border="0" /></a></p>
<p>Now create the Host A Record for the Cluster name excararray01 to point to the VIP.</p>
<p>Remember to change the internal URL&rsquo;s of the virtual directories of both CAS servers to use the Cluster name and not the CAS computername.</p>
<p><strong>Kerberos support</strong></p>
<p>I have 2 UAG servers that are publishing the Exchange 2013 CAS servers. On the UAG servers I don&rsquo;t want to publish both CAS servers and use the UAG load balancing. I want to publish the CAS Cluster Name and let the WNLB do the load balancing. <br />If you don&rsquo;t configure an alternate service account for the CAS Cluster Name you will no be able to use NTLM authentication for Outlook Anywhere.</p>
<p>To use Kerberos authentication you have to create a computer account in AD (the name don&rsquo;t have to match the array FQDN):</p>
<p><a href="/assets/image_528.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_526.png" alt="image" width="244" height="41" border="0" /></a></p>
<p>Then run the following script that is located in C:\Program Files\Microsoft\Exchange Server\V15\Scripts to configure the Alternative Service Account</p>
<p><strong>.\RollAlternateServiceAccountPassword.ps1 -ToArrayMembers excasarray01.domain.local -GenerateNewPasswordFor "domain\EXCASARRAY01ASA$" &ndash;Verbose</strong></p>
<p><strong>excasarray01.domain.local</strong> stands for the FQDN of the CAS array <br /><strong>domain\EXCASARRAY01ASA$ </strong>stands for the created computer account</p>
<p><a href="/assets/image_529.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_527.png" alt="image" width="244" height="162" border="0" /></a></p>
<p>After the script has finished configuring we have to register some spn&rsquo;s with the CAS Array FQDN</p>
<p>setspn -s exchangeMDB/excasarray01.domain.local domain\EXCASARRAY01ASA$ <br />setspn -s exchangeRFR/excasarray01.domain.local domain\EXCASARRAY01ASA$ <br />setspn -s exchangeAB/excasarray01.domain.local domain\EXCASARRAY01ASA$ <br />setspn -s http/excasarray01.domain.local domain\EXCASARRAY01ASA$ <br />setspn -s http/excasarray01.domain.local domain\EXCASARRAY01ASA$</p>
<p>Now we can publish the CAS Array FQDN with uag and use NTLM as authentication method for Outlook Anywhere.</p>
<p>Greetings <br />dn</p>
