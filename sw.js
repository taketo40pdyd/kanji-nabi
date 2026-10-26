const V="kanjinavi-v1",SHELL=["./","icon-192.png","icon-512.png","apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request;if(r.method!=="GET")return;
  const u=new URL(r.url);
  if(r.mode==="navigate"){ // ページ本体は通信優先（更新が反映される）、オフライン時は保存分
    e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(V).then(h=>h.put("./",c));return x}).catch(()=>caches.match("./")));return}
  if(u.origin===location.origin){e.respondWith(caches.match(r).then(m=>m||fetch(r).then(x=>{const c=x.clone();caches.open(V).then(h=>h.put(r,c));return x})));return}
  if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){ // フォントは保存分を先に出して裏で更新
    e.respondWith(caches.open(V).then(c=>c.match(r).then(m=>{const n=fetch(r).then(x=>{c.put(r,x.clone());return x}).catch(()=>m);return m||n})))}
});
