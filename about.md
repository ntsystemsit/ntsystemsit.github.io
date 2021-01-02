---
title: About.
layout: grid
---

{%- for post in site.posts -%}
<div class="post-title borderl">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    {%- include post-meta.html -%}
    {{ post.excerpt }}
</div>
{%- endfor -%}
