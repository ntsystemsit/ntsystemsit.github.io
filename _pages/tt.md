---
layout: page
title: Posts by Thomas Torggler
permalink: /thomas%20torggler/
menubar: false
---

<div class="home">
  <ul class="post-list">
    {% assign sorted_posts = site.posts | where: 'author', 'thomas torggler' %}
    {% for post in sorted_posts %}
      <li>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | escape }}</a>
        </h2>
        {% include post-meta.html %}
      </li>
    {% endfor %}
  </ul>
</div>

{% include scrolltop.html %}