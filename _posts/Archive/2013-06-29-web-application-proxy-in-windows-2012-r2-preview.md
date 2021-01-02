---
layout: post
title: "Web Application Proxy in Windows 2012 R2 preview"
date: 2013-06-29 01:49:00 +0200
comments: true
category: Archive
tags: ["en", "Server"]
redirect_from: ["/post/Web-Application-Proxy-in-Windows-2012-R2-preview", "/post/web-application-proxy-in-windows-2012-r2-preview"]
author: thomas torggler
---
<!-- more -->
<p>The preview of the next version of Windows Server 2012 has been released very recently. Let&rsquo;s have a quick look at some of the features.</p>
<p>The taskbar properties feature a new &ldquo;Navigation&rdquo; pane, we can configure stuff like &ldquo;Boot to Desktop&rdquo;, yay :)</p>
<p><a href="/assets/archive/image_543.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_541.png" alt="image" width="206" height="244" border="0" /></a></p>
<h1>Web Application Proxy and ADFS</h1>
<p>Another desperately needed feature is the new Web Application Proxy server role, many people (including me) think this is going to be the replacement for TMG. So, very keen to play with the new toy I went ahead and added the server role, found underneath &ldquo;Remote Access&rdquo;.</p>
<h1>&nbsp;</h1>
<p><a href="/assets/archive/image_544.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_542.png" alt="image" width="244" height="174" border="0" /></a></p>
<p>Adding &ldquo;Web Application Proxy&rdquo; as a role service.</p>
<p><a href="/assets/archive/image6.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image6_thumb.png" alt="image" width="244" height="174" border="0" /></a></p>
<p>Like in Windows 2012 the server manager kindly reminds me to configure the newly added role:</p>
<p><a href="/assets/archive/image_545.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_543.png" alt="image" width="244" height="146" border="0" /></a></p>
<p>Just in case you want to run this wizard again but can&rsquo;t find it anymore, it can be started from the Remote Access Management Console.</p>
<p>The first step in the Wizard asks for a federation service name, now until this moment I didn&rsquo;t really bother researching anything about this new server role. Not the smartest move&hellip; As documentation is still pretty thin for Windows Server 2012 R2 I decided to simply set up an ADFS server in my lab and try to connect the Web Application Proxy to that federation service.</p>
<h1>Active Directory Federation Services</h1>
<p>The first step is to add the Active Directory Federation Services server role to an machine in the domain.</p>
<p><a href="/assets/archive/image_546.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_544.png" alt="image" width="244" height="174" border="0" /></a></p>
<p>Again, the Server Manager reminds me to configure the new role, the first thing I do is supplying credentials which are used to perform the configuration:</p>
<p><a href="/assets/archive/image_547.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_545.png" alt="image" width="244" height="180" border="0" /></a></p>
<p>In the next step I select a certificate for the federation service and set a name for it. Obviously I do have to create a DNS record that resolves the federation service name to the IP address of the server that&rsquo;s actually hosting it.</p>
<p><a href="/assets/archive/image_548.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_546.png" alt="image" width="244" height="179" border="0" /></a></p>
<p>Now I have to select a service account for the federation service, note that the federation service name must be added as Service Principal Name to the account. This can be done using &ldquo;setspn &ndash;F &ndash;S host/adfs.tomt.local adfssvc&rdquo;</p>
<p><a href="/assets/archive/image_549.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_547.png" alt="image" width="244" height="180" border="0" /></a></p>
<p>In the last step I select the database to use for the federation service, as I am using only one server I&rsquo;ll give the Windows Internal Database a go.</p>
<p><a href="/assets/archive/image_550.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_548.png" alt="image" width="244" height="180" border="0" /></a></p>
<p>Ok, no we do have a federation service running, so we can go ahead and configure the Web Application Proxy.</p>
<h1>Web Application Proxy</h1>
<p>Ok, picking up where we left for a quick excursion to ADFS, we are now back on the Web Application Proxy machine and specify the newly created federation service name.</p>
<h1>&nbsp;</h1>
<h1>&nbsp;</h1>
<p><a href="/assets/archive/image_551.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_549.png" alt="image" width="244" height="200" border="0" /></a></p>
<p>A certificate is required on the proxy, too. So after requesting a certificate from my internal CA, I can go ahead and select it here. Make sure that the certificate&rsquo;s subject alternative names include the federation service name!</p>
<p><a href="/assets/archive/image_552.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_550.png" alt="image" width="244" height="199" border="0" /></a></p>
<p>Ok, the last step shows the PowerShell code that get&rsquo;s executed and if everything works out, you&rsquo;ll see a message that the Proxy was configured successfully.</p>
<p>A few caveats: Make sure DNS resolution is ok, the proxy must be able to resolve the federation service, and the ADFS server must me able to resolve the proxy. The certificate on both servers must include the federation service name.</p>
<p><a href="/assets/archive/image_553.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_551.png" alt="image" width="244" height="200" border="0" /></a></p>
<h1>Publishing a service</h1>
<p>After having configured ADFS and the Web Application Proxy, which also acts as ADFS Proxy, we can finally proceed and publish a server. This is done using the Remote Access Management Console.</p>
<p><a href="/assets/archive/image_554.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_552.png" alt="image" width="244" height="168" border="0" /></a></p>
<p>I hit publish in the tasks pane and in the wizard that comes up, I am asked to select if I want to use pre-authentication or simply pass-trough the requests. After all that pain with installing and configuring ADFS I do definitely want to use pre-authentication :)</p>
<p>Ok, so I have to select the ADFS relying party, whatever that is:</p>
<p><a href="/assets/archive/image_555.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_553.png" alt="image" width="244" height="200" border="0" /></a></p>
<p>After that I am prompted to enter a name for the publishing rule, an external and internal URL as well as a certificate.</p>
<p><a href="/assets/archive/image_556.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/archive/image_thumb_554.png" alt="image" width="244" height="200" border="0" /></a></p>
<p>Again, we get to see the actual PowerShell code just before the publishing rule is created. Niiice, we have just successfully configured our first "post TMG&rdquo; publishing rule.</p>
<h1>Testing</h1>
<p>Now to make sure that this is really working, let&rsquo;s fire up a client and browse to the published URL, owa.tomt.it in my case. Browsing to a published web site that requires pre-authentication, redirects the client to the AD FS Proxy service.</p>
<p><a href="/assets/archive/image_557.png"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_555.png" alt="image" width="244" height="184" border="0" /></a></p>
<p>After successfully authenticating against the Web Application Proxy the client gets redirected back to it&rsquo;s intended destination web site.</p>
<p>Note: Make sure the client actually behaves like an external client, it must resolve the federation service name to the Web Application Proxy for this to work!</p>
<h1>Port mapping</h1>
<p>Another application that I do publish using TMG frequently is Lync, sure enough I have to map the external web services port from 443 to 4443. This can be done using Web Application Proxy, too. For Lync we don&rsquo;t use pre-authentication:</p>
<p><a href="/assets/archive/image_558.png"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_556.png" alt="image" width="244" height="200" border="0" /></a></p>
<p>The internal URL contains the port to use:</p>
<p><a href="/assets/archive/image_559.png"><img style="display: inline; border: 0px;" title="image" src="/assets/archive/image_thumb_557.png" alt="image" width="244" height="200" border="0" /></a></p>
<p>Awesome, that gives us a new possibility to publish web services, obviously we are not yet able to use it in production and time will tell if it get&rsquo;s a few additional features in RTM, all in all, for no additional cost, I think it is already a nice tool to use.</p>
<p>Wish list,or: What would be nice to have in the RTM Version of Windows Server 2012 R2:</p>
<p>Publish multiple servers for a particular external URL (think load balancing) <br />Health checking of internal servers <br />Maybe some additional authentication possibilities </p>
<p>That&rsquo;s it for today, so long <br />tom</p>
{% include imported_disclaimer.html %}
