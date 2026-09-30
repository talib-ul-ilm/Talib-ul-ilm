/* Gleich lange Iʿrāb-Antworten.
   Im Madina-Buch ist die richtige Iʿrāb-Antwort meist ein vollständiger Satz
   („خَبَرٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ …“), die falschen oft nur eine kurze Rolle („خَبَرٌ“).
   Dann erkennt man die richtige an der Länge. Hier werden die falschen Antworten im selben Stil
   vervollständigt (Kasus, Kasuszeichen, مَبْنِيٌّ, لَا مَحَلَّ لَهُ مِنَ الْإِعْرَابِ). Je Frage und Antwort
   wird fest (über einen Hash) eine Ziellänge um die Länge der richtigen Antwort gewählt, so dass die
   richtige mal die längste, mal eine mittlere, mal die kürzeste ist. Rolle und Kasus der falschen
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
    if (/،|علامة/.test(p) || /^ال/.test(p)) return out;           // zusammengesetzte Antworten bleiben
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

  var FACTORS = [0.8, 0.95, 1.1, 1.25, 1.4];
  window.IRAB_OPTIONS = function (a, key) {
    if (!a || a.length < 2) return a;
    var right = a[0], rl = len(right);
    return [right].concat(a.slice(1).map(function (d, j) {
      var vs = variants(d, right).filter(function (v) { return plain(v) !== plain(right); });
      if (vs.length < 2) return d;
      var target = rl * FACTORS[hash(key + "|" + j) % FACTORS.length], best = vs[0];
      vs.forEach(function (v) { if (Math.abs(len(v) - target) < Math.abs(len(best) - target)) best = v; });
      return best;
    }));
  };
})();
