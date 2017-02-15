---
layout: post
title: "PowerShell and Cisco RESTConf"
date: 2017-02-15 09:25:06 +0200
comments: true
category: DevOps
tags: PowerShell Training
author: thomas torggler
updated: false
---
<!-- 

Update meta-information in Front Matter.
Use "updated: 2016-10-10" to indicate a post has been modified after initial publishing.

category: use a single-value category 
tags: use a space-separated list of tags

-->

Some days ago I had the pleasure to teach a PowerShell class for some of my colleagues at work. Most of them come from a Cisco/Networking background so I decided to look into Cisco's RESTConf API to have some practical example for them. Here's what I've found.

<!-- more -->

# Basics
So what's RESTconf? If you have ever configured a Cisco device, you probably logged into it via ssh and then typed or pasted in a series of commands. No Website, no GUI, nothing but plain-text. Good times.
Fast-forward to 2017 and - no kidding - people are still doing the same thing. They might use a fancy GUI and ssh into multiple devices at once but they are still copy/pasting configuration templates from notepad into such a remote session. 

Now with the advent of SDN and the number of products out there, promising a more practical approach to manage configurations, Cisco started to build API's into their products. One of those API's, namely the NXAPI, accepts the well-known and understood commands as JSON objects. So, essentially, what this enables us to do, is to package the good, old commands into a JSON object and POST it to the API.


