if ('serviceWorker' in navigator) {
    navigator.serviceworker.register('/service-worker.js')
        .then((reg) => console.log('service worker registered', reg))
        .catch((err) => console.log('service worker not registered', err))
}