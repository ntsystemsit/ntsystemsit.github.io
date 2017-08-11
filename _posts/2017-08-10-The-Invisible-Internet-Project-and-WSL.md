---
layout: post
title: "The Invisible Internet Project and WSL"
comments: true
category: Privacy
tags: PowerShell Cloud
author: thomas torggler
updated: false
---

The Windows Subsystem for Linux can be used to run quite a few interesting things on Windows, one of them is the Invisible Internet Project or i2p. 

<!-- more -->

# Install i2p

First of all we'll have to install `i2p` on our system. Before running installing it with `apt` we have to add the required repository:

```
sudo apt-add-repository ppa:i2p-maintainers/i2p
sudo apt-get update
sudo apt-get install i2p
```

After the installation we can start the `i2prouter` with the following command:

```
i2prouter start
```

As soon as the service  is running, we can access the homepage using _http://127.0.0.1:7657/home_ likewise the configuration page is available at _http://127.0.0.1:7657/config_

# Configure Proxy

For testing, we don't have to change anything in the home or configuration pages and we can just point our systems proxy configuration to i2p. The `i2prouter` listens on ports 4444 and 4445 for http and https traffic, respectively.

![proxy config]({{ site.url }}/assets/2017/2017-08-10-i2pproxyconfig.png)

Now you will soon notice that pointing your system's proxy to i2p will allow you to browse `.i2p` sites but the "clear" intertnet will no longer work very well. 

Unlike [tor](https://www.torproject.org/), i2p is not intended to be used as proxy to the internet, but it's purpose is to enable secret communication to resources inside the i2p network. Therefore it does not make a lot of sense to route all internet traffic trough i2p, it's enough if we use the `i2prouter` to access _*.i2p_ domains. 

# Install Privoxy

To get that done, i.e. routing only requests to .i2p domains to `i2prouter`, we'll need another small proxy that is capable of routing requests based on pattern. Let's install privoxy: 

```
sudo apt-get install privoxy
```

After installing privoxy, we'll have to configure it so that it routes requests to `*.i2p` domains to `i2prouter` which runs at _localhost:4444_: 

Use your favorite editor to update the config file at `/etc/privoxy/config` and add the following line: 

```
forward .i2p localhost:4444
```

Now restart privoxy `sudo /etc/init.d/privoxy restart` and set the systems proxy configuration to _127.0.0.1:8118_.
