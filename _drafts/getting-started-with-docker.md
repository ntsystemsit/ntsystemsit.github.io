---
layout: post
title: "Getting started with Docker"
date: 2016-11-04 09:25:06 +0200
comments: true
category: DevOps
tags: docker container macOS
author: thomas torggler
---
Docker gets a lot of attention these days, I finally managed to have a look at it the other day and see what it could do for me. 

<!-- more -->

# Docker?
Is a container orchestration tool.

# Docker Client
My primary work machine [these days]({{ site.url }}/post/getting-started-with-osx) is a MacBook Pro running macOS Sierra. I thought it would be best to run the docker client on my Mac and use a remote host to run the docker engine. This remote host is just a CentOS VM on my MacBook. 

To install the docker client on my Mac, all I had to do, was:

```
$ brew install docker
```


# Docker Engine
The docker engine is the server-side component that actually runs the containers. The required steps for installation on many platforms can be found in the [Docker Docs](https://docs.docker.com/engine/installation/)

To get it up and running on my CentOS Minimal install, I had to do the following steps:


# Docker Hub
Docker is all about sharing containers. Public or private registries can be used by clients to search, download or publish containers. One such public registry is run by the good people at [Docker Hub](https://hub.docker.com).

```
$ docker search 
```