---
layout: page
permalink: /tags/
title: "Tags"
---

{% include group-by-array collection=site.posts field="tags" %}
<div class="post-content">
    {% for tag in group_names %}
        {% assign posts = group_items[forloop.index0] %}
        <h1 id="{{ tag | slugify }}">{{ tag }}</h1>
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
