/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'vyAkIiYL9W';
const urlsToCache = [
  "/",
  "/assets/background.png",
  "/assets/example_typings_2.png",
  "/assets/example_typings.png",
  "/assets/screenshot-1-.png",
  "/assets/screenshot-2.png",
  "/assets/screenshot-3.png",
  "/icons/android/android-launchericon-144-144.png",
  "/icons/android/android-launchericon-192-192.png",
  "/icons/android/android-launchericon-48-48.png",
  "/icons/android/android-launchericon-512-512.png",
  "/icons/android/android-launchericon-72-72.png",
  "/icons/android/android-launchericon-96-96.png",
  "/icons/ios/100.png",
  "/icons/ios/1024.png",
  "/icons/ios/114.png",
  "/icons/ios/120.png",
  "/icons/ios/128.png",
  "/icons/ios/144.png",
  "/icons/ios/152.png",
  "/icons/ios/16.png",
  "/icons/ios/167.png",
  "/icons/ios/180.png",
  "/icons/ios/192.png",
  "/icons/ios/20.png",
  "/icons/ios/256.png",
  "/icons/ios/29.png",
  "/icons/ios/32.png",
  "/icons/ios/40.png",
  "/icons/ios/50.png",
  "/icons/ios/512.png",
  "/icons/ios/57.png",
  "/icons/ios/58.png",
  "/icons/ios/60.png",
  "/icons/ios/64.png",
  "/icons/ios/72.png",
  "/icons/ios/76.png",
  "/icons/ios/80.png",
  "/icons/ios/87.png",
  "/icons/maskable_icon_x128.png",
  "/icons/maskable_icon_x192.png",
  "/icons/maskable_icon_x384.png",
  "/icons/maskable_icon_x48.png",
  "/icons/maskable_icon_x72.png",
  "/icons/maskable_icon_x96.png",
  "/icons/webcvdev-logo.png",
  "/icons/windows11/LargeTile.scale-100.png",
  "/icons/windows11/LargeTile.scale-125.png",
  "/icons/windows11/LargeTile.scale-150.png",
  "/icons/windows11/LargeTile.scale-200.png",
  "/icons/windows11/LargeTile.scale-400.png",
  "/icons/windows11/SmallTile.scale-100.png",
  "/icons/windows11/SmallTile.scale-125.png",
  "/icons/windows11/SmallTile.scale-150.png",
  "/icons/windows11/SmallTile.scale-200.png",
  "/icons/windows11/SmallTile.scale-400.png",
  "/icons/windows11/SplashScreen.scale-100.png",
  "/icons/windows11/SplashScreen.scale-125.png",
  "/icons/windows11/SplashScreen.scale-150.png",
  "/icons/windows11/SplashScreen.scale-200.png",
  "/icons/windows11/SplashScreen.scale-400.png",
  "/icons/windows11/Square150x150Logo.scale-100.png",
  "/icons/windows11/Square150x150Logo.scale-125.png",
  "/icons/windows11/Square150x150Logo.scale-150.png",
  "/icons/windows11/Square150x150Logo.scale-200.png",
  "/icons/windows11/Square150x150Logo.scale-400.png",
  "/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
  "/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
  "/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
  "/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
  "/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
  "/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
  "/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
  "/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
  "/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
  "/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
  "/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
  "/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
  "/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
  "/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
  "/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
  "/icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
  "/icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
  "/icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
  "/icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
  "/icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
  "/icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
  "/icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
  "/icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
  "/icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
  "/icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
  "/icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
  "/icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
  "/icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
  "/icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
  "/icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
  "/icons/windows11/Square44x44Logo.scale-100.png",
  "/icons/windows11/Square44x44Logo.scale-125.png",
  "/icons/windows11/Square44x44Logo.scale-150.png",
  "/icons/windows11/Square44x44Logo.scale-200.png",
  "/icons/windows11/Square44x44Logo.scale-400.png",
  "/icons/windows11/Square44x44Logo.targetsize-16.png",
  "/icons/windows11/Square44x44Logo.targetsize-20.png",
  "/icons/windows11/Square44x44Logo.targetsize-24.png",
  "/icons/windows11/Square44x44Logo.targetsize-256.png",
  "/icons/windows11/Square44x44Logo.targetsize-30.png",
  "/icons/windows11/Square44x44Logo.targetsize-32.png",
  "/icons/windows11/Square44x44Logo.targetsize-36.png",
  "/icons/windows11/Square44x44Logo.targetsize-40.png",
  "/icons/windows11/Square44x44Logo.targetsize-44.png",
  "/icons/windows11/Square44x44Logo.targetsize-48.png",
  "/icons/windows11/Square44x44Logo.targetsize-60.png",
  "/icons/windows11/Square44x44Logo.targetsize-64.png",
  "/icons/windows11/Square44x44Logo.targetsize-72.png",
  "/icons/windows11/Square44x44Logo.targetsize-80.png",
  "/icons/windows11/Square44x44Logo.targetsize-96.png",
  "/icons/windows11/StoreLogo.scale-100.png",
  "/icons/windows11/StoreLogo.scale-125.png",
  "/icons/windows11/StoreLogo.scale-150.png",
  "/icons/windows11/StoreLogo.scale-200.png",
  "/icons/windows11/StoreLogo.scale-400.png",
  "/icons/windows11/Wide310x150Logo.scale-100.png",
  "/icons/windows11/Wide310x150Logo.scale-125.png",
  "/icons/windows11/Wide310x150Logo.scale-150.png",
  "/icons/windows11/Wide310x150Logo.scale-200.png",
  "/icons/windows11/Wide310x150Logo.scale-400.png",
  "/index.html",
  "/service-worker.js",
  "/static/css/main.47b6b592.css",
  "/static/js/main.b491f05d.js"
];
// const appIcon = 'default_icon_link';

