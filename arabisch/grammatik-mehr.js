/* Noch mehr Grammatikaufgaben zum Madina-Buch – Ergänzung zu grammatik-plus.js, gleiches Format:
   q, a (a[0] richtig), e = Erklärung, w = drei Gründe, warum a[1], a[2], a[3] falsch sind.
   Die Fragen werden an window.MADINA_PLUS[Lektion] angehängt (arabic.js: Grammatik der Lektion, plus: true). */
(function (P) {
  function add(id, list) { P[id] = (P[id] || []).concat(list); }

add("m01", [
  { q: "Welches Fragewort passt? … هَذَا؟ – هَذَا كَلْبٌ.", a: ["مَا", "مَنْ", "أَ", "لَا"], e: "Ein Hund ist kein Mensch – nach Tieren und Sachen fragt man mit مَا.", w: ["مَنْ fragt nach Personen.", "أَ braucht einen ganzen Satz danach.", "لَا ist eine Antwort, kein Fragewort."] },
  { q: "Welches Fragewort passt? … هَذَا؟ – هَذَا تَاجِرٌ.", a: ["مَنْ", "مَا", "أَيْنَ", "نَعَمْ"], e: "Ein Händler ist eine Person → مَنْ.", w: ["مَا fragt nach Sachen.", "أَيْنَ fragt nach dem Ort (Lektion 4).", "نَعَمْ heißt „ja“."] },
  { q: "Wie antwortet man richtig? أَهَذَا قَلَمٌ؟ (Es ist ein Schlüssel.)", a: ["لَا، هَذَا مِفْتَاحٌ.", "نَعَمْ، هَذَا مِفْتَاحٌ.", "لَا، هَذَا قَلَمٌ.", "مَا هَذَا مِفْتَاحٌ."], e: "Die Antwort ist „nein“ – und dann das Richtige.", w: ["„Ja“ widerspricht dem Schlüssel.", "Das wiederholt nur die falsche Vermutung.", "مَا ist ein Fragewort, keine Verneinung hier."] },
  { q: "Wie viele Wörter hat der Satz هَذَا بَيْتٌ – und wie viele hat das Deutsche?", a: ["zwei – Deutsch braucht vier (Das ist ein Haus)", "drei – wie im Deutschen", "vier – wie im Deutschen", "einen"], e: "„ist“ und „ein“ stecken in Satzbau und Tanwīn.", w: ["Es gibt kein Wort für „ist“.", "Es gibt auch kein Wort für „ein“.", "هَذَا und بَيْتٌ sind zwei Wörter."] },
  { q: "Was ist in مَا هَذَا؟ das Mubtadaʾ (Subjekt)?", a: ["مَا", "هَذَا", "das Fragezeichen", "Es gibt keins."], e: "In der Schulanalyse ist das Fragewort مَا das Mubtadaʾ, هَذَا das Khabar.", w: ["هَذَا steht hier an der Stelle des Prädikats.", "Satzzeichen haben keine Rolle.", "Jeder Nominalsatz hat ein Mubtadaʾ."] },
  { q: "Welche Endung hat كِتَابٌ in هَذَا كِتَابٌ?", a: ["-un: Nominativ mit Tanwīn", "-an: Akkusativ", "-in: Genitiv", "keine Endung"], e: "Das Prädikat steht im Nominativ (مَرْفُوعٌ), unbestimmt mit Tanwīn.", w: ["Akkusativ steht z. B. beim Objekt.", "Genitiv kommt erst nach Präpositionen.", "Arabische Nomen haben eine Endung."] }
]);

add("m02", [
  { q: "Übersetze: هَذَا لَبَنٌ وَذَلِكَ سُكَّرٌ.", a: ["Das ist Milch, und das dort ist Zucker.", "Diese Milch und jener Zucker.", "Das ist Milch mit Zucker.", "Ist das Milch oder Zucker?"], e: "Zwei Nominalsätze, mit وَ verbunden.", w: ["Ohne al sind es keine Wendungen „diese/jene“, sondern Sätze.", "„mit“ steht nicht im Satz.", "Es gibt kein Fragewort."] },
  { q: "Welches Demonstrativ passt? … إِمَامٌ (er steht weit weg).", a: ["ذَلِكَ", "هَذَا", "مَا", "مَنْ"], e: "Fern → ذَلِكَ.", w: ["هَذَا ist für Nahes.", "مَا ist ein Fragewort.", "مَنْ ist ein Fragewort."] },
  { q: "Auf welchem Vokal endet ذَلِكَ – und ändert er sich?", a: ["auf Fatḥa – unveränderlich (mabnī)", "auf Ḍamma – je nach Fall", "auf Kasra – unveränderlich", "auf Sukūn – je nach Fall"], e: "Demonstrative sind mabnī: ihr Ende bleibt immer gleich.", w: ["ذَلِكَ hat kein Ḍamma am Ende.", "Kasra am Ende hat هَذِهِ.", "Sukūn am Ende hat هَذَا."] },
  { q: "Wie fragt man „Ist das dort ein Stein?“", a: ["أَذَلِكَ حَجَرٌ؟", "مَا ذَلِكَ حَجَرٌ؟", "ذَلِكَ أَحَجَرٌ؟", "مَنْ ذَلِكَ حَجَرٌ؟"], e: "Frage-Hamza أَ vor den ganzen Satz.", w: ["مَا fragt „was?“, keine Ja/Nein-Frage.", "أَ steht am Satzanfang.", "مَنْ fragt nach Personen."] },
  { q: "Welche Rolle hat حَجَرٌ in ذَلِكَ حَجَرٌ?", a: ["Khabar (Prädikat)", "Mubtadaʾ (Subjekt)", "Fāʿil", "Muḍāf ilaihi"], e: "ذَلِكَ ist Subjekt, حَجَرٌ die Aussage darüber.", w: ["Das Subjekt ist ذَلِكَ.", "Fāʿil gibt es nur im Verbalsatz.", "Es gibt keine Genitivverbindung."] },
  { q: "Was ist richtig über وَ?", a: ["Es wird ans nächste Wort angehängt und hat keine eigene Satzrolle.", "Es ist ein Nomen im Nominativ.", "Es steht immer am Satzende.", "Es heißt „oder“."], e: "وَ ist ein Bindewort (ḥarf ʿaṭf).", w: ["Partikeln sind keine Nomen.", "Es steht vor dem verbundenen Wort.", "„oder“ ist أَوْ."] }
]);

add("m03", [
  { q: "Welches Wort beginnt mit einem Mondbuchstaben?", a: ["الْقَمَرُ", "الشَّمْسُ", "التَّاجِرُ", "الدُّكَّانُ"], e: "ق ist ein Mondbuchstabe – das l wird gesprochen: al-qamaru.", w: ["ش ist ein Sonnenbuchstabe.", "ت ist ein Sonnenbuchstabe.", "د ist ein Sonnenbuchstabe."] },
  { q: "Woran erkennt man beim Lesen einen Sonnenbuchstaben nach الْ?", a: ["am Šadda auf dem Buchstaben, das l hat kein Sukūn", "am Sukūn auf dem l", "am Tanwīn", "an einem langen ā"], e: "الشَّمْسُ: Šadda auf ش, das ل bleibt ohne Zeichen.", w: ["Sukūn auf dem l zeigt einen Mondbuchstaben.", "Mit al gibt es kein Tanwīn.", "Das hat mit langen Vokalen nichts zu tun."] },
  { q: "Welche Übersetzung passt zu الطَّالِبُ مَرِيضٌ?", a: ["Der Student ist krank.", "Der kranke Student.", "Ein kranker Student.", "Ist der Student krank?"], e: "Bestimmtes Subjekt + unbestimmtes Prädikat = Satz.", w: ["„der kranke Student“ wäre الطَّالِبُ الْمَرِيضُ.", "Dann stünde kein al da.", "Es gibt kein أَ."] },
  { q: "Was ist das Gegenteil von ثَقِيلٌ?", a: ["خَفِيفٌ", "كَبِيرٌ", "طَوِيلٌ", "جَدِيدٌ"], e: "ثَقِيلٌ = schwer, خَفِيفٌ = leicht.", w: ["كَبِيرٌ ist das Gegenteil von صَغِيرٌ.", "طَوِيلٌ ist das Gegenteil von قَصِيرٌ.", "جَدِيدٌ ist das Gegenteil von قَدِيمٌ."] },
  { q: "Welche Endung hat das Mubtadaʾ in الْمَاءُ بَارِدٌ?", a: ["ein einfaches Ḍamma (-u)", "Ḍamma mit Tanwīn (-un)", "Kasra (-i)", "Fatḥa (-a)"], e: "Mit al steht nur ein Ḍamma, kein Tanwīn.", w: ["Tanwīn und al schließen sich aus.", "Kasra ist Genitiv.", "Fatḥa ist Akkusativ."] },
  { q: "Finde den Fehler: الْبَابُ مَفْتُوحُ.", a: ["مَفْتُوحٌ braucht Tanwīn – das Prädikat ist unbestimmt.", "الْبَابُ braucht Tanwīn.", "Es muss الْبَابِ heißen.", "Es gibt keinen Fehler."], e: "Richtig: الْبَابُ مَفْتُوحٌ.", w: ["Mit al gibt es kein Tanwīn.", "Das Subjekt steht im Nominativ.", "Das Prädikat ist falsch geschrieben."] }
]);

add("m04", [
  { q: "Welche Endung hat الْفَصْلِ in الْمُدَرِّسُ فِي الْفَصْلِ?", a: ["-i (Kasra) – Genitiv nach فِي", "-u – Nominativ", "-a – Akkusativ", "-un – mit Tanwīn"], e: "Nach Präpositionen steht der Genitiv.", w: ["Der Nominativ gilt für Subjekt und Prädikat.", "Akkusativ steht nicht nach Präpositionen.", "Mit al gibt es kein Tanwīn."] },
  { q: "Wie heißt „in einem Zimmer“?", a: ["فِي غُرْفَةٍ", "فِي غُرْفَةٌ", "فِي الْغُرْفَةُ", "فِي غُرْفَةً"], e: "Unbestimmt + Genitiv = -in (Kasra-Tanwīn).", w: ["-un ist Nominativ.", "Mit al und -u wäre es Nominativ und bestimmt.", "-an ist Akkusativ."] },
  { q: "Welches Pronomen passt? أَيْنَ الْمُدَرِّسُ؟ … فِي الْفَصْلِ.", a: ["هُوَ", "هِيَ", "أَنَا", "مَنْ"], e: "الْمُدَرِّسُ ist männlich → هُوَ.", w: ["هِيَ ist weiblich.", "أَنَا heißt „ich“.", "مَنْ ist ein Fragewort."] },
  { q: "Was fragt أَيْنَ?", a: ["wo?", "was?", "wer?", "wie viele?"], e: "أَيْنَ الْكِتَابُ؟ – Wo ist das Buch?", w: ["„was?“ ist مَا.", "„wer?“ ist مَنْ.", "„wie viele?“ ist كَمْ (Lektion 18)."] },
  { q: "Was ist in الْقَلَمُ عَلَى الْمَكْتَبِ das Prädikat?", a: ["die Gruppe عَلَى الْمَكْتَبِ", "nur عَلَى", "الْقَلَمُ", "Es gibt keins."], e: "Präposition + Genitiv zusammen sagen etwas über das Subjekt aus.", w: ["عَلَى allein ergibt keine Aussage.", "الْقَلَمُ ist das Subjekt.", "Jeder Nominalsatz hat ein Prädikat."] },
  { q: "Wie spricht man فِي الْبَيْتِ?", a: ["fi-l-baiti – das ī wird vor al kurz", "fī al-baiti", "fil-baitu", "fī-l-baitun"], e: "Vor al fällt das a weg und das ī wird kurz gesprochen.", w: ["Das a von al fällt in der Verbindung weg.", "Die Endung ist -i (Genitiv).", "Mit al gibt es kein Tanwīn."] }
]);

add("m04a", [
  { q: "Wie heißt „Der Lehrer ging zur Schule“?", a: ["ذَهَبَ الْمُدَرِّسُ إِلَى الْمَدْرَسَةِ.", "الْمُدَرِّسُ ذَهَبَ إِلَى الْمَدْرَسَةُ.", "ذَهَبَ الْمُدَرِّسَ إِلَى الْمَدْرَسَةِ.", "ذَهَبَ الْمُدَرِّسُ إِلَى الْمَدْرَسَةُ."], e: "Verb vorne, Fāʿil im Nominativ, nach إِلَى Genitiv.", w: ["Nach إِلَى steht kein Nominativ.", "Der Fāʿil steht im Nominativ, nicht im Akkusativ.", "الْمَدْرَسَةُ muss nach إِلَى Genitiv sein."] },
  { q: "Welches Wort ist in خَرَجَ حَامِدٌ مِنَ الْمَسْجِدِ der Fāʿil?", a: ["حَامِدٌ", "خَرَجَ", "مِنَ", "الْمَسْجِدِ"], e: "Wer ging hinaus? Ḥāmid.", w: ["خَرَجَ ist das Verb.", "مِنَ ist eine Präposition.", "الْمَسْجِدِ steht im Genitiv nach مِنْ."] },
  { q: "Wie heißt „Ich bin aus China“?", a: ["أَنَا مِنَ الصِّينِ.", "أَنَا مِنْ الصِّينُ.", "أَنْتَ مِنَ الصِّينِ.", "أَنَا إِلَى الصِّينِ."], e: "مِنَ vor al, danach Genitiv.", w: ["Vor al wird مِنْ zu مِنَ; danach Genitiv.", "أَنْتَ heißt „du“.", "إِلَى heißt „nach, zu“."] },
  { q: "Was bedeutet خَرَجَ?", a: ["er ging hinaus", "er ging hin", "er saß", "er kam zurück"], e: "ذَهَبَ = er ging, خَرَجَ = er ging hinaus.", w: ["„er ging“ ist ذَهَبَ.", "„er saß“ ist جَلَسَ (Lektion 8).", "„er kam zurück“ ist رَجَعَ (Lektion 15)."] },
  { q: "Wo steht im Verbalsatz das Verb?", a: ["am Anfang, vor dem Subjekt", "am Ende", "zwischen Präposition und Nomen", "nach dem Objekt"], e: "ذَهَبَ بِلَالٌ – Verb, dann Fāʿil.", w: ["Am Ende steht es im Arabischen nicht.", "Zwischen Präposition und Nomen steht nichts.", "Das Verb kommt zuerst."] },
  { q: "Wie heißt „er ging“, wenn kein Subjekt genannt ist?", a: ["ذَهَبَ – das „er“ steckt im Verb", "هُوَ ذَهَبَ ist Pflicht", "ذَهَبَتْ", "ذَهَبْتُ"], e: "ذَهَبَ allein heißt schon „er ging“.", w: ["هُوَ kann stehen, muss aber nicht.", "ذَهَبَتْ heißt „sie ging“ (Lektion 12).", "ذَهَبْتُ heißt „ich ging“ (Lektion 10)."] }
]);

add("m05", [
  { q: "Welche Form ist richtig: „der Schlüssel des Hauses“?", a: ["مِفْتَاحُ الْبَيْتِ", "الْمِفْتَاحُ الْبَيْتِ", "مِفْتَاحٌ الْبَيْتِ", "مِفْتَاحُ الْبَيْتُ"], e: "Muḍāf ohne al/Tanwīn, Muḍāf ilaihi im Genitiv.", w: ["Der Muḍāf hat kein al.", "Der Muḍāf hat kein Tanwīn.", "Der Muḍāf ilaihi steht im Genitiv."] },
  { q: "In welchem Fall steht der Muḍāf (das erste Wort)?", a: ["in dem Fall, den seine Rolle im Satz verlangt", "immer im Genitiv", "immer im Nominativ", "immer im Akkusativ"], e: "بَابُ الْمَسْجِدِ مَفْتُوحٌ – hier Nominativ (Subjekt); فِي بَيْتِ الْإِمَامِ – Genitiv.", w: ["Genitiv hat immer nur der zweite Teil.", "Er kann auch im Genitiv stehen, z. B. nach فِي.", "Akkusativ nur, wenn er z. B. Objekt ist."] },
  { q: "Wie heißt „Wo ist die Tasche des Studenten?“", a: ["أَيْنَ حَقِيبَةُ الطَّالِبِ؟", "أَيْنَ الْحَقِيبَةُ الطَّالِبِ؟", "أَيْنَ حَقِيبَةٌ الطَّالِبُ؟", "أَيْنَ حَقِيبَةَ الطَّالِبِ؟"], e: "Iḍāfa: حَقِيبَةُ (Nominativ, ohne al) + الطَّالِبِ (Genitiv).", w: ["Der Muḍāf hat kein al.", "Kein Tanwīn beim Muḍāf; der zweite Teil steht im Genitiv.", "حَقِيبَةُ ist Subjekt und steht im Nominativ."] },
  { q: "Was bedeutet هُنَا – und was هُنَاكَ?", a: ["hier – dort", "dort – hier", "jetzt – dann", "unter – über"], e: "الْكِتَابُ هُنَا – das Buch ist hier.", w: ["Die Reihenfolge ist umgekehrt.", "Das sind Ortsangaben, keine Zeitangaben.", "„unter“ ist تَحْتَ."] },
  { q: "Welcher Fall folgt auf تَحْتَ?", a: ["Genitiv: تَحْتَ الْمَكْتَبِ", "Nominativ: تَحْتَ الْمَكْتَبُ", "Akkusativ: تَحْتَ الْمَكْتَبَ", "kein bestimmter Fall"], e: "تَحْتَ ist Muḍāf, das folgende Nomen Muḍāf ilaihi.", w: ["Nach تَحْتَ steht kein Nominativ.", "Das Fatḥa hat تَحْتَ selbst.", "Der Fall ist immer Genitiv."] },
  { q: "Wie spricht man وَاسْمُ الْبِنْتِ?", a: ["wa-smu l-binti", "wa-ismu al-binti", "wa-asmu l-binti", "wasmun l-binti"], e: "اسْمٌ beginnt mit Hamzatu l-waṣl – nach وَ fällt das i weg.", w: ["Das Hamzatu l-waṣl fällt nach وَ weg.", "Das ist kein a.", "Als Muḍāf hat اسْمُ kein Tanwīn."] }
]);

add("m06", [
  { q: "Welches Demonstrativ passt? … يَدٌ.", a: ["هَذِهِ", "هَذَا", "ذَلِكَ", "مَنْ"], e: "يَدٌ (Hand) ist ein paariger Körperteil und weiblich.", w: ["هَذَا ist männlich.", "ذَلِكَ ist männlich und fern.", "مَنْ ist ein Fragewort."] },
  { q: "Welches Körperteil ist männlich?", a: ["رَأْسٌ", "عَيْنٌ", "أُذُنٌ", "رِجْلٌ"], e: "رَأْسٌ (Kopf) ist nicht paarig → männlich.", w: ["عَيْنٌ ist paarig und weiblich.", "أُذُنٌ ist paarig und weiblich.", "رِجْلٌ ist paarig und weiblich."] },
  { q: "Wie lautet die weibliche Form von مُدَرِّسٌ?", a: ["مُدَرِّسَةٌ", "مُدَرِّسَى", "مُدَرِّسِيٌّ", "مُدَرِّسَاتٌ"], e: "ة anhängen, davor Fatḥa.", w: ["Die weibliche Endung ist hier ة, nicht ى.", "ـِيٌّ bildet Zugehörigkeitsadjektive.", "مُدَرِّسَاتٌ ist der Plural (Lektion 13)."] },
  { q: "Wie heißt „Das Fahrrad ist sehr schnell“?", a: ["الدَّرَّاجَةُ سَرِيعَةٌ جِدًّا.", "الدَّرَّاجَةُ جِدًّا سَرِيعَةٌ.", "الدَّرَّاجَةُ سَرِيعٌ جِدًّا.", "جِدًّا الدَّرَّاجَةُ سَرِيعَةٌ."], e: "Weibliches Prädikat, جِدًّا danach.", w: ["جِدًّا steht nach dem Adjektiv.", "Das Prädikat muss weiblich sein.", "جِدًّا steht nicht am Satzanfang."] },
  { q: "Wie heißt „Wem gehört das Auto?“", a: ["لِمَنْ السَّيَّارَةُ؟", "مَنْ السَّيَّارَةُ؟", "لِمَا السَّيَّارَةُ؟", "أَيْنَ السَّيَّارَةُ؟"], e: "لِـ + مَنْ = لِمَنْ „wem (gehört)?“", w: ["Ohne لِـ heißt es „wer ist das Auto?“.", "مَا fragt nach Sachen, nicht nach dem Besitzer.", "أَيْنَ fragt nach dem Ort."] },
  { q: "Was bedeutet أَيْضًا?", a: ["auch", "sehr", "hier", "jetzt"], e: "هَذَا كَبِيرٌ وَذَلِكَ كَبِيرٌ أَيْضًا.", w: ["„sehr“ ist جِدًّا.", "„hier“ ist هُنَا.", "„jetzt“ ist الْآنَ (Lektion 9)."] }
]);

add("m07", [
  { q: "Wie heißt „Das ist Āmina und das dort ist Maryam“?", a: ["هَذِهِ آمِنَةُ وَتِلْكَ مَرْيَمُ.", "هَذَا آمِنَةُ وَذَلِكَ مَرْيَمُ.", "هَذِهِ آمِنَةُ وَذَلِكَ مَرْيَمُ.", "تِلْكَ آمِنَةُ وَهَذِهِ مَرْيَمُ."], e: "Weiblich: nah هَذِهِ, fern تِلْكَ.", w: ["Für Frauen braucht man die weiblichen Formen.", "ذَلِكَ ist männlich.", "nah und fern sind vertauscht."] },
  { q: "Welches Demonstrativ passt? … دِيكٌ (weit weg).", a: ["ذَلِكَ", "تِلْكَ", "هَذِهِ", "هَذَا"], e: "دِيكٌ (Hahn) ist männlich, fern → ذَلِكَ.", w: ["تِلْكَ ist weiblich.", "هَذِهِ ist weiblich und nah.", "هَذَا ist nah."] },
  { q: "Welches Demonstrativ passt? … بَيْضَةٌ (weit weg).", a: ["تِلْكَ", "ذَلِكَ", "هَذَا", "هَذِهِ"], e: "بَيْضَةٌ (Ei) endet auf ة → weiblich; fern → تِلْكَ.", w: ["ذَلِكَ ist männlich.", "هَذَا ist männlich und nah.", "هَذِهِ ist nah."] },
  { q: "Auf welchem Vokal endet تِلْكَ?", a: ["Fatḥa – unveränderlich", "Kasra – unveränderlich", "Ḍamma – Nominativ", "Tanwīn"], e: "Wie ذَلِكَ endet تِلْكَ auf -ka.", w: ["Kasra am Ende hat هَذِهِ.", "Demonstrative haben keine Fallendung.", "Demonstrative haben kein Tanwīn."] },
  { q: "Wie fragt man nach einer Frau in der Ferne?", a: ["مَنْ تِلْكَ؟", "مَا تِلْكَ؟", "مَنْ ذَلِكَ؟", "مَا هَذِهِ؟"], e: "Person → مَنْ; weiblich und fern → تِلْكَ.", w: ["مَا fragt nach Sachen.", "ذَلِكَ ist männlich.", "مَا und nah passen nicht."] },
  { q: "Was ist in هَذِهِ دَجَاجَةٌ وَتِلْكَ بَطَّةٌ das zweite Mubtadaʾ?", a: ["تِلْكَ", "بَطَّةٌ", "هَذِهِ", "دَجَاجَةٌ"], e: "Nach وَ beginnt ein neuer Satz: تِلْكَ ist sein Subjekt.", w: ["بَطَّةٌ ist das zweite Khabar.", "هَذِهِ ist das erste Mubtadaʾ.", "دَجَاجَةٌ ist das erste Khabar."] }
]);

add("m08", [
  { q: "Welche Rolle hat الْكِتَابُ in هَذَا الْكِتَابُ جَدِيدٌ?", a: ["Badal – es erklärt هَذَا näher", "Khabar", "Muḍāf ilaihi", "Fāʿil"], e: "هَذَا ist Mubtadaʾ, الْكِتَابُ Badal, جَدِيدٌ Khabar.", w: ["Das Khabar ist جَدِيدٌ.", "Es gibt keine Genitivverbindung.", "Es gibt kein Verb."] },
  { q: "Übersetze: ذَلِكَ الرَّجُلُ مُهَنْدِسٌ.", a: ["Jener Mann ist Ingenieur.", "Das ist ein Mann und ein Ingenieur.", "Jener ist der Ingenieur.", "Ist jener Mann Ingenieur?"], e: "ذَلِكَ الرَّجُلُ = „jener Mann“, مُهَنْدِسٌ = Prädikat.", w: ["Es gibt kein وَ.", "الرَّجُلُ ist nicht das Prädikat.", "Es gibt keine Frage-Hamza."] },
  { q: "Wie heißt „Der Student saß vor dem Lehrer“?", a: ["جَلَسَ الطَّالِبُ أَمَامَ الْمُدَرِّسِ.", "جَلَسَ الطَّالِبُ خَلْفَ الْمُدَرِّسِ.", "جَلَسَ الطَّالِبُ أَمَامُ الْمُدَرِّسُ.", "جَلَسَ الطَّالِبَ أَمَامَ الْمُدَرِّسِ."], e: "أَمَامَ = vor (örtlich), danach Genitiv.", w: ["خَلْفَ heißt „hinter“.", "أَمَامَ hat Fatḥa, das Nomen danach Genitiv.", "Der Fāʿil steht im Nominativ."] },
  { q: "Welches Wort hat dieselbe unveränderliche Endung wie الْمُسْتَشْفَى?", a: ["أَمْرِيكَا", "الْكِتَابُ", "مُهَنْدِسٌ", "السِّكِّينُ"], e: "Beide enden auf langes -ā.", w: ["الْكِتَابُ zeigt seine Fallendung.", "مُهَنْدِسٌ hat Tanwīn.", "السِّكِّينُ zeigt seine Fallendung."] },
  { q: "Wie heißt „diese Tasche“ (kein Satz)?", a: ["هَذِهِ الْحَقِيبَةُ", "هَذِهِ حَقِيبَةٌ", "هَذَا الْحَقِيبَةُ", "الْحَقِيبَةُ هَذِهِ"], e: "Demonstrativ + Nomen mit al.", w: ["Ohne al ist es ein Satz: „Das ist eine Tasche“.", "حَقِيبَةٌ ist weiblich → هَذِهِ.", "Das Demonstrativ steht vorne."] },
  { q: "Was bedeutet جَلَسَ?", a: ["er saß, setzte sich", "er ging", "er ging hinaus", "er sagte"], e: "جَلَسَ الْمُدِيرُ – der Direktor setzte sich.", w: ["„er ging“ ist ذَهَبَ.", "„er ging hinaus“ ist خَرَجَ.", "„er sagte“ ist قَالَ (Lektion 22)."] }
]);

add("m09", [
  { q: "Welche Form passt? ذَهَبْتُ إِلَى مَدِينَةٍ …", a: ["كَبِيرَةٍ", "كَبِيرَةٌ", "الْكَبِيرَةِ", "كَبِيرٍ"], e: "Unbestimmt, weiblich, Genitiv – wie مَدِينَةٍ.", w: ["Das Adjektiv muss im Genitiv stehen.", "مَدِينَةٍ ist unbestimmt – kein al.", "مَدِينَةٌ ist weiblich."] },
  { q: "Was ist الْمُجْتَهِدُ in الطَّالِبُ الْمُجْتَهِدُ فِي الْمَكْتَبَةِ?", a: ["Naʿt (Adjektiv) zum Subjekt", "Khabar", "Fāʿil", "Muḍāf ilaihi"], e: "Das Prädikat ist فِي الْمَكْتَبَةِ.", w: ["Bestimmt nach bestimmtem Nomen = Adjektiv, kein Prädikat.", "Es gibt kein Verb.", "Es steht nicht im Genitiv."] },
  { q: "Wie heißt „Der Mann, der in der Moschee ist, ist ein Händler“?", a: ["الرَّجُلُ الَّذِي فِي الْمَسْجِدِ تَاجِرٌ.", "الرَّجُلُ الَّتِي فِي الْمَسْجِدِ تَاجِرٌ.", "رَجُلٌ الَّذِي فِي الْمَسْجِدِ تَاجِرٌ.", "الرَّجُلُ الَّذِي فِي الْمَسْجِدُ تَاجِرٌ."], e: "Männlicher bestimmter Bezug → الَّذِي.", w: ["الَّتِي ist weiblich (Lektion 12).", "الَّذِي braucht ein bestimmtes Nomen davor.", "Nach فِي steht Genitiv."] },
  { q: "Wie heißt „für den Lehrer“?", a: ["لِلْمُدَرِّسِ", "لِالْمُدَرِّسِ", "لِمُدَرِّسُ", "لَلْمُدَرِّسَ"], e: "لِـ + الْ → لِلْ, danach Genitiv.", w: ["Das Alif von al fällt nach لِـ weg.", "Nach لِـ steht Genitiv.", "لِـ hat Kasra, das Nomen Genitiv."] },
  { q: "Was bedeutet لِمَاذَا?", a: ["warum?", "was?", "wem?", "wann?"], e: "لِمَاذَا أَنْتَ غَضْبَانُ؟ – Warum bist du zornig?", w: ["„was?“ ist مَا/مَاذَا.", "„wem?“ ist لِمَنْ.", "„wann?“ ist مَتَى (Buch 2)."] },
  { q: "Welche Endung hat عَطْشَانُ im Satz الْوَلَدُ عَطْشَانُ?", a: ["nur Ḍamma, kein Tanwīn", "Ḍamma mit Tanwīn", "Kasra", "Fatḥa mit Tanwīn"], e: "Adjektive auf -ān bekommen kein Tanwīn.", w: ["faʿlān-Adjektive haben kein Tanwīn.", "Das Prädikat steht im Nominativ.", "Das Prädikat steht im Nominativ."] }
]);

add("m10", [
  { q: "Wie heißt „ihr Buch“ (einer Frau)?", a: ["كِتَابُهَا", "كِتَابُهُ", "كِتَابُكِ", "كِتَابُهُمْ"], e: "ـهَا = ihr (eine Frau).", w: ["ـهُ = sein.", "ـكِ = dein (w.) (Lektion 12).", "ـهُمْ = ihr (mehrere Männer) (Lektion 13)."] },
  { q: "Wie heißt „Sein Bruder ist Ingenieur“?", a: ["أَخُوهُ مُهَنْدِسٌ.", "أَخُهُ مُهَنْدِسٌ.", "أَخِيهِ مُهَنْدِسٌ.", "أَخَاهُ مُهَنْدِسٌ."], e: "Subjekt im Nominativ: أَخُو + ـهُ.", w: ["أَخٌ bekommt als Muḍāf ein و.", "أَخِي… wäre Genitiv.", "أَخَا… wäre Akkusativ."] },
  { q: "Wie heißt „du (m.) gingst“?", a: ["ذَهَبْتَ", "ذَهَبْتُ", "ذَهَبَتْ", "ذَهَبَ"], e: "-ta = du (m.), -tu = ich.", w: ["ذَهَبْتُ = ich ging.", "ذَهَبَتْ = sie ging.", "ذَهَبَ = er ging."] },
  { q: "Wie heißt „Ich ging mit meinem Vater“?", a: ["ذَهَبْتُ مَعَ أَبِي.", "ذَهَبْتُ مَعَ أَبُوي.", "ذَهَبْتَ مَعَ أَبِي.", "ذَهَبْتُ مَعَ الْأَبِي."], e: "مَعَ + أَبِي (mein Vater).", w: ["Mit „mein“ heißt es أَبِي.", "ذَهَبْتَ = du gingst.", "Mit Besitzendung kein al."] },
  { q: "Welche Rolle hat ـكَ in أَخُوكَ?", a: ["Muḍāf ilaihi (Besitzer)", "Fāʿil", "Khabar", "Objekt"], e: "Die Besitzendungen sind Pronomen im Genitiv (Muḍāf ilaihi).", w: ["Es gibt kein Verb.", "Das Prädikat ist ein anderes Wort.", "Es gibt kein Verb, also kein Objekt."] },
  { q: "Wie sagt man „Er hat ein Auto“?", a: ["عِنْدَهُ سَيَّارَةٌ.", "عِنْدَهُ سَيَّارَةً.", "سَيَّارَتُهُ عِنْدَ.", "عِنْدَ سَيَّارَةٌ هُوَ."], e: "Für trennbaren Besitz nimmt man عِنْدَ + Pronomen; das Besessene ist nachgestelltes Subjekt im Nominativ.", w: ["Das nachgestellte Subjekt steht im Nominativ, nicht im Akkusativ.", "عِنْدَ braucht ein Nomen oder Pronomen danach.", "Das Pronomen wird an عِنْدَ angehängt."] }
]);

add("m11", [
  { q: "Welche Form ist richtig? أُحِبُّ …", a: ["الْقَهْوَةَ", "الْقَهْوَةُ", "الْقَهْوَةِ", "قَهْوَةٌ"], e: "Das Objekt steht im Akkusativ (-a).", w: ["-u ist Nominativ.", "-i ist Genitiv.", "Nominativ mit Tanwīn passt nicht für ein Objekt."] },
  { q: "Wer ist in أُحِبُّ اللَّهَ das Subjekt?", a: ["„ich“, im Verb أُحِبُّ verborgen", "اللَّهَ", "Es gibt keins.", "أُحِبُّ selbst als Nomen"], e: "Das أُ am Anfang zeigt „ich“.", w: ["اللَّهَ ist das Objekt.", "Jedes Verb hat ein Subjekt.", "أُحِبُّ ist ein Verb."] },
  { q: "Wie heißt „Was magst du?“", a: ["مَاذَا تُحِبُّ؟", "مَنْ تُحِبُّ؟", "مَاذَا أُحِبُّ؟", "تُحِبُّ مَاذَا؟"], e: "مَاذَا vor einem Verb; تُحِبُّ = du magst.", w: ["مَنْ fragt nach Personen („Wen magst du?“).", "أُحِبُّ heißt „ich mag“.", "Das Fragewort steht vorne."] },
  { q: "Was bedeutet فِيهِ in الْبَيْتُ كَبِيرٌ، فِيهِ حَدِيقَةٌ?", a: ["darin (im Haus)", "darin (in der Tasche)", "dort", "mit ihm"], e: "ـهِ bezieht sich auf das männliche الْبَيْتُ.", w: ["Eine Tasche kommt im Satz nicht vor.", "„dort“ ist هُنَاكَ.", "„mit ihm“ wäre مَعَهُ."] },
  { q: "Welche Rolle hat الْعَرَبِيَّةَ in أُحِبُّ اللُّغَةَ الْعَرَبِيَّةَ?", a: ["Naʿt zum Objekt (Akkusativ)", "Objekt", "Muḍāf ilaihi", "Khabar"], e: "Das Adjektiv folgt seinem Nomen in den Akkusativ.", w: ["Das Objekt ist اللُّغَةَ.", "Es gibt keine Iḍāfa.", "Es gibt kein Khabar im Verbalsatz."] },
  { q: "Was bedeutet تُحِبُّ?", a: ["du (m.) liebst", "ich liebe", "wir lieben", "er liebt"], e: "تُـ = du, أُ = ich, نُـ = wir.", w: ["„ich liebe“ ist أُحِبُّ.", "„wir lieben“ ist نُحِبُّ (Lektion 21).", "„er liebt“ wäre يُحِبُّ."] }
]);

add("m12", [
  { q: "Wie heißt „du (w.) gingst“?", a: ["ذَهَبْتِ", "ذَهَبَتْ", "ذَهَبْتَ", "ذَهَبْتُ"], e: "-ti = du (w.), -at = sie.", w: ["ذَهَبَتْ = sie ging.", "ذَهَبْتَ = du (m.) gingst.", "ذَهَبْتُ = ich ging."] },
  { q: "Was ist das تْ in ذَهَبَتْ مَرْيَمُ?", a: ["ein Zeichen für das weibliche Subjekt (Tāʾ at-taʾnīth)", "das Subjekt „sie“", "das Objekt", "ein Pluralzeichen"], e: "Das Subjekt ist مَرْيَمُ; تْ zeigt nur „weiblich“.", w: ["Das Subjekt steht schon da.", "Es gibt kein Objekt.", "Es ist Singular."] },
  { q: "Wie heißt „Wie geht es dir?“ zu einer Frau?", a: ["كَيْفَ حَالُكِ؟", "كَيْفَ حَالُكَ؟", "كَيْفَ حَالُهَا؟", "أَيْنَ حَالُكِ؟"], e: "ـكِ = dein (w.).", w: ["ـكَ ist für einen Mann.", "ـهَا heißt „ihr“.", "أَيْنَ fragt nach dem Ort."] },
  { q: "Welches Relativpronomen passt? الشَّجَرَةُ … أَمَامَ الْبَيْتِ كَبِيرَةٌ.", a: ["الَّتِي", "الَّذِي", "هَذِهِ", "تِلْكَ"], e: "الشَّجَرَةُ ist weiblich.", w: ["الَّذِي ist männlich.", "هَذِهِ ist ein Demonstrativ.", "تِلْكَ ist ein Demonstrativ."] },
  { q: "Übersetze: هَذَا كِتَابُكِ أَنْتِ.", a: ["Das ist DEIN Buch (zu einer Frau).", "Das ist dein Buch und du.", "Du bist das Buch.", "Das Buch gehört ihr."], e: "Das angefügte أَنْتِ betont den Besitzer.", w: ["وَ fehlt – es ist keine Aufzählung.", "أَنْتِ betont nur.", "ـكِ heißt „dein“, nicht „ihr“."] },
  { q: "Was bedeutet بَعْدَ in بَعْدَ الدَّرْسِ?", a: ["nach", "vor", "mit", "unter"], e: "بَعْدَ = nach, danach Genitiv.", w: ["„vor“ (zeitlich) ist قَبْلَ.", "„mit“ ist مَعَ.", "„unter“ ist تَحْتَ."] }
]);

add("m13", [
  { q: "Welche Form ist richtig? ذَهَبَ … إِلَى الْمَسْجِدِ.", a: ["الْمُسْلِمُونَ", "الْمُسْلِمِينَ", "الْمُسْلِمُونِ", "مُسْلِمُونَ الْ"], e: "Fāʿil im Nominativ: -ūna.", w: ["-īna ist Akkusativ/Genitiv (Buch 2).", "Die Endung ist -ūna, nicht -ūni.", "al steht vorne."] },
  { q: "Plural von نَجْمٌ?", a: ["نُجُومٌ", "نَجْمُونَ", "نَجْمَاتٌ", "أَنْجَامٌ"], e: "Gebrochener Plural nach fuʿūl.", w: ["-ūna nur bei bestimmten Personenwörtern.", "-āt passt hier nicht.", "Dieses Muster gibt es für نَجْمٌ nicht."] },
  { q: "Welches Pronomen passt? … مُدَرِّسَاتٌ.", a: ["هُنَّ", "هُمْ", "هِيَ", "هُمَا"], e: "Mehrere Frauen → هُنَّ.", w: ["هُمْ ist männlich.", "هِيَ ist Singular.", "هُمَا ist Dual."] },
  { q: "Wie heißt „jene Männer“ (Plural von ذَلِكَ)?", a: ["أُولَئِكَ", "هَؤُلَاءِ", "ذَلِكُمْ", "تِلْكَ"], e: "أُولَئِكَ – das و wird nicht gesprochen.", w: ["هَؤُلَاءِ ist der Plural von هَذَا/هَذِهِ.", "Das ist nicht die Pluralform.", "تِلْكَ ist weiblich Singular."] },
  { q: "Was bedeutet بَعْضُهُمْ?", a: ["einige von ihnen", "sie alle", "ihr Freund", "einer von uns"], e: "بَعْضٌ = einige.", w: ["„alle“ ist كُلٌّ (Lektion 19).", "„ihr Freund“ wäre صَدِيقُهُمْ.", "ـهُمْ = ihnen, nicht „uns“."] },
  { q: "Plural von صَدِيقٌ?", a: ["أَصْدِقَاءُ", "صَدِيقُونَ", "صُدُقٌ", "صَدِيقَاتٌ"], e: "Gebrochener Plural nach afʿilāʾ (ohne Tanwīn).", w: ["صَدِيقٌ bildet keinen gesunden Plural.", "Diese Form gibt es nicht.", "صَدِيقَاتٌ ist der Plural von صَدِيقَةٌ."] }
]);

add("m14", [
  { q: "Wie heißt „euer Haus“ (Männer)?", a: ["بَيْتُكُمْ", "بَيْتُكُنَّ", "بَيْتُنَا", "بَيْتُهُمْ"], e: "ـكُمْ = euer (m.).", w: ["ـكُنَّ = euer (w.) (Lektion 15).", "ـنَا = unser.", "ـهُمْ = ihr (Pl.)."] },
  { q: "Wie heißt „ihr gingt“ (Männer)?", a: ["ذَهَبْتُمْ", "ذَهَبْنَا", "ذَهَبُوا", "ذَهَبْتُنَّ"], e: "-tum = ihr (m.).", w: ["ذَهَبْنَا = wir gingen.", "ذَهَبُوا = sie gingen.", "ذَهَبْتُنَّ = ihr (w.) gingt."] },
  { q: "Welcher Name bekommt Tanwīn?", a: ["نُوحٌ", "إِبْرَاهِيمُ", "إِسْمَاعِيلُ", "لَنْدَنُ"], e: "Kurze fremde Namen (3 Buchstaben, mittlerer ohne Vokal) haben Tanwīn.", w: ["Längerer fremder Name → kein Tanwīn.", "Längerer fremder Name → kein Tanwīn.", "Fremder Ortsname → kein Tanwīn."] },
  { q: "Welcher Fall steht nach أَيُّ?", a: ["Genitiv – أَيُّ ist Muḍāf", "Nominativ", "Akkusativ", "kein Fall – mabnī"], e: "أَيُّ كِتَابٍ – „welches Buch?“", w: ["Das folgende Nomen ist Muḍāf ilaihi.", "Kein Akkusativ hier.", "Das Nomen danach ist nicht mabnī."] },
  { q: "Was heißt أَهْلًا وَسَهْلًا?", a: ["Herzlich willkommen", "Auf Wiedersehen", "Danke", "Wie geht es dir?"], e: "Begrüßung für Gäste.", w: ["„Auf Wiedersehen“ ist مَعَ السَّلَامَةِ.", "„Danke“ ist شُكْرًا.", "„Wie geht es dir?“ ist كَيْفَ حَالُكَ؟"] },
  { q: "Welche Rolle hat الْجَدِيدُ in بَيْتُ الْإِمَامِ الْجَدِيدُ?", a: ["Naʿt zu بَيْتُ (Nominativ)", "Naʿt zu الْإِمَامِ", "Khabar", "Muḍāf ilaihi"], e: "Das -u zeigt: das Haus ist neu.", w: ["Dann müsste es الْجَدِيدِ (Genitiv) heißen.", "Es ist kein Satz, sondern eine Wortgruppe.", "Der Muḍāf ilaihi ist الْإِمَامِ."] }
]);

add("m15", [
  { q: "Wie heißt „ihr (Frauen) gingt“?", a: ["ذَهَبْتُنَّ", "ذَهَبْتُمْ", "ذَهَبْنَ", "ذَهَبْتِ"], e: "-tunna = ihr (w.).", w: ["ذَهَبْتُمْ = ihr (m.).", "ذَهَبْنَ = sie (w.) gingen.", "ذَهَبْتِ = du (w.) gingst."] },
  { q: "Wie heißt „Ich kehrte nach dem Gebet zurück“?", a: ["رَجَعْتُ بَعْدَ الصَّلَاةِ.", "رَجَعْتُ قَبْلَ الصَّلَاةِ.", "رَجَعْتُ بَعْدَ الصَّلَاةُ.", "رَجَعَتْ بَعْدَ الصَّلَاةِ."], e: "بَعْدَ + Genitiv; رَجَعْتُ = ich kehrte zurück.", w: ["قَبْلَ heißt „vor“.", "Nach بَعْدَ steht Genitiv.", "رَجَعَتْ heißt „sie kehrte zurück“."] },
  { q: "Welche Rolle hat قَبْلَ in قَبْلَ الدَّرْسِ?", a: ["Zeitadverb (Ẓarf zamān) im Akkusativ, Muḍāf", "Präposition", "Fāʿil", "Khabar allein"], e: "قَبْلَ/بَعْدَ sind Ẓurūf mit Fatḥa.", w: ["Sie sind keine echten Präpositionen.", "Es ist kein Subjekt eines Verbs.", "Allein ist es kein Prädikat."] },
  { q: "Ordne zu: ذَهَبْنَا", a: ["wir gingen", "sie (w.) gingen", "ihr gingt", "sie (m.) gingen"], e: "-nā = wir.", w: ["Das wäre ذَهَبْنَ.", "Das wäre ذَهَبْتُمْ.", "Das wäre ذَهَبُوا."] },
  { q: "Plural von دَرْسٌ?", a: ["دُرُوسٌ", "دَرْسُونَ", "أَدْرَاسٌ", "دَرَسَاتٌ"], e: "fuʿūl wie نُجُومٌ.", w: ["Sachen bilden keinen -ūna-Plural.", "Diese Form gibt es nicht.", "Diese Form gibt es nicht."] },
  { q: "Was bedeutet الْأُسْبُوعُ?", a: ["die Woche", "der Monat", "der Tag", "das Jahr"], e: "Plural: أَسَابِيعُ.", w: ["„der Monat“ ist الشَّهْرُ.", "„der Tag“ ist الْيَوْمُ.", "„das Jahr“ ist السَّنَةُ."] }
]);

add("m16", [
  { q: "Welches Verb passt? … الطَّائِرَاتُ.", a: ["خَرَجَتِ", "خَرَجَ", "خَرَجُوا", "خَرَجْنَ"], e: "Flugzeuge sind Sachen → weibliches Verb im Singular.", w: ["Männlich passt nicht zu einem Sachplural.", "Das Verb vor dem Subjekt steht im Singular.", "Das Verb vor dem Subjekt steht im Singular."] },
  { q: "Welches Pronomen passt? أَيْنَ الْكِلَابُ؟ … فِي الْحَدِيقَةِ.", a: ["هِيَ", "هُمْ", "هُوَ", "هُنَّ"], e: "Tiere im Plural → wie weiblich Singular.", w: ["هُمْ nur für vernunftbegabte Männer.", "هُوَ ist männlich Singular.", "هُنَّ nur für Frauen."] },
  { q: "Plural von فُنْدُقٌ?", a: ["فَنَادِقُ", "فُنْدُقَاتٌ", "فُنْدُقُونَ", "أَفْنَادٌ"], e: "Muster mafāʿil/faʿālil – ohne Tanwīn.", w: ["Diese Form ist nicht üblich.", "Sachen bilden keinen -ūna-Plural.", "Diese Form gibt es nicht."] },
  { q: "Welcher Satz ist richtig?", a: ["هَذِهِ أَقْلَامٌ جَدِيدَةٌ.", "هَؤُلَاءِ أَقْلَامٌ جَدِيدَةٌ.", "هَذِهِ أَقْلَامٌ جُدُدٌ.", "هَذَا أَقْلَامٌ جَدِيدٌ."], e: "Sachplural: هَذِهِ + Adjektiv weiblich Singular.", w: ["هَؤُلَاءِ nur für Personen.", "جُدُدٌ nur für Personen.", "Plural braucht nicht هَذَا."] },
  { q: "Was ist ein „vernunftbegabtes“ Nomen?", a: ["ein Mensch (z. B. طَالِبٌ, أُمٌّ)", "ein Tier", "eine Sache", "jedes weibliche Nomen"], e: "Menschen sind ʿāqil, Tiere und Sachen nicht.", w: ["Tiere gelten als nicht vernunftbegabt.", "Sachen sind nicht vernunftbegabt.", "Das hat mit dem Geschlecht nichts zu tun."] },
  { q: "Welches Adjektiv passt? هَذِهِ أَنْهَارٌ …", a: ["طَوِيلَةٌ", "طِوَالٌ", "طَوِيلُونَ", "طَوِيلٌ"], e: "Flüsse sind Sachen → weiblich Singular.", w: ["Die Pluralform nimmt man für Personen.", "-ūna nur für Personen.", "Das Adjektiv muss weiblich sein."] }
]);

add("m17", [
  { q: "Welches Adjektiv passt? هَؤُلَاءِ مُهَنْدِسُونَ …", a: ["يَابَانِيُّونَ", "يَابَانِيَّةٌ", "يَابَانِيٌّ", "يَابَانِيَّاتٌ"], e: "Personen → Adjektiv im männlichen Plural.", w: ["Weiblich Singular nur bei Sachen/Tieren.", "Singular passt nicht zu Personen im Plural.", "-āt ist weiblicher Plural."] },
  { q: "Wie heißt „der Direktor der Firma“?", a: ["مُدِيرُ الشَّرِكَةِ", "الْمُدِيرُ الشَّرِكَةِ", "مُدِيرٌ الشَّرِكَةُ", "الْمُدِيرُ لِلشَّرِكَةُ"], e: "Iḍāfa: Muḍāf ohne al, Muḍāf ilaihi im Genitiv.", w: ["Muḍāf ohne al.", "Muḍāf ohne Tanwīn, dann Genitiv.", "Nach لِـ steht Genitiv."] },
  { q: "Was bedeutet رَخِيصٌ – und das Gegenteil?", a: ["billig – غَالٍ (teuer)", "teuer – رَخِيصٌ", "neu – قَدِيمٌ", "groß – صَغِيرٌ"], e: "رَخِيصٌ = billig.", w: ["Die Bedeutung ist umgekehrt.", "„neu“ ist جَدِيدٌ.", "„groß“ ist كَبِيرٌ."] },
  { q: "Welches Verb passt? … الْمُدِيرُونَ إِلَى الشَّرِكَةِ.", a: ["ذَهَبَ", "ذَهَبَتْ", "ذَهَبُوا", "ذَهَبْنَ"], e: "Vor dem genannten Subjekt steht das Verb im Singular; Personen, männlich → ذَهَبَ.", w: ["Weiblich passt nicht zu Männern.", "Vor dem Subjekt kein Plural.", "Vor dem Subjekt kein Plural, und es sind Männer."] },
  { q: "Welches Demonstrativ passt? … حَمِيرٌ.", a: ["هَذِهِ", "هَؤُلَاءِ", "هَذَا", "هُمْ"], e: "Tiere im Plural → weiblich Singular.", w: ["هَؤُلَاءِ nur für Personen.", "هَذَا ist männlich Singular.", "هُمْ ist ein Pronomen für Personen."] },
  { q: "Plural von حِمَارٌ – welche Form ist auch richtig?", a: ["حُمُرٌ", "حِمَارُونَ", "حِمَارَاتٌ", "أَحْمَارٌ"], e: "حِمَارٌ hat zwei Plurale: حُمُرٌ und حَمِيرٌ.", w: ["Tiere bilden keinen -ūna-Plural.", "Diese Form ist nicht gemeint.", "Diese Form gibt es nicht."] }
]);

add("m18", [
  { q: "Wie heißt „zwei Lehrer“ (Nominativ)?", a: ["مُدَرِّسَانِ", "مُدَرِّسُونَ", "مُدَرِّسَيْنِ", "مُدَرِّسَتَانِ"], e: "Dual Nominativ: -āni.", w: ["-ūna ist Plural.", "-aini ist Genitiv/Akkusativ.", "-atāni ist der weibliche Dual."] },
  { q: "Welche Form passt? كَمْ … فِي الْفَصْلِ؟", a: ["طَالِبًا", "طُلَّابٌ", "طَالِبٌ", "طَالِبَيْنِ"], e: "Nach كَمْ: Singular im Akkusativ.", w: ["Kein Plural nach كَمْ.", "Kein Nominativ nach كَمْ.", "Kein Dual nach كَمْ."] },
  { q: "Was ist das Zeichen des Nominativs beim Dual?", a: ["das Alif (-āni)", "das Ḍamma", "das Wāw", "das Yāʾ"], e: "طَالِبَانِ – Alif statt Ḍamma.", w: ["Beim Dual nicht.", "Wāw ist das Zeichen beim m. Plural.", "Yāʾ steht im Genitiv/Akkusativ."] },
  { q: "Wie heißt „Das sind zwei neue Autos“?", a: ["هَاتَانِ سَيَّارَتَانِ جَدِيدَتَانِ.", "هَذَانِ سَيَّارَتَانِ جَدِيدَانِ.", "هَاتَانِ سَيَّارَتَانِ جَدِيدَةٌ.", "هَذِهِ سَيَّارَتَانِ جَدِيدَتَانِ."], e: "Weiblicher Dual: هَاتَانِ, -atāni beim Adjektiv.", w: ["هَذَانِ ist männlich.", "Das Adjektiv muss im Dual stehen.", "Zum Dual gehört هَاتَانِ."] },
  { q: "Wie heißt „Ich sah zwei Männer“?", a: ["رَأَيْتُ رَجُلَيْنِ.", "رَأَيْتُ رَجُلَانِ.", "رَأَيْتُ رِجَالًا.", "رَأَيْتُ رَجُلًا."], e: "Objekt im Dual: -aini (Akkusativ).", w: ["-āni ist Nominativ.", "رِجَالًا sind viele Männer.", "رَجُلًا ist einer."] },
  { q: "Welche Form hat das Akkusativ-Tanwīn bei كِتَابٌ?", a: ["كِتَابًا – mit stummem Alif", "كِتَابً – ohne Alif", "كِتَابَا – langes ā", "كِتَابٍ"], e: "Das Alif wird geschrieben, aber nicht gesprochen.", w: ["Ohne Alif schreibt man nur bei ة.", "Das ā wird nicht lang gesprochen.", "-in ist Genitiv."] }
]);

add("m19", [
  { q: "„vier Bücher“ heißt …", a: ["أَرْبَعَةُ كُتُبٍ", "أَرْبَعُ كُتُبٍ", "أَرْبَعَةُ كِتَابٍ", "أَرْبَعَةٌ كُتُبٌ"], e: "Männliches Gezähltes → Zahl mit ة; Gezähltes Plural Genitiv.", w: ["ohne ة nur bei weiblichem Gezählten.", "Das Gezählte steht im Plural.", "Zahl und Gezähltes bilden eine Iḍāfa."] },
  { q: "Welche Rolle hat طُلَّابٍ in خَرَجَ ثَلَاثَةُ طُلَّابٍ?", a: ["Muḍāf ilaihi (das Gezählte)", "Fāʿil", "Naʿt", "Tamyīz im Akkusativ"], e: "Fāʿil ist die Zahl ثَلَاثَةُ; طُلَّابٍ ist ihr Muḍāf ilaihi.", w: ["Fāʿil ist ثَلَاثَةُ.", "Es beschreibt nicht, es wird gezählt.", "Es steht im Genitiv."] },
  { q: "Wie heißt „wir alle“?", a: ["كُلُّنَا", "كُلُّهُمْ", "كُلُّكُمْ", "نَحْنُ كُلٌّ"], e: "كُلٌّ + ـنَا.", w: ["كُلُّهُمْ = sie alle.", "كُلُّكُمْ = ihr alle.", "So sagt man es nicht."] },
  { q: "Welche Form passt? فِي … بُيُوتٍ", a: ["خَمْسَةِ", "خَمْسَةُ", "خَمْسَةَ", "خَمْسِ"], e: "Die Zahl selbst steht nach فِي im Genitiv.", w: ["Nominativ passt nicht nach فِي.", "Akkusativ passt nicht nach فِي.", "ohne ة wäre weibliches Gezähltes."] },
  { q: "Was bedeutet الثَّمَنُ?", a: ["der Preis", "die Hälfte", "der Tag", "das Land"], e: "كَمْ ثَمَنُ هَذَا؟ – Was kostet das?", w: ["„die Hälfte“ ist النِّصْفُ.", "„der Tag“ ist الْيَوْمُ.", "„das Land“ ist الْبَلَدُ."] },
  { q: "Wie heißt „ein Stift“ betont („ein einziger“)?", a: ["قَلَمٌ وَاحِدٌ", "وَاحِدُ قَلَمٍ", "وَاحِدٌ قَلَمٌ", "قَلَمٌ وَاحِدَةٌ"], e: "وَاحِدٌ ist Adjektiv und steht nach dem Nomen.", w: ["وَاحِدٌ ist kein Muḍāf.", "Es steht nach dem Nomen.", "قَلَمٌ ist männlich."] }
]);

add("m20", [
  { q: "„fünf Zimmer“ heißt …", a: ["خَمْسُ غُرَفٍ", "خَمْسَةُ غُرَفٍ", "خَمْسُ غُرْفَةٍ", "خَمْسٌ غُرَفٌ"], e: "غُرْفَةٌ ist weiblich → Zahl ohne ة.", w: ["Mit ة nur bei männlichem Gezählten.", "Das Gezählte steht im Plural.", "Zahl und Gezähltes bilden eine Iḍāfa."] },
  { q: "Welche Form passt? لِي … بَنَاتٍ (3).", a: ["ثَلَاثُ", "ثَلَاثَةُ", "ثَلَاثَةٌ", "ثَلَاثِ"], e: "Weibliches Gezähltes; die Zahl ist Subjekt → Nominativ.", w: ["Mit ة nur bei männlichem Gezählten.", "Als Muḍāf kein Tanwīn.", "Die Zahl steht hier im Nominativ."] },
  { q: "Wie heißt „zwei Töchter“ (betont)?", a: ["بِنْتَانِ اثْنَتَانِ", "بِنْتَانِ اثْنَانِ", "اثْنَتَا بِنْتٍ", "بِنْتَيْنِ اثْنَتَانِ"], e: "اثْنَتَانِ ist weiblich und folgt dem Dual.", w: ["اثْنَانِ ist männlich.", "So bildet man „zwei“ nicht.", "Beide stehen im selben Fall."] },
  { q: "Welche Rolle hat ثَلَاثُ in فِي الْبَيْتِ ثَلَاثُ غُرَفٍ?", a: ["nachgestelltes Subjekt (Mubtadaʾ muʾakhkhar)", "Khabar", "Fāʿil", "Muḍāf ilaihi"], e: "فِي الْبَيْتِ ist das vorgezogene Prädikat.", w: ["Das Prädikat ist فِي الْبَيْتِ.", "Es gibt kein Verb.", "Muḍāf ilaihi ist غُرَفٍ."] },
  { q: "Plural von كَلِمَةٌ?", a: ["كَلِمَاتٌ", "كَلِمُونَ", "أَكْلَامٌ", "كُلُومٌ"], e: "Gesunder weiblicher Plural -āt.", w: ["-ūna nur für männliche Personen.", "Diese Form gibt es nicht.", "Diese Form gibt es nicht."] },
  { q: "„neun Studentinnen“ heißt …", a: ["تِسْعُ طَالِبَاتٍ", "تِسْعَةُ طَالِبَاتٍ", "تِسْعُ طَالِبَةٍ", "تِسْعٌ طَالِبَاتٌ"], e: "Weiblich → ohne ة; Plural im Genitiv.", w: ["Mit ة nur bei männlichem Gezählten.", "Das Gezählte steht im Plural.", "Zahl und Gezähltes bilden eine Iḍāfa."] }
]);

add("m21", [
  { q: "Wie heißt „Wir lieben ihn“?", a: ["نُحِبُّهُ", "أُحِبُّهُ", "نُحِبُّهَا", "تُحِبُّهُ"], e: "نُـ = wir, ـهُ = ihn.", w: ["أُحِبُّهُ = ich liebe ihn.", "ـهَا = sie (Objekt).", "تُحِبُّهُ = du liebst ihn."] },
  { q: "Welche Rolle hat ـهُ in نُحِبُّهُ?", a: ["Objekt (Mafʿūl bihī)", "Fāʿil", "Muḍāf ilaihi", "Khabar"], e: "Am Verb ist das Pronomen das Objekt; am Nomen wäre es Muḍāf ilaihi.", w: ["Der Fāʿil ist „wir“.", "Am Verb ist es kein Besitzer.", "Es gibt kein Khabar."] },
  { q: "Welcher Satz ist richtig?", a: ["هَؤُلَاءِ طُلَّابٌ جُدُدٌ.", "هَذِهِ طُلَّابٌ جُدُدٌ.", "هَؤُلَاءِ طُلَّابٌ جَدِيدَةٌ.", "هَؤُلَاءِ طُلَّابٌ جَدِيدٌ."], e: "Personen: هَؤُلَاءِ + Adjektiv im Plural.", w: ["هَذِهِ nur für Sachplurale.", "Weiblich Singular nur für Sachen.", "Singular passt nicht."] },
  { q: "Was bedeutet وَاسِعٌ?", a: ["weit, geräumig", "eng", "schnell", "sauber"], e: "غُرْفَةٌ وَاسِعَةٌ – ein geräumiges Zimmer.", w: ["„eng“ ist ضَيِّقٌ.", "„schnell“ ist سَرِيعٌ.", "„sauber“ ist نَظِيفٌ."] },
  { q: "Welcher Satz ist richtig? („Ich habe zwei Schwestern.“)", a: ["لِي أُخْتَانِ.", "لِي أُخْتَيْنِ.", "لِي أُخْتَانِ اثْنَانِ.", "لِي أُخْتٌ اثْنَتَانِ."], e: "Verwandte mit لِي; das Subjekt im Dual Nominativ.", w: ["-aini ist kein Nominativ.", "„zwei“ muss weiblich sein: اثْنَتَانِ.", "Zu „zwei“ gehört der Dual, nicht der Singular."] },
  { q: "Welche Form passt? هَذَا كِتَابٌ وَ… قَلَمٌ.", a: ["ذَاكَ", "تِلْكَ", "هَذِهِ", "أُولَئِكَ"], e: "ذَاكَ = ذَلِكَ (männlich, fern).", w: ["تِلْكَ ist weiblich.", "هَذِهِ ist weiblich.", "أُولَئِكَ ist Plural."] }
]);

add("m22", [
  { q: "Welches Wort ist ein Diptoton?", a: ["أَصْدِقَاءُ", "أَقْلَامٌ", "كُتُبٌ", "طُلَّابٌ"], e: "afʿilāʾ-Plurale haben kein Tanwīn.", w: ["afʿāl hat Tanwīn.", "fuʿul hat Tanwīn.", "fuʿʿāl hat Tanwīn."] },
  { q: "Welche Form ist richtig? هَذَا قَمِيصٌ …", a: ["أَبْيَضُ", "أَبْيَضٌ", "الْأَبْيَضُ", "أَبْيَضَ"], e: "Farbadjektiv afʿal → kein Tanwīn; Nominativ: ein Ḍamma.", w: ["afʿal-Adjektive haben kein Tanwīn.", "قَمِيصٌ ist unbestimmt – kein al.", "Das Adjektiv steht im Nominativ."] },
  { q: "Warum hat حَمْزَةُ kein Tanwīn?", a: ["männlicher Name auf ة", "weil es ein Verb ist", "weil es weiblich ist", "weil es fremd ist"], e: "Männliche Namen auf ة sind Diptota.", w: ["Es ist ein Name.", "حَمْزَةُ ist ein Männername.", "Es ist ein arabischer Name."] },
  { q: "Wie heißt „Āmina sagte“?", a: ["قَالَتْ آمِنَةُ", "قَالَ آمِنَةُ", "قَالَتْ آمِنَةٌ", "قُلْتُ آمِنَةُ"], e: "Weibliches Subjekt → قَالَتْ; Name ohne Tanwīn.", w: ["Das Verb muss weiblich sein.", "Weibliche Namen haben kein Tanwīn.", "قُلْتُ heißt „ich sagte“."] },
  { q: "Bekommt ein Diptoton mit الْ eine normale Endung?", a: ["Ja – الْأَحْمَرُ, فِي الْمَسَاجِدِ", "Nein, nie", "Nur im Akkusativ", "Nur im Nominativ mit Tanwīn"], e: "Mit al oder als Muḍāf verhält es sich normal (Lektion 23).", w: ["Mit al ändert sich das.", "Auch im Genitiv: Kasra.", "Mit al gibt es nie Tanwīn."] },
  { q: "Plural von دَقِيقَةٌ – und hat er Tanwīn?", a: ["دَقَائِقُ – ohne Tanwīn", "دَقِيقَاتٌ – mit Tanwīn", "دُقُوقٌ – mit Tanwīn", "دَقَائِقٌ – mit Tanwīn"], e: "Muster mafāʿil/faʿāʾil → Diptoton.", w: ["Das Buch lehrt دَقَائِقُ.", "Diese Form gibt es nicht.", "faʿāʾil hat kein Tanwīn."] }
]);

add("m23", [
  { q: "„in Bagdad“ heißt …", a: ["فِي بَغْدَادَ", "فِي بَغْدَادِ", "فِي بَغْدَادٍ", "فِي بَغْدَادُ"], e: "Diptoton im Genitiv: Fatḥa.", w: ["Kasra nur mit al oder als Muḍāf.", "Diptota haben kein Tanwīn.", "Nach فِي steht kein Nominativ."] },
  { q: "„mit fünf Freunden“ heißt …", a: ["مَعَ خَمْسَةِ أَصْدِقَاءَ", "مَعَ خَمْسَةِ أَصْدِقَاءٍ", "مَعَ خَمْسِ أَصْدِقَاءَ", "مَعَ خَمْسَةُ أَصْدِقَاءَ"], e: "أَصْدِقَاءُ ist Diptoton: Genitiv mit Fatḥa.", w: ["Diptota haben kein Kasra-Tanwīn.", "Männliches Gezähltes → Zahl mit ة.", "Nach مَعَ steht Genitiv."] },
  { q: "Welche Form ist richtig? „die Moscheen der Stadt“ im Satz صَلَّيْتُ فِي …", a: ["مَسَاجِدِ الْمَدِينَةِ", "مَسَاجِدَ الْمَدِينَةِ", "الْمَسَاجِدَ الْمَدِينَةِ", "مَسَاجِدٍ الْمَدِينَةِ"], e: "Als Muḍāf bekommt das Diptoton die normale Kasra.", w: ["Fatḥa nur, wenn es weder al hat noch Muḍāf ist.", "Muḍāf ohne al.", "Muḍāf ohne Tanwīn."] },
  { q: "Was sagt man im Iʿrāb zu مِنْ أَحْمَدَ?", a: ["مَجْرُورٌ وَعَلَامَةُ جَرِّهِ الْفَتْحَةُ نِيَابَةً عَنِ الْكَسْرَةِ", "مَنْصُوبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ", "مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ", "مَجْرُورٌ وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ"], e: "Genitiv – die Fatḥa vertritt die Kasra.", w: ["Es ist kein Akkusativ, auch wenn man ein a hört.", "Nach مِنْ steht kein Nominativ.", "Die Kasra ist nicht zu sehen."] },
  { q: "„das Haus Uthmāns“ heißt …", a: ["بَيْتُ عُثْمَانَ", "بَيْتُ عُثْمَانِ", "بَيْتُ عُثْمَانٍ", "الْبَيْتُ عُثْمَانَ"], e: "Muḍāf ilaihi ist Diptoton → Fatḥa.", w: ["Kasra hat ein Diptoton nur mit al oder als Muḍāf.", "Diptota haben kein Tanwīn.", "Der Muḍāf hat kein al."] },
  { q: "Wann hat ein Diptoton im Genitiv wieder Kasra?", a: ["wenn es الْ hat oder Muḍāf ist", "wenn es weiblich ist", "wenn es nach مِنْ steht", "nie"], e: "فِي الْمَسَاجِدِ – فِي مَسَاجِدِ الْمَدِينَةِ.", w: ["Das Geschlecht spielt keine Rolle.", "Nach مِنْ allein bleibt die Fatḥa.", "Mit al oder als Muḍāf schon."] }
]);
add("b2-01", [
  { q: "Welche Form ist richtig? إِنَّ … مُجْتَهِدٌ.", a: ["حَامِدًا", "حَامِدٌ", "حَامِدٍ", "حَامِدُ"], e: "Nach إِنَّ steht das Nomen im Akkusativ: إِنَّ حَامِدًا مُجْتَهِدٌ.", w: ["-un ist Nominativ.", "-in ist Genitiv.", "Ein normaler Name hat Tanwīn."] },
  { q: "Welche Rolle hat الْجَوَّ in لَعَلَّ الْجَوَّ جَمِيلٌ?", a: ["Ism von laʿalla (Akkusativ)", "Khabar von laʿalla", "Fāʿil", "Mafʿūl bihī"], e: "لَعَلَّ ist eine Schwester von inna.", w: ["Die Khabar ist جَمِيلٌ.", "Es gibt kein Verb.", "Es gibt kein Verb."] },
  { q: "Wie heißt „ein reicher Mann“ mit ذُو?", a: ["رَجُلٌ ذُو مَالٍ", "رَجُلٌ ذُو مَالٌ", "رَجُلٌ ذُو الْمَالُ", "رَجُلٌ ذَا مَالٍ"], e: "ذُو + Genitiv; im Nominativ ذُو.", w: ["Nach ذُو steht Genitiv.", "Nach ذُو steht Genitiv.", "ذَا ist die Akkusativform."] },
  { q: "Wie heißt „tausend Riyal“?", a: ["أَلْفُ رِيَالٍ", "أَلْفُ رِيَالَاتٍ", "أَلْفٌ رِيَالًا", "أَلْفُ رِيَالًا"], e: "Nach 100 und 1000: Singular im Genitiv.", w: ["Kein Plural nach 1000.", "1000 ist Muḍāf, kein Tamyīz im Akkusativ.", "Das Gezählte steht im Genitiv."] },
  { q: "Welche Form passt? هَذَا الرَّجُلُ …", a: ["قَاضٍ", "قَاضِيٌ", "قَاضِي", "قَاضًا"], e: "Wie غَالٍ: das ي fällt weg, das Tanwīn wandert zum vorigen Buchstaben.", w: ["Diese Form wird zusammengezogen.", "Unbestimmt braucht Tanwīn.", "Das wäre Akkusativ (قَاضِيًا)."] }
]);

add("b2-02", [
  { q: "Welche Rolle hat الْجَوُّ in لَيْسَ الْجَوُّ بِبَارِدٍ?", a: ["ismu laisa (Nominativ)", "khabaru laisa", "Fāʿil", "Muḍāf ilaihi"], e: "Das Subjekt nach لَيْسَ heißt ismu laisa.", w: ["Die Khabar ist بِبَارِدٍ.", "لَيْسَ hat Ism und Khabar, keinen Fāʿil.", "Es gibt keine Iḍāfa."] },
  { q: "Welche Form passt? „Wir sind keine Ärzte.“", a: ["لَسْنَا بِأَطِبَّاءَ.", "لَيْسَ نَحْنُ أَطِبَّاءُ.", "لَسْتُمْ بِأَطِبَّاءَ.", "لَيْسُوا بِأَطِبَّاءَ."], e: "لَيْسَ wird mit den Personalendungen verbunden: لَسْنَا = wir sind nicht.", w: ["لَيْسَ verbindet sich mit dem Pronomen.", "لَسْتُمْ = ihr seid nicht.", "لَيْسُوا = sie sind nicht."] },
  { q: "Was ist das بِـ in لَيْسَ الْبَيْتُ بِجَدِيدٍ?", a: ["ein zusätzliches بِـ vor der khabaru laisa", "„mit“", "„in“", "ein Teil des Wortes"], e: "Das بِـ ist zusätzlich (zāʾid); die Khabar steht nur scheinbar im Genitiv.", w: ["Es heißt hier nicht „mit“.", "Es heißt hier nicht „in“.", "جَدِيدٌ beginnt nicht mit ب."] },
  { q: "Wie heißt „Sie (eine Frau) ist keine Lehrerin“?", a: ["لَيْسَتْ بِمُدَرِّسَةٍ.", "لَيْسَ بِمُدَرِّسَةٍ.", "لَسْتِ بِمُدَرِّسَةٍ.", "لَيْسَتْ بِمُدَرِّسَةٌ."], e: "Feminin: لَيْسَتْ.", w: ["لَيْسَ ist männlich.", "لَسْتِ = du (w.) bist nicht.", "Nach بِـ steht Genitiv."] },
  { q: "Wie heißt „Wer ist der Herr?“ höflich?", a: ["مَنِ الْأَخُ؟", "مَنْ أَنْتَ؟", "مَا الْأَخُ؟", "أَيْنَ الْأَخُ؟"], e: "Wörtlich „Wer ist der Bruder?“ – höfliche Frage an einen Fremden.", w: ["Das ist direkter und weniger höflich.", "مَا fragt nach Sachen.", "أَيْنَ fragt nach dem Ort."] }
]);

add("b2-03", [
  { q: "Wie heißt der Komparativ von صَغِيرٌ?", a: ["أَصْغَرُ", "صُغْرَى", "صَغِيرٌ مِنْ", "أَصْغَرٌ"], e: "Schema afʿal – ohne Tanwīn.", w: ["صُغْرَى ist die weibliche Superlativform.", "Ohne afʿal gibt es keinen Komparativ.", "afʿal ist diptot – kein Tanwīn."] },
  { q: "Welche Form ist richtig? „Die Mädchen sind größer als die Jungen.“", a: ["الْبَنَاتُ أَطْوَلُ مِنَ الْأَبْنَاءِ.", "الْبَنَاتُ طُولَى مِنَ الْأَبْنَاءِ.", "الْبَنَاتُ أَطْوَلَاتٌ مِنَ الْأَبْنَاءِ.", "الْبَنَاتُ أَطْوَلُ الْأَبْنَاءِ."], e: "afʿal bleibt für Geschlecht und Zahl gleich.", w: ["Mit مِنْ bleibt afʿal unverändert.", "Diese Form gibt es nicht.", "Ohne مِنْ wäre es ein Superlativ mit anderer Bedeutung."] },
  { q: "Welche Form passt? فِي الْفَصْلِ ثَلَاثَةَ عَشَرَ …", a: ["طَالِبًا", "طُلَّابٍ", "طَالِبٌ", "طَالِبٍ"], e: "Nach 11–19: Singular im Akkusativ.", w: ["Plural Genitiv nur nach 3–10.", "Kein Nominativ.", "Kein Genitiv."] },
  { q: "Was heißt „der fünfte Tag“?", a: ["الْيَوْمُ الْخَامِسُ", "الْيَوْمُ الْخَمْسَةُ", "خَامِسُ الْيَوْمِ", "الْيَوْمُ الْخُمُسُ"], e: "Ordnungszahl nach fāʿil, als Adjektiv.", w: ["خَمْسَةٌ ist die Grundzahl.", "Die Ordnungszahl steht hier als Adjektiv.", "خُمُسٌ heißt „ein Fünftel“."] },
  { q: "Welche Rolle hat حَامِدًا in بِلَالٌ مُجْتَهِدٌ وَلَكِنَّ حَامِدًا كَسْلَانُ?", a: ["Ism von lākinna (Akkusativ)", "Mafʿūl bihī", "Khabar", "Ḥāl"], e: "لَكِنَّ ist eine Schwester von inna.", w: ["Es gibt kein Verb.", "Die Khabar ist كَسْلَانُ.", "Das ist kein Zustandsakkusativ."] }
]);

add("b2-04", [
  { q: "Wie heißt „sie (Frauen) kehrten zurück“?", a: ["رَجَعْنَ", "رَجَعُوا", "رَجَعَتْ", "رَجَعْنَا"], e: "-na (nūn der Frauen) = sie (w. Pl.).", w: ["رَجَعُوا ist männlich.", "رَجَعَتْ ist Singular.", "رَجَعْنَا = wir."] },
  { q: "Was ist in ذَهَبُوا das و?", a: ["der Fāʿil (Pronomen „sie“)", "ein Pluralzeichen ohne Rolle", "das Objekt", "ein Bindewort"], e: "Das و ist das angehängte Subjekt; das Alif danach wird nicht gesprochen.", w: ["Es hat eine Rolle: Fāʿil.", "Es gibt kein Objekt.", "Das Bindewort وَ steht vor Wörtern."] },
  { q: "Wie verneint man خَرَجْنَا?", a: ["مَا خَرَجْنَا", "لَا خَرَجْنَا", "لَيْسَ خَرَجْنَا", "لَنْ خَرَجْنَا"], e: "Das Perfekt wird mit مَا verneint.", w: ["لَا verneint den Muḍāriʿ.", "لَيْسَ steht vor Nominalsätzen.", "لَنْ steht mit dem Muḍāriʿ (Futur)."] },
  { q: "Welche Form ist richtig? „Ich ging nicht hinaus, weil es regnete.“", a: ["مَا خَرَجْتُ لِأَنَّ الْمَطَرَ نَزَلَ.", "مَا خَرَجْتُ لِأَنَّ الْمَطَرُ نَزَلَ.", "لَا خَرَجْتُ لِأَنَّ الْمَطَرَ نَزَلَ.", "مَا خَرَجْتُ لِأَنْ الْمَطَرَ نَزَلَ."], e: "لِأَنَّ + Nomen im Akkusativ.", w: ["Nach أَنَّ steht der Akkusativ.", "Das Perfekt verneint man mit مَا.", "Es heißt لِأَنَّ mit Šadda."] },
  { q: "Wie heißt „sie (eine Frau) saß“?", a: ["جَلَسَتْ", "جَلَسْتُ", "جَلَسْتَ", "جَلَسْنَ"], e: "-at mit Sukūn = sie.", w: ["جَلَسْتُ = ich saß.", "جَلَسْتَ = du saßt.", "جَلَسْنَ = sie (Pl.) saßen."] }
]);

add("b2-05", [
  { q: "Welches Wort ist in سَأَلَتِ الْمُدِيرَةُ زَيْنَبَ das Objekt?", a: ["زَيْنَبَ", "الْمُدِيرَةُ", "سَأَلَتِ", "Es gibt keins."], e: "Wer wurde gefragt? Zainab (Akkusativ, Fatḥa).", w: ["الْمُدِيرَةُ ist der Fāʿil.", "سَأَلَتِ ist das Verb.", "Das Verb hat ein Objekt."] },
  { q: "Wie heißt „Die Lehrerin öffnete die Tür“?", a: ["فَتَحَتِ الْمُدَرِّسَةُ الْبَابَ.", "فَتَحَ الْمُدَرِّسَةُ الْبَابَ.", "فَتَحَتِ الْمُدَرِّسَةَ الْبَابُ.", "فَتَحَتْ الْمُدَرِّسَةُ الْبَابُ."], e: "Weibliches Verb, Fāʿil im Nominativ, Objekt im Akkusativ.", w: ["Bei weiblichem Fāʿil steht -at.", "Fāʿil und Objekt sind vertauscht.", "Kasra vor al; das Objekt steht im Akkusativ."] },
  { q: "Welche Form ist richtig? رَأَيْتُ …", a: ["أَبَاكَ", "أَبُوكَ", "أَبِيكَ", "أَبَكَ"], e: "Objekt: أَبٌ als Muḍāf im Akkusativ mit Alif (Lektion 25).", w: ["أَبُو… ist Nominativ.", "أَبِي… ist Genitiv.", "Das Alif fehlt."] },
  { q: "Welcher Vokal steht auf dem zweiten Radikal von كَتَبَ, شَرِبَ, كَبُرَ?", a: ["a, i, u – je nach Verb", "immer a", "immer i", "immer u"], e: "Der zweite Radikal kann im Perfekt alle drei Vokale haben.", w: ["شَرِبَ hat i.", "كَتَبَ hat a.", "كَتَبَ hat a."] },
  { q: "Warum steht in أَكَلَ الطُّلَّابُ das Verb im Singular?", a: ["Das Verb vor einem genannten Fāʿil steht immer im Singular.", "Weil الطُّلَّابُ Singular ist.", "Weil es ein Fehler ist.", "Weil Essen nur einer kann."], e: "Ein Verb kann keine zwei Subjekte haben.", w: ["الطُّلَّابُ ist Plural.", "Es ist richtig so.", "Das hat mit der Bedeutung nichts zu tun."] }
]);

add("b2-06", [
  { q: "Wie heißt „vierzehn Studentinnen“?", a: ["أَرْبَعَ عَشْرَةَ طَالِبَةً", "أَرْبَعَةَ عَشَرَ طَالِبَةً", "أَرْبَعَ عَشَرَةَ طَالِبَاتٍ", "أَرْبَعَةَ عَشْرَةَ طَالِبَةً"], e: "13–19 weiblich: Einer ohne ة, عَشْرَةَ mit ة; Gezähltes Singular Akkusativ.", w: ["Das ist die männliche Form.", "Nach 11–19 Singular im Akkusativ.", "Der Einer hat bei weiblichem Gezählten kein ة."] },
  { q: "Welche Form ist richtig? أَظُنُّ أَنَّ …", a: ["الْجَوَّ حَارٌّ", "الْجَوُّ حَارٌّ", "الْجَوَّ حَارًّا", "الْجَوِّ حَارٌّ"], e: "Nach أَنَّ: Ism im Akkusativ, Khabar im Nominativ.", w: ["Der Ism von anna steht im Akkusativ.", "Die Khabar von anna steht im Nominativ.", "Kein Genitiv nach أَنَّ."] },
  { q: "Welche Form passt? فِي … فَصْلٍ أَنْتَ؟", a: ["أَيِّ", "أَيُّ", "أَيَّ", "أَيٍّ"], e: "Nach فِي steht أَيُّ im Genitiv.", w: ["Nominativ passt nicht nach فِي.", "Akkusativ passt nicht nach فِي.", "أَيُّ ist Muḍāf – kein Tanwīn."] },
  { q: "Was ist das Femininum und der Plural von عَطْشَانُ?", a: ["عَطْشَى – عِطَاشٌ", "عَطْشَانَةٌ – عَطْشَانُونَ", "عُطْشَى – عُطَّاشٌ", "عَطْشَاءُ – عُطْشٌ"], e: "faʿlān → Fem. faʿlā, Pl. fiʿāl.", w: ["Diese Formen lehrt das Buch nicht.", "Die Vokale stimmen nicht.", "faʿlāʾ ist das Muster der Farben."] },
  { q: "Welche Partikel steht nach قَالَ?", a: ["إِنَّ – قَالَ إِنَّهُ مَرِيضٌ", "أَنَّ", "لَعَلَّ", "كَأَنَّ"], e: "Nach قَالَ beginnt die direkte Rede mit إِنَّ.", w: ["أَنَّ steht nach anderen Verben (أَظُنُّ أَنَّ).", "لَعَلَّ heißt „hoffentlich“.", "كَأَنَّ heißt „als ob“."] }
]);

add("b2-07", [
  { q: "Welche Form ist richtig? „Der Lehrer war krank.“", a: ["كَانَ الْمُدَرِّسُ مَرِيضًا.", "كَانَ الْمُدَرِّسَ مَرِيضٌ.", "كَانَ الْمُدَرِّسُ مَرِيضٌ.", "كَانَتِ الْمُدَرِّسُ مَرِيضًا."], e: "ismu kāna Nominativ, khabaru kāna Akkusativ.", w: ["Das ist die Wirkung von إِنَّ, nicht von كَانَ.", "Die Khabar von كَانَ steht im Akkusativ.", "Für ein männliches Subjekt steht كَانَ."] },
  { q: "Wie heißt „du (m.) sahst ihn“?", a: ["رَأَيْتَهُ", "رَأَيْتُهُ", "رَأَيْتِهِ", "رَأَيْتُمُوهُ"], e: "-ta „du“ + -hu „ihn“.", w: ["رَأَيْتُهُ = ich sah ihn.", "رَأَيْتِهِ = du (w.) sahst ihn.", "رَأَيْتُمُوهُ = ihr saht ihn."] },
  { q: "Wie heißt „der Mann mit dem Bart“?", a: ["الرَّجُلُ ذُو اللِّحْيَةِ", "الرَّجُلُ الذُّو لِحْيَةٍ", "الرَّجُلُ ذُو لِحْيَةٍ", "رَجُلٌ ذُو اللِّحْيَةِ"], e: "ذُو hat nie al; für „der … mit dem …“ bekommt das zweite Wort al.", w: ["ذُو kann keinen Artikel haben.", "Das wäre „ein bärtiger“ – passt nicht zu الرَّجُلُ.", "Unbestimmt und bestimmt passen nicht zusammen."] },
  { q: "Was heißt ثُلُثٌ?", a: ["ein Drittel", "dritter", "drei", "dreißig"], e: "Brüche nach fuʿul: ثُلُثٌ, رُبْعٌ, خُمْسٌ …", w: ["„dritter“ ist ثَالِثٌ.", "„drei“ ist ثَلَاثَةٌ.", "„dreißig“ ist ثَلَاثُونَ."] },
  { q: "Wie heißt „wir aßen“?", a: ["أَكَلْنَا", "أَكَلْنَ", "أَكَلْتُمْ", "أَكَلُوا"], e: "-nā = wir.", w: ["أَكَلْنَ = sie (w.) aßen.", "أَكَلْتُمْ = ihr aßt.", "أَكَلُوا = sie (m.) aßen."] }
]);

add("b2-08", [
  { q: "Welche Form passt? أَنْتُنَّ … الدَّرْسَ.", a: ["كَتَبْتُنَّ", "كَتَبْتُمْ", "كَتَبْنَ", "كَتَبْتِ"], e: "ihr (w.) → -tunna.", w: ["-tum ist männlich.", "-na ist „sie (w.)“.", "-ti ist „du (w.)“."] },
  { q: "Wie analysiert man das تُ in ذَهَبْتُ?", a: ["ضَمِيرٌ مُتَّصِلٌ فِي مَحَلِّ رَفْعٍ فَاعِلٌ", "تَاءُ التَّأْنِيثِ", "حَرْفُ عَطْفٍ", "مَفْعُولٌ بِهِ"], e: "Das تُ ist der Fāʿil „ich“.", w: ["Das Femininzeichen ist das تْ in ذَهَبَتْ.", "Es ist kein Bindewort.", "Es ist das Subjekt, nicht das Objekt."] },
  { q: "Welche Endung zeigt „wir“ im Perfekt?", a: ["ـنَا", "ـنَ", "ـتُمْ", "ـُوا"], e: "ذَهَبْنَا – wir gingen.", w: ["ـنَ = sie (w.).", "ـتُمْ = ihr (m.).", "ـُوا = sie (m.)."] },
  { q: "Welche Form passt? الْأَوْلَادُ … إِلَى الْمَدْرَسَةِ.", a: ["ذَهَبُوا", "ذَهَبَ", "ذَهَبْنَ", "ذَهَبَتْ"], e: "Steht das Subjekt vorne, richtet sich das Verb danach im Plural.", w: ["Nach vorangestelltem Plural-Subjekt nicht im Singular.", "ذَهَبْنَ ist weiblich.", "ذَهَبَتْ ist weiblich Singular."] },
  { q: "Welche Form passt? يَا آمِنَةُ، أَيْنَ …؟", a: ["ذَهَبْتِ", "ذَهَبْتَ", "ذَهَبَتْ", "ذَهَبْتُ"], e: "Anrede an eine Frau → du (w.): -ti.", w: ["-ta ist für einen Mann.", "-at heißt „sie“.", "-tu heißt „ich“."] }
]);

add("b2-09", [
  { q: "Welche Form ist richtig? شَاهَدْتُ …", a: ["السَّيَّارَاتِ", "السَّيَّارَاتَ", "السَّيَّارَاتُ", "السَّيَّارَاتًا"], e: "Femininer Plural im Akkusativ: -i.", w: ["-a gibt es beim -āt-Plural nicht.", "-u ist Nominativ.", "Mit al gibt es kein Tanwīn."] },
  { q: "Wie heißt „Er fragte mich“?", a: ["سَأَلَنِي", "سَأَلَي", "سَأَلْتُ", "سَأَلَهُ"], e: "„mich“ am Verb: ـنِي (mit nūn al-wiqāya).", w: ["Am Verb braucht man das nūn.", "سَأَلْتُ = ich fragte.", "سَأَلَهُ = er fragte ihn."] },
  { q: "Welche Form passt? مَا أَجْمَلَ …!", a: ["الْمَسْجِدَ", "الْمَسْجِدُ", "الْمَسْجِدِ", "مَسْجِدٌ"], e: "Nach mā afʿala steht das Bestaunte im Akkusativ.", w: ["Nicht Nominativ.", "Nicht Genitiv.", "Nicht Nominativ mit Tanwīn."] },
  { q: "Welches Relativpronomen passt? الطَّالِبَاتُ … حَضَرْنَ مُجْتَهِدَاتٌ.", a: ["اللَّاتِي", "الَّذِينَ", "الَّتِي", "الَّذِي"], e: "Weiblicher Plural → اللَّاتِي.", w: ["الَّذِينَ ist männlich Plural.", "الَّتِي ist Singular.", "الَّذِي ist männlich Singular."] },
  { q: "Was heißt مِمَّ؟", a: ["wovon? (مِنْ + مَا)", "wer?", "warum?", "womit?"], e: "Vor مَا mit Präposition fällt das Alif weg: مِنْ + مَا → مِمَّ.", w: ["„wer?“ ist مَنْ.", "„warum?“ ist لِمَ.", "„womit?“ ist بِمَ."] }
]);

add("b2-10", [
  { q: "Welche Verbgruppe hat ذَهَبَ يَذْهَبُ?", a: ["a – a", "a – u", "a – i", "i – a"], e: "Perfekt mit a, Muḍāriʿ mit a.", w: ["a–u ist كَتَبَ يَكْتُبُ.", "a–i ist جَلَسَ يَجْلِسُ.", "i–a ist شَرِبَ يَشْرَبُ."] },
  { q: "Welches Zeichen hat der Muḍāriʿ im Indikativ am Ende?", a: ["Ḍamma: يَكْتُبُ", "Fatḥa", "Kasra", "Sukūn"], e: "Ohne Partikel ist der Muḍāriʿ marfūʿ.", w: ["Fatḥa kommt nach أَنْ/لَنْ.", "Verben haben kein Kasra am Ende.", "Sukūn kommt nach لَمْ."] },
  { q: "Wie heißt „21 Bücher“?", a: ["وَاحِدٌ وَعِشْرُونَ كِتَابًا", "وَاحِدُ وَعِشْرُونَ كِتَابٍ", "عِشْرُونَ وَوَاحِدٌ كِتَابًا", "وَاحِدٌ وَعِشْرُونَ كُتُبًا"], e: "Einer + وَ + Zehner; Gezähltes Singular Akkusativ.", w: ["Das Gezählte steht im Akkusativ, der Einer hat Tanwīn.", "Der Einer steht vorne.", "Nach 21–99 kein Plural."] },
  { q: "Wie heißt „Viertel vor zehn“?", a: ["الْعَاشِرَةُ إِلَّا رُبْعًا", "الْعَاشِرَةُ وَالرُّبْعُ", "الْعَاشِرَةُ إِلَّا رُبْعٌ", "الْعَاشِرَةُ وَرُبْعًا"], e: "إِلَّا „außer“, danach Akkusativ.", w: ["„und Viertel“ heißt Viertel nach.", "Nach إِلَّا steht Akkusativ.", "„und“ heißt nicht „vor“."] },
  { q: "Wie heißt „zwischen dem Haus und der Moschee“?", a: ["بَيْنَ الْبَيْتِ وَالْمَسْجِدِ", "بَيْنَ الْبَيْتُ وَالْمَسْجِدُ", "بَيْنَ الْبَيْتَ وَالْمَسْجِدَ", "بَيْنَ بَيْتٍ الْمَسْجِدِ"], e: "بَيْنَ ist Muḍāf, danach Genitiv; die zwei Dinge werden mit وَ verbunden.", w: ["Nach بَيْنَ steht Genitiv, nicht Nominativ.", "Nach بَيْنَ steht Genitiv, nicht Akkusativ.", "Die zwei Dinge werden mit وَ verbunden."] }
]);

add("b2-11", [
  { q: "Wie heißt „Wir werden reisen“?", a: ["سَنُسَافِرُ", "سَافَرْنَا", "لَنْ نُسَافِرَ", "نُسَافِرُ سَـ"], e: "سَـ + Muḍāriʿ = Futur.", w: ["سَافَرْنَا ist Vergangenheit.", "لَنْ verneint das Futur.", "سَـ steht vorne am Verb."] },
  { q: "Was ist der Maṣdar von خَرَجَ?", a: ["خُرُوجٌ", "خَارِجٌ", "مَخْرَجٌ", "خَرِيجٌ"], e: "Muster fuʿūl: دُخُولٌ, خُرُوجٌ, جُلُوسٌ.", w: ["خَارِجٌ heißt „draußen/hinausgehend“.", "مَخْرَجٌ ist der Ausgang (Ort).", "Diese Form ist nicht der Maṣdar."] },
  { q: "Welche Form passt? أَمَّا أَخِي … طَبِيبٌ.", a: ["فَهُوَ", "هُوَ", "وَهُوَ", "ثُمَّ هُوَ"], e: "Nach أَمَّا beginnt die Khabar mit فَـ.", w: ["Ohne فَـ ist es nach أَمَّا falsch.", "وَ ersetzt nicht das فَـ.", "ثُمَّ heißt „dann“."] },
  { q: "Wie heißt „sie (eine Frau) schreibt“?", a: ["تَكْتُبُ", "يَكْتُبُ", "تَكْتُبِينَ", "يَكْتُبْنَ"], e: "Für „sie“ (Sg.) steht تَـ – gleich wie „du (m.)“.", w: ["يَـ ist „er“.", "تَكْتُبِينَ = du (w.).", "يَكْتُبْنَ = sie (w. Pl.)."] },
  { q: "Wie verneint man سَأَذْهَبُ?", a: ["لَنْ أَذْهَبَ", "لَا سَأَذْهَبُ", "مَا سَأَذْهَبُ", "لَمْ أَذْهَبْ"], e: "Das Futur wird mit لَنْ verneint (Lektion 19); سَـ fällt weg.", w: ["لَا steht nicht vor سَـ.", "مَا verneint das Perfekt.", "لَمْ verneint die Vergangenheit."] }
]);

add("b2-12", [
  { q: "Wie heißt „Wohin gehst du (w.)?“", a: ["أَيْنَ تَذْهَبِينَ؟", "أَيْنَ تَذْهَبُ؟", "أَيْنَ تَذْهَبْنَ؟", "أَيْنَ ذَهَبْتِ؟"], e: "du (w.) → ta…īna.", w: ["تَذْهَبُ ist du (m.) oder sie.", "تَذْهَبْنَ = ihr (w.).", "ذَهَبْتِ ist Perfekt."] },
  { q: "Was ist يَوْمَ in سَأَرْجِعُ يَوْمَ الْأَحَدِ?", a: ["Mafʿūl fīhi (Zeitadverb) im Akkusativ", "Mafʿūl bihī", "Fāʿil", "Khabar"], e: "Ein Nomen, das die Zeit angibt, steht im Akkusativ.", w: ["Es ist nicht das, was man zurückbringt.", "Der Fāʿil ist „ich“.", "Es ist ein Verbalsatz."] },
  { q: "Wie heißt Mittwoch?", a: ["يَوْمُ الْأَرْبِعَاءِ", "يَوْمُ الْخَمِيسِ", "يَوْمُ الثُّلَاثَاءِ", "يَوْمُ الْأَحَدِ"], e: "الْأَرْبِعَاءُ – der „vierte“ Tag.", w: ["الْخَمِيسُ ist Donnerstag.", "الثُّلَاثَاءُ ist Dienstag.", "الْأَحَدُ ist Sonntag."] },
  { q: "Welche Partikel passt? قَالَ الْمُدِيرُ … الِاجْتِمَاعَ غَدًا.", a: ["إِنَّ", "أَنَّ", "لَعَلَّ", "لَنْ"], e: "Nach قَالَ steht إِنَّ.", w: ["أَنَّ steht nach anderen Verben.", "„hoffentlich“ passt nicht.", "لَنْ steht vor Verben."] },
  { q: "Wie heißt „wir trinken“?", a: ["نَشْرَبُ", "أَشْرَبُ", "تَشْرَبْنَ", "يَشْرَبُونَ"], e: "نَـ = wir.", w: ["أَشْرَبُ = ich trinke.", "تَشْرَبْنَ = ihr (w.) trinkt.", "يَشْرَبُونَ = sie (m. Pl.) trinken."] }
]);

add("b2-13", [
  { q: "Was ist in تَكْتُبُونَ das ن?", a: ["das Zeichen des Indikativs", "der Fāʿil", "das Objekt", "das nūn der Frauen"], e: "Der Fāʿil ist das و; das ن zeigt den Indikativ.", w: ["Fāʿil ist das و.", "Es gibt kein Objekt im Wort.", "Das nūn der Frauen ist in تَكْتُبْنَ."] },
  { q: "Welche Form heißt „ihr (m.) schreibt“?", a: ["تَكْتُبُونَ", "يَكْتُبُونَ", "تَكْتُبْنَ", "تَكْتُبِينَ"], e: "ta…ūna = ihr (m.).", w: ["يَكْتُبُونَ = sie (m.) schreiben.", "تَكْتُبْنَ = ihr (w.) schreibt.", "تَكْتُبِينَ = du (w.) schreibst."] },
  { q: "Was ist in يَكْتُبُ der Fāʿil?", a: ["ein unsichtbares Pronomen (هُوَ)", "das يَـ", "das Ḍamma", "das ت"], e: "يَـ ist nur das Zeichen des Muḍāriʿ.", w: ["يَـ ist das Präfix, nicht der Fāʿil.", "Das Ḍamma ist das Indikativzeichen.", "Es gibt kein ت in يَكْتُبُ."] },
  { q: "Welche zwei Personen haben dieselbe Form يَذْهَبْنَ / تَذْهَبْنَ?", a: ["sie (w. Pl.) / ihr (w.) – unterschieden durch يَـ und تَـ", "er / sie", "ich / wir", "du (m.) / sie (Sg.)"], e: "Beide haben das nūn der Frauen, nur das Präfix unterscheidet sie.", w: ["„er“ ist يَذْهَبُ.", "„ich“ ist أَذْهَبُ, „wir“ نَذْهَبُ.", "Das ist تَذْهَبُ für beide."] },
  { q: "Welche Form ist „sie (m. Pl.) sitzen“?", a: ["يَجْلِسُونَ", "تَجْلِسُونَ", "يَجْلِسْنَ", "جَلَسُوا"], e: "ya…ūna = sie (m. Pl.).", w: ["تَجْلِسُونَ = ihr (m.) sitzt.", "يَجْلِسْنَ = sie (w. Pl.) sitzen.", "جَلَسُوا ist Perfekt."] }
]);

add("b2-14", [
  { q: "Wie heißt der Amr von تَشْرَبُ?", a: ["اِشْرَبْ", "اُشْرُبْ", "شْرَبْ", "تَشْرَبْ"], e: "Zweiter Radikal mit a → Hamzat al-waṣl mit i.", w: ["u nur bei u im Muḍāriʿ (اُكْتُبْ).", "Ohne Hilfsvokal kann man nicht beginnen.", "Das tā fällt weg."] },
  { q: "Wie heißt „nimm!“?", a: ["خُذْ", "اُؤْخُذْ", "أَخَذَ", "تَأْخُذْ"], e: "Unregelmäßig wie كُلْ – das Hamza fällt weg.", w: ["Diese Form benutzt man nicht.", "أَخَذَ ist Perfekt.", "Das ta- fällt beim Amr weg."] },
  { q: "Welche Form passt? يَا أَخَوَاتُ، … الدَّرْسَ.", a: ["اُكْتُبْنَ", "اُكْتُبُوا", "اُكْتُبِي", "اُكْتُبْ"], e: "Befehl an mehrere Frauen: -na.", w: ["-ū ist an mehrere Männer.", "-ī ist an eine Frau.", "Ohne Endung an einen Mann."] },
  { q: "Warum heißt es اِغْسِلِ الْيَدَ mit Kasra?", a: ["Gegen zwei Sukūn hintereinander (vor al)", "Weil الْيَدَ weiblich ist", "Weil es ein Verbot ist", "Weil es Genitiv ist"], e: "اِغْسِلْ + الْيَدَ → اِغْسِلِ الْيَدَ.", w: ["Das Geschlecht spielt keine Rolle.", "Es ist ein Befehl, kein Verbot.", "Verben haben keinen Genitiv."] },
  { q: "Was bedeutet فَإِنَّ in اُدْخُلْ فَإِنَّ الدَّرْسَ قَدْ بَدَأَ?", a: ["denn", "aber", "oder", "bevor"], e: "فَإِنَّ gibt den Grund an: „Tritt ein, denn der Unterricht hat begonnen.“", w: ["„aber“ ist لَكِنَّ.", "„oder“ ist أَوْ.", "„bevor“ ist قَبْلَ أَنْ."] }
]);

add("b2-15", [
  { q: "Wie heißt „Sprecht nicht!“ zu mehreren Männern?", a: ["لَا تَتَكَلَّمُوا", "لَا تَتَكَلَّمُونَ", "لَا تَتَكَلَّمْ", "لَا تَتَكَلَّمْنَ"], e: "Jussiv: das nūn fällt weg.", w: ["Mit nūn ist es eine Aussage.", "Das ist an einen Mann.", "Das ist an Frauen."] },
  { q: "Welche Form ist das Verbot „Setz dich (w.) nicht!“?", a: ["لَا تَجْلِسِي", "لَا تَجْلِسِينَ", "لَا تَجْلِسْ", "مَا تَجْلِسِي"], e: "nūn fällt weg nach لَا النَّاهِيَة.", w: ["Mit nūn ist es „du sitzt nicht“.", "Das ist an einen Mann.", "مَا verbietet nicht."] },
  { q: "Welche Rolle hat يَضْحَكُ in كَادَ الْوَلَدُ يَضْحَكُ?", a: ["Khabar von kāda (Verbalsatz)", "Fāʿil", "Objekt", "Naʿt"], e: "كَادَ wirkt wie كَانَ: Ism + Khabar.", w: ["Der Ism ist الْوَلَدُ.", "Es gibt kein Objekt.", "Es beschreibt nicht das Nomen."] },
  { q: "Wie heißt „ich nehme“?", a: ["آخُذُ", "أَأْخُذُ", "أَخَذْتُ", "خُذْ"], e: "Zwei Hamzas am Anfang → آ.", w: ["Die zwei Hamzas werden zusammengezogen.", "Das ist Perfekt.", "Das ist der Befehl."] },
  { q: "Was bedeutet إِنَّمَا أَنَا طَالِبٌ?", a: ["Ich bin nur ein Student.", "Ich bin wirklich Student.", "Ich bin kein Student.", "Bin ich Student?"], e: "إِنَّمَا = „nur“.", w: ["„wirklich“ wäre إِنِّي.", "Es ist keine Verneinung.", "Es ist keine Frage."] }
]);

add("b2-16", [
  { q: "Wie heißt „Was möchtest du (w.)?“", a: ["مَاذَا تُرِيدِينَ؟", "مَاذَا تُرِيدُ؟", "مَاذَا تُرِدْنَ؟", "مَاذَا أُرِيدُ؟"], e: "du (w.) → tu…īna.", w: ["تُرِيدُ ist du (m.).", "تُرِدْنَ ist ihr (w.).", "أُرِيدُ = ich."] },
  { q: "Welche Form ist richtig? رَأَيْتُ رَجُلًا …", a: ["ذَا لِحْيَةٍ", "ذُو لِحْيَةٍ", "ذِي لِحْيَةٍ", "ذَا لِحْيَةً"], e: "ذُو im Akkusativ → ذَا.", w: ["ذُو ist Nominativ.", "ذِي ist Genitiv.", "Nach ذَا steht Genitiv."] },
  { q: "Wie heißt „eine schwarze Tasche“?", a: ["حَقِيبَةٌ سَوْدَاءُ", "حَقِيبَةٌ أَسْوَدُ", "حَقِيبَةٌ سَوْدَاءٌ", "حَقِيبَةٌ أَسْوَدَةٌ"], e: "Femininum der Farben nach faʿlāʾ – ohne Tanwīn.", w: ["أَسْوَدُ ist männlich.", "faʿlāʾ ist diptot.", "Diese Form gibt es nicht."] },
  { q: "Welche Rolle hat الْحُسَيْنُ in جَاءَ أَخُوكَ الْحُسَيْنُ?", a: ["Badal (Apposition)", "Naʿt", "Fāʿil", "Khabar"], e: "Ein Name, der das Wort davor näher erklärt, ist Badal.", w: ["Ein Name ist kein Adjektiv.", "Der Fāʿil ist أَخُوكَ.", "Es gibt keinen Nominalsatz."] },
  { q: "Wie heißt „ein anderes Buch“?", a: ["كِتَابٌ آخَرُ", "كِتَابٌ آخَرٌ", "كِتَابٌ أُخْرَى", "آخَرُ كِتَابٍ"], e: "آخَرُ ist diptot; feminin أُخْرَى.", w: ["آخَرُ hat kein Tanwīn.", "كِتَابٌ ist männlich.", "So heißt es „das letzte Buch“ nicht – und es steht nach dem Nomen."] }
]);

add("b2-17", [
  { q: "Welche Form ist richtig? أُرِيدُ أَنْ …", a: ["أَشْرَبَ", "أَشْرَبُ", "أَشْرَبْ", "شَرِبْتُ"], e: "Nach أَنْ: Subjunktiv mit -a.", w: ["-u ist Indikativ.", "Sukūn ist Jussiv.", "Nach أَنْ steht kein Perfekt (hier)."] },
  { q: "Wie heißt „Kannst du mir helfen?“", a: ["أَيُمْكِنُكَ أَنْ تُسَاعِدَنِي؟", "أَيُمْكِنُكَ تُسَاعِدُنِي؟", "أَتُمْكِنُ أَنْ تُسَاعِدَنِي؟", "أَيُمْكِنُكَ أَنْ تُسَاعِدُنِي؟"], e: "يُمْكِنُ + Pronomen + أَنْ + Subjunktiv.", w: ["أَنْ fehlt.", "يُمْكِنُ bleibt in der 3. Person.", "Nach أَنْ steht -a."] },
  { q: "Was bedeutet مُنْذُ أُسْبُوعٍ?", a: ["seit einer Woche", "nach einer Woche", "vor einer Woche", "in einer Woche"], e: "مُنْذُ = seit.", w: ["„nach“ ist بَعْدَ.", "„vor“ (zeitlich) ist قَبْلَ.", "„in“ ist فِي."] },
  { q: "Welche Form passt? دَخَلَتْ … الْفَصْلَ.", a: ["آمِنَةُ", "مُحَمَّدٌ", "الطُّلَّابُ", "بِلَالٌ"], e: "Ein weibliches Verb gehört zu einem weiblichen Fāʿil.", w: ["مُحَمَّدٌ ist männlich.", "Männliche Personen → دَخَلَ.", "بِلَالٌ ist männlich."] },
  { q: "Was ist أَنْ أَذْهَبَ in أُرِيدُ أَنْ أَذْهَبَ?", a: ["ein Maṣdar muʾawwal an der Stelle des Objekts", "der Fāʿil", "ein Adjektiv", "eine Frage"], e: "„dass ich gehe“ = „das Gehen“ – Objekt von أُرِيدُ.", w: ["Der Fāʿil ist „ich“.", "Es beschreibt kein Nomen.", "Es ist keine Frage."] }
]);

add("b2-18", [
  { q: "Welche Form passt? تُرِيدِينَ أَنْ …", a: ["تَذْهَبِي", "تَذْهَبِينَ", "تَذْهَبْ", "تَذْهَبَ"], e: "Nach أَنْ fällt das nūn von تَذْهَبِينَ weg.", w: ["Mit nūn ist es Indikativ.", "Das ist der Jussiv an einen Mann.", "Das ist „du (m.)“."] },
  { q: "Wie heißt „das ganze Haus“ (als Objekt)?", a: ["الْبَيْتَ كُلَّهُ", "الْبَيْتَ كُلِّهِ", "الْبَيْتَ كُلُّهُ", "الْبَيْتُ كُلَّهُ"], e: "كُلَّهُ folgt als Taʾkīd im selben Fall wie das Objekt (Akkusativ).", w: ["Der Taʾkīd steht nicht im Genitiv.", "Der Taʾkīd steht im selben Fall wie das Objekt.", "Das Objekt steht im Akkusativ."] },
  { q: "Wie ruft man „O ihr Gläubigen!“?", a: ["يَا أَيُّهَا الْمُؤْمِنُونَ", "يَا الْمُؤْمِنُونَ", "يَا أَيُّهَا الْمُؤْمِنِينَ", "أَيُّهَا يَا الْمُؤْمِنُونَ"], e: "Vor einem Wort mit al steht أَيُّهَا; das Nomen bleibt im Nominativ.", w: ["يَا direkt vor al geht nicht.", "Nach أَيُّهَا steht der Nominativ.", "يَا steht vorne."] },
  { q: "Welche Form ist richtig? „wie der Mond“", a: ["كَالْقَمَرِ", "كَالْقَمَرُ", "كَالْقَمَرَ", "كَقَمَرٌ"], e: "كَـ ist eine Präposition → Genitiv.", w: ["Nach كَـ steht Genitiv.", "Nach كَـ steht Genitiv.", "Nach كَـ steht Genitiv."] },
  { q: "Welche Formen bleiben nach أَنْ unverändert?", a: ["يَذْهَبْنَ und تَذْهَبْنَ", "يَذْهَبُونَ und تَذْهَبُونَ", "يَذْهَبُ und تَذْهَبُ", "أَذْهَبُ und نَذْهَبُ"], e: "Die Formen mit dem nūn der Frauen sind mabnī.", w: ["Bei ihnen fällt das nūn weg.", "Sie bekommen -a.", "Sie bekommen -a."] }
]);

add("b2-19", [
  { q: "Wie heißt „Sie (m. Pl.) werden nicht kommen“?", a: ["لَنْ يَحْضُرُوا", "لَنْ يَحْضُرُونَ", "لَا سَيَحْضُرُونَ", "لَمْ يَحْضُرُوا"], e: "Nach لَنْ fällt das nūn weg.", w: ["Mit nūn ist es Indikativ.", "سَـ fällt nach لَنْ weg, لَا passt nicht.", "لَمْ verneint die Vergangenheit."] },
  { q: "Welches Wort verstärkt ein verneintes Futur?", a: ["أَبَدًا", "قَطُّ", "جِدًّا", "أَيْضًا"], e: "لَنْ أَفْعَلَ ذَلِكَ أَبَدًا – niemals.", w: ["قَطُّ verstärkt die verneinte Vergangenheit.", "جِدًّا heißt „sehr“.", "أَيْضًا heißt „auch“."] },
  { q: "Welcher Fall steht nach لَنْ?", a: ["Subjunktiv (manṣūb)", "Jussiv (majzūm)", "Indikativ (marfūʿ)", "Genitiv"], e: "لَنْ verhält sich wie أَنْ.", w: ["Jussiv nach لَمْ.", "Indikativ ohne Partikel.", "Verben haben keinen Genitiv."] },
  { q: "Welche Form ist richtig? „Ich werde dich nie vergessen.“", a: ["لَنْ أَنْسَاكَ أَبَدًا.", "لَنْ أَنْسَاكَ قَطُّ.", "لَا سَأَنْسَاكَ أَبَدًا.", "مَا أَنْسَاكَ أَبَدًا."], e: "Futur → لَنْ … أَبَدًا.", w: ["قَطُّ gehört zur Vergangenheit.", "سَـ fällt nach der Verneinung weg.", "مَا verneint nicht das Futur."] },
  { q: "Wie heißt „Ich ging nicht“ – „Ich gehe nicht“ – „Ich werde nicht gehen“?", a: ["مَا ذَهَبْتُ – لَا أَذْهَبُ – لَنْ أَذْهَبَ", "لَا ذَهَبْتُ – مَا أَذْهَبُ – لَنْ أَذْهَبُ", "لَنْ ذَهَبْتُ – لَا أَذْهَبُ – مَا أَذْهَبَ", "مَا ذَهَبْتُ – لَنْ أَذْهَبُ – لَا أَذْهَبَ"], e: "Perfekt مَا, Präsens لَا, Futur لَنْ (+ Subjunktiv).", w: ["Die Partikeln sind vertauscht; nach لَنْ steht -a.", "لَنْ steht nicht vor dem Perfekt.", "Nach لَنْ -a, nach لَا -u."] }
]);

add("b2-20", [
  { q: "Welche Form passt? رَأَيْتُ …", a: ["الْمُدَرِّسَيْنِ", "الْمُدَرِّسَانِ", "الْمُدَرِّسَيْنُ", "الْمُدَرِّسَانَ"], e: "Dual als Objekt: -aini.", w: ["-āni ist Nominativ.", "Diese Endung gibt es nicht.", "Diese Endung gibt es nicht."] },
  { q: "Wie heißt „mit zwei Freunden“?", a: ["مَعَ صَدِيقَيْنِ", "مَعَ صَدِيقَانِ", "مَعَ صَدِيقَيْ", "مَعَ صَدِيقٍ اثْنَيْنِ"], e: "Nach مَعَ Genitiv: -aini.", w: ["-āni ist Nominativ.", "Das nūn fällt nur als Muḍāf weg.", "Der Dual reicht."] },
  { q: "Welche Form ist richtig? „die zwei Bücher des Lehrers“ (Nominativ)", a: ["كِتَابَا الْمُدَرِّسِ", "كِتَابَانِ الْمُدَرِّسِ", "الْكِتَابَانِ الْمُدَرِّسِ", "كِتَابَيْنِ الْمُدَرِّسِ"], e: "Als Muḍāf verliert der Dual sein nūn.", w: ["Das nūn fällt als Muḍāf weg.", "Ein Muḍāf hat kein al.", "Nominativ verlangt -ā."] },
  { q: "Wie heißt „eine von beiden … die andere“ (weiblich)?", a: ["إِحْدَاهُمَا … وَالْأُخْرَى", "أَحَدُهُمَا … وَالْآخَرُ", "وَاحِدَةٌ … وَالثَّانِيَةُ", "إِحْدَى … وَآخَرُ"], e: "Femininum: إِحْدَى / الْأُخْرَى.", w: ["Das ist die männliche Form.", "So sagt das Buch es nicht.", "Mischt weiblich und männlich."] },
  { q: "Welche Endung hat der Dual im Genitiv?", a: ["-aini (ـَيْنِ)", "-āni (ـَانِ)", "-īna (ـِينَ)", "-ūna (ـُونَ)"], e: "Genitiv und Akkusativ: -aini.", w: ["-āni ist Nominativ.", "-īna ist der m. Plural.", "-ūna ist der m. Plural."] }
]);

add("b2-21", [
  { q: "Welche Form ist richtig? „Er hat nicht geschrieben.“", a: ["لَمْ يَكْتُبْ", "لَمْ يَكْتُبُ", "لَمْ كَتَبَ", "لَا كَتَبَ"], e: "لَمْ + Muḍāriʿ im Jussiv.", w: ["Nach لَمْ kein -u.", "لَمْ steht nicht vor dem Perfekt.", "So verneint man das Perfekt nicht."] },
  { q: "Was ist das Jussivzeichen bei يَكْتُبُونَ nach لَمْ?", a: ["der Wegfall des nūn", "das Sukūn", "das Fatḥa", "das Kasra"], e: "لَمْ يَكْتُبُوا.", w: ["Sukūn bei den Formen ohne nūn.", "Fatḥa ist Subjunktiv.", "Kasra ist kein Zeichen beim Verb."] },
  { q: "Was bedeutet لَمَّا يَحْضُرِ الْمُدِيرُ?", a: ["Der Direktor ist noch nicht gekommen.", "Als der Direktor kam …", "Der Direktor kam nicht.", "Der Direktor wird nicht kommen."], e: "لَمَّا + Jussiv = „noch nicht“.", w: ["„als“ ist لَمَّا mit Perfekt (Lektion 29).", "Das wäre لَمْ – ohne „noch“.", "Das wäre لَنْ."] },
  { q: "Zu welcher Wortart gehört هَذَا?", a: ["Nomen (ism)", "Verb (fiʿl)", "Partikel (ḥarf)", "keiner"], e: "Demonstrative sind Nomen.", w: ["Es ist kein Verb.", "Es ist keine Partikel.", "Jedes Wort gehört zu einer der drei Arten."] },
  { q: "Wie heißt „Ich habe weder Geld noch Zeit“?", a: ["مَا عِنْدِي مَالٌ وَلَا وَقْتٌ.", "لَا عِنْدِي مَالٌ وَلَا وَقْتٌ.", "مَا عِنْدِي مَالٌ وَمَا وَقْتٌ.", "لَيْسَ عِنْدِي مَالٌ أَوْ وَقْتٌ."], e: "مَا … وَلَا … = weder … noch.", w: ["Am Anfang steht hier مَا.", "Das zweite Glied wird mit وَلَا angeschlossen.", "Das heißt „kein Geld oder Zeit“."] }
]);

add("b2-22", [
  { q: "Welcher Modus steht nach لَا النَّاهِيَة?", a: ["Jussiv (majzūm)", "Subjunktiv (manṣūb)", "Indikativ (marfūʿ)", "kein Modus"], e: "لَا تَذْهَبْ – Sukūn.", w: ["Subjunktiv nach أَنْ/لَنْ.", "Indikativ beim verneinenden lā.", "Das Verb hat einen Modus."] },
  { q: "Welche Form ist der Subjunktiv von يَشْرَبُونَ?", a: ["يَشْرَبُوا", "يَشْرَبُونَ", "يَشْرَبُونَا", "يَشْرَبْ"], e: "Das nūn fällt weg.", w: ["Das ist der Indikativ.", "Diese Form gibt es nicht.", "Das ist der Jussiv „er“."] },
  { q: "Woran unterscheidet man أَنْ يَذْهَبَ und لَمْ يَذْهَبْ?", a: ["Fatḥa (Subjunktiv) gegen Sukūn (Jussiv)", "an nichts", "am Präfix", "am nūn"], e: "Bei den Formen ohne nūn sieht man den Unterschied.", w: ["Hier sieht man ihn.", "Das Präfix ist gleich.", "Es gibt hier kein nūn."] },
  { q: "Welche Partikel setzt den Muḍāriʿ in den Subjunktiv?", a: ["لَنْ", "لَمْ", "لَمَّا", "لَا (Verbot)"], e: "أَنْ, لَنْ und lām at-taʿlīl → manṣūb.", w: ["لَمْ → majzūm.", "لَمَّا → majzūm.", "لَا النَّاهِيَة → majzūm."] },
  { q: "Welche Form ist richtig? „damit sie (m. Pl.) beten“", a: ["لِيُصَلُّوا", "لِيُصَلُّونَ", "لِيُصَلِّيَ", "لِيُصَلُّ"], e: "Nach lām at-taʿlīl Subjunktiv: nūn fällt weg.", w: ["Mit nūn ist es Indikativ.", "Das ist Singular.", "Diese Form gibt es nicht."] }
]);

add("b2-23", [
  { q: "Welche Form ist richtig? سَلَّمْتُ عَلَى …", a: ["الْمُهَنْدِسِينَ", "الْمُهَنْدِسُونَ", "الْمُهَنْدِسِينِ", "الْمُهَنْدِسَاتَ"], e: "m. Plural im Genitiv: -īna.", w: ["-ūna ist Nominativ.", "Die Endung ist -īna mit Fatḥa auf dem n.", "Das ist femininer Plural im falschen Fall."] },
  { q: "Wie heißt „Ich habe vierzig Riyal“?", a: ["عِنْدِي أَرْبَعُونَ رِيَالًا.", "عِنْدِي أَرْبَعِينَ رِيَالًا.", "عِنْدِي أَرْبَعُونَ رِيَالٍ.", "عِنْدِي أَرْبَعُونَ رِيَالَاتٍ."], e: "Subjekt → -ūna; Gezähltes Singular Akkusativ.", w: ["Als Subjekt steht -ūna.", "Nach 20–90 Akkusativ.", "Kein Plural nach den Zehnern."] },
  { q: "Was passiert mit مُهَنْدِسُونَ als Muḍāf?", a: ["Das nūn fällt weg: مُهَنْدِسُو الشَّرِكَةِ", "Es bekommt Tanwīn", "Es bekommt al", "Nichts"], e: "Wie beim Dual fällt das nūn im Muḍāf weg.", w: ["Der Plural hat kein Tanwīn.", "Ein Muḍāf hat kein al.", "Das nūn fällt weg."] },
  { q: "Wie heißt „22 Studentinnen“?", a: ["اثْنَتَانِ وَعِشْرُونَ طَالِبَةً", "اثْنَانِ وَعِشْرُونَ طَالِبَةً", "اثْنَتَانِ وَعِشْرِينَ طَالِبَةً", "اثْنَتَا وَعِشْرُونَ طَالِبَةً"], e: "Weiblich: اثْنَتَانِ; Zehner im Nominativ.", w: ["اثْنَانِ ist männlich.", "Der Zehner richtet sich nach dem Satzfall (hier Nominativ).", "Vor وَ bleibt das nūn."] },
  { q: "Wie heißt „Er hat weder gegessen noch getrunken“?", a: ["لَا أَكَلَ وَلَا شَرِبَ", "لَا أَكَلَ أَوْ شَرِبَ", "لَمْ أَكَلَ وَلَمْ شَرِبَ", "لَنْ أَكَلَ وَلَنْ شَرِبَ"], e: "Bei „weder … noch“ in der Vergangenheit: لَا … وَلَا …", w: ["Das zweite Glied braucht وَلَا.", "لَمْ steht vor dem Muḍāriʿ.", "لَنْ steht vor dem Muḍāriʿ."] }
]);

add("b2-24", [
  { q: "Wie heißt „500 Riyal“?", a: ["خَمْسُمِائَةِ رِيَالٍ", "خَمْسَةُ مِائَةِ رِيَالٍ", "خَمْسُمِائَةُ رِيَالٍ", "خَمْسُمِائَةِ رِيَالًا"], e: "Zahl + مِائَةِ in einem Wort; Gezähltes Singular Genitiv.", w: ["مِائَة ist weiblich – Zahl ohne ة, zusammengeschrieben.", "مِائَةِ ist Muḍāf ilaihi (Genitiv).", "Nach 100 steht Genitiv."] },
  { q: "Welche Form ist richtig? „Ich möchte zwanzig Riyal.“", a: ["أُرِيدُ عِشْرِينَ رِيَالًا.", "أُرِيدُ عِشْرُونَ رِيَالًا.", "أُرِيدُ عِشْرِينَ رِيَالٍ.", "أُرِيدُ عِشْرِينَ رِيَالَاتٍ."], e: "Objekt → -īna; Gezähltes Akkusativ.", w: ["Als Objekt steht -īna.", "Nach den Zehnern Akkusativ.", "Kein Plural."] },
  { q: "Wie heißt „5000 Riyal“?", a: ["خَمْسَةُ آلَافِ رِيَالٍ", "خَمْسُ آلَافِ رِيَالٍ", "خَمْسَةُ أَلْفِ رِيَالٍ", "خَمْسَةُ آلَافٍ رِيَالًا"], e: "أَلْفٌ ist männlich → خَمْسَةُ; Plural آلَافٌ.", w: ["أَلْفٌ ist männlich – Zahl mit ة.", "Nach 3–10 steht der Plural آلَافِ.", "آلَافِ ist Muḍāf, danach Genitiv."] },
  { q: "Was bedeutet عِنْدِي عَشَرَةٌ (ohne Gezähltes)?", a: ["Ich habe zehn (davon).", "Ich habe ein Zehntel.", "Ich bin zehn.", "Ich habe den zehnten."], e: "Fällt das Gezählte weg, bekommt die Zahl Tanwīn.", w: ["Ein Zehntel ist عُشْرٌ.", "Das wäre anders gebildet.", "Der zehnte ist الْعَاشِرُ."] },
  { q: "Welche Zahl hat dasselbe Geschlecht wie das Gezählte?", a: ["1 und 2", "3–10", "13–19 (Einer)", "100"], e: "وَاحِدٌ/وَاحِدَةٌ, اثْنَانِ/اثْنَتَانِ stimmen überein.", w: ["3–10 haben das umgekehrte Geschlecht.", "Der Einer bei 13–19 hat das umgekehrte Geschlecht.", "مِائَةٌ ändert sich nicht."] }
]);

add("b2-25", [
  { q: "Welche Form ist richtig? „Die Tür war offen.“", a: ["كَانَ الْبَابُ مَفْتُوحًا.", "كَانَ الْبَابَ مَفْتُوحًا.", "كَانَ الْبَابُ مَفْتُوحٌ.", "كَانَتِ الْبَابُ مَفْتُوحًا."], e: "ismu kāna Nominativ, khabaru kāna Akkusativ.", w: ["Der Ism bleibt im Nominativ.", "Die Khabar steht im Akkusativ.", "الْبَابُ ist männlich."] },
  { q: "Wie heißt „Er ist immer noch Student“?", a: ["لَا يَزَالُ طَالِبًا.", "لَا يَزَالُ طَالِبٌ.", "مَا زَالَ طَالِبٌ.", "لَا يَزَالُ بِطَالِبٍ."], e: "لَا يَزَالُ wirkt wie كَانَ: Khabar im Akkusativ.", w: ["Die Khabar steht im Akkusativ.", "Auch hier Akkusativ.", "بِـ gehört zu لَيْسَ."] },
  { q: "Wie heißt „mit seinem Bruder“?", a: ["مَعَ أَخِيهِ", "مَعَ أَخُوهُ", "مَعَ أَخَاهُ", "مَعَ أَخِهِ"], e: "Genitiv: أَخِي… mit ي.", w: ["أَخُو… ist Nominativ.", "أَخَا… ist Akkusativ.", "Das ي fehlt."] },
  { q: "Was bedeutet مِنْ قَبْلُ?", a: ["vorher, früher", "vor dem …", "nachher", "seitdem"], e: "Ohne Muḍāf ilaihi werden قَبْلُ/بَعْدُ unveränderlich mit Ḍamma.", w: ["„vor dem …“ braucht ein Muḍāf ilaihi.", "„nachher“ ist مِنْ بَعْدُ.", "„seitdem“ ist مُنْذُ ذَلِكَ."] },
  { q: "Was ist der Plural von جَرِيحٌ?", a: ["جَرْحَى", "جَرِيحُونَ", "جُرَحَاءُ", "أَجْرَاحٌ"], e: "faʿīl → faʿlā (diptot): مَرْضَى, قَتْلَى, أَسْرَى, جَرْحَى.", w: ["Diese Form lehrt das Buch nicht.", "Diese Form gibt es nicht.", "Diese Form gibt es nicht."] }
]);

add("b2-26", [
  { q: "Wie heißt das Präsens von وَقَفَ?", a: ["يَقِفُ", "يَوْقِفُ", "يُوقِفُ", "يَقُوفُ"], e: "Mithāl: das و fällt im Muḍāriʿ weg.", w: ["Das و fällt weg.", "Das ist ein anderes Verb (anhalten lassen).", "Das wäre ein Ajwaf-Muster."] },
  { q: "Wie heißt der Imperativ von تَقِفُ?", a: ["قِفْ", "اِقِفْ", "وَقِفْ", "قِفِي"], e: "Kein Hamzat al-waṣl nötig: قِفْ (an einen Mann).", w: ["Ohne vokallosen Anfang braucht man kein i.", "Das و fällt weg.", "قِفِي ist an eine Frau."] },
  { q: "Was ist der Diminutiv von كَلْبٌ?", a: ["كُلَيْبٌ", "كِلَابٌ", "كَلِيبٌ", "أُكَيْلِبٌ"], e: "fuʿail: كُلَيْبٌ „Hündchen“.", w: ["كِلَابٌ ist der Plural.", "Das Muster ist fuʿail.", "Diese Form gibt es nicht."] },
  { q: "Was bedeutet يَجِبُ عَلَيْكُمْ أَنْ تَحْضُرُوا?", a: ["Ihr müsst anwesend sein.", "Ihr dürft nicht kommen.", "Ihr wollt kommen.", "Ihr seid gekommen."], e: "يَجِبُ عَلَى = jemand muss.", w: ["Das wäre لَا يَجُوزُ.", "„wollen“ ist يُرِيدُ.", "Das wäre Perfekt."] },
  { q: "Was ist der Maṣdar von نَجَحَ?", a: ["نَجَاحٌ", "نُجُوحٌ", "نَاجِحٌ", "مَنْجَحٌ"], e: "Muster faʿāl: ذَهَابٌ, نَجَاحٌ.", w: ["Dieses Muster passt hier nicht.", "نَاجِحٌ heißt „erfolgreich“.", "Diese Form gibt es nicht."] }
]);

add("b2-27", [
  { q: "Wie heißt „wir sagten“?", a: ["قُلْنَا", "قَالْنَا", "قِلْنَا", "قَالُوا"], e: "Vor mutaḥarrik-Endungen fällt der mittlere Radikal weg; Ḍamma bei a–u-Verben.", w: ["Das Alif fällt weg.", "Kasra nur bei a–i-Verben (بِعْنَا).", "قَالُوا = sie sagten."] },
  { q: "Wie heißt „ich verkaufte“?", a: ["بِعْتُ", "بُعْتُ", "بَاعْتُ", "بَيَعْتُ"], e: "بَاعَ يَبِيعُ: Kasra auf dem ersten Radikal.", w: ["Ḍamma nur bei يَقُولُ-Verben.", "Das Alif fällt weg.", "Das ي fällt weg."] },
  { q: "Wie heißt „Er schlief nicht“ (mit لَمْ)?", a: ["لَمْ يَنَمْ", "لَمْ يَنَامْ", "لَمْ يَنَامُ", "لَمْ نَامَ"], e: "Im Jussiv fällt das ā weg (zwei Sukūn).", w: ["Das ā fällt weg.", "Nach لَمْ kein -u.", "لَمْ steht vor dem Muḍāriʿ."] },
  { q: "Welche Form ist richtig? أَظُنُّ الْمُدِيرَ …", a: ["مَشْغُولًا", "مَشْغُولٌ", "مَشْغُولٍ", "مَشْغُولُ"], e: "ظَنَّ hat zwei Objekte im Akkusativ.", w: ["Das zweite Objekt steht im Akkusativ.", "Kein Genitiv.", "Kein Nominativ."] },
  { q: "Wie heißt „Sag (w.) die Wahrheit!“?", a: ["قُولِي الْحَقَّ", "قُلِي الْحَقَّ", "اُقُولِي الْحَقَّ", "قُلْ الْحَقَّ"], e: "Amr an eine Frau: قُولِي – das و bleibt, weil kein Sukūn folgt.", w: ["Vor ـِي bleibt das و.", "Kein Hamzat al-waṣl nötig.", "قُلْ ist an einen Mann."] }
]);

add("b2-28", [
  { q: "Wie heißt „er weint“?", a: ["يَبْكِي", "يَبْكِيُ", "يَبْكُو", "بَكَى"], e: "Nāqiṣ: Ḍamma auf dem ي fällt weg.", w: ["Das Ḍamma wird nicht geschrieben/gesprochen.", "بَكَى hat ي, nicht و.", "بَكَى ist Perfekt."] },
  { q: "Wie heißt „er hat nicht vergessen“?", a: ["لَمْ يَنْسَ", "لَمْ يَنْسَى", "لَمْ يَنْسُ", "مَا يَنْسَى"], e: "Jussiv: der schwache Endbuchstabe fällt weg.", w: ["Das Alif fällt weg.", "Diese Form gibt es nicht.", "مَا + Muḍāriʿ ist keine Vergangenheit."] },
  { q: "Wie heißt „sie (m. Pl.) riefen“?", a: ["دَعَوْا", "دَعَوُوا", "دَعَاوُوا", "دَعُوا"], e: "Aus دَعَوُوا wird دَعَوْا.", w: ["Diese Form wird zusammengezogen.", "Diese Form gibt es nicht.", "دَعُوا ist der Imperativ an mehrere."] },
  { q: "Wie heißt „Wir sehen die Moschee“?", a: ["نَرَى الْمَسْجِدَ", "نَرْأَى الْمَسْجِدَ", "رَأَيْنَا الْمَسْجِدَ", "نَرِي الْمَسْجِدَ"], e: "Im Muḍāriʿ von رَأَى fällt das Hamza weg.", w: ["Das Hamza fällt weg.", "Das ist Perfekt.", "Diese Form gibt es nicht."] },
  { q: "Was bedeutet أَرِنِي?", a: ["Zeig mir!", "Ich sah", "Sieh mich!", "Er zeigte mir"], e: "أَرِ „zeig!“ + ـنِي „mir“.", w: ["„ich sah“ ist رَأَيْتُ.", "Das wäre اُنْظُرْ إِلَيَّ.", "Das ist kein Perfekt."] }
]);

add("b2-29", [
  { q: "Wie heißt „wir kamen vorbei“?", a: ["مَرَرْنَا", "مَرَّنَا", "مَرْنَا", "مَرَّرْنَا"], e: "Vor mutaḥarrik-Endungen werden die beiden r getrennt.", w: ["Die Šadda löst sich vor ـنَا auf.", "Ein r fehlt.", "Das ist ein anderes Verb (mit Šadda auf dem zweiten r)."] },
  { q: "Wie heißt „sie (Frauen) pilgern“?", a: ["يَحْجُجْنَ", "يَحُجُّنَ", "يَحُجْنَ", "حَجَجْنَ"], e: "Mit dem nūn der Frauen wird aufgelöst.", w: ["Vor dem nūn wird aufgelöst.", "Ein ج fehlt.", "Das ist Perfekt."] },
  { q: "Welche Form ist richtig? „Als ich in Mekka war, besuchte ich …“", a: ["لَمَّا كُنْتُ فِي مَكَّةَ زُرْتُ …", "لَمَّا أَكُونُ فِي مَكَّةَ زُرْتُ …", "لَمْ كُنْتُ فِي مَكَّةَ …", "لَمَّا كُنْتُ فِي مَكَّةِ زُرْتُ …"], e: "لَمَّا „als“ steht nur mit dem Perfekt.", w: ["Nicht mit dem Muḍāriʿ.", "لَمْ ist eine Verneinung.", "مَكَّةُ ist diptot: Genitiv mit Fatḥa."] },
  { q: "Zu welcher Verbklasse gehört وَصَلَ?", a: ["mithāl", "ajwaf", "nāqiṣ", "muḍāʿaf"], e: "Erster Radikal و → mithāl.", w: ["ajwaf: zweiter Radikal schwach.", "nāqiṣ: dritter Radikal schwach.", "muḍāʿaf: zweiter = dritter Radikal."] },
  { q: "Wie heißt der Amr von تَرُدُّ?", a: ["رُدَّ", "رُدُّ", "رُدْ", "تَرُدَّ"], e: "Aus رُدّْ wird رُدَّ (Fatḥa gegen zwei Sukūn).", w: ["Der Amr endet nicht auf -u.", "Die Šadda (zweites d) fehlt.", "Das ta- fällt beim Amr weg."] }
]);

add("b2-30", [
  { q: "Wie heißt „die beiden (Männer) schreiben“?", a: ["يَكْتُبَانِ", "تَكْتُبَانِ", "يَكْتُبُونَ", "كَتَبَا"], e: "3. Person Dual m.: ya…āni.", w: ["تَكْتُبَانِ = die beiden (w.) / ihr beide.", "Das ist Plural.", "Das ist Perfekt."] },
  { q: "Welche Form passt? يُرِيدُ الطَّالِبَانِ أَنْ …", a: ["يَدْرُسَا", "يَدْرُسَانِ", "يَدْرُسُوا", "يَدْرُسْ"], e: "Nach أَنْ fällt das nūn des Duals weg.", w: ["Mit nūn ist es Indikativ.", "Das ist Plural.", "Das ist Singular."] },
  { q: "Wie heißt „ihr beide gingt“?", a: ["ذَهَبْتُمَا", "ذَهَبْتُمْ", "ذَهَبَا", "ذَهَبْنَا"], e: "2. Person Dual: -tumā (m. und f.).", w: ["-tum ist Plural.", "ذَهَبَا = die beiden gingen.", "ذَهَبْنَا = wir gingen."] },
  { q: "Welche Verbformen gehören zu den „fünf Verben“?", a: ["يَفْعَلَانِ، تَفْعَلَانِ، يَفْعَلُونَ، تَفْعَلُونَ، تَفْعَلِينَ", "يَفْعَلُ، تَفْعَلُ، أَفْعَلُ، نَفْعَلُ، يَفْعَلْنَ", "فَعَلَ، فَعَلَتْ، فَعَلُوا، فَعَلْنَ، فَعَلْتُ", "اِفْعَلْ، اِفْعَلِي، اِفْعَلُوا، اِفْعَلْنَ، اِفْعَلَا"], e: "Die Muḍāriʿ-Formen auf -āni/-ūna/-īna.", w: ["Diese haben kein nūn als Indikativzeichen.", "Das sind Perfektformen.", "Das sind Imperative."] },
  { q: "Wie heißt „Wascht (beide) euer Gesicht“?", a: ["اِغْسِلَا وُجُوهَكُمَا", "اِغْسِلَا وَجْهَيْكُمَا", "اِغْسِلُوا وُجُوهَكُمْ", "اِغْسِلِي وَجْهَكِ"], e: "Was jeder nur einmal hat, steht bei zweien im Plural.", w: ["Das Buch lehrt hier den Plural.", "Das ist an mehrere.", "Das ist an eine Frau."] }
]);

add("b2-31", [
  { q: "Welche Form ist richtig? قُلْتُ لِلْمُدَرِّسِ …", a: ["الْجَدِيدِ", "الْجَدِيدُ", "الْجَدِيدَ", "جَدِيدٍ"], e: "Das Naʿt folgt dem Genitiv seines Nomens und ist bestimmt.", w: ["Der Fall muss übereinstimmen.", "Der Fall muss übereinstimmen.", "Die Bestimmtheit muss übereinstimmen."] },
  { q: "Wie heißt „zwei kleine Schwestern“?", a: ["أُخْتَانِ صَغِيرَتَانِ", "أُخْتَانِ صَغِيرَانِ", "أُخْتَانِ صَغِيرَةٌ", "أُخْتَانِ صِغَارٌ"], e: "Zahl und Geschlecht stimmen überein.", w: ["صَغِيرَانِ ist männlich.", "Das Naʿt steht auch im Dual.", "Das ist Plural."] },
  { q: "Welches Naʿt passt? رَأَيْتُ طُلَّابًا …", a: ["جُدُدًا", "جُدُدٌ", "جَدِيدَةً", "جَدِيدًا"], e: "Personen im Plural: Naʿt im Plural, Akkusativ.", w: ["Der Fall muss Akkusativ sein.", "Weiblich Singular nur bei Sachplural.", "Singular passt nicht zu Personen im Plural."] },
  { q: "Was ist in الطَّالِبُ الْمُجْتَهِدُ نَاجِحٌ das Naʿt?", a: ["الْمُجْتَهِدُ", "نَاجِحٌ", "الطَّالِبُ", "Es gibt keins."], e: "Bestimmt nach bestimmtem Nomen = Naʿt; unbestimmt = Khabar.", w: ["نَاجِحٌ ist die Khabar.", "الطَّالِبُ ist der Manʿūt.", "Es gibt ein Naʿt."] },
  { q: "Welche Form passt? فِي الْمَكْتَبَةِ كُتُبٌ …", a: ["كَثِيرَةٌ", "كَثِيرُونَ", "كِثَارٌ", "كَثِيرَاتٍ"], e: "Sachplural → Naʿt weiblich Singular.", w: ["-ūna nur für Personen.", "Ein Plural-Naʿt passt zu Personen, nicht zu Büchern.", "Der Fall ist Nominativ, nicht Genitiv."] }
]);
})(window.MADINA_PLUS = window.MADINA_PLUS || {});
