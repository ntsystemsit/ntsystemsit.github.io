---
layout: page
title: PowerShell
permalink: /PowerShell/
menubar: true
---

On this page we are linking to the online-help articles that are available for our various PowerShell scripts and modules.

# Modules
<div class="home">
  <ul class="script-list">
    <li>
      <a class="post-link" href="{{ '/PowerShell/TAK/' | prepend: site.baseurl }}">TAK</a>
    </li>
  </ul>
</div>

# Scripts
<div class="home">
  <ul class="script-list">
    {% assign sorted_posts = site.tags.OnlineHelp | sort: 'title' %}
    {% for post in sorted_posts %}
    {% if post.category == "PowerShell" %}
      <li>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | escape }}</a>
        </h2>
      </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>