// array routers on fetch not will cache
// const uri_black_list = [];
// https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications#request_permission

// const urlB64ToUint8Array = (base64String) => {
//   const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
//   const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
//   const rawData = atob(base64);
//   const outputArray = new Uint8Array(rawData.length);
//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// };

// const SubscriptionOptions = {
//   applicationServerKey: urlB64ToUint8Array(
//     'get_public_key_on_firebase',
//   ),
//   userVisibleOnly: true,
// };

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[serviceWorker] add all cache from array');
        return cache.addAll(urlsToCache);
      }),
  );
});

self.addEventListener('activate', (event) => {
  // ativa steps
  console.log('[serviceWorker] ativo');
  event.waitUntil(
    // registrar o push
    //  self.registration.pushManager.subscribe(SubscriptionOptions),
    // limpar versão antiga
    caches.keys().then((cacheNames) => Promise.all(cacheNames.map((thisCacheName) => {
      if (thisCacheName !== CACHE_NAME) {
        console.log('[Service Worker] Removing caching files from', thisCacheName);
        return caches.delete(thisCacheName);
      }

      return false;
    }))),

  );
});

/**
 * not cache all fetch data, only if match list cached
 */
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request)),
  );
});

/**
 * cache all fetch data make inside app, this is not really usefull in some cases
 */
// self.addEventListener('fetch', (e) => {
//   e.respondWith((async () => {
//     const r = await caches.match(e.request);
//     if (r) { return r; }

//     const response = await fetch(e.request);

//     // posts, put, delete are not allowed to cache
//     if (e.request.method === 'GET' && !uri_black_list.includes(e.request.url)) {
//       console.log(`[Service Worker ${e.request.method}] Caching new resource from ${CACHE_NAME}: ${e.request.url}`);
//       const cache = await caches.open(CACHE_NAME);
//       cache.put(e.request, response.clone());
//     }

//     return response;
//   })());
// });

//  self.addEventListener("push", function (event) {
//    /**@type {{body: string, title: string, icon: string?}} message */
//    const message = event.data.json();
//    console.log(message);
//      var options = {
//        body: message.body,
//        icon: message.icon||appIcon,
//        vibrate: [100, 50, 100],
//        actions: [
//          {
//            action: 'explore',
//            title: 'Explore this new world',
//            icon: message.icon||appIcon
//          },
//          {
//            action: 'close',
//            title: 'Close',
//            icon: message.icon||appIcon
//          },
//        ]
//      };

//      event.waitUntil(
//        self.registration.showNotification(message.title, options)
//      );
//  });

//  self.addEventListener("notificationclick", function openPushNotification(event) {
//      console.log("Notification click Received.", event.notification.data);
//     event.notification.close();
//    //do something
//  });
