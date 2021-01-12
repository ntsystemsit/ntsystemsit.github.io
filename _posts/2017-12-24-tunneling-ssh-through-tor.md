---
layout: post
title: "Tunneling SSH through Tor"
date: 2017-12-24
comments: true
category: Privacy
tags: WSL Cloud
author: thomas torggler
date_modified: false
---

I've been using [Onion Services](https://www.torproject.org/docs/onion-services) aka. _Hidden Services_ to connect to remote machines for some time now. Tor clients can connect to such services through the Tor network, there is no need to know the IP address of the destination machine, likewise there is no need to configure inbound port mappings or firewall rules. 

<!-- more -->

# Destination (running the Onion Service)

On the destination machine, we need to install Tor. For best results follow the instructions [here](https://www.torproject.org/docs/debian.html.en).

Once installed, we configure the hidden service in the `/etc/tor/torrc` configuration file. Find the section dedicated to hidden services in the file and create a new service or uncomment on of the examples.

```
HiddenServiceDir /var/lib/tor/my_hidden_service/
HiddenServicePort 80 127.0.0.1:80
HiddenServicePort 2244 127.0.0.1:22
```

The above example, creates a service with the name of `my_hidden_service` which will listen on port 80 and provide whatever runs on `127.0.0.1:80` over the Tor network. It will also listen on port 2244 and provide ssh (which runs on `127.0.0.1:22`) as a hidden service.

## Securing SSH

As you are essentially making your sshd accessible to the whole Tor network, it might be a good idea to disallow password authentication and root access. To do that, make sure your `/etc/ssh/sshd_config` contains the following lines:

```
PasswordAuthentication no
PermitRootLogin prohibit-password
```

## Hostname and Keys

After configuring the Onion Service, restart the Tor service: `sudo service tor restart`. After it has started, the hidden service directory (as configured in `HiddenServiceDir`) will have been created and we can find two files in the directory. The `hostname` file contains the hostname that we need on the client side in order to connect to the service.

```
sudo cat /var/lib/tor/my_hidden_service/hostname
xxxxxxx.onion
``` 

# Client (accessing the Onion Service)

To connect to the first hidden service, a website running on port 80, we can simply use [Tor Browser](https://www.torproject.org/projects/torbrowser.html.en) and open the hostname we found in the hidden service directory above. To connect via SSH, there are multiple options but first, we do also need to install Tor. Again for best results follow the official instructions. 

On WSL I was able to install it by simply using `sudo apt-get install tor`. We will also need the `nc` tool from the `netcat-openbsd` package, if it is not available on your system, install it using: `sudo apt-get install netcat-openbsd`.

Once installed, start tor by typing `tor --runasdaemon 1`. 

## torify

Torify comes with the installation of the Tor package on the client and is a simple wrapper that tries to connect a given application through Tor.

```
torify ssh tom@xxxxxxx.onion 2244
```

The above example connects ssh to the .onion address on port 2244. On my system, torify throws a few errors but finally works well enough.

## .ssh/config

Another option is to add the destination hostname to the ssh config file of the client. This can typically be found in the users profile directory at `.ssh/config`.

Simply add a line for each destination you want to connect to. The `ProxyCommand` uses the `nc` tool, to tunnel the connection through `127.0.0.1:9050` which is the clients Tor endpoint.

```
Host t01
 HostName xxxxxxxx.onion
 port 2244
 ProxyCommand nc -X 5 -x 127.0.0.1:9050 %h %p
``` 

Please note, on Mac OS I had to use `ncat` instead of `nc`, so the ProxyCommand looks like:

```
   proxyCommand ncat --proxy rhel01:9050 --proxy-type socks5 %h %p
```

> A final note on privacy: This guide is meant to help connect to remote systems behind NAT routers or firewalls with and changing public IPs. Think connect to your home network from work. It is not meant to provide the best possible privacy. For that, please refer to the official documentation.


Have fun!

Tom
