const version = "2"
const CACHE = version + "-onprem-wtf-offline";

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      // non critical
      cache.addAll([
          '/assets/js/index.json',
      ]);
      // critical
      return cache.addAll([
          '/',
          '/index.html',
          '/offline',
          '/assets/js/theme.js',
          '/Tags',
          '/PowerShell',
          '/post',
          '/search',
          '/assets/WOFF2/TTF/SourceSerifPro-Light.ttf.woff2',
          '/assets/WOFF2/TTF/SourceSans3-Light.ttf.woff2',
          '/assets/WOFF2/OTF/SourceCodePro-Regular.otf.woff2',
          '/assets/WOFF2/TTF/SourceSans3-Regular.ttf.woff2'
        ]);
    }),
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        var fetchPromise = fetch(event.request)
        .then(function (networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        .catch( error => {
          console.log("not found: " + error);
          return caches.match('/offline');
        });
        return response || fetchPromise;
      });
    }),
  );
});

self.addEventListener("activate", function(event) {

  event.waitUntil(
      caches
      .keys()
      .then(function(keys) {
          return Promise.all(
              keys
              .filter(function(key) {
                  return !key.startsWith(version);
              })
              .map(function(key) {
                  return caches.delete(key);
              })
          );
      })
  );
});