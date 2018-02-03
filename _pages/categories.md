---
layout: page
permalink: /categories/
title: "Categories"
---

{% include group-by-array collection=site.posts field="category" %}
<div class="post-content">
    {% for category in group_names %}
        {% assign posts = group_items[forloop.index0] %}
        <h1 id="{{ category | slugify }}">{{ category }}</h1>
        <ul class="post-list">
        {% for post in posts %}
            <li>
                <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | escape }}</a>
                {{ post.content | strip_html | truncatewords: 50 }}
            </li>
        {% endfor %}
        </ul>
    {% endfor %}
</div>
