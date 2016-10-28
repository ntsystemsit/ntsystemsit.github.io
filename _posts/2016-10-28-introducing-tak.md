---
layout: post
title: "Introducing: TAK"
date: 2016-10-28 09:25:06 +0200
comments: true
category: PowerShell
tags: PowerShell Cloud
author: thomas torggler
---
Over the years I did create, find, copy, paste, quite a few lines of PowerShell code. Some of which I'm turning into re-usable functions and collecting in a module, creatively called "Tom's Admin Kit" or TAK. I hope you find it useful.
I try to credit the sources for the stuff that I just copied off of the interwebs, even though I don't actually remember all of them.

<!-- more -->

# Pester
As [written before](https://ntsystems.it/post/lost-found-nano-server-github-psgallery-pester), Pester is  a unit testing framework for PowerShell code. So one can write simple tests to verify the code actually does, what it is supposed to do. Not all functions are covered by tests, yet, but I try to be better at that. The existing tests can be found in the [GitHub repo for the module](https://github.com/tomtorggler/TAK/blob/master/tak.tests.ps1).

# CI&D: GitHub and AppVeyor
[![Build status](https://ci.appveyor.com/api/projects/status/22d1idxb0f5akute?svg=true)](https://ci.appveyor.com/project/tomtorggler/tak)

I read a lot about this continuous integration and delivery and I thought it would be nice to play with some of the involved tools myself. So I created a small-ish release pipeline/workflow for this module using GitHub, AppVeyor and the PowerShell Gallery. Here is how it works: When a new commit is pushed to GitHub, AppVeyor picks up the latest code and deploys it to a test machine. It then runs all the pester tests and, upon success, publishes the module to the PowerShell Gallery.

The tests that should be run to verify the code, are defined in the `appveyor.yml` file in the GitHub repository.

```
test_script:
    - ps: |
        $testResultsFile = ".\TestsResults.xml"
        $res = Invoke-Pester -OutputFormat NUnitXml -OutputFile $testResultsFile -PassThru
        (New-Object 'System.Net.WebClient').UploadFile("https://ci.appveyor.com/api/testresults/nunit/$($env:APPVEYOR_JOB_ID)", (Resolve-Path $testResultsFile))
        if ($res.FailedCount -gt 0) {
            throw "$($res.FailedCount) tests failed."
        }
```


Just like the deployment task, that will be invoked if the tests passed.


```
deploy_script:
  - ps: |
      Install-PackageProvider -Name NuGet -Force
      $manifest = Join-Path -Path $pwd -ChildPath "TAK\tak.psd1"
      (Get-Content $manifest -Raw) -Replace("1\.0\.0\.\d{1}", $env:APPVEYOR_BUILD_VERSION) | Out-File $manifest
      Publish-Module -NugetApiKey $env:psgkey -Path ($PublishPath = Join-Path -Path $pwd -ChildPath TAK) -Confirm:$false

```


{% include psgallery.html packagename="TAK" type="Module" reponame="TAK" %}


More information about the PowerShell Gallery can be found in the [FAQ](https://msdn.microsoft.com/en-us/powershell/gallery/psgallery/psgallery_faqs)


Give it a try, and, ~if~ when you spot a bug or have an idea for improvement, just create in a pull request.

So long,
Tom
