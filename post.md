---
title: Archive.
layout: pagewt
---

# Search.

{% include searchbar.html %}

# Archive.

<div id="search-results" class="post-list">
{%- for post in site.posts -%}
    <h2 class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    {%- include post-meta.html -%}
    {{ post.excerpt }}
{%- endfor -%}
</div>
