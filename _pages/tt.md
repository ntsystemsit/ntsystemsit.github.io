---
layout: page
title: Posts by Thomas Torggler
permalink: /thomas%20torggler/
menubar: false
---

<div class="home">
  <ul class="post-list">
    {%- for post in site.posts -%}
    {%- if post.author == 'thomas torggler' -%}
      <li>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | escape }}</a>
        </h2>
        {%- include post-meta.html -%}
      </li>
      {%- endif -%}
    {%- endfor -%}
  </ul>
</div>
{%- include scrolltop.html -%}