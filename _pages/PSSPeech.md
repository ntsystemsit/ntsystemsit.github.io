---
layout: page
title: PSSpeech
permalink: /PowerShell/PSSpeech/
menubar: false
redirect_from: ["/psspeech"]
---

[![PowerShell Gallery](https://img.shields.io/powershellgallery/dt/psspeech.svg)](https://www.powershellgallery.com/packages/psspeech)

PSSpeech is a collection of functions to work with Azure Cognitive Services, more specifically the Speech Service. The function  `Get-SpeechToken` can be used to get an OAuth token for authentication to the service. The function `Get-SpeechVoicesList` can be use to get a list of available voices and the function `Covert-TextToSpeech` can be used to convert a given string to speech.

```powershell
Get-SpeechToken -Key <yourkey> | Save-SpeechToken
Convert-TextToSpeech -Text "Hi there, how are you doing today?" -Path hithere.mp3
```


# Functions
<div class="home">
  <ul class="script-list">
    {% assign sorted_posts = site.tags.OnlineHelp | sort: 'title' %}
    {% for post in sorted_posts %}
    {% if post.category == "PSSPEECH" %}
      <li>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | escape }}</a>
        </h2>
      </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>

{% include psgallery.html packagename="PSSpeech" type="Module" reponame="PSSpeech" %}
