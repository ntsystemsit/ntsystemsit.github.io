---
layout: post
title: "lost & found: Updates and no more tracking on ntSystems.it"
date: 2018-06-03 19:25:06 +0200
comments: true
category: lost and found
tags: Jekyll ntSystems
author: tto
date_modified: false
---

I've recently updated the sources of the blog and moved to the gem-based version of the minima theme. This should make the site easier to maintain in the future.

<!-- more -->

On the old, blogengine-based site, we used Google Analytics to get some information about our readers.  Since the migration to GitHub pages and Jekyll, I've tried to remove external scripts and tracking as much as possible.

This is just a static website with some free (as in beer) content we'd like to share. We do no longer inject any tracking code and the few scripts we use are served directly from GitHub pages. But, until recently, there was one last exception to this: the comments. We've used Disqus comments for a long time now and I don't really see a need to change that. 

However, as the comments iFrame is loaded from an external source (and may include tracking code), I've decided to stop automatically loading the iFrame and instead give you, the reader, an option to load it.

From now on, you'll see a "Show comments." link at the bottom of each post and only after clicking the link, external content is loaded.

What do you think? Leave a comment below ;)

Tom