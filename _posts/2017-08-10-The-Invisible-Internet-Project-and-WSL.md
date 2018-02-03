---
layout: post
title: "The Invisible Internet Project and WSL"
comments: true
category: Privacy
tags: PowerShell Cloud
author: thomas torggler
updated: 2018-01-22
---

The Windows Subsystem for Linux can be used to run quite a few interesting things on Windows, one of them is the Invisible Internet Project or i2p. 

<!-- more -->

# Install i2p

First of all we'll have to install _i2p_ on our system. Before starting the installation, we have to add the required repository:

```
sudo apt-add-repository ppa:i2p-maintainers/i2p
sudo apt-get update
sudo apt-get install i2p
```

After the installation we can start the _i2prouter_ with the following command:

```
i2prouter start
```

As soon as the service  is running, we can access the homepage using _http://127.0.0.1:7657/home_ likewise the configuration page is available at _http://127.0.0.1:7657/config_

# Configure Proxy

For testing, we don't have to change anything in the home or configuration pages and we can just point our systems proxy configuration to i2p. The _i2prouter_ listens on ports 4444 and 4445 for http and https traffic, respectively.

![proxy config]({{ site.url }}/assets/2017/2017-08-10-i2pproxyconfig.png)

Now you will soon notice that pointing your system's proxy to i2p will allow you to browse _.i2p_ sites but the "clear" intertnet will no longer work very well. 

Unlike [tor](https://www.torproject.org/), i2p is not intended to be used as proxy to the internet, but it's purpose is to enable secret communication to resources inside the i2p network. Therefore it does not make a lot of sense to route all internet traffic trough i2p, it's enough if we use the _i2prouter_ to access _*.i2p_ domains. 

# Install Privoxy

To get that done, i.e. routing only requests to _.i2p_ domains to the _i2prouter_, we'll need another small proxy that is capable of routing requests based on pattern. Let's install _privoxy_: 

```
sudo apt-get install privoxy
```

After installing privoxy, we'll have to configure it so that it routes requests to _*.i2p_ domains to _i2prouter_ which runs at _localhost:4444_: 

Use your favorite editor to update the config file at `/etc/privoxy/config` and add the following line: 

```
forward .i2p localhost:4444
```

Now restart privoxy `sudo /etc/init.d/privoxy restart` and set the systems proxy configuration to _127.0.0.1:8118_.

# Setting the proxy with PowerShell and PAC

Constantly changing the proxy configuration does not work really well, I forget that I've set the proxy and if _privoxy_ is not running, I have to disable the proxy in order to access the internet. In the first iteration, I wrote two quick and dirty PowerShell functions to enable/disable the proxy settings:

```powershell
Function Disable-Proxy {
    $reg="HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings"
    Set-ItemProperty -Path $reg -Name ProxyEnable -Value 0
    Set-ItemProperty -Path $reg -Name ProxyServer -Value ""
}
Function Enable-Proxy {
    param($proxyServer = "localhost:8118")
    $reg="HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings"
    Set-ItemProperty -Path $reg -Name ProxyEnable -Value 1
    Set-ItemProperty -Path $reg -Name ProxyServer -Value $proxyServer
}
```

I put these in my `$PROFILE` and used them for a few days. It was ok, but there had to be a better solution... So I started to look into PAC or "Proxy auto-config" which is a configuration file that defines how web browsers can automatically choose the appropriate proxy server. Read more on [Wikipedia](https://en.wikipedia.org/wiki/Proxy_auto-config)

Long story short, I ended up using the following configuration file: 

```
function FindProxyForURL(url, host) {
        // .onion URLs need a proxy:
        if (shExpMatch(host, "*.onion"))
        {
                return "PROXY localhost:8118";
        }

        // other requests go directly
        return "DIRECT";
}
```

Save the function above to a text file called _proxy_ (without extension) and put it in `C:\Windows\system32\drivers\etc\` and set the systems AutoConfigUrl to: `file://C:/Windows/system32/drivers/etc/proxy`


Enjoy
Tom
