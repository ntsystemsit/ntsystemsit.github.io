---
layout: post
title: "lost & found: ntSystems Onion Service, Cloudflare DNS"
date: 2018-04-06
comments: true
category: "lost & found"
tags: PowerShell
author: thomas torggler
updated: false
---

It's Friday and here's another edition of lost & found.

<!-- more -->

# We're on tor

Our few twitter followers may already know it, for the rest of you here's the news: Our little website is now also available as an Onion Service. Check it out at: [ntsystcp...id.onion](http://ntsystcpyyew477akekwcn2od3vdknlehwof7cyt2vryieocos2sz4id.onion)

I've made some changes to the site in order to improve our readers privacy. Basically trying to serve all content directly and, for the Onion version, there are no Disqus comments as that requires external content and automatically loads some tracking scripts.

# Cloudflare launches 1.1.1.1

We have been using Cloudflare to enable TLS and IPv6 (and more) for quite some time now. They launched a consumer DNS service on the first day of April. No, it was no joke. The Service is available at [1.1.1.1](https://1.1.1.1) and 1.0.0.1 and, interestingly, supports [DNS over HTTPS](https://developers.cloudflare.com/1.1.1.1/dns-over-https/).

I have not been aware of DoH until now, and even though there don't seem to be any existing client implementations, it enables some nice use cases. We can now use PowerShell's `Invoke-RestMethod` to make DNS queries :)

Here's a quick function that does it:

```powershell
function Resolve-HttpsDns {
    param(
        [Parameter(Mandatory=$true)]
        [string]
        $Name,
        [string]
        $Type = "A",
        [ipaddress]
        $Server = "1.1.1.1"
    )
    $uri = -join("https://",$Server,"/dns-query")
    Invoke-RestMethod -Uri $uri -Body @{
        ct = "application/dns-json"
        name = $Name
        type = $Type.toUpper()
    } | Select-Object -ExpandProperty Answer
}
```

And there is a much more advanced module on [GitHub](https://github.com/markekraus/DNS.1.1.1.1) and the [PowerShell Gallery](https://www.powershellgallery.com/packages/DNS.1.1.1.1).

Sun's out, so let's have a cold one. Nice weekend!

Tom
