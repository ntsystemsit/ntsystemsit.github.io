---
layout: post
title: "Testing CoinHive"
comments: true
category: ntSystems
tags: ntSystems
author: thomas torggler
updated: false
---

I've recently stumbled upon [coinhive](https://coin-hive.com) and with all the recent fuzz about crypto currencies, I decided to have a look at it. So what's that all about? 

<!-- more -->

# coinhive: A JavaScript Monero Miner 

Many crypto currencies rely on a [https://en.wikipedia.org/wiki/Proof-of-work_system](proof-of-work) algorithm in order to verify transactions. There are quite a few different algorithms out there, some of them more _difficult_ than others. Bitcoin for example uses [hashcash](https://en.bitcoin.it/wiki/Hashcash) which, at current difficulty levels, can only be feasibly generated on specialized hardware (ASIC). 

Another one of those PoW algorithms is [CryptoNight](https://en.bitcoin.it/wiki/CryptoNight) which has been designed to be ASIC resistant and can feasibly be generated on modern CPUs and GPUs. [Monero](https://en.wikipedia.org/wiki/Proof-of-work_system), a private and censorship-resistant digital currency, happens to use the CryptoNight algorithm, which means it can be _mined_ efficiency on consumer devices.

That's what the coinhive miner does. It essentially runs a JavaScript application in the users web browser and uses the devices CPU to mine Monero. The mined Monero will then be payed out to a wallet we own. 

# ntSystems

Now as this website is a side-project and does not make us any money at all (and we don't like Ads), we decided to test drive coinhive for a week. 

> Starting today, by visiting our side your device will be used to mine Monero and, by doing so, help us maintain the site and deliver more awesome content. 
 
After the first week's trial we will publish the stats and discuss the ethics behind "abusing" our visitors spare CPU cycles.

The following code has been added to the site's footer in order to start the miner: 


```
  <script>
    var miner=new CoinHive.Anonymous("eARtbar963CFJbSfU2MwlWF7D4u6YhZ3", {
	  autoThreads: true,
	  throttle: 0.1,});
    miner.start(CoinHive.IF_EXCLUSIVE_TAB);
  </script>
```


Thanks!
Tom