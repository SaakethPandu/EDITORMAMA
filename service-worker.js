
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll(["index.html", "style.css", "main.js"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
