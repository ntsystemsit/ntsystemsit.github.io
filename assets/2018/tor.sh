#!/bin/bash
cd /home/tom/ntsystemsit.github.io
git fetch 
git pull
sed 's/https:\/\/ntsystems.it/http:\/\/ntsystcpyyew477akekwcn2od3vdknlehwof7cyt2vryieocos2sz4id.onion/' _config.yml
sed 's/tor: false/tor: true/' _config.yml
bundle exec jekyll build -d /var/www/html/