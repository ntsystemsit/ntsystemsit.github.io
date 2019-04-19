---
layout: post
title: "Windows Server 2019 and RADIUS"
date: 2019-01-31
comments: true
category: Server
tags: "Server 2019" Security Firewall
author: thomas torggler
updated: false
---

First of all, happy new year :) Today we will have a quick look at Windows Server 2019, more specifically the _Network Policy Server_ role.

<!-- more -->

# Background

I was recently asked to help with an enterprise WiFi deployment and decided to use a RADIUS server for authentication purposes. I went on to deploy a new Windows 2019 VM and installed the NPS role. After adding the RADIUS client and configuring the required policies, I added the NPS server's IP address to the WiFi controller and tried to authenticate. A simple task generally, but this time it did not work.

# Troubleshooting
    
The RADIUS server was located behind a NAT device so my first guess was that I had misconfigured a policy or mistyped an address or something. I double checked the configuration and, as it looked ok, started to scratch my head. In order to better understand what was going on, I installed [wireshark](https://wireshark.org) on the NPS machine and saw packets incoming from the WiFi controller quite happily. But packet were _only_ incoming, I could not find a single response coming from NPS. The Security Event Log on the VM, where you would typically find NPS logs, had no events related to NPS. So basically the NPS was not responding to RADIUS messages at all.

# Solution

After a quick google search for "Windows 2019 NPS" I found an entry in the TechNet Forums (link below) where someone explained the Windows Firewall had to be configured to allow RADIUS (udp/1812, udp/1813) traffic even though such a rule did already exist. Sure enough, after adding the firewall rule, authentication worked.


## Links
 - [TechNet Forums](https://social.technet.microsoft.com/Forums/en-US/cf047df5-ed4a-46b9-9564-c9db5a9bc8dc/windows-server-2019-default-nps-firewall-rules-port-1812-udp-not-working)
 - [User Voice](https://windowsserver.uservoice.com/forums/295059-networking)

