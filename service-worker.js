!function(){"use strict";const e=["client/index.b34ec52d.js","client/client.c06eb4f2.js","client/about.07490553.js","client/SubcatDictionary.40fac780.js","client/client.19b42098.js","client/bycategory.4b65464a.js","client/bycountry.409bc81f.js","client/Chart.c1b0d9b2.js"].concat(["service-worker-index.html","global.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1588861734967").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1588861734967"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1588861734967").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const s=await t.match(e.request);if(s)return s;throw c}}))))})}();
