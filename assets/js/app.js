console.log('Script loaded');

if ('serviceWorker' in navigator) {
    console.log('Service Worker supported');

    navigator.serviceWorker.register('/service-worker.js')
        .then((reg) => {
            console.log('Service Worker registration attempt');
            console.log('service worker registered', reg);
        })
        .catch((err) => {
            console.log('Service Worker registration attempt');
            console.log('service worker not registered', err);
        });
} else {
    console.log('Service Worker not supported in this browser');
}
