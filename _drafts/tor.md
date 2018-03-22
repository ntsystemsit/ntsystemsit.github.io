
sudo apt-get install git build-essential libcurl4-openssl-dev zlib1g-dev
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
curl -sSL https://get.rvm.io | bash -s stable
source /home/tom/.rvm/scripts/rvm
rvm list known
rvm install 2.4.3
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
gem install jekyll bundler

git clone https://github.com/ntsystemsit/ntsystemsit.github.io.git  
cd ntsystemsit.github.io/
bundle install
bundle exec jekyll serve

/etc/nginx/enabled-sites/default
errorpage 404 /404.html;
index index.html;
location / {
    try_files $uri $uri.html $uri/;
}
