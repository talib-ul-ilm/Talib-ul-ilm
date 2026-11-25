/* Service worker: makes Ṭālibu l-ʿIlm installable and usable offline.
   Own files: network first (always the newest version when online), cache as fallback.
   Fonts and the Firebase SDK: cache first. Firebase data itself is never cached here. */
var CACHE = "fiqh-kompass-v106";
var REMIND = "fiqh-reminder";   // state of the weekly-quiz reminder (reminder.js), kept across updates
var CORE = [
  "./", "index.html", "datenschutz.html", "manifest.webmanifest", "i18n-en.js", "i18n.js",
  "data.js", "tajwid/begriffe.js", "glossar.js", "app.js", "learn.js", "irabgen.js", "sarf.js", "arabic.js", "nachschlagen.js", "arabisch/sarf-regeln.js", "arabisch/zahlen.js", "arabisch/plurale.js", "tajwid/inhalt.js", "tajwid/ergaenzung.js", "tajwid/regeln.js", "tajwid/tuhfa.js", "tajwid.js", "mistakes.js", "progress.js", "home.js", "arabisch/madina1-a.js", "arabisch/madina1-b.js", "arabisch/madina1-c.js", "arabisch/madina2-a.js", "arabisch/madina2-b.js", "arabisch/madina2-c.js", "arabisch/irab1-saetze.js", "arabisch/irab2-saetze.js", "arabisch/irab2-mehr.js", "arabisch/madina-en.js", "arabisch/warum.js", "arabisch/irab-optionen.js", "arabisch/grammatik-plus.js", "arabisch/grammatik-mehr.js", "arabisch/grammatik-ueben1.js", "arabisch/grammatik-ueben2.js", "arabisch/grammatik-regeln1.js", "arabisch/grammatik-regeln2.js", "arabisch/texte.js", "arabisch/pruefen.js", "reminder.js", "social.js", "chat.js", "install.js", "auth.js", "backend.js", "firebase-config.js",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "icons/favicon-32.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE && k !== REMIND; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function isStaticThirdParty(url) {
  return url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com" ||
    (url.hostname === "www.gstatic.com" && url.pathname.indexOf("/firebasejs/") === 0);
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);

  if (url.origin === self.location.origin) {
    e.respondWith(fetch(req).then(function (res) {
      if (res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); return res; }
      /* e.g. a short 404 while GitHub Pages deploys: a broken script (i18n.js) would leave the
         whole page without texts, so the cached copy is used when there is one */
      return caches.match(req, { ignoreSearch: true }).then(function (hit) { return hit || res; });
    }).catch(function () {
      return caches.match(req, { ignoreSearch: true }).then(function (hit) {
        return hit || (req.mode === "navigate" ? caches.match("index.html") : Response.error());
      });
    }));
    return;
  }

  if (isStaticThirdParty(url)) {
    e.respondWith(caches.match(req).then(function (hit) {
      return hit || fetch(req).then(function (res) {
        if (res.ok || res.type === "opaque") { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
        return res;
      });
    }));
  }
  // everything else (Firebase data, sign-in) goes straight to the network
});

/* ---------- weekly quiz reminder ----------
   reminder.js sends its state (message "remind"); this worker decides and shows the notification.
   Only between state.from and state.to (16:00–19:30 local time), at most once at the start of
   the week ("new") and once on its last day ("last"), only while a league of the week is still
   open and the app is not in view. Played or not comes from the public score card
   players/<uid> (Firestore REST), so a round played on another device counts too. */
var REMIND_URL = "reminder-state";
function remindLoad() {
  return caches.open(REMIND).then(function (c) { return c.match(REMIND_URL); })
    .then(function (r) { return r ? r.json() : null; }).catch(function () { return null; });
}
function remindStore(s) {
  return caches.open(REMIND).then(function (c) {
    return c.put(REMIND_URL, new Response(JSON.stringify(s), { headers: { "Content-Type": "application/json" } }));
  });
}
function remindWeek(s, now) {
  var w = Math.max(0, Math.floor((now - s.anchor) / s.week));
  return { key: "s" + (Math.floor(w / s.per) + 1) + "w" + (w % s.per + 1), n: w % s.per + 1, end: s.anchor + (w + 1) * s.week };
}
function remindPlayed(s) {
  var done = {};
  (s.played || []).forEach(function (k) { done[k] = 1; });
  if (!s.project) return Promise.resolve(done);
  var url = "https://firestore.googleapis.com/v1/projects/" + encodeURIComponent(s.project) +
    "/databases/(default)/documents/players/" + encodeURIComponent(s.uid) + "?mask.fieldPaths=comp" + (s.key ? "&key=" + encodeURIComponent(s.key) : "");
  return fetch(url, { cache: "no-store" }).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
    var comp = d && d.fields && d.fields.comp && d.fields.comp.mapValue && d.fields.comp.mapValue.fields;
    Object.keys(comp || {}).forEach(function (k) { done[k] = 1; });
    return done;
  }, function () { return done; });
}
function remindInView() {
  return self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (list) {
    return list.some(function (c) { return c.visibilityState === "visible"; });
  });
}
function remindCheck() {
  return remindLoad().then(function (s) {
    if (!s || !s.on || !s.uid || self.Notification && self.Notification.permission !== "granted") return;
    var now = Date.now(), wk = remindWeek(s, now);
    return remindPlayed(s).then(function (done) {
      var open = (s.leagues || []).filter(function (l) { return !done[wk.key + l.sfx]; });
      if (!open.length) return;
      return Promise.resolve().then(function () {
        var d = new Date(now), m = d.getHours() * 60 + d.getMinutes();
        if (m < s.from || m >= s.to) return;
        var kind = new Date(wk.end - 1).toDateString() === d.toDateString() ? "last" : "new";
        s.sent = s.sent || {};
        if (s.sent[kind] === wk.key || kind === "new" && s.sent.last === wk.key) return;
        return remindInView().then(function (inView) {
          if (inView) return;
          s.sent[kind] = wk.key;
          var t = s.texts[kind], leagues = open.map(function (l) { return l.name; }).join(s.and || " und ");
          var body = t.body.replace("{n}", wk.n).replace("{m}", s.per).replace("{leagues}", leagues);
          return remindStore(s).then(function () {
            return self.registration.showNotification(t.title, {
              body: body, tag: "quiz-reminder", icon: "icons/icon-192.png", badge: "icons/favicon-32.png", lang: s.locale
            });
          });
        });
      });
    });
  }).catch(function () {});
}
self.addEventListener("message", function (e) {
  var d = e.data || {};
  if (d.type === "remind" && d.state) {
    e.waitUntil(remindLoad().then(function (old) {
      d.state.sent = old && old.sent || {};       // keep what was already sent this week
      return remindStore(d.state);
    }).then(remindCheck));
  } else if (d.type === "remind-check") e.waitUntil(remindCheck());
});
self.addEventListener("periodicsync", function (e) {
  if (e.tag === "quiz-reminder") e.waitUntil(remindCheck());
});
self.addEventListener("notificationclick", function (e) {
  e.notification.close();
  var url = new URL("./#wettbewerb", self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) {
      if ("focus" in list[i]) { list[i].postMessage({ type: "open-comp" }); return list[i].focus(); }
    }
    return self.clients.openWindow ? self.clients.openWindow(url) : null;
  }));
});
