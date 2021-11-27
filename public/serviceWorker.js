const CACHE_NAME = 'version-1';
const urlsToCache = ['/index.html', 'offline.html'];

// const self = this;

// ajout fichiers en cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');

      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match('offline.html'));
    })
  );
});

self.addEventListener('activate', (e) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);

  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
// const staticCacheName = 'cache-v1';
// const assets = ['/index.html'];

// // ajout fichiers en cache
// self.addEventListener('install', (e) => {
//   e.waitUntil(
//     caches.open(staticCacheName).then((cache) => {
//       console.log('Opened cache');
//       return cache.addAll(assets);
//     })
//   );
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }

//       // IMPORTANT: Clone the request.
//       // a request is a flow for unique usage
//       // it s needed to copy ythe request to be able to use it again and fetch it

//       var fetchRequest = event.request.clone();

//       return fetch(fetchRequest).then(function (response) {
//         if (!response || response.status !== 200 || response.type !== 'basic') {
//           return response;
//         }

//         // IMPORTANT: Same thing as above but to put it in cache
//         var responseToCache = response.clone();

//         caches.open(staticCacheName).then(function (cache) {
//           cache.put(event.request, responseToCache);
//         });

//         return response;
//       });
//     })
//   );
// });

// delete caches
// self.addEventListener('activate', (e) => {
//   e.waitUntil(
//     caches.keys().then((keys) => {
//       return Promise.add(
//         keys
//           .filter((key) => key !== staticCacheName)
//           .map((key) => caches.delete(key))
//       );
//     })
//   );
// });
