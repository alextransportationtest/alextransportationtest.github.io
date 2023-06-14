'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/a350.png": "4f49c891ce53893ffb39a3b683065d62",
"assets/assets/a80.png": "51d2b732ba2208bbcb5d4053600f7f5c",
"assets/assets/a170.png": "760770e7ecdb750344fe193bd61d91a2",
"assets/assets/a60.png": "5841c0b5051c0a2d83ea2106ccd7fdde",
"assets/assets/a0.png": "738109d51a8e673e3cc407eef0bdafa2",
"assets/assets/a290.png": "14e90876c91a973cf2064a7098c4d68f",
"assets/assets/a20.png": "7ddc434bfe65bc6d0be347a2b8516c4a",
"assets/assets/logo.png": "d9ce2a29f6ebe3f39d56521051b40fab",
"assets/assets/mapBelet.png": "52894020b071fcc3f06db915db2c013d",
"assets/assets/a140.png": "e02a7c40c032848e515a9713b7aee4c3",
"assets/assets/a260.png": "5d86a8766cc94a3517952084a767f970",
"assets/assets/a180.png": "29540690a0da6d8112f55fb6700cf5b7",
"assets/assets/a190.png": "9988a4738ee1e8a5a1e06e3401ee68a5",
"assets/assets/mapc.png": "ada99619234715ae9709d84ac80a6e2d",
"assets/assets/a120.png": "75f4ec47666ef46196bf8e738f0921f1",
"assets/assets/logo2.png": "d1fe041c8fc721d3acf6db0e4cc298f0",
"assets/assets/a340.png": "ddb3f338ece2f2bef8b3f601f3b574f3",
"assets/assets/maptt5orda.png": "97a050c47b73c8c6a2a7b35de18f0639",
"assets/assets/a70.png": "60e8cf9fac0674e8a40e0645b26c733a",
"assets/assets/a200.png": "1117a0a13e12714aee35daa4ef6abe5c",
"assets/assets/a320.png": "e831db8a18a7f9accbfb6ff6d0828d57",
"assets/assets/mapAlex.png": "530c330f23c4929f961a3e2974190aa2",
"assets/assets/logo3.jpg": "ad0eac256aa0a001d131a556a5f93f00",
"assets/assets/a50.png": "d0c5a717801af7abad4db42f38fdcf9b",
"assets/assets/maptt.png": "da917c6f89a04becfc3d7e190b9875e4",
"assets/assets/logo3.png": "402e5217f82a6ed832d728d10b9e3292",
"assets/assets/a40.png": "9d7ccaccf6aafab1db695de6382efc16",
"assets/assets/a230.png": "21e763658858d013c37637d4d1e82826",
"assets/assets/a220.png": "efaf24e36b0788ec02f351d73482c166",
"assets/assets/a90.png": "285c1f35ec9224eec5f4d2e663a9f31a",
"assets/assets/mapttTaslee7.png": "882de0ee5a9d0d249e427ee3b5210551",
"assets/assets/a280.png": "9dcad1a9e98a7a3fba330eba5a9d58e5",
"assets/assets/a270.png": "8d1509c8b231665350a112b8a2ca40c6",
"assets/assets/maptMakka.png": "da917c6f89a04becfc3d7e190b9875e4",
"assets/assets/a240.png": "3454b9ece1e600ff3c336f86cef8fd56",
"assets/assets/a30.png": "0bd0c4350aa76d76ced4a5336ec75d39",
"assets/assets/a100.png": "5886ba43dfc60c84542795213e1b7f19",
"assets/assets/a210.png": "77982e893f59b412f06e146cd0a4eb38",
"assets/assets/a250.png": "a59273e89cf693456b215fbbc90bf762",
"assets/assets/a360.png": "c31b2915e887aba76fde46b985795b47",
"assets/assets/mapb.png": "93d6a21dbf94e8b9057930090dac2f19",
"assets/assets/a130.png": "0b9728678e43094f1cbfff35076fb83e",
"assets/assets/a310.png": "0e5b1c8d45744236ce1057df44a4bb0a",
"assets/assets/logo2.jpg": "402e5217f82a6ed832d728d10b9e3292",
"assets/assets/a160.png": "22439f3b724608fa59a20d8d4d3c5c0d",
"assets/assets/a300.png": "c68bb2513ded18018ede8d2b2d4c0121",
"assets/assets/a330.png": "d65f8c053cd75532bd966eaead596e29",
"assets/assets/a10.png": "578c820731d65a81c4b96237f2c46f52",
"assets/assets/logo.jpg": "18744c5849d967d82be63212dc3e32cd",
"assets/assets/credentials.json": "442e64d7d64b56b21f53f0089d3ef723",
"assets/assets/a110.png": "15c620835cd6ff847a926610957e136c",
"assets/assets/a150.png": "ea374392b7ce73954d315de0c16cfef0",
"assets/assets/mapt7awyat.png": "96d220f3e944ebf1f6823aaaff6dfc9a",
"assets/FontManifest.json": "354ebdd50fb452b5ca5fc5bd78f848b5",
"assets/fonts/arial.ttf": "fa3228aadde0db988e1822c2f736c131",
"assets/fonts/Cairor.ttf": "ff8fa0e134d04ac50030e27cefcf7a4c",
"assets/fonts/Cairo.ttf": "2edd7ee30421da9700b12928ac0073db",
"assets/fonts/arialB.ttf": "919ca656effd44a965b46ce224206fa2",
"assets/fonts/cc.ttf": "71b4de66bd8bb9eec0c1e27914c5f546",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "4c439c08d84c1e42e22e016a646dc8ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "4cdb88f3eff6a7eedd555d5e434ef642",
"assets/shaders/ink_sparkle.frag": "44e28199ddf2926f8560b793ef1479e2",
"favicon.png": "107a9e1198486c8ded5da70ef4975ea5",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"main.dart.js": "50f0f5c4ff50cc6278c3a92991877293",
"index.html": "2188f80d4312f086b8a52c34e9e402e6",
"/": "2188f80d4312f086b8a52c34e9e402e6",
"manifest.json": "bb8ec6f391223ec0b7e6aa77b2a4f2ec",
"version.json": "365c8cdb36c85659ce96be73e086a8f9",
"icons/Icon-512.png": "107a9e1198486c8ded5da70ef4975ea5",
"icons/Icon-192.png": "0d069683bd629ee660f47dfba26783ff",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
