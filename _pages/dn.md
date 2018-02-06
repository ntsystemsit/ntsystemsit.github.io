---
layout: page
title: Posts by Daniel Nitz
permalink: /daniel%20nitz/
menubar: false
---

<div class="home">
  <ul class="post-list">
    {% assign sorted_posts = site.posts | where: 'author', 'daniel nitz' %}
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