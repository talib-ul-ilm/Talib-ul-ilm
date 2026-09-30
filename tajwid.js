/* Taǧwīd: chapters with rules, examples, the questions of „Hidāyat ar-Raḥmān“ and practice rounds.
   Content: tajwid/inhalt.js (window.TAJWID). Questions get ids tj-… and use the shared progress of
   learn.js, so they count in the Fehlerordner like Fiqh and Arabic. */
(function () {
  "use strict";
  var APP = window.FIQH_APP, L = window.FIQH_LEARN, D = window.TAJWID;
  var view = document.getElementById("view-tajwid");
  if (!APP || !L || !D || !view) return;
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  var esc = APP.esc, T = window.T || function (s, v) { return v ? String(s).replace(/\{(\w+)\}/g, function (m, k) { return v[k] !== undefined ? v[k] : m; }) : s; };
  var ROUND = 10;

  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36); }
  function ar(s, cls) { return s ? '<span class="' + (cls || "") + '" lang="ar" dir="rtl">' + esc(s) + "</span>" : ""; }
  /* German text with Arabic in it: keep the Arabic runs isolated */
  function mixed(s) { return APP.bidiHtml ? APP.bidiHtml(s) : esc(s); }
  function srcText(src) {
    if (!src) return "";
    return T("Quelle:") + " " + String(src).replace(/B (\d+(?:[–-]\d+)?(?:, \d+)*)/g, function (m, n) { return D.src.book + ", " + T("Frage") + " " + n; })
      .replace(/Tafel/g, D.src.chart);
  }

  /* ---------- questions ---------- */
  var CH = D.chapters, BY_ID = {}, QS = [], SETS = {};
  CH.forEach(function (c, i) {
    c.n = i + 1;
    BY_ID[c.id] = c;
    SETS[c.id] = c.quiz.map(function (x) {
      return { t: "tajwid", tt: T("Taǧwīd · {t}", { t: c.title }), srcText: srcText(x.src), c: 0, chapter: c.id,
        _lid: "tj-" + hash(c.id + "|" + x.q + "|" + (x.ar || "")), q: x.q, ar: x.ar, a: x.a, e: x.e };
    });
    QS = QS.concat(SETS[c.id]);
  });
  function lv(q) { return L.levelOf(q._lid); }
  function stats(list) {
    var s = { total: list.length, learned: 0, almost: 0, wrong: 0, fresh: 0 };
    list.forEach(function (q) { var l = lv(q); if (l === 2) s.learned++; else if (l === 1) s.almost++; else if (l === -1) s.wrong++; else s.fresh++; });
    s.pct = s.total ? Math.floor(s.learned / s.total * 100) : 0;
    if (s.total && s.learned === s.total) s.pct = 100;
    return s;
  }
  function roundFor(list) {
    var wrong = [], almost = [], fresh = [], learned = [];
    list.forEach(function (q) { var l = lv(q); (l === -1 ? wrong : l === 1 ? almost : l === 2 ? learned : fresh).push(q); });
    var pick = APP.shuffle(wrong).concat(APP.shuffle(almost), fresh).slice(0, ROUND);
    return pick.length ? { qs: APP.shuffle(pick), review: false } : { qs: APP.shuffle(learned).slice(0, ROUND), review: true };
  }

  /* ---------- rounds ---------- */
  var lastRound = null;
  function listOf(id) { return id && SETS[id] ? SETS[id] : QS; }
  function labelOf(id) { return id && BY_ID[id] ? T("Taǧwīd · {t}", { t: BY_ID[id].title }) : T("Taǧwīd"); }
  function start(id) {
    var list = listOf(id), r = roundFor(list);
    if (!r.qs.length) return;
    APP.startQuiz(preset(r.qs, id, r.review, stats(list)));
  }
  function preset(qs, id, review, before) {
    var correct = 0, label = labelOf(id);
    return {
      learn: true,
      questions: qs,
      label: review ? label + " " + T("(Wiederholung)") : label,
      resume: { kind: "tj-round", args: { id: id || null, review: review, before: before } },
      onAnswer: function (q, ok) { if (ok) correct++; return L.recordId(q._lid, ok); },
      onFinish: function (p) {
        lastRound = { id: id, label: label, answered: p.answered, correct: correct, before: before, after: stats(listOf(id)) };
        L.sync();
      },
      onLeave: function () { APP.showView("tajwid"); render(); window.scrollTo(0, 0); }
    };
  }
  APP.onResume("tj-round", function (a, qs) { return preset(qs, a.id, a.review, a.before); });

  /* ---------- state ---------- */
  var state = { chapter: null };
  try { var saved = JSON.parse(localStorage.getItem("fiqh:tajwid") || "null"); if (saved && BY_ID[saved.chapter]) state.chapter = saved.chapter; } catch (e) {}
  function remember() { try { localStorage.setItem("fiqh:tajwid", JSON.stringify({ chapter: state.chapter })); } catch (e) {} }

  /* ---------- rendering ---------- */
  function bar(s) {
    function seg(n, cls) { return n ? '<span class="lb-' + cls + '" style="width:' + (n / s.total * 100) + '%"></span>' : ""; }
    return '<span class="lbar" role="img" aria-label="' + T("{n} von {m} gelernt", { n: s.learned, m: s.total }) + '">' + seg(s.learned, "ok") + seg(s.almost, "mid") + seg(s.wrong, "bad") + "</span>";
  }
  function ring(pct) {
    var r = 52, c = 2 * Math.PI * r;
    return '<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="' + r + '" class="ring-bg"/>' +
      '<circle cx="60" cy="60" r="' + r + '" class="ring-fg" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + (c * (1 - pct / 100)).toFixed(1) + '"/></svg>' +
      '<span class="ring-num"><b>' + pct + "</b><small>%</small></span>";
  }
  function nextChapter() {
    for (var i = 0; i < CH.length; i++) if (stats(SETS[CH[i].id]).pct < 100) return CH[i];
    return null;
  }

  function listPane() {
    return '<ol class="ar-lessons">' + CH.map(function (c) {
      var s = stats(SETS[c.id]), st = s.pct === 100 ? "done" : s.learned + s.almost + s.wrong ? "busy" : "new";
      return '<li class="lt lt-' + st + '"><button type="button" class="ar-lesson" data-tj-ch="' + c.id + '">' +
        '<span class="ar-num">' + c.n + "</span>" +
        '<span class="lt-main"><span class="lt-title"><strong>' + esc(c.title) + "</strong>" + ar(c.ar, "lt-ar") + "</span>" + bar(s) +
        '<small class="lt-meta">' + T("{n} Regeln · {m} Übungen · {k} Fragen aus dem Heft", { n: c.rules.length, m: c.quiz.length, k: c.book.length }) +
        (s.learned ? " · " + T("{n} % gelernt", { n: s.pct }) : "") + "</small></span>" +
        '<span class="lt-pct">' + (st === "done" ? "✓" : s.pct + " %") + "</span></button></li>";
    }).join("") + "</ol>";
  }

  function ruleHtml(r) {
    return '<section class="tj-rule"><h4>' + esc(r.h) + (r.ar ? " " + ar(r.ar, "tj-rule-ar") : "") + "</h4>" +
      (r.text ? "<p>" + mixed(r.text) + "</p>" : "") +
      (r.ex && r.ex.length ? '<ul class="ar-examples">' + r.ex.map(function (e) {
        return "<li>" + ar(e[0], "ar-ex") + '<span class="ar-de">' + esc(e[1] || "") + "</span></li>";
      }).join("") + "</ul>" : "") + "</section>";
  }
  function tableHtml(t) {
    return '<div class="ar-table-wrap"><table class="ar-table tj-table"><thead><tr>' + t.head.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") +
      "</tr></thead><tbody>" + t.rows.map(function (r) {
        return "<tr>" + r.map(function (c, i) { return "<td>" + (APP.arOnly && APP.arOnly(c) ? ar(c, i ? "" : "tj-letter") : mixed(c)) + "</td>"; }).join("") + "</tr>";
      }).join("") + "</tbody></table></div>";
  }
  function bookHtml(c) {
    return '<details class="tj-book"><summary><h3>' + T("Fragen aus dem Heft") + " <small>" + c.book.length + "</small></h3><p>" +
      esc(D.src.book) + "</p></summary><ol>" + c.book.map(function (b) {
        return '<li><p class="tj-bq"><span class="tj-bn">' + b[0] + "</span>" + ar(b[1]) + '</p><p class="tj-ba">' + mixed(b[2]) + "</p></li>";
      }).join("") + "</ol></details>";
  }
  function chapterPane(c) {
    var s = stats(SETS[c.id]), idx = CH.indexOf(c), prev = CH[idx - 1], next = CH[idx + 1];
    return '<div class="ar-lesson-view">' +
      '<button type="button" class="linkish ar-back" data-tj-back>← ' + T("Alle Kapitel") + "</button>" +
      '<header class="ar-lesson-head"><p class="eyebrow">' + T("Kapitel") + " " + c.n + "</p><h2>" + esc(c.title) + "</h2>" + ar(c.ar, "ar-title") + "</header>" +
      '<p class="tj-intro">' + mixed(c.intro) + "</p>" +
      '<button type="button" class="btn btn-primary" data-tj-learn="' + c.id + '">' + (s.pct === 100 ? T("✓ Kapitel wiederholen") : T("Kapitel üben · {n} %", { n: s.pct })) + "</button>" +
      '<section class="ar-block"><h3>' + T("Regeln") + "</h3>" + c.rules.map(ruleHtml).join("") + "</section>" +
      (c.table ? '<section class="ar-block"><h3>' + T("Übersicht") + "</h3>" + tableHtml(c.table) + "</section>" : "") +
      '<section class="ar-block">' + bookHtml(c) + "</section>" +
      '<nav class="ar-pager">' + (prev ? '<button type="button" class="btn" data-tj-ch="' + prev.id + '">← ' + esc(prev.title) + "</button>" : "<span></span>") +
      (next ? '<button type="button" class="btn" data-tj-ch="' + next.id + '">' + esc(next.title) + " →</button>" : "<span></span>") + "</nav></div>";
  }

  function renderRound() {
    var box = $("#tj-round");
    if (!lastRound) { box.hidden = true; box.innerHTML = ""; return; }
    var r = lastRound, mastered = r.after.pct === 100 && r.before.pct < 100;
    box.hidden = false;
    box.className = "panel learn-round" + (mastered ? " is-mastered" : "");
    box.innerHTML = (mastered ? '<p class="lr-badge">' + T("✓ Gemeistert") + "</p><h3>" + T("Mā schāʾ Allāh – „{t}“ sitzt zu 100 %!", { t: esc(r.label) }) + "</h3>"
      : "<h3>" + T("Runde geschafft: {n} von {m} richtig", { n: r.correct, m: r.answered }) + "</h3>") +
      "<p>" + esc(r.label) + ": <b>" + r.before.pct + " % → " + r.after.pct + " %</b></p>" +
      '<div class="lr-actions">' + (r.after.pct < 100 ? '<button type="button" class="btn btn-primary" data-tj-again>' + T("Nächste Runde") + "</button>" : "") +
      '<button type="button" class="linkish" data-tj-close>' + T("Schließen") + "</button></div>";
    var again = $("[data-tj-again]", box), close = $("[data-tj-close]", box);
    if (again) again.addEventListener("click", function () { start(r.id); });
    close.addEventListener("click", function () { lastRound = null; renderRound(); });
  }

  function render() {
    remember();
    var all = stats(QS);
    $("#tj-ring").innerHTML = ring(all.pct);
    var done = CH.filter(function (c) { return stats(SETS[c.id]).pct === 100; }).length;
    $("#tj-stats").innerHTML = "<span>" + T("<b>{n}</b> von {m} Kapiteln bei 100 %", { n: done, m: CH.length }) + "</span>" +
      "<span>" + T("<b>{n}</b> von {m} Übungen gelernt", { n: all.learned, m: all.total }) + "</span>";
    var nc = nextChapter(), go = $("#tj-next");
    go.hidden = !nc;
    if (nc) go.textContent = all.learned ? T("Weiter: {t}", { t: nc.title }) : T("Loslegen: {t}", { t: nc.title });
    var open = all.wrong + all.almost, mis = $("#tj-mistakes");
    mis.hidden = !open;
    mis.textContent = T("Fehler wiederholen ({n})", { n: open });
    renderRound();
    var body = $("#tj-body");
    body.innerHTML = state.chapter ? chapterPane(BY_ID[state.chapter]) : listPane();
    wire(body);
  }
  function scrollToBody() {
    var el = $("#tj-body");
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: "start" });
  }
  function wire(body) {
    $all("[data-tj-ch]", body).forEach(function (b) {
      b.addEventListener("click", function () { state.chapter = b.getAttribute("data-tj-ch"); render(); scrollToBody(); });
    });
    var back = $("[data-tj-back]", body);
    if (back) back.addEventListener("click", function () { state.chapter = null; render(); scrollToBody(); });
    $all("[data-tj-learn]", body).forEach(function (b) { b.addEventListener("click", function () { start(b.getAttribute("data-tj-learn")); }); });
  }

  $("#tj-next").addEventListener("click", function () { var c = nextChapter(); if (c) start(c.id); });
  $("#tj-mistakes").addEventListener("click", function () {
    var open = QS.filter(function (q) { var l = lv(q); return l === -1 || l === 1; });
    if (window.FIQH_MISTAKES && open.length) window.FIQH_MISTAKES.practice(open, T("Taǧwīd · Fehler"), "tajwid", ROUND);
  });
  $("#tj-reset").addEventListener("click", function () { $("#tj-reset-confirm").hidden = false; });
  $("#tj-reset-no").addEventListener("click", function () { $("#tj-reset-confirm").hidden = true; });
  $("#tj-reset-yes").addEventListener("click", function () {
    if (L.reset) L.reset(function (id) { return id.indexOf("tj-") === 0; });
    $("#tj-reset-confirm").hidden = true; lastRound = null; render();
  });
  $("#tj-count-ch").textContent = CH.length;
  $("#tj-count-q").textContent = QS.length;
  $("#tj-count-b").textContent = CH.reduce(function (n, c) { return n + c.book.length; }, 0);

  APP.on("view", function (name) { if (name === "tajwid") render(); });
  if (L.onChange) L.onChange(function () { if (!view.hidden) render(); });
  render();

  window.FIQH_TAJWID = { questions: QS, chapters: CH, stats: function () { return stats(QS); } };
})();
