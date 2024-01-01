// Adicionando o Service Worker
const CACHE_NAME = 'my-todo-list-v1';
const urlsToCache = [
    './',
    'index.html',
    'styles.css',
    'app.js',
    'manifest.json',
    'icon.png'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Cache aberto');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
