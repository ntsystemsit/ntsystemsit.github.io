---
layout: page
title: TAK
author: tto
redirect_from: ["/tak"]
---

[![Build status](https://ci.appveyor.com/api/projects/status/4ihjpqd6c8f9cceq?svg=true)](https://ci.appveyor.com/project/tomtorggler/tak)
[![PowerShell Gallery](https://img.shields.io/powershellgallery/dt/tak.svg)](https://www.powershellgallery.com/packages/tak)


Tom's Admin Kit, or TAK, is a PowerShell script module that contains useful tools which I collected or created over the years. <!-- more --> I tried to give credits where appropriate and where I could still remember the source :)

The main goal of creating the module and writing the scripts it contains, was learning PowerShell and making my job a little bit easier. As I am currently looking into continuous integration, I used this module to build an example deployment pipeline. You can read more about that [here]({{ "/post/introducing-tak" | prepend: site.baseurl }}).

{% include module-functions.html %}

{% include psgallery.html packagename="TAK" type="Module" reponame="TAK" %}
