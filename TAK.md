---
layout: page
title: TAK
permalink: /PowerShell/TAK/
menubar: false
---

Tom's Admin Kit, or TAK, is a PowerShell script module that contains useful tools which I collected or created over the years. I tried to give credits where appropriate and where I could still remember the source :)

The main goal of creating the module and writing the scripts it contains, was learning PowerShell and making my job a little bit easier. As I am currently looking into continuous integration, I used this module to build an example deployment pipeline. You can read more about that [here](http://ntsystems.it/post/introducing-tak).

# Functions
<div class="home">
  <ul class="script-list">
    {% assign sorted_posts = site.tags.OnlineHelp | sort:"title" %}
    {% for post in sorted_posts %}
    {% if post.category == "TAK" %}
      <li>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | escape }}</a>
        </h2>
      </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>

{% include psgallery.html packagename="TAK" type="Module" reponame="TAK" %}
