const CACHE_NAME = "Version-1";
const urlsToCache = ["index.html", "offline.html"];

//Install SW

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(caches => {
      console.log("Opened Cache");
      return caches.addAll(urlsToCache);
    })
  );
});

// Listen for request

self.addEventListener("fetch", event => {});

// Activate the SW

self.addEventListener("activate", event => {});
