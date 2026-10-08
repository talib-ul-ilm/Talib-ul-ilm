/* Zahlen aus dem Madina-Buch – Übungsfragen für die Kategorie „Zahlen“ (Quiz · Arabisch).
   Nur was das Buch lehrt: Dual (B1 L18), 3–10 mit männlichem / weiblichem Gezählten (B1 L19/20),
   11–19 (B2 L3/6), Ordnungszahlen 1–10 (B2 L3), 20–30 (B2 L10), Zehner und 21–29 weiblich (B2 L23),
   100, 200, 300, 1000 (B2 L24).
   window.MADINA_ZAHLEN() → [{ key, lesson, lvl, q, ar?, a: [richtig, falsch, falsch, falsch], e }]
   arabic.js macht daraus Quizfragen (Kennung ar-z-…, Bereich „zahlen“). Alle Sätze mit عِنْدِي, damit
   die Zahl im Nominativ steht. */
(function () {
  "use strict";
  // Nomen: [Singular Nom., Singular Gen., Singular Akk., Plural Gen., Dual Nom., Dual Gen., deutsch Sg., deutsch Pl.]
  var M = [
    ["كِتَابٌ", "كِتَابٍ", "كِتَابًا", "كُتُبٍ", "كِتَابَانِ", "كِتَابَيْنِ", "Buch", "Bücher"],
    ["طَالِبٌ", "طَالِبٍ", "طَالِبًا", "طُلَّابٍ", "طَالِبَانِ", "طَالِبَيْنِ", "Student", "Studenten"],
    ["قَلَمٌ", "قَلَمٍ", "قَلَمًا", "أَقْلَامٍ", "قَلَمَانِ", "قَلَمَيْنِ", "Stift", "Stifte"],
    ["وَلَدٌ", "وَلَدٍ", "وَلَدًا", "أَوْلَادٍ", "وَلَدَانِ", "وَلَدَيْنِ", "Junge", "Jungen"],
    ["بَيْتٌ", "بَيْتٍ", "بَيْتًا", "بُيُوتٍ", "بَيْتَانِ", "بَيْتَيْنِ", "Haus", "Häuser"],
    ["رِيَالٌ", "رِيَالٍ", "رِيَالًا", "رِيَالَاتٍ", "رِيَالَانِ", "رِيَالَيْنِ", "Riyal", "Riyal"]
  ];
  var F = [
    ["بِنْتٌ", "بِنْتٍ", "بِنْتًا", "بَنَاتٍ", "بِنْتَانِ", "بِنْتَيْنِ", "Tochter", "Töchter"],
    ["طَالِبَةٌ", "طَالِبَةٍ", "طَالِبَةً", "طَالِبَاتٍ", "طَالِبَتَانِ", "طَالِبَتَيْنِ", "Studentin", "Studentinnen"],
    ["غُرْفَةٌ", "غُرْفَةٍ", "غُرْفَةً", "غُرَفٍ", "غُرْفَتَانِ", "غُرْفَتَيْنِ", "Zimmer", "Zimmer"],
    ["سَيَّارَةٌ", "سَيَّارَةٍ", "سَيَّارَةً", "سَيَّارَاتٍ", "سَيَّارَتَانِ", "سَيَّارَتَيْنِ", "Auto", "Autos"],
    ["مَجَلَّةٌ", "مَجَلَّةٍ", "مَجَلَّةً", "مَجَلَّاتٍ", "مَجَلَّتَانِ", "مَجَلَّتَيْنِ", "Zeitschrift", "Zeitschriften"],
    ["سَاعَةٌ", "سَاعَةٍ", "سَاعَةً", "سَاعَاتٍ", "سَاعَتَانِ", "سَاعَتَيْنِ", "Uhr", "Uhren"]
  ];
  // 3–10 als Muḍāf (Nominativ): [mit männlichem Gezählten, mit weiblichem Gezählten]
  var U = { 3: ["ثَلَاثَةُ", "ثَلَاثُ"], 4: ["أَرْبَعَةُ", "أَرْبَعُ"], 5: ["خَمْسَةُ", "خَمْسُ"], 6: ["سِتَّةُ", "سِتُّ"], 7: ["سَبْعَةُ", "سَبْعُ"],
    8: ["ثَمَانِيَةُ", "ثَمَانِي"], 9: ["تِسْعَةُ", "تِسْعُ"], 10: ["عَشَرَةُ", "عَشْرُ"] };
  // 11–19 (mabnī)
  var TEEN = { 11: ["أَحَدَ عَشَرَ", "إِحْدَى عَشْرَةَ"], 12: ["اثْنَا عَشَرَ", "اثْنَتَا عَشْرَةَ"], 13: ["ثَلَاثَةَ عَشَرَ", "ثَلَاثَ عَشْرَةَ"],
    14: ["أَرْبَعَةَ عَشَرَ", "أَرْبَعَ عَشْرَةَ"], 15: ["خَمْسَةَ عَشَرَ", "خَمْسَ عَشْرَةَ"], 16: ["سِتَّةَ عَشَرَ", "سِتَّ عَشْرَةَ"],
    17: ["سَبْعَةَ عَشَرَ", "سَبْعَ عَشْرَةَ"], 18: ["ثَمَانِيَةَ عَشَرَ", "ثَمَانِيَ عَشْرَةَ"], 19: ["تِسْعَةَ عَشَرَ", "تِسْعَ عَشْرَةَ"] };
  var TENS = { 20: ["عِشْرُونَ", "عِشْرِينَ"], 30: ["ثَلَاثُونَ", "ثَلَاثِينَ"], 40: ["أَرْبَعُونَ", "أَرْبَعِينَ"], 50: ["خَمْسُونَ", "خَمْسِينَ"],
    60: ["سِتُّونَ", "سِتِّينَ"], 70: ["سَبْعُونَ", "سَبْعِينَ"], 80: ["ثَمَانُونَ", "ثَمَانِينَ"], 90: ["تِسْعُونَ", "تِسْعِينَ"] };
  // Einer bei 21–29 (Nominativ mit Tanwīn)
  var ONE = { 1: ["وَاحِدٌ", "إِحْدَى"], 2: ["اثْنَانِ", "اثْنَتَانِ"], 3: ["ثَلَاثَةٌ", "ثَلَاثٌ"], 4: ["أَرْبَعَةٌ", "أَرْبَعٌ"], 5: ["خَمْسَةٌ", "خَمْسٌ"],
    6: ["سِتَّةٌ", "سِتٌّ"], 7: ["سَبْعَةٌ", "سَبْعٌ"], 8: ["ثَمَانِيَةٌ", "ثَمَانٍ"], 9: ["تِسْعَةٌ", "تِسْعٌ"] };
  // die Zahl allein (gezählt wird: eins, zwei, drei …)
  var CARD = { 1: "وَاحِدٌ", 2: "اثْنَانِ", 3: "ثَلَاثَةٌ", 4: "أَرْبَعَةٌ", 5: "خَمْسَةٌ", 6: "سِتَّةٌ", 7: "سَبْعَةٌ", 8: "ثَمَانِيَةٌ", 9: "تِسْعَةٌ", 10: "عَشَرَةٌ",
    11: "أَحَدَ عَشَرَ", 12: "اثْنَا عَشَرَ", 13: "ثَلَاثَةَ عَشَرَ", 14: "أَرْبَعَةَ عَشَرَ", 15: "خَمْسَةَ عَشَرَ", 16: "سِتَّةَ عَشَرَ", 17: "سَبْعَةَ عَشَرَ",
    18: "ثَمَانِيَةَ عَشَرَ", 19: "تِسْعَةَ عَشَرَ", 20: "عِشْرُونَ", 30: "ثَلَاثُونَ", 40: "أَرْبَعُونَ", 50: "خَمْسُونَ", 60: "سِتُّونَ", 70: "سَبْعُونَ",
    80: "ثَمَانُونَ", 90: "تِسْعُونَ", 100: "مِائَةٌ", 200: "مِائَتَانِ", 300: "ثَلَاثُمِائَةٍ", 1000: "أَلْفٌ", 2000: "أَلْفَانِ" };
  var ORD = [["الْأَوَّلُ", "الْأُولَى", "erste"], ["الثَّانِي", "الثَّانِيَةُ", "zweite"], ["الثَّالِثُ", "الثَّالِثَةُ", "dritte"], ["الرَّابِعُ", "الرَّابِعَةُ", "vierte"],
    ["الْخَامِسُ", "الْخَامِسَةُ", "fünfte"], ["السَّادِسُ", "السَّادِسَةُ", "sechste"], ["السَّابِعُ", "السَّابِعَةُ", "siebte"], ["الثَّامِنُ", "الثَّامِنَةُ", "achte"],
    ["التَّاسِعُ", "التَّاسِعَةُ", "neunte"], ["الْعَاشِرُ", "الْعَاشِرَةُ", "zehnte"]];

  function lessonOf(n, fem) {
    if (n <= 2) return "m18";
    if (n <= 10) return fem ? "m20" : "m19";
    if (n <= 19) return fem ? "b2-06" : "b2-03";
    if (n <= 30 && !(fem && n > 20 && n < 30)) return "b2-10";
    if (n < 100) return "b2-23";
    return "b2-24";
  }
  function lvlOf(n) { return n <= 10 ? 2 : 3; }
  /* the phrase „n × noun“ and three wrong ones (wrong gender of the number, wrong form of the noun) */
  function phrase(n, w, fem) {
    var g = fem ? 1 : 0, o = 1 - g;
    if (n === 1) return [w[0] + " " + (fem ? "وَاحِدَةٌ" : "وَاحِدٌ"), w[0] + " " + (fem ? "وَاحِدٌ" : "وَاحِدَةٌ"), (fem ? "وَاحِدَةُ " : "وَاحِدُ ") + w[1], w[4]];
    if (n === 2) return [w[4], w[5], (fem ? "اثْنَتَانِ " : "اثْنَانِ ") + w[3], w[0] + (fem ? " اثْنَانِ" : " اثْنَتَانِ")];
    if (n <= 10) return [U[n][g] + " " + w[3], U[n][o] + " " + w[3], U[n][g] + " " + w[1], U[n][o] + " " + w[1]];
    if (n <= 19) return [TEEN[n][g] + " " + w[2], TEEN[n][o] + " " + w[2], TEEN[n][g] + " " + w[3], TEEN[n][o] + " " + w[3]];
    if (n % 10 === 0 && n < 100) return [TENS[n][0] + " " + w[2], TENS[n][0] + " " + w[3], TENS[n][0] + " " + w[1], TENS[n][1] + " " + w[2]];
    if (n < 100) {
      var u = n % 10, t = n - u;
      return [ONE[u][g] + " وَ" + TENS[t][0] + " " + w[2], ONE[u][o] + " وَ" + TENS[t][0] + " " + w[2],
        ONE[u][g] + " وَ" + TENS[t][0] + " " + w[3], TENS[t][0] + " وَ" + ONE[u][g] + " " + w[2]];
    }
    if (n === 100) return ["مِائَةُ " + w[1], "مِائَةُ " + w[3], "مِائَةُ " + w[2], "مِائَةٌ " + w[0]];
    if (n === 200) return ["مِائَتَا " + w[1], "مِائَتَانِ " + w[1], "مِائَتَا " + w[3], "مِائَتَيْ " + w[1]];
    if (n === 300) return ["ثَلَاثُمِائَةِ " + w[1], "ثَلَاثَةُ مِائَةِ " + w[1], "ثَلَاثُمِائَةِ " + w[3], "ثَلَاثُمِائَةٍ " + w[2]];
    return ["أَلْفُ " + w[1], "أَلْفُ " + w[3], "أَلْفٌ " + w[2], "أَلْفَا " + w[1]];
  }
  function rule(n, fem) {
    if (n === 1) return "1: Das Nomen steht vorne, وَاحِدٌ / وَاحِدَةٌ folgt als Adjektiv und richtet sich nach dem Geschlecht.";
    if (n === 2) return "2: der Dual – im Nominativ auf ـَانِ (ـَيْنِ ist Akkusativ/Genitiv).";
    if (n <= 10) return "3–10: Die Zahl hat das umgekehrte Geschlecht (männliches Gezähltes → Zahl mit ة), das Gezählte steht im Plural und im Genitiv.";
    if (n <= 19) return "11–19: Das Gezählte steht im Singular und im Akkusativ; " + (n <= 12 ? "bei 11 und 12 stimmen beide Teile mit dem Gezählten überein." : "die Einer haben das umgekehrte Geschlecht, عَشَرَ / عَشْرَةَ stimmt überein.");
    if (n < 100 && n % 10 === 0) return "Zehner: gleich für männlich und weiblich, im Nominativ auf ـُونَ; das Gezählte steht im Singular und im Akkusativ.";
    if (n < 100) return "21–99: Einer + وَ + Zehner; der Einer folgt der Regel von 1–10 (" + (fem ? "weiblich: إِحْدَى، اثْنَتَانِ، ثَلَاثٌ …" : "männlich: وَاحِدٌ، اثْنَانِ، ثَلَاثَةٌ …") + "), das Gezählte steht im Singular und im Akkusativ.";
    return "100, 200, 300, 1000: Die Zahl ist Muḍāf, das Gezählte steht im Singular und im Genitiv (مِائَةُ كِتَابٍ، مِائَتَا كِتَابٍ، ثَلَاثُمِائَةِ كِتَابٍ، أَلْفُ كِتَابٍ).";
  }
  function de(n, w) { return "Ich habe " + n + " " + (n === 1 ? w[6] : w[7]) + "."; }
  /* numbers that are easy to mix up with n: same digit in another place */
  function confuse(n, pool) {
    var u = n % 10 || n / 10 % 10 || 1, cand = [u, 10 + u, 10 * u, 20 + u, 100 * u, n + 1, n - 1, n + 10];
    return cand.filter(function (x, i) { return x !== n && x > 0 && pool.indexOf(x) !== -1 && cand.indexOf(x) === i; });
  }

  window.MADINA_ZAHLEN = function () {
    var out = [];
    var NS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 27, 29, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 1000];
    NS.forEach(function (n, i) {
      [[M, false], [F, true]].forEach(function (gs) {
        var nouns = gs[0], fem = gs[1];
        if (n >= 20 && n % 10 === 0 && n < 100 && fem && n !== 20 && n !== 30) return;   // Zehner: einmal genügt
        [nouns[i % nouns.length], nouns[(i + 3) % nouns.length]].forEach(function (w, k) {
          var forms = phrase(n, w, fem), right = forms[0];
          var seen = {}, opts = forms.filter(function (x) { if (seen[x]) return false; seen[x] = 1; return true; });
          if (opts.length < 4) return;
          var base = { lesson: lessonOf(n, fem), lvl: lvlOf(n) };
          /* build: German → Arabic */
          out.push(Object.assign({ key: "b|" + n + "|" + w[0], q: "Wie sagt man auf Arabisch: „" + de(n, w) + "“",
            a: opts.map(function (x) { return "عِنْدِي " + x + "."; }), e: "عِنْدِي " + right + ". – " + rule(n, fem) }, base));
          /* read: Arabic → German, with numbers that look alike */
          if (k === 0 && n > 2) {
            var wrong = confuse(n, NS).slice(0, 3).map(function (m) { return de(m, w); });
            if (wrong.length === 3) out.push(Object.assign({ key: "r|" + n + "|" + w[0], q: "Was bedeutet dieser Satz?", ar: "عِنْدِي " + right + ".",
              a: [de(n, w)].concat(wrong), e: "عِنْدِي " + right + ". = " + de(n, w) }, base, { lvl: n <= 10 ? 1 : 2 }));
          }
        });
      });
    });
    /* the number alone, both ways */
    var CN = Object.keys(CARD).map(Number);
    CN.forEach(function (n) {
      var wrong = confuse(n, CN).slice(0, 3);
      if (wrong.length < 3) return;
      var base = { lesson: lessonOf(n, false), lvl: n <= 10 ? 1 : 2 };
      out.push(Object.assign({ key: "z|" + n, q: "Welche Zahl ist das?", ar: CARD[n], a: [String(n)].concat(wrong.map(String)), e: CARD[n] + " = " + n }, base));
      out.push(Object.assign({ key: "n|" + n, q: "Wie heißt die Zahl " + n + " auf Arabisch?", a: [CARD[n]].concat(wrong.map(function (m) { return CARD[m]; })), e: n + " = " + CARD[n] }, base));
    });
    /* ordinal numbers 1–10 (B2 L3): „der dritte Tag“, „das dritte Jahr“ */
    ORD.forEach(function (o, i) {
      var nx = ORD[(i + 1) % ORD.length];
      out.push({ key: "o|m|" + i, lesson: "b2-03", lvl: 2, q: "Wie heißt „der " + o[2] + " Tag“?",
        a: ["الْيَوْمُ " + o[0], "الْيَوْمُ " + o[1], "الْيَوْمُ " + nx[0], "يَوْمُ " + CARD[i + 1]],
        e: "الْيَوْمُ " + o[0] + " – Die Ordnungszahl ist ein Adjektiv: Sie steht nach dem Nomen und richtet sich nach Geschlecht und Bestimmtheit (" + o[0] + " / " + o[1] + ")." });
      out.push({ key: "o|f|" + i, lesson: "b2-03", lvl: 2, q: "Wie heißt „das " + o[2] + " Jahr“ (السَّنَةُ)?",
        a: ["السَّنَةُ " + o[1], "السَّنَةُ " + o[0], "السَّنَةُ " + nx[1], "سَنَةُ " + CARD[i + 1]],
        e: "السَّنَةُ " + o[1] + " – السَّنَةُ ist weiblich, deshalb die weibliche Ordnungszahl (" + o[1] + ")." });
    });
    return out;
  };
})();
