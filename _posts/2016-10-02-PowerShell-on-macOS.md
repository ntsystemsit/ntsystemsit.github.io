---
layout: post
title: "PowerShell on macOS"
date: 2016-10-02 09:25:06 +0200
comments: true
published: true
categories: PowerShell
excerpt_separator: <!-- more -->
author: "ttorggler"
---

Just sharing some quick notes on how to run PowerShell (and dotnet core) on macOS Sierra.

<!-- more -->

# Openssl
PowerShell requires dotnet core which, in turn, requires openssl to be installed (and linked correctly). Using brew, one can easily install openssl, if it is already installed, use brew list to show the installation location:

```
$ brew install openssl
$ brew list openssl
...
/usr/local/Cellar/openssl/1.0.2j/lib/libcrypto.1.0.0.dylib
/usr/local/Cellar/openssl/1.0.2j/lib/libssl.1.0.0.dylib
...
```

As of 2016-10 it is required to create symlinks for the above listed libraries (libcrypto, libssl) at /usr/local/lib, use ln -s like so: 

```
$ ln -s /usr/local/Cellar/openssl/1.0.2j/lib/libcrypto.1.0.0.dylib /usr/local/lib
$ ln -s /usr/local/Cellar/openssl/1.0.2j/lib/libcrypto.1.0.0.dylib /usr/local/lib
```

<blockquote>Note: Make sure that the path used in the link (ln) actually matches the one given by the `brew list` output.</blockquote>

# .NET Core 
Head over to https://www.microsoft.com/net/core#macos and download a copy of the installer. Installation is straight-forward, just double-click the .pkg and follow instructions.
After installation, verify that dotnet works by creating the "Hello World" app as suggested on the download site:

```
$ mkdir testapp
$ cd testapp
$ dotnet new
Created new C# project in /Users/tom/testapp.
$ dotnet restore
$ dotnet run
```

# PowerShell 
Get the latest .pkg at https://github.com/PowerShell/PowerShell/releases. Again, installation is simple, just double-click the .pkg and follow instructions. To verify installation, open a terminal and run `powershell``

```
$ powershell
PowerShell
Copyright (C) 2016 Microsoft Corporation. All rights reserved.

PS /Users/tom> $PSVersionTable

Name                           Value
----                           -----
PSVersion                      6.0.0-alpha
PSEdition                      Core
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}
BuildVersion                   3.0.0.0
GitCommitId                    v6.0.0-alpha.10
CLRVersion
WSManStackVersion              3.0
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1

```

<blockquote>Note: It's still early days, the above procedure might be simplified soon </blockquote>

Enjoy :) 