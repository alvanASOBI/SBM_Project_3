const staticCacheName = 'site-static-v4';
const dynamicCacheName = 'site-dynamic-v4';

const staticAssets = [
    '/', // Root path
    '/index.html', // Main HTML file
    '/screens/fallback.html', // Fallback for offline
    // CSS Frameworks
    '/assets/css/materialize.css',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
    // JavaScript Frameworks
    '/assets/js/materialize.js',
    // External Fonts and Icons
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v142/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
    // App Icons
    'assets/icons/app_icon_x48.png',
    'assets/icons/app_icon_x72.png',
    'assets/icons/app_icon_x96.png',
    'assets/icons/app_icon_x144.png',
    'assets/icons/app_icon_x192.png',
    'assets/icons/app_icon_x512.png'
];

const dynamicAssets = [
    // CSS files for specific functionality
    'assets/css/addaccount.css',
    'assets/css/addforum.css',
    'assets/css/allbookings.css',
    'assets/css/bookingdetail.css',
    'assets/css/calendar.css',
    'assets/css/consult.css',
    'assets/css/forum.css',
    'assets/css/global.css',
    'assets/css/home.css',
    'assets/css/nannybooking.css',
    'assets/css/settings.css',
    'assets/css/styles.css',
    // JavaScript files for specific functionality
    'assets/js/addaccount.js',
    'assets/js/addforum.js',
    'assets/js/allbookings.js',
    'assets/js/app.js',
    'assets/js/bookingdetail.js',
    'assets/js/calendar.js',
    'assets/js/db.js',
    'assets/js/forum.js',
    'assets/js/home.js',
    'assets/js/nannybooking.js',
    'assets/js/nav.js',
    'assets/js/password_script.js',
    'assets/js/settings.js',
    // JS validation files
    'assets/validation/addaccount_validation.js',
    'assets/validation/bookingdetail_validation.js',
    'assets/validation/settings_validation.js',
    'assets/validation/signin_validation.js',
    'assets/validation/signup_validation.js',
    // Common JS files
    'common/bottom_navigation_bar.js',
    // Images and icons
    'assets/images/BabyBanner1.jpg',
    'assets/images/BabyBanner2.jpg',
    'assets/images/BabyBanner3.jpg',
    'assets/images/comment.png',
    'assets/images/customerservice.png',
    'assets/images/eye_closed.svg',
    'assets/images/eye_open.svg',
    'assets/images/like.png',
    'assets/images/users.png',
    // HTML pages for dynamic screens
    'screens/addaccount.html',
    'screens/addforum.html',
    'screens/allbookings.html',
    'screens/bookingdetail.html',
    'screens/calendar.html',
    'screens/forum.html',
    'screens/home.html',
    'screens/nannybooking.html',
    'screens/settings.html',
    'screens/SignIn.html',
    'screens/signup.html',
    // App-specific JS components
    'src/main.js',
    'src/components/home/home_add_baby_profile_button.js',
    'src/components/home/home_baby_profile_card.js',
    // Firebase
    'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js',
    'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js',
    'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js'
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
            console.log('Caching static assets');
            return cache.addAll(staticAssets);
        })
    );
});

// Activate event
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== staticCacheName && key !== dynamicCacheName)
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
            if (evt.request.url.indexOf('.html') > -1) {
                return caches.match('/screens/fallback.html');
            }
        })
    );
});