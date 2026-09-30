/* Gleich lange Iʿrāb-Antworten.
   Im Madina-Buch ist die richtige Iʿrāb-Antwort meist ein vollständiger Satz
   („خَبَرٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ …“), die falschen oft nur eine kurze Rolle („خَبَرٌ“).
   Dann erkennt man die richtige an der Länge. Hier werden die falschen Antworten im selben Stil
   vervollständigt (Kasus, Kasuszeichen, مَبْنِيٌّ, لَا مَحَلَّ لَهُ مِنَ الْإِعْرَابِ). Die richtige Antwort
   ist dabei gleich oft die längste, zweit-, drittlängste oder kürzeste (siehe IRAB_OPTIONS unten). Rolle und Kasus der falschen
   Antwort bleiben unverändert, so passen auch die Gründe in arabisch/warum.js weiter.
   window.IRAB_OPTIONS(a, key) → neues Array (a[0] bleibt die richtige Antwort). */
(function () {
  "use strict";
  function plain(s) { return String(s).replace(/[ً-ْٰـ]/g, "").replace(/[إأآ]/g, "ا"); }
  function len(s) { return plain(s).length; }
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

  // bloße Rolle → Kasus, der dazugehört
  var ROLE_CASE = {
    "خبر": "مَرْفُوعٌ", "مبتدا": "مَرْفُوعٌ", "فاعل": "مَرْفُوعٌ", "مفعول به": "مَنْصُوبٌ", "مضاف اليه": "مَجْرُورٌ",
    "حال": "مَنْصُوبٌ", "تمييز": "مَنْصُوبٌ", "ظرف": "مَنْصُوبٌ", "مبتدا ثان": "مَرْفُوعٌ", "مفعول به ثان": "مَنْصُوبٌ",
    "فاعل ثان": "مَرْفُوعٌ", "خبر مقدم": "مَرْفُوعٌ", "اسم كان": "مَرْفُوعٌ", "خبر كان": "مَنْصُوبٌ", "خبر ان": "مَرْفُوعٌ",
    "خبر لكن": "مَرْفُوعٌ", "اسم ان": "مَنْصُوبٌ", "بدل": "مَرْفُوعٌ", "نعت": "مَرْفُوعٌ"
  };
  var SIGN = {
    "مرفوع": { short: "بِالضَّمَّةِ", noun: "رَفْعِهِ", mark: "الضَّمَّةُ", vis: "الظَّاهِرَةُ", visG: "الظَّاهِرَةِ" },
    "منصوب": { short: "بِالْفَتْحَةِ", noun: "نَصْبِهِ", mark: "الْفَتْحَةُ", vis: "الظَّاهِرَةُ", visG: "الظَّاهِرَةِ" },
    "مجرور": { short: "بِالْكَسْرَةِ", noun: "جَرِّهِ", mark: "الْكَسْرَةُ", vis: "الظَّاهِرَةُ", visG: "الظَّاهِرَةِ" },
    "مجزوم": { short: "بِالسُّكُونِ", noun: "جَزْمِهِ", mark: "السُّكُونُ", vis: "الظَّاهِرُ", visG: "الظَّاهِرِ" }
  };
  var NO_MAHALL = " لَا مَحَلَّ لَهُ مِنَ الْإِعْرَابِ";

  // Varianten einer falschen Antwort, kurz bis lang
  function variants(d, right) {
    var p = plain(d), pr = plain(right), out = [d];
    if (/،/.test(p) || /^ال/.test(p)) return out;                 // zusammengesetzte Antworten bleiben
    if (/علامة/.test(p)) {                                         // „… وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ“ → „… الظَّاهِرَةُ عَلَى آخِرِهِ“
      if (/(الضمة|الفتحة|الكسرة)$/.test(p)) { out.push(d + " الظَّاهِرَةُ"); out.push(d + " الظَّاهِرَةُ عَلَى آخِرِهِ"); }
      return out;
    }
    return withFail(variantsCore(d, p, pr), p, pr);
  }
  /* Verb als falsche Antwort: zusätzlich „، وَالْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ تَقْدِيرُهُ هُوَ“ – nur wenn das sicher
     falsch bleibt: die Antwort unterscheidet sich schon in Art oder Kasus von der richtigen, oder die richtige
     nennt ausdrücklich einen anderen Fāʿil (ein Pronomen nach dem Komma) und keinen verborgenen. */
  function withFail(out, p, pr) {
    if (!/^فعل/.test(p) || /مستتر/.test(pr)) return out;
    var differs = pr.indexOf(p) !== 0, explicit = /،.*فاعل/.test(pr);
    if (!differs && !explicit) return out;
    var who = /^فعل امر/.test(p) ? "أَنْتَ" : "هُوَ", more = [];
    out.forEach(function (v) { more.push(v + "، وَالْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ تَقْدِيرُهُ " + who); });
    if (!differs && out.length === 1) {                         // „فعل ماض“ als Teil der richtigen Antwort
      var bin = /^فعل امر/.test(p) ? "السُّكُونِ" : /^فعل ماض/.test(p) ? "الْفَتْحِ" : "";
      if (bin) more.push(out[0] + " مَبْنِيٌّ عَلَى " + bin + "، وَالْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ تَقْدِيرُهُ " + who);
    }
    return out.concat(more);
  }
  function variantsCore(d, p, pr) {
    var out = [d];
    var base = d;
    // bloße Rolle: Kasus ergänzen – aber nie so, dass sie zur richtigen Antwort wird
    if (ROLE_CASE[p] && pr.indexOf(p + " " + plain(ROLE_CASE[p])) !== 0) { base = d + " " + ROLE_CASE[p]; out.push(base); }
    var pb = plain(base), cm = /(مرفوع|منصوب|مجرور|مجزوم)/.exec(pb);
    if (cm) {
      var s = SIGN[cm[1]], hasSign = / ب(ال|ثبوت|حذف|فتحة|كسرة|ضمة)|بال/.test(pb.slice(pb.indexOf(cm[1])));
      if (!hasSign) {
        if (!/ ب/.test(pb.slice(pb.indexOf(cm[1])))) out.push(base + " " + s.short);   // nicht nach „بِحَرْفِ الْجَرِّ“, „بِمِنْ“ …
        out.push(base + " وَعَلَامَةُ " + s.noun + " " + s.mark + " " + s.vis);
        out.push(base + " وَعَلَامَةُ " + s.noun + " " + s.mark + " " + s.vis + " عَلَى آخِرِهِ");
      } else if (new RegExp(plain(s.short) + "$").test(pb)) {
        out.push(base + " " + s.visG);
        out.push(base.replace(new RegExp(s.short + "$"), "وَعَلَامَةُ " + s.noun + " " + s.mark + " " + s.vis + " عَلَى آخِرِهِ"));
      }
      return out;
    }
    if (/^فعل ماض$/.test(p) && pr.indexOf("فعل ماض") < 0) { out.push(d + " مَبْنِيٌّ عَلَى الْفَتْحِ"); out.push(d + " مَبْنِيٌّ عَلَى الْفَتْحِ" + NO_MAHALL); }
    else if (/^فعل امر$/.test(p) && pr.indexOf("فعل امر") < 0) { out.push(d + " مَبْنِيٌّ عَلَى السُّكُونِ"); out.push(d + " مَبْنِيٌّ عَلَى السُّكُونِ" + NO_MAHALL); }
    else if (/^(حرف|لا ال)/.test(p) && p.indexOf("محل") < 0) { out.push(d + " مَبْنِيٌّ"); out.push(d + NO_MAHALL); out.push(d + " مَبْنِيٌّ" + NO_MAHALL); }
    else if (/^(اسم استفهام|اسم موصول|ضمير|اسم اشارة|اسم فعل)$/.test(p)) { out.push(d + " مَبْنِيٌّ"); out.push(d + " مَبْنِيٌّ عَلَى السُّكُونِ"); }
    return out;
  }

  /* Rang der richtigen Antwort nach Länge (0 = längste … 3 = kürzeste) gleichmäßig verteilen:
     Je Frage wird der machbare Bereich bestimmt (manche falsche Antworten sind immer länger oder
     lassen sich nicht verlängern). Aus diesem Bereich bekommt die Frage den bisher seltensten Rang,
     bei Gleichstand nach Hash. Die falschen Antworten werden dann passend länger oder kürzer gewählt.
     Ergebnisse werden je Frage gemerkt, damit sie beim Neuaufbau (z. B. Sprachwechsel) gleich bleiben. */
  var used = [0, 0, 0, 0], memo = {};
  function closest(list, target) {
    var best = list[0];
    list.forEach(function (v) { if (Math.abs(len(v) - target) < Math.abs(len(best) - target)) best = v; });
    return best;
  }
  window.IRAB_OPTIONS = function (a, key) {
    if (!a || a.length < 2) return a;
    if (memo[key]) return memo[key];
    var right = a[0], rl = len(right), h = hash(key);
    var ds = a.slice(1).map(function (d) {
      var vs = variants(d, right).filter(function (v) { return plain(v) !== plain(right); });
      return { d: d, long: vs.filter(function (v) { return len(v) > rl; }), short: vs.filter(function (v) { return len(v) <= rl; }) };
    });
    var must = ds.filter(function (x) { return !x.short.length; }).length, can = ds.filter(function (x) { return x.long.length; }).length;
    var n = ds.length, lo = must, hi = can, rank = lo;
    for (var r = lo; r <= hi; r++) {
      var cr = used[Math.min(r, 3)], cb = used[Math.min(rank, 3)];
      if (cr < cb || (cr === cb && (h >> r) & 1)) rank = r;
    }
    used[Math.min(rank, 3)]++;
    // welche falschen Antworten werden die längeren? zuerst die, die nicht kürzer können, dann nach Hash
    var order = ds.map(function (x, i) { return i; }).sort(function (i, j) {
      var fi = ds[i].short.length ? 1 : 0, fj = ds[j].short.length ? 1 : 0;
      if (fi !== fj) return fi - fj;
      var li = ds[i].long.length ? 0 : 1, lj = ds[j].long.length ? 0 : 1;
      if (li !== lj) return li - lj;
      return hash(key + "|" + i) - hash(key + "|" + j);
    });
    var longSet = {};
    order.slice(0, rank).forEach(function (i) { longSet[i] = 1; });
    var out = [right].concat(ds.map(function (x, i) {
      var f = 1 + ((hash(key + "#" + i) % 5) - 2) * 0.06;          // etwas Streuung
      return longSet[i] ? closest(x.long, rl * 1.2 * f) : closest(x.short, rl * 0.85 * f);
    }));
    memo[key] = out;
    return out;
  };
  window.IRAB_OPTIONS.stats = function () { return used.slice(); };
})();
