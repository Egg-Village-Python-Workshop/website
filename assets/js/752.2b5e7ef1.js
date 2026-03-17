/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/**
 * Dedicated Service Worker logic for caching AI model files.
 * This is designed to be modular and can be imported into the main SW 
 * or registered as a standalone worker if needed.
 */const CACHE_NAME='ai-models-cache-v1';// Listen for fetch events and intercept model file requests
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);// Identify model files (usually from huggingface.co or configured CDN)
// Transformers.js usually fetches from https://huggingface.co/Xenova/...
if(url.hostname==='huggingface.co'||url.hostname==='cdn.jsdelivr.net'){event.respondWith(caches.open(CACHE_NAME).then(cache=>{return cache.match(event.request).then(response=>{if(response){return response;// Return from cache
}// Not in cache, fetch and store
return fetch(event.request).then(networkResponse=>{// Only cache successful responses
if(networkResponse.status===200){cache.put(event.request,networkResponse.clone());}return networkResponse;});});}));}});
module.exports = __webpack_exports__;
/******/ })()
;