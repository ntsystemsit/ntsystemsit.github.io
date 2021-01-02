---
title: Archive.
layout: pagewt
---

# Search.


<form action="{{ site.baseurl }}/search" method="get">
  <input placeholder="Find&hellip;" type="search" id="search-box" name="query" class="search-input">
</form>

<div id="search-results"></div>

<script>
  window.store = {
    {% for post in site.posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "author": "{{ post.author | xml_escape }}",
        "tags": "{{ post.tags | xml_escape }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>

<script src="/assets/js/lunr.js"></script>
<script src="/assets/js/search.js"></script>

# Archive.

<div>
{%- for post in site.posts -%}
    <div class="post-list">
        <h2 class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        {%- include post-meta.html -%}
        {{ post.excerpt }}
    </div>
{%- endfor -%}
</div>

