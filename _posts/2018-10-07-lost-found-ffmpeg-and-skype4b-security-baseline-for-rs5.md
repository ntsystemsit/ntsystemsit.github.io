---
layout: post
title: "lost & found: FFmpeg and Skype4B, Security Baseline for RS5"
date: 2018-10-07 07:25:16 +0200
comments: true
category: lost and found
tags: Skype4B WSL Client Server
author: thomas torggler
updated: false
---

A quick edition of lost & found on how to use _FFmpeg_ on WSL to create audio files that can be used for Skype for Business announcements. And an observation about the recently published security baseline for Windows 10 1809 and Server 2019.

<!-- more -->

## FFmpeg

According to it's website, FFmpeg is the leading multimedia framework, able to decode, encode, transcode, mux, demux, stream, filter and play pretty much anything that humans and machines have created. 

Packages are available for various operating systems but since Ubuntu runs just fine on Windows 10, I started using linux-style command-line tools in the Windows Subsystem for Linux.

Check if you are running the latest version using `ffmpeg -version` or install to tool using `sudo apt-get install ffmpeg`.

According to @greiginsydney a 16 kHz, mono, 16-bit Wave file is recommended for best performance.

To convert an MP3 file to Wave with the above specifications, we can use something like this: 

```bash
ffmpeg -i Downloads/ringtone.mp3 -acodec pcm_s16le -ac 1 -ar 16000 ringtone.wav
```

## Security Baseline 

Microsoft recently released the draft of the security baseline configuration for RS5 builds, that's Windows 10 v1809 and Windows Server 2019. Find more information about that on the Security Guidance blog, I just wanted to share a quick note for the Office 365 Admins out there: 

The security baseline configuration contains a setting to disable _Basic Authentication_ for the WinRM client. After applying the baseline configuration, I was no longer able to connect to Exchange Online or Skype for Business Online remote PowerShell Sessions as they rely on basic authentication.

Set the following configuration to _Not Configured_ on your admin machines: Administrative Templates, Windows Components, Windows Remote Management (WinRM), WinRM Client, Allow Basic authentication.


Links:

- [Audio file formats for Lync and Exchange](https://greiginsydney.com/audio-file-formats-for-lync-and-exchange/)
- [FFmpeg](https://ffmpeg.org/)
- [Security baseline (DRAFT) for Windows 10 v1809 and Windows Server 2019](https://blogs.technet.microsoft.com/secguide/2018/10/01/security-baseline-draft-for-windows-10-v1809-and-windows-server-2019/)