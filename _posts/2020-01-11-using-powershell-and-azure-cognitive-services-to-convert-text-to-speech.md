---
layout: post
title: "Using PowerShell and Azure Cognitive Services to convert text to speech"
date: 2020-01-11 15:19 +0100
category: Cloud
tags: PowerShell Azure 
author: thomas torggler
date_modified: false
---

In one of our recent Microsoft Teams projects I needed some voice prompts for a customer service call queue.<!-- more --> I figured it would be nice to have Azure's artificial-intelligence-powered speech service convert my text input to an audio file. Turns out it's easier than I thought it would be.

## Azure Cognitive Speech Service

First of all we need an Azure Subscription where we can deploy our Speech Services instance. If you don't have an Azure subscription, you can sign up for a trial account using the links below. If you already have a subscription, you can easily create a free Speech Services account using the following commands from Azure Cloud Shell: 

```
az group create -n ntsystems-speech -l WestEurope
az cognitiveservices account create -n ntsystems-speech -g ntsystems-speech --kind SpeechServices --sku F0 -l WestEurope --yes
```

Now the account was created and we can start using it right away. To authenticate our calls from PowerShell, we need an API key, again we can use Azure Cloud Shell to retrieve the key:

```
az cognitiveservices account keys list -n ntsystems-speech -g ntsystems-speech
```

## PowerShell

The speech service provides a well documented API that can easily be called using PowerShell's native `Invoke-RestMethod` command. The required information is available on Microsoft Docs (link below), all I had to do is wrap a little PowerShell around it and I had created a quick module. You can install the module using the following command:

```
Install-Module PSSpeech
```

Before we can call any of the speech service's API endpoints, we have to use the API key to get a token and store it in a variable for later use:

```
Get-SpeechToken -Key yourapikey | Save-SpeechToken
```

Now we should be able to get a list of available voices using `Get-SpeechVoicesList | Format-Table`.

And finally we can convert some input text to speech using one of the voices from the list:

```
Convert-TextToSpeech -Voice en-US-JessaNeural -Text "Hi Tom, I'm Jessa from Azure!" -Path jessa.mp3
Convert-TextToSpeech -Voice en-GB-HarryNeural -Text "Hi Tom, I'm Harry from Azure!" -Path harry.mp3
```

You can find a lot of information about the speech service in the links below, be sure to check out the SSML structure to see how you can customize the voices, introduce pauses to the audio file, and many other things.

You can find the code for the module in my GitHub, please let me know if you find it useful and feel free to submit a pull request with your optimizations :)

This is the first post in this new year, best wishes and thanks for reading!

Tom


## Links
 - [Speech Services](https://azure.microsoft.com/en-us/services/cognitive-services/speech-services/)
 - [Speech Synthesis Markup Language (SSML)](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup)
 - [Text to Speech REST API](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/rest-text-to-speech)
 - [PSSpeech Module](https://ntsystems.it/PowerShell/PSSpeech/)


