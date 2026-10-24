/* Sarf (صَرْف): conjugation of sound three-letter verbs, laid out like the Emsile
   (الْأَمْثِلَةُ الْمُخْتَلِفَةُ, model verb نَصَرَ) and the six Abwāb of the Thulāthī Mujarrad.
   Only sound roots (no و/ي/ء, no doubled letter), so every form follows the pattern.
   Passive: transitive verbs are conjugated through all 14 persons (نُصِرَ، نُصِرَا …); intransitive verbs
   only impersonally with their preposition (ذُهِبَ بِهِ، ذُهِبَ بِهِمَا … ذُهِبَ بِنَا); Bāb 5 has no passive.

   - FIQH_SARF.conj(verb, form) -> the forms of one table row set (14 persons, or 6)
   - Learning (tab "Sarf" in Arabisch): a table is practised by putting the forms in the
     right order; it counts as learned (ids "ar-s-<root>-<form>", shared progress of learn.js)
     when it is filled without a mistake – right away, or twice after a mistake.
   - FIQH_SARF.play({ tables, label, ... }) runs a series of tables; the Arabisch-Liga uses it. */
(function () {
  "use strict";
  var APP = window.FIQH_APP, L = window.FIQH_LEARN;
  var view = document.getElementById("view-sarf");
  if (!APP || !L || !view) return;
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  var esc = APP.esc, T = window.T || function (s, v) { return v ? String(s).replace(/\{(\w+)\}/g, function (m, k) { return v[k] !== undefined ? v[k] : m; }) : s; };

  /* ---------- letters ---------- */
  var FA = "َ", DA = "ُ", KA = "ِ", SU = "ْ", SH = "ّ", TUN = "ٌ";
  var V = { a: FA, i: KA, u: DA };

  /* ---------- the six Abwāb and the verbs ---------- */
  var ABWAB = [
    { n: 1, p: "a", m: "u", model: "نَصَرَ يَنْصُرُ", w: "فَعَلَ يَفْعُلُ" },
    { n: 2, p: "a", m: "i", model: "ضَرَبَ يَضْرِبُ", w: "فَعَلَ يَفْعِلُ" },
    { n: 3, p: "a", m: "a", model: "فَتَحَ يَفْتَحُ", w: "فَعَلَ يَفْعَلُ" },
    { n: 4, p: "i", m: "a", model: "عَلِمَ يَعْلَمُ", w: "فَعِلَ يَفْعَلُ" },
    { n: 5, p: "u", m: "u", model: "حَسُنَ يَحْسُنُ", w: "فَعُلَ يَفْعُلُ" },
    { n: 6, p: "i", m: "i", model: "حَسِبَ يَحْسِبُ", w: "فَعِلَ يَفْعِلُ" }
  ];
  /* [root, Bāb, German, transitive (1) or the preposition of the impersonal passive] */
  var VERBS = [
    ["نصر", 1, "helfen", 1], ["كتب", 1, "schreiben", 1], ["شكر", 1, "danken", 1], ["طلب", 1, "verlangen, suchen", 1],
    ["ترك", 1, "verlassen, lassen", 1], ["عبد", 1, "anbeten, dienen", 1], ["دخل", 1, "hineingehen", "على"], ["خرج", 1, "hinausgehen", "ب"],
    ["نظر", 1, "schauen", "إلى"], ["سجد", 1, "sich niederwerfen", "ل"], ["قعد", 1, "sitzen", "على"], ["حضر", 1, "anwesend sein", "ب"],
    ["ضرب", 2, "schlagen", 1], ["غسل", 2, "waschen", 1], ["عرف", 2, "kennen", 1], ["حمل", 2, "tragen", 1],
    ["غفر", 2, "vergeben", 1], ["كسب", 2, "erwerben", 1], ["جلس", 2, "sich setzen", "إلى"], ["نزل", 2, "herabkommen", "ب"],
    ["رجع", 2, "zurückkehren", "إلى"], ["صبر", 2, "geduldig sein", "على"],
    ["فتح", 3, "öffnen", 1], ["جمع", 3, "sammeln", 1], ["منع", 3, "verhindern", 1], ["نفع", 3, "nützen", 1],
    ["زرع", 3, "säen, pflanzen", 1], ["رفع", 3, "heben", 1], ["ذهب", 3, "gehen", "ب"],
    ["علم", 4, "wissen", 1], ["فهم", 4, "verstehen", 1], ["شرب", 4, "trinken", 1], ["ركب", 4, "reiten, einsteigen", 1],
    ["لبس", 4, "anziehen", 1], ["حفظ", 4, "auswendig lernen, bewahren", 1], ["عمل", 4, "tun, arbeiten", 1], ["سمع", 4, "hören", 1],
    ["فرح", 4, "sich freuen", "ب"], ["لعب", 4, "spielen", "ب"], ["حزن", 4, "traurig sein", "على"],
    ["حسن", 5, "schön, gut sein", 0], ["كرم", 5, "edel, großzügig sein", 0], ["كبر", 5, "groß sein", 0],
    ["صغر", 5, "klein sein", 0], ["قرب", 5, "nahe sein", 0], ["بعد", 5, "fern sein", 0],
    ["حسب", 6, "meinen, glauben", 1]
  ].map(function (v) {
    var b = ABWAB[v[1] - 1], r = v[0].split("");
    var verb = { id: v[0], r: r, bab: b, de: v[2], t: v[3] === 1, prep: typeof v[3] === "string" ? v[3] : null };
    verb.pass = verb.t || !!verb.prep;
    verb.past = r[0] + FA + r[1] + V[b.p] + r[2] + FA;
    verb.pres = "يَ" + r[0] + SU + r[1] + V[b.m] + r[2] + DA;
    return verb;
  });
  var BY_ID = {};
  VERBS.forEach(function (v) { BY_ID[v.id] = v; });

  /* Emsile order: هو هما هم هي هما هن أنتَ أنتما أنتم أنتِ أنتما أنتنّ أنا نحن */
  var PERSONS = [
    ["هُوَ", "er"], ["هُمَا", "sie beide (m.)"], ["هُمْ", "sie (m. Pl.)"],
    ["هِيَ", "sie"], ["هُمَا", "sie beide (f.)"], ["هُنَّ", "sie (f. Pl.)"],
    ["أَنْتَ", "du (m.)"], ["أَنْتُمَا", "ihr beide (m.)"], ["أَنْتُمْ", "ihr (m.)"],
    ["أَنْتِ", "du (f.)"], ["أَنْتُمَا", "ihr beide (f.)"], ["أَنْتُنَّ", "ihr (f.)"],
    ["أَنَا", "ich"], ["نَحْنُ", "wir"]
  ];
  var NOUN_ROWS = [["مُفْرَدٌ مُذَكَّرٌ", "Singular m."], ["مُثَنًّى مُذَكَّرٌ", "Dual m."], ["جَمْعٌ مُذَكَّرٌ", "Plural m."],
    ["مُفْرَدٌ مُؤَنَّثٌ", "Singular f."], ["مُثَنًّى مُؤَنَّثٌ", "Dual f."], ["جَمْعٌ مُؤَنَّثٌ", "Plural f."]];
  var SECOND = [6, 7, 8, 9, 10, 11];
  /* the preposition of the impersonal passive with the pronoun of each person (Emsile order) */
  var PREPS = {
    "ب": ["بِهِ", "بِهِمَا", "بِهِمْ", "بِهَا", "بِهِمَا", "بِهِنَّ", "بِكَ", "بِكُمَا", "بِكُمْ", "بِكِ", "بِكُمَا", "بِكُنَّ", "بِي", "بِنَا"],
    "ل": ["لَهُ", "لَهُمَا", "لَهُمْ", "لَهَا", "لَهُمَا", "لَهُنَّ", "لَكَ", "لَكُمَا", "لَكُمْ", "لَكِ", "لَكُمَا", "لَكُنَّ", "لِي", "لَنَا"],
    "إلى": ["إِلَيْهِ", "إِلَيْهِمَا", "إِلَيْهِمْ", "إِلَيْهَا", "إِلَيْهِمَا", "إِلَيْهِنَّ", "إِلَيْكَ", "إِلَيْكُمَا", "إِلَيْكُمْ", "إِلَيْكِ", "إِلَيْكُمَا", "إِلَيْكُنَّ", "إِلَيَّ", "إِلَيْنَا"],
    "على": ["عَلَيْهِ", "عَلَيْهِمَا", "عَلَيْهِمْ", "عَلَيْهَا", "عَلَيْهِمَا", "عَلَيْهِنَّ", "عَلَيْكَ", "عَلَيْكُمَا", "عَلَيْكُمْ", "عَلَيْكِ", "عَلَيْكُمَا", "عَلَيْكُنَّ", "عَلَيَّ", "عَلَيْنَا"]
  };

  /* endings */
  var PAST_END = [FA, FA + "ا", DA + "وا", FA + "تْ", FA + "تَا", SU + "نَ", SU + "تَ", SU + "تُمَا", SU + "تُمْ", SU + "تِ", SU + "تُمَا", SU + "تُنَّ", SU + "تُ", SU + "نَا"];
  var PRE = ["ي", "ي", "ي", "ت", "ت", "ي", "ت", "ت", "ت", "ت", "ت", "ت", "أ", "ن"];
  var IND = [DA, FA + "انِ", DA + "ونَ", DA, FA + "انِ", SU + "نَ", DA, FA + "انِ", DA + "ونَ", KA + "ينَ", FA + "انِ", SU + "نَ", DA, DA];
  var JUS = [SU, FA + "ا", DA + "وا", SU, FA + "ا", SU + "نَ", SU, FA + "ا", DA + "وا", KA + "ي", FA + "ا", SU + "نَ", SU, SU];
  var SUBJ = [FA, FA + "ا", DA + "وا", FA, FA + "ا", SU + "نَ", FA, FA + "ا", DA + "وا", KA + "ي", FA + "ا", SU + "نَ", FA, FA];
  var NOUN_END = [TUN, FA + "انِ", DA + "ونَ", FA + "ةٌ", FA + "تَانِ", FA + "اتٌ"];

  /* the last root letter meets a suffix that starts with the same letter (سَكَتْتُ -> سَكَتُّ, حَسُنْنَ -> حَسُنَّ) */
  function join(stem, last, end) {
    if (end.charAt(0) === SU && end.charAt(1) === last) return stem + last + SH + end.slice(2);
    return stem + last + end;
  }
  function past(v, i, passive) {
    var r = v.r;
    return join(r[0] + (passive ? DA : FA) + r[1] + (passive ? KA : V[v.bab.p]), r[2], PAST_END[i]);
  }
  function present(v, i, ends, passive) {
    var r = v.r;
    return join(PRE[i] + (passive ? DA : FA) + r[0] + SU + r[1] + (passive ? FA : V[v.bab.m]), r[2], ends[i]);
  }
  function imperative(v, i) {
    var r = v.r;
    return join("ا" + (v.bab.m === "u" ? DA : KA) + r[0] + SU + r[1] + V[v.bab.m], r[2], JUS[i]);
  }
  function noun(stem, last, i) { return stem + last + NOUN_END[i]; }

  /* a passive form: transitive verbs per person; intransitive verbs keep the 3rd person m. sg.
     and the person moves into the preposition (ذُهِبَ بِهِمْ „man ging mit ihnen“) */
  function passive(make) {
    return function (v, i) { return v.t ? make(v, i) : make(v, 0) + " " + PREPS[v.prep][i]; };
  }
  /* the forms, as in the Emsile; grp groups them for „Was möchtest du üben?“ */
  var FORMS = [
    { id: "madi", de: "Vergangenheit", ar: "الْفِعْلُ الْمَاضِي الْمَعْلُومُ", rows: "p", core: 1, grp: "core",
      make: function (v, i) { return past(v, i, false); } },
    { id: "mudari", de: "Gegenwart / Zukunft", ar: "الْفِعْلُ الْمُضَارِعُ الْمَعْلُومُ", rows: "p", core: 1, grp: "core",
      make: function (v, i) { return present(v, i, IND, false); } },
    { id: "madi_p", de: "Vergangenheit Passiv", ar: "الْمَاضِي الْمَجْهُولُ", rows: "p", passive: 1, grp: "core",
      make: passive(function (v, i) { return past(v, i, true); }) },
    { id: "mudari_p", de: "Gegenwart Passiv", ar: "الْمُضَارِعُ الْمَجْهُولُ", rows: "p", passive: 1, grp: "core",
      make: passive(function (v, i) { return present(v, i, IND, true); }) },
    { id: "nafy", de: "Verneinte Gegenwart (lā)", ar: "النَّفْيُ", rows: "p", grp: "neg",
      make: function (v, i) { return "لَا " + present(v, i, IND, false); } },
    { id: "nafy_p", de: "Verneinte Gegenwart Passiv", ar: "النَّفْيُ الْمَجْهُولُ", rows: "p", passive: 1, grp: "neg",
      make: passive(function (v, i) { return "لَا " + present(v, i, IND, true); }) },
    { id: "lam", de: "Verneinte Vergangenheit (lam)", ar: "الْجَحْدُ الْمُطْلَقُ", rows: "p", grp: "neg",
      make: function (v, i) { return "لَمْ " + present(v, i, JUS, false); } },
    { id: "lam_p", de: "Verneinte Vergangenheit Passiv", ar: "الْجَحْدُ الْمُطْلَقُ الْمَجْهُولُ", rows: "p", passive: 1, grp: "neg",
      make: passive(function (v, i) { return "لَمْ " + present(v, i, JUS, true); }) },
    { id: "lan", de: "Verneinte Zukunft (lan)", ar: "تَأْكِيدُ نَفْيِ الِاسْتِقْبَالِ", rows: "p", grp: "neg",
      make: function (v, i) { return "لَنْ " + present(v, i, SUBJ, false); } },
    { id: "lan_p", de: "Verneinte Zukunft Passiv", ar: "تَأْكِيدُ نَفْيِ الِاسْتِقْبَالِ الْمَجْهُولُ", rows: "p", passive: 1, grp: "neg",
      make: passive(function (v, i) { return "لَنْ " + present(v, i, SUBJ, true); }) },
    /* the command for all 14 persons as in the Emsile: 2nd person اُنْصُرْ (الْأَمْرُ الْحَاضِرُ),
       3rd and 1st person with lām al-amr لِيَنْصُرْ، لِأَنْصُرْ (الْأَمْرُ الْغَائِبُ) */
    { id: "amr", de: "Befehl", ar: "الْأَمْرُ", rows: "p", grp: "amr",
      make: function (v, i) { return SECOND.indexOf(i) !== -1 ? imperative(v, i) : "لِ" + present(v, i, JUS, false); } },
    /* the passive command always with lām al-amr: لِيُنْصَرْ، لِتُنْصَرْ، لِأُنْصَرْ */
    { id: "amr_p", de: "Befehl Passiv", ar: "الْأَمْرُ الْمَجْهُولُ", rows: "p", passive: 1, grp: "amr",
      make: passive(function (v, i) { return "لِ" + present(v, i, JUS, true); }) },
    { id: "nahy", de: "Verbot (lā)", ar: "النَّهْيُ", rows: "p", grp: "amr",
      make: function (v, i) { return "لَا " + present(v, i, JUS, false); } },
    { id: "nahy_p", de: "Verbot Passiv", ar: "النَّهْيُ الْمَجْهُولُ", rows: "p", passive: 1, grp: "amr",
      make: passive(function (v, i) { return "لَا " + present(v, i, JUS, true); }) },
    { id: "fail", de: "Partizip Aktiv (Tätiger)", ar: "اسْمُ الْفَاعِلِ", rows: "n", grp: "part",
      make: function (v, i) { return noun(v.r[0] + FA + "ا" + v.r[1] + KA, v.r[2], i); } },
    /* intransitive: مَذْهُوبٌ بِهِ، مَذْهُوبٌ بِهِمَا … (the six noun rows are the persons هُوَ … هُنَّ) */
    { id: "maful", de: "Partizip Passiv (Betroffener)", ar: "اسْمُ الْمَفْعُولِ", rows: "n", passive: 1, grp: "part",
      make: passive(function (v, i) { return noun("مَ" + v.r[0] + SU + v.r[1] + DA + "و", v.r[2], i); }) }
  ];
  var FORM_BY_ID = {};
  FORMS.forEach(function (f) { FORM_BY_ID[f.id] = f; });

  function formsFor(v) { return FORMS.filter(function (f) { return v.pass || !f.passive; }); }
  /* the forms before the passive of all tenses was added – their order keeps the quiz ids stable */
  var OLD_FORMS = ["madi", "mudari", "madi_p", "mudari_p", "amr", "nahy", "lam", "lan", "fail", "maful"];
  function quizIndex(v, f) {
    var old = OLD_FORMS.filter(function (id) { return v.t || !FORM_BY_ID[id].passive; });
    var k = old.indexOf(f.id);
    return k !== -1 ? k : OLD_FORMS.length + FORMS.indexOf(f);
  }
  function rowIdx(f) { return f.rows === "2" ? SECOND : f.rows === "n" ? [0, 1, 2, 3, 4, 5] : PERSONS.map(function (p, i) { return i; }); }
  function rowLabel(f, i) { return f.rows === "n" ? NOUN_ROWS[i] : PERSONS[i]; }
  function conj(v, f) {
    f = typeof f === "string" ? FORM_BY_ID[f] : f;
    return rowIdx(f).map(function (i) { return f.make(v, i); });
  }
  function tid(v, f) { return "ar-s-" + v.id + "-" + f.id; }

  /* ---------- progress: one table = one learning item ---------- */
  var TABLES = [];
  VERBS.forEach(function (v) { formsFor(v).forEach(function (f) { TABLES.push({ v: v, f: f, id: tid(v, f) }); }); });
  function lv(t) { return L.levelOf(t.id); }
  function stats(list) {
    var s = { total: list.length, learned: 0, almost: 0, wrong: 0 };
    list.forEach(function (t) { var l = lv(t); if (l === 2) s.learned++; else if (l === 1) s.almost++; else if (l === -1) s.wrong++; });
    s.pct = s.total ? Math.floor(s.learned / s.total * 100) : 0;
    if (s.total && s.learned === s.total) s.pct = 100;
    return s;
  }
  /* order for "Weiter üben": the core tenses of all verbs first, then the other forms */
  function nextTables(list, n) {
    var open = list.filter(function (t) { return lv(t) !== 2; });
    var wrong = open.filter(function (t) { return lv(t) < 0 || lv(t) === 1; });
    var fresh = open.filter(function (t) { return !lv(t); });
    fresh.sort(function (a, b) { return (b.f.core ? 1 : 0) - (a.f.core ? 1 : 0) || FORMS.indexOf(a.f) - FORMS.indexOf(b.f); });
    return wrong.concat(fresh).slice(0, n);
  }

  /* ---------- the table game ---------- */
  var run = null;   // { tables, i, results, opts }
  function play(opts) {
    run = { tables: opts.tables, i: 0, results: [], opts: opts };
    if (APP.tabOf) APP.tabOf.sarf = opts.tab || "start";
    APP.showView("sarf");
    board();
    window.scrollTo(0, 0);
  }
  function seededShuffle(list) { return APP.shuffle(list); }

  function board() {
    var t = run.tables[run.i], v = t.v, f = t.f;
    var right = conj(v, f), idx = rowIdx(f);
    /* two or three wrong forms of the same verb make the pool harder */
    var others = [];
    formsFor(v).forEach(function (g) { if (g !== f && g.rows === f.rows) others = others.concat(conj(v, g)); });
    if (f.rows === "2") others = others.concat(SECOND.map(function (i) { return present(v, i, JUS, false); }));
    others = others.filter(function (x, k) { return right.indexOf(x) === -1 && others.indexOf(x) === k; });
    var extra = seededShuffle(others).slice(0, run.opts.extra === undefined ? 3 : run.opts.extra);
    var st = { slots: right.map(function () { return null; }), pool: seededShuffle(right.concat(extra)).map(function (x, k) { return { k: k, x: x, used: false }; }), sel: 0, checked: false };
    run.st = st;
    $("#sarf-head").innerHTML =
      '<p class="eyebrow">' + esc(run.opts.label || "Sarf") + (run.tables.length > 1 ? " · " + T("Tabelle {n} von {m}", { n: run.i + 1, m: run.tables.length }) : "") + "</p>" +
      '<h2><span lang="ar" dir="rtl" class="sarf-verb">' + esc(v.past) + " " + esc(v.pres) + "</span> <small>" + esc(T(v.de)) + "</small></h2>" +
      '<p class="sarf-form"><b>' + esc(T(f.de)) + '</b> · <span lang="ar" dir="rtl">' + esc(f.ar) + "</span> · Bāb " + v.bab.n + ' <span lang="ar" dir="rtl">(' + esc(v.bab.w) + ")</span></p>" +
      '<p class="sarf-help">' + T("Tippe die Formen in der richtigen Reihenfolge an. Ein Feld antippen, um es zu leeren oder auszuwählen.") + (extra.length ? " " + T("Achtung: {n} Formen passen nicht in diese Tabelle.", { n: extra.length }) : "") + "</p>";
    draw();
  }
  function draw() {
    var t = run.tables[run.i], f = t.f, st = run.st, right = conj(t.v, f), idx = rowIdx(f);
    $("#sarf-grid").innerHTML = idx.map(function (pi, k) {
      var lab = rowLabel(f, pi), val = st.slots[k] !== null ? st.pool[st.slots[k]].x : "";
      var cls = "sarf-slot" + (k === st.sel && !st.checked ? " is-sel" : "") + (st.checked ? (val === right[k] ? " is-ok" : " is-bad") : "");
      return '<div class="sarf-row"><span class="sarf-p"><span lang="ar" dir="rtl">' + esc(lab[0]) + "</span><small>" + esc(T(lab[1])) + "</small></span>" +
        '<button type="button" class="' + cls + '" data-slot="' + k + '"' + (st.checked ? " disabled" : "") + ' lang="ar" dir="rtl">' + esc(val) +
        (st.checked && val !== right[k] ? '<small class="sarf-right">' + esc(right[k]) + "</small>" : "") + "</button></div>";
    }).join("");
    $("#sarf-pool").innerHTML = st.checked ? "" : st.pool.map(function (c) {
      return '<button type="button" class="sarf-chip" data-chip="' + c.k + '"' + (c.used ? " disabled" : "") + ' lang="ar" dir="rtl">' + esc(c.x) + "</button>";
    }).join("");
    var full = st.slots.every(function (s) { return s !== null; });
    var go = $("#sarf-check");
    if (st.checked) {
      var ok = st.slots.filter(function (s, k) { return st.pool[s].x === right[k]; }).length;
      $("#sarf-result").hidden = false;
      $("#sarf-result").className = "feedback " + (ok === right.length ? "good" : "bad");
      $("#sarf-result").innerHTML = "<p><b>" + (ok === right.length ? T("Fehlerfrei!") : T("{n} von {m} richtig", { n: ok, m: right.length })) + "</b>" +
        (st.note ? " · " + esc(st.note) : "") + "</p>";
      go.textContent = run.i + 1 < run.tables.length ? T("Nächste Tabelle") : T("Fertig");
      go.disabled = false;
    } else {
      $("#sarf-result").hidden = true;
      go.textContent = T("Prüfen");
      go.disabled = !full;
    }
    $all("[data-slot]", view).forEach(function (b) {
      b.addEventListener("click", function () {
        var k = +b.getAttribute("data-slot");
        if (st.slots[k] !== null) { st.pool[st.slots[k]].used = false; st.slots[k] = null; }
        st.sel = k;
        draw();
      });
    });
    $all("[data-chip]", view).forEach(function (b) {
      b.addEventListener("click", function () {
        var c = st.pool[+b.getAttribute("data-chip")];
        var k = st.slots[st.sel] === null ? st.sel : st.slots.indexOf(null);
        if (k === -1) return;
        st.slots[k] = c.k; c.used = true;
        var next = st.slots.indexOf(null, k + 1);
        st.sel = next !== -1 ? next : st.slots.indexOf(null);
        draw();
      });
    });
  }
  $("#sarf-check").addEventListener("click", function () {
    var t = run.tables[run.i], st = run.st, right = conj(t.v, t.f);
    if (!st.checked) {
      st.checked = true;
      var ok = st.slots.filter(function (s, k) { return st.pool[s].x === right[k]; }).length;
      var res = { table: t, correct: ok, total: right.length };
      run.results.push(res);
      if (run.opts.onTable) st.note = run.opts.onTable(res) || "";
      draw();
      return;
    }
    if (run.i + 1 < run.tables.length) { run.i++; board(); window.scrollTo(0, 0); return; }
    finish(true);
  });
  $("#sarf-quit").addEventListener("click", function () { if (run) finish(false); });
  function finish(done) {
    var r = run;
    run = null;
    if (r.opts.onFinish) r.opts.onFinish(r.results, done);
    if (r.opts.onLeave) r.opts.onLeave(); else { APP.showView("arabisch"); window.scrollTo(0, 0); }
  }

  /* ---------- learning (tab "Sarf" in Arabisch) ---------- */
  var state = { verb: null, last: null, focus: "all" };
  /* what to practise: all forms, or only one group (e.g. only the passive) */
  var FOCUS = [
    ["all", "Alle Formen", function () { return true; }],
    ["core", "Vergangenheit & Gegenwart", function (f) { return !!f.core; }],
    ["passiv", "Nur Passiv", function (f) { return !!f.passive; }],
    ["amr", "Befehl & Verbot", function (f) { return f.grp === "amr"; }],
    ["neg", "Verneinung (lā, lam, lan)", function (f) { return f.grp === "neg"; }],
    ["part", "Partizipien", function (f) { return f.rows === "n"; }]
  ];
  try { var fsaved = localStorage.getItem("fiqh:sarffocus"); if (fsaved && FOCUS.some(function (x) { return x[0] === fsaved; })) state.focus = fsaved; } catch (e) {}
  function focusedBy(x) { return TABLES.filter(function (t) { return x[2](t.f); }); }
  function focusOf() { for (var i = 0; i < FOCUS.length; i++) if (FOCUS[i][0] === state.focus) return FOCUS[i]; return FOCUS[0]; }
  function focused(list) { var f = focusOf()[2]; return (list || TABLES).filter(function (t) { return f(t.f); }); }
  function learnTables(list, label) {
    if (!list.length) return;
    var scope = focused(), before = stats(scope);
    play({
      tables: list, label: label, tab: "start",
      onTable: function (res) { saveLast(res.table.id, res.correct, res.total); return L.recordId(res.table.id, res.correct === res.total); },
      onFinish: function (results) {
        if (!results.length) return;
        state.last = { n: results.length, perfect: results.filter(function (r) { return r.correct === r.total; }).length, before: before, after: stats(scope) };
        L.sync();
      },
      onLeave: function () { APP.showView("arabisch"); if (window.FIQH_ARABIC_RENDER) window.FIQH_ARABIC_RENDER("sarf"); window.scrollTo(0, 0); }
    });
  }
  /* the last try of each table (how many forms were right) – so one wrong form shows as a small red part, not a red bar */
  var LAST = {};
  try { LAST = JSON.parse(localStorage.getItem("fiqh:sarflast") || "{}") || {}; } catch (e) { LAST = {}; }
  function saveLast(id, ok, total) {
    LAST[id] = [ok, total];
    try { localStorage.setItem("fiqh:sarflast", JSON.stringify(LAST)); } catch (e) {}
  }
  /* bar and line for one table in the verb view */
  function tableBar(t) {
    var l = lv(t), last = LAST[t.id];
    if (l === 2) return { bar: bar({ total: 1, learned: 1, almost: 0, wrong: 0 }), text: T("✓ gelernt") };
    var text = l === 1 ? T("fast – noch 1× fehlerfrei") : l === -1 ? T("nochmal üben") : T("offen");
    if (!last || !l) return { bar: bar({ total: 1, learned: 0, almost: 0, wrong: 0 }), text: text };
    var ok = last[0], total = last[1];
    var b = '<span class="lbar" role="img" aria-label="' + T("{n} von {m} Formen richtig", { n: ok, m: total }) + '">' +
      (ok ? '<span class="lb-' + (l === 1 ? "mid" : "ok") + '" style="width:' + (ok / total * 100) + '%"></span>' : "") +
      (total - ok ? '<span class="lb-bad" style="width:' + ((total - ok) / total * 100) + '%"></span>' : "") + "</span>";
    return { bar: b, text: text + (ok < total ? " · " + T("zuletzt {n} von {m} richtig", { n: ok, m: total }) : "") };
  }
  function bar(s) {
    function seg(n, cls) { return n ? '<span class="lb-' + cls + '" style="width:' + (n / s.total * 100) + '%"></span>' : ""; }
    return '<span class="lbar" role="img" aria-label="' + T("{n} von {m} gelernt", { n: s.learned, m: s.total }) + '">' + seg(s.learned, "ok") + seg(s.almost, "mid") + seg(s.wrong, "bad") + "</span>";
  }
  function fullTable(v) {
    var fs = formsFor(v);
    function block(list, rows, labels) {
      return '<div class="ar-table-wrap"><table class="ar-table sarf-table"><thead><tr><th></th>' +
        list.map(function (f) { return '<th><span lang="ar" dir="rtl">' + esc(f.ar) + "</span><small>" + esc(T(f.de)) + "</small></th>"; }).join("") + "</tr></thead><tbody>" +
        rows.map(function (pi, k) {
          return '<tr><th><span lang="ar" dir="rtl">' + esc(labels(pi)[0]) + "</span><small>" + esc(T(labels(pi)[1])) + "</small></th>" +
            list.map(function (f) {
              var ri = rowIdx(f).indexOf(pi);
              return '<td lang="ar" dir="rtl">' + (ri === -1 ? "" : esc(f.make(v, pi))) + "</td>";
            }).join("") + "</tr>";
        }).join("") + "</tbody></table></div>";
    }
    var active = fs.filter(function (f) { return f.rows !== "n" && !f.passive; }),
      pass = fs.filter(function (f) { return f.rows !== "n" && f.passive; }), nouns = fs.filter(function (f) { return f.rows === "n"; });
    var persons = PERSONS.map(function (p, i) { return i; }), pl = function (i) { return PERSONS[i]; };
    return '<h4 class="sarf-sub">' + T("Aktiv") + ' <span lang="ar" dir="rtl">الْمَعْلُومُ</span></h4>' + block(active, persons, pl) +
      (pass.length ? '<h4 class="sarf-sub">' + T("Passiv") + ' <span lang="ar" dir="rtl">الْمَجْهُولُ</span></h4>' +
        (v.t ? "" : '<p class="sarf-help">' + T("Intransitiv: Das Verb bleibt in der 3. Person (er), die Person steckt im Pronomen an der Präposition.") + "</p>") +
        block(pass, persons, pl) : "") +
      '<h4 class="sarf-sub">' + T("Partizipien") + "</h4>" + block(nouns, [0, 1, 2, 3, 4, 5], function (i) { return NOUN_ROWS[i]; });
  }
  function pane() {
    var all = stats(TABLES), core = stats(TABLES.filter(function (t) { return t.f.core; })), fs = stats(focused());
    var v = state.verb && BY_ID[state.verb];
    var html = '<div class="sarf-pane">';
    if (state.last) {
      var r = state.last;
      html += '<div class="panel learn-round"><h3>' + T(r.n === 1 ? "{p} von {n} Tabelle fehlerfrei" : "{p} von {n} Tabellen fehlerfrei", { p: r.perfect, n: r.n }) + "</h3>" +
        "<p>" + (state.focus === "all" ? T("Sarf gesamt:") : esc(T(focusOf()[1])) + ":") + " <b>" + r.before.pct + " % → " + r.after.pct + " %</b></p>" +
        '<div class="lr-actions"><button type="button" class="btn btn-primary" data-sarf-next>' + T("Weiter üben") + '</button><button type="button" class="linkish" data-sarf-close>' + T("Schließen") + "</button></div></div>";
    }
    if (!v) {
      html += '<div class="panel ar-irab-cta"><div><p class="eyebrow">Sarf · صَرْف</p><h3>' + T("Verben konjugieren wie in der Emsile") + "</h3>" +
        "<p>" + T("{v} Verben aus allen sechs Abwāb, je bis zu {f} Formen: Vergangenheit und Gegenwart, Befehl, Verbot, Verneinung mit lā, lam und lan – jeweils aktiv und passiv –, Partizip Aktiv und Passiv.", { v: VERBS.length, f: FORMS.length }) + " " +
        T("Eine Tabelle ist gelernt, wenn du sie fehlerfrei ordnest – nach einem Fehler zweimal hintereinander.") + "</p>" +
        '<div class="learn-stats"><span>' + T("<b>{n}</b> von {m} Tabellen gelernt", { n: all.learned, m: all.total }) + "</span><span>" + T("<b>{n} %</b> Vergangenheit &amp; Gegenwart", { n: core.pct }) + "</span></div></div>" +
        '<div class="sarf-focus"><p class="step-label">' + T("Was möchtest du üben?") + '</p><div class="chips">' + FOCUS.map(function (x) {
          var n = focusedBy(x).length;
          return '<button type="button" class="chip" data-sarf-focus="' + x[0] + '" aria-pressed="' + (state.focus === x[0]) + '">' + esc(T(x[1])) + '<span class="chip-count">' + n + "</span></button>";
        }).join("") + "</div></div>" +
        '<div class="ar-irab-actions"><button type="button" class="btn btn-primary" data-sarf-next>' + (fs.learned ? T("Weiter üben") : T("Loslegen")) +
          (state.focus === "all" ? "" : " · " + esc(T(focusOf()[1]))) + " · " + fs.pct + " %</button></div></div>";
      html += ABWAB.map(function (b) {
        var vs = VERBS.filter(function (x) { return x.bab === b; });
        return '<section class="lg"><h3 class="lg-head"><span>Bāb ' + b.n + ' <span lang="ar" dir="rtl" class="sarf-bab">' + esc(b.model) + "</span></span><small>" + esc(b.w) + "</small></h3>" +
          '<ol class="lt-list">' + vs.map(function (x) {
            var s = stats(TABLES.filter(function (t) { return t.v === x; }));
            var st = s.pct === 100 ? "done" : s.learned + s.almost + s.wrong ? "busy" : "new";
            return '<li class="lt lt-' + st + '"><button type="button" class="ar-lesson" data-sarf-verb="' + x.id + '">' +
              '<span class="ar-num sarf-num" lang="ar" dir="rtl">' + esc(x.past) + "</span>" +
              '<span class="lt-main"><span class="lt-title"><strong>' + esc(T(x.de)) + '</strong><span class="lt-ar" lang="ar" dir="rtl">' + esc(x.pres) + "</span></span>" + bar(s) +
              '<small class="lt-meta">' + T("{n} Tabellen", { n: s.total }) + (x.t ? "" : " · " + T(x.pass ? "intransitiv, Passiv mit Präposition" : "Bāb 5, ohne Passiv")) + "</small></span>" +
              '<span class="lt-pct">' + (st === "done" ? "✓" : s.pct + " %") + "</span></button></li>";
          }).join("") + "</ol></section>";
      }).join("");
    } else {
      var ts = TABLES.filter(function (t) { return t.v === v; });
      html += '<div class="ar-lesson-view"><button type="button" class="linkish ar-back" data-sarf-back>← ' + T("Alle Verben") + "</button>" +
        '<div class="panel sarf-verb-head"><h3><span lang="ar" dir="rtl" class="sarf-verb">' + esc(v.past) + " " + esc(v.pres) + "</span> " + esc(T(v.de)) + "</h3>" +
        "<p>Bāb " + v.bab.n + ' <span lang="ar" dir="rtl">' + esc(v.bab.w) + "</span> · " + T("wie") + ' <span lang="ar" dir="rtl">' + esc(v.bab.model) + "</span>" + (v.t ? "" : " · " + (v.pass ? T("intransitiv: Passiv nur mit Präposition, z. B. {w}", { w: FORMS[2].make(v, 0) }) : T("Bāb 5 (Eigenschaft), daher ohne Passiv"))) + "</p>" +
        '<div class="ar-parts">' + ts.map(function (t) {
          var l = lv(t), tb = tableBar(t);
          return '<button type="button" class="ar-part' + (l === 2 ? " is-done" : "") + '" data-sarf-table="' + t.id + '"><strong>' + esc(T(t.f.de)) + "</strong>" + tb.bar +
            "<small>" + tb.text + "</small></button>";
        }).join("") + "</div>" +
        '<div class="lr-actions"><button type="button" class="btn btn-primary" data-sarf-verb-all>' + (state.focus !== "all" && focused(ts).length ? T("Offene Tabellen üben: {f}", { f: T(focusOf()[1]) }) : T("Alle offenen Tabellen üben")) + "</button></div></div>" +
        '<section class="ar-block"><h3>' + T("Die ganze Tabelle") + "</h3>" + fullTable(v) + "</section></div>";
    }
    return html + "</div>";
  }
  function wire(body, rerender) {
    $all("[data-sarf-verb]", body).forEach(function (b) {
      b.addEventListener("click", function () { state.verb = b.getAttribute("data-sarf-verb"); rerender(); });
    });
    var back = $("[data-sarf-back]", body);
    if (back) back.addEventListener("click", function () { state.verb = null; rerender(); });
    $all("[data-sarf-next]", body).forEach(function (b) {
      b.addEventListener("click", function () { state.last = null; learnTables(nextTables(focused(), 3), state.focus === "all" ? "Sarf" : "Sarf · " + T(focusOf()[1])); });
    });
    $all("[data-sarf-focus]", body).forEach(function (b) {
      b.addEventListener("click", function () {
        state.focus = b.getAttribute("data-sarf-focus");
        try { localStorage.setItem("fiqh:sarffocus", state.focus); } catch (e) {}
        rerender();
      });
    });
    var close = $("[data-sarf-close]", body);
    if (close) close.addEventListener("click", function () { state.last = null; rerender(); });
    $all("[data-sarf-table]", body).forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("data-sarf-table");
        learnTables(TABLES.filter(function (t) { return t.id === id; }), "Sarf");
      });
    });
    var va = $("[data-sarf-verb-all]", body);
    if (va) va.addEventListener("click", function () {
      var ts = TABLES.filter(function (t) { return t.v.id === state.verb; });
      if (focused(ts).length) ts = focused(ts);
      var open = nextTables(ts, ts.length);
      learnTables(open.length ? open : ts, "Sarf");
    });
  }

  /* ---------- multiple-choice questions for the Quiz tab (subject Arabisch, area Ṣarf) ----------
     „Wie lautet …?“ (build a form) and „Welche Form ist das?“ (recognise a form); always the same set,
     only forms that are unambiguous within the verb's table. Level: past/present 1, other forms 2, recognising 3. */
  var QUIZ = null;
  function quizQuestions() {
    if (QUIZ) return QUIZ;
    QUIZ = [];
    var hash = L.hash;
    function seeded(str) { var h = parseInt(hash(str), 36) || 1; return function () { h = (h * 1103515245 + 12345) & 0x7fffffff; return h / 0x7fffffff; }; }
    function pick(pool, avoid, n, rnd) {
      var seen = {}, out = [], copy = pool.slice();
      avoid.forEach(function (a) { seen[a] = 1; });
      while (out.length < n && copy.length) { var x = copy.splice(Math.floor(rnd() * copy.length), 1)[0]; if (!seen[x]) { seen[x] = 1; out.push(x); } }
      return out;
    }
    function label(f, i) { var r = rowLabel(f, i); return r[0] + " (" + T(r[1]) + ")"; }
    VERBS.forEach(function (v, vi) {
      var fs = formsFor(v), all = [], count = {}, countOld = {};
      fs.forEach(function (f) { rowIdx(f).forEach(function (i) {
        var w = f.make(v, i);
        all.push({ f: f, i: i, w: w }); count[w] = (count[w] || 0) + 1;
        if (OLD_FORMS.indexOf(f.id) !== -1) countOld[w] = (countOld[w] || 0) + 1;
      }); });
      var src = T("Ṣarf") + ": " + v.past + " " + v.pres + " · Bāb " + v.bab.n;
      fs.forEach(function (f) {
        var fi = quizIndex(v, f), rows = rowIdx(f), rnd = seeded(v.id + "|" + f.id);
        /* build: two persons per form */
        [0, 1].forEach(function (k) {
          var i = rows[(vi * 3 + fi * 5 + k * 7) % rows.length], right = f.make(v, i);
          var near = conj(v, f).filter(function (w, j) { return w !== right; });
          var other = fs.filter(function (g) { return g !== f && rowIdx(g).indexOf(i) !== -1; }).map(function (g) { return g.make(v, i); });
          var wrong = pick(near, [right], 2, rnd);
          wrong = wrong.concat(pick(other.concat(near), [right].concat(wrong), 3 - wrong.length, rnd));
          if (wrong.length < 3) return;
          QUIZ.push({ t: "arabisch", area: "sarf", lvl: f.core ? 1 : 2, tt: T("Arabisch · Ṣarf"), srcText: src, c: 0,
            _lid: "ar-sq-" + hash(v.id + "|" + f.id + "|" + i + "|b"),
            q: T("Wie lautet „{f}“ für {p}?", { f: T(f.de), p: label(f, i) }), ar: v.past + " " + v.pres,
            a: [right].concat(wrong), e: T("{f} von {v}, {p}: {w}", { f: T(f.de), v: v.past, p: label(f, i), w: right }) });
        });
        /* recognise: one form per table that is unique in the whole table of the verb */
        /* the form is picked as before the new forms came (same id), unless it is no longer unique (لَا تَنْصُرْنَ is Nahy and Nafy) */
        var uniq = rows.filter(function (i) { return count[f.make(v, i)] === 1; });
        if (!uniq.length) return;
        var old = OLD_FORMS.indexOf(f.id) !== -1 ? rows.filter(function (i) { return countOld[f.make(v, i)] === 1; }) : [];
        var ri = old.length ? old[(vi + fi) % old.length] : -1;
        if (ri === -1 || count[f.make(v, ri)] !== 1) ri = uniq[(vi + fi) % uniq.length];
        var word = f.make(v, ri);
        var labels = all.filter(function (x) { return x.w !== word && count[x.w] === 1; }).map(function (x) { return T(x.f.de) + " · " + label(x.f, x.i); });
        var sameForm = labels.filter(function (x) { return x.indexOf(T(f.de) + " · ") === 0; });
        var wrongL = pick(sameForm, [], 1, rnd);
        wrongL = wrongL.concat(pick(labels, wrongL, 3 - wrongL.length, rnd));
        if (wrongL.length < 3) return;
        QUIZ.push({ t: "arabisch", area: "sarf", lvl: 3, tt: T("Arabisch · Ṣarf"), srcText: src, c: 0,
          _lid: "ar-sq-" + hash(v.id + "|" + f.id + "|" + ri + "|r"),
          q: T("Welche Form ist das?"), ar: word,
          a: [T(f.de) + " · " + label(f, ri)].concat(wrongL), e: T("{w} ist {f} von {v}, {p}.", { w: word, f: T(f.de), v: v.past, p: label(f, ri) }) });
      });
    });
    return QUIZ;
  }

  window.FIQH_SARF = {
    quizQuestions: quizQuestions,
    VERBS: VERBS, FORMS: FORMS, FORM_BY_ID: FORM_BY_ID, PERSONS: PERSONS, TABLES: TABLES,
    conj: conj, formsFor: formsFor, play: play, pane: pane, wire: wire, stats: function () { return stats(TABLES); },
    table: function (verbId, formId) { var v = BY_ID[verbId]; return { v: v, f: FORM_BY_ID[formId], id: tid(v, FORM_BY_ID[formId]) }; }
  };
})();
