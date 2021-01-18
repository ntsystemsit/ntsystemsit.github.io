---
title: "Why is this website so fast?"
date: 2021-01-16
author: tto
tags: Jekyll ntSystems GitHub
hidden: true
image: /assets/2021/2021-01-18_10-21-13.png
twitter: 
  card: summary_large_image
---

I have recently updated our website and have learned a few things while doing so.<!-- more --> As mentioned on the home page, this website is still built with Jekyll. The so-called grandfather of static website generators is maybe not perfect, but the following reasons make it a good option for me.

1. It just works: I don't have much time to tinker with this side-project, there are no complicated, always changing dependencies like with newer, javascript-based tools (oh and no gigantic `node_modules` either)
2. It's simple: True how variables are handled is not always intuitive but I have learned enough to use it effectively
3. GitHub pages: The build process is automated, I just push my changes and the rest is taken care of

## You promised fast, what's all this?

I'm getting there. Fast websites are generally associated with more modern site generators like [Gatsby](https://gatsbyjs.com). These typically use a lot of javascript that makes them fast but also more complicated. I wanted to see, if I could get good results with good old Jekyll.

This site is fast because it's small and very simple. I'm not saying bigger sites don't need all that `node_modules` goodness, I'm saying small sites - like this one - don't need it.

This site is also fast, because I've added a few extra lines to the `head` section of the html. At the end of every post you can find a `next` navigation button that brings you to the next post. With a little help from Jekyll, I was able to include the relative URL of the next post as `link` to the `head` section with the keyword `rel=next`. This little keyword tells the browser to download the post whenever it has a free moment:

```html
{%- raw -%}
{% if page.next %}
<link rel="next" href="{{ page.next.url }}">
{% endif %}
{% endraw %}
```

The result is a super fast navigation experience because the target has already been downloaded. I'm also preloading fonts with `rel="preload"` and the little CSS we use is inlined. 

## Service workers

Another thing I learned while looking at modern websites is the concept of [service workers](https://developers.google.com/web/fundamentals/primers/service-workers/). This is a little bit of javascript that can be very powerful indeed. Essentially, a service worker is a script that is installed in the browser when a user opens the website. Once installed it can intercept and handle network requests from the browser to the site. It's a kind of proxy in your browser just for our site.

I'm using a service worker to create a local cache for use with this site. On the first visit, the service downloads a few static files that visitors will definitely need (fonts, main pages). It uses a cache-first strategy, so whenever the browser requests something, the service worker looks in the cache first and returns any results from there. After that it goes out to the site and retrieves the latest version of what the browser was looking for. If there's no cache-hit, the resource is fetched from the network.

The service worker needs a [manifest]({%link manifest.json %}) and we have to tell the browser where to find it. We add the manifest to the `head` section and use a few lines of javascript to trigger the installation of the service worker. This is the pointer to the manifest file:

```html
<link rel="manifest" href="/manifest.json">
```

And this is the code that registers the service worker in your browser after the page is loaded. I have added a condition to skip the registration if the site is accessed through localhost, which is the case when developing locally: 

```javascript
if ('serviceWorker' in navigator && !(/localhost/.test(window.location.href))) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('{{ site.baseurl }}/serviceworker.js')
    console.log('Servie worker registered.');
  });
}
```

## Faster build times with Jekyll on WSL

I have [used]({% link _posts/2017-04-24-Jekyll-on-WSL.md %}) Jekyll on Windows 10 leveraging the Windows Subsystem for Linux since 2017. Today I realized that actually storing the files within WSL makes the build time much (much) faster. Until today I stored the repository in my Windows user profile, something like `C:\users\tto\...`. In the WSL I happily changed into this directory following `/mnt/C/Users...` before running `jekyll serve`. Build time was around 5 minutes. Not great. 

Today it ocurred to me to clone the repository again, this time into the WSL. So I can access it using a WSL path, something like `/home/tto/...`. Build time is now less than one minute. Not bad.

## WebpageTest results

You don't have to take my word for it, [webpagetest](https://webpagetest.org/result/210118_DiMH_f1f144faef540fc0069cf3b56982c94c/) also thinks this website is pretty fast: 

{% include img.html img="/assets/2021/2021-01-18_9-37-430.gif" srcset="/assets/2021/2021-01-18_9-37-430.gif 430w, /assets/2021/2021-01-18_9-38-137.gif 137w" alt="webpagetest results" %}

&mdash; Tom 