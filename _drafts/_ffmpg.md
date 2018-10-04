---
layout: post
title: "lost & found: Using ffmpeg for Skype4B"
date: 2018-10-01 21:25:16 +0200
comments: true
category: Skype4B
tags: Network PowerShell Server AudioCodes
author: thomas torggler
updated: false
---

Using _ffmpeg_ to 

<!-- more -->


For the best performance of wave files, a 16 kHz, mono, 16-bit Wave file is recommended.

```bash
ffmpeg -i Downloads/t_voice5345892239383986331.mp3 -acodec pcm_s16le -ac 1 -ar 16000 out.wav
```
Links:

- [Audio file formats for Lync and Exchange](https://greiginsydney.com/audio-file-formats-for-lync-and-exchange/)