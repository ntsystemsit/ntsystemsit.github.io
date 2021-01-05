const CACHE = "onprem-wtf-offline";

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      // non critical
      cache.addAll([
          '/assets/js/index.json',
          '/assets/WOFF2/OTF/SourceCodePro-Bold.otf.woff2',
          '/assets/WOFF2/OTF/SourceCodePro-It.otf.woff2',
          '/assets/WOFF2/OTF/SourceCodePro-Light.otf.woff2',
          '/assets/WOFF2/OTF/SourceCodePro-Regular.otf.woff2',
          '/assets/WOFF2/TTF/SourceSans3-Light.ttf.woff2',
          '/assets/WOFF2/TTF/SourceSans3-LightIt.ttf.woff2',
          '/assets/WOFF2/TTF/SourceSans3-Regular.ttf.woff2',
          '/assets/WOFF2/TTF/SourceSerifPro-Light.ttf.woff2'
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
          '/search'
        ]);
    }),
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        var fetchPromise = fetch(event.request).then(function (networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
        return response || fetchPromise;
      });
    }),
  );
});