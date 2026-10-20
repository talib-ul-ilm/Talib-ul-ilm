/* Mehr Übungen je Regel, Madina-Buch 2 – damit nach jeder Regelkarte genug Aufgaben kommen.
   R(Lektion, Regel, [...]) hängt die Aufgaben an window.MADINA_PLUS und gibt jeder r = Index der Regel
   (arabic.js setzt damit q._rule fest, statt die Regel zu raten). Format sonst wie grammatik-ueben2.js. */
(function (P) {
  var ARAB = /[\u0600-\u06FF]/, DO = /^(Übersetze|Frag|Antworte|Verbinde|Mach|Setz|Ersetze|Bilde|Verneine|Stell|Sag)/;
  function R(id, r, list) { list.forEach(function (q) { q.r = r; }); P[id] = (P[id] || []).concat(list); }
  /* k = der Übungssatz, Teil der Kennung (viele Aufgaben haben denselben Fragetext) */
  function E(ar, a, e, w) {
    var m = ar.match(/^(.*?)\s*\(([^()]*[A-Za-zÄÖÜäöüß][^()]*)\)$/);
    return { q: m ? "Setze ein – „" + m[2] + "“:" : "Setze ein: Was gehört in die Lücke?", ar: m ? m[1] : ar, a: a, e: e, w: w, k: ar };
  }
  function U(was, x, a, e, w) {
    var head = DO.test(was) ? was : "Forme um – " + was;
    return ARAB.test(x) ? { q: head + ":", ar: x, a: a, e: e, w: w, k: x } : { q: head + ": „" + x + "“", a: a, e: e, w: w };
  }
  function F(q, ar, a, e, w) { return { q: q, ar: ar || undefined, a: a, e: e, w: w, k: ar || undefined }; }

/* ---------- Lektion 1 ---------- */

/* ---------- Lektion 1 ---------- */
R("b2-01", 0, [
  F("Was für ein Satz ist الْكِتَابُ سَهْلٌ?", "الْكِتَابُ سَهْلٌ", ["Nominalsatz (جُمْلَةٌ اسْمِيَّةٌ)", "Verbalsatz (جُمْلَةٌ فِعْلِيَّةٌ)", "kein Satz", "Fragesatz"], "Er beginnt mit einem Nomen.", ["Kein Verb am Anfang.", "Mubtadaʾ + Khabar = Satz.", "Kein Fragewort."]),
  F("Was für ein Satz ist ذَهَبَ الطَّالِبُ?", "ذَهَبَ الطَّالِبُ", ["Verbalsatz", "Nominalsatz", "kein Satz", "Iḍāfa"], "Beginnt mit einem Verb.", ["Beginnt mit einem Verb.", "Verb + Fāʿil = Satz.", "Keine Iḍāfa."]),
  F("Was für ein Satz ist هَذَا قَلَمٌ?", "هَذَا قَلَمٌ", ["Nominalsatz", "Verbalsatz", "kein Satz", "Iḍāfa"], "هَذَا ist ein Nomen (Demonstrativ).", ["Kein Verb.", "Mubtadaʾ + Khabar.", "Keine Iḍāfa."]),
  F("Was ist in الْبَيْتُ كَبِيرٌ die Mubtadaʾ?", "الْبَيْتُ كَبِيرٌ", ["الْبَيْتُ", "كَبِيرٌ", "beides", "keine"], "Der erste Teil des Nominalsatzes.", ["Das ist die Khabar.", "Nur eins.", "Es gibt eine."]),
  F("Was ist in الْمُدَرِّسُ فِي الْفَصْلِ die Khabar?", "الْمُدَرِّسُ فِي الْفَصْلِ", ["فِي الْفَصْلِ", "الْمُدَرِّسُ", "فِي", "الْفَصْلِ allein"], "Die Präpositionalgruppe ist die Khabar.", ["Das ist die Mubtadaʾ.", "Die ganze Gruppe.", "Die ganze Gruppe."]),
  F("Welcher Satz ist ein Verbalsatz?", "", ["جَلَسَ الْإِمَامُ.", "الْإِمَامُ جَالِسٌ.", "هَذَا إِمَامٌ.", "الْإِمَامُ فِي الْمَسْجِدِ."], "Beginnt mit einem Verb.", ["Nominalsatz.", "Nominalsatz.", "Nominalsatz."]),
  F("Welcher Satz ist ein Nominalsatz?", "", ["الطَّالِبُ خَرَجَ.", "خَرَجَ الطَّالِبُ.", "ذَهَبَ بِلَالٌ.", "رَجَعَ الْمُدِيرُ."], "Beginnt mit einem Nomen (الطَّالِبُ).", ["Verbalsatz.", "Verbalsatz.", "Verbalsatz."]),
  U("Mach daraus einen Verbalsatz", "حَامِدٌ خَرَجَ.", ["خَرَجَ حَامِدٌ.", "خَرَجَ حَامِدًا.", "حَامِدٌ خَرَجَ حَامِدٌ.", "خَرَجُوا حَامِدٌ."], "Verb nach vorne.", ["Fāʿil marfūʿ.", "Doppelt.", "Singular."]),
  F("Wie heißen die zwei Teile des Nominalsatzes?", "", ["الْمُبْتَدَأُ وَالْخَبَرُ", "الْفِعْلُ وَالْفَاعِلُ", "الْمُضَافُ وَالْمُضَافُ إِلَيْهِ", "النَّعْتُ وَالْمَنْعُوتُ"], "Mubtadaʾ und Khabar.", ["Das ist der Verbalsatz.", "Das ist die Iḍāfa.", "Das ist das Adjektiv."])
]);
R("b2-01", 1, [
  E("إِنَّ ____ قَرِيبٌ.", ["الْمَسْجِدَ", "الْمَسْجِدُ", "الْمَسْجِدِ", "مَسْجِدٌ"], "Ism von إِنَّ → manṣūb.", ["Nominativ.", "Genitiv.", "Nominativ."]),
  F("Wie heißt die Mubtadaʾ nach إِنَّ?", "", ["اسْمُ إِنَّ", "خَبَرُ إِنَّ", "فَاعِلٌ", "مَفْعُولٌ بِهِ"], "Ism inna (manṣūb).", ["Das ist die Khabar.", "Kein Verb.", "Kein Verb."]),
  U("Setz إِنَّ davor", "الطَّالِبَةُ مُجْتَهِدَةٌ.", ["إِنَّ الطَّالِبَةَ مُجْتَهِدَةٌ.", "إِنَّ الطَّالِبَةُ مُجْتَهِدَةٌ.", "إِنَّ الطَّالِبَةَ مُجْتَهِدَةً.", "إِنَّ الطَّالِبَةِ مُجْتَهِدَةٌ."], "Ism manṣūb, Khabar marfūʿ.", ["Ism manṣūb.", "Khabar marfūʿ.", "Kein Genitiv."])
]);
R("b2-01", 2, [
  U("Setz إِنَّ davor", "هُوَ مُدَرِّسٌ.", ["إِنَّهُ مُدَرِّسٌ.", "إِنَّ هُوَ مُدَرِّسٌ.", "إِنَّهُ مُدَرِّسًا.", "إِنَّهَا مُدَرِّسٌ."], "هُوَ → ـهُ.", ["Kein selbstständiges Pronomen.", "Khabar marfūʿ.", "Weiblich."]),
  U("Setz إِنَّ davor", "نَحْنُ مُسْلِمُونَ.", ["إِنَّنَا مُسْلِمُونَ.", "إِنَّ نَحْنُ مُسْلِمُونَ.", "إِنَّنَا مُسْلِمِينَ.", "إِنَّهُمْ مُسْلِمُونَ."], "نَحْنُ → إِنَّنَا (oder إِنَّا).", ["Kein selbstständiges Pronomen.", "Khabar marfūʿ.", "„sie“."]),
  U("Setz إِنَّ davor", "بِلَالٌ مَرِيضٌ.", ["إِنَّ بِلَالًا مَرِيضٌ.", "إِنَّ بِلَالٌ مَرِيضٌ.", "إِنَّ بِلَالَ مَرِيضٌ.", "إِنَّ بِلَالًا مَرِيضًا."], "Zwei Ḍammas → zwei Fatḥas.", ["Ism manṣūb.", "Tanwīn bleibt.", "Khabar marfūʿ."])
]);
R("b2-01", 3, [
  E("لَعَلَّ ____ فِي بَيْتِهِ. (Hoffentlich ist der Direktor …)", ["الْمُدِيرَ", "الْمُدِيرُ", "الْمُدِيرِ", "مُدِيرٌ"], "لَعَلَّ → Ism manṣūb.", ["Nominativ.", "Genitiv.", "Nominativ."]),
  E("لَعَلَّ ____ نَاجِحٌ. (Hoffentlich hat Ḥāmid bestanden.)", ["حَامِدًا", "حَامِدٌ", "حَامِدٍ", "حَامِدُ"], "manṣūb mit Tanwīn.", ["Nominativ.", "Genitiv.", "Tanwīn."]),
  E("لَعَلَّ____ بِخَيْرٍ. (Hoffentlich geht es dir gut.)", ["كَ", "أَنْتَ", "كُ", "هُوَ"], "Pronomen angehängt: لَعَلَّكَ.", ["Kein selbstständiges Pronomen.", "Falsch.", "Kein selbstständiges Pronomen."]),
  U("Setz لَعَلَّ davor", "الْجَوُّ جَمِيلٌ.", ["لَعَلَّ الْجَوَّ جَمِيلٌ.", "لَعَلَّ الْجَوُّ جَمِيلٌ.", "لَعَلَّ الْجَوَّ جَمِيلًا.", "لَعَلَّ الْجَوِّ جَمِيلٌ."], "Wie إِنَّ.", ["Ism manṣūb.", "Khabar marfūʿ.", "Kein Genitiv."]),
  F("Was drückt لَعَلَّ aus?", "", ["Hoffnung oder Befürchtung", "Nachdruck („wahrlich“)", "Verneinung", "Frage"], "„Ich hoffe … / vielleicht …“.", ["Das ist إِنَّ.", "Das ist لَيْسَ.", "Das ist أَ/هَلْ."]),
  F("Was ist لَعَلَّ grammatisch?", "", ["eine Schwester von إِنَّ", "eine Schwester von كَانَ", "ein Verb", "ein Fragewort"], "Es verhält sich wie إِنَّ.", ["كَانَ macht die Khabar manṣūb.", "Kein Verb.", "Kein Fragewort."])
]);
R("b2-01", 4, [
  E("هُوَ رَجُلٌ ذُو ____. (reich)", ["مَالٍ", "مَالٌ", "مَالًا", "الْمَالُ"], "Nach ذُو majrūr.", ["Nominativ.", "Akkusativ.", "Nominativ."]),
  E("هُمْ رِجَالٌ ____ عِلْمٍ.", ["ذَوُو", "ذُو", "ذَاتُ", "ذَوَاتُ"], "Plural m. = ذَوُو.", ["Singular.", "Feminin.", "Feminin Plural."]),
  E("هُنَّ نِسَاءٌ ____ خُلُقٍ.", ["ذَوَاتُ", "ذَوُو", "ذَاتُ", "ذُو"], "Plural f. = ذَوَاتُ.", ["Maskulin.", "Singular.", "Singular."]),
  F("Was heißt ذُو عِلْمٍ?", "ذُو عِلْمٍ", ["gebildet (Besitzer von Wissen)", "Wissen", "der Wissende ist", "ohne Wissen"], "ذُو = besitzend.", ["ذُو fehlt in der Übersetzung.", "Kein Satz.", "Gegenteil."])
]);
R("b2-01", 5, [
  E("أَفِي الْبَيْتِ أَنْتَ ____ فِي الْمَسْجِدِ؟", ["أَمْ", "أَوْ", "وَ", "لَا"], "Frage mit أَ → أَمْ.", ["أَوْ außerhalb von Fragen.", "„und“.", "„nein“."]),
  E("اشْرَبْ مَاءً ____ لَبَنًا.", ["أَوْ", "أَمْ", "لَكِنَّ", "لَعَلَّ"], "Kein Fragesatz → أَوْ.", ["Nur in Fragen.", "„aber“.", "„hoffentlich“."]),
  U("Frag mit „oder“", "أَنْتَ مِنَ الْهِنْدِ أَوْ مِنْ بَاكِسْتَانَ.", ["أَمِنَ الْهِنْدِ أَنْتَ أَمْ مِنْ بَاكِسْتَانَ؟", "أَأَنْتَ مِنَ الْهِنْدِ أَوْ مِنْ بَاكِسْتَانَ؟", "مِنَ الْهِنْدِ أَنْتَ أَمْ مِنْ بَاكِسْتَانَ.", "أَمِنَ الْهِنْدِ أَنْتَ أَوْ مِنْ بَاكِسْتَانَ؟"], "أَ vor das erste Gefragte, أَمْ vor das zweite.", ["In der Frage أَمْ.", "Es fehlt das أَ und das Fragezeichen.", "In der Frage أَمْ."]),
  F("Wo steht das أَ in einer Frage mit أَمْ?", "أَطَبِيبٌ أَنْتَ أَمْ مُهَنْدِسٌ؟", ["direkt vor dem ersten Gefragten", "immer am Satzende", "vor أَمْ", "vor dem Verb"], "أَ steht vor dem einen, أَمْ vor dem anderen.", ["Nicht am Ende.", "Nicht vor أَمْ.", "Nicht unbedingt."])
]);
R("b2-01", 6, [
  E("فِي الْمَدْرَسَةِ أَلْفُ ____.", ["طَالِبٍ", "طُلَّابٍ", "طَالِبًا", "طَالِبٌ"], "Nach أَلْفٌ: Singular majrūr.", ["Singular.", "majrūr.", "majrūr."]),
  E("عِنْدِي مِائَةُ ____.", ["رُوبِيَّةٍ", "رُوبِيَّاتٍ", "رُوبِيَّةً", "رُوبِيَّةٌ"], "Singular majrūr – auch bei Weiblichem gleiche Zahl.", ["Singular.", "majrūr.", "majrūr."]),
  F("Wie spricht man مِائَةٌ?", "مِائَةٌ", ["mi-ʾatun (das Alif wird nicht gesprochen)", "māʾatun", "miʾātun", "maʾatun"], "Das Alif ist stumm.", ["Kein langes ā.", "Kein langes ā.", "Falscher Vokal."]),
  E("فِي هَذَا الْكِتَابِ ____ صَفْحَةٍ. (100 Seiten)", ["مِائَةُ", "مِائَتُ", "مِائَةٌ", "مِئَاتُ"], "مِائَةُ als Muḍāf.", ["Falsch geschrieben.", "Muḍāf → kein Tanwīn.", "Plural."]),
  F("Welche Zahl ist für männliches und weibliches Gezähltes gleich?", "", ["أَلْفٌ", "ثَلَاثَةٌ", "خَمْسَةٌ", "عَشَرَةٌ"], "مِائَةٌ und أَلْفٌ ändern sich nicht.", ["3–10 wechseln.", "3–10 wechseln.", "3–10 wechseln."]),
  U("Übersetze ins Arabische", "Ich habe tausend Dollar.", ["عِنْدِي أَلْفُ دُولَارٍ.", "عِنْدِي أَلْفُ دُولَارَاتٍ.", "عِنْدِي أَلْفٌ دُولَارٌ.", "عِنْدِي أَلْفُ دُولَارًا."], "Singular majrūr.", ["Singular.", "Iḍāfa.", "majrūr."]),
  U("Übersetze ins Arabische", "hundert Studentinnen", ["مِائَةُ طَالِبَةٍ", "مِائَةُ طَالِبَاتٍ", "مِائَتَا طَالِبَةٍ", "مِائَةُ طَالِبَةً"], "Singular majrūr.", ["Singular.", "Das ist 200.", "majrūr."])
]);
R("b2-01", 7, [
  E("هَذَا الْقَمِيصُ ____. (teuer)", ["غَالٍ", "غَالِيٌ", "غَالِي", "غَالٌ"], "غَالٍ = غَالِيٌ (marfūʿ).", ["Das ي fällt weg.", "Tanwīn fehlt.", "Kasra fehlt."]),
  E("أَبِي ____. (Mein Vater ist Richter.)", ["قَاضٍ", "قَاضِيٌ", "قَاضٌ", "قَاضِي"], "قَاضٍ.", ["Das ي fällt weg.", "Kasra fehlt.", "Tanwīn fehlt."]),
  E("أَخِي ____. (Mein Bruder ist Anwalt.)", ["مُحَامٍ", "مُحَامِيٌ", "مُحَامٌ", "مُحَامِي"], "مُحَامٍ.", ["Das ي fällt weg.", "Kasra fehlt.", "Tanwīn fehlt."]),
  F("In welchem Fall steht غَالٍ in هَذَا غَالٍ?", "هَذَا غَالٍ", ["Nominativ (marfūʿ) – trotz des Kasra-Tanwīn", "Genitiv", "Akkusativ", "unveränderlich"], "Das -in kommt vom weggefallenen ي.", ["Es ist Khabar.", "Kein Akkusativ.", "Es wird dekliniert."]),
  F("Woraus ist وَادٍ entstanden?", "وَادٍ", ["وَادِيٌ", "وَادٌّ", "وُدٌّ", "وَادِيَةٌ"], "Das ي mit Ḍamma fällt weg.", ["Falsch.", "Falsch.", "Falsch."]),
  U("Übersetze ins Arabische", "Das Buch ist teuer.", ["الْكِتَابُ غَالٍ.", "الْكِتَابُ غَالِيٌ.", "الْكِتَابُ الْغَالِي.", "الْكِتَابُ غَالِيَةٌ."], "غَالٍ.", ["Das ي fällt weg.", "Kein Satz.", "Weiblich."])
]);

/* ---------- Lektion 2 ---------- */
R("b2-02", 0, [
  E("لَيْسَ الطَّالِبُ ____. (nicht faul)", ["بِكَسْلَانَ", "كَسْلَانُ", "بِكَسْلَانٍ", "كَسْلَانٌ"], "بِـ + majrūr; Diptoton → Fatḥa.", ["Mit بِـ oder Akkusativ.", "Diptoton: kein Tanwīn.", "Kein Tanwīn, Nominativ falsch."]),
  E("لَيْسَ الْمَاءُ ____.", ["بِبَارِدٍ", "بَارِدٌ", "بِبَارِدٌ", "الْبَارِدُ"], "بِـ + majrūr.", ["Nicht marfūʿ.", "Nach بِـ Genitiv.", "Kein al."]),
  U("Verneine mit لَيْسَ", "الْمُعْجَمُ جَدِيدٌ.", ["لَيْسَ الْمُعْجَمُ بِجَدِيدٍ.", "لَيْسَ الْمُعْجَمُ جَدِيدٌ.", "لَيْسَتِ الْمُعْجَمُ بِجَدِيدٍ.", "لَيْسَ الْمُعْجَمَ بِجَدِيدٍ."], "لَيْسَ + Ism marfūʿ + بِـ.", ["بِـ fehlt.", "Maskulin.", "Ism marfūʿ."])
]);
R("b2-02", 1, [
  F("Wie heißt in لَيْسَ الْبَيْتُ بِجَدِيدٍ das Wort الْبَيْتُ?", "لَيْسَ الْبَيْتُ بِجَدِيدٍ", ["اسْمُ لَيْسَ", "خَبَرُ لَيْسَ", "فَاعِلٌ", "مَفْعُولٌ بِهِ"], "Die frühere Mubtadaʾ = ismu laisa.", ["Das ist بِجَدِيدٍ.", "Kein Verb im eigentlichen Sinn.", "Kein Objekt."]),
  F("Wie heißt in لَيْسَ الْبَيْتُ بِجَدِيدٍ das Wort بِجَدِيدٍ?", "لَيْسَ الْبَيْتُ بِجَدِيدٍ", ["خَبَرُ لَيْسَ", "اسْمُ لَيْسَ", "مُضَافٌ إِلَيْهِ", "نَعْتٌ"], "Die frühere Khabar.", ["Das ist الْبَيْتُ.", "Keine Iḍāfa.", "Kein Adjektiv zum Nomen."]),
  F("In welchem Fall steht der ismu laisa?", "", ["marfūʿ", "manṣūb", "majrūr", "majzūm"], "Wie die Mubtadaʾ: marfūʿ.", ["Das ist die Khabar ohne بِـ.", "Das ist die Khabar mit بِـ.", "Nur Verben."]),
  F("Was ist bei إِنَّ manṣūb – und was bei لَيْسَ?", "", ["bei إِنَّ der Ism, bei لَيْسَ die Khabar", "bei beiden der Ism", "bei beiden die Khabar", "bei إِنَّ die Khabar, bei لَيْسَ der Ism"], "إِنَّ: Ism manṣūb; لَيْسَ: Khabar manṣūb (oder mit بِـ).", ["Bei لَيْسَ bleibt der Ism marfūʿ.", "Bei إِنَّ bleibt die Khabar marfūʿ.", "Genau vertauscht."]),
  E("لَيْسَ ____ بِغَبِيٍّ.", ["الطَّالِبُ", "الطَّالِبَ", "الطَّالِبِ", "بِالطَّالِبِ"], "ismu laisa → marfūʿ.", ["Nicht manṣūb.", "Nicht majrūr.", "بِـ nur vor der Khabar."]),
  U("Übersetze ins Arabische", "Der Lehrer ist nicht krank.", ["لَيْسَ الْمُدَرِّسُ بِمَرِيضٍ.", "لَيْسَ الْمُدَرِّسَ بِمَرِيضٍ.", "لَيْسَ الْمُدَرِّسُ مَرِيضٌ.", "لَيْسَ بِالْمُدَرِّسِ مَرِيضٌ."], "Ism marfūʿ + بِـ + Khabar.", ["Ism marfūʿ.", "بِـ fehlt.", "Vertauscht."])
]);
R("b2-02", 2, [
  E("____ الْبِنْتُ بِمَرِيضَةٍ.", ["لَيْسَتِ", "لَيْسَتْ", "لَيْسَ", "لَسْتِ"], "Feminin, vor al Kasra.", ["Vor al Kasra.", "Feminin.", "„du (w.)“."]),
  E("____ آمِنَةُ فِي الْبَيْتِ.", ["لَيْسَتْ", "لَيْسَتِ", "لَيْسَ", "لَسْتُ"], "Ohne al danach bleibt Sukūn.", ["Kasra nur vor al.", "Feminin.", "„ich“."]),
  U("Verneine", "الْغُرْفَةُ نَظِيفَةٌ.", ["لَيْسَتِ الْغُرْفَةُ بِنَظِيفَةٍ.", "لَيْسَ الْغُرْفَةُ بِنَظِيفَةٍ.", "لَيْسَتِ الْغُرْفَةُ بِنَظِيفٍ.", "لَيْسَتِ الْغُرْفَةَ بِنَظِيفَةٍ."], "Feminin.", ["Feminin.", "Khabar feminin.", "Ism marfūʿ."])
]);
R("b2-02", 3, [
  E("أَنْتَ ____ بِطَبِيبٍ.", ["لَسْتَ", "لَسْتُ", "لَيْسَ", "لَسْتِ"], "„du bist nicht“ = لَسْتَ.", ["„ich“.", "„er“.", "„du (w.)“."]),
  E("نَحْنُ ____ بِأَغْنِيَاءَ.", ["لَسْنَا", "لَيْسُوا", "لَسْتُمْ", "لَيْسَ"], "„wir sind nicht“ = لَسْنَا.", ["„sie“.", "„ihr“.", "„er“."]),
  U("Verneine", "أَنْتِ مُدَرِّسَةٌ.", ["لَسْتِ بِمُدَرِّسَةٍ.", "لَسْتَ بِمُدَرِّسَةٍ.", "لَيْسَتْ بِمُدَرِّسَةٍ.", "لَسْتِ مُدَرِّسَةٌ."], "„du (w.)“ = لَسْتِ.", ["Maskulin.", "„sie“.", "بِـ fehlt."])
]);
R("b2-02", 4, [
  E("لَسْتُ ____ مَكَّةَ. (nicht aus Mekka)", ["مِنْ", "بِمِنْ", "بِـ", "مِنَ"], "Präpositionalgruppe → kein بِـ.", ["Kein بِـ vor einer Präposition.", "Es fehlt مِنْ.", "مِنَ nur vor al."]),
  E("لَيْسَ الْكِتَابُ ____ الْمَكْتَبِ.", ["عَلَى", "بِعَلَى", "بِالْ", "بِـ"], "Kein بِـ vor عَلَى.", ["Kein بِـ.", "Falsch.", "Es fehlt die Präposition."]),
  U("Verneine", "الْمُدِيرُ فِي مَكْتَبِهِ.", ["لَيْسَ الْمُدِيرُ فِي مَكْتَبِهِ.", "لَيْسَ الْمُدِيرُ بِفِي مَكْتَبِهِ.", "لَيْسَ الْمُدِيرَ فِي مَكْتَبِهِ.", "لَسْتُ الْمُدِيرُ فِي مَكْتَبِهِ."], "Präpositionalgruppe bleibt.", ["Kein بِـ.", "Ism marfūʿ.", "„ich“."]),
  U("Verneine", "هِيَ مِنَ الْيَابَانِ.", ["لَيْسَتْ مِنَ الْيَابَانِ.", "لَيْسَتْ بِمِنَ الْيَابَانِ.", "لَيْسَ مِنَ الْيَابَانِ.", "لَسْتِ مِنَ الْيَابَانِ."], "Feminin, kein بِـ.", ["Kein بِـ.", "Feminin.", "„du (w.)“."]),
  U("Verneine", "نَحْنُ فِي الْفَصْلِ.", ["لَسْنَا فِي الْفَصْلِ.", "لَسْنَا بِفِي الْفَصْلِ.", "لَيْسَ نَحْنُ فِي الْفَصْلِ.", "لَسْتُمْ فِي الْفَصْلِ."], "لَسْنَا, kein بِـ.", ["Kein بِـ.", "Verbunden: لَسْنَا.", "„ihr“."]),
  F("Wann bekommt die khabaru laisa KEIN بِـ?", "", ["wenn sie eine Präpositionalgruppe ist", "wenn sie weiblich ist", "wenn sie ein Adjektiv ist", "wenn sie unbestimmt ist"], "لَسْتُ مِنَ الْهِنْدِ – nicht بِمِنَ.", ["Das Geschlecht spielt keine Rolle.", "Adjektive bekommen بِـ.", "Unbestimmte bekommen بِـ."]),
  U("Übersetze ins Arabische", "Das Buch ist nicht unter dem Tisch.", ["لَيْسَ الْكِتَابُ تَحْتَ الْمَكْتَبِ.", "لَيْسَ الْكِتَابُ بِتَحْتَ الْمَكْتَبِ.", "لَيْسَ الْكِتَابَ تَحْتَ الْمَكْتَبِ.", "لَيْسَتِ الْكِتَابُ تَحْتَ الْمَكْتَبِ."], "Ortsangabe ohne بِـ.", ["Kein بِـ.", "Ism marfūʿ.", "Maskulin."])
]);
R("b2-02", 5, [
  E("لَيْسَ عِنْدِي ____. (kein Geld)", ["مَالٌ", "مَالًا", "بِمَالٍ", "مَالٍ"], "مَالٌ ist ismu laisa → marfūʿ.", ["Ism marfūʿ.", "بِـ nur vor der Khabar.", "Nicht majrūr."]),
  E("إِنَّ عِنْدَهُ ____. (Er hat ein Auto.)", ["سَيَّارَةً", "سَيَّارَةٌ", "سَيَّارَةٍ", "بِسَيَّارَةٍ"], "سَيَّارَةً ist ismu inna → manṣūb.", ["Ism von إِنَّ manṣūb.", "Kein Genitiv.", "Kein بِـ."]),
  U("Verneine", "لَهُ أَوْلَادٌ.", ["لَيْسَ لَهُ أَوْلَادٌ.", "لَيْسَ لَهُ أَوْلَادًا.", "لَيْسَ لَهُ بِأَوْلَادٍ.", "لَسْتُ لَهُ أَوْلَادٌ."], "أَوْلَادٌ = ismu laisa, marfūʿ.", ["Ism marfūʿ.", "Kein بِـ.", "Falsch."]),
  U("Setz إِنَّ davor", "فِي الْبَيْتِ رَجُلٌ.", ["إِنَّ فِي الْبَيْتِ رَجُلًا.", "إِنَّ فِي الْبَيْتِ رَجُلٌ.", "إِنَّ فِي الْبَيْتِ رَجُلٍ.", "إِنَّ رَجُلٌ فِي الْبَيْتِ."], "رَجُلًا ist ismu inna (hinten).", ["Ism manṣūb.", "Kein Genitiv.", "Ism manṣūb."]),
  F("Was ist in لَيْسَ لِي إِخْوَةٌ der ismu laisa?", "لَيْسَ لِي إِخْوَةٌ", ["إِخْوَةٌ", "لِي", "لَيْسَ", "es gibt keinen"], "Die unbestimmte Mubtadaʾ steht hinten.", ["Das ist die Khabar.", "Das ist das Verb.", "Es gibt einen."])
]);
R("b2-02", 6, [
  E("مُحَمَّدُ ____ عَبْدِ اللَّهِ.", ["بْنُ", "ابْنُ", "بْنٌ", "ابْنٌ"], "Zwischen zwei Namen: ohne Alif, ohne Tanwīn.", ["Alif fällt weg.", "Kein Tanwīn.", "Beides falsch."]),
  F("Was passiert mit حَامِدٌ in حَامِدُ بْنُ بِلَالٍ?", "حَامِدُ بْنُ بِلَالٍ", ["Es verliert sein Tanwīn.", "Es bekommt Kasra.", "Es bekommt al.", "Nichts."], "Das Wort vor بْنُ verliert sein Tanwīn.", ["Kein Kasra.", "Kein al.", "Das Tanwīn fällt weg."]),
  U("Verbinde: „Bilāl, Sohn des Ḥāmid“", "بِلَالٌ – ابْنٌ – حَامِدٌ", ["بِلَالُ بْنُ حَامِدٍ", "بِلَالٌ ابْنُ حَامِدٍ", "بِلَالُ ابْنٌ حَامِدٍ", "بِلَالٌ بْنُ حَامِدٌ"], "Ohne Alif; Tanwīn weg; Genitiv.", ["Alif und Tanwīn weg.", "Kein Tanwīn an ابْنٌ.", "Genitiv beim Vater."]),
  F("Wann fällt das Alif von ابْنٌ in der Schrift weg?", "", ["zwischen zwei Eigennamen", "immer", "am Satzanfang", "nie"], "مُحَمَّدُ بْنُ عَبْدِ اللَّهِ.", ["Nicht immer.", "Am Anfang bleibt es.", "Zwischen Namen fällt es."]),
  E("عُمَرُ ____ الْخَطَّابِ.", ["بْنُ", "ابْنِ", "بِنْتُ", "بْنٍ"], "Zwischen zwei Namen.", ["Nominativ, ohne Alif.", "„Tochter“.", "Kein Tanwīn."])
]);
R("b2-02", 7, [
  F("Was ist مَنِ الْأَخُ؟", "مَنِ الْأَخُ؟", ["höfliche Frage „Wer sind Sie?“", "„Wo ist der Bruder?“", "„Hast du einen Bruder?“", "„Wessen Bruder?“"], "Wörtlich „Wer ist der Bruder?“", ["Kein أَيْنَ.", "Andere Frage.", "Andere Frage."]),
  F("Warum steht in مَنِ الْأَخُ ein Kasra auf مَنْ?", "مَنِ الْأَخُ", ["gegen zwei Sukūn vor al", "es ist Genitiv", "es ist weiblich", "Tippfehler"], "مَنْ + al → مَنِ.", ["Kein Fall.", "Kein Geschlecht.", "Richtig so."]),
  E("____ الْأَخُ؟ – أَنَا حَامِدٌ.", ["مَنِ", "مَا", "أَيْنَ", "كَيْفَ"], "Höfliche Frage nach der Person.", ["„was“.", "„wo“.", "„wie“."])
]);

/* ---------- Lektion 3 ---------- */
R("b2-03", 0, [
  E("الْقِطَارُ ____ مِنَ السَّيَّارَةِ. (schneller)", ["أَسْرَعُ", "أَسْرَعٌ", "سَرِيعٌ", "الْأَسْرَعُ"], "Komparativ أَفْعَلُ + مِنْ.", ["Diptot.", "Kein Komparativ.", "Mit al kein „als“."]),
  E("هَذَا الْكِتَابُ ____ مِنْ ذَلِكَ. (leichter)", ["أَسْهَلُ", "سَهْلٌ", "أَسْهَلٌ", "سُهْلَى"], "سَهْلٌ → أَسْهَلُ.", ["Kein Komparativ.", "Kein Tanwīn.", "Gibt es nicht."]),
  E("بِلَالٌ أَطْوَلُ ____ حَامِدٍ.", ["مِنْ", "عَلَى", "فِي", "إِلَى"], "„als“ = مِنْ.", ["„auf“.", "„in“.", "„zu“."]),
  U("Komparativ", "كَبِيرٌ", ["أَكْبَرُ", "كَبِيرُونَ", "أَكْبَرٌ", "كُبْرَى"], "أَفْعَلُ.", ["Plural.", "Kein Tanwīn.", "Andere Form."]),
  U("Komparativ", "قَدِيمٌ", ["أَقْدَمُ", "أَقْدُمُ", "قُدَامَى", "أَقْدَمٌ"], "أَفْعَلُ.", ["Falscher Vokal.", "Plural.", "Kein Tanwīn."]),
  U("Mach einen Vergleich", "الْمَدِينَةُ كَبِيرَةٌ. – الْقَرْيَةُ", ["الْمَدِينَةُ أَكْبَرُ مِنَ الْقَرْيَةِ.", "الْمَدِينَةُ أَكْبَرُ مِنَ الْقَرْيَةُ.", "الْمَدِينَةُ كُبْرَى مِنَ الْقَرْيَةِ.", "الْمَدِينَةُ أَكْبَرٌ مِنَ الْقَرْيَةِ."], "أَكْبَرُ + مِنْ + Genitiv.", ["Nach مِنْ Genitiv.", "Mit مِنْ bleibt أَفْعَلُ.", "Kein Tanwīn."]),
  U("Übersetze ins Arabische", "Mein Haus ist kleiner als dein Haus.", ["بَيْتِي أَصْغَرُ مِنْ بَيْتِكَ.", "بَيْتِي صَغِيرٌ مِنْ بَيْتِكَ.", "بَيْتِي أَصْغَرُ مِنْ بَيْتُكَ.", "بَيْتِي أَصْغَرٌ مِنْ بَيْتِكَ."], "أَصْغَرُ + مِنْ.", ["Komparativ nötig.", "Nach مِنْ Genitiv.", "Kein Tanwīn."])
]);
R("b2-03", 1, [
  E("فَاطِمَةُ ____ مِنْ أَخِيهَا. (größer)", ["أَطْوَلُ", "طُولَى", "أَطْوَلَةُ", "طَوِيلَةٌ"], "أَفْعَلُ bleibt für Feminines gleich.", ["Mit مِنْ unverändert.", "Gibt es nicht.", "Kein Komparativ."]),
  E("هُمْ أَكْبَرُ ____ سِنًّا. (älter als wir)", ["مِنَّا", "مِنْنَا", "مِنْ نَحْنُ", "مِنْهُمْ"], "مِنْ + نَا → مِنَّا (Shadda).", ["Mit Shadda.", "Kein selbstständiges Pronomen.", "„als sie“."])
]);
R("b2-03", 2, [
  E("هُوَ أَحْسَنُ ____ فِي الْفَصْلِ. (der beste Student)", ["طَالِبٍ", "الطَّالِبِ", "طُلَّابٍ", "طَالِبًا"], "أَفْعَلُ + unbestimmter Singular im Genitiv.", ["Hier unbestimmt.", "Singular.", "Genitiv."]),
  E("مَكَّةُ ____ مَدِينَةٍ. (die beste Stadt)", ["أَفْضَلُ", "فَاضِلَةٌ", "أَفْضَلُ مِنْ", "فُضْلَى"], "Superlativ: أَفْعَلُ + Genitiv.", ["Kein Superlativ.", "„als“ passt nicht.", "Andere Form."]),
  U("Mach einen Superlativ", "هَذَا جَبَلٌ طَوِيلٌ.", ["هَذَا أَطْوَلُ جَبَلٍ.", "هَذَا أَطْوَلُ جَبَلٌ.", "هَذَا جَبَلٌ أَطْوَلُ.", "هَذَا الْأَطْوَلُ جَبَلٍ."], "أَفْعَلُ + Genitiv.", ["Genitiv.", "Kein Superlativ.", "Kein al."]),
  U("Mach einen Superlativ", "إِبْرَاهِيمُ طَالِبٌ ذَكِيٌّ.", ["إِبْرَاهِيمُ أَذْكَى طَالِبٍ.", "إِبْرَاهِيمُ أَذْكَى طَالِبٌ.", "إِبْرَاهِيمُ ذَكِيُّ طَالِبٍ.", "إِبْرَاهِيمُ أَذْكَى مِنْ طَالِبٍ."], "ذَكِيٌّ → أَذْكَى + Genitiv.", ["Genitiv.", "Kein Superlativ.", "Das wäre „klüger als ein Student“."]),
  F("Was heißt الْأَزْهَرُ أَقْدَمُ جَامِعَةٍ فِي الْعَالَمِ?", "", ["Al-Azhar ist die älteste Universität der Welt.", "Al-Azhar ist älter als die Universität.", "Al-Azhar ist eine alte Universität.", "Die Universität ist älter als Al-Azhar."], "أَفْعَلُ + Genitiv = Superlativ.", ["Kein مِنْ.", "Das wäre جَامِعَةٌ قَدِيمَةٌ.", "Vertauscht."]),
  F("Wie heißt die Form أَفْعَلُ für Komparativ und Superlativ?", "", ["أَفْعَلُ التَّفْضِيلِ", "اسْمُ الْفَاعِلِ", "الْمَصْدَرُ", "فِعْلُ التَّعَجُّبِ"], "„Steigerungs-afʿal“.", ["Partizip.", "Verbalnomen.", "Staunensverb."]),
  U("Übersetze ins Arabische", "Er ist der jüngste Bruder.", ["هُوَ أَصْغَرُ أَخٍ.", "هُوَ أَصْغَرُ أَخٌ.", "هُوَ أَخٌ أَصْغَرُ.", "هُوَ صَغِيرُ أَخٍ."], "أَصْغَرُ + Genitiv.", ["Genitiv.", "Andere Bedeutung.", "Superlativ mit أَفْعَلُ."])
]);
R("b2-03", 3, [
  E("أَنَا عَزَبٌ وَلَكِنَّ ____ مُتَزَوِّجٌ.", ["أَخِي", "أَخُو", "أَخُوكَ", "أَخٌ"], "Nach لَكِنَّ manṣūb; mit ـِي unsichtbar.", ["Unvollständig.", "„dein Bruder“ im Nominativ.", "Unbestimmt."]),
  E("الْبَيْتُ قَدِيمٌ وَلَكِنَّ____ جَمِيلٌ.", ["هُ", "هُوَ", "هَا", "ـكَ"], "لَكِنَّهُ – Pronomen angehängt.", ["Kein selbstständiges Pronomen.", "Feminin.", "„du“."]),
  E("السُّؤَالُ سَهْلٌ وَلَكِنَّ ____ صَعْبٌ.", ["الْجَوَابَ", "الْجَوَابُ", "الْجَوَابِ", "جَوَابٌ"], "Nach لَكِنَّ manṣūb.", ["Nominativ.", "Genitiv.", "Nominativ."]),
  U("Setz لَكِنَّ ein", "الْمُدَرِّسُ هُنَا وَالْمُدِيرُ غَائِبٌ.", ["الْمُدَرِّسُ هُنَا وَلَكِنَّ الْمُدِيرَ غَائِبٌ.", "الْمُدَرِّسُ هُنَا وَلَكِنَّ الْمُدِيرُ غَائِبٌ.", "الْمُدَرِّسُ هُنَا وَلَكِنَّ الْمُدِيرَ غَائِبًا.", "الْمُدَرِّسُ هُنَا لَكِنَّ وَالْمُدِيرُ غَائِبٌ."], "Ism manṣūb, Khabar marfūʿ.", ["Ism manṣūb.", "Khabar marfūʿ.", "Falsch."]),
  U("Setz لَكِنَّ ein", "أَنَا فَقِيرٌ وَأَنْتَ غَنِيٌّ.", ["أَنَا فَقِيرٌ وَلَكِنَّكَ غَنِيٌّ.", "أَنَا فَقِيرٌ وَلَكِنَّ أَنْتَ غَنِيٌّ.", "أَنَا فَقِيرٌ وَلَكِنَّكَ غَنِيًّا.", "أَنَا فَقِيرٌ وَلَكِنِّي غَنِيٌّ."], "أَنْتَ → ـكَ.", ["Kein selbstständiges Pronomen.", "Khabar marfūʿ.", "„aber ich“."]),
  F("Was ist لَكِنَّ grammatisch?", "", ["eine Schwester von إِنَّ", "eine Schwester von كَانَ", "eine Präposition", "ein Verb"], "Nomen danach manṣūb.", ["كَانَ wirkt anders.", "Keine Präposition.", "Kein Verb."])
]);
R("b2-03", 4, [
  E("كَأَنَّ ____ مُتْعَبٌ. (Als ob der Lehrer müde wäre.)", ["الْمُدَرِّسَ", "الْمُدَرِّسُ", "الْمُدَرِّسِ", "مُدَرِّسٌ"], "كَأَنَّ → manṣūb.", ["Nominativ.", "Genitiv.", "Nominativ."]),
  E("كَأَنَّ____ مِنَ الْهِنْدِ. (… du bist aus Indien)", ["كَ", "أَنْتَ", "هُ", "نِي"], "كَأَنَّكَ.", ["Kein selbstständiges Pronomen.", "„er“.", "„ich“."]),
  U("Setz كَأَنَّ davor", "الْبَيْتُ مَسْجِدٌ.", ["كَأَنَّ الْبَيْتَ مَسْجِدٌ.", "كَأَنَّ الْبَيْتُ مَسْجِدٌ.", "كَأَنَّ الْبَيْتَ مَسْجِدًا.", "كَأَنَّ الْبَيْتِ مَسْجِدٌ."], "Wie إِنَّ.", ["Ism manṣūb.", "Khabar marfūʿ.", "Kein Genitiv."]),
  U("Setz كَأَنَّ davor", "هِيَ مَرِيضَةٌ.", ["كَأَنَّهَا مَرِيضَةٌ.", "كَأَنَّ هِيَ مَرِيضَةٌ.", "كَأَنَّهَا مَرِيضَةً.", "كَأَنَّهُ مَرِيضَةٌ."], "هِيَ → ـهَا.", ["Kein selbstständiges Pronomen.", "Khabar marfūʿ.", "Maskulin."]),
  F("Was bedeutet كَأَنَّ?", "", ["es sieht so aus, als ob", "weil", "aber", "hoffentlich"], "„als ob“.", ["Das ist لِأَنَّ.", "Das ist لَكِنَّ.", "Das ist لَعَلَّ."]),
  F("Welche Wörter sind Schwestern von إِنَّ?", "", ["لَعَلَّ، لَكِنَّ، كَأَنَّ", "كَانَ، لَيْسَ، لَا يَزَالُ", "فِي، مِنْ، إِلَى", "لَمْ، لَنْ، أَنْ"], "Alle machen ihren Ism manṣūb.", ["Schwestern von كَانَ.", "Präpositionen.", "Verbpartikeln."]),
  U("Übersetze ins Arabische", "Es sieht so aus, als ob der Imam krank wäre.", ["كَأَنَّ الْإِمَامَ مَرِيضٌ.", "كَأَنَّ الْإِمَامُ مَرِيضٌ.", "لَعَلَّ الْإِمَامَ مَرِيضٌ.", "كَأَنَّ الْإِمَامَ مَرِيضًا."], "كَأَنَّ + manṣūb + marfūʿ.", ["Ism manṣūb.", "„hoffentlich“.", "Khabar marfūʿ."])
]);
R("b2-03", 5, [
  E("فِي الْفَصْلِ ____ طَالِبًا. (11)", ["أَحَدَ عَشَرَ", "إِحْدَى عَشْرَةَ", "وَاحِدٌ عَشَرَ", "أَحَدُ عَشَرَ"], "11 männlich.", ["Weiblich.", "Gibt es nicht.", "Mabnī mit Fatḥa."]),
  E("عِنْدِي ____ كِتَابًا. (14)", ["أَرْبَعَةَ عَشَرَ", "أَرْبَعَ عَشْرَةَ", "أَرْبَعَةُ عَشَرَ", "أَرْبَعَةَ عَشْرَةَ"], "Erster Teil mit ة, zweiter عَشَرَ.", ["Weiblich.", "Mabnī.", "Gemischt."]),
  E("رَأَيْتُ سَبْعَةَ عَشَرَ ____.", ["رَجُلًا", "رِجَالًا", "رَجُلٍ", "رِجَالٍ"], "Singular manṣūb.", ["Singular.", "manṣūb.", "Singular manṣūb."]),
  U("Statt 13: 19 (männlich)", "ثَلَاثَةَ عَشَرَ يَوْمًا", ["تِسْعَةَ عَشَرَ يَوْمًا", "تِسْعَ عَشْرَةَ يَوْمًا", "تِسْعَةَ عَشَرَ أَيَّامًا", "تِسْعَةُ عَشَرَ يَوْمًا"], "Gleiches Muster.", ["Weiblich.", "Singular.", "Mabnī."])
]);
R("b2-03", 6, [
  E("اشْتَرَيْتُهُ بِ____ رِيَالًا. (13)", ["ثَلَاثَةَ عَشَرَ", "ثَلَاثَةِ عَشَرَ", "ثَلَاثَةُ عَشَرَ", "ثَلَاثَ عَشْرَةَ"], "11–19 sind mabnī – auch nach بِـ.", ["Kein Kasra.", "Unveränderlich.", "Weiblich."]),
  E("أُرِيدُ ____ رِيَالًا. (15)", ["خَمْسَةَ عَشَرَ", "خَمْسَةُ عَشَرَ", "خَمْسَةِ عَشَرَ", "خَمْسَ عَشَرَ"], "Mabnī.", ["Unveränderlich.", "Unveränderlich.", "Männlich: mit ة."]),
  E("رَأَيْتُ ____ طَالِبًا. (12)", ["اثْنَيْ عَشَرَ", "اثْنَا عَشَرَ", "اثْنَتَيْ عَشْرَةَ", "اثْنَيْنِ عَشَرَ"], "اثْنَا wird im Akkusativ zu اثْنَيْ.", ["Das ist Nominativ.", "Weiblich.", "Kein nūn."]),
  E("عِنْدِي ____ طَالِبًا. (12)", ["اثْنَا عَشَرَ", "اثْنَيْ عَشَرَ", "اثْنَانِ عَشَرَ", "اثْنَتَا عَشْرَةَ"], "Nominativ: اثْنَا.", ["Akk./Gen.", "Kein nūn.", "Weiblich."]),
  F("Welcher Teil von 11–19 ist veränderlich?", "", ["nur اثْنَا / اثْنَتَا (12)", "alle", "nur der Zehner", "keiner außer 11"], "Sonst mabnī.", ["Fast alle sind mabnī.", "Der Zehner bleibt.", "11 ist mabnī."]),
  U("Statt Nominativ: Genitiv", "عِنْدِي سِتَّةَ عَشَرَ قَلَمًا.", ["كَتَبْتُ بِسِتَّةَ عَشَرَ قَلَمًا.", "كَتَبْتُ بِسِتَّةِ عَشَرَ قَلَمًا.", "كَتَبْتُ بِسِتَّةَ عَشَرَ قَلَمٍ.", "كَتَبْتُ بِسِتَّةُ عَشَرَ قَلَمًا."], "Mabnī – unverändert.", ["Unveränderlich.", "Gezähltes bleibt manṣūb.", "Unveränderlich."]),
  F("Was heißt مَبْنِيٌّ?", "", ["unveränderlich – die Endung bleibt immer gleich", "im Genitiv", "im Plural", "ohne Tanwīn"], "Mabnī-Wörter ändern ihre Endung nicht.", ["Kein Fall.", "Keine Zahl.", "Etwas anderes."])
]);
R("b2-03", 7, [
  E("هَذَا الدَّرْسُ ____. (der fünfte)", ["الْخَامِسُ", "الْخَمْسَةُ", "خَامِسٌ", "الْخَمْسُ"], "فَاعِلٌ: خَامِسٌ.", ["Grundzahl.", "Bestimmtheit.", "Grundzahl."]),
  E("هَذِهِ السَّنَةُ ____. (die vierte)", ["الرَّابِعَةُ", "الرَّابِعُ", "الْأَرْبَعَةُ", "رَابِعَةٌ"], "Feminin: رَابِعَةٌ.", ["Maskulin.", "Grundzahl.", "Bestimmtheit."]),
  E("هُوَ ____ طَالِبٍ. (der erste Student)", ["أَوَّلُ", "وَاحِدُ", "أُولَى", "أَوَّلٌ"], "أَوَّلُ.", ["Grundzahl.", "Feminin.", "Kein Tanwīn als Muḍāf."]),
  E("هَذِهِ الْمَرَّةُ ____. (das erste Mal)", ["الْأُولَى", "الْأَوَّلُ", "الْوَاحِدَةُ", "أُولَى"], "Feminin: الْأُولَى.", ["Maskulin.", "Grundzahl.", "Bestimmtheit."]),
  U("Ordnungszahl", "سِتَّةٌ", ["سَادِسٌ", "سَاتِسٌ", "سِتِّيٌّ", "سُدُسٌ"], "„sechster“ = سَادِسٌ.", ["Falsch.", "Falsch.", "„Sechstel“."]),
  U("Ordnungszahl (mit al)", "اثْنَانِ", ["الثَّانِي", "الثَّانٍ", "الِاثْنَانِ", "الثَّانِيُ"], "ثَانٍ → الثَّانِي.", ["Mit al kehrt das ي zurück.", "Grundzahl.", "Kein Ḍamma auf ي."]),
  U("Übersetze ins Arabische", "der dritte Tag", ["الْيَوْمُ الثَّالِثُ", "الْيَوْمُ الثَّلَاثَةُ", "ثَالِثُ الْيَوْمِ", "الْيَوْمُ ثَالِثٌ"], "Ordnungszahl als Adjektiv, bestimmt.", ["Grundzahl.", "Falsch.", "Bestimmtheit."])
]);
R("b2-03", 8, [
  E("أَلَيْسَ هَذَا بَيْتَكَ؟ – ____، هُوَ بَيْتِي.", ["بَلَى", "نَعَمْ", "لَا", "أَمْ"], "„doch“ = بَلَى.", ["Würde die Verneinung bestätigen.", "Widerspricht.", "„oder“."]),
  E("____ أَخُوكَ؟ (Welcher von beiden …?)", ["أَيُّهُمَا", "أَيُّهُمْ", "مَنْ هُمَا", "أَيُّ"], "„welcher von beiden“ = أَيُّهُمَا.", ["Plural.", "„wer sind die beiden“.", "Braucht ein Nomen."]),
  F("Wie heißen die Pluralmuster مَفَاعِلُ und مَفَاعِيلُ?", "", ["مُنْتَهَى الْجُمُوعِ", "جَمْعُ الْمُذَكَّرِ السَّالِمُ", "جَمْعُ الْمُؤَنَّثِ", "الْمُثَنَّى"], "„Endpunkt der Plurale“.", ["Gesunder männlicher Plural.", "Weiblicher Plural.", "Dual."]),
  F("Was heißt أَلَيْسَ كَذَلِكَ؟", "", ["Nicht wahr?", "Ist das so?", "Wie ist das?", "Ist das nicht schön?"], "Bestätigungsfrage.", ["Ohne Verneinung.", "Andere Frage.", "Andere Frage."]),
  U("Übersetze ins Arabische", "Welcher der beiden ist der Direktor?", ["أَيُّهُمَا الْمُدِيرُ؟", "أَيُّهُمُ الْمُدِيرُ؟", "مَنْ هُمَا الْمُدِيرُ؟", "أَيُّ الْمُدِيرُ؟"], "أَيُّهُمَا.", ["Plural.", "Falsch.", "Falsch."])
]);

/* ---------- Lektion 4 ---------- */
R("b2-04", 0, [
  F("Wie viele Radikale haben die meisten arabischen Verben?", "", ["drei", "zwei", "vier", "fünf"], "Meist drei Wurzelbuchstaben.", ["Zu wenig.", "Es gibt sie, aber selten.", "Zu viele."]),
  F("Was sind die Radikale von رَجَعَ?", "رَجَعَ", ["ر ج ع", "ر ع", "ج ع", "ر ج"], "Drei Wurzelbuchstaben.", ["Einer fehlt.", "Einer fehlt.", "Einer fehlt."]),
  E("____ آمِنَةُ مِنَ الْمَدْرَسَةِ.", ["رَجَعَتْ", "رَجَعَ", "رَجَعْتِ", "رَجَعْنَ"], "Feminin: رَجَعَتْ.", ["Maskulin.", "„du“.", "Plural."]),
  E("____ بِلَالٌ إِلَى بَيْتِهِ.", ["رَجَعَ", "رَجَعَتْ", "رَجَعُوا", "يَرْجِعَ"], "Maskulin, Subjekt folgt → „er“ fällt weg.", ["Feminin.", "Verb vorne Singular.", "Kein Perfekt."]),
  F("Wie heißt die Grundform des Verbs?", "ذَهَبَ", ["Perfekt (الْمَاضِي)", "Präsens (الْمُضَارِعُ)", "Imperativ (الْأَمْرُ)", "Maṣdar"], "Man nennt ein Verb in der Perfektform.", ["Kommt später.", "Kommt später.", "Kein Verb."])
]);
R("b2-04", 1, [
  F("Was ist in ذَهَبَ (allein) das Subjekt?", "ذَهَبَ", ["ein unsichtbares Pronomen (هُوَ)", "das Fatḥa", "das ذ", "keins"], "ضَمِيرٌ مُسْتَتِرٌ.", ["Ein Vokal.", "Ein Radikal.", "Es gibt eins."]),
  F("Was ist das تْ in ذَهَبَتْ?", "ذَهَبَتْ", ["nur das Femininzeichen", "das Subjekt", "ein Objekt", "„du“"], "Der Fāʿil ist unsichtbar (هِيَ).", ["Das Subjekt ist unsichtbar.", "Kein Objekt.", "„du“ wäre ذَهَبْتَ."]),
  F("Wie heißt ein unsichtbares Pronomen?", "", ["ضَمِيرٌ مُسْتَتِرٌ", "ضَمِيرٌ مُتَّصِلٌ", "اسْمُ إِشَارَةٍ", "حَرْفُ جَرٍّ"], "مُسْتَتِرٌ = verborgen.", ["Angehängt (sichtbar).", "Demonstrativ.", "Präposition."]),
  F("Was ist in ذَهَبَتْ آمِنَةُ der Fāʿil?", "ذَهَبَتْ آمِنَةُ", ["آمِنَةُ", "das تْ", "ein unsichtbares Pronomen", "ذَهَبَ"], "Folgt ein Nomen, ist es der Fāʿil.", ["Femininzeichen.", "Hier steht das Nomen.", "Das Verb."]),
  F("Was ist in خَرَجَ الْمُدِيرُ der Fāʿil?", "خَرَجَ الْمُدِيرُ", ["الْمُدِيرُ", "ein unsichtbares هُوَ", "خَرَجَ", "keiner"], "Das Nomen nach dem Verb.", ["Das Nomen ist da.", "Das Verb.", "Es gibt einen."]),
  F("Wann ist der Fāʿil ein unsichtbares Pronomen?", "", ["wenn kein Nomen als Subjekt folgt (ذَهَبَ، ذَهَبَتْ)", "immer", "nur im Plural", "nur bei Frauen"], "ذَهَبَ = er ging.", ["Nicht immer.", "Gerade im Singular.", "Auch bei Männern."])
]);
R("b2-04", 2, [
  E("أَيْنَ ____؟ (Wohin bist du gegangen?)", ["ذَهَبْتَ", "ذَهَبَتْ", "ذَهَبُوا", "ذَهَبْنَ"], "-ta: Subjekt ist das تَ.", ["„sie“.", "„sie (Pl.)“.", "„sie (w. Pl.)“."]),
  F("Was ist in ذَهَبْنَ das Subjekt?", "ذَهَبْنَ", ["das nūn", "das ب", "unsichtbar", "das Fatḥa"], "Das nūn der Frauen ist Fāʿil.", ["Radikal.", "Hier sichtbar.", "Vokal."]),
  F("Was ist in ذَهَبْتُ das Subjekt?", "ذَهَبْتُ", ["das تُ", "unsichtbar", "das ب", "das Sukūn"], "تُ = ich.", ["Sichtbar.", "Radikal.", "Vokalzeichen."])
]);
R("b2-04", 3, [
  E("أَيْنَ الطُّلَّابُ؟ – ____ إِلَى الْمَكْتَبَةِ.", ["ذَهَبُوا", "ذَهَبَ", "ذَهَبْنَ", "ذَهَبَتْ"], "Männer, kein Nomen danach → ذَهَبُوا.", ["Ohne Nomen braucht es -ū.", "Feminin.", "Feminin."]),
  E("أَيْنَ الْبَنَاتُ؟ – ____ إِلَى الْبَيْتِ.", ["رَجَعْنَ", "رَجَعُوا", "رَجَعَتْ", "رَجَعَ"], "Frauen → -na.", ["Maskulin.", "Singular.", "Maskulin Singular."]),
  E("الْمُهَنْدِسُونَ ____ مِنَ الشَّرِكَةِ.", ["خَرَجُوا", "خَرَجْنَ", "خَرَجَ", "خَرَجَتْ"], "Subjekt vorne → -ū.", ["Feminin.", "Nach vorangestelltem Subjekt -ū.", "Feminin."]),
  E("الْمُمَرِّضَاتُ ____ مِنَ الْمُسْتَشْفَى.", ["خَرَجْنَ", "خَرَجُوا", "خَرَجَ", "خَرَجْنَا"], "Frauen → -na.", ["Maskulin.", "Singular.", "„wir“."]),
  U("Mach es feminin", "ذَهَبُوا إِلَى الْمَسْجِدِ.", ["ذَهَبْنَ إِلَى الْمَسْجِدِ.", "ذَهَبَتْ إِلَى الْمَسْجِدِ.", "ذَهَبْتُنَّ إِلَى الْمَسْجِدِ.", "ذَهَبُونَ إِلَى الْمَسْجِدِ."], "-ū → -na.", ["Singular.", "„ihr“.", "Gibt es nicht."]),
  U("Mach es maskulin", "جَلَسْنَ فِي الْفَصْلِ.", ["جَلَسُوا فِي الْفَصْلِ.", "جَلَسَ فِي الْفَصْلِ.", "جَلَسْنَا فِي الْفَصْلِ.", "جَلَسْتُمْ فِي الْفَصْلِ."], "-na → -ū.", ["Singular.", "„wir“.", "„ihr“."]),
  F("Welche Form passt zu „Bilāl, Ḥāmid und Khālid“ (ohne Nomen danach)?", "", ["ذَهَبُوا", "ذَهَبَ", "ذَهَبْنَ", "ذَهَبَا"], "Mehrere Männer → -ū.", ["Singular.", "Feminin.", "Dual (später)."])
]);
R("b2-04", 4, [
  E("____ أَكَلْتُ الْيَوْمَ. (Ich habe heute nicht gegessen.)", ["مَا", "لَا", "لَيْسَ", "لَنْ"], "Perfekt verneint mit مَا.", ["Nicht beim Perfekt.", "Nicht vor Verben.", "Futur."]),
  U("Verneine", "رَجَعَ الْمُدِيرُ.", ["مَا رَجَعَ الْمُدِيرُ.", "لَيْسَ رَجَعَ الْمُدِيرُ.", "رَجَعَ مَا الْمُدِيرُ.", "لَا رَجَعَ الْمُدِيرُ."], "مَا + Perfekt.", ["Nicht vor Verben.", "Stellung.", "Hier مَا."]),
  U("Verneine", "فَهِمْنَا الدَّرْسَ.", ["مَا فَهِمْنَا الدَّرْسَ.", "لَسْنَا فَهِمْنَا الدَّرْسَ.", "مَا فَهِمْنَا الدَّرْسُ.", "فَهِمْنَا مَا الدَّرْسَ."], "مَا + Perfekt.", ["Nicht vor Verben.", "Objekt manṣūb.", "Stellung."]),
  U("Übersetze ins Arabische", "Er trat ein, aber er setzte sich nicht.", ["دَخَلَ وَلَكِنَّهُ مَا جَلَسَ.", "دَخَلَ وَلَكِنَّهُ لَيْسَ جَلَسَ.", "دَخَلَ وَلَكِنَّ هُوَ مَا جَلَسَ.", "مَا دَخَلَ وَلَكِنَّهُ جَلَسَ."], "مَا + Perfekt; لَكِنَّهُ.", ["Nicht vor Verben.", "Pronomen angehängt.", "Vertauscht."]),
  F("Womit wird das Perfekt verneint?", "", ["mit مَا", "mit لَيْسَ", "mit لَنْ", "mit لَا (allein)"], "مَا ذَهَبْتُ.", ["Für Nominalsätze.", "Für das Futur.", "Nur bei „weder … noch“."])
]);
R("b2-04", 5, [
  E("أَلَسْتَ بِطَالِبٍ؟ – ____، أَنَا طَالِبٌ.", ["بَلَى", "نَعَمْ", "لَا", "أَمْ"], "„doch“ = بَلَى.", ["Würde bestätigen: kein Student.", "Widerspricht der Antwort.", "„oder“."]),
  E("أَلَسْتَ بِمُتَزَوِّجٍ؟ – ____، لَسْتُ بِمُتَزَوِّجٍ.", ["نَعَمْ", "بَلَى", "لَا", "أَمْ"], "Bestätigt die Verneinung → نَعَمْ.", ["بَلَى hieße „doch, ich bin es“.", "Hier: نَعَمْ.", "„oder“."]),
  E("أَمَا ذَهَبْتَ إِلَى الْمَسْجِدِ؟ – ____، ذَهَبْتُ.", ["بَلَى", "نَعَمْ", "لَا", "أَمْ"], "„doch“.", ["Würde „nicht gegangen“ bestätigen.", "Widerspricht.", "„oder“."]),
  F("Auf welche Frage antwortet man mit بَلَى?", "", ["auf eine verneinte Frage – „doch“", "auf jede Frage – „ja“", "auf eine Frage mit أَمْ", "nur auf Fragen mit هَلْ"], "بَلَى widerspricht der Verneinung.", ["Nicht jede.", "Dort nennt man eins.", "Nicht nur."]),
  F("Was bedeutet: أَلَيْسَ هَذَا قَلَمَكَ؟ – نَعَمْ.", "", ["„Richtig, es ist nicht mein Stift.“", "„Doch, es ist mein Stift.“", "„Ich weiß nicht.“", "„Ja, das ist ein Stift.“"], "نَعَمْ bestätigt die Verneinung.", ["Das wäre بَلَى.", "Falsch.", "Falsch."]),
  U("Antworte mit „doch“", "أَلَسْتَ مِنَ الْهِنْدِ؟", ["بَلَى، أَنَا مِنَ الْهِنْدِ.", "نَعَمْ، أَنَا مِنَ الْهِنْدِ.", "بَلَى، لَسْتُ مِنَ الْهِنْدِ.", "لَا، أَنَا مِنَ الْهِنْدِ."], "بَلَى + Bejahung.", ["Hier بَلَى.", "بَلَى bejaht.", "Widersprüchlich."]),
  U("Bestätige die Verneinung", "أَمَا أَكَلْتَ؟", ["نَعَمْ، مَا أَكَلْتُ.", "بَلَى، مَا أَكَلْتُ.", "نَعَمْ، أَكَلْتُ.", "لَا، مَا أَكَلْتُ."], "نَعَمْ + Verneinung.", ["بَلَى widerspricht.", "Widersprüchlich.", "Hier نَعَمْ."]),
  F("Was heißt بَلَى auf Deutsch?", "بَلَى", ["doch", "ja", "nein", "vielleicht"], "Widerspruch gegen eine verneinte Frage.", ["Das ist نَعَمْ.", "Das ist لَا.", "Falsch."])
]);
R("b2-04", 6, [
  E("ذَهَبْتُ إِلَى الْمُسْتَشْفَى لِأَنَّ ____ مَرِيضٌ.", ["أَخِي", "أَخُو", "أَخَاكَ", "أَخٌ"], "Nach لِأَنَّ manṣūb (bei ـِي unsichtbar).", ["Unvollständig.", "„deinen Bruder“.", "Unbestimmt."]),
  E("مَا خَرَجْتُ لِأَنَّ____ مُتْعَبٌ. (weil ich müde bin)", ["نِي", "أَنَا", "ي", "كَ"], "لِأَنِّي / لِأَنَّنِي.", ["Kein selbstständiges Pronomen.", "Hier: لِأَنَّنِي.", "„du“."])
]);

/* ---------- Lektion 5 ---------- */
R("b2-05", 0, [
  E("جَلَسَ ____.", ["الْإِمَامُ", "الْإِمَامَ", "الْإِمَامِ", "إِمَامًا"], "Fāʿil marfūʿ.", ["Akkusativ.", "Genitiv.", "Akkusativ."]),
  E("دَخَلَ ____ الْفَصْلَ.", ["الْمُدَرِّسُ", "الْمُدَرِّسَ", "الْمُدَرِّسِ", "مُدَرِّسًا"], "Fāʿil marfūʿ.", ["Akkusativ.", "Genitiv.", "Akkusativ."]),
  F("Was ist der Fāʿil in ذَهَبْنَا?", "ذَهَبْنَا", ["das نَا", "das ب", "unsichtbar", "keiner"], "نَا = wir.", ["Radikal.", "Sichtbar.", "Es gibt einen."]),
  F("Was ist der Fāʿil in ذَهَبْتَ?", "ذَهَبْتَ", ["das تَ", "unsichtbar", "das ه", "das ذ"], "تَ = du.", ["Sichtbar.", "Radikal.", "Radikal."]),
  F("Was ist der Fāʿil in فَهِمَ الطَّالِبُ الدَّرْسَ?", "فَهِمَ الطَّالِبُ الدَّرْسَ", ["الطَّالِبُ", "الدَّرْسَ", "فَهِمَ", "unsichtbar"], "Marfūʿ = Fāʿil.", ["Das ist das Objekt.", "Das Verb.", "Er ist sichtbar."]),
  U("Mach das Subjekt zum Fāʿil eines Verbalsatzes", "الطِّفْلُ نَامَ.", ["نَامَ الطِّفْلُ.", "نَامَ الطِّفْلَ.", "نَامُوا الطِّفْلُ.", "نَامَ الطِّفْلِ."], "Verb vorne, Fāʿil marfūʿ.", ["Fāʿil marfūʿ.", "Singular.", "Kein Genitiv."]),
  F("In welchem Fall steht der Fāʿil?", "", ["marfūʿ (Nominativ)", "manṣūb", "majrūr", "mabnī"], "الْفَاعِلُ مَرْفُوعٌ.", ["Das ist das Objekt.", "Nach Präposition.", "Ein Nomen ist meist dekliniert."]),
  E("خَرَجَتْ ____ مِنَ الْمَطْبَخِ.", ["الْأُمُّ", "الْأُمَّ", "الْأُمِّ", "أُمًّا"], "Fāʿil marfūʿ.", ["Akkusativ.", "Genitiv.", "Akkusativ."]),
  U("Übersetze ins Arabische", "Der Junge trank die Milch.", ["شَرِبَ الْوَلَدُ اللَّبَنَ.", "شَرِبَ الْوَلَدَ اللَّبَنُ.", "شَرِبَ الْوَلَدُ اللَّبَنُ.", "شَرِبَ الْوَلَدِ اللَّبَنَ."], "Fāʿil marfūʿ, Objekt manṣūb.", ["Vertauscht.", "Objekt manṣūb.", "Fāʿil marfūʿ."])
]);
R("b2-05", 3, [
  E("رَأَيْتُ ____. (dein Haus)", ["بَيْتَكَ", "بَيْتُكَ", "بَيْتِكَ", "بَيْتًا"], "Objekt mit Pronomen: -a-ka.", ["Nominativ.", "Genitiv.", "„dein“ fehlt."]),
  E("فَتَحَ الطَّالِبُ ____.", ["كِتَابَهُ", "كِتَابُهُ", "كِتَابِهِ", "كِتَابًا"], "Objekt: kitāb-a-hū.", ["Nominativ.", "Genitiv.", "„sein“ fehlt."]),
  E("رَأَيْتُ بِلَالًا وَ____. (fragte ihn)", ["سَأَلْتُهُ", "سَأَلْتُ هُوَ", "سَأَلْتُهَا", "سَأَلَهُ"], "Objekt-Pronomen am Verb.", ["Kein selbstständiges Pronomen.", "„sie“.", "„er fragte ihn“."]),
  U("Mach das Objekt zum Pronomen", "رَأَيْتُ الْمُدِيرَ.", ["رَأَيْتُهُ.", "رَأَيْتُ هُوَ.", "رَأَيْتُهَا.", "رَأَيْتُكَ."], "ـهُ ans Verb.", ["Kein selbstständiges Pronomen.", "Feminin.", "„dich“."]),
  U("Mach das Objekt zum Pronomen", "سَأَلْتُ الْمُدَرِّسَةَ.", ["سَأَلْتُهَا.", "سَأَلْتُهُ.", "سَأَلْتُ هِيَ.", "سَأَلْتِهَا."], "ـهَا.", ["Maskulin.", "Kein selbstständiges Pronomen.", "„du (w.) fragtest“."])
]);
R("b2-05", 4, [
  F("Wie spricht man شَرِبَ حَامِدٌ الْمَاءَ?", "شَرِبَ حَامِدٌ الْمَاءَ", ["shariba ḥāmidun-i-l-māʾa", "shariba ḥāmidun al-māʾa", "shariba ḥāmidu-l-māʾa", "shariba ḥāmidan-i-l-māʾa"], "Nach Tanwīn vor Hamzat al-waṣl wird ein Kasra eingeschoben.", ["Das a von al fällt weg.", "Das Tanwīn bleibt.", "Fāʿil = -un."]),
  F("Wie heißt das Zusammentreffen zweier vokalloser Buchstaben?", "", ["الْتِقَاءُ السَّاكِنَيْنِ", "الْإِدْغَامُ", "التَّنْوِينُ", "الْإِسْنَادُ"], "„Treffen zweier Sukūn“.", ["Assimilation.", "Tanwīn.", "Anhängen der Endungen."]),
  F("Welcher Vokal wird eingeschoben? سَمِعَ فَيْصَلٌ الْأَذَانَ", "سَمِعَ فَيْصَلٌ الْأَذَانَ", ["Kasra (fayṣaluni-l-adhāna)", "Fatḥa", "Ḍamma", "keiner"], "Gegen zwei Sukūn: Kasra.", ["Normal ist Kasra.", "Normal ist Kasra.", "Es muss einer sein."]),
  F("Wie spricht man سَأَلَ بِلَالٌ ابْنَهُ?", "سَأَلَ بِلَالٌ ابْنَهُ", ["saʾala bilālun-i-bnahū", "saʾala bilālun ibnahū", "saʾala bilāl-ibnahū", "saʾala bilāla-bnahū"], "Kasra nach Tanwīn, Hamzat al-waṣl fällt.", ["Das i von ابْن fällt weg.", "Tanwīn bleibt.", "Fāʿil marfūʿ."]),
  F("Warum braucht مُحَمَّدٌ الطَّالِبُ beim Sprechen ein Kasra?", "", ["Das n des Tanwīn und das l von al sind beide vokallos.", "Weil الطَّالِبُ Genitiv ist.", "Weil مُحَمَّدٌ ein Name ist.", "Es braucht keins."], "Zwei Sukūn hintereinander.", ["Kein Genitiv.", "Nicht wegen des Namens.", "Es braucht eins."])
]);
R("b2-05", 5, [
  F("Welchen Vokal hat der 2. Radikal in دَخَلَ?", "دَخَلَ", ["Fatḥa", "Kasra", "Ḍamma", "Sukūn"], "dakhala.", ["Wie in شَرِبَ.", "Wie in كَبُرَ.", "Kein Sukūn."]),
  F("Welchen Vokal hat der 2. Radikal in شَرِبَ?", "شَرِبَ", ["Kasra", "Fatḥa", "Ḍamma", "Sukūn"], "shariba.", ["Wie in ذَهَبَ.", "Wie in كَبُرَ.", "Kein Sukūn."]),
  F("Welchen Vokal hat der 2. Radikal in كَبُرَ?", "كَبُرَ", ["Ḍamma", "Fatḥa", "Kasra", "Sukūn"], "kabura.", ["Wie ذَهَبَ.", "Wie شَرِبَ.", "Kein Sukūn."]),
  F("Welche Vokale haben 1. und 3. Radikal im Perfekt (er-Form)?", "", ["beide Fatḥa", "beide Kasra", "Ḍamma und Fatḥa", "beide Sukūn"], "فَعَلَ / فَعِلَ / فَعُلَ – außen immer a.", ["Nein.", "Nein.", "Nein."]),
  F("Welches Verb hat Kasra auf dem 2. Radikal?", "", ["حَفِظَ", "خَرَجَ", "كَتَبَ", "بَعُدَ"], "ḥafiẓa.", ["Fatḥa.", "Fatḥa.", "Ḍamma."]),
  F("Welches Verb hat Ḍamma auf dem 2. Radikal?", "", ["كَرُمَ", "فَهِمَ", "دَخَلَ", "سَمِعَ"], "karuma.", ["Kasra.", "Fatḥa.", "Kasra."]),
  F("Wie heißen die drei Radikale (nach فَعَلَ)?", "", ["فَاء، عَيْن، لَام", "أَلِف، بَاء، تَاء", "مِيم، نُون، وَاو", "كَاف، تَاء، بَاء"], "Erster = fāʾ, zweiter = ʿain, dritter = lām.", ["Nicht das Alphabet.", "Falsch.", "Das ist كَتَبَ."])
]);

/* ---------- Lektion 6 ---------- */
R("b2-06", 0, [
  E("مَاذَا ____ يَا أُخْتِي؟ (Was hast du gegessen?)", ["أَكَلْتِ", "أَكَلَتْ", "أَكَلْتَ", "أَكَلْتُ"], "du (f.) = -ti.", ["„sie“.", "„du (m.)“.", "„ich“."]),
  E("هَلْ ____ الدَّرْسَ يَا مَرْيَمُ؟ (Hast du verstanden?)", ["فَهِمْتِ", "فَهِمَتْ", "فَهِمْتَ", "فَهِمْتُ"], "-ti.", ["„sie“.", "„du (m.)“.", "„ich“."]),
  F("Wie viele Bedeutungen kann ذهبت (ohne Vokale) haben?", "ذهبت", ["vier: sie ging, du (m.) gingst, du (f.) gingst, ich ging", "eine", "zwei", "drei"], "ذَهَبَتْ، ذَهَبْتَ، ذَهَبْتِ، ذَهَبْتُ.", ["Erst die Vokale entscheiden.", "Es sind vier.", "Es sind vier."]),
  U("Sprich eine Frau an", "أَيْنَ جَلَسْتَ؟", ["أَيْنَ جَلَسْتِ؟", "أَيْنَ جَلَسَتْ؟", "أَيْنَ جَلَسْتُ؟", "أَيْنَ جَلَسْتُنَّ؟"], "-ta → -ti.", ["„sie“.", "„ich“.", "Plural."]),
  U("Statt „sie ging“: „du (f.) gingst“", "ذَهَبَتْ إِلَى السُّوقِ.", ["ذَهَبْتِ إِلَى السُّوقِ.", "ذَهَبْتَ إِلَى السُّوقِ.", "ذَهَبَتِ إِلَى السُّوقِ.", "ذَهَبْتُ إِلَى السُّوقِ."], "-at → -ti.", ["„du (m.)“.", "Falsch.", "„ich“."]),
  F("Was heißt ذَهَبْتِ?", "ذَهَبْتِ", ["du (f.) gingst", "sie ging", "du (m.) gingst", "ich ging"], "Kasra auf dem ت.", ["ذَهَبَتْ.", "ذَهَبْتَ.", "ذَهَبْتُ."]),
  U("Übersetze ins Arabische", "Wann bist du zurückgekehrt, Zainab?", ["مَتَى رَجَعْتِ يَا زَيْنَبُ؟", "مَتَى رَجَعَتْ يَا زَيْنَبُ؟", "مَتَى رَجَعْتَ يَا زَيْنَبُ؟", "مَتَى رَجَعْتِ يَا زَيْنَبٌ؟"], "-ti.", ["„sie“.", "„du (m.)“.", "Nach يَا kein Tanwīn."])
]);
R("b2-06", 1, [
  E("قَرَأْتُ ____ صَفْحَةً. (12)", ["اثْنَتَيْ عَشْرَةَ", "اثْنَتَا عَشْرَةَ", "اثْنَيْ عَشَرَ", "اثْنَتَيْ عَشَرَ"], "Feminin, Akkusativ: اثْنَتَيْ عَشْرَةَ.", ["Nominativ.", "Maskulin.", "Gemischt."]),
  E("فِي الْعِمَارَةِ ____ شَقَّةً. (17)", ["سَبْعَ عَشْرَةَ", "سَبْعَةَ عَشَرَ", "سَبْعَ عَشَرَ", "سَبْعَةَ عَشْرَةَ"], "13–19 f.: سَبْعَ عَشْرَةَ.", ["Maskulin.", "Zehner feminin.", "Einer ohne ة."])
]);
R("b2-06", 2, [
  E("____ طَالِبٍ خَرَجَ؟", ["أَيُّ", "أَيَّ", "أَيِّ", "أَيًّا"], "Mubtadaʾ → marfūʿ.", ["Kein Objekt.", "Keine Präposition.", "Kein Tanwīn."]),
  E("فِي ____ غُرْفَةٍ تَسْكُنُ؟", ["أَيِّ", "أَيُّ", "أَيَّ", "أَيٍّ"], "Nach فِي → majrūr.", ["Nach فِي majrūr.", "Nach فِي majrūr.", "Kein Tanwīn."]),
  E("____ سُورَةٍ حَفِظْتَ؟", ["أَيَّ", "أَيُّ", "أَيِّ", "أَيًّا"], "Objekt → manṣūb.", ["Objekt.", "Keine Präposition.", "Kein Tanwīn."])
]);
R("b2-06", 3, [
  E("أَظُنُّ أَنَّ ____ فِي الْمَكْتَبَةِ.", ["الطَّالِبَ", "الطَّالِبُ", "الطَّالِبِ", "طَالِبٌ"], "أَنَّ → manṣūb.", ["Nominativ.", "Genitiv.", "Nominativ."]),
  E("أَظُنُّ ____ ذَهَبَ إِلَى بَيْتِهِ.", ["أَنَّهُ", "إِنَّهُ", "أَنَّ هُوَ", "لِأَنَّهُ"], "Nach أَظُنُّ → أَنَّ.", ["Nach أَظُنُّ nicht إِنَّ.", "Pronomen angehängt.", "„weil“."]),
  U("Setz أَظُنُّ أَنَّ davor", "الْمُدِيرُ مَشْغُولٌ.", ["أَظُنُّ أَنَّ الْمُدِيرَ مَشْغُولٌ.", "أَظُنُّ أَنَّ الْمُدِيرُ مَشْغُولٌ.", "أَظُنُّ إِنَّ الْمُدِيرَ مَشْغُولٌ.", "أَظُنُّ أَنَّ الْمُدِيرَ مَشْغُولًا."], "Ism manṣūb, Khabar marfūʿ.", ["Ism manṣūb.", "Nach أَظُنُّ أَنَّ.", "Khabar marfūʿ."])
]);
R("b2-06", 4, [
  E("قَالَ الْمُدِيرُ: ____ الدَّرْسَ سَهْلٌ.", ["إِنَّ", "أَنَّ", "لِأَنَّ", "كَأَنَّ"], "Nach قَالَ → إِنَّ.", ["Nicht nach قَالَ.", "„weil“.", "„als ob“."]),
  E("قَالَتْ: ____ مُتْعَبَةٌ. (Sie sagte: „Ich bin müde.“)", ["إِنِّي", "أَنِّي", "إِنَّكَ", "أَنَّهُ"], "Nach قَالَ: إِنَّ; „ich“ → إِنِّي.", ["Nach قَالَ nicht أَنَّ.", "„du“ – und مُتْعَبَةٌ ist feminin.", "Nach قَالَ nicht أَنَّ, und „er“."]),
  E("سَمِعْتُ ____ الْمُدَرِّسَ مَرِيضٌ.", ["أَنَّ", "إِنَّ", "لَعَلَّ", "قَالَ"], "Nach anderen Verben → أَنَّ.", ["Nur nach قَالَ.", "„hoffentlich“.", "Verb."]),
  U("Setz قَالَ davor", "أَنْتَ أَحْسَنُ طَالِبٍ.", ["قَالَ: إِنَّكَ أَحْسَنُ طَالِبٍ.", "قَالَ: أَنَّكَ أَحْسَنُ طَالِبٍ.", "قَالَ: إِنَّ أَنْتَ أَحْسَنُ طَالِبٍ.", "قَالَ: إِنَّكَ أَحْسَنَ طَالِبٍ."], "قَالَ + إِنَّكَ.", ["Nach قَالَ إِنَّ.", "Pronomen angehängt.", "Khabar marfūʿ."]),
  F("Welches Wort steht nach قَالَ?", "", ["إِنَّ", "أَنَّ", "لَكِنَّ", "لَيْسَ"], "Nach قَالَ: إِنَّ.", ["Nach anderen Verben.", "„aber“.", "Andere Sache."]),
  U("Übersetze ins Arabische", "Er sagte: Ich bin Abdullah.", ["قَالَ: إِنِّي عَبْدُ اللَّهِ.", "قَالَ: أَنِّي عَبْدُ اللَّهِ.", "قَالَ: إِنَّهُ عَبْدُ اللَّهِ.", "قَالَ: إِنِّي عَبْدَ اللَّهِ."], "قَالَ + إِنِّي.", ["Nach قَالَ إِنَّ.", "„er“ statt „ich“.", "Khabar marfūʿ."])
]);
R("b2-06", 5, [
  E("لِمَ ذَهَبْتَ؟ – Allein steht es als: ____؟", ["لِمَهْ", "لِمَا", "لِمَ", "لَمْ"], "Allein: لِمَهْ (hāʾ as-sakt).", ["Das Alif fällt weg.", "Allein mit h.", "„nicht“."]),
  F("Was ist das h in لِمَهْ?", "لِمَهْ", ["هَاءُ السَّكْتِ (Pausen-h)", "„ihn“", "Femininzeichen", "Teil der Wurzel"], "Es steht nur in der Pause.", ["Kein Pronomen.", "Kein Femininzeichen.", "Keine Wurzel."]),
  F("Was heißt لِمَ?", "لِمَ", ["warum?", "wem?", "nicht", "was?"], "لِـ + مَا = لِمَ.", ["Das wäre لِمَنْ.", "Das wäre لَمْ.", "Das wäre مَا."]),
  E("____ لَمْ تَحْضُرْ؟ (Warum …?)", ["لِمَ", "لَمْ", "لِمَنْ", "مَنْ"], "„warum“ = لِمَ.", ["„nicht“.", "„wem“.", "„wer“."])
]);
R("b2-06", 6, [
  U("Feminin", "عَطْشَانُ", ["عَطْشَى", "عَطْشَانَةٌ", "عِطَاشٌ", "عَطْشَاءُ"], "فَعْلَانُ → فَعْلَى.", ["Gibt es nicht.", "Plural.", "Farbmuster."]),
  U("Plural", "جَوْعَانُ", ["جِيَاعٌ", "جَوْعَانُونَ", "جَوْعَى", "جُوعٌ"], "Plural nach فِعَالٌ.", ["Gibt es nicht.", "Feminin Singular.", "„Hunger“."]),
  U("Plural", "كَسْلَانُ", ["كُسَالَى", "كَسْلَانُونَ", "كَسْلَى", "كِسَالٌ"], "Plural كُسَالَى.", ["Gibt es nicht.", "Feminin Singular.", "Nicht im Buch."]),
  E("الْبِنْتُ ____. (hungrig)", ["جَوْعَى", "جَوْعَانُ", "جِيَاعٌ", "جَوْعَانَةٌ"], "Feminin: جَوْعَى.", ["Maskulin.", "Plural.", "Gibt es nicht."]),
  E("النِّسَاءُ ____. (durstig)", ["عِطَاشٌ", "عَطْشَى", "عَطْشَانُ", "عَطْشَانَاتٌ"], "Plural (m. und f.) nach فِعَالٌ.", ["Singular.", "Singular.", "Gibt es nicht."]),
  F("Was ist der Plural von غَضْبَانُ (m. und f.)?", "غَضْبَانُ", ["غِضَابٌ", "غَضْبَى", "غَضْبَانُونَ", "غُضُوبٌ"], "فِعَالٌ.", ["Feminin Sg.", "Gibt es nicht.", "Nicht im Buch."])
]);
R("b2-06", 7, [
  E("يَا إِخْوَانُ، ____ الْكُتُبَ.", ["هَاتُوا", "هَاتِ", "هَاتِي", "هَاتِينَ"], "Plural m.: هَاتُوا.", ["Singular m.", "Singular f.", "Plural f."]),
  E("يَا أَخَوَاتُ، ____ الدَّفَاتِرَ.", ["هَاتِينَ", "هَاتُوا", "هَاتِي", "هَاتِ"], "Plural f.: هَاتِينَ.", ["Maskulin.", "Singular f.", "Singular m."]),
  E("يَا أَحْمَدُ، ____ الْقَلَمَ.", ["هَاتِ", "هَاتِي", "هَاتُوا", "هَاتِينَ"], "Singular m.: هَاتِ.", ["Feminin.", "Plural.", "Plural f."]),
  F("Was heißt فَفَرِحَ بِي الْمُدَرِّسُ كَثِيرًا?", "", ["So freute sich der Lehrer sehr über mich.", "Der Lehrer war sehr traurig.", "Ich freute mich über den Lehrer.", "Der Lehrer lobte mich."], "فَرِحَ بِـ = sich freuen über.", ["Gegenteil.", "Vertauscht.", "Anderes Verb."]),
  F("Was bedeutet خُذْ?", "خُذْ", ["nimm!", "gib!", "iss!", "geh!"], "Befehl von أَخَذَ.", ["هَاتِ.", "كُلْ.", "اِذْهَبْ."])
]);

/* ---------- Lektion 7 ---------- */
R("b2-07", 0, [
  E("أَيْنَ ____ يَا إِخْوَانُ؟ (Wohin seid ihr gegangen?)", ["ذَهَبْتُمْ", "ذَهَبْتُنَّ", "ذَهَبْنَا", "ذَهَبُوا"], "-tum.", ["Feminin.", "„wir“.", "„sie“."]),
  E("مَاذَا ____ يَا أَخَوَاتُ؟ (Was habt ihr getrunken?)", ["شَرِبْتُنَّ", "شَرِبْتُمْ", "شَرِبْنَ", "شَرِبْتِ"], "-tunna.", ["Maskulin.", "„sie“.", "Singular."]),
  E("____ الْأَذَانَ. (Wir hörten …)", ["سَمِعْنَا", "سَمِعْنَ", "سَمِعْتُمْ", "سَمِعُوا"], "-nā.", ["„sie (f.)“.", "„ihr“.", "„sie“."]),
  U("Statt „du (m.)“: „ihr (m.)“", "أَكَلْتَ الطَّعَامَ.", ["أَكَلْتُمُ الطَّعَامَ.", "أَكَلْتُمْ الطَّعَامَ.", "أَكَلْتُنَّ الطَّعَامَ.", "أَكَلُوا الطَّعَامَ."], "-tum; vor al: Ḍamma.", ["Vor al Ḍamma.", "Feminin.", "„sie“."]),
  U("Statt „ich“: „wir“", "حَفِظْتُ السُّورَةَ.", ["حَفِظْنَا السُّورَةَ.", "حَفِظْنَ السُّورَةَ.", "حَفِظْتُمُ السُّورَةَ.", "حَفِظَ السُّورَةَ."], "-nā.", ["„sie (f.)“.", "„ihr“.", "„er“."])
]);
R("b2-07", 1, [
  E("رَأَيْتُ____ فِي السُّوقِ. (ihn)", ["هُ", "هِ", "هَا", "هُوَ"], "رَأَيْتُهُ.", ["Nach u kein ـهِ.", "„sie“.", "Kein selbstständiges Pronomen."]),
  E("الْكِتَابُ فِي حَقِيبَتِ____. (in seiner Tasche)", ["هِ", "هُ", "هَا", "هُوَ"], "Nach i → ـهِ: حَقِيبَتِهِ.", ["Nach i wird ـهُ zu ـهِ.", "Falsch.", "Kein selbstständiges Pronomen."]),
  F("Wann wird ـهُ zu ـهِ?", "", ["nach i oder ī (فِي بَيْتِهِ، فِيهِ)", "nach a", "am Satzende", "nie"], "Vokalharmonie.", ["Nach a bleibt ـهُ.", "Kein Grund.", "Es passiert."]),
  E("رَأَيْتِ____ يَا آمِنَةُ؟ (Hast du ihn gesehen?)", ["هِ", "هُ", "هَا", "كِ"], "Nach -ti wird ـهُ zu ـهِ: رَأَيْتِهِ.", ["Nach i ـهِ.", "„sie“.", "„dich“."]),
  U("Mach das Objekt zum Pronomen", "رَأَيْتِ الْمُدِيرَ.", ["رَأَيْتِهِ.", "رَأَيْتِهُ.", "رَأَيْتَهُ.", "رَأَيْتِهَا."], "Nach -ti → ـهِ.", ["Nach i ـهِ.", "„du (m.)“.", "Feminin."])
]);
R("b2-07", 2, [
  E("أَرَأَيْتُ____؟ (Habt ihr ihn gesehen?)", ["مُوهُ", "مْهُ", "مُهُ", "وهُ"], "-tum + wāw + ـهُ.", ["Es fehlt das wāw.", "Es fehlt das wāw.", "Es fehlt das m."]),
  U("Statt „du“: „ihr (m.)“", "سَأَلْتَهَا", ["سَأَلْتُمُوهَا", "سَأَلْتُمْهَا", "سَأَلْتُنَّهَا", "سَأَلُوهَا"], "-tum + ū + ـهَا.", ["wāw fehlt.", "Feminin.", "„sie fragten“."]),
  U("Statt „du“: „ihr (m.)“", "غَسَلْتَهُ", ["غَسَلْتُمُوهُ", "غَسَلْتُمْهُ", "غَسَلْتُمُهُ", "غَسَلُوهُ"], "-tumūhu.", ["wāw fehlt.", "wāw fehlt.", "„sie wuschen“."]),
  U("Statt „du“: „ihr (m.)“", "رَأَيْتَهُمْ", ["رَأَيْتُمُوهُمْ", "رَأَيْتُمْهُمْ", "رَأَيْتُنَّهُمْ", "رَأَوْهُمْ"], "-tumūhum.", ["wāw fehlt.", "Feminin.", "„sie sahen“."]),
  F("Was wird nach ـتُمْ vor ein Objekt-Pronomen eingefügt?", "", ["ein wāw", "ein Alif", "ein nūn", "nichts"], "رَأَيْتُمُوهُ.", ["Kein Alif.", "Kein nūn.", "Es wird etwas eingefügt."]),
  U("Übersetze ins Arabische", "Habt ihr sie (Sg.) gefragt?", ["أَسَأَلْتُمُوهَا؟", "أَسَأَلْتُمْهَا؟", "أَسَأَلْتُنَّهَا؟", "أَسَأَلُوهَا؟"], "-tumūhā.", ["wāw fehlt.", "Feminin.", "„sie fragten“."]),
  F("Welche Form ist richtig: „Ihr habt sie (Pl. f.) gesehen.“", "", ["رَأَيْتُمُوهُنَّ", "رَأَيْتُمْهُنَّ", "رَأَيْتُمُهُنَّ", "رَأَيْتُنَّهُنَّ"], "-tumūhunna.", ["wāw fehlt.", "wāw fehlt.", "„ihr (f.)“."])
]);
R("b2-07", 3, [
  E("كَانَ الْجَوُّ ____.", ["حَارًّا", "حَارٌّ", "حَارٍّ", "بِحَارٍّ"], "Khabar von كَانَ → manṣūb.", ["manṣūb.", "Kein Genitiv.", "بِـ gehört zu لَيْسَ."])
]);
R("b2-07", 4, [
  E("رَأَيْتُ الرَّجُلَ ذَا ____. (den bärtigen Mann)", ["اللِّحْيَةِ", "لِحْيَةٍ", "اللِّحْيَةَ", "لِحْيَةً"], "Bestimmtes Nomen → Muḍāf ilaihi mit al.", ["Bestimmt.", "Genitiv.", "Genitiv."]),
  E("الْمَسْجِدُ ____ الْمَنَارَةِ الْوَاحِدَةِ قَدِيمٌ.", ["ذُو", "ذَا", "ذِي", "الذُّو"], "Nominativ: ذُو.", ["Akkusativ.", "Genitiv.", "ذُو bekommt kein al."]),
  E("هَذَا رَجُلٌ ذُو ____.", ["لِحْيَةٍ", "اللِّحْيَةِ", "لِحْيَةٌ", "لِحْيَةً"], "Unbestimmtes Nomen → Muḍāf ilaihi ohne al.", ["Unbestimmt.", "Genitiv.", "Genitiv."]),
  U("Mach es bestimmt", "كِتَابٌ ذُو غِلَافٍ جَمِيلٍ", ["الْكِتَابُ ذُو الْغِلَافِ الْجَمِيلِ", "الْكِتَابُ الذُّو غِلَافٍ جَمِيلٍ", "الْكِتَابُ ذُو غِلَافٍ جَمِيلٍ", "كِتَابٌ ذُو الْغِلَافِ الْجَمِيلِ"], "Das Muḍāf ilaihi (und sein Adjektiv) bekommt al.", ["ذُو bekommt kein al.", "Muḍāf ilaihi muss bestimmt werden.", "Nomen muss bestimmt werden."]),
  F("Warum steht in الرَّجُلُ ذُو اللِّحْيَةِ das al an لِحْيَة?", "", ["ذُو ist Muḍāf und kann kein al haben.", "Weil لِحْيَةٌ weiblich ist.", "Weil es Plural ist.", "Ohne Grund."], "Die Bestimmtheit wird über das Muḍāf ilaihi ausgedrückt.", ["Nicht wegen des Geschlechts.", "Es ist Singular.", "Es gibt einen Grund."])
]);
R("b2-07", 5, [
  F("Wie spricht man أَرَأَيْتُمُ الْإِمَامَ?", "أَرَأَيْتُمُ الْإِمَامَ", ["araʾaitumu-l-imāma", "araʾaitum al-imāma", "araʾaitumi-l-imāma", "araʾaitum-l-imāma"], "Vor Hamzat al-waṣl: mīm mit Ḍamma.", ["Zwei Sukūn.", "Hilfsvokal ist Ḍamma.", "Zwei Sukūn."]),
  E("كِتَابُكُ____ الْجَدِيدُ جَمِيلٌ.", ["مُ", "مْ", "مِ", "مَ"], "Ḍamma vor al.", ["Zwei Sukūn.", "Hier Ḍamma.", "Hier Ḍamma."]),
  E("هُ____ الطُّلَّابُ الْجُدُدُ.", ["مُ", "مْ", "مِ", "مَ"], "هُمُ الطُّلَّابُ.", ["Zwei Sukūn.", "Hier Ḍamma.", "Hier Ḍamma."]),
  E("أَسَأَلْتُ____ ابْنَهُ؟", ["مُ", "مْ", "مِ", "مَا"], "أَسَأَلْتُمُ ابْنَهُ؟", ["Zwei Sukūn.", "Hier Ḍamma.", "Das wäre Dual."]),
  F("Welcher Hilfsvokal kommt an das mīm von ـكُمْ vor al?", "", ["Ḍamma", "Kasra", "Fatḥa", "keiner"], "بَيْتُكُمُ الْجَدِيدُ.", ["Sonst meist Kasra, hier Ḍamma.", "Nein.", "Einer ist nötig."]),
  U("Füge „der neue“ an", "بَيْتُهُمْ", ["بَيْتُهُمُ الْجَدِيدُ", "بَيْتُهُمْ الْجَدِيدُ", "بَيْتُهُمِ الْجَدِيدُ", "بَيْتُهُمَ الْجَدِيدُ"], "mīm mit Ḍamma vor al.", ["Zwei Sukūn.", "Ḍamma, nicht Kasra.", "Ḍamma, nicht Fatḥa."]),
  U("Füge „den Lehrer“ an", "سَأَلْتُمْ", ["سَأَلْتُمُ الْمُدَرِّسَ", "سَأَلْتُمْ الْمُدَرِّسَ", "سَأَلْتُمِ الْمُدَرِّسَ", "سَأَلْتُمُوا الْمُدَرِّسَ"], "Ḍamma vor al.", ["Zwei Sukūn.", "Ḍamma.", "Kein wāw ohne Pronomen."])
]);
R("b2-07", 6, [
  F("Was antwortet man mit أَبْشِرْ?", "أَبْشِرْ", ["„Keine Sorge, du bekommst es“ – auf eine Bitte", "„Auf Wiedersehen“", "„Danke“", "„Entschuldigung“"], "Wörtlich „Freu dich über die gute Nachricht“.", ["Falsch.", "Falsch.", "Falsch."]),
  E("أُرِيدُ قَلَمًا يَا أَخِي. – ____!", ["أَبْشِرْ", "شُكْرًا", "عَفْوًا", "مَعَ السَّلَامَةِ"], "Zusage auf eine Bitte.", ["Das sagt der Bittende.", "Falsch.", "„Auf Wiedersehen“."]),
  F("Wann sagt man أَبْشِرْ?", "", ["wenn jemand um etwas bittet und man zusagt", "beim Abschied", "beim Essen", "beim Niesen"], "Antwort auf eine Bitte.", ["Falsch.", "Falsch.", "Falsch."])
]);
R("b2-07", 7, [
  F("Was ist ثُلُثٌ?", "ثُلُثٌ", ["ein Drittel", "dritter", "drei", "dreißig"], "Bruch nach فُعْلٌ / فُعُلٌ.", ["ثَالِثٌ.", "ثَلَاثَةٌ.", "ثَلَاثُونَ."]),
  F("Was ist رُبْعٌ?", "رُبْعٌ", ["ein Viertel", "vierter", "vier", "vierzig"], "Bruch.", ["رَابِعٌ.", "أَرْبَعَةٌ.", "أَرْبَعُونَ."]),
  F("Was heißt „ein Fünftel“?", "", ["خُمْسٌ", "خَامِسٌ", "خَمْسَةٌ", "خَمْسُونَ"], "Muster فُعْلٌ.", ["„fünfter“.", "„fünf“.", "„fünfzig“."]),
  F("Was heißt „ein Sechstel“?", "", ["سُدُسٌ", "سَادِسٌ", "سِتَّةٌ", "سِتُّونَ"], "سُدُسٌ behält das Ḍamma.", ["„sechster“.", "„sechs“.", "„sechzig“."]),
  F("Was heißt „die Hälfte“?", "", ["نِصْفٌ", "ثَانٍ", "اثْنَانِ", "ثُنْيٌ"], "نِصْفٌ.", ["„zweiter“.", "„zwei“.", "Nicht im Buch."]),
  E("أَكَلْتُ ____ الْخُبْزِ. (die Hälfte)", ["نِصْفَ", "نِصْفُ", "نِصْفِ", "نِصْفًا"], "Objekt, Muḍāf → نِصْفَ.", ["Objekt manṣūb.", "Kein Genitiv.", "Muḍāf → kein Tanwīn."])
]);

/* ---------- Lektion 8 ---------- */
R("b2-08", 0, [
  U("Bilde die Form für „er“", "ذَهَبْتُ", ["ذَهَبَ", "ذَهَبَتْ", "ذَهَبْتَ", "ذَهَبُوا"], "Perfekt 3. P. Sg. m.", ["„sie“.", "„du“.", "„sie (Pl.)“."]),
  U("Bilde die Form für „sie (f. Sg.)“", "كَتَبَ", ["كَتَبَتْ", "كَتَبْتِ", "كَتَبْنَ", "كَتَبَتِ"], "-at.", ["„du (f.)“.", "„sie (Pl.)“.", "Nur vor al Kasra."]),
  F("Welche Form fehlt in dieser Wiederholung (kommt in Lektion 30)?", "", ["der Dual", "der Plural", "„ich“", "„wir“"], "Der Dual folgt später.", ["Wird wiederholt.", "Wird wiederholt.", "Wird wiederholt."]),
  F("Wie viele Personen-Formen hat das Perfekt ohne Dual?", "", ["10", "8", "12", "6"], "er, sie, sie Pl. m., sie Pl. f., du m., du f., ihr m., ihr f., ich, wir.", ["Zu wenig.", "Mit Dual wären es mehr.", "Zu wenig."])
]);
R("b2-08", 1, [
  E("هِيَ ____ الدَّرْسَ.", ["كَتَبَتِ", "كَتَبْتِ", "كَتَبَتْ", "كَتَبْنَ"], "sie: -at; vor al Kasra.", ["„du (f.)“.", "Vor al wird Sukūn zu Kasra.", "Plural."]),
  E("هُمْ ____ إِلَى الْجَامِعَةِ.", ["ذَهَبُوا", "ذَهَبْنَ", "ذَهَبَ", "ذَهَبْتُمْ"], "-ū.", ["Feminin.", "Singular.", "„ihr“."]),
  E("هُنَّ ____ فِي الْحَدِيقَةِ.", ["جَلَسْنَ", "جَلَسُوا", "جَلَسَتْ", "جَلَسْنَا"], "-na.", ["Maskulin.", "Singular.", "„wir“."]),
  F("Was ist der Fāʿil in ذَهَبُوا?", "ذَهَبُوا", ["das wāw", "das Alif", "unsichtbar", "das ب"], "Das wāw.", ["Das Alif wird nicht gesprochen.", "Sichtbar.", "Radikal."]),
  F("Was ist der Fāʿil in ذَهَبَتْ?", "ذَهَبَتْ", ["ein unsichtbares هِيَ", "das تْ", "das ب", "keiner"], "تْ = Femininzeichen.", ["Nur Zeichen.", "Radikal.", "Es gibt einen."])
]);
R("b2-08", 2, [
  E("أَنْتَ ____ الْبَابَ.", ["فَتَحْتَ", "فَتَحْتِ", "فَتَحْتُ", "فَتَحَتْ"], "du (m.) -ta.", ["du (f.).", "ich.", "sie."]),
  E("أَنْتِ ____ الْبَابَ.", ["فَتَحْتِ", "فَتَحْتَ", "فَتَحَتْ", "فَتَحْتُنَّ"], "du (f.) -ti.", ["du (m.).", "sie.", "ihr (f.)."]),
  E("أَنْتُمْ ____ الْبَابَ.", ["فَتَحْتُمُ", "فَتَحْتُنَّ", "فَتَحُوا", "فَتَحْنَا"], "ihr (m.) -tum (vor al -tumu).", ["ihr (f.).", "sie.", "wir."]),
  E("أَنْتُنَّ ____ الْبَابَ.", ["فَتَحْتُنَّ", "فَتَحْتُمْ", "فَتَحْنَ", "فَتَحْتِ"], "ihr (f.) -tunna.", ["ihr (m.).", "sie (f.).", "du (f.)."]),
  F("Was ist in ذَهَبْتُمْ der Fāʿil?", "ذَهَبْتُمْ", ["das تُ (mit مْ als Pluralzeichen)", "das مْ allein", "unsichtbar", "das ب"], "Fāʿil ist das tāʾ.", ["Das mīm zeigt den Plural.", "Sichtbar.", "Radikal."]),
  U("Bilde die Form für „du (f.)“", "دَخَلَ", ["دَخَلْتِ", "دَخَلَتْ", "دَخَلْتَ", "دَخَلْنَ"], "-ti.", ["„sie“.", "„du (m.)“.", "„sie (Pl.)“."]),
  U("Bilde die Form für „ihr (m.)“", "رَجَعَ", ["رَجَعْتُمْ", "رَجَعُوا", "رَجَعْتُنَّ", "رَجَعْنَا"], "-tum.", ["„sie“.", "„ihr (f.)“.", "„wir“."]),
  U("Bilde die Form für „ihr (f.)“", "سَمِعَ", ["سَمِعْتُنَّ", "سَمِعْتُمْ", "سَمِعْنَ", "سَمِعْتِ"], "-tunna.", ["Maskulin.", "„sie“.", "Singular."])
]);
R("b2-08", 3, [
  E("أَنَا ____ الْقُرْآنَ.", ["حَفِظْتُ", "حَفِظْنَا", "حَفِظْتَ", "حَفِظَ"], "ich: -tu.", ["wir.", "du.", "er."]),
  E("نَحْنُ ____ الْقُرْآنَ.", ["حَفِظْنَا", "حَفِظْنَ", "حَفِظْتُ", "حَفِظْتُمْ"], "wir: -nā.", ["sie (f.).", "ich.", "ihr."]),
  F("Was ist der Fāʿil in ذَهَبْنَا?", "ذَهَبْنَا", ["das نَا", "das ب", "unsichtbar", "das Alif allein"], "نَا = wir.", ["Radikal.", "Sichtbar.", "Das ganze نَا."]),
  U("Bilde die Form für „ich“", "شَرِبَ", ["شَرِبْتُ", "شَرِبْتَ", "شَرِبْنَا", "شَرِبَتْ"], "-tu.", ["du.", "wir.", "sie."]),
  U("Bilde die Form für „wir“", "فَهِمَ", ["فَهِمْنَا", "فَهِمْنَ", "فَهِمْتُمْ", "فَهِمُوا"], "-nā.", ["sie (f.).", "ihr.", "sie."]),
  U("Statt „wir“: „ich“", "أَكَلْنَا التَّمْرَ.", ["أَكَلْتُ التَّمْرَ.", "أَكَلْتَ التَّمْرَ.", "أَكَلَ التَّمْرَ.", "أَكَلْنَ التَّمْرَ."], "-nā → -tu.", ["du.", "er.", "sie (f.)."]),
  U("Statt „ich“: „wir“", "خَرَجْتُ مِنَ الْبَيْتِ.", ["خَرَجْنَا مِنَ الْبَيْتِ.", "خَرَجْنَ مِنَ الْبَيْتِ.", "خَرَجْتُمْ مِنَ الْبَيْتِ.", "خَرَجُوا مِنَ الْبَيْتِ."], "-tu → -nā.", ["sie (f.).", "ihr.", "sie."]),
  F("Welche Form ist „wir gingen“?", "", ["ذَهَبْنَا", "ذَهَبْنَ", "ذَهَبُوا", "ذَهَبْتُمْ"], "Langes ā.", ["Kurzes a: sie (f.).", "sie (m.).", "ihr."])
]);
R("b2-08", 4, [
  F("Welche Endung bekommt der 3. Radikal in ذَهَبَتْ?", "ذَهَبَتْ", ["Fatḥa", "Sukūn", "Ḍamma", "Kasra"], "Vor -at bleibt Fatḥa.", ["Sukūn nur vor Konsonant-Endungen.", "Nur vor -ū.", "Nie."]),
  F("Welche Endung bekommt der 3. Radikal in ذَهَبْنَا?", "ذَهَبْنَا", ["Sukūn", "Fatḥa", "Ḍamma", "Kasra"], "Vor -nā: Sukūn.", ["Nein.", "Nein.", "Nein."])
]);
R("b2-08", 5, [
  F("Wie lautet der Iʿrāb von ذَهَبْتُ?", "ذَهَبْتُ", ["فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى السُّكُونِ، وَالتَّاءُ ضَمِيرٌ مُتَّصِلٌ فِي مَحَلِّ رَفْعٍ فَاعِلٌ", "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الْفَتْحِ، وَالْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ", "فِعْلٌ مُضَارِعٌ مَرْفُوعٌ", "اسْمٌ مَرْفُوعٌ"], "Sukūn + tāʾ als Fāʿil.", ["Das passt zu ذَهَبَ.", "Kein Muḍāriʿ.", "Kein Nomen."]),
  F("Wie lautet der Iʿrāb von ذَهَبَ (ohne Nomen)?", "ذَهَبَ", ["فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الْفَتْحِ، وَالْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ تَقْدِيرُهُ هُوَ", "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى السُّكُونِ", "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الضَّمِّ", "اسْمٌ مَنْصُوبٌ"], "Fatḥa + verstecktes هُوَ.", ["Das ist ذَهَبْتُ.", "Das ist ذَهَبُوا.", "Kein Nomen."]),
  F("Auf was ist ذَهَبُوا gebaut (مَبْنِيٌّ عَلَى …)?", "ذَهَبُوا", ["الضَّمِّ", "الْفَتْحِ", "السُّكُونِ", "الْكَسْرِ"], "Vor -ū Ḍamma.", ["Das ist ذَهَبَ.", "Das ist ذَهَبْتُ.", "Kommt nicht vor."]),
  F("Was bedeutet فِي مَحَلِّ رَفْعٍ?", "", ["an der Stelle eines Nominativs (ohne sichtbare Endung)", "im Genitiv", "ohne Fall", "im Akkusativ"], "Pronomen sind mabnī, stehen aber an einer Fallstelle.", ["Nicht Genitiv.", "Es hat eine Stelle.", "Nicht Akkusativ."]),
  F("Was ist in ذَهَبْنَا das نَا nach der Analyse?", "ذَهَبْنَا", ["ضَمِيرٌ مُتَّصِلٌ فِي مَحَلِّ رَفْعٍ فَاعِلٌ", "حَرْفٌ", "مَفْعُولٌ بِهِ", "ضَمِيرٌ مُسْتَتِرٌ"], "Angehängtes Pronomen als Fāʿil.", ["Pronomen, kein Ḥarf.", "Kein Objekt.", "Sichtbar."]),
  F("Was ist ضَمِيرٌ مُتَّصِلٌ?", "", ["ein angehängtes Pronomen", "ein unsichtbares Pronomen", "ein Demonstrativ", "ein Relativpronomen"], "مُتَّصِلٌ = verbunden.", ["Das ist مُسْتَتِرٌ.", "Anderes.", "Anderes."])
]);

/* ---------- Lektion 9 ---------- */
R("b2-09", 0, [
  E("رَأَيْتُ ____ فِي الْمَسْجِدِ. (die Musliminnen)", ["الْمُسْلِمَاتِ", "الْمُسْلِمَاتَ", "الْمُسْلِمَاتُ", "مُسْلِمَاتٍ"], "-āt im Akkusativ: Kasra.", ["Kein Fatḥa.", "Nominativ.", "Unbestimmt – gemeint ist „die …“."]),
  U("Mach es zum Objekt", "الطَّالِبَاتُ", ["سَأَلْتُ الطَّالِبَاتِ.", "سَأَلْتُ الطَّالِبَاتَ.", "سَأَلْتُ الطَّالِبَاتُ.", "سَأَلْتُ الطَّالِبَاتًا."], "Kasra im Akkusativ.", ["Kein Fatḥa.", "Nominativ.", "Falsch."]),
  E("إِنَّ ____ مُجْتَهِدَاتٌ.", ["الْمُدَرِّسَاتِ", "الْمُدَرِّسَاتَ", "الْمُدَرِّسَاتُ", "مُدَرِّسَاتٌ"], "Ism von إِنَّ, fem. Plural → Kasra.", ["Kein Fatḥa.", "Nominativ.", "Nominativ."])
]);
R("b2-09", 1, [
  E("سَأَلَ____ الْمُدِيرُ. (Der Direktor fragte mich.)", ["نِي", "ي", "كَ", "هَا"], "ـنِي mit nūn al-wiqāya.", ["nūn fehlt.", "„dich“.", "„sie“."]),
  U("Statt „ihn“: „mich“", "خَلَقَهُ اللَّهُ.", ["خَلَقَنِي اللَّهُ.", "خَلَقِي اللَّهُ.", "خَلَقْتُ اللَّهَ.", "خَلَقَكَ اللَّهُ."], "ـنِي.", ["nūn fehlt.", "Sinnwidrig.", "„dich“."]),
  F("Wie heißt das n in رَأَيْتَنِي?", "رَأَيْتَنِي", ["نُونُ الْوِقَايَةِ", "نُونُ النِّسْوَةِ", "تَنْوِينٌ", "نُونُ الرَّفْعِ"], "„nūn des Schutzes“ – schützt den Vokal des Verbs.", ["Das ist das nūn der Frauen.", "Kein Tanwīn.", "Indikativ-nūn."])
]);
R("b2-09", 2, [
  E("مَا ____ النُّجُومَ!", ["أَكْثَرَ", "أَكْثَرُ", "كَثِيرَةٌ", "أَكْثَرِ"], "مَا أَفْعَلَ.", ["Falscher Vokal.", "Kein Adjektiv.", "Falscher Vokal."]),
  E("مَا أَطْيَبَ____! (Wie gut du bist!)", ["كَ", "أَنْتَ", "كُ", "هُوَ"], "مَا أَطْيَبَكَ!", ["Kein selbstständiges Pronomen.", "Falsch.", "Kein selbstständiges Pronomen."]),
  U("Mach daraus Staunen", "الْقَمَرُ جَمِيلٌ.", ["مَا أَجْمَلَ الْقَمَرَ!", "مَا أَجْمَلُ الْقَمَرُ!", "مَا جَمِيلٌ الْقَمَرُ!", "مَا أَجْمَلَ الْقَمَرُ!"], "مَا أَفْعَلَ + manṣūb.", ["Falsche Vokale.", "Muster.", "manṣūb."])
]);
R("b2-09", 3, [
  E("يَا ____ الْمُدِيرِ!", ["ابْنَ", "ابْنُ", "ابْنِ", "ابْنًا"], "Muḍāf nach يَا → manṣūb.", ["Muḍāf manṣūb.", "Kein Genitiv.", "Kein Tanwīn."]),
  E("يَا ____! (O unser Herr)", ["رَبَّنَا", "رَبُّنَا", "رَبِّنَا", "رَبٌّ"], "Muḍāf → manṣūb.", ["Muḍāf manṣūb.", "Kein Genitiv.", "Falsch."]),
  U("Ruf an", "طَالِبُ الْعِلْمِ", ["يَا طَالِبَ الْعِلْمِ", "يَا طَالِبُ الْعِلْمِ", "يَا طَالِبِ الْعِلْمِ", "يَا طَالِبًا الْعِلْمِ"], "Muḍāf → manṣūb.", ["Muḍāf manṣūb.", "Kein Genitiv.", "Kein Tanwīn."]),
  F("Wann ist das Nomen nach يَا manṣūb?", "", ["wenn es Muḍāf ist", "immer", "wenn es ein Name ist", "nie"], "يَا عَبْدَ اللَّهِ – aber يَا حَامِدُ.", ["Einfache Nomen: Ḍamma.", "Namen: Ḍamma.", "Als Muḍāf schon."])
]);
R("b2-09", 4, [
  E("كَمْ ____ عِنْدَكَ؟", ["رِيَالًا", "رِيَالٍ", "رِيَالَاتٍ", "رِيَالٌ"], "Ohne Präposition: Singular manṣūb.", ["Ohne Präposition manṣūb.", "Singular.", "manṣūb."]),
  E("بِكَمْ ____ اشْتَرَيْتَ هَذَا؟", ["رِيَالًا", "رِيَالَاتٍ", "رِيَالٌ", "الرِّيَالِ"], "Mit Präposition: manṣūb oder majrūr – hier manṣūb.", ["Singular.", "Nicht marfūʿ.", "Unbestimmt."]),
  E("فِي كَمْ ____ قَرَأْتَ الْكِتَابَ؟", ["يَوْمٍ", "أَيَّامٍ", "يَوْمٌ", "الْيَوْمِ"], "Nach Präposition vor كَمْ auch majrūr erlaubt.", ["Singular.", "Nicht marfūʿ.", "Unbestimmt."]),
  F("Welche Fälle sind nach بِكَمْ möglich?", "بِكَمْ رِيَالًا / رِيَالٍ", ["manṣūb oder majrūr", "nur marfūʿ", "nur majrūr", "nur manṣūb"], "Mit Präposition vor كَمْ beides.", ["Nie marfūʿ.", "Auch manṣūb.", "Auch majrūr."]),
  U("Frag nach dem Preis", "اشْتَرَيْتُهُ بِعَشَرَةِ رِيَالَاتٍ.", ["بِكَمْ رِيَالًا اشْتَرَيْتَهُ؟", "كَمْ رِيَالَاتٍ اشْتَرَيْتَهُ؟", "بِكَمْ رِيَالَاتٌ اشْتَرَيْتَهُ؟", "بِكَمْ اشْتَرَيْتُهُ رِيَالٌ؟"], "بِكَمْ + Singular.", ["Singular, und بِـ.", "Singular.", "Falsch."]),
  U("Übersetze ins Arabische", "Wie viele Stunden hast du geschlafen?", ["كَمْ سَاعَةً نِمْتَ؟", "كَمْ سَاعَاتٍ نِمْتَ؟", "كَمْ سَاعَةٌ نِمْتَ؟", "كَمْ السَّاعَةَ نِمْتَ؟"], "كَمْ + Singular manṣūb.", ["Singular.", "manṣūb.", "Unbestimmt."]),
  F("In welchem Fall steht das Nomen nach كَمْ (ohne Präposition)?", "", ["manṣūb, Singular", "majrūr, Plural", "marfūʿ, Singular", "manṣūb, Plural"], "كَمْ كِتَابًا.", ["Falsch.", "Falsch.", "Singular."]),
  E("كَمْ ____ فِي السَّنَةِ؟", ["شَهْرًا", "أَشْهُرٍ", "شُهُورًا", "شَهْرٌ"], "Singular manṣūb.", ["Singular.", "Singular.", "manṣūb."])
]);
R("b2-09", 5, [
  E("____ تَكْتُبُ؟ (Womit …?)", ["بِمَ", "بِمَا", "بِمَنْ", "مِمَّ"], "بِـ + مَا → بِمَ.", ["Alif fällt weg.", "„mit wem“.", "„wovon“."]),
  E("____ تَسْأَلُ؟ (Worüber fragst du?)", ["عَمَّ", "عَنْ مَا", "عَمَّا", "مِمَّ"], "عَنْ + مَا → عَمَّ.", ["Wird zusammengezogen.", "Alif fällt weg.", "„wovon“."]),
  E("____ هَذَا الْبَابُ؟ (Woraus ist diese Tür?)", ["مِمَّ", "مِنْ مَا", "مِمَّا", "بِمَ"], "مِنْ + مَا → مِمَّ.", ["Wird zusammengezogen.", "Alif fällt weg.", "„womit“."]),
  E("____ ذَهَبْتَ؟ (Warum …?)", ["لِمَ", "لِمَا", "لِمَنْ", "لَمْ"], "لِـ + مَا → لِمَ.", ["Alif fällt weg.", "„für wen“.", "„nicht“."]),
  F("Warum fällt in بِمَ das Alif weg?", "بِمَ", ["Vor dem Frage-مَا mit Präposition fällt das Alif weg.", "Weil بِـ ein Kasra hat.", "Wegen des Reims.", "Es ist ein Fehler."], "بِمَ، لِمَ، مِمَّ، عَمَّ.", ["Kein Grund.", "Nein.", "Es ist richtig."]),
  F("Was ist مِمَّ entstanden aus?", "مِمَّ", ["مِنْ + مَا", "مِنْ + مَنْ", "مَا + مَا", "مِنْ + مِ"], "n wird an m angeglichen.", ["„von wem“ = مِمَّنْ.", "Falsch.", "Falsch."]),
  F("Was heißt عَمَّ?", "عَمَّ", ["worüber?", "Onkel", "warum?", "womit?"], "عَنْ + مَا.", ["عَمٌّ (ohne Fragesinn).", "لِمَ.", "بِمَ."])
]);
R("b2-09", 6, [
  E("الْأَوْلَادُ ____ ذَهَبُوا إِلَى الْمَدْرَسَةِ إِخْوَتِي.", ["الَّذِينَ", "الَّذِي", "اللَّاتِي", "الَّتِي"], "Plural m.: الَّذِينَ.", ["Singular.", "Feminin.", "Feminin Singular."]),
  E("النِّسَاءُ ____ خَرَجْنَ مُدَرِّسَاتٌ.", ["اللَّاتِي", "الَّذِينَ", "الَّتِي", "الَّذِي"], "Plural f.: اللَّاتِي.", ["Maskulin.", "Singular.", "Maskulin Singular."]),
  U("Plural", "الطَّالِبُ الَّذِي نَجَحَ", ["الطُّلَّابُ الَّذِينَ نَجَحُوا", "الطُّلَّابُ الَّذِي نَجَحُوا", "الطُّلَّابُ الَّذِينَ نَجَحَ", "الطُّلَّابُ اللَّاتِي نَجَحُوا"], "الَّذِينَ + Plural-Verb.", ["Relativpronomen Plural.", "Verb Plural.", "Feminin."]),
  U("Plural", "الْبِنْتُ الَّتِي جَلَسَتْ", ["الْبَنَاتُ اللَّاتِي جَلَسْنَ", "الْبَنَاتُ الَّتِي جَلَسَتْ", "الْبَنَاتُ الَّذِينَ جَلَسْنَ", "الْبَنَاتُ اللَّاتِي جَلَسُوا"], "اللَّاتِي + جَلَسْنَ.", ["Plural.", "Feminin.", "Feminin."]),
  U("Mach es maskulin", "الْمُدَرِّسَاتُ اللَّاتِي حَضَرْنَ", ["الْمُدَرِّسُونَ الَّذِينَ حَضَرُوا", "الْمُدَرِّسُونَ اللَّاتِي حَضَرُوا", "الْمُدَرِّسُونَ الَّذِينَ حَضَرْنَ", "الْمُدَرِّسُونَ الَّذِي حَضَرُوا"], "الَّذِينَ + -ū.", ["Feminin.", "Verb maskulin.", "Plural."])
]);
R("b2-09", 7, [
  F("Wie wird أَ + الْيَوْمَ geschrieben?", "", ["آلْيَوْمَ", "أَالْيَوْمَ", "أَلْيَوْمَ", "الْيَوْمَ"], "أَ vor al → آ.", ["Wird zu آ.", "Frage geht verloren.", "Frage fehlt."]),
  E("____مُدَرِّسُ قَالَ لَكَ هَذَا؟ (Hat der Lehrer …?)", ["آلْ", "أَالْ", "أَلْ", "الْ"], "Fragepartikel vor al → آ.", ["Wird zu آ.", "Dann keine Frage.", "Keine Frage."]),
  U("Mach daraus eine Frage", "الْمُدِيرُ فِي مَكْتَبِهِ.", ["آلْمُدِيرُ فِي مَكْتَبِهِ؟", "أَالْمُدِيرُ فِي مَكْتَبِهِ؟", "مَا الْمُدِيرُ فِي مَكْتَبِهِ؟", "الْمُدِيرُ آفِي مَكْتَبِهِ؟"], "أَ + al → آ.", ["Wird zu آ.", "مَا fragt „was“.", "Falsch."]),
  F("Was passiert mit مَعْنًى vor einem Pronomen?", "مَعْنًى", ["ى wird zu ا: مَعْنَاهُ", "ى bleibt: مَعْنَىهُ", "ى fällt weg: مَعْنُهُ", "Es wird مَعْنِيهِ"], "End-ى → ا vor Pronomen.", ["Wird zu ا.", "Fällt nicht weg.", "Falsch."]),
  E("مَا ____؟ (Was ist seine Bedeutung?)", ["مَعْنَاهُ", "مَعْنَىهُ", "مَعْنَيُهُ", "مَعْنُهُ"], "مَعْنًى → مَعْنَاهُ.", ["ى wird ا.", "Falsch.", "Falsch."]),
  E("هَذَا الْقَمِيصُ ____ أَبِي. (Mein Vater bügelte es.)", ["كَوَاهُ", "كَوَىهُ", "كَوِيهُ", "كَوُهُ"], "كَوَى + ـهُ → كَوَاهُ.", ["ى wird ا.", "Falsch.", "Falsch."])
]);
R("b2-09", 8, [
  E("جَاءَ الطُّلَّابُ الْجُدُدُ ____. (die fünf)", ["الْخَمْسَةُ", "خَمْسَةُ", "الْخَامِسُ", "الْخَمْسُ"], "Zahl als Adjektiv, nach dem Gezählten, bestimmt.", ["Bestimmt.", "Ordnungszahl.", "Feminin."]),
  E("قَرَأْتُ الْكُتُبَ ____. (die vier)", ["الْأَرْبَعَةَ", "الْأَرْبَعَةُ", "أَرْبَعَةَ", "الْأَرْبَعَ"], "Adjektiv folgt dem Akkusativ.", ["Fall.", "Bestimmtheit.", "Geschlecht."]),
  F("Was heißt الصِّحَاحُ السِّتَّةُ?", "", ["die sechs Ṣaḥīḥ-Werke", "das sechste Ṣaḥīḥ", "sechs Ṣaḥīḥ", "sechzig Ṣaḥīḥ"], "Zahl als Adjektiv.", ["Ordnungszahl.", "Unbestimmt.", "Falsch."]),
  E("____ رَأَيْتُ. (Bilāl war es, den ich sah.)", ["بِلَالًا", "بِلَالٌ", "بِلَالٍ", "بِلَالُ"], "Vorangestelltes Objekt bleibt manṣūb.", ["Objekt.", "Kein Genitiv.", "Falsch."]),
  F("Was bewirkt das vorangestellte Objekt in إِيَّاكَ نَعْبُدُ / بِلَالًا رَأَيْتُ?", "", ["Betonung („gerade ihn …“)", "Eine Frage", "Eine Verneinung", "Nichts"], "Vorangestellt = betont.", ["Keine Frage.", "Keine Verneinung.", "Es betont."]),
  U("Betone das Objekt", "رَأَيْتُ حَامِدًا.", ["حَامِدًا رَأَيْتُ.", "حَامِدٌ رَأَيْتُ.", "رَأَيْتُ حَامِدٌ.", "حَامِدًا رَأَيْتُهُ حَامِدٌ."], "Objekt nach vorne, manṣūb.", ["manṣūb.", "manṣūb.", "Falsch."]),
  U("Übersetze ins Arabische", "Seid ihr zum Direktor gegangen?", ["أَإِلَى الْمُدِيرِ ذَهَبْتُمْ؟", "أَإِلَى الْمُدِيرُ ذَهَبْتُمْ؟", "أَإِلَى الْمُدِيرِ ذَهَبْتُنَّ؟", "إِلَى الْمُدِيرِ أَذَهَبْتُمْ؟"], "Vorangestellte Ergänzung (wie im Buch).", ["Genitiv.", "Feminin.", "Falsch."])
]);

/* ---------- Lektion 10 ---------- */
R("b2-10", 0, [
  F("Welche drei Verbformen gibt es im Arabischen?", "", ["Perfekt, Muḍāriʿ (Präsens/Futur), Befehl", "Präsens, Präteritum, Futur", "Perfekt, Plusquamperfekt, Futur", "Aktiv, Passiv, Befehl"], "الْمَاضِي، الْمُضَارِعُ، الْأَمْرُ.", ["Nicht so eingeteilt.", "Nicht so eingeteilt.", "Nicht diese Einteilung."]),
  F("Welche Buchstaben können den Muḍāriʿ einleiten?", "", ["أ، ت، ي، ن", "م، ن، ت، ا", "س، ت، ي، و", "ا، ل، م، ن"], "Merkwort: أَنَيْتُ.", ["Nicht م/ا.", "Nicht س/و.", "Nicht ل/م."]),
  F("Was kann يَكْتُبُ bedeuten?", "يَكْتُبُ", ["er schreibt / schreibt gerade / wird schreiben", "er schrieb", "schreib!", "Schreiben"], "Muḍāriʿ = Präsens und Futur.", ["Das ist كَتَبَ.", "Das ist اُكْتُبْ.", "Das ist der Maṣdar."]),
  E("الطَّالِبُ ____ الْآنَ. (geht)", ["يَذْهَبُ", "ذَهَبَ", "اِذْهَبْ", "ذَهَابٌ"], "Präsens = Muḍāriʿ.", ["Perfekt.", "Befehl.", "Maṣdar."])
]);
R("b2-10", 1, [
  F("Welchen Vokal hat der 1. Radikal im Muḍāriʿ?", "يَكْتُبُ", ["Sukūn", "Fatḥa", "Ḍamma", "Kasra"], "ya-k-tubu.", ["Nein.", "Nein.", "Nein."]),
  F("Welchen Vokal hat der 3. Radikal im Muḍāriʿ (er)?", "يَكْتُبُ", ["Ḍamma", "Fatḥa", "Sukūn", "Kasra"], "-u = Indikativ.", ["Subjunktiv.", "Jussiv.", "Nie."]),
  F("Welche Vorsilbe hat „er“ im Muḍāriʿ?", "", ["يَـ", "تَـ", "أَ", "نَـ"], "يَكْتُبُ.", ["sie/du.", "ich.", "wir."]),
  U("Mach es zum Muḍāriʿ (er)", "سَجَدَ", ["يَسْجُدُ", "يَسْجَدُ", "يَسْجِدُ", "يُسْجِدُ"], "a–u-Gruppe.", ["Falscher Vokal.", "Falscher Vokal.", "Vorsilbe mit Fatḥa."]),
  U("Mach es zum Muḍāriʿ (er)", "ضَرَبَ", ["يَضْرِبُ", "يَضْرُبُ", "يَضْرَبُ", "يَضَرِبُ"], "a–i-Gruppe.", ["Falscher Vokal.", "Falscher Vokal.", "1. Radikal mit Sukūn."]),
  U("Mach es zum Muḍāriʿ (er)", "دَخَلَ", ["يَدْخُلُ", "يَدْخَلُ", "يَدْخِلُ", "يَدَخُلُ"], "a–u-Gruppe.", ["Falscher Vokal.", "Falscher Vokal.", "1. Radikal mit Sukūn."]),
  U("Mach es zum Muḍāriʿ (er)", "سَمِعَ", ["يَسْمَعُ", "يَسْمِعُ", "يَسْمُعُ", "يُسْمِعُ"], "i–a-Gruppe.", ["Falscher Vokal.", "Falscher Vokal.", "Andere Form."]),
  U("Mach es zum Perfekt", "يَقْتُلُ", ["قَتَلَ", "قَتُلَ", "قَتِلَ", "يَقْتَلُ"], "a–u: قَتَلَ.", ["Falsch.", "Falsch.", "Kein Perfekt."])
]);
R("b2-10", 3, [
  F("Wie nennt man ein Verb am besten?", "", ["mit Perfekt und Muḍāriʿ: كَتَبَ يَكْتُبُ", "nur mit dem Perfekt", "nur mit dem Maṣdar", "nur mit dem Befehl"], "Die Gruppe muss man mitlernen.", ["Die Gruppe fehlt dann.", "Unvollständig.", "Unvollständig."]),
  F("Gibt es eine feste Regel, welcher Gruppe ein Verb angehört?", "", ["Nein – man lernt sie mit jedem Verb.", "Ja, nach dem 1. Radikal.", "Ja, nach dem Geschlecht.", "Ja, alle sind a–u."], "Man lernt beide Formen zusammen.", ["Nein.", "Nein.", "Nein."]),
  F("Welches Paar ist richtig?", "", ["فَتَحَ يَفْتَحُ", "فَتَحَ يَفْتُحُ", "فَتَحَ يَفْتِحُ", "فَتِحَ يَفْتَحُ"], "a–a.", ["Falscher Vokal.", "Falscher Vokal.", "Perfekt mit Fatḥa."]),
  F("Welches Paar ist richtig?", "", ["غَسَلَ يَغْسِلُ", "غَسَلَ يَغْسُلُ", "غَسِلَ يَغْسَلُ", "غَسَلَ يَغْسَلُ"], "a–i.", ["Falscher Vokal.", "Perfekt falsch.", "Falscher Vokal."]),
  F("Welches Paar ist richtig?", "", ["حَفِظَ يَحْفَظُ", "حَفَظَ يَحْفِظُ", "حَفِظَ يَحْفِظُ", "حَفَظَ يَحْفُظُ"], "i–a.", ["Falsch.", "Falscher Vokal.", "Falsch."])
]);
R("b2-10", 4, [
  E("فِي الْفَصْلِ ____ وَعِشْرُونَ طَالِبًا. (21)", ["وَاحِدٌ", "أَحَدٌ", "إِحْدَى", "وَاحِدَةٌ"], "21 männlich: وَاحِدٌ وَعِشْرُونَ.", ["Nicht im Buch.", "Weiblich.", "Weiblich."]),
  E("عِنْدِي ____ وَعِشْرُونَ رِيَالًا. (22)", ["اثْنَانِ", "اثْنَتَانِ", "اثْنَا", "اثْنَيْنِ"], "اثْنَانِ (ohne Tanwīn).", ["Weiblich.", "Nur in 12.", "Nominativ."]),
  E("____ وَعِشْرُونَ رَجُلًا (27)", ["سَبْعَةٌ", "سَبْعٌ", "سَبْعَةُ", "سَابِعٌ"], "Männlich → mit ة, mit Tanwīn.", ["Weiblich.", "Mit Tanwīn.", "Ordnungszahl."])
]);
R("b2-10", 5, [
  E("السَّاعَةُ الثَّامِنَةُ إِلَّا ____. (Viertel vor acht)", ["رُبْعًا", "رُبْعٌ", "رُبْعٍ", "الرُّبْعُ"], "Nach إِلَّا manṣūb.", ["manṣūb.", "manṣūb.", "Unbestimmt."]),
  E("السَّاعَةُ الْعَاشِرَةُ إِلَّا ____ دَقَائِقَ. (fünf vor zehn)", ["خَمْسَ", "خَمْسُ", "خَمْسَةَ", "خَمْسِ"], "Nach إِلَّا manṣūb; دَقِيقَةٌ feminin.", ["manṣūb.", "Feminin → ohne ة.", "manṣūb."]),
  E("حَضَرَ الطُّلَّابُ إِلَّا ____.", ["حَامِدًا", "حَامِدٌ", "حَامِدٍ", "حَامِدَ"], "Nach إِلَّا manṣūb.", ["manṣūb.", "manṣūb.", "Tanwīn."]),
  F("Was heißt السَّاعَةُ الْوَاحِدَةُ إِلَّا دَقِيقَةً وَاحِدَةً?", "", ["eine Minute vor eins", "eine Minute nach eins", "ein Uhr", "eins außer einer Stunde"], "إِلَّا = „vor“ (bei Uhrzeiten).", ["Das wäre وَ.", "Ungenau.", "Falsch."]),
  U("Übersetze ins Arabische", "Viertel vor neun", ["التَّاسِعَةُ إِلَّا رُبْعًا", "التَّاسِعَةُ إِلَّا رُبْعٌ", "التَّاسِعَةُ وَرُبْعًا", "التِّسْعَةُ إِلَّا رُبْعًا"], "إِلَّا + manṣūb.", ["manṣūb.", "„Viertel nach“.", "Ordnungszahl."]),
  F("Was ist إِلَّا?", "إِلَّا", ["„außer“ – das Nomen danach ist manṣūb", "„nicht“", "„oder“", "„dass nicht“"], "إِلَّا = außer.", ["لَا.", "أَوْ.", "أَلَّا."])
]);
R("b2-10", 6, [
  F("Welche zwei Bedeutungen hat لَعَلَّ?", "", ["Hoffnung (التَّرَجِّي) und Befürchtung (الْإِشْفَاقُ)", "Frage und Antwort", "Befehl und Verbot", "Vergangenheit und Zukunft"], "„ich hoffe“ / „ich fürchte“.", ["Nein.", "Nein.", "Nein."]),
  F("Was heißt لَعَلَّهُ يَرْجِعُ مُتَأَخِّرًا?", "لَعَلَّهُ يَرْجِعُ مُتَأَخِّرًا", ["Ich fürchte, er kommt spät zurück.", "Er kam spät zurück.", "Er soll spät zurückkommen.", "Er kommt nicht zurück."], "Hier Befürchtung.", ["Kein Perfekt.", "Kein Befehl.", "Keine Verneinung."]),
  F("Was heißt لَعَلَّ الْجَوَّ جَمِيلٌ غَدًا?", "", ["Hoffentlich ist das Wetter morgen schön.", "Das Wetter war schön.", "Das Wetter ist nicht schön.", "Wie schön ist das Wetter!"], "Hoffnung.", ["Kein Perfekt.", "Keine Verneinung.", "Kein Staunen."]),
  E("لَعَلَّ ____ مَرِيضٌ. (Ich fürchte, Ḥāmid ist krank.)", ["حَامِدًا", "حَامِدٌ", "حَامِدٍ", "حَامِدُ"], "manṣūb.", ["manṣūb.", "manṣūb.", "Tanwīn."]),
  E("لَعَلَّ____ نَاجِحٌ. (Hoffentlich hast du bestanden.)", ["كَ", "أَنْتَ", "هُوَ", "كُمْ"], "لَعَلَّكَ.", ["Kein selbstständiges Pronomen.", "„er“.", "Plural."]),
  F("Wie nennt man die Bedeutung „ich fürchte“ bei لَعَلَّ?", "", ["الْإِشْفَاقُ", "التَّرَجِّي", "التَّوْكِيدُ", "النَّفْيُ"], "الْإِشْفَاقُ = Befürchtung.", ["Hoffnung.", "Bekräftigung.", "Verneinung."])
]);
R("b2-10", 7, [
  E("جَلَسْتُ بَيْنَ ____ وَبِلَالٍ.", ["حَامِدٍ", "حَامِدٌ", "حَامِدًا", "حَامِدُ"], "بَيْنَ → majrūr.", ["majrūr.", "majrūr.", "majrūr."]),
  E("الْمَسْجِدُ بَيْنَ ____ وَالْمَدْرَسَةِ.", ["الْبَيْتِ", "الْبَيْتُ", "الْبَيْتَ", "بَيْتٍ"], "majrūr.", ["majrūr.", "majrūr.", "Bestimmt."]),
  E("هَذَا سِرٌّ بَيْنَهُ ____.", ["وَبَيْنَهَا", "وَهِيَ", "وَهَا", "وَبَيْنَ هِيَ"], "Bei Pronomen wird بَيْنَ wiederholt.", ["بَيْنَ wiederholen.", "Pronomen braucht ein Trägerwort.", "Kein selbstständiges Pronomen."]),
  U("Übersetze ins Arabische", "zwischen mir und dir", ["بَيْنِي وَبَيْنَكَ", "بَيْنِي وَأَنْتَ", "بَيْنَ أَنَا وَأَنْتَ", "بَيْنِي وَكَ"], "بَيْنَ wird wiederholt.", ["Wiederholung nötig.", "Keine selbstständigen Pronomen.", "Trägerwort fehlt."]),
  U("Übersetze ins Arabische", "Der Stuhl ist zwischen dem Tisch und dem Fenster.", ["الْكُرْسِيُّ بَيْنَ الْمَكْتَبِ وَالنَّافِذَةِ.", "الْكُرْسِيُّ بَيْنَ الْمَكْتَبُ وَالنَّافِذَةُ.", "الْكُرْسِيُّ بَيْنُ الْمَكْتَبِ وَالنَّافِذَةِ.", "بَيْنَ الْكُرْسِيُّ الْمَكْتَبِ وَالنَّافِذَةِ."], "بَيْنَ + Genitiv.", ["Genitiv.", "بَيْنَ endet auf Fatḥa.", "Stellung."]),
  F("Was ist بَيْنَ grammatisch?", "بَيْنَ", ["immer Muḍāf (Nomen danach majrūr)", "ein Verb", "eine Verneinung", "ein Fragewort"], "Wie قَبْلَ und بَعْدَ.", ["Kein Verb.", "Keine Verneinung.", "Kein Fragewort."])
]);

/* ---------- Lektion 11 ---------- */
R("b2-11", 0, [
  E("أَنَا ____ إِلَى الْمَسْجِدِ كُلَّ يَوْمٍ.", ["أَذْهَبُ", "نَذْهَبُ", "يَذْهَبُ", "ذَهَبْتُ"], "ich = أَـ.", ["wir.", "er.", "Perfekt."])
]);
R("b2-11", 1, [
  E("____ إِلَى مَكَّةَ غَدًا إِنْ شَاءَ اللَّهُ. (Ich werde gehen.)", ["سَأَذْهَبُ", "ذَهَبْتُ", "سَذَهَبْتُ", "سَيَذْهَبُ"], "سَـ + Muḍāriʿ.", ["Vergangenheit.", "سَـ nur vor Muḍāriʿ.", "„er“."]),
  U("Mach es zum Futur", "يَرْجِعُ أَبِي.", ["سَيَرْجِعُ أَبِي.", "سَرَجَعَ أَبِي.", "سَأَرْجِعُ أَبِي.", "يَسَرْجِعُ أَبِي."], "سَـ vor den Muḍāriʿ.", ["سَـ nicht vor Perfekt.", "„ich“.", "Stellung."]),
  F("Wie heißt die Vorsilbe سَـ?", "", ["حَرْفُ الِاسْتِقْبَالِ", "حَرْفُ الْجَرِّ", "حَرْفُ النِّدَاءِ", "حَرْفُ النَّفْيِ"], "„Partikel der Zukunft“.", ["Präposition.", "Anrufpartikel.", "Verneinung."])
]);
R("b2-11", 2, [
  E("____ أَفْهَمُ هَذِهِ اللُّغَةَ.", ["لَا", "مَا", "لَيْسَ", "لَنْ"], "Muḍāriʿ → لَا.", ["مَا eher beim Perfekt.", "Nicht vor Verben.", "Mit لَنْ: أَفْهَمَ."]),
  U("Verneine", "أَعْرِفُ اسْمَهُ.", ["لَا أَعْرِفُ اسْمَهُ.", "مَا عَرَفْتُ اسْمُهُ.", "لَيْسَ أَعْرِفُ اسْمَهُ.", "لَا أَعْرِفُ اسْمُهُ."], "لَا + Muḍāriʿ.", ["Andere Zeit und Fall.", "Nicht vor Verben.", "Objekt manṣūb."]),
  U("Verneine", "أَكَلْتُ شَيْئًا.", ["مَا أَكَلْتُ شَيْئًا.", "لَا أَكَلْتُ شَيْئًا.", "لَيْسَ أَكَلْتُ شَيْئًا.", "لَنْ أَكَلْتُ شَيْئًا."], "Perfekt → مَا.", ["Perfekt mit مَا.", "Nicht vor Verben.", "Nur mit Muḍāriʿ."]),
  F("Womit wird der Muḍāriʿ verneint?", "", ["mit لَا", "mit مَا (immer)", "mit لَيْسَ", "mit لَمْ (Gegenwart)"], "لَا أَفْهَمُ.", ["مَا nur für den Augenblick.", "Nicht vor Verben.", "لَمْ macht Vergangenheit."]),
  U("Übersetze ins Arabische", "Ich trinke keinen Tee.", ["لَا أَشْرَبُ الشَّايَ.", "مَا شَرِبْتُ الشَّايَ.", "لَيْسَ أَشْرَبُ الشَّايَ.", "لَا أَشْرَبُ الشَّايُ."], "لَا + Muḍāriʿ.", ["Vergangenheit.", "Nicht vor Verben.", "Objekt manṣūb."]),
  E("____ يَدْرُسُ أَخِي بِالْجَامِعَةِ.", ["لَا", "مَا", "لَيْسَ", "لَمْ"], "Gewöhnliche Verneinung des Muḍāriʿ.", ["Nur für den Augenblick.", "Nicht vor Verben.", "Mit لَمْ: يَدْرُسْ."])
]);
R("b2-11", 3, [
  U("Bilde den Maṣdar (فُعُولٌ)", "دَخَلَ", ["دُخُولٌ", "دَاخِلٌ", "مَدْخَلٌ", "دَخْلَةٌ"], "فُعُولٌ.", ["Partizip.", "Ort.", "Nicht im Buch."]),
  E("____ مَمْنُوعٌ. (Hinausgehen verboten)", ["الْخُرُوجُ", "خَرَجَ", "الْخَارِجُ", "يَخْرُجُ"], "Maṣdar mit al.", ["Verb.", "Partizip.", "Verb."])
]);
R("b2-11", 4, [
  E("أَمَّا أَخِي ____ طَبِيبٌ.", ["فَهُوَ", "هُوَ", "وَهُوَ", "ثُمَّ هُوَ"], "Nach أَمَّا: فَـ.", ["فَـ fehlt.", "Nicht وَ.", "Nicht ثُمَّ."]),
  E("أَنَا مُهَنْدِسٌ، أَمَّا زَمِيلِي ____.", ["فَطَبِيبٌ", "طَبِيبٌ", "وَطَبِيبٌ", "لِطَبِيبٍ"], "فَـ vor der Khabar.", ["فَـ fehlt.", "Nicht وَ.", "Falsch."]),
  U("Verbinde mit أَمَّا … فَـ", "بِلَالٌ مِنَ الْهِنْدِ. حَامِدٌ مِنْ مِصْرَ.", ["بِلَالٌ مِنَ الْهِنْدِ، أَمَّا حَامِدٌ فَمِنْ مِصْرَ.", "بِلَالٌ مِنَ الْهِنْدِ، أَمَّا حَامِدٌ مِنْ مِصْرَ.", "بِلَالٌ مِنَ الْهِنْدِ، أَمَّا فَحَامِدٌ مِنْ مِصْرَ.", "بِلَالٌ مِنَ الْهِنْدِ، وَأَمَّا حَامِدٌ وَمِنْ مِصْرَ."], "فَـ vor der Khabar.", ["فَـ fehlt.", "فَـ an der falschen Stelle.", "Nicht وَ."]),
  F("Was bedeutet أَمَّا … فَـ?", "", ["was … betrifft, so …", "entweder … oder", "weder … noch", "wenn … dann"], "Gegenüberstellung.", ["Andere Konstruktion.", "Andere Konstruktion.", "Andere Konstruktion."]),
  U("Übersetze ins Arabische", "Was meine Schwester betrifft, so ist sie Lehrerin.", ["أَمَّا أُخْتِي فَهِيَ مُدَرِّسَةٌ.", "أَمَّا أُخْتِي هِيَ مُدَرِّسَةٌ.", "أَمَّا أُخْتِي فَهُوَ مُدَرِّسَةٌ.", "أَمَّا فَأُخْتِي مُدَرِّسَةٌ."], "أَمَّا … فَـ.", ["فَـ fehlt.", "Feminin.", "Stellung."])
]);
R("b2-11", 5, [
  F("Was heißt أَخٌ لِي?", "أَخٌ لِي", ["ein Bruder von mir", "mein Bruder", "ich habe keinen Bruder", "für meinen Bruder"], "Unbestimmt.", ["Das ist أَخِي.", "Keine Verneinung.", "Falsch."]),
  F("Was heißt صَدِيقِي?", "صَدِيقِي", ["mein Freund (bestimmt)", "ein Freund von mir", "meine Freunde", "für meinen Freund"], "Mit Endung bestimmt.", ["Das wäre صَدِيقٌ لِي.", "Plural.", "Falsch."]),
  U("Übersetze ins Arabische", "Ein Freund von mir wohnt in Medina.", ["صَدِيقٌ لِي يَسْكُنُ فِي الْمَدِينَةِ.", "صَدِيقِي يَسْكُنُ فِي الْمَدِينَةِ.", "لِي صَدِيقِي يَسْكُنُ فِي الْمَدِينَةِ.", "صَدِيقٌ لِي يَسْكُنُونَ فِي الْمَدِينَةِ."], "Unbestimmt: صَدِيقٌ لِي.", ["„mein Freund“.", "Doppelt.", "Singular."]),
  E("____ يَدْرُسُ فِي الْجَامِعَةِ. (Ein Bruder von mir …)", ["أَخٌ لِي", "أَخِي لِي", "أَخُو لِي", "لِي أَخِي"], "Unbestimmt.", ["Doppelt.", "Falsch.", "Falsch."]),
  F("Welche Form ist unbestimmt?", "", ["أُخْتٌ لِي", "أُخْتِي", "أُخْتُكَ", "أُخْتُهُ"], "Nomen + لِـ + Pronomen.", ["Bestimmt.", "Bestimmt.", "Bestimmt."]),
  F("Was ist der Unterschied zwischen kitābī und kitābun lī?", "", ["„mein Buch“ – „ein Buch von mir“", "gleich", "„Bücher“ – „Buch“", "„dein“ – „mein“"], "Bestimmt vs. unbestimmt.", ["Nicht gleich.", "Beide Singular.", "Beide „mein“."])
]);

/* ---------- Lektion 12 ---------- */
R("b2-12", 0, [
  E("مَاذَا ____ يَا فَاطِمَةُ؟ (Was trinkst du?)", ["تَشْرَبِينَ", "تَشْرَبُ", "تَشْرَبْنَ", "يَشْرَبْنَ"], "du (f.) -īna.", ["du (m.).", "ihr (f.).", "sie (f. Pl.)."]),
  E("____ الْقُرْآنَ كُلَّ يَوْمٍ. (Wir lesen …)", ["نَقْرَأُ", "أَقْرَأُ", "يَقْرَأُ", "تَقْرَأْنَ"], "wir = نَـ.", ["ich.", "er.", "ihr (f.)."]),
  E("أَيْنَ ____ يَا أَخَوَاتُ؟ (Wo wohnt ihr?)", ["تَسْكُنَّ", "تَسْكُنُونَ", "تَسْكُنِينَ", "يَسْكُنَّ"], "ihr (f.): تَسْكُنَّ (aus تَسْكُنْنَ).", ["Maskulin.", "Singular.", "„sie“."])
]);
R("b2-12", 1, [
  F("Welche Form passt zu أَنْتِ?", "أَنْتِ", ["تَذْهَبِينَ", "تَذْهَبُ", "تَذْهَبْنَ", "تَذْهَبُونَ"], "-īna.", ["du (m.).", "ihr (f.).", "ihr (m.)."]),
  F("Welche Form passt zu أَنْتُنَّ?", "أَنْتُنَّ", ["تَذْهَبْنَ", "تَذْهَبِينَ", "تَذْهَبُونَ", "يَذْهَبْنَ"], "-na mit تَـ.", ["du (f.).", "ihr (m.).", "sie (f.)."]),
  F("Welche Form passt zu أَنْتُمْ?", "أَنْتُمْ", ["تَذْهَبُونَ", "يَذْهَبُونَ", "تَذْهَبْنَ", "نَذْهَبُ"], "تَـ…ـُونَ.", ["sie.", "ihr (f.).", "wir."]),
  F("Welche Form passt zu نَحْنُ?", "نَحْنُ", ["نَذْهَبُ", "أَذْهَبُ", "تَذْهَبُونَ", "يَذْهَبُونَ"], "نَـ.", ["ich.", "ihr.", "sie."]),
  F("Welche Form passt zu أَنَا?", "أَنَا", ["أَذْهَبُ", "نَذْهَبُ", "تَذْهَبُ", "يَذْهَبُ"], "أَـ.", ["wir.", "du/sie.", "er."]),
  F("Welche Form passt zu أَنْتَ?", "أَنْتَ", ["تَذْهَبُ", "تَذْهَبِينَ", "يَذْهَبُ", "أَذْهَبُ"], "تَـ…ـُ.", ["du (f.).", "er.", "ich."])
]);
R("b2-12", 2, [
  E("أَزُورُ أَبِي ____ جُمُعَةٍ. (jeden Freitag)", ["كُلَّ", "كُلُّ", "كُلِّ", "فِي كُلُّ"], "Zeitadverb → manṣūb.", ["manṣūb.", "Keine Präposition.", "Genitiv nach فِي."])
]);
R("b2-12", 3, [
  E("قَالَ الْإِمَامُ: ____ الصَّلَاةَ خَيْرٌ مِنَ النَّوْمِ.", ["إِنَّ", "أَنَّ", "لِأَنَّ", "لَعَلَّ"], "Nach قَالَ → إِنَّ.", ["Nicht nach قَالَ.", "„weil“.", "„hoffentlich“."]),
  E("عَرَفْتُ ____ الْمُدِيرَ مَشْغُولٌ.", ["أَنَّ", "إِنَّ", "قَالَ", "كَأَنَّ"], "Nach anderen Verben → أَنَّ.", ["Nur nach قَالَ.", "Verb.", "„als ob“."]),
  U("Statt „sagte“: „glaube“", "قَالَ إِنَّ الدَّرْسَ سَهْلٌ.", ["أَظُنُّ أَنَّ الدَّرْسَ سَهْلٌ.", "أَظُنُّ إِنَّ الدَّرْسَ سَهْلٌ.", "أَظُنُّ أَنَّ الدَّرْسُ سَهْلٌ.", "أَظُنُّ أَنَّ الدَّرْسَ سَهْلًا."], "Nach أَظُنُّ → أَنَّ.", ["Nicht إِنَّ.", "Ism manṣūb.", "Khabar marfūʿ."]),
  U("Statt „hörte“: „sagte“", "سَمِعْتُ أَنَّهُ مَرِيضٌ.", ["قُلْتُ إِنَّهُ مَرِيضٌ.", "قُلْتُ أَنَّهُ مَرِيضٌ.", "قُلْتُ إِنَّ هُوَ مَرِيضٌ.", "قُلْتُ إِنَّهُ مَرِيضًا."], "Nach قَالَ → إِنَّ.", ["Nicht أَنَّ.", "Pronomen angehängt.", "Khabar marfūʿ."]),
  F("Nach welchem Verb steht إِنَّ statt أَنَّ?", "", ["قَالَ", "سَمِعَ", "ظَنَّ", "عَرَفَ"], "Nur nach قَالَ (und seinen Formen).", ["Danach أَنَّ.", "Danach أَنَّ.", "Danach أَنَّ."])
]);
R("b2-12", 4, [
  F("Welcher Tag ist يَوْمُ الْجُمُعَةِ?", "", ["Freitag", "Donnerstag", "Samstag", "Sonntag"], "الْجُمُعَةُ.", ["الْخَمِيسُ.", "السَّبْتُ.", "الْأَحَدُ."]),
  F("Welcher Tag ist يَوْمُ الْأَحَدِ?", "", ["Sonntag", "Montag", "Samstag", "Mittwoch"], "„der erste“.", ["الِاثْنَيْنِ.", "السَّبْتُ.", "الْأَرْبِعَاءُ."]),
  F("Welcher Tag ist يَوْمُ الْأَرْبِعَاءِ?", "", ["Mittwoch", "Dienstag", "Donnerstag", "Montag"], "„der vierte“.", ["الثُّلَاثَاءُ.", "الْخَمِيسُ.", "الِاثْنَيْنِ."]),
  F("Wie heißt „Montag“?", "", ["يَوْمُ الِاثْنَيْنِ", "يَوْمُ الثُّلَاثَاءِ", "يَوْمُ الْأَحَدِ", "يَوْمُ الْخَمِيسِ"], "„der zweite“.", ["Dienstag.", "Sonntag.", "Donnerstag."]),
  F("Wie heißt „Donnerstag“?", "", ["يَوْمُ الْخَمِيسِ", "يَوْمُ الْجُمُعَةِ", "يَوْمُ الْأَرْبِعَاءِ", "يَوْمُ السَّبْتِ"], "„der fünfte“.", ["Freitag.", "Mittwoch.", "Samstag."]),
  E("لَا نَدْرُسُ يَوْمَ ____. (am Freitag)", ["الْجُمُعَةِ", "الْجُمُعَةُ", "الْجُمُعَةَ", "جُمُعَةٍ"], "يَوْمَ + Genitiv.", ["Genitiv.", "Genitiv.", "Bestimmt."])
]);

/* ---------- Lektion 13 ---------- */
R("b2-13", 0, [
  U("Bilde alle Formen (Reihe er–sie–sie Pl. m.–sie Pl. f.)", "كَتَبَ يَكْتُبُ", ["يَكْتُبُ، تَكْتُبُ، يَكْتُبُونَ، يَكْتُبْنَ", "يَكْتُبُ، يَكْتُبُ، يَكْتُبُونَ، تَكْتُبْنَ", "يَكْتُبُ، تَكْتُبُ، تَكْتُبُونَ، يَكْتُبْنَ", "يَكْتُبُ، تَكْتُبِينَ، يَكْتُبُونَ، يَكْتُبْنَ"], "3. Person: يَـ، تَـ، يَـ…ونَ، يَـ…نَ.", ["„sie“ hat تَـ.", "„sie (Pl. m.)“ hat يَـ.", "„sie“ hat kein -īna."]),
  U("Bilde alle Formen (du m. – du f. – ihr m. – ihr f.)", "جَلَسَ يَجْلِسُ", ["تَجْلِسُ، تَجْلِسِينَ، تَجْلِسُونَ، تَجْلِسْنَ", "تَجْلِسُ، تَجْلِسْنَ، تَجْلِسُونَ، تَجْلِسِينَ", "يَجْلِسُ، تَجْلِسِينَ، تَجْلِسُونَ، تَجْلِسْنَ", "تَجْلِسُ، تَجْلِسِينَ، يَجْلِسُونَ، تَجْلِسْنَ"], "2. Person: تَـ.", ["Vertauscht.", "„er“.", "„sie“."]),
  F("Welche Form ist „ich“ und welche „wir“?", "", ["أَفْهَمُ – نَفْهَمُ", "نَفْهَمُ – أَفْهَمُ", "أَفْهَمُ – تَفْهَمُ", "يَفْهَمُ – نَفْهَمُ"], "أَـ / نَـ.", ["Vertauscht.", "„du“.", "„er“."]),
  F("Wie viele Formen hat der Muḍāriʿ ohne Dual?", "", ["10 (mit zwei gleichen: تَذْهَبُ)", "8", "12", "6"], "تَذْهَبُ = sie / du (m.).", ["Zu wenig.", "Mit Dual mehr.", "Zu wenig."])
]);
R("b2-13", 1, [
  E("آمِنَةُ ____ رِسَالَةً.", ["تَكْتُبُ", "يَكْتُبُ", "تَكْتُبِينَ", "تَكْتُبْنَ"], "sie = تَـ.", ["Maskulin.", "du (f.).", "Plural."]),
  E("الْمُسْلِمُونَ ____ فِي الْمَسْجِدِ.", ["يُصَلُّونَ", "يُصَلِّي", "تُصَلُّونَ", "يُصَلِّينَ"], "sie (m. Pl.) -ūna.", ["Singular.", "„ihr“.", "Feminin."]),
  E("الْبَنَاتُ ____ الدَّرْسَ.", ["يَحْفَظْنَ", "يَحْفَظُونَ", "تَحْفَظُ", "تَحْفَظْنَ"], "sie (f. Pl.) يَـ…ـْنَ.", ["Maskulin.", "Singular.", "„ihr (f.)“."]),
  E("أَنْتَ ____ كَثِيرًا.", ["تَقْرَأُ", "يَقْرَأُ", "تَقْرَئِينَ", "أَقْرَأُ"], "du (m.) = تَـ.", ["er.", "du (f.).", "ich."]),
  U("Statt „sie (Sg.)“: „sie (Pl. f.)“", "تَدْرُسُ فِي الْجَامِعَةِ.", ["يَدْرُسْنَ فِي الْجَامِعَةِ.", "تَدْرُسْنَ فِي الْجَامِعَةِ.", "يَدْرُسُونَ فِي الْجَامِعَةِ.", "تَدْرُسِينَ فِي الْجَامِعَةِ."], "يَـ…ـْنَ.", ["„ihr (f.)“.", "Maskulin.", "du (f.)."]),
  U("Statt „er“: „sie (Pl. m.)“", "يَشْرَبُ الْعَصِيرَ.", ["يَشْرَبُونَ الْعَصِيرَ.", "تَشْرَبُونَ الْعَصِيرَ.", "يَشْرَبْنَ الْعَصِيرَ.", "يَشْرَبُوا الْعَصِيرَ."], "-ūna.", ["„ihr“.", "Feminin.", "Ohne nūn: Subjunktiv."])
]);
R("b2-13", 2, [
  F("Was zeigt das يَـ in يَذْهَبُ?", "يَذْهَبُ", ["das Zeichen des Muḍāriʿ (3. Person)", "das Objekt", "den Plural", "die Verneinung"], "حَرْفُ الْمُضَارَعَةِ.", ["Kein Objekt.", "Singular.", "Keine Verneinung."]),
  F("Was zeigt das Ḍamma am Ende von يَذْهَبُ?", "يَذْهَبُ", ["den Indikativ (marfūʿ)", "den Fāʿil", "den Plural", "das Femininum"], "Zeichen des Rafʿ.", ["Der Fāʿil ist unsichtbar.", "Singular.", "Maskulin."]),
  F("Was ist der Fāʿil in يَذْهَبُ?", "يَذْهَبُ", ["ein unsichtbares Pronomen (هُوَ)", "das يَـ", "das Ḍamma", "keiner"], "مُسْتَتِرٌ.", ["Muḍāriʿ-Zeichen.", "Fallzeichen.", "Es gibt einen."]),
  F("Was ist der Fāʿil in أَذْهَبُ?", "أَذْهَبُ", ["ein unsichtbares أَنَا", "das أَ", "das Ḍamma", "das ب"], "مُسْتَتِرٌ تَقْدِيرُهُ أَنَا.", ["Muḍāriʿ-Zeichen.", "Fallzeichen.", "Radikal."]),
  F("Was ist der Fāʿil in نَذْهَبُ?", "نَذْهَبُ", ["ein unsichtbares نَحْنُ", "das نَـ", "das Ḍamma", "keiner"], "مُسْتَتِرٌ.", ["Muḍāriʿ-Zeichen.", "Fallzeichen.", "Es gibt einen."]),
  F("Woraus besteht تَذْهَبُ (du m.)?", "تَذْهَبُ", ["تَـ + ذهب + unsichtbares أَنْتَ + ـُ", "تَـ als Fāʿil + ذهب", "ذهب + تُ", "تَـ + ذهب + Objekt"], "Muḍāriʿ-Zeichen + Wurzel + Fāʿil (versteckt) + Indikativ.", ["تَـ ist kein Fāʿil.", "Das wäre Perfekt.", "Kein Objekt."])
]);
R("b2-13", 3, [
  F("Was ist in تَذْهَبِينَ der Fāʿil?", "تَذْهَبِينَ", ["das yāʾ", "das nūn", "das تَـ", "unsichtbar"], "ي = Fāʿil; ن = Indikativ.", ["Indikativzeichen.", "Muḍāriʿ-Zeichen.", "Sichtbar."]),
  F("Was ist in تَذْهَبُونَ das ن?", "تَذْهَبُونَ", ["das Zeichen des Indikativs", "der Fāʿil", "das Zeichen der Frauen", "ein Objekt"], "Fāʿil ist das و.", ["Das ist das و.", "Das wäre تَذْهَبْنَ.", "Kein Objekt."]),
  F("Was ist in يَذْهَبُونَ das و?", "يَذْهَبُونَ", ["der Fāʿil", "das Zeichen des Indikativs", "ein Radikal", "ein Objekt"], "و = Fāʿil.", ["Das ist das ن.", "Kein Radikal.", "Kein Objekt."]),
  F("Woran erkennt man bei يَذْهَبُونَ den Indikativ?", "يَذْهَبُونَ", ["am vorhandenen nūn", "am Ḍamma", "am يَـ", "am و"], "ثُبُوتُ النُّونِ.", ["Kein Ḍamma am Ende.", "Muḍāriʿ-Zeichen.", "Fāʿil."]),
  F("Was ist in تَذْهَبِينَ das ن?", "تَذْهَبِينَ", ["Indikativzeichen", "Fāʿil", "nūn der Frauen", "Teil der Wurzel"], "Fāʿil ist das ي.", ["Das ist das ي.", "Das gibt es bei تَذْهَبْنَ.", "Nein."]),
  E("أَنْتُمْ ____. (geht – Indikativ)", ["تَذْهَبُونَ", "تَذْهَبُوا", "تَذْهَبُ", "يَذْهَبُونَ"], "Mit nūn.", ["Ohne nūn: kein Indikativ.", "Singular.", "„sie“."])
]);
R("b2-13", 4, [
  F("Was ist in يَذْهَبْنَ das ن?", "يَذْهَبْنَ", ["der Fāʿil (nūn der Frauen)", "das Indikativzeichen", "ein Objekt", "das Femininzeichen ohne Funktion"], "نُونُ النِّسْوَةِ = Fāʿil.", ["Das gilt für يَذْهَبُونَ.", "Kein Objekt.", "Es ist der Fāʿil."]),
  F("Wie verhält sich يَذْهَبْنَ nach لَمْ oder لَنْ?", "", ["Es bleibt unverändert (mabnī).", "Das nūn fällt weg.", "Es bekommt Fatḥa.", "Es bekommt Sukūn auf das nūn."], "Mabnī auf Sukūn.", ["Nur bei den fünf Verbformen.", "Nein.", "Nein."]),
  F("Welche Formen haben das nūn der Frauen?", "", ["يَذْهَبْنَ und تَذْهَبْنَ", "يَذْهَبُونَ und تَذْهَبُونَ", "تَذْهَبِينَ", "نَذْهَبُ"], "-na.", ["Indikativ-nūn.", "Indikativ-nūn.", "Kein nūn."]),
  E("الطَّالِبَاتُ لَنْ ____ الْيَوْمَ.", ["يَخْرُجْنَ", "يَخْرُجْنَا", "يَخْرُجَ", "يَخْرُجُوا"], "Unverändert.", ["Falsch.", "Singular.", "Maskulin."]),
  E("أَنْتُنَّ ____ الْعَرَبِيَّةَ.", ["تَتَعَلَّمْنَ", "تَتَعَلَّمُونَ", "تَتَعَلَّمِينَ", "يَتَعَلَّمْنَ"], "ihr (f.) -na.", ["Maskulin.", "Singular.", "„sie“."]),
  F("Ist يَذْهَبْنَ mabnī oder muʿrab?", "يَذْهَبْنَ", ["mabnī (unveränderlich)", "muʿrab (veränderlich)", "manchmal", "weder noch"], "Wegen des nūn der Frauen.", ["Es ändert sich nicht.", "Immer gleich.", "Mabnī."]),
  U("Mach es feminin", "يَكْتُبُونَ", ["يَكْتُبْنَ", "تَكْتُبْنَ", "يَكْتُبُونَنَ", "تَكْتُبِينَ"], "-ūna → -na.", ["„ihr (f.)“.", "Falsch.", "du (f.)."])
]);

/* ---------- Lektion 14 ---------- */
R("b2-14", 0, [
  U("Bilde den Amr", "تَذْهَبُ", ["اِذْهَبْ", "اُذْهُبْ", "ذْهَبْ", "تَذْهَبْ"], "ta- und -u weg, Hamzat al-waṣl mit Kasra.", ["2. Radikal hat Fatḥa.", "Kein vokalloser Anfang.", "Das ist Jussiv."]),
  U("Bilde den Amr", "تَخْرُجُ", ["اُخْرُجْ", "اِخْرُجْ", "خْرُجْ", "أَخْرُجْ"], "2. Radikal Ḍamma → Ḍamma.", ["Ḍamma am Anfang.", "Kein vokalloser Anfang.", "Hamzat al-waṣl, nicht أَ."]),
  U("Bilde den Amr", "تَغْسِلُ", ["اِغْسِلْ", "اُغْسُلْ", "غْسِلْ", "اِغْسَلْ"], "2. Radikal Kasra → Kasra.", ["Kasra am Anfang.", "Kein vokalloser Anfang.", "Falscher Vokal."]),
  U("Bilde den Amr", "تَحْفَظُ", ["اِحْفَظْ", "اُحْفُظْ", "حْفَظْ", "اِحْفِظْ"], "2. Radikal Fatḥa → Kasra.", ["Kasra.", "Kein vokalloser Anfang.", "Falscher Vokal."]),
  U("Bilde den Amr", "تَسْجُدُ", ["اُسْجُدْ", "اِسْجُدْ", "سْجُدْ", "اُسْجَدْ"], "Ḍamma.", ["Ḍamma am Anfang.", "Kein vokalloser Anfang.", "Falscher Vokal."]),
  F("Woraus bildet man den Amr?", "", ["aus dem Muḍāriʿ der 2. Person Sg.", "aus dem Perfekt", "aus dem Maṣdar", "aus dem Partizip"], "تَكْتُبُ → اُكْتُبْ.", ["Nein.", "Nein.", "Nein."]),
  F("Was fällt bei der Bildung des Amr weg?", "تَكْتُبُ", ["das ta- und das -u", "nur das -u", "nur das ta-", "der 2. Radikal"], "تَكْتُبُ → كْتُبْ → اُكْتُبْ.", ["Auch ta-.", "Auch -u.", "Nein."]),
  E("____ الدَّرْسَ يَا بِلَالُ. (Lerne …)", ["اُدْرُسِ", "اِدْرُسِ", "دْرُسِ", "تَدْرُسُ"], "يَدْرُسُ (u) → اُدْرُسْ; vor al Kasra.", ["Ḍamma am Anfang.", "Kein vokalloser Anfang.", "Präsens."])
]);
R("b2-14", 1, [
  E("____ الْبَابَ! (öffne – am Satzanfang)", ["اِفْتَحِ", "اُفْتُحِ", "أَفْتَحِ", "فْتَحِ"], "Kasra (2. Radikal Fatḥa); vor al Kasra am Ende.", ["Falsche Vokale.", "Hamzat al-waṣl, nicht أَ.", "Kein vokalloser Anfang."])
]);
R("b2-14", 2, [
  F("Wie spricht man يَا بِلَالُ اكْتُبْ?", "يَا بِلَالُ اكْتُبْ", ["yā bilālu-ktub", "yā bilālu uktub", "yā bilāl-uktub", "yā bilālu aktub"], "Hamzat al-waṣl fällt mitten im Satz weg.", ["Das u wird nicht gesprochen.", "Falsche Silben.", "Falscher Vokal."]),
  F("Wie schreibt man den Amr von تَكْتُبُ richtig?", "", ["اُكْتُبْ", "أُكْتُبْ", "أكْتُبْ", "إُكْتُبْ"], "Ohne Hamza-Zeichen (Hamzat al-waṣl).", ["Kein Hamza-Zeichen.", "Kein Hamza-Zeichen.", "Falsch."]),
  F("Wann wird das Hamzat al-waṣl gesprochen?", "", ["nur am Satzanfang", "immer", "nie", "nur nach وَ"], "Am Anfang ja, mitten im Satz nein.", ["Nicht nach einem Wort.", "Am Anfang schon.", "Nach وَ fällt es weg."]),
  F("Wie spricht man قُمْ وَاذْهَبْ?", "قُمْ وَاذْهَبْ", ["qum wa-dhhab", "qum wa-idhhab", "qum wadh-hab", "qum wa-adhhab"], "Nach وَ fällt das i weg.", ["Das i fällt weg.", "Falsche Silben.", "Falscher Vokal."]),
  E("يَا آمِنَةُ ____ هُنَا. (setz dich)", ["اجْلِسِي", "إِجْلِسِي", "أَجْلِسِي", "تَجْلِسِينَ"], "Mitten im Satz ohne Vokal am Alif geschrieben.", ["Kein Hamza-Zeichen.", "Falsch.", "Präsens."]),
  F("Wie spricht man اِقْرَأْ وَاكْتُبْ?", "اِقْرَأْ وَاكْتُبْ", ["iqraʾ wa-ktub", "qraʾ wa-ktub", "iqraʾ wa-uktub", "iqraʾu wa-ktub"], "Am Anfang i, nach وَ kein u.", ["Am Anfang wird das i gesprochen.", "Das u fällt weg.", "Kein -u am Amr."])
]);
R("b2-14", 3, [
  E("____ يَا مُحَمَّدُ. (iss)", ["كُلْ", "اُؤْكُلْ", "تَأْكُلُ", "أَكُلْ"], "Unregelmäßig: كُلْ.", ["Das Hamza fällt weg.", "Präsens.", "Falsch."]),
  E("____ هَذَا الْكِتَابَ. (nimm)", ["خُذْ", "اُؤْخُذْ", "أَخُذْ", "تَأْخُذُ"], "Unregelmäßig: خُذْ.", ["Das Hamza fällt weg.", "Falsch.", "Präsens."]),
  E("____ الطَّعَامَ. (iss das Essen)", ["كُلِ", "كُلْ", "اُكُلِ", "كُلُ"], "Vor al Kasra: كُلِ الطَّعَامَ.", ["Vor al Kasra.", "Falsch.", "Kein Ḍamma."]),
  E("يَا آمِنَةُ، ____. (iss!)", ["كُلِي", "كُلْ", "كُلُوا", "تَأْكُلِينَ"], "du (f.): كُلِي.", ["Maskulin.", "Plural.", "Präsens."]),
  E("يَا إِخْوَانُ، ____ الْكُتُبَ.", ["خُذُوا", "خُذْ", "خُذِي", "خُذْنَ"], "ihr (m.): خُذُوا.", ["Singular.", "du (f.).", "ihr (f.)."]),
  F("Warum ist كُلْ unregelmäßig?", "كُلْ", ["Der 1. Radikal ء fällt weg.", "Es hat kein Kasra.", "Es ist Perfekt.", "Es ist weiblich."], "تَأْكُلُ → كُلْ.", ["Nicht der Grund.", "Es ist Amr.", "Nein."]),
  F("Welcher Amr ist unregelmäßig?", "", ["خُذْ", "اُكْتُبْ", "اِجْلِسْ", "اِفْتَحْ"], "Von أَخَذَ.", ["Regelmäßig.", "Regelmäßig.", "Regelmäßig."])
]);
R("b2-14", 4, [
  E("____ الْمَاءَ. (trink)", ["اِشْرَبِ", "اِشْرَبْ", "اِشْرَبُ", "اِشْرَبَ"], "Vor al: Kasra.", ["Vor al Kasra.", "Kein Ḍamma.", "Kein Fatḥa."]),
  E("____ الْكِتَابَ. (öffne)", ["اِفْتَحِ", "اِفْتَحْ", "اِفْتَحَ", "اِفْتَحُ"], "Vor al: Kasra.", ["Vor al Kasra.", "Kein Fatḥa.", "Kein Ḍamma."]),
  E("____ الْقَمِيصَ. (wasch)", ["اِغْسِلِ", "اِغْسِلْ", "اِغْسِلَ", "اُغْسُلِ"], "Vor al: Kasra.", ["Vor al Kasra.", "Kein Fatḥa.", "Falscher Anfang."]),
  F("Warum steht in اِشْرَبِ الْمَاءَ ein Kasra am Ende des Verbs?", "اِشْرَبِ الْمَاءَ", ["gegen zwei Sukūn (الْتِقَاءُ السَّاكِنَيْنِ)", "weil es Genitiv ist", "weil es weiblich ist", "Tippfehler"], "Sukūn + Hamzat al-waṣl → Kasra.", ["Verben haben keinen Genitiv.", "Nicht feminin.", "Richtig so."]),
  U("Füge „das Fenster“ an", "اِفْتَحْ", ["اِفْتَحِ النَّافِذَةَ", "اِفْتَحْ النَّافِذَةَ", "اِفْتَحُ النَّافِذَةَ", "اِفْتَحِ النَّافِذَةِ"], "Kasra, Objekt manṣūb.", ["Zwei Sukūn.", "Kein Ḍamma.", "Objekt manṣūb."])
]);
R("b2-14", 5, [
  E("____ يَا آمِنَةُ. (schreib)", ["اُكْتُبِي", "اُكْتُبْ", "اُكْتُبُوا", "اُكْتُبْنَ"], "du (f.): -ī.", ["Maskulin.", "Plural.", "ihr (f.)."]),
  E("____ يَا إِخْوَانُ. (setzt euch)", ["اِجْلِسُوا", "اِجْلِسْ", "اِجْلِسِي", "اِجْلِسْنَ"], "ihr (m.): -ū.", ["Singular.", "du (f.).", "ihr (f.)."]),
  E("____ يَا أَخَوَاتُ. (geht hinaus)", ["اُخْرُجْنَ", "اُخْرُجُوا", "اُخْرُجِي", "اُخْرُجْ"], "ihr (f.): -na.", ["Maskulin.", "Singular.", "Singular."]),
  U("Für mehrere Frauen", "اُدْخُلْ", ["اُدْخُلْنَ", "اُدْخُلُوا", "اُدْخُلِي", "تَدْخُلْنَ"], "-na.", ["Maskulin.", "Singular.", "Präsens."]),
  U("Für eine Frau", "اِحْفَظْ", ["اِحْفَظِي", "اِحْفَظْنَ", "اِحْفَظُوا", "تَحْفَظِينَ"], "-ī.", ["Plural.", "Plural.", "Präsens."])
]);
R("b2-14", 6, [
  F("Wann darf die Mubtadaʾ unbestimmt sein?", "", ["nach einer Fragepartikel: أَعَقْرَبٌ فِي الْفَصْلِ؟", "immer", "nie", "nur im Plural"], "Normal ist sie bestimmt.", ["Nicht immer.", "Ausnahmen gibt es.", "Nicht nur."]),
  F("Was heißt أَعَقْرَبٌ فِي الْفَصْلِ؟!", "", ["Ist etwa ein Skorpion in der Klasse?!", "Der Skorpion ist in der Klasse.", "Ein Skorpion ist nicht in der Klasse.", "Wo ist der Skorpion?"], "Unbestimmte Mubtadaʾ nach أَ.", ["Keine Aussage.", "Keine Verneinung.", "Kein أَيْنَ."]),
  F("Welcher Satz ist richtig (unbestimmte Mubtadaʾ)?", "", ["أَرَجُلٌ فِي الْبَيْتِ؟", "رَجُلٌ فِي الْبَيْتِ.", "الرَّجُلُ فِي بَيْتٌ.", "رَجُلٌ الْبَيْتُ."], "Nach أَ erlaubt.", ["Ohne Frage: فِي الْبَيْتِ رَجُلٌ.", "Falsch.", "Falsch."]),
  F("Woher kommt أَإِلَٰهٌ مَعَ اللَّهِ؟", "", ["aus dem Qurʾān – unbestimmte Mubtadaʾ nach أَ", "aus einem Gedicht", "aus dem Ḥadīth", "aus dem Lehrbuch selbst"], "Beispiel im Buch.", ["Nein.", "Nein.", "Es ist ein Qurʾānvers."]),
  U("Mach daraus eine erstaunte Frage", "فِي الْفَصْلِ عَقْرَبٌ.", ["أَعَقْرَبٌ فِي الْفَصْلِ؟!", "عَقْرَبٌ أَفِي الْفَصْلِ؟", "أَالْعَقْرَبُ فِي فَصْلٍ؟", "هَلْ عَقْرَبًا فِي الْفَصْلِ؟"], "أَ + unbestimmte Mubtadaʾ.", ["Stellung.", "Bestimmtheit vertauscht.", "Nominativ."]),
  F("Warum ist رَجُلٌ فِي الْبَيْتِ als Satz ungewöhnlich?", "", ["Die Mubtadaʾ ist normalerweise bestimmt.", "Weil رَجُلٌ männlich ist.", "Weil فِي fehlt.", "Er ist völlig richtig."], "Üblich: فِي الْبَيْتِ رَجُلٌ.", ["Nicht das Geschlecht.", "فِي ist da.", "Ungewöhnlich."])
]);
R("b2-14", 7, [
  E("اِفْتَحِ النَّافِذَةَ ____ الْغُرْفَةَ حَارَّةٌ.", ["فَإِنَّ", "فَإِنْ", "وَأَنَّ", "لَكِنْ"], "فَإِنَّ = denn.", ["Bedingung.", "„und dass“.", "„aber“."]),
  E("كُلْ هَذَا ____ جَوْعَانُ.", ["فَإِنَّكَ", "فَإِنَّ أَنْتَ", "فَأَنْتَ إِنَّ", "لِأَنَّ أَنْتَ"], "فَإِنَّكَ.", ["Kein selbstständiges Pronomen.", "Stellung.", "Kein selbstständiges Pronomen."]),
  E("اُدْخُلْ فَإِنَّ ____ قَدْ بَدَأَ.", ["الدَّرْسَ", "الدَّرْسُ", "الدَّرْسِ", "دَرْسٌ"], "Nach إِنَّ manṣūb.", ["manṣūb.", "manṣūb.", "Bestimmt."]),
  F("Was heißt فَإِنَّ?", "", ["denn, weil, nämlich", "wenn", "aber", "obwohl"], "Begründung.", ["Das wäre إِنْ.", "Das wäre لَكِنَّ.", "Falsch."]),
  U("Begründe mit فَإِنَّ", "اِغْسِلِ الْقَمِيصَ. هُوَ وَسِخٌ.", ["اِغْسِلِ الْقَمِيصَ فَإِنَّهُ وَسِخٌ.", "اِغْسِلِ الْقَمِيصَ فَإِنَّ هُوَ وَسِخٌ.", "اِغْسِلِ الْقَمِيصَ فَإِنَّهُ وَسِخًا.", "اِغْسِلِ الْقَمِيصَ فَإِنَّهَا وَسِخٌ."], "Pronomen an إِنَّ.", ["Kein selbstständiges Pronomen.", "Khabar marfūʿ.", "Maskulin."])
]);

/* ---------- Lektion 15 ---------- */
R("b2-15", 0, [
  E("لَا ____ الْبَابَ! (Öffne die Tür nicht!)", ["تَفْتَحِ", "تَفْتَحُ", "اِفْتَحِ", "تَفْتَحَ"], "Verbot, vor al Kasra.", ["Das ist Verneinung.", "Kein Amr nach لَا.", "Kein Fatḥa."])
]);
R("b2-15", 1, [
  F("Was heißt لَا تَذْهَبُ?", "لَا تَذْهَبُ", ["du gehst nicht", "geh nicht!", "du gingst nicht", "du wirst nicht gehen"], "Mit Ḍamma = Verneinung.", ["Das wäre لَا تَذْهَبْ.", "Das wäre مَا ذَهَبْتَ.", "Das wäre لَنْ تَذْهَبَ."]),
  F("Was heißt لَا تَذْهَبْ?", "لَا تَذْهَبْ", ["geh nicht!", "du gehst nicht", "du gingst nicht", "er geht nicht"], "Mit Sukūn = Verbot.", ["Das wäre لَا تَذْهَبُ.", "Vergangenheit.", "„er“."]),
  U("Mach daraus ein Verbot", "تَكْتُبُ بِالْقَلَمِ الْأَحْمَرِ.", ["لَا تَكْتُبْ بِالْقَلَمِ الْأَحْمَرِ.", "لَا تَكْتُبُ بِالْقَلَمِ الْأَحْمَرِ.", "مَا تَكْتُبُ بِالْقَلَمِ الْأَحْمَرِ.", "لَا اُكْتُبْ بِالْقَلَمِ الْأَحْمَرِ."], "لَا + Sukūn.", ["Verneinung.", "Verneinung.", "Kein Amr nach لَا."]),
  U("Mach daraus ein Verbot", "تَجْلِسُ عَلَى هَذَا الْكُرْسِيِّ.", ["لَا تَجْلِسْ عَلَى هَذَا الْكُرْسِيِّ.", "لَا تَجْلِسُ عَلَى هَذَا الْكُرْسِيِّ.", "لَا اِجْلِسْ عَلَى هَذَا الْكُرْسِيِّ.", "لَنْ تَجْلِسَ عَلَى هَذَا الْكُرْسِيِّ."], "لَا + Sukūn.", ["Verneinung.", "Kein Amr.", "Futur."])
]);
R("b2-15", 2, [
  E("لَا ____ يَا إِخْوَانُ!", ["تَخْرُجُوا", "تَخْرُجُونَ", "تَخْرُجْ", "تَخْرُجْنَ"], "nūn fällt.", ["Mit nūn kein Verbot.", "Singular.", "Feminin."]),
  E("لَا ____ يَا زَيْنَبُ!", ["تَتَأَخَّرِي", "تَتَأَخَّرِينَ", "تَتَأَخَّرْ", "تَتَأَخَّرْنَ"], "du (f.): nūn fällt.", ["Mit nūn kein Verbot.", "Maskulin.", "Plural."]),
  E("لَا ____ يَا أَخَوَاتُ!", ["تَتَكَلَّمْنَ", "تَتَكَلَّمُوا", "تَتَكَلَّمِي", "تَتَكَلَّمْ"], "nūn der Frauen bleibt.", ["Maskulin.", "Singular.", "Singular."]),
  U("Mach daraus ein Verbot (für mehrere Männer)", "تَذْهَبُونَ إِلَى السُّوقِ.", ["لَا تَذْهَبُوا إِلَى السُّوقِ.", "لَا تَذْهَبُونَ إِلَى السُّوقِ.", "لَا اِذْهَبُوا إِلَى السُّوقِ.", "لَا تَذْهَبْ إِلَى السُّوقِ."], "nūn fällt.", ["Das ist Verneinung.", "Kein Amr.", "Singular."]),
  U("Mach daraus ein Verbot (für eine Frau)", "تَخْرُجِينَ الْآنَ.", ["لَا تَخْرُجِي الْآنَ.", "لَا تَخْرُجِينَ الْآنَ.", "لَا تَخْرُجْ الْآنَ.", "لَا اُخْرُجِي الْآنَ."], "nūn fällt.", ["Verneinung.", "Maskulin.", "Kein Amr."]),
  U("Mach daraus ein Verbot (für mehrere Frauen)", "تَجْلِسْنَ هُنَا.", ["لَا تَجْلِسْنَ هُنَا.", "لَا تَجْلِسِي هُنَا.", "لَا تَجْلِسُوا هُنَا.", "لَا تَجْلِسْنَا هُنَا."], "Unverändert.", ["Singular.", "Maskulin.", "Falsch."])
]);
R("b2-15", 3, [
  E("كَادَ ____ يَسْقُطُ. (Das Kind wäre fast gefallen.)", ["الطِّفْلُ", "الطِّفْلَ", "الطِّفْلِ", "بِالطِّفْلِ"], "كَادَ + Nomen marfūʿ.", ["marfūʿ.", "marfūʿ.", "Keine Präposition."]),
  E("كَادَتِ الشَّمْسُ ____.", ["تَغْرُبُ", "غَرَبَتْ", "تَغْرُبَ", "غُرُوبٌ"], "كَادَ + Muḍāriʿ.", ["Kein Perfekt.", "Kein Subjunktiv.", "Kein Maṣdar."]),
  U("Füge كَادَ hinzu", "الْمُدَرِّسُ يَخْرُجُ.", ["كَادَ الْمُدَرِّسُ يَخْرُجُ.", "كَادَ الْمُدَرِّسَ يَخْرُجُ.", "كَادَ الْمُدَرِّسُ خَرَجَ.", "كَادَ الْمُدَرِّسُ يَخْرُجَ."], "كَادَ + marfūʿ + Muḍāriʿ.", ["marfūʿ.", "Muḍāriʿ.", "Kein Subjunktiv."]),
  F("Was heißt يَكَادُ الْجَرَسُ يَرِنُّ?", "", ["Die Glocke läutet gleich.", "Die Glocke läutete.", "Die Glocke läutet nicht.", "Die Glocke soll läuten."], "يَكَادُ = gleich, fast.", ["Vergangenheit.", "Keine Verneinung.", "Kein Befehl."])
]);
R("b2-15", 4, [
  F("Was heißt مَا أَشْرَبُ الْقَهْوَةَ?", "مَا أَشْرَبُ الْقَهْوَةَ", ["Ich trinke (jetzt) keinen Kaffee.", "Ich trinke nie Kaffee.", "Ich habe keinen Kaffee getrunken.", "Trink keinen Kaffee!"], "مَا + Muḍāriʿ: unmittelbare Gegenwart.", ["Gewohnheit: لَا.", "Perfekt: مَا شَرِبْتُ.", "Verbot: لَا تَشْرَبْ."]),
  F("Was heißt لَا أَشْرَبُ الْقَهْوَةَ?", "لَا أَشْرَبُ الْقَهْوَةَ", ["Ich trinke (gewöhnlich) keinen Kaffee.", "Ich trinke gerade keinen Kaffee.", "Trink keinen Kaffee!", "Ich trank keinen Kaffee."], "لَا = gewöhnlich.", ["Das wäre مَا.", "Das wäre لَا تَشْرَبْ.", "Das wäre مَا شَرِبْتُ."]),
  E("____ أَكْتُبُ الْآنَ شَيْئًا. (Ich schreibe gerade nichts.)", ["مَا", "لَنْ", "لَمْ", "لَيْسَ"], "Augenblick → مَا.", ["Futur.", "Vergangenheit.", "Nicht vor Verben."]),
  E("أَنَا ____ أَشْرَبُ الشَّايَ أَبَدًا. (gewöhnlich nie)", ["لَا", "مَا", "لَنْ", "لَمْ"], "Gewohnheit → لَا.", ["Augenblick.", "Mit لَنْ: أَشْرَبَ.", "Mit لَمْ: أَشْرَبْ."]),
  F("Wie heißt das لَا in لَا تَكْتُبْ?", "لَا تَكْتُبْ", ["لَا النَّاهِيَةُ", "لَا النَّافِيَةُ", "لَا الْجَوَابِيَّةُ", "إِلَّا"], "Verbietendes لَا.", ["Das verneinende.", "Antwort „nein“.", "Anderes Wort."]),
  F("Wie heißt das لَا in لَا أَعْرِفُ?", "لَا أَعْرِفُ", ["لَا النَّافِيَةُ", "لَا النَّاهِيَةُ", "لَا الْجَوَابِيَّةُ", "لَمْ"], "Verneinendes لَا.", ["Das verbietende.", "Antwort.", "Anderes Wort."])
]);
R("b2-15", 5, [
  E("____ الْخُبْزَ. (Ich esse …)", ["آكُلُ", "أَأْكُلُ", "أَكُلُ", "أُكُلُ"], "أَأْكُلُ → آكُلُ.", ["Wird zu آ.", "Langes ā fehlt.", "Falscher Vokal."]),
  E("____ الْقَلَمَ. (Ich nehme …)", ["آخُذُ", "أَأْخُذُ", "أَخُذُ", "آخِذُ"], "آخُذُ.", ["Wird zu آ.", "Langes ā fehlt.", "Das ist das Partizip."]),
  F("Woraus ist آمُرُ entstanden?", "آمُرُ", ["أَأْمُرُ", "أَمُرُ", "آمِرُ", "أَمَرَ"], "Zwei Hamzas → آ.", ["Ein Hamza fehlt.", "Partizip.", "Perfekt."]),
  U("Statt „er“: „ich“", "يَأْكُلُ التُّفَّاحَ.", ["آكُلُ التُّفَّاحَ.", "أَأْكُلُ التُّفَّاحَ.", "أَكُلُ التُّفَّاحَ.", "نَأْكُلُ التُّفَّاحَ."], "أَأْكُلُ → آكُلُ.", ["Wird zu آ.", "Langes ā.", "„wir“."]),
  F("Was passiert mit zwei Hamzas am Wortanfang (أَأْ)?", "", ["Sie werden zu آ.", "Beide bleiben.", "Beide fallen weg.", "Sie werden zu إِ."], "أَأْكُلُ → آكُلُ.", ["Nein.", "Nein.", "Nein."])
]);
R("b2-15", 6, [
  E("____ أَنَا طَالِبٌ. (Ich bin nur ein Student.)", ["إِنَّمَا", "إِنَّ", "لَعَلَّ", "لَكِنَّ"], "إِنَّمَا = nur.", ["Dann إِنَّنِي.", "„hoffentlich“.", "„aber“."]),
  E("إِنَّمَا ____ بِالنِّيَّاتِ.", ["الْأَعْمَالُ", "الْأَعْمَالَ", "الْأَعْمَالِ", "أَعْمَالًا"], "Nach إِنَّمَا bleibt das Nomen marfūʿ.", ["Nicht manṣūb.", "Kein Genitiv.", "Bestimmt."]),
  U("Mach daraus „nur …“", "أَقْرَأُ الْمَجَلَّةَ.", ["إِنَّمَا أَقْرَأُ الْمَجَلَّةَ.", "إِنَّ أَقْرَأُ الْمَجَلَّةَ.", "إِنَّمَا أَقْرَأَ الْمَجَلَّةَ.", "أَقْرَأُ إِنَّمَا الْمَجَلَّةَ."], "إِنَّمَا vor den Satz.", ["إِنَّ braucht ein Nomen.", "Indikativ.", "Stellung."]),
  F("Was heißt إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ?", "", ["Die Almosen sind nur für die Armen.", "Wahrlich, die Almosen …, aber …", "Hoffentlich sind die Almosen …", "Die Armen geben Almosen."], "إِنَّمَا = nur.", ["Falsch.", "Falsch.", "Vertauscht."]),
  F("Macht إِنَّمَا das Nomen danach manṣūb?", "", ["Nein, es bleibt marfūʿ.", "Ja, wie إِنَّ.", "Ja, majrūr.", "Nur im Plural."], "مَا hebt die Wirkung auf.", ["Nein.", "Nein.", "Nein."]),
  U("Übersetze ins Arabische", "Du schreibst nicht die Lektion, du schreibst nur einen Brief.", ["أَنْتَ لَا تَكْتُبُ الدَّرْسَ، إِنَّمَا تَكْتُبُ رِسَالَةً.", "أَنْتَ لَا تَكْتُبُ الدَّرْسَ، إِنَّ تَكْتُبُ رِسَالَةً.", "أَنْتَ لَا تَكْتُبْ الدَّرْسَ، إِنَّمَا تَكْتُبُ رِسَالَةً.", "أَنْتَ مَا كَتَبْتَ الدَّرْسَ، إِنَّمَا رِسَالَةٌ."], "إِنَّمَا + Satz.", ["إِنَّ braucht ein Nomen.", "Das wäre ein Verbot.", "Falsch."])
]);

/* ---------- Lektion 16 ---------- */
R("b2-16", 0, [
  E("مَاذَا ____ يَا لَيْلَى؟ (Was möchtest du?)", ["تُرِيدِينَ", "تُرِيدُ", "تُرِدْنَ", "يُرِيدُ"], "du (f.): تُرِيدِينَ.", ["du (m.).", "ihr (f.).", "er."]),
  E("____ أَنْ أَسْأَلَكَ. (Ich wollte dich fragen.)", ["أَرَدْتُ", "أُرِيدُ", "أَرَادَ", "رَدْتُ"], "Perfekt ich: أَرَدْتُ.", ["Präsens.", "„er“.", "Falsch."]),
  U("Statt „er“: „wir“", "يُرِيدُ مَاءً.", ["نُرِيدُ مَاءً.", "نَرِيدُ مَاءً.", "أُرِيدُ مَاءً.", "تُرِيدُونَ مَاءً."], "Vorsilbe mit Ḍamma: نُـ.", ["Ḍamma, nicht Fatḥa.", "„ich“.", "„ihr“."])
]);
R("b2-16", 1, [
  E("أَشْرَبُ ____ تَشْرَبُ. (was du trinkst)", ["مَا", "مَاذَا", "مَنْ", "الَّذِي هُوَ"], "Relatives مَا.", ["Fragewort.", "Für Personen.", "Falsch."]),
  E("لَا أَعْبُدُ ____ تَعْبُدُونَ.", ["مَا", "مَنْ", "مَاذَا", "لِمَا"], "Relatives مَا (Sure al-Kāfirūn).", ["Hier steht مَا.", "Fragewort.", "Falsch."]),
  E("فَهِمْتُ ____ قَالَ الْمُدَرِّسُ.", ["مَا", "مَاذَا", "لِمَا", "مَنْ"], "„was der Lehrer sagte“.", ["Fragewort.", "Falsch.", "Personen."]),
  F("Welches مَا ist verneinend?", "", ["مَا فَهِمْتُ الدَّرْسَ.", "أَشْرَبُ مَا تَشْرَبُ.", "مَا اسْمُكَ؟", "مَا أَجْمَلَ الْقَمَرَ!"], "Vor Perfekt verneinend.", ["Relativ.", "Frage.", "Staunen."]),
  F("Welches مَا ist ein Fragewort?", "", ["مَا هَذَا؟", "نَسِيتُ مَا قُلْتَ.", "مَا ذَهَبْتُ.", "مَا أَكْبَرَ الْبَيْتَ!"], "„Was ist das?“", ["Relativ.", "Verneinung.", "Staunen."]),
  U("Übersetze ins Arabische", "Ich habe vergessen, was du mir gesagt hast.", ["نَسِيتُ مَا قُلْتَ لِي.", "نَسِيتُ مَاذَا قُلْتَ لِي.", "مَا نَسِيتُ قُلْتَ لِي.", "نَسِيتُ مَنْ قُلْتَ لِي."], "Relatives مَا.", ["Fragewort.", "Verneinung.", "Personen."])
]);
R("b2-16", 2, [
  E("أُرِيدُ مُصْحَفًا ____ حَرْفٍ كَبِيرٍ.", ["ذَا", "ذُو", "ذِي", "ذَاتَ"], "Akkusativ: ذَا.", ["Nominativ.", "Genitiv.", "Feminin."]),
  E("سَلَّمْتُ عَلَى رَجُلٍ ____ عِلْمٍ.", ["ذِي", "ذُو", "ذَا", "ذَاتِ"], "Genitiv: ذِي.", ["Nominativ.", "Akkusativ.", "Feminin."]),
  E("هَذَا رَجُلٌ ____ مَالٍ.", ["ذُو", "ذَا", "ذِي", "ذَاتُ"], "Nominativ: ذُو.", ["Akkusativ.", "Genitiv.", "Feminin."]),
  U("Statt Nominativ: Akkusativ", "جَاءَ رَجُلٌ ذُو لِحْيَةٍ.", ["رَأَيْتُ رَجُلًا ذَا لِحْيَةٍ.", "رَأَيْتُ رَجُلًا ذُو لِحْيَةٍ.", "رَأَيْتُ رَجُلًا ذِي لِحْيَةٍ.", "رَأَيْتُ رَجُلٌ ذُو لِحْيَةٍ."], "ذُو → ذَا.", ["ذُو muss ذَا werden.", "Genitiv.", "Objekt manṣūb."]),
  F("Welche Formen hat ذُو in den drei Fällen?", "", ["ذُو – ذَا – ذِي", "ذُو – ذُو – ذُو", "ذُو – ذَاتَ – ذِي", "ذَا – ذُو – ذِي"], "Wie die fünf Nomen.", ["Es ändert sich.", "ذَاتَ ist feminin.", "Reihenfolge."]),
  F("Welcher Fall ist ذِي?", "ذِي", ["Genitiv", "Nominativ", "Akkusativ", "Feminin"], "ذِي = majrūr.", ["ذُو.", "ذَا.", "ذَاتُ."])
]);
R("b2-16", 3, [
  E("سَأَلْتُ ____. (ʿUmar)", ["عُمَرَ", "عُمَرًا", "عُمَرُ", "عُمَرٍ"], "Diptot (فُعَلُ) → kein Tanwīn.", ["Kein Tanwīn.", "Objekt.", "Kein Tanwīn."]),
  E("خَرَجَ ____.", ["عُمَرُ", "عُمَرٌ", "عُمَرَ", "عُمَرِ"], "Nominativ ohne Tanwīn.", ["Kein Tanwīn.", "Fāʿil.", "Fāʿil."]),
  E("كَتَبْتُ إِلَى ____. (Zufar)", ["زُفَرَ", "زُفَرٍ", "زُفَرِ", "زُفَرُ"], "Diptot → Genitiv mit Fatḥa.", ["Kein Tanwīn.", "Kein Kasra.", "Genitiv."]),
  F("Wie heißt das Muster فُعَلُ bei Namen?", "", ["مَعْدُولٌ", "مَمْدُودٌ", "مَقْصُورٌ", "مَنْقُوصٌ"], "Diptot nach فُعَلُ.", ["Anderes.", "Anderes.", "Anderes."]),
  F("Welcher Name ist diptot nach فُعَلُ?", "", ["هُبَلُ", "حَامِدٌ", "بِلَالٌ", "سَعِيدٌ"], "فُعَلُ.", ["Triptot.", "Triptot.", "Triptot."]),
  U("Setz مِنْ davor", "عُمَرُ", ["مِنْ عُمَرَ", "مِنْ عُمَرِ", "مِنْ عُمَرٍ", "مِنْ عُمَرُ"], "Fatḥa im Genitiv.", ["Kein Kasra.", "Kein Tanwīn.", "Genitiv."])
]);
R("b2-16", 4, [
  E("لِحْيَتُهُ ____. (weiß)", ["بَيْضَاءُ", "أَبْيَضُ", "بَيْضَاءٌ", "بِيضٌ"], "Feminin: بَيْضَاءُ.", ["Maskulin.", "Kein Tanwīn.", "Plural."]),
  E("الرِّجَالُ ____. (schwarz)", ["السُّودُ", "الْأَسْوَدُ", "السَّوْدَاءُ", "الْأَسَاوِدُ"], "Plural فُعْلٌ.", ["Singular.", "Feminin.", "Nicht im Buch."]),
  U("Feminin", "أَحْمَرُ", ["حَمْرَاءُ", "أَحْمَرَةٌ", "حُمْرٌ", "حَمْرَاءٌ"], "فَعْلَاءُ.", ["Gibt es nicht.", "Plural.", "Kein Tanwīn."]),
  U("Plural", "أَصْفَرُ", ["صُفْرٌ", "أَصَافِرُ", "صَفْرَاءُ", "أَصْفَرُونَ"], "فُعْلٌ.", ["Nicht im Buch.", "Feminin.", "Gibt es nicht."])
]);
R("b2-16", 5, [
  E("سَأَلْتُ ____. (ʿAmr)", ["عَمْرًا", "عَمْرٌو", "عُمَرَ", "عَمْرَوًا"], "Akkusativ: kein wāw.", ["Nominativ.", "ʿUmar.", "Falsch."]),
  E("جَاءَ ____. (ʿAmr)", ["عَمْرٌو", "عَمْرًا", "عُمَرُ", "عَمْرُ"], "Nominativ mit stummem wāw.", ["Akkusativ.", "ʿUmar.", "Tanwīn fehlt."]),
  E("ذَهَبْتُ إِلَى ____. (ʿAmr)", ["عَمْرٍو", "عَمْرٍ", "عُمَرَ", "عَمْرَو"], "Genitiv: wāw bleibt geschrieben.", ["wāw fehlt.", "ʿUmar.", "Falsch."]),
  F("Warum schreibt man عَمْرٌو mit wāw?", "عَمْرٌو", ["um es von عُمَرُ zu unterscheiden", "weil man es spricht", "weil es Plural ist", "weil es feminin ist"], "Das wāw ist stumm.", ["Es ist stumm.", "Singular.", "Maskulin."]),
  F("Wann fällt das wāw von عَمْرٌو weg?", "", ["im Akkusativ (عَمْرًا)", "im Genitiv", "im Nominativ", "nie"], "Dann unterscheidet das Alif.", ["Im Genitiv bleibt es.", "Im Nominativ bleibt es.", "Im Akkusativ fällt es."]),
  F("Welches Wort ist diptot?", "", ["عُمَرُ", "عَمْرٌو", "حَامِدٌ", "مُحَمَّدٌ"], "عُمَرُ (فُعَلُ).", ["Triptot.", "Triptot.", "Triptot."])
]);
R("b2-16", 6, [
  E("بِنْتُهُ ____ طَبِيبَةٌ.", ["زَيْنَبُ", "زَيْنَبَ", "زَيْنَبٍ", "لِزَيْنَبَ"], "Badal im Nominativ.", ["Fall wie بِنْتُهُ.", "Kein Tanwīn.", "Keine Präposition."]),
  E("كَتَبْنَا إِلَى أُسْتَاذِنَا الدُّكْتُورِ ____.", ["بِلَالٍ", "بِلَالٌ", "بِلَالًا", "بِلَالُ"], "Badal im Genitiv.", ["Fall.", "Fall.", "Fall."]),
  E("أَيْنَ أَخُوكَ ____؟", ["الْحُسَيْنُ", "الْحُسَيْنَ", "الْحُسَيْنِ", "حُسَيْنًا"], "Badal im Nominativ.", ["Fall.", "Fall.", "Fall."]),
  F("Was ist ein Badal?", "", ["Apposition – steht im selben Fall wie das Bezugswort", "ein Adjektiv", "ein Objekt", "eine Präposition"], "أَخُوكَ الْحُسَيْنُ.", ["Kein Adjektiv.", "Kein Objekt.", "Keine Präposition."]),
  U("Füge den Badal ein: „deinen Kollegen ʿAbbās“", "رَأَيْتُ زَمِيلَكَ.", ["رَأَيْتُ زَمِيلَكَ عَبَّاسًا.", "رَأَيْتُ زَمِيلَكَ عَبَّاسٌ.", "رَأَيْتُ زَمِيلَكَ عَبَّاسٍ.", "رَأَيْتُ عَبَّاسٌ زَمِيلَكَ."], "Badal manṣūb.", ["Fall.", "Fall.", "Stellung und Fall."])
]);
R("b2-16", 7, [
  E("جَاءَ إِبْرَاهِيمُ وَطَالِبٌ ____.", ["آخَرُ", "آخَرٌ", "أُخْرَى", "الْآخَرُ"], "آخَرُ ist diptot.", ["Kein Tanwīn.", "Feminin.", "Unbestimmt."]),
  E("قَرَأْتُ كِتَابًا ____.", ["آخَرَ", "آخَرًا", "أُخْرَى", "آخَرُ"], "Akkusativ, diptot.", ["Kein Tanwīn.", "Feminin.", "Fall."]),
  E("أُرِيدُ قَهْوَةً ____.", ["أُخْرَى", "آخَرَ", "أُخْرًى", "أُخْرَاةً"], "Feminin: أُخْرَى.", ["Maskulin.", "Kein Tanwīn.", "Gibt es nicht."]),
  F("Was ist die feminine Form von آخَرُ?", "آخَرُ", ["أُخْرَى", "آخِرَةٌ", "آخَرَةٌ", "أُخْرَاةٌ"], "أُخْرَى.", ["„Jenseits“.", "Gibt es nicht.", "Gibt es nicht."]),
  F("Hat أَشْيَاءُ Tanwīn?", "أَشْيَاءُ", ["Nein, es ist diptot.", "Ja.", "Nur im Genitiv.", "Nur mit al."], "أَشْيَاءُ ist diptot.", ["Kein Tanwīn.", "Nein.", "Mit al nie Tanwīn."]),
  U("Mach es feminin", "رَأَيْتُ رَجُلًا آخَرَ.", ["رَأَيْتُ امْرَأَةً أُخْرَى.", "رَأَيْتُ امْرَأَةً آخَرَ.", "رَأَيْتُ امْرَأَةً أُخْرًى.", "رَأَيْتُ امْرَأَةً آخَرَةً."], "آخَرُ → أُخْرَى.", ["Maskulin.", "Kein Tanwīn.", "Gibt es nicht."])
]);
R("b2-16", 8, [
  E("عِنْدِي ____ هِنْدِيٌّ. (ein Exemplar des Qurʾān)", ["مُصْحَفٌ", "قُرْآنٌ", "الْقُرْآنُ", "كِتَابُ اللَّهِ"], "Gedrucktes Exemplar = مُصْحَفٌ.", ["Hier wäre قُرْآنٌ falsch.", "Nicht das Exemplar.", "Nicht das Exemplar."]),
  E("هَذَا الْجَوَابُ ____ صَحِيحٍ.", ["غَيْرُ", "لَيْسَ", "لَا", "مَا"], "غَيْرُ + majrūr.", ["Dann بِصَحِيحٍ.", "Nicht so.", "Nicht so."]),
  E("هُوَ غَيْرُ ____.", ["مُسْلِمٍ", "مُسْلِمٌ", "مُسْلِمًا", "الْمُسْلِمُ"], "Nach غَيْرُ majrūr.", ["Genitiv.", "Genitiv.", "Fall."]),
  E("مَا أَكَلْتُ ____.", ["شَيْئًا", "شَيْءٌ", "شَيْءٍ", "أَشْيَاءُ"], "Objekt → شَيْئًا.", ["Objekt.", "Objekt.", "Singular."]),
  F("Was heißt وَرَقٌ غَيْرُ مُسَطَّرٍ?", "", ["unliniertes Papier", "liniertes Papier", "kein Papier", "anderes Papier"], "غَيْرُ = nicht-, un-.", ["Gegenteil.", "Es ist Papier.", "Das wäre آخَرُ."]),
  F("Was heißt عِنْدِي مُصْحَفَانِ?", "", ["Ich habe zwei Qurʾān-Exemplare.", "Ich habe den Qurʾān zweimal gelesen.", "Ich habe zwei Bücher.", "Ich habe einen Qurʾān."], "Dual von مُصْحَفٌ.", ["Falsch.", "Nicht irgendwelche.", "Zwei."])
]);

/* ---------- Lektion 17 ---------- */
R("b2-17", 1, [
  E("جِئْتُ ____ مَعَكَ. (um mit dir zu lernen)", ["لِأَدْرُسَ", "لِأَدْرُسُ", "لِدَرَسْتُ", "لِأَنْ أَدْرُسُ"], "lām at-taʿlīl → manṣūb.", ["Nach لِـ manṣūb.", "Kein Perfekt.", "Nach أَنْ manṣūb."]),
  E("فَتَحْتُ الْبَابَ ____ الضَّيْفُ.", ["لِيَدْخُلَ", "لِيَدْخُلُ", "لِتَدْخُلَ", "لِدَخَلَ"], "„damit der Gast eintritt“.", ["Nach لِـ manṣūb.", "Maskulin.", "Kein Perfekt."]),
  F("Was steckt im lām at-taʿlīl?", "لِأَفْهَمَ", ["ein verstecktes أَنْ", "ein verstecktes لَنْ", "ein verstecktes لَمْ", "nichts"], "Deshalb ist der Muḍāriʿ manṣūb.", ["Nein.", "Nein.", "Es steckt أَنْ darin."]),
  U("Übersetze ins Arabische", "Ich ging zur Bibliothek, um ein Buch zu lesen.", ["ذَهَبْتُ إِلَى الْمَكْتَبَةِ لِأَقْرَأَ كِتَابًا.", "ذَهَبْتُ إِلَى الْمَكْتَبَةِ لِأَقْرَأُ كِتَابًا.", "ذَهَبْتُ إِلَى الْمَكْتَبَةِ لِأَنَّ أَقْرَأَ كِتَابًا.", "ذَهَبْتُ إِلَى الْمَكْتَبَةِ لِقَرَأْتُ كِتَابًا."], "لِـ + manṣūb.", ["manṣūb.", "„weil“ braucht ein Nomen.", "Kein Perfekt."])
]);
R("b2-17", 2, [
  E("أَ____ أَنْ أَسْأَلَكَ؟ (Darf ich dich fragen?)", ["يُمْكِنُنِي", "يُمْكِنُكَ", "يُمْكِنُهُ", "أُمْكِنُ"], "يُمْكِنُنِي.", ["„dir“.", "„ihm“.", "Falsch."]),
  E("نَعَمْ، ____ أَنْ تَجْلِسَ هُنَا.", ["يُمْكِنُكَ", "يُمْكِنُنِي", "تُمْكِنُ", "يُمْكِنُكِ"], "Antwort an „dich“ (m.).", ["„mir“.", "Falsch.", "Feminin."]),
  E("لَا يُمْكِنُهُ أَنْ ____ الْآنَ.", ["يَخْرُجَ", "يَخْرُجُ", "خَرَجَ", "يَخْرُجْ"], "أَنْ → manṣūb.", ["Nach أَنْ Fatḥa.", "Kein Perfekt.", "Kein Jussiv."]),
  U("Frag höflich", "أَدْخُلُ.", ["أَيُمْكِنُنِي أَنْ أَدْخُلَ؟", "أَيُمْكِنُنِي أَنْ أَدْخُلُ؟", "أَيُمْكِنُنِي أَدْخُلُ؟", "أَيُمْكِنُكَ أَنْ أَدْخُلَ؟"], "يُمْكِنُنِي أَنْ + manṣūb.", ["Fatḥa.", "أَنْ fehlt.", "„dir“."]),
  F("Was heißt يُمْكِنُ?", "يُمْكِنُ", ["es ist möglich", "es ist nötig", "es gehört sich", "es ist verboten"], "يُمْكِنُ = möglich.", ["يَجِبُ.", "يَنْبَغِي.", "مَمْنُوعٌ."])
]);
R("b2-17", 3, [
  E("بِلَالٌ غَائِبٌ ____ أُسْبُوعٍ.", ["مُنْذُ", "قَبْلَ", "بَعْدَ", "مَعَ"], "„seit“ = مُنْذُ.", ["„vor“.", "„nach“.", "„mit“."]),
  E("مَا رَأَيْتُهُ مُنْذُ ____.", ["سَنَةٍ", "سَنَةٌ", "سَنَةً", "السَّنَةُ"], "Nach مُنْذُ majrūr.", ["Genitiv.", "Genitiv.", "Unbestimmt."]),
  E("أَدْرُسُ الْعَرَبِيَّةَ ____ شَهْرَيْنِ.", ["مُنْذُ", "إِلَى", "عَلَى", "تَحْتَ"], "„seit zwei Monaten“.", ["„bis“.", "„auf“.", "„unter“."]),
  U("Übersetze ins Arabische", "Ich habe ihn seit Samstag nicht gesehen.", ["مَا رَأَيْتُهُ مُنْذُ يَوْمِ السَّبْتِ.", "مَا رَأَيْتُهُ مُنْذُ يَوْمُ السَّبْتِ.", "لَا رَأَيْتُهُ مُنْذُ يَوْمِ السَّبْتِ.", "مَا رَأَيْتُهُ قَبْلَ يَوْمِ السَّبْتِ."], "مُنْذُ + Genitiv.", ["Genitiv.", "Perfekt mit مَا.", "„vor“."]),
  F("Was heißt مُنْذُ?", "مُنْذُ", ["seit", "bis", "vor", "nach"], "مُنْذُ = seit.", ["إِلَى / حَتَّى.", "قَبْلَ.", "بَعْدَ."]),
  U("Übersetze ins Arabische", "Er wohnt seit einem Jahr hier.", ["يَسْكُنُ هُنَا مُنْذُ سَنَةٍ.", "يَسْكُنُ هُنَا مُنْذُ سَنَةٌ.", "يَسْكُنُ هُنَا قَبْلَ سَنَةٍ.", "سَكَنَ هُنَا بَعْدَ سَنَةٍ."], "مُنْذُ + Genitiv.", ["Genitiv.", "„vor“.", "Falsch."]),
  E("لَمْ يَأْكُلْ شَيْئًا ____ الصَّبَاحِ.", ["مُنْذُ", "عِنْدَ", "مَعَ", "إِلَّا"], "„seit dem Morgen“.", ["„bei“.", "„mit“.", "„außer“."])
]);
R("b2-17", 4, [
  E("____ مَرْيَمُ.", ["ذَهَبَتْ", "ذَهَبَ", "ذَهَبَا", "ذَهَبْنَ"], "Weibliche Person → Verb feminin.", ["Bei Frauen nicht maskulin.", "Dual.", "Plural."]),
  E("____ الْبَقَرَةُ.", ["خَرَجَتِ", "خَرَجَ", "خَرَجُوا", "خَرَجْنَ"], "Weibliches Tier → feminin.", ["Bei weiblichen Tieren nicht maskulin.", "Plural.", "Plural."]),
  F("Was ist auch richtig?", "", ["بَقِيَ ثَلَاثُ دَقَائِقَ.", "ذَهَبَ آمِنَةُ.", "جَلَسَ الْمُدَرِّسَةُ.", "خَرَجَ الْبَقَرَةُ."], "Grammatisch feminine Sache → maskulin erlaubt.", ["Frau → feminin.", "Frau → feminin.", "Weibliches Tier → feminin."])
]);
R("b2-17", 5, [
  E("اِسْمَحْ لِي ____ هُنَا.", ["بِالْجُلُوسِ", "الْجُلُوسَ", "لِلْجُلُوسِ", "فِي الْجُلُوسِ"], "سَمَحَ لِـ … بِـ.", ["بِـ fehlt.", "Es braucht بِـ.", "Es braucht بِـ."]),
  E("سَمَحَ لَهُ ____.", ["بِالْخُرُوجِ", "الْخُرُوجَ", "عَلَى الْخُرُوجِ", "مِنَ الْخُرُوجِ"], "سَمَحَ لَهُ بِـ.", ["بِـ fehlt.", "Nicht عَلَى.", "Nicht مِنْ."]),
  E("____ أَنْ تَسْمَحَ لِي بِالدُّخُولِ. (Ich bitte dich …)", ["أَرْجُو", "أُرِيدُ مِنْ", "أَرَى", "أَظُنُّ"], "أَرْجُو = ich bitte.", ["Falsch gebaut.", "„ich sehe“.", "„ich glaube“."]),
  E("مَاذَا ____ يَا بِلَالُ؟ (Was siehst du?)", ["تَرَى", "يَرَى", "أَرَى", "تَرْأَى"], "„du siehst“ = تَرَى.", ["„er“.", "„ich“.", "Falsch."]),
  E("____ الْهِلَالَ. (Wir sehen …)", ["نَرَى", "نَرْأَى", "أَرَى", "يَرَوْنَ"], "„wir sehen“ = نَرَى.", ["Falsch.", "„ich“.", "„sie“."]),
  U("Übersetze ins Arabische", "Erlaube mir hinauszugehen.", ["اِسْمَحْ لِي بِالْخُرُوجِ.", "اِسْمَحْ لِي الْخُرُوجَ.", "اِسْمَحْ بِي لِلْخُرُوجِ.", "سَمَحَ لِي بِالْخُرُوجِ."], "سَمَحَ لِـ … بِـ.", ["بِـ fehlt.", "Präpositionen vertauscht.", "Perfekt."])
]);

/* ---------- Lektion 18 ---------- */
R("b2-18", 0, [
  E("أُرِيدُ أَنْ ____.", ["أَنَامَ", "أَنَامُ", "أَنَمْ", "نِمْتُ"], "manṣūb: -a.", ["Indikativ.", "Jussiv.", "Perfekt."]),
  E("نُرِيدُ أَنْ ____ أَمَامَكَ.", ["نَجْلِسَ", "نَجْلِسُ", "نَجْلِسْ", "جَلَسْنَا"], "manṣūb.", ["Indikativ.", "Jussiv.", "Perfekt."]),
  E("يُرِيدُ أَنْ ____ إِلَى بَلَدِهِ.", ["يَرْجِعَ", "يَرْجِعُ", "يَرْجِعْ", "رَجَعَ"], "manṣūb.", ["Indikativ.", "Jussiv.", "Perfekt."]),
  E("تُرِيدُ أَنْ ____ الْعَشَاءَ. (sie will kochen)", ["تَطْبُخَ", "تَطْبُخُ", "يَطْبُخَ", "طَبَخَتْ"], "manṣūb, feminin.", ["Indikativ.", "Maskulin.", "Perfekt."]),
  U("Mach es manṣūb (nach أَنْ)", "يَذْهَبُ", ["أَنْ يَذْهَبَ", "أَنْ يَذْهَبُ", "أَنْ يَذْهَبْ", "أَنْ ذَهَبَ"], "-u → -a.", ["Indikativ.", "Jussiv.", "Perfekt."]),
  U("Mach es manṣūb (nach أَنْ)", "نَكْتُبُ", ["أَنْ نَكْتُبَ", "أَنْ نَكْتُبُ", "أَنْ نَكْتُبْ", "أَنْ كَتَبْنَا"], "-u → -a.", ["Indikativ.", "Jussiv.", "Perfekt."]),
  F("Bei welchen Formen wechselt nur -u zu -a?", "", ["يَذْهَبُ، تَذْهَبُ، أَذْهَبُ، نَذْهَبُ", "يَذْهَبُونَ، تَذْهَبُونَ", "تَذْهَبِينَ", "يَذْهَبْنَ"], "Die vier Formen ohne nūn.", ["Dort fällt das nūn.", "Dort fällt das nūn.", "Unverändert."]),
  U("Übersetze ins Arabische", "Ich will Arabisch lernen.", ["أُرِيدُ أَنْ أَدْرُسَ الْعَرَبِيَّةَ.", "أُرِيدُ أَنْ أَدْرُسُ الْعَرَبِيَّةَ.", "أُرِيدُ أَدْرُسُ الْعَرَبِيَّةَ.", "أُرِيدُ أَنْ دَرَسْتُ الْعَرَبِيَّةَ."], "أَنْ + manṣūb.", ["Fatḥa.", "أَنْ fehlt.", "Kein Perfekt."])
]);
R("b2-18", 1, [
  E("يُرِيدُونَ أَنْ ____ مِنَ الْفَصْلِ.", ["يَخْرُجُوا", "يَخْرُجُونَ", "يَخْرُجَ", "يَخْرُجْنَ"], "nūn fällt.", ["Mit nūn kein Subjunktiv.", "Singular.", "Feminin."]),
  U("Mach es manṣūb (nach أَنْ)", "تَكْتُبِينَ", ["أَنْ تَكْتُبِي", "أَنْ تَكْتُبِينَ", "أَنْ تَكْتُبَ", "أَنْ تَكْتُبْنَ"], "nūn fällt.", ["Mit nūn kein Subjunktiv.", "Maskulin.", "Plural."]),
  F("Was ist das Zeichen des Subjunktivs bei تَذْهَبُونَ?", "", ["der Wegfall des nūn", "das Fatḥa", "das Sukūn", "das Kasra"], "حَذْفُ النُّونِ.", ["Kein Fatḥa.", "Kein Sukūn.", "Kein Kasra."])
]);
R("b2-18", 2, [
  E("أَتُرِدْنَ أَنْ ____ الْأَخْبَارَ يَا أَخَوَاتُ؟", ["تَسْمَعْنَ", "تَسْمَعُوا", "تَسْمَعِي", "تَسْمَعَ"], "Unverändert.", ["Maskulin.", "Singular.", "Singular."]),
  U("Mach es manṣūb (nach أَنْ)", "يَكْتُبْنَ", ["أَنْ يَكْتُبْنَ", "أَنْ يَكْتُبُوا", "أَنْ يَكْتُبَ", "أَنْ يَكْتُبْنَا"], "Unverändert.", ["Maskulin.", "Singular.", "Falsch."]),
  U("Mach es manṣūb (nach لَنْ)", "تَخْرُجْنَ", ["لَنْ تَخْرُجْنَ", "لَنْ تَخْرُجُوا", "لَنْ تَخْرُجِي", "لَنْ تَخْرُجَ"], "Unverändert.", ["Maskulin.", "Singular.", "Singular."]),
  F("Warum ändert sich يَذْهَبْنَ nach أَنْ nicht?", "", ["Es ist mabnī (nūn der Frauen).", "Weil es Plural ist.", "Weil أَنْ nicht wirkt.", "Weil es Perfekt ist."], "Immer gleich.", ["Andere Plurale ändern sich.", "أَنْ wirkt sonst.", "Es ist Muḍāriʿ."]),
  E("تُرِيدُ الْبَنَاتُ أَنْ ____ إِلَى الْبَيْتِ.", ["يَرْجِعْنَ", "يَرْجِعُوا", "تَرْجِعَ", "يَرْجِعْنَا"], "Unverändert.", ["Maskulin.", "Singular.", "Falsch."])
]);
R("b2-18", 3, [
  E("هَذَا الْقَلَمُ ____. (wie mein Stift)", ["كَقَلَمِي", "كَقَلَمُي", "كَقَلَمَي", "كَأَنَا"], "كَـ + majrūr.", ["Kasra vor ـِي.", "Kasra vor ـِي.", "كَـ nicht vor Pronomen."]),
  E("هُوَ ____ فِي الْقُوَّةِ. (wie ein Löwe)", ["كَالْأَسَدِ", "كَالْأَسَدُ", "كَالْأَسَدَ", "كَأَسَدٌ"], "كَـ → majrūr.", ["majrūr.", "majrūr.", "majrūr."]),
  E("هَذِهِ الْقَهْوَةُ ____.", ["كَالْمَاءِ", "كَالْمَاءُ", "كَالْمَاءَ", "كَمَاءٌ"], "majrūr.", ["majrūr.", "majrūr.", "majrūr."]),
  E("بَيْتُكَ ____. (wie ein Palast)", ["كَقَصْرٍ", "كَقَصْرٌ", "كَقَصْرًا", "كَالْقَصْرُ"], "majrūr, unbestimmt.", ["majrūr.", "majrūr.", "majrūr."]),
  E("أَنْتَ ____. (wie ich)", ["كَمِثْلِي", "كَأَنَا", "كِي", "مِثْلُ أَنَا"], "Bei Pronomen: كَمِثْلِـ.", ["Kein selbstständiges Pronomen.", "Gibt es nicht.", "Kein selbstständiges Pronomen."]),
  E("هِيَ ____. (wie ihre Mutter)", ["كَأُمِّهَا", "كَأُمُّهَا", "كَأُمَّهَا", "كَهِيَ أُمُّهَا"], "majrūr.", ["majrūr.", "majrūr.", "Falsch."]),
  U("Mach einen Vergleich mit كَـ", "سَاعَتِي – سَاعَتُكَ", ["سَاعَتِي كَسَاعَتِكَ.", "سَاعَتِي كَسَاعَتُكَ.", "سَاعَتِي كَسَاعَتَكَ.", "كَسَاعَتِي سَاعَتُكَ."], "كَـ + majrūr.", ["majrūr.", "majrūr.", "Stellung."]),
  U("Mach einen Vergleich mit كَـ", "الْبَيْتُ – الْمَسْجِدُ", ["الْبَيْتُ كَالْمَسْجِدِ.", "الْبَيْتُ كَالْمَسْجِدُ.", "الْبَيْتُ كَمَسْجِدُ.", "كَالْبَيْتِ الْمَسْجِدُ."], "majrūr.", ["majrūr.", "Falsch.", "Stellung."]),
  U("Statt كَـ mit Pronomen", "هُوَ كَـ أَنْتَ", ["هُوَ كَمِثْلِكَ.", "هُوَ كَكَ.", "هُوَ كَأَنْتَ.", "هُوَ مِثْلُ أَنْتَ."], "كَـ + مِثْلِ + Pronomen.", ["كَـ nicht direkt vor Pronomen.", "Kein selbstständiges Pronomen.", "Kein selbstständiges Pronomen."]),
  F("Was ist كَـ grammatisch?", "كَـ", ["eine Präposition (حَرْفُ جَرٍّ)", "ein Verb", "eine Schwester von إِنَّ", "ein Fragewort"], "Das Nomen danach ist majrūr.", ["Kein Verb.", "Das wäre كَأَنَّ.", "Kein Fragewort."]),
  F("Was ist der Unterschied zwischen كَـ und كَأَنَّ?", "", ["كَـ: Präposition (majrūr), كَأَنَّ: Schwester von إِنَّ (manṣūb)", "kein Unterschied", "كَـ: manṣūb, كَأَنَّ: majrūr", "beide sind Verben"], "„wie“ vs. „als ob“.", ["Unterschiedlich.", "Vertauscht.", "Keine Verben."]),
  U("Übersetze ins Arabische", "Dieser Junge ist wie sein Vater.", ["هَذَا الْوَلَدُ كَأَبِيهِ.", "هَذَا الْوَلَدُ كَأَبُوهُ.", "هَذَا الْوَلَدُ كَأَبَاهُ.", "هَذَا الْوَلَدُ كَهُوَ أَبُوهُ."], "كَـ + Genitiv der fünf Nomen: أَبِيهِ.", ["Genitiv mit ي.", "Genitiv mit ي.", "Falsch."])
]);
R("b2-18", 4, [
  E("خَرَجَتِ الطَّالِبَاتُ ____.", ["كُلُّهُنَّ", "كُلُّهُمْ", "كُلَّهُنَّ", "كُلُّهَا"], "Bekräftigung: feminin Plural, marfūʿ.", ["Maskulin.", "Fall.", "Hier Personen."]),
  E("بَحَثْتُ عَنْهُ فِي الْمَدْرَسَةِ ____.", ["كُلِّهَا", "كُلُّهَا", "كُلَّهَا", "كُلِّهِ"], "Folgt dem Genitiv; feminin.", ["Fall.", "Fall.", "Feminin."]),
  U("Bekräftige mit كُلّ", "قَرَأْتُ الْقُرْآنَ.", ["قَرَأْتُ الْقُرْآنَ كُلَّهُ.", "قَرَأْتُ الْقُرْآنَ كُلُّهُ.", "قَرَأْتُ الْقُرْآنَ كُلَّهَا.", "قَرَأْتُ كُلُّ الْقُرْآنَ."], "Objekt → كُلَّهُ.", ["Fall.", "Maskulin.", "Falsch."]),
  F("Wie heißt das bekräftigte Wort?", "", ["مُؤَكَّدٌ", "مَنْعُوتٌ", "مُضَافٌ", "فَاعِلٌ"], "تَأْكِيدٌ / مُؤَكَّدٌ.", ["Beim Adjektiv.", "Iḍāfa.", "Verb."])
]);
R("b2-18", 5, [
  E("يَا ____ الطَّالِبُ!", ["أَيُّهَا", "أَيُّ", "أَيَّتُهَا", "أَيَّهَا"], "Vor al: أَيُّهَا.", ["Es braucht أَيُّهَا.", "Feminin.", "Falsch."]),
  E("يَا ____ الْمُؤْمِنُونَ!", ["أَيُّهَا", "أَيُّهُمْ", "أَيُّ", "الـ"], "يَا أَيُّهَا + al.", ["Falsch.", "Es braucht أَيُّهَا.", "Falsch."]),
  F("Welcher Ruf ist richtig?", "", ["يَا أَيُّهَا النَّاسُ!", "يَا النَّاسُ!", "يَا النَّاسَ!", "أَيُّهَا يَا النَّاسُ!"], "يَا nicht direkt vor al.", ["Nicht direkt vor al.", "Nicht direkt vor al.", "Stellung."]),
  U("Ruf an", "الْمُدَرِّسُ", ["يَا أَيُّهَا الْمُدَرِّسُ!", "يَا الْمُدَرِّسُ!", "يَا مُدَرِّسٌ!", "يَا أَيُّهَا الْمُدَرِّسَ!"], "يَا أَيُّهَا + marfūʿ.", ["Nicht direkt vor al.", "Kein Tanwīn.", "marfūʿ."]),
  F("Wie heißt die Anrufpartikel يَا?", "", ["حَرْفُ النِّدَاءِ", "حَرْفُ الْجَرِّ", "حَرْفُ الِاسْتِفْهَامِ", "حَرْفُ النَّفْيِ"], "Ruf-Partikel.", ["Präposition.", "Fragepartikel.", "Verneinung."])
]);
R("b2-18", 6, [
  F("Was heißt هَيَّا بِنَا?", "هَيَّا بِنَا", ["Komm (mit uns)!", "Hier sind wir!", "Gib uns!", "Wo sind wir?"], "اسْمُ فِعْلٍ.", ["Falsch.", "Das wäre هَاتِ.", "Keine Frage."]),
  F("Was ist آمِينَ grammatisch?", "آمِينَ", ["اسْمُ فِعْلٍ (Nomen mit Verbkraft)", "ein Verb im Perfekt", "eine Präposition", "ein Name"], "„Erhöre!“", ["Kein Perfekt.", "Keine Präposition.", "Kein Name."]),
  F("Was drückt أُفٍّ aus?", "أُفٍّ", ["Überdruss („Pfui, ich bin es leid“)", "Freude", "Schmerz", "Zustimmung"], "Qurʾān: فَلَا تَقُلْ لَهُمَا أُفٍّ.", ["Das wäre ein anderes Wort.", "Das wäre آهِ.", "Falsch."]),
  F("Was drückt آهِ aus?", "آهِ", ["Schmerz („Aua!“)", "Zustimmung", "Überdruss", "Aufforderung"], "Ausruf des Schmerzes.", ["Falsch.", "Das ist أُفٍّ.", "Das ist هَيَّا."]),
  F("Was ist ein اسْمُ فِعْلٍ?", "", ["ein Nomen mit der Kraft eines Verbs", "ein Verb ohne Fāʿil", "ein Maṣdar", "ein Partizip"], "z. B. هَيَّا، آمِينَ.", ["Falsch.", "Maṣdar ist anders.", "Partizip ist anders."])
]);
R("b2-18", 7, [
  E("كِتَابُ التَّارِيخِ ____ جَدِيدٌ.", ["هَذَا", "هَذِهِ", "الْهَذَا", "هَذَانِ"], "Demonstrativ nach der Iḍāfa.", ["Maskulin.", "Gibt es nicht.", "Singular."]),
  E("خُذْ كِتَابِي ____.", ["هَذَا", "هَذِهِ", "هَاتَانِ", "هَؤُلَاءِ"], "Nach Wort mit Endung: هَذَا am Ende.", ["Das Buch ist maskulin.", "Dual.", "Plural."]),
  E("سَاعَتُكَ ____ جَمِيلَةٌ.", ["هَذِهِ", "هَذَا", "هَذَانِ", "هَؤُلَاءِ"], "Feminin.", ["Maskulin.", "Dual.", "Plural."]),
  U("Übersetze ins Arabische", "dieses Schlafzimmer", ["غُرْفَةُ النَّوْمِ هَذِهِ", "هَذِهِ غُرْفَةُ النَّوْمِ", "هَذِهِ الْغُرْفَةُ النَّوْمِ", "غُرْفَةُ هَذِهِ النَّوْمِ"], "Demonstrativ ans Ende der Iḍāfa.", ["Das wäre „Das ist das Schlafzimmer“.", "Muḍāf ohne al.", "Nichts zwischen die Iḍāfa."]),
  E("أَرْجُو ____ تَتَأَخَّرَ.", ["أَلَّا", "أَنْ لَا", "إِلَّا", "لَا"], "أَلَّا = أَنْ لَا (zusammengeschrieben).", ["Wird zusammengeschrieben.", "„außer“.", "أَنْ fehlt."]),
  U("Schreib zusammen", "أَنْ لَا تَخْرُجَ", ["أَلَّا تَخْرُجَ", "إِلَّا تَخْرُجَ", "أَلَا تَخْرُجَ", "أَنْلَا تَخْرُجَ"], "أَنْ + لَا → أَلَّا.", ["„außer“.", "Andere Partikel.", "Falsch."])
]);

/* ---------- Lektion 19 ---------- */
R("b2-19", 0, [
  E("____ دَرَسْتُ الْإِسْبَانِيَّةَ. (Ich habe nicht … gelernt.)", ["مَا", "لَا", "لَنْ", "لَيْسَ"], "Perfekt → مَا.", ["Nicht beim Perfekt.", "Futur.", "Nicht vor Verben."]),
  E("____ أَعْرِفُ رَقْمَ هَاتِفِهِ.", ["لَا", "مَا … ـتُ", "لَنْ", "لَيْسَ"], "Muḍāriʿ → لَا.", ["Falsch gebaut.", "Mit لَنْ: أَعْرِفَ.", "Nicht vor Verben."]),
  F("Welche Verneinung gehört zu welcher Zeit?", "", ["مَا – Perfekt, لَا – Präsens, لَنْ – Futur", "لَا – Perfekt, مَا – Präsens, لَنْ – Futur", "لَنْ – Perfekt, لَا – Präsens, مَا – Futur", "alle gleich"], "مَا ذَهَبْتُ / لَا أَذْهَبُ / لَنْ أَذْهَبَ.", ["Vertauscht.", "Vertauscht.", "Unterschiedlich."]),
  U("Verneine (Vergangenheit)", "كَتَبْتُ الرِّسَالَةَ.", ["مَا كَتَبْتُ الرِّسَالَةَ.", "لَا كَتَبْتُ الرِّسَالَةَ.", "لَنْ كَتَبْتُ الرِّسَالَةَ.", "لَيْسَ كَتَبْتُ الرِّسَالَةَ."], "مَا + Perfekt.", ["Perfekt mit مَا.", "Futur.", "Nicht vor Verben."]),
  U("Verneine (Gegenwart)", "أَكْتُبُ الرِّسَالَةَ.", ["لَا أَكْتُبُ الرِّسَالَةَ.", "لَنْ أَكْتُبُ الرِّسَالَةَ.", "مَا كَتَبْتُ الرِّسَالَةَ.", "لَيْسَ أَكْتُبُ الرِّسَالَةَ."], "لَا + Muḍāriʿ.", ["Mit لَنْ: manṣūb.", "Vergangenheit.", "Nicht vor Verben."]),
  U("Verneine (Zukunft)", "سَأَكْتُبُ الرِّسَالَةَ.", ["لَنْ أَكْتُبَ الرِّسَالَةَ.", "لَا سَأَكْتُبُ الرِّسَالَةَ.", "لَنْ سَأَكْتُبُ الرِّسَالَةَ.", "لَنْ أَكْتُبُ الرِّسَالَةَ."], "لَنْ + manṣūb, سَـ fällt.", ["Futur mit لَنْ.", "سَـ fällt.", "manṣūb."])
]);
R("b2-19", 1, [
  E("لَنْ ____ هَذَا الْكِتَابَ.", ["أَقْرَأَ", "أَقْرَأُ", "أَقْرَأْ", "سَأَقْرَأُ"], "manṣūb.", ["Indikativ.", "Jussiv.", "سَـ fällt."]),
  E("لَنْ ____ إِلَى السُّوقِ يَا بِلَالُ؟", ["تَذْهَبَ", "تَذْهَبُ", "تَذْهَبْ", "سَتَذْهَبُ"], "manṣūb.", ["Indikativ.", "Jussiv.", "سَـ fällt."])
]);
R("b2-19", 2, [
  E("لَنْ ____ الطُّلَّابُ هَذَا. (Die Studenten werden das nicht verstehen.)", ["يَفْهَمَ", "يَفْهَمُوا", "يَفْهَمُونَ", "يَفْهَمْ"], "Verb vorne → Singular; manṣūb.", ["Verb vor dem Fāʿil Singular.", "Mit nūn kein Subjunktiv.", "Jussiv."]),
  E("هُمْ لَنْ ____ غَدًا.", ["يَحْضُرُوا", "يَحْضُرُونَ", "يَحْضُرَ", "يَحْضُرْنَ"], "nūn fällt.", ["Mit nūn kein Subjunktiv.", "Singular.", "Feminin."]),
  E("أَنْتِ لَنْ ____ وَحْدَكِ.", ["تَخْرُجِي", "تَخْرُجِينَ", "تَخْرُجَ", "تَخْرُجْنَ"], "nūn fällt.", ["Mit nūn.", "Maskulin.", "Plural."]),
  E("الْبَنَاتُ لَنْ ____ الْيَوْمَ.", ["يَلْعَبْنَ", "يَلْعَبُوا", "يَلْعَبَ", "تَلْعَبِي"], "Unverändert.", ["Maskulin.", "Singular.", "du (f.)."]),
  U("Verneine das Futur", "سَتَدْرُسُونَ الْفِقْهَ.", ["لَنْ تَدْرُسُوا الْفِقْهَ.", "لَنْ تَدْرُسُونَ الْفِقْهَ.", "لَنْ سَتَدْرُسُوا الْفِقْهَ.", "لَا تَدْرُسُوا الْفِقْهَ."], "nūn fällt, سَـ fällt.", ["Das nūn fällt.", "سَـ fällt.", "Das wäre ein Verbot."]),
  U("Verneine das Futur", "سَتَكْتُبْنَ الدَّرْسَ.", ["لَنْ تَكْتُبْنَ الدَّرْسَ.", "لَنْ تَكْتُبُوا الدَّرْسَ.", "لَنْ تَكْتُبِي الدَّرْسَ.", "لَنْ تَكْتُبْنَا الدَّرْسَ."], "Unverändert.", ["Maskulin.", "Singular.", "Falsch."])
]);
R("b2-19", 3, [
  E("لَنْ أَكْذِبَ ____.", ["أَبَدًا", "قَطُّ", "أَمْسِ", "الْبَارِحَةَ"], "Futur verneint + أَبَدًا.", ["قَطُّ beim Perfekt.", "„gestern“.", "„letzte Nacht“."]),
  U("Verstärke", "لَنْ أَشْرَبَ الْخَمْرَ.", ["لَنْ أَشْرَبَ الْخَمْرَ أَبَدًا.", "لَنْ أَشْرَبَ الْخَمْرَ قَطُّ.", "أَبَدًا لَنْ أَشْرَبُ الْخَمْرَ.", "لَنْ أَبَدًا أَشْرَبَ الْخَمْرَ."], "أَبَدًا ans Ende.", ["قَطُّ beim Perfekt.", "manṣūb.", "Stellung."]),
  F("Wozu dient أَبَدًا?", "", ["Es verstärkt ein verneintes Futur: „niemals“.", "Es verstärkt ein verneintes Perfekt.", "Es heißt „immer“ ohne Verneinung.", "Es ist eine Frage."], "لَنْ … أَبَدًا.", ["Das ist قَطُّ.", "Mit Verneinung „niemals“.", "Keine Frage."])
]);
R("b2-19", 4, [
  E("مَا رَأَيْتُهُ ____.", ["قَطُّ", "أَبَدًا", "غَدًا", "بَعْدَ"], "Verneintes Perfekt + قَطُّ.", ["Beim Futur.", "„morgen“.", "Falsch."]),
  E("مَا كَذَبْتُ ____.", ["قَطُّ", "أَبَدًا", "أَمْسِ", "دَائِمًا"], "„nie (bisher)“.", ["Futur.", "„gestern“.", "„immer“."]),
  U("Verstärke", "مَا سَافَرْتُ إِلَى الْيَابَانِ.", ["مَا سَافَرْتُ إِلَى الْيَابَانِ قَطُّ.", "مَا سَافَرْتُ إِلَى الْيَابَانِ أَبَدًا.", "قَطُّ مَا سَافَرْتُ إِلَى الْيَابَانِ.", "مَا قَطُّ سَافَرْتُ إِلَى الْيَابَانِ."], "قَطُّ ans Ende.", ["أَبَدًا beim Futur.", "Stellung.", "Stellung."]),
  F("Was heißt مَا رَأَيْتُهُ قَطُّ?", "", ["Ich habe ihn noch nie gesehen.", "Ich werde ihn nie sehen.", "Ich habe ihn gerade gesehen.", "Ich sehe ihn nicht."], "قَطُّ = nie (bisher).", ["Das wäre لَنْ … أَبَدًا.", "Falsch.", "Präsens."]),
  F("Ist قَطُّ veränderlich?", "قَطُّ", ["Nein, es ist mabnī.", "Ja, nach dem Fall.", "Nur im Plural.", "Nur feminin."], "Immer قَطُّ.", ["Immer gleich.", "Nein.", "Nein."])
]);
R("b2-19", 5, [
  F("Was heißt لَا أَذْهَبُ?", "لَا أَذْهَبُ", ["ich gehe nicht", "ich ging nicht", "ich werde nicht gehen", "geh nicht!"], "Präsens verneint.", ["مَا ذَهَبْتُ.", "لَنْ أَذْهَبَ.", "لَا تَذْهَبْ."]),
  F("Was heißt مَا ذَهَبْتُ?", "مَا ذَهَبْتُ", ["ich ging nicht", "ich gehe nicht", "ich werde nicht gehen", "ich bin nicht"], "Perfekt verneint.", ["لَا أَذْهَبُ.", "لَنْ أَذْهَبَ.", "لَسْتُ."]),
  U("Verneine alle drei Zeiten: „er wird nicht schreiben“", "سَيَكْتُبُ", ["لَنْ يَكْتُبَ", "لَا يَكْتُبُ", "مَا كَتَبَ", "لَنْ يَكْتُبُ"], "Futur → لَنْ + manṣūb.", ["Präsens.", "Vergangenheit.", "manṣūb."]),
  U("Übersetze ins Arabische", "Wir gingen nicht, wir gehen nicht und wir werden nicht gehen.", ["مَا ذَهَبْنَا، وَلَا نَذْهَبُ، وَلَنْ نَذْهَبَ.", "لَا ذَهَبْنَا، وَمَا نَذْهَبُ، وَلَنْ نَذْهَبُ.", "مَا ذَهَبْنَا، وَلَنْ نَذْهَبُ، وَلَا نَذْهَبَ.", "لَنْ ذَهَبْنَا، وَلَا نَذْهَبُ، وَمَا نَذْهَبَ."], "مَا / لَا / لَنْ.", ["Vertauscht.", "Vertauscht.", "Vertauscht."])
]);

/* ---------- Lektion 20 ---------- */
R("b2-20", 0, [
  E("فِي بَيْتِي ____ كَبِيرَتَانِ.", ["غُرْفَتَانِ", "غُرْفَتَيْنِ", "غُرَفٌ", "غُرْفَةٌ"], "Mubtadaʾ → Nominativ Dual.", ["Akk./Gen.", "Plural.", "Singular."]),
  E("لِي ____. (zwei Schwestern)", ["أُخْتَانِ", "أُخْتَيْنِ", "أَخَوَاتٌ", "أُخْتَتَانِ"], "Nominativ Dual.", ["Akk./Gen.", "Plural.", "Falsch."]),
  E("هَذَانِ ____ جَدِيدَانِ.", ["كِتَابَانِ", "كِتَابَيْنِ", "كُتُبٌ", "كِتَابٌ"], "Khabar → Nominativ.", ["Akk./Gen.", "Plural.", "Singular."]),
  F("Welche Endung hat der Dual im Nominativ?", "", ["-āni (ـَانِ)", "-aini (ـَيْنِ)", "-ūna", "-īna"], "ـَانِ.", ["Akk./Gen.", "Plural.", "Plural."]),
  U("Dual", "طَبِيبٌ", ["طَبِيبَانِ", "طَبِيبَيْنِ", "أَطِبَّاءُ", "طَبِيبُونَ"], "Nominativ -āni.", ["Akk./Gen.", "Plural.", "Plural."]),
  U("Dual", "مُمَرِّضَةٌ", ["مُمَرِّضَتَانِ", "مُمَرِّضَانِ", "مُمَرِّضَاتٌ", "مُمَرِّضَتَيْنِ"], "ة → ت.", ["ت fehlt.", "Plural.", "Akk./Gen."])
]);
R("b2-20", 1, [
  F("Welche Endungen hat ein normales Nomen?", "", ["Nom. -u, Akk. -a, Gen. -i", "Nom. -a, Akk. -u, Gen. -i", "Nom. -i, Akk. -a, Gen. -u", "alle -u"], "الْمُدَرِّسُ / الْمُدَرِّسَ / الْمُدَرِّسِ.", ["Vertauscht.", "Vertauscht.", "Nein."]),
  E("سَأَلْتُ ____.", ["الْمُدَرِّسَ", "الْمُدَرِّسُ", "الْمُدَرِّسِ", "لِلْمُدَرِّسِ"], "Objekt → -a.", ["Nominativ.", "Genitiv.", "Präposition."]),
  E("قُلْتُ لِ____.", ["لْمُدَرِّسِ", "لْمُدَرِّسُ", "لْمُدَرِّسَ", "الْمُدَرِّسِ"], "Nach لِـ → -i: لِلْمُدَرِّسِ.", ["Nach لِـ Genitiv.", "Nach لِـ Genitiv.", "Alif fällt weg."]),
  E("أَيْنَ ____؟", ["الْمُدَرِّسُ", "الْمُدَرِّسَ", "الْمُدَرِّسِ", "مُدَرِّسًا"], "Mubtadaʾ/Khabar → -u.", ["Akkusativ.", "Genitiv.", "Akkusativ."]),
  F("Welche Fälle hat der Dual zusammengelegt?", "", ["Akkusativ und Genitiv (-aini)", "Nominativ und Akkusativ", "Nominativ und Genitiv", "keine"], "Wie beim männlichen Plural.", ["Nein.", "Nein.", "Zwei sind gleich."])
]);
R("b2-20", 3, [
  E("اشْتَرَيْتُ ____. (zwei Hemden)", ["قَمِيصَيْنِ", "قَمِيصَانِ", "قُمْصَانًا", "قَمِيصًا"], "Objekt → -aini.", ["Nominativ.", "Plural.", "Singular."]),
  E("سَافَرْتُ مَعَ ____.", ["صَدِيقَيْنِ", "صَدِيقَانِ", "أَصْدِقَاءَ", "صَدِيقٍ"], "Nach مَعَ → -aini.", ["Nominativ.", "Plural.", "Singular."]),
  E("هَذِهِ هَدِيَّةٌ مِنْ ____.", ["أُخْتَيَّ", "أُخْتَايَ", "أُخْتِي", "أُخْتَيْنِي"], "Genitiv Dual + „mein“: أُخْتَيَّ.", ["Nominativ.", "Singular.", "Falsch."])
]);
R("b2-20", 4, [
  E("لِي أُخْتَانِ: ____ طَبِيبَةٌ وَالْأُخْرَى مُهَنْدِسَةٌ.", ["إِحْدَاهُمَا", "أَحَدُهُمَا", "إِحْدَاهُنَّ", "وَاحِدَةٌ"], "Feminin: إِحْدَاهُمَا.", ["Maskulin.", "Plural.", "Falsch."]),
  E("لِي ابْنَانِ: أَحَدُهُمَا فِي الْمَدْرَسَةِ وَ____ فِي الْجَامِعَةِ.", ["الْآخَرُ", "الْأُخْرَى", "آخَرُ", "الْآخَرَ"], "Maskulin: وَالْآخَرُ.", ["Feminin.", "Bestimmt.", "Nominativ."]),
  E("لِي سَيَّارَتَانِ: إِحْدَاهُمَا جَدِيدَةٌ وَ____ قَدِيمَةٌ.", ["الْأُخْرَى", "الْآخَرُ", "أُخْرَى", "الْأُخْرَاةُ"], "Feminin, bestimmt.", ["Maskulin.", "Bestimmt.", "Falsch."]),
  F("Was heißt أَحَدُهُمَا … وَالْآخَرُ …?", "", ["einer von ihnen (beiden) … und der andere …", "einer … und einer …", "beide … und …", "keiner … noch …"], "Bei zwei Männern/Dingen.", ["Falsch.", "Falsch.", "Falsch."]),
  U("Mach es feminin", "لِي أَخَوَانِ: أَحَدُهُمَا طَبِيبٌ وَالْآخَرُ مُهَنْدِسٌ.", ["لِي أُخْتَانِ: إِحْدَاهُمَا طَبِيبَةٌ وَالْأُخْرَى مُهَنْدِسَةٌ.", "لِي أُخْتَانِ: أَحَدُهُمَا طَبِيبَةٌ وَالْآخَرُ مُهَنْدِسَةٌ.", "لِي أُخْتَانِ: إِحْدَاهُمَا طَبِيبٌ وَالْأُخْرَى مُهَنْدِسٌ.", "لِي أَخَوَاتٌ: إِحْدَاهُنَّ طَبِيبَةٌ وَالْأُخْرَى مُهَنْدِسَةٌ."], "Alles feminin.", ["إِحْدَى / الْأُخْرَى.", "Die Berufe auch.", "Plural statt Dual."]),
  F("Was ist die feminine Form von أَحَدُهُمَا?", "أَحَدُهُمَا", ["إِحْدَاهُمَا", "أَحَدَتُهُمَا", "وَاحِدَتُهُمَا", "أُحْدَاهُمَا"], "إِحْدَى.", ["Gibt es nicht.", "Nicht im Buch.", "Falscher Vokal."])
]);
R("b2-20", 5, [
  F("Was heißt ذُو وَجْهَيْنِ?", "ذُو وَجْهَيْنِ", ["Heuchler („mit zwei Gesichtern“)", "schön", "Zwilling", "Spiegel"], "Wörtlich „Besitzer zweier Gesichter“.", ["Falsch.", "Falsch.", "Falsch."]),
  F("Warum steht وَجْهَيْنِ mit -aini?", "ذُو وَجْهَيْنِ", ["Muḍāf ilaihi → Genitiv Dual", "Objekt", "Fāʿil", "Khabar"], "Nach ذُو majrūr.", ["Kein Objekt.", "Kein Fāʿil.", "Keine Khabar."]),
  E("هُوَ رَجُلٌ ذُو ____. (mit zwei Gesichtern)", ["وَجْهَيْنِ", "وَجْهَانِ", "وُجُوهٍ", "وَجْهٍ"], "Genitiv Dual.", ["Nominativ.", "Plural.", "Singular."]),
  U("Übersetze ins Arabische", "Er ist ein Heuchler.", ["هُوَ ذُو وَجْهَيْنِ.", "هُوَ ذُو وَجْهَانِ.", "هُوَ ذَا وَجْهَيْنِ.", "هُوَ وَجْهَانِ."], "ذُو + Genitiv Dual.", ["Genitiv.", "Nominativ: ذُو.", "ذُو fehlt."])
]);

/* ---------- Lektion 21 ---------- */
R("b2-21", 0, [
  E("لَمْ ____ إِلَى الْمَسْجِدِ أَمْسِ.", ["أَذْهَبْ", "أَذْهَبُ", "ذَهَبْتُ", "أَذْهَبَ"], "لَمْ + Jussiv.", ["Kein Ḍamma.", "Kein Perfekt.", "Fatḥa ist Subjunktiv."]),
  F("Was bewirkt لَمْ?", "", ["Vergangenheitsbedeutung + Jussiv", "Futur + Subjunktiv", "Verbot", "Frage"], "لَمْ يَذْهَبْ = er ging nicht.", ["Das ist لَنْ.", "Das ist لَا النَّاهِيَةُ.", "Keine Frage."]),
  U("Verneine mit لَمْ", "شَرِبَ الْقَهْوَةَ.", ["لَمْ يَشْرَبِ الْقَهْوَةَ.", "لَمْ شَرِبَ الْقَهْوَةَ.", "لَمْ يَشْرَبُ الْقَهْوَةَ.", "لَمْ يَشْرَبْ الْقَهْوَةُ."], "لَمْ + Jussiv, Kasra vor al.", ["Kein Perfekt nach لَمْ.", "Kein Ḍamma.", "Objekt manṣūb, Kasra vor al."]),
  F("Was heißt لَمْ يَأْكُلْ?", "لَمْ يَأْكُلْ", ["er aß nicht", "er isst nicht", "er wird nicht essen", "iss nicht!"], "لَمْ = Vergangenheit.", ["لَا يَأْكُلُ.", "لَنْ يَأْكُلَ.", "لَا تَأْكُلْ."])
]);
R("b2-21", 1, [
  E("لَمْ ____ الدَّرْسَ. (Wir haben … nicht verstanden.)", ["نَفْهَمِ", "نَفْهَمُ", "نَفْهَمَ", "فَهِمْنَا"], "Sukūn → vor al Kasra.", ["Kein Ḍamma.", "Fatḥa ist Subjunktiv.", "Kein Perfekt."]),
  E("لَمْ ____ يَا إِخْوَانُ.", ["تَحْضُرُوا", "تَحْضُرُونَ", "تَحْضُرْ", "حَضَرْتُمْ"], "nūn fällt.", ["Mit nūn kein Jussiv.", "Singular.", "Kein Perfekt."]),
  E("لَمْ ____ يَا مَرْيَمُ.", ["تَنَامِي", "تَنَامِينَ", "تَنَمْ", "نِمْتِ"], "nūn fällt.", ["Mit nūn.", "Maskulin.", "Perfekt."]),
  E("الطَّالِبَاتُ لَمْ ____.", ["يَحْضُرْنَ", "يَحْضُرُوا", "يَحْضُرْ", "تَحْضُرَ"], "Unverändert.", ["Maskulin.", "Singular.", "Singular."]),
  U("Mach es majzūm (nach لَمْ)", "تَكْتُبُ", ["لَمْ تَكْتُبْ", "لَمْ تَكْتُبَ", "لَمْ تَكْتُبُ", "لَمْ كَتَبْتَ"], "Sukūn.", ["Fatḥa ist Subjunktiv.", "Kein Ḍamma.", "Kein Perfekt."]),
  U("Mach es majzūm (nach لَمْ)", "يَدْرُسُونَ", ["لَمْ يَدْرُسُوا", "لَمْ يَدْرُسُونَ", "لَمْ يَدْرُسْ", "لَمْ يَدْرُسْنَ"], "nūn fällt.", ["Mit nūn.", "Singular.", "Feminin."]),
  U("Mach es majzūm (nach لَمْ)", "تَذْهَبِينَ", ["لَمْ تَذْهَبِي", "لَمْ تَذْهَبِينَ", "لَمْ تَذْهَبْ", "لَمْ تَذْهَبْنَ"], "nūn fällt.", ["Mit nūn.", "Maskulin.", "Plural."]),
  F("Woran erkennt man den Jussiv bei يَذْهَبُ?", "", ["am Sukūn", "am Fatḥa", "am Ḍamma", "am nūn"], "لَمْ يَذْهَبْ.", ["Subjunktiv.", "Indikativ.", "Kein nūn."])
]);
R("b2-21", 2, [
  E("لَمْ ____ الطَّالِبُ الرِّسَالَةَ.", ["يَكْتُبِ", "يَكْتُبْ", "يَكْتُبُ", "يَكْتُبَ"], "Sukūn → Kasra vor al.", ["Vor al Kasra.", "Kein Ḍamma.", "Kein Fatḥa."])
]);
R("b2-21", 3, [
  E("____ يَرْجِعْ أَبِي بَعْدُ. (noch nicht)", ["لَمَّا", "لَمْ", "لَنْ", "لَا"], "„noch nicht“ = لَمَّا.", ["„nicht“.", "Futur.", "Verbot."]),
  E("أَخَرَجَ الطُّلَّابُ؟ – ____.", ["لَمَّا", "لَمْ", "لَنْ", "مَا"], "Allein: لَمَّا „noch nicht“.", ["لَمْ braucht ein Verb.", "لَنْ braucht ein Verb.", "مَا braucht ein Verb."]),
  U("Statt „nicht“: „noch nicht“", "لَمْ أَشْرَبِ الشَّايَ.", ["لَمَّا أَشْرَبِ الشَّايَ.", "لَمَّا أَشْرَبُ الشَّايَ.", "لَنْ أَشْرَبَ الشَّايَ.", "لَمَّا شَرِبْتُ الشَّايَ."], "لَمَّا + Jussiv.", ["Jussiv.", "Futur.", "Hier لَمَّا mit Jussiv."]),
  F("Was heißt لَمَّا يَدْخُلِ الْإِيمَانُ فِي قُلُوبِكُمْ?", "", ["Der Glaube ist noch nicht in eure Herzen eingetreten.", "Der Glaube trat nie ein.", "Als der Glaube eintrat …", "Der Glaube wird nicht eintreten."], "لَمَّا = noch nicht.", ["Nicht „nie“.", "Das wäre لَمَّا + Perfekt.", "Futur wäre لَنْ."])
]);
R("b2-21", 4, [
  F("Welche Wortart ist كِتَابٌ?", "كِتَابٌ", ["Nomen (اسْمٌ)", "Verb (فِعْلٌ)", "Partikel (حَرْفٌ)", "keine"], "Ein Ding.", ["Kein Verb.", "Keine Partikel.", "Es ist eine."]),
  F("Welche Wortart ist لَمْ?", "لَمْ", ["Partikel (حَرْفٌ)", "Verb", "Nomen", "Pronomen"], "Partikeln sind unveränderlich.", ["Kein Verb.", "Kein Nomen.", "Kein Pronomen."]),
  F("Welche Wortart ist هَذَا?", "هَذَا", ["Nomen (اسْمٌ)", "Partikel", "Verb", "keine"], "Demonstrativa sind Nomen.", ["Keine Partikel.", "Kein Verb.", "Es ist eine."])
]);
R("b2-21", 5, [
  E("مَا عِنْدِي قَلَمٌ ____ دَفْتَرٌ.", ["وَلَا", "وَمَا", "أَوْ", "لَكِنْ"], "مَا … وَلَا.", ["Zweites Glied mit وَلَا.", "„oder“.", "„aber“."]),
  F("Was heißt مَهْلًا?", "مَهْلًا يَا أَخِي!", ["langsam, nicht so schnell", "schnell!", "willkommen", "danke"], "مَهْلًا = gemach.", ["Gegenteil.", "Falsch.", "Falsch."]),
  F("Was ist اللَّائِي?", "اللَّائِي", ["eine andere Form von اللَّاتِي", "eine Form von الَّذِينَ", "„die beiden“", "ein Fragewort"], "Relativpronomen f. Pl.", ["Maskulin.", "Dual.", "Kein Fragewort."]),
  U("Weder … noch", "مَا فِي الْبَيْتِ خُبْزٌ. مَا فِي الْبَيْتِ لَبَنٌ.", ["مَا فِي الْبَيْتِ خُبْزٌ وَلَا لَبَنٌ.", "مَا فِي الْبَيْتِ خُبْزٌ أَوْ لَبَنٌ.", "مَا فِي الْبَيْتِ خُبْزٌ وَمَا لَبَنٌ.", "لَا فِي الْبَيْتِ خُبْزٌ لَا لَبَنٌ."], "مَا … وَلَا.", ["„oder“.", "Zweites Glied وَلَا.", "Falsch."]),
  U("Übersetze ins Arabische", "Ich habe weder einen Bruder noch eine Schwester.", ["مَا لِي أَخٌ وَلَا أُخْتٌ.", "مَا لِي أَخٌ أَوْ أُخْتٌ.", "لِي أَخٌ وَلَا أُخْتٌ.", "مَا لِي أَخًا وَلَا أُخْتًا."], "مَا … وَلَا.", ["„oder“.", "Erste Verneinung fehlt.", "marfūʿ."]),
  F("Was bedeutet مَا … وَلَا …?", "", ["weder … noch", "entweder … oder", "nicht nur … sondern auch", "sowohl … als auch"], "Doppelte Verneinung.", ["Falsch.", "Falsch.", "Falsch."])
]);

/* ---------- Lektion 22 ---------- */
R("b2-22", 0, [
  F("Welche drei Fälle hat der Muḍāriʿ?", "", ["marfūʿ, manṣūb, majzūm", "marfūʿ, manṣūb, majrūr", "Perfekt, Präsens, Futur", "mabnī, muʿrab, majrūr"], "Indikativ, Subjunktiv, Jussiv.", ["Majrūr gibt es nur bei Nomen.", "Zeiten.", "Falsch."]),
  F("Wie heißt der Jussiv auf Arabisch?", "", ["مَجْزُومٌ", "مَنْصُوبٌ", "مَرْفُوعٌ", "مَجْرُورٌ"], "جَزْمٌ.", ["Subjunktiv.", "Indikativ.", "Nur Nomen."]),
  F("Wie heißt der Subjunktiv auf Arabisch?", "", ["مَنْصُوبٌ", "مَجْزُومٌ", "مَرْفُوعٌ", "مَبْنِيٌّ"], "نَصْبٌ.", ["Jussiv.", "Indikativ.", "Unveränderlich."]),
  E("هُوَ ____ الْآنَ. (Indikativ)", ["يَدْرُسُ", "يَدْرُسَ", "يَدْرُسْ", "دَرَسَ"], "Ohne Partikel: marfūʿ.", ["Subjunktiv.", "Jussiv.", "Perfekt."]),
  E("لَنْ ____ غَدًا. (Subjunktiv)", ["يَدْرُسَ", "يَدْرُسُ", "يَدْرُسْ", "سَيَدْرُسُ"], "manṣūb.", ["Indikativ.", "Jussiv.", "سَـ fällt."])
]);
R("b2-22", 1, [
  F("Was ist das Zeichen des Indikativs bei يَذْهَبُ?", "", ["Ḍamma", "Fatḥa", "Sukūn", "nūn"], "يَذْهَبُ.", ["Subjunktiv.", "Jussiv.", "Nur bei den fünf Formen."]),
  F("Was ist das Zeichen des Indikativs bei يَذْهَبُونَ?", "", ["das vorhandene nūn", "Ḍamma", "Fatḥa", "Sukūn"], "ثُبُوتُ النُّونِ.", ["Nicht hier.", "Nein.", "Nein."]),
  E("الطُّلَّابُ ____ الْعَرَبِيَّةَ.", ["يَدْرُسُونَ", "يَدْرُسُوا", "يَدْرُسَ", "يَدْرُسْ"], "Indikativ: nūn bleibt.", ["Ohne nūn kein Indikativ.", "Singular.", "Singular."]),
  E("أَنْتِ ____ كَثِيرًا.", ["تَقْرَئِينَ", "تَقْرَئِي", "تَقْرَأَ", "تَقْرَأْ"], "Indikativ: mit nūn.", ["Ohne nūn kein Indikativ.", "Maskulin.", "Maskulin."]),
  E("نَحْنُ ____ الْقُرْآنَ.", ["نَحْفَظُ", "نَحْفَظَ", "نَحْفَظْ", "حَفِظْنَا"], "Ḍamma.", ["Subjunktiv.", "Jussiv.", "Perfekt."]),
  U("Mach es marfūʿ (ohne Partikel)", "لَنْ تَكْتُبُوا", ["تَكْتُبُونَ", "تَكْتُبُوا", "تَكْتُبُ", "تَكْتُبْنَ"], "nūn kommt zurück.", ["Ohne nūn kein Indikativ.", "Singular.", "Feminin."]),
  U("Mach es marfūʿ (ohne Partikel)", "لَمْ يَقْرَأْ", ["يَقْرَأُ", "يَقْرَأَ", "يَقْرَأْ", "قَرَأَ"], "Ḍamma.", ["Subjunktiv.", "Jussiv.", "Perfekt."])
]);
R("b2-22", 4, [
  E("يُرِدْنَ أَنْ ____. (Sie (Frauen) wollen sich setzen.)", ["يَجْلِسْنَ", "يَجْلِسُوا", "يَجْلِسَ", "يَجْلِسُونَ"], "Mit nūn der Frauen unverändert.", ["Maskulin.", "Singular.", "Maskulin und Indikativ."]),
  F("Welche Form ist in allen drei Fällen gleich?", "", ["يَذْهَبْنَ", "يَذْهَبُونَ", "تَذْهَبِينَ", "يَذْهَبُ"], "Mit nūn der Frauen: mabnī.", ["Verliert das nūn.", "Verliert das nūn.", "Ändert den Vokal."]),
  E("لَمْ ____ يَا أَخَوَاتُ.", ["تَتَأَخَّرْنَ", "تَتَأَخَّرُوا", "تَتَأَخَّرِي", "تَتَأَخَّرْ"], "Unverändert.", ["Maskulin.", "Singular.", "Singular."]),
  E("أَتُرِدْنَ أَنْ ____؟", ["تَشْرَبْنَ", "تَشْرَبُوا", "تَشْرَبِي", "تَشْرَبَ"], "Unverändert.", ["Maskulin.", "Singular.", "Singular."]),
  F("Ist تَذْهَبْنَ muʿrab oder mabnī?", "تَذْهَبْنَ", ["mabnī", "muʿrab", "majzūm immer", "manṣūb immer"], "Unveränderlich.", ["Es ändert sich nicht.", "Es ist immer gleich.", "Es ist immer gleich."]),
  U("Mach es majzūm (nach لَا des Verbots)", "تَخْرُجْنَ", ["لَا تَخْرُجْنَ", "لَا تَخْرُجُوا", "لَا تَخْرُجِي", "لَا تَخْرُجْ"], "Unverändert.", ["Maskulin.", "Singular.", "Singular."])
]);
R("b2-22", 5, [
  F("Wo sehen Subjunktiv und Jussiv gleich aus?", "", ["bei den Formen auf -ūna/-īna (nūn fällt in beiden)", "bei يَذْهَبُ", "bei أَذْهَبُ", "nirgends"], "يَذْهَبُوا = Subj. und Juss.", ["Fatḥa vs. Sukūn.", "Fatḥa vs. Sukūn.", "Doch."]),
  F("Wie unterscheiden sich أَنْ يَذْهَبَ und لَمْ يَذْهَبْ?", "", ["Fatḥa (Subjunktiv) vs. Sukūn (Jussiv)", "gar nicht", "nūn vs. kein nūn", "Ḍamma vs. Fatḥa"], "Nur bei den Formen ohne nūn.", ["Doch.", "Kein nūn.", "Kein Ḍamma."]),
  F("Ist in لَمْ تَذْهَبُوا und أَنْ تَذْهَبُوا die Form gleich?", "", ["Ja – beide ohne nūn", "Nein", "Nur in der Schrift verschieden", "Nein, eins hat Fatḥa"], "Gleiches Aussehen.", ["Doch.", "Gleich.", "Gleich."]),
  E("أُرِيدُ أَنْ ____. (ich schreibe)", ["أَكْتُبَ", "أَكْتُبْ", "أَكْتُبُ", "كَتَبْتُ"], "Subjunktiv: Fatḥa.", ["Jussiv.", "Indikativ.", "Perfekt."]),
  E("لَمْ ____. (ich schrieb nicht)", ["أَكْتُبْ", "أَكْتُبَ", "أَكْتُبُ", "كَتَبْتُ"], "Jussiv: Sukūn.", ["Subjunktiv.", "Indikativ.", "Perfekt."]),
  U("Statt لَنْ: لَمْ", "لَنْ يَخْرُجَ", ["لَمْ يَخْرُجْ", "لَمْ يَخْرُجَ", "لَمْ يَخْرُجُ", "لَمْ خَرَجَ"], "Fatḥa → Sukūn.", ["Fatḥa ist Subjunktiv.", "Kein Ḍamma.", "Kein Perfekt."])
]);

/* ---------- Lektion 23 ---------- */
R("b2-23", 1, [
  E("هَذِهِ بُيُوتُ ____ الْمَدْرَسَةِ.", ["مُدَرِّسِي", "مُدَرِّسِينَ", "مُدَرِّسُو", "الْمُدَرِّسِينَ"], "Muḍāf (Genitiv) ohne nūn: مُدَرِّسِي.", ["Als Muḍāf fällt das nūn.", "Hier Genitiv: ـِي.", "Kein al am Muḍāf."]),
  E("جَاءَ ____ الْمَدْرَسَةِ.", ["مُدَرِّسُو", "مُدَرِّسُونَ", "مُدَرِّسِي", "مُدَرِّسِينَ"], "Muḍāf im Nominativ: مُدَرِّسُو.", ["nūn fällt.", "Hier Nominativ.", "Nominativ."]),
  E("رَأَيْتُ ____ الشَّرِكَةِ.", ["مُهَنْدِسِي", "مُهَنْدِسُو", "مُهَنْدِسِينَ", "مُهَنْدِسَى"], "Muḍāf im Akkusativ: -ī.", ["Nominativ.", "nūn fällt.", "Falsch."]),
  U("Mach eine Iḍāfa: „die Lehrer der Schule“", "الْمُدَرِّسُونَ + الْمَدْرَسَةُ", ["مُدَرِّسُو الْمَدْرَسَةِ", "مُدَرِّسُونَ الْمَدْرَسَةِ", "الْمُدَرِّسُونَ الْمَدْرَسَةِ", "مُدَرِّسُو الْمَدْرَسَةُ"], "nūn und al fallen weg.", ["nūn fällt.", "Kein al.", "Genitiv."]),
  F("Was passiert mit dem männlichen Plural als Muḍāf?", "", ["Er verliert das nūn.", "Er bekommt Tanwīn.", "Er bekommt al.", "Nichts."], "مُسْلِمُو الْهِنْدِ.", ["Kein Tanwīn.", "Kein al.", "Das nūn fällt."]),
  F("Wie heißt „die Muslime Indiens“?", "", ["مُسْلِمُو الْهِنْدِ", "مُسْلِمُونَ الْهِنْدِ", "الْمُسْلِمُونَ الْهِنْدِ", "مُسْلِمِينَ الْهِنْدُ"], "Muḍāf ohne nūn.", ["nūn fällt.", "Kein al.", "Falsch."]),
  E("سَلَّمْتُ عَلَى ____ الْمَدِينَةِ.", ["مُسْلِمِي", "مُسْلِمُو", "مُسْلِمِينَ", "الْمُسْلِمِينَ"], "Genitiv-Muḍāf: مُسْلِمِي.", ["Nominativ.", "nūn fällt.", "Kein al."]),
  U("Übersetze ins Arabische", "Ich sah die Bauern des Dorfes.", ["رَأَيْتُ فَلَّاحِي الْقَرْيَةِ.", "رَأَيْتُ فَلَّاحِينَ الْقَرْيَةِ.", "رَأَيْتُ فَلَّاحُو الْقَرْيَةِ.", "رَأَيْتُ الْفَلَّاحِينَ الْقَرْيَةِ."], "Akkusativ-Muḍāf: -ī.", ["nūn fällt.", "Nominativ.", "Kein al."])
]);
R("b2-23", 2, [
  E("فِي الْمَسْجِدِ ____ مُصَلِّيًا.", ["خَمْسُونَ", "خَمْسِينَ", "خَمْسَةٌ", "خَمْسِ"], "Nominativ: -ūna.", ["Hier Nominativ.", "„fünf“ – danach stünde der Plural.", "Falsch."]),
  E("مَعِي ____ رِيَالًا.", ["أَرْبَعُونَ", "أَرْبَعِينَ", "أَرْبَعَةٌ", "أَرْبَعُو"], "Mubtadaʾ (hinten): Nominativ.", ["Nominativ.", "„vier“.", "nūn fällt nur als Muḍāf."]),
  E("اشْتَرَيْتُهُ بِ____ رِيَالًا.", ["تِسْعِينَ", "تِسْعُونَ", "تِسْعَةٍ", "تِسْعِ"], "Nach بِـ: -īna.", ["Genitiv.", "„neun“.", "Falsch."])
]);
R("b2-23", 3, [
  E("فِي الْفَصْلِ ____ وَعِشْرُونَ طَالِبَةً. (22)", ["اثْنَتَانِ", "اثْنَانِ", "اثْنَتَا", "اثْنَتَيْنِ"], "Feminin: اثْنَتَانِ.", ["Maskulin.", "Nur in 12.", "Nominativ."]),
  E("____ وَثَلَاثُونَ طَالِبَةً (35)", ["خَمْسٌ", "خَمْسَةٌ", "خَمْسُ", "خَمْسَةُ"], "Weiblich → Einer maskulin, mit Tanwīn.", ["Männliches Gezähltes.", "Mit Tanwīn.", "Mit Tanwīn, ohne ة."]),
  E("____ وَعِشْرُونَ يَوْمًا (24)", ["أَرْبَعَةٌ", "أَرْبَعٌ", "أَرْبَعَةُ", "أَرْبَعُ"], "Männlich → Einer feminin.", ["Weibliches Gezähltes.", "Mit Tanwīn.", "Mit Tanwīn."]),
  U("Statt Studenten: Studentinnen (21)", "وَاحِدٌ وَعِشْرُونَ طَالِبًا", ["إِحْدَى وَعِشْرُونَ طَالِبَةً", "وَاحِدَةٌ وَعِشْرُونَ طَالِبَةً", "إِحْدَى وَعِشْرُونَ طَالِبَاتٍ", "أَحَدٌ وَعِشْرُونَ طَالِبَةً"], "21 f.: إِحْدَى.", ["Im Buch: إِحْدَى.", "Singular manṣūb.", "Maskulin."])
]);
R("b2-23", 4, [
  E("____ قَرَأْتُ وَلَا كَتَبْتُ.", ["لَا", "مَا", "لَمْ", "لَيْسَ"], "„weder … noch“ (Vergangenheit): لَا … وَلَا.", ["Hier لَا.", "Braucht Muḍāriʿ.", "Nicht vor Verben."]),
  E("لَا أَكَلَ ____ شَرِبَ.", ["وَلَا", "وَمَا", "أَوْ", "وَلَمْ"], "لَا … وَلَا.", ["Beide mit لَا.", "„oder“.", "Braucht Muḍāriʿ."]),
  U("Weder … noch", "مَا نَامَ. مَا جَلَسَ.", ["لَا نَامَ وَلَا جَلَسَ.", "لَا نَامَ وَمَا جَلَسَ.", "مَا نَامَ أَوْ جَلَسَ.", "لَمْ نَامَ وَلَمْ جَلَسَ."], "لَا … وَلَا + Perfekt.", ["Beide mit لَا.", "„oder“.", "لَمْ nicht vor dem Perfekt."]),
  F("Was heißt لَا صَامَ وَلَا صَلَّى?", "", ["Er hat weder gefastet noch gebetet.", "Er fastet nicht, aber betet.", "Faste nicht und bete nicht!", "Er wird nicht fasten."], "„weder … noch“.", ["Beides verneint.", "Kein Verbot.", "Kein Futur."]),
  U("Übersetze ins Arabische", "Er hat weder gelesen noch geschrieben.", ["لَا قَرَأَ وَلَا كَتَبَ.", "مَا قَرَأَ وَكَتَبَ.", "لَمْ قَرَأَ وَلَمْ كَتَبَ.", "لَا يَقْرَأُ وَلَا كَتَبَ."], "لَا … وَلَا.", ["Zweites nicht verneint.", "لَمْ nicht vor Perfekt.", "Zeiten gemischt."]),
  F("Wo steht لَا … وَلَا statt مَا?", "", ["bei „weder … noch“ in der Vergangenheit", "immer beim Perfekt", "beim Futur", "beim Verbot"], "لَا أَكَلْتُ وَلَا شَرِبْتُ.", ["Sonst مَا.", "Futur: لَنْ.", "Verbot: لَا + Jussiv."])
]);
R("b2-23", 5, [
  E("الْمُوَطَّأُ ____ مَالِكٍ.", ["لِلْإِمَامِ", "الْإِمَامِ", "عَنِ الْإِمَامِ", "بِالْإِمَامِ"], "Autor: لِـ.", ["لِـ fehlt.", "Nicht عَنْ.", "Nicht بِـ."]),
  E("لِسَانُ الْعَرَبِ ____ مَنْظُورٍ.", ["لِابْنِ", "لِبْنِ", "ابْنُ", "مِنِ ابْنِ"], "لِـ + ابْنِ.", ["Alif von ابن bleibt hier.", "لِـ fehlt.", "Falsch."]),
  F("Was heißt لِـ in الْمُوَطَّأُ لِلْإِمَامِ مَالِكٍ?", "", ["„von“ (Autor)", "„für“", "„gehört“ (Besitz)", "„um zu“"], "Beim Autor eines Buches.", ["Nicht hier.", "Nicht Besitz.", "Kein Verb."]),
  U("Übersetze ins Arabische", "Ṣaḥīḥ von al-Bukhārī", ["الصَّحِيحُ لِلْبُخَارِيِّ", "الصَّحِيحُ الْبُخَارِيِّ", "الصَّحِيحُ مِنَ الْبُخَارِيِّ", "صَحِيحٌ لِبُخَارِيٌّ"], "لِـ beim Autor.", ["لِـ fehlt.", "Nicht مِنْ.", "Falsch."]),
  F("Wie sagt man „ein Buch von Ibn Taimiyya“?", "", ["كِتَابٌ لِابْنِ تَيْمِيَّةَ", "كِتَابٌ مِنِ ابْنِ تَيْمِيَّةَ", "كِتَابٌ ابْنُ تَيْمِيَّةَ", "كِتَابٌ عَنِ ابْنِ تَيْمِيَّةَ"], "لِـ.", ["Nicht مِنْ.", "Falsch.", "„über“."]),
  E("هَذَا الْكِتَابُ ____ الشَّيْخِ. (vom Shaikh verfasst)", ["لِلشَّيْخِ", "الشَّيْخِ", "لِلشَّيْخُ", "لِالشَّيْخِ"], "لِلْ + Genitiv.", ["لِـ fehlt.", "Genitiv.", "Alif fällt weg."])
]);

/* ---------- Lektion 24 ---------- */
R("b2-24", 0, [
  E("عِنْدِي ____ رِجَالٍ. (drei)", ["ثَلَاثَةُ", "ثَلَاثُ", "ثَلَاثَةٌ", "ثَالِثُ"], "3–10: umgekehrtes Geschlecht.", ["Weiblich.", "Kein Tanwīn als Muḍāf.", "Ordnungszahl."]),
  E("فِي الْمَدْرَسَةِ خَمْسُونَ ____.", ["مُدَرِّسًا", "مُدَرِّسِينَ", "مُدَرِّسٍ", "مُدَرِّسٌ"], "Zehner + Singular manṣūb.", ["Singular.", "manṣūb.", "manṣūb."])
]);
R("b2-24", 1, [
  E("عِنْدِي ثَلَاثَةُ ____.", ["كُتُبٍ", "كِتَابًا", "كِتَابٍ", "كُتُبًا"], "3–10: Plural majrūr.", ["Singular manṣūb gilt für 11–99.", "Plural.", "majrūr."]),
  E("عِنْدِي ثَلَاثَةَ عَشَرَ ____.", ["كِتَابًا", "كُتُبٍ", "كِتَابٍ", "كُتُبًا"], "11–99: Singular manṣūb.", ["Plural majrūr gilt für 3–10.", "manṣūb.", "Singular."]),
  E("عِنْدِي مِائَةُ ____.", ["كِتَابٍ", "كُتُبٍ", "كِتَابًا", "كُتُبًا"], "100: Singular majrūr.", ["Singular.", "majrūr.", "Singular majrūr."]),
  E("عِنْدِي ثَلَاثُونَ ____.", ["كِتَابًا", "كُتُبٍ", "كِتَابٍ", "كُتُبًا"], "Zehner: Singular manṣūb.", ["Singular manṣūb.", "manṣūb.", "Singular."]),
  E("فِي الْمَكْتَبَةِ أَلْفُ ____.", ["كِتَابٍ", "كِتَابًا", "كُتُبٍ", "كُتُبًا"], "1000: Singular majrūr.", ["majrūr.", "Singular.", "Singular majrūr."]),
  F("Welche Form hat das Gezählte nach 3–10?", "", ["Plural, majrūr", "Singular, manṣūb", "Singular, majrūr", "Plural, manṣūb"], "ثَلَاثَةُ كُتُبٍ.", ["11–99.", "100/1000.", "Gibt es nicht."]),
  F("Welche Form hat das Gezählte nach 100 und 1000?", "", ["Singular, majrūr", "Plural, majrūr", "Singular, manṣūb", "Plural, marfūʿ"], "مِائَةُ كِتَابٍ.", ["3–10.", "11–99.", "Gibt es nicht."]),
  U("Statt 5: 15", "خَمْسَةُ أَقْلَامٍ", ["خَمْسَةَ عَشَرَ قَلَمًا", "خَمْسَةَ عَشَرَ أَقْلَامٍ", "خَمْسَ عَشْرَةَ قَلَمًا", "خَمْسَةَ عَشَرَ قَلَمٍ"], "11–99: Singular manṣūb.", ["Singular manṣūb.", "Maskulin.", "manṣūb."])
]);
R("b2-24", 2, [
  E("أُرِيدُ رِيَالًا ____.", ["وَاحِدًا", "وَاحِدٌ", "وَاحِدٍ", "أَحَدًا"], "Wie ein Adjektiv: Akkusativ.", ["Fall.", "Fall.", "Nicht so."]),
  E("بِخَمْسَةِ ____.", ["رِيَالَاتٍ", "رِيَالًا", "رِيَالٍ", "رِيَالَاتٌ"], "3–10: Plural majrūr.", ["Singular.", "Singular.", "majrūr."]),
  E("اشْتَرَيْتُهُ بِـ____ عَشَرَ رِيَالًا. (12)", ["اثْنَيْ", "اثْنَا", "اثْنَيْنِ", "اثْنَتَيْ"], "Genitiv: اثْنَيْ.", ["Nominativ.", "Kein nūn.", "Feminin."])
]);
R("b2-24", 3, [
  E("أُرِيدُ ____ رِيَالًا. (60)", ["سِتِّينَ", "سِتُّونَ", "سِتَّةَ", "سِتِّ"], "Objekt: -īna.", ["Nominativ.", "„sechs“.", "Falsch."]),
  E("أَخَذْتُ ____ دُولَارٍ مِنْهُ. (1000)", ["أَلْفَ", "أَلْفُ", "أَلْفِ", "أَلْفًا"], "Objekt: manṣūb, Muḍāf.", ["Nominativ.", "Genitiv.", "Kein Tanwīn."]),
  E("مَا يُرِيدُ ____ رِيَالٍ. (2000)", ["أَلْفَيْ", "أَلْفَا", "أَلْفَيْنِ", "أَلْفَانِ"], "Dual Akk. als Muḍāf: أَلْفَيْ.", ["Nominativ.", "Kein nūn.", "Nominativ."]),
  E("مُرَتَّبُهُ ____ رِيَالٍ. (2000)", ["أَلْفَا", "أَلْفَيْ", "أَلْفَانِ", "أَلْفُ"], "Nominativ Dual ohne nūn: أَلْفَا.", ["Akk./Gen.", "Kein nūn.", "1000."]),
  U("Statt Nominativ: Genitiv (mit بِـ)", "مُرَتَّبُهُ أَلْفُ دُولَارٍ.", ["اشْتَرَيْتُهُ بِأَلْفِ دُولَارٍ.", "اشْتَرَيْتُهُ بِأَلْفُ دُولَارٍ.", "اشْتَرَيْتُهُ بِأَلْفَ دُولَارٍ.", "اشْتَرَيْتُهُ بِأَلْفِ دُولَارًا."], "Nach بِـ: أَلْفِ.", ["Genitiv.", "Genitiv.", "Gezähltes majrūr."])
]);
R("b2-24", 4, [
  E("عِنْدِي ____ رِيَالٍ. (300)", ["ثَلَاثُمِائَةِ", "ثَلَاثَةُ مِائَةِ", "ثَلَاثُ مِئَاتٍ", "ثَلَاثُمِائَةٌ"], "Zusammengeschrieben; مِائَة als Muḍāf ilaihi.", ["Zusammengeschrieben, ohne ة.", "Nicht im Buch.", "Muḍāf → kein Tanwīn."]),
  E("أُرِيدُ ____ رِيَالٍ. (300)", ["ثَلَاثَمِائَةِ", "ثَلَاثُمِائَةِ", "ثَلَاثِمِائَةِ", "ثَلَاثَمِائَةُ"], "Objekt: Zahl manṣūb.", ["Nominativ.", "Genitiv.", "مِائَة ist majrūr."]),
  E("اشْتَرَيْتُهُ بِـ____ رِيَالٍ. (500)", ["خَمْسِمِائَةِ", "خَمْسُمِائَةِ", "خَمْسَمِائَةِ", "خَمْسَةِ مِائَةِ"], "Nach بِـ: Zahl majrūr.", ["Nominativ.", "Akkusativ.", "Nicht so."]),
  F("Was ist مِائَة in ثَلَاثُمِائَةٍ grammatisch?", "", ["Muḍāf ilaihi (majrūr)", "Fāʿil", "Objekt", "Adjektiv"], "Mit der Zahl zusammengeschrieben.", ["Nein.", "Nein.", "Nein."]),
  F("Wofür steht ثَمَانِمِائَةٍ ursprünglich?", "ثَمَانِمِائَةٍ", ["ثَمَانِيمِائَةٍ", "ثَمَانِيَةُ مِائَةٍ", "ثَمَانُونَ", "ثَامِنُ مِائَةٍ"], "Das ي ist weggefallen.", ["Nicht so.", "80.", "Ordnungszahl."]),
  E("فِي الْمَدِينَةِ ____ مَسْجِدٍ. (700)", ["سَبْعُمِائَةِ", "سَبْعَةُ مِائَةِ", "سَبْعُونَ", "سَبْعَمِائَةِ"], "Nominativ.", ["Nicht so.", "70.", "Akkusativ."]),
  U("Übersetze ins Arabische", "Ich kaufte es für 400 Riyal.", ["اشْتَرَيْتُهُ بِأَرْبَعِمِائَةِ رِيَالٍ.", "اشْتَرَيْتُهُ بِأَرْبَعُمِائَةِ رِيَالٍ.", "اشْتَرَيْتُهُ بِأَرْبَعَةِ مِائَةِ رِيَالٍ.", "اشْتَرَيْتُهُ بِأَرْبَعِمِائَةِ رِيَالًا."], "Genitiv nach بِـ.", ["Genitiv.", "Zusammengeschrieben.", "Gezähltes majrūr."]),
  F("Wie schreibt man 900?", "", ["تِسْعُمِائَةٍ", "تِسْعَةُ مِائَةٍ", "تِسْعُونَ", "تِسْعُ مِئَاتٍ"], "Zusammengeschrieben.", ["Nicht so.", "90.", "Nicht im Buch."])
]);
R("b2-24", 5, [
  E("عِنْدِي ثَلَاثَةُ ____ رِيَالٍ. (3000)", ["آلَافِ", "أَلْفِ", "أُلُوفِ", "أَلْفَيْ"], "Nach 3–10: Plural majrūr.", ["Singular.", "Nicht im Buch.", "Dual."]),
  E("عِنْدِي سِتَّةَ عَشَرَ ____ رِيَالٍ. (16 000)", ["أَلْفَ", "آلَافِ", "أَلْفِ", "أَلْفًا"], "Nach 11–19: Singular manṣūb.", ["Singular.", "manṣūb.", "Muḍāf → kein Tanwīn."]),
  E("عِنْدِي ثَلَاثُونَ ____ رِيَالٍ.", ["أَلْفَ", "آلَافَ", "أَلْفِ", "أَلْفُ"], "Zehner: Singular manṣūb.", ["Singular.", "manṣūb.", "manṣūb."]),
  E("عِنْدِي مِائَةُ ____ رِيَالٍ. (100 000)", ["أَلْفِ", "أَلْفَ", "آلَافِ", "أَلْفٍ"], "Nach 100: Singular majrūr.", ["majrūr.", "Singular.", "Muḍāf → kein Tanwīn."]),
  F("Was ist أَلْفٌ in ثَلَاثَةُ آلَافِ رِيَالٍ?", "", ["zugleich Gezähltes (von 3) und Zahl (für Riyal)", "nur Zahl", "nur Gezähltes", "ein Adjektiv"], "Doppelrolle.", ["Auch Gezähltes.", "Auch Zahl.", "Kein Adjektiv."]),
  U("Übersetze ins Arabische", "5000 Dollar", ["خَمْسَةُ آلَافِ دُولَارٍ", "خَمْسُ آلَافِ دُولَارٍ", "خَمْسَةُ أَلْفِ دُولَارٍ", "خَمْسَةُ آلَافُ دُولَارٍ"], "أَلْفٌ maskulin → خَمْسَةُ; Plural آلَافِ.", ["أَلْفٌ ist maskulin.", "Plural nach 3–10.", "majrūr."])
]);
R("b2-24", 6, [
  E("كَمْ رِيَالًا عِنْدَكَ؟ – عِنْدِي ____.", ["عَشَرَةٌ", "عَشَرَةُ", "عَشْرٌ", "عَشَرَةً"], "Ohne Gezähltes → Tanwīn.", ["Ohne Muḍāf ilaihi Tanwīn.", "Geschlecht.", "Nominativ."]),
  E("بِكَمِ اشْتَرَيْتَ هَذَا؟ – بِـ____ يَا أَخِي.", ["أَلْفٍ", "أَلْفِ", "أَلْفُ", "أَلْفًا"], "Ohne Gezähltes → Tanwīn; Genitiv.", ["Ohne Muḍāf ilaihi Tanwīn.", "Genitiv.", "Genitiv."]),
  E("بِأَلْفِ ____.", ["رِيَالٍ", "رِيَالًا", "رِيَالَاتٍ", "رِيَالٌ"], "Mit Gezähltem: kein Tanwīn an der Zahl, Singular majrūr.", ["majrūr.", "Singular.", "majrūr."]),
  F("Wann bekommt die Zahl Tanwīn?", "", ["wenn das Gezählte wegfällt", "immer", "wenn das Gezählte folgt", "nie"], "عِنْدِي عَشَرَةٌ.", ["Nicht immer.", "Dann ist sie Muḍāf.", "Manchmal."]),
  U("Lass das Gezählte weg", "عِنْدِي خَمْسَةُ أَقْلَامٍ.", ["عِنْدِي خَمْسَةٌ.", "عِنْدِي خَمْسَةُ.", "عِنْدِي خَمْسٌ.", "عِنْدِي خَمْسَةً."], "Tanwīn.", ["Ohne Muḍāf ilaihi Tanwīn.", "Geschlecht bleibt.", "Nominativ."])
]);
R("b2-24", 7, [
  F("Wie liest man große Zahlen am besten?", "", ["von den Einern aus", "von den Tausendern aus", "nur mit Ziffern", "rückwärts ohne وَ"], "6543 → ثَلَاثَةٌ وَأَرْبَعُونَ وَخَمْسُمِائَةٍ وَسِتَّةُ آلَافٍ.", ["Möglich, aber das Buch beginnt mit den Einern.", "Man liest sie.", "Mit وَ."]),
  F("Wie heißt 43 (männliches Gezähltes)?", "", ["ثَلَاثَةٌ وَأَرْبَعُونَ", "ثَلَاثٌ وَأَرْبَعُونَ", "أَرْبَعُونَ وَثَلَاثَةٌ", "ثَلَاثَةَ أَرْبَعُونَ"], "Einer + وَ + Zehner.", ["Weiblich.", "Reihenfolge.", "وَ fehlt."]),
  F("Wie heißt 43 (weibliches Gezähltes)?", "", ["ثَلَاثٌ وَأَرْبَعُونَ", "ثَلَاثَةٌ وَأَرْبَعُونَ", "ثَلَاثُ أَرْبَعِينَ", "أَرْبَعُونَ وَثَلَاثٌ"], "Einer maskulin bei weiblichem Gezähltem.", ["Männliches Gezähltes.", "Falsch.", "Reihenfolge."]),
  F("Wie heißt 543 (männlich), von den Einern gelesen?", "", ["ثَلَاثَةٌ وَأَرْبَعُونَ وَخَمْسُمِائَةٍ", "خَمْسُمِائَةٍ ثَلَاثَةٌ أَرْبَعُونَ", "ثَلَاثَةٌ وَأَرْبَعُونَ خَمْسَةُ مِائَةٍ", "خَمْسَةٌ وَأَرْبَعُونَ وَثَلَاثُمِائَةٍ"], "Einer – Zehner – Hunderter.", ["وَ fehlt.", "Falsch geschrieben.", "Ziffern vertauscht."]),
  F("Was bedeutet سِتَّةُ آلَافٍ?", "سِتَّةُ آلَافٍ", ["6000", "600", "60", "16"], "آلَاف = Tausende.", ["سِتُّمِائَةٍ.", "سِتُّونَ.", "سِتَّةَ عَشَرَ."])
]);

/* ---------- Lektion 25 ---------- */
R("b2-25", 1, [
  E("لَا يَزَالُ الْجَوُّ ____.", ["بَارِدًا", "بَارِدٌ", "بَارِدٍ", "بِبَارِدٍ"], "Schwester von كَانَ → Khabar manṣūb.", ["manṣūb.", "Kein Genitiv.", "بِـ gehört zu لَيْسَ."]),
  U("Setz لَا يَزَالُ davor", "أَخِي طَالِبٌ.", ["لَا يَزَالُ أَخِي طَالِبًا.", "لَا يَزَالُ أَخِي طَالِبٌ.", "لَا يَزَالُ أَخَاكَ طَالِبًا.", "لَا تَزَالُ أَخِي طَالِبًا."], "Khabar manṣūb.", ["manṣūb.", "Falsch.", "Maskulin."]),
  F("Was heißt لَا يَزَالُ بِلَالٌ مَرِيضًا?", "", ["Bilāl ist immer noch krank.", "Bilāl ist nicht krank.", "Bilāl war krank.", "Bilāl wird krank."], "„hört nicht auf zu sein“.", ["Keine Verneinung.", "Keine Vergangenheit.", "Kein Futur."])
]);
R("b2-25", 2, [
  E("أَيْنَ ____؟", ["أَبُوكَ", "أَبَاكَ", "أَبِيكَ", "أَبُكَ"], "Nominativ: wāw.", ["Akkusativ.", "Genitiv.", "wāw fehlt."]),
  E("ذَهَبْتُ مَعَ ____.", ["أَخِيكَ", "أَخُوكَ", "أَخَاكَ", "أَخِكَ"], "Genitiv: yāʾ.", ["Nominativ.", "Akkusativ.", "yāʾ fehlt."])
]);
R("b2-25", 3, [
  E("أَبِي الْآنَ مُدِيرٌ، وَكَانَ مِنْ ____ مُدَرِّسًا.", ["قَبْلُ", "قَبْلِ", "قَبْلَ", "قَبْلٍ"], "Ohne Muḍāf ilaihi: mabnī auf Ḍamma.", ["Ohne folgendes Nomen Ḍamma.", "Ohne folgendes Nomen Ḍamma.", "Kein Tanwīn."]),
  E("سَأَذْهَبُ إِلَى الْمَسْجِدِ مِنْ ____.", ["بَعْدُ", "بَعْدِ", "بَعْدَ", "بَعْدٍ"], "„danach“: mabnī auf Ḍamma.", ["Ḍamma.", "Ḍamma.", "Kein Tanwīn."]),
  E("رَجَعْتُ ____ الصَّلَاةِ.", ["بَعْدَ", "بَعْدُ", "بَعْدِ", "مِنْ بَعْدُ"], "Mit Muḍāf ilaihi: بَعْدَ.", ["Ḍamma nur ohne Nomen.", "Falsch.", "Falsch."]),
  F("Wofür steht مِنْ قَبْلُ?", "", ["مِنْ قَبْلِ ذَلِكَ – „vorher, früher“", "„vor dem Gebet“", "„nach“", "„niemals“"], "Muḍāf ilaihi ausgelassen.", ["Dann folgt ein Nomen.", "Gegenteil.", "Falsch."]),
  F("Warum hat قَبْلُ in مِنْ قَبْلُ ein Ḍamma, obwohl مِنْ davor steht?", "", ["Es ist mabnī auf Ḍamma (Muḍāf ilaihi weggefallen).", "Es ist Nominativ.", "Es ist ein Fehler.", "Weil es Subjekt ist."], "لِلَّهِ الْأَمْرُ مِنْ قَبْلُ وَمِنْ بَعْدُ.", ["Kein Fall.", "Richtig.", "Kein Subjekt."]),
  U("Übersetze ins Arabische", "Ich war früher in Medina.", ["كُنْتُ فِي الْمَدِينَةِ مِنْ قَبْلُ.", "كُنْتُ فِي الْمَدِينَةِ مِنْ قَبْلِ.", "كُنْتُ فِي الْمَدِينَةِ قَبْلُ مِنْ.", "كَانَ فِي الْمَدِينَةِ مِنْ قَبْلُ."], "مِنْ قَبْلُ.", ["Ḍamma.", "Stellung.", "„er“."]),
  F("Was heißt لِلَّهِ الْأَمْرُ مِنْ قَبْلُ وَمِنْ بَعْدُ?", "", ["Allah gehört die Sache vorher und nachher.", "Vor und nach dem Gebet …", "Allah befahl vorher …", "Danach und davor nichts."], "Qurʾān 30:4.", ["Kein Gebet genannt.", "Kein Verb.", "Falsch."])
]);
R("b2-25", 4, [
  E("هَؤُلَاءِ ____ فِي الْمُسْتَشْفَى.", ["مَرْضَى", "مَرِيضُونَ", "مَرْضًى", "مِرَاضٌ"], "Plural von مَرِيضٌ: مَرْضَى.", ["Im Buch: مَرْضَى.", "Kein Tanwīn.", "Nicht im Buch."]),
  U("Plural", "قَتِيلٌ", ["قَتْلَى", "قُتَلَاءُ", "قَتِيلُونَ", "قِتَالٌ"], "فَعْلَى.", ["Nicht im Buch.", "Nicht im Buch.", "„Kampf“."]),
  U("Plural", "أَسِيرٌ", ["أَسْرَى", "أُسَرَاءُ", "أَسِيرُونَ", "أَسَارِيرُ"], "فَعْلَى.", ["Nicht im Buch.", "Nicht im Buch.", "Falsch."]),
  U("Plural", "أَحْمَقُ", ["حَمْقَى", "أَحَامِقُ", "حُمْقٌ", "أَحْمَقُونَ"], "فَعْلَى.", ["Nicht im Buch.", "Nicht im Buch.", "Nicht im Buch."]),
  F("Hat مَرْضَى Tanwīn?", "مَرْضَى", ["Nein, es ist diptot.", "Ja.", "Nur im Genitiv.", "Nur mit al."], "Endung -ā (alif maqṣūra).", ["Nein.", "Nein.", "Mit al nie."])
]);

/* ---------- Lektion 26 ---------- */
R("b2-26", 0, [
  F("Wie heißen die drei Radikale nach فَعَلَ?", "", ["فَاءٌ، عَيْنٌ، لَامٌ", "أَلِفٌ، بَاءٌ، تَاءٌ", "أَوَّلُ، ثَانٍ، ثَالِثٌ", "حَرْفٌ، اسْمٌ، فِعْلٌ"], "Nach dem Musterverb فَعَلَ.", ["Alphabet.", "Arabische Zahlwörter, nicht die Namen.", "Wortarten."]),
  F("Wie heißt ein Verb mit و/ي als 1. Radikal?", "", ["مِثَالٌ", "أَجْوَفُ", "نَاقِصٌ", "لَفِيفٌ"], "Schwach am fāʾ.", ["Am ʿain.", "Am lām.", "Zwei schwache."]),
  F("Wie heißt ein Verb mit و/ي als 2. Radikal?", "", ["أَجْوَفُ", "مِثَالٌ", "نَاقِصٌ", "مُضَعَّفٌ"], "„hohl“.", ["1. Radikal.", "3. Radikal.", "Verdoppelt."]),
  F("Wie heißt ein Verb mit و/ي als 3. Radikal?", "", ["نَاقِصٌ", "أَجْوَفُ", "مِثَالٌ", "سَالِمٌ"], "„mangelhaft“.", ["2. Radikal.", "1. Radikal.", "Gesund."]),
  F("Zu welcher Klasse gehört وَصَلَ?", "وَصَلَ", ["مِثَالٌ", "أَجْوَفُ", "نَاقِصٌ", "سَالِمٌ"], "و am Anfang.", ["Nein.", "Nein.", "Enthält و."]),
  F("Zu welcher Klasse gehört قَالَ?", "قَالَ", ["أَجْوَفُ", "مِثَالٌ", "نَاقِصٌ", "سَالِمٌ"], "Aus قَوَلَ.", ["Nein.", "Nein.", "Schwach."]),
  F("Was heißt مُعْتَلٌّ?", "", ["schwach (mit و oder ي als Radikal)", "gesund", "verdoppelt", "mit Hamza"], "الْفِعْلُ الْمُعْتَلُّ.", ["Das ist سَالِمٌ.", "مُضَعَّفٌ.", "مَهْمُوزٌ."])
]);
R("b2-26", 1, [
  E("أَيْنَ ____ الْكِتَابَ؟ (findest du)", ["تَجِدُ", "تَوْجِدُ", "تَجَدُ", "تُوجِدُ"], "وَجَدَ يَجِدُ.", ["و fällt weg.", "Falscher Vokal.", "Andere Form."]),
  E("الْحَافِلَةُ ____ هُنَا. (hält)", ["تَقِفُ", "تَوْقِفُ", "تَقَفُ", "تَوْقَفُ"], "وَقَفَ يَقِفُ.", ["و fällt weg.", "Falscher Vokal.", "Falsch."])
]);
R("b2-26", 2, [
  U("Bilde den Amr", "تَقِفُ", ["قِفْ", "اِقِفْ", "اُوقُفْ", "تَقِفْ"], "Kein Hamzat al-waṣl.", ["Nicht nötig.", "Falsch.", "Jussiv."]),
  U("Bilde den Amr", "تَصِلُ", ["صِلْ", "اِصِلْ", "اُوصُلْ", "تَصِلْ"], "صِلْ.", ["Nicht nötig.", "Falsch.", "Jussiv."]),
  U("Bilde den Amr (für mehrere Männer)", "تَضَعُونَ", ["ضَعُوا", "اِضَعُوا", "ضَعْ", "تَضَعُوا"], "ضَعُوا.", ["Kein Hamzat al-waṣl.", "Singular.", "Jussiv."]),
  U("Bilde den Amr (für eine Frau)", "تَزِنِينَ", ["زِنِي", "اِزِنِي", "زِنْ", "تَزِنِي"], "زِنِي.", ["Kein Hamzat al-waṣl.", "Maskulin.", "Jussiv."]),
  F("Warum braucht ضَعْ kein Hamzat al-waṣl?", "ضَعْ", ["Es beginnt mit einem Vokal (ḍa-), nicht mit Sukūn.", "Weil es feminin ist.", "Weil es Perfekt ist.", "Weil es mit و beginnt."], "تَضَعُ → ضَعْ.", ["Nein.", "Nein.", "Das و ist weg."])
]);
R("b2-26", 3, [
  U("Bilde den Diminutiv", "عَبْدٌ", ["عُبَيْدٌ", "عَبِيدٌ", "عِبَادٌ", "عَابِدٌ"], "فُعَيْلٌ.", ["Plural.", "Plural.", "Partizip."]),
  U("Bilde den Diminutiv", "حَسَنٌ", ["حُسَيْنٌ", "حَسِينٌ", "أَحْسَنُ", "حِسَانٌ"], "فُعَيْلٌ.", ["Falsch.", "Komparativ.", "Plural."]),
  U("Bilde den Diminutiv", "زَهْرٌ", ["زُهَيْرٌ", "زَهِيرٌ", "أَزْهَارٌ", "زَاهِرٌ"], "فُعَيْلٌ.", ["Falsch.", "Plural.", "Partizip."]),
  F("Was drückt der Diminutiv aus?", "", ["Kleinheit oder Zuneigung", "Vergrößerung", "Plural", "Vergangenheit"], "وُلَيْدٌ = kleiner Junge.", ["Gegenteil.", "Singular.", "Kein Verb."]),
  F("Nach welchem Muster wird der Diminutiv gebildet?", "", ["فُعَيْلٌ", "فَعِيلٌ", "فَاعِلٌ", "مَفْعُولٌ"], "وُلَيْدٌ، نُهَيْرٌ.", ["Adjektiv.", "Partizip.", "Partizip passiv."])
]);
R("b2-26", 4, [
  E("أَيْنَ الْكِتَابُ؟ – هَا هُوَ ____.", ["ذَا", "ذِي", "هَذَا", "ذَاكَ"], "هَا هُوَ ذَا.", ["Feminin.", "Nicht so.", "Nicht so."]),
  E("أَيْنَ السَّاعَةُ؟ – هَا ____ ذِي.", ["هِيَ", "هُوَ", "أَنَا", "هُمْ"], "هَا هِيَ ذِي.", ["Maskulin.", "„ich“.", "Plural."]),
  F("Was heißt هَأَنَذَا?", "هَأَنَذَا", ["Hier bin ich!", "Hier ist er!", "Wer bin ich?", "Das bin ich nicht."], "هَا + أَنَا + ذَا.", ["هَا هُوَ ذَا.", "Keine Frage.", "Keine Verneinung."]),
  F("Wann sagt man هَا هُوَ ذَا?", "", ["wenn Gesuchtes plötzlich auftaucht", "zur Begrüßung", "zum Abschied", "beim Essen"], "„Da ist er ja!“", ["Nein.", "Nein.", "Nein."]),
  U("Feminin", "هَا هُوَ ذَا", ["هَا هِيَ ذِي", "هَا هِيَ ذَا", "هَا هُوَ ذِي", "هَا هِيَ هَذِهِ"], "هِيَ + ذِي.", ["ذَا ist maskulin.", "هُوَ ist maskulin.", "Nicht so."])
]);
R("b2-26", 5, [
  E("يَجِبُ عَلَيْكَ أَنْ ____ غَدًا.", ["تَرْجِعَ", "تَرْجِعُ", "تَرْجِعْ", "رَجَعْتَ"], "أَنْ + manṣūb.", ["Indikativ.", "Jussiv.", "Perfekt."]),
  E("لَا يَجِبُ عَلَيْكَ أَنْ ____. (Du brauchst nicht zu kommen.)", ["تَأْتِيَ", "تَأْتِي", "تَأْتِ", "أَتَيْتَ"], "manṣūb (Fatḥa auf ي).", ["Indikativ.", "Jussiv.", "Perfekt."])
]);
R("b2-26", 6, [
  F("Welcher Maṣdar hat das Muster فِعَالٌ?", "", ["نِكَاحٌ", "ذَهَابٌ", "دُخُولٌ", "نَجَاحٌ"], "nikāḥ.", ["فَعَالٌ.", "فُعُولٌ.", "فَعَالٌ."]),
  F("Welcher Maṣdar hat das Muster فَعَالٌ?", "", ["نَجَاحٌ", "إِيَابٌ", "سُجُودٌ", "رُكُوعٌ"], "najāḥ.", ["فِعَالٌ.", "فُعُولٌ.", "فُعُولٌ."]),
  F("Welcher Maṣdar gehört zu ذَهَبَ?", "ذَهَبَ", ["ذَهَابٌ", "ذُهُوبٌ", "ذِهَابٌ", "مَذْهَبٌ"], "ذَهَابٌ.", ["Nicht im Buch.", "Falscher Vokal.", "„Rechtsschule“."]),
  F("Welcher Maṣdar gehört zu نَزَلَ?", "نَزَلَ", ["نُزُولٌ", "نَزَالٌ", "مَنْزِلٌ", "نَازِلٌ"], "فُعُولٌ.", ["Falsch.", "„Haus“.", "Partizip."]),
  F("Welcher Maṣdar gehört zu نَجَحَ?", "نَجَحَ", ["نَجَاحٌ", "نُجُوحٌ", "نَاجِحٌ", "مَنْجَحٌ"], "فَعَالٌ.", ["Falsch.", "Partizip.", "Falsch."]),
  F("Welcher Maṣdar gehört zu آبَ يَؤُوبُ?", "آبَ", ["إِيَابٌ", "أَوْبٌ", "آيِبٌ", "مَآبٌ"], "فِعَالٌ.", ["Nicht im Buch.", "Partizip.", "Ort."])
]);
R("b2-26", 7, [
  F("Was ist der Komparativ von قَلِيلٌ?", "قَلِيلٌ", ["أَقَلُّ", "أَقْلَلُ", "أَقْلُ", "قُلَّى"], "Aus أَقْلَلُ zusammengezogen.", ["Ursprungsform.", "Falsch.", "Falsch."]),
  F("Woraus ist أَقَلُّ entstanden?", "أَقَلُّ", ["أَقْلَلُ", "أَقْلَى", "قَلَّلَ", "أَقَالُ"], "2. und 3. Radikal gleich.", ["Falsch.", "Verb.", "Falsch."]),
  E("مَالِي ____ مِنْ مَالِكَ.", ["أَقَلُّ", "قَلِيلٌ", "أَقْلَلُ", "أَقَلٌّ"], "Komparativ mit مِنْ.", ["Kein Komparativ.", "Zusammengezogen.", "Kein Tanwīn."]),
  F("Was ist der Komparativ von شَدِيدٌ?", "شَدِيدٌ", ["أَشَدُّ", "أَشْدَدُ", "أَشْدُ", "شُدَّى"], "Wie أَقَلُّ.", ["Ursprungsform.", "Falsch.", "Falsch."])
]);

/* ---------- Lektion 27 ---------- */
R("b2-27", 0, [
  E("الْمُدَرِّسُ ____ الدَّرْسَ. (sagt)", ["يَقُولُ", "يَقْوُلُ", "يَقِيلُ", "يَقَالُ"], "قَالَ يَقُولُ.", ["Ursprungsform.", "Falsch.", "Passiv."]),
  E("التَّاجِرُ ____ الْفَوَاكِهَ. (verkauft)", ["يَبِيعُ", "يَبُوعُ", "يَبْيِعُ", "يَبَاعُ"], "بَاعَ يَبِيعُ.", ["Falsch.", "Ursprungsform.", "Passiv."]),
  E("الطِّفْلُ ____ الْآنَ. (schläft)", ["يَنَامُ", "يَنُومُ", "يَنِيمُ", "يَنْوَمُ"], "نَامَ يَنَامُ.", ["Falsch.", "Falsch.", "Ursprungsform."]),
  E("____ صَدِيقِي كُلَّ أُسْبُوعٍ. (Ich besuche …)", ["أَزُورُ", "أَزِيرُ", "أَزَارُ", "أَزْوُرُ"], "زَارَ يَزُورُ.", ["Falsch.", "Falsch.", "Ursprungsform."]),
  F("Woraus ist سَارَ entstanden?", "سَارَ", ["سَيَرَ", "سَوَرَ", "سَأَرَ", "سَرَرَ"], "ي als 2. Radikal.", ["Wurzel mit ي.", "Falsch.", "Falsch."]),
  F("Zu welcher Gruppe gehört خَافَ يَخَافُ?", "خَافَ", ["i–a (wie نَامَ)", "a–u (wie قَالَ)", "a–i (wie بَاعَ)", "u–u"], "خَوِفَ يَخْوَفُ.", ["Nein.", "Nein.", "Nein."])
]);
R("b2-27", 1, [
  E("____ لَهُ: لَا. (Ich sagte zu ihm …)", ["قُلْتُ", "قِلْتُ", "قَالْتُ", "قَوَلْتُ"], "a–u → Ḍamma.", ["Bei قَالَ Ḍamma.", "Der 2. Radikal fällt weg.", "Ursprungsform."]),
  E("____ الْبَيْتَ. (Ich verkaufte …)", ["بِعْتُ", "بُعْتُ", "بَاعْتُ", "بَيَعْتُ"], "a–i → Kasra.", ["Bei بَاعَ Kasra.", "Der 2. Radikal fällt weg.", "Ursprungsform."])
]);
R("b2-27", 2, [
  E("الْبَنَاتُ ____. (schlafen)", ["يَنَمْنَ", "يَنَامْنَ", "يَنَامُونَ", "يَنَامُ"], "Vor dem nūn der Frauen fällt der 2. Radikal.", ["Das Alif fällt.", "Maskulin.", "Singular."]),
  E("لَمْ ____ شَيْئًا. (Er verkaufte nichts.)", ["يَبِعْ", "يَبِيعْ", "يَبِيعُ", "يَبِيعَ"], "Jussiv: ي fällt.", ["Zwei Sukūn.", "Kein Ḍamma.", "Kein Fatḥa."]),
  E("لَمْ ____ اللَّيْلَةَ. (Ich schlief nicht.)", ["أَنَمِ", "أَنَامْ", "أَنَامُ", "أَنَامَ"], "Jussiv: Alif fällt; vor al Kasra.", ["Zwei Sukūn.", "Kein Ḍamma.", "Kein Fatḥa."]),
  U("Mach es majzūm (nach لَمْ)", "يَزُورُ", ["لَمْ يَزُرْ", "لَمْ يَزُورْ", "لَمْ يَزُورَ", "لَمْ يَزُورُ"], "و fällt.", ["Zwei Sukūn.", "Fatḥa.", "Ḍamma."])
]);
R("b2-27", 3, [
  U("Bilde den Amr", "تَبِيعُ", ["بِعْ", "بِيعْ", "اِبِعْ", "تَبِعْ"], "بِعْ.", ["Zwei Sukūn.", "Kein Hamzat al-waṣl.", "Jussiv."]),
  U("Bilde den Amr (für mehrere Männer)", "تَقُولُونَ", ["قُولُوا", "قُلُوا", "قُولْ", "تَقُولُوا"], "قُولُوا.", ["Vor -ū bleibt و.", "Singular.", "Jussiv."]),
  U("Bilde den Amr (für mehrere Frauen)", "تَقُلْنَ", ["قُلْنَ", "قُولْنَ", "قُولُوا", "تَقُلْنَ"], "قُلْنَ.", ["و fällt.", "Maskulin.", "Präsens."]),
  U("Bilde den Amr (für eine Frau)", "تَنَامِينَ", ["نَامِي", "نَمِي", "نَمْ", "تَنَامِي"], "نَامِي.", ["Alif bleibt vor -ī.", "Maskulin.", "Jussiv."]),
  E("____ الْحَقَّ وَلَوْ كَانَ مُرًّا.", ["قُلِ", "قُولْ", "قُولُ", "قَالَ"], "Amr قُلْ; vor al Kasra.", ["Zwei Sukūn.", "Kein Ḍamma.", "Perfekt."])
]);
R("b2-27", 4, [
  E("وَاللَّهِ ____ صَدَقْتَ. (Bei Allah, du hast die Wahrheit gesagt.)", ["لَقَدْ", "قَدْ", "لَنْ", "لَمْ"], "Bejahtes Perfekt nach Schwur: لَقَدْ.", ["Nach dem Schwur mit لَـ: لَقَدْ.", "Futur.", "Verneinung."]),
  E("____ مَا رَأَيْتُهُ. (Bei Allah, ich habe ihn nicht gesehen.)", ["وَاللَّهِ", "وَاللَّهُ", "وَاللَّهَ", "بِاللَّهُ"], "Schwur-وَ → majrūr.", ["Nach و majrūr.", "Nach و majrūr.", "majrūr."]),
  U("Bekräftige mit Schwur", "رَأَيْتُهُ فِي السُّوقِ.", ["وَاللَّهِ لَقَدْ رَأَيْتُهُ فِي السُّوقِ.", "وَاللَّهِ رَأَيْتُهُ لَقَدْ فِي السُّوقِ.", "وَاللَّهُ لَقَدْ رَأَيْتُهُ فِي السُّوقِ.", "لَقَدْ وَاللَّهِ مَا رَأَيْتُهُ فِي السُّوقِ."], "وَاللَّهِ + لَقَدْ + Perfekt.", ["Stellung.", "majrūr.", "Verneint."]),
  U("Bekräftige mit Schwur (verneint)", "مَا أَكَلْتُ.", ["وَاللَّهِ مَا أَكَلْتُ.", "وَاللَّهِ لَقَدْ مَا أَكَلْتُ.", "وَاللَّهُ مَا أَكَلْتُ.", "لَقَدْ مَا أَكَلْتُ."], "Ohne لَقَدْ.", ["لَقَدْ nur bejaht.", "majrūr.", "Schwur fehlt."]),
  F("In welchem Fall steht اللَّهِ in وَاللَّهِ?", "وَاللَّهِ", ["majrūr (و ist eine Präposition)", "marfūʿ", "manṣūb", "mabnī"], "Schwur-وَ = Präposition.", ["Nein.", "Nein.", "Nein."]),
  F("Wann braucht man لَقَدْ nach dem Schwur?", "", ["beim bejahten Perfekt", "beim verneinten Perfekt", "beim Futur", "beim Befehl"], "وَاللَّهِ لَقَدْ …", ["Dann nicht.", "Nicht so.", "Nicht so."])
]);
R("b2-27", 5, [
  E("أَظُنُّ الْبَابَ ____.", ["مُغْلَقًا", "مُغْلَقٌ", "مُغْلَقٍ", "الْمُغْلَقُ"], "Zweites Objekt manṣūb.", ["manṣūb.", "manṣūb.", "Unbestimmt."]),
  E("أَظُنُّ____ طَيِّبًا. (dich)", ["كَ", "أَنْتَ", "هُوَ", "كُمْ"], "أَظُنُّكَ طَيِّبًا.", ["Kein selbstständiges Pronomen.", "„er“.", "Plural."]),
  U("Mach daraus ظَنَّ mit zwei Objekten", "الْمُدِيرُ مَشْغُولٌ.", ["أَظُنُّ الْمُدِيرَ مَشْغُولًا.", "أَظُنُّ الْمُدِيرُ مَشْغُولٌ.", "أَظُنُّ الْمُدِيرَ مَشْغُولٌ.", "أَظُنُّ أَنَّ الْمُدِيرَ مَشْغُولًا."], "Beide manṣūb.", ["Beide manṣūb.", "Zweites auch manṣūb.", "Nach أَنَّ marfūʿ."]),
  U("Statt zwei Objekten: أَنَّ", "أَظُنُّ الطَّالِبَ نَاجِحًا.", ["أَظُنُّ أَنَّ الطَّالِبَ نَاجِحٌ.", "أَظُنُّ أَنَّ الطَّالِبَ نَاجِحًا.", "أَظُنُّ أَنَّ الطَّالِبُ نَاجِحٌ.", "أَظُنُّ إِنَّ الطَّالِبَ نَاجِحٌ."], "أَنَّ + Ism manṣūb + Khabar marfūʿ.", ["Khabar marfūʿ.", "Ism manṣūb.", "Nach ظَنَّ أَنَّ."]),
  F("Wie viele Objekte hat ظَنَّ?", "", ["zwei, beide manṣūb", "eins", "keins", "drei"], "ظَنَنْتُهُ دَفْتَرِي.", ["Zwei.", "Es hat Objekte.", "Zwei."])
]);
R("b2-27", 6, [
  E("لَا يَنْبَغِي لَكَ أَنْ ____ هَذَا.", ["تَقُولَ", "تَقُولُ", "تَقُلْ", "قُلْتَ"], "أَنْ + manṣūb.", ["Indikativ.", "Jussiv.", "Perfekt."]),
  E("اِجْلِسْ ____ تَشَاءُ.", ["حَيْثُ", "أَيْنَ", "مَتَى", "كَيْفَ"], "„wo du willst“ = حَيْثُ.", ["Fragewort.", "„wann“.", "„wie“."]),
  F("Was heißt شَفَاكَ اللَّهُ شِفَاءً كَامِلًا?", "", ["Möge Allah dir vollständige Genesung schenken.", "Allah hat dich geheilt.", "Sei gesund!", "Allah ist der Heiler."], "Bittformel.", ["Kein Bericht.", "Kein Befehl.", "Keine Aussage."]),
  F("Wie schreibt man das Hamza in لَمْ يَجِئْ?", "", ["auf ي (ئ)", "auf Alif (أ)", "auf و (ؤ)", "allein (ء)"], "Nach Kasra → ئ.", ["Nein.", "Nein.", "Nein."]),
  F("Was heißt لَا يَنْبَغِي?", "لَا يَنْبَغِي", ["es gehört sich nicht", "es ist unmöglich", "es ist nicht nötig", "es ist verboten"], "Anstandsformel.", ["لَا يُمْكِنُ.", "لَا يَجِبُ.", "Stärker: حَرَامٌ."])
]);
R("b2-27", 7, [
  F("In welchen zwei Gruppen kommt مَاتَ vor?", "", ["i–a (يَمَاتُ) und a–u (يَمُوتُ)", "nur a–u", "nur i–a", "a–i"], "Beide Formen.", ["Auch i–a.", "Auch a–u.", "Nicht a–i."]),
  F("Welches Muḍāriʿ von مَاتَ kommt im Qurʾān vor?", "", ["يَمُوتُ", "يَمَاتُ", "يَمِيتُ", "يَمْوُتُ"], "Nur يَمُوتُ.", ["Nicht im Qurʾān.", "Andere Bedeutung.", "Ursprungsform."]),
  F("Was ist مِتُّ?", "مِتُّ", ["„ich starb“ (Gruppe i–a)", "„ich sterbe“", "„stirb!“", "„Tod“"], "Wie نِمْتُ.", ["Präsens.", "Amr.", "Maṣdar."]),
  F("Was ist مُتُّ?", "مُتُّ", ["„ich starb“ (Gruppe a–u)", "„ich starb“ (Gruppe i–a)", "„stirb!“", "„tot“"], "Wie قُلْتُ.", ["Das ist مِتُّ.", "Amr wäre مُتْ.", "مَيِّتٌ."])
]);

/* ---------- Lektion 28 ---------- */
R("b2-28", 0, [
  F("Was ist ein نَاقِصٌ-Verb?", "", ["ein Verb mit و/ي als 3. Radikal", "mit و/ي als 1. Radikal", "mit verdoppeltem Radikal", "mit Hamza"], "دَعَا، بَكَى، نَسِيَ.", ["مِثَالٌ.", "مُضَعَّفٌ.", "مَهْمُوزٌ."]),
  F("Warum schreibt man دَعَا mit ا, aber بَكَى mit ى?", "", ["دَعَا hat و als 3. Radikal, بَكَى hat ي.", "Zufall.", "Wegen des Geschlechts.", "Wegen der Zeit."], "و → ا, ي → ى.", ["Es gibt eine Regel.", "Nein.", "Nein."]),
  F("Woraus ist دَعَا entstanden?", "دَعَا", ["دَعَوَ", "دَعَيَ", "دَعَأَ", "دَعَّ"], "و als 3. Radikal.", ["ي wäre بَكَى-Typ.", "Falsch.", "Falsch."]),
  F("Warum bleibt das ي in نَسِيَ?", "نَسِيَ", ["Der 2. Radikal hat Kasra.", "Weil es feminin ist.", "Ausnahme ohne Grund.", "Weil es Plural ist."], "nasiya, baqiya.", ["Nein.", "Es gibt einen Grund.", "Nein."])
]);
R("b2-28", 1, [
  E("الرِّجَالُ ____ النَّاسَ إِلَى الْخَيْرِ. (riefen)", ["دَعَوُا", "دَعَوْا", "دَعَاوُوا", "دَعُوا"], "دَعَوْا; vor al Ḍamma: دَعَوُا.", ["Vor al Ḍamma.", "Falsch.", "Falsch."]),
  E("الْأَوْلَادُ ____. (weinten)", ["بَكَوْا", "بَكُوا", "بَكَيُوا", "بَكَى"], "بَكَوْا.", ["Falsch.", "Ursprungsform.", "Singular."]),
  E("هِيَ ____ الْكِتَابَ. (vergaß)", ["نَسِيَتِ", "نَسَتِ", "نَسِتِ", "نَسِيَ"], "ي bleibt: نَسِيَتْ (vor al Kasra).", ["Das ي bleibt.", "Das ي bleibt.", "Maskulin."]),
  E("____ صَدِيقِي إِلَى الْعَشَاءِ. (Ich lud … ein)", ["دَعَوْتُ", "دَعَيْتُ", "دَعَاتُ", "دَعْتُ"], "Mutaḥarrik-Pronomen → و kommt zurück.", ["و, nicht ي.", "Falsch.", "Falsch."])
]);
R("b2-28", 2, [
  E("أَنَا ____ اللَّهَ. (rufe an)", ["أَدْعُو", "أَدْعُ", "أَدْعُوُ", "أَدْعَا"], "Indikativ ohne Ḍamma: أَدْعُو.", ["Jussiv.", "Ḍamma fällt.", "Falsch."]),
  E("الطِّفْلُ ____. (weint)", ["يَبْكِي", "يَبْكِ", "يَبْكِيُ", "يَبْكَى"], "يَبْكِي.", ["Jussiv.", "Ḍamma fällt.", "Falsch."]),
  E("الطُّلَّابُ ____ الدَّرْسَ. (vergessen)", ["يَنْسَوْنَ", "يَنْسُونَ", "يَنْسَيُونَ", "يَنْسَى"], "يَنْسَوْنَ.", ["Bei a-Verben -awna.", "Falsch.", "Singular."]),
  E("أَنْتِ ____ كَثِيرًا. (weinst)", ["تَبْكِينَ", "تَبْكِيِينَ", "تَبْكُونَ", "تَبْكِي"], "تَبْكِينَ.", ["Falsch.", "Maskulin Plural.", "Ohne nūn."]),
  E("الرِّجَالُ ____. (rufen)", ["يَدْعُونَ", "يَدْعُوُونَ", "يَدْعُوا", "يَدْعُو"], "3. Radikal fällt: يَدْعُونَ.", ["Ursprungsform.", "Ohne nūn.", "Singular."]),
  F("Was ist bei النِّسَاءُ يَدْعُونَ das و?", "", ["der 3. Radikal", "der Fāʿil", "das Indikativzeichen", "ein Pluralzeichen"], "Muster يَفْعُلْنَ: das nūn ist Fāʿil.", ["Das nūn ist Fāʿil.", "Kein Indikativzeichen.", "Wurzelbuchstabe."]),
  U("Statt „er“: „sie (Pl. m.)“", "يَبْكِي", ["يَبْكُونَ", "يَبْكِيُونَ", "يَبْكِينَ", "يَبْكِيَانِ"], "يَبْكُونَ.", ["Ursprungsform.", "Feminin.", "Dual."])
]);
R("b2-28", 4, [
  E("مَاذَا ____ يَا بِلَالُ؟", ["تَرَى", "تَرْأَى", "تَرِي", "تَرَيْ"], "تَرَى.", ["Hamza fällt.", "Falsch.", "Falsch."]),
  E("لَمْ ____ أَحَدًا. (Ich sah niemanden.)", ["أَرَ", "أَرَى", "أَرْأَ", "رَأَيْتُ"], "Jussiv: لَمْ أَرَ.", ["Alif fällt.", "Hamza fällt.", "Nach لَمْ Muḍāriʿ."]),
  E("____ الْهِلَالَ. (Er sah …)", ["رَأَى", "يَرَى", "رَآ", "رَأَا"], "Perfekt: رَأَى.", ["Präsens.", "Falsch.", "Falsch."]),
  U("Statt „ich“: „wir“", "أَرَى الْبَحْرَ.", ["نَرَى الْبَحْرَ.", "نَرْأَى الْبَحْرَ.", "رَأَيْنَا الْبَحْرَ.", "تَرَى الْبَحْرَ."], "نَرَى.", ["Hamza fällt.", "Perfekt.", "„du“."]),
  F("Was benutzt man statt eines Imperativs von رَأَى?", "", ["اُنْظُرْ", "رَ", "اِرْأَ", "تَرَى"], "Man sagt اُنْظُرْ.", ["Nicht üblich.", "Gibt es nicht.", "Präsens."]),
  F("Woraus ist يَرَى entstanden?", "يَرَى", ["يَرْأَى", "يَرِي", "يَرْوَى", "يَرْيَى"], "Hamza (2. Radikal) fällt.", ["Falsch.", "Falsch.", "Falsch."]),
  U("Mach es majzūm (nach لَمْ)", "تَرَى", ["لَمْ تَرَ", "لَمْ تَرَى", "لَمْ تَرْأَ", "لَمْ تَرَيْ"], "Alif fällt.", ["Alif fällt.", "Falsch.", "Falsch."])
]);
R("b2-28", 5, [
  E("____ كِتَابَكَ يَا مُحَمَّدُ. (Zeig mir …)", ["أَرِنِي", "أَرِي", "أَرُونِي", "تُرِينِي"], "أَرِ + نِي.", ["Feminin.", "Plural.", "Präsens."]),
  E("يَا إِخْوَانُ، ____ الصُّوَرَ.", ["أَرُوا", "أَرِ", "أَرِي", "أَرِينَ"], "Plural m.: أَرُوا.", ["Singular.", "du (f.).", "ihr (f.)."]),
  E("يَا آمِنَةُ، ____ الدَّفْتَرَ.", ["أَرِي", "أَرِ", "أَرُوا", "أَرِينَ"], "du (f.): أَرِي.", ["Maskulin.", "Plural.", "Plural."]),
  E("____ الطَّرِيقَ. (Zeig uns …)", ["أَرِنَا", "أَرِنِي", "أَرِهِ", "أَرِهِمْ"], "أَرِنَا.", ["„mir“.", "„ihm“.", "„ihnen“."]),
  F("Was heißt أَرِهِ?", "أَرِهِ", ["zeig ihm!", "zeig mir!", "sieh ihn!", "er sah"], "أَرِ + هِ.", ["أَرِنِي.", "Nicht so.", "Falsch."])
]);
R("b2-28", 6, [
  E("لَمْ أَكْتُبْ لَهُ رِسَالَةً ____.", ["بَعْدُ", "بَعْدَ", "قَبْلُ", "أَبَدًا"], "„noch nicht“: لَمْ … بَعْدُ.", ["Ohne Nomen Ḍamma.", "„vorher“.", "Futur."]),
  E("لَمْ يَرْجِعْ أَبِي ____.", ["بَعْدُ", "بَعْدَ", "بَعْدٍ", "بَعْدِ"], "بَعْدُ.", ["Ohne Nomen Ḍamma.", "Kein Tanwīn.", "Ohne Nomen Ḍamma."]),
  U("Füge „noch“ hinzu", "لَمْ أَكْوِ الْقَمِيصَ.", ["لَمْ أَكْوِ الْقَمِيصَ بَعْدُ.", "لَمْ أَكْوِ الْقَمِيصَ بَعْدَ.", "بَعْدُ لَمْ أَكْوِ الْقَمِيصَ.", "لَمْ أَكْوِ بَعْدُ الْقَمِيصَ."], "بَعْدُ am Ende.", ["Ḍamma.", "Stellung.", "Stellung."]),
  F("Was heißt لَمْ يَحْضُرْ بَعْدُ?", "", ["Er ist noch nicht gekommen.", "Er kam danach nicht.", "Er wird nicht kommen.", "Er kam nie."], "بَعْدُ = noch.", ["Nicht „danach“.", "Futur.", "Das wäre قَطُّ."]),
  U("Übersetze ins Arabische", "Ich habe ihn noch nicht angerufen.", ["لَمْ أَتَّصِلْ بِهِ بَعْدُ.", "لَمْ أَتَّصِلْ بِهِ بَعْدَ.", "مَا اتَّصَلْتُ بِهِ أَبَدًا.", "لَنْ أَتَّصِلَ بِهِ بَعْدُ."], "لَمْ … بَعْدُ.", ["Ḍamma.", "„niemals“ (falsch hier).", "Futur."])
]);

/* ---------- Lektion 29 ---------- */
R("b2-29", 0, [
  F("Was ist ein مُضَعَّفٌ-Verb?", "", ["2. und 3. Radikal sind gleich", "1. Radikal ist و", "3. Radikal ist ي", "es hat Hamza"], "حَجَّ = حَجَجَ.", ["مِثَالٌ.", "نَاقِصٌ.", "مَهْمُوزٌ."]),
  F("Woraus ist مَرَّ entstanden?", "مَرَّ", ["مَرَرَ", "مَرَى", "مَوَرَ", "مَرْرَ"], "Zwei gleiche Radikale.", ["Falsch.", "Falsch.", "Falsch."]),
  F("Welches Verb ist مُضَعَّفٌ?", "", ["شَمَّ", "شَرِبَ", "شَكَا", "شَاءَ"], "شَمِمَ → شَمَّ.", ["Gesund.", "نَاقِصٌ.", "أَجْوَفُ + Hamza."]),
  E("____ أَبِي الْعَامَ الْمَاضِيَ. (pilgerte)", ["حَجَّ", "حَجَجَ", "حَاجَ", "حَجَى"], "حَجَّ.", ["Ursprungsform.", "Falsch.", "Falsch."]),
  E("____ الطُّلَّابُ بِالْمَسْجِدِ. (gingen vorbei)", ["مَرَّ", "مَرُّوا", "مَرَرَ", "مَرَّتْ"], "Verb vorne → Singular.", ["Verb vor Fāʿil Singular.", "Ursprungsform.", "Feminin."]),
  F("Welche Radikale hat حَجَّ?", "حَجَّ", ["ح ج ج", "ح ج", "ح ج ي", "ح ا ج"], "Drei Radikale, zwei gleich.", ["Es sind drei.", "Kein ي.", "Kein Alif."])
]);
R("b2-29", 1, [
  E("____ فِي السَّنَةِ الْمَاضِيَةِ. (Wir pilgerten.)", ["حَجَجْنَا", "حَجَّنَا", "حَجُّنَا", "حَجَّيْنَا"], "Mit mutaḥarrik-Pronomen aufgelöst.", ["Das hieße „er pilgerte mit uns“ o. Ä.", "Falsch.", "Falsch."]),
  E("الْحُجَّاجُ ____ إِلَى مِنًى. (gingen)", ["مَرُّوا", "مَرَرُوا", "مَرَّوْا", "مَرَرْنَ"], "Vor -ū verschmolzen.", ["Vor -ū verschmolzen.", "Falsch.", "Feminin."]),
  U("Statt „er“: „du (m.)“", "حَجَّ", ["حَجَجْتَ", "حَجَّتَ", "حَجَجَتْ", "حَجُّتَ"], "Aufgelöst: حَجَجْتَ.", ["Mit -ta aufgelöst.", "„sie“ (falsch).", "Falsch."]),
  U("Statt „er“: „sie (f. Sg.)“", "مَرَّ", ["مَرَّتْ", "مَرَرَتْ", "مَرَرْتِ", "مَرَّتِي"], "Verschmolzen vor -at.", ["Vor -at verschmolzen.", "„du (f.)“.", "Falsch."]),
  U("Statt „er“: „sie (Pl. f.)“", "حَجَّ", ["حَجَجْنَ", "حَجَّنَ", "حَجُّوا", "حَجَّتْ"], "Mit nūn aufgelöst.", ["Aufgelöst.", "Maskulin.", "Singular."]),
  F("Wann wird das Muḍāʿaf im Perfekt aufgelöst (حَجَجْ…)?", "", ["vor Endungen, die mit einem Konsonanten beginnen (ـتُ، ـنَا، ـنَ …)", "immer", "nie", "nur im Dual"], "حَجَجْتُ – aber حَجَّ، حَجُّوا.", ["Nicht vor -a/-at/-ū.", "Doch.", "Nicht nur."])
]);
R("b2-29", 2, [
  E("أَبِي ____ كُلَّ سَنَةٍ. (pilgert)", ["يَحُجُّ", "يَحْجُجُ", "يَحَجُّ", "يُحِجُّ"], "يَحُجُّ.", ["Ursprungsform.", "Falscher Vokal.", "Andere Form."]),
  E("النِّسَاءُ ____ هَذَا الْعَامَ.", ["يَحْجُجْنَ", "يَحُجُّنَ", "يَحُجُّونَ", "تَحُجُّ"], "Mit dem nūn der Frauen aufgelöst.", ["Aufgelöst.", "Maskulin.", "Singular."]),
  E("لَمْ ____ هَذَا الْعَامَ. (Er pilgerte nicht.)", ["يَحُجَّ", "يَحُجْ", "يَحُجُّ", "يَحْجُجُ"], "Jussiv: Fatḥa gegen zwei Sukūn.", ["Zwei Sukūn.", "Kein Ḍamma.", "Falsch."]),
  E("لَمْ ____ يَا إِخْوَانُ.", ["تَحُجُّوا", "تَحُجُّونَ", "تَحُجَّ", "تَحْجُجُوا"], "nūn fällt.", ["Mit nūn.", "Singular.", "Falsch."]),
  U("Mach es majzūm (nach لَمْ)", "نَمُرُّ", ["لَمْ نَمُرَّ", "لَمْ نَمُرْ", "لَمْ نَمُرُّ", "لَمْ نَمْرُرُ"], "Fatḥa.", ["Zwei Sukūn.", "Kein Ḍamma.", "Falsch."]),
  F("Warum steht in لَمْ يَحُجَّ ein Fatḥa?", "لَمْ يَحُجَّ", ["gegen zwei Sukūn, weil kein Buchstabe wegfallen kann", "weil es Subjunktiv ist", "weil es feminin ist", "Fehler"], "Statt Sukūn: Fatḥa.", ["Es ist Jussiv.", "Nein.", "Richtig."])
]);
R("b2-29", 3, [
  U("Bilde den Amr", "تَمُرُّ", ["مُرَّ", "مَرَّ", "مُرْ", "اِمُرَّ"], "مُرَّ.", ["Das ist das Perfekt.", "Zwei Sukūn.", "Kein Hamzat al-waṣl."]),
  U("Bilde den Amr (für eine Frau)", "تَحُجِّينَ", ["حُجِّي", "حُجِّينَ", "حُجَّ", "حَجِّي"], "حُجِّي.", ["Kein nūn.", "Maskulin.", "Falscher Vokal."]),
  U("Bilde den Amr (für mehrere Männer)", "تَحُجُّونَ", ["حُجُّوا", "حُجُّونَ", "حُجَّ", "تَحُجُّوا"], "حُجُّوا.", ["Kein nūn.", "Singular.", "Jussiv."]),
  F("Welche Form hat der Amr von شَمَّ (i–a-Gruppe)?", "", ["شَمَّ (wie das Perfekt)", "شُمَّ", "اِشْمَمْ", "شِمَّ"], "يَشَمُّ → شَمَّ.", ["a–u-Form.", "Nicht im Buch.", "Falsch."]),
  E("____ هَذِهِ الْوَرْدَةَ. (Riech …)", ["شَمَّ", "شُمَّ", "شَمْ", "شِمَّ"], "Amr = شَمَّ.", ["a–u-Form.", "Zwei Sukūn.", "Falsch."])
]);
R("b2-29", 4, [
  E("____ دَخَلَ الْمُدَرِّسُ قُمْنَا. (Als …)", ["لَمَّا", "عِنْدَمَا", "لَمْ", "لَنْ"], "„als“ + Perfekt = لَمَّا.", ["Im Buch: عِنْدَمَا mit dem Muḍāriʿ.", "Verneinung.", "Futur."]),
  E("____ أَدْخُلُ الْمَسْجِدَ أُصَلِّي رَكْعَتَيْنِ.", ["عِنْدَمَا", "لَمَّا", "لَمْ", "مُنْذُ"], "Mit Muḍāriʿ: عِنْدَمَا.", ["لَمَّا nur mit Perfekt.", "Verneinung.", "„seit“."]),
  U("Übersetze ins Arabische", "Als ich die Glocke hörte, betrat ich die Klasse.", ["لَمَّا سَمِعْتُ الْجَرَسَ دَخَلْتُ الْفَصْلَ.", "لَمَّا أَسْمَعُ الْجَرَسَ دَخَلْتُ الْفَصْلَ.", "لَمْ سَمِعْتُ الْجَرَسَ دَخَلْتُ الْفَصْلَ.", "عِنْدَمَا سَمِعْتُ الْجَرَسُ دَخَلْتُ الْفَصْلَ."], "لَمَّا + Perfekt.", ["لَمَّا nur mit Perfekt.", "Verneinung.", "Objekt manṣūb."])
]);
R("b2-29", 5, [
  E("لَمْ أَزُرْهُ ____.", ["قَطُّ", "أَبَدًا", "غَدًا", "بَعْدَ"], "Vergangenheit → قَطُّ.", ["Futur.", "„morgen“.", "Falsch."]),
  E("لَنْ أَزُورَهُ ____.", ["أَبَدًا", "قَطُّ", "أَمْسِ", "قَبْلُ"], "Zukunft → أَبَدًا.", ["Vergangenheit.", "„gestern“.", "„vorher“."]),
  F("Was heißt لَا، وَشُكْرًا?", "", ["Nein, danke.", "Kein Dank.", "Ja, danke.", "Danke nicht."], "Mit وَ: „Nein, danke“.", ["Das wäre لَا شُكْرًا.", "„nein“.", "Falsch."]),
  F("Warum ist لَا شُكْرًا (ohne وَ) unhöflich?", "", ["Es heißt „kein Dank“.", "Es heißt „ja“.", "Es ist eine Frage.", "Es ist ein Befehl."], "لَا verneint dann شُكْرًا.", ["Nein.", "Nein.", "Nein."]),
  F("Ist قَطُّ veränderlich?", "", ["Nein, mabnī.", "Ja.", "Nur im Plural.", "Nur im Genitiv."], "قَطُّ bleibt.", ["Immer gleich.", "Nein.", "Nein."])
]);
R("b2-29", 6, [
  F("Zu welcher Klasse gehört كَوَى (2. und 3. schwach)?", "كَوَى", ["لَفِيفٌ مَقْرُونٌ", "لَفِيفٌ مَفْرُوقٌ", "نَاقِصٌ", "أَجْوَفُ"], "و und ي nebeneinander.", ["Getrennt wäre وَقَى.", "Zwei schwache.", "Zwei schwache."]),
  F("Zu welcher Klasse gehört وَقَى (1. und 3. schwach)?", "وَقَى", ["لَفِيفٌ مَفْرُوقٌ", "لَفِيفٌ مَقْرُونٌ", "مِثَالٌ", "نَاقِصٌ"], "Getrennt.", ["Nebeneinander wäre كَوَى.", "Zwei schwache.", "Zwei schwache."])
]);

/* ---------- Lektion 30 ---------- */
R("b2-30", 0, [
  E("أَنْتُمَا ____ إِلَى الْمَسْجِدِ. (ihr beide gingt)", ["ذَهَبْتُمَا", "ذَهَبْتُمْ", "ذَهَبَا", "ذَهَبْتُنَّ"], "2. Person Dual.", ["Plural.", "3. Person.", "Feminin Plural."])
]);
R("b2-30", 1, [
  E("الطَّالِبَانِ ____ الْآنَ. (lernen)", ["يَدْرُسَانِ", "يَدْرُسُونَ", "تَدْرُسَانِ", "يَدْرُسَا"], "Dual m.: يَدْرُسَانِ.", ["Plural.", "Feminin/2. P.", "Ohne nūn."]),
  E("الْبِنْتَانِ ____ الْقُرْآنَ.", ["تَقْرَآنِ", "يَقْرَآنِ", "تَقْرَأْنَ", "تَقْرَأُ"], "Dual f.: تَـ…ـَانِ.", ["Maskulin.", "Plural.", "Singular."]),
  E("أَنْتُمَا ____ كَثِيرًا. (ihr beide arbeitet)", ["تَعْمَلَانِ", "تَعْمَلُونَ", "يَعْمَلَانِ", "تَعْمَلَا"], "2. Person Dual.", ["Plural.", "3. Person m.", "Ohne nūn."]),
  U("Dual", "الطَّالِبُ يَكْتُبُ.", ["الطَّالِبَانِ يَكْتُبَانِ.", "الطَّالِبَانِ يَكْتُبُونَ.", "الطَّالِبَانِ يَكْتُبُ.", "الطَّالِبَيْنِ يَكْتُبَانِ."], "Beide Dual.", ["Plural.", "Muss Dual werden.", "Mubtadaʾ marfūʿ."]),
  U("Dual", "الْمُدَرِّسَةُ تَشْرَحُ.", ["الْمُدَرِّسَتَانِ تَشْرَحَانِ.", "الْمُدَرِّسَتَانِ يَشْرَحَانِ.", "الْمُدَرِّسَتَانِ تَشْرَحْنَ.", "الْمُدَرِّسَاتُ تَشْرَحَانِ."], "Feminin Dual: تَـ.", ["Feminin.", "Plural.", "Plural."]),
  F("Welche Form ist „ihr beide geht“?", "", ["تَذْهَبَانِ", "تَذْهَبُونَ", "يَذْهَبَانِ", "تَذْهَبْنَ"], "تَـ…ـَانِ (m. und f.).", ["Plural.", "3. Person.", "Feminin Plural."]),
  F("Sind „sie beide (f.) gehen“ und „ihr beide geht“ gleich?", "", ["Ja, beide تَذْهَبَانِ.", "Nein.", "Nur im Perfekt.", "Nur im Jussiv."], "Gleiche Form.", ["Doch.", "Im Perfekt verschieden.", "Immer gleich."])
]);
R("b2-30", 2, [
  E("يُرِيدُ الطَّالِبَانِ أَنْ ____.", ["يَنْجَحَا", "يَنْجَحَانِ", "يَنْجَحُوا", "يَنْجَحَ"], "nūn fällt.", ["Mit nūn.", "Plural.", "Singular."]),
  E("الْبِنْتَانِ لَمْ ____.", ["تَنَامَا", "تَنَامَانِ", "تَنَمْنَ", "تَنَمْ"], "nūn fällt.", ["Mit nūn.", "Plural.", "Singular."]),
  U("Verneine mit لَنْ", "تَذْهَبَانِ", ["لَنْ تَذْهَبَا", "لَنْ تَذْهَبَانِ", "لَنْ تَذْهَبُوا", "لَنْ تَذْهَبَ"], "nūn fällt.", ["Mit nūn.", "Plural.", "Singular."]),
  U("Verneine mit لَمْ", "يَكْتُبَانِ", ["لَمْ يَكْتُبَا", "لَمْ يَكْتُبَانِ", "لَمْ يَكْتُبْ", "لَمْ يَكْتُبُوا"], "nūn fällt.", ["Mit nūn.", "Singular.", "Plural."]),
  F("Woran erkennt man den Subjunktiv/Jussiv beim Dual?", "", ["am Wegfall des nūn", "am Fatḥa", "am Sukūn", "am Ḍamma"], "Wie bei den anderen fünf Verbformen.", ["Nein.", "Nein.", "Nein."])
]);
R("b2-30", 3, [
  F("Was sind die „fünf Verbformen“?", "", ["يَفْعَلَانِ، تَفْعَلَانِ، يَفْعَلُونَ، تَفْعَلُونَ، تَفْعَلِينَ", "die fünf Personen im Perfekt", "fünf Befehlsformen", "fünf Zeiten"], "Formen mit nūn-Endung.", ["Nein.", "Nein.", "Nein."]),
  F("Wie heißen sie auf Arabisch?", "", ["الْأَفْعَالُ الْخَمْسَةُ", "الْأَسْمَاءُ الْخَمْسَةُ", "الْأَفْعَالُ النَّاقِصَةُ", "الْحُرُوفُ الْخَمْسَةُ"], "Fünf Verben.", ["Das sind أَبٌ، أَخٌ …", "Das ist كَانَ & Co.", "Falsch."]),
  F("Was passiert mit den fünf Verbformen im Indikativ?", "", ["Sie behalten ihr nūn.", "Sie verlieren ihr nūn.", "Sie bekommen Fatḥa.", "Sie bekommen Sukūn."], "ثُبُوتُ النُّونِ.", ["Das ist Subj./Juss.", "Nein.", "Nein."]),
  F("Welche Form gehört NICHT zu den fünf Verbformen?", "", ["يَذْهَبْنَ", "يَذْهَبَانِ", "تَذْهَبِينَ", "يَذْهَبُونَ"], "يَذْهَبْنَ ist mabnī.", ["Gehört dazu.", "Gehört dazu.", "Gehört dazu."]),
  U("Mach es manṣūb (nach أَنْ)", "تَدْرُسَانِ", ["أَنْ تَدْرُسَا", "أَنْ تَدْرُسَانِ", "أَنْ تَدْرُسَ", "أَنْ تَدْرُسُوا"], "nūn fällt.", ["Mit nūn.", "Singular.", "Plural."]),
  U("Mach es marfūʿ (ohne Partikel)", "لَمْ يَخْرُجَا", ["يَخْرُجَانِ", "يَخْرُجَا", "يَخْرُجُ", "يَخْرُجُونَ"], "nūn kommt zurück.", ["Ohne nūn.", "Singular.", "Plural."])
]);
R("b2-30", 4, [
  E("____ يَا أَخَوَانِ! (Setzt euch!)", ["اِجْلِسَا", "اِجْلِسُوا", "اِجْلِسْ", "تَجْلِسَانِ"], "Amr Dual.", ["Plural.", "Singular.", "Präsens."]),
  E("____ يَا أُخْتَانِ! (Schreibt!)", ["اُكْتُبَا", "اُكْتُبْنَ", "اُكْتُبِي", "اُكْتُبُوا"], "Amr Dual (m. und f. gleich).", ["Plural f.", "Singular f.", "Plural m."]),
  U("Für zwei Personen", "اِذْهَبْ", ["اِذْهَبَا", "اِذْهَبُوا", "اِذْهَبِي", "تَذْهَبَانِ"], "-ā.", ["Plural.", "du (f.).", "Präsens."]),
  U("Für zwei Personen", "قُمْ", ["قُومَا", "قُمَا", "قُومُوا", "قُمْنَ"], "Vor -ā kommt das و zurück.", ["و kommt zurück.", "Plural.", "Plural f."]),
  F("Unterscheidet sich der Amr im Dual nach Geschlecht?", "", ["Nein, اِذْهَبَا für beide.", "Ja.", "Nur bei Frauen -tā.", "Nur bei Männern."], "Gleiche Form.", ["Gleich.", "Nein.", "Nein."]),
  E("____ وُجُوهَكُمَا. (Wascht – ihr beide)", ["اِغْسِلَا", "اِغْسِلُوا", "اِغْسِلْ", "تَغْسِلَانِ"], "Amr Dual.", ["Plural.", "Singular.", "Präsens."])
]);
R("b2-30", 5, [
  E("أَيْنَ أَبُو____؟ (euer beider Vater)", ["كُمَا", "كُمْ", "هُمَا", "كَ"], "ـكُمَا.", ["Plural.", "„ihr beider“ (3. P.).", "Singular."]),
  E("رَأَيْتُ____ فِي السُّوقِ. (euch beide)", ["كُمَا", "كُمْ", "هُمَا", "كُنَّ"], "ـكُمَا.", ["Plural.", "„sie beide“.", "Plural f."]),
  E("رَآ____ الْمُدِيرُ. (uns)", ["نَا", "نِي", "كُمَا", "هُمَا"], "1. Person hat keinen Dual: ـنَا.", ["„mich“.", "„euch beide“.", "„sie beide“."]),
  F("Welches freistehende Pronomen ist „ihr beide“?", "", ["أَنْتُمَا", "أَنْتُمْ", "هُمَا", "نَحْنُ"], "أَنْتُمَا.", ["Plural.", "3. Person.", "„wir“."]),
  F("Hat die 1. Person einen Dual?", "", ["Nein – man nimmt نَحْنُ / ـنَا.", "Ja: نَحْنُمَا.", "Ja: أَنَانِ.", "Nur im Perfekt."], "ذَهَبْنَا für zwei und mehr.", ["Gibt es nicht.", "Gibt es nicht.", "Nein."]),
  U("Statt „sie (Pl.)“: „sie beide“", "رَأَيْتُهُمْ", ["رَأَيْتُهُمَا", "رَأَيْتُهُمْ", "رَأَيْتُكُمَا", "رَأَيْتُهُنَّ"], "ـهُمَا.", ["Unverändert.", "„euch beide“.", "Feminin."]),
  U("Statt „euer“: „euer beider“", "بَيْتُكُمْ", ["بَيْتُكُمَا", "بَيْتُهُمَا", "بُيُوتُكُمَا", "بَيْتُكُنَّ"], "ـكُمَا.", ["„ihr beider“.", "Ein Haus.", "Feminin."])
]);
R("b2-30", 6, [
  E("حَلَقَ الْوَلَدَانِ ____.", ["رُءُوسَهُمَا", "رَأْسَيْهِمَا", "رَأْسَهُمَا", "رُءُوسَهُمْ"], "Was jeder einmal hat → Plural.", ["Im Buch: Plural.", "Es sind zwei Köpfe.", "Plural-Pronomen."]),
  E("مَا ____؟ (Wie heißt ihr beide?)", ["أَسْمَاؤُكُمَا", "اسْمَاكُمَا", "اسْمُكُمَا", "أَسْمَاؤُكُمْ"], "Plural statt Dual.", ["Im Buch: Plural.", "Im Buch: Plural.", "Pronomen Dual."]),
  F("Warum sagt man قُلُوبُكُمَا statt قَلْبَاكُمَا?", "", ["Was jeder nur einmal hat, steht bei zweien im Plural.", "Weil Herz feminin ist.", "Weil es Genitiv ist.", "Beides ist falsch."], "Qurʾān 66:4: فَقَدْ صَغَتْ قُلُوبُكُمَا.", ["Nicht das Geschlecht.", "Nicht der Fall.", "Plural ist richtig."]),
  F("Was heißt غَسَلَ الطَّالِبَانِ وُجُوهَهُمَا?", "", ["Die beiden Studenten wuschen ihre Gesichter.", "Die Studenten wuschen ihr Gesicht.", "Die beiden wuschen ein Gesicht.", "Sie werden waschen."], "Plural bei Dingen, die jeder einmal hat.", ["Dual.", "Zwei Gesichter.", "Perfekt."])
]);

/* ---------- Lektion 31 ---------- */
R("b2-31", 0, [
  F("Wie heißt das Adjektiv auf Arabisch?", "", ["النَّعْتُ", "الْمَنْعُوتُ", "الْخَبَرُ", "الْبَدَلُ"], "naʿt.", ["Das beschriebene Nomen.", "Prädikat.", "Apposition."]),
  F("Wie heißt das beschriebene Nomen?", "", ["الْمَنْعُوتُ", "النَّعْتُ", "الْمُبْتَدَأُ", "الْمُضَافُ"], "manʿūt.", ["Das Adjektiv.", "Subjekt des Nominalsatzes.", "Iḍāfa."]),
  F("Was ist in بَيْتٌ كَبِيرٌ der Naʿt?", "بَيْتٌ كَبِيرٌ", ["كَبِيرٌ", "بَيْتٌ", "beide", "keiner"], "Das Adjektiv.", ["Das ist der Manʿūt.", "Nur eins.", "Es gibt einen."]),
  F("Wo steht der Naʿt?", "", ["nach dem Manʿūt", "vor dem Manʿūt", "am Satzende immer", "beliebig"], "Er folgt.", ["Nein.", "Nein.", "Die Stellung ist fest."]),
  U("Übersetze ins Arabische", "ein langer Fluss", ["نَهْرٌ طَوِيلٌ", "طَوِيلٌ نَهْرٌ", "نَهْرٌ الطَّوِيلُ", "النَّهْرُ طَوِيلٌ"], "Manʿūt + Naʿt.", ["Stellung.", "Bestimmtheit.", "Das ist ein Satz."])
]);
R("b2-31", 1, [
  E("هَذَا قَلَمٌ ____.", ["جَيِّدٌ", "الْجَيِّدُ", "جَيِّدًا", "جَيِّدَةٌ"], "Unbestimmt.", ["Bestimmtheit.", "Fall.", "Geschlecht."]),
  E("الْقَلَمُ ____ عِنْدِي.", ["الْجَيِّدُ", "جَيِّدٌ", "الْجَيِّدَ", "جَيِّدُ"], "Bestimmt wie الْقَلَمُ.", ["Dann wäre es Khabar.", "Fall.", "Falsch."]),
  E("هَذَا مُدَرِّسٌ ____.", ["جَدِيدٌ", "الْجَدِيدُ", "جُدُدٌ", "جَدِيدَةٌ"], "Unbestimmt.", ["Bestimmtheit.", "Zahl.", "Geschlecht."]),
  E("جَاءَ الطَّالِبُ ____.", ["الْجَدِيدُ", "جَدِيدٌ", "الْجَدِيدَ", "الْجَدِيدِ"], "Bestimmt, Nominativ.", ["Bestimmtheit.", "Fall.", "Fall."]),
  U("Mach es bestimmt", "سَيَّارَةٌ سَرِيعَةٌ", ["السَّيَّارَةُ السَّرِيعَةُ", "السَّيَّارَةُ سَرِيعَةٌ", "سَيَّارَةُ السَّرِيعَةِ", "السَّيَّارَةُ السَّرِيعَةٌ"], "Beide al.", ["Das wäre ein Satz.", "Iḍāfa.", "Kein Tanwīn mit al."]),
  U("Mach es unbestimmt", "الْوَلَدُ الصَّغِيرُ", ["وَلَدٌ صَغِيرٌ", "وَلَدٌ الصَّغِيرُ", "الْوَلَدُ صَغِيرٌ", "وَلَدُ صَغِيرٍ"], "Beide Tanwīn.", ["Bestimmtheit gleich.", "Das wäre ein Satz.", "Iḍāfa."]),
  F("Welche Wendung ist richtig?", "", ["الْبَابُ الْمَفْتُوحُ", "الْبَابُ مَفْتُوحُ", "بَابٌ الْمَفْتُوحُ", "الْبَابُ الْمَفْتُوحٌ"], "Gleiche Bestimmtheit.", ["Ohne Tanwīn.", "Bestimmtheit.", "Kein Tanwīn mit al."]),
  F("Was ist in الْكِتَابُ الْجَدِيدُ سَهْلٌ die Khabar?", "", ["سَهْلٌ", "الْجَدِيدُ", "الْكِتَابُ", "الْجَدِيدُ سَهْلٌ"], "Unbestimmt = Khabar.", ["Naʿt.", "Mubtadaʾ.", "Nur سَهْلٌ."])
]);
R("b2-31", 3, [
  E("لِي أَخٌ ____.", ["كَبِيرٌ", "كَبِيرَانِ", "كِبَارٌ", "كَبِيرَةٌ"], "Singular.", ["Dual.", "Plural.", "Feminin."]),
  E("لَهُ أُخْتَانِ ____.", ["صَغِيرَتَانِ", "صَغِيرَانِ", "صِغَارٌ", "صَغِيرَةٌ"], "Dual f.", ["Maskulin.", "Plural.", "Singular."]),
  E("لَهُمْ أَوْلَادٌ ____.", ["صِغَارٌ", "صَغِيرٌ", "صَغِيرَانِ", "صَغِيرَةٌ"], "Personen-Plural.", ["Singular.", "Dual.", "Sachregel."]),
  U("Plural", "طَالِبٌ ذَكِيٌّ", ["طُلَّابٌ أَذْكِيَاءُ", "طُلَّابٌ ذَكِيٌّ", "طُلَّابٌ ذَكِيَّةٌ", "طُلَّابٌ أَذْكِيَاءٌ"], "Personen-Plural, diptot.", ["Zahl.", "Sachregel.", "Kein Tanwīn."]),
  U("Dual", "مُهَنْدِسٌ مَاهِرٌ", ["مُهَنْدِسَانِ مَاهِرَانِ", "مُهَنْدِسَانِ مَاهِرٌ", "مُهَنْدِسُونَ مَاهِرُونَ", "مُهَنْدِسَيْنِ مَاهِرَيْنِ"], "Beide Dual, Nominativ.", ["Zahl.", "Plural.", "Fall."])
]);
R("b2-31", 4, [
  E("لِي أَخٌ كَبِيرٌ وَأُخْتٌ ____.", ["صَغِيرَةٌ", "صَغِيرٌ", "صِغَارٌ", "الصَّغِيرَةُ"], "Feminin.", ["Geschlecht.", "Zahl.", "Bestimmtheit."]),
  E("هَذِهِ لُغَةٌ ____.", ["سَهْلَةٌ", "سَهْلٌ", "السَّهْلَةُ", "سَهْلَاتٌ"], "Feminin.", ["Geschlecht.", "Bestimmtheit.", "Zahl."]),
  E("هَذَا يَوْمٌ ____.", ["جَمِيلٌ", "جَمِيلَةٌ", "الْجَمِيلُ", "جَمِيلًا"], "Maskulin.", ["Geschlecht.", "Bestimmtheit.", "Fall."]),
  U("Mach es feminin", "مُدَرِّسٌ جَدِيدٌ", ["مُدَرِّسَةٌ جَدِيدَةٌ", "مُدَرِّسَةٌ جَدِيدٌ", "مُدَرِّسٌ جَدِيدَةٌ", "مُدَرِّسَاتٌ جَدِيدَةٌ"], "Beide feminin.", ["Naʿt auch.", "Manʿūt auch.", "Zahl."]),
  U("Mach es feminin", "رَأَيْتُ الرَّجُلَ الطَّوِيلَ.", ["رَأَيْتُ الْمَرْأَةَ الطَّوِيلَةَ.", "رَأَيْتُ الْمَرْأَةَ الطَّوِيلَ.", "رَأَيْتُ الْمَرْأَةُ الطَّوِيلَةُ.", "رَأَيْتُ امْرَأَةً الطَّوِيلَةَ."], "Feminin, Akkusativ, bestimmt.", ["Geschlecht.", "Fall.", "Bestimmtheit."]),
  F("Welches Paar stimmt im Geschlecht überein?", "", ["عَيْنٌ جَمِيلَةٌ", "عَيْنٌ جَمِيلٌ", "رَأْسٌ كَبِيرَةٌ", "يَدٌ قَوِيٌّ"], "عَيْنٌ ist feminin.", ["عَيْنٌ ist feminin.", "رَأْسٌ ist maskulin.", "يَدٌ ist feminin."]),
  F("Welches Paar stimmt im Geschlecht überein?", "", ["شَمْسٌ حَارَّةٌ", "شَمْسٌ حَارٌّ", "قَمَرٌ جَمِيلَةٌ", "أَرْضٌ وَاسِعٌ"], "شَمْسٌ ist feminin.", ["شَمْسٌ ist feminin.", "قَمَرٌ ist maskulin.", "أَرْضٌ ist feminin."])
]);
R("b2-31", 5, [
  F("Was heißt الْكِتَابُ الْجَدِيدُ سَهْلٌ?", "", ["Das neue Buch ist leicht.", "Das Buch ist neu und leicht.", "das neue, leichte Buch", "Ein neues Buch ist leicht."], "Naʿt bestimmt, Khabar unbestimmt.", ["Dann zwei Khabar.", "Kein Satz.", "Bestimmt."]),
  F("Was heißt الْكِتَابُ جَدِيدٌ سَهْلٌ?", "", ["Das Buch ist neu und leicht.", "Das neue Buch ist leicht.", "das neue leichte Buch", "Ein neues Buch."], "Zwei unbestimmte Khabar.", ["Dann wäre جَدِيدٌ bestimmt.", "Kein Satz.", "Falsch."]),
  U("Mach daraus „das … Haus ist …“", "الْبَيْتُ كَبِيرٌ – جَمِيلٌ", ["الْبَيْتُ الْكَبِيرُ جَمِيلٌ.", "الْبَيْتُ كَبِيرٌ الْجَمِيلُ.", "بَيْتٌ كَبِيرٌ جَمِيلٌ.", "الْبَيْتُ الْكَبِيرُ الْجَمِيلُ."], "„Das große Haus ist schön.“", ["Bestimmtheit vertauscht.", "Kein Satz.", "Kein Satz."]),
  U("Übersetze ins Arabische", "Der neue Lehrer ist aus Ägypten.", ["الْمُدَرِّسُ الْجَدِيدُ مِنْ مِصْرَ.", "الْمُدَرِّسُ جَدِيدٌ مِنْ مِصْرَ.", "مُدَرِّسٌ جَدِيدٌ مِنْ مِصْرَ.", "الْمُدَرِّسُ الْجَدِيدِ مِنْ مِصْرَ."], "Naʿt bestimmt.", ["„Der Lehrer ist neu …“.", "Unbestimmt.", "Fall."]),
  F("Woran erkennt man, ob ein Adjektiv Naʿt oder Khabar ist?", "", ["Naʿt hat dieselbe Bestimmtheit wie das Nomen, Khabar ist unbestimmt", "an der Stellung allein", "am Geschlecht", "am Fall"], "الْكِتَابُ الْجَدِيدُ vs. الْكِتَابُ جَدِيدٌ.", ["Beide folgen.", "Beide gleich.", "Beide marfūʿ."]),
  U("Übersetze ins Deutsche", "الطَّالِبَةُ الْمُجْتَهِدَةُ نَاجِحَةٌ.", ["Die fleißige Studentin hat bestanden.", "Die Studentin ist fleißig und erfolgreich.", "die fleißige, erfolgreiche Studentin", "Eine fleißige Studentin."], "Naʿt + Khabar.", ["Zwei Khabar.", "Kein Satz.", "Bestimmt."])
]);

})(window.MADINA_PLUS = window.MADINA_PLUS || {});
