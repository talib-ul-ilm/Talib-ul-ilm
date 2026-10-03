/* Nachschlagen (tab in Arabisch): grammar rules of all Madina lessons, the Ṣarf rules
   (arabisch/sarf-regeln.js, with the forms of نَصَرَ as example) and the grammar terms of glossar.js –
   searchable in German and Arabic (with or without vowel signs).
   Book 2 is listed once it is open, like everywhere else. */
(function () {
  "use strict";
  var APP = window.FIQH_APP, A = window.FIQH_ARABIC, S = window.FIQH_SARF;
  if (!APP || !A) return;
  var esc = APP.esc, T = window.T || function (s, v) { return v ? String(s).replace(/\{(\w+)\}/g, function (m, k) { return v[k] !== undefined ? v[k] : m; }) : s; };
  var rich = A.rich || esc;
  var MAX = 60;

  /* compare without case, vowel signs and transliteration marks */
  function norm(s) {
    return String(s).replace(/\*\*/g, "")
      .replace(/[ً-ْٰـ]/g, "").replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
      .replace(/[šŠ]/g, "sch").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[ʿʾ'’`ʼ‘]/g, "")
      .replace(/ß/g, "ss").toLowerCase();
  }

  /* ---------- the entries ---------- */
  var entries = null;
  function build() {
    var out = [], b2 = A.book2Open();
    A.allLessons.forEach(function (l) {
      var book = l.book || 1;
      if (book === 2 && !b2) return;
      (l.grammar || []).forEach(function (g, i) {
        out.push({ kind: "nahw", id: l.id + ":" + i, lesson: l, book: book, html: rich(g),
          where: (book === 2 ? T("Buch 2") + " · " : "") + T("Lektion") + " " + l.n + " – " + l.title,
          hay: norm(g + " " + l.title) });
      });
    });
    (window.SARF_REGELN || []).forEach(function (r) {
      out.push({ kind: "sarf", id: r.id, rule: r, hay: norm(r.title + " " + r.ar + " " + r.text.join(" ") + " " + (r.tags || "")) });
    });
    (window.FIQH_GLOSSAR_LIST ? window.FIQH_GLOSSAR_LIST("a") : []).forEach(function (t) {
      out.push({ kind: "term", id: "t:" + t[0], term: t, hay: norm(t[0] + " " + t[1]) });
    });
    return out;
  }
  function all() { if (!entries || entries.b2 !== A.book2Open()) { entries = build(); entries.b2 = A.book2Open(); } return entries; }

  var KINDS = [["all", "Alles"], ["nahw", "Grammatik (Naḥw)"], ["sarf", "Ṣarf"], ["term", "Begriffe"]];
  var TOPICS = ["Genitiv", "Iḍāfa", "Nominalsatz", "Adjektiv", "Plural", "Dual", "Präposition", "Fragewort", "Zahlen", "Diptota",
    "Verb", "Befehl", "Passiv", "كَانَ", "إِنَّ", "Relativpronomen"];
  var state = { q: "", kind: "all" };
  try { var saved = JSON.parse(localStorage.getItem("fiqh:lookup") || "null"); if (saved) { state.q = saved.q || ""; state.kind = saved.kind || "all"; } } catch (e) {}
  function remember() { try { localStorage.setItem("fiqh:lookup", JSON.stringify(state)); } catch (e) {} }

  function find() {
    var words = norm(state.q).split(/\s+/).filter(Boolean);
    return all().filter(function (e) {
      if (state.kind !== "all" && e.kind !== state.kind) return false;
      return words.every(function (w) { return e.hay.indexOf(w) !== -1; });
    });
  }

  /* ---------- drawing ---------- */
  function example(r) {
    if (!S || !r.form || !S.FORM_BY_ID[r.form]) return "";
    var v = S.VERBS.filter(function (x) { return x.id === "نصر"; })[0], f = S.FORM_BY_ID[r.form];
    if (!v) return "";
    var forms = S.conj(v, f), rows = f.rows === "n" ? ["مُفْرَدٌ", "مُثَنًّى", "جَمْعٌ", "مُفْرَدٌ مُؤَنَّثٌ", "مُثَنًّى مُؤَنَّثٌ", "جَمْعٌ مُؤَنَّثٌ"]
      : (f.rows === "2" ? S.PERSONS.slice(6, 12) : S.PERSONS).map(function (p) { return p[0]; });
    return '<details class="lk-ex"><summary>' + T("Beispiel: {v}", { v: '<span lang="ar" dir="rtl">' + esc(v.past + " " + v.pres) + "</span>" }) + "</summary>" +
      '<div class="lk-forms" dir="rtl">' + forms.map(function (x, i) {
        return '<span class="lk-form"><small lang="ar">' + esc(rows[i] || "") + '</small><b lang="ar">' + esc(x) + "</b></span>";
      }).join("") + "</div></details>";
  }
  function card(e) {
    if (e.kind === "nahw") return '<li class="lk-card"><p class="lk-tag">' + T("Grammatik") + '</p><div class="lk-text">' + e.html + "</div>" +
      '<button type="button" class="linkish lk-where" data-lk-lesson="' + esc(e.lesson.id) + '">' + esc(e.where) + " →</button></li>";
    if (e.kind === "sarf") {
      var r = e.rule;
      return '<li class="lk-card"><p class="lk-tag">Ṣarf</p><h3>' + esc(T(r.title)) + ' <span lang="ar" dir="rtl" class="lk-ar">' + esc(r.ar) + "</span></h3>" +
        '<div class="lk-text">' + r.text.map(function (t) { return "<p>" + rich(t) + "</p>"; }).join("") + "</div>" + example(r) + "</li>";
    }
    return '<li class="lk-card lk-term"><p class="lk-tag">' + T("Begriff") + '</p><p><b>' + APP.bidiHtml(e.term[0]) + "</b> – " + APP.bidiHtml(e.term[1]) + "</p></li>";
  }
  function results() {
    var list = find(), q = state.q.trim();
    if (!q && state.kind === "all") {
      /* no search yet: the Ṣarf rules, then the grammar by lesson */
      var by = {}, order = [];
      all().forEach(function (e) {
        if (e.kind !== "nahw") return;
        if (!by[e.lesson.id]) { by[e.lesson.id] = []; order.push(e.lesson.id); }
        by[e.lesson.id].push(e);
      });
      return '<h3 class="lk-h">' + T("Ṣarf-Regeln") + '</h3><ul class="lk-list">' + all().filter(function (e) { return e.kind === "sarf"; }).map(card).join("") + "</ul>" +
        '<h3 class="lk-h">' + T("Grammatik nach Lektion") + "</h3>" + order.map(function (id) {
          var g = by[id], l = g[0].lesson;
          return '<details class="lk-lesson"><summary><span>' + esc(g[0].where) + '</span><small>' + g.length + "</small></summary>" +
            '<ul class="lk-list">' + g.map(card).join("") + "</ul></details>";
        }).join("");
    }
    if (!list.length) return '<p class="lk-none">' + T("Nichts gefunden. Versuche ein anderes Wort – deutsch, arabisch oder in Umschrift.") + "</p>";
    return '<p class="lk-count">' + T(list.length === 1 ? "1 Treffer" : "{n} Treffer", { n: list.length }) + (list.length > MAX ? " · " + T("die ersten {n} – verfeinere die Suche", { n: MAX }) : "") + "</p>" +
      '<ul class="lk-list">' + list.slice(0, MAX).map(card).join("") + "</ul>";
  }
  function counts() {
    var c = { all: 0, nahw: 0, sarf: 0, term: 0 }, words = norm(state.q).split(/\s+/).filter(Boolean);
    all().forEach(function (e) {
      if (!words.every(function (w) { return e.hay.indexOf(w) !== -1; })) return;
      c.all++; c[e.kind]++;
    });
    return c;
  }
  function kindsHtml() {
    var c = counts();
    return KINDS.map(function (k) {
      return '<button type="button" class="chip" data-lk-kind="' + k[0] + '" aria-pressed="' + (state.kind === k[0]) + '">' + esc(T(k[1])) + '<span class="chip-count">' + c[k[0]] + "</span></button>";
    }).join("");
  }
  function pane() {
    return '<div class="lk-pane">' +
      '<div class="panel lk-search"><label class="lk-label" for="lk-q">' + T("Grammatik und Ṣarf nachschlagen") + "</label>" +
      '<input type="search" id="lk-q" class="lk-input" autocomplete="off" placeholder="' + esc(T("z. B. Genitiv, Plural, Befehl, mafʿūl …")) + '" value="' + esc(state.q) + '">' +
      '<div class="chips lk-kinds">' + kindsHtml() + "</div>" +
      '<div class="lk-topics"><span>' + T("Themen:") + "</span>" + TOPICS.map(function (t) { return '<button type="button" class="linkish" data-lk-topic="' + esc(t) + '">' + APP.bidiHtml(T(t)) + "</button>"; }).join("") + "</div></div>" +
      '<div id="lk-results">' + results() + "</div></div>";
  }
  function refresh(body) {
    var r = body.querySelector("#lk-results"), k = body.querySelector(".lk-kinds");
    if (r) { r.innerHTML = results(); wireResults(r); }
    if (k) { k.innerHTML = kindsHtml(); wireKinds(body); }
    remember();
  }
  function wireResults(root) {
    Array.prototype.forEach.call(root.querySelectorAll("[data-lk-lesson]"), function (b) {
      b.addEventListener("click", function () { A.openLesson(b.getAttribute("data-lk-lesson")); });
    });
  }
  function wireKinds(body) {
    Array.prototype.forEach.call(body.querySelectorAll("[data-lk-kind]"), function (b) {
      b.addEventListener("click", function () { state.kind = b.getAttribute("data-lk-kind"); refresh(body); });
    });
  }
  function wire(body) {
    var input = body.querySelector("#lk-q"), timer = null;
    input.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () { state.q = input.value; refresh(body); }, 120);
    });
    Array.prototype.forEach.call(body.querySelectorAll("[data-lk-topic]"), function (b) {
      b.addEventListener("click", function () { input.value = state.q = b.getAttribute("data-lk-topic"); refresh(body); input.focus(); });
    });
    wireKinds(body);
    wireResults(body);
  }

  window.FIQH_LOOKUP = { pane: pane, wire: wire, search: function (q) { state.q = q || ""; return find(); } };
  /* arabic.js drew its body before this file was loaded */
  if (window.FIQH_ARABIC_RENDER) window.FIQH_ARABIC_RENDER();
})();
