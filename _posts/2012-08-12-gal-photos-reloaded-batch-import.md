---
layout: post
title: "GAL Photos reloaded–batch import"
date: 2012-08-12 16:02:00 +0200
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["Exchange", "Server"]
alias: ["/post/GAL-Photos-reloaded-batch-import.aspx", "/post/gal-photos-reloaded-batch-import.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>About two years ago I&rsquo;ve posted an article about <a href="/post/Exchange-2010e28093GAL-Fotos.aspx">Exchange 2010 and GAL Photos</a>. Now this is not great news anymore, there are two great articles on the Exchange Team Blog, that explain how to configure this, too. Find them here: <a href="http://aka.ms/galphotos">aka.ms/galphotos</a>and <a href="http://aka.ms/galphotosfaq">aka.ms/galphotosfaq</a></p>
<p>Key points are the the minor schema change and the maximum file size of 10KB. Images can be max. 96x96 pixels in size.</p>
<p>Now in the last couple of days I wrote a &ldquo;cmdlet&rdquo; to make batch importing images easier. For starters, the cmdlet gets all *.jpg files in folder, then it uses the files BaseName to find corresponding Exchange Mailboxes. After that the image&rsquo;s physical dimensions as well as file size are verified, if they are ok, the image is imported using Import-RecipientDataProperty.</p>
<p>The folder containing the images can be set using the cmdlet&rsquo;s &ndash;FilePath parameter, the cmdlet takes pipeline input from Get-ChildItem too.</p>
<p>Here are two examples of how the cmdlet could be used:</p>
<blockquote>
<p>PS C:\&gt; Import-GalPhoto -FilePath 'c:\temp\pics' <br />&nbsp; <br />PS C:\&gt; dir 'c:\temp\pics' | Select-Object -First 2 | Import-GalPhoto</p>
</blockquote>
<p>I&rsquo;ve pasted the function to <a href="http://poshcode.org/3570" target="_blank">PoshCode</a>, here it goes:</p>
<p>
<script type="text/javascript" src="http://PoshCode.org/embed/3570"></script>
</p>
<p>enjoy, <br />tom</p>
