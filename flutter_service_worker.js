'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dd2a331589ec7d111dfddd1792261ee1",
"assets/AssetManifest.bin.json": "d70945277103a812ea3d3e23a8734407",
"assets/AssetManifest.json": "35b6a3ae32bdd21c9c59d9e80dae65a2",
"assets/assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/fonts/MYRIADPRO-SEMIBOLDIT.OTF": "70e8bfb420ffe3e505201e495d334cff",
"assets/assets/fonts/NicoMoji-Regular.ttf": "979599444280b966e0a36d9e93980965",
"assets/assets/icons/0.png": "448ff4441b1f6871be7a8545a03eaeac",
"assets/assets/icons/1.png": "43c364dee5b3d2eb889d173d2c0c4f23",
"assets/assets/icons/2.png": "405f0d428be64ba5384a30304aa33751",
"assets/assets/icons/3.png": "af6eafdb4fe1fe27f3f2f8d6ac432ec5",
"assets/assets/icons/4.png": "6bc95fc5814c1e24d15a9f993d0b009f",
"assets/assets/icons/5.png": "b0c6938d76e4c4673155f0e143b8c9e9",
"assets/assets/icons/6.png": "3a9c3f87949cdb2ffe5169bd5d48edbf",
"assets/assets/icons/7.png": "fc8a3f5ab890fb14f56ef2267ce79975",
"assets/assets/icons/8.png": "772f1c32e528b4f1f58c7c8702649a8d",
"assets/assets/icons/9.png": "95009251fce8fc9bef26e4f52cd77d38",
"assets/assets/icons/abondenedcart.png": "258287ae6cc643005092b12542f4018e",
"assets/assets/icons/app_logo.png": "3ed4b15c939da952d7708a482ea37bb0",
"assets/assets/icons/automation.png": "37a2b0c01f77b4a230789094888c02be",
"assets/assets/icons/campaign.png": "bb9603f33db0ed525f4598c044ba95b3",
"assets/assets/icons/carousel.png": "f96010120360a380753a928a8defab59",
"assets/assets/icons/customer.png": "44976b8d9ca9b73c445ec1730f9be15f",
"assets/assets/icons/giftcards.png": "7722b4d7d1495dbcbdcebe370166b12a",
"assets/assets/icons/home.png": "268db4e56e9793862a2cfe59de0e8fbc",
"assets/assets/icons/inventory.png": "3d32552003dfd3591553df9dd35cda22",
"assets/assets/icons/marketing.png": "5ec5de73679b94ddbcc9b36bcf7e7166",
"assets/assets/icons/orders.png": "3799739d8371b238bb7100f27b977809",
"assets/assets/icons/payableAmount.png": "84afebbaa367e5bc33d23d1302ed8d88",
"assets/assets/icons/products.png": "7e9274531eb5e5c675daa0fc35b6c193",
"assets/assets/icons/purchaseOrder.png": "c1a990e2dee9b9217251012228391e89",
"assets/assets/icons/revenue.png": "329ade9d74d8c6d2897e5a009db4ed17",
"assets/assets/icons/salechannel.png": "df21a4590b1aebf01721a36c2e3d14ee",
"assets/assets/icons/todaySalesIon.png": "a64f00f8683234e90c7e91cada969a7c",
"assets/assets/icons/totalProduts.png": "e50450145f4bb7b9f0b88c213a71e172",
"assets/assets/icons/totalSales.png": "4884f7cbe971335fea68672ac3b31ea4",
"assets/assets/icons/tracking.png": "bbd9a0cbae01aab0a3ac405cabf0d5f5",
"assets/assets/images/101.png": "0b7048b64c2dfd90df8e114c3b3423e8",
"assets/assets/images/102.png": "3531536c990431ac0a03464ed1f6fe61",
"assets/assets/images/103.png": "c9fef4aaca2f254be16d35b8f9f935db",
"assets/assets/images/104.png": "e576c6319a264c9c17cfa79f5b5e9c92",
"assets/assets/images/105.png": "625cd8feafc6fa71002fe53ab482d017",
"assets/assets/images/106.png": "5d175901a67a59c5b19b53e537938355",
"assets/assets/images/107.png": "0996d6ed660296e81c1d56885f4aec2c",
"assets/assets/images/108.png": "d3a31882b2de0baa31dd9eb245d5fb36",
"assets/assets/images/109.png": "c6e1f2386a6c4ff38cf26659425efed6",
"assets/assets/images/110.png": "cb8649150d370dc1148c7ea0f1a73c8a",
"assets/assets/images/111.png": "c9df98972758965738972a16b53823a9",
"assets/assets/images/112.png": "315b3cbb8466e148050b9f239341f7b5",
"assets/assets/images/113.png": "efa372225f1762ae7b63b0bdc10a8d70",
"assets/assets/images/114.png": "1df8932abd3867acfa9bd92c26501407",
"assets/assets/images/115.png": "5cb66c75086b29531c3e4e188a40582d",
"assets/assets/images/116.png": "6eb333f8ba10b4e94f2d5872a700caaf",
"assets/assets/images/117.png": "c0f611a3c989331ced72c491a84b2e25",
"assets/assets/images/118.png": "3e00acbd10056461a81b4b3c911e76f9",
"assets/assets/images/119.png": "8a49401ede57946d2b7dec5468747492",
"assets/assets/images/120.png": "47774832a222f440e95adf5a35964dd8",
"assets/assets/images/121.png": "8d29b718ee1b044056463629117fe020",
"assets/assets/images/122.png": "2f415988a4efc3a6559bd37b6f2228e4",
"assets/FontManifest.json": "87aec2a2114dad2a2ff57d24730c31f3",
"assets/fonts/MaterialIcons-Regular.otf": "db26d51a9d7f6895457e3032ee05e615",
"assets/NOTICES": "bab42c2fcfd9a44917188e9b1496c11a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4d01941af64ad4e971429e39250cd5cc",
"/": "4d01941af64ad4e971429e39250cd5cc",
"main.dart.js": "3ca5523ab3971cd80f1c8c0aa49a3b0f",
"manifest.json": "165eca3b59f9e56f1e0f13b54768c56e",
"version.json": "1b1193ca39718f8582312a05c89f6a37"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
