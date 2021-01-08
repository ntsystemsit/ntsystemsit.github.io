---
title: Tags
layout: page
---

{% assign tags_max = 0 %}
{% for tag in site.tags %}
    {% if tag[1].size > tags_max %}
    {% assign tags_max = tag[1].size %}
    {% endif %}
{% endfor %}

<ul class="tagscontainer">
{%- for i in (1..tags_max) reversed -%}
{%- for tag in site.tags -%}
{% if tag[1].size == i %}
<li class="tag"><a href="{{ site.baseurl }}/Tags/{{ tag[0]}}">{{ tag[0] }}</a><span class="float-right">{{ i }}</span></li>
{% endif %}
{%- endfor -%}
{%- endfor -%}
</ul>