const staticCacheName = 'site-static-v3';
const dynamicCacheName = 'site-dynamic-v2';
const assets = [
    '/',
    '/index.html',
    // ------ All the materialize css cached ------
    '/assets/css/materialize.css',
    '/assets/js/materialize.js',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v142/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
    // ------ All the css cached ------
    'assets/css/addaccount.css',
    'assets/css/addforum.css',
    'assets/css/allbookings.css',
    'assets/css/bookingdetail.css',
    'assets/css/calendar.css',
    'assets/css/consult.css',
    'assets/css/forum.css',
    'assets/css/global.css',
    'assets/css/nannybooking.css',
    'assets/css/home.css',
    'assets/css/settings.css',
    'assets/css/styles.css',
    // ------ All the js cached ------
    'assets/js/addaccount.js',
    'assets/js/addforum.js',
    'assets/js/allbookings.js',
    'assets/js/app.js',
    'assets/js/bookingdetail.js',
    'assets/js/calendar.js',
    'assets/js/forum.js',
    'assets/js/nannybooking.js',
    'assets/js/nav.js',
    'assets/js/home.js',
    'assets/js/password_script.js',
    'assets/js/settings.js',
    // ------ All the js validation cached ------
    'assets/validation/addaccount_validation.js',
    'assets/validation/bookingdetail_validation.js',
    'assets/validation/settings_validation.js',
    'assets/validation/signin_validation.js',
    'assets/validation/signup_validation.js',
    // ------ All the icons cached ------
    'assets/icons/app_icon_x48.png',
    'assets/icons/app_icon_x72.png',
    'assets/icons/app_icon_x96.png',
    'assets/icons/app_icon_x144.png',
    'assets/icons/app_icon_x192.png',
    'assets/icons/app_icon_x512.png',
    // ------ All the png, jpg, jpeg, svg cached ------
    'assets/images/BabyBanner1.jpg',
    'assets/images/BabyBanner2.jpg',
    'assets/images/BabyBanner3.jpg',
    'assets/images/comment.png',
    'assets/images/customerservice.png',
    'assets/images/eye_closed.svg',
    'assets/images/eye_open.svg',
    'assets/images/healthy.png',
    'assets/images/like.png',
    // ------ All the screen html cached ------
    'screens/addaccount.html',
    'screens/addforum.html',
    'screens/allbookings.html',
    'screens/bookingdetail.html',
    'screens/calendar.html',
    'screens/forum.html',
    'screens/nannybooking.html',
    'screens/home.html',
    'screens/settings.html',
    'screens/signin.html',
    'screens/signup.html',
    'screens/fallback.html',
    // ------ All the links for Firebase ------
    'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js',
    'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js',
    'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js',
];

// Limit the size of the dynamic cache
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > size) {
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        });
    });
};

// Install event
self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            return cache.addAll(assets);
        })
    );
});

// Activate event
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys
                    .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                    .map(key => caches.delete(key))
            );
        })
    );
});

// Fetch event
self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    limitCacheSize(dynamicCacheName, 50);
                    return fetchRes;
                });
            });
        }).catch(() => {
            if (evt.request.url.indexOf('.html') > -1)
                return caches.match('/screens/fallback.html')
        })
    );
});

// Background Sync
// self.addEventListener('sync', evt => {
//     if (evt.tag === 'sync-new-posts') {
//         evt.waitUntil(
//             // Sync logic here
//         );
//     }
// });

// Push Notifications
// self.addEventListener('push', evt => {
//     const data = evt.data.json();
//     const options = {
//         body: data.body,
//         icon: 'icons/app_icon_x144.png',
//         badge: 'icons/app_icon_x144.png'
//     };
//     evt.waitUntil(
//         self.registration.showNotification(data.title, options)
//     );
// });
