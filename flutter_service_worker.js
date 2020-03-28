'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/images/noodles.jpg": "f89a2350ebc4ac8414b8100d24f1308c",
"/assets/images/hawkers.jpg": "e3a5251f3224f64be38587f6f929499e",
"/assets/images/flipping.jpg": "5125b8df864375ee8888aa03c461619e",
"/assets/images/bluehill.jpg": "678c60b0405c644570226e2b5ad678fc",
"/assets/images/cheesechilly.jpg": "42a55f83de7a5e26cd70b78892324e13",
"/assets/images/burger.jpg": "19c5b8b62703f3dab8321f47ef7ac972",
"/assets/images/pizzahut.jpg": "9a5f39c1a197c1d7b0e8eea810d38f78",
"/assets/images/pizza.jpg": "07f8ab053f242a2e47fa10512b6d7976",
"/assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "9bfeb985a91e5545d78b906676d8e6fb",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/data.json": "39515a2c6b8365232ba7312894732d90",
"/assets/FontManifest.json": "8f830a40a5eeac7245619bd3fa749f25",
"/assets/fonts/Samantha.ttf": "3e121c412d2449db4b6ec3ec12a62a55",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "b5b1a8966e1d6878edb1e438a71be308",
"/assets/LICENSE": "c9c4117c5d4f704876572a8c9a6c927a",
"/main.dart.js": "e678ed680e70904f56cc08f2b106d01e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
