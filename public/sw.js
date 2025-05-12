const CACHE_NAME = 'offline-cache-v1';
const urlsToCache = [
  '/',
  '/fonts/digital-7 (mono italic).ttf',
];

// Install event — pre-cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event — clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercept fetch requests
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // Skip Vite HMR and dev-specific URLs
  const url = new URL(event.request.url);
  if (url.pathname.startsWith('/@vite') || url.pathname.startsWith('/@id')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => {
        return new Response('You are offline and this resource is not cached.');
      });
    })
  );
});
