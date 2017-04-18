---
layout: post
title: "Lync SDN API and Cisco WLC"
date: 2016-06-26 19:39:00 +0200
comments: true
category: Lync
tags: ["Lync", "Cisco", "en"]
redirect_from: ["/post/Lync-SDN-API-and-Cisco-WLC", "/post/lync-sdn-api-and-cisco-wlc"]
author: thomas torggler
updated: 2017-04-18 10:01:00 +0200
---

Some days ago I had the chance to test Cisco’s Wireless LAN Controllers with the Lync Software Defined Networking (SDN) API.

<!-- more -->

For those who don’t know what SDN API is, a quick overview: You can basically think of the SDN API as a little add-on, that can be installed on Lync Front End Servers, and that allows Lync to “let the network know” what’s going on from it’s perspective. The SDN API is made up of two components, the Lync Dialog Listener (LDL) and the Lync SDN Manager (LSM). The LDL component is installed on each Front End Server, and sends information to the LSM. The LSM forwards information to a so called SDN Controller, which, in our case, is the Cisco WLC.

More information and the API documentation is available on the MSDN: [https://msdn.microsoft.com/en-us/library/office/dn387071.aspx](https://msdn.microsoft.com/en-us/library/office/dn387071.aspx)

![LDL-LSM-NetController]({{ site.url }}/assets/archive/image_726.png)

# The WLC Side

The SDN Controller has to accept and process information coming from the LSM, Cisco has built this&nbsp; functionality into it’s Wireless LAN Controller software from 7.6. We used 8.2 in this example. First we need to define a port, protocol, and enable the “Lync Server” option globally. This can be done using the “Lync Server” option in the “Wireless” tab:

![wlc_config]({{ site.url }}/assets/archive/image_727.png)

Now that the WLC listens for information, we’ll have to tell it, what to do with. Using the “WLANs” tab, we created a new SSID, enabled “Lync Server” and selected the appropriate QoS policy for each type of traffic:

![wlc_config]({{ site.url }}/assets/archive/image_728.png)

A quick excerpt from `show wlan` shows the QoS settings:

```
Local Policy
---------------
Policy Name                                       Priority
---------------                                   --------  
Lync State ...................................... Enabled
Audio QoS Policy................................. Platinum
Video QoS Policy................................. Gold
App-Share QoS Policy............................. Silver
File Transfer QoS Policy......................... Bronze
```

# The Lync Side

Meanwhile, we’ve installed the Lync SDN Manager on a dedicated server, as it’s not recommended to run it on the Front Ends (and it didn’t work either). The LSM is configured through a configuration file `SDNManager.exe.config`, which can be found in the LSM’s installation directory: `C:\Program Files\Microsoft Lync Server\Microsoft Lync SDN API\`

The configuration is quite simple, the value `submituri` specifies the WLCs IP Address and Port, additionally, the value for `backwardcompatibility` must be set to `true`:

```
<appSettings>
    <add key="submituri" value="http://172.25.81.105:15120"/>
    <add key="backwardcompatibility" value="true"/>
```

With the LSM configured, we installed the Dialog Listener on the Front End Server. During setup, we are asked for the `submituri` so we don’t even have to edit the config file in this case. Note that the submit URI for the LDL points to the LSM. 
The configuration file for the LDL can be found here: `C:\Program Files\Microsoft Lync Server\Microsoft Lync SDN API\LyncDialogListener.exe.config`:

```
<appSettings>
  <add key="submituri" value="http://srv01.ccielab.local:9333/LDL/CallInfo"/>
```

# The Client Side

Now we were ready for some testing and connected our clients to the new SSID. After signing into Lync and making some calls, we were able to verify that they appeared in the WLC’s “Monitoring” tab. 

![wlc_wlan]({{ site.url }}/assets/archive/image_729.png)

Using Wireshark, we were able to verify the DSCP values for incoming packets from the WLAN:

![wireshark]({{ site.url }}/assets/archive/image_730.png)

Last but not least, we had a look at the POST requests from the LSM to the WLC. As we are not using https, they are sent in clear-text and can be analyzed using Wireshark’s “Follow TCP stream” feature:

```
POST /LDL/CallInfo HTTP/1.1
Content-Type: text/xml
Accept: text/xml
Host: srv01.ccielab.local:9333
Content-Length: 2823
Expect: 100-continue</p>

HTTP/1.1 100 Continue

<LyncDiagnostics Version="1.0">
  <ConnectionInfo>
    <FrontEnd>s4b</FrontEnd>
    <CallId>8a5ee59e7f24cc47a8a5e5ef5408164b</CallId>
    <CSEQ>3</CSEQ>
    <ConversationId>AdHItACZ40eYIzsElkmUXxEpJfdLYA==</ConversationId>
    <TimeStamp>2016-06-17T16:36:16.0502033Z</TimeStamp>
  </ConnectionInfo>
  <StartOrUpdate Type="audio">
    <From>
      <Id>1c36b0157b</Id>
      <EPId>591fcf6a94</EPId>
      <URI>sip:9EDEEC6DC6AD3929EF68B672BCC8C2BB@ccielab.local</URI>
      <IP>172.25.81.237</IP>
      <Port>21448</Port>
    </From>
    <To>
      <Id>94b8a54712</Id>
      <EPId>213808492931</EPId>
      <URI>sip:AA6B09353F1F13116DC23FFDDB2A407F@ccielab.local</URI>
      <Contact>sip:AA6B09353F1F13116DC23FFDDB2A407F@ccielab.local;
      opaque=user:epid:vaj8zwoldfc0zkl6hghhoaaa;gruu</Contact>
      <IP>172.25.81.238</IP>
      <Port>11616</Port>
    </To>
    <Properties>
      <Protocol>UDP</Protocol>
      <EstimatedBandwidth Codec="SIREN/16000">
        <Low>52600</Low>
        <High>68600</High>
      </EstimatedBandwidth>
      <EstimatedBandwidth Codec="PCMU/8000">
        <Low>97000</Low>
        <High>161000</High>
      </EstimatedBandwidth>
      <EstimatedBandwidth Codec="PCMA/8000">
        <Low>97000</Low>
        <High>161000</High>
      </EstimatedBandwidth>
      <EstimatedBandwidth Codec="RED/8000" />
      <EstimatedBandwidth Codec="CN/8000" />
      <EstimatedBandwidth Codec="CN/16000" />
      <EstimatedBandwidth Codec="telephone-event/8000" />
    </Properties>
  </StartOrUpdate>

…

<StartOrUpdate Type="video">
  <From>
    <Id>94b8a54712</Id>
    <EPId>213808492931</EPId>
    <URI>sip:AA6B09353F1F13116DC23FFDDB2A407F@ccielab.local</URI>
    <IP>172.25.81.238</IP>
    <Port>15150</Port>
  </From>
  <To>
    <Id>1c36b0157b</Id>
    <EPId>591fcf6a94</EPId>
    <URI>sip:9EDEEC6DC6AD3929EF68B672BCC8C2BB@ccielab.local</URI>
    <Contact>sip:9EDEEC6DC6AD3929EF68B672BCC8C2BB@ccielab.local;
    opaque=user:epid:a_6tcapa01gtycf5ts8qnqaa;gruu</Contact>
    <IP>172.25.81.237</IP>
    <Port>6490</Port>
  </To>
  <Properties>
    <Protocol>UDP</Protocol>
    <EstimatedBandwidth Codec="x-rtvc1/90000">
      <Low>460000</Low>
      <High>2510000</High>
    </EstimatedBandwidth>
  </Properties>
</StartOrUpdate>
```

As you can see, the LSM uses simple http POST requests to send information to a network controller. The network controller just has to “listen” for such data and act on it.

This concludes our journey into the wireless network for today, hope you enjoyed it as much as I did :)

Many thanks to my colleague and fellow call-quality-optimizer KD!

Cheers,
Tom
