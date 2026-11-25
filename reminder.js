/* Erinnerung an das Wochenquiz.
   social.js calls FIQH_REMINDER.update(info) after every render:
     info = { uid, ready, open: [league names still open this week], played: [comp keys],
              leagues: [{ sfx, name }], cal: { anchor, week, per, n } }
   - A red dot on the „Wettbewerb“ tab while a league of this week is still open (everyone, no permission needed);
     in the installed app also the number on the app icon.
   - Opt-in system notifications (button in the competition card). The service worker decides
     (sw.js, remindCheck): only between 16:00 and 19:30 local time, once at the start of the week
     („Neues Wochenquiz ist da“) and once on the last day (Sunday) – and only while a league is open.
     It re-reads the public score card (players/<uid>), so a round played on another device counts.
   - Delivery: Periodic Background Sync (installed app in Chrome/Edge/Android) and, while the page is
     open in the background, a check every few minutes. Other browsers: only the dot in the app. */
(function () {
  "use strict";
  var APP = window.FIQH_APP;
  if (!APP) return;
  var T = window.T || function (s, v) { return v ? String(s).replace(/\{(\w+)\}/g, function (m, k) { return v[k] !== undefined ? v[k] : m; }) : s; };
  function $(sel) { return document.querySelector(sel); }
  var FROM = 16 * 60, TO = 19 * 60 + 30;          // notification window, minutes after midnight (local time)
  var CFG = window.FIQH_FIREBASE || {};
  var hasSW = "serviceWorker" in navigator && /^https?:$/.test(location.protocol);
  var hasNote = typeof Notification !== "undefined";
  var standalone = window.matchMedia && window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  var last = null, lastSent = "", periodic = null;

  function on() { return APP.store("remind") === "on" && hasNote && Notification.permission === "granted"; }
  function sw(msg) {
    if (!hasSW) return;
    navigator.serviceWorker.ready.then(function (reg) { if (reg.active) reg.active.postMessage(msg); }).catch(function () {});
  }

  /* state for the service worker; sent only when it changed */
  function push() {
    if (!last) return;
    var state = {
      on: on(), uid: last.ready ? last.uid : null, played: last.played, leagues: last.leagues,
      anchor: last.cal.anchor, week: last.cal.week, per: last.cal.per, from: FROM, to: TO,
      project: CFG.projectId || "", key: CFG.apiKey || "", locale: window.I18N ? window.I18N.locale : "de-DE", and: T(" und "),
      texts: {
        "new": { title: T("Neues Wochenquiz ist da"), body: T("Woche {n} von {m} ist offen: {leagues}. Du hast einen Versuch – bis Sonntag, 24 Uhr.") },
        last: { title: T("Heute letzter Tag für das Wochenquiz"), body: T("Noch nicht gespielt: {leagues}. Die Runde endet heute um 24 Uhr.") }
      }
    };
    var json = JSON.stringify(state);
    if (json === lastSent) return;
    lastSent = json;
    sw({ type: "remind", state: state });
  }

  function dot() {
    var d = $("#comp-dot");
    if (!d) return;
    var n = last && last.ready ? last.open.length : 0;
    d.hidden = !n;
    d.title = n ? T("Wochenquiz noch nicht gespielt") : "";
    /* installed app: the number of open leagues on the app icon (page only – in the worker it is not reliable) */
    if (standalone && navigator.setAppBadge) (n ? navigator.setAppBadge(n) : navigator.clearAppBadge()).catch(function () {});
  }

  function canPeriodic() { return hasSW && "periodicSync" in ServiceWorkerRegistration.prototype; }
  function registerPeriodic() {
    if (!canPeriodic()) { periodic = false; return; }
    navigator.serviceWorker.ready.then(function (reg) {
      var go = function () {
        return reg.periodicSync.register("quiz-reminder", { minInterval: 3 * 36e5 }).then(function () { periodic = true; render(); });
      };
      var ask = navigator.permissions && navigator.permissions.query ? navigator.permissions.query({ name: "periodic-background-sync" }) : Promise.resolve({ state: "granted" });
      return ask.then(function (p) { if (p.state === "granted") return go(); periodic = false; render(); }, go);
    }).catch(function () { periodic = false; render(); });
  }
  function unregisterPeriodic() {
    if (!canPeriodic()) return;
    navigator.serviceWorker.ready.then(function (reg) { return reg.periodicSync.unregister("quiz-reminder"); }).catch(function () {});
  }

  /* the box in the competition card */
  function render() {
    var box = $("#remind");
    if (!box) return;
    if (!last || !last.uid) { box.hidden = true; return; }
    box.hidden = false;
    var html, when = T("Zu Beginn jeder Woche und am letzten Tag (Sonntag), jeweils zwischen 16 und 19:30 Uhr – nur solange du die Runde noch nicht gespielt hast.");
    if (!hasNote || !hasSW) {
      html = "<p>" + (ios && !standalone
        ? T("Erinnerungen an das Wochenquiz: Füge die App zuerst zum Home-Bildschirm hinzu (Teilen → „Zum Home-Bildschirm“) und öffne sie von dort. Dann kannst du sie hier einschalten.")
        : T("Dieser Browser kann keine Benachrichtigungen anzeigen. Der rote Punkt beim Wettbewerb zeigt dir trotzdem, wenn das Wochenquiz noch offen ist.")) + "</p>";
    } else if (Notification.permission === "denied") {
      html = "<p>" + T("Benachrichtigungen sind für diese Seite blockiert. Erlaube sie in den Website-Einstellungen deines Browsers, dann kannst du die Erinnerung hier einschalten.") + "</p>";
    } else if (on()) {
      html = '<p><b>' + T("Erinnerung an das Wochenquiz ist an.") + "</b> " + when +
        (periodic === false ? " " + T("In diesem Browser kommt sie nur, solange die Seite (auch im Hintergrund) geöffnet ist. Als installierte App in Chrome oder Edge kommt sie auch, wenn die App geschlossen ist.") : "") + "</p>" +
        '<button type="button" class="btn btn-sm" data-remind="off">' + T("Ausschalten") + "</button>";
    } else {
      html = "<p><b>" + T("Nie mehr ein Wochenquiz verpassen") + "</b> " + when + "</p>" +
        '<button type="button" class="btn btn-sm" data-remind="on">' + T("Erinnerung einschalten") + "</button>";
    }
    box.innerHTML = html;
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-remind]");
    if (!b) return;
    if (b.getAttribute("data-remind") === "off") {
      APP.store("remind", "off"); unregisterPeriodic(); render(); push(); return;
    }
    b.disabled = true;
    Promise.resolve(Notification.permission === "granted" ? "granted" : Notification.requestPermission()).then(function (p) {
      if (p === "granted") {
        APP.store("remind", "on");
        registerPeriodic();
        /* a short confirmation, so the student sees what a reminder looks like */
        navigator.serviceWorker.ready.then(function (reg) {
          return reg.showNotification(T("Erinnerung eingeschaltet"), {
            body: T("Wir melden uns, wenn ein neues Wochenquiz da ist – nachmittags zwischen 16 und 19:30 Uhr."),
            icon: "icons/icon-192.png", tag: "quiz-reminder-on"
          });
        }).catch(function () {});
      }
      render(); push();
    }, function () { render(); });
  });

  /* while the page is open: let the service worker check now and then (it only notifies when the page is not in view) */
  setInterval(function () { if (on()) sw({ type: "remind-check" }); }, 5 * 6e4);
  document.addEventListener("visibilitychange", function () { if (document.hidden && on()) sw({ type: "remind-check" }); });
  /* a click on a notification focuses an open page: go to the competition */
  if (hasSW) navigator.serviceWorker.addEventListener("message", function (e) {
    if (e.data && e.data.type === "open-comp") { APP.showView("wettbewerb"); window.scrollTo(0, 0); }
  });
  if (hasSW && navigator.serviceWorker.startMessages) navigator.serviceWorker.startMessages();
  if (on()) registerPeriodic();

  window.FIQH_REMINDER = {
    update: function (info) { last = info; dot(); render(); push(); }
  };
})();
