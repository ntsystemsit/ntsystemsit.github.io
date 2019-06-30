---
layout: page
title: Field Notes
permalink: /FieldNotes/
menubar: true
---

Notes on this page are published automatically through our bot.

<div class="home">
{% assign mydata=site.data.fieldnotes %}
{% for file in mydata %}
{% assign myfilename = file[0] %}
{% assign post = file[1] %}
<p class="post-meta">
    <i class="far fa-calendar-alt" aria-hidden="true"></i>
    <span itemprop="datePublished" intemscope itemtype="http://schema.org/BlogPosting">
    <time datetime="{{ post.date | date: "%b %-d, %Y" }}" itemprop="datePublished">{{ post.date | date: "%b %-d, %Y" }} &thinsp; </time></span>
    <i class="fas fa-user" aria-hidden="true"></i>
    <span itemprop="author" itemscope itemtype="http://schema.org/BlogPosting">
    <span itemprop="author">{{ post.from.username }}</span></span>&thinsp;   
</p>
<p>{{ post.text }}</p>
{% endfor %}
</div>