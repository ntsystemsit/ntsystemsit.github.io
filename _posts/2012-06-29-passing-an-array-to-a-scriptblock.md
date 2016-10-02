---
layout: post
title: "Passing an array to a {scriptblock}"
date: 2012-06-29 07:10:00 +0200
comments: true
published: true
categories: ["blog", "archives"]
excerpt_separator: <!-- more -->
tags: ["PowerShell"]
alias: ["/post/Passing-an-array-to-a-scriptblock.aspx", "/post/passing-an-array-to-a-scriptblock.aspx"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p class="brush: ps;">Some Friday PowerShell fun today.</p>
<p>I created a PowerShell script the other day where I was passing a variable to a scriptblock. As long as the variable was a simple string everything was just fine, but when the variable was of the type System.Array only the first item would have been passed to the scriptblock.</p>
<p>[more]</p>
<p>Example 1 shows what I mean.</p>
<blockquote>
<pre class="brush: ps;">$myArray = "a","b","c"
$myBlock = { param($p1) write $p1 }
Invoke-Command -ScriptBlock $myBlock -ArgumentList $myArray</pre>
</blockquote>
<p>This example would produce an output of &ldquo;a&rdquo; even though I assumed it would output &ldquo;a&rdquo;,&rdquo;b&rdquo;,&rdquo;c&rdquo;.</p>
<p>So I was scratching my head for a while and then tried to do it that way:</p>
<blockquote>
<pre class="brush: ps;">
$myArray = "a","b","c"
$myBlock = { param($p1) write $p1 }
Invoke-Command -ScriptBlock $myBlock &ndash;ArgumentList (,$myArray)
</pre>
</blockquote>
<p>This one works as expected, so it produces an output of &ldquo;a&rdquo;,&rdquo;b&rdquo;,&rdquo;c&rdquo;.</p>
<p>&nbsp;</p>
<p>have a nice weekend!</p>
<p>tom</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
