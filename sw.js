const staticCacheName = 'site-static'
const assets = [
    '/',
    '/index.html',
    // ------ All the materialize css cached ------
    '/assets/css/materialize.css',
    '/assets/js/materialize.js',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css',
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
    'assets/css/newhome.css',
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
    'assets/js/newhome.js',
    'assets/js/password_script.js',
    'assets/js/settings.js',
    // ------ All the js validation cached ------
    'assets/validation/addaccount_validation.js',
    'assets/validation/bookingdetail_validation.js',
    'assets/validation/settings_validation.js',
    'assets/validation/signin_validation.js',
    'assets/validation/signup_validation.js',
    // ------ All the icons cached ------
    'icons/app_icon_x48.png',
    'icons/app_icon_x72.png',
    'icons/app_icon_x96.png',
    'icons/app_icon_x144.png',
    'icons/app_icon_x192.png',
    'icons/app_icon_x512.png',
    // ------ All the png, jpg, jpeg, svg cached ------
    'images/BabyBanner1.jpg',
    'images/BabyBanner2.jpg',
    'images/BabyBanner3.jpg',
    'images/comment.png',
    'images/customerservice.png',
    'images/eye_closed.svg',
    'images/eye_open.svg',
    'images/healthy.png',
    'images/like.png',
    // ------ All the screen html cached ------
    'screens/addaccount.html',
    'screens/addforum.html',
    'screens/allbookings.html',
    'screens/bookingdetail.html',
    'screens/calendar.html',
    'screens/forum.html',
    'screens/nannybooking.html',
    'screens/nav.html',
    'screens/newhome.html',
    'screens/settings.html',
    'screens/signin.html',
    'screens/signup.html',
];

// install event
self.addEventListener('install', evt => {
    // console.log('service worker installed');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets')
            cache.addAll(assets)
        }))
});

// activate event
self.addEventListener('activate', evt => {
    // console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
});