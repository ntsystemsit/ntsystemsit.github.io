---
layout: post
title: "Migrating from BlogEngine to GitHub Pages: BlogML to Markdown"
date: 2016-10-17 21:49:06 +0200
comments: true
category: ntSystems
tags: migrate jekyll

author: thomas torggler
---
As promised [here]({{ site.url }}/post/Welcome-to-the-all-new-ntSystems), I'm sharing the first part of our migration process from BlogEngine to GitHub Pages. A major part is, obviously, the migration of the content of the blog itself.

<!-- more -->

# BlogML
According to [Wikipedia](https://en.wikipedia.org/wiki/BlogML) "BlogML is an open format derived from XML to store and restore the content of a blog." Luckily, BlogEngine has an export option that exports all content (posts and pages) to a XML file. 
> Note: The XML file contains only the text content. So images, files and other _assets_ have to be migrated separately.

I downloaded the [BlogML]({{ site.url }}/assets/2016/BlogML.xml) file and started to look around for solutions to somehow convert the stuff to something Jekyll could use. After some googling, I found [this blog](http://philippkueng.ch/migrate-from-blogengine-dot-net-to-jekyll.html) describing something very similar. Apparently he was using a ruby script to create a properly formatted markdown (.md) file for each post in the BlogML file. Thankfully, the script could be found in his [GitHub Repo](https://github.com/philippkueng/philippkueng.github.com/blob/30ef1570f06d33938b18d5eee7767d6641b9a779/source/_import/blogml.rb).

The script was almost perfectly suited for our purposes after some small modifications I started it like so:

```
$ ruby -r './blogml.rb' -e 'Jekyll::BlogML.process("BlogML.xml")'
```

Note that in my case the BlogML.xml file is located in the same directory as the script and a new directory named "_posts" is created in the same path. Any existing directory with the same name will be deleted.

The modified version of the script is available [here]({{ site.url }}/assets/2016/blogml.rb).

# Writing
Once the posts (and the rest) was migrated, one has to start writing new stuff. Posts are written in plain text with markdown formatting so no super fancy editor is required and I'm getting along well with [VS Code](https://code.visualstudio.com). I'm using the "Spelling and Grammar Checker" extension hoping it catches to most obvious typos ;) 


Stay tuned for more.
Tom