---
layout: post
title: "Jekyll Fun: Consuming ntSystems with PowerShell"
date: 2017-03-31 18:45:06 +0200
comments: true
category: ntSystems
tags: Jekyll ntSystems
author: thomas torggler
updated: false
---

As you might have [read before](https://ntsystems.it/post/Welcome-to-the-all-new-ntSystems), our little blog is powered by Jekyll. Well I stumbled over the `jsonify` filter the other day, and so I built a little "kind-of" API :) Sound interesting? Read on.

<!-- more -->

# How

It all started with search, I was looking for a search feature for our blog. After some testing with [Algolia](https://www.algolia.com) I stumbled over [this great post](http://katydecorah.com/code/lunr-and-jekyll/) by Katy. She's using [lunr.js](http://lunrjs.com) with Jekyll. I liked the client-side approach of lunr.js and that it has no external dependencies, so I adopted Katy's implementation for our site and, voilà, we have [search](https://ntsystems.it/search/). So, why do I keep talking about search? Well lunr.js consumes data in as *json* objects, so that's how I learned about the `jsonify` filter.

After some playing around with curly braces and the `forloop` in [liquid](https://help.shopify.com/themes/liquid/objects/for-loops) I ended up creating the first version of our so-called API.

Basically, what I'm doing is looping through the posts and creating json objects.

<script src="https://gist.github.com/tomtorggler/45bd5478bc8d3542cb7ddb84e2c8eee7.js"></script>

I created a few different folders to expose different information, but more about that in the examples below.

# Use Invoke-RestMethod to consume the json

There are various "endpoints" available, we can get meta information about the site at `/meta/` or a list of all pages and posts at `/pages/`and `/posts/`, respectively.

In the following example, we're getting all posts with a *Category* of *ntSystems* and then just select the *tags* property:

```powershell
PS /Users> Invoke-RestMethod https://ntsystems.it/api/v1/posts/ | 
Select-Object -ExpandProperty items | 
Where-Object category -eq ntSystems | 
Select-Object tags

tags
----
{migrate, jekyll}
{migrate, jekyll}
{update, jekyll}

```

Alternatively, we can get list of all categories, just like that:

```powershell
PS /Users> Invoke-RestMethod https://ntsystems.it/api/v1/posts/ | 
Select-Object -ExpandProperty items | 
Select-Object Category -Unique

category
--------
Cloud
Azure
Dev
...

```

Awesome, right? 

Well, that's all for today. Enjoy your weekend!

Tom 
