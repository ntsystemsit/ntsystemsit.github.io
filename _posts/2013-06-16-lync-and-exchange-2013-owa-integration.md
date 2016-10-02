---
layout: post
title: "Lync and Exchange 2013 OWA integration"
date: 2013-06-16 09:27:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["en", "Exchange", "Lync"]
redirect_from: ["/post/Lync-and-Exchange-2013-OWA-integration", "/post/lync-and-exchange-2013-owa-integration"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>I configured Lync 2013 to work with Exchange 2013 these days, as it took me a while to get the &lsquo;Online Meeting request&rsquo; up and running, I thought I&rsquo;d post a quick post here.</p>
<h1>Certificates</h1>
<p>The first thing to consider when thinking about integration between Exchange 2013 and Lync is certificates. The servers use OAuth and TLS connections and we need the certificate common names to match the names that the servers use to access the resource. In my simple environment I do have the CN ly14.ntsystems.local on my Lync server&rsquo;s certificate, the Exchange server&rsquo;s certificate has a CN of ex14.ntsystems.local.</p>
<h1>Exchange 2013 - Enterprise Partner Application</h1>
<p>The first thing we configure, if it&rsquo;s not already set up, is Exchange Autodiscover service. What we actually care about is the internal URI used:</p>
<blockquote>
<p>Get-ClientAccessServer | fl AutoDiscoverServiceInternalUri</p>
</blockquote>
<p>If it looks good, we go ahead and use the following script shipped with Exchange to set up an Enterprise Partner Application.</p>
<blockquote>
<p>&amp; $exInstall\Scripts\Configure-EnterprisePartnerApplication.ps1 &ndash;AuthMetaDataUrl <a href="https://ly15.ntsystems.local/metadata/json/1">https://ly15.ntsystems.local/metadata/json/1</a> -ApplicationType Lync</p>
</blockquote>
<p>The &ldquo;&amp;&rdquo; sign tells PowerShell to start the script located at the Scripts folder in the Exchange 2013 installation directory. With the AuthMetaDataUrl we specify the Lync 2013 Pool&rsquo;s Auth Metadata document, this includes public key information for the Partner Application.</p>
<h1>Lync 2013 - Trusted Application Pool</h1>
<p>So next up we have to configure Lync to trust the Exchange Server 2013.</p>
<blockquote>
<p>New-CsTrustedApplicationPool -Identity ex15.ntsystems.local -Registrar ly15.network.local -Site Bolzano -RequiresReplication $False</p>
</blockquote>
<blockquote>
<p>New-CsTrustedApplication -ApplicationId OutlookWebApp -TrustedApplicationPoolFqdn ex15.ntsystems.local -Port 5199</p>
<p>New-CsPartnerApplication -Identity Exchange -ApplicationTrustLevel Full -MetadataUrl <a href="https://autodiscover.ntsystems.local/autodiscover/metadata/json/1">https://autodiscover.ntsystems.local/autodiscover/metadata/json/1</a></p>
<p>Set-CsOAuthConfiguration &ndash;Realm ntsystems.local</p>
<p>Enable-CsTopology</p>
</blockquote>
<p>Ok, so first we create a new Trusted Application Pool withing Lync, the Identity of the application pool is the Exchange 2013 server, the registrar is the Lync standard edition server. Then we create a Trusted Application and assign it to the trusted application pool configured before. The third thing we configure is a Partner Application and set the OAuth configuration, we need those last steps for the Online Meeting request in OWA, make sure that you actually use the Autodiscover URL, this didn&rsquo;t work if I used the server name instead.</p>
<p>Ok, once the configuration is done, publish the topology.</p>
<h1>Exchange 2013 - Enable Instant Messaging</h1>
<p>Back on the Exchange side of things we need to configure the OwaVirtualDirectory to enable Instant Messaging.</p>
<blockquote>
<p>Get-OwaVirtualDirectory | Set-OwaVirtualDirectory &ndash;InstantMessagingEnabled $True -InstantMessagingType OCS</p>
</blockquote>
<p>Now comes the nasty part, we have to update OWA&rsquo;s web.config file to include the Exchange Servers certificate thumbprint. So first, we use the following cmdlet to get the certificate&rsquo;s thumbprint:</p>
<blockquote>
<p>Get-ExchangeCertificate</p>
</blockquote>
<p>Copy the thumbprint of the certificate that is assigned to the IIS service and fire up notepad to open the web.config file of the Owa virtual directory, located here:</p>
<blockquote>
<p>C:\Program Files\Microsoft\Exchange Server\V15\ClientAccess\OWA\web.config</p>
</blockquote>
<p>No we need to Include the following Lines underneath the &lt;AppSettings&gt; node:</p>
<blockquote>
<p>&lt;add key="IMCertificateThumbprint" value="<em>Exchange Cert Thumbprint</em>"/&gt; <br />&lt;add key="IMServerName" value="ly15.tomt.local"/&gt;</p>
</blockquote>
<p>So, after updating that web.config file, there is one step left, we need to actually allow users to use instant messaging in OWA. This is controlled in the Owa mailbox policy, to keep it simple I&rsquo;ll just update the default policy which will enable IM for everybody.&nbsp;</p>
<blockquote>
<p>Set-OwaMailboxPolicy -Identity "Default" -InstantMessagingEnabled $True -InstantMessagingType "OCS"</p>
</blockquote>
<p>Wow, now that all configuration is done, I like to do a quick iisreset to make sure all the configuration changes are picked up, obviously this should not be done on production machines&hellip;</p>
<p>If users sign in to webmail, they will be able to sign into Lync, set their state and participate in IM chats.</p>
<p><a href="/assets/image_541.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/image_thumb_539.png" alt="image" width="244" height="100" border="0" /></a></p>
<p>And, as a nice little addon, we can now also create Online Meeting requests from OWA:</p>
<p><a href="/assets/image_542.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/image_thumb_540.png" alt="image" width="244" height="180" border="0" /></a></p>
<p>Note, Exchange 2013 CU1 is required for Online Meeting requests and Lyncdiscover has to be set up, too.</p>
<p>&nbsp;</p>
<p>Enjoy,</p>
<p>tom</p>
