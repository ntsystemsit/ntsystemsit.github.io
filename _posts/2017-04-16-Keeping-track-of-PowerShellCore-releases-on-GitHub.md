---
layout: post
title: "Keeping track of PowerShellCore releases on GitHub"
date: 2017-04-16 18:25:06 +0200
comments: true
category: PowerShell
tags: PowerShell GitHub
author: thomas torggler
updated: false
---

I've been using PowerShell Core on my [MacBook](/post/PowerShell-on-macOS) for a while now. As the code is still in its early stages, there's no way of managing/updating the software one is running, at least none that I would be aware of. I did miss some updates and, as a result, had problems with Visual Studio Code. So I've put together a quick function that checks the latest release on GitHub and can conveniently be put into my `$PROFILE`.

<!-- more -->

# GitHub Releases feed

PowerShell Core was [open-sourced some time](https://blogs.msdn.microsoft.com/powershell/2016/08/18/powershell-on-linux-and-open-source-2/) ago and the team behind it is using GitHub to manage the code. The latest version for all the supported operating systems can be found in the [PowerShell repository](https://github.com/PowerShell/PowerShell). Every so often, a new release is published to the Releases feature of GitHub and it happens that GitHub does provide an atom feed for releases. This feed can be accessed by simply appending ".atom" to the URL.

# Get-PSVersionGitHub

Armed with this information, I wrote the following simple function. It just gets the latest release from the repository's atom feed and adds the information to a hash table, which is then output as a custom object:

<script src="https://gist.github.com/tomtorggler/88d9441a38c83667eaddb410c1408966.js"></script>

Now I just put the function into my `$PROFILE` and make it run every time PowerShell starts.

Easy enough, right?

Tom
