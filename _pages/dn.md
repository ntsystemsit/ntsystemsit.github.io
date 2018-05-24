---
layout: page
title: Posts by Daniel Nitz
permalink: /daniel%20nitz/
menubar: false
---

<div class="home">
  <ul class="post-list">
    {%- for post in site.posts -%}
    {%- if post.author == 'daniel nitz' -%}
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