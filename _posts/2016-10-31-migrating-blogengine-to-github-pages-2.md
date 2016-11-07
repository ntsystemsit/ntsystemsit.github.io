---
layout: post
title: "Migrating from BlogEngine to GitHub Pages: Fixing the links"
date: 2016-10-31 21:49:06 +0200
comments: true
category: ntSystems
tags: migrate jekyll

author: thomas torggler
---

In this episode of our little series on migration we are having a look at the URL structure of Jekyll and some of the less visible stuff that was associated with the old ntSystems.

<!-- more -->

All the existing URLs on our BlogEngine-based blog used both, upper- and lowercase letters, and had an filename extension of `.aspx`. Now Jekyll does not use filename extensions (or at least doesn't display them) and it uses all lowercase letters in URLs.

Additionally we moved from https-enabled to https-only and the usage of a `www.` hostname was not defined. So all of those URLs would have worked on the old blog:

- http://ntsystems.it/CONTACT.aspx
- https://ntsystems.it/contact.aspx
- http://www.ntsystems.it/contact.aspx
- ...

You see, it was a mess. On the current version of ntSystems, only the following URL will work:

- https://ntsystems.it/contact/

But what about existing links from social media, other blog posts, or where ever else, you ask? Well the solution is twofold. First, enter...

## Cloudflare
We have been using [Cloudflare](https://www.cloudflare.com) for a while to easily enable IPv6 and and https even for our old blog. Now another feature, Page Rules, comes in very handy indeed. In fact a single rule is enough to get rid of the `.aspx` extensions:

![cloudflare]({{ site.url }}/assets/2016/20161031-cloudflare.png)

If the URL matches `*ntsystems.it/*.aspx` forward the request to `https://ntsystems.it/$2` where `$2` is the stuff that was matched by the second asterisk `*` in the matching pattern. Easy enough!

## Jekyll URL structure
The second part of getting URLs right is instructing Jekyll to make them the same as before, without `.aspx`. And it turns out, that's not to hard, either:

The following setting in our `_config.yml` file tells Jekyll to build all posts in the `/post/` directory.

```yml
permalink: /post/:title
```

The title property was copied into the front matter by the [script]({{ site.url }}/post/migrating-blogengine-to-github-pages-1) we used to migrate the posts. Quite ready, but not yet.

We still have to deal with the uppercase/lowercase filenames in the URLs. We ended up using [JekyllRedirectFrom](https://github.com/jekyll/jekyll-redirect-from) to work around that. We just added the `'jekyll-redirect-from'` gem to our `Gemfile` and used the migration script to add an uppercase version of the filename to the front matter like this:

```
redirect_from: ["/post/Azure-File-Services", "/post/azure-file-services"]
```

URLs. Check.

# RSS
BlogEngine used a number of `.axd` scripts/handlers as endpoints for things like the RSS feed, the sitemap file, or a metaweblog extension. Obviously, the `/syndication.axd` URL does no longer work on Jekyll, a simple `/feed.xml` file is used instead.
I tried various redirection methods but found that RSS clients (like [The Old Reader](https://theoldreader.com)) ignored them and the feed would go dead.

After some testing I found that I could create a directory with the name of `syndication.axd` and simply put an `index.html` into it. Jekyll does not show the `index.html` in the URL, therefore the URL would still be `/syndication.axd`. I copied the content of `feed.xml` into the `/syndication.axd/index.html` and, voilá, the existing RSS link continued to work.

# Sitemap
The URL of the `sitemap.axd` file is less important as it's only used by search engines and not by users. So we just created a new `sitemap.xml` file and pointed the search engines to this new file. Additionally, we updated the `Sitemap` property in our `robots.txt` file.

Well, and that's it for today. Happy Halloween! :)
Tom
