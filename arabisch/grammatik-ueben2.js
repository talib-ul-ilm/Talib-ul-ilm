/* Grammatik üben, Madina-Buch 2 – Einsetzen (Lücke im Satz zur Regel der Lektion) und Umformen
   (Satz in eine andere Form bringen). Gleiches Format wie grammatik-ueben1.js:
   q, ar = Satz, a (a[0] richtig), e = Erklärung, w = drei Gründe, warum a[1], a[2], a[3] falsch sind.
   Angehängt an window.MADINA_PLUS[Lektion] (arabic.js: Grammatik der Lektion, plus: true). */
(function (P) {
  function add(id, list) { P[id] = (P[id] || []).concat(list); }
  var ARAB = /[\u0600-\u06FF]/, DO = /^(Übersetze|Frag|Antworte|Verbinde|Mach|Setz|Ersetze|Bilde|Verneine|Stell|Sag)/;
  /* k = der Übungssatz, Teil der Kennung (viele Aufgaben haben denselben Fragetext) */
  /* E: Lücke im Satz; ein deutscher Hinweis in Klammern am Ende wandert in die Frage */
  function E(ar, a, e, w) {
    var m = ar.match(/^(.*?)\s*\(([^()]*[A-Za-zÄÖÜäöüß][^()]*)\)$/);
    return { q: m ? "Setze ein – „" + m[2] + "“:" : "Setze ein: Was gehört in die Lücke?", ar: m ? m[1] : ar, a: a, e: e, w: w, k: ar };
  }
  /* U: Umformen; ein deutscher Satz (zum Übersetzen) steht in der Frage, ein arabischer darunter */
  function U(was, x, a, e, w) {
    var head = DO.test(was) ? was : "Forme um – " + was;
    return ARAB.test(x) ? { q: head + ":", ar: x, a: a, e: e, w: w, k: x } : { q: head + ": „" + x + "“", a: a, e: e, w: w };
  }
  function F(q, ar, a, e, w) { return { q: q, ar: ar || undefined, a: a, e: e, w: w, k: ar || undefined }; }


add("b2-01", [
  E("إِنَّ ____ سَهْلٌ.", ["الْكِتَابَ", "الْكِتَابُ", "الْكِتَابِ", "كِتَابٌ"], "Nach إِنَّ wird das Nomen manṣūb (ismu inna).", ["Nach إِنَّ kein Nominativ.", "Kein Genitiv.", "Nominativ und unbestimmt."]),
  E("إِنَّ الْمُدَرِّسَ ____.", ["جَدِيدٌ", "جَدِيدًا", "جَدِيدٍ", "الْجَدِيدَ"], "Die khabaru inna bleibt marfūʿ.", ["Die Khabar bleibt im Nominativ.", "Kein Genitiv.", "Mit al kein Satz."]),
  E("إِنَّ ____ مَرِيضٌ. (Ḥāmid)", ["حَامِدًا", "حَامِدٌ", "حَامِدٍ", "حَامِدَ"], "Zwei Ḍammas werden zu zwei Fatḥas: حَامِدًا.", ["Nominativ passt nicht nach إِنَّ.", "Genitiv passt nicht.", "Das Tanwīn bleibt."]),
  E("____ غَنِيٌّ. (Du bist wirklich reich.)", ["إِنَّكَ", "إِنَّ أَنْتَ", "إِنَّهُ", "إِنِّي"], "Pronomen werden an إِنَّ gehängt: إِنَّكَ.", ["Das selbstständige Pronomen geht nicht nach إِنَّ.", "إِنَّهُ heißt „er“.", "إِنِّي heißt „ich“."]),
  E("لَعَلَّ ____ جَمِيلٌ. (Hoffentlich ist das Wetter schön.)", ["الْجَوَّ", "الْجَوُّ", "الْجَوِّ", "جَوٌّ"], "لَعَلَّ ist eine Schwester von إِنَّ → manṣūb.", ["Nach لَعَلَّ kein Nominativ.", "Kein Genitiv.", "Nominativ und unbestimmt."]),
  E("هُوَ رَجُلٌ ذُو ____. (… höflich)", ["خُلُقٍ", "خُلُقٌ", "خُلُقًا", "الْخُلُقُ"], "ذُو ist Muḍāf → das Wort danach ist majrūr.", ["Nach ذُو Genitiv.", "Nach ذُو Genitiv.", "Nominativ."]),
  E("هِيَ امْرَأَةٌ ____ عِلْمٍ.", ["ذَاتُ", "ذُو", "ذَوُو", "ذَوَاتُ"], "Feminin von ذُو = ذَاتُ.", ["ذُو ist männlich.", "ذَوُو ist männlicher Plural.", "ذَوَاتُ ist weiblicher Plural."]),
  E("أَطَبِيبٌ أَنْتَ ____ مُهَنْدِسٌ؟", ["أَمْ", "أَوْ", "وَ", "لَا"], "In einer Frage mit أَ heißt „oder“ أَمْ.", ["أَوْ nimmt man außerhalb von Fragen.", "وَ heißt „und“.", "لَا heißt „nein“."]),
  E("خُذْ هَذَا ____ ذَاكَ.", ["أَوْ", "أَمْ", "وَلَكِنَّ", "لَعَلَّ"], "Kein Fragesatz → „oder“ = أَوْ.", ["أَمْ nur in Fragen mit أَ.", "وَلَكِنَّ heißt „aber“.", "لَعَلَّ heißt „hoffentlich“."]),
  E("عِنْدِي مِائَةُ ____.", ["رِيَالٍ", "رِيَالَاتٍ", "رِيَالًا", "رِيَالٌ"], "Nach مِائَةٌ/أَلْفٌ: Singular, majrūr.", ["Nach 100 Singular.", "Das ist die Regel für كَمْ.", "Genitiv, nicht Nominativ."]),
  E("هَذَا الْكِتَابُ ____. (… ist teuer)", ["غَالٍ", "غَالِيٌ", "غَالِي", "غَالِيًا"], "غَالٍ steht für غَالِيٌ; hier marfūʿ (Khabar).", ["Das yāʾ mit Ḍamma fällt weg.", "Das Tanwīn fehlt.", "Akkusativ passt nicht."]),
  U("Setz إِنَّ davor", "الْمَسْجِدُ كَبِيرٌ.", ["إِنَّ الْمَسْجِدَ كَبِيرٌ.", "إِنَّ الْمَسْجِدُ كَبِيرٌ.", "إِنَّ الْمَسْجِدَ كَبِيرًا.", "إِنَّ الْمَسْجِدِ كَبِيرٌ."], "Ism manṣūb, Khabar bleibt marfūʿ.", ["Der Ism wird manṣūb.", "Die Khabar bleibt marfūʿ.", "Kein Genitiv."]),
  U("Setz إِنَّ davor", "أَنَا طَالِبٌ.", ["إِنِّي طَالِبٌ.", "إِنَّ أَنَا طَالِبٌ.", "إِنِّي طَالِبًا.", "إِنَّكَ طَالِبٌ."], "أَنَا → إِنِّي (oder إِنَّنِي).", ["Kein selbstständiges Pronomen nach إِنَّ.", "Die Khabar bleibt marfūʿ.", "إِنَّكَ heißt „du“."]),
  U("Setz لَعَلَّ davor", "الْمُدِيرُ فِي مَكْتَبِهِ.", ["لَعَلَّ الْمُدِيرَ فِي مَكْتَبِهِ.", "لَعَلَّ الْمُدِيرُ فِي مَكْتَبِهِ.", "لَعَلَّ الْمُدِيرِ فِي مَكْتَبِهِ.", "لَعَلَّ الْمُدِيرَ فِي مَكْتَبَهُ."], "لَعَلَّ wie إِنَّ: Ism manṣūb.", ["Nach لَعَلَّ manṣūb.", "Kein Genitiv.", "Nach فِي Genitiv: مَكْتَبِهِ."]),
  U("Mach es feminin", "هُوَ ذُو مَالٍ.", ["هِيَ ذَاتُ مَالٍ.", "هِيَ ذُو مَالٍ.", "هِيَ ذَاتُ مَالٌ.", "هِيَ ذَوَاتُ مَالٍ."], "ذُو → ذَاتُ; مَالٍ bleibt majrūr.", ["ذُو ist männlich.", "Nach ذَاتُ Genitiv.", "ذَوَاتُ ist Plural."]),
  U("Frag mit „oder“", "ذَهَبْتَ إِلَى مَكَّةَ أَوْ إِلَى جُدَّةَ.", ["أَإِلَى مَكَّةَ ذَهَبْتَ أَمْ إِلَى جُدَّةَ؟", "أَذَهَبْتَ إِلَى مَكَّةَ أَوْ إِلَى جُدَّةَ؟", "أَإِلَى مَكَّةَ ذَهَبْتَ أَوْ إِلَى جُدَّةَ؟", "إِلَى مَكَّةَ ذَهَبْتَ أَمْ أَإِلَى جُدَّةَ؟"], "أَ direkt vor das Erste, أَمْ vor das Zweite.", ["In der Frage أَمْ, und أَ vor das Gefragte.", "In der Frage heißt „oder“ أَمْ.", "أَ steht am Anfang."]),
  U("Übersetze ins Arabische", "Wahrlich, Allah ist allwissend.", ["إِنَّ اللَّهَ عَلِيمٌ.", "إِنَّ اللَّهُ عَلِيمٌ.", "إِنَّ اللَّهَ عَلِيمًا.", "إِنَّ اللَّهِ عَلِيمٌ."], "إِنَّ + Ism manṣūb + Khabar marfūʿ.", ["Der Ism wird manṣūb.", "Die Khabar bleibt marfūʿ.", "Kein Genitiv."]),
  F("Was für ein Satz ist خَرَجَ بِلَالٌ?", "", ["Verbalsatz (جُمْلَةٌ فِعْلِيَّةٌ)", "Nominalsatz (جُمْلَةٌ اسْمِيَّةٌ)", "kein Satz", "Fragesatz"], "Er beginnt mit einem Verb.", ["Ein Nominalsatz beginnt mit einem Nomen.", "Verb + Subjekt ist ein Satz.", "Es gibt kein Fragewort."])
]);

add("b2-02", [
  E("لَيْسَ الْبَيْتُ ____. (Das Haus ist nicht neu.)", ["بِجَدِيدٍ", "جَدِيدٌ", "بِجَدِيدٌ", "الْجَدِيدُ"], "Vor die khabaru laisa kommt meist بِـ → majrūr.", ["Nach لَيْسَ ist sie nicht marfūʿ.", "Nach بِـ Genitiv.", "Mit al passt es nicht."]),
  E("____ زَيْنَبُ بِمَرِيضَةٍ.", ["لَيْسَتْ", "لَيْسَ", "لَسْتُ", "لَسْتِ"], "Feminines Subjekt → لَيْسَتْ.", ["لَيْسَ ist männlich.", "لَسْتُ heißt „ich bin nicht“.", "لَسْتِ heißt „du (w.) bist nicht“."]),
  E("____ السَّيَّارَةُ بِقَدِيمَةٍ.", ["لَيْسَتِ", "لَيْسَتْ", "لَيْسَ", "لَسْتِ"], "Vor al wird das Sukūn zum Kasra: لَيْسَتِ السَّيَّارَةُ.", ["Vor al wird das Sukūn zum Kasra.", "Das Subjekt ist weiblich.", "Das heißt „du (w.) bist nicht“."]),
  E("أَنَا ____ بِمُهَنْدِسٍ.", ["لَسْتُ", "لَيْسَ", "لَسْتَ", "لَيْسَتْ"], "„ich bin nicht“ = لَسْتُ.", ["لَيْسَ ist „er“.", "لَسْتَ ist „du“.", "لَيْسَتْ ist „sie“."]),
  E("لَسْتُ ____ الْهِنْدِ.", ["مِنَ", "بِمِنَ", "بِالْ", "مِنْ"], "Präpositionalgruppe → kein بِـ.", ["Kein بِـ vor einer Präposition.", "Es fehlt مِنْ.", "Vor al wird مِنْ zu مِنَ."]),
  E("لَيْسَ لِي ____. (Ich habe keine Brüder.)", ["إِخْوَةٌ", "إِخْوَةً", "بِإِخْوَةٍ", "إِخْوَةٍ"], "Hier ist إِخْوَةٌ ismu laisa → marfūʿ.", ["Der Ism von لَيْسَ ist marfūʿ.", "بِـ steht nur vor der Khabar.", "Kein Genitiv."]),
  E("إِنَّ لِي ____. (Ich habe Brüder.)", ["إِخْوَةً", "إِخْوَةٌ", "إِخْوَةٍ", "بِإِخْوَةٍ"], "إِخْوَةً ist ismu inna → manṣūb (auch wenn er hinten steht).", ["Der Ism von إِنَّ ist manṣūb.", "Kein Genitiv.", "Kein بِـ bei إِنَّ."]),
  E("هَذَا بِلَالُ ____ حَامِدٍ. (Bilāl, Sohn von Ḥāmid)", ["بْنُ", "ابْنُ", "بْنٌ", "ابْنٌ"], "Zwischen zwei Namen: ابْنٌ ohne Alif, ohne Tanwīn.", ["Das Alif fällt zwischen zwei Namen weg.", "Kein Tanwīn (Muḍāf).", "Alif und Tanwīn – beides falsch."]),
  U("Verneine mit لَيْسَ", "الطَّالِبُ مُجْتَهِدٌ.", ["لَيْسَ الطَّالِبُ بِمُجْتَهِدٍ.", "لَيْسَ الطَّالِبُ مُجْتَهِدٌ.", "لَيْسَ الطَّالِبُ بِمُجْتَهِدٌ.", "لَيْسَ الطَّالِبِ بِمُجْتَهِدٍ."], "لَيْسَ + Ism (marfūʿ) + بِـ + Khabar (majrūr).", ["Die Khabar braucht hier بِـ oder Akkusativ.", "Nach بِـ Genitiv.", "Der Ism bleibt marfūʿ."]),
  U("Verneine mit لَيْسَ", "الْغُرْفَةُ وَاسِعَةٌ.", ["لَيْسَتِ الْغُرْفَةُ بِوَاسِعَةٍ.", "لَيْسَ الْغُرْفَةُ بِوَاسِعَةٍ.", "لَيْسَتْ الْغُرْفَةُ بِوَاسِعَةٍ.", "لَيْسَتِ الْغُرْفَةُ وَاسِعَةٌ."], "Weiblich → لَيْسَتِ (Kasra vor al).", ["Das Verb muss weiblich sein.", "Vor al Kasra statt Sukūn.", "Die Khabar braucht بِـ."]),
  U("Verneine", "أَنَا طَبِيبٌ.", ["لَسْتُ بِطَبِيبٍ.", "لَيْسَ أَنَا بِطَبِيبٍ.", "لَسْتُ طَبِيبٌ.", "لَسْتَ بِطَبِيبٍ."], "„ich bin nicht“ = لَسْتُ + بِـ.", ["لَيْسَ verbindet sich mit dem Pronomen.", "Die Khabar braucht بِـ.", "لَسْتَ heißt „du bist nicht“."]),
  U("Verneine", "أَنْتَ فِي الْفَصْلِ.", ["لَسْتَ فِي الْفَصْلِ.", "لَسْتَ بِفِي الْفَصْلِ.", "لَسْتُ فِي الْفَصْلِ.", "لَيْسَ أَنْتَ فِي الْفَصْلِ."], "Präpositionalgruppe → kein بِـ.", ["Kein بِـ vor فِي.", "لَسْتُ heißt „ich“.", "لَيْسَ verbindet sich mit dem Pronomen."]),
  U("Verneine", "لِي سَيَّارَةٌ.", ["لَيْسَ لِي سَيَّارَةٌ.", "لَيْسَ لِي سَيَّارَةً.", "لَسْتُ لِي سَيَّارَةٌ.", "لَيْسَ لِي بِسَيَّارَةٍ."], "سَيَّارَةٌ ist ismu laisa und bleibt marfūʿ.", ["Der Ism von لَيْسَ ist marfūʿ.", "لَسْتُ passt hier nicht.", "بِـ nur vor der Khabar."]),
  U("Statt „ich“: „wir“", "لَسْتُ بِمَرِيضٍ.", ["لَسْنَا بِمَرْضَى.", "لَسْتُمْ بِمَرْضَى.", "لَسْنَا بِمَرِيضٍ.", "لَيْسَ نَحْنُ بِمَرْضَى."], "لَسْنَا + Plural مَرْضَى.", ["لَسْتُمْ heißt „ihr“.", "Die Khabar muss Plural werden.", "لَيْسَ verbindet sich mit dem Pronomen."]),
  U("Übersetze ins Arabische", "Der Fluss ist nicht weit.", ["لَيْسَ النَّهْرُ بِبَعِيدٍ.", "لَيْسَ النَّهْرُ بَعِيدٌ.", "لَيْسَتِ النَّهْرُ بِبَعِيدٍ.", "لَيْسَ النَّهْرَ بِبَعِيدٍ."], "لَيْسَ + Ism marfūʿ + بِـ + Khabar majrūr.", ["Die Khabar braucht بِـ.", "النَّهْرُ ist männlich.", "Der Ism von لَيْسَ ist marfūʿ."]),
  F("Was ist in لَسْتُ بِمُهَنْدِسٍ der ismu laisa?", "", ["das تُ in لَسْتُ", "مُهَنْدِسٍ", "بِـ", "Es gibt keinen."], "Das angehängte Pronomen تُ ist der Ism.", ["مُهَنْدِسٍ ist die Khabar.", "بِـ ist eine Präposition.", "Jedes لَيْسَ hat einen Ism."])
]);

add("b2-03", [
  E("حَامِدٌ ____ مِنْ بِلَالٍ. (größer)", ["أَطْوَلُ", "أَطْوَلٌ", "طَوِيلٌ", "الْأَطْوَلُ"], "Komparativ أَفْعَلُ, diptot, + مِنْ.", ["أَفْعَلُ hat kein Tanwīn.", "طَوِيلٌ ist kein Komparativ.", "Mit al kein „als“."]),
  E("آمِنَةُ ____ مِنْ أُخْتِهَا. (jünger)", ["أَصْغَرُ", "صُغْرَى", "أَصْغَرَةُ", "صَغِيرَةٌ"], "أَفْعَلُ bleibt auch für Feminines gleich.", ["Mit مِنْ bleibt أَفْعَلُ unverändert.", "Die Form gibt es nicht.", "Kein Komparativ."]),
  E("أَنْتَ أَحْسَنُ ____. (… als ich)", ["مِنِّي", "مِنِي", "مِنْ أَنَا", "مِنْكَ"], "مِنْ + ـِي → مِنِّي (mit Shadda).", ["Es fehlt das Shadda.", "Kein selbstständiges Pronomen nach مِنْ.", "Das heißt „als du“."]),
  E("إِبْرَاهِيمُ أَحْسَنُ ____ فِي الْمَدْرَسَةِ. (der beste Student)", ["طَالِبٍ", "طَالِبٌ", "الطَّالِبُ", "طُلَّابٌ"], "Superlativ: أَفْعَلُ + Nomen im Genitiv.", ["Das Nomen nach أَفْعَلُ ist majrūr.", "Kein al nach أَفْعَلُ hier.", "Singular, majrūr."]),
  E("بِلَالٌ مُجْتَهِدٌ وَلَكِنَّ ____ كَسْلَانُ.", ["حَامِدًا", "حَامِدٌ", "حَامِدٍ", "حَامِدُ"], "لَكِنَّ ist Schwester von إِنَّ → manṣūb.", ["Nach لَكِنَّ manṣūb.", "Kein Genitiv.", "Kein Nominativ."]),
  E("كَأَنَّ ____ مَرِيضٌ.", ["الْإِمَامَ", "الْإِمَامُ", "الْإِمَامِ", "إِمَامٌ"], "كَأَنَّ → manṣūb.", ["Nach كَأَنَّ manṣūb.", "Kein Genitiv.", "Nominativ."]),
  E("فِي الْفَصْلِ ____ طَالِبًا. (13)", ["ثَلَاثَةَ عَشَرَ", "ثَلَاثَ عَشَرَ", "ثَلَاثَةَ عَشْرَةَ", "ثَلَاثُ عَشْرَةَ"], "13–19 bei männlichem Gezähltem: erster Teil mit ة, zweiter عَشَرَ.", ["Der erste Teil braucht ة.", "Der zweite Teil ist männlich: عَشَرَ.", "Das ist die weibliche Form."]),
  E("رَأَيْتُ أَحَدَ عَشَرَ ____.", ["كَوْكَبًا", "كَوَاكِبَ", "كَوْكَبٍ", "كَوْكَبٌ"], "11–19: Gezähltes im Singular, manṣūb.", ["Nach 11–19 Singular.", "manṣūb, nicht majrūr.", "manṣūb, nicht marfūʿ."]),
  E("عِنْدِي ____ رِيَالًا. (12)", ["اثْنَا عَشَرَ", "اثْنَتَا عَشْرَةَ", "اثْنَيْ عَشَرَ", "اثْنَانِ عَشَرَ"], "12 männlich, Nominativ: اثْنَا عَشَرَ.", ["Das ist weiblich.", "اثْنَيْ steht im Akkusativ/Genitiv.", "Die Form gibt es nicht."]),
  E("هَذَا الدَّرْسُ ____. (der dritte)", ["الثَّالِثُ", "الثَّلَاثَةُ", "ثَالِثٌ", "الثَّلَاثُ"], "Ordnungszahl nach فَاعِلٌ, bestimmt wie das Nomen.", ["Das ist die Grundzahl.", "Bestimmtheit stimmt nicht.", "Das ist die Grundzahl."]),
  E("أَلَيْسَ هَذَا كِتَابَكَ؟ – ____، هُوَ كِتَابِي.", ["بَلَى", "نَعَمْ", "لَا", "أَمْ"], "Auf eine verneinte Frage antwortet man „doch“ mit بَلَى.", ["نَعَمْ würde die Verneinung bestätigen.", "لَا passt nicht zu „es ist mein Buch“.", "أَمْ heißt „oder“."]),
  U("Mach einen Vergleich: „… größer als …“", "الْمَسْجِدُ كَبِيرٌ. – الْبَيْتُ", ["الْمَسْجِدُ أَكْبَرُ مِنَ الْبَيْتِ.", "الْمَسْجِدُ أَكْبَرٌ مِنَ الْبَيْتِ.", "الْمَسْجِدُ كَبِيرٌ مِنَ الْبَيْتِ.", "الْمَسْجِدُ الْأَكْبَرُ مِنَ الْبَيْتِ."], "كَبِيرٌ → أَكْبَرُ + مِنْ.", ["أَفْعَلُ hat kein Tanwīn.", "Der Komparativ ist أَكْبَرُ.", "Mit al kein Vergleich."]),
  U("Mach einen Superlativ", "الْأَزْهَرُ جَامِعَةٌ قَدِيمَةٌ.", ["الْأَزْهَرُ أَقْدَمُ جَامِعَةٍ.", "الْأَزْهَرُ أَقْدَمُ جَامِعَةٌ.", "الْأَزْهَرُ قَدِيمَةُ جَامِعَةٍ.", "الْأَزْهَرُ أَقْدَمُ الْجَامِعَةُ."], "أَفْعَلُ + unbestimmtes Nomen im Genitiv.", ["Das Nomen ist majrūr.", "Superlativ mit أَفْعَلُ.", "Genitiv, und unbestimmt."]),
  U("Setz لَكِنَّ ein", "أَخِي مُتَزَوِّجٌ وَأَنَا عَزَبٌ.", ["أَخِي مُتَزَوِّجٌ وَلَكِنِّي عَزَبٌ.", "أَخِي مُتَزَوِّجٌ وَلَكِنَّ أَنَا عَزَبٌ.", "أَخِي مُتَزَوِّجٌ وَلَكِنِّي عَزَبًا.", "أَخِي مُتَزَوِّجٌ وَلَكِنَّكَ عَزَبٌ."], "أَنَا → ـنِي an لَكِنَّ: لَكِنِّي.", ["Kein selbstständiges Pronomen.", "Die Khabar bleibt marfūʿ.", "لَكِنَّكَ heißt „aber du“."]),
  U("Mach es weiblich (Gezähltes: Studentinnen)", "خَمْسَةَ عَشَرَ طَالِبًا", ["خَمْسَ عَشْرَةَ طَالِبَةً", "خَمْسَةَ عَشْرَةَ طَالِبَةً", "خَمْسَ عَشَرَ طَالِبَةً", "خَمْسَ عَشْرَةَ طَالِبَاتٍ"], "Erster Teil ohne ة, zweiter عَشْرَةَ; Gezähltes Singular manṣūb.", ["Der erste Teil verliert ة.", "Der zweite Teil wird عَشْرَةَ.", "Singular, manṣūb."]),
  U("Übersetze ins Arabische", "Ich habe zwanzig Bücher.", ["عِنْدِي عِشْرُونَ كِتَابًا.", "عِنْدِي عِشْرُونَ كُتُبًا.", "عِنْدِي عِشْرُونَ كِتَابٍ.", "عِنْدِي عِشْرِينَ كِتَابًا."], "عِشْرُونَ + Singular manṣūb.", ["Singular nach 20.", "manṣūb, nicht majrūr.", "Hier marfūʿ: عِشْرُونَ."]),
  F("Welche Ordnungszahl ist richtig? „der zweite Tag“", "", ["الْيَوْمُ الثَّانِي", "الْيَوْمُ الثَّانٍ", "الْيَوْمُ الِاثْنَانِ", "الْيَوْمُ ثَانٍ"], "ثَانٍ mit Artikel: الثَّانِي.", ["Mit al kehrt das ي zurück.", "Das ist die Grundzahl.", "Bestimmtheit stimmt nicht."])
]);

add("b2-04", [
  E("____ آمِنَةُ إِلَى السُّوقِ.", ["ذَهَبَتْ", "ذَهَبَ", "ذَهَبْتِ", "ذَهَبْنَ"], "Feminines Subjekt → ذَهَبَتْ.", ["Das Subjekt ist weiblich.", "Das heißt „du (w.) gingst“.", "Verb vorne bleibt Singular."]),
  E("أَيْنَ بِلَالٌ وَحَامِدٌ وَخَالِدٌ؟ – ____ إِلَى السُّوقِ.", ["ذَهَبُوا", "ذَهَبَ", "ذَهَبْنَ", "ذَهَبْنَا"], "Mehrere Männer, Pronomen als Subjekt → ذَهَبُوا.", ["Ohne nachfolgendes Subjekt braucht es die Pluralform.", "ذَهَبْنَ ist für Frauen.", "ذَهَبْنَا heißt „wir“."]),
  E("أَيْنَ آمِنَةُ وَفَاطِمَةُ وَزَيْنَبُ؟ – ____ إِلَى الْمَدْرَسَةِ.", ["ذَهَبْنَ", "ذَهَبُوا", "ذَهَبَتْ", "ذَهَبْتُنَّ"], "Mehrere Frauen → ذَهَبْنَ.", ["ذَهَبُوا ist männlich.", "ذَهَبَتْ ist Singular.", "ذَهَبْتُنَّ heißt „ihr“."]),
  E("____ ذَهَبْتُ إِلَى السُّوقِ. (Ich ging nicht …)", ["مَا", "لَيْسَ", "لَا", "لَمْ"], "Das Perfekt wird mit مَا verneint.", ["لَيْسَ verneint Nominalsätze.", "لَا verneint hier nicht das Perfekt.", "لَمْ kommt erst später."]),
  E("أَلَسْتَ بِمُسْلِمٍ؟ – ____، أَنَا مُسْلِمٌ.", ["بَلَى", "نَعَمْ", "لَا", "أَمْ"], "„doch“ auf eine verneinte Frage = بَلَى.", ["نَعَمْ würde „ich bin kein Muslim“ bestätigen.", "لَا passt nicht.", "أَمْ heißt „oder“."]),
  E("مَا خَرَجْتُ مِنَ الْبَيْتِ لِأَنَّ ____ بَارِدٌ.", ["الْجَوَّ", "الْجَوُّ", "الْجَوِّ", "جَوٌّ"], "لِأَنَّ → Nomen manṣūb.", ["Nach أَنَّ manṣūb.", "Kein Genitiv.", "Nominativ."]),
  E("ذَهَبَ إِلَى الْمُسْتَشْفَى ____ مَرِيضٌ.", ["لِأَنَّهُ", "لِأَنَّ هُوَ", "لِأَنَّهَا", "لِأَنِّي"], "Pronomen an أَنَّ: لِأَنَّهُ.", ["Kein selbstständiges Pronomen nach أَنَّ.", "ـهَا ist weiblich.", "ـنِي heißt „ich“."]),
  E("دَخَلَ بِلَالٌ وَلَكِنَّهُ ____ جَلَسَ.", ["مَا", "لَا", "لَيْسَ", "لَمْ"], "Perfekt verneint mit مَا.", ["لَا verneint hier nicht.", "لَيْسَ nicht vor Verben.", "لَمْ kommt später."]),
  U("Verneine", "ذَهَبْتُ إِلَى الْمَدْرَسَةِ.", ["مَا ذَهَبْتُ إِلَى الْمَدْرَسَةِ.", "لَيْسَ ذَهَبْتُ إِلَى الْمَدْرَسَةِ.", "لَسْتُ ذَهَبْتُ إِلَى الْمَدْرَسَةِ.", "ذَهَبْتُ مَا إِلَى الْمَدْرَسَةِ."], "مَا vor das Perfekt.", ["لَيْسَ nicht vor Verben.", "لَسْتُ nicht vor Verben.", "مَا steht vor dem Verb."]),
  U("Mehrere Männer statt einem", "رَجَعَ مِنَ السُّوقِ.", ["رَجَعُوا مِنَ السُّوقِ.", "رَجَعْنَ مِنَ السُّوقِ.", "رَجَعْتُمْ مِنَ السُّوقِ.", "رَجَعَا مِنَ السُّوقِ."], "„sie (m.) kehrten zurück“ = رَجَعُوا.", ["Das ist für Frauen.", "Das heißt „ihr“.", "Das ist der Dual."]),
  U("Mehrere Frauen statt einer", "خَرَجَتْ مِنَ الْفَصْلِ.", ["خَرَجْنَ مِنَ الْفَصْلِ.", "خَرَجُوا مِنَ الْفَصْلِ.", "خَرَجَتْنَ مِنَ الْفَصْلِ.", "خَرَجْنَا مِنَ الْفَصْلِ."], "„sie (w.) gingen hinaus“ = خَرَجْنَ.", ["Das ist männlich.", "Die Form gibt es nicht.", "Das heißt „wir“."]),
  U("Statt „er“: „du (m.)“", "رَجَعَ إِلَى الْبَيْتِ.", ["رَجَعْتَ إِلَى الْبَيْتِ.", "رَجَعْتُ إِلَى الْبَيْتِ.", "رَجَعَتْ إِلَى الْبَيْتِ.", "رَجَعْتِ إِلَى الْبَيْتِ."], "-ta: رَجَعْتَ.", ["Das ist „ich“.", "Das ist „sie“.", "Das ist „du (w.)“."]),
  U("Verbinde mit لِأَنَّ", "مَا ذَهَبَ إِلَى الْمَدْرَسَةِ. هُوَ مَرِيضٌ.", ["مَا ذَهَبَ إِلَى الْمَدْرَسَةِ لِأَنَّهُ مَرِيضٌ.", "مَا ذَهَبَ إِلَى الْمَدْرَسَةِ لِأَنَّ هُوَ مَرِيضٌ.", "مَا ذَهَبَ إِلَى الْمَدْرَسَةِ لِأَنَّهُ مَرِيضًا.", "مَا ذَهَبَ إِلَى الْمَدْرَسَةِ لِأَنَّهَا مَرِيضٌ."], "هُوَ → ـهُ an لِأَنَّ; Khabar marfūʿ.", ["Kein selbstständiges Pronomen.", "Die Khabar bleibt marfūʿ.", "ـهَا ist weiblich."]),
  U("Übersetze ins Arabische", "Wir aßen nicht, weil das Essen kalt war.", ["مَا أَكَلْنَا لِأَنَّ الطَّعَامَ بَارِدٌ.", "مَا أَكَلْنَا لِأَنَّ الطَّعَامُ بَارِدٌ.", "لَيْسَ أَكَلْنَا لِأَنَّ الطَّعَامَ بَارِدٌ.", "مَا أَكَلُوا لِأَنَّ الطَّعَامَ بَارِدٌ."], "مَا + Perfekt; لِأَنَّ + manṣūb.", ["Nach أَنَّ manṣūb.", "لَيْسَ nicht vor Verben.", "أَكَلُوا heißt „sie aßen“."]),
  F("Was ist das Subjekt in ذَهَبُوا?", "", ["das wāw (و)", "das Alif (ا)", "ein unsichtbares Pronomen", "ذَهَبَ"], "Das wāw ist das Pronomen-Subjekt; das Alif wird nicht gesprochen.", ["Das Alif ist nur Schreibung.", "Unsichtbar ist es bei ذَهَبَ.", "Das ist das Verb selbst."])
]);

add("b2-05", [
  E("فَتَحَ الْوَلَدُ ____.", ["الْبَابَ", "الْبَابُ", "الْبَابِ", "بَابٌ"], "Mafʿūl bihi → manṣūb.", ["Nominativ – das ist der Fāʿil.", "Kein Genitiv.", "Nominativ."]),
  E("شَرِبَ ____ الْمَاءَ.", ["الرَّجُلُ", "الرَّجُلَ", "الرَّجُلِ", "رَجُلًا"], "Fāʿil → marfūʿ.", ["Akkusativ ist das Objekt.", "Kein Genitiv.", "Akkusativ."]),
  E("رَأَيْتُ ____.", ["حَامِدًا", "حَامِدٌ", "حَامِدٍ", "حَامِدَ"], "Objekt mit Tanwīn: -an.", ["Nominativ.", "Genitiv.", "Das Tanwīn bleibt."]),
  E("سَأَلَتِ الْمُدِيرَةُ ____.", ["زَيْنَبَ", "زَيْنَبُ", "زَيْنَبًا", "زَيْنَبِ"], "Objekt; Diptoton → nur Fatḥa.", ["Nominativ.", "Diptoton: kein Tanwīn.", "Genitiv."]),
  E("سَأَلَ الْوَلَدُ ____.", ["أُمَّهُ", "أُمُّهُ", "أُمِّهِ", "أُمَّهَا"], "Objekt mit Pronomen: a-Endung am Wort: umm-a-hū.", ["Nominativ.", "Genitiv.", "ـهَا heißt „ihre“."]),
  E("رَأَيْتُ بِلَالًا وَ____. (… und fragte ihn)", ["سَأَلْتُهُ", "سَأَلْتُ هُوَ", "سَأَلَهُ", "سَأَلْتَهُ"], "Objekt-Pronomen am Verb: سَأَلْتُهُ.", ["Kein selbstständiges Pronomen als Objekt.", "سَأَلَهُ heißt „er fragte ihn“.", "سَأَلْتَهُ heißt „du fragtest ihn“."]),
  E("____ الطُّلَّابُ. (Die Studenten gingen.)", ["ذَهَبَ", "ذَهَبُوا", "ذَهَبْنَ", "ذَهَبَتْ"], "Verb vor pluralem Fāʿil → Singular.", ["Ein Verb kann keine zwei Fāʿil haben.", "Das ist für Frauen.", "Personen (m.) – nicht feminin."]),
  E("الطُّلَّابُ ____.", ["ذَهَبُوا", "ذَهَبَ", "ذَهَبْنَ", "ذَهَبَتْ"], "Nominalsatz: الطُّلَّابُ Mubtadaʾ, ذَهَبُوا Khabar.", ["Nach dem Mubtadaʾ braucht das Verb das Pluralpronomen.", "Das ist für Frauen.", "Personen (m.) – nicht feminin."]),
  E("____ الْبَنَاتُ.", ["ذَهَبَتِ", "ذَهَبْنَ", "ذَهَبُوا", "ذَهَبَ"], "Verb vorne, weiblich: ذَهَبَتِ (Kasra vor al).", ["Verb vorne bleibt Singular.", "Das ist männlich.", "Das Verb muss weiblich sein."]),
  U("Mach das Objekt zum Pronomen", "فَتَحَ الطَّالِبُ الْكِتَابَ.", ["فَتَحَهُ الطَّالِبُ.", "فَتَحَ الطَّالِبُ هُوَ.", "فَتَحَهَا الطَّالِبُ.", "فَتَحَهُ الطَّالِبَ."], "Das Objekt-Pronomen hängt am Verb.", ["Kein selbstständiges Pronomen als Objekt.", "الْكِتَابُ ist männlich.", "Der Fāʿil bleibt marfūʿ."]),
  U("Statt „ein Mann“: „die Männer“ (Verb vorne)", "خَرَجَ رَجُلٌ.", ["خَرَجَ الرِّجَالُ.", "خَرَجُوا الرِّجَالُ.", "خَرَجَتِ الرِّجَالُ.", "خَرَجَ الرِّجَالَ."], "Verb vor Fāʿil bleibt Singular.", ["Ein Verb kann keine zwei Fāʿil haben.", "Personen – nicht feminin.", "Der Fāʿil ist marfūʿ."]),
  U("Mach daraus einen Nominalsatz", "ذَهَبَ الطُّلَّابُ.", ["الطُّلَّابُ ذَهَبُوا.", "الطُّلَّابُ ذَهَبَ.", "الطُّلَّابَ ذَهَبُوا.", "الطُّلَّابُ ذَهَبْنَ."], "Mubtadaʾ vorne, Verb mit Pluralpronomen als Khabar.", ["Das Verb braucht -ū.", "Mubtadaʾ marfūʿ.", "Das ist für Frauen."]),
  U("Füge ein Objekt hinzu: „das Wasser“", "شَرِبَ حَامِدٌ.", ["شَرِبَ حَامِدٌ الْمَاءَ.", "شَرِبَ حَامِدٌ الْمَاءُ.", "شَرِبَ حَامِدًا الْمَاءَ.", "شَرِبَ حَامِدٌ الْمَاءِ."], "Objekt manṣūb; gesprochen ḥāmidu-n-i-l-māʾa.", ["Das Objekt ist manṣūb.", "Der Fāʿil bleibt marfūʿ.", "Kein Genitiv."]),
  U("Übersetze ins Arabische", "Der Junge hörte den Gebetsruf.", ["سَمِعَ الْوَلَدُ الْأَذَانَ.", "سَمِعَ الْوَلَدَ الْأَذَانُ.", "سَمِعَ الْوَلَدُ الْأَذَانُ.", "سَمِعَ الْوَلَدُ الْأَذَانِ."], "Fāʿil marfūʿ, Mafʿūl manṣūb.", ["Fälle vertauscht.", "Das Objekt ist manṣūb.", "Kein Genitiv."]),
  F("Welcher Vokal hat der zweite Radikal in فَهِمَ?", "فَهِمَ", ["Kasra", "Fatḥa", "Ḍamma", "Sukūn"], "فَهِمَ – fahima: zweiter Radikal mit Kasra (wie شَرِبَ، حَفِظَ).", ["Fatḥa wie in ذَهَبَ.", "Ḍamma wie in كَبُرَ.", "Im Perfekt hat er einen Vokal."]),
  F("Wie spricht man das? سَأَلَ بِلَالٌ ابْنَهُ", "", ["bilālun-i-bnahū", "bilālun ibnahū", "bilālu-bnahū", "bilālan-ibnahū"], "Vor Hamzat al-waṣl wird nach dem Tanwīn ein Kasra eingeschoben.", ["Das Hamzat al-waṣl wird nicht gesprochen.", "Das Tanwīn bleibt.", "Der Fāʿil ist marfūʿ (-un)."])
]);

add("b2-06", [
  E("أَيْنَ ____ يَا زَيْنَبُ؟", ["ذَهَبْتِ", "ذَهَبَتْ", "ذَهَبْتَ", "ذَهَبْتُ"], "„du (w.) gingst“ = ذَهَبْتِ.", ["Das heißt „sie ging“.", "Das ist für einen Mann.", "Das heißt „ich ging“."]),
  E("فِي الْفَصْلِ ____ طَالِبَةً. (11)", ["إِحْدَى عَشْرَةَ", "أَحَدَ عَشَرَ", "إِحْدَى عَشَرَ", "أَحَدَ عَشْرَةَ"], "11 weiblich: beide Teile weiblich.", ["Das ist männlich.", "Der Zehner muss weiblich sein.", "Der Einer muss weiblich sein."]),
  E("قَرَأْتُ ____ مَجَلَّةً. (15)", ["خَمْسَ عَشْرَةَ", "خَمْسَةَ عَشَرَ", "خَمْسَةَ عَشْرَةَ", "خَمْسَ عَشَرَ"], "13–19 weiblich: erster Teil ohne ة, Zehner عَشْرَةَ.", ["Das ist männlich.", "Der Einer verliert ة.", "Der Zehner muss عَشْرَةَ sein."]),
  E("فِي هَذِهِ الْعِمَارَةِ ____ شَقَّةً. (18)", ["ثَمَانِيَ عَشْرَةَ", "ثَمَانِيَةَ عَشَرَ", "ثَمَانِي عَشَرَ", "ثَمَانِيَةَ عَشْرَةَ"], "18 weiblich: ثَمَانِيَ عَشْرَةَ.", ["Das ist männlich.", "Der Zehner muss weiblich sein.", "Der Einer ohne ة."]),
  E("____ كِتَابٍ قَرَأْتَ؟", ["أَيَّ", "أَيُّ", "أَيِّ", "أَيًّا"], "أَيُّ ist hier Objekt → manṣūb.", ["Objekt → manṣūb.", "Keine Präposition davor.", "Muḍāf → kein Tanwīn."]),
  E("بِ____ قَلَمٍ كَتَبْتَ؟", ["أَيِّ", "أَيَّ", "أَيُّ", "أَيٍّ"], "Nach بِـ → majrūr.", ["Nach بِـ majrūr.", "Nach بِـ majrūr.", "Muḍāf → kein Tanwīn."]),
  E("أَظُنُّ أَنَّ ____ مَرِيضٌ.", ["حَامِدًا", "حَامِدٌ", "حَامِدٍ", "حَامِدَ"], "أَنَّ → Ism manṣūb.", ["Nach أَنَّ manṣūb.", "Kein Genitiv.", "Das Tanwīn bleibt."]),
  E("قَالَ: ____ أَحْسَنُ طَالِبٍ فِي الْفَصْلِ.", ["إِنَّكَ", "أَنَّكَ", "لَعَلَّكَ", "كَأَنَّكَ"], "Nach قَالَ steht إِنَّ, nicht أَنَّ.", ["Nach قَالَ nicht أَنَّ.", "„hoffentlich“ passt nicht.", "„als ob“ passt nicht."]),
  E("الرِّجَالُ ____. (… sind hungrig)", ["جِيَاعٌ", "جَوْعَانُونَ", "جَوْعَى", "جَوْعَانُ"], "Plural von جَوْعَانُ = جِيَاعٌ.", ["Die Form gibt es nicht.", "جَوْعَى ist feminin Singular.", "Singular."]),
  E("يَا زَيْنَبُ، ____ الْكِتَابَ. (gib)", ["هَاتِي", "هَاتِ", "هَاتُوا", "هَاتِينَ"], "Zu einer Frau: هَاتِي.", ["هَاتِ ist für einen Mann.", "هَاتُوا ist Plural.", "هَاتِينَ ist für mehrere Frauen."]),
  U("Mach es weiblich (Gezähltes: Mädchen)", "أَحَدَ عَشَرَ وَلَدًا", ["إِحْدَى عَشْرَةَ بِنْتًا", "أَحَدَ عَشَرَ بِنْتًا", "إِحْدَى عَشَرَ بِنْتًا", "إِحْدَى عَشْرَةَ بَنَاتٍ"], "11: beide Teile weiblich; Gezähltes Singular manṣūb.", ["Die Zahl muss weiblich werden.", "Auch der Zehner wird weiblich.", "Singular, manṣūb."]),
  U("Setz أَظُنُّ أَنَّ davor", "أَنْتَ مُتْعَبٌ.", ["أَظُنُّ أَنَّكَ مُتْعَبٌ.", "أَظُنُّ أَنَّ أَنْتَ مُتْعَبٌ.", "أَظُنُّ أَنَّكَ مُتْعَبًا.", "أَظُنُّ إِنَّكَ مُتْعَبٌ."], "أَنْتَ → ـكَ an أَنَّ; Khabar marfūʿ.", ["Kein selbstständiges Pronomen.", "Die Khabar bleibt marfūʿ.", "Nach أَظُنُّ steht أَنَّ."]),
  U("Mach es feminin", "هُوَ جَوْعَانُ.", ["هِيَ جَوْعَى.", "هِيَ جَوْعَانَةٌ.", "هِيَ جِيَاعٌ.", "هِيَ جَوْعَانُ."], "فَعْلَانُ → فَعْلَى: جَوْعَى.", ["Die Form gibt es nicht.", "جِيَاعٌ ist Plural.", "Das ist männlich."]),
  U("Frag nach dem Objekt mit „welcher?“", "قَرَأْتُ سُورَةَ الْفَاتِحَةِ.", ["أَيَّ سُورَةٍ قَرَأْتَ؟", "أَيُّ سُورَةٍ قَرَأْتَ؟", "أَيَّ سُورَةً قَرَأْتَ؟", "أَيِّ سُورَةٍ قَرَأْتَ؟"], "أَيَّ ist Objekt → manṣūb; das Nomen danach majrūr.", ["Objekt → manṣūb.", "Nach أَيَّ majrūr.", "Keine Präposition."]),
  U("Übersetze ins Arabische", "Ich glaube, dass sie nach Mekka gegangen ist.", ["أَظُنُّ أَنَّهَا ذَهَبَتْ إِلَى مَكَّةَ.", "أَظُنُّ أَنَّهَا ذَهَبَ إِلَى مَكَّةَ.", "أَظُنُّ أَنَّ هِيَ ذَهَبَتْ إِلَى مَكَّةَ.", "أَظُنُّ أَنَّهَا ذَهَبَتْ إِلَى مَكَّةِ."], "أَنَّ + ـهَا; Verb feminin; مَكَّةَ Diptoton.", ["Das Verb muss feminin sein.", "Kein selbstständiges Pronomen.", "Diptoton: Fatḥa im Genitiv."]),
  F("Welche Bedeutung hat ذَهَبْتِ?", "ذَهَبْتِ", ["du (w.) gingst", "sie ging", "du (m.) gingst", "ich ging"], "-ti = du (f.).", ["Das ist ذَهَبَتْ.", "Das ist ذَهَبْتَ.", "Das ist ذَهَبْتُ."])
]);

add("b2-07", [
  E("مَاذَا ____ يَا إِخْوَانُ؟ (Was habt ihr gegessen?)", ["أَكَلْتُمْ", "أَكَلْنَا", "أَكَلُوا", "أَكَلْتُنَّ"], "„ihr (m.)“ = -tum.", ["Das heißt „wir“.", "Das heißt „sie“.", "Das ist für Frauen."]),
  E("أَ____ هَذِهِ الْمَجَلَّةَ يَا أَخَوَاتُ؟ (Habt ihr … gelesen?)", ["قَرَأْتُنَّ", "قَرَأْتُمْ", "قَرَأْنَ", "قَرَأْتِ"], "„ihr (w.)“ = -tunna.", ["Das ist männlich.", "Das heißt „sie (w.)“.", "Das ist Singular."]),
  E("مَا ____ الْأَذَانَ. (Wir hörten den Gebetsruf nicht.)", ["سَمِعْنَا", "سَمِعْنَ", "سَمِعْتُمْ", "سَمِعُوا"], "„wir“ = -nā.", ["Das heißt „sie (w.)“.", "Das heißt „ihr“.", "Das heißt „sie (m.)“."]),
  E("أَيْنَ الْإِمَامُ؟ أَ____؟ (Habt ihr ihn gesehen?)", ["رَأَيْتُمُوهُ", "رَأَيْتُمْهُ", "رَأَيْتُمُهُ", "رَأَيْتُمُوا هُ"], "Nach -tum wird vor dem Objekt ein wāw eingefügt.", ["Es fehlt das wāw.", "Es fehlt das wāw.", "Das ist getrennt geschrieben."]),
  E("الْكِتَابُ فِي ____.", ["بَيْتِهِ", "بَيْتُهُ", "بَيْتِهُ", "بَيْتَهُ"], "Nach i wird ـهُ zu ـهِ.", ["Nach فِي Genitiv.", "Nach i wird ـهُ zu ـهِ.", "Kein Akkusativ."]),
  E("كَانَ بِلَالٌ ____. (… war krank)", ["مَرِيضًا", "مَرِيضٌ", "مَرِيضٍ", "بِمَرِيضٍ"], "Khabar von كَانَ (einzelnes Wort) → manṣūb.", ["Die Khabar von كَانَ ist manṣūb.", "Kein Genitiv.", "بِـ gehört zu لَيْسَ."]),
  E("____ زَيْنَبُ فِي الْمَطْبَخِ.", ["كَانَتْ", "كَانَ", "كُنْتِ", "كَانُوا"], "Feminin → كَانَتْ.", ["Das Subjekt ist weiblich.", "Das heißt „du (w.) warst“.", "Das ist Plural."]),
  E("الرَّجُلُ ذُو ____ إِمَامُ الْمَسْجِدِ. (der Bärtige)", ["اللِّحْيَةِ", "لِحْيَةٍ", "اللِّحْيَةُ", "لِحْيَةٌ"], "ذُو bekommt keinen Artikel – das Muḍāf ilaihi bekommt ihn.", ["Zu الرَّجُلُ (bestimmt) gehört ein bestimmtes Muḍāf ilaihi.", "Nach ذُو Genitiv.", "Nach ذُو Genitiv, und bestimmt."]),
  E("بَيْتُكُ____ الْجَدِيدُ جَمِيلٌ.", ["مُ", "مْ", "مِ", "مَ"], "Vor Hamzat al-waṣl wird das Sukūn des mīm zum Ḍamma: بَيْتُكُمُ الْجَدِيدُ.", ["Vor al kein Sukūn.", "Der Hilfsvokal ist hier Ḍamma.", "Der Hilfsvokal ist hier Ḍamma."]),
  E("أَكَلْتُ ____ التُّفَّاحَةِ. (ein Drittel)", ["ثُلُثَ", "ثَالِثَ", "ثَلَاثَ", "ثُلُثِ"], "Bruch nach فُعْلٌ: ثُلُثٌ; als Objekt manṣūb.", ["Das ist „Dritter“.", "Das ist „drei“.", "Objekt → manṣūb."]),
  U("Setz كَانَ davor", "الطَّالِبُ مُجْتَهِدٌ.", ["كَانَ الطَّالِبُ مُجْتَهِدًا.", "كَانَ الطَّالِبُ مُجْتَهِدٌ.", "كَانَ الطَّالِبَ مُجْتَهِدًا.", "كَانَ الطَّالِبُ بِمُجْتَهِدٍ."], "Ism von كَانَ marfūʿ, Khabar manṣūb.", ["Die Khabar wird manṣūb.", "Der Ism bleibt marfūʿ.", "بِـ gehört zu لَيْسَ."]),
  U("Setz كَانَ davor", "بِلَالٌ فِي الْفَصْلِ.", ["كَانَ بِلَالٌ فِي الْفَصْلِ.", "كَانَ بِلَالًا فِي الْفَصْلِ.", "كَانَ بِلَالٌ فِي الْفَصْلَ.", "كَانَتْ بِلَالٌ فِي الْفَصْلِ."], "Präpositionalgruppe als Khabar ändert sich nicht.", ["Der Ism bleibt marfūʿ.", "Nach فِي Genitiv.", "بِلَالٌ ist männlich."]),
  U("Statt „du (m.)“: „ihr (m.)“", "رَأَيْتَهُ؟", ["رَأَيْتُمُوهُ؟", "رَأَيْتُمْهُ؟", "رَأَيْتُنَّهُ؟", "رَأَيْنَاهُ؟"], "-tum + wāw + Objekt.", ["Es fehlt das wāw.", "Das ist für Frauen.", "Das heißt „wir“."]),
  U("Mach es bestimmt", "رَجُلٌ ذُو لِحْيَةٍ", ["الرَّجُلُ ذُو اللِّحْيَةِ", "الرَّجُلُ الذُّو لِحْيَةٍ", "الرَّجُلُ ذُو لِحْيَةٍ", "رَجُلٌ ذُو اللِّحْيَةِ"], "Das Muḍāf ilaihi bekommt den Artikel.", ["ذُو kann keinen Artikel bekommen.", "Das Muḍāf ilaihi muss bestimmt werden.", "Das Nomen muss bestimmt werden."]),
  U("Übersetze ins Arabische", "Wir sahen den Imam letzte Woche.", ["رَأَيْنَا الْإِمَامَ الْأُسْبُوعَ الْمَاضِيَ.", "رَأَيْنَ الْإِمَامَ الْأُسْبُوعَ الْمَاضِيَ.", "رَأَيْنَا الْإِمَامُ الْأُسْبُوعَ الْمَاضِيَ.", "رَأَيْتُمُ الْإِمَامَ الْأُسْبُوعَ الْمَاضِيَ."], "-nā; Objekt manṣūb.", ["Das heißt „sie (w.)“.", "Objekt manṣūb.", "Das heißt „ihr“."]),
  F("Welche Form ist richtig: „Ihr habt sie (f. Sg.) gefragt.“", "", ["سَأَلْتُمُوهَا", "سَأَلْتُمْهَا", "سَأَلْتُمُهَا", "سَأَلْتُمْ هِيَ"], "-tum + wāw + ـهَا.", ["Es fehlt das wāw.", "Es fehlt das wāw.", "Kein selbstständiges Pronomen."])
]);

add("b2-08", [
  E("____ إِلَى الْمَسْجِدِ يَا إِخْوَانُ؟ – نَعَمْ، ____. (Seid ihr …? – Ja, wir …)", ["أَذَهَبْتُمْ … ذَهَبْنَا", "أَذَهَبْتُنَّ … ذَهَبْنَا", "أَذَهَبُوا … ذَهَبْنَا", "أَذَهَبْتُمْ … ذَهَبْتُمْ"], "Frage „ihr (m.)“ -tum, Antwort „wir“ -nā.", ["-tunna ist für Frauen.", "-ū heißt „sie“.", "Die Antwort muss „wir“ sein."]),
  E("أَيْنَ ____ يَا أَخَوَاتُ؟", ["ذَهَبْتُنَّ", "ذَهَبْتُمْ", "ذَهَبْنَ", "ذَهَبْتِ"], "„ihr (w.)“ = -tunna.", ["Das ist männlich.", "Das heißt „sie (w.)“.", "Das ist Singular."]),
  E("الْبَنَاتُ ____ إِلَى الْمَدْرَسَةِ.", ["ذَهَبْنَ", "ذَهَبَتْ", "ذَهَبُوا", "ذَهَبْتُنَّ"], "Mubtadaʾ vorne, Frauen → ذَهَبْنَ.", ["Nach dem Mubtadaʾ braucht es das Pluralpronomen.", "Das ist männlich.", "Das heißt „ihr“."]),
  E("____ الدَّرْسَ جَيِّدًا. (Ich habe die Lektion gut verstanden.)", ["فَهِمْتُ", "فَهِمَ", "فَهِمْتَ", "فَهِمْنَا"], "„ich“ = -tu.", ["Das heißt „er“.", "Das heißt „du“.", "Das heißt „wir“."]),
  E("الطُّلَّابُ ____ الدَّرْسَ.", ["حَفِظُوا", "حَفِظَ", "حَفِظْنَ", "حَفِظْتُمْ"], "Mubtadaʾ (m. Pl.) → Khabar mit -ū.", ["Nach dem Mubtadaʾ braucht es das Pluralpronomen.", "Das ist für Frauen.", "Das heißt „ihr“."]),
  F("Welche Endung bekommt der dritte Radikal vor ـتُ?", "ذَهَبْتُ", ["Sukūn", "Fatḥa", "Ḍamma", "Kasra"], "Vor Konsonant-Endungen: Sukūn.", ["Fatḥa bleibt nur bei ذَهَبَ، ذَهَبَتْ.", "Ḍamma nur vor ـُوا.", "Kasra kommt nicht vor."]),
  F("Welche Endung bekommt der dritte Radikal vor ـُوا?", "ذَهَبُوا", ["Ḍamma", "Sukūn", "Fatḥa", "Kasra"], "Vor ـُوا: Ḍamma.", ["Sukūn vor Konsonant-Endungen.", "Fatḥa nur bei ذَهَبَ، ذَهَبَتْ.", "Kasra kommt nicht vor."]),
  U("Bilde die Form für „ihr (m.)“", "كَتَبَ", ["كَتَبْتُمْ", "كَتَبْتُنَّ", "كَتَبُوا", "كَتَبْنَا"], "-tum.", ["Das ist für Frauen.", "Das heißt „sie“.", "Das heißt „wir“."]),
  U("Bilde die Form für „sie (w. Pl.)“", "دَخَلَ", ["دَخَلْنَ", "دَخَلْنَا", "دَخَلُوا", "دَخَلَتْ"], "-na.", ["Das heißt „wir“.", "Das ist männlich.", "Das ist Singular."]),
  U("Bilde die Form für „du (w.)“", "شَرِبَ", ["شَرِبْتِ", "شَرِبَتْ", "شَرِبْتَ", "شَرِبْتُ"], "-ti.", ["Das heißt „sie“.", "Das ist männlich.", "Das heißt „ich“."]),
  U("Bilde die Form für „wir“", "خَرَجَ", ["خَرَجْنَا", "خَرَجْنَ", "خَرَجْتُمْ", "خَرَجْتُ"], "-nā (langes ā).", ["Das heißt „sie (w.)“.", "Das heißt „ihr“.", "Das heißt „ich“."]),
  U("Statt „ich“: „sie (m. Pl.)“", "سَمِعْتُ الْأَذَانَ.", ["سَمِعُوا الْأَذَانَ.", "سَمِعْنَ الْأَذَانَ.", "سَمِعْتُمُ الْأَذَانَ.", "سَمِعَ الْأَذَانَ."], "-ū.", ["Das ist für Frauen.", "Das heißt „ihr“.", "Das ist Singular."]),
  U("Statt „er“: „ihr (w.)“", "أَكَلَ الْعِنَبَ.", ["أَكَلْتُنَّ الْعِنَبَ.", "أَكَلْتُمُ الْعِنَبَ.", "أَكَلْنَ الْعِنَبَ.", "أَكَلْتِ الْعِنَبَ."], "-tunna.", ["Das ist männlich.", "Das heißt „sie (w.)“.", "Das ist Singular."]),
  F("Was ist in ذَهَبَ (ohne Nomen danach) der Fāʿil?", "", ["ein unsichtbares Pronomen (هُوَ)", "das Fatḥa am Ende", "Es gibt keinen.", "das ذ"], "وَالْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ تَقْدِيرُهُ هُوَ.", ["Ein Vokal ist kein Fāʿil.", "Jedes Verb hat einen Fāʿil.", "Das ist der erste Radikal."]),
  F("Was ist in ذَهَبَتْ das تْ?", "", ["nur das Zeichen des Femininums", "das Subjekt (Fāʿil)", "ein Objekt-Pronomen", "ein Teil der Wurzel"], "Das تْ zeigt nur das Femininum; der Fāʿil ist das unsichtbare هِيَ.", ["Der Fāʿil ist unsichtbar.", "Es ist kein Objekt.", "Die Wurzel ist ذ-ه-ب."]),
  U("Übersetze ins Arabische", "Habt ihr (Frauen) die Lektion verstanden?", ["أَفَهِمْتُنَّ الدَّرْسَ؟", "أَفَهِمْتُمُ الدَّرْسَ؟", "أَفَهِمْنَ الدَّرْسَ؟", "أَفَهِمْتِ الدَّرْسَ؟"], "„ihr (w.)“ = -tunna.", ["Das ist männlich.", "Das heißt „sie (w.)“.", "Das ist Singular."])
]);

add("b2-09", [
  E("رَأَيْتُ الْأَبْنَاءَ وَ____.", ["الْبَنَاتِ", "الْبَنَاتَ", "الْبَنَاتُ", "الْبَنَاتًا"], "Femininer Plural im Akkusativ: -i statt -a.", ["Der feminine Plural hat im Akkusativ kein -a.", "Objekt → kein Nominativ.", "al und Tanwīn nie zusammen."]),
  E("خَلَقَ اللَّهُ ____ وَالْأَرْضَ.", ["السَّمَاوَاتِ", "السَّمَاوَاتَ", "السَّمَاوَاتُ", "سَمَاوَاتٍ"], "-āt im Akkusativ → Kasra.", ["Kein Fatḥa beim femininen Plural.", "Objekt → kein Nominativ.", "Bestimmtheit stimmt nicht."]),
  E("إِنَّ ____ فِي الْحَافِلَاتِ.", ["الطَّالِبَاتِ", "الطَّالِبَاتَ", "الطَّالِبَاتُ", "طَالِبَاتٌ"], "Ism von إِنَّ, femininer Plural → Kasra.", ["Kein Fatḥa beim femininen Plural.", "Nach إِنَّ kein Nominativ.", "Nominativ, unbestimmt."]),
  E("سَأَلَ____ الْمُدَرِّسُ. (Der Lehrer fragte mich.)", ["نِي", "ي", "كَ", "هُ"], "„mich“ am Verb = ـنِي (mit nūn al-wiqāya).", ["Es fehlt das nūn al-wiqāya.", "ـكَ heißt „dich“.", "ـهُ heißt „ihn“."]),
  E("مَا ____ هَذِهِ السَّيَّارَةَ!", ["أَجْمَلَ", "أَجْمَلُ", "جَمِيلَةٌ", "أَجْمَلَتْ"], "Staunen: مَا أَفْعَلَ + Nomen manṣūb.", ["Das Verb des Staunens endet auf -a.", "Kein Adjektiv.", "Die Form ist unveränderlich."]),
  E("مَا أَسْهَلَ ____!", ["هَذَا الدَّرْسَ", "هَذَا الدَّرْسُ", "هَذَا الدَّرْسِ", "هَذَا دَرْسٌ"], "Nach مَا أَفْعَلَ ist das Nomen manṣūb.", ["manṣūb.", "manṣūb.", "Bestimmt und manṣūb."]),
  E("يَا ____ اللَّهِ!", ["عَبْدَ", "عَبْدُ", "عَبْدِ", "عَبْدًا"], "Muḍāf nach يَا → manṣūb.", ["Nur ein einfaches Nomen bekommt Ḍamma.", "Kein Genitiv.", "Muḍāf → kein Tanwīn."]),
  E("يَا ____ بَكْرٍ!", ["أَبَا", "أَبُو", "أَبِي", "أَبَ"], "أَبُو wird nach يَا manṣūb → أَبَا.", ["Nach يَا ist der Muḍāf manṣūb.", "Kein Genitiv.", "Es fehlt das Alif der fünf Nomen."]),
  E("الرِّجَالُ ____ خَرَجُوا مُدَرِّسُونَ.", ["الَّذِينَ", "الَّذِي", "اللَّاتِي", "الَّتِي"], "Relativpronomen m. Pl. = الَّذِينَ.", ["الَّذِي ist Singular.", "اللَّاتِي ist feminin.", "الَّتِي ist feminin Singular."]),
  E("الطَّالِبَاتُ ____ جَلَسْنَ أَمَامَ الْمُدَرِّسَةِ.", ["اللَّاتِي", "الَّذِينَ", "الَّتِي", "الَّذِي"], "Relativpronomen f. Pl. = اللَّاتِي.", ["الَّذِينَ ist männlich.", "الَّتِي ist Singular.", "الَّذِي ist männlich Singular."]),
  E("____ تَكْتُبُ؟ (Womit schreibst du?)", ["بِمَ", "بِمَا", "مِمَّ", "عَمَّ"], "بِـ + مَا → بِمَ (das Alif fällt weg).", ["Mit Präposition fällt das Alif von مَا weg.", "مِمَّ heißt „wovon?“.", "عَمَّ heißt „worüber?“."]),
  U("Mach daraus Staunen", "الْبَيْتُ كَبِيرٌ.", ["مَا أَكْبَرَ الْبَيْتَ!", "مَا أَكْبَرُ الْبَيْتِ!", "مَا كَبِيرٌ الْبَيْتُ!", "مَا أَكْبَرَ الْبَيْتُ!"], "مَا أَفْعَلَ + Nomen manṣūb.", ["Falsche Vokale.", "Das Muster ist أَفْعَلَ.", "Das Nomen ist manṣūb."]),
  U("Statt „ihn“: „mich“", "سَأَلَهُ الْمُدَرِّسُ.", ["سَأَلَنِي الْمُدَرِّسُ.", "سَأَلِي الْمُدَرِّسُ.", "سَأَلْتُ الْمُدَرِّسَ.", "سَأَلَكَ الْمُدَرِّسُ."], "ـنِي mit nūn al-wiqāya.", ["Es fehlt das nūn.", "Das heißt „ich fragte den Lehrer“.", "ـكَ heißt „dich“."]),
  U("Mach es feminin (Plural)", "رَأَيْتُ الْمُسْلِمِينَ.", ["رَأَيْتُ الْمُسْلِمَاتِ.", "رَأَيْتُ الْمُسْلِمَاتَ.", "رَأَيْتُ الْمُسْلِمَاتُ.", "رَأَيْتُ الْمُسْلِمَاتٍ."], "Femininer Plural im Akkusativ → -āti.", ["Kein Fatḥa beim femininen Plural.", "Objekt → kein Nominativ.", "al und Tanwīn nie zusammen."]),
  U("Ruf ihn an (يَا)", "عَبْدُ الرَّحْمَنِ", ["يَا عَبْدَ الرَّحْمَنِ", "يَا عَبْدُ الرَّحْمَنِ", "يَا عَبْدِ الرَّحْمَنِ", "يَا عَبْدًا الرَّحْمَنِ"], "Muḍāf nach يَا → manṣūb.", ["Muḍāf bekommt Fatḥa.", "Kein Genitiv.", "Kein Tanwīn."]),
  U("Mach es feminin", "الطُّلَّابُ الَّذِينَ خَرَجُوا", ["الطَّالِبَاتُ اللَّاتِي خَرَجْنَ", "الطَّالِبَاتُ الَّذِينَ خَرَجْنَ", "الطَّالِبَاتُ اللَّاتِي خَرَجُوا", "الطَّالِبَاتُ الَّتِي خَرَجَتْ"], "Feminin Plural: اللَّاتِي + خَرَجْنَ.", ["الَّذِينَ ist männlich.", "Das Verb muss feminin sein.", "Singular-Formen passen nicht zu Personen im Plural."]),
  U("Übersetze ins Arabische", "Wie fleißig ist dieser Student!", ["مَا أَجْهَدَ هَذَا الطَّالِبَ!", "مَا أَجْهَدُ هَذَا الطَّالِبِ!", "مَا مُجْتَهِدٌ هَذَا الطَّالِبُ!", "مَا أَجْهَدَ هَذَا الطَّالِبُ!"], "Verb des Staunens + manṣūb.", ["Falsche Vokale.", "Muster مَا أَفْعَلَ.", "Das Nomen ist manṣūb."]),
  F("Wie wird أَ vor الْمُدَرِّسُ geschrieben?", "", ["آلْمُدَرِّسُ", "أَالْمُدَرِّسُ", "أَلْمُدَرِّسُ", "إِلْمُدَرِّسُ"], "أَ + الْـ → آ.", ["Die zwei Alifs werden zu آ.", "Dann wäre die Frage weg.", "Falscher Vokal."])
]);

add("b2-10", [
  E("الطَّالِبُ ____ الدَّرْسَ الْآنَ.", ["يَكْتُبُ", "كَتَبَ", "يَكْتِبُ", "يَكْتَبُ"], "كَتَبَ يَكْتُبُ (a–u).", ["Das ist das Perfekt.", "Der zweite Radikal hat Ḍamma.", "Der zweite Radikal hat Ḍamma."]),
  E("بِلَالٌ ____ عَلَى الْكُرْسِيِّ.", ["يَجْلِسُ", "يَجْلُسُ", "يَجْلَسُ", "يُجْلِسُ"], "جَلَسَ يَجْلِسُ (a–i).", ["Falscher Vokal.", "Falscher Vokal.", "Das يَـ hat hier Fatḥa."]),
  E("الْوَلَدُ ____ الْبَابَ.", ["يَفْتَحُ", "يَفْتُحُ", "يَفْتِحُ", "فَتَحُ"], "فَتَحَ يَفْتَحُ (a–a).", ["Falscher Vokal.", "Falscher Vokal.", "Die Form gibt es nicht."]),
  E("أَنَا ____ الدَّرْسَ.", ["أَفْهَمُ", "أَفْهِمُ", "أَفْهُمُ", "فَهِمُ"], "فَهِمَ يَفْهَمُ (i–a); „ich“ = أَـ.", ["Falscher Vokal.", "Falscher Vokal.", "Die Form gibt es nicht."]),
  E("هُوَ ____ الْمَاءَ.", ["يَشْرَبُ", "يَشْرِبُ", "يَشْرُبُ", "شَرِبُ"], "شَرِبَ يَشْرَبُ (i–a).", ["Falscher Vokal.", "Falscher Vokal.", "Die Form gibt es nicht."]),
  E("فِي الْفَصْلِ ____ طَالِبًا. (23)", ["ثَلَاثَةٌ وَعِشْرُونَ", "ثَلَاثٌ وَعِشْرُونَ", "ثَلَاثَةُ عِشْرُونَ", "ثَلَاثَةَ عِشْرِينَ"], "Einer mit Tanwīn + وَ + عِشْرُونَ; 3–9 bei männlichem Gezähltem mit ة.", ["Männliches Gezähltes → ثَلَاثَةٌ.", "Die Teile werden mit وَ verbunden.", "Hier Nominativ und mit وَ."]),
  E("السَّاعَةُ التَّاسِعَةُ إِلَّا ____.", ["رُبْعًا", "رُبْعٌ", "رُبْعٍ", "رَابِعًا"], "Nach إِلَّا → manṣūb.", ["Nach إِلَّا manṣūb.", "Kein Genitiv.", "Das ist „vierter“."]),
  E("جَلَسَ حَامِدٌ بَيْنَ ____ وَفَيْصَلٍ.", ["بِلَالٍ", "بِلَالٌ", "بِلَالًا", "بِلَالُ"], "بَيْنَ ist Muḍāf → majrūr.", ["Nach بَيْنَ majrūr.", "Nach بَيْنَ majrūr.", "Kein Nominativ."]),
  E("هَذَا سِرٌّ بَيْنِي ____.", ["وَبَيْنَكَ", "وَأَنْتَ", "وَكَ", "وَبَيْنَ أَنْتَ"], "Bei Pronomen wird بَيْنَ wiederholt.", ["بَيْنَ muss wiederholt werden.", "Ein Pronomen braucht ein Wort zum Anhängen.", "Kein selbstständiges Pronomen."]),
  U("Mach es zum Präsens", "كَتَبَ الرِّسَالَةَ.", ["يَكْتُبُ الرِّسَالَةَ.", "يَكْتَبُ الرِّسَالَةَ.", "تَكْتُبُ الرِّسَالَةَ.", "يَكْتُبُ الرِّسَالَةُ."], "يَـ + kein Vokal auf ك + Ḍamma auf ت (a–u) + Ḍamma am Ende.", ["Der zweite Radikal hat Ḍamma.", "تَـ ist „sie“ oder „du“.", "Das Objekt bleibt manṣūb."]),
  U("Mach es zum Präsens", "غَسَلَ الثَّوْبَ.", ["يَغْسِلُ الثَّوْبَ.", "يَغْسُلُ الثَّوْبَ.", "يَغْسَلُ الثَّوْبَ.", "يُغْسِلُ الثَّوْبَ."], "غَسَلَ يَغْسِلُ (a–i).", ["Falscher Vokal.", "Falscher Vokal.", "Das يَـ hat Fatḥa."]),
  U("Mach es zum Präsens", "قَرَأَ الْقُرْآنَ.", ["يَقْرَأُ الْقُرْآنَ.", "يَقْرُأُ الْقُرْآنَ.", "يَقْرِئُ الْقُرْآنَ.", "يَقْرَأَ الْقُرْآنَ."], "قَرَأَ يَقْرَأُ (a–a).", ["Falscher Vokal.", "Falscher Vokal.", "Am Ende steht Ḍamma."]),
  U("Mach es zum Perfekt", "يَحْفَظُ الْقُرْآنَ.", ["حَفِظَ الْقُرْآنَ.", "حَفَظَ الْقُرْآنَ.", "حَفُظَ الْقُرْآنَ.", "يَحْفِظُ الْقُرْآنَ."], "حَفِظَ يَحْفَظُ (i–a).", ["Im Perfekt Kasra auf ف.", "Im Perfekt Kasra auf ف.", "Das ist kein Perfekt."]),
  U("Statt 21: 25", "وَاحِدٌ وَعِشْرُونَ كِتَابًا", ["خَمْسَةٌ وَعِشْرُونَ كِتَابًا", "خَمْسٌ وَعِشْرُونَ كِتَابًا", "خَمْسَةٌ وَعِشْرُونَ كُتُبًا", "خَمْسَةُ عِشْرُونَ كِتَابًا"], "كِتَابٌ männlich → خَمْسَةٌ (mit ة und Tanwīn).", ["Männliches Gezähltes → mit ة.", "Singular nach 21–99.", "Mit وَ und Tanwīn."]),
  U("Übersetze ins Arabische", "Es ist zehn vor eins.", ["السَّاعَةُ الْوَاحِدَةُ إِلَّا عَشْرَ دَقَائِقَ.", "السَّاعَةُ الْوَاحِدَةُ إِلَّا عَشْرُ دَقَائِقَ.", "السَّاعَةُ الْوَاحِدَةُ إِلَّا عَشَرَةَ دَقَائِقَ.", "السَّاعَةُ الْوَاحِدَةُ إِلَّا عَشْرَ دَقِيقَةً."], "Nach إِلَّا manṣūb; دَقِيقَةٌ feminin → عَشْرَ.", ["Nach إِلَّا manṣūb.", "دَقِيقَةٌ ist feminin → ohne ة.", "3–10: Plural im Genitiv."]),
  F("Welches Paar ist richtig (Perfekt – Präsens)?", "", ["ذَهَبَ يَذْهَبُ", "ذَهَبَ يَذْهُبُ", "جَلَسَ يَجْلَسُ", "كَتَبَ يَكْتِبُ"], "ذَهَبَ يَذْهَبُ (a–a).", ["Falscher Vokal.", "Richtig ist يَجْلِسُ.", "Richtig ist يَكْتُبُ."])
]);

add("b2-11", [
  E("إِخْوَتِي ____ بِالْجَامِعَةِ.", ["يَدْرُسُونَ", "يَدْرُسُ", "تَدْرُسُونَ", "يَدْرُسْنَ"], "„sie (m. Pl.)“ = يَـ…ـُونَ.", ["Nach dem Mubtadaʾ im Plural braucht es -ūna.", "Das heißt „ihr“.", "Das ist für Frauen."]),
  E("مَاذَا ____ آمِنَةُ الْآنَ؟", ["تَكْتُبُ", "يَكْتُبُ", "تَكْتُبِينَ", "أَكْتُبُ"], "„sie (Sg.)“ = تَـ.", ["يَـ ist männlich.", "Das heißt „du (f.)“.", "Das heißt „ich“."]),
  E("أَيْنَ ____ يَا بِلَالُ؟", ["تَذْهَبُ", "يَذْهَبُ", "أَذْهَبُ", "تَذْهَبُونَ"], "„du (m.)“ = تَـ.", ["Das heißt „er“.", "Das heißt „ich“.", "Das heißt „ihr“."]),
  E("مَاذَا ____ يَا إِخْوَانُ؟", ["تَشْرَبُونَ", "يَشْرَبُونَ", "تَشْرَبُ", "نَشْرَبُ"], "„ihr (m.)“ = تَـ…ـُونَ.", ["Das heißt „sie“.", "Das ist Singular.", "Das heißt „wir“."]),
  E("____ أَبِي إِلَى مَكَّةَ غَدًا.", ["سَيَذْهَبُ", "ذَهَبَ", "سَذَهَبَ", "سَيَذْهَبُونَ"], "سَـ + Muḍāriʿ = Futur.", ["„morgen“ passt nicht zum Perfekt.", "سَـ nur vor dem Muḍāriʿ.", "Verb vorne bleibt Singular."]),
  E("____ أَفْهَمُ الْفَرَنْسِيَّةَ.", ["لَا", "مَا", "لَيْسَ", "لَمْ"], "Der Muḍāriʿ wird mit لَا verneint.", ["مَا verneint das Perfekt (oder den Augenblick).", "لَيْسَ nicht vor Verben.", "لَمْ kommt später."]),
  E("الدُّخُولُ ____. (Eintritt verboten)", ["مَمْنُوعٌ", "مَمْنُوعًا", "مَمْنُوعٍ", "الْمَمْنُوعُ"], "Maṣdar als Mubtadaʾ, Khabar marfūʿ.", ["Die Khabar ist marfūʿ.", "Kein Genitiv.", "Mit al kein Satz."]),
  E("خَرَجْنَا قَبْلَ ____ الْمُدَرِّسِ.", ["خُرُوجِ", "خُرُوجُ", "خُرُوجَ", "خُرُوجٍ"], "Maṣdar nach قَبْلَ → majrūr; als Muḍāf ohne Tanwīn.", ["Nach قَبْلَ majrūr.", "Nach قَبْلَ majrūr.", "Muḍāf → kein Tanwīn."]),
  E("أَمَّا بِلَالٌ ____ مِنْ بَاكِسْتَانَ.", ["فَهُوَ", "هُوَ", "وَهُوَ", "لِأَنَّهُ"], "Nach أَمَّا beginnt die Khabar mit فَـ.", ["Nach أَمَّا braucht es فَـ.", "وَ ersetzt فَـ nicht.", "„weil“ passt nicht."]),
  U("Statt „er“: „sie (m. Pl.)“", "يَفْتَحُ الْبَابَ.", ["يَفْتَحُونَ الْبَابَ.", "تَفْتَحُونَ الْبَابَ.", "يَفْتَحْنَ الْبَابَ.", "فَتَحُوا الْبَابَ."], "يَـ…ـُونَ.", ["Das heißt „ihr“.", "Das ist für Frauen.", "Das ist Perfekt."]),
  U("Mach es zum Futur", "أَكْتُبُ لَكَ رِسَالَةً.", ["سَأَكْتُبُ لَكَ رِسَالَةً.", "سَكَتَبْتُ لَكَ رِسَالَةً.", "سَيَكْتُبُ لَكَ رِسَالَةً.", "أَسَكْتُبُ لَكَ رِسَالَةً."], "سَـ vor den Muḍāriʿ.", ["سَـ nur vor dem Muḍāriʿ.", "Das heißt „er wird schreiben“.", "سَـ steht ganz vorne."]),
  U("Verneine", "أَشْرَبُ الْقَهْوَةَ.", ["لَا أَشْرَبُ الْقَهْوَةَ.", "لَيْسَ أَشْرَبُ الْقَهْوَةَ.", "لَسْتُ أَشْرَبُ الْقَهْوَةَ.", "أَشْرَبُ لَا الْقَهْوَةَ."], "Muḍāriʿ + لَا.", ["لَيْسَ nicht vor Verben.", "لَسْتُ nicht vor Verben.", "لَا steht vor dem Verb."]),
  U("Bilde den Maṣdar (فُعُولٌ)", "جَلَسَ", ["جُلُوسٌ", "جَالِسٌ", "مَجْلِسٌ", "جَلْسَةٌ"], "Muster فُعُولٌ: جُلُوسٌ.", ["Das ist das Partizip.", "Das ist ein Ort.", "Das Muster ist فُعُولٌ."]),
  U("Bilde den Maṣdar (فُعُولٌ)", "رَكَعَ", ["رُكُوعٌ", "رَاكِعٌ", "رَكْعَةٌ", "مَرْكَعٌ"], "Muster فُعُولٌ: رُكُوعٌ.", ["Das ist das Partizip.", "Das ist eine Gebetseinheit.", "Die Form gibt es nicht."]),
  U("Verbinde mit أَمَّا … فَـ", "أُخْتِي تَسْكُنُ مَعِي. أَخِي يَسْكُنُ مَعَ أَبِي.", ["أُخْتِي تَسْكُنُ مَعِي، أَمَّا أَخِي فَيَسْكُنُ مَعَ أَبِي.", "أُخْتِي تَسْكُنُ مَعِي، أَمَّا أَخِي يَسْكُنُ مَعَ أَبِي.", "أُخْتِي تَسْكُنُ مَعِي، أَمَّا فَأَخِي يَسْكُنُ مَعَ أَبِي.", "أُخْتِي تَسْكُنُ مَعِي، وَأَمَّا أَخِي وَيَسْكُنُ مَعَ أَبِي."], "فَـ steht vor der Khabar.", ["Nach أَمَّا braucht es فَـ.", "فَـ steht vor der Khabar, nicht vor dem Nomen.", "وَ ersetzt فَـ nicht."]),
  U("Übersetze ins Arabische", "Wann gehst du nach Indien?", ["مَتَى تَذْهَبُ إِلَى الْهِنْدِ؟", "مَتَى سَتَذْهَبُ إِلَى الْهِنْدِ؟", "مَتَى يَذْهَبُ إِلَى الْهِنْدِ؟", "مَتَى ذَهَبْتَ إِلَى الْهِنْدِ؟"], "In Fragen kein سَـ.", ["سَـ wird nicht in Fragen verwendet.", "Das heißt „er“.", "Das ist Vergangenheit."]),
  F("Was ist der Unterschied? أَخِي – أَخٌ لِي", "", ["„mein Bruder“ – „ein Bruder von mir“", "„mein Bruder“ – „mein Bruder“ (gleich)", "„ein Bruder“ – „mein Bruder“", "„meine Brüder“ – „ein Bruder“"], "أَخِي ist bestimmt, أَخٌ لِي unbestimmt.", ["Die Bestimmtheit unterscheidet sich.", "Vertauscht.", "أَخِي ist Singular."])
]);

add("b2-12", [
  E("أَيْنَ ____ يَا آمِنَةُ؟", ["تَذْهَبِينَ", "تَذْهَبُ", "تَذْهَبْنَ", "يَذْهَبْنَ"], "„du (f.)“ = تَـ…ـِينَ.", ["Das ist „du (m.)“ oder „sie“.", "Das heißt „ihr (f.)“.", "Das heißt „sie (f. Pl.)“."]),
  E("أَ____ الْفَرَنْسِيَّةَ يَا أَخَوَاتُ؟", ["تَفْهَمْنَ", "تَفْهَمُونَ", "تَفْهَمِينَ", "يَفْهَمْنَ"], "„ihr (f.)“ = تَـ…ـْنَ.", ["Das ist männlich.", "Das ist Singular.", "Das heißt „sie“."]),
  E("____ الْوَاجِبَاتِ كُلَّ يَوْمٍ. (Wir schreiben …)", ["نَكْتُبُ", "أَكْتُبُ", "يَكْتُبُونَ", "كَتَبْنَا"], "„wir“ = نَـ.", ["Das heißt „ich“.", "Das heißt „sie“.", "Das ist Perfekt."]),
  E("رَجَعَ بِلَالٌ ____ السَّبْتِ.", ["يَوْمَ", "يَوْمُ", "يَوْمِ", "فِي يَوْمُ"], "Zeitadverb (Mafʿūl fīhi) → manṣūb.", ["Mafʿūl fīhi ist manṣūb.", "Kein Genitiv.", "Nach فِي majrūr."]),
  E("ذَهَبْتُ إِلَى السُّوقِ ____.", ["صَبَاحًا", "صَبَاحٌ", "صَبَاحٍ", "الصَّبَاحُ"], "Zeitadverb → manṣūb.", ["manṣūb.", "manṣūb.", "manṣūb."]),
  E("سَمِعْتُ ____ الِامْتِحَانَ غَدًا.", ["أَنَّ", "إِنَّ", "لَعَلَّ", "لِأَنَّ"], "Nach anderen Verben als قَالَ → أَنَّ.", ["إِنَّ nur nach قَالَ.", "„hoffentlich“ passt nicht.", "„weil“ passt nicht."]),
  E("قَالَ الْمُدَرِّسُ: ____ الِامْتِحَانَ غَدًا.", ["إِنَّ", "أَنَّ", "لَكِنَّ", "كَأَنَّ"], "Nach قَالَ → إِنَّ.", ["Nach قَالَ nicht أَنَّ.", "„aber“ passt nicht.", "„als ob“ passt nicht."]),
  E("أَذْهَبُ إِلَى الْمَكْتَبَةِ ____ يَوْمٍ.", ["كُلَّ", "كُلُّ", "كُلِّ", "كُلًّا"], "Zeitadverb كُلَّ يَوْمٍ → manṣūb.", ["manṣūb.", "Kein Genitiv.", "Muḍāf → kein Tanwīn."]),
  U("Statt „du (m.)“: „du (f.)“", "مَاذَا تَشْرَبُ؟", ["مَاذَا تَشْرَبِينَ؟", "مَاذَا تَشْرَبْنَ؟", "مَاذَا يَشْرَبْنَ؟", "مَاذَا شَرِبْتِ؟"], "-īna.", ["Das heißt „ihr (f.)“.", "Das heißt „sie (f. Pl.)“.", "Das ist Perfekt."]),
  U("Statt „ihr (m.)“: „ihr (f.)“", "أَتَكْتُبُونَ الدَّرْسَ؟", ["أَتَكْتُبْنَ الدَّرْسَ؟", "أَتَكْتُبِينَ الدَّرْسَ؟", "أَيَكْتُبْنَ الدَّرْسَ؟", "أَتَكْتُبُنَّ الدَّرْسَ؟"], "-na.", ["Das ist Singular.", "Das heißt „sie“.", "Die Form gibt es nicht."]),
  U("Statt „ich“: „wir“", "أَقْرَأُ الْقُرْآنَ.", ["نَقْرَأُ الْقُرْآنَ.", "يَقْرَأُ الْقُرْآنَ.", "نَقْرَأْنَ الْقُرْآنَ.", "قَرَأْنَا الْقُرْآنَ."], "أَـ → نَـ.", ["Das heißt „er“.", "Die Form gibt es nicht.", "Das ist Perfekt."]),
  U("Statt „sagte“: „hörte“", "قَالَ إِنَّ الْمُدِيرَ مَرِيضٌ.", ["سَمِعَ أَنَّ الْمُدِيرَ مَرِيضٌ.", "سَمِعَ إِنَّ الْمُدِيرَ مَرِيضٌ.", "سَمِعَ أَنَّ الْمُدِيرُ مَرِيضٌ.", "سَمِعَ أَنَّ الْمُدِيرَ مَرِيضًا."], "Nach سَمِعَ → أَنَّ; Ism manṣūb, Khabar marfūʿ.", ["إِنَّ nur nach قَالَ.", "Ism manṣūb.", "Khabar marfūʿ."]),
  U("Füge „am Donnerstag“ hinzu", "سَأَذْهَبُ إِلَى الطَّائِفِ.", ["سَأَذْهَبُ إِلَى الطَّائِفِ يَوْمَ الْخَمِيسِ.", "سَأَذْهَبُ إِلَى الطَّائِفِ يَوْمُ الْخَمِيسِ.", "سَأَذْهَبُ إِلَى الطَّائِفِ يَوْمِ الْخَمِيسُ.", "سَأَذْهَبُ إِلَى الطَّائِفِ يَوْمًا الْخَمِيسِ."], "يَوْمَ manṣūb (Zeitadverb), الْخَمِيسِ majrūr.", ["يَوْمَ ist manṣūb.", "Fälle vertauscht.", "Muḍāf → kein Tanwīn."]),
  U("Übersetze ins Arabische", "Wohin gehst du heute Abend, Fāṭima?", ["أَيْنَ تَذْهَبِينَ هَذَا الْمَسَاءَ يَا فَاطِمَةُ؟", "أَيْنَ تَذْهَبُ هَذَا الْمَسَاءَ يَا فَاطِمَةُ؟", "أَيْنَ تَذْهَبِينَ هَذَا الْمَسَاءُ يَا فَاطِمَةُ؟", "أَيْنَ تَذْهَبْنَ هَذَا الْمَسَاءَ يَا فَاطِمَةُ؟"], "du (f.) -īna; Zeitadverb manṣūb.", ["Das ist „du (m.)“.", "Zeitadverb ist manṣūb.", "Das heißt „ihr (f.)“."]),
  F("Welcher Wochentag ist يَوْمُ الثُّلَاثَاءِ?", "", ["Dienstag", "Mittwoch", "Montag", "Donnerstag"], "الثُّلَاثَاءُ – „der dritte“ → Dienstag.", ["Mittwoch = الْأَرْبِعَاءُ.", "Montag = الِاثْنَيْنِ.", "Donnerstag = الْخَمِيسُ."])
]);

add("b2-13", [
  E("الطَّالِبَاتُ ____ الدَّرْسَ.", ["يَكْتُبْنَ", "يَكْتُبُونَ", "تَكْتُبُ", "تَكْتُبْنَ"], "„sie (f. Pl.)“ = يَـ…ـْنَ.", ["Das ist männlich.", "Nach dem Mubtadaʾ im Plural braucht es -na.", "Das heißt „ihr (f.)“."]),
  E("أَنْتِ ____ كَثِيرًا.", ["تَقْرَئِينَ", "تَقْرَأُ", "تَقْرَأْنَ", "يَقْرَأْنَ"], "„du (f.)“ = تَـ…ـِينَ (vor ي wird أ zu ئ).", ["Das ist „du (m.)“.", "Das heißt „ihr (f.)“.", "Das heißt „sie (f. Pl.)“."]),
  E("نَحْنُ ____ إِلَى الْمَسْجِدِ.", ["نَذْهَبُ", "يَذْهَبُونَ", "أَذْهَبُ", "تَذْهَبُونَ"], "„wir“ = نَـ.", ["Das heißt „sie“.", "Das heißt „ich“.", "Das heißt „ihr“."]),
  E("هُمْ ____ الْقُرْآنَ.", ["يَحْفَظُونَ", "يَحْفَظْنَ", "تَحْفَظُونَ", "يَحْفَظُ"], "„sie (m. Pl.)“ = -ūna.", ["Das ist für Frauen.", "Das heißt „ihr“.", "Nach dem Pronomen im Plural braucht es -ūna."]),
  E("هِيَ ____ مِنَ الْبَيْتِ.", ["تَخْرُجُ", "يَخْرُجُ", "تَخْرُجِينَ", "يَخْرُجْنَ"], "„sie (Sg.)“ = تَـ.", ["يَـ ist männlich.", "Das heißt „du (f.)“.", "Das ist Plural."]),
  E("أَنْتُنَّ ____ الْعَرَبِيَّةَ.", ["تَدْرُسْنَ", "تَدْرُسُونَ", "تَدْرُسِينَ", "يَدْرُسْنَ"], "„ihr (f.)“ = تَـ…ـْنَ.", ["Das ist männlich.", "Das ist Singular.", "Das heißt „sie“."]),
  U("Bilde die Form für „du (f.)“", "تَجْلِسُ", ["تَجْلِسِينَ", "تَجْلِسْنَ", "تَجْلِسُونَ", "يَجْلِسْنَ"], "-īna.", ["Das heißt „ihr (f.)“.", "Das heißt „ihr (m.)“.", "Das heißt „sie (f. Pl.)“."]),
  U("Bilde die Form für „sie (f. Pl.)“", "يَسْمَعُ", ["يَسْمَعْنَ", "يَسْمَعُونَ", "تَسْمَعْنَ", "يَسْمَعِينَ"], "-na mit يَـ.", ["Das ist männlich.", "Das heißt „ihr (f.)“.", "Die Form gibt es nicht."]),
  U("Bilde die Form für „ihr (m.)“", "يَدْخُلُ", ["تَدْخُلُونَ", "يَدْخُلُونَ", "تَدْخُلْنَ", "نَدْخُلُ"], "تَـ…ـُونَ.", ["Das heißt „sie“.", "Das ist für Frauen.", "Das heißt „wir“."]),
  U("Bilde die Form für „ich“", "يَغْسِلُ", ["أَغْسِلُ", "نَغْسِلُ", "تَغْسِلُ", "إِغْسِلُ"], "أَـ + Ḍamma.", ["Das heißt „wir“.", "Das heißt „du/sie“.", "Die Vorsilbe hat Fatḥa."]),
  F("Was ist in يَذْهَبُونَ das و?", "", ["der Fāʿil", "das Zeichen des Indikativs", "das Zeichen des Muḍāriʿ", "ein Objekt"], "و = Fāʿil; ن = Zeichen des Indikativs.", ["Das ist das ن.", "Das ist das يَـ.", "Es gibt kein Objekt."]),
  F("Was ist in يَذْهَبُونَ das ن?", "", ["das Zeichen des Indikativs (marfūʿ)", "der Fāʿil", "das Zeichen des Plurals der Frauen", "ein Teil der Wurzel"], "Das ن zeigt den Indikativ, der Fāʿil ist das و.", ["Der Fāʿil ist das و.", "Das wäre in يَذْهَبْنَ.", "Die Wurzel ist ذ-ه-ب."]),
  F("Was ist in يَذْهَبْنَ das ن?", "", ["der Fāʿil (nūn der Frauen)", "das Zeichen des Indikativs", "ein Objekt", "das Zeichen des Muḍāriʿ"], "Bei يَذْهَبْنَ ist das nūn selbst der Fāʿil; die Form ist unveränderlich.", ["Das gilt für يَذْهَبُونَ.", "Es gibt kein Objekt.", "Das ist das يَـ."]),
  U("Übersetze ins Arabische", "Was schreibt ihr (Frauen)?", ["مَاذَا تَكْتُبْنَ؟", "مَاذَا تَكْتُبُونَ؟", "مَاذَا يَكْتُبْنَ؟", "مَاذَا تَكْتُبِينَ؟"], "„ihr (f.)“ = تَكْتُبْنَ.", ["Das ist männlich.", "Das heißt „sie“.", "Das ist Singular."])
]);

add("b2-14", [
  E("يَا بِلَالُ، ____ الدَّرْسَ. (schreib)", ["اكْتُبِ", "اِكْتُبْ", "تَكْتُبُ", "أَكْتُبُ"], "Amr: اُكْتُبْ; mitten im Satz ohne Hamza gesprochen; vor al Kasra: اكْتُبِ الدَّرْسَ.", ["Vor al wird das Sukūn zu Kasra, und Hamza mit Ḍamma.", "Das ist Präsens.", "Das heißt „ich schreibe“."]),
  E("____ عَلَى الْكُرْسِيِّ. (setz dich)", ["اِجْلِسْ", "اُجْلُسْ", "أَجْلِسْ", "تَجْلِسُ"], "تَجْلِسُ (zweiter Radikal Kasra) → اِجْلِسْ.", ["Der zweite Radikal hat Kasra.", "Hamzat al-waṣl, nicht أَ.", "Das ist Präsens."]),
  E("____ الْكِتَابَ. (lies)", ["اِقْرَأِ", "اُقْرُأْ", "اِقْرَأْ", "تَقْرَأُ"], "تَقْرَأُ → اِقْرَأْ; vor al Kasra: اِقْرَأِ الْكِتَابَ.", ["Der zweite Radikal hat Fatḥa → Kasra am Anfang.", "Vor al wird Sukūn zu Kasra.", "Das ist Präsens."]),
  E("____ هَذَا الطَّعَامَ فَإِنَّكَ جَوْعَانُ. (iss)", ["كُلْ", "اُؤْكُلْ", "اِأْكُلْ", "تَأْكُلُ"], "Unregelmäßig: تَأْكُلُ → كُلْ.", ["Der erste Radikal ء fällt weg.", "Der erste Radikal ء fällt weg.", "Das ist Präsens."]),
  E("____ الْقَلَمَ. (nimm)", ["خُذِ", "خُذْ", "اُؤْخُذْ", "تَأْخُذُ"], "خُذْ, vor al mit Kasra: خُذِ الْقَلَمَ.", ["Vor al wird Sukūn zu Kasra.", "Unregelmäßig: خُذْ.", "Das ist Präsens."]),
  E("اُكْتُبِي يَا ____.", ["آمِنَةُ", "مُحَمَّدُ", "إِخْوَانُ", "أَخَوَاتُ"], "اُكْتُبِي ist „du (f.)“.", ["اُكْتُبْ für einen Mann.", "اُكْتُبُوا für mehrere Männer.", "اُكْتُبْنَ für mehrere Frauen."]),
  E("اِغْسِلِ الْقَمِيصَ ____ وَسِخٌ.", ["فَإِنَّهُ", "فَإِنَّهَا", "لِأَنَّ هُوَ", "فَهُوَ إِنَّ"], "فَإِنَّ „denn“; الْقَمِيصُ männlich → فَإِنَّهُ.", ["الْقَمِيصُ ist männlich.", "Kein selbstständiges Pronomen.", "Falsche Reihenfolge."]),
  U("Bilde den Amr", "تَفْتَحُ", ["اِفْتَحْ", "اُفْتُحْ", "أَفْتَحْ", "فْتَحْ"], "Zweiter Radikal Fatḥa → Hamzat al-waṣl mit Kasra.", ["Der zweite Radikal hat Fatḥa → Kasra.", "Hamzat al-waṣl, nicht أَ.", "Kein Wort darf vokallos beginnen."]),
  U("Bilde den Amr", "تَدْخُلُ", ["اُدْخُلْ", "اِدْخُلْ", "أَدْخُلْ", "دْخُلْ"], "Zweiter Radikal Ḍamma → Hamzat al-waṣl mit Ḍamma.", ["Bei Ḍamma: Ḍamma am Anfang.", "Hamzat al-waṣl, nicht أَ.", "Kein Wort darf vokallos beginnen."]),
  U("Bilde den Amr", "تَشْرَبُ", ["اِشْرَبْ", "اُشْرُبْ", "اِشْرِبْ", "شْرَبْ"], "تَشْرَبُ → اِشْرَبْ.", ["Der zweite Radikal hat Fatḥa.", "Der zweite Radikal bleibt Fatḥa.", "Kein Wort darf vokallos beginnen."]),
  U("Für eine Frau", "اِجْلِسْ", ["اِجْلِسِي", "اِجْلِسْنَ", "اِجْلِسُوا", "تَجْلِسِينَ"], "du (f.): -ī.", ["Das ist „ihr (f.)“.", "Das ist „ihr (m.)“.", "Das ist Präsens."]),
  U("Für mehrere Männer", "اُكْتُبْ", ["اُكْتُبُوا", "اُكْتُبْنَ", "اُكْتُبِي", "تَكْتُبُونَ"], "ihr (m.): -ū.", ["Das ist für Frauen.", "Das ist Singular (f.).", "Das ist Präsens."]),
  U("Für mehrere Frauen", "اِفْتَحْ", ["اِفْتَحْنَ", "اِفْتَحُوا", "اِفْتَحِي", "تَفْتَحْنَ"], "ihr (f.): -na.", ["Das ist männlich.", "Das ist Singular.", "Das ist Präsens."]),
  U("Übersetze ins Arabische", "Trink das Wasser!", ["اِشْرَبِ الْمَاءَ!", "اِشْرَبْ الْمَاءُ!", "تَشْرَبُ الْمَاءَ!", "اُشْرُبِ الْمَاءَ!"], "Amr, vor al mit Kasra; Objekt manṣūb.", ["Kasra vor al; Objekt manṣūb.", "Das ist Präsens.", "Der zweite Radikal hat Fatḥa."]),
  F("Wie spricht man das? اِقْرَأْ وَاكْتُبْ", "", ["iqraʾ wa-ktub", "iqraʾ wa-uktub", "qraʾ wa-ktub", "iqraʾ wa-aktub"], "Das Hamzat al-waṣl fällt nach وَ weg.", ["Nach وَ wird das u nicht gesprochen.", "Am Satzanfang wird das i gesprochen.", "Das ist „ich schreibe“."])
]);

add("b2-15", [
  E("لَا ____ هُنَا! (Setz dich nicht hierher!)", ["تَجْلِسْ", "تَجْلِسُ", "اِجْلِسْ", "تَجْلِسِينَ"], "Verbot: لَا + Muḍāriʿ mit Sukūn.", ["Mit Ḍamma heißt es „du sitzt nicht“.", "Kein Amr nach لَا.", "Das ist für eine Frau mit Indikativ-nūn."]),
  E("لَا ____ يَا إِخْوَانُ!", ["تَذْهَبُوا", "تَذْهَبُونَ", "تَذْهَبْ", "اِذْهَبُوا"], "Verbot für „ihr (m.)“: das نَ fällt weg.", ["Im Verbot fällt das نَ weg.", "Das ist für einen Mann.", "Kein Amr nach لَا."]),
  E("لَا ____ يَا آمِنَةُ!", ["تَذْهَبِي", "تَذْهَبِينَ", "تَذْهَبْ", "تَذْهَبْنَ"], "Verbot für „du (f.)“: تَذْهَبِي.", ["Im Verbot fällt das نَ weg.", "Das ist für einen Mann.", "Das ist für mehrere Frauen."]),
  E("لَا ____ يَا أَخَوَاتُ!", ["تَذْهَبْنَ", "تَذْهَبِي", "تَذْهَبُوا", "تَذْهَبْنَا"], "Bei „ihr (f.)“ bleibt das نَ (es ist der Fāʿil).", ["Das ist Singular.", "Das ist männlich.", "Die Form gibt es nicht."]),
  E("لَا ____ الشَّيْطَانَ!", ["تَعْبُدِ", "تَعْبُدْ", "تَعْبُدُ", "اُعْبُدِ"], "Verbot mit Sukūn → vor al Kasra.", ["Vor al wird Sukūn zu Kasra.", "Mit Ḍamma ist es kein Verbot.", "Kein Amr nach لَا."]),
  E("كَادَ الْوَلَدُ ____.", ["يَضْحَكُ", "ضَحِكَ", "يَضْحَكْ", "ضَاحِكًا"], "كَادَ + Nomen + Muḍāriʿ.", ["Nach كَادَ steht der Muḍāriʿ.", "Kein Sukūn.", "Kein Partizip."]),
  E("____ الْجَرَسُ يَرِنُّ. (Die Glocke läutet gleich.)", ["يَكَادُ", "كَادَتْ", "لَعَلَّ", "إِنَّ"], "يَكَادُ = „gleich, fast“.", ["الْجَرَسُ ist männlich.", "Nach لَعَلَّ manṣūb.", "Nach إِنَّ manṣūb."]),
  E("____ الْأَعْمَالُ بِالنِّيَّاتِ.", ["إِنَّمَا", "إِنَّ", "لَكِنَّ", "كَأَنَّ"], "إِنَّمَا = „nur“; danach bleibt das Nomen marfūʿ.", ["Nach إِنَّ wäre es manṣūb.", "„aber“ passt nicht.", "„als ob“ passt nicht."]),
  E("____ الطَّعَامَ. (Ich esse das Essen.)", ["آكُلُ", "أَأْكُلُ", "أَكُلُ", "أُكُلُ"], "أَأْكُلُ → آكُلُ (zwei Hamzas).", ["Zwei Hamzas am Anfang werden zu آ.", "Es fehlt das lange ā.", "Falscher Vokal."]),
  U("Mach daraus ein Verbot", "تَخْرُجُ مِنَ الْفَصْلِ.", ["لَا تَخْرُجْ مِنَ الْفَصْلِ.", "لَا تَخْرُجُ مِنَ الْفَصْلِ.", "مَا تَخْرُجُ مِنَ الْفَصْلِ.", "لَا اُخْرُجْ مِنَ الْفَصْلِ."], "لَا + Sukūn.", ["Mit Ḍamma ist es eine Verneinung.", "مَا verneint nur.", "Kein Amr nach لَا."]),
  U("Mach daraus ein Verbot", "تَكْتُبُونَ بِالْقَلَمِ الْأَحْمَرِ.", ["لَا تَكْتُبُوا بِالْقَلَمِ الْأَحْمَرِ.", "لَا تَكْتُبُونَ بِالْقَلَمِ الْأَحْمَرِ.", "لَا تَكْتُبْ بِالْقَلَمِ الْأَحْمَرِ.", "لَا اُكْتُبُوا بِالْقَلَمِ الْأَحْمَرِ."], "Für „ihr (m.)“ fällt das نَ weg.", ["Das نَ muss weg.", "Das ist Singular.", "Kein Amr nach لَا."]),
  U("Statt Befehl: Verbot", "اِجْلِسِي هُنَا.", ["لَا تَجْلِسِي هُنَا.", "لَا اِجْلِسِي هُنَا.", "لَا تَجْلِسِينَ هُنَا.", "لَا تَجْلِسْ هُنَا."], "لَا + تَجْلِسِي (ohne نَ).", ["Kein Amr nach لَا.", "Das نَ muss weg.", "Das ist für einen Mann."]),
  U("Füge كَادَ hinzu", "الْإِمَامُ يَرْكَعُ.", ["يَكَادُ الْإِمَامُ يَرْكَعُ.", "يَكَادُ الْإِمَامَ يَرْكَعُ.", "يَكَادُ الْإِمَامُ رَكَعَ.", "يَكَادُ الْإِمَامُ يَرْكَعْ."], "يَكَادُ + Nomen marfūʿ + Muḍāriʿ.", ["Das Nomen bleibt marfūʿ.", "Danach Muḍāriʿ.", "Kein Sukūn."]),
  U("Mach daraus „nur …“", "أَنْظُرُ إِلَى الصُّوَرِ.", ["إِنَّمَا أَنْظُرُ إِلَى الصُّوَرِ.", "إِنَّ أَنْظُرُ إِلَى الصُّوَرِ.", "إِنَّمَا أَنْظُرْ إِلَى الصُّوَرِ.", "لَا أَنْظُرُ إِلَّا الصُّوَرِ."], "إِنَّمَا vor den Satz.", ["إِنَّ braucht ein Nomen.", "Kein Sukūn.", "Falsch gebaut."]),
  U("Übersetze ins Arabische", "Ich trinke (gewöhnlich) keinen Kaffee.", ["لَا أَشْرَبُ الْقَهْوَةَ.", "مَا شَرِبْتُ الْقَهْوَةَ.", "لَا تَشْرَبِ الْقَهْوَةَ.", "لَسْتُ أَشْرَبُ الْقَهْوَةَ."], "Gewohnheit → لَا + Muḍāriʿ.", ["Das ist Vergangenheit.", "Das ist ein Verbot.", "لَسْتُ nicht vor Verben."]),
  F("Was für ein لَا ist das? لَا أَفْهَمُ الْفَرَنْسِيَّةَ", "", ["لَا النَّافِيَةُ (verneinend)", "لَا النَّاهِيَةُ (verbietend)", "لَا als Antwort „nein“", "إِلَّا „außer“"], "Das Verb behält sein Ḍamma → verneinend.", ["Beim Verbot hätte das Verb Sukūn.", "Hier ist es Teil des Satzes.", "Das ist ein anderes Wort."])
]);

add("b2-16", [
  E("مَاذَا ____ يَا بِلَالُ؟ – أُرِيدُ مَاءً.", ["تُرِيدُ", "تَرِيدُ", "يُرِيدُ", "أَرَدْتَ"], "يُرِيدُ hat Ḍamma in der Vorsilbe: تُرِيدُ (du m.).", ["Die Vorsilbe hat Ḍamma (vierbuchstabiges Perfekt).", "Das heißt „er will“.", "Die Antwort steht im Präsens."]),
  E("مَاذَا ____ يَا إِخْوَانُ؟ – نُرِيدُ أَقْلَامًا.", ["تُرِيدُونَ", "يُرِيدُونَ", "تُرِيدِينَ", "نُرِيدُ"], "„ihr (m.)“ = تُرِيدُونَ.", ["Das heißt „sie“.", "Das ist „du (f.)“.", "Das heißt „wir“."]),
  E("نَسِيتُ ____ قُلْتَ لِي.", ["مَا", "مَنْ", "مَاذَا", "الَّذِينَ"], "Relatives مَا = „das, was“.", ["مَنْ bezieht sich auf Personen.", "مَاذَا fragt.", "الَّذِينَ ist Plural für Personen."]),
  E("رَأَيْتُ طَالِبًا ____ شَعْرٍ طَوِيلٍ.", ["ذَا", "ذُو", "ذِي", "ذَاتَ"], "ذُو im Akkusativ → ذَا.", ["ذُو ist Nominativ.", "ذِي ist Genitiv.", "ذَاتَ ist feminin."]),
  E("كَتَبْتُ إِلَى ____.", ["عُمَرَ", "عُمَرِ", "عُمَرٍ", "عُمَرُ"], "عُمَرُ (فُعَلُ) ist diptot → Genitiv mit Fatḥa.", ["Diptota bekommen kein Kasra.", "Diptota haben kein Tanwīn.", "Nach إِلَى kein Nominativ."]),
  E("هَذِهِ الشَّجَرَةُ ____.", ["خَضْرَاءُ", "أَخْضَرُ", "خَضْرَاءٌ", "خُضْرٌ"], "Feminine Farbe nach فَعْلَاءُ, diptot.", ["أَخْضَرُ ist maskulin.", "Diptoton: kein Tanwīn.", "Das ist Plural."]),
  E("الرِّجَالُ ____.", ["السُّودُ", "الْأَسْوَدُ", "السَّوْدَاءُ", "السُّودَانُ"], "Plural der Farben: فُعْلٌ → السُّودُ.", ["Das ist Singular maskulin.", "Das ist Singular feminin.", "Das ist ein Ländername."]),
  E("سَأَلْتُ ____. (ʿAmr)", ["عَمْرًا", "عَمْرٌو", "عَمْرًو", "عُمَرَ"], "Im Akkusativ fällt das stumme wāw weg: عَمْرًا.", ["Das ist Nominativ.", "Im Akkusativ fällt das wāw weg.", "Das ist ein anderer Name (ʿUmar)."]),
  E("رَأَيْتُ زَمِيلَكَ ____.", ["عَبَّاسًا", "عَبَّاسٌ", "عَبَّاسٍ", "لِعَبَّاسٍ"], "Badal steht im selben Fall wie das Bezugswort (manṣūb).", ["Der Badal folgt dem Akkusativ.", "Kein Genitiv.", "Keine Präposition."]),
  E("حَفِظْتُ سُورَةَ الرَّحْمَنِ وَسُورَةً ____.", ["أُخْرَى", "آخَرَ", "أُخْرًى", "آخَرُ"], "آخَرُ → feminin أُخْرَى.", ["سُورَةٌ ist feminin.", "Kein Tanwīn (diptot).", "Maskulin und Nominativ."]),
  E("هَذَا الْجَوَابُ ____ صَحِيحٍ.", ["غَيْرُ", "غَيْرٌ", "لَيْسَ", "لَا"], "غَيْرُ = „nicht-, un-“ als Muḍāf.", ["Muḍāf → kein Tanwīn.", "Nach لَيْسَ würde بِصَحِيحٍ folgen.", "لَا passt so nicht."]),
  U("Statt „er will“: „er wollte“", "يُرِيدُ مَاءً.", ["أَرَادَ مَاءً.", "رَادَ مَاءً.", "أَرَدْتُ مَاءً.", "يَرَادُ مَاءً."], "Perfekt: أَرَادَ.", ["Das Perfekt hat vier Buchstaben: أَرَادَ.", "Das heißt „ich wollte“.", "Die Form gibt es nicht."]),
  U("Statt Nominativ: Akkusativ", "فِي فَصْلِنَا طَالِبٌ ذُو شَعْرٍ طَوِيلٍ.", ["رَأَيْتُ طَالِبًا ذَا شَعْرٍ طَوِيلٍ.", "رَأَيْتُ طَالِبًا ذُو شَعْرٍ طَوِيلٍ.", "رَأَيْتُ طَالِبًا ذِي شَعْرٍ طَوِيلٍ.", "رَأَيْتُ طَالِبٌ ذُو شَعْرٍ طَوِيلٍ."], "ذُو folgt dem Akkusativ: ذَا.", ["ذُو muss ذَا werden.", "ذِي ist Genitiv.", "Objekt → manṣūb."]),
  U("Mach es feminin", "قَمِيصٌ أَبْيَضُ", ["سَيَّارَةٌ بَيْضَاءُ", "سَيَّارَةٌ أَبْيَضُ", "سَيَّارَةٌ بَيْضَاءٌ", "سَيَّارَةٌ بِيضٌ"], "Feminine Farbe: بَيْضَاءُ.", ["Die Farbe muss feminin werden.", "Kein Tanwīn.", "Das ist Plural."]),
  U("Füge den Badal ein: „mein Bruder Ḥusain“", "أَيْنَ أَخُوكَ؟", ["أَيْنَ أَخُوكَ الْحُسَيْنُ؟", "أَيْنَ أَخُوكَ الْحُسَيْنَ؟", "أَيْنَ أَخُوكَ الْحُسَيْنِ؟", "أَيْنَ الْحُسَيْنُ أَخِيكَ؟"], "Badal im selben Fall wie أَخُوكَ (Nominativ).", ["Der Badal folgt dem Nominativ.", "Der Badal folgt dem Nominativ.", "Das Bezugswort steht zuerst."]),
  U("Übersetze ins Arabische", "Ich habe nichts gegessen.", ["مَا أَكَلْتُ شَيْئًا.", "لَا أَكَلْتُ شَيْئًا.", "مَا أَكَلْتُ شَيْءٌ.", "مَا آكُلُ شَيْئًا."], "مَا + Perfekt, شَيْئًا als Objekt manṣūb.", ["Das Perfekt wird mit مَا verneint.", "Objekt → manṣūb.", "Das ist Präsens."]),
  F("Wo ist مَا ein Relativpronomen (مَا الْمَوْصُولَةُ)?", "", ["أَشْرَبُ مَا تَشْرَبُ.", "مَا اسْمُكَ؟", "مَا فَهِمْتُ الدَّرْسَ.", "مَا أَجْمَلَ السَّمَاءَ!"], "„Ich trinke, was du trinkst“ – مَا = „das, was“.", ["Hier ist مَا ein Fragewort.", "Hier verneint مَا.", "Hier drückt مَا Staunen aus."])
]);

add("b2-17", [
  E("أُرِيدُ أَنْ ____ إِلَى الْمَسْجِدِ.", ["أَذْهَبَ", "أَذْهَبُ", "أَذْهَبْ", "ذَهَبْتُ"], "Nach أَنْ → Muḍāriʿ manṣūb (-a).", ["Nach أَنْ kein Ḍamma.", "Sukūn ist Jussiv.", "Nach أَنْ hier Muḍāriʿ."]),
  E("أَتُرِيدُ أَنْ ____؟", ["تَأْكُلَ", "تَأْكُلُ", "تَأْكُلْ", "يَأْكُلَ"], "„du“ → تَأْكُلَ (manṣūb).", ["Nach أَنْ kein Ḍamma.", "Sukūn ist Jussiv.", "Das heißt „er“."]),
  E("تُرِيدُ زَيْنَبُ أَنْ ____ اللَّحْمَ.", ["تَطْبُخَ", "يَطْبُخَ", "تَطْبُخُ", "طَبَخَتْ"], "Zainab → تَـ, manṣūb.", ["Zainab ist weiblich.", "Nach أَنْ kein Ḍamma.", "Nach أَنْ hier Muḍāriʿ."]),
  E("أَدْرُسُ الْعَرَبِيَّةَ ____ الْقُرْآنَ.", ["لِأَفْهَمَ", "لِأَفْهَمُ", "لِأَنَّ أَفْهَمُ", "لِفَهِمْتُ"], "lām at-taʿlīl → Muḍāriʿ manṣūb.", ["Nach dem لِـ des Grundes manṣūb.", "لِأَنَّ braucht ein Nomen.", "Kein Perfekt nach لِـ."]),
  E("فَتَحْتُ النَّافِذَةَ ____ الذُّبَابُ.", ["لِيَخْرُجَ", "لِيَخْرُجُ", "لِيَخْرُجُوا", "لِخَرَجَ"], "„damit die Fliegen hinausgehen“: لِيَخْرُجَ.", ["Nach لِـ manṣūb.", "Verb vor dem Fāʿil bleibt Singular.", "Kein Perfekt nach لِـ."]),
  E("أَ____ أَنْ أَجْلِسَ هُنَا؟ (Kann ich …?)", ["يُمْكِنُنِي", "يُمْكِنُكَ", "أُمْكِنُ", "يُمْكِنِي"], "يُمْكِنُ + ـنِي = „ist mir möglich“.", ["ـكَ heißt „dir“.", "Die Form gibt es nicht.", "Es fehlt das nūn al-wiqāya."]),
  E("مَا رَأَيْتُهُ ____ يَوْمِ السَّبْتِ.", ["مُنْذُ", "قَبْلَ", "بَعْدَ", "فِي"], "„seit“ = مُنْذُ.", ["قَبْلَ heißt „vor“.", "بَعْدَ heißt „nach“.", "فِي heißt „in“."]),
  E("____ الْبَقَرَةُ مِنَ الْحَقْلِ.", ["خَرَجَتِ", "خَرَجَ", "خَرَجُوا", "خَرَجْنَ"], "Weibliches Lebewesen → Verb muss feminin sein.", ["Bei weiblichen Lebewesen nicht maskulin.", "Das ist Plural.", "Das ist Plural."]),
  E("لَا أَسْمَحُ لَكَ ____.", ["بِالدُّخُولِ", "الدُّخُولَ", "لِلدُّخُولِ", "فِي الدُّخُولِ"], "سَمَحَ لَهُ بِـ.", ["Es braucht بِـ.", "Es braucht بِـ.", "Es braucht بِـ."]),
  U("Mach daraus „ich will …“", "أَشْرَبُ الشَّايَ.", ["أُرِيدُ أَنْ أَشْرَبَ الشَّايَ.", "أُرِيدُ أَنْ أَشْرَبُ الشَّايَ.", "أُرِيدُ أَشْرَبُ الشَّايَ.", "أُرِيدُ أَنْ شَرِبْتُ الشَّايَ."], "أُرِيدُ أَنْ + manṣūb.", ["Nach أَنْ manṣūb.", "Es fehlt أَنْ.", "Muḍāriʿ nach أَنْ."]),
  U("Mach daraus „er will …“", "يَرْجِعُ إِلَى بَلَدِهِ.", ["يُرِيدُ أَنْ يَرْجِعَ إِلَى بَلَدِهِ.", "يُرِيدُ أَنْ يَرْجِعُ إِلَى بَلَدِهِ.", "يُرِيدُ أَنْ تَرْجِعَ إِلَى بَلَدِهِ.", "أُرِيدُ أَنْ يَرْجِعَ إِلَى بَلَدِهِ."], "يُرِيدُ أَنْ يَرْجِعَ.", ["Nach أَنْ manṣūb.", "Er → يَـ.", "Das heißt „ich will, dass er …“."]),
  U("Verbinde mit لِـ (Grund)", "ذَهَبْتُ إِلَى الْحَمَّامِ. أَغْسِلُ وَجْهِي.", ["ذَهَبْتُ إِلَى الْحَمَّامِ لِأَغْسِلَ وَجْهِي.", "ذَهَبْتُ إِلَى الْحَمَّامِ لِأَغْسِلُ وَجْهِي.", "ذَهَبْتُ إِلَى الْحَمَّامِ لِأَنْ أَغْسِلُ وَجْهِي.", "ذَهَبْتُ إِلَى الْحَمَّامِ لِغَسَلْتُ وَجْهِي."], "لِـ + Muḍāriʿ manṣūb.", ["Nach لِـ manṣūb.", "Nach أَنْ manṣūb.", "Kein Perfekt nach لِـ."]),
  U("Frag höflich: „Kann ich …?“", "أَخْرُجُ الْآنَ.", ["أَيُمْكِنُنِي أَنْ أَخْرُجَ الْآنَ؟", "أَيُمْكِنُنِي أَنْ أَخْرُجُ الْآنَ؟", "أَيُمْكِنُكَ أَنْ أَخْرُجَ الْآنَ؟", "أَيُمْكِنُنِي أَخْرُجُ الْآنَ؟"], "أَيُمْكِنُنِي أَنْ + manṣūb.", ["Nach أَنْ manṣūb.", "ـكَ heißt „dir“.", "Es fehlt أَنْ."]),
  U("Mach es feminin", "دَخَلَ مُحَمَّدٌ.", ["دَخَلَتْ آمِنَةُ.", "دَخَلَ آمِنَةُ.", "دَخَلَتْ آمِنَةٌ.", "دَخَلْتِ آمِنَةُ."], "Feminine Person → Verb feminin; Name diptot.", ["Bei Frauen muss das Verb feminin sein.", "Weibliche Namen: kein Tanwīn.", "Das heißt „du (f.) tratst ein“."]),
  U("Übersetze ins Arabische", "Allah hat uns erschaffen, damit wir Ihn anbeten.", ["خَلَقَنَا اللَّهُ لِنَعْبُدَهُ.", "خَلَقَنَا اللَّهُ لِنَعْبُدُهُ.", "خَلَقَنَا اللَّهُ لِأَنَّ نَعْبُدَهُ.", "خَلَقَنَا اللَّهَ لِنَعْبُدَهُ."], "lām at-taʿlīl + manṣūb.", ["Nach لِـ manṣūb.", "لِأَنَّ braucht ein Nomen.", "اللَّهُ ist Fāʿil (marfūʿ)."]),
  F("Welcher Satz ist auch richtig (Sache feminin)?", "", ["خَرَجَ السَّيَّارَةُ.", "خَرَجَ الْبَقَرَةُ.", "ذَهَبَ مَرْيَمُ.", "دَخَلَ آمِنَةُ."], "Bei grammatisch femininen Sachen darf das Verb maskulin sein.", ["Die Kuh ist ein weibliches Lebewesen.", "Maryam ist eine Frau.", "Āmina ist eine Frau."])
]);

add("b2-18", [
  E("مَاذَا تُرِيدِينَ أَنْ ____ يَا آمِنَةُ؟", ["تَشْرَبِي", "تَشْرَبِينَ", "تَشْرَبَ", "تَشْرَبْنَ"], "-īna verliert nach أَنْ das nūn.", ["Nach أَنْ fällt das nūn weg.", "Das ist „du (m.)“.", "Das heißt „ihr (f.)“."]),
  E("أَيْنَ تُرِيدُونَ أَنْ ____ يَا إِخْوَانُ؟", ["تَذْهَبُوا", "تَذْهَبُونَ", "تَذْهَبَ", "يَذْهَبُوا"], "-ūna verliert das nūn.", ["Nach أَنْ fällt das nūn weg.", "Das ist Singular.", "Das heißt „sie“."]),
  E("تُرِيدُ الطَّالِبَاتُ أَنْ ____ فِي الْحَدِيقَةِ.", ["يَجْلِسْنَ", "يَجْلِسُوا", "يَجْلِسَ", "تَجْلِسَ"], "يَجْلِسْنَ bleibt unverändert.", ["Das ist männlich.", "Das ist Singular.", "Das ist Singular."]),
  E("سَاعَتِي ____.", ["كَسَاعَتِكَ", "كَسَاعَتُكَ", "كَسَاعَتَكَ", "كَأَنْتَ"], "كَـ ist Präposition → majrūr.", ["Nach كَـ majrūr.", "Nach كَـ majrūr.", "كَـ nicht vor Pronomen."]),
  E("هُوَ ____. (wie ich)", ["كَمِثْلِي", "كَأَنَا", "كِي", "مِثْلَ أَنَا"], "Bei Pronomen: كَمِثْلِـ.", ["كَـ nicht vor selbstständigen Pronomen.", "Die Form gibt es nicht.", "Kein selbstständiges Pronomen."]),
  E("حَضَرَ الطُّلَّابُ ____.", ["كُلُّهُمْ", "كُلَّهُمْ", "كُلُّهُنَّ", "كُلُّهُ"], "Taʾkīd: gleicher Fall, Pronomen bezieht sich zurück.", ["Gleicher Fall wie الطُّلَّابُ.", "ـهُنَّ ist feminin.", "ـهُ ist Singular."]),
  E("قَرَأْتُ الْكِتَابَ ____.", ["كُلَّهُ", "كُلُّهُ", "كُلِّهِ", "كُلَّهَا"], "Bekräftigt ein Objekt → manṣūb.", ["Gleicher Fall wie الْكِتَابَ.", "Kein Genitiv.", "الْكِتَابُ ist maskulin."]),
  E("يَا ____ النَّاسُ!", ["أَيُّهَا", "أَيُّ", "أَيَّتُهَا", "أَيَّهَا"], "Vor einem Wort mit Artikel: يَا أَيُّهَا.", ["Es braucht أَيُّهَا.", "Das ist feminin.", "Falscher Vokal."]),
  E("كِتَابُ التَّارِيخِ ____ مُفِيدٌ.", ["هَذَا", "الْهَذَا", "هَذِهِ", "هَذَانِ"], "Bei einer Iḍāfa steht هَذَا am Ende.", ["Demonstrativa bekommen keinen Artikel.", "كِتَابٌ ist maskulin.", "Es ist ein Buch."]),
  U("Mach daraus „ihr wollt …“", "تَخْرُجُونَ مِنَ الْفَصْلِ.", ["تُرِيدُونَ أَنْ تَخْرُجُوا مِنَ الْفَصْلِ.", "تُرِيدُونَ أَنْ تَخْرُجُونَ مِنَ الْفَصْلِ.", "تُرِيدُونَ أَنْ تَخْرُجَ مِنَ الْفَصْلِ.", "تُرِيدُ أَنْ تَخْرُجُوا مِنَ الْفَصْلِ."], "Nach أَنْ fällt das nūn weg.", ["Das nūn muss weg.", "Das ist Singular.", "Das heißt „du willst“."]),
  U("Mach daraus „sie (f. Pl.) wollen …“", "يَسْمَعْنَ الْأَخْبَارَ.", ["يُرِدْنَ أَنْ يَسْمَعْنَ الْأَخْبَارَ.", "يُرِيدُونَ أَنْ يَسْمَعُوا الْأَخْبَارَ.", "يُرِدْنَ أَنْ يَسْمَعَ الْأَخْبَارَ.", "يُرِدْنَ أَنْ يَسْمَعْنَا الْأَخْبَارَ."], "يَسْمَعْنَ bleibt unverändert.", ["Das ist männlich.", "Das ist Singular.", "Die Form gibt es nicht."]),
  U("Bekräftige mit كُلّ", "خَرَجَتِ الطَّالِبَاتُ.", ["خَرَجَتِ الطَّالِبَاتُ كُلُّهُنَّ.", "خَرَجَتِ الطَّالِبَاتُ كُلُّهُمْ.", "خَرَجَتِ الطَّالِبَاتُ كُلَّهُنَّ.", "خَرَجَتْ كُلُّ الطَّالِبَاتُ."], "كُلُّهُنَّ, gleicher Fall (marfūʿ).", ["ـهُمْ ist maskulin.", "Gleicher Fall: marfūʿ.", "Falsche Form."]),
  U("Ruf an (mit أَيُّهَا)", "الرَّجُلُ", ["يَا أَيُّهَا الرَّجُلُ!", "يَا الرَّجُلُ!", "يَا رَجُلٌ!", "أَيُّهَا يَا الرَّجُلُ!"], "يَا vor al → يَا أَيُّهَا.", ["Nicht يَا direkt vor al.", "Kein Tanwīn nach يَا.", "Falsche Reihenfolge."]),
  U("Übersetze ins Arabische", "Dieses Haus ist wie die Moschee.", ["هَذَا الْبَيْتُ كَالْمَسْجِدِ.", "هَذَا الْبَيْتُ كَالْمَسْجِدُ.", "هَذَا بَيْتٌ كَالْمَسْجِدِ.", "هَذَا الْبَيْتُ مِثْلُ الْمَسْجِدُ."], "كَـ + majrūr.", ["Nach كَـ majrūr.", "„dieses Haus“ = هَذَا الْبَيْتُ.", "Nach مِثْلُ majrūr."]),
  F("Was ist أَلَّا?", "", ["أَنْ لَا", "إِلَّا", "أَلَا", "لَا"], "أَلَّا ist die Verbindung von أَنْ und لَا.", ["إِلَّا heißt „außer“.", "أَلَا ist ein anderes Wort.", "Es fehlt أَنْ."])
]);

add("b2-19", [
  E("لَنْ ____ إِلَى الرِّيَاضِ غَدًا.", ["أَذْهَبَ", "أَذْهَبُ", "سَأَذْهَبُ", "أَذْهَبْ"], "Nach لَنْ: manṣūb, kein سَـ.", ["Nach لَنْ manṣūb.", "سَـ fällt weg.", "Sukūn ist Jussiv."]),
  E("أَلَنْ ____ إِلَى الطَّائِفِ يَا آمِنَةُ؟", ["تَذْهَبِي", "تَذْهَبِينَ", "تَذْهَبَ", "تَذْهَبْنَ"], "Nach لَنْ fällt das nūn weg.", ["Das nūn muss weg.", "Das ist „du (m.)“.", "Das heißt „ihr (f.)“."]),
  E("أَلَنْ ____ التُّرْكِيَّةَ يَا أَخَوَاتُ؟", ["تَدْرُسْنَ", "تَدْرُسُوا", "تَدْرُسِي", "تَدْرُسْ"], "تَدْرُسْنَ bleibt unverändert.", ["Das ist männlich.", "Das ist Singular.", "Das ist Singular."]),
  E("لَنْ أَشْرَبَ الْخَمْرَ ____.", ["أَبَدًا", "قَطُّ", "أَيْضًا", "جِدًّا"], "Verneintes Futur + أَبَدًا „niemals“.", ["قَطُّ steht beim verneinten Perfekt.", "„auch“ passt nicht.", "„sehr“ passt nicht."]),
  E("مَا رَأَيْتُهُ ____.", ["قَطُّ", "أَبَدًا", "غَدًا", "الْآنَ"], "Verneintes Perfekt + قَطُّ „nie (bisher)“.", ["أَبَدًا steht beim Futur.", "„morgen“ passt nicht.", "„jetzt“ passt nicht."]),
  E("____ أَعْرِفُ رَقْمَ هَاتِفِهِ.", ["لَا", "لَنْ", "مَا", "لَمْ"], "Muḍāriʿ (Gegenwart) → لَا.", ["Mit لَنْ müsste أَعْرِفَ folgen.", "مَا eher beim Perfekt.", "Mit لَمْ müsste أَعْرِفْ folgen."]),
  E("لَنْ ____ الطُّلَّابُ غَدًا.", ["يَخْرُجَ", "يَخْرُجُوا", "يَخْرُجُ", "يَخْرُجُونَ"], "Verb vorne → Singular; nach لَنْ manṣūb.", ["Verb vor dem Fāʿil bleibt Singular.", "Nach لَنْ manṣūb.", "Nach لَنْ manṣūb."]),
  U("Verneine das Futur", "سَأَكْتُبُ إِلَيْهِ.", ["لَنْ أَكْتُبَ إِلَيْهِ.", "لَنْ سَأَكْتُبُ إِلَيْهِ.", "لَا سَأَكْتُبُ إِلَيْهِ.", "لَنْ أَكْتُبُ إِلَيْهِ."], "سَـ fällt weg, لَنْ + manṣūb.", ["سَـ fällt weg.", "Futur verneint man mit لَنْ.", "Nach لَنْ manṣūb."]),
  U("Verneine das Futur", "سَيَذْهَبُونَ إِلَى السُّوقِ.", ["لَنْ يَذْهَبُوا إِلَى السُّوقِ.", "لَنْ يَذْهَبُونَ إِلَى السُّوقِ.", "لَنْ سَيَذْهَبُوا إِلَى السُّوقِ.", "لَا يَذْهَبُوا إِلَى السُّوقِ."], "Das nūn fällt weg.", ["Das nūn muss weg.", "سَـ fällt weg.", "Das wäre ein Verbot/falsch."]),
  U("Verneine das Futur", "سَتَرْجِعِينَ الْيَوْمَ.", ["لَنْ تَرْجِعِي الْيَوْمَ.", "لَنْ تَرْجِعِينَ الْيَوْمَ.", "لَنْ تَرْجِعَ الْيَوْمَ.", "مَا تَرْجِعِينَ الْيَوْمَ."], "-īna → -ī.", ["Das nūn muss weg.", "Das ist „du (m.)“.", "Futur verneint man mit لَنْ."]),
  U("Verneine (Vergangenheit, Gegenwart, Zukunft): „ich ging nicht“", "ذَهَبْتُ", ["مَا ذَهَبْتُ", "لَا أَذْهَبُ", "لَنْ أَذْهَبَ", "لَسْتُ ذَهَبْتُ"], "Perfekt → مَا.", ["Das heißt „ich gehe nicht“.", "Das heißt „ich werde nicht gehen“.", "لَيْسَ nicht vor Verben."]),
  U("Verstärke mit „niemals“", "لَنْ أَدْرُسَهَا.", ["لَنْ أَدْرُسَهَا أَبَدًا.", "لَنْ أَدْرُسَهَا قَطُّ.", "أَبَدًا لَنْ أَدْرُسُهَا.", "لَنْ أَبَدًا أَدْرُسَهَا."], "أَبَدًا am Ende.", ["قَطُّ beim Perfekt.", "Nach لَنْ manṣūb.", "أَبَدًا steht am Ende."]),
  U("Übersetze ins Arabische", "Wir werden ihn nie vergessen.", ["لَنْ نَنْسَاهُ أَبَدًا.", "لَا نَنْسَاهُ قَطُّ.", "لَنْ نَنْسَاهُ قَطُّ.", "مَا نَسِينَاهُ أَبَدًا."], "Futur verneint + أَبَدًا.", ["Futur → لَنْ.", "قَطُّ beim Perfekt.", "Das ist Vergangenheit."]),
  F("Was heißt لَنْ أَذْهَبَ?", "لَنْ أَذْهَبَ", ["Ich werde nicht gehen.", "Ich ging nicht.", "Ich gehe nicht.", "Geh nicht!"], "لَنْ verneint das Futur.", ["Das wäre مَا ذَهَبْتُ.", "Das wäre لَا أَذْهَبُ.", "Das wäre لَا تَذْهَبْ."])
]);

add("b2-20", [
  E("أُرِيدُ ____. (zwei Riyal)", ["رِيَالَيْنِ", "رِيَالَانِ", "رِيَالَاتٍ", "رِيَالًا"], "Dual im Akkusativ: -aini.", ["-āni ist Nominativ.", "Plural passt nicht.", "Singular passt nicht."]),
  E("هَذَانِ ____.", ["رِيَالَانِ", "رِيَالَيْنِ", "رِيَالَاتٌ", "رِيَالٌ"], "Khabar → Nominativ Dual -āni.", ["-aini ist Akk./Gen.", "Plural passt nicht.", "Singular passt nicht."]),
  E("اشْتَرَيْتُهُ بِ____.", ["رِيَالَيْنِ", "رِيَالَانِ", "رِيَالَيْنَ", "رِيَالَانَ"], "Nach بِـ → Genitiv Dual -aini.", ["Nach بِـ kein Nominativ.", "Das nūn hat Kasra.", "Falsch."]),
  E("رَجَعْتُ بَعْدَ ____.", ["يَوْمَيْنِ", "يَوْمَانِ", "أَيَّامٍ", "يَوْمٍ"], "Nach بَعْدَ → Genitiv Dual.", ["Nach بَعْدَ kein Nominativ.", "Plural passt nicht.", "Singular passt nicht."]),
  E("جَاءَ مُدَرِّسَانِ ____.", ["جَدِيدَانِ", "جَدِيدَيْنِ", "جُدُدٌ", "جَدِيدٌ"], "Adjektiv folgt: Nominativ Dual.", ["Der Fāʿil ist marfūʿ.", "Plural passt nicht.", "Singular passt nicht."]),
  E("لِي أَخَوَانِ: ____ طَبِيبٌ وَالْآخَرُ مُهَنْدِسٌ.", ["أَحَدُهُمَا", "إِحْدَاهُمَا", "أَحَدُهُمْ", "وَاحِدٌ"], "„einer von beiden“ (m.) = أَحَدُهُمَا.", ["Das ist feminin.", "ـهُمْ ist Plural.", "So steht es nicht im Buch."]),
  E("لِي أُخْتَانِ: إِحْدَاهُمَا مُدَرِّسَةٌ وَ____ مُمَرِّضَةٌ.", ["الْأُخْرَى", "الْآخَرُ", "أُخْرَى", "الْأُخْتُ"], "Feminin: وَالْأُخْرَى.", ["Das ist maskulin.", "Bestimmt: الْأُخْرَى.", "Gemeint ist „die andere“."]),
  E("هُوَ ذُو ____. (Heuchler)", ["وَجْهَيْنِ", "وَجْهَانِ", "وُجُوهٍ", "وَجْهٍ"], "Muḍāf ilaihi → Genitiv Dual.", ["Nach ذُو Genitiv.", "„zwei Gesichter“ – Dual.", "„zwei Gesichter“ – Dual."]),
  U("Setz den Dual als Objekt ein", "عِنْدِي كِتَابَانِ.", ["قَرَأْتُ كِتَابَيْنِ.", "قَرَأْتُ كِتَابَانِ.", "قَرَأْتُ كُتُبًا.", "قَرَأْتُ كِتَابَيْنَ."], "Objekt → -aini.", ["Objekt → Akkusativ.", "Plural passt nicht.", "Das nūn hat Kasra."]),
  U("Setz مِنْ davor", "إِذَاعَتَانِ", ["مِنْ إِذَاعَتَيْنِ", "مِنْ إِذَاعَتَانِ", "مِنْ إِذَاعَاتٍ", "مِنْ إِذَاعَةَيْنِ"], "Genitiv Dual -aini; ة wird ت.", ["Nach مِنْ kein Nominativ.", "Plural passt nicht.", "ة wird zu ت."]),
  U("Mach es zum Dual", "سَأَلْتُ الطَّالِبَ.", ["سَأَلْتُ الطَّالِبَيْنِ.", "سَأَلْتُ الطَّالِبَانِ.", "سَأَلْتُ الطُّلَّابَ.", "سَأَلْتُ الطَّالِبَتَيْنِ."], "Objekt → -aini.", ["Objekt → Akkusativ.", "Das ist Plural.", "Das ist feminin."]),
  U("Mach es zum Dual", "فِي بَيْتِي غُرْفَةٌ كَبِيرَةٌ.", ["فِي بَيْتِي غُرْفَتَانِ كَبِيرَتَانِ.", "فِي بَيْتِي غُرْفَتَيْنِ كَبِيرَتَيْنِ.", "فِي بَيْتِي غُرْفَتَانِ كَبِيرَانِ.", "فِي بَيْتِي غُرَفٌ كَبِيرَةٌ."], "Mubtadaʾ → Nominativ -āni.", ["Mubtadaʾ ist marfūʿ.", "Das Adjektiv bleibt feminin.", "Das ist Plural."]),
  U("Übersetze ins Arabische", "Ich habe den Lehrer nach zwei Stunden gesehen.", ["رَأَيْتُ الْمُدَرِّسَ بَعْدَ سَاعَتَيْنِ.", "رَأَيْتُ الْمُدَرِّسَ بَعْدَ سَاعَتَانِ.", "رَأَيْتُ الْمُدَرِّسُ بَعْدَ سَاعَتَيْنِ.", "رَأَيْتُ الْمُدَرِّسَ بَعْدَ سَاعَاتٍ."], "Nach بَعْدَ → -aini.", ["Nach بَعْدَ Genitiv.", "Objekt → manṣūb.", "Plural passt nicht."]),
  F("Welche Endung hat der Dual im Akkusativ und Genitiv?", "", ["ـَيْنِ (-aini)", "ـَانِ (-āni)", "ـِينَ (-īna)", "ـُونَ (-ūna)"], "Akk./Gen. Dual = -aini.", ["Das ist Nominativ.", "Das ist männlicher Plural Akk./Gen.", "Das ist männlicher Plural Nom."])
]);

add("b2-21", [
  E("لَمْ ____ إِلَى الْمَدْرَسَةِ أَمْسِ.", ["يَذْهَبْ", "يَذْهَبُ", "يَذْهَبَ", "ذَهَبَ"], "Nach لَمْ → majzūm (Sukūn).", ["Nach لَمْ kein Ḍamma.", "Fatḥa ist Subjunktiv.", "Nach لَمْ steht der Muḍāriʿ."]),
  E("لَمْ ____ هَذَا الدَّرْسَ.", ["أَفْهَمْ", "أَفْهَمُ", "فَهِمْتُ", "أَفْهَمَ"], "لَمْ + Sukūn.", ["Nach لَمْ Sukūn.", "Nach لَمْ steht der Muḍāriʿ.", "Fatḥa ist Subjunktiv."]),
  E("أَحَضَرَ الطُّلَّابُ الْجُدُدُ؟ – لَا، لَمْ ____.", ["يَحْضُرُوا", "يَحْضُرُونَ", "يَحْضُرْ", "حَضَرُوا"], "-ūna verliert nach لَمْ das nūn.", ["Das nūn muss weg.", "Ohne Fāʿil danach braucht es die Pluralform.", "Nach لَمْ Muḍāriʿ."]),
  E("الطَّالِبَاتُ لَمْ ____ إِلَى الْمَكْتَبَةِ.", ["يَذْهَبْنَ", "يَذْهَبُوا", "يَذْهَبْ", "تَذْهَبْ"], "يَذْهَبْنَ bleibt unverändert.", ["Das ist männlich.", "Das ist Singular.", "Das ist Singular."]),
  E("أَلَمْ ____ الرِّسَالَةَ؟", ["تَكْتُبِ", "تَكْتُبْ", "تَكْتُبُ", "تَكْتُبَ"], "Sukūn + folgendes al → Kasra.", ["Vor al wird Sukūn zu Kasra.", "Nach لَمْ kein Ḍamma.", "Fatḥa ist Subjunktiv."]),
  E("____ أَشْرَبِ الْقَهْوَةَ. (noch nicht)", ["لَمَّا", "لَمْ", "لَنْ", "لَا"], "„noch nicht“ = لَمَّا.", ["لَمْ heißt nur „nicht“.", "لَنْ ist Futur.", "لَا mit Kasra-Endung passt nicht."]),
  E("مَا عِنْدِي قَلَمٌ ____ كِتَابٌ.", ["وَلَا", "وَمَا", "أَوْ", "وَلَمْ"], "„weder … noch“ = مَا … وَلَا.", ["Das zweite Glied mit وَلَا.", "„oder“ passt nicht.", "لَمْ vor Nomen geht nicht."]),
  U("Verneine mit لَمْ", "ذَهَبْتُ إِلَى السُّوقِ.", ["لَمْ أَذْهَبْ إِلَى السُّوقِ.", "لَمْ ذَهَبْتُ إِلَى السُّوقِ.", "لَمْ أَذْهَبُ إِلَى السُّوقِ.", "لَمْ أَذْهَبَ إِلَى السُّوقِ."], "لَمْ + Muḍāriʿ majzūm = Vergangenheit verneint.", ["Nach لَمْ kein Perfekt.", "Nach لَمْ Sukūn.", "Fatḥa ist Subjunktiv."]),
  U("Verneine mit لَمْ", "كَتَبْتِ الدَّرْسَ.", ["لَمْ تَكْتُبِي الدَّرْسَ.", "لَمْ تَكْتُبِينَ الدَّرْسَ.", "لَمْ تَكْتُبْ الدَّرْسَ.", "لَمْ كَتَبْتِ الدَّرْسَ."], "-īna → -ī.", ["Das nūn muss weg.", "Das ist „du (m.)“.", "Nach لَمْ kein Perfekt."]),
  U("Verneine mit لَمْ", "حَفِظَتِ الطَّالِبَةُ الْقُرْآنَ.", ["لَمْ تَحْفَظِ الطَّالِبَةُ الْقُرْآنَ.", "لَمْ تَحْفَظْ الطَّالِبَةُ الْقُرْآنَ.", "لَمْ تَحْفَظُ الطَّالِبَةُ الْقُرْآنَ.", "لَمْ يَحْفَظِ الطَّالِبَةُ الْقُرْآنَ."], "Sukūn vor al → Kasra.", ["Vor al wird Sukūn zu Kasra.", "Nach لَمْ kein Ḍamma.", "Die Studentin ist weiblich."]),
  U("Statt „nicht“: „noch nicht“", "لَمْ يَرْجِعْ أَبِي.", ["لَمَّا يَرْجِعْ أَبِي.", "لَمَّا يَرْجِعَ أَبِي.", "لَنْ يَرْجِعَ أَبِي.", "لَمَّا يَرْجِعُ أَبِي."], "لَمْ → لَمَّا, Jussiv bleibt.", ["Nach لَمَّا Sukūn, nicht Fatḥa.", "Das ist Futur.", "Nach لَمَّا Sukūn."]),
  U("Weder … noch", "مَا فِي الثَّلَّاجَةِ مَاءٌ. مَا فِي الثَّلَّاجَةِ عَصِيرٌ.", ["مَا فِي الثَّلَّاجَةِ مَاءٌ وَلَا عَصِيرٌ.", "مَا فِي الثَّلَّاجَةِ مَاءٌ وَمَا عَصِيرٌ.", "مَا فِي الثَّلَّاجَةِ مَاءٌ أَوْ عَصِيرٌ.", "لَا فِي الثَّلَّاجَةِ مَاءٌ وَلَا عَصِيرًا."], "مَا … وَلَا.", ["Das zweite Glied mit وَلَا.", "„oder“ ändert die Bedeutung.", "Falsche Form."]),
  F("Welche Wortart ist لَيْسَ?", "لَيْسَ", ["Verb (فِعْلٌ)", "Partikel (حَرْفٌ)", "Nomen (اسْمٌ)", "Pronomen"], "لَيْسَ wird wie ein Verb gebeugt (لَسْتُ، لَسْنَا).", ["Partikeln werden nicht gebeugt.", "Kein Nomen.", "Pronomen sind Nomen."]),
  F("Welche Wortart ist قَبْلَ?", "قَبْلَ", ["Nomen (اسْمٌ)", "Partikel (حَرْفٌ)", "Verb (فِعْلٌ)", "keine"], "قَبْلَ ist ein Nomen (Muḍāf).", ["Es ist Muḍāf – also Nomen.", "Kein Verb.", "Es gibt nur drei Wortarten."]),
  U("Übersetze ins Arabische", "Hast du die Lektion nicht verstanden?", ["أَلَمْ تَفْهَمِ الدَّرْسَ؟", "أَلَمْ تَفْهَمْ الدَّرْسُ؟", "أَلَمْ تَفْهَمُ الدَّرْسَ؟", "أَمَا تَفْهَمَ الدَّرْسَ؟"], "أَلَمْ + Jussiv, Kasra vor al.", ["Objekt manṣūb, Kasra vor al.", "Nach لَمْ Sukūn/Kasra.", "Falsche Form."])
]);

add("b2-22", [
  E("أُرِيدُ أَنْ ____. (ich gehe – Subjunktiv)", ["أَذْهَبَ", "أَذْهَبْ", "أَذْهَبُ", "أَذْهَبَنْ"], "manṣūb → Fatḥa.", ["Sukūn ist Jussiv.", "Ḍamma ist Indikativ.", "Die Form gibt es nicht."]),
  E("لَمْ ____ الطُّلَّابُ. (sie gingen nicht hinaus)", ["يَخْرُجِ", "يَخْرُجُوا", "يَخْرُجَ", "يَخْرُجُ"], "Verb vorne → Singular; majzūm, vor al Kasra.", ["Verb vor dem Fāʿil bleibt Singular.", "Fatḥa ist Subjunktiv.", "Ḍamma ist Indikativ."]),
  E("الطُّلَّابُ ____ الدَّرْسَ. (schreiben – Indikativ)", ["يَكْتُبُونَ", "يَكْتُبُوا", "يَكْتُبَ", "يَكْتُبْ"], "Indikativ: nūn bleibt.", ["Ohne nūn: Subjunktiv/Jussiv.", "Singular und Subjunktiv.", "Singular und Jussiv."]),
  E("لَا ____ يَا بِلَالُ! (Verbot)", ["تَذْهَبْ", "تَذْهَبُ", "تَذْهَبَ", "تَذْهَبِي"], "لَا des Verbots → majzūm.", ["Mit Ḍamma ist es eine Verneinung, kein Verbot.", "Fatḥa ist Subjunktiv.", "Das ist für eine Frau."]),
  E("لَنْ ____ يَا أَخَوَاتُ.", ["تَخْرُجْنَ", "تَخْرُجُوا", "تَخْرُجِي", "تَخْرُجَ"], "Mit nūn der Frauen: unverändert.", ["Das ist männlich.", "Das ist Singular.", "Das ist Singular."]),
  F("In welchem Fall steht der Muḍāriʿ nach لَمْ?", "", ["majzūm (Jussiv)", "manṣūb (Subjunktiv)", "marfūʿ (Indikativ)", "majrūr"], "لَمْ، لَمَّا und لَا des Verbots → majzūm.", ["Nach أَنْ، لَنْ، لِـ.", "Ohne Partikel.", "Verben werden nicht majrūr."]),
  F("In welchem Fall steht der Muḍāriʿ nach لَنْ?", "", ["manṣūb (Subjunktiv)", "majzūm (Jussiv)", "marfūʿ (Indikativ)", "majrūr"], "أَنْ، لَنْ، لِـ des Grundes → manṣūb.", ["Nach لَمْ، لَمَّا، لَا des Verbots.", "Ohne Partikel.", "Verben werden nicht majrūr."]),
  F("Woran erkennt man يَذْهَبُوا als manṣūb oder majzūm?", "", ["am Wegfall des nūn", "am Fatḥa", "am Sukūn", "am Ḍamma"], "Bei den Fünf Verben ist das Zeichen der Wegfall des nūn.", ["Fatḥa nur bei den Formen ohne nūn.", "Sukūn nur bei den Formen ohne nūn.", "Ḍamma ist Indikativ."]),
  U("Mach es manṣūb (nach أَنْ)", "تَجْلِسِينَ", ["أَنْ تَجْلِسِي", "أَنْ تَجْلِسِينَ", "أَنْ تَجْلِسَ", "أَنْ تَجْلِسْ"], "Das nūn fällt weg.", ["Das nūn muss weg.", "Das ist „du (m.)“.", "Sukūn passt nicht."]),
  U("Mach es majzūm (nach لَمْ)", "نَكْتُبُ", ["لَمْ نَكْتُبْ", "لَمْ نَكْتُبَ", "لَمْ نَكْتُبُ", "لَمْ كَتَبْنَا"], "Sukūn.", ["Fatḥa ist Subjunktiv.", "Ḍamma ist Indikativ.", "Nach لَمْ Muḍāriʿ."]),
  U("Mach es majzūm (nach لَمْ)", "يَدْرُسْنَ", ["لَمْ يَدْرُسْنَ", "لَمْ يَدْرُسُوا", "لَمْ يَدْرُسْ", "لَمْ يَدْرُسْنَا"], "Bleibt unverändert (mabnī).", ["Das ist männlich.", "Das ist Singular.", "Die Form gibt es nicht."]),
  U("Mach es manṣūb (nach لَنْ)", "تَفْهَمُونَ", ["لَنْ تَفْهَمُوا", "لَنْ تَفْهَمُونَ", "لَنْ تَفْهَمَ", "لَنْ تَفْهَمْ"], "Das nūn fällt weg.", ["Das nūn muss weg.", "Das ist Singular.", "Das ist Singular."]),
  F("Wo unterscheiden sich Subjunktiv und Jussiv in der Form?", "", ["bei يَذْهَبُ، تَذْهَبُ، أَذْهَبُ، نَذْهَبُ", "bei يَذْهَبُونَ، تَذْهَبُونَ", "bei تَذْهَبِينَ", "bei يَذْهَبْنَ"], "Fatḥa gegen Sukūn – nur bei den Formen ohne nūn.", ["Dort fällt in beiden Fällen das nūn.", "Dort fällt in beiden Fällen das nūn.", "Diese Form ist immer gleich."]),
  U("Übersetze ins Arabische", "Er will nicht, dass wir hinausgehen.", ["لَا يُرِيدُ أَنْ نَخْرُجَ.", "لَا يُرِيدُ أَنْ نَخْرُجُ.", "لَمْ يُرِيدُ أَنْ نَخْرُجَ.", "لَا يُرِيدُ أَنْ نَخْرُجْ."], "لَا + Indikativ; أَنْ + Subjunktiv.", ["Nach أَنْ manṣūb.", "Nach لَمْ Sukūn – und gemeint ist Gegenwart.", "Nach أَنْ Fatḥa."])
]);

add("b2-23", [
  E("خَرَجَ ____.", ["الْمُدَرِّسُونَ", "الْمُدَرِّسِينَ", "الْمُدَرِّسُوا", "الْمُدَرِّسُونِ"], "Fāʿil → -ūna.", ["-īna ist Akk./Gen.", "Falsch.", "Das nūn hat Fatḥa."]),
  E("رَأَيْتُ ____ فِي الْحُقُولِ.", ["الْفَلَّاحِينَ", "الْفَلَّاحُونَ", "الْفَلَّاحِينِ", "الْفَلَّاحَيْنِ"], "Objekt → -īna.", ["-ūna ist Nominativ.", "Das nūn hat Fatḥa.", "Das ist Dual."]),
  E("ذَهَبْتُ إِلَى ____.", ["الْمُهَنْدِسِينَ", "الْمُهَنْدِسُونَ", "الْمُهَنْدِسِينِ", "الْمُهَنْدِسَاتَ"], "Nach إِلَى → -īna.", ["Nach إِلَى kein Nominativ.", "Das nūn hat Fatḥa.", "Kein Fatḥa beim fem. Plural."]),
  E("هَذِهِ بُيُوتُ ____ الْمَدْرَسَةِ.", ["مُدَرِّسِي", "مُدَرِّسِينَ", "مُدَرِّسُونَ", "الْمُدَرِّسِينَ"], "Als Muḍāf verliert der Plural das nūn: مُدَرِّسِي.", ["Als Muḍāf fällt das nūn weg.", "Genitiv, und ohne nūn.", "Muḍāf hat keinen Artikel."]),
  E("قَرَأْتُ ____ كِتَابًا.", ["عِشْرِينَ", "عِشْرُونَ", "عِشْرِينِ", "عَشَرَةَ"], "Zehner wie männlicher Plural: Objekt → -īna.", ["Objekt → Akkusativ.", "Das nūn hat Fatḥa.", "Nach 10 steht der Plural im Genitiv."]),
  E("فِي الْفَصْلِ ____ وَعِشْرُونَ طَالِبَةً. (21)", ["إِحْدَى", "وَاحِدٌ", "أَحَدَ", "وَاحِدَةٌ"], "21 feminin: إِحْدَى وَعِشْرُونَ.", ["وَاحِدٌ ist maskulin.", "أَحَدَ ist maskulin.", "So steht es nicht im Buch."]),
  E("فِي الْحَافِلَةِ ____ وَعِشْرُونَ طَالِبَةً. (23)", ["ثَلَاثٌ", "ثَلَاثَةٌ", "ثَلَاثُ", "ثَلَاثَ"], "Weibliches Gezähltes → Einer maskulin: ثَلَاثٌ.", ["Mit ة bei männlichem Gezähltem.", "Hier mit Tanwīn.", "Hier Nominativ."]),
  E("____ أَكَلْتُ وَلَا شَرِبْتُ.", ["لَا", "مَا", "لَمْ", "لَنْ"], "„weder … noch“ in der Vergangenheit: لَا … وَلَا.", ["Hier steht لَا.", "لَمْ braucht den Muḍāriʿ.", "لَنْ braucht den Muḍāriʿ."]),
  E("الْمُوَطَّأُ ____ مَالِكٍ.", ["لِلْإِمَامِ", "مِنَ الْإِمَامِ", "الْإِمَامِ", "عِنْدَ الْإِمَامِ"], "Autor eines Buches: لِـ.", ["Beim Autor nimmt man لِـ.", "لِـ fehlt.", "Beim Autor nimmt man لِـ."]),
  U("Setz den Plural als Objekt ein", "جَاءَ الْمُسْلِمُونَ.", ["رَأَيْتُ الْمُسْلِمِينَ.", "رَأَيْتُ الْمُسْلِمُونَ.", "رَأَيْتُ الْمُسْلِمِينِ.", "رَأَيْتُ الْمُسْلِمَيْنِ."], "Objekt → -īna.", ["Objekt → Akkusativ.", "Das nūn hat Fatḥa.", "Das ist Dual."]),
  U("Statt 20: 30", "عِنْدِي عِشْرُونَ رِيَالًا.", ["عِنْدِي ثَلَاثُونَ رِيَالًا.", "عِنْدِي ثَلَاثِينَ رِيَالًا.", "عِنْدِي ثَلَاثُونَ رِيَالَاتٍ.", "عِنْدِي ثَلَاثَةُ عَشَرَ رِيَالًا."], "Mubtadaʾ → -ūna.", ["Hier Nominativ.", "Singular nach den Zehnern.", "Das ist 13."]),
  U("Statt Studenten: Studentinnen (22)", "اثْنَانِ وَعِشْرُونَ طَالِبًا", ["اثْنَتَانِ وَعِشْرُونَ طَالِبَةً", "اثْنَانِ وَعِشْرُونَ طَالِبَةً", "اثْنَتَا وَعِشْرُونَ طَالِبَةً", "اثْنَتَانِ وَعِشْرُونَ طَالِبَاتٍ"], "22 feminin: اثْنَتَانِ.", ["Der Einer muss feminin werden.", "Das nūn bleibt (keine Iḍāfa).", "Singular manṣūb."]),
  U("Weder … noch (Vergangenheit)", "مَا قَرَأَ. مَا كَتَبَ.", ["لَا قَرَأَ وَلَا كَتَبَ.", "لَا قَرَأَ وَمَا كَتَبَ.", "لَمْ قَرَأَ وَلَمْ كَتَبَ.", "لَا قَرَأَ أَوْ كَتَبَ."], "لَا … وَلَا + Perfekt.", ["Beide Glieder mit لَا.", "لَمْ nicht vor dem Perfekt.", "„oder“ ändert die Bedeutung."]),
  U("Übersetze ins Arabische", "Ich kaufte es für vierzig Riyal.", ["اشْتَرَيْتُهُ بِأَرْبَعِينَ رِيَالًا.", "اشْتَرَيْتُهُ بِأَرْبَعُونَ رِيَالًا.", "اشْتَرَيْتُهُ بِأَرْبَعِينَ رِيَالَاتٍ.", "اشْتَرَيْتُهُ بِأَرْبَعَةِ رِيَالًا."], "Nach بِـ → -īna; Gezähltes Singular manṣūb.", ["Nach بِـ Genitiv.", "Singular nach den Zehnern.", "Das ist „vier“."]),
  F("Welche Endung hat der männliche Plural im Akkusativ und Genitiv?", "", ["ـِينَ (-īna)", "ـُونَ (-ūna)", "ـَيْنِ (-aini)", "ـَاتِ (-āti)"], "Akk./Gen. = -īna.", ["Das ist Nominativ.", "Das ist Dual.", "Das ist femininer Plural."])
]);

add("b2-24", [
  E("عِنْدِي سَيَّارَةٌ ____.", ["وَاحِدَةٌ", "وَاحِدٌ", "أَحَدٌ", "إِحْدَى"], "وَاحِدٌ stimmt überein: feminin → وَاحِدَةٌ.", ["سَيَّارَةٌ ist feminin.", "So steht es nicht nach dem Nomen.", "إِحْدَى steht in 11/21."]),
  E("أُرِيدُ رِيَالَيْنِ ____.", ["اثْنَيْنِ", "اثْنَانِ", "اثْنَتَيْنِ", "اثْنَيْ"], "اثْنَانِ wie ein Adjektiv: Akkusativ Dual.", ["Objekt → Akkusativ.", "رِيَالٌ ist maskulin.", "Das ist die Form in 12."]),
  E("أُرِيدُ ____ رِيَالَاتٍ.", ["خَمْسَةَ", "خَمْسَةُ", "خَمْسَةِ", "خَمْسَ"], "3–10 regulär dekliniert: Objekt → manṣūb.", ["Objekt → manṣūb.", "Kein Genitiv.", "Männliches Gezähltes → mit ة."]),
  E("اشْتَرَيْتُهُ بِ____ عَشَرَ رِيَالًا.", ["خَمْسَةَ", "خَمْسَةِ", "خَمْسَةُ", "خَمْسِ"], "11–19 sind mabnī: خَمْسَةَ عَشَرَ in allen Fällen.", ["11–19 sind unveränderlich.", "11–19 sind unveränderlich.", "Männliches Gezähltes → mit ة."]),
  E("مُرَتَّبُهُ أَلْفُ ____.", ["دُولَارٍ", "دُولَارًا", "دُولَارَاتٍ", "دُولَارٌ"], "Nach أَلْفٌ: Singular, majrūr.", ["Nach 1000 majrūr.", "Nach 1000 Singular.", "majrūr."]),
  E("أُجْرَتُهُ ____ رِيَالٍ. (2000)", ["أَلْفَا", "أَلْفَانِ", "أَلْفَيْ", "أَلْفَيْنِ"], "Dual als Muḍāf: das nūn fällt; Nominativ أَلْفَا.", ["Als Muḍāf fällt das nūn.", "Hier Nominativ.", "Als Muḍāf fällt das nūn, und Nominativ."]),
  E("عِنْدِي ثَلَاثَةُ ____ رِيَالٍ. (3000)", ["آلَافِ", "أَلْفِ", "آلَافٍ", "أُلُوفٌ"], "Nach 3–10: Plural majrūr → آلَافِ (als Muḍāf).", ["Nach 3–10 Plural.", "Muḍāf → kein Tanwīn.", "majrūr."]),
  E("اشْتَرَيْتُهُ بِ____ رِيَالٍ. (300)", ["ثَلَاثِمِائَةِ", "ثَلَاثُمِائَةِ", "ثَلَاثَمِائَةِ", "ثَلَاثِمِائَةٍ"], "Nach بِـ: die Zahl majrūr; مِائَة als Muḍāf ilaihi.", ["Nach بِـ majrūr.", "Nach بِـ majrūr.", "Muḍāf → kein Tanwīn."]),
  U("Statt Nominativ: Akkusativ", "أَعِنْدَكَ سِتُّونَ رِيَالًا؟", ["أُرِيدُ سِتِّينَ رِيَالًا.", "أُرِيدُ سِتُّونَ رِيَالًا.", "أُرِيدُ سِتِّينَ رِيَالٍ.", "أُرِيدُ سِتَّةَ رِيَالًا."], "Zehner wie der männliche Plural: -īna.", ["Objekt → -īna.", "Nach 11–99 manṣūb.", "Das ist „sechs“."]),
  U("Statt männlich: weiblich", "ثَلَاثَةُ رِجَالٍ", ["ثَلَاثُ نِسَاءٍ", "ثَلَاثَةُ نِسَاءٍ", "ثَلَاثُ نِسَاءٌ", "ثَلَاثَ امْرَأَةً"], "3–10: umgekehrtes Geschlecht.", ["Bei weiblichem Gezähltem ohne ة.", "Genitiv.", "Nach 3–10 Plural majrūr."]),
  U("Lass das Gezählte weg", "عِنْدِي عَشَرَةُ رِيَالَاتٍ.", ["عِنْدِي عَشَرَةٌ.", "عِنْدِي عَشَرَةُ.", "عِنْدِي عَشَرَةً.", "عِنْدِي عَشْرٌ."], "Ohne Gezähltes bekommt die Zahl Tanwīn.", ["Ohne Muḍāf ilaihi Tanwīn.", "Hier Nominativ.", "Das Geschlecht bleibt."]),
  U("Mach daraus 16 000", "أَلْفُ رِيَالٍ", ["سِتَّةَ عَشَرَ أَلْفَ رِيَالٍ", "سِتَّةَ عَشَرَ آلَافِ رِيَالٍ", "سِتَّ عَشْرَةَ أَلْفَ رِيَالٍ", "سِتَّةَ عَشَرَ أَلْفُ رِيَالٍ"], "Nach 11–19: Singular manṣūb → أَلْفَ.", ["Nach 11–19 Singular.", "أَلْفٌ ist maskulin.", "manṣūb."]),
  U("Übersetze ins Arabische", "Er arbeitet für zweitausend Riyal.", ["يَعْمَلُ بِأَلْفَيْ رِيَالٍ.", "يَعْمَلُ بِأَلْفَا رِيَالٍ.", "يَعْمَلُ بِأَلْفَيْنِ رِيَالٍ.", "يَعْمَلُ بِأَلْفَيْ رِيَالًا."], "Nach بِـ: Dual Genitiv ohne nūn (Muḍāf).", ["Nach بِـ Genitiv.", "Als Muḍāf fällt das nūn.", "Nach 1000 majrūr."]),
  F("Nach welchen Zahlen steht das Gezählte im Singular manṣūb?", "", ["11–99", "3–10", "100 und 1000", "1 und 2"], "Nach 11–99: Singular manṣūb.", ["Nach 3–10: Plural majrūr.", "Nach 100/1000: Singular majrūr.", "1 und 2 folgen als Adjektiv."])
]);

add("b2-25", [
  E("كَانَ الْمَاءُ ____.", ["بَارِدًا", "بَارِدٌ", "بَارِدٍ", "بِبَارِدٍ"], "khabaru kāna → manṣūb.", ["Die Khabar von كَانَ ist manṣūb.", "Kein Genitiv.", "بِـ gehört zu لَيْسَ."]),
  E("____ زَيْنَبُ مَرِيضَةً.", ["كَانَتْ", "كَانَ", "كُنْتِ", "كُنَّ"], "Feminin → كَانَتْ.", ["Zainab ist weiblich.", "Das heißt „du (f.) warst“.", "Das ist Plural."]),
  E("لَا يَزَالُ بِلَالٌ ____.", ["مَرِيضًا", "مَرِيضٌ", "مَرِيضٍ", "الْمَرِيضَ"], "Schwester von kāna → Khabar manṣūb.", ["Die Khabar ist manṣūb.", "Kein Genitiv.", "Unbestimmt."]),
  E("لَا ____ مَرْيَمُ طَالِبَةً.", ["تَزَالُ", "يَزَالُ", "تَزَالِينَ", "زَالَتْ"], "Feminin → لَا تَزَالُ.", ["Maryam ist weiblich.", "Das ist „du (f.)“.", "So nicht im Präsens."]),
  E("أَعْرِفُ ____.", ["أَبَاكَ", "أَبُوكَ", "أَبِيكَ", "أَبَكَ"], "Objekt → أَبٌ als Muḍāf im Akkusativ: أَبَا.", ["Das ist Nominativ.", "Das ist Genitiv.", "Es fehlt das Alif."]),
  E("مَاذَا قُلْتَ لِ____؟", ["أَبِيكَ", "أَبَاكَ", "أَبُوكَ", "أَبِكَ"], "Nach لِـ → Genitiv: أَبِي.", ["Das ist Akkusativ.", "Das ist Nominativ.", "Es fehlt das yāʾ."]),
  E("أَرَأَيْتَ ____؟", ["أَخَاهَا", "أَخُوهَا", "أَخِيهَا", "أَخَهَا"], "Objekt → أَخَا.", ["Das ist Nominativ.", "Das ist Genitiv.", "Es fehlt das Alif."]),
  E("أَبِي الْآنَ مُدِيرٌ، وَكَانَ مِنْ ____ مُدَرِّسًا.", ["قَبْلُ", "قَبْلِ", "قَبْلَ", "قَبْلٍ"], "Ohne Muḍāf ilaihi: mabnī auf Ḍamma.", ["Ohne folgendes Nomen → Ḍamma.", "Ohne folgendes Nomen → Ḍamma.", "Kein Tanwīn."]),
  E("هَؤُلَاءِ ____ فِي الْمُسْتَشْفَى.", ["مَرْضَى", "مَرِيضُونَ", "مَرْضًى", "مَرَاضٌ"], "Plural von مَرِيضٌ = مَرْضَى (diptot).", ["Im Buch: مَرْضَى.", "Diptot: kein Tanwīn.", "Die Form gibt es nicht."]),
  U("Setz كَانَ davor", "الْجَوُّ جَمِيلٌ.", ["كَانَ الْجَوُّ جَمِيلًا.", "كَانَ الْجَوَّ جَمِيلٌ.", "كَانَ الْجَوُّ جَمِيلٌ.", "كَانَتِ الْجَوُّ جَمِيلًا."], "Ism marfūʿ, Khabar manṣūb.", ["Fälle vertauscht.", "Die Khabar wird manṣūb.", "الْجَوُّ ist maskulin."]),
  U("Setz لَا يَزَالُ davor", "إِبْرَاهِيمُ فِي الْمُسْتَشْفَى.", ["لَا يَزَالُ إِبْرَاهِيمُ فِي الْمُسْتَشْفَى.", "لَا يَزَالُ إِبْرَاهِيمَ فِي الْمُسْتَشْفَى.", "لَا تَزَالُ إِبْرَاهِيمُ فِي الْمُسْتَشْفَى.", "لَا يَزَالُ إِبْرَاهِيمُ بِالْمُسْتَشْفَى مَرِيضٌ."], "Präpositionalgruppe bleibt unverändert.", ["Der Ism bleibt marfūʿ.", "إِبْرَاهِيمُ ist maskulin.", "Falsch gebaut."]),
  U("Statt Nominativ: Genitiv", "أَيْنَ ذَهَبَ أَخُوهَا؟", ["أَذَهَبْتَ إِلَى أَخِيهَا؟", "أَذَهَبْتَ إِلَى أَخُوهَا؟", "أَذَهَبْتَ إِلَى أَخَاهَا؟", "أَذَهَبْتَ إِلَى أَخِهَا؟"], "Nach إِلَى → أَخِي.", ["Nach إِلَى Genitiv.", "Das ist Akkusativ.", "Es fehlt das yāʾ."]),
  U("Plural", "هُوَ جَرِيحٌ.", ["هُمْ جَرْحَى.", "هُمْ جَرِيحُونَ.", "هُمْ جَرْحًى.", "هُمْ جِرَاحٌ."], "جَرِيحٌ → جَرْحَى.", ["Plural nach فَعْلَى.", "Kein Tanwīn.", "Die Form ist hier nicht gemeint."]),
  U("Übersetze ins Arabische", "Die Tür war offen.", ["كَانَ الْبَابُ مَفْتُوحًا.", "كَانَ الْبَابُ مَفْتُوحٌ.", "كَانَ الْبَابَ مَفْتُوحًا.", "كَانَتِ الْبَابُ مَفْتُوحَةً."], "Ism marfūʿ, Khabar manṣūb.", ["Die Khabar wird manṣūb.", "Der Ism bleibt marfūʿ.", "الْبَابُ ist maskulin."]),
  F("Was ist in كَانَ الْمُدَرِّسُ فِي الْفَصْلِ die khabaru kāna?", "", ["فِي الْفَصْلِ", "الْمُدَرِّسُ", "كَانَ", "الْفَصْلِ allein"], "Die Präpositionalgruppe ist die Khabar (unverändert).", ["Das ist der Ism.", "Das ist das Verb.", "Die ganze Gruppe gehört dazu."])
]);

add("b2-26", [
  E("الْبَقَّالُ ____ السُّكَّرَ.", ["يَزِنُ", "يَوْزِنُ", "يَزَنُ", "يُوزِنُ"], "وَزَنَ → يَزِنُ (das و fällt weg).", ["Im Muḍāriʿ fällt das و weg.", "Falscher Vokal.", "Die Form gibt es nicht."]),
  E("أَيْنَ ____ الْكِتَابَ؟ (Wohin legst du …?)", ["تَضَعُ", "تَوْضَعُ", "تَضِعُ", "تُوضِعُ"], "وَضَعَ → يَضَعُ (a–a).", ["Das و fällt weg.", "Falscher Vokal.", "Die Form gibt es nicht."]),
  E("____ هُنَا! (Halt hier an!)", ["قِفْ", "اِقِفْ", "اُوقُفْ", "تَقِفُ"], "تَقِفُ → قِفْ (kein Hamzat al-waṣl).", ["Kein Hamzat al-waṣl nötig.", "Falsch.", "Das ist Präsens."]),
  E("____ الْكِتَابَ عَلَى الْمَكْتَبِ. (Leg …)", ["ضَعِ", "ضَعْ", "اِضَعْ", "تَضَعُ"], "تَضَعُ → ضَعْ; vor al Kasra.", ["Vor al wird Sukūn zu Kasra.", "Kein Hamzat al-waṣl.", "Das ist Präsens."]),
  E("هَذَا ____. (ein kleiner Junge)", ["وُلَيْدٌ", "وَلِيدٌ", "وَلَدَيْنِ", "أَوْلَادٌ"], "Diminutiv فُعَيْلٌ: وَلَدٌ → وُلَيْدٌ.", ["Das ist ein Name/Adjektiv.", "Das ist Dual.", "Das ist Plural."]),
  E("يَجِبُ عَلَيْنَا أَنْ ____ الْقُرْآنَ.", ["نَفْهَمَ", "نَفْهَمُ", "فَهِمْنَا", "نَفْهَمْ"], "أَنْ → manṣūb.", ["Nach أَنْ manṣūb.", "Nach أَنْ Muḍāriʿ.", "Sukūn ist Jussiv."]),
  E("يَجِبُ ____ أَنْ أَذْهَبَ إِلَى الرِّيَاضِ.", ["عَلَيَّ", "عَلَيْكَ", "لِي", "عَلَى أَنَا"], "„ich muss“ = يَجِبُ عَلَيَّ.", ["ـكَ heißt „du“.", "Mit يَجِبُ steht عَلَى.", "Kein selbstständiges Pronomen."]),
  E("يَجِبُ عَلَيْهِ ____ يَخْرُجَ. (Er darf nicht …)", ["أَلَّا", "لَا", "لَنْ", "إِلَّا"], "Verneint wird das zweite Verb: أَلَّا = أَنْ لَا.", ["Es fehlt أَنْ.", "لَنْ passt hier nicht.", "إِلَّا heißt „außer“."]),
  U("Bilde den Muḍāriʿ", "وَجَدَ", ["يَجِدُ", "يَوْجِدُ", "يَجَدُ", "يُوجِدُ"], "Das و fällt weg: يَجِدُ.", ["Das و fällt weg.", "Falscher Vokal.", "Das ist eine andere Form."]),
  U("Bilde den Amr", "تَزِنُ", ["زِنْ", "اِزِنْ", "اُوزُنْ", "زَنْ"], "Kein Hamzat al-waṣl: زِنْ.", ["Kein Hamzat al-waṣl.", "Das و ist weggefallen.", "Falscher Vokal."]),
  U("Bilde den Diminutiv", "نَهْرٌ", ["نُهَيْرٌ", "نَهِيرٌ", "أَنْهَارٌ", "نَهْرَانِ"], "فُعَيْلٌ: نُهَيْرٌ.", ["Das Muster ist فُعَيْلٌ.", "Das ist Plural.", "Das ist Dual."]),
  U("Mach daraus „man muss …“", "نَرْجِعُ غَدًا.", ["يَجِبُ عَلَيْنَا أَنْ نَرْجِعَ غَدًا.", "يَجِبُ عَلَيْنَا أَنْ نَرْجِعُ غَدًا.", "يَجِبُ لَنَا أَنْ نَرْجِعَ غَدًا.", "يَجِبُ عَلَيْنَا نَرْجِعُ غَدًا."], "يَجِبُ عَلَى + أَنْ + manṣūb.", ["Nach أَنْ manṣūb.", "Mit يَجِبُ steht عَلَى.", "Es fehlt أَنْ."]),
  U("„Hier ist sie!“ (feminin)", "هَا هُوَ ذَا", ["هَا هِيَ ذِي", "هَا هِيَ ذَا", "هَا هُوَ ذِي", "هَأَنَذَا"], "Feminin: هَا هِيَ ذِي.", ["ذَا ist maskulin.", "هُوَ ist maskulin.", "Das heißt „Hier bin ich!“."]),
  F("Zu welcher Verbklasse gehört وَقَفَ?", "وَقَفَ", ["mithāl (schwach am 1. Radikal)", "ajwaf (schwach am 2. Radikal)", "nāqiṣ (schwach am 3. Radikal)", "gesund (sālim)"], "و ist der erste Radikal → mithāl.", ["Der 2. Radikal ist ق.", "Der 3. Radikal ist ف.", "Es enthält ein و."]),
  F("Welcher Maṣdar hat das Muster فَعَالٌ?", "", ["ذَهَابٌ", "خُرُوجٌ", "نِكَاحٌ", "جُلُوسٌ"], "ذَهَابٌ – Muster فَعَالٌ.", ["Das ist فُعُولٌ.", "Das ist فِعَالٌ.", "Das ist فُعُولٌ."])
]);

add("b2-27", [
  E("____ الْمُدَرِّسُ: اُكْتُبُوا.", ["قَالَ", "قُلْتُ", "قَوَلَ", "يَقُلْ"], "Perfekt: قَالَ.", ["Das heißt „ich sagte“.", "Ursprungsform, nicht gebräuchlich.", "Das ist Jussiv."]),
  E("____ لَهُ: شُكْرًا. (Ich sagte …)", ["قُلْتُ", "قَالْتُ", "قِلْتُ", "قَوَلْتُ"], "a–u-Gruppe: erster Radikal Ḍamma, و fällt weg.", ["Der zweite Radikal fällt weg.", "Bei قَالَ Ḍamma, nicht Kasra.", "Die Ursprungsform wird nicht benutzt."]),
  E("____ فِي اللَّيْلِ. (Ich schlief …)", ["نِمْتُ", "نُمْتُ", "نَامْتُ", "نَوِمْتُ"], "نَامَ (i–a) → Kasra: نِمْتُ.", ["Bei نَامَ Kasra.", "Der zweite Radikal fällt weg.", "Die Ursprungsform wird nicht benutzt."]),
  E("لَمْ ____ شَيْئًا.", ["يَقُلْ", "يَقُولْ", "يَقُولُ", "يَقُولَ"], "Jussiv: das و fällt weg (zwei Sukūn).", ["Zwei Sukūn → و fällt weg.", "Nach لَمْ kein Ḍamma.", "Fatḥa ist Subjunktiv."]),
  E("الْبَنَاتُ ____ الْحَقَّ.", ["يَقُلْنَ", "يَقُولْنَ", "يَقُولُونَ", "تَقُولُ"], "Vor dem nūn der Frauen fällt der 2. Radikal weg.", ["Das و fällt weg.", "Das ist männlich.", "Nach dem Mubtadaʾ im Plural."]),
  E("____ الْحَقَّ! (Sag …)", ["قُلِ", "قُولْ", "اُقْوُلْ", "تَقُولُ"], "Amr قُلْ; vor al Kasra.", ["Zwei Sukūn → قُلْ.", "Kein Hamzat al-waṣl.", "Das ist Präsens."]),
  E("وَاللَّهِ ____ رَأَيْتُهُ فِي السُّوقِ.", ["لَقَدْ", "قَدْ لَ", "لَمْ", "لَنْ"], "Nach einem Schwur: bejahtes Perfekt mit لَقَدْ.", ["Falsche Reihenfolge.", "لَمْ verneint.", "لَنْ ist Futur."]),
  E("أَظُنُّ ____ مُغْلَقًا.", ["الْبَابَ", "الْبَابُ", "الْبَابِ", "أَنَّ الْبَابُ"], "ظَنَّ hat zwei Objekte, beide manṣūb.", ["Erstes Objekt → manṣūb.", "Kein Genitiv.", "Nach أَنَّ manṣūb – und dann Khabar marfūʿ."]),
  E("لَا يَنْبَغِي لِلطَّالِبِ أَنْ ____.", ["يَغِيبَ", "يَغِيبُ", "يَغِبْ", "غَابَ"], "أَنْ → manṣūb.", ["Nach أَنْ manṣūb.", "Jussiv passt nicht.", "Nach أَنْ Muḍāriʿ."]),
  U("Statt „er“: „wir“", "زَارَ صَدِيقَهُ.", ["زُرْنَا صَدِيقَنَا.", "زَارْنَا صَدِيقَنَا.", "زِرْنَا صَدِيقَنَا.", "زُرْنَا صَدِيقَهُ."], "زَارَ يَزُورُ (a–u) → Ḍamma: زُرْنَا.", ["Der 2. Radikal fällt weg.", "Bei a–u Ḍamma.", "„unseren Freund“ = صَدِيقَنَا."]),
  U("Statt „er“: „ich“", "سَارَ إِلَى الْمَسْجِدِ.", ["سِرْتُ إِلَى الْمَسْجِدِ.", "سُرْتُ إِلَى الْمَسْجِدِ.", "سَارْتُ إِلَى الْمَسْجِدِ.", "سَيَرْتُ إِلَى الْمَسْجِدِ."], "سَارَ يَسِيرُ (a–i) → Kasra.", ["Bei a–i Kasra.", "Der 2. Radikal fällt weg.", "Die Ursprungsform wird nicht benutzt."]),
  U("Verneine mit لَمْ", "نَامَ الطِّفْلُ.", ["لَمْ يَنَمِ الطِّفْلُ.", "لَمْ يَنَامِ الطِّفْلُ.", "لَمْ يَنَمْ الطِّفْلُ.", "لَمْ يَنَامُ الطِّفْلُ."], "Jussiv: Alif fällt weg; vor al Kasra.", ["Das Alif fällt weg.", "Vor al Kasra.", "Nach لَمْ kein Ḍamma."]),
  U("Mach daraus ظَنَّ mit zwei Objekten", "الْجَوُّ جَمِيلٌ.", ["أَظُنُّ الْجَوَّ جَمِيلًا.", "أَظُنُّ الْجَوُّ جَمِيلٌ.", "أَظُنُّ الْجَوَّ جَمِيلٌ.", "أَظُنُّ أَنَّ الْجَوَّ جَمِيلًا."], "Beide Objekte manṣūb.", ["Beide werden manṣūb.", "Das zweite Objekt auch manṣūb.", "Nach أَنَّ bleibt die Khabar marfūʿ."]),
  U("Bilde den Amr für mehrere Männer", "تَقُولُ", ["قُولُوا", "قُلُوا", "اُقُولُوا", "تَقُولُوا"], "قُولُوا – das و bleibt vor einer Endung.", ["Vor -ū bleibt das و.", "Kein Hamzat al-waṣl.", "Das ist Subjunktiv/Jussiv."]),
  U("Übersetze ins Arabische", "Bei Allah, ich habe nichts gegessen.", ["وَاللَّهِ مَا أَكَلْتُ شَيْئًا.", "وَاللَّهِ لَقَدْ مَا أَكَلْتُ شَيْئًا.", "وَاللَّهُ مَا أَكَلْتُ شَيْئًا.", "وَاللَّهِ لَمْ أَكَلْتُ شَيْئًا."], "Verneintes Perfekt nach dem Schwur braucht kein لَقَدْ.", ["لَقَدْ nur bei bejahtem Perfekt.", "Nach dem Schwur-و majrūr.", "لَمْ nicht vor dem Perfekt."]),
  F("Woraus ist يَقُولُ entstanden?", "", ["يَقْوُلُ", "يَقَوَلُ", "يَقُوَلُ", "يَقُلُ"], "يَقُولُ ← يَقْوُلُ.", ["Falsch.", "Falsch.", "Das ist keine Ursprungsform."])
]);

add("b2-28", [
  E("____ الْإِمَامُ اللَّهَ. (Der Imam rief Allah an.)", ["دَعَا", "دَعَى", "دَعَوَ", "يَدْعُ"], "و als 3. Radikal → Alif: دَعَا.", ["Bei و schreibt man ا.", "Die Ursprungsform wird nicht benutzt.", "Das ist Jussiv."]),
  E("____ الطِّفْلُ. (Das Kind weinte.)", ["بَكَى", "بَكَا", "بَكَيَ", "بَكِيَ"], "ي als 3. Radikal → ى: بَكَى.", ["Bei ي schreibt man ى.", "Ursprungsform.", "Falscher Vokal."]),
  E("الرِّجَالُ ____ النَّاسَ إِلَى الْإِسْلَامِ.", ["يَدْعُونَ", "يَدْعُوُونَ", "يَدْعُوا", "تَدْعُو"], "Vor „sie (m. Pl.)“ fällt der 3. Radikal weg: يَدْعُونَ.", ["Der 3. Radikal fällt weg.", "Indikativ → mit nūn.", "Nach dem Mubtadaʾ im Plural."]),
  E("لَمْ ____ شَيْئًا.", ["يَنْسَ", "يَنْسَى", "يَنْسَيْ", "يَنْسَا"], "Jussiv: der 3. Radikal fällt weg.", ["Im Jussiv fällt das Alif weg.", "Falsch.", "Falsch."]),
  E("لَنْ ____ أَبَدًا.", ["يَبْكِيَ", "يَبْكِي", "يَبْكِ", "يَبْكَى"], "Subjunktiv: Fatḥa auf dem ي wird gesprochen.", ["Nach لَنْ Fatḥa auf ي.", "Das ist Jussiv.", "Falsch."]),
  E("____ رَبَّكَ! (Ruf … an!)", ["اُدْعُ", "اُدْعُو", "اِدْعُ", "تَدْعُو"], "Amr: der 3. Radikal fällt weg; Ḍamma am Anfang.", ["Im Amr fällt das و weg.", "Bei Ḍamma: Hamzat al-waṣl mit Ḍamma.", "Das ist Präsens."]),
  E("لَمْ ____ الْمُدِيرَ.", ["أَرَ", "أَرَى", "أَرْأَ", "رَأَيْتُ"], "Jussiv von أَرَى: لَمْ أَرَ.", ["Im Jussiv fällt das Alif weg.", "Das Hamza fällt im Muḍāriʿ weg.", "Nach لَمْ Muḍāriʿ."]),
  E("____ كِتَابَكَ يَا مُحَمَّدُ. (Zeig mir …)", ["أَرِنِي", "أَرِي", "اُنْظُرْ", "تَرَى"], "أَرِ + نِي.", ["Das ist feminin.", "Das heißt „schau!“.", "Das heißt „du siehst“."]),
  E("لَمْ أَكْوِهِ ____.", ["بَعْدُ", "بَعْدَ", "قَبْلُ", "أَبَدًا"], "„noch nicht“ = لَمْ … بَعْدُ.", ["Ohne Nomen danach → Ḍamma.", "„vorher“ passt nicht.", "أَبَدًا beim Futur."]),
  U("Statt „er“: „sie (m. Pl.)“", "دَعَا", ["دَعَوْا", "دَعَوُوا", "دَعَاوُا", "دَعُوا"], "Der 3. Radikal fällt weg: دَعَوْا.", ["Aus دَعَوُوا wird دَعَوْا.", "Falsch.", "Falsch."]),
  U("Statt „er“: „sie (f. Sg.)“", "بَكَى", ["بَكَتْ", "بَكَيَتْ", "بَكَاتْ", "بَكِيَتْ"], "بَكَتْ (für بَكَاتْ).", ["Der 3. Radikal fällt weg.", "Falsch.", "Falsch."]),
  U("Statt „er“: „ich“", "نَسِيَ", ["نَسِيتُ", "نَسَيْتُ", "نَسِتُ", "نَسَوْتُ"], "Das ي bleibt: نَسِيتُ.", ["Kasra bleibt.", "Das ي fällt nicht weg.", "Kein و."]),
  U("Mach es majzūm (nach لَمْ)", "يَدْعُو", ["لَمْ يَدْعُ", "لَمْ يَدْعُو", "لَمْ يَدْعُوْ", "لَمْ يَدْعُوَ"], "Der 3. Radikal fällt weg.", ["Das و fällt weg.", "Das و fällt weg.", "Das ist Subjunktiv."]),
  U("Übersetze ins Arabische", "Mein Vater ist noch nicht zurückgekehrt.", ["لَمْ يَرْجِعْ أَبِي بَعْدُ.", "لَمْ يَرْجِعُ أَبِي بَعْدُ.", "لَمْ يَرْجِعْ أَبِي بَعْدَ.", "لَنْ يَرْجِعَ أَبِي بَعْدُ."], "لَمْ + Jussiv + بَعْدُ.", ["Nach لَمْ Sukūn.", "بَعْدُ ohne Nomen → Ḍamma.", "Das ist Futur."]),
  F("Was ist bei النِّسَاءُ يَدْعُونَ das و?", "", ["der 3. Radikal", "der Fāʿil", "das Zeichen des Indikativs", "ein Pluralzeichen"], "Bei den Frauen ist das و der 3. Radikal, das nūn der Fāʿil (يَفْعُلْنَ).", ["Der Fāʿil ist das nūn.", "Die Form ist unveränderlich.", "Es ist Teil der Wurzel."])
]);

add("b2-29", [
  E("____ أَبِي الْعَامَ الْمَاضِيَ. (pilgerte)", ["حَجَّ", "حَجَجَ", "حَجَجْ", "يَحُجُّ"], "حَجَّ für حَجَجَ.", ["Die zwei gleichen Buchstaben verschmelzen.", "Falsch.", "Das ist Präsens."]),
  E("____ فِي السَّنَةِ الْمَاضِيَةِ. (Ich pilgerte …)", ["حَجَجْتُ", "حَجَّتُ", "حَجُّتُ", "حَجَّيْتُ"], "Mit mutaḥarrik-Pronomen behält der 2. Radikal seinen Vokal.", ["Vor ـتُ werden beide Buchstaben geschrieben.", "Falsch.", "Falsch."]),
  E("لَمْ ____ هَذَا الْعَامَ.", ["يَحُجَّ", "يَحُجْ", "يَحْجُجُ", "يَحُجُّ"], "Jussiv: der 3. Radikal bekommt Fatḥa.", ["Zwei Sukūn → Fatḥa.", "Falsch.", "Nach لَمْ kein Ḍamma."]),
  E("____ سَمِعْتُ الْجَرَسَ دَخَلْتُ الْفَصْلَ.", ["لَمَّا", "عِنْدَمَا", "لَمْ", "لَنْ"], "„als“ mit Perfekt = لَمَّا.", ["عِنْدَمَا steht mit dem Muḍāriʿ.", "لَمْ verneint.", "لَنْ ist Futur."]),
  E("____ أَذْهَبُ إِلَى الْمَسْجِدِ أَجْلِسُ فِي الصَّفِّ الْأَوَّلِ.", ["عِنْدَمَا", "لَمَّا", "لَمْ", "قَطُّ"], "„wenn“ mit Muḍāriʿ = عِنْدَمَا.", ["لَمَّا „als“ steht nur mit dem Perfekt.", "لَمْ verneint.", "قَطُّ heißt „nie“."]),
  E("لَمْ أَكْتُبْ إِلَيْهِ ____.", ["قَطُّ", "أَبَدًا", "بَعْدَ", "غَدًا"], "Verneinte Vergangenheit → قَطُّ.", ["أَبَدًا beim Futur.", "Falsch.", "„morgen“ passt nicht."]),
  E("الطَّالِبَاتُ ____.", ["يَحْجُجْنَ", "يَحُجُّنَ", "يَحُجُّونَ", "تَحُجُّ"], "Mit dem nūn der Frauen: يَحْجُجْنَ.", ["Vor dem nūn der Frauen wird aufgelöst.", "Das ist männlich.", "Nach dem Mubtadaʾ im Plural."]),
  U("Bilde den Amr", "تَحُجُّ", ["حُجَّ", "حَجَّ", "حُجْ", "اِحُجَّ"], "Fatḥa gegen zwei Sukūn: حُجَّ.", ["Das ist das Perfekt.", "Falsch.", "Kein Hamzat al-waṣl nötig."]),
  U("Statt „er“: „sie (m. Pl.)“", "مَرَّ بِالْمَسْجِدِ.", ["مَرُّوا بِالْمَسْجِدِ.", "مَرَرُوا بِالْمَسْجِدِ.", "مَرَرْنَ بِالْمَسْجِدِ.", "مَرَّتْ بِالْمَسْجِدِ."], "Vor -ū verschmelzen die Buchstaben.", ["Vor -ū verschmelzen sie.", "Das ist feminin.", "Das ist Singular."]),
  U("Statt „er“: „wir“", "شَمَّ الْوَرْدَةَ.", ["شَمِمْنَا الْوَرْدَةَ.", "شَمَّنَا الْوَرْدَةَ.", "شَمَمْنَا الْوَرْدَةَ.", "شَمُّوا الْوَرْدَةَ."], "i–a-Gruppe: mit mutaḥarrik-Pronomen erscheint das Kasra.", ["Das heißt „er roch uns“.", "Bei شَمَّ Kasra.", "Das ist „sie“."]),
  U("Verbinde mit لَمَّا", "ذَهَبْتُ إِلَى مَكَّةَ. زُرْتُ صَدِيقِي.", ["لَمَّا ذَهَبْتُ إِلَى مَكَّةَ زُرْتُ صَدِيقِي.", "عِنْدَمَا ذَهَبْتُ إِلَى مَكَّةَ زُرْتُ صَدِيقِي.", "لَمَّا أَذْهَبُ إِلَى مَكَّةَ زُرْتُ صَدِيقِي.", "لَمْ ذَهَبْتُ إِلَى مَكَّةَ زُرْتُ صَدِيقِي."], "لَمَّا + Perfekt.", ["Im Buch: عِنْدَمَا mit dem Muḍāriʿ.", "لَمَّا „als“ nur mit dem Perfekt.", "لَمْ verneint."]),
  F("Zu welcher Verbklasse gehört سَأَلَ?", "سَأَلَ", ["مَهْمُوزٌ (mit Hamza)", "سَالِمٌ (gesund)", "أَجْوَفُ", "مُضَعَّفٌ"], "Ein Radikal ist Hamza → mahmūz.", ["Hamza macht es mahmūz.", "Kein schwacher 2. Radikal.", "Keine doppelten Radikale."]),
  F("Zu welcher Verbklasse gehört مَرَّ?", "مَرَّ", ["مُضَعَّفٌ (verdoppelt)", "نَاقِصٌ", "مِثَالٌ", "سَالِمٌ"], "Zweiter und dritter Radikal gleich.", ["Kein schwacher 3. Radikal.", "Kein و/ي am Anfang.", "Die Radikale sind verdoppelt."]),
  F("Was heißt لَا، وَشُكْرًا?", "", ["„Nein, danke.“", "„Kein Dank.“", "„Danke, ja.“", "„Ja, danke.“"], "Mit وَ: „Nein, danke“ – ohne وَ hieße es „kein Dank“.", ["Das wäre لَا شُكْرًا.", "لَا heißt „nein“.", "لَا heißt „nein“."])
]);

add("b2-30", [
  E("الرَّجُلَانِ ____ إِلَى السُّوقِ.", ["ذَهَبَا", "ذَهَبُوا", "ذَهَبَتَا", "ذَهَبَ"], "Dual m. 3. Person: ذَهَبَا.", ["Das ist Plural.", "Das ist feminin.", "Nach dem Mubtadaʾ im Dual."]),
  E("الطَّالِبَتَانِ ____.", ["ذَهَبَتَا", "ذَهَبَا", "ذَهَبْنَ", "ذَهَبَتْ"], "Dual f.: ذَهَبَتَا.", ["Das ist maskulin.", "Das ist Plural.", "Das ist Singular."]),
  E("أَيْنَ ____ يَا أَخَوَانِ؟", ["ذَهَبْتُمَا", "ذَهَبْتُمْ", "ذَهَبَا", "ذَهَبْتَ"], "2. Person Dual: ذَهَبْتُمَا.", ["Das ist Plural.", "Das ist 3. Person.", "Das ist Singular."]),
  E("الطَّالِبَانِ ____ الدَّرْسَ.", ["يَكْتُبَانِ", "يَكْتُبُونَ", "يَكْتُبَا", "تَكْتُبَانِ"], "Indikativ Dual: يَكْتُبَانِ.", ["Das ist Plural.", "Ohne nūn: Subjunktiv/Jussiv.", "تَـ ist feminin/2. Person."]),
  E("يُرِيدُ الطَّالِبَانِ أَنْ ____.", ["يَذْهَبَا", "يَذْهَبَانِ", "يَذْهَبُوا", "يَذْهَبَ"], "Nach أَنْ fällt das nūn weg.", ["Das nūn muss weg.", "Das ist Plural.", "Das ist Singular."]),
  E("أَلَمْ ____ يَا أُخْتَانِ؟", ["تَذْهَبَا", "تَذْهَبَانِ", "تَذْهَبْنَ", "تَذْهَبِي"], "Jussiv: nūn fällt weg.", ["Das nūn muss weg.", "Das ist Plural.", "Das ist Singular."]),
  E("____ يَا أَخَوَانِ! (Geht!)", ["اِذْهَبَا", "اِذْهَبُوا", "اِذْهَبْ", "تَذْهَبَانِ"], "Amr im Dual: اِذْهَبَا.", ["Das ist Plural.", "Das ist Singular.", "Das ist Präsens."]),
  E("رَأَيْتُ____ فِي الْمَسْجِدِ. (… euch beide)", ["كُمَا", "كُمْ", "هُمَا", "كَ"], "„euch beide“ = ـكُمَا.", ["ـكُمْ ist Plural.", "ـهُمَا heißt „sie beide“.", "ـكَ ist Singular."]),
  E("اغْسِلَا ____ يَا وَلَدَانِ.", ["وُجُوهَكُمَا", "وَجْهَيْكُمَا", "وَجْهَكُمَا", "وُجُوهَكُمْ"], "Was jeder nur einmal hat → bei zweien im Plural.", ["Im Buch: Plural statt Dual.", "Es sind zwei Gesichter.", "ـكُمْ ist Plural."]),
  U("Mach es zum Dual", "الطَّالِبُ يَدْرُسُ.", ["الطَّالِبَانِ يَدْرُسَانِ.", "الطَّالِبَانِ يَدْرُسُونَ.", "الطَّالِبَيْنِ يَدْرُسَانِ.", "الطَّالِبَانِ يَدْرُسَا."], "Mubtadaʾ und Verb im Dual.", ["Das Verb muss Dual werden.", "Mubtadaʾ ist marfūʿ.", "Indikativ → mit nūn."]),
  U("Mach es zum Dual", "ذَهَبَتِ الْمُدَرِّسَةُ.", ["ذَهَبَتِ الْمُدَرِّسَتَانِ.", "ذَهَبَتَا الْمُدَرِّسَتَانِ.", "ذَهَبَتِ الْمُدَرِّسَتَيْنِ.", "ذَهَبَا الْمُدَرِّسَتَانِ."], "Verb vorne bleibt Singular, Fāʿil im Dual.", ["Verb vor dem Fāʿil bleibt Singular.", "Fāʿil ist marfūʿ.", "Das Verb bleibt feminin."]),
  U("Verneine mit لَمْ", "تَكْتُبَانِ", ["لَمْ تَكْتُبَا", "لَمْ تَكْتُبَانِ", "لَمْ تَكْتُبْ", "لَمْ تَكْتُبُوا"], "Jussiv: nūn fällt weg.", ["Das nūn muss weg.", "Das ist Singular.", "Das ist Plural."]),
  U("Statt „ihr“ (Plural): „ihr beide“", "مَا أَسْمَاؤُكُمْ؟", ["مَا أَسْمَاؤُكُمَا؟", "مَا اسْمَاكُمَا؟", "مَا أَسْمَاؤُهُمَا؟", "مَا اسْمُكُمَا؟"], "Was jeder nur einmal hat → Plural: أَسْمَاؤُكُمَا.", ["Im Buch: Plural statt Dual.", "ـهُمَا heißt „sie beide“.", "Im Buch steht der Plural."]),
  F("Welche Formen gehören zu den „fünf Verbformen“ (الْأَفْعَالُ الْخَمْسَةُ)?", "", ["يَذْهَبَانِ، تَذْهَبَانِ، يَذْهَبُونَ، تَذْهَبُونَ، تَذْهَبِينَ", "يَذْهَبُ، تَذْهَبُ، أَذْهَبُ، نَذْهَبُ، يَذْهَبْنَ", "ذَهَبَ، ذَهَبَا، ذَهَبُوا، ذَهَبَتْ، ذَهَبْنَ", "اِذْهَبْ، اِذْهَبَا، اِذْهَبُوا، اِذْهَبِي، اِذْهَبْنَ"], "Formen auf -āni, -ūna, -īna.", ["Diese haben kein nūn (oder das nūn der Frauen).", "Das sind Perfekt-Formen.", "Das sind Amr-Formen."])
]);

add("b2-31", [
  E("هَذَا كِتَابٌ ____.", ["جَدِيدٌ", "الْجَدِيدُ", "جَدِيدًا", "جَدِيدَةٌ"], "Naʿt: unbestimmt, Nominativ, maskulin, Singular.", ["Bestimmtheit stimmt nicht.", "Fall stimmt nicht.", "Geschlecht stimmt nicht."]),
  E("سَأَلْتُ الْمُدَرِّسَ ____.", ["الْجَدِيدَ", "الْجَدِيدُ", "الْجَدِيدِ", "جَدِيدًا"], "Naʿt folgt dem Akkusativ.", ["Fall stimmt nicht.", "Fall stimmt nicht.", "Bestimmtheit stimmt nicht."]),
  E("قُلْتُ لِلْمُدَرِّسِ ____.", ["الْجَدِيدِ", "الْجَدِيدَ", "الْجَدِيدُ", "جَدِيدٍ"], "Naʿt folgt dem Genitiv.", ["Fall stimmt nicht.", "Fall stimmt nicht.", "Bestimmtheit stimmt nicht."]),
  E("بِلَالٌ لَهُ أَخَوَانِ ____.", ["كَبِيرَانِ", "كِبَارٌ", "كَبِيرٌ", "كَبِيرَيْنِ"], "Naʿt im Dual, Nominativ.", ["Zahl stimmt nicht.", "Zahl stimmt nicht.", "Fall stimmt nicht."]),
  E("حَامِدٌ لَهُ إِخْوَةٌ ____.", ["كِبَارٌ", "كَبِيرٌ", "كَبِيرَانِ", "كَبِيرَةٌ"], "Personen im Plural → Naʿt im Plural.", ["Zahl stimmt nicht.", "Zahl stimmt nicht.", "Personen werden nicht wie weiblicher Singular behandelt."]),
  E("لِي أَخٌ كَبِيرٌ وَأُخْتٌ ____.", ["صَغِيرَةٌ", "صَغِيرٌ", "الصَّغِيرَةُ", "صِغَارٌ"], "Naʿt feminin.", ["Geschlecht stimmt nicht.", "Bestimmtheit stimmt nicht.", "Zahl stimmt nicht."]),
  E("الْكِتَابُ ____ سَهْلٌ. (Das neue Buch ist leicht.)", ["الْجَدِيدُ", "جَدِيدٌ", "الْجَدِيدَ", "الْجَدِيدِ"], "Naʿt bestimmt wie الْكِتَابُ; سَهْلٌ ist die Khabar.", ["Unbestimmt wäre es eine zweite Khabar.", "Fall stimmt nicht.", "Fall stimmt nicht."]),
  E("رَأَيْتُ بِنْتَيْنِ ____.", ["صَغِيرَتَيْنِ", "صَغِيرَتَانِ", "صَغِيرَيْنِ", "صَغِيرَاتٍ"], "Dual f., Akkusativ.", ["Fall stimmt nicht.", "Geschlecht stimmt nicht.", "Zahl stimmt nicht."]),
  U("Mach es zum Dual", "رَأَيْتُ طَالِبًا مُجْتَهِدًا.", ["رَأَيْتُ طَالِبَيْنِ مُجْتَهِدَيْنِ.", "رَأَيْتُ طَالِبَانِ مُجْتَهِدَانِ.", "رَأَيْتُ طَالِبَيْنِ مُجْتَهِدَانِ.", "رَأَيْتُ طُلَّابًا مُجْتَهِدِينَ."], "Beide im Akkusativ Dual.", ["Fall stimmt nicht.", "Der Naʿt folgt dem Fall.", "Das ist Plural."]),
  U("Mach es zum Plural", "جَاءَ الْمُدَرِّسُ الْجَدِيدُ.", ["جَاءَ الْمُدَرِّسُونَ الْجُدُدُ.", "جَاءُوا الْمُدَرِّسُونَ الْجُدُدُ.", "جَاءَ الْمُدَرِّسُونَ الْجَدِيدُ.", "جَاءَ الْمُدَرِّسِينَ الْجُدُدَ."], "Fāʿil und Naʿt im Plural; Verb vorne bleibt Singular.", ["Verb vor dem Fāʿil bleibt Singular.", "Zahl stimmt nicht.", "Fall stimmt nicht."]),
  U("Mach es feminin", "سَلَّمْتُ عَلَى الطَّالِبِ الْجَدِيدِ.", ["سَلَّمْتُ عَلَى الطَّالِبَةِ الْجَدِيدَةِ.", "سَلَّمْتُ عَلَى الطَّالِبَةِ الْجَدِيدِ.", "سَلَّمْتُ عَلَى الطَّالِبَةُ الْجَدِيدَةُ.", "سَلَّمْتُ عَلَى طَالِبَةٍ الْجَدِيدَةِ."], "Beide feminin, Genitiv, bestimmt.", ["Geschlecht stimmt nicht.", "Fall stimmt nicht.", "Bestimmtheit stimmt nicht."]),
  U("Mach daraus „das … Buch“ (Naʿt)", "الْكِتَابُ جَدِيدٌ.", ["الْكِتَابُ الْجَدِيدُ", "كِتَابٌ الْجَدِيدُ", "الْكِتَابُ جَدِيدُ", "الْجَدِيدُ الْكِتَابُ"], "Naʿt bestimmt wie das Nomen.", ["Bestimmtheit stimmt nicht.", "Ohne al und Tanwīn geht nicht.", "Der Naʿt folgt."]),
  U("Übersetze ins Arabische", "Ich wohne in einem großen Haus.", ["أَسْكُنُ فِي بَيْتٍ كَبِيرٍ.", "أَسْكُنُ فِي بَيْتٍ كَبِيرٌ.", "أَسْكُنُ فِي بَيْتٍ الْكَبِيرِ.", "أَسْكُنُ فِي الْبَيْتِ كَبِيرٍ."], "Naʿt im Genitiv, unbestimmt.", ["Fall stimmt nicht.", "Bestimmtheit stimmt nicht.", "Bestimmtheit stimmt nicht."]),
  F("In wie vielen Dingen stimmt der Naʿt mit dem Manʿūt überein?", "", ["vier: Bestimmtheit, Fall, Zahl, Geschlecht", "zwei: Fall und Geschlecht", "drei: Fall, Zahl, Geschlecht", "eins: nur der Fall"], "Bestimmtheit, Fall, Zahl und Geschlecht.", ["Es sind vier.", "Auch die Bestimmtheit.", "Es sind vier."])
]);

})(window.MADINA_PLUS = window.MADINA_PLUS || {});
