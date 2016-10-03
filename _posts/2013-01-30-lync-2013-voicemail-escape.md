---
layout: post
title: "Lync 2013 – Voicemail Escape"
date: 2013-01-30 18:28:00 +0100
comments: true
published: true
excerpt_separator: <!-- more -->
categories: Archive
tags: ["Server", "Lync"]
redirect_from: ["/post/Lync-2013-Voicemail-Escape", "/post/lync-2013-voicemail-escape"]
author: thomas torggler
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>With the availability of all Office Wave 15 products, Lync 2013 piloting has begun. Exciting times :)</p>
<p>So, this is a quick post about a new feature in Lync Server 2013, voicemail escape. What this does is, essentially providing a &ldquo;too soon&rdquo; timer for PSTN calls. Ok, you might say, why do I need such a thing?</p>
<p>Well, if an enterprise voice user configures simultaneous ringing on her mobile phone, and that phones battery died or she wandered into an area with no network coverage, her provider&rsquo;s voicemail would answer. Now, even if she was sitting on her desk, she might never get the call, as the caller would always go to her voicemail. Voicemail escape defines a timer using the &ldquo;Set-CsVoicePolicy&rdquo; cmdlet, if a call is answered before that timer elapsed, Lync would ignore that answer and keep the call on premises.</p>
<h1>Enable the VoicemailEscapeTimer:</h1>
<p>Set-CsVoicePolicy -EnableVoicemailEscapeTimer:$true -PSTNVoicemailEscapeTimer:5000</p>
<p>EnableVoicemailEscapeTimer enabled the timer. <br />PSTNVoicemailEscapeTimer sets the timer (in ms) used to determine whether or not a call has been answered &ldquo;too soon&rdquo;.</p>
<h1>Monitoring</h1>
<p>The Lync Monitoring server shows those ignored answers with a SIP Response Code of 480 and a Reason of: &rsquo;Terminating call as it is answered earlier than the specified voicemail escape timer&rsquo;</p>
<p><a href="/assets/image_484.png"><img style="display: inline; border-width: 0px;" title="image" src="/assets/image_thumb_482.png" alt="image" width="244" height="64" border="0" /></a></p>
<p>The Lync Server Logging tool (Component: S4, Level: All) shows the timer in the SIP INVITE packet as:</p>
<p><code>ms-vm-escape-timer: 5000</code></p>
<p>You may have to tune the timer depending on your setup and the providers you are using. I had to set it pretty high to actually see an effect.</p>
<p>so long, <br />tom</p>
