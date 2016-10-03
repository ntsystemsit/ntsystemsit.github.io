---
layout: post
title: "How to build an UAG 2010 Array for Exchange publishing–Part 2"
date: 2013-10-27 13:57:00 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["en", "Exchange", "Lync", "uag"]
redirect_from: ["/post/How-to-build-an-UAG-2010-Array-for-Exchange-publishing-Part-2", "/post/how-to-build-an-uag-2010-array-for-exchange-publishing-part-2"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>Finally I finished Part 2 of the UAG 2010 publishing post. <br />I spent days with the UAG configuration to publish Exchange 2013 in the right way but with no success. There are some problem with Lync and OWA that I cannot fix. I decided to disable URL filters. Now my Exchange publishing works and in this final post I explain how my configurations looks like.</p>
<p><strong>First step is to create a new Trunk for Exchange publishing</strong></p>
<p><strong>Then you have to create the Applications for Exchange</strong>. <br />First create the Outlook Web Access Application:</p>
<p><a href="/assets/image_588.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_586.png" alt="image" width="244" height="159" border="0" /></a></p>
<p>Select the Exchange CAS Servers or the CAS Server VIP.</p>
<p><a href="/assets/image_589.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_587.png" alt="image" width="244" height="210" border="0" /></a></p>
<p>Configure the authentication and authorize all users.</p>
<p>Next step is to rerun the Wizard to publish Outlook Anywhere and Exchange Active Sync.</p>
<p><a href="/assets/image_590.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_588.png" alt="image" width="244" height="165" border="0" /></a></p>
<p>Configure Authentication, Kerberos for OWA and Basic for Autodiscover</p>
<p><a href="/assets/image_591.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_589.png" alt="image" width="239" height="244" border="0" /></a></p>
<p>Don&rsquo;t forget to configure SPN&rsquo;s and delegation in ActiveDirectory for Kerberos to work. You can export the settings needed into an LDIF File with the &ldquo;Export KCD settings&rdquo; wizard in UAG and import it in AD. Or you can set the SPN&rsquo;s manually:</p>
<p><a href="/assets/image_592.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_590.png" alt="image" width="244" height="121" border="0" /></a></p>
<p>You can check the SPN&rsquo;s and export the file:</p>
<p><a href="/assets/image_593.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_591.png" alt="image" width="244" height="238" border="0" /></a></p>
<p>When you created the applications you have an application list like this:</p>
<p><a href="/assets/image_594.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_592.png" alt="image" width="244" height="120" border="0" /></a></p>
<p><strong>Configure Portal Homepage <br /></strong>Change the Portal Home page and uncheck display Home Page within portal frame</p>
<p><a href="/assets/image_595.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_593.png" alt="image" width="244" height="99" border="0" /></a></p>
<p><strong>Disable component installation</strong> <br />To prevent UAG installing the client, disable component installation.</p>
<p><a href="/assets/image_596.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_594.png" alt="image" width="244" height="197" border="0" /></a></p>
<p><strong>Redirect HTTP to HTTPS</strong></p>
<p>To redirect HTTP connections to HTTPS create the redirection Trunk in the &ldquo;HTTPS Connections&rdquo; section and select the Exchange Trunk.</p>
<p><a href="/assets/image_597.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_595.png" alt="image" width="244" height="152" border="0" /></a></p>
<p>&nbsp;</p>
<p>The basic configuration is done and Exchange is now published via UAG. <br />But there are some issues:</p>
<p><strong>Lync: Lync Clients cannot get autodiscover settings <br /></strong>In my environment Lync clients couldn&rsquo;t get the autodiscover configuration from Exchange. After checking the UAG logs I noticed that UAG has a problem when Lync announces his Client Agent.</p>
<p><strong>Solution: Disable scripting on the trunk</strong></p>
<p><a href="/assets/image_598.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_596.png" alt="image" width="244" height="202" border="0" /></a></p>
<p><strong>OWA: 500 error message when you open another mailbox from OWA</strong> <br />In my environment it was not possible to open another users mailbox without getting the following 500 error message:</p>
<p><a href="/assets/image_599.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_597.png" alt="image" width="244" height="87" border="0" /></a></p>
<p><strong>Solution: Disable &ldquo;verify URLs&rdquo; on the OWA Application</strong></p>
<p><a href="/assets/image_600.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border: 0px;" title="image" src="/assets/image_thumb_598.png" alt="image" width="244" height="189" border="0" /></a></p>
<p><strong>Conclusion</strong></p>
<p>I&rsquo;m sure with deeper troubleshooting there must be exist a better way to fix this errors but in my opinion UAG is not the right product for publishing Exchange. Better you use a load balancer or <a href="http://blogs.technet.com/b/exchange/archive/2013/07/19/reverse-proxy-for-exchange-server-2013-using-iis-arr-part-1.aspx">II ARR</a>. <br />I my next publishing post I explain how to publish Exchange 2013 with Citrix Netscaler.</p>
