const staticCacheName='site-ststic';
const assets=[
'./index.html',
'./src/main.js',
'./main/main.css',

'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
];

self.addEventListener('install', e=>{
e.waitUntil(
caches.open(staticCacheName).then(cache=>{
console.log('caching shell assets');
cache.addAll(assets);
})
);
});
self.addEventListener('activate', e=>{

}

self.addEventListener('fetch', e=>{
    console.log('fetch event',e);
    e.respondWith(
        caches.match(e.request).then(cacheRes=>{
            return cacheRes|| fetch(e.request);
        })
    )
    });
    