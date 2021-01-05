---
title: Find.
layout: page
---

<link rel="prefetch" href="/assets/js/index.json" as="fetch" />

<form action="{{ site.baseurl }}/search" method="get">
  <input placeholder="Type here&hellip;" type="search" id="search-box" name="query" class="search-input">
</form>

<div id="search-results" class="post-list"></div>

<script>
  window.store = {
    {% for post in site.documents %}
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