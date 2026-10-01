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
      .replace(/Tafel/g, D.src.chart).replace(/Allg\./g, D.src.general || "");
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
  /* Maḫraǧ-Aufgaben aus der Liste der 17 Austrittsstellen (tajwid/ergaenzung.js) */
  var MK = D.makharij || [];
  function near(idx, pool, n) {
    return pool.map(function (x, i) { return [Math.abs(i - idx) + (hash(String(i) + idx).charCodeAt(0) % 3) / 10, x]; })
      .filter(function (p, i) { return i !== idx; }).sort(function (a, b) { return a[0] - b[0]; }).slice(0, n).map(function (p) { return p[1]; });
  }
  function mkQ(q, a, e, ar) {
    return { t: "tajwid", tt: T("Taǧwīd · {t}", { t: BY_ID.makharij ? BY_ID.makharij.title : "Maḫāriǧ" }), srcText: srcText("B 64–76"), c: 0, chapter: "makharij",
      _lid: "tj-m-" + hash(q + "|" + (ar || "")), q: q, ar: ar, a: a, e: e };
  }
  if (MK.length && SETS.makharij) {
    var labels = MK.map(function (m) { return m[0]; }), extra = [];
    MK.forEach(function (m, idx) {
      if (!m[1]) return;
      m[1].split(" ").forEach(function (ch) {
        var cons = (ch === "و" || ch === "ي") && idx === 0;
        if (cons) return;                                   /* و und ي kommen unten als Konsonanten */
        var pool = labels.filter(function (l, i) { return !((ch === "و" || ch === "ي") && i === 0); });
        extra.push(mkQ(T("Aus welcher Austrittsstelle kommt dieser Buchstabe?") + (ch === "و" || ch === "ي" ? " " + T("(mit Vokal)") : ch === "ا" ? " " + T("(als Dehnungsbuchstabe)") : ""),
          [m[0]].concat(near(pool.indexOf(m[0]), pool, 3)), T("{c}: {m}.", { c: ch, m: m[0] }) + (m[2] ? " – " + m[2] : ""), ch));
      });
      var sets = MK.map(function (x) { return x[1]; }), others = near(idx, sets.map(function (x, i) { return x || "—" + i; }), 5)
        .filter(function (x) { return x && x.charAt(0) !== "—"; }).slice(0, 3);
      if (others.length === 3)
        extra.push(mkQ(T("Welche Buchstaben kommen aus dieser Stelle: {m}?", { m: m[0] }), [m[1]].concat(others), T("{m}: {c}", { m: m[0], c: m[1] })));
    });
    var nasal = MK[MK.length - 1];
    if (nasal && !nasal[1]) extra.push(mkQ(T("Was kommt aus dem Nasenraum (Ḫayšūm)?"), [T("Die Ġunna"), T("Der Buchstabe Nūn"), T("Die Qalqala"), T("Der Madd")],
      T("Aus dem Nasenraum kommt die Ġunna. Das Nūn selbst kommt von der Zungenspitze.")));
    SETS.makharij = SETS.makharij.concat(extra);
    QS = QS.concat(extra);
  }

  /* „Regel erkennen“: Qurʾān-Stellen mit markierter Stelle (tajwid/regeln.js) */
  var RG = window.TAJWID_REGELN, RULE_QS = [];
  if (RG) {
    RG.ITEMS.forEach(function (x) {
      var words = x.s.split(/\s+/), mw = x.m.split(/\s+/), start = -1;
      for (var i = 0; i + mw.length <= words.length && start < 0; i++)
        if (mw.every(function (w, k) { return words[i + k].replace(/[.،؛؟!]/g, "") === w; })) start = i;
      if (start < 0) { if (window.console) console.warn("tajwid: Markierung nicht gefunden", x.m); return; }
      /* falsche Antworten aus der ersten Gruppe, die die Regel enthält; reicht das nicht, aus allen ihren Gruppen */
      var mark = mw.map(function (w, k) { return start + k; }), pool = {};
      function fill(all) {
        RG.GROUPS.some(function (g) { if (g.indexOf(x.r) === -1) return false; g.forEach(function (r) { pool[r] = 1; }); return !all; });
        delete pool[x.r];
        if (/^Lām in „Allah“/.test(x.r)) { delete pool["Lām šamsiyya"]; delete pool["Lām qamariyya"]; }
      }
      fill(false);
      if (Object.keys(pool).length < 3) fill(true);
      var lvl = x.d || (RG.HARD && RG.HARD.indexOf(x.m) !== -1 ? 3 : RG.BASIC && RG.BASIC.indexOf(x.r) !== -1 ? 1 : 2);
      /* Anfänger: nur Grundregeln als falsche Antworten, wenn genug da sind */
      if (lvl === 1 && RG.BASIC) {
        var basic = Object.keys(pool).filter(function (r) { return RG.BASIC.indexOf(r) !== -1; });
        if (basic.length >= 3) { pool = {}; basic.forEach(function (r) { pool[r] = 1; }); }
      }
      var wrong = Object.keys(pool).sort(function (a, b) { return hash(x.s + a) < hash(x.s + b) ? -1 : 1; }).slice(0, 3);
      if (wrong.length < 3) return;
      RULE_QS.push({ t: "tajwid", tt: T("Taǧwīd · Regel erkennen"), srcText: T("Quelle:") + " Qurʾān " + x.v, c: 0, chapter: "regeln",
        _lid: "tj-r-" + hash(x.s + "|" + x.m + "|" + x.r),
        q: T("Welche Taǧwīd-Regel gilt an der markierten Stelle?") + (x.f ? " (" + x.f + ")" : ""),
        ar: x.s, arMark: mark.length === 1 ? mark[0] : mark, a: [x.r].concat(wrong), e: x.e, level: lvl });
    });
    SETS.regeln = RULE_QS;
    [1, 2, 3].forEach(function (n) { SETS["regeln" + n] = RULE_QS.filter(function (q) { return q.level === n; }); });
    QS = QS.concat(RULE_QS);
  }

  /* Begriffe abfragen (tajwid/begriffe.js): „Was bedeutet …?“ und „Wie heißt …?“ */
  var BG = window.TAJWID_BEGRIFFE, TERM_QS = [];
  if (BG) {
    var byGroup = {};
    BG.LIST.forEach(function (t) { (byGroup[t[2]] = byGroup[t[2]] || []).push(t); });
    BG.LIST.forEach(function (t) {
      var peers = byGroup[t[2]].filter(function (o) { return o !== t; });
      if (peers.length < 3) peers = peers.concat(BG.LIST.filter(function (o) { return o[2] !== t[2]; }));
      function pick(salt) { return peers.slice().sort(function (a, b) { return hash(t[0] + salt + a[0]) < hash(t[0] + salt + b[0]) ? -1 : 1; }).slice(0, 3); }
      var expl = t[0] + " (" + t[1] + "): " + t[3] + "." + (t[4] ? " " + T("Wörtlich: „{w}“.", { w: t[4] }) : "");
      var base = { t: "tajwid", tt: T("Taǧwīd · Begriffe"), srcText: T("Taǧwīd-Begriffe") + " · " + (BG.GROUPS[t[2]] || ""), c: 0, chapter: "begriffe", e: expl };
      TERM_QS.push(Object.assign({}, base, { _lid: "tj-b-" + hash("m|" + t[0]), q: T("Was bedeutet der Taǧwīd-Begriff „{t}“?", { t: t[0] }), ar: t[1],
        a: [t[3]].concat(pick("m").map(function (o) { return o[3]; })) }));
      TERM_QS.push(Object.assign({}, base, { _lid: "tj-b-" + hash("n|" + t[0]), q: T("Wie heißt dieser Begriff? – {m}", { m: t[3] }),
        a: [t[0] + " · " + t[1]].concat(pick("n").map(function (o) { return o[0] + " · " + o[1]; })) }));
    });
    SETS.begriffe = TERM_QS;
    QS = QS.concat(TERM_QS);
  }

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
  var LEVELS = [[1, "Anfänger / Mubtadiʾ", "Die Grundregeln an klaren Stellen: Nūn und Mīm sākina, Ġunna, Madd ṭabīʿī, muttaṣil und munfaṣil, Qalqala, Lām."],
    [2, "Fortgeschritten / Ṭālibu l-ʿIlm", "Weitere Regeln: Madd lāzim, ʿāriḍ, līn, badal, ṣila, Rāʾ, die Idġām-Arten, Iẓhār muṭlaq."],
    [3, "Lehrer / Ustāḏ", "Fallen und Feinheiten: wegfallende Dehnungsbuchstaben, zwei Madd-Ursachen, Buchstabennamen, Sakt, unvollständiger Idġām, Ausnahmen."]];
  function levelName(n) { return T(LEVELS[n - 1][1]); }
  function labelOf(id) { var lv = /^regeln([123])$/.exec(id || ""); if (lv) return T("Taǧwīd · Regel erkennen") + " · " + levelName(+lv[1]);
    return id === "regeln" ? T("Taǧwīd · Regel erkennen") : id === "begriffe" ? T("Taǧwīd · Begriffe") : id && BY_ID[id] ? T("Taǧwīd · {t}", { t: BY_ID[id].title }) : T("Taǧwīd"); }
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

  function rulesCard() {
    if (!RULE_QS.length) return "";
    var s = stats(RULE_QS);
    return '<div class="panel tj-quizcard"><div><p class="eyebrow">' + T("Allgemeines Taǧwīd-Quiz") + "</p><h3>" + T("Regel erkennen") + "</h3><p>" +
      T("Eine Stelle aus dem Qurʾān, ein Teil ist markiert – welche Regel gilt dort? Drei Stufen; auch im Quiz-Tab mit Punkten und Zeit.") + "</p></div>" +
      '<div class="tj-levels">' + LEVELS.map(function (l) {
        var list = SETS["regeln" + l[0]], ls = stats(list);
        return '<div class="tj-level" title="' + esc(T(l[2])) + '"><div><strong>' + T(l[1]) + '</strong><small class="lt-meta">' + T("{n} Stellen", { n: list.length }) +
          (ls.learned ? " · " + T("{n} % gelernt", { n: ls.pct }) : "") + "</small>" + bar(ls) + "</div>" +
          '<button type="button" class="btn' + (l[0] === 1 ? " btn-primary" : "") + '" data-tj-learn="regeln' + l[0] + '">' +
          (ls.pct === 100 ? T("✓ Wiederholen") : ls.learned ? T("Weiter · {n} %", { n: ls.pct }) : T("Starten")) + "</button></div>";
      }).join("") + "</div></div>";
  }
  function termsCard() {
    if (!TERM_QS.length) return "";
    var s = stats(TERM_QS), groups = {};
    BG.LIST.forEach(function (t) { (groups[t[2]] = groups[t[2]] || []).push(t); });
    return '<div class="panel tj-quizcard"><div><p class="eyebrow">' + T("Fachwörter") + "</p><h3>" + T("Taǧwīd-Begriffe") + "</h3><p>" +
      T("{n} Begriffe – abgefragt in beide Richtungen: Was bedeutet der Begriff, und wie heißt er?", { n: BG.LIST.length }) + "</p>" + bar(s) +
      '<small class="lt-meta">' + (s.learned ? T("{n} von {m} gelernt", { n: s.learned, m: s.total }) : T("noch nicht begonnen")) + "</small></div>" +
      '<button type="button" class="btn btn-primary" data-tj-learn="begriffe">' + (s.pct === 100 ? T("✓ Wiederholen") : s.learned ? T("Weiter üben · {n} %", { n: s.pct }) : T("Begriffe üben")) + "</button>" +
      '<details class="tj-terms"><summary>' + T("Alle Begriffe anzeigen") + "</summary>" + Object.keys(BG.GROUPS).filter(function (g) { return groups[g]; }).map(function (g) {
        return "<h4>" + esc(BG.GROUPS[g]) + '</h4><div class="ar-table-wrap"><table class="ar-table tj-table"><tbody>' + groups[g].map(function (t) {
          return "<tr><td><b>" + esc(t[0]) + "</b><br>" + ar(t[1], "tj-rule-ar") + "</td><td>" + mixed(t[3]) + (t[4] ? '<br><small class="tj-lit">' + T("wörtlich: {w}", { w: esc(t[4]) }) + "</small>" : "") + "</td></tr>";
        }).join("") + "</tbody></table></div>";
      }).join("") + "</details></div>";
  }
  function listPane() {
    return rulesCard() + termsCard() + '<ol class="ar-lessons">' + CH.map(function (c) {
      var s = stats(SETS[c.id]), st = s.pct === 100 ? "done" : s.learned + s.almost + s.wrong ? "busy" : "new";
      return '<li class="lt lt-' + st + '"><button type="button" class="ar-lesson" data-tj-ch="' + c.id + '">' +
        '<span class="ar-num">' + c.n + "</span>" +
        '<span class="lt-main"><span class="lt-title"><strong>' + esc(c.title) + "</strong>" + ar(c.ar, "lt-ar") + "</span>" + bar(s) +
        '<small class="lt-meta">' + (c.book.length ? T("{n} Regeln · {m} Übungen · {k} Fragen aus dem Heft", { n: c.rules.length, m: SETS[c.id].length, k: c.book.length })
          : T("{n} Regeln · {m} Übungen · ergänzt", { n: c.rules.length, m: SETS[c.id].length })) +
        (s.learned ? " · " + T("{n} % gelernt", { n: s.pct }) : "") + "</small></span>" +
        '<span class="lt-pct">' + (st === "done" ? "✓" : s.pct + " %") + "</span></button></li>";
    }).join("") + "</ol>";
  }

  function ruleHtml(r) {
    return '<section class="tj-rule"><h4>' + esc(r.h) + (r.ar ? " " + ar(r.ar, "tj-rule-ar") : "") + (r.g ? '<span class="tj-badge">' + T("ergänzt") + "</span>" : "") + "</h4>" +
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
      (c.general ? '<p class="tj-note">' + T("Dieses Kapitel steht nicht im Heft und nicht auf der Tafel. Es ist ergänzt nach dem allgemein überlieferten Taǧwīd (u. a. Tuḥfat al-Aṭfāl und al-Muqaddima al-Ǧazariyya), Lesart Ḥafṣ ʿan ʿĀṣim.") + "</p>" : "") +
      '<button type="button" class="btn btn-primary" data-tj-learn="' + c.id + '">' + (s.pct === 100 ? T("✓ Kapitel wiederholen") : T("Kapitel üben · {n} %", { n: s.pct })) + "</button>" +
      '<section class="ar-block"><h3>' + T("Regeln") + "</h3>" + c.rules.map(ruleHtml).join("") + "</section>" +
      (c.table ? '<section class="ar-block"><h3>' + T("Übersicht") + "</h3>" + tableHtml(c.table) + "</section>" : "") +
      (c.book.length ? '<section class="ar-block">' + bookHtml(c) + "</section>" : "") +
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
  /* the Quiz tab offers Taǧwīd too – its setup was drawn before this file loaded */
  if (APP.renderSetup && APP.isPlaying && !APP.isPlaying()) APP.renderSetup();
})();
