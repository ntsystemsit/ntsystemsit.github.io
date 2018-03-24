#!/bin/bash
chmod +x /home/tom/ntsystemsit.github.io/assets/2018/tor.sh
cd /home/tom/ntsystemsit.github.io
git fetch 
git pull
sed -i -e 's/\r$//' ./assets/2018/tor.sh
sed -i -e 's/https:\/\/ntsystems.it/http:\/\/ntsystcpyyew477akekwcn2od3vdknlehwof7cyt2vryieocos2sz4id.onion/' _config.yml
sed -i -e 's/tor: false/tor: true/' _config.yml
bundle exec jekyll build -d /var/www/html/