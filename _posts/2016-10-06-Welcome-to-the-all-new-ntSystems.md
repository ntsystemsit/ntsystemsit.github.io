---
layout: post
title:  "Welcome to our new blog!"
date:   2016-10-05 22:21:04 +0200
comments: true
category: ntsystems
tags: update jekyll
author: thomas torggler
---

This site has been running on [Azure Web Sites for some time](https://ntsystems.it/post/moving-to-azure). As we are doing this for fun and are not making any money with the site (see any ad?) we had to use the "Shared" pricing tier which was economically acceptable but from a performance and feature point-of-view, well, not great. We used [Cloudflare](https://www.cloudflare.com) to get some caching and enable stuff like https and IPv6 for the site and it was OK :) Then came...

<!-- more -->

# ...Jekyll
Recently I started publishing some of the PowerShell code I'm writing to [GitHub](https://githum.com/tomtorggler) and while browsing around, I stumbled over a static page generator, called Jekyll. I was quite impressed and started hacking around for a little while... after a couple of train rides I was happy with the result and decided to give it a go. So, that's it: 

> Welcome to our new home on GitHub!

As of 2016-10-02 we moved to Jekyll. The current version of our little blog is hosted on GitHub Pages and uses a slightly modified version of the default Minima theme for [Jekyll](http://jekyllrb.com/).

# Tools
As this is now, essentially, a static website, we have to use some tools to make it as awesome as possible:

- [Cloudflare: Security, IPv6, TLSv3, Page Rules... and more awesomeness](https://cloudflare.com)
- ~~[Algolia: Search as a Service](https://www.algolia.com/)~~
- [lunr.js: Full-text search in your browser](http://lunrjs.com)
- [Favicon Generator](http://realfavicongenerator.net/)
- [Shariff: Share without compromising privacy](https://github.com/heiseonline/shariff)
- [Disqus: Comments](https://disqus.com)

# Work in progress
This migration is a work in progress and therefore not all features the good, old ntsystems.it are available as of today. I intend publishing a few lines about the migration itself, and keeping it up-to-date as we move along and build new features into the site.


We do hope you enjoy our new look. It is all open source, so if you are interested in how we do stuff, just check out [our repo](https://github.com/tomtorggler/tomtorggler.github.io)
Oh and if you find any errors you'd wish to correct, please just send us a pull-request :-)


So long,
Tom