---
layout: post
title: "Scheduled Jobs in PowerShell v3"
date: 2012-09-07 21:36:00 +0200
comments: true
published: true
excerpt_separator: <!-- more -->
tags: ["PowerShell"]
redirect_from: ["/post/Scheduled-Jobs-in-PowerShell-v3", "/post/scheduled-jobs-in-powershell-v3"]
---
<!-- more -->
{% include imported_disclaimer.html %}
<p>I am really excited to write about that great feature of PowerShell I started using recently. It's all about scheduling administrative tasks, actually it's more like scheduling everything, to run when I am at home sleeping happily <span style="font-family: Wingdings;">J</span></p>
<p>So as I have mentioned before I'm no PowerShell expert at all and I'm sure all that stuff can be done many other ways, but then this thing is working for me&hellip;</p>
<h1>Snippets</h1>
<p>If you have been using PowerShell ISE you might know what Snippets are, if you don't, just open powershell_ise.exe and press 'ctrl+j'. Snippets are code samples that can be added to your script easily. You can create your own snippets like that:</p>
<p style="background: white; margin-left: 36pt;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: orangered;">$code</span> <span style="color: darkgray;">=</span> <span style="color: darkred;">@' </span></span></p>
<p style="background: white; margin-left: 36pt;"><span style="color: darkred; font-family: Lucida Console; font-size: 9pt;"># this is my sample code </span></p>
<p style="background: white; margin-left: 36pt;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: darkred;">'@</span> </span></p>
<p style="background: white; margin-left: 36pt;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: blue;">New-IseSnippet</span> <span style="color: navy;">-Title</span> <span style="color: blueviolet;">'Sample'</span> <span style="color: navy;">-Description</span> <span style="color: blueviolet;">'Just a sample'</span> <span style="color: navy;">-CaretOffset</span> <span style="color: orangered;">$code<span style="color: darkgray;">.</span>Length <span style="color: navy;">-Text</span> $code</span> <span style="color: navy;">-Force</span> </span></p>
<p style="background: white;">&nbsp;</p>
<p>This will create a 'Snippets' folder at your Documents\WindowsPowerShell where your new snippet is saved for later use. Having that said let's move on to scheduled jobs.</p>
<h1>Scheduled Jobs</h1>
<p>Until now it was quite a pain in the butt to run PowerShell scripts as scheduled tasks, you had to specify the path to powershell.exe and then use some params to make it run the script you choose. You could even pass arguments to those scripts, but it was no real fun. So now we can do all that very easy and directly from within PowerShell.</p>
<h2>Trigger</h2>
<p>For starters we need to create a job trigger, to tell PowerShell when to execute out script.</p>
<p style="background: white; margin-left: 36pt;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: orangered;">$trigger</span> <span style="color: darkgray;">=</span> <span style="color: blue;">New-JobTrigger</span> <span style="color: navy;">-At</span> <span style="color: blueviolet;">22:00</span> <span style="color: navy;">&ndash;Once </span></span></p>
<p style="background: white; margin-left: 36pt;">&nbsp;</p>
<p>This will create a variable containing our trigger, as you can see the script will be executed today, at 22:00 and it will be executed only once.</p>
<h2>JobOptions</h2>
<p>Next we can define some job options, it's not necessary though</p>
<p style="background: white;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: orangered;">$option</span> <span style="color: darkgray;">=</span> <span style="color: blue;">New-ScheduledJobOption</span> <span style="color: navy;">&ndash;RequireNetwork -StartIfOnBattery</span> <span style="color: navy;">-ContinueIfGoingOnBattery </span></span></p>
<p style="background: white;">&nbsp;</p>
<p>Using the New-ScheduledJobOption cmdlet we can specify all kinds of different options, you might already know them from Task Scheduler.</p>
<h2>Scriptblock</h2>
<p>Now that we have a trigger and some options we need to define a scriptblock that is going to be executed by our scheduled job.</p>
<p style="background: white; margin-left: 36pt;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: orangered;">$sb<span style="color: darkgray;">=</span>{</span> </span></p>
<p style="background: white; margin-left: 36pt;"><span style="font-family: Lucida Console; font-size: 9pt;"> <span style="color: darkblue;">param</span>(<span style="color: darkgray;">[<span style="color: teal;">System.IO.FileInfo<span style="color: darkgray;">]<span style="color: orangered;">$path<span style="color: darkgray;">,[<span style="color: teal;">string<span style="color: darkgray;">]<span style="color: orangered;">$string</span>) </span></span></span></span></span></span></span></span></p>
<p style="background: white; margin-left: 36pt;"><span style="font-family: Lucida Console; font-size: 9pt;"> <span style="color: blue;">Add-Content</span> <span style="color: navy;">-Path</span> <span style="color: orangered;">$path</span> <span style="color: navy;">-Value</span> <span style="color: orangered;">$string</span> <span style="color: navy;">-Force</span> </span></p>
<p style="background: white; margin-left: 36pt;"><span style="font-family: Lucida Console; font-size: 9pt;">} </span></p>
<p style="background: white; margin-left: 36pt;">&nbsp;</p>
<p>This, obviously, is just a simple example. It will simply append a string to a file, should be enough to demo what I mean though.</p>
<h2>Credential</h2>
<p>Last thing we need to specify is the account that should be used to run the task.</p>
<p style="background: white;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: orangered;">$cred</span> <span style="color: darkgray;">=</span> <span style="color: blue;">Get-Credential</span></span></p>
<p style="background: white;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: blue;"></span></span></p>
<p style="background: white;">This will create a variable containing the credential you type in. We will pass this to the &ndash;Credential parameter of the next step.</p>
<h2>RegisterScheduledJob</h2>
<p>We have defined everything we need so we can go ahead and register the job.</p>
<p style="background: white;"><span style="font-family: Lucida Console; font-size: 9pt;"><span style="color: blue;">Register-ScheduledJob</span> <span style="color: navy;">-Name</span> <span style="color: darkred;">"test"</span> <span style="color: navy;">-Trigger</span> <span style="color: orangered;">$trigger</span> <span style="color: navy;">-Credential</span> <span style="color: orangered;">$cred</span> <span style="color: navy;">-ScheduledJobOption</span> <span style="color: orangered;">$options</span> <span style="color: navy;">-ScriptBlock</span> <span style="color: orangered;">$sb</span> <span style="color: navy;">-ArgumentList</span> (<span style="color: darkred;">"c:\temp\test.txt"<span style="color: darkgray;">,<span style="color: darkred;">"abcde"</span>)</span> </span></span></p>
<p style="background: white;">&nbsp;</p>
<p style="background: white;">This creates a scheduled task at \Microsoft\Windows\PowerShell\ScheduledJobs, it can be viewed using Task Scheduler or using the <span style="color: blue; font-family: Lucida Console; font-size: 9pt;">Get-ScheduledJob </span>cmdlet.</p>
<p style="background: white;">If you want to specify a script file instead of a scriptblock, simply change the &ndash;ScriptBlock param and use &ndash;FilePath.</p>
<h2>UnregisterScheduledJob</h2>
<p style="background: white;">The job can be deleted in Task Scheduler or by using the <span style="color: blue; font-family: Lucida Console; font-size: 9pt;">Unregister-ScheduledJob </span>cmdlet.</p>
<p style="background: white;">&nbsp;</p>
<p style="background: white;">&nbsp;</p>
<p style="background: white;">I hope you will find this feature as exciting as I do, I'll provide you with the code snipped so you can easily use 'crtl+j' to create a task the next time. Just copy the ps1xml file to your Documents\WindowsPowerShell\Snippets folder and enjoy. <span style="font-family: Wingdings;">J</span></p>
<p><a href="/FILES%2f2012%2f09%2fScheduled+Job.snippets.ps1xml.axdx">Scheduled Job.snippets.ps1xml (1.35 kb)</a>&nbsp;</p>
<p style="background: white;">&nbsp;</p>
<p style="background: white;">So long, have a nice weekend!</p>
<p style="background: white;">tom</p>
<p>&nbsp;</p>
