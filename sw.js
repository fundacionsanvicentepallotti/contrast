self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('smr-cache').then((cache) => {
    return cache.addAll(['/contrast/', '/contrast/index.html']);
  }));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => {
    return response || fetch(e.request);
  }));
});
