---
layout: post
title: "lost & found: ffmpeg settings for Skype4B"
date: 2018-10-05 07:25:16 +0200
comments: true
category: lost and found
tags: Skype4B WSL
author: thomas torggler
updated: false
---

Just a quick note on how to use _ffmpeg_ to create audio files that can be used for Skype for Business announcements.

<!-- more -->

For the best performance of wave files, a 16 kHz, mono, 16-bit Wave file is recommended.

```bash
ffmpeg -i Downloads/t_voice5345892239383986331.mp3 -acodec pcm_s16le -ac 1 -ar 16000 out.wav
```
Links:

- [Audio file formats for Lync and Exchange](https://greiginsydney.com/audio-file-formats-for-lync-and-exchange/)