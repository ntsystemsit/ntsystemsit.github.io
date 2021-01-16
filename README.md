# Sources for https://onprem.wtf

This is the new home of [onprem.wtf](https://onprem.wtf/).

## Update index

```
wget http://localhost:4000/api/v1/docs
cat docs | node lunr-build-index.js > assets/js/index.json
rm docs
```

Change this line in `node lunr-build-index.js` if necessary:

```
var lunr = require('/home/tom/node_modules/lunr'),
```