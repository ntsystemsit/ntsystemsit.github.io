---
layout: page
title: PowerShell
permalink: /PowerShell/
menubar: true
---
<div class="home">

  <ul class="post-list">
    {% for post in site.tags.OnlineHelp %}
    {% if post.category == "PowerShell" %}
      <li>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | escape }}</a>
        </h2>
        {% include post-meta.html %}
        {{ post.content | strip_html | truncatewords: 20 }}
      </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>