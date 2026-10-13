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
    /* the passages also go into the lesson where the rule is taught, to deepen it there
       (same question objects, so the progress is shared with „Regel erkennen“) */
    if (RG.CHAPTER) RULE_QS.forEach(function (q) {
      var chs = RG.CHAPTER[q.a[0]] || [];
      if (chs.length) q.ruleCh = chs[0];
      chs.forEach(function (id) { if (SETS[id]) SETS[id].push(q); });
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

  /* Tuḥfat al-Aṭfāl (tajwid/tuhfa.js): je Teil die Inhaltsfragen, „Wie geht der Vers weiter?“ zu jedem Vers
     und Vokabeln aus dem Wortschatz der Verse */
  var TU = window.TAJWID_TUHFA, TUHFA_QS = [], VERSES = [];
  function range(p) { var a = p.verses[0].n, b = p.verses[p.verses.length - 1].n; return a === b ? String(a) : a + "–" + b; }
  if (TU) {
    TU.parts.forEach(function (p) { p.verses.forEach(function (v) { v.part = p; VERSES.push(v); }); });
    var HARD = { mithlain: 1, maddahkam: 1, lazim: 1 }, seenW = {}, WORDS = [];
    /* a meaning short enough for an answer option: without the remarks in brackets */
    function plain(m) { return String(m).replace(/\s*\([^)]*\)/g, "").trim(); }
    function bare(s) { return String(s).replace(/[ً-ْٰ]/g, ""); }
    VERSES.forEach(function (v) {
      v.w.forEach(function (w) {
        var m = plain(w[1]), k = bare(w[0]);
        if (seenW[k] || m.length < 3 || m.length > 40 || /eigentlich|„|Name/.test(m) || k.length < 2) return;
        seenW[k] = 1; WORDS.push({ w: w[0], m: m, v: v });
      });
    });
    TU.parts.forEach(function (p) {
      var set = [], tt = T("Taǧwīd · Tuḥfat al-Aṭfāl · {t}", { t: p.title }), base = { t: "tajwid", tt: tt, c: 0, chapter: "tuhfa-" + p.id };
      p.quiz.forEach(function (x) {
        set.push(Object.assign({}, base, { _lid: "tj-t-" + hash(p.id + "|" + x.q), lvl: HARD[p.id] ? 2 : 1,
          srcText: T("Quelle:") + " Tuḥfat al-Aṭfāl, " + T("Verse {r}", { r: range(p) }), q: x.q, ar: x.ar, a: x.a, e: x.e }));
      });
      p.verses.forEach(function (v) {
        var idx = VERSES.indexOf(v), others = near(idx, VERSES, 6).map(function (o) { return o.b; })
          .filter(function (b, i, all) { return b !== v.b && all.indexOf(b) === i; }).slice(0, 3);
        set.push(Object.assign({}, base, { _lid: "tj-t-" + hash("v|" + v.n), lvl: 2, srcText: T("Quelle:") + " Tuḥfat al-Aṭfāl, " + T("Vers {n}", { n: v.n }),
          q: T("Wie geht der Vers weiter? (Vers {n})", { n: v.n }), ar: v.a + " ۞ …", a: [v.b].concat(others),
          e: v.a + " ۞ " + v.b + " – " + v.de }));
      });
      WORDS.forEach(function (x, i) {
        if (x.v.part !== p) return;
        var wrong = near(i, WORDS, 12).map(function (o) { return o.m; })
          .filter(function (m, k, all) { return m !== x.m && all.indexOf(m) === k; }).slice(0, 3);
        if (wrong.length < 3) return;
        set.push(Object.assign({}, base, { _lid: "tj-t-" + hash("w|" + bare(x.w)), lvl: 1, srcText: T("Quelle:") + " Tuḥfat al-Aṭfāl, " + T("Vers {n}", { n: x.v.n }),
          q: T("Was bedeutet dieses Wort aus der Tuḥfa? (Vers {n})", { n: x.v.n }), ar: x.w, a: [x.m].concat(wrong),
          e: x.w + " = " + x.m + ". " + T("Vers {n}:", { n: x.v.n }) + " " + x.v.a + " ۞ " + x.v.b }));
      });
      SETS["tuhfa-" + p.id] = set;
      TUHFA_QS = TUHFA_QS.concat(set);
    });
    SETS.tuhfa = TUHFA_QS;
    QS = QS.concat(TUHFA_QS);
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
    [3, "Experte / Ustāḏ", "Fallen und Feinheiten: wegfallende Dehnungsbuchstaben, zwei Madd-Ursachen, Buchstabennamen, Sakt, unvollständiger Idġām, Ausnahmen."]];
  function levelName(n) { return T(LEVELS[n - 1][1]); }
  function labelOf(id) { var lv = /^regeln([123])$/.exec(id || ""); if (lv) return T("Taǧwīd · Regel erkennen") + " · " + levelName(+lv[1]);
    var tp = /^tuhfa-(\w+)$/.exec(id || ""), part = tp && TU && TU.parts.filter(function (p) { return p.id === tp[1]; })[0];
    if (part) return T("Taǧwīd · Tuḥfat al-Aṭfāl · {t}", { t: part.title });
    if (id === "tuhfa") return T("Taǧwīd · Tuḥfat al-Aṭfāl");
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
  var state = { chapter: null, part: null, mode: "lernen" };
  try { var saved = JSON.parse(localStorage.getItem("fiqh:tajwid") || "null"); if (saved && (BY_ID[saved.chapter] || (saved.chapter === "tuhfa" && TU))) state.chapter = saved.chapter; } catch (e) {}
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
  /* text of the Tuḥfa: German with Arabic runs, **…** in bold */
  function md(s) { return mixed(s).replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>"); }
  function tuhfaCard() {
    if (!TU) return "";
    var s = stats(TUHFA_QS);
    return '<div class="panel tj-quizcard tj-tuhfa-card"><div><p class="eyebrow">' + T("Lehrgedicht · vollständig") + "</p><h3>" + esc(TU.title) + " " + ar(TU.ar, "tj-rule-ar") + "</h3><p>" +
      T("Alle {n} Verse von al-Ǧamzūrī mit Wortschatz, Übersetzung und Erklärung, dazu Autor, Sanad und Schluss. Geübt wird der Inhalt, „Wie geht der Vers weiter?“ und die Vokabeln der Verse.", { n: VERSES.length }) + "</p>" + bar(s) +
      '<small class="lt-meta">' + T("{n} Teile · {m} Übungen", { n: TU.parts.length, m: TUHFA_QS.length }) + (s.learned ? " · " + T("{n} % gelernt", { n: s.pct }) : "") + "</small></div>" +
      '<div class="tj-tuhfa-btns"><button type="button" class="btn btn-primary" data-tj-ch="tuhfa">' + T("Tuḥfa öffnen") + "</button>" +
      '<button type="button" class="btn" data-tj-learn="tuhfa">' + (s.pct === 100 ? T("✓ Wiederholen") : s.learned ? T("Weiter üben · {n} %", { n: s.pct }) : T("Ganze Tuḥfa üben")) + "</button></div></div>";
  }
  function verseHtml(v) {
    return '<article class="tj-verse" id="tuhfa-v' + v.n + '"><div class="tj-bait"><span class="tj-vn">' + v.n + '</span><div class="tj-hemis" lang="ar" dir="rtl"><span>' + esc(v.a) +
      "</span><span>" + esc(v.b) + "</span></div></div>" +
      '<p class="tj-vde">' + md(v.de) + "</p>" +
      '<details class="tj-vmore"><summary>' + T("Wortschatz und Erklärung") + "</summary>" +
      (v.w.length ? '<div class="ar-table-wrap"><table class="ar-table tj-table tj-words"><tbody>' + v.w.map(function (w) {
        return "<tr><td>" + ar(w[0], "tj-rule-ar") + "</td><td>" + mixed(w[1]) + "</td></tr>";
      }).join("") + "</tbody></table></div>" : "") +
      '<ul class="tj-expl">' + v.x.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></details></article>";
  }
  function partHtml(p) {
    var list = SETS["tuhfa-" + p.id], s = stats(list), c = BY_ID[p.ch];
    return '<details class="tj-part" id="tuhfa-' + p.id + '"' + (state.part === p.id ? " open" : "") + "><summary>" +
      '<span class="tj-part-n">' + T("Verse {r}", { r: range(p) }) + '</span><span class="tj-part-t"><strong>' + esc(p.title) + "</strong>" + ar(p.ar, "lt-ar") + "</span>" + bar(s) + "</summary>" +
      '<div class="tj-part-body"><p class="tj-intro">' + md(p.intro) + "</p>" +
      '<div class="tj-part-actions"><button type="button" class="btn btn-primary" data-tj-learn="tuhfa-' + p.id + '">' +
      (s.pct === 100 ? T("✓ Wiederholen") : T("Diesen Teil üben · {n} %", { n: s.pct })) + "</button>" +
      (c ? '<button type="button" class="linkish" data-tj-ch="' + c.id + '">' + T("Dazu Kapitel {n}: {t}", { n: c.n, t: c.title }) + " →</button>" : "") + "</div>" +
      (p.pre || []).map(function (x) { return '<p class="tj-note">' + md(x) + "</p>"; }).join("") +
      p.verses.map(verseHtml).join("") + "</div></details>";
  }
  function tuhfaPane() {
    var s = stats(TUHFA_QS);
    return '<div class="ar-lesson-view tj-tuhfa">' +
      '<button type="button" class="linkish ar-back" data-tj-back>← ' + T("Alle Kapitel") + "</button>" +
      '<header class="ar-lesson-head"><p class="eyebrow">' + T("Lehrgedicht · {n} Verse", { n: VERSES.length }) + "</p><h2>" + esc(TU.title) + "</h2>" + ar(TU.ar, "ar-title") + "</header>" +
      '<p class="tj-intro">' + T("Die Tuḥfat al-Aṭfāl von Sulaimān al-Ǧamzūrī – vollständig, Vers für Vers. Sie ergänzt die Kapitel: Bei jedem Teil führt ein Verweis zum Kapitel mit denselben Regeln. Tippe auf „Wortschatz und Erklärung“ unter einem Vers.") + "</p>" +
      '<button type="button" class="btn btn-primary" data-tj-learn="tuhfa">' + (s.pct === 100 ? T("✓ Wiederholen") : T("Ganze Tuḥfa üben · {n} %", { n: s.pct })) + "</button>" +
      '<section class="ar-block"><h3>' + T("Über das Werk") + "</h3>" + TU.info.map(function (i) {
        return '<details class="tj-info"><summary>' + esc(i.h) + "</summary><ul>" + i.li.map(function (l) { return "<li>" + md(l) + "</li>"; }).join("") + "</ul></details>";
      }).join("") + "</section>" +
      '<section class="ar-block"><h3>' + T("Die Verse") + "</h3>" + TU.parts.map(partHtml).join("") + "</section>" +
      '<p class="tj-note">' + T("Quelle:") + " " + esc(TU.src) + "</p></div>";
  }
  /* in a chapter: the verses of the Tuḥfa about the same rules */
  function tuhfaLink(c) {
    var ps = TU ? TU.parts.filter(function (p) { return p.ch === c.id; }) : [];
    if (!ps.length) return "";
    return '<section class="ar-block"><h3>' + T("In der Tuḥfat al-Aṭfāl") + "</h3>" + ps.map(function (p) {
      var v = p.verses[0];
      return '<button type="button" class="tj-level tj-tlink" data-tj-tuhfa="' + p.id + '"><div><strong>' + esc(p.title) + '</strong><small class="lt-meta">' +
        T("Verse {r}", { r: range(p) }) + " · " + esc(p.intro) + '</small><span class="tj-tlink-ar" lang="ar" dir="rtl">' + esc(v.a) + " ۞ " + esc(v.b) + (p.verses.length > 1 ? " …" : "") + "</span></div>" +
        '<span class="tj-tlink-go" aria-hidden="true">→</span></button>';
    }).join("") + "</section>";
  }
  function listPane() {
    return rulesCard() + termsCard() + tuhfaCard() + '<ol class="ar-lessons">' + CH.map(function (c) {
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
      tuhfaLink(c) +
      '<nav class="ar-pager">' + (prev ? '<button type="button" class="btn" data-tj-ch="' + prev.id + '">← ' + esc(prev.title) + "</button>" : "<span></span>") +
      (next ? '<button type="button" class="btn" data-tj-ch="' + next.id + '">' + esc(next.title) + " →</button>" : "<span></span>") + "</nav></div>";
  }

  /* ---------- Nachschlagen: rules of all chapters, tables, booklet questions, terms and the Tuḥfa, searchable ---------- */
  function norm(s) {
    return String(s).replace(/\*\*/g, "")
      .replace(/[ً-ْٰـ]/g, "").replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
      .replace(/[šŠ]/g, "sch").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[ʿʾ'’`ʼ‘]/g, "")
      .replace(/ß/g, "ss").toLowerCase();
  }
  var LK_MAX = 60, lkEntries = null;
  var LK_KINDS = [["all", "Alles"], ["regel", "Regeln"], ["heft", "Fragen aus dem Heft"], ["begriff", "Begriffe"], ["tuhfa", "Tuḥfat al-Aṭfāl"]];
  var LK_TOPICS = ["Iẓhār", "Idġām", "Iqlāb", "Iḫfāʾ", "Ġunna", "Madd", "Qalqala", "Rāʾ", "Lām", "Tafḫīm", "Maḫraǧ", "Waqf", "Sakt", "Hamzat al-waṣl"];
  var lk = { q: "" };
  try { var lk0 = JSON.parse(localStorage.getItem("fiqh:tjlookup") || "null"); if (lk0) lk.q = lk0.q || ""; } catch (e) {}
  lk.kind = "all";
  function lkBuild() {
    var out = [];
    CH.forEach(function (c) {
      c.rules.forEach(function (r, i) {
        out.push({ kind: "regel", c: c, r: r, hay: norm([r.h, r.ar, r.text, c.title, c.ar].concat((r.ex || []).map(function (e) { return e.join(" "); })).join(" ")) });
      });
      if (c.table) out.push({ kind: "regel", c: c, table: c.table, hay: norm([T("Übersicht"), c.title].concat(c.table.head, c.table.rows.map(function (r) { return r.join(" "); })).join(" ")) });
      c.book.forEach(function (b) { out.push({ kind: "heft", c: c, b: b, hay: norm(b.join(" ") + " " + c.title) }); });
    });
    if (BG) BG.LIST.forEach(function (t) { out.push({ kind: "begriff", t: t, hay: norm(t.join(" ") + " " + (BG.GROUPS[t[2]] || "")) }); });
    VERSES.forEach(function (v) { out.push({ kind: "tuhfa", v: v, hay: norm([v.a, v.b, v.de, v.part.title].concat(v.x, v.w.map(function (w) { return w.join(" "); })).join(" ")) }); });
    return out;
  }
  function lkAll() { return lkEntries || (lkEntries = lkBuild()); }
  function lkWords() { return norm(lk.q).split(/\s+/).filter(Boolean); }
  function lkMatch(e, words) { return words.every(function (w) { return e.hay.indexOf(w) !== -1; }); }
  function chLink(c) { return '<button type="button" class="linkish lk-where" data-tj-ch="' + c.id + '">' + T("Kapitel") + " " + c.n + " – " + esc(c.title) + " →</button>"; }
  function lkCard(e) {
    if (e.kind === "regel" && e.table) return '<li class="lk-card"><p class="lk-tag">' + T("Übersicht") + "</p>" + tableHtml(e.table) + chLink(e.c) + "</li>";
    if (e.kind === "regel") return '<li class="lk-card"><p class="lk-tag">' + T("Regel") + "</p>" + ruleHtml(e.r) + chLink(e.c) + "</li>";
    if (e.kind === "heft") return '<li class="lk-card"><p class="lk-tag">' + T("Frage aus dem Heft") + " " + e.b[0] + '</p><p class="tj-bq">' + ar(e.b[1]) + '</p><p class="tj-ba">' + mixed(e.b[2]) + "</p>" + chLink(e.c) + "</li>";
    if (e.kind === "begriff") return '<li class="lk-card lk-term"><p class="lk-tag">' + T("Begriff") + " · " + esc(BG.GROUPS[e.t[2]] || "") + "</p><p><b>" + esc(e.t[0]) + "</b> " + ar(e.t[1], "tj-rule-ar") + " – " + mixed(e.t[3]) +
      (e.t[4] ? ' <small class="tj-lit">' + T("wörtlich: {w}", { w: esc(e.t[4]) }) + "</small>" : "") + "</p></li>";
    var v = e.v;
    return '<li class="lk-card"><p class="lk-tag">Tuḥfat al-Aṭfāl · ' + T("Vers {n}", { n: v.n }) + " · " + esc(v.part.title) + '</p><div class="tj-hemis" lang="ar" dir="rtl"><span>' + esc(v.a) + "</span><span>" + esc(v.b) + "</span></div>" +
      '<p class="tj-vde">' + md(v.de) + '</p><details class="tj-vmore"><summary>' + T("Wortschatz und Erklärung") + '</summary><ul class="tj-expl">' + v.x.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("") + "</ul></details>" +
      '<button type="button" class="linkish lk-where" data-tj-tuhfa="' + v.part.id + '">' + T("In der Tuḥfa öffnen") + " →</button></li>";
  }
  function lkResults() {
    var words = lkWords();
    if (!words.length && lk.kind === "all") {
      return '<h3 class="lk-h">' + T("Alle Regeln nach Kapitel") + "</h3>" + CH.map(function (c) {
        var list = lkAll().filter(function (e) { return e.kind === "regel" && e.c === c; });
        return '<details class="lk-lesson"><summary><span>' + T("Kapitel") + " " + c.n + " – " + esc(c.title) + " " + ar(c.ar, "lk-ar") + "</span><small>" + list.length + "</small></summary>" +
          '<ul class="lk-list">' + list.map(lkCard).join("") + "</ul></details>";
      }).join("");
    }
    var list = lkAll().filter(function (e) { return (lk.kind === "all" || e.kind === lk.kind) && lkMatch(e, words); });
    if (!list.length) return '<p class="lk-none">' + T("Nichts gefunden. Versuche ein anderes Wort – deutsch, arabisch oder in Umschrift.") + "</p>";
    return '<p class="lk-count">' + T(list.length === 1 ? "1 Treffer" : "{n} Treffer", { n: list.length }) + (list.length > LK_MAX ? " · " + T("die ersten {n} – verfeinere die Suche", { n: LK_MAX }) : "") + "</p>" +
      '<ul class="lk-list">' + list.slice(0, LK_MAX).map(lkCard).join("") + "</ul>";
  }
  function lkKinds() {
    var words = lkWords(), c = { all: 0, regel: 0, heft: 0, begriff: 0, tuhfa: 0 };
    lkAll().forEach(function (e) { if (lkMatch(e, words)) { c.all++; c[e.kind]++; } });
    return LK_KINDS.map(function (k) {
      return '<button type="button" class="chip" data-lk-kind="' + k[0] + '" aria-pressed="' + (lk.kind === k[0]) + '">' + esc(T(k[1])) + '<span class="chip-count">' + c[k[0]] + "</span></button>";
    }).join("");
  }
  function lookupPane() {
    return '<div class="lk-pane">' +
      '<div class="panel lk-search"><label class="lk-label" for="tj-lk-q">' + T("Taǧwīd nachschlagen") + "</label>" +
      '<input type="search" id="tj-lk-q" class="lk-input" autocomplete="off" placeholder="' + esc(T("z. B. Iḫfāʾ, Madd lāzim, Qalqala, إخفاء …")) + '" value="' + esc(lk.q) + '">' +
      '<div class="chips lk-kinds">' + lkKinds() + "</div>" +
      '<div class="lk-topics"><span>' + T("Themen:") + "</span>" + LK_TOPICS.map(function (t) { return '<button type="button" class="linkish" data-lk-topic="' + esc(t) + '">' + esc(t) + "</button>"; }).join("") + "</div></div>" +
      '<div id="tj-lk-results">' + lkResults() + "</div></div>";
  }
  function lkRefresh(body) {
    var r = $("#tj-lk-results", body), k = $(".lk-kinds", body);
    if (r) { r.innerHTML = lkResults(); wire(r); }
    if (k) { k.innerHTML = lkKinds(); lkWireKinds(body); }
    try { localStorage.setItem("fiqh:tjlookup", JSON.stringify({ q: lk.q })); } catch (e) {}
  }
  function lkWireKinds(body) {
    $all("[data-lk-kind]", body).forEach(function (b) { b.addEventListener("click", function () { lk.kind = b.getAttribute("data-lk-kind"); lkRefresh(body); }); });
  }
  function lkWire(body) {
    var input = $("#tj-lk-q", body), timer = null;
    if (!input) return;
    input.addEventListener("input", function () { clearTimeout(timer); timer = setTimeout(function () { lk.q = input.value; lkRefresh(body); }, 120); });
    $all("[data-lk-topic]", body).forEach(function (b) { b.addEventListener("click", function () { input.value = lk.q = b.getAttribute("data-lk-topic"); lkRefresh(body); }); });
    lkWireKinds(body);
  }
  function setMode(m) { state.mode = m === "nachschlagen" ? "nachschlagen" : "lernen"; render(); }

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
    var look = state.mode === "nachschlagen";
    $all("[data-tj-mode]").forEach(function (b) { if (b.getAttribute("data-tj-mode") === state.mode) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current"); });
    $(".tajwid .learn-head").hidden = look;
    if (look) { $("#tj-round").hidden = true; } else renderRound();
    var body = $("#tj-body");
    body.innerHTML = look ? lookupPane() : state.chapter === "tuhfa" && TU ? tuhfaPane() : state.chapter && BY_ID[state.chapter] ? chapterPane(BY_ID[state.chapter]) : listPane();
    wire(body);
    if (look) lkWire(body);
  }
  function scrollToBody() {
    var el = $("#tj-body");
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: "start" });
  }
  function wire(body) {
    $all("[data-tj-ch]", body).forEach(function (b) {
      b.addEventListener("click", function () { state.chapter = b.getAttribute("data-tj-ch"); state.part = null; state.mode = "lernen"; render(); scrollToBody(); });
    });
    $all("[data-tj-tuhfa]", body).forEach(function (b) {
      b.addEventListener("click", function () {
        state.chapter = "tuhfa"; state.part = b.getAttribute("data-tj-tuhfa"); state.mode = "lernen"; render();
        var el = document.getElementById("tuhfa-" + state.part);
        if (el) el.scrollIntoView({ block: "start" });
      });
    });
    /* remember the open part, so a re-render after a round keeps it open */
    $all(".tj-part", body).forEach(function (d) {
      d.addEventListener("toggle", function () { if (d.open) state.part = d.id.replace("tuhfa-", ""); else if (state.part === d.id.replace("tuhfa-", "")) state.part = null; });
    });
    var back = $("[data-tj-back]", body);
    if (back) back.addEventListener("click", function () { state.chapter = null; state.part = null; render(); scrollToBody(); });
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
  var cv = $("#tj-count-v");
  if (cv) { cv.textContent = VERSES.length; cv.parentNode.hidden = !VERSES.length; }
  $("#tj-count-b").textContent = CH.reduce(function (n, c) { return n + c.book.length; }, 0);

  APP.on("view", function (name) { if (name === "tajwid") render(); });
  $all("[data-tj-mode]").forEach(function (b) { b.addEventListener("click", function () { setMode(b.getAttribute("data-tj-mode")); window.scrollTo(0, 0); }); });
  if (L.onChange) L.onChange(function () { if (!view.hidden) render(); });
  render();

  window.FIQH_TAJWID = { questions: QS, chapters: CH, tuhfa: TU ? TU.parts.map(function (p) { return { id: "tuhfa-" + p.id, title: p.title, ar: p.ar, range: range(p) }; }) : [], stats: function () { return stats(QS); }, setMode: setMode };
  /* the Quiz tab offers Taǧwīd too – its setup was drawn before this file loaded */
  if (APP.renderSetup && APP.isPlaying && !APP.isPlaying()) APP.renderSetup();
})();
