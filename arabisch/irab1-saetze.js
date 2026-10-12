/* Madina-Buch 1: weitere Iʿrāb-Sätze je Lektion – nur mit Wortschatz und Grammatik bis zu dieser Lektion.
   Format wie arabisch/irab2-saetze.js: { s, de, words: [[Wort, Iʿrāb, Erklärung, 1?], …] }; die mit 1 markierten
   Wörter werden zusätzlich als Einzelfrage („Iʿrāb des markierten Wortes“) gestellt. arabic.js hängt die Sätze
   an l.model (plus: true) – so stehen sie auch in „Ganzen Satz bestimmen“. */
window.MADINA_IRAB1 = {};
(function (X) {
var MUB = "مُبْتَدَأٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ", MUB_M = MUB + "، وَهُوَ مُضَافٌ",
  MUA = "مُبْتَدَأٌ مُؤَخَّرٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ", MUA_M = MUA + "، وَهُوَ مُضَافٌ",
  KHA = "خَبَرٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ", KHA_M = KHA + "، وَهُوَ مُضَافٌ",
  FAIL = "فَاعِلٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ", FAIL_M = FAIL + "، وَهُوَ مُضَافٌ",
  MAF = "مَفْعُولٌ بِهِ مَنْصُوبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ", MAF_M = MAF + "، وَهُوَ مُضَافٌ",
  MI = "مُضَافٌ إِلَيْهِ مَجْرُورٌ وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ",
  NR = "نَعْتٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ", NJ = "نَعْتٌ مَجْرُورٌ وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ", NN = "نَعْتٌ مَنْصُوبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ",
  BADAL = "بَدَلٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ",
  JAR = "حَرْفُ جَرٍّ مَبْنِيٌّ عَلَى السُّكُونِ", JAR_MINA = "حَرْفُ جَرٍّ مَبْنِيٌّ عَلَى السُّكُونِ، وَحُرِّكَ بِالْفَتْحِ لِالْتِقَاءِ السَّاكِنَيْنِ",
  FI = "اسْمٌ مَجْرُورٌ بِفِي وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ", ILA = "اسْمٌ مَجْرُورٌ بِإِلَى وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ",
  MIN = "اسْمٌ مَجْرُورٌ بِمِنْ وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ", ALA = "اسْمٌ مَجْرُورٌ بِعَلَى وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ",
  FI_KH = FI + "، وَشِبْهُ الْجُمْلَةِ خَبَرٌ مُقَدَّمٌ",
  MADI = "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الْفَتْحِ", MADI_T = "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الْفَتْحِ، وَالتَّاءُ لِلتَّأْنِيثِ",
  MADI_TI = "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الْفَتْحِ، وَالتَّاءُ لِلتَّأْنِيثِ، وَحُرِّكَتْ بِالْكَسْرِ لِالْتِقَاءِ السَّاكِنَيْنِ",
  TU = "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى السُّكُونِ، وَالتَّاءُ ضَمِيرٌ مَبْنِيٌّ عَلَى الضَّمِّ فِي مَحَلِّ رَفْعٍ فَاعِلٌ",
  NAA = "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى السُّكُونِ، وَنَا ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ رَفْعٍ فَاعِلٌ",
  HADHA = "اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ", HADHIHI = "اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى الْكَسْرِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ",
  DHALIKA = "اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ",
  ISTIF = "اسْمُ اسْتِفْهَامٍ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ",
  AINA = "اسْمُ اسْتِفْهَامٍ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ نَصْبٍ ظَرْفُ مَكَانٍ، وَهُوَ خَبَرٌ مُقَدَّمٌ",
  HUWA = "ضَمِيرٌ مُنْفَصِلٌ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ", ANA = "ضَمِيرٌ مُنْفَصِلٌ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ",
  ZARF_M = "ظَرْفُ مَكَانٍ مَنْصُوبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ، وَهُوَ مُضَافٌ", ZARF_Z = "ظَرْفُ زَمَانٍ مَنْصُوبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ، وَهُوَ مُضَافٌ",
  MM = "، وَهُوَ مَمْنُوعٌ مِنَ الصَّرْفِ", NIYABA = "وَعَلَامَةُ جَرِّهِ الْفَتْحَةُ نِيَابَةً عَنِ الْكَسْرَةِ لِأَنَّهُ مَمْنُوعٌ مِنَ الصَّرْفِ",
  WAW_M = "خَبَرٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الْوَاوُ لِأَنَّهُ جَمْعُ مُذَكَّرٍ سَالِمٌ",
  YA = "، وَهُوَ مُضَافٌ، وَالْيَاءُ ضَمِيرٌ فِي مَحَلِّ جَرٍّ مُضَافٌ إِلَيْهِ", MUQ = "الْمُقَدَّرَةُ عَلَى مَا قَبْلَ يَاءِ الْمُتَكَلِّمِ";

X.m01 = [
  { s: "مَا هَذَا؟", de: "Was ist das?", words: [
    ["مَا", ISTIF, "Fragewort „was?“ – unveränderlich (mabnī), steht an der Stelle des Subjekts", 1],
    ["هَذَا", "اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ رَفْعٍ خَبَرٌ", "Demonstrativ – hier an der Stelle des Prädikats", 1]] },
  { s: "هَذَا كُرْسِيٌّ.", de: "Das ist ein Stuhl.", words: [
    ["هَذَا", HADHA, "Demonstrativ, unveränderlich, an der Stelle des Subjekts", 1],
    ["كُرْسِيٌّ", KHA, "Prädikat, Nominativ – Ḍamma mit Tanwīn", 1]] },
  { s: "مَنْ هَذَا؟ هَذَا طَبِيبٌ.", de: "Wer ist das? Das ist ein Arzt.", words: [
    ["مَنْ", ISTIF, "Fragewort „wer?“ – unveränderlich, an der Stelle des Subjekts", 1],
    ["هَذَا", "اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ رَفْعٍ خَبَرٌ", "Prädikat der Frage"],
    ["هَذَا", HADHA, "Subjekt der Antwort"],
    ["طَبِيبٌ", KHA, "Prädikat, Nominativ", 1]] },
  { s: "أَهَذَا بَيْتٌ؟ لَا، هَذَا مَسْجِدٌ.", de: "Ist das ein Haus? Nein, das ist eine Moschee.", words: [
    ["أَهَذَا", "الْهَمْزَةُ حَرْفُ اسْتِفْهَامٍ، وَهَذَا اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ", "Frage-Hamza (Ja/Nein-Frage) + Demonstrativ als Subjekt", 1],
    ["بَيْتٌ", KHA, "Prädikat, Nominativ"],
    ["لَا", "حَرْفُ جَوَابٍ مَبْنِيٌّ عَلَى السُّكُونِ", "Antwortpartikel „nein“ – hat keine Rolle im Satz", 1],
    ["هَذَا", HADHA, "Subjekt"],
    ["مَسْجِدٌ", KHA, "Prädikat, Nominativ", 1]] }
];

X.m02 = [
  { s: "ذَلِكَ إِمَامٌ.", de: "Das (dort) ist ein Imam.", words: [
    ["ذَلِكَ", DHALIKA, "„jener“ – unveränderlich auf Fatḥa, an der Stelle des Subjekts", 1],
    ["إِمَامٌ", KHA, "Prädikat, Nominativ", 1]] },
  { s: "هَذَا حَجَرٌ وَذَلِكَ بَيْتٌ.", de: "Das ist ein Stein, und das dort ist ein Haus.", words: [
    ["هَذَا", HADHA, "Subjekt des ersten Satzes"],
    ["حَجَرٌ", KHA, "Prädikat, Nominativ", 1],
    ["وَذَلِكَ", "الْوَاوُ حَرْفُ عَطْفٍ، وَذَلِكَ اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ", "„und“ verbindet zwei Sätze; ذَلِكَ ist Subjekt des zweiten", 1],
    ["بَيْتٌ", KHA, "Prädikat des zweiten Satzes"]] },
  { s: "أَذَلِكَ سُكَّرٌ؟ نَعَمْ، ذَلِكَ سُكَّرٌ.", de: "Ist das dort Zucker? Ja, das ist Zucker.", words: [
    ["أَذَلِكَ", "الْهَمْزَةُ حَرْفُ اسْتِفْهَامٍ، وَذَلِكَ اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ", "Frage-Hamza + ذَلِكَ als Subjekt", 1],
    ["سُكَّرٌ", KHA, "Prädikat, Nominativ"],
    ["نَعَمْ", "حَرْفُ جَوَابٍ مَبْنِيٌّ عَلَى السُّكُونِ", "Antwortpartikel „ja“", 1],
    ["ذَلِكَ", DHALIKA, "Subjekt"],
    ["سُكَّرٌ", KHA, "Prädikat"]] },
  { s: "مَا ذَلِكَ؟ ذَلِكَ لَبَنٌ.", de: "Was ist das dort? Das ist Milch.", words: [
    ["مَا", ISTIF, "Fragewort, Subjekt"],
    ["ذَلِكَ", "اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ رَفْعٍ خَبَرٌ", "in der Frage an der Stelle des Prädikats", 1],
    ["ذَلِكَ", DHALIKA, "Subjekt der Antwort"],
    ["لَبَنٌ", KHA, "Prädikat, Nominativ", 1]] }
];

X.m03 = [
  { s: "الْبَيْتُ كَبِيرٌ.", de: "Das Haus ist groß.", words: [
    ["الْبَيْتُ", MUB, "bestimmtes Subjekt – mit al ohne Tanwīn, nur ein Ḍamma", 1],
    ["كَبِيرٌ", KHA, "unbestimmtes Prädikat mit Tanwīn", 1]] },
  { s: "الْوَلَدُ جَالِسٌ وَالْمُدَرِّسُ وَاقِفٌ.", de: "Der Junge sitzt, und der Lehrer steht.", words: [
    ["الْوَلَدُ", MUB, "Subjekt"],
    ["جَالِسٌ", KHA, "Prädikat, Nominativ", 1],
    ["وَالْمُدَرِّسُ", "الْوَاوُ حَرْفُ عَطْفٍ، وَالْمُدَرِّسُ مُبْتَدَأٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ", "„und“ + Subjekt des zweiten Satzes", 1],
    ["وَاقِفٌ", KHA, "Prädikat"]] },
  { s: "الْكُرْسِيُّ مَكْسُورٌ.", de: "Der Stuhl ist kaputt.", words: [
    ["الْكُرْسِيُّ", MUB, "Subjekt, Nominativ", 1],
    ["مَكْسُورٌ", KHA, "Prädikat, Nominativ", 1]] },
  { s: "التَّاجِرُ غَنِيٌّ وَالطَّالِبُ فَقِيرٌ.", de: "Der Händler ist reich, und der Student ist arm.", words: [
    ["التَّاجِرُ", MUB, "Subjekt – Sonnenbuchstabe: at-tāǧiru", 1],
    ["غَنِيٌّ", KHA, "Prädikat"],
    ["وَالطَّالِبُ", "الْوَاوُ حَرْفُ عَطْفٍ، وَالطَّالِبُ مُبْتَدَأٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ", "„und“ + neues Subjekt"],
    ["فَقِيرٌ", KHA, "Prädikat, Nominativ", 1]] },
  { s: "الْمَاءُ بَارِدٌ وَالشَّايُ حَارٌّ.", de: "Das Wasser ist kalt, und der Tee ist heiß.", words: [
    ["الْمَاءُ", MUB, "Subjekt"],
    ["بَارِدٌ", KHA, "Prädikat"],
    ["وَالشَّايُ", "الْوَاوُ حَرْفُ عَطْفٍ، وَالشَّايُ مُبْتَدَأٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ", "„und“ + neues Subjekt"],
    ["حَارٌّ", KHA, "Prädikat, Nominativ", 1]] }
];

X.m04 = [
  { s: "الْمُدَرِّسُ فِي الْفَصْلِ.", de: "Der Lehrer ist im Klassenzimmer.", words: [
    ["الْمُدَرِّسُ", MUB, "Subjekt, Nominativ", 1],
    ["فِي", JAR, "Präposition „in“", 1],
    ["الْفَصْلِ", FI, "nach فِي Genitiv – Kasra", 1]] },
  { s: "أَيْنَ الْقَلَمُ؟ هُوَ عَلَى الْمَكْتَبِ.", de: "Wo ist der Stift? Er ist auf dem Schreibtisch.", words: [
    ["أَيْنَ", AINA, "Fragewort „wo?“ – unveränderlich, vorgezogenes Prädikat", 1],
    ["الْقَلَمُ", MUA, "nachgestelltes Subjekt, Nominativ", 1],
    ["هُوَ", HUWA, "Pronomen „er“ als Subjekt", 1],
    ["عَلَى", JAR, "Präposition „auf“"],
    ["الْمَكْتَبِ", ALA, "Genitiv nach عَلَى", 1]] },
  { s: "السَّاعَةُ فِي الْغُرْفَةِ.", de: "Die Uhr ist im Zimmer.", words: [
    ["السَّاعَةُ", MUB, "Subjekt"],
    ["فِي", JAR, "Präposition"],
    ["الْغُرْفَةِ", FI, "Genitiv nach فِي", 1]] },
  { s: "أَيْنَ السَّاعَةُ؟ هِيَ عَلَى الْكُرْسِيِّ.", de: "Wo ist die Uhr? Sie ist auf dem Stuhl.", words: [
    ["أَيْنَ", AINA, "Fragewort, vorgezogenes Prädikat"],
    ["السَّاعَةُ", MUA, "nachgestelltes Subjekt"],
    ["هِيَ", HUWA, "Pronomen „sie“ (auch für Sachen) als Subjekt", 1],
    ["عَلَى", JAR, "Präposition"],
    ["الْكُرْسِيِّ", ALA, "Genitiv nach عَلَى", 1]] }
];

X.m04a = [
  { s: "ذَهَبَ الْمُدِيرُ إِلَى السُّوقِ.", de: "Der Direktor ging zum Markt.", words: [
    ["ذَهَبَ", MADI, "Verb der Vergangenheit, unveränderlich auf Fatḥa", 1],
    ["الْمُدِيرُ", FAIL, "Subjekt des Verbs (Fāʿil), Nominativ", 1],
    ["إِلَى", JAR, "Präposition „zu“"],
    ["السُّوقِ", ILA, "Genitiv nach إِلَى", 1]] },
  { s: "خَرَجَ الطَّالِبُ مِنَ الْجَامِعَةِ.", de: "Der Student ging aus der Universität hinaus.", words: [
    ["خَرَجَ", MADI, "Verb, Vergangenheit"],
    ["الطَّالِبُ", FAIL, "Fāʿil, Nominativ", 1],
    ["مِنَ", JAR_MINA, "مِنْ bekommt vor al ein Fatḥa, weil zwei Sukūn aufeinandertreffen", 1],
    ["الْجَامِعَةِ", MIN, "Genitiv nach مِنْ"]] },
  { s: "أَنَا مِنَ الْيَابَانِ.", de: "Ich bin aus Japan.", words: [
    ["أَنَا", ANA, "Pronomen „ich“ – unveränderlich, Subjekt", 1],
    ["مِنَ", JAR_MINA, "Präposition"],
    ["الْيَابَانِ", MIN, "Genitiv nach مِنْ", 1]] },
  { s: "أَنْتَ مِنَ الْهِنْدِ.", de: "Du bist aus Indien.", words: [
    ["أَنْتَ", HUWA, "Pronomen „du“ (m.) – unveränderlich auf Fatḥa, Subjekt", 1],
    ["مِنَ", JAR_MINA, "Präposition"],
    ["الْهِنْدِ", MIN, "Genitiv"]] },
  { s: "ذَهَبَ إِلَى الْمَدْرَسَةِ.", de: "Er ging zur Schule.", words: [
    ["ذَهَبَ", "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الْفَتْحِ، وَالْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ تَقْدِيرُهُ هُوَ", "kein Subjekt genannt: „er“ steckt im Verb", 1],
    ["إِلَى", JAR, "Präposition"],
    ["الْمَدْرَسَةِ", ILA, "Genitiv nach إِلَى"]] }
];

X.m05 = [
  { s: "بَابُ الْمَسْجِدِ مَفْتُوحٌ.", de: "Die Tür der Moschee ist offen.", words: [
    ["بَابُ", MUB_M, "Subjekt und Muḍāf – darum ohne al und ohne Tanwīn", 1],
    ["الْمَسْجِدِ", MI, "Muḍāf ilaihi, Genitiv", 1],
    ["مَفْتُوحٌ", KHA, "Prädikat"]] },
  { s: "سَيَّارَةُ الْمُدِيرِ هُنَاكَ.", de: "Das Auto des Direktors ist dort.", words: [
    ["سَيَّارَةُ", MUB_M, "Subjekt und Muḍāf", 1],
    ["الْمُدِيرِ", MI, "Muḍāf ilaihi"],
    ["هُنَاكَ", "اسْمُ إِشَارَةٍ لِلْمَكَانِ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ نَصْبٍ ظَرْفُ مَكَانٍ، وَهُوَ خَبَرٌ", "„dort“ – Ortsangabe, unveränderlich, steht an der Stelle des Prädikats", 1]] },
  { s: "الْحَقِيبَةُ تَحْتَ الْكُرْسِيِّ.", de: "Die Tasche ist unter dem Stuhl.", words: [
    ["الْحَقِيبَةُ", MUB, "Subjekt"],
    ["تَحْتَ", ZARF_M, "„unter“ – Ortsadverb im Akkusativ, zugleich Muḍāf", 1],
    ["الْكُرْسِيِّ", MI, "Muḍāf ilaihi nach تَحْتَ", 1]] },
  { s: "يَا حَامِدُ، أَيْنَ ابْنُ الْمُدَرِّسِ؟", de: "Hāmid, wo ist der Sohn des Lehrers?", words: [
    ["يَا", "حَرْفُ نِدَاءٍ مَبْنِيٌّ عَلَى السُّكُونِ", "Rufpartikel", 1],
    ["حَامِدُ", "مُنَادًى مَبْنِيٌّ عَلَى الضَّمِّ فِي مَحَلِّ نَصْبٍ", "Angerufener: ein Ḍamma, kein Tanwīn", 1],
    ["أَيْنَ", AINA, "Fragewort, vorgezogenes Prädikat"],
    ["ابْنُ", MUA_M, "nachgestelltes Subjekt und Muḍāf", 1],
    ["الْمُدَرِّسِ", MI, "Muḍāf ilaihi"]] },
  { s: "اسْمُ الْبِنْتِ آمِنَةُ.", de: "Der Name des Mädchens ist Āmina.", words: [
    ["اسْمُ", MUB_M, "Subjekt und Muḍāf"],
    ["الْبِنْتِ", MI, "Muḍāf ilaihi, Genitiv", 1],
    ["آمِنَةُ", KHA, "Prädikat; weiblicher Name ohne Tanwīn", 1]] }
];

X.m06 = [
  { s: "هَذِهِ دَرَّاجَةٌ.", de: "Das ist ein Fahrrad.", words: [
    ["هَذِهِ", HADHIHI, "weibliches Demonstrativ, unveränderlich auf Kasra", 1],
    ["دَرَّاجَةٌ", KHA, "Prädikat, Nominativ", 1]] },
  { s: "الْمِكْوَاةُ حَارَّةٌ.", de: "Das Bügeleisen ist heiß.", words: [
    ["الْمِكْوَاةُ", MUB, "Subjekt (weiblich)"],
    ["حَارَّةٌ", KHA, "Prädikat – weiblich wie das Subjekt", 1]] },
  { s: "هَذَا لِحَامِدٍ.", de: "Das gehört Hāmid.", words: [
    ["هَذَا", HADHA, "Subjekt"],
    ["لِحَامِدٍ", "اللَّامُ حَرْفُ جَرٍّ مَبْنِيٌّ عَلَى الْكَسْرِ، وَحَامِدٍ اسْمٌ مَجْرُورٌ بِاللَّامِ وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ، وَشِبْهُ الْجُمْلَةِ خَبَرٌ", "لِـ „gehört“ + Genitiv; die Gruppe ist das Prädikat", 1]] },
  { s: "الْبَقَرَةُ لِلْفَلَّاحِ.", de: "Die Kuh gehört dem Bauern.", words: [
    ["الْبَقَرَةُ", MUB, "Subjekt", 1],
    ["لِلْفَلَّاحِ", "اللَّامُ حَرْفُ جَرٍّ مَبْنِيٌّ عَلَى الْكَسْرِ، وَالْفَلَّاحِ اسْمٌ مَجْرُورٌ بِاللَّامِ وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ، وَشِبْهُ الْجُمْلَةِ خَبَرٌ", "لِـ + الْ → لِلْ; Genitiv, die Gruppe ist das Prädikat", 1]] },
  { s: "الْأُمُّ فِي الْمَطْبَخِ وَالْأَبُ فِي الْمَسْجِدِ.", de: "Die Mutter ist in der Küche, und der Vater ist in der Moschee.", words: [
    ["الْأُمُّ", MUB, "Subjekt", 1],
    ["فِي", JAR, "Präposition"],
    ["الْمَطْبَخِ", FI, "Genitiv"],
    ["وَالْأَبُ", "الْوَاوُ حَرْفُ عَطْفٍ، وَالْأَبُ مُبْتَدَأٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ", "„und“ + Subjekt des zweiten Satzes", 1],
    ["فِي", JAR, "Präposition"],
    ["الْمَسْجِدِ", FI, "Genitiv"]] },
  { s: "السَّيَّارَةُ سَرِيعَةٌ جِدًّا.", de: "Das Auto ist sehr schnell.", words: [
    ["السَّيَّارَةُ", MUB, "Subjekt"],
    ["سَرِيعَةٌ", KHA, "Prädikat, weiblich", 1],
    ["جِدًّا", "مَفْعُولٌ مُطْلَقٌ لِفِعْلٍ مَحْذُوفٍ مَنْصُوبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ", "„sehr“ – Akkusativ; ergänzt ein weggelassenes Verb (جَدَّ جِدًّا)", 1]] }
];

X.m07 = [
  { s: "تِلْكَ نَاقَةٌ.", de: "Das dort ist eine Kamelstute.", words: [
    ["تِلْكَ", DHALIKA, "„jene“ (w.), unveränderlich auf Fatḥa, Subjekt", 1],
    ["نَاقَةٌ", KHA, "Prädikat"]] },
  { s: "هَذِهِ بَطَّةٌ وَتِلْكَ دَجَاجَةٌ.", de: "Das ist eine Ente, und das dort ist ein Huhn.", words: [
    ["هَذِهِ", HADHIHI, "Subjekt des ersten Satzes"],
    ["بَطَّةٌ", KHA, "Prädikat", 1],
    ["وَتِلْكَ", "الْوَاوُ حَرْفُ عَطْفٍ، وَتِلْكَ اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ", "„und“ + تِلْكَ als neues Subjekt", 1],
    ["دَجَاجَةٌ", KHA, "Prädikat"]] },
  { s: "مَنْ تِلْكَ؟ تِلْكَ مُمَرِّضَةٌ.", de: "Wer ist das dort? Das ist eine Krankenschwester.", words: [
    ["مَنْ", ISTIF, "Fragewort, Subjekt"],
    ["تِلْكَ", "اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ رَفْعٍ خَبَرٌ", "in der Frage an der Stelle des Prädikats", 1],
    ["تِلْكَ", DHALIKA, "Subjekt der Antwort"],
    ["مُمَرِّضَةٌ", KHA, "Prädikat", 1]] },
  { s: "الْبَيْضَةُ تَحْتَ الدَّجَاجَةِ.", de: "Das Ei ist unter dem Huhn.", words: [
    ["الْبَيْضَةُ", MUB, "Subjekt", 1],
    ["تَحْتَ", ZARF_M, "Ortsadverb, Akkusativ, Muḍāf"],
    ["الدَّجَاجَةِ", MI, "Muḍāf ilaihi, Genitiv", 1]] },
  { s: "أَيْنَ الْمُؤَذِّنُ؟ هُوَ فِي الْمَسْجِدِ.", de: "Wo ist der Muezzin? Er ist in der Moschee.", words: [
    ["أَيْنَ", AINA, "Fragewort"],
    ["الْمُؤَذِّنُ", MUA, "nachgestelltes Subjekt", 1],
    ["هُوَ", HUWA, "Pronomen als Subjekt"],
    ["فِي", JAR, "Präposition"],
    ["الْمَسْجِدِ", FI, "Genitiv"]] }
];

X.m08 = [
  { s: "هَذَا الرَّجُلُ مُهَنْدِسٌ.", de: "Dieser Mann ist Ingenieur.", words: [
    ["هَذَا", HADHA, "Subjekt"],
    ["الرَّجُلُ", BADAL, "erklärt هَذَا näher (Badal) – „dieser Mann“", 1],
    ["مُهَنْدِسٌ", KHA, "Prädikat", 1]] },
  { s: "ذَهَبَ الرَّئِيسُ إِلَى الْمُسْتَشْفَى.", de: "Der Präsident ging ins Krankenhaus.", words: [
    ["ذَهَبَ", MADI, "Verb, Vergangenheit"],
    ["الرَّئِيسُ", FAIL, "Fāʿil", 1],
    ["إِلَى", JAR, "Präposition"],
    ["الْمُسْتَشْفَى", "اسْمٌ مَجْرُورٌ بِإِلَى وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ الْمُقَدَّرَةُ عَلَى الْأَلِفِ لِلتَّعَذُّرِ", "Genitiv – auf -ā kann man die Kasra nicht sprechen, sie ist nur gedacht", 1]] },
  { s: "جَلَسَ الْمُهَنْدِسُ خَلْفَ الْمُدِيرِ.", de: "Der Ingenieur setzte sich hinter den Direktor.", words: [
    ["جَلَسَ", MADI, "Verb, Vergangenheit", 1],
    ["الْمُهَنْدِسُ", FAIL, "Fāʿil"],
    ["خَلْفَ", ZARF_M, "„hinter“ – Ortsadverb, Akkusativ, Muḍāf", 1],
    ["الْمُدِيرِ", MI, "Muḍāf ilaihi"]] },
  { s: "هَذِهِ الْحَقِيبَةُ ثَقِيلَةٌ.", de: "Diese Tasche ist schwer.", words: [
    ["هَذِهِ", HADHIHI, "Subjekt"],
    ["الْحَقِيبَةُ", BADAL, "Badal zu هَذِهِ – „diese Tasche“", 1],
    ["ثَقِيلَةٌ", KHA, "Prädikat – erst damit ist es ein Satz"]] },
  { s: "الْمُسْتَشْفَى قَرِيبٌ.", de: "Das Krankenhaus ist nah.", words: [
    ["الْمُسْتَشْفَى", "مُبْتَدَأٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ الْمُقَدَّرَةُ عَلَى الْأَلِفِ لِلتَّعَذُّرِ", "Subjekt – die Ḍamma ist auf dem -ā nur gedacht", 1],
    ["قَرِيبٌ", KHA, "Prädikat"]] },
  { s: "ذَلِكَ الْكِتَابُ قَدِيمٌ.", de: "Jenes Buch ist alt.", words: [
    ["ذَلِكَ", DHALIKA, "Subjekt"],
    ["الْكِتَابُ", BADAL, "Badal zu ذَلِكَ"],
    ["قَدِيمٌ", KHA, "Prädikat", 1]] }
];

X.m09 = [
  { s: "الْمُدَرِّسُ الْجَدِيدُ مِنَ الْقَاهِرَةِ.", de: "Der neue Lehrer ist aus Kairo.", words: [
    ["الْمُدَرِّسُ", MUB, "Subjekt"],
    ["الْجَدِيدُ", NR, "Adjektiv: bestimmt und im Nominativ wie sein Nomen", 1],
    ["مِنَ", JAR_MINA, "Präposition"],
    ["الْقَاهِرَةِ", MIN, "Genitiv nach مِنْ"]] },
  { s: "ذَهَبَ الطَّالِبُ الْمُجْتَهِدُ إِلَى الْمَكْتَبَةِ.", de: "Der fleißige Student ging in die Bibliothek.", words: [
    ["ذَهَبَ", MADI, "Verb"],
    ["الطَّالِبُ", FAIL, "Fāʿil", 1],
    ["الْمُجْتَهِدُ", NR, "Adjektiv zum Fāʿil – Nominativ", 1],
    ["إِلَى", JAR, "Präposition"],
    ["الْمَكْتَبَةِ", ILA, "Genitiv"]] },
  { s: "أَنَا فِي مَدِينَةٍ كَبِيرَةٍ.", de: "Ich bin in einer großen Stadt.", words: [
    ["أَنَا", ANA, "Subjekt"],
    ["فِي", JAR, "Präposition"],
    ["مَدِينَةٍ", FI, "Genitiv mit Tanwīn", 1],
    ["كَبِيرَةٍ", NJ, "Adjektiv: folgt dem Nomen in den Genitiv", 1]] },
  { s: "الرَّجُلُ الَّذِي خَرَجَ الْآنَ وَزِيرٌ.", de: "Der Mann, der gerade hinausgegangen ist, ist ein Minister.", words: [
    ["الرَّجُلُ", MUB, "Subjekt"],
    ["الَّذِي", "اسْمٌ مَوْصُولٌ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ رَفْعٍ نَعْتٌ", "Relativpronomen – unveränderlich, beschreibt الرَّجُلُ", 1],
    ["خَرَجَ", "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الْفَتْحِ، وَالْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ تَقْدِيرُهُ هُوَ", "Verb im Relativsatz, „er“ steckt im Verb"],
    ["الْآنَ", "ظَرْفُ زَمَانٍ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ نَصْبٍ", "„jetzt“ – Zeitadverb, unveränderlich", 1],
    ["وَزِيرٌ", KHA, "Prädikat des ganzen Satzes", 1]] },
  { s: "الطَّبِيبُ عِنْدَ الْوَزِيرِ.", de: "Der Arzt ist beim Minister.", words: [
    ["الطَّبِيبُ", MUB, "Subjekt"],
    ["عِنْدَ", ZARF_M, "„bei“ – Ortsadverb, Akkusativ, Muḍāf", 1],
    ["الْوَزِيرِ", MI, "Muḍāf ilaihi"]] }
];

X.m10 = [
  { s: "بَيْتُهُ قَرِيبٌ مِنَ الْمَسْجِدِ.", de: "Sein Haus ist nah bei der Moschee.", words: [
    ["بَيْتُهُ", MUB_M + "، وَالْهَاءُ ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى الضَّمِّ فِي مَحَلِّ جَرٍّ مُضَافٌ إِلَيْهِ", "Subjekt; ـهُ „sein“ ist Muḍāf ilaihi", 1],
    ["قَرِيبٌ", KHA, "Prädikat"],
    ["مِنَ", JAR_MINA, "Präposition"],
    ["الْمَسْجِدِ", MIN, "Genitiv"]] },
  { s: "أَخُوكَ طَبِيبٌ.", de: "Dein Bruder ist Arzt.", words: [
    ["أَخُوكَ", "مُبْتَدَأٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الْوَاوُ لِأَنَّهُ مِنَ الْأَسْمَاءِ الْخَمْسَةِ، وَهُوَ مُضَافٌ، وَالْكَافُ ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ جَرٍّ مُضَافٌ إِلَيْهِ", "أَخٌ als Muḍāf: Nominativ mit و", 1],
    ["طَبِيبٌ", KHA, "Prädikat"]] },
  { s: "ذَهَبْتَ إِلَى الْجَامِعَةِ مَعَ زَمِيلِكَ.", de: "Du gingst mit deinem Kollegen zur Universität.", words: [
    ["ذَهَبْتَ", "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى السُّكُونِ، وَالتَّاءُ ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ رَفْعٍ فَاعِلٌ", "ـتَ „du“ ist das Subjekt (Fāʿil)", 1],
    ["إِلَى", JAR, "Präposition"],
    ["الْجَامِعَةِ", ILA, "Genitiv"],
    ["مَعَ", ZARF_M, "„mit“ – Adverb im Akkusativ, Muḍāf", 1],
    ["زَمِيلِكَ", MI + "، وَهُوَ مُضَافٌ، وَالْكَافُ ضَمِيرٌ مُتَّصِلٌ فِي مَحَلِّ جَرٍّ مُضَافٌ إِلَيْهِ", "Genitiv nach مَعَ; ـكَ „dein“", 1]] },
  { s: "لَهُ ابْنٌ وَبِنْتٌ.", de: "Er hat einen Sohn und eine Tochter.", words: [
    ["لَهُ", "اللَّامُ حَرْفُ جَرٍّ، وَالْهَاءُ ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى الضَّمِّ فِي مَحَلِّ جَرٍّ، وَشِبْهُ الْجُمْلَةِ خَبَرٌ مُقَدَّمٌ", "„ihm (gehört)“ – vorgezogenes Prädikat; لِـ für Verwandte", 1],
    ["ابْنٌ", MUA, "nachgestelltes Subjekt", 1],
    ["وَبِنْتٌ", "الْوَاوُ حَرْفُ عَطْفٍ، وَبِنْتٌ مَعْطُوفٌ عَلَى ابْنٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ", "„und“ + Wort im selben Fall wie ابْنٌ", 1]] },
  { s: "مَا عِنْدِي سَيَّارَةٌ.", de: "Ich habe kein Auto.", words: [
    ["مَا", "حَرْفُ نَفْيٍ مَبْنِيٌّ عَلَى السُّكُونِ", "Verneinung „nicht“", 1],
    ["عِنْدِي", "ظَرْفُ مَكَانٍ مَنْصُوبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ " + MUQ + YA + "، وَشِبْهُ الْجُمْلَةِ خَبَرٌ مُقَدَّمٌ", "„bei mir“ – vorgezogenes Prädikat"],
    ["سَيَّارَةٌ", MUA, "nachgestelltes Subjekt", 1]] }
];

X.m11 = [
  { s: "أُحِبُّ أُمِّي وَأَبِي.", de: "Ich liebe meine Mutter und meinen Vater.", words: [
    ["أُحِبُّ", "فِعْلٌ مُضَارِعٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ، وَالْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ وُجُوبًا تَقْدِيرُهُ أَنَا", "Präsens; „ich“ steckt im Verb"],
    ["أُمِّي", "مَفْعُولٌ بِهِ مَنْصُوبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ " + MUQ + YA, "Objekt – vor „mein“ ist das -a nur gedacht", 1],
    ["وَأَبِي", "الْوَاوُ حَرْفُ عَطْفٍ، وَأَبِي مَعْطُوفٌ عَلَى أُمِّي مَنْصُوبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ " + MUQ, "„und“ + zweites Objekt, ebenfalls Akkusativ", 1]] },
  { s: "تُحِبُّ الْقَهْوَةَ.", de: "Du magst Kaffee.", words: [
    ["تُحِبُّ", "فِعْلٌ مُضَارِعٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ، وَالْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ وُجُوبًا تَقْدِيرُهُ أَنْتَ", "Präsens; „du“ steckt im Verb", 1],
    ["الْقَهْوَةَ", MAF, "Objekt, Akkusativ – Fatḥa", 1]] },
  { s: "أُحِبُّ الْفَاكِهَةَ الْحُلْوَةَ.", de: "Ich mag süßes Obst.", words: [
    ["أُحِبُّ", "فِعْلٌ مُضَارِعٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ، وَالْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ وُجُوبًا تَقْدِيرُهُ أَنَا", "Präsens"],
    ["الْفَاكِهَةَ", MAF, "Objekt, Akkusativ"],
    ["الْحُلْوَةَ", NN, "Adjektiv zum Objekt – auch im Akkusativ", 1]] },
  { s: "الْمَسْجِدُ كَبِيرٌ، فِيهِ مَكْتَبَةٌ.", de: "Die Moschee ist groß, in ihr ist eine Bibliothek.", words: [
    ["الْمَسْجِدُ", MUB, "Subjekt"],
    ["كَبِيرٌ", KHA, "Prädikat"],
    ["فِيهِ", "فِي حَرْفُ جَرٍّ، وَالْهَاءُ ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى الْكَسْرِ فِي مَحَلِّ جَرٍّ، وَشِبْهُ الْجُمْلَةِ خَبَرٌ مُقَدَّمٌ", "„darin“ – vorgezogenes Prädikat; ـهِ steht für die Moschee", 1],
    ["مَكْتَبَةٌ", MUA, "nachgestelltes Subjekt", 1]] },
  { s: "أُحِبُّ رَسُولَ اللَّهِ.", de: "Ich liebe den Gesandten Allahs.", words: [
    ["أُحِبُّ", "فِعْلٌ مُضَارِعٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ، وَالْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ وُجُوبًا تَقْدِيرُهُ أَنَا", "Präsens"],
    ["رَسُولَ", MAF_M, "Objekt und Muḍāf – Akkusativ ohne Tanwīn", 1],
    ["اللَّهِ", "لَفْظُ الْجَلَالَةِ مُضَافٌ إِلَيْهِ مَجْرُورٌ وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ", "der Name Allahs als Muḍāf ilaihi, Genitiv", 1]] }
];

X.m12 = [
  { s: "ذَهَبَتْ فَاطِمَةُ إِلَى الْمُسْتَشْفَى.", de: "Fāṭima ging ins Krankenhaus.", words: [
    ["ذَهَبَتْ", MADI_T, "-at zeigt nur das weibliche Subjekt an", 1],
    ["فَاطِمَةُ", FAIL, "Fāʿil – weiblicher Name ohne Tanwīn", 1],
    ["إِلَى", JAR, "Präposition"],
    ["الْمُسْتَشْفَى", "اسْمٌ مَجْرُورٌ بِإِلَى وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ الْمُقَدَّرَةُ عَلَى الْأَلِفِ لِلتَّعَذُّرِ", "Genitiv, nur gedacht"]] },
  { s: "جَلَسَتِ الْبِنْتُ تَحْتَ الشَّجَرَةِ.", de: "Das Mädchen setzte sich unter den Baum.", words: [
    ["جَلَسَتِ", MADI_TI, "vor al wird das Sukūn des t zu Kasra", 1],
    ["الْبِنْتُ", FAIL, "Fāʿil", 1],
    ["تَحْتَ", ZARF_M, "Ortsadverb, Muḍāf"],
    ["الشَّجَرَةِ", MI, "Muḍāf ilaihi", 1]] },
  { s: "أَنْتِ طَالِبَةٌ مُجْتَهِدَةٌ.", de: "Du bist eine fleißige Studentin.", words: [
    ["أَنْتِ", "ضَمِيرٌ مُنْفَصِلٌ مَبْنِيٌّ عَلَى الْكَسْرِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ", "„du“ (w.) – unveränderlich auf Kasra, Subjekt", 1],
    ["طَالِبَةٌ", KHA, "Prädikat"],
    ["مُجْتَهِدَةٌ", NR, "Adjektiv zum Prädikat", 1]] },
  { s: "الْفَتَاةُ الَّتِي جَلَسَتْ هُنَاكَ أُخْتِي.", de: "Die junge Frau, die dort sitzt, ist meine Schwester.", words: [
    ["الْفَتَاةُ", MUB, "Subjekt"],
    ["الَّتِي", "اسْمٌ مَوْصُولٌ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ رَفْعٍ نَعْتٌ", "weibliches Relativpronomen, beschreibt الْفَتَاةُ", 1],
    ["جَلَسَتْ", "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الْفَتْحِ، وَالتَّاءُ لِلتَّأْنِيثِ، وَالْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ تَقْدِيرُهُ هِيَ", "„sie“ steckt im Verb"],
    ["هُنَاكَ", "اسْمُ إِشَارَةٍ لِلْمَكَانِ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ نَصْبٍ ظَرْفُ مَكَانٍ", "„dort“ – Ortsangabe"],
    ["أُخْتِي", "خَبَرٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ " + MUQ + YA, "Prädikat – vor „mein“ ist das -u nur gedacht", 1]] },
  { s: "كَيْفَ حَالُكِ؟", de: "Wie geht es dir (w.)?", words: [
    ["كَيْفَ", "اسْمُ اسْتِفْهَامٍ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ رَفْعٍ خَبَرٌ مُقَدَّمٌ", "„wie?“ – unveränderlich, vorgezogenes Prädikat", 1],
    ["حَالُكِ", MUA_M + "، وَالْكَافُ ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى الْكَسْرِ فِي مَحَلِّ جَرٍّ مُضَافٌ إِلَيْهِ", "nachgestelltes Subjekt; ـكِ „dein“ (w.)", 1]] },
  { s: "ذَهَبَتِ الْخَالَةُ إِلَى السُّوقِ.", de: "Die Tante ging zum Markt.", words: [
    ["ذَهَبَتِ", MADI_TI, "Kasra vor al"],
    ["الْخَالَةُ", FAIL, "Fāʿil", 1],
    ["إِلَى", JAR, "Präposition"],
    ["السُّوقِ", ILA, "Genitiv"]] }
];

X.m13 = [
  { s: "هَؤُلَاءِ طُلَّابٌ مُجْتَهِدُونَ.", de: "Das sind fleißige Studenten.", words: [
    ["هَؤُلَاءِ", "اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى الْكَسْرِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ", "Plural-Demonstrativ, unveränderlich auf Kasra"],
    ["طُلَّابٌ", KHA, "Prädikat – gebrochener Plural mit Ḍamma", 1],
    ["مُجْتَهِدُونَ", "نَعْتٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الْوَاوُ لِأَنَّهُ جَمْعُ مُذَكَّرٍ سَالِمٌ", "Adjektiv – gesunder m. Plural, Zeichen و", 1]] },
  { s: "أُولَئِكَ مُسْلِمَاتٌ.", de: "Jene sind Musliminnen.", words: [
    ["أُولَئِكَ", "اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى الْكَسْرِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ", "„jene“ (Pl.) – das ـكَ ist nur Anredezeichen", 1],
    ["مُسْلِمَاتٌ", KHA, "gesunder w. Plural: Nominativ mit Ḍamma", 1]] },
  { s: "ذَهَبَ الْمُسْلِمُونَ إِلَى الْمَسْجِدِ.", de: "Die Muslime gingen zur Moschee.", words: [
    ["ذَهَبَ", MADI, "Verb – steht vorne im Singular"],
    ["الْمُسْلِمُونَ", "فَاعِلٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الْوَاوُ لِأَنَّهُ جَمْعُ مُذَكَّرٍ سَالِمٌ", "Fāʿil – Nominativ mit و", 1],
    ["إِلَى", JAR, "Präposition"],
    ["الْمَسْجِدِ", ILA, "Genitiv"]] },
  { s: "ذَهَبْنَ إِلَى السُّوقِ.", de: "Sie (w. Pl.) gingen zum Markt.", words: [
    ["ذَهَبْنَ", "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى السُّكُونِ، وَالنُّونُ ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى الْفَتْحِ فِي مَحَلِّ رَفْعٍ فَاعِلٌ", "ـنَ „sie (w.)“ ist das Subjekt", 1],
    ["إِلَى", JAR, "Präposition"],
    ["السُّوقِ", ILA, "Genitiv"]] },
  { s: "بَعْضُهُمْ مُدَرِّسُونَ.", de: "Einige von ihnen sind Lehrer.", words: [
    ["بَعْضُهُمْ", MUB_M + "، وَهُمْ ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ جَرٍّ مُضَافٌ إِلَيْهِ", "Subjekt und Muḍāf; ـهُمْ ist Muḍāf ilaihi", 1],
    ["مُدَرِّسُونَ", WAW_M, "Prädikat mit و", 1]] },
  { s: "هُنَّ أُسْتَاذَاتٌ فِي الْجَامِعَةِ.", de: "Sie sind Professorinnen an der Universität.", words: [
    ["هُنَّ", HUWA, "„sie“ (w. Pl.) – unveränderlich auf Fatḥa, Subjekt", 1],
    ["أُسْتَاذَاتٌ", KHA, "Prädikat"],
    ["فِي", JAR, "Präposition"],
    ["الْجَامِعَةِ", FI, "Genitiv"]] }
];

X.m14 = [
  { s: "ذَهَبْنَا إِلَى الْمَطَارِ.", de: "Wir gingen zum Flughafen.", words: [
    ["ذَهَبْنَا", NAA, "ـنَا „wir“ ist das Subjekt", 1],
    ["إِلَى", JAR, "Präposition"],
    ["الْمَطَارِ", ILA, "Genitiv", 1]] },
  { s: "أَنْتُمْ طُلَّابُ الْكُلِّيَّةِ.", de: "Ihr seid die Studenten der Fakultät.", words: [
    ["أَنْتُمْ", ANA, "„ihr“ – unveränderlich auf Sukūn, Subjekt", 1],
    ["طُلَّابُ", KHA_M, "Prädikat und Muḍāf", 1],
    ["الْكُلِّيَّةِ", MI, "Muḍāf ilaihi"]] },
  { s: "بَيْتُ الْمُدِيرِ الْجَدِيدُ كَبِيرٌ.", de: "Das neue Haus des Direktors ist groß.", words: [
    ["بَيْتُ", MUB_M, "Subjekt und Muḍāf"],
    ["الْمُدِيرِ", MI, "Muḍāf ilaihi"],
    ["الْجَدِيدُ", NR, "Adjektiv zu بَيْتُ – steht hinter der ganzen Iḍāfa, Nominativ", 1],
    ["كَبِيرٌ", KHA, "Prädikat"]] },
  { s: "مِنْ أَيِّ بَلَدٍ أَنْتُمْ؟", de: "Aus welchem Land seid ihr?", words: [
    ["مِنْ", JAR, "Präposition"],
    ["أَيِّ", "اسْمُ اسْتِفْهَامٍ مَجْرُورٌ بِمِنْ وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ، وَهُوَ مُضَافٌ", "„welcher?“ – im Genitiv nach مِنْ, zugleich Muḍāf", 1],
    ["بَلَدٍ", MI, "Muḍāf ilaihi", 1],
    ["أَنْتُمْ", "ضَمِيرٌ مُنْفَصِلٌ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ مُؤَخَّرٌ", "nachgestelltes Subjekt"]] },
  { s: "نَحْنُ مُسْلِمُونَ، دِينُنَا الْإِسْلَامُ.", de: "Wir sind Muslime, unsere Religion ist der Islam.", words: [
    ["نَحْنُ", "ضَمِيرٌ مُنْفَصِلٌ مَبْنِيٌّ عَلَى الضَّمِّ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ", "„wir“ – unveränderlich auf Ḍamma", 1],
    ["مُسْلِمُونَ", WAW_M, "Prädikat mit و"],
    ["دِينُنَا", MUB_M + "، وَنَا ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ جَرٍّ مُضَافٌ إِلَيْهِ", "Subjekt; ـنَا „unser“", 1],
    ["الْإِسْلَامُ", KHA, "Prädikat"]] },
  { s: "ذَهَبَ إِبْرَاهِيمُ إِلَى الْمَحْكَمَةِ.", de: "Ibrāhīm ging zum Gericht.", words: [
    ["ذَهَبَ", MADI, "Verb"],
    ["إِبْرَاهِيمُ", FAIL + MM, "Fāʿil – nicht-arabischer Name ohne Tanwīn", 1],
    ["إِلَى", JAR, "Präposition"],
    ["الْمَحْكَمَةِ", ILA, "Genitiv"]] }
];

X.m15 = [
  { s: "رَجَعَ الْمُدَرِّسُ بَعْدَ الدَّرْسِ.", de: "Der Lehrer kehrte nach dem Unterricht zurück.", words: [
    ["رَجَعَ", MADI, "Verb, Vergangenheit", 1],
    ["الْمُدَرِّسُ", FAIL, "Fāʿil"],
    ["بَعْدَ", ZARF_Z, "„nach“ – Zeitadverb, Akkusativ, Muḍāf", 1],
    ["الدَّرْسِ", MI, "Muḍāf ilaihi"]] },
  { s: "ذَهَبْتُ إِلَى الْمَسْجِدِ قَبْلَ الْأَذَانِ.", de: "Ich ging vor dem Gebetsruf zur Moschee.", words: [
    ["ذَهَبْتُ", TU, "ـتُ „ich“ ist das Subjekt"],
    ["إِلَى", JAR, "Präposition"],
    ["الْمَسْجِدِ", ILA, "Genitiv"],
    ["قَبْلَ", ZARF_Z, "„vor“ (zeitlich) – Akkusativ, Muḍāf", 1],
    ["الْأَذَانِ", MI, "Muḍāf ilaihi", 1]] },
  { s: "أَنْتُنَّ طَالِبَاتٌ.", de: "Ihr (w.) seid Studentinnen.", words: [
    ["أَنْتُنَّ", HUWA, "„ihr“ (w.) – unveränderlich auf Fatḥa, Subjekt", 1],
    ["طَالِبَاتٌ", KHA, "Prädikat"]] },
  { s: "ذَهَبْتُنَّ إِلَى الْمَدْرَسَةِ قَبْلَ الِاخْتِبَارِ.", de: "Ihr (w.) gingt vor der Prüfung zur Schule.", words: [
    ["ذَهَبْتُنَّ", "فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى السُّكُونِ، وَالتَّاءُ ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى الضَّمِّ فِي مَحَلِّ رَفْعٍ فَاعِلٌ، وَالنُّونُ عَلَامَةُ جَمْعِ الْإِنَاثِ", "ـتُ ist das Subjekt, ـنَّ zeigt „weiblich Plural“", 1],
    ["إِلَى", JAR, "Präposition"],
    ["الْمَدْرَسَةِ", ILA, "Genitiv"],
    ["قَبْلَ", ZARF_Z, "Zeitadverb, Muḍāf"],
    ["الِاخْتِبَارِ", MI, "Muḍāf ilaihi", 1]] },
  { s: "الصَّلَاةُ بَعْدَ الْأَذَانِ.", de: "Das Gebet ist nach dem Gebetsruf.", words: [
    ["الصَّلَاةُ", MUB, "Subjekt"],
    ["بَعْدَ", ZARF_Z + "، وَشِبْهُ الْجُمْلَةِ خَبَرٌ", "Zeitadverb – mit seinem Muḍāf ilaihi das Prädikat", 1],
    ["الْأَذَانِ", MI, "Muḍāf ilaihi"]] },
  { s: "رَجَعْنَا بَعْدَ أُسْبُوعٍ.", de: "Wir kehrten nach einer Woche zurück.", words: [
    ["رَجَعْنَا", NAA, "ـنَا „wir“ ist das Subjekt", 1],
    ["بَعْدَ", ZARF_Z, "Zeitadverb, Muḍāf"],
    ["أُسْبُوعٍ", MI, "Muḍāf ilaihi mit Tanwīn", 1]] }
];

X.m16 = [
  { s: "هَذِهِ كِلَابٌ صَغِيرَةٌ.", de: "Das sind kleine Hunde.", words: [
    ["هَذِهِ", HADHIHI, "Plural von Tieren → weibliches Demonstrativ im Singular"],
    ["كِلَابٌ", KHA, "Prädikat", 1],
    ["صَغِيرَةٌ", NR, "Adjektiv – weiblich Singular, weil Tiere nicht vernunftbegabt sind", 1]] },
  { s: "ذَهَبَتِ السَّيَّارَاتُ إِلَى الْفُنْدُقِ.", de: "Die Autos fuhren zum Hotel.", words: [
    ["ذَهَبَتِ", MADI_TI, "weibliches Verb für einen Plural von Sachen", 1],
    ["السَّيَّارَاتُ", FAIL, "Fāʿil, Nominativ", 1],
    ["إِلَى", JAR, "Präposition"],
    ["الْفُنْدُقِ", ILA, "Genitiv"]] },
  { s: "الْمَسَاجِدُ كَبِيرَةٌ.", de: "Die Moscheen sind groß.", words: [
    ["الْمَسَاجِدُ", MUB, "Subjekt – Plural nach mafāʿil", 1],
    ["كَبِيرَةٌ", KHA, "Prädikat – weiblich Singular für einen Sachplural", 1]] },
  { s: "خَرَجَ الطُّلَّابُ مِنَ الْفَصْلِ.", de: "Die Studenten gingen aus dem Klassenzimmer.", words: [
    ["خَرَجَ", MADI, "männliches Verb – die Studenten sind Personen", 1],
    ["الطُّلَّابُ", FAIL, "Fāʿil"],
    ["مِنَ", JAR_MINA, "Präposition"],
    ["الْفَصْلِ", MIN, "Genitiv"]] },
  { s: "أَيْنَ الدَّفَاتِرُ؟ هِيَ عَلَى الْمَكْتَبِ.", de: "Wo sind die Hefte? Sie sind auf dem Schreibtisch.", words: [
    ["أَيْنَ", AINA, "Fragewort"],
    ["الدَّفَاتِرُ", MUA, "nachgestelltes Subjekt", 1],
    ["هِيَ", HUWA, "„sie“ (w. Sg.) für einen Sachplural", 1],
    ["عَلَى", JAR, "Präposition"],
    ["الْمَكْتَبِ", ALA, "Genitiv"]] }
];

X.m17 = [
  { s: "تِلْكَ سَيَّارَاتٌ يَابَانِيَّةٌ.", de: "Das dort sind japanische Autos.", words: [
    ["تِلْكَ", DHALIKA, "weiblich Singular für einen Sachplural"],
    ["سَيَّارَاتٌ", KHA, "Prädikat", 1],
    ["يَابَانِيَّةٌ", NR, "Adjektiv, weiblich Singular", 1]] },
  { s: "مُدِيرُ الشَّرِكَةِ فِي الْمَطَارِ.", de: "Der Direktor der Firma ist am Flughafen.", words: [
    ["مُدِيرُ", MUB_M, "Subjekt und Muḍāf", 1],
    ["الشَّرِكَةِ", MI, "Muḍāf ilaihi", 1],
    ["فِي", JAR, "Präposition"],
    ["الْمَطَارِ", FI, "Genitiv"]] },
  { s: "هَؤُلَاءِ مُهَنْدِسُونَ يَابَانِيُّونَ.", de: "Das sind japanische Ingenieure.", words: [
    ["هَؤُلَاءِ", "اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى الْكَسْرِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ", "Personen → هَؤُلَاءِ"],
    ["مُهَنْدِسُونَ", WAW_M, "Prädikat mit و", 1],
    ["يَابَانِيُّونَ", "نَعْتٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الْوَاوُ لِأَنَّهُ جَمْعُ مُذَكَّرٍ سَالِمٌ", "Adjektiv bei Personen: im Plural, Nominativ mit و", 1]] },
  { s: "الْحَمِيرُ فِي الْحَقْلِ.", de: "Die Esel sind auf dem Feld.", words: [
    ["الْحَمِيرُ", MUB, "Subjekt – einer der zwei Plurale von حِمَارٌ", 1],
    ["فِي", JAR, "Präposition"],
    ["الْحَقْلِ", FI, "Genitiv", 1]] },
  { s: "خَرَجَتِ الدَّجَاجَاتُ مِنَ الْبَيْتِ.", de: "Die Hühner gingen aus dem Haus.", words: [
    ["خَرَجَتِ", MADI_TI, "weibliches Verb; Kasra vor al", 1],
    ["الدَّجَاجَاتُ", FAIL, "Fāʿil"],
    ["مِنَ", JAR_MINA, "Präposition"],
    ["الْبَيْتِ", MIN, "Genitiv"]] }
];

X.m18 = [
  { s: "هَاتَانِ سَاعَتَانِ جَمِيلَتَانِ.", de: "Das sind zwei schöne Uhren.", words: [
    ["هَاتَانِ", "مُبْتَدَأٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الْأَلِفُ لِأَنَّهُ مُلْحَقٌ بِالْمُثَنَّى", "Dual von هَذِهِ – Nominativ mit Alif", 1],
    ["سَاعَتَانِ", "خَبَرٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الْأَلِفُ لِأَنَّهُ مُثَنًّى", "Prädikat im Dual", 1],
    ["جَمِيلَتَانِ", "نَعْتٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الْأَلِفُ لِأَنَّهُ مُثَنًّى", "Adjektiv im Dual"]] },
  { s: "خَرَجَ الطَّالِبَانِ مِنَ الْفَصْلِ.", de: "Die beiden Studenten gingen aus dem Klassenzimmer.", words: [
    ["خَرَجَ", MADI, "Verb vorne im Singular"],
    ["الطَّالِبَانِ", "فَاعِلٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الْأَلِفُ لِأَنَّهُ مُثَنًّى", "Fāʿil im Dual – Zeichen Alif", 1],
    ["مِنَ", JAR_MINA, "Präposition"],
    ["الْفَصْلِ", MIN, "Genitiv"]] },
  { s: "كَمْ طَالِبًا فِي الْفَصْلِ؟", de: "Wie viele Studenten sind im Klassenzimmer?", words: [
    ["كَمْ", ISTIF, "„wie viele?“ – unveränderlich, Subjekt"],
    ["طَالِبًا", "تَمْيِيزٌ مَنْصُوبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ", "nach كَمْ: Singular im Akkusativ (Tamyīz)", 1],
    ["فِي", JAR, "Präposition"],
    ["الْفَصْلِ", FI, "Genitiv; die Gruppe ist das Prädikat"]] },
  { s: "لِي أَخَوَانِ.", de: "Ich habe zwei Brüder.", words: [
    ["لِي", "اللَّامُ حَرْفُ جَرٍّ، وَالْيَاءُ ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ جَرٍّ، وَشِبْهُ الْجُمْلَةِ خَبَرٌ مُقَدَّمٌ", "„mir (gehört)“ – vorgezogenes Prädikat", 1],
    ["أَخَوَانِ", "مُبْتَدَأٌ مُؤَخَّرٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الْأَلِفُ لِأَنَّهُ مُثَنًّى", "nachgestelltes Subjekt im Dual (أَخَوَانِ, nicht أَخَانِ)", 1]] },
  { s: "فِي يَدِي قَلَمَانِ.", de: "In meiner Hand sind zwei Stifte.", words: [
    ["فِي", JAR, "Präposition"],
    ["يَدِي", "اسْمٌ مَجْرُورٌ بِفِي وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ " + MUQ + YA + "، وَشِبْهُ الْجُمْلَةِ خَبَرٌ مُقَدَّمٌ", "Genitiv, vor „mein“ nur gedacht; vorgezogenes Prädikat"],
    ["قَلَمَانِ", "مُبْتَدَأٌ مُؤَخَّرٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الْأَلِفُ لِأَنَّهُ مُثَنًّى", "nachgestelltes Subjekt im Dual", 1]] },
  { s: "هُمَا مُدَرِّسَانِ.", de: "Die beiden sind Lehrer.", words: [
    ["هُمَا", ANA, "„die beiden“ – unveränderlich, Subjekt", 1],
    ["مُدَرِّسَانِ", "خَبَرٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الْأَلِفُ لِأَنَّهُ مُثَنًّى", "Prädikat im Dual"]] }
];

X.m19 = [
  { s: "فِي الْفَصْلِ عَشَرَةُ طُلَّابٍ.", de: "Im Klassenzimmer sind zehn Studenten.", words: [
    ["فِي", JAR, "Präposition"],
    ["الْفَصْلِ", FI_KH, "Genitiv; die Gruppe ist das vorgezogene Prädikat"],
    ["عَشَرَةُ", MUA_M, "nachgestelltes Subjekt und Muḍāf", 1],
    ["طُلَّابٍ", MI, "das Gezählte: Plural im Genitiv", 1]] },
  { s: "ذَهَبْتُ إِلَى أَرْبَعَةِ بُلْدَانٍ.", de: "Ich reiste in vier Länder.", words: [
    ["ذَهَبْتُ", TU, "ـتُ ist das Subjekt"],
    ["إِلَى", JAR, "Präposition"],
    ["أَرْبَعَةِ", "اسْمٌ مَجْرُورٌ بِإِلَى وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ، وَهُوَ مُضَافٌ", "die Zahl selbst im Genitiv nach إِلَى, zugleich Muḍāf", 1],
    ["بُلْدَانٍ", MI, "das Gezählte, Genitiv"]] },
  { s: "رَأَيْتُ سَبْعَةَ رُكَّابٍ فِي الْحَافِلَةِ.", de: "Ich sah sieben Fahrgäste im Bus.", words: [
    ["رَأَيْتُ", TU, "ـتُ ist das Subjekt"],
    ["سَبْعَةَ", MAF_M, "die Zahl als Objekt im Akkusativ, Muḍāf", 1],
    ["رُكَّابٍ", MI, "das Gezählte, Genitiv", 1],
    ["فِي", JAR, "Präposition"],
    ["الْحَافِلَةِ", FI, "Genitiv"]] },
  { s: "كُلُّنَا طُلَّابٌ.", de: "Wir alle sind Studenten.", words: [
    ["كُلُّنَا", MUB_M + "، وَنَا ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ جَرٍّ مُضَافٌ إِلَيْهِ", "„wir alle“ – Subjekt und Muḍāf", 1],
    ["طُلَّابٌ", KHA, "Prädikat"]] },
  { s: "فِي جَيْبِي قِرْشٌ وَاحِدٌ.", de: "In meiner Tasche ist ein (einziger) Piaster.", words: [
    ["فِي", JAR, "Präposition"],
    ["جَيْبِي", "اسْمٌ مَجْرُورٌ بِفِي وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ " + MUQ + YA + "، وَشِبْهُ الْجُمْلَةِ خَبَرٌ مُقَدَّمٌ", "vorgezogenes Prädikat"],
    ["قِرْشٌ", MUA, "nachgestelltes Subjekt", 1],
    ["وَاحِدٌ", NR, "„eins“ steht als Adjektiv nach dem Nomen", 1]] },
  { s: "ثَمَنُ الْكِتَابِ خَمْسَةُ رِيَالَاتٍ.", de: "Der Preis des Buches ist fünf Riyal.", words: [
    ["ثَمَنُ", MUB_M, "Subjekt und Muḍāf"],
    ["الْكِتَابِ", MI, "Muḍāf ilaihi"],
    ["خَمْسَةُ", KHA_M, "die Zahl als Prädikat, Muḍāf", 1],
    ["رِيَالَاتٍ", MI, "das Gezählte, Genitiv"]] }
];

X.m20 = [
  { s: "لِي ثَلَاثُ أَخَوَاتٍ.", de: "Ich habe drei Schwestern.", words: [
    ["لِي", "اللَّامُ حَرْفُ جَرٍّ، وَالْيَاءُ ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى السُّكُونِ فِي مَحَلِّ جَرٍّ، وَشِبْهُ الْجُمْلَةِ خَبَرٌ مُقَدَّمٌ", "vorgezogenes Prädikat"],
    ["ثَلَاثُ", MUA_M, "nachgestelltes Subjekt, Muḍāf – ohne ة, weil das Gezählte weiblich ist", 1],
    ["أَخَوَاتٍ", MI, "das Gezählte, Genitiv", 1]] },
  { s: "فِي الْكِتَابِ عَشْرُ كَلِمَاتٍ جَدِيدَةٍ.", de: "Im Buch sind zehn neue Wörter.", words: [
    ["فِي", JAR, "Präposition"],
    ["الْكِتَابِ", FI_KH, "vorgezogenes Prädikat"],
    ["عَشْرُ", MUA_M, "nachgestelltes Subjekt – عَشْرُ mit Sukūn auf dem ش (weibliches Gezähltes)", 1],
    ["كَلِمَاتٍ", MI, "das Gezählte, Genitiv"],
    ["جَدِيدَةٍ", NJ, "Adjektiv zum Gezählten – Genitiv", 1]] },
  { s: "خَرَجَتْ أَرْبَعُ طَالِبَاتٍ مِنَ الْمَكْتَبَةِ.", de: "Vier Studentinnen gingen aus der Bibliothek.", words: [
    ["خَرَجَتْ", MADI_T, "weibliches Verb"],
    ["أَرْبَعُ", FAIL_M, "die Zahl als Fāʿil, Muḍāf", 1],
    ["طَالِبَاتٍ", MI, "das Gezählte, Genitiv", 1],
    ["مِنَ", JAR_MINA, "Präposition"],
    ["الْمَكْتَبَةِ", MIN, "Genitiv"]] },
  { s: "فِي بَيْتِنَا سِتُّ غُرَفٍ.", de: "In unserem Haus sind sechs Zimmer.", words: [
    ["فِي", JAR, "Präposition"],
    ["بَيْتِنَا", FI + "، وَهُوَ مُضَافٌ، وَنَا ضَمِيرٌ فِي مَحَلِّ جَرٍّ مُضَافٌ إِلَيْهِ، وَشِبْهُ الْجُمْلَةِ خَبَرٌ مُقَدَّمٌ", "Genitiv; mit ـنَا „unser“ – vorgezogenes Prädikat"],
    ["سِتُّ", MUA_M, "nachgestelltes Subjekt, Muḍāf", 1],
    ["غُرَفٍ", MI, "das Gezählte, Genitiv"]] },
  { s: "رَأَيْتُ ثَمَانِيَ دَجَاجَاتٍ.", de: "Ich sah acht Hühner.", words: [
    ["رَأَيْتُ", TU, "ـتُ ist das Subjekt"],
    ["ثَمَانِيَ", MAF_M, "Objekt – im Akkusativ bekommt ثَمَانِي ein sichtbares Fatḥa", 1],
    ["دَجَاجَاتٍ", MI, "das Gezählte, Genitiv"]] }
];

X.m21 = [
  { s: "ذَاكَ الْمَطَارُ وَاسِعٌ.", de: "Jener Flughafen ist weit (groß).", words: [
    ["ذَاكَ", HADHA, "ذَاكَ = ذَلِكَ – unveränderlich, Subjekt", 1],
    ["الْمَطَارُ", BADAL, "Badal zu ذَاكَ", 1],
    ["وَاسِعٌ", KHA, "Prädikat"]] },
  { s: "نُحِبُّ الْمُدَرِّسَ الْجَدِيدَ.", de: "Wir mögen den neuen Lehrer.", words: [
    ["نُحِبُّ", "فِعْلٌ مُضَارِعٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ، وَالْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ وُجُوبًا تَقْدِيرُهُ نَحْنُ", "„wir“ steckt im Verb (Präfix نُـ)", 1],
    ["الْمُدَرِّسَ", MAF, "Objekt, Akkusativ"],
    ["الْجَدِيدَ", NN, "Adjektiv zum Objekt – Akkusativ", 1]] },
  { s: "لَوْنُ السَّيَّارَةِ جَمِيلٌ.", de: "Die Farbe des Autos ist schön.", words: [
    ["لَوْنُ", MUB_M, "Subjekt und Muḍāf", 1],
    ["السَّيَّارَةِ", MI, "Muḍāf ilaihi"],
    ["جَمِيلٌ", KHA, "Prädikat"]] },
  { s: "هَذَا صَدِيقِي، نُحِبُّهُ.", de: "Das ist mein Freund, wir mögen ihn.", words: [
    ["هَذَا", HADHA, "Subjekt"],
    ["صَدِيقِي", "خَبَرٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ " + MUQ + YA, "Prädikat – vor „mein“ nur gedacht", 1],
    ["نُحِبُّهُ", "فِعْلٌ مُضَارِعٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ، وَالْفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ تَقْدِيرُهُ نَحْنُ، وَالْهَاءُ ضَمِيرٌ مُتَّصِلٌ مَبْنِيٌّ عَلَى الضَّمِّ فِي مَحَلِّ نَصْبٍ مَفْعُولٌ بِهِ", "ـهُ „ihn“ ist das Objekt", 1]] },
  { s: "ذَهَبَ الطُّلَّابُ الْجُدُدُ إِلَى الْمَكْتَبَةِ.", de: "Die neuen Studenten gingen in die Bibliothek.", words: [
    ["ذَهَبَ", MADI, "Verb"],
    ["الطُّلَّابُ", FAIL, "Fāʿil"],
    ["الْجُدُدُ", NR, "Adjektiv – gebrochener Plural, Nominativ", 1],
    ["إِلَى", JAR, "Präposition"],
    ["الْمَكْتَبَةِ", ILA, "Genitiv"]] },
  { s: "فِي الْبَيْتِ غُرْفَتَانِ وَاسِعَتَانِ.", de: "Im Haus sind zwei geräumige Zimmer.", words: [
    ["فِي", JAR, "Präposition"],
    ["الْبَيْتِ", FI_KH, "vorgezogenes Prädikat"],
    ["غُرْفَتَانِ", "مُبْتَدَأٌ مُؤَخَّرٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الْأَلِفُ لِأَنَّهُ مُثَنًّى", "nachgestelltes Subjekt im Dual", 1],
    ["وَاسِعَتَانِ", "نَعْتٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الْأَلِفُ لِأَنَّهُ مُثَنًّى", "Adjektiv im Dual", 1]] }
];

X.m22 = [
  { s: "الْقَمِيصُ الْأَبْيَضُ جَدِيدٌ.", de: "Das weiße Hemd ist neu.", words: [
    ["الْقَمِيصُ", MUB, "Subjekt"],
    ["الْأَبْيَضُ", NR, "Adjektiv – mit al bekommt auch ein Diptoton die normale Endung", 1],
    ["جَدِيدٌ", KHA, "Prädikat"]] },
  { s: "قَالَ عُثْمَانُ: أَنَا جَوْعَانُ.", de: "ʿUthmān sagte: Ich bin hungrig.", words: [
    ["قَالَ", MADI, "Verb, Vergangenheit", 1],
    ["عُثْمَانُ", FAIL + MM, "Fāʿil – Name auf -ān: ohne Tanwīn", 1],
    ["أَنَا", ANA, "Subjekt"],
    ["جَوْعَانُ", KHA + MM, "Prädikat – Muster faʿlān, ohne Tanwīn", 1]] },
  { s: "هَذَا قَلَمٌ أَسْوَدُ.", de: "Das ist ein schwarzer Stift.", words: [
    ["هَذَا", HADHA, "Subjekt"],
    ["قَلَمٌ", KHA, "Prädikat"],
    ["أَسْوَدُ", NR + MM, "Adjektiv nach afʿal (Farbe) – kein Tanwīn, obwohl unbestimmt", 1]] },
  { s: "هَؤُلَاءِ أَصْدِقَاءُ.", de: "Das sind Freunde.", words: [
    ["هَؤُلَاءِ", "اسْمُ إِشَارَةٍ مَبْنِيٌّ عَلَى الْكَسْرِ فِي مَحَلِّ رَفْعٍ مُبْتَدَأٌ", "Subjekt"],
    ["أَصْدِقَاءُ", KHA + MM, "Plural nach afʿilāʾ – ohne Tanwīn", 1]] },
  { s: "قَالَتْ زَيْنَبُ: الْفِنْجَانُ مَلْآنُ.", de: "Zainab sagte: Die Tasse ist voll.", words: [
    ["قَالَتْ", MADI_T, "weibliches Verb"],
    ["زَيْنَبُ", FAIL + MM, "Fāʿil – weiblicher Name ohne Tanwīn", 1],
    ["الْفِنْجَانُ", MUB, "Subjekt"],
    ["مَلْآنُ", KHA + MM, "Prädikat – faʿlān ohne Tanwīn"]] },
  { s: "بَغْدَادُ مَدِينَةٌ كَبِيرَةٌ.", de: "Bagdad ist eine große Stadt.", words: [
    ["بَغْدَادُ", MUB + MM, "Subjekt – Städtename ohne Tanwīn", 1],
    ["مَدِينَةٌ", KHA, "Prädikat"],
    ["كَبِيرَةٌ", NR, "Adjektiv"]] }
];

X.m23 = [
  { s: "ذَهَبْتُ إِلَى بَغْدَادَ.", de: "Ich reiste nach Bagdad.", words: [
    ["ذَهَبْتُ", TU, "ـتُ ist das Subjekt"],
    ["إِلَى", JAR, "Präposition"],
    ["بَغْدَادَ", "اسْمٌ مَجْرُورٌ بِإِلَى " + NIYABA, "Diptoton im Genitiv: Fatḥa statt Kasra", 1]] },
  { s: "هَذِهِ سَيَّارَةُ عُثْمَانَ.", de: "Das ist ʿUthmāns Auto.", words: [
    ["هَذِهِ", HADHIHI, "Subjekt"],
    ["سَيَّارَةُ", KHA_M, "Prädikat und Muḍāf", 1],
    ["عُثْمَانَ", "مُضَافٌ إِلَيْهِ مَجْرُورٌ " + NIYABA, "Muḍāf ilaihi – Diptoton: Fatḥa statt Kasra", 1]] },
  { s: "صَلَّيْتُ فِي مَسَاجِدِ الْمَدِينَةِ.", de: "Ich betete in den Moscheen der Stadt.", words: [
    ["صَلَّيْتُ", TU, "ـتُ ist das Subjekt"],
    ["فِي", JAR, "Präposition"],
    ["مَسَاجِدِ", FI + "، وَهُوَ مُضَافٌ", "Diptoton als Muḍāf – darum wieder Kasra", 1],
    ["الْمَدِينَةِ", MI, "Muḍāf ilaihi"]] },
  { s: "فِي الْمَدِينَةِ خَمْسَةُ فَنَادِقَ.", de: "In der Stadt sind fünf Hotels.", words: [
    ["فِي", JAR, "Präposition"],
    ["الْمَدِينَةِ", FI_KH, "vorgezogenes Prädikat"],
    ["خَمْسَةُ", MUA_M, "nachgestelltes Subjekt, Muḍāf"],
    ["فَنَادِقَ", "مُضَافٌ إِلَيْهِ مَجْرُورٌ " + NIYABA, "das Gezählte – Diptoton (mafāʿil): Fatḥa", 1]] },
  { s: "جَلَسْتُ مَعَ أَصْدِقَاءِ أَحْمَدَ.", de: "Ich saß mit Ahmads Freunden zusammen.", words: [
    ["جَلَسْتُ", TU, "ـتُ ist das Subjekt"],
    ["مَعَ", ZARF_M, "Adverb, Muḍāf"],
    ["أَصْدِقَاءِ", MI + "، وَهُوَ مُضَافٌ", "Diptoton als Muḍāf – darum Kasra", 1],
    ["أَحْمَدَ", "مُضَافٌ إِلَيْهِ مَجْرُورٌ " + NIYABA, "Name nach afʿal – Fatḥa statt Kasra", 1]] },
  { s: "الطَّائِفُ قَرِيبَةٌ مِنْ مَكَّةَ.", de: "Ṭāʾif ist nah bei Mekka.", words: [
    ["الطَّائِفُ", MUB, "Subjekt"],
    ["قَرِيبَةٌ", KHA, "Prädikat – Städte sind weiblich", 1],
    ["مِنْ", JAR, "Präposition"],
    ["مَكَّةَ", "اسْمٌ مَجْرُورٌ بِمِنْ " + NIYABA, "Diptoton (Name auf ة): Fatḥa statt Kasra", 1]] }
];
})(window.MADINA_IRAB1);
