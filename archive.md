---
title: Archive.
layout: pagewt
---

# Search.

<form action="{{ site.baseurl }}/search" method="get">
  <input placeholder="Find&hellip;" type="search" id="search-box" name="query" class="search-input">
</form>

# Archive.

<div>
{%- for post in site.posts -%}
    <div class="post-list">
        <h2 class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        {%- include post-meta.html -%}
        {{ post.excerpt }}
    </div>
{%- endfor -%}
</div>
