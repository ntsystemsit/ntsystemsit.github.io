---
layout: page
title: English
permalink: /en/
menubar: true
---

<div class="home">
  <ul class="post-list">
    {%- for post in site.posts -%}
      {%- if post.language == 'en' -%}
      <li>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | escape }}</a>
        </h2>
      </li>
      {%- endif -%}
    {%- endfor -%}
  </ul>
</div>