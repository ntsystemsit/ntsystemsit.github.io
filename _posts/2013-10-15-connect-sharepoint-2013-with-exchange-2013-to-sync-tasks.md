---
layout: post
title: "Connect Sharepoint 2013 with Exchange 2013 to sync tasks"
date: 2013-10-15 18:29:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["en", "Exchange", "Sharepoint"]
redirect_from: ["/post/Connect-Sharepoint-2013-with-Exchange-2013-to-sync-tasks", "/post/connect-sharepoint-2013-with-exchange-2013-to-sync-tasks"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>To sync Tasks with Exchange and Sharepoint 2013 some base functionality has to be prepared:</p>
<p>- Running user profile synchronization <br />- Work management service deployed <br />- SSL for the Web Application with valid certificate</p>
<p><strong>User profile synchronization <br /></strong>There are some nice how to&rsquo;s how to get this service running. In simple words you need an user account that has &ldquo;<em>Replicating Directory Changes</em>&rdquo; rights in AD</p>
<p><a href="/assets/image_577.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_575.png" alt="image" width="244" height="189" border="0" /></a></p>
<p>Then you have to start the User Profile Service Application in the Sharepoint Central Administration.</p>
<p><a href="/assets/image_578.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_576.png" alt="image" width="244" height="23" border="0" /></a></p>
<p>If everything works both ForeFront Services are running and you can configure the user profile service.</p>
<p><a href="/assets/image_579.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_577.png" alt="image" width="244" height="28" border="0" /></a></p>
<p>&nbsp;</p>
<p><strong>Work management </strong></p>
<p>The Work management Service application doesn&rsquo;t need extra configuration. It only has to be deployed and working. On Technet is a short description how to create this service application.</p>
<p><a title="http://technet.microsoft.com/en-us/library/fp161254.aspx" href="http://technet.microsoft.com/en-us/library/fp161254.aspx">http://technet.microsoft.com/en-us/library/fp161254.aspx</a></p>
<p><strong>SSL</strong></p>
<p>The Web Application needs to be SSL enabled. This can be done easily in IIS by enabling the HTTPS binding:</p>
<p><a href="/assets/image_580.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_578.png" alt="image" width="244" height="112" border="0" /></a></p>
<p>To verify that this works you can check if the Exchange server can access the AuthMetadataUrl with the browser. <br />AuthMetadataUrl: <a title="https://sharepoint.ewico.com/_layouts/15/metadata/json/1" href="https://intranet.domain.local/_layouts/15/metadata/json/1">https://intranet.domain.local/_layouts/15/metadata/json/1</a></p>
<p>If you can access the 1.json file without authentication this step worked.</p>
<p><a href="/assets/image_581.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_579.png" alt="image" width="244" height="26" border="0" /></a></p>
<p><span style="background-color: #ffffff;"><strong>Tip</strong>: If you have to enter credentials, check the authentication methods in IIS for the Web Application. Anonymous needs to be activated:</span></p>
<p><a href="/assets/image_582.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_580.png" alt="image" width="244" height="89" border="0" /></a></p>
<p>&nbsp;</p>
<p>Now you can connect Sharepoint with Exchange:</p>
<p><strong>On Sharepoint 2013</strong> <br />1) Download <strong>EWSManagedAPI.msi </strong>from <a href="http://www.microsoft.com/en-us/download/details.aspx?id=35371">http://www.microsoft.com/en-us/download/details.aspx?id=35371</a> <br />2) Install the EWS API with the following switches: <br />msiexec /i EwsManagedApi.msi addlocal="ExchangeWebServicesApi_Feature,ExchangeWebServicesApi_Gac" <br />3) Reset IIS</p>
<p><strong>On Exchange 2013</strong> <br />1) Switch to the following directory: C:\Program Files\Microsoft\Exchange Server\V15\Scripts <br />2) Configre Enterprise Partner Application <br />.\Configure-EnterprisePartnerApplication.ps1 -ApplicationType Sharepoint -AuthMetadataUrl <a href="https://intranet.domain.local/_layouts/15/metadata/json/1">https://intranet.domain.local/_layouts/15/metadata/json/1</a></p>
<p>You should get the following output</p>
<p><a href="/assets/image_583.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_581.png" alt="image" width="244" height="88" border="0" /></a></p>
<p>Now you are able to sync Tasks with Sharepoint and Exchange 2013:</p>
<p><a href="/assets/image_584.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_582.png" alt="image" width="244" height="138" border="0" /></a></p>
<p><span style="background-color: #ffffff;"><strong>Tip</strong>: If this does not work and <br />- you are not in the same Domain with Exchange (maybe in a subdomain) <br />- you have an error with Exchange Autodiscover in the Sharepoint logs <br />- you have authentication errors with Exchange in the Sharepoint logs <br /> <br />check that your subdomain (for example <em>subdomain.domain.local)</em> is added to the accepted domains in Exchange.</span></p>
<p>Greetings <br />dn</p>
