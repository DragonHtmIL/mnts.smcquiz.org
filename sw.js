var GHPATH = '/mnts.memorycards.org';
var APP_PREFIX = 'gppwa_';
let VERSIONNAME = "0.0.1-20112026";
var URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index_data`,
  `${GHPATH}/index.html`,
  `${GHPATH}/manifest.webmanifest`,
  `${GHPATH}/index_data/scripts`,
  `${GHPATH}/index_data/scripts/devices.js`,
  `${GHPATH}/index_data/scripts/header.js`,
  `${GHPATH}/index_data/scripts/icons.js`,
  `${GHPATH}/index_data/scripts/list_answers.js`,
  `${GHPATH}/index_data/scripts/list_hints.js`,
  `${GHPATH}/index_data/scripts/list_loader.js`,
  `${GHPATH}/index_data/scripts/list_quenstions.js`,
  `${GHPATH}/index_data/scripts/menu.js`,
  `${GHPATH}/index_data/scripts/modal_search.js`,
  `${GHPATH}/index_data/scripts/scroll.js`,
  `${GHPATH}/index_data/scripts/search.js`,
  `${GHPATH}/index_data/scripts/totop.js`,
  `${GHPATH}/index_data/scripts/window_load.js`,
  `${GHPATH}/index_data/scripts/window_scroll.js`,
  `${GHPATH}/index_data/textures`,
  `${GHPATH}/index_data/textures/icons`,
  `${GHPATH}/index_data/textures/gui/totop.png`,
  `${GHPATH}/index_data/textures/system`,
  `${GHPATH}/index_data/textures/system/icon_0.png`,
  `${GHPATH}/index_data/textures/system/icon_16.png`,
  `${GHPATH}/index_data/textures/system/icon_32.png`,
  `${GHPATH}/index_data/textures/system/icon_48.png`,
  `${GHPATH}/index_data/textures/system/icon_76.png`,
  `${GHPATH}/index_data/textures/system/icon_96.png`,
  `${GHPATH}/index_data/textures/system/icon_120.png`,
  `${GHPATH}/index_data/textures/system/icon_128.png`,
  `${GHPATH}/index_data/textures/system/icon_144.png`,
  `${GHPATH}/index_data/textures/system/icon_152.png`,
  `${GHPATH}/index_data/textures/system/icon_167.png`,
  `${GHPATH}/index_data/textures/system/icon_180.png`,
  `${GHPATH}/index_data/textures/system/icon_192.png`,
  `${GHPATH}/index_data/textures/system/icon_196.png`,
  `${GHPATH}/index_data/textures/system/icon_228.png`,
  `${GHPATH}/index_data/textures/system/icon_256.png`,
  `${GHPATH}/index_data/textures/system/icon_300.png`,
  `${GHPATH}/index_data/textures/system/icon_384.png`,
  `${GHPATH}/index_data/textures/system/icon_512.png`,
  `${GHPATH}/index_data/styles`,
  `${GHPATH}/index_data/styles/media.css`,
  `${GHPATH}/index_data/styles/roots.css`,
  `${GHPATH}/index_data/styles/styles.css`
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSIONNAME).then(cache => cache.addAll(URLS)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    if (response) {
      return response;
    }
    return fetch(event.request);
    })
  );
});