---
title: Welcome
layout: page
date: 2021-01-11
---

**{{ site.title }}** is the evolution of ntsystems.it. It contains a complete [archive]({% link post.md %}) of the old site as well as new content. 

Just like the old site, this site is **free**. There are no trackers, no ads, no cookies. However, we do store the name of the theme you choose in your browser's local storage and we use a service worker to store static files and pages you visited in your browser's cache storage. That makes the site [installable](https://web.dev/discover-installable/), [fast]({% link _posts/2021-01-16-why-is-this-website-fast.md %}), and it will continue to work even if you're offline.

## Popular Tags
{: .bold-title}

Since 2009 we have written {{ site.posts.size }} posts. You can browse our more popular topics below or find [all tags](/Tags) in the menu above.

{% assign tags_max = 0 %}
{% for tag in site.tags %}
    {% if tag[1].size > tags_max %}
    {% assign tags_max = tag[1].size %}
    {% endif %}
{% endfor %}

<ul class="tagscontainer">
{%- for i in (1..tags_max) reversed -%}
{%- for tag in site.tags -%}
{% if tag[1].size == i and tag[1].size > 4 %}
<li class="tag"><a href="{{ site.baseurl }}/Tags/{{ tag[0]}}">{{ tag[0] }}</a><span class="float-right">{{ i }}</span></li>
{% endif %}
{%- endfor -%}
{%- endfor -%}
</ul>

## Recent Posts
{: .bold-title}

<aside class="post-list">
{% for post in site.posts limit:3 %}
<div itemscope>
    <h2 class="post-title" itemprop="headline"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    {%- include post-meta.html -%}
    {{ post.excerpt }}
</div>
{% endfor %}
</aside>

## Archive
{: .bold-title}

You can find an archive of all posts here: [Archive]({% link post.md %})
