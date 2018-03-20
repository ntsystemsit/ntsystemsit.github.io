---
layout: page
title: Tags
permalink: /tags/
---
<div class="post-content">
<ul class="tag-list">
{% assign tags_max = 0 %}
{% for tag in site.tags %}
    {% if tag[1].size > tags_max %}
    {% assign tags_max = tag[1].size %}
    {% endif %}
{% endfor %}
{% for i in (1..tags_max) reversed %}
    {% for tag in site.tags %}
        {% if tag[1].size == i %}
        <li><a href="#{{ tag[0] | downcase | replace:' ','-' }}"><i class="fas fa-tag" aria-hidden="true"></i> {{ tag[0] }} <span class="archive-title">{{ i }}</span> </a></li>
        {% endif %}
    {% endfor %}
{% endfor %}
</ul>

{% assign tags_max = 0 %}
{% for tag in site.tags %}
{% if tag[1].size > tags_max %}
{% assign tags_max = tag[1].size %}
{% endif %}
{% endfor %}
{% for i in (1..tags_max) reversed %}
{% for tag in site.tags %}
{% if tag[1].size == i %}
<h1 class="archive-title">{{ tag[0] }}</h1>
<ul class="post-list">
{% for post in tag.last %}
<li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    {% include post-meta.html %}
    {{ post.excerpt }}    
</li>
{% endfor %}
</ul>
{% endif %}
{% endfor %}
{% endfor %}
</div>

{% include scrolltop.html %}