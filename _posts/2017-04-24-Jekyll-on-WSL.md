---
layout: post
title: "Jekyll on WSL"
date: 2017-04-24 09:25:06 +0200
comments: true
category: ntSystems
tags: Blog Jekyll
author: thomas torggler
updated: 2018-01-16
---

Today we are looking at running Jekyll on WSL or _Bash on Ubuntu on Windows_. 

<!-- more -->

# Install WSL

First of all we'll have to make sure our system fulfills the prerequisites to run the "Windows Subsystem for Linux". We need a 64-bit version of the Windows 10 Anniversary (build 14939) or newer for that. Then we'll have to enable the "Developer mode" using "Settings", "Update & Security" and finally "For Developers".

Once the above prerequisites are met, we can go ahead and enable the WSL using the control panel or the following command in an elevated PowerShell session:

```
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

And finally we can type `bash` into an administrative command prompt to download and install bash. 

A detailed installation guide is available on [MSDN](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide)

# Install Jekyll

After setting up _Bash on Ubuntu on Windows_ we can now install the required packages for Jekyll using the following commands.

```
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt-get -y update
sudo apt-get install git build-essential libcurl4-openssl-dev zlib1g-dev
sudo apt-get install ruby2.4 ruby2.4-dev
```

After installing ruby verify the the installed version using `ruby -v`. Jekyll requires a version greater that 2. 

Now let's install nodejs and finally Jekyll: 

```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo gem install jekyll bundler
```

# Serve

Now that the prerequisites are installed, we can go ahead and build our static website. To get started with Jekyll, head over to the [official documentation page](https://jekyllrb.com/docs/home/). In my case, I just want to serve up a local copy of this great blog, so I clone the git repository and build the site locally using: 

```
git clone https://github.com/ntsystemsit/ntsystemsit.github.io
cd ntsystemsit.github.io/
bundle install
bundle exec jekyll serve -d /tmp/ntsystems
```

Note: There seems to be a bug related with WSL. I have to use the `--force-polling` switch with the `serve` command on Windows 10 1607, on 1703 it works without that switch. Check the  following [issue](https://github.com/jekyll/jekyll/issues/5233) on GitHub. 



Well, what can I say? I really like the possibility to natively run Linux packages on Windows 10. Even though it doesn't make the Linux part less complicated, at least I don't need a VM anymore :) 


So long,

Tom