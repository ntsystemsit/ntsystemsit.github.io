---
layout: post
title: "ActiveSync devices ask for authentication"
date: 2013-10-15 18:29:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["en", "Exchange"]
redirect_from: ["/post/ActiveSync-devices-ask-for-authentication", "/post/activesync-devices-ask-for-authentication"]
author: daniel nitz
---
<!-- more -->
{% include imported_disclaimer.html %}
<p><br />One of the first steps in an Exchange 2010 to 2013 migration is to make Exchange 2013 internet facing to handle the requests from external and internal clients.</p>
<p>After my first attempt to switch from Exchange 2010 CAS and TMG to UAG and Exchange 2013 CAS servers on the frontend I noticed that some Android and iPad ActiveSync users got authentication requests.</p>
<p>First thing I checked was the eventlog on the CAS machines and if the inheritance was enabled on the user accounts. Both were ok so I began to check the IIS logs first on the 2013 and then on the 2010 machine because the 2013 CAS proxies the requests to the 2010 CAS.</p>
<p>On the 2013 CAS I could see that this users tried to logon but the session ended with a HTTP 401 (Unauthorized) Error:</p>
<p><a href="/assets/image_585.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_583.png" alt="image" width="244" height="97" border="0" /></a></p>
<p>On the CAS 2010 I checked the logs and filtered users and time when they tried to logon. The result was that in the IIS logs the domain of the users that did not sync was different from the users that worked.</p>
<p><a href="/assets/image_586.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_584.png" alt="image" width="244" height="26" border="0" /></a></p>
<p>User1 &ndash;&gt; domain\User1 <br />User2 &ndash;&gt; <span style="color: #ff0000;">domain.local</span>\User2 <br />User3 &ndash;&gt; <span style="color: #ff0000;">domain.local</span>\User3</p>
<p>I checked the devices of User2 and User3 and find out that the domain was missing in the account settings. Previously when Exchange 2010 with TMG were internet facing, TMG made this stuff working.</p>
<p>To get this fixed with Exchange and UAG you can set the default domain in IIS on the Exchange 2013 CAS servers if the device does not send the domain.</p>
<p><a href="/assets/image_587.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; margin: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="/assets/image_thumb_585.png" alt="image" width="244" height="117" border="0" /></a></p>
<p>After an IIS reset the devices can successfully connected.</p>
<p>Greetings <br />dn</p>
