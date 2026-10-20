/* Mehr Übungen je Regel, Madina-Buch 1 – damit nach jeder Regelkarte genug Aufgaben kommen.
   R(Lektion, Regel, [...]) hängt die Aufgaben an window.MADINA_PLUS und gibt jeder r = Index der Regel
   (arabic.js setzt damit q._rule fest, statt die Regel zu raten). Format sonst wie grammatik-ueben1.js. */
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
R("m01", 0, [
  E("____ مَسْجِدٌ. (Das ist eine Moschee.)", ["هَذَا", "هَاذَا", "مَا", "أَ"], "„dies, das“ = هَذَا – ohne das erste Alif geschrieben.", ["So wird es gesprochen, aber nicht geschrieben.", "مَا ist ein Fragewort.", "أَ macht eine Frage."]),
  F("Wie wird هَذَا ausgesprochen?", "هَذَا", ["hādhā (mit langem ā nach h)", "hadhā (kurzes a)", "hādhihi", "dhālika"], "Man spricht hādhā – das erste Alif wird nicht geschrieben.", ["Das erste a ist lang.", "Das ist هَذِهِ (Lektion 6).", "Das ist ذَلِكَ (Lektion 2)."]),
  F("Welche Schreibung ist richtig?", "", ["هَذَا", "هَاذَا", "هذاا", "هَذَى"], "Das lange ā nach h wird nicht geschrieben.", ["Das erste Alif schreibt man nicht.", "Am Ende steht nur ein Alif.", "Am Ende steht ا, nicht ى."]),
  U("Übersetze ins Arabische", "Das ist ein Hund.", ["هَذَا كَلْبٌ.", "كَلْبٌ هَذَا.", "هَذَا الْكَلْبُ.", "مَا كَلْبٌ."], "هَذَا + Nomen mit Tanwīn.", ["هَذَا steht vorne.", "Mit al hieße es „dieser Hund“.", "مَا ist ein Fragewort."]),
  U("Übersetze ins Arabische", "Das ist ein Händler.", ["هَذَا تَاجِرٌ.", "هَذَا تُجَّارٌ.", "تَاجِرٌ هَذَا.", "هَذَا التَّاجِرُ."], "هَذَا + Nomen mit Tanwīn.", ["Das ist Plural.", "هَذَا steht vorne.", "Mit al: „dieser Händler“."])
]);
R("m01", 2, [
  F("Wie viele Wörter braucht هَذَا قَلَمٌ („Das ist ein Stift“)?", "هَذَا قَلَمٌ", ["zwei", "drei", "vier", "eins"], "Es gibt kein Wort für „ist“ (und keins für „ein“).", ["„ist“ wird nicht übersetzt.", "Weder „ist“ noch „ein“ haben ein Wort.", "هَذَا und قَلَمٌ sind zwei Wörter."]),
  F("Welches arabische Wort steht für „ist“ in هَذَا بَابٌ?", "هَذَا بَابٌ", ["keines – „ist“ wird nicht ausgedrückt", "هَذَا", "بَابٌ", "das Tanwīn"], "Im Nominalsatz gibt es kein Wort für „ist“.", ["هَذَا heißt „das“.", "بَابٌ heißt „eine Tür“.", "Das Tanwīn entspricht „ein“."]),
  U("Übersetze ins Arabische", "Das ist ein Bett.", ["هَذَا سَرِيرٌ.", "هَذَا هُوَ سَرِيرٌ.", "هَذَا يَكُونُ سَرِيرٌ.", "سَرِيرٌ."], "Kein Wort für „ist“: هَذَا سَرِيرٌ.", ["Ein Wort für „ist“ braucht man nicht.", "„ist“ wird nicht übersetzt.", "هَذَا fehlt."]),
  U("Übersetze ins Deutsche", "هَذَا مِنْدِيلٌ.", ["Das ist ein Taschentuch.", "Dies Taschentuch.", "Ist das ein Taschentuch?", "Das Taschentuch."], "„ist“ und „ein“ ergänzt man im Deutschen.", ["Das „ist“ muss im Deutschen dazu.", "Das wäre eine Frage mit أَ.", "Es ist ein ganzer Satz."]),
  U("Übersetze ins Deutsche", "مَا هَذَا؟", ["Was ist das?", "Wer ist das?", "Ist das …?", "Das ist was."], "مَا = was; „ist“ ergänzt man.", ["„Wer“ wäre مَنْ.", "Das wäre أَ.", "Es ist eine Frage."]),
  E("هَذَا ____. (Das ist ein Stuhl.)", ["كُرْسِيٌّ", "هُوَ كُرْسِيٌّ", "كَانَ كُرْسِيٌّ", "كُرْسِيُّ"], "Ohne Wort für „ist“, mit Tanwīn.", ["„ist“ braucht kein Wort.", "„ist“ braucht kein Wort.", "Ohne Tanwīn fehlt „ein“."])
]);
R("m01", 3, [
  F("Welches Zeichen entspricht dem deutschen „ein“?", "بَيْتٌ", ["das Tanwīn (-un) am Ende", "der Buchstabe ب", "das Fatḥa", "es gibt keins"], "Das -n am Wortende (Tanwīn) entspricht dem unbestimmten Artikel.", ["ب ist ein Buchstabe des Wortes.", "Fatḥa ist ein kurzes a.", "Das Tanwīn übernimmt die Rolle."]),
  F("Wie spricht man قَلَمٌ?", "قَلَمٌ", ["qalamun", "qalamu", "qalama", "al-qalamu"], "ـٌ = -un (Tanwīn).", ["Das -n fehlt.", "Falsche Endung.", "Ohne al."]),
  F("Wie spricht man كِتَابٌ?", "كِتَابٌ", ["kitābun", "kitābu", "kitāb", "al-kitābu"], "ـٌ = -un.", ["Das -n fehlt.", "Die Endung fehlt.", "Ohne al."]),
  F("Was heißt بَابٌ?", "بَابٌ", ["eine Tür", "die Tür", "Türen", "Tür!"], "Tanwīn = unbestimmt: „eine Tür“.", ["„die Tür“ wäre الْبَابُ.", "Das ist Singular.", "Es ist ein Nomen."]),
  E("هَذَا ____. (Das ist ein Junge.)", ["وَلَدٌ", "وَلَدُ", "وَلَدَ", "أَوْلَادٌ"], "„ein Junge“ = وَلَدٌ mit Tanwīn.", ["Ohne Tanwīn fehlt „ein“.", "Falsche Endung.", "Das ist Plural."]),
  E("هَذَا ____. (Das ist ein Student.)", ["طَالِبٌ", "طَالِبُ", "طُلَّابٌ", "طَالِبَ"], "Tanwīn = „ein“.", ["Ohne Tanwīn fehlt „ein“.", "Das ist Plural.", "Falsche Endung."]),
  E("هَذَا ____. (Das ist ein Esel.)", ["حِمَارٌ", "حِمَارُ", "حَمِيرٌ", "حِمَارَ"], "Tanwīn = „ein“.", ["Ohne Tanwīn fehlt „ein“.", "Das ist Plural.", "Falsche Endung."]),
  F("Welches Wort heißt „ein Pferd“?", "", ["حِصَانٌ", "حِصَانُ", "أَحْصِنَةٌ", "الْحِصَانُ"], "Mit Tanwīn = unbestimmt.", ["Ohne Tanwīn fehlt „ein“.", "Das ist Plural.", "„das Pferd“."])
]);

/* ---------- Lektion 2 ---------- */
R("m02", 1, [
  F("Wie schreibt man „und jenes“?", "", ["وَذَلِكَ", "وَ ذَلِكَ", "ذَلِكَ وَ", "وذَلِكَ وَ"], "وَ wird immer mit dem folgenden Wort zusammengeschrieben.", ["وَ steht nicht allein.", "وَ steht vorne.", "Nur ein وَ."]),
  F("Wie schreibt man „und ein Stein“?", "", ["وَحَجَرٌ", "وَ حَجَرٌ", "حَجَرٌ وَ", "وَوَحَجَرٌ"], "وَ hängt am folgenden Wort.", ["وَ steht nicht allein.", "وَ steht vorne.", "Nur ein وَ."]),
  E("هَذَا قَلَمٌ ____. (… und ein Buch)", ["وَكِتَابٌ", "وَ كِتَابٌ", "كِتَابٌ وَ", "أَكِتَابٌ"], "وَ + Wort zusammen: وَكِتَابٌ.", ["وَ wird angehängt.", "وَ steht vorne.", "أَ macht eine Frage."]),
  U("Verbinde mit „und“", "هَذَا لَبَنٌ. هَذَا سُكَّرٌ.", ["هَذَا لَبَنٌ وَهَذَا سُكَّرٌ.", "هَذَا لَبَنٌ وَ هَذَا سُكَّرٌ.", "وَهَذَا لَبَنٌ هَذَا سُكَّرٌ.", "هَذَا وَلَبَنٌ هَذَا سُكَّرٌ."], "وَ vor den zweiten Satz, angehängt.", ["وَ wird angehängt.", "وَ gehört vor den zweiten Satz.", "وَ gehört vor هَذَا."]),
  F("Wie spricht man وَذَلِكَ?", "وَذَلِكَ", ["wa-dhālika", "wa dhālika (zwei Wörter)", "u-dhālika", "wadhālik"], "wa + dhālika, zusammen geschrieben.", ["Man schreibt es als ein Wort.", "وَ wird wa gesprochen.", "Die Endung -a fehlt."]),
  E("مَا هَذَا ____ مَا ذَلِكَ؟", ["وَ", "أَ", "مَا", "لَا"], "„und“ = وَ, an مَا geschrieben: وَمَا.", ["أَ macht eine Ja/Nein-Frage.", "Das wäre doppelt.", "لَا heißt „nein“."])
]);
R("m02", 2, [
  U("Übersetze ins Arabische", "Das ist ein Imam und jenes ist ein Händler.", ["هَذَا إِمَامٌ وَذَلِكَ تَاجِرٌ.", "ذَلِكَ إِمَامٌ وَهَذَا تَاجِرٌ.", "هَذَا إِمَامٌ وَذَلِكَ تَاجِرٌ وَ.", "هَذَا إِمَامٌ ذَلِكَ وَتَاجِرٌ."], "nah: هَذَا, fern: وَذَلِكَ.", ["nah und fern vertauscht.", "Am Ende kein وَ.", "وَ gehört vor ذَلِكَ."]),
  U("Übersetze ins Deutsche", "هَذَا حَجَرٌ وَذَلِكَ بَيْتٌ.", ["Das ist ein Stein und jenes ist ein Haus.", "Dieser Stein und jenes Haus.", "Das ist ein Haus und jenes ist ein Stein.", "Ist das ein Stein oder ein Haus?"], "Zwei Nominalsätze mit وَ.", ["Ohne al sind es Sätze.", "Vertauscht.", "Keine Frage."]),
  E("هَذَا كِتَابٌ وَ____ قَلَمٌ. (… und jenes ist ein Stift.)", ["ذَلِكَ", "هَذَا", "مَا", "أَ"], "Fern = ذَلِكَ.", ["هَذَا ist nah.", "مَا ist ein Fragewort.", "أَ macht eine Frage."]),
  E("____ مَسْجِدٌ وَهَذَا بَيْتٌ. (Jenes ist eine Moschee …)", ["ذَلِكَ", "وَذَلِكَ", "هَذَا", "أَذَلِكَ"], "Am Satzanfang ohne وَ.", ["Am Anfang kein وَ.", "هَذَا ist nah.", "Das wäre eine Frage."]),
  U("Statt nah: fern (beide Sätze)", "هَذَا قَلَمٌ وَهَذَا كِتَابٌ.", ["ذَلِكَ قَلَمٌ وَذَلِكَ كِتَابٌ.", "ذَلِكَ قَلَمٌ وَهَذَا كِتَابٌ.", "ذَلِكَ قَلَمٌ ذَلِكَ وَكِتَابٌ.", "ذَلِكَ وَقَلَمٌ ذَلِكَ كِتَابٌ."], "Beide هَذَا → ذَلِكَ.", ["Beide müssen sich ändern.", "وَ gehört vor ذَلِكَ.", "وَ gehört vor den zweiten Satz."])
]);

/* ---------- Lektion 3 ---------- */
R("m03", 0, [
  U("Mach es bestimmt (mit al)", "بَيْتٌ", ["الْبَيْتُ", "الْبَيْتٌ", "بَيْتُ", "الْبَّيْتُ"], "al + Ḍamma, das Tanwīn fällt weg.", ["al und Tanwīn nie zusammen.", "al fehlt.", "ب ist ein Mondbuchstabe – kein Shadda."]),
  U("Mach es unbestimmt", "الْمَسْجِدُ", ["مَسْجِدٌ", "مَسْجِدُ", "الْمَسْجِدٌ", "مَسْجِدًا"], "Ohne al kommt das Tanwīn zurück.", ["Ohne al braucht es Tanwīn.", "al und Tanwīn nie zusammen.", "Das ist Akkusativ."])
]);
R("m03", 2, [
  U("Mach es bestimmt (mit al)", "قَمَرٌ", ["الْقَمَرُ", "الْقَّمَرُ", "الْقَمَرٌ", "اَقَّمَرُ"], "ق ist ein Mondbuchstabe: al-qamaru – das l wird gesprochen.", ["Mondbuchstaben bekommen kein Shadda.", "al und Tanwīn nie zusammen.", "Das l bleibt."]),
  U("Mach es bestimmt (mit al)", "كِتَابٌ", ["الْكِتَابُ", "الْكِّتَابُ", "الْكِتَابٌ", "كِتَابُ"], "ك ist ein Mondbuchstabe.", ["Kein Shadda.", "Kein Tanwīn mit al.", "al fehlt."]),
  U("Mach es bestimmt (mit al)", "جَدِيدٌ", ["الْجَدِيدُ", "الْجَّدِيدُ", "الْجَدِيدٌ", "جَدِيدُ"], "ج ist ein Mondbuchstabe.", ["Kein Shadda.", "Kein Tanwīn mit al.", "al fehlt."]),
  U("Mach es bestimmt (mit al)", "مَاءٌ", ["الْمَاءُ", "الْمَّاءُ", "الْمَاءٌ", "مَاءُ"], "م ist ein Mondbuchstabe.", ["Kein Shadda.", "Kein Tanwīn mit al.", "al fehlt."]),
  F("Bei welchem Wort wird das l von al gesprochen (Mondbuchstabe)?", "", ["الْبَابُ", "الشَّمْسُ", "الرَّجُلُ", "النَّجْمُ"], "ب ist ein Mondbuchstabe: al-bābu.", ["ش ist ein Sonnenbuchstabe.", "ر ist ein Sonnenbuchstabe.", "ن ist ein Sonnenbuchstabe."]),
  F("Bei welchem Wort wird das l von al gesprochen (Mondbuchstabe)?", "", ["الْوَلَدُ", "الطَّالِبُ", "الدِّيكُ", "السَّرِيرُ"], "و ist ein Mondbuchstabe.", ["ط ist ein Sonnenbuchstabe.", "د ist ein Sonnenbuchstabe.", "س ist ein Sonnenbuchstabe."]),
  F("Wie spricht man الْحِصَانُ?", "الْحِصَانُ", ["al-ḥiṣānu", "aḥ-ḥiṣānu", "a-ḥiṣānu", "al-ḥiṣānun"], "ح ist ein Mondbuchstabe.", ["Keine Angleichung bei ح.", "Das l wird gesprochen.", "Kein Tanwīn mit al."]),
  F("Wie spricht man الشَّمْسُ?", "الشَّمْسُ", ["ash-shamsu", "al-shamsu", "al-shamsun", "a-shamsu"], "ش ist ein Sonnenbuchstabe – das l wird angeglichen.", ["Das l wird nicht gesprochen.", "Kein Tanwīn mit al.", "Das ش wird verdoppelt."]),
  F("Welche Gruppe enthält nur Mondbuchstaben?", "", ["ب ج ح ك م", "ت د ر س ن", "ب ت ج د ك", "ق ل م ش ه"], "ب ج ح ك م sind Mondbuchstaben.", ["Das sind Sonnenbuchstaben.", "ت und د sind Sonnenbuchstaben.", "ل und ش sind Sonnenbuchstaben."])
]);
R("m03", 3, [
  F("Wie spricht man وَالْقَمَرُ?", "وَالْقَمَرُ", ["wa-l-qamaru", "wa-al-qamaru", "wal-a-qamaru", "wa-qamaru"], "Das a von al fällt nach وَ weg.", ["Das a von al wird nicht gesprochen.", "Falsche Silben.", "Das l fehlt."]),
  F("Wie spricht man وَالشَّمْسُ?", "وَالشَّمْسُ", ["wa-sh-shamsu", "wa-al-shamsu", "wal-shamsu", "wa-shamsu"], "Hamzatu l-waṣl fällt weg, ش wird verdoppelt.", ["Das a von al fällt weg.", "Das l wird angeglichen.", "Das ش ist verdoppelt."]),
  F("Welches a wird in وَالْبَيْتُ NICHT gesprochen?", "وَالْبَيْتُ", ["das a von al (Hamzatu l-waṣl)", "das a von وَ", "das a nach ب", "keines"], "Nach einem Wort davor fällt das Hamzatu l-waṣl weg.", ["Das a von وَ bleibt.", "Nach ب steht ai.", "Eins fällt weg."]),
  F("Wie heißt das a am Anfang von الْ?", "", ["Hamzatu l-waṣl", "Hamzatu l-qaṭʿ", "Tanwīn", "Shadda"], "Es fällt weg, wenn ein Wort davorsteht.", ["Das bleibt immer.", "Das ist das -n.", "Das ist die Verdopplung."]),
  F("Wie spricht man مَا الْمَاءُ؟ richtig?", "مَا الْمَاءُ؟", ["ma-l-māʾu", "mā al-māʾu", "ma-al-māʾu", "mā-māʾu"], "Das a von al fällt weg; das lange ā von مَا wird verkürzt.", ["Das a von al fällt weg.", "Das a von al fällt weg.", "Das l fehlt."]),
  E("هَذَا قَلَمٌ ____. (… und das Buch ist neu – wa-l-kitābu)", ["وَالْكِتَابُ جَدِيدٌ", "وَ الْكِتَابُ جَدِيدٌ", "وَاالْكِتَابُ جَدِيدٌ", "وَكِتَابٌ جَدِيدٌ"], "وَ + الْكِتَابُ, zusammengeschrieben; das a wird nicht gesprochen.", ["وَ wird angehängt.", "Nur ein Alif.", "Ohne al: „ein neues Buch“."]),
  F("Wie spricht man فِي الْبَيْتِ?", "فِي الْبَيْتِ", ["fi-l-baiti", "fī al-baiti", "fi-al-baiti", "fī-baiti"], "Hamzatu l-waṣl fällt weg; ī wird kurz.", ["Das a fällt weg.", "Das a fällt weg.", "Das l fehlt."])
]);
R("m03", 4, [
  E("الْقَلَمُ ____. (Der Stift ist kaputt.)", ["مَكْسُورٌ", "الْمَكْسُورُ", "مَكْسُورُ", "مَكْسُورَةٌ"], "Bestimmtes Subjekt + unbestimmtes Prädikat.", ["Mit al kein Satz.", "Ohne Tanwīn.", "Das ist weiblich."]),
  U("Übersetze ins Deutsche", "الْوَلَدُ جَالِسٌ.", ["Der Junge sitzt.", "Ein sitzender Junge.", "Der sitzende Junge.", "Ein Junge sitzt."], "al = der; Adjektiv mit Tanwīn heißt nicht „ein …“.", ["Das Subjekt ist bestimmt.", "Das wäre الْوَلَدُ الْجَالِسُ.", "Das Subjekt ist bestimmt."]),
  U("Übersetze ins Arabische", "Das Wasser ist heiß.", ["الْمَاءُ حَارٌّ.", "الْمَاءُ الْحَارُّ.", "مَاءٌ حَارٌّ.", "الْمَاءُ بَارِدٌ."], "Bestimmt + unbestimmt = Satz.", ["Das heißt „das heiße Wasser“.", "Das heißt „heißes Wasser“.", "بَارِدٌ heißt „kalt“."])
]);

/* ---------- Lektion 4 ---------- */
R("m04", 0, [
  F("Welche Endung hat der Nominativ (مَرْفُوعٌ)?", "الْبَيْتُ", ["-u (Ḍamma)", "-i (Kasra)", "-a (Fatḥa)", "Sukūn"], "Die normale Endung ist -u.", ["-i ist Genitiv.", "-a ist Akkusativ.", "Sukūn ist keine Fallendung."]),
  F("Welches Wort steht im Nominativ?", "", ["الْكِتَابُ", "الْكِتَابِ", "الْكِتَابَ", "كِتَابٍ"], "-u = Nominativ.", ["-i ist Genitiv.", "-a ist Akkusativ.", "-in ist Genitiv."]),
  F("Welches Wort steht im Nominativ?", "", ["بَيْتٌ", "بَيْتٍ", "بَيْتًا", "بَيْتِ"], "-un = Nominativ unbestimmt.", ["-in ist Genitiv.", "-an ist Akkusativ.", "-i ist Genitiv."]),
  E("____ فِي الْغُرْفَةِ.", ["الْمُدَرِّسُ", "الْمُدَرِّسِ", "الْمُدَرِّسَ", "مُدَرِّسٍ"], "Das Subjekt steht im Nominativ.", ["-i nur nach Präposition.", "-a ist kein Nominativ.", "-in ist Genitiv."]),
  E("أَيْنَ ____؟", ["الْقَلَمُ", "الْقَلَمِ", "الْقَلَمَ", "قَلَمٍ"], "Nach أَيْنَ steht das Nomen im Nominativ.", ["Kein Genitiv.", "Kein Akkusativ.", "Kein Genitiv."]),
  F("Wie heißt der Nominativ auf Arabisch?", "", ["مَرْفُوعٌ", "مَجْرُورٌ", "مَنْصُوبٌ", "مَجْزُومٌ"], "مَرْفُوعٌ = Nominativ (-u).", ["Das ist Genitiv.", "Das ist Akkusativ.", "Das gibt es nur bei Verben."]),
  U("Was ist hier im Nominativ?", "الْكِتَابُ عَلَى الْمَكْتَبِ.", ["الْكِتَابُ", "الْمَكْتَبِ", "عَلَى", "beide Nomen"], "الْكِتَابُ hat -u; الْمَكْتَبِ steht nach عَلَى im Genitiv.", ["Das ist Genitiv.", "Das ist eine Präposition.", "Nur eins ist Nominativ."]),
  F("Welches Wort steht NICHT im Nominativ?", "", ["فِي الْمَسْجِدِ", "الْمَسْجِدُ كَبِيرٌ", "مَسْجِدٌ", "هَذَا مَسْجِدٌ"], "Nach فِي steht der Genitiv.", ["Das ist Nominativ.", "Das ist Nominativ.", "Das ist Nominativ."]),
  U("Statt Genitiv: Nominativ (als Subjekt)", "فِي الْحَمَّامِ", ["الْحَمَّامُ نَظِيفٌ.", "الْحَمَّامِ نَظِيفٌ.", "الْحَمَّامَ نَظِيفٌ.", "حَمَّامٍ نَظِيفٌ."], "Als Subjekt -u.", ["Ohne Präposition kein Genitiv.", "Kein Akkusativ.", "Das ist Genitiv."])
]);
R("m04", 2, [
  F("Wie spricht man فِي الْبَيْتِ?", "فِي الْبَيْتِ", ["fi-l-baiti (kurzes i)", "fī al-baiti", "fī-baiti", "fil-a-baiti"], "Vor al wird das lange ī kurz.", ["Das a von al fällt weg, ī wird kurz.", "Das l fehlt.", "Falsche Silben."]),
  F("Wie spricht man فِي بَيْتٍ?", "فِي بَيْتٍ", ["fī baitin (langes ī)", "fi-l-baitin", "fi baitun", "fī baitan"], "Ohne al bleibt das ī lang.", ["Kein al.", "Nach فِي Genitiv.", "Nach فِي Genitiv."]),
  F("Warum wird فِي in فِي الْفَصْلِ kurz gesprochen?", "فِي الْفَصْلِ", ["Weil darauf zwei Konsonanten folgen (fi-l-faṣli)", "Weil فِي immer kurz ist", "Weil الْفَصْلِ weiblich ist", "Weil es eine Frage ist"], "Vor dem l von al wird das lange ī kurz.", ["Ohne al ist es lang.", "Das Geschlecht spielt keine Rolle.", "Es ist keine Frage."]),
  F("Wie spricht man فِي السَّمَاءِ?", "فِي السَّمَاءِ", ["fi-s-samāʾi", "fī al-samāʾi", "fi-l-samāʾi", "fī samāʾin"], "Sonnenbuchstabe + kurzes i: fi-s-samāʾi.", ["Das a fällt weg, das l wird angeglichen.", "Das l wird an س angeglichen.", "Es ist bestimmt."]),
  F("Wie spricht man عَلَى الْمَكْتَبِ?", "عَلَى الْمَكْتَبِ", ["ʿala-l-maktabi", "ʿalā al-maktabi", "ʿalā-maktabi", "ʿali-l-maktabi"], "Auch das lange ā von عَلَى wird vor al kurz.", ["Das a von al fällt weg.", "Das l fehlt.", "Der Vokal ist a."])
]);
R("m04", 4, [
  F("Welches Wort ist weiblich?", "", ["سَاعَةٌ", "قَلَمٌ", "بَابٌ", "كِتَابٌ"], "Die meisten weiblichen Wörter enden auf ة.", ["قَلَمٌ ist männlich.", "بَابٌ ist männlich.", "كِتَابٌ ist männlich."]),
  F("Welches Wort ist weiblich?", "", ["غُرْفَةٌ", "مَكْتَبٌ", "سَرِيرٌ", "مَطْبَخٌ"], "Endung ة → weiblich.", ["Männlich.", "Männlich.", "Männlich."]),
  F("Welches Wort ist männlich?", "", ["مِفْتَاحٌ", "سَاعَةٌ", "غُرْفَةٌ", "مَدْرَسَةٌ"], "Ohne ة, kein besonderes weibliches Wort → männlich.", ["Endet auf ة.", "Endet auf ة.", "Endet auf ة."]),
  E("أَيْنَ الْغُرْفَةُ؟ – ____ هُنَاكَ.", ["هِيَ", "هُوَ", "أَنْتَ", "أَنَا"], "غُرْفَةٌ ist weiblich → هِيَ.", ["هُوَ für Männliches.", "أَنْتَ heißt „du“.", "أَنَا heißt „ich“."]),
  E("أَيْنَ الْمَدْرَسَةُ؟ – ____ قَرِيبَةٌ.", ["هِيَ", "هُوَ", "مَا", "مَنْ"], "مَدْرَسَةٌ endet auf ة → هِيَ.", ["هُوَ für Männliches.", "Fragewort.", "Fragewort."]),
  E("أَيْنَ الْمِفْتَاحُ؟ – ____ عَلَى الْمَكْتَبِ.", ["هُوَ", "هِيَ", "هَذِهِ", "أَنْتِ"], "مِفْتَاحٌ ist männlich → هُوَ.", ["هِيَ für Weibliches.", "هَذِهِ ist weiblich.", "أَنْتِ heißt „du (w.)“."]),
  F("Welches weibliche Wort hat KEIN ة?", "", ["السَّمَاءُ", "السَّاعَةُ", "الْغُرْفَةُ", "الْمَدْرَسَةُ"], "Manche weiblichen Wörter haben keine besondere Endung, z. B. السَّمَاءُ.", ["Hat ة.", "Hat ة.", "Hat ة."]),
  E("السَّمَاءُ جَمِيلَةٌ، وَ____ بَعِيدَةٌ.", ["هِيَ", "هُوَ", "هَذَا", "ذَلِكَ"], "السَّمَاءُ ist weiblich (ohne ة) → هِيَ.", ["السَّمَاءُ ist weiblich.", "Männlich.", "Männlich."]),
  F("Woran erkennt man die meisten weiblichen Wörter?", "", ["an ة (Tā marbūṭa) am Ende", "am Tanwīn", "an al", "an einem langen ā am Anfang"], "Tā marbūṭa ة ist das häufigste Zeichen.", ["Tanwīn haben beide Geschlechter.", "al haben beide.", "Das ist kein Zeichen."]),
  U("Ersetze durch ein Pronomen", "السَّاعَةُ عَلَى السَّرِيرِ.", ["هِيَ عَلَى السَّرِيرِ.", "هُوَ عَلَى السَّرِيرِ.", "هَذِهِ عَلَى السَّرِيرِ.", "هِيَ عَلَى السَّرِيرُ."], "Weiblich → هِيَ.", ["Die Uhr ist weiblich.", "Kein Personalpronomen.", "Nach عَلَى Genitiv."])
]);
R("m04", 5, [
  E("هَذِهِ ____. (Das ist Zainab.)", ["زَيْنَبُ", "زَيْنَبٌ", "الزَّيْنَبُ", "زَيْنَبَ"], "Weibliche Eigennamen haben kein Tanwīn.", ["Kein Tanwīn.", "Kein al.", "Nominativ."]),
  E("أَيْنَ ____؟ (Wo ist Āmina?)", ["آمِنَةُ", "آمِنَةٌ", "الْآمِنَةُ", "آمِنَةِ"], "Kein Tanwīn bei weiblichen Namen.", ["Kein Tanwīn.", "Kein al.", "Nominativ."]),
  E("هَذَا ____. (Das ist Muḥammad.)", ["مُحَمَّدٌ", "مُحَمَّدُ", "الْمُحَمَّدُ", "مُحَمَّدًا"], "Männliche Namen wie مُحَمَّدٌ haben Tanwīn – es heißt nicht „ein“.", ["Dieser Name hat Tanwīn.", "Kein al.", "Nominativ."]),
  F("Welcher Name hat KEIN Tanwīn?", "", ["مَرْيَمُ", "بِلَالٌ", "حَامِدٌ", "مُحَمَّدٌ"], "Weiblicher Name → kein Tanwīn.", ["Männlicher Name mit Tanwīn.", "Männlicher Name mit Tanwīn.", "Männlicher Name mit Tanwīn."]),
  F("Was heißt حَامِدٌ?", "حَامِدٌ", ["Ḥāmid", "ein Ḥāmid", "der Ḥāmid", "Ḥāmids"], "Bei Eigennamen bedeutet das Tanwīn nicht „ein“.", ["Namen haben kein „ein“.", "Kein Artikel im Deutschen.", "Kein Genitiv."]),
  U("Ersetze den Namen durch ein Pronomen", "فَاطِمَةُ فِي الْبَيْتِ.", ["هِيَ فِي الْبَيْتِ.", "هُوَ فِي الْبَيْتِ.", "هَذِهِ فِي الْبَيْتِ.", "هِيَ فِي الْبَيْتُ."], "Fāṭima → هِيَ.", ["Sie ist eine Frau.", "Kein Personalpronomen.", "Nach فِي Genitiv."])
]);

/* ---------- Lektion 4a ---------- */
R("m04a", 0, [
  E("ذَهَبَ الْمُدِيرُ ____ السُّوقِ.", ["إِلَى", "مِنَ", "فِي", "عَلَى"], "„zum Markt“ = إِلَى السُّوقِ.", ["„vom Markt“.", "„im Markt“.", "„auf dem Markt“."])
]);
R("m04a", 1, [
  E("____ مِنَ الْهِنْدِ. (Ich bin aus Indien.)", ["أَنَا", "أَنْتَ", "هُوَ", "هِيَ"], "„ich“ = أَنَا.", ["أَنْتَ heißt „du“.", "هُوَ heißt „er“.", "هِيَ heißt „sie“."]),
  E("مَنْ ____؟ (Wer bist du?)", ["أَنْتَ", "أَنَا", "هُوَ", "مَا"], "„du“ (m.) = أَنْتَ.", ["أَنَا heißt „ich“.", "هُوَ heißt „er“.", "مَا ist ein Fragewort."]),
  E("أَ____ طَالِبٌ؟ – نَعَمْ، أَنَا طَالِبٌ.", ["أَنْتَ", "أَنَا", "هُوَ", "هِيَ"], "Die Antwort „ich“ → gefragt wird „du“.", ["Man fragt den anderen.", "Antwort wäre هُوَ.", "Antwort wäre هِيَ."]),
  F("Wofür steht أَنَا?", "أَنَا", ["„ich“ – für Männer und Frauen", "„ich“ – nur für Männer", "„du“", "„wir“"], "أَنَا gilt für beide Geschlechter.", ["Auch Frauen sagen أَنَا.", "„du“ = أَنْتَ.", "„wir“ kommt später."]),
  U("Statt „er“: „ich“", "هُوَ مِنَ الْيَابَانِ.", ["أَنَا مِنَ الْيَابَانِ.", "أَنْتَ مِنَ الْيَابَانِ.", "أَنَا مِنْ الْيَابَانُ.", "هِيَ مِنَ الْيَابَانِ."], "هُوَ → أَنَا.", ["أَنْتَ heißt „du“.", "Nach مِنَ Genitiv.", "هِيَ heißt „sie“."]),
  U("Statt „ich“: „du“", "أَنَا مُدَرِّسٌ.", ["أَنْتَ مُدَرِّسٌ.", "أَنْتَ مُدَرِّسُ.", "هُوَ مُدَرِّسٌ.", "أَنَا أَنْتَ مُدَرِّسٌ."], "أَنَا → أَنْتَ.", ["Das Tanwīn bleibt.", "هُوَ heißt „er“.", "Nur ein Pronomen."]),
  U("Übersetze ins Arabische", "Woher bist du? – Ich bin aus China.", ["مِنْ أَيْنَ أَنْتَ؟ – أَنَا مِنَ الصِّينِ.", "مِنْ أَيْنَ أَنَا؟ – أَنْتَ مِنَ الصِّينِ.", "أَيْنَ أَنْتَ؟ – أَنَا فِي الصِّينِ.", "مِنْ أَيْنَ أَنْتَ؟ – أَنَا مِنْ الصِّينُ."], "مِنْ أَيْنَ = woher; مِنَ + Genitiv.", ["Pronomen vertauscht.", "Das heißt „Wo bist du? – in China“.", "مِنَ vor al, und Genitiv."])
]);
R("m04a", 3, [
  F("Was steht im Verbalsatz zuerst?", "ذَهَبَ بِلَالٌ", ["das Verb", "das Subjekt", "die Präposition", "das Objekt"], "Im Verbalsatz steht das Verb vorne.", ["Das Subjekt folgt.", "Die Präposition kommt später.", "Hier gibt es kein Objekt."]),
  F("Was ist in خَرَجَ الْمُدَرِّسُ der فَاعِلٌ (Subjekt)?", "خَرَجَ الْمُدَرِّسُ", ["الْمُدَرِّسُ", "خَرَجَ", "das Fatḥa", "es gibt keins"], "Das Subjekt nach dem Verb heißt فَاعِلٌ.", ["Das ist das Verb.", "Das ist ein Vokal.", "الْمُدَرِّسُ ist das Subjekt."]),
  F("In welchem Fall steht der فَاعِلٌ?", "", ["Nominativ (-u)", "Genitiv (-i)", "Akkusativ (-a)", "ohne Endung"], "Der Fāʿil ist marfūʿ.", ["Genitiv nach Präpositionen.", "Akkusativ ist das Objekt.", "Er hat eine Endung."]),
  E("خَرَجَ ____ مِنَ الْمَسْجِدِ.", ["الْإِمَامُ", "الْإِمَامِ", "الْإِمَامَ", "إِمَامٍ"], "Fāʿil im Nominativ.", ["Kein Genitiv.", "Kein Akkusativ.", "Genitiv."]),
  E("ذَهَبَ ____ إِلَى الْجَامِعَةِ.", ["الطَّالِبُ", "الطَّالِبِ", "الطَّالِبَ", "طَالِبٍ"], "Fāʿil im Nominativ.", ["Kein Genitiv.", "Kein Akkusativ.", "Genitiv."]),
  U("Mach einen Verbalsatz", "الْمُدِيرُ – خَرَجَ", ["خَرَجَ الْمُدِيرُ.", "الْمُدِيرِ خَرَجَ.", "خَرَجَ الْمُدِيرَ.", "خَرَجَ الْمُدِيرِ."], "Verb vorne, Subjekt im Nominativ.", ["Verb vorne, Nominativ.", "Kein Akkusativ.", "Kein Genitiv."]),
  U("Mach einen Verbalsatz", "حَامِدٌ – ذَهَبَ – إِلَى الْمَدْرَسَةِ", ["ذَهَبَ حَامِدٌ إِلَى الْمَدْرَسَةِ.", "حَامِدٌ إِلَى ذَهَبَ الْمَدْرَسَةِ.", "ذَهَبَ حَامِدٍ إِلَى الْمَدْرَسَةِ.", "ذَهَبَ إِلَى حَامِدٌ الْمَدْرَسَةِ."], "Verb – Fāʿil – Präpositionalgruppe.", ["Falsche Reihenfolge.", "Fāʿil im Nominativ.", "Falsche Reihenfolge."]),
  F("Was ist ein Verbalsatz?", "", ["خَرَجَ الطَّالِبُ.", "الطَّالِبُ جَدِيدٌ.", "هَذَا طَالِبٌ.", "الطَّالِبُ فِي الْفَصْلِ."], "Er beginnt mit einem Verb.", ["Das beginnt mit einem Nomen.", "Das beginnt mit هَذَا.", "Das beginnt mit einem Nomen."]),
  U("Übersetze ins Arabische", "Der Arzt ging hinaus.", ["خَرَجَ الطَّبِيبُ.", "الطَّبِيبُ خَرَجَ مِنْ.", "خَرَجَ الطَّبِيبِ.", "ذَهَبَ الطَّبِيبَ."], "Verb vorne, Fāʿil im Nominativ.", ["Unvollständig.", "Fāʿil im Nominativ.", "Falsches Verb und Fall."])
]);

/* ---------- Lektion 5 ---------- */
R("m05", 0, [
  U("Übersetze ins Arabische", "der Stift des Lehrers", ["قَلَمُ الْمُدَرِّسِ", "الْمُدَرِّسُ قَلَمٍ", "الْقَلَمُ الْمُدَرِّسُ", "قَلَمٌ مُدَرِّسٌ"], "Besessenes zuerst, Besitzer danach im Genitiv.", ["Reihenfolge vertauscht.", "Der Muḍāf hat kein al, der zweite steht im Genitiv.", "Kein Tanwīn am Muḍāf, Genitiv beim zweiten."]),
  U("Übersetze ins Arabische", "Ḥāmids Auto", ["سَيَّارَةُ حَامِدٍ", "حَامِدٌ سَيَّارَةٌ", "السَّيَّارَةُ حَامِدٍ", "سَيَّارَةٌ حَامِدٍ"], "سَيَّارَةُ + حَامِدٍ (Genitiv).", ["Das ist ein Satz.", "Kein al am Muḍāf.", "Kein Tanwīn am Muḍāf."]),
  U("Übersetze ins Deutsche", "بَابُ الْمَسْجِدِ", ["die Tür der Moschee", "die Moschee der Tür", "eine Tür und eine Moschee", "die Tür ist eine Moschee"], "Iḍāfa = Genitivverbindung.", ["Vertauscht.", "Es gibt kein „und“.", "Es ist kein Satz."]),
  U("Übersetze ins Deutsche", "مِفْتَاحُ السَّيَّارَةِ", ["der Autoschlüssel", "das Schlüsselauto", "ein Schlüssel und ein Auto", "der Schlüssel ist ein Auto"], "Wörtlich „der Schlüssel des Autos“.", ["Vertauscht.", "Es gibt kein „und“.", "Es ist kein Satz."])
]);
R("m05", 1, [
  F("Welche Iḍāfa ist richtig?", "", ["بَيْتُ الْمُدِيرِ", "الْبَيْتُ الْمُدِيرِ", "بَيْتٌ الْمُدِيرِ", "بَيْتًا الْمُدِيرِ"], "Der Muḍāf hat weder al noch Tanwīn.", ["Kein al am Muḍāf.", "Kein Tanwīn am Muḍāf.", "Kein Tanwīn am Muḍāf."]),
  F("Welche Iḍāfa ist richtig?", "", ["حَقِيبَةُ آمِنَةَ", "الْحَقِيبَةُ آمِنَةَ", "حَقِيبَةٌ آمِنَةَ", "حَقِيبَةُ آمِنَةُ"], "Muḍāf ohne al/Tanwīn; weiblicher Name im Genitiv mit Fatḥa (Diptoton).", ["Kein al am Muḍāf.", "Kein Tanwīn am Muḍāf.", "Der zweite Teil steht im Genitiv."]),
  F("Warum hat كِتَابُ in كِتَابُ بِلَالٍ kein Tanwīn?", "كِتَابُ بِلَالٍ", ["Es ist Muḍāf – durch die Stellung bestimmt.", "Es ist weiblich.", "Es ist Plural.", "Es steht im Genitiv."], "Der Muḍāf verliert al und Tanwīn.", ["كِتَابٌ ist männlich.", "Es ist Singular.", "Es steht im Nominativ."]),
  U("Mach eine Iḍāfa: „der Name des Jungen“", "اسْمٌ + الْوَلَدُ", ["اسْمُ الْوَلَدِ", "الِاسْمُ الْوَلَدِ", "اسْمٌ الْوَلَدِ", "اسْمُ الْوَلَدُ"], "Erstes Wort ohne al/Tanwīn, zweites im Genitiv.", ["Kein al.", "Kein Tanwīn.", "Genitiv beim zweiten."]),
  U("Mach eine Iḍāfa: „die Straße der Stadt“", "شَارِعٌ + الْمَدِينَةُ", ["شَارِعُ الْمَدِينَةِ", "الشَّارِعُ الْمَدِينَةِ", "شَارِعٌ الْمَدِينَةِ", "شَارِعُ الْمَدِينَةُ"], "Muḍāf + Genitiv.", ["Kein al.", "Kein Tanwīn.", "Genitiv beim zweiten."]),
  U("Mach eine Iḍāfa: „die Tasche des Arztes“", "حَقِيبَةٌ + الطَّبِيبُ", ["حَقِيبَةُ الطَّبِيبِ", "الْحَقِيبَةُ الطَّبِيبِ", "حَقِيبَةٌ الطَّبِيبِ", "حَقِيبَةُ الطَّبِيبُ"], "Muḍāf + Genitiv.", ["Kein al.", "Kein Tanwīn.", "Genitiv beim zweiten."]),
  U("Mach eine Iḍāfa: „das Haus des Onkels“", "بَيْتٌ + الْخَالُ", ["بَيْتُ الْخَالِ", "الْبَيْتُ الْخَالِ", "بَيْتٌ الْخَالِ", "بَيْتُ الْخَالُ"], "Muḍāf + Genitiv.", ["Kein al.", "Kein Tanwīn.", "Genitiv beim zweiten."])
]);
R("m05", 2, [
  E("هَذَا مِفْتَاحُ ____.", ["الْبَيْتِ", "الْبَيْتُ", "الْبَيْتَ", "بَيْتٌ"], "Muḍāf ilaihi → Genitiv.", ["Kein Nominativ.", "Kein Akkusativ.", "Nominativ."]),
  E("هَذَا قَلَمُ ____. (eines Studenten)", ["طَالِبٍ", "طَالِبٌ", "الطَّالِبُ", "طَالِبًا"], "Unbestimmter Besitzer: Genitiv mit Tanwīn -in.", ["Nominativ.", "Nominativ, bestimmt.", "Akkusativ."]),
  E("أَيْنَ سَيَّارَةُ ____؟ (des Imams)", ["الْإِمَامِ", "الْإِمَامُ", "إِمَامٌ", "الْإِمَامَ"], "Genitiv.", ["Nominativ.", "Nominativ, unbestimmt.", "Akkusativ."]),
  F("In welchem Fall steht der مُضَافٌ إِلَيْهِ?", "", ["im Genitiv (مَجْرُورٌ)", "im Nominativ", "im Akkusativ", "ohne Endung"], "Der Muḍāf ilaihi ist immer majrūr.", ["Nominativ hat der Muḍāf oft, nicht der Muḍāf ilaihi.", "Kein Akkusativ.", "Er hat eine Endung."])
]);
R("m05", 3, [
  E("الْقِطُّ تَحْتَ ____.", ["السَّرِيرِ", "السَّرِيرُ", "السَّرِيرَ", "سَرِيرٌ"], "تَحْتَ + Genitiv.", ["Nominativ.", "Akkusativ.", "Nominativ."]),
  E("الْحِذَاءُ تَحْتَ ____. (unter einem Stuhl)", ["كُرْسِيٍّ", "كُرْسِيٌّ", "الْكُرْسِيُّ", "كُرْسِيًّا"], "تَحْتَ + Genitiv, unbestimmt.", ["Nominativ.", "Nominativ, bestimmt.", "Akkusativ."]),
  E("أَيْنَ الْكَلْبُ؟ – هُوَ ____ السَّيَّارَةِ.", ["تَحْتَ", "مِنْ", "إِلَى", "يَا"], "„unter“ = تَحْتَ.", ["„von“.", "„zu“.", "Anrufpartikel."]),
  U("Statt „auf“: „unter“", "الْكِتَابُ عَلَى الْمَكْتَبِ.", ["الْكِتَابُ تَحْتَ الْمَكْتَبِ.", "الْكِتَابُ تَحْتَ الْمَكْتَبُ.", "الْكِتَابُ تَحْتُ الْمَكْتَبِ.", "تَحْتَ الْكِتَابُ الْمَكْتَبِ."], "Nur die Präposition ändert sich.", ["Genitiv bleibt.", "تَحْتَ endet auf Fatḥa.", "Falsche Stellung."]),
  U("Übersetze ins Arabische", "Die Tasche ist unter dem Bett.", ["الْحَقِيبَةُ تَحْتَ السَّرِيرِ.", "الْحَقِيبَةُ عَلَى السَّرِيرِ.", "الْحَقِيبَةِ تَحْتَ السَّرِيرُ.", "تَحْتَ الْحَقِيبَةُ السَّرِيرِ."], "Subjekt + تَحْتَ + Genitiv.", ["„auf“ statt „unter“.", "Fälle vertauscht.", "Falsche Stellung."])
]);
R("m05", 4, [
  E("يَا ____، أَيْنَ أَبُوكَ؟ (O Ḥāmid)", ["حَامِدُ", "حَامِدٌ", "حَامِدًا", "حَامِدِ"], "Nach يَا: nur Ḍamma.", ["Kein Tanwīn.", "Kein Akkusativ.", "Kein Genitiv."]),
  E("يَا ____، اجْلِسْ. (O Junge)", ["وَلَدُ", "وَلَدٌ", "الْوَلَدُ", "وَلَدًا"], "Nach يَا: Ḍamma ohne Tanwīn.", ["Kein Tanwīn.", "Kein al nach يَا.", "Kein Akkusativ."]),
  E("يَا ____! (O Muḥammad)", ["مُحَمَّدُ", "مُحَمَّدٌ", "مُحَمَّدٍ", "الْمُحَمَّدُ"], "Ḍamma ohne Tanwīn.", ["Kein Tanwīn.", "Kein Genitiv.", "Kein al."]),
  U("Ruf die Person an (mit يَا)", "بِلَالٌ", ["يَا بِلَالُ", "يَا بِلَالٌ", "يَا بِلَالِ", "يَا الْبِلَالُ"], "يَا + Ḍamma.", ["Kein Tanwīn.", "Kein Genitiv.", "Kein al."]),
  U("Ruf die Person an (mit يَا)", "طَبِيبٌ", ["يَا طَبِيبُ", "يَا طَبِيبٌ", "يَا طَبِيبَ", "يَا الطَّبِيبُ"], "يَا + Ḍamma.", ["Kein Tanwīn.", "Falscher Vokal.", "Kein al."]),
  F("Welche Endung hat ein einfaches Nomen nach يَا?", "يَا شَيْخُ", ["nur ein Ḍamma, kein Tanwīn", "Ḍamma mit Tanwīn", "Kasra", "Fatḥa mit Tanwīn"], "يَا شَيْخُ – nur Ḍamma.", ["Das Tanwīn fällt weg.", "Kein Genitiv.", "Kein Akkusativ."])
]);
R("m05", 5, [
  F("Wie spricht man وَاسْمُ الْبِنْتِ?", "وَاسْمُ الْبِنْتِ", ["wa-smu l-binti", "wa-ismu al-binti", "was-mu l-binti", "wa-asmu l-binti"], "اسْمٌ beginnt mit Hamzatu l-waṣl – nach وَ fällt das i weg.", ["Das i und das a fallen weg.", "Falsche Silben.", "Falscher Vokal."]),
  F("Welches Wort beginnt mit Hamzatu l-waṣl?", "", ["ابْنٌ", "أَبٌ", "أَخٌ", "أُمٌّ"], "اسْمٌ und ابْنٌ beginnen mit Hamzatu l-waṣl.", ["أَبٌ hat ein festes Hamza.", "أَخٌ hat ein festes Hamza.", "أُمٌّ hat ein festes Hamza."]),
  F("Wie spricht man وَابْنُ الْمُدِيرِ?", "وَابْنُ الْمُدِيرِ", ["wa-bnu l-mudīri", "wa-ibnu al-mudīri", "wab-nu l-mudīri", "wa-abnu l-mudīri"], "Das i von ابْنٌ fällt nach وَ weg.", ["Hamzatu l-waṣl fällt weg.", "Falsche Silben.", "Falscher Vokal."])
]);
R("m05", 6, [
  E("____ هَذَا؟ (Wessen Haus ist das?)", ["بَيْتُ مَنْ", "مَنْ بَيْتُ", "بَيْتٌ مَنْ", "بَيْتُ مَا"], "Muḍāf + مَنْ.", ["Reihenfolge vertauscht.", "Kein Tanwīn am Muḍāf.", "مَا fragt nach Sachen."]),
  E("سَيَّارَةُ ____ هَذِهِ؟ (Wessen Auto …?)", ["مَنْ", "مَنٍ", "مَنِ", "مَا"], "مَنْ ist unveränderlich – keine Genitivendung.", ["مَنْ bekommt kein Tanwīn.", "Hier keine Endung (nur vor al wird es مَنِ).", "Gefragt ist eine Person."]),
  U("Frag nach dem Besitzer", "هَذِهِ حَقِيبَةُ آمِنَةَ.", ["حَقِيبَةُ مَنْ هَذِهِ؟", "مَنْ حَقِيبَةُ هَذِهِ؟", "حَقِيبَةٌ مَنْ هَذِهِ؟", "حَقِيبَةُ مَنِ هَذِهِ؟"], "حَقِيبَةُ مَنْ – „wessen Tasche?“", ["Reihenfolge.", "Kein Tanwīn am Muḍāf.", "مَنْ bleibt unverändert."]),
  U("Frag nach dem Besitzer", "هَذَا مِفْتَاحُ الْمُدِيرِ.", ["مِفْتَاحُ مَنْ هَذَا؟", "مَنْ مِفْتَاحُ هَذَا؟", "مِفْتَاحٌ مَنْ هَذَا؟", "مِفْتَاحُ مَا هَذَا؟"], "Muḍāf + مَنْ.", ["Reihenfolge.", "Kein Tanwīn.", "مَا fragt nach Sachen."]),
  F("Warum hat مَنْ in كِتَابُ مَنْ keine Genitivendung?", "كِتَابُ مَنْ", ["مَنْ ist unveränderlich (mabnī).", "Es ist Nominativ.", "Es ist weiblich.", "Es ist Plural."], "Mabnī-Wörter ändern ihre Endung nicht.", ["Es steht an Genitivstelle.", "Kein Geschlechtsgrund.", "Kein Plural."])
]);

/* ---------- Lektion 6 ---------- */
R("m06", 0, [
  E("____ أُمٌّ. (Das ist eine Mutter.)", ["هَذِهِ", "هَذَا", "ذَلِكَ", "هُوَ"], "أُمٌّ ist weiblich → هَذِهِ.", ["هَذَا ist männlich.", "ذَلِكَ ist männlich.", "هُوَ ist männlich."]),
  E("____ عَيْنٌ. (Das ist ein Auge.)", ["هَذِهِ", "هَذَا", "ذَلِكَ", "هُوَ"], "عَيْنٌ ist weiblich.", ["Männlich.", "Männlich.", "Männlich."]),
  E("____ وَجْهٌ. (Das ist ein Gesicht.)", ["هَذَا", "هَذِهِ", "هِيَ", "تِلْكَ"], "وَجْهٌ ist männlich.", ["Weiblich.", "Weiblich.", "Weiblich."])
]);
R("m06", 1, [
  U("Mach es weiblich", "طَبِيبٌ", ["طَبِيبَةٌ", "طَبِيبَتٌ", "طَبِيبِيَّةٌ", "طَبِيبَاتٌ"], "Fatḥa + ة.", ["Am Ende ة, nicht ت.", "Die Form gibt es nicht.", "Das ist Plural."]),
  U("Mach es weiblich", "فَلَّاحٌ", ["فَلَّاحَةٌ", "فَلَّاحٌةٌ", "فَلَّاحَاتٌ", "فَلَّاحَتٌ"], "Fatḥa + ة.", ["Falsch geschrieben.", "Das ist Plural.", "Am Ende ة."]),
  U("Mach es weiblich", "صَغِيرٌ", ["صَغِيرَةٌ", "صَغِيرٌةٌ", "صِغَارٌ", "صُغْرَى"], "Fatḥa + ة.", ["Falsch geschrieben.", "Das ist Plural.", "Das ist eine andere Form."]),
  U("Mach es weiblich", "هَذَا تَاجِرٌ كَبِيرٌ.", ["هَذِهِ تَاجِرَةٌ كَبِيرَةٌ.", "هَذِهِ تَاجِرَةٌ كَبِيرٌ.", "هَذَا تَاجِرَةٌ كَبِيرَةٌ.", "هَذِهِ تَاجِرٌ كَبِيرَةٌ."], "Alles weiblich: هَذِهِ, -a + ة.", ["Auch das Adjektiv.", "هَذَا muss هَذِهِ werden.", "Auch das Nomen."]),
  F("Welcher Vokal steht vor dem ة?", "مُدَرِّسَةٌ", ["Fatḥa", "Kasra", "Ḍamma", "Sukūn"], "Vor ة steht immer Fatḥa.", ["Kein Kasra.", "Kein Ḍamma.", "Kein Sukūn."]),
  U("Mach es männlich", "هَذِهِ طَالِبَةٌ جَدِيدَةٌ.", ["هَذَا طَالِبٌ جَدِيدٌ.", "هَذَا طَالِبَةٌ جَدِيدَةٌ.", "هَذِهِ طَالِبٌ جَدِيدٌ.", "هَذَا طَالِبٌ جَدِيدَةٌ."], "ة weg, هَذِهِ → هَذَا.", ["ة muss weg.", "هَذِهِ muss weg.", "Auch beim Adjektiv."]),
  U("Mach es weiblich", "الْمُدِيرُ فِي الْمَكْتَبِ.", ["الْمُدِيرَةُ فِي الْمَكْتَبِ.", "الْمُدِيرَةِ فِي الْمَكْتَبِ.", "الْمُدِيرُةُ فِي الْمَكْتَبِ.", "مُدِيرَةٌ فِي الْمَكْتَبِ."], "مُدِيرٌ → مُدِيرَةٌ.", ["Nominativ.", "Fatḥa vor ة.", "al bleibt."])
]);
R("m06", 2, [
  F("Was ist die weibliche Form von أَخٌ?", "أَخٌ", ["أُخْتٌ", "أَخَةٌ", "أُخْوَةٌ", "إِخْوَةٌ"], "أَخٌ – أُخْتٌ (eigene Form).", ["Gibt es nicht.", "Gibt es nicht.", "Das ist der Plural."]),
  F("Was ist die weibliche Form von ابْنٌ?", "ابْنٌ", ["بِنْتٌ", "ابْنَتٌ", "بَنَاتٌ", "أَبْنَاءٌ"], "ابْنٌ – بِنْتٌ.", ["Die Form gibt es nicht.", "Das ist Plural.", "Das ist Plural von ابْنٌ."]),
  F("Was ist die weibliche Form von أَبٌ?", "أَبٌ", ["أُمٌّ", "أَبَةٌ", "أُخْتٌ", "بِنْتٌ"], "أَبٌ – أُمٌّ.", ["Gibt es nicht.", "Das ist „Schwester“.", "Das ist „Tochter“."]),
  U("Mach es weiblich", "هَذَا أَخِي.", ["هَذِهِ أُخْتِي.", "هَذِهِ أَخِي.", "هَذِهِ أَخَتِي.", "هَذَا أُخْتِي."], "أَخٌ → أُخْتٌ.", ["Das Nomen muss sich ändern.", "Gibt es nicht.", "هَذَا muss هَذِهِ werden."]),
  U("Mach es weiblich", "أَيْنَ الِابْنُ؟", ["أَيْنَ الْبِنْتُ؟", "أَيْنَ الِابْنَةِ؟", "أَيْنَ الْبِنْتِ؟", "أَيْنَ الِابْنَ؟"], "ابْنٌ → بِنْتٌ, Nominativ.", ["Im Buch: بِنْتٌ, und Nominativ.", "Nominativ.", "Akkusativ und männlich."])
]);
R("m06", 3, [
  F("Welches Körperteil ist weiblich?", "", ["رِجْلٌ", "رَأْسٌ", "أَنْفٌ", "فَمٌ"], "Paarige Körperteile sind meist weiblich.", ["Einzeln → männlich.", "Einzeln → männlich.", "Einzeln → männlich."]),
  E("هَذِهِ ____. (Das ist ein Ohr.)", ["أُذُنٌ", "أُذُنَةٌ", "آذَانٌ", "الْأُذُنُ"], "أُذُنٌ ist weiblich ohne ة.", ["Kein ة.", "Plural.", "Ohne al."]),
  E("هَذِهِ يَدٌ وَ____ رَأْسٌ.", ["هَذَا", "هَذِهِ", "تِلْكَ", "هِيَ"], "رَأْسٌ ist männlich.", ["Weiblich.", "Weiblich.", "Weiblich."])
]);
R("m06", 4, [
  E("هَذِهِ الْحَقِيبَةُ ____. (… gehört Āmina)", ["لِآمِنَةَ", "آمِنَةُ", "عِنْدَ آمِنَةُ", "لِآمِنَةُ"], "لِـ + Genitiv (Diptoton → Fatḥa).", ["„gehört“ = لِـ.", "Nach عِنْدَ Genitiv.", "Nach لِـ Genitiv."]),
  E("____ هَذِهِ السَّاعَةُ؟ (Wem gehört …?)", ["لِمَنْ", "مَنْ", "لِمَا", "مَا"], "„wem?“ = لِمَنْ.", ["„wer?“.", "Nicht für Personen.", "„was?“."]),
  U("Übersetze ins Arabische", "Das Auto gehört dem Arzt.", ["السَّيَّارَةُ لِلطَّبِيبِ.", "السَّيَّارَةُ الطَّبِيبِ.", "السَّيَّارَةُ لِالطَّبِيبِ.", "سَيَّارَةُ لِلطَّبِيبُ."], "لِـ + الْ → لِلْ, Genitiv.", ["لِـ fehlt.", "Das Alif von al fällt weg.", "Falsch."])
]);
R("m06", 5, [
  E("هَذَا الْبَيْتُ جَمِيلٌ ____. (… sehr schön)", ["جِدًّا", "أَيْضًا", "جِدٌّ", "كَثِيرًا"], "„sehr“ = جِدًّا nach dem Adjektiv.", ["„auch“.", "Die Form ist جِدًّا.", "Nicht im Buch."]),
  E("أَنَا طَالِبٌ وَأَنْتَ طَالِبٌ ____.", ["أَيْضًا", "جِدًّا", "وَ", "لِـ"], "„auch“ = أَيْضًا.", ["„sehr“.", "„und“ steht schon da.", "„gehört“."]),
  U("Füge „auch“ hinzu", "هَذَا مُدَرِّسٌ.", ["هَذَا مُدَرِّسٌ أَيْضًا.", "أَيْضًا هَذَا مُدَرِّسٌ.", "هَذَا أَيْضًا مُدَرِّسٌ أَيْضًا.", "هَذَا مُدَرِّسٌ جِدًّا."], "أَيْضًا am Satzende.", ["Im Buch steht es am Ende.", "Nur einmal.", "جِدًّا heißt „sehr“."]),
  U("Füge „sehr“ hinzu", "السَّيَّارَةُ سَرِيعَةٌ.", ["السَّيَّارَةُ سَرِيعَةٌ جِدًّا.", "السَّيَّارَةُ جِدًّا سَرِيعَةٌ.", "جِدًّا السَّيَّارَةُ سَرِيعَةٌ.", "السَّيَّارَةُ سَرِيعَةٌ أَيْضًا."], "جِدًّا nach dem Adjektiv.", ["Nach dem Adjektiv.", "Nicht am Anfang.", "„auch“."]),
  U("Übersetze ins Arabische", "Der Tee ist sehr heiß.", ["الشَّايُ حَارٌّ جِدًّا.", "الشَّايُ جِدًّا حَارٌّ.", "الشَّايُ حَارٌّ أَيْضًا.", "الشَّايُ الْحَارُّ جِدًّا."], "Prädikat + جِدًّا.", ["Nach dem Adjektiv.", "„auch“.", "Das ist kein Satz."])
]);

/* ---------- Lektion 7 ---------- */
R("m07", 1, [
  U("Übersetze ins Arabische", "Das ist Bilāl und das dort ist Ḥāmid.", ["هَذَا بِلَالٌ وَذَلِكَ حَامِدٌ.", "هَذَا بِلَالٌ وَتِلْكَ حَامِدٌ.", "هَذِهِ بِلَالٌ وَذَلِكَ حَامِدٌ.", "ذَلِكَ بِلَالٌ وَهَذَا حَامِدٌ."], "Männlich: هَذَا / ذَلِكَ.", ["تِلْكَ ist weiblich.", "هَذِهِ ist weiblich.", "nah/fern vertauscht."]),
  U("Übersetze ins Arabische", "Das ist Āmina und das dort ist Maryam.", ["هَذِهِ آمِنَةُ وَتِلْكَ مَرْيَمُ.", "هَذَا آمِنَةُ وَذَلِكَ مَرْيَمُ.", "هَذِهِ آمِنَةٌ وَتِلْكَ مَرْيَمٌ.", "تِلْكَ آمِنَةُ وَهَذِهِ مَرْيَمُ."], "Weiblich: هَذِهِ / تِلْكَ; Namen ohne Tanwīn.", ["Männliche Formen.", "Weibliche Namen ohne Tanwīn.", "nah/fern vertauscht."]),
  E("هَذِهِ بَطَّةٌ وَ____ دَجَاجَةٌ. (… und das dort ist ein Huhn)", ["تِلْكَ", "ذَلِكَ", "هَذَا", "هُوَ"], "Weiblich, fern → تِلْكَ.", ["Männlich.", "Männlich, nah.", "Personalpronomen."])
]);
R("m07", 2, [
  F("Welches Wort heißt „diese (hier), weiblich“?", "", ["هَذِهِ", "هَذَا", "ذَلِكَ", "تِلْكَ"], "nah, weiblich = هَذِهِ.", ["nah, männlich.", "fern, männlich.", "fern, weiblich."]),
  F("Welches Wort heißt „jener (dort), männlich“?", "", ["ذَلِكَ", "تِلْكَ", "هَذَا", "هَذِهِ"], "fern, männlich = ذَلِكَ.", ["fern, weiblich.", "nah, männlich.", "nah, weiblich."]),
  F("Welches Wort heißt „jene (dort), weiblich“?", "", ["تِلْكَ", "ذَلِكَ", "هَذِهِ", "هَذَا"], "fern, weiblich = تِلْكَ.", ["fern, männlich.", "nah, weiblich.", "nah, männlich."]),
  E("____ نَافِذَةٌ. (Das dort ist ein Fenster.)", ["تِلْكَ", "ذَلِكَ", "هَذِهِ", "هَذَا"], "نَافِذَةٌ ist weiblich, fern.", ["Männlich.", "Nah.", "Männlich und nah."])
]);

/* ---------- Lektion 8 ---------- */
R("m08", 0, [
  F("Was ist ein ganzer Satz?", "", ["هَذَا الْكِتَابُ جَدِيدٌ.", "هَذَا الْكِتَابُ", "الْكِتَابُ الْجَدِيدُ", "هَذَا الْكِتَابُ الْجَدِيدُ"], "Erst das unbestimmte Prädikat macht den Satz.", ["Das heißt nur „dieses Buch“.", "„das neue Buch“ – kein Satz.", "„dieses neue Buch“ – kein Satz."]),
  U("Übersetze ins Deutsche", "هَذَا الرَّجُلُ تَاجِرٌ.", ["Dieser Mann ist Händler.", "Das ist ein Mann und ein Händler.", "Das ist der Händler.", "Dieser Händler ist ein Mann."], "هَذَا + al-Wort = „dieser …“.", ["Kein „und“.", "Falsch zugeordnet.", "Vertauscht."])
]);
R("m08", 1, [
  E("____ الطَّالِبَةُ مِنْ مَالِيزِيَا. (Diese Studentin …)", ["هَذِهِ", "هَذَا", "ذَلِكَ", "هَؤُلَاءِ"], "Weiblich, nah.", ["Männlich.", "Männlich, fern.", "Plural."]),
  E("____ الْمُهَنْدِسُ مِنْ أَلْمَانِيَا. (Jener Ingenieur …)", ["ذَلِكَ", "تِلْكَ", "هَذِهِ", "هَذَا"], "Männlich, fern.", ["Weiblich.", "Weiblich, nah.", "Nah."])
]);
R("m08", 2, [
  E("الطَّبِيبُ فِي ____. (im Krankenhaus)", ["الْمُسْتَشْفَى", "الْمُسْتَشْفَيِ", "الْمُسْتَشْفَاةِ", "الْمُسْتَشْفِي"], "Wörter auf -ā bleiben unverändert.", ["Kein Kasra an ى.", "Nicht auf ة.", "Endet auf -ā."]),
  E("أَنَا مِنْ ____. (aus Amerika)", ["أَمْرِيكَا", "أَمْرِيكَاِ", "الْأَمْرِيكَا", "أَمْرِيكَةٍ"], "أَمْرِيكَا endet auf -ā – keine Endung.", ["Keine Kasra.", "Kein al.", "Endet auf -ā."]),
  E("ذَهَبَ الْمُدَرِّسُ إِلَى ____. (nach England)", ["إِنْجِلْتَرَا", "إِنْجِلْتَرَاءِ", "الْإِنْجِلْتَرَا", "إِنْجِلْتَرَةٍ"], "Endet auf -ā – unverändert.", ["Kein Hamza.", "Kein al.", "Endet auf -ā."]),
  F("Welches Wort bleibt in allen Fällen gleich?", "", ["سُوِيسْرَا", "الْعِرَاقُ", "السِّكِّينُ", "رَئِيسٌ"], "Wörter auf langes -ā bekommen keine Endung.", ["Bekommt Endungen.", "Bekommt Endungen.", "Bekommt Endungen."]),
  F("Warum steht in عَلَى الْمَكْتَبِ keine Endung an عَلَى?", "عَلَى", ["Es endet auf langes -ā.", "Es ist weiblich.", "Es ist ein Name.", "Es steht im Akkusativ."], "Wörter auf -ā bleiben immer gleich.", ["Kein Geschlechtsgrund.", "Es ist eine Präposition.", "Es hat keinen Fall."])
]);
R("m08", 3, [
  E("الْمُدَرِّسُ ____ الطُّلَّابِ. (vor den Studenten)", ["أَمَامَ", "خَلْفَ", "تَحْتَ", "فِي"], "„vor“ = أَمَامَ.", ["„hinter“.", "„unter“.", "„in“."]),
  E("الْحَدِيقَةُ خَلْفَ ____.", ["الْبَيْتِ", "الْبَيْتُ", "الْبَيْتَ", "بَيْتٌ"], "Nach خَلْفَ Genitiv.", ["Nominativ.", "Akkusativ.", "Nominativ."])
]);
R("m08", 4, [
  E("____ الْوَلَدُ عَلَى الْكُرْسِيِّ. (Der Junge setzte sich …)", ["جَلَسَ", "ذَهَبَ", "خَرَجَ", "جَلَسْتُ"], "„sich setzen“ = جَلَسَ.", ["„gehen“.", "„hinausgehen“.", "„ich setzte mich“."]),
  E("أَيْنَ ____ الْإِمَامُ؟ (Wo setzte sich der Imam?)", ["جَلَسَ", "جُلُوسٌ", "جَالِسٌ", "جَلَسْتَ"], "Perfekt: جَلَسَ.", ["Maṣdar.", "Partizip.", "„du“."]),
  U("Statt „ging“: „setzte sich“", "ذَهَبَ الطَّالِبُ أَمَامَ الْمُدَرِّسِ.", ["جَلَسَ الطَّالِبُ أَمَامَ الْمُدَرِّسِ.", "جَلَسَ الطَّالِبَ أَمَامَ الْمُدَرِّسِ.", "جَالِسٌ الطَّالِبُ أَمَامَ الْمُدَرِّسِ.", "جَلَسَ الطَّالِبُ أَمَامَ الْمُدَرِّسُ."], "Nur das Verb ändert sich.", ["Fāʿil im Nominativ.", "Kein Verb.", "Nach أَمَامَ Genitiv."]),
  U("Übersetze ins Arabische", "Bilāl setzte sich hinter den Imam.", ["جَلَسَ بِلَالٌ خَلْفَ الْإِمَامِ.", "جَلَسَ بِلَالٌ أَمَامَ الْإِمَامِ.", "جَلَسَ بِلَالًا خَلْفَ الْإِمَامِ.", "بِلَالٌ جَلَسَ خَلْفَ الْإِمَامُ."], "Verb – Fāʿil – خَلْفَ + Genitiv.", ["„vor“.", "Fāʿil im Nominativ.", "Nach خَلْفَ Genitiv."]),
  F("Was heißt جَلَسَ?", "جَلَسَ", ["er setzte sich / saß", "er ging", "er ging hinaus", "er kehrte zurück"], "جَلَسَ = sitzen, sich setzen.", ["ذَهَبَ.", "خَرَجَ.", "رَجَعَ."])
]);

/* ---------- Lektion 9 ---------- */
R("m09", 0, [
  F("Wo steht das Adjektiv (نَعْتٌ)?", "", ["hinter dem Nomen", "vor dem Nomen", "am Satzanfang", "beliebig"], "بَيْتٌ جَدِيدٌ – das Adjektiv folgt.", ["Nicht davor.", "Nicht am Anfang.", "Die Stellung ist fest."]),
  U("Übersetze ins Arabische", "ein großes Haus", ["بَيْتٌ كَبِيرٌ", "كَبِيرٌ بَيْتٌ", "بَيْتٌ الْكَبِيرُ", "الْبَيْتُ كَبِيرٌ"], "Nomen + Adjektiv, beide unbestimmt.", ["Das Adjektiv folgt.", "Bestimmtheit stimmt nicht.", "Das ist ein Satz."]),
  U("Übersetze ins Arabische", "ein fleißiger Student", ["طَالِبٌ مُجْتَهِدٌ", "مُجْتَهِدٌ طَالِبٌ", "طَالِبٌ الْمُجْتَهِدُ", "الطَّالِبُ مُجْتَهِدٌ"], "Nomen + Adjektiv.", ["Das Adjektiv folgt.", "Bestimmtheit stimmt nicht.", "Das ist ein Satz."]),
  U("Übersetze ins Arabische", "der schwere Stein", ["الْحَجَرُ الثَّقِيلُ", "الثَّقِيلُ الْحَجَرُ", "الْحَجَرُ ثَقِيلٌ", "حَجَرٌ الثَّقِيلُ"], "Beide bestimmt.", ["Das Adjektiv folgt.", "Das ist ein Satz.", "Bestimmtheit stimmt nicht."]),
  U("Übersetze ins Arabische", "eine schwierige Sprache", ["لُغَةٌ صَعْبَةٌ", "صَعْبَةٌ لُغَةٌ", "لُغَةٌ صَعْبٌ", "اللُّغَةُ صَعْبَةٌ"], "Weiblich, unbestimmt.", ["Das Adjektiv folgt.", "Geschlecht stimmt nicht.", "Das ist ein Satz."]),
  U("Übersetze ins Deutsche", "رَجُلٌ شَهِيرٌ", ["ein berühmter Mann", "der Mann ist berühmt", "der berühmte Mann", "berühmt ist ein Mann"], "Unbestimmtes Nomen + Adjektiv.", ["Das wäre الرَّجُلُ شَهِيرٌ.", "Das wäre الرَّجُلُ الشَّهِيرُ.", "Falsch."]),
  E("هَذِهِ مَدِينَةٌ ____.", ["قَدِيمَةٌ", "قَدِيمٌ", "الْقَدِيمَةُ", "قَدِيمَةً"], "Weiblich, unbestimmt, Nominativ.", ["Geschlecht.", "Bestimmtheit.", "Fall."]),
  E("هَذَا كُوبٌ ____.", ["مَلْآنُ", "مَلْآنَةٌ", "الْمَلْآنُ", "مَلْآنٌ"], "Männlich; -ān-Adjektiv ohne Tanwīn.", ["Geschlecht.", "Bestimmtheit.", "Kein Tanwīn bei -ān."])
]);
R("m09", 2, [
  F("Welches ist ein Satz („Der Lehrer ist neu“)?", "", ["الْمُدَرِّسُ جَدِيدٌ.", "الْمُدَرِّسُ الْجَدِيدُ", "مُدَرِّسٌ جَدِيدٌ", "جَدِيدٌ مُدَرِّسٌ"], "Bestimmt + unbestimmt = Satz.", ["„der neue Lehrer“.", "„ein neuer Lehrer“.", "Falsche Reihenfolge."]),
  F("Was heißt الْكِتَابُ السَّهْلُ?", "الْكِتَابُ السَّهْلُ", ["das leichte Buch", "Das Buch ist leicht.", "ein leichtes Buch", "Ist das Buch leicht?"], "Beide bestimmt → Nomen + Adjektiv.", ["Das wäre الْكِتَابُ سَهْلٌ.", "Das wäre كِتَابٌ سَهْلٌ.", "Keine Frage."]),
  F("Was heißt الْكِتَابُ سَهْلٌ?", "الْكِتَابُ سَهْلٌ", ["Das Buch ist leicht.", "das leichte Buch", "ein leichtes Buch", "leichte Bücher"], "Bestimmt + unbestimmt = Satz.", ["Das wäre الْكِتَابُ السَّهْلُ.", "Das wäre كِتَابٌ سَهْلٌ.", "Plural."]),
  U("Mach daraus einen Satz", "الْمَاءُ الْبَارِدُ", ["الْمَاءُ بَارِدٌ.", "مَاءٌ بَارِدٌ.", "الْمَاءُ الْبَارِدُ.", "بَارِدٌ الْمَاءُ."], "Prädikat unbestimmt.", ["„kaltes Wasser“.", "Das bleibt eine Wendung.", "Falsche Reihenfolge."]),
  U("Mach daraus eine Wendung (kein Satz)", "السَّيَّارَةُ جَدِيدَةٌ.", ["السَّيَّارَةُ الْجَدِيدَةُ", "سَيَّارَةٌ الْجَدِيدَةُ", "السَّيَّارَةُ جَدِيدَةُ", "الْجَدِيدَةُ السَّيَّارَةُ"], "Beide bestimmt.", ["Bestimmtheit muss gleich sein.", "Ohne Tanwīn und ohne al geht nicht.", "Reihenfolge."]),
  U("Mach daraus einen Satz mit Prädikat „groß“", "الْمَسْجِدُ الْجَدِيدُ", ["الْمَسْجِدُ الْجَدِيدُ كَبِيرٌ.", "الْمَسْجِدُ الْجَدِيدُ الْكَبِيرُ.", "الْمَسْجِدُ جَدِيدٌ الْكَبِيرُ.", "مَسْجِدٌ جَدِيدٌ كَبِيرٌ."], "„Die neue Moschee ist groß.“", ["Ohne unbestimmtes Prädikat kein Satz.", "Durcheinander.", "Das ist eine Wendung."]),
  U("Übersetze ins Arabische", "Die große Stadt ist schön.", ["الْمَدِينَةُ الْكَبِيرَةُ جَمِيلَةٌ.", "الْمَدِينَةُ كَبِيرَةٌ جَمِيلَةٌ.", "الْمَدِينَةُ الْكَبِيرَةُ الْجَمِيلَةُ.", "مَدِينَةٌ كَبِيرَةٌ جَمِيلَةٌ."], "Bestimmte Wendung + unbestimmtes Prädikat.", ["„Die Stadt ist groß und schön“.", "Kein Satz.", "Unbestimmt – kein Satz."]),
  U("Übersetze ins Deutsche", "الطَّالِبُ الْكَسْلَانُ فِي الْبَيْتِ.", ["Der faule Student ist zu Hause.", "Der Student ist faul im Haus.", "Ein fauler Student ist zu Hause.", "Der Student zu Hause ist faul."], "الطَّالِبُ الْكَسْلَانُ = der faule Student.", ["Falsch aufgeteilt.", "Es ist bestimmt.", "Falsch zugeordnet."])
]);
R("m09", 3, [
  E("أَنَا ____. (Ich bin durstig.)", ["عَطْشَانُ", "عَطْشَانٌ", "الْعَطْشَانُ", "عَطْشَانًا"], "-ān ohne Tanwīn.", ["Kein Tanwīn.", "Kein al.", "Nominativ."]),
  E("الرَّجُلُ ____. (Der Mann ist zornig.)", ["غَضْبَانُ", "غَضْبَانٌ", "الْغَضْبَانُ", "غَضْبَانَةٌ"], "-ān ohne Tanwīn.", ["Kein Tanwīn.", "Kein al.", "Männlich."]),
  F("Welches Adjektiv hat KEIN Tanwīn?", "", ["جَوْعَانُ", "جَدِيدٌ", "كَبِيرٌ", "سَهْلٌ"], "Adjektive auf -ān haben kein Tanwīn.", ["Hat Tanwīn.", "Hat Tanwīn.", "Hat Tanwīn."]),
  U("Übersetze ins Arabische", "Der Becher ist voll.", ["الْكُوبُ مَلْآنُ.", "الْكُوبُ مَلْآنٌ.", "الْكُوبُ الْمَلْآنُ.", "كُوبٌ مَلْآنُ."], "مَلْآنُ ohne Tanwīn.", ["Kein Tanwīn.", "Kein Satz.", "Subjekt bestimmt."])
]);
R("m09", 4, [
  E("الطَّالِبُ ____ جَلَسَ هُنَا مِنَ الْكُوَيْتِ.", ["الَّذِي", "الَّتِي", "مَنْ", "مَا"], "Männlicher Bezug → الَّذِي.", ["Weiblich.", "Kein Relativpronomen hier.", "Kein Relativpronomen hier."]),
  E("الْمُدَرِّسُ ____ خَرَجَ الْآنَ شَهِيرٌ.", ["الَّذِي", "الَّتِي", "هُوَ", "مَنْ"], "Männlicher Bezug → الَّذِي.", ["Weiblich.", "Personalpronomen.", "Kein Relativpronomen hier."]),
  U("Verbinde mit الَّذِي", "الْوَلَدُ مُجْتَهِدٌ. الْوَلَدُ ذَهَبَ إِلَى الْمَكْتَبَةِ.", ["الْوَلَدُ الَّذِي ذَهَبَ إِلَى الْمَكْتَبَةِ مُجْتَهِدٌ.", "الْوَلَدُ ذَهَبَ الَّذِي إِلَى الْمَكْتَبَةِ مُجْتَهِدٌ.", "الَّذِي الْوَلَدُ ذَهَبَ إِلَى الْمَكْتَبَةِ مُجْتَهِدٌ.", "الْوَلَدُ الَّذِي مُجْتَهِدٌ ذَهَبَ إِلَى الْمَكْتَبَةِ الْوَلَدُ."], "الَّذِي direkt nach dem Bezugswort.", ["Stellung.", "Stellung.", "Doppelt."]),
  U("Übersetze ins Deutsche", "الرَّجُلُ الَّذِي خَرَجَ مِنَ الْمَسْجِدِ إِمَامٌ.", ["Der Mann, der aus der Moschee kam, ist ein Imam.", "Der Mann ging aus der Moschee des Imams.", "Der Imam ist aus der Moschee gekommen.", "Ein Mann, der Imam ist, ging hinaus."], "الَّذِي = der, welcher.", ["Falsch.", "Falsch zugeordnet.", "Falsch zugeordnet."]),
  F("Wann nimmt man الَّذِي?", "", ["für einen männlichen Bezug", "für einen weiblichen Bezug", "für Orte", "für Fragen"], "الَّذِي ist männlich.", ["Weiblich: الَّتِي.", "Kein Ortswort.", "Kein Fragewort."])
]);
R("m09", 5, [
  E("هَذَا الْقَلَمُ ____. (… für den Direktor)", ["لِلْمُدِيرِ", "لِالْمُدِيرِ", "لِلْمُدِيرُ", "الْمُدِيرِ"], "لِـ + الْ → لِلْ.", ["Das Alif fällt weg.", "Genitiv.", "لِـ fehlt."]),
  E("هَذِهِ الْحَقِيبَةُ ____. (… gehört der Studentin)", ["لِلطَّالِبَةِ", "لِالطَّالِبَةِ", "لِطَّالِبَةِ", "لِلطَّالِبَةُ"], "لِلْ + Sonnenbuchstabe: لِلطَّالِبَةِ.", ["Das Alif fällt weg.", "Das ل von al bleibt geschrieben.", "Genitiv."]),
  E("الطَّبِيبُ ____ الْمَرِيضِ. (beim Kranken)", ["عِنْدَ", "مِنْ", "إِلَى", "تَحْتَ"], "„bei“ = عِنْدَ.", ["„von“.", "„zu“.", "„unter“."]),
  E("الْمُدِيرُ عِنْدَ ____.", ["الْوَزِيرِ", "الْوَزِيرُ", "الْوَزِيرَ", "وَزِيرٌ"], "Nach عِنْدَ Genitiv.", ["Nominativ.", "Akkusativ.", "Nominativ."]),
  U("Setz لِـ davor", "الطِّفْلُ", ["لِلطِّفْلِ", "لِالطِّفْلِ", "لِلطِّفْلُ", "لِطِفْلٌ"], "لِـ + الْ → لِلْ, Genitiv.", ["Das Alif fällt weg.", "Genitiv.", "Falsch."]),
  U("Übersetze ins Arabische", "Der Junge ist beim Arzt.", ["الْوَلَدُ عِنْدَ الطَّبِيبِ.", "الْوَلَدُ عِنْدَ الطَّبِيبُ.", "الْوَلَدُ لِلطَّبِيبِ.", "عِنْدَ الْوَلَدُ الطَّبِيبِ."], "عِنْدَ + Genitiv.", ["Genitiv.", "„gehört dem Arzt“.", "Stellung."])
]);

/* ---------- Lektion 10 ---------- */
R("m10", 0, [
  U("Statt „das Buch“: „mein Buch“", "الْكِتَابُ", ["كِتَابِي", "الْكِتَابِي", "كِتَابٌي", "كِتَابُكَ"], "al/Tanwīn fallen weg, ـِي kommt an.", ["Kein al.", "Kein Tanwīn.", "„dein“."]),
  U("Statt „ein Haus“: „ihr Haus“", "بَيْتٌ", ["بَيْتُهَا", "بَيْتُهُ", "بَيْتٌهَا", "الْبَيْتُهَا"], "„ihr“ = ـهَا.", ["„sein“.", "Kein Tanwīn.", "Kein al."]),
  U("Statt „sein“: „dein“", "قَلَمُهُ", ["قَلَمُكَ", "قَلَمِي", "قَلَمُهَا", "قَلَمٌكَ"], "ـهُ → ـكَ.", ["„mein“.", "„ihr“.", "Kein Tanwīn."]),
  E("أَيْنَ ____؟ (Wo ist ihre Tasche?)", ["حَقِيبَتُهَا", "حَقِيبَةُهَا", "حَقِيبَتُهُ", "حَقِيبَتِي"], "ة → ت vor der Endung.", ["ة wird zu ت.", "„seine“.", "„meine“."])
]);
R("m10", 1, [
  E("هَذَا ____. (Das ist sein Vater.)", ["أَبُوهُ", "أَبُهُ", "أَبِيهِ", "أَبُوهَا"], "أَبٌ + Endung → أَبُو.", ["Das و fehlt.", "Im Nominativ و.", "„ihr Vater“."]),
  E("هَذَا ____ مُحَمَّدٍ. (Abū Muḥammad)", ["أَبُو", "أَبُ", "أَبِي", "أَبٌ"], "أَبُو مُحَمَّدٍ.", ["Das و fehlt.", "Das heißt „mein Vater“.", "Kein Tanwīn am Muḍāf."])
]);
R("m10", 2, [
  E("أَ____ سَيَّارَةٌ؟ (Hast du ein Auto?)", ["عِنْدَكَ", "عِنْدِي", "لَكَ", "مَعَكَ"], "Dinge besitzt man mit عِنْدَ.", ["„ich habe“.", "Für Dinge nimmt man عِنْدَ.", "„mit dir“."]),
  E("____ قَلَمٌ أَحْمَرُ. (Ich habe einen roten Stift.)", ["عِنْدِي", "لِي", "عِنْدَكَ", "مَعِي"], "Ding → عِنْدِي.", ["لِـ für Verwandte.", "„du hast“.", "„mit mir“."]),
  E("____ كِتَابٌ؟ (Hat er ein Buch?)", ["أَعِنْدَهُ", "أَعِنْدَهَا", "أَعِنْدَكَ", "أَعِنْدِي"], "عِنْدَ + ـهُ.", ["„sie“.", "„du“.", "„ich“."]),
  U("Statt „ich“: „du“", "عِنْدِي سَاعَةٌ.", ["عِنْدَكَ سَاعَةٌ.", "عِنْدَهُ سَاعَةٌ.", "عِنْدِكَ سَاعَةٌ.", "لَكَ سَاعَةٌ."], "عِنْدِي → عِنْدَكَ.", ["„er“.", "Falscher Vokal.", "Für Dinge عِنْدَ."]),
  U("Übersetze ins Arabische", "Sie hat einen Schlüssel.", ["عِنْدَهَا مِفْتَاحٌ.", "عِنْدَهُ مِفْتَاحٌ.", "لَهَا مِفْتَاحٌ.", "عِنْدَهَا مِفْتَاحُ."], "عِنْدَ + ـهَا.", ["„er“.", "Für Dinge عِنْدَ.", "Tanwīn."])
]);
R("m10", 3, [
  E("____ أُخْتٌ. (Ich habe eine Schwester.)", ["لِي", "عِنْدِي", "لِيَ", "مَعِي"], "Verwandte → لِي.", ["Für Verwandte لِـ.", "Die Form ist لِي.", "„mit mir“."]),
  E("أَ____ أَخٌ؟ (Hast du einen Bruder?)", ["لَكَ", "لِكَ", "عِنْدَكَ", "لِي"], "لِـ vor Pronomen → لَـ.", ["Vor Pronomen wird لِـ zu لَـ.", "Für Verwandte لِـ.", "„ich habe“."]),
  E("____ ابْنٌ وَبِنْتٌ. (Er hat einen Sohn und eine Tochter.)", ["لَهُ", "لِهُ", "عِنْدَهُ", "لَهَا"], "لِـ + ـهُ → لَهُ.", ["Vor Pronomen لَـ.", "Für Verwandte لِـ.", "„sie hat“."]),
  E("____ زَوْجٌ. (Sie hat einen Ehemann.)", ["لَهَا", "لِهَا", "لَهُ", "عِنْدِي"], "لَهَا.", ["Vor Pronomen لَـ.", "„er“.", "„ich“."]),
  U("Statt „ich“: „er“", "لِي أَخٌ.", ["لَهُ أَخٌ.", "لِهُ أَخٌ.", "لَكَ أَخٌ.", "عِنْدَهُ أَخٌ."], "لِي → لَهُ.", ["Vor ـهُ steht لَـ.", "„du“.", "Für Verwandte لِـ."]),
  F("Welche Form behält das Kasra?", "", ["لِي", "لَكَ", "لَهُ", "لَهَا"], "Nur لِي behält das Kasra.", ["Fatḥa.", "Fatḥa.", "Fatḥa."]),
  U("Übersetze ins Arabische", "Hast du eine Schwester? – Nein, ich habe einen Bruder.", ["أَلَكَ أُخْتٌ؟ – لَا، لِي أَخٌ.", "أَعِنْدَكَ أُخْتٌ؟ – لَا، عِنْدِي أَخٌ.", "أَلِكَ أُخْتٌ؟ – لَا، لِي أَخٌ.", "أَلَكَ أُخْتٌ؟ – نَعَمْ، لِي أَخٌ."], "Verwandte → لِـ (لَكَ / لِي).", ["Für Verwandte لِـ.", "Vor Pronomen لَـ.", "„ja“ passt nicht."])
]);
R("m10", 4, [
  E("أَيْنَ ____ يَا بِلَالُ؟", ["ذَهَبْتَ", "ذَهَبْتُ", "ذَهَبَ", "ذَهَبْتِ"], "du (m.) = -ta.", ["„ich“.", "„er“.", "„du (w.)“ (Lektion 12)."]),
  E("____ إِلَى الْمَدْرَسَةِ مَعَ أَخِي.", ["ذَهَبْتُ", "ذَهَبْتَ", "ذَهَبَ", "ذَهَبُ"], "„ich“ = -tu.", ["„du“.", "„er“.", "Gibt es nicht."]),
  U("Statt „er“: „ich“", "ذَهَبَ إِلَى السُّوقِ.", ["ذَهَبْتُ إِلَى السُّوقِ.", "ذَهَبْتَ إِلَى السُّوقِ.", "ذَهَبُ إِلَى السُّوقِ.", "ذَهَبَتُ إِلَى السُّوقِ."], "-a → -tu.", ["„du“.", "Gibt es nicht.", "Falsch geschrieben."]),
  F("Was heißt ذَهَبْتَ?", "ذَهَبْتَ", ["du (m.) gingst", "ich ging", "er ging", "sie ging"], "-ta = du (m.).", ["ذَهَبْتُ.", "ذَهَبَ.", "ذَهَبَتْ."])
]);
R("m10", 5, [
  E("ذَهَبَ الْمُدِيرُ ____ الْوَزِيرِ. (mit dem Minister)", ["مَعَ", "عِنْدَ", "مِنْ", "تَحْتَ"], "„mit, zusammen mit“ = مَعَ.", ["„bei“.", "„von“.", "„unter“."]),
  E("أَخِي يَدْرُسُ ____الْجَامِعَةِ. (an der Universität)", ["بِ", "مَعَ ", "لِ", "عِنْدَ "], "بِـ = in, an: بِالْجَامِعَةِ.", ["„mit“.", "„für“.", "„bei“."]),
  E("____ عِنْدِي قَلَمٌ. (Ich habe keinen Stift.)", ["مَا", "لَا", "لَيْسَ", "لَمْ"], "Verneinung mit مَا.", ["Im Buch mit مَا.", "Kommt erst in Buch 2.", "Kommt erst in Buch 2."]),
  U("Verneine", "عِنْدِي سَيَّارَةٌ.", ["مَا عِنْدِي سَيَّارَةٌ.", "عِنْدِي مَا سَيَّارَةٌ.", "لَا عِنْدِي سَيَّارَةٌ.", "مَا عِنْدِي سَيَّارَةً."], "مَا vor den Satz.", ["مَا steht vorne.", "Im Buch: مَا.", "Nominativ bleibt."]),
  U("Übersetze ins Arabische", "Ich ging mit meinem Vater.", ["ذَهَبْتُ مَعَ أَبِي.", "ذَهَبْتُ مَعَ أَبُوكَ.", "ذَهَبَ مَعَ أَبِي.", "ذَهَبْتُ عِنْدَ أَبِي."], "مَعَ + أَبِي.", ["Das ist „dein Vater“ (falscher Fall).", "„er ging“.", "„bei“."])
]);

/* ---------- Lektion 11 ---------- */
R("m11", 0, [
  E("هَذَا بَيْتٌ وَ____ حَدِيقَةٌ. (… darin ist ein Garten)", ["فِيهِ", "فِيهَا", "فِي", "عَلَيْهِ"], "بَيْتٌ ist männlich → فِيهِ.", ["Für Weibliches.", "Braucht ein Nomen.", "„darauf“."]),
  E("هَذِهِ غُرْفَةٌ ____ سَرِيرٌ. (… darin ist ein Bett)", ["فِيهَا", "فِيهِ", "فِيكَ", "فِي"], "غُرْفَةٌ ist weiblich → فِيهَا.", ["Für Männliches.", "„in dir“.", "Braucht ein Nomen."]),
  E("____ الْعَرَبِيَّةَ. (Ich liebe Arabisch.)", ["أُحِبُّ", "تُحِبُّ", "أَحَبَّ", "حُبٌّ"], "„ich liebe“ = أُحِبُّ.", ["„du liebst“.", "Andere Form.", "Nomen „Liebe“."]),
  U("Übersetze ins Arabische", "Das ist eine Tasche, darin ist ein Buch.", ["هَذِهِ حَقِيبَةٌ فِيهَا كِتَابٌ.", "هَذِهِ حَقِيبَةٌ فِيهِ كِتَابٌ.", "هَذَا حَقِيبَةٌ فِيهَا كِتَابٌ.", "هَذِهِ حَقِيبَةٌ فِيهَا كِتَابًا."], "Tasche weiblich → فِيهَا.", ["Tasche ist weiblich.", "هَذِهِ für weiblich.", "Nominativ."]),
  F("Was heißt فِيهِ?", "فِيهِ", ["darin (männlich)", "darin (weiblich)", "in mir", "für ihn"], "فِيهِ = in ihm, darin.", ["Das ist فِيهَا.", "Das wäre فِيَّ.", "Das wäre لَهُ."])
]);
R("m11", 2, [
  E("أُحِبُّ ____. (Ich liebe meinen Bruder.)", ["أَخِي", "أَخَاكَ", "أَخُوهُ", "أَخِيَ"], "Bei ـِي sieht man das -a nicht.", ["„deinen Bruder“.", "„sein Bruder“, Nominativ.", "Kein Fatḥa auf ي."]),
  E("أُحِبُّ ____. (Ich liebe mein Land.)", ["بَلَدِي", "بَلَدَي", "بَلَدُي", "بَلَدًا"], "ـِي: das Akkusativ-a ist nicht zu sehen.", ["Vor ـِي steht Kasra.", "Vor ـِي steht Kasra.", "„ein Land“."]),
  F("Warum sieht man in أُحِبُّ أُمِّي kein -a?", "أُحِبُّ أُمِّي", ["Vor ـِي „mein“ steht immer Kasra.", "أُمِّي ist kein Objekt.", "Es ist Genitiv.", "Weil أُمٌّ weiblich ist."], "Das -a ist da, aber man sieht es nicht.", ["Es ist das Objekt.", "Es ist Akkusativ.", "Das Geschlecht spielt keine Rolle."]),
  U("Statt „die Schule“: „meine Schule“", "أُحِبُّ الْمَدْرَسَةَ.", ["أُحِبُّ مَدْرَسَتِي.", "أُحِبُّ مَدْرَسَتَي.", "أُحِبُّ الْمَدْرَسَتِي.", "أُحِبُّ مَدْرَسَةِي."], "مَدْرَسَتِي – Kasra vor ـِي.", ["Kasra vor ـِي.", "Kein al.", "ة wird zu ت."]),
  U("Statt „das Buch“: „mein Buch“", "أُحِبُّ الْكِتَابَ.", ["أُحِبُّ كِتَابِي.", "أُحِبُّ كِتَابَي.", "أُحِبُّ كِتَابَ.", "أُحِبُّ الْكِتَابِي."], "كِتَابِي.", ["Kasra vor ـِي.", "„mein“ fehlt.", "Kein al."]),
  U("Statt „dein“: „mein“", "أُحِبُّ أَبَاكَ.", ["أُحِبُّ أَبِي.", "أُحِبُّ أَبَايَ.", "أُحِبُّ أَبُوي.", "أُحِبُّ أَبَاي."], "„mein Vater“ = أَبِي.", ["Die Form ist أَبِي.", "Die Form ist أَبِي.", "Die Form ist أَبِي."])
]);
R("m11", 3, [
  U("Füge „und meinen Bruder“ hinzu", "أُحِبُّ أَبِي وَأُمِّي.", ["أُحِبُّ أَبِي وَأُمِّي وَأَخِي.", "أُحِبُّ أَبِي، أُمِّي وَأَخِي.", "أُحِبُّ أَبِي وَأُمِّي أَخِي.", "أُحِبُّ وَأَبِي وَأُمِّي وَأَخِي."], "وَ vor jedem weiteren Glied.", ["Das وَ vor أُمِّي bleibt.", "وَ fehlt.", "Vor dem ersten Glied kein وَ."]),
  U("Übersetze ins Arabische", "Ich mag Tee, Kaffee und Milch.", ["أُحِبُّ الشَّايَ وَالْقَهْوَةَ وَاللَّبَنَ.", "أُحِبُّ الشَّايَ، الْقَهْوَةَ وَاللَّبَنَ.", "أُحِبُّ الشَّايَ وَالْقَهْوَةُ وَاللَّبَنُ.", "أُحِبُّ الشَّايُ وَالْقَهْوَةُ وَاللَّبَنُ."], "وَ vor jedem Glied, alle im Akkusativ.", ["وَ vor jedem Glied.", "Alle im Akkusativ.", "Alle im Akkusativ."]),
  F("Welche Aufzählung ist richtig arabisch?", "", ["قَلَمٌ وَكِتَابٌ وَدَفْتَرٌ", "قَلَمٌ، كِتَابٌ وَدَفْتَرٌ", "قَلَمٌ كِتَابٌ دَفْتَرٌ", "وَقَلَمٌ وَكِتَابٌ وَدَفْتَرٌ"], "وَ steht vor jedem weiteren Glied.", ["Vor jedem Glied وَ.", "Ohne وَ.", "Vor dem ersten kein وَ."]),
  U("Übersetze ins Arabische", "Ich liebe Allah, den Gesandten und den Islam.", ["أُحِبُّ اللَّهَ وَالرَّسُولَ وَالْإِسْلَامَ.", "أُحِبُّ اللَّهَ، الرَّسُولَ وَالْإِسْلَامَ.", "أُحِبُّ اللَّهُ وَالرَّسُولُ وَالْإِسْلَامُ.", "أُحِبُّ اللَّهَ وَالرَّسُولِ وَالْإِسْلَامِ."], "وَ vor jedem Glied, Akkusativ.", ["وَ vor jedem Glied.", "Akkusativ.", "Akkusativ, nicht Genitiv."]),
  E("عِنْدِي قَلَمٌ ____دَفْتَرٌ ____كِتَابٌ.", ["وَ … وَ", "، … وَ", "وَ … ،", "أَوْ … أَوْ"], "وَ vor jedem Glied.", ["وَ vor jedem Glied.", "وَ vor jedem Glied.", "„oder“."])
]);
R("m11", 4, [
  E("____ تُحِبُّ؟ – أُحِبُّ التُّفَّاحَ.", ["مَاذَا", "مَنْ", "أَيْنَ", "لِمَاذَا"], "„was?“ vor Verben = مَاذَا.", ["„wer?“.", "„wo?“.", "„warum?“."]),
  E("أَ____ اللُّغَةَ الْعَرَبِيَّةَ؟ (Liebst du …?)", ["تُحِبُّ", "أُحِبُّ", "يُحِبُّ", "نُحِبُّ"], "„du liebst“ = تُحِبُّ.", ["„ich“.", "„er“.", "„wir“."]),
  U("Statt „ich“: „du“ (Frage)", "أُحِبُّ الْمَدِينَةَ.", ["أَتُحِبُّ الْمَدِينَةَ؟", "أَأُحِبُّ الْمَدِينَةَ؟", "مَاذَا الْمَدِينَةَ؟", "أَتُحِبُّ الْمَدِينَةُ؟"], "أَ + تُحِبُّ.", ["Man fragt „du“.", "Falsch.", "Akkusativ."])
]);

/* ---------- Lektion 12 ---------- */
R("m12", 0, [
  E("مَا اسْمُ____؟ (Wie heißt du? – zu einer Frau)", ["كِ", "كَ", "هَا", "ي"], "„dein“ (w.) = ـكِ: اسْمُكِ.", ["Für einen Mann.", "„ihr“.", "„mein“."]),
  E("مِنْ أَيْنَ ____ يَا مَرْيَمُ؟", ["أَنْتِ", "أَنْتَ", "هِيَ", "أَنَا"], "„du“ zu einer Frau = أَنْتِ.", ["Für einen Mann.", "„sie“.", "„ich“."]),
  U("Sprich eine Frau an", "أَيْنَ بَيْتُكَ؟", ["أَيْنَ بَيْتُكِ؟", "أَيْنَ بَيْتُهَا؟", "أَيْنَ بَيْتُكُمْ؟", "أَيْنَ بَيْتِكِ؟"], "ـكَ → ـكِ.", ["„ihr“.", "Plural.", "Nominativ."]),
  U("Sprich eine Frau an", "أَنْتَ طَالِبٌ.", ["أَنْتِ طَالِبَةٌ.", "أَنْتِ طَالِبٌ.", "أَنْتَ طَالِبَةٌ.", "هِيَ طَالِبَةٌ."], "أَنْتِ + weibliches Nomen.", ["Auch das Nomen.", "Auch das Pronomen.", "„sie“."]),
  U("Sprich eine Frau an", "أَعِنْدَكَ قَلَمٌ؟", ["أَعِنْدَكِ قَلَمٌ؟", "أَعِنْدَهَا قَلَمٌ؟", "أَعِنْدَكَ قَلَمَةٌ؟", "أَعِنْدِكِ قَلَمٌ؟"], "عِنْدَكِ.", ["„sie hat“.", "Der Stift bleibt.", "Falscher Vokal."]),
  F("Welche Endung heißt „dein“ zu einer Frau?", "", ["ـكِ", "ـكَ", "ـهَا", "ـكُنَّ"], "ـكِ mit Kasra.", ["Für einen Mann.", "„ihr“.", "Plural."]),
  U("Übersetze ins Arabische", "Wo ist deine Mutter, Fāṭima?", ["أَيْنَ أُمُّكِ يَا فَاطِمَةُ؟", "أَيْنَ أُمُّكَ يَا فَاطِمَةُ؟", "أَيْنَ أُمُّهَا يَا فَاطِمَةُ؟", "أَيْنَ أُمِّكِ يَا فَاطِمَةُ؟"], "ـكِ zu einer Frau.", ["Für einen Mann.", "„ihre“.", "Nominativ."])
]);
R("m12", 2, [
  E("____ الطَّالِبَةُ إِلَى الْفَصْلِ.", ["ذَهَبَتِ", "ذَهَبَتْ", "ذَهَبَ", "ذَهَبْتِ"], "-at vor al → Kasra.", ["Vor al Kasra.", "Weiblich.", "„du (w.)“."]),
  E("____ الْأُمُّ مِنَ الْمَطْبَخِ. (Die Mutter ging hinaus.)", ["خَرَجَتِ", "خَرَجَتْ", "خَرَجَ", "خَرَجْتِ"], "Vor al Kasra.", ["Vor al Kasra.", "Weiblich.", "„du (w.)“."]),
  E("____ آمِنَةُ أَمَامَ الْمُدَرِّسَةِ. (Āmina setzte sich …)", ["جَلَسَتْ", "جَلَسَتِ", "جَلَسَ", "جَلَسْتِ"], "Ohne al danach bleibt das Sukūn.", ["Kasra nur vor al.", "Weiblich.", "„du (w.)“."]),
  F("Wie spricht man ذَهَبَتِ الْبِنْتُ?", "ذَهَبَتِ الْبِنْتُ", ["dhahabati-l-bintu", "dhahabat al-bintu", "dhahabatu-l-bintu", "dhahaba-l-bintu"], "Sukūn → Kasra, Hamzatu l-waṣl fällt weg.", ["Zwei Sukūn hintereinander gehen nicht.", "Der Hilfsvokal ist Kasra.", "Das t fehlt."]),
  U("Mach es weiblich", "رَجَعَ الْمُدِيرُ.", ["رَجَعَتِ الْمُدِيرَةُ.", "رَجَعَتْ الْمُدِيرَةُ.", "رَجَعَ الْمُدِيرَةُ.", "رَجَعْتِ الْمُدِيرَةُ."], "Kasra vor al.", ["Vor al Kasra.", "Weiblich.", "„du“."]),
  U("Mach es weiblich", "خَرَجَ الطِّفْلُ.", ["خَرَجَتِ الطِّفْلَةُ.", "خَرَجَتْ الطِّفْلَةُ.", "خَرَجَ الطِّفْلَةُ.", "خَرَجْتِ الطِّفْلَةُ."], "Kasra vor al.", ["Vor al Kasra.", "Weiblich.", "„du“."]),
  U("Übersetze ins Arabische", "Die Lehrerin setzte sich.", ["جَلَسَتِ الْمُدَرِّسَةُ.", "جَلَسَتْ الْمُدَرِّسَةُ.", "جَلَسَ الْمُدَرِّسَةُ.", "جَلَسْتِ الْمُدَرِّسَةُ."], "Kasra vor al.", ["Vor al Kasra.", "Weiblich.", "„du“."])
]);
R("m12", 3, [
  E("السَّيَّارَةُ ____ خَرَجَتِ الْآنَ جَدِيدَةٌ.", ["الَّتِي", "الَّذِي", "مَا", "هِيَ"], "Weiblicher Bezug → الَّتِي.", ["Männlich.", "Kein Relativpronomen hier.", "Personalpronomen."]),
  E("الْمُدَرِّسُ ____ جَلَسَ هُنَا مِنْ سُورِيَا.", ["الَّذِي", "الَّتِي", "مَنْ", "هُوَ"], "Männlicher Bezug → الَّذِي.", ["Weiblich.", "Kein Relativpronomen hier.", "Personalpronomen."]),
  U("Verbinde mit الَّتِي", "الْمُمَرِّضَةُ مِنْ مَالِيزِيَا. الْمُمَرِّضَةُ خَرَجَتْ.", ["الْمُمَرِّضَةُ الَّتِي خَرَجَتْ مِنْ مَالِيزِيَا.", "الْمُمَرِّضَةُ الَّذِي خَرَجَتْ مِنْ مَالِيزِيَا.", "الْمُمَرِّضَةُ خَرَجَتْ الَّتِي مِنْ مَالِيزِيَا.", "الَّتِي الْمُمَرِّضَةُ خَرَجَتْ مِنْ مَالِيزِيَا."], "الَّتِي nach dem Bezugswort.", ["Männlich.", "Stellung.", "Stellung."])
]);
R("m12", 4, [
  E("هَذَا قَلَمِي ____. (… mein Stift – betont)", ["أَنَا", "أَنْتَ", "هُوَ", "لِي"], "Betonung: Pronomen anhängen – قَلَمِي أَنَا.", ["„du“.", "„er“.", "Falsch."]),
  E("هَذِهِ سَيَّارَتُكِ ____. (… deine, betont, zu einer Frau)", ["أَنْتِ", "أَنْتَ", "هِيَ", "أَنَا"], "Pronomen passend zu ـكِ.", ["Für einen Mann.", "„sie“.", "„ich“."]),
  U("Betone „sein“", "هَذَا بَيْتُهُ.", ["هَذَا بَيْتُهُ هُوَ.", "هَذَا هُوَ بَيْتُهُ هُوَ.", "هُوَ هَذَا بَيْتُهُ.", "هَذَا بَيْتُهُ هِيَ."], "Pronomen ans Ende.", ["Nur einmal.", "Nicht am Anfang.", "Weiblich."]),
  F("Was bewirkt أَنْتَ in هَذَا كِتَابُكَ أَنْتَ?", "هَذَا كِتَابُكَ أَنْتَ", ["Es betont „dein“.", "Es ist das Subjekt.", "Es ist eine Frage.", "Es heißt „und du“."], "Das Pronomen dient der Betonung.", ["Das Subjekt ist هَذَا.", "Keine Frage.", "Kein „und“."])
]);
R("m12", 5, [
  E("كَيْفَ ____؟ – أَنَا بِخَيْرٍ.", ["حَالُكِ", "حَالَكِ", "حَالِكِ", "حَالٌ"], "كَيْفَ حَالُكِ؟ (zu einer Frau).", ["Nominativ.", "Nominativ.", "„dein“ fehlt."]),
  E("أَنَا ____. (Mir geht es gut.)", ["بِخَيْرٍ", "بِخَيْرٌ", "خَيْرٌ", "بِالْخَيْرُ"], "بِـ + Genitiv: بِخَيْرٍ.", ["Nach بِـ Genitiv.", "بِـ fehlt.", "Falsch."]),
  E("رَجَعْتُ ____ الصَّلَاةِ. (nach dem Gebet)", ["بَعْدَ", "أَمَامَ", "تَحْتَ", "عَلَى"], "„nach“ = بَعْدَ.", ["„vor“ (Ort).", "„unter“.", "„auf“."]),
  E("ذَهَبْتُ إِلَى الْبَيْتِ بَعْدَ ____.", ["الدَّرْسِ", "الدَّرْسُ", "الدَّرْسَ", "دَرْسٌ"], "Nach بَعْدَ Genitiv.", ["Nominativ.", "Akkusativ.", "Nominativ."]),
  U("Übersetze ins Arabische", "Wie geht es dir (m.)? – Mir geht es gut.", ["كَيْفَ حَالُكَ؟ – أَنَا بِخَيْرٍ.", "كَيْفَ حَالُكِ؟ – أَنَا بِخَيْرٍ.", "أَيْنَ حَالُكَ؟ – أَنَا بِخَيْرٍ.", "كَيْفَ حَالُكَ؟ – أَنَا خَيْرٌ."], "كَيْفَ حَالُكَ؟", ["Zu einer Frau.", "„wo“.", "بِـ fehlt."])
]);

/* ---------- Lektion 13 ---------- */
R("m13", 0, [
  U("Plural (gesund, männlich)", "مُهَنْدِسٌ", ["مُهَنْدِسُونَ", "مُهَنْدِسَاتٌ", "مَهَانِدُ", "مُهَنْدِسِينَ"], "Personen: -ūna.", ["Das ist weiblich.", "Gibt es nicht.", "-īna ist nicht Nominativ."]),
  U("Plural (gesund, männlich)", "فَلَّاحٌ", ["فَلَّاحُونَ", "فَلَّاحَاتٌ", "فُلَّاحٌ", "فَلَّاحَانِ"], "-ūna.", ["Weiblich.", "Gibt es nicht.", "Dual."]),
  U("Plural (gesund, männlich)", "مُدِيرٌ", ["مُدِيرُونَ", "مُدِيرَاتٌ", "مُدَرَاءُ", "مُدِيرَانِ"], "-ūna.", ["Weiblich.", "Nicht im Buch.", "Dual."]),
  E("هَؤُلَاءِ ____. (Das sind Ingenieure.)", ["مُهَنْدِسُونَ", "مُهَنْدِسٌ", "مُهَنْدِسَانِ", "مُهَنْدِسِينَ"], "-ūna im Nominativ.", ["Singular.", "Dual.", "Nicht Nominativ."]),
  E("الْمُسْلِمُونَ ____. (… sind in der Moschee)", ["فِي الْمَسْجِدِ", "فِي الْمَسْجِدُ", "فِي مَسَاجِدُ", "الْمَسْجِدِ"], "Präpositionalgruppe als Prädikat.", ["Genitiv nach فِي.", "Falsch.", "فِي fehlt."]),
  F("Welches Wort ist ein gesunder männlicher Plural?", "", ["مُدَرِّسُونَ", "طُلَّابٌ", "رِجَالٌ", "مُدَرِّسَاتٌ"], "Endung -ūna.", ["Gebrochener Plural.", "Gebrochener Plural.", "Weiblicher Plural."]),
  U("Singular", "مُسْلِمُونَ", ["مُسْلِمٌ", "مُسْلِمَةٌ", "مَسْلَمٌ", "مُسْلِمَانِ"], "-ūna weg, Tanwīn dazu.", ["Weiblich.", "Falsch vokalisiert.", "Dual."]),
  U("Übersetze ins Arabische", "Die Lehrer sind fleißig.", ["الْمُدَرِّسُونَ مُجْتَهِدُونَ.", "الْمُدَرِّسُونَ مُجْتَهِدٌ.", "الْمُدَرِّسِينَ مُجْتَهِدُونَ.", "الْمُدَرِّسُونَ مُجْتَهِدَةٌ."], "Personen: Prädikat auch im Plural.", ["Prädikat im Plural.", "Nominativ.", "Personen – kein Sachplural."])
]);
R("m13", 1, [
  U("Plural (gesund, weiblich)", "طَالِبَةٌ", ["طَالِبَاتٌ", "طَالِبَةٌاتٌ", "طَوَالِبُ", "طَالِبُونَ"], "ة → -ātun.", ["Falsch geschrieben.", "Nicht im Buch.", "Männlich."]),
  U("Plural (gesund, weiblich)", "مُدَرِّسَةٌ", ["مُدَرِّسَاتٌ", "مُدَرِّسُونَ", "مُدَرِّسَتَانِ", "مَدَارِسُ"], "-ātun.", ["Männlich.", "Dual.", "Das ist „Schulen“."]),
  U("Plural (gesund, weiblich)", "مُمَرِّضَةٌ", ["مُمَرِّضَاتٌ", "مُمَرِّضَةٌ", "مُمَرِّضُونَ", "مُمَرِّضَتَاتٌ"], "-ātun.", ["Singular.", "Männlich.", "Falsch."]),
  E("هَؤُلَاءِ ____. (Das sind Lehrerinnen.)", ["مُدَرِّسَاتٌ", "مُدَرِّسَةٌ", "مُدَرِّسُونَ", "مُدَرِّسَاتُ"], "-ātun mit Tanwīn.", ["Singular.", "Männlich.", "Tanwīn fehlt."]),
  F("Wie wird das ت im weiblichen Plural geschrieben?", "مُسْلِمَاتٌ", ["offen: ت", "als ة", "als ط", "gar nicht"], "Im Plural steht ein offenes ت.", ["ة nur im Singular.", "Anderer Buchstabe.", "Es wird geschrieben."]),
  U("Singular", "أُسْتَاذَاتٌ", ["أُسْتَاذَةٌ", "أُسْتَاذٌ", "أُسْتَاذَاتٌ", "أَسَاتِذَةٌ"], "-ātun → ة.", ["Männlich.", "Unverändert.", "Männlicher Plural."]),
  U("Mach es weiblich", "هَؤُلَاءِ مُسْلِمُونَ.", ["هَؤُلَاءِ مُسْلِمَاتٌ.", "هَؤُلَاءِ مُسْلِمَةٌ.", "هَذِهِ مُسْلِمَاتٌ.", "هَؤُلَاءِ مُسْلِمُونَاتٌ."], "-ūna → -ātun; هَؤُلَاءِ bleibt (Personen).", ["Plural.", "Personen → هَؤُلَاءِ.", "Falsch."]),
  U("Übersetze ins Arabische", "Die Studentinnen sind in der Bibliothek.", ["الطَّالِبَاتُ فِي الْمَكْتَبَةِ.", "الطَّالِبَةُ فِي الْمَكْتَبَةِ.", "الطَّالِبَاتِ فِي الْمَكْتَبَةِ.", "الطُّلَّابُ فِي الْمَكْتَبَةِ."], "-ātu mit al.", ["Singular.", "Nominativ.", "Männlich."])
]);
R("m13", 2, [
  U("Plural (gebrochen)", "رَجُلٌ", ["رِجَالٌ", "رَجُلُونَ", "رَجُلَاتٌ", "أَرْجُلٌ"], "رَجُلٌ → رِجَالٌ (fiʿāl).", ["Nicht gesund.", "Nicht weiblich.", "Das sind „Beine“."]),
  U("Plural (gebrochen)", "شَيْخٌ", ["شُيُوخٌ", "شَيْخُونَ", "أَشْيَاخٌ", "شِيَاخٌ"], "fuʿūl: شُيُوخٌ.", ["Nicht gesund.", "Nicht im Buch.", "Gibt es nicht."])
]);
R("m13", 3, [
  E("____ طُلَّابٌ. (Das sind Studenten.)", ["هَؤُلَاءِ", "هَذِهِ", "هَذَا", "أُولَئِكَ"], "Plural nah, Personen → هَؤُلَاءِ.", ["Sachplural / weiblich Sg.", "Singular.", "Fern."]),
  E("____ مُهَنْدِسُونَ. (Das dort sind Ingenieure.)", ["أُولَئِكَ", "هَؤُلَاءِ", "ذَلِكَ", "تِلْكَ"], "Plural fern → أُولَئِكَ.", ["Nah.", "Singular.", "Singular."]),
  F("Wie spricht man أُولَئِكَ?", "أُولَئِكَ", ["ulāʾika (das و wird nicht gesprochen)", "ūlāʾika", "awlāʾika", "ulwāʾika"], "Das و wird nicht gesprochen.", ["Das u ist kurz.", "Falsch.", "Falsch."])
]);
R("m13", 4, [
  E("أَيْنَ الطُّلَّابُ؟ – ____ فِي الْفَصْلِ.", ["هُمْ", "هُنَّ", "هُوَ", "هِيَ"], "Männliche Personen → هُمْ.", ["Weiblich.", "Singular.", "Singular / Sachplural."]),
  E("هَؤُلَاءِ طَالِبَاتٌ، وَ____ مِنْ إِنْدُونِيسِيَا.", ["هُنَّ", "هُمْ", "هِيَ", "هُوَ"], "Weibliche Personen → هُنَّ.", ["Männlich.", "Singular.", "Singular."]),
  E("هَذَا بَيْتُ الطُّلَّابِ؛ هَذَا ____. (ihr Haus, m.)", ["بَيْتُهُمْ", "بَيْتُهُنَّ", "بَيْتُهُ", "بُيُوتُهُمْ"], "„ihr“ (Männer) = ـهُمْ.", ["Weiblich.", "„sein“.", "Ein Haus."]),
  U("Statt „ihr“ (eine Frau): „ihr“ (mehrere Frauen)", "كِتَابُهَا", ["كِتَابُهُنَّ", "كِتَابُهُمْ", "كُتُبُهَا", "كِتَابُكُنَّ"], "ـهَا → ـهُنَّ.", ["Männlich.", "Das Buch bleibt Singular.", "„euer“."])
]);
R("m13", 5, [
  E("الْمُدَرِّسُونَ ____ إِلَى الْمَسْجِدِ.", ["ذَهَبُوا", "ذَهَبْنَ", "ذَهَبَتْ", "ذَهَبْنَا"], "Subjekt vorne → ذَهَبُوا.", ["Weiblich.", "Singular weiblich.", "„wir“."])
]);

/* ---------- Lektion 14 ---------- */
R("m14", 0, [
  E("____ طُلَّابٌ مِنَ الْيَابَانِ. (Wir sind …)", ["نَحْنُ", "أَنْتُمْ", "هُمْ", "أَنَا"], "„wir“ = نَحْنُ.", ["„ihr“.", "„sie“.", "„ich“."])
]);
R("m14", 1, [
  E("أَيْنَ ____ أَمْسِ؟ (Wohin seid ihr gegangen?)", ["ذَهَبْتُمْ", "ذَهَبْنَا", "ذَهَبُوا", "ذَهَبْنَ"], "„ihr“ = -tum.", ["„wir“.", "„sie“.", "„sie (w.)“."]),
  E("____ إِلَى الْمَسْجِدِ قَبْلَ الْأَذَانِ. (Wir gingen …)", ["ذَهَبْنَا", "ذَهَبْنَ", "ذَهَبْتُمْ", "ذَهَبَ"], "„wir“ = -nā.", ["„sie (w.)“.", "„ihr“.", "„er“."]),
  F("Was ist der Unterschied? ذَهَبْنَا – ذَهَبْنَ", "", ["„wir gingen“ – „sie (w.) gingen“", "„sie (w.) gingen“ – „wir gingen“", "beides „wir“", "beides „sie“"], "-nā (langes ā) = wir; -na = sie (w.).", ["Vertauscht.", "Unterschiedlich.", "Unterschiedlich."]),
  U("Statt „sie (m.)“: „wir“", "ذَهَبُوا إِلَى الْمَطَارِ.", ["ذَهَبْنَا إِلَى الْمَطَارِ.", "ذَهَبْنَ إِلَى الْمَطَارِ.", "ذَهَبْتُمْ إِلَى الْمَطَارِ.", "ذَهَبُوا نَحْنُ إِلَى الْمَطَارِ."], "-ū → -nā.", ["„sie (w.)“.", "„ihr“.", "Das Verb muss sich ändern."])
]);
R("m14", 2, [
  E("هَذَا ____. (Das ist Ismāʿīl.)", ["إِسْمَاعِيلُ", "إِسْمَاعِيلٌ", "الْإِسْمَاعِيلُ", "إِسْمَاعِيلَ"], "Nicht-arabischer Name → kein Tanwīn.", ["Kein Tanwīn.", "Kein al.", "Nominativ."]),
  E("هَذِهِ ____. (Das ist London.)", ["لَنْدَنُ", "لَنْدَنٌ", "اللَّنْدَنُ", "لَنْدَنَ"], "Nicht-arabischer Name → kein Tanwīn.", ["Kein Tanwīn.", "Kein al.", "Nominativ."]),
  E("هَذَا ____. (Das ist Lūṭ.)", ["لُوطٌ", "لُوطُ", "اللُّوطُ", "لُوطًا"], "Ausnahme: drei Buchstaben, zweiter ruhend → Tanwīn.", ["Hat Tanwīn.", "Kein al.", "Nominativ."]),
  F("Welcher Name hat Tanwīn?", "", ["نُوحٌ", "إِبْرَاهِيمُ", "إِسْمَاعِيلُ", "يُوسُفُ"], "Kurzer fremder Name mit ruhendem 2. Buchstaben.", ["Kein Tanwīn.", "Kein Tanwīn.", "Kein Tanwīn."]),
  F("Warum hat إِبْرَاهِيمُ kein Tanwīn?", "إِبْرَاهِيمُ", ["Es ist ein nicht-arabischer Eigenname.", "Es ist weiblich.", "Es hat al.", "Es ist Plural."], "Fremde Eigennamen sind Diptota.", ["Männlich.", "Kein al.", "Singular."])
]);
R("m14", 3, [
  E("بَيْتُ الْمُدِيرِ ____ جَمِيلٌ. (Das neue Haus des Direktors …)", ["الْجَدِيدُ", "الْجَدِيدِ", "جَدِيدٌ", "الْجَدِيدَ"], "Adjektiv zum Muḍāf: hinter der Iḍāfa, bestimmt, Nominativ.", ["Genitiv → beschreibt den Direktor.", "Unbestimmt passt nicht.", "Akkusativ."]),
  E("سَيَّارَةُ الطَّبِيبِ ____. (das neue Auto des Arztes)", ["الْجَدِيدَةُ", "الْجَدِيدِ", "جَدِيدَةٌ", "الْجَدِيدُ"], "Zum Muḍāf (weiblich, Nominativ).", ["Beschreibt den Arzt.", "Wäre ein Satz.", "Geschlecht."]),
  F("Was heißt بَيْتُ الْإِمَامِ الْجَدِيدِ?", "بَيْتُ الْإِمَامِ الْجَدِيدِ", ["das Haus des neuen Imams", "das neue Haus des Imams", "Das Haus des Imams ist neu.", "ein neues Haus"], "Genitiv → beschreibt den Imam.", ["Das wäre ...الْجَدِيدُ.", "Kein Satz.", "Bestimmt."]),
  F("Was heißt بَيْتُ الْإِمَامِ الْجَدِيدُ?", "بَيْتُ الْإِمَامِ الْجَدِيدُ", ["das neue Haus des Imams", "das Haus des neuen Imams", "Das Haus ist neu.", "der neue Imam"], "Nominativ → beschreibt das Haus.", ["Das wäre ...الْجَدِيدِ.", "Kein Satz.", "Falsch."]),
  U("Übersetze ins Arabische", "die große Tür der Moschee", ["بَابُ الْمَسْجِدِ الْكَبِيرُ", "بَابُ الْمَسْجِدِ الْكَبِيرِ", "الْبَابُ الْكَبِيرُ الْمَسْجِدِ", "بَابُ الْكَبِيرُ الْمَسْجِدِ"], "Adjektiv hinter die Iḍāfa, im Fall des Muḍāf.", ["Das wäre „der großen Moschee“.", "Kein al am Muḍāf.", "Nichts zwischen die Iḍāfa."])
]);
R("m14", 4, [
  E("____ بَيْتٍ هَذَا؟ (Welches Haus ist das?)", ["أَيُّ", "أَيٌّ", "مَا", "مَنْ"], "أَيُّ ist Muḍāf: أَيُّ بَيْتٍ.", ["Muḍāf → kein Tanwīn.", "مَا fragt nicht „welches“.", "مَنْ fragt nach Personen."]),
  E("____ طَالِبٍ أَنْتَ؟ (Welcher Student bist du?)", ["أَيُّ", "أَيٌّ", "أَيَّ", "مَنْ"], "أَيُّ + Genitiv.", ["Muḍāf → kein Tanwīn.", "Hier Nominativ.", "Falsch."]),
  E("مِنْ أَيِّ ____ أَنْتَ؟", ["بَلَدٍ", "بَلَدٌ", "الْبَلَدِ", "بِلَادٍ"], "Nach أَيِّ: unbestimmt, Genitiv, Singular.", ["Genitiv.", "Unbestimmt.", "Singular."]),
  U("Frag mit „welcher?“", "هَذَا يَوْمُ السَّبْتِ.", ["أَيُّ يَوْمٍ هَذَا؟", "أَيُّ الْيَوْمُ هَذَا؟", "أَيٌّ يَوْمٌ هَذَا؟", "مَا يَوْمٌ هَذَا؟"], "أَيُّ + unbestimmter Genitiv.", ["Kein al.", "Muḍāf → kein Tanwīn, danach Genitiv.", "Falsch."]),
  U("Übersetze ins Arabische", "In welcher Fakultät bist du?", ["فِي أَيِّ كُلِّيَّةٍ أَنْتَ؟", "فِي أَيُّ كُلِّيَّةٍ أَنْتَ؟", "فِي أَيِّ الْكُلِّيَّةِ أَنْتَ؟", "أَيُّ كُلِّيَّةٌ أَنْتَ فِي؟"], "فِي + أَيِّ (Genitiv) + Genitiv.", ["Nach فِي Genitiv.", "Kein al.", "Falsch."])
]);

/* ---------- Lektion 15 ---------- */
R("m15", 0, [
  E("____ طَالِبَاتٌ؟ (Seid ihr (w.) Studentinnen?)", ["أَأَنْتُنَّ", "أَأَنْتُمْ", "أَهُنَّ", "أَنَحْنُ"], "„ihr“ (Frauen) = أَنْتُنَّ.", ["Männlich.", "„sie“.", "„wir“."]),
  U("Statt „ihr (m.)“: „ihr (w.)“", "أَنْتُمْ مُسْلِمُونَ.", ["أَنْتُنَّ مُسْلِمَاتٌ.", "أَنْتُنَّ مُسْلِمُونَ.", "أَنْتُمْ مُسْلِمَاتٌ.", "هُنَّ مُسْلِمَاتٌ."], "أَنْتُنَّ + weiblicher Plural.", ["Nomen muss weiblich werden.", "Pronomen muss weiblich werden.", "„sie“."]),
  U("Statt „ihr (m.)“: „ihr (w.)“", "ذَهَبْتُمْ إِلَى بَيْتِكُمْ.", ["ذَهَبْتُنَّ إِلَى بَيْتِكُنَّ.", "ذَهَبْتُنَّ إِلَى بَيْتِكُمْ.", "ذَهَبْنَ إِلَى بَيْتِهِنَّ.", "ذَهَبْتُمْ إِلَى بَيْتِكُنَّ."], "Verb und Endung weiblich.", ["Auch die Endung.", "Das ist „sie“.", "Auch das Verb."])
]);
R("m15", 1, [
  E("أُصَلِّي ____ النَّوْمِ. (vor dem Schlafen)", ["قَبْلَ", "بَعْدَ", "أَمَامَ", "تَحْتَ"], "„vor“ (zeitlich) = قَبْلَ.", ["„nach“.", "örtlich.", "„unter“."]),
  E("خَرَجْنَا مِنَ الْفَصْلِ بَعْدَ ____.", ["الدَّرْسِ", "الدَّرْسُ", "الدَّرْسَ", "دَرْسٌ"], "Nach بَعْدَ Genitiv.", ["Nominativ.", "Akkusativ.", "Nominativ."]),
  E("رَجَعَ أَبِي قَبْلَ ____. (vor einer Woche)", ["أُسْبُوعٍ", "أُسْبُوعٌ", "أُسْبُوعًا", "الْأُسْبُوعُ"], "قَبْلَ + Genitiv.", ["Nominativ.", "Akkusativ.", "Nominativ."]),
  U("Übersetze ins Arabische", "Ich kam nach der Prüfung zurück.", ["رَجَعْتُ بَعْدَ الِاخْتِبَارِ.", "رَجَعْتُ قَبْلَ الِاخْتِبَارِ.", "رَجَعْتُ بَعْدَ الِاخْتِبَارُ.", "رَجَعَ بَعْدَ الِاخْتِبَارِ."], "بَعْدَ + Genitiv.", ["„vor“.", "Genitiv.", "„er“."])
]);
R("m15", 2, [
  E("____ الْمُدَرِّسُ مِنَ الْمَدْرَسَةِ. (… kehrte zurück)", ["رَجَعَ", "رَجَعْتُ", "رَجَعُوا", "رَاجِعٌ"], "رَجَعَ.", ["„ich“.", "Verb vorne bleibt Singular.", "Partizip."]),
  U("Statt „ging“: „kehrte zurück“", "ذَهَبْنَا إِلَى الْبَيْتِ.", ["رَجَعْنَا إِلَى الْبَيْتِ.", "رَجَعْنَ إِلَى الْبَيْتِ.", "رَجَعَ إِلَى الْبَيْتِ.", "رَجَعْتُمْ إِلَى الْبَيْتِ."], "Gleiche Endung -nā.", ["„sie (w.)“.", "„er“.", "„ihr“."])
]);
R("m15", 3, [
  E("أَيْنَ ____ يَا أَخِي؟ (Wohin bist du gegangen?)", ["ذَهَبْتَ", "ذَهَبْتِ", "ذَهَبْتُ", "ذَهَبَتْ"], "du (m.) = -ta.", ["„du (w.)“.", "„ich“.", "„sie“."]),
  F("Welche Form passt zu هُنَّ?", "هُنَّ", ["ذَهَبْنَ", "ذَهَبُوا", "ذَهَبْنَا", "ذَهَبْتُنَّ"], "sie (w. Pl.) = -na.", ["„sie (m.)“.", "„wir“.", "„ihr (w.)“."]),
  F("Welche Form passt zu أَنْتُمْ?", "أَنْتُمْ", ["ذَهَبْتُمْ", "ذَهَبْتُنَّ", "ذَهَبُوا", "ذَهَبْتَ"], "ihr (m.) = -tum.", ["„ihr (w.)“.", "„sie“.", "„du“."]),
  F("Welche Form passt zu هِيَ?", "هِيَ", ["ذَهَبَتْ", "ذَهَبْتِ", "ذَهَبْنَ", "ذَهَبَ"], "sie = -at.", ["„du (w.)“.", "„sie (w. Pl.)“.", "„er“."])
]);

/* ---------- Lektion 16 ---------- */
R("m16", 0, [
  F("Welches Wort ist vernunftbegabt (عَاقِلٌ)?", "", ["طَالِبٌ", "كَلْبٌ", "كِتَابٌ", "نَهْرٌ"], "Menschen sind vernunftbegabt.", ["Tier.", "Sache.", "Sache."]),
  F("Welches Wort ist NICHT vernunftbegabt?", "", ["قِطٌّ", "مُدَرِّسٌ", "طَبِيبٌ", "إِمَامٌ"], "Tiere zählen zu den nicht vernunftbegabten.", ["Mensch.", "Mensch.", "Mensch."]),
  F("Zu welcher Gruppe gehört بَحْرٌ (Meer)?", "بَحْرٌ", ["nicht vernunftbegabt", "vernunftbegabt", "weiblich vernunftbegabt", "Dual"], "Sachen sind nicht vernunftbegabt.", ["Kein Mensch.", "Kein Mensch.", "Singular."]),
  F("Welcher Plural wird wie ein weiblicher Singular behandelt?", "", ["كُتُبٌ", "طُلَّابٌ", "رِجَالٌ", "مُدَرِّسُونَ"], "Sachplural → weiblicher Singular.", ["Personen.", "Personen.", "Personen."]),
  E("هَذِهِ ____ جَدِيدَةٌ.", ["سَيَّارَاتٌ", "مُدَرِّسُونَ", "طُلَّابٌ", "رِجَالٌ"], "Nur ein Sachplural passt zu هَذِهِ … جَدِيدَةٌ.", ["Personen → هَؤُلَاءِ.", "Personen.", "Personen."]),
  E("هَؤُلَاءِ ____ جُدُدٌ.", ["طُلَّابٌ", "كُتُبٌ", "بُيُوتٌ", "أَقْلَامٌ"], "Personenplural → هَؤُلَاءِ + Plural-Adjektiv.", ["Sachen.", "Sachen.", "Sachen."]),
  U("Ersetze durch ein Pronomen", "الْبُيُوتُ قَدِيمَةٌ.", ["هِيَ قَدِيمَةٌ.", "هُمْ قُدَامَى.", "هُنَّ قَدِيمَاتٌ.", "هُوَ قَدِيمٌ."], "Sachplural → هِيَ.", ["Personenregel.", "Nur für Frauen.", "Singular männlich."])
]);
R("m16", 2, [
  E("الطُّلَّابُ فِي الْفَصْلِ؛ ____ صِغَارٌ.", ["هُمْ", "هِيَ", "هُنَّ", "هُوَ"], "Personen (m.) → هُمْ.", ["Sachregel.", "Frauen.", "Singular."]),
  E("هَؤُلَاءِ رِجَالٌ ____.", ["أَغْنِيَاءُ", "غَنِيَّةٌ", "غَنِيٌّ", "أَغْنِيَاءٌ"], "Personen → Plural-Adjektiv (diptot).", ["Sachregel.", "Singular.", "Kein Tanwīn."]),
  E("هَؤُلَاءِ طَالِبَاتٌ ____.", ["مُجْتَهِدَاتٌ", "مُجْتَهِدَةٌ", "مُجْتَهِدُونَ", "مُجْتَهِدٌ"], "Frauen → weiblicher Plural.", ["Sachregel.", "Männlich.", "Singular."]),
  U("Plural (Personen)", "هُوَ مُدَرِّسٌ قَدِيمٌ.", ["هُمْ مُدَرِّسُونَ قُدَامَى.", "هِيَ مُدَرِّسُونَ قَدِيمَةٌ.", "هُمْ مُدَرِّسُونَ قَدِيمَةٌ.", "هُمْ مُدَرِّسٌ قَدِيمٌ."], "Personen: Plural überall.", ["Sachregel.", "Sachregel beim Adjektiv.", "Muss Plural werden."]),
  U("Plural (Personen)", "هِيَ بِنْتٌ صَغِيرَةٌ.", ["هُنَّ بَنَاتٌ صِغَارٌ.", "هِيَ بَنَاتٌ صَغِيرَةٌ.", "هُمْ بَنَاتٌ صِغَارٌ.", "هُنَّ بَنَاتٌ صَغِيرَةٌ."], "Personen → هُنَّ + Plural-Adjektiv.", ["Sachregel.", "Männlich.", "Sachregel beim Adjektiv."]),
  U("Übersetze ins Arabische", "Das sind neue Lehrer.", ["هَؤُلَاءِ مُدَرِّسُونَ جُدُدٌ.", "هَذِهِ مُدَرِّسُونَ جَدِيدَةٌ.", "هَؤُلَاءِ مُدَرِّسُونَ جَدِيدَةٌ.", "هَذَا مُدَرِّسُونَ جُدُدٌ."], "Personen.", ["Sachregel.", "Sachregel beim Adjektiv.", "Singular."])
]);
R("m16", 3, [
  E("____ الْقِطَطُ مِنَ الْبَيْتِ.", ["خَرَجَتِ", "خَرَجَ", "خَرَجُوا", "خَرَجْنَ"], "Tierplural → weiblich.", ["Weiblich behandelt.", "-ū nur für Personen.", "Verb vorne bleibt Singular."]),
  E("____ الرِّجَالُ مِنَ الْمَسْجِدِ.", ["خَرَجَ", "خَرَجَتِ", "خَرَجُوا", "خَرَجْنَ"], "Personen, Verb vorne → خَرَجَ.", ["Personen nicht weiblich.", "Verb vorne bleibt Singular.", "Frauen."]),
  U("Plural", "رَجَعَتِ الطَّائِرَةُ.", ["رَجَعَتِ الطَّائِرَاتُ.", "رَجَعُوا الطَّائِرَاتُ.", "رَجَعَ الطَّائِرَاتُ.", "رَجَعْنَ الطَّائِرَاتُ."], "Sachplural → weibliches Verb.", ["-ū nur für Personen.", "Weiblich.", "Verb vorne bleibt Singular."]),
  U("Plural", "ذَهَبَ الْحِمَارُ.", ["ذَهَبَتِ الْحَمِيرُ.", "ذَهَبَ الْحَمِيرُ.", "ذَهَبُوا الْحَمِيرُ.", "ذَهَبْنَ الْحَمِيرُ."], "Tierplural → weiblich.", ["Im Buch: weiblich.", "-ū nur für Personen.", "Verb vorne Singular."])
]);
R("m16", 4, [
  U("Plural (مَفَاعِلُ)", "مَكْتَبٌ", ["مَكَاتِبُ", "مَكَاتِبٌ", "مَكْتَبَاتٌ", "مُكُوتٌ"], "مَفَاعِلُ ohne Tanwīn.", ["Kein Tanwīn.", "Nicht dieser Plural.", "Gibt es nicht."]),
  U("Plural (مَفَاعِلُ)", "مَطْبَخٌ", ["مَطَابِخُ", "مَطَابِخٌ", "مَطْبَخَاتٌ", "مُطُوبٌ"], "مَفَاعِلُ.", ["Kein Tanwīn.", "Nicht dieser Plural.", "Gibt es nicht."]),
  U("Plural (مَفَاعِلُ)", "مَطْعَمٌ", ["مَطَاعِمُ", "مَطَاعِمٌ", "مَطْعَمُونَ", "أَطْعَامٌ"], "مَفَاعِلُ.", ["Kein Tanwīn.", "Nur für Personen.", "Gibt es nicht."]),
  F("Welcher Plural hat kein Tanwīn?", "", ["فَنَادِقُ", "كُتُبٌ", "بُيُوتٌ", "أَقْلَامٌ"], "Muster مَفَاعِلُ.", ["Hat Tanwīn.", "Hat Tanwīn.", "Hat Tanwīn."]),
  E("فِي الْمَدِينَةِ ____ كَبِيرَةٌ. (große Hotels)", ["فَنَادِقُ", "فَنَادِقٌ", "فُنْدُقٌ", "فُنْدُقُونَ"], "Ohne Tanwīn.", ["Kein Tanwīn.", "Singular.", "Nur Personen."])
]);

/* ---------- Lektion 17 ---------- */
R("m17", 0, [
  E("هَذِهِ أَقْلَامٌ ____.", ["جَدِيدَةٌ", "جُدُدٌ", "جَدِيدُونَ", "جَدِيدٌ"], "Sachplural → weiblicher Singular.", ["Personenregel.", "Nur Personen.", "Männlicher Singular."]),
  E("الدَّفَاتِرُ عَلَى الْمَكْتَبِ؛ ____ نَظِيفَةٌ.", ["هِيَ", "هُمْ", "هُنَّ", "هُوَ"], "Sachplural → هِيَ.", ["Nur Personen.", "Nur Frauen.", "Singular männlich."]),
  U("Plural", "هَذَا قَلَمٌ رَخِيصٌ.", ["هَذِهِ أَقْلَامٌ رَخِيصَةٌ.", "هَؤُلَاءِ أَقْلَامٌ رِخَاصٌ.", "هَذَا أَقْلَامٌ رَخِيصٌ.", "هَذِهِ أَقْلَامٌ رَخِيصٌ."], "Sachplural: هَذِهِ + weiblicher Singular.", ["Personenregel.", "Muss weiblich werden.", "Adjektiv weiblich."]),
  U("Übersetze ins Arabische", "Die Bücher sind auf dem Tisch.", ["الْكُتُبُ عَلَى الْمَكْتَبِ.", "الْكُتُبُ عَلَى الْمَكْتَبُ.", "الْكِتَابُ عَلَى الْمَكْتَبِ.", "كُتُبٌ عَلَى الْمَكْتَبِ."], "Plural bestimmt.", ["Genitiv.", "Singular.", "Unbestimmt."])
]);
R("m17", 2, [
  F("Welche zwei Pluralformen hat حِمَارٌ?", "حِمَارٌ", ["حَمِيرٌ und حُمُرٌ", "حِمَارَاتٌ und حَمِيرٌ", "أَحْمِرَةٌ und حُمُرٌ", "حَمِيرُونَ und حُمُرٌ"], "حِمَارٌ → حَمِيرٌ / حُمُرٌ.", ["حِمَارَاتٌ steht nicht im Buch.", "أَحْمِرَةٌ steht nicht im Buch.", "-ūna nur für Personen."]),
  F("Welche zwei Pluralformen hat شَهْرٌ (Monat)?", "شَهْرٌ", ["شُهُورٌ und أَشْهُرٌ", "شَهْرَاتٌ und شُهُورٌ", "أَشْهُرٌ und شَهْرُونَ", "شُهُورٌ und شِهَارٌ"], "شَهْرٌ → شُهُورٌ / أَشْهُرٌ.", ["Nicht im Buch.", "Nur Personen.", "Gibt es nicht."]),
  E("فِي الْحَقْلِ ____ كَثِيرَةٌ. (viele Esel)", ["حَمِيرٌ", "حِمَارٌ", "حِمَارُونَ", "حَمِيرُ"], "Plural حَمِيرٌ (oder حُمُرٌ).", ["Singular.", "Nur Personen.", "Tanwīn fehlt."]),
  F("Was zeigen zwei Pluralformen wie حَمِيرٌ / حُمُرٌ?", "", ["Manche Wörter haben mehr als einen gebrochenen Plural.", "Der eine ist männlich, der andere weiblich.", "Der eine ist Dual.", "Einer davon ist falsch."], "Beide sind richtig.", ["Beide haben dasselbe Geschlecht.", "Beide sind Plural.", "Beide sind richtig."]),
  U("Plural", "هَذَا حِمَارٌ.", ["هَذِهِ حُمُرٌ.", "هَؤُلَاءِ حُمُرٌ.", "هَذَا حُمُرٌ.", "هَذِهِ حِمَارٌ."], "Tierplural → هَذِهِ.", ["Personenregel.", "Muss weiblich werden.", "Nomen muss Plural werden."])
]);
R("m17", 3, [
  E("هَؤُلَاءِ مُهَنْدِسُونَ ____.", ["يَابَانِيُّونَ", "يَابَانِيَّةٌ", "يَابَانِيٌّ", "يَابَانِيَّاتٌ"], "Personen (m.) → Plural.", ["Sachregel.", "Singular.", "Weiblich."]),
  E("هَؤُلَاءِ طُلَّابٌ ____.", ["كِبَارٌ", "كَبِيرَةٌ", "كَبِيرٌ", "كَبِيرَاتٌ"], "Personen → Plural-Adjektiv.", ["Sachregel.", "Singular.", "Weiblich."]),
  U("Plural", "الْمُدِيرُ جَدِيدٌ.", ["الْمُدِيرُونَ جُدُدٌ.", "الْمُدِيرُونَ جَدِيدَةٌ.", "الْمُدِيرُونَ جَدِيدٌ.", "الْمُدِيرَاتُ جُدُدٌ."], "Personen.", ["Sachregel.", "Singular.", "Weiblich."]),
  F("Welcher Satz ist richtig?", "", ["هَؤُلَاءِ تُجَّارٌ أَغْنِيَاءُ.", "هَذِهِ تُجَّارٌ غَنِيَّةٌ.", "هَؤُلَاءِ تُجَّارٌ غَنِيَّةٌ.", "هَذِهِ تُجَّارٌ أَغْنِيَاءُ."], "Personen → هَؤُلَاءِ + Plural-Adjektiv.", ["Sachregel.", "Sachregel beim Adjektiv.", "هَذِهِ für Personen falsch."])
]);

/* ---------- Lektion 18 ---------- */
R("m18", 0, [
  F("Ab welcher Zahl beginnt im Arabischen der Plural?", "", ["ab drei", "ab zwei", "ab vier", "ab zehn"], "Zwei = Dual, ab drei Plural.", ["Zwei ist Dual.", "Schon ab drei.", "Schon ab drei."]),
  F("Was heißt بَابَانِ?", "بَابَانِ", ["zwei Türen", "Türen (drei oder mehr)", "eine Tür", "die Tür"], "Dual = genau zwei.", ["Das wäre أَبْوَابٌ.", "Das wäre بَابٌ.", "Das wäre الْبَابُ."]),
  F("Welches Wort ist ein Dual?", "", ["قَلَمَانِ", "أَقْلَامٌ", "قَلَمٌ", "الْقَلَمُ"], "Endung -āni.", ["Plural.", "Singular.", "Singular."]),
  E("عِنْدِي ____. (zwei Uhren)", ["سَاعَتَانِ", "سَاعَاتٌ", "سَاعَةٌ", "سَاعَتَيْنِ"], "Dual Nominativ.", ["Plural.", "Singular.", "Akk./Gen."]),
  E("فِي الْغُرْفَةِ ____. (zwei Fenster)", ["نَافِذَتَانِ", "نَوَافِذُ", "نَافِذَةٌ", "نَافِذَانِ"], "ة → ت + -āni.", ["Plural.", "Singular.", "Das ت fehlt."]),
  U("Übersetze ins Arabische", "Ich habe zwei Brüder und drei Schwestern.", ["لِي أَخَوَانِ وَثَلَاثُ أَخَوَاتٍ.", "لِي إِخْوَةٌ وَثَلَاثُ أَخَوَاتٍ.", "لِي أَخَانِ وَثَلَاثُ أَخَوَاتٍ.", "لِي أَخَوَانِ وَأُخْتَانِ."], "Zwei → Dual.", ["Bei zwei Dual.", "Dual von أَخٌ = أَخَوَانِ.", "Drei Schwestern, nicht zwei."])
]);
R("m18", 1, [
  U("Dual", "كِتَابٌ", ["كِتَابَانِ", "كِتَابَتَانِ", "كُتُبٌ", "كِتَابِينَ"], "-āni.", ["Kein ة.", "Plural.", "Falsch."]),
  U("Dual", "مَدْرَسَةٌ", ["مَدْرَسَتَانِ", "مَدْرَسَانِ", "مَدَارِسُ", "مَدْرَسَةَانِ"], "ة → ت.", ["Das ت fehlt.", "Plural.", "ة wird ت."]),
  U("Dual", "رَجُلٌ", ["رَجُلَانِ", "رِجَالٌ", "رَجُلَتَانِ", "رَجُلَيْنِ"], "-āni im Nominativ.", ["Plural.", "Kein ة.", "Akk./Gen."])
]);
R("m18", 3, [
  E("هَذَانِ قَلَمَانِ ____.", ["جَدِيدَانِ", "جَدِيدٌ", "جُدُدٌ", "جَدِيدَتَانِ"], "Adjektiv im Dual.", ["Singular.", "Plural.", "Weiblich."]),
  E("هَاتَانِ سَيَّارَتَانِ ____.", ["سَرِيعَتَانِ", "سَرِيعَانِ", "سَرِيعَةٌ", "سِرَاعٌ"], "Weiblicher Dual.", ["Männlich.", "Singular.", "Plural."]),
  E("لِي أُخْتَانِ ____.", ["صَغِيرَتَانِ", "صَغِيرَانِ", "صِغَارٌ", "صَغِيرَةٌ"], "Weiblicher Dual.", ["Männlich.", "Plural.", "Singular."]),
  U("Dual", "طَالِبٌ مُجْتَهِدٌ", ["طَالِبَانِ مُجْتَهِدَانِ", "طَالِبَانِ مُجْتَهِدٌ", "طُلَّابٌ مُجْتَهِدُونَ", "طَالِبَانِ مُجْتَهِدُونَ"], "Beide im Dual.", ["Adjektiv auch Dual.", "Plural.", "Adjektiv Plural."]),
  U("Dual", "غُرْفَةٌ وَاسِعَةٌ", ["غُرْفَتَانِ وَاسِعَتَانِ", "غُرْفَتَانِ وَاسِعَانِ", "غُرَفٌ وَاسِعَةٌ", "غُرْفَتَانِ وَاسِعَةٌ"], "Weiblicher Dual für beide.", ["Adjektiv weiblich.", "Plural.", "Adjektiv auch Dual."]),
  U("Übersetze ins Arabische", "Das sind zwei neue Studenten.", ["هَذَانِ طَالِبَانِ جَدِيدَانِ.", "هَؤُلَاءِ طَالِبَانِ جَدِيدَانِ.", "هَذَانِ طَالِبَانِ جُدُدٌ.", "هَاتَانِ طَالِبَانِ جَدِيدَانِ."], "Alles Dual, männlich.", ["Plural-Demonstrativ.", "Plural-Adjektiv.", "Weiblich."])
]);
R("m18", 4, [
  E("لِي ____. (zwei Brüder)", ["أَخَوَانِ", "أَخَانِ", "أَخَيْنِ", "إِخْوَانِ"], "Dual von أَخٌ = أَخَوَانِ.", ["Gibt es nicht.", "Akk./Gen. und falsch.", "Falsch."]),
  F("Was ist der Dual von أَخٌ?", "أَخٌ", ["أَخَوَانِ", "أَخَانِ", "إِخْوَةٌ", "أُخْتَانِ"], "Besonderheit: mit و.", ["Gibt es nicht.", "Plural.", "„zwei Schwestern“."]),
  F("Was ist der Dual von أَبٌ?", "أَبٌ", ["أَبَوَانِ", "أَبَانِ", "آبَاءٌ", "أَبَيْنِ"], "Wie أَخٌ: mit و – أَبَوَانِ (auch „Eltern“).", ["Gibt es nicht.", "Plural.", "Falsch."]),
  E("هَذَانِ ____ بِلَالٍ. (die beiden Brüder Bilāls)", ["أَخَوَا", "أَخَوَانِ", "أَخَانِ", "إِخْوَةُ"], "Als Muḍāf fällt das نِ weg: أَخَوَا بِلَالٍ.", ["Als Muḍāf fällt das nūn.", "Gibt es nicht.", "Plural."]),
  U("Dual", "لِي أَخٌ كَبِيرٌ.", ["لِي أَخَوَانِ كَبِيرَانِ.", "لِي أَخَانِ كَبِيرَانِ.", "لِي إِخْوَةٌ كِبَارٌ.", "لِي أَخَوَانِ كَبِيرٌ."], "أَخَوَانِ + Dual-Adjektiv.", ["Gibt es nicht.", "Plural.", "Adjektiv auch Dual."])
]);
R("m18", 5, [
  E("كَمْ ____ فِي الْفَصْلِ؟", ["طَالِبًا", "طُلَّابًا", "طَالِبٌ", "طُلَّابٍ"], "كَمْ + Singular manṣūb.", ["Singular.", "Akkusativ.", "Singular Akkusativ."]),
  E("كَمْ ____ عِنْدَكَ؟ (Wie viele Brüder …)", ["أَخًا", "إِخْوَةً", "أَخٌ", "أَخَوَانِ"], "Singular manṣūb.", ["Singular.", "Akkusativ.", "Dual."])
]);
R("m18", 6, [
  U("Akkusativ (mit Tanwīn)", "قَلَمٌ", ["قَلَمًا", "قَلَمَ", "قَلَمٍ", "قَلَمًّا"], "-an mit zusätzlichem Alif.", ["Tanwīn fehlt.", "Genitiv.", "Falsch."]),
  U("Akkusativ (mit Tanwīn)", "سَاعَةٌ", ["سَاعَةً", "سَاعَةًا", "سَاعَتًا", "سَاعَةٍ"], "Bei ة kein Alif.", ["Bei ة kein Alif.", "ة bleibt.", "Genitiv."]),
  U("Akkusativ (mit Tanwīn)", "بَيْتٌ", ["بَيْتًا", "بَيْتَ", "بَيْتٍ", "بَيْتَا"], "-an mit Alif.", ["Tanwīn fehlt.", "Genitiv.", "Tanwīn fehlt."]),
  F("Welche Form ist richtig geschrieben?", "", ["كِتَابًا", "كِتَابً", "كِتَابَاً", "كِتَابًّا"], "Fatḥa-Tanwīn mit Alif.", ["Alif fehlt.", "Falsche Vokalzeichen.", "Kein Shadda."]),
  F("Welche Form ist richtig geschrieben?", "", ["غُرْفَةً", "غُرْفَةًا", "غُرْفَتًا", "غُرْفَةَا"], "Bei ة kein zusätzliches Alif.", ["Kein Alif nach ة.", "ة bleibt.", "Falsch."]),
  F("Wird das Alif in كِتَابًا gesprochen?", "كِتَابًا", ["Nein, man spricht kitāban.", "Ja, kitābā.", "Ja, kitābān.", "Nein, man spricht kitāb."], "Das Alif ist nur Schreibung.", ["Es bleibt -an.", "Nur -an.", "Das -an wird gesprochen (außer in der Pause)."])
]);
R("m18", 7, [
  E("رَأَيْتُ ____. (zwei Studenten)", ["طَالِبَيْنِ", "طَالِبَانِ", "طُلَّابًا", "طَالِبًا"], "Dual im Akkusativ: -aini.", ["Nominativ.", "Plural.", "Singular."]),
  E("ذَهَبْتُ إِلَى ____. (zu zwei Ärzten)", ["طَبِيبَيْنِ", "طَبِيبَانِ", "أَطِبَّاءَ", "طَبِيبٍ"], "Genitiv Dual: -aini.", ["Nominativ.", "Plural.", "Singular."]),
  E("فِي ____ (in zwei Zimmern)", ["غُرْفَتَيْنِ", "غُرْفَتَانِ", "غُرَفٍ", "غُرْفَةٍ"], "Genitiv Dual.", ["Nominativ.", "Plural.", "Singular."]),
  F("Woran erkennt man den Dual im Nominativ?", "", ["am Alif (-āni)", "am Ḍamma", "am Yāʾ (-aini)", "am Tanwīn"], "Das Zeichen des Nominativs im Dual ist das Alif.", ["Nicht beim Dual.", "Das ist Akk./Gen.", "Kein Tanwīn beim Dual."]),
  U("Akkusativ", "هَذَانِ كِتَابَانِ.", ["قَرَأْتُ كِتَابَيْنِ.", "قَرَأْتُ كِتَابَانِ.", "قَرَأْتُ كِتَابَيْنَ.", "قَرَأْتُ كُتُبًا."], "Objekt → -aini.", ["Akkusativ.", "Das nūn hat Kasra.", "Plural."]),
  U("Genitiv", "رَجُلَانِ", ["مِنْ رَجُلَيْنِ", "مِنْ رَجُلَانِ", "مِنْ رِجَالٍ", "مِنْ رَجُلٍ"], "Nach مِنْ → -aini.", ["Genitiv.", "Plural.", "Singular."])
]);

/* ---------- Lektion 19 ---------- */
R("m19", 0, [
  E("عِنْدِي قَلَمٌ ____. (ein einziger Stift)", ["وَاحِدٌ", "وَاحِدَةٌ", "وَاحِدًا", "أَحَدٌ"], "وَاحِدٌ als Adjektiv nach dem Nomen.", ["Männlich.", "Nominativ.", "Nicht so im Buch."]),
  E("رَأَيْتُ رَجُلًا ____.", ["وَاحِدًا", "وَاحِدٌ", "وَاحِدَةً", "وَاحِدٍ"], "Folgt dem Akkusativ.", ["Fall.", "Geschlecht.", "Fall."]),
  F("Wo steht وَاحِدٌ?", "", ["nach dem Nomen", "vor dem Nomen", "am Satzanfang", "beliebig"], "Wie ein Adjektiv: كِتَابٌ وَاحِدٌ.", ["Nicht davor.", "Nicht am Anfang.", "Die Stellung ist fest."]),
  U("Übersetze ins Arabische", "Ich habe ein einziges Buch.", ["عِنْدِي كِتَابٌ وَاحِدٌ.", "عِنْدِي وَاحِدٌ كِتَابٌ.", "عِنْدِي كِتَابٌ وَاحِدًا.", "عِنْدِي وَاحِدُ كِتَابٍ."], "Nomen + وَاحِدٌ.", ["Stellung.", "Nominativ.", "Keine Iḍāfa."]),
  U("Übersetze ins Arabische", "in einem einzigen Tag", ["فِي يَوْمٍ وَاحِدٍ", "فِي يَوْمٍ وَاحِدٌ", "فِي وَاحِدِ يَوْمٍ", "فِي يَوْمٌ وَاحِدٌ"], "Genitiv für beide.", ["Fall.", "Stellung.", "Nach فِي Genitiv."])
]);
R("m19", 1, [
  E("عِنْدِي قَلَمَانِ ____.", ["اثْنَانِ", "اثْنَتَانِ", "اثْنَيْنِ", "ثَلَاثَةٌ"], "اثْنَانِ nach dem Nomen, männlich.", ["Weiblich.", "Akk./Gen.", "„drei“."]),
  F("Wozu dient اثْنَانِ nach einem Dual?", "كِتَابَانِ اثْنَانِ", ["zur Betonung – der Dual sagt schon „zwei“", "es macht daraus einen Plural", "es ist die Zahl 12", "es ersetzt das Nomen"], "Meist lässt man es weg.", ["Es bleibt Dual.", "12 ist اثْنَا عَشَرَ.", "Das Nomen bleibt."]),
  F("Wo steht اثْنَانِ?", "", ["nach dem Nomen", "vor dem Nomen", "am Satzende immer", "nirgends"], "كِتَابَانِ اثْنَانِ.", ["Nicht davor.", "Nach dem Nomen.", "Es kommt vor."]),
  U("Mach es betont", "عِنْدِي بَيْتَانِ.", ["عِنْدِي بَيْتَانِ اثْنَانِ.", "عِنْدِي اثْنَانِ بَيْتَانِ.", "عِنْدِي بَيْتَانِ اثْنَتَانِ.", "عِنْدِي بُيُوتٌ اثْنَانِ."], "اثْنَانِ nach dem Dual.", ["Stellung.", "Männlich.", "Dual bleibt."]),
  U("Übersetze ins Arabische", "Er hat zwei Söhne.", ["لَهُ ابْنَانِ.", "لَهُ ابْنٌ اثْنَانِ.", "لَهُ أَبْنَاءٌ.", "لَهُ اثْنَانِ أَبْنَاءٍ."], "Dual reicht.", ["Singular mit اثْنَانِ geht nicht.", "Plural.", "Falsch."]),
  E("لِي أُخْتَانِ ____.", ["اثْنَتَانِ", "اثْنَانِ", "اثْنَتَيْنِ", "وَاحِدَةٌ"], "Weiblich: اثْنَتَانِ.", ["Männlich.", "Akk./Gen.", "„eine“."])
]);
R("m19", 2, [
  E("فِي الْفَصْلِ أَرْبَعَةُ ____.", ["طُلَّابٍ", "طَالِبٍ", "طُلَّابٌ", "طَالِبًا"], "Plural im Genitiv.", ["Plural.", "Genitiv.", "Plural, Genitiv."]),
  E("عِنْدِي سِتَّةُ ____.", ["دَفَاتِرَ", "دَفْتَرٍ", "دَفَاتِرُ", "دَفَاتِرٍ"], "Plural Genitiv; Diptoton → Fatḥa.", ["Plural.", "Genitiv.", "Kein Tanwīn."])
]);
R("m19", 3, [
  E("____ أَيَّامٍ (sieben Tage)", ["سَبْعَةُ", "سَبْعُ", "سَبْعٌ", "سَبْعَةٍ"], "يَوْمٌ männlich → mit ة.", ["Ohne ة nur bei weiblichem.", "Kein Tanwīn.", "Fall."]),
  E("____ رِجَالٍ (neun Männer)", ["تِسْعَةُ", "تِسْعُ", "تِسْعَةٌ", "تُسْعُ"], "Männlich → mit ة.", ["Ohne ة nur bei weiblichem.", "Kein Tanwīn.", "Falsch."]),
  E("____ أَقْلَامٍ (drei Stifte)", ["ثَلَاثَةُ", "ثَلَاثُ", "ثَلَاثٌ", "ثَالِثُ"], "Männlich → ثَلَاثَةُ.", ["Weibliche Form.", "Kein Tanwīn.", "Ordnungszahl."]),
  F("Was ist das „umgekehrte Geschlecht“?", "", ["Bei männlichem Gezähltem hat die Zahl 3–10 ein ة.", "Männliche Zahlen stehen nach dem Nomen.", "Weibliche Nomen bekommen kein Tanwīn.", "Die Zahl steht im Plural."], "ثَلَاثَةُ رِجَالٍ – mit ة.", ["Das gilt für 1 und 2.", "Anderes Thema.", "Die Zahl ist Singular."]),
  U("Mach daraus „vier …“", "دَرْسٌ", ["أَرْبَعَةُ دُرُوسٍ", "أَرْبَعُ دُرُوسٍ", "أَرْبَعَةُ دَرْسٍ", "أَرْبَعَةُ دُرُوسٌ"], "Männlich → mit ة.", ["Ohne ة für weiblich.", "Plural.", "Genitiv."]),
  U("Mach daraus „fünf …“", "بَيْتٌ", ["خَمْسَةُ بُيُوتٍ", "خَمْسُ بُيُوتٍ", "خَمْسَةُ بَيْتٍ", "خَمْسَةٌ بُيُوتٌ"], "Männlich → mit ة.", ["Ohne ة für weiblich.", "Plural.", "Iḍāfa."])
]);
R("m19", 5, [
  E("كَمْ ____ هَذَا الْكِتَابِ؟ (Was kostet dieses Buch?)", ["ثَمَنُ", "ثَمَنٌ", "ثَمَنَ", "الثَّمَنُ"], "كَمْ ثَمَنُ … – ثَمَنُ ist Muḍāf.", ["Kein Tanwīn.", "Nominativ.", "Kein al."]),
  F("Welches Wort ist in كَمْ ثَمَنُ هَذَا؟ ausgelassen?", "كَمْ ثَمَنُ هَذَا؟", ["z. B. رِيَالًا", "هُوَ", "كِتَابٌ", "مَا"], "Gemeint ist „wie viele Riyal ist der Preis?“", ["Nicht ausgelassen.", "Nicht ausgelassen.", "Nicht ausgelassen."]),
  U("Übersetze ins Arabische", "Was kostet diese Uhr?", ["كَمْ ثَمَنُ هَذِهِ السَّاعَةِ؟", "كَمْ ثَمَنٌ هَذِهِ السَّاعَةُ؟", "مَا ثَمَنُ هَذَا السَّاعَةِ؟", "كَمْ السَّاعَةُ ثَمَنُ؟"], "ثَمَنُ + Genitiv.", ["Iḍāfa: kein Tanwīn, Genitiv.", "هَذِهِ für die Uhr.", "Stellung."])
]);
R("m19", 6, [
  E("الطُّلَّابُ ____هُمْ فِي الْفَصْلِ. (alle)", ["كُلُّ", "بَعْضُ", "كُلٌّ", "الْكُلُّ"], "„sie alle“ = كُلُّهُمْ.", ["„einige“.", "Kein Tanwīn.", "Kein al."]),
  E("____نَا مُسْلِمُونَ. (Wir alle …)", ["كُلُّ", "كُلٌّ", "بَعْضُ", "كَلُّ"], "كُلُّنَا.", ["Kein Tanwīn.", "„einige“.", "Falscher Vokal."]),
  E("____كُمْ طُلَّابٌ. (Ihr alle …)", ["كُلُّ", "كُلًّا", "كُلٍّ", "بَعْضُ"], "كُلُّكُمْ.", ["Nominativ.", "Nominativ.", "„einige“."]),
  U("Statt „einige von ihnen“: „sie alle“", "بَعْضُهُمْ مُدَرِّسُونَ.", ["كُلُّهُمْ مُدَرِّسُونَ.", "كُلُّهُ مُدَرِّسُونَ.", "كُلُّهَا مُدَرِّسُونَ.", "كُلٌّ مُدَرِّسُونَ."], "كُلُّهُمْ.", ["Plural.", "Personen.", "Falsch."]),
  U("Statt „sie alle“: „wir alle“", "كُلُّهُمْ مِنَ الْهِنْدِ.", ["كُلُّنَا مِنَ الْهِنْدِ.", "كُلُّكُمْ مِنَ الْهِنْدِ.", "كُلُّنَا مِنَ الْهِنْدُ.", "نَحْنُ كُلُّ مِنَ الْهِنْدِ."], "كُلُّنَا.", ["„ihr alle“.", "Genitiv.", "Falsch."]),
  F("Was heißt كُلُّكُمْ?", "كُلُّكُمْ", ["ihr alle", "sie alle", "wir alle", "jeder von uns"], "ـكُمْ = euch.", ["كُلُّهُمْ.", "كُلُّنَا.", "Falsch."])
]);

/* ---------- Lektion 20 ---------- */
R("m20", 0, [
  E("لِي ____ أَخَوَاتٍ. (vier Schwestern)", ["أَرْبَعُ", "أَرْبَعَةُ", "أَرْبَعٌ", "أَرْبَعَةٌ"], "Weiblich → ohne ة.", ["Mit ة für männlich.", "Kein Tanwīn.", "Falsch."]),
  E("فِي الْبَيْتِ ____ غُرَفٍ. (fünf Zimmer)", ["خَمْسُ", "خَمْسَةُ", "خَمْسٌ", "خَامِسُ"], "Weiblich → ohne ة.", ["Männlich.", "Kein Tanwīn.", "Ordnungszahl."])
]);
R("m20", 1, [
  F("Welche Form ist die weibliche von سِتَّةٌ?", "سِتَّةٌ", ["سِتٌّ", "سِتَّتٌ", "سَادِسَةٌ", "سِتَّاتٌ"], "Ohne ة: سِتٌّ.", ["Gibt es nicht.", "Ordnungszahl.", "Gibt es nicht."]),
  F("Welche Form ist die weibliche von سَبْعَةٌ?", "سَبْعَةٌ", ["سَبْعٌ", "سَبْعَةٌ", "سَابِعَةٌ", "سُبْعٌ"], "سَبْعٌ.", ["Unverändert.", "Ordnungszahl.", "Bruch „ein Siebtel“."]),
  E("____ سَاعَاتٍ (sechs Stunden)", ["سِتُّ", "سِتَّةُ", "سِتٌّ", "سَادِسُ"], "سَاعَةٌ weiblich → سِتُّ.", ["Männlich.", "Kein Tanwīn.", "Ordnungszahl."]),
  E("____ لُغَاتٍ (sieben Sprachen)", ["سَبْعُ", "سَبْعَةُ", "سَبْعٌ", "سَابِعُ"], "لُغَةٌ weiblich.", ["Männlich.", "Kein Tanwīn.", "Ordnungszahl."])
]);
R("m20", 2, [
  E("عِنْدِي ____ مَجَلَّاتٍ. (acht Zeitschriften)", ["ثَمَانِي", "ثَمَانِيَةُ", "ثَمَانٌ", "ثَمَانُ"], "Weiblich: ثَمَانِي.", ["Männlich.", "Falsch.", "Falsch."]),
  E("فِي الْكِتَابِ ____ دُرُوسٍ. (acht Lektionen)", ["ثَمَانِيَةُ", "ثَمَانِي", "ثَمَانُ", "ثَامِنُ"], "دَرْسٌ männlich → ثَمَانِيَةُ.", ["Weiblich.", "Falsch.", "Ordnungszahl."]),
  F("Warum sieht man auf dem ي von ثَمَانِي kein Zeichen?", "ثَمَانِي", ["Es hat ein Sukūn, das nach Kasra nicht geschrieben wird.", "Es ist ein Fehler.", "Es hat Tanwīn.", "Es ist ein Alif."], "Das Sukūn ist versteckt.", ["Kein Fehler.", "Kein Tanwīn.", "Es ist ein ي."]),
  U("Mach es weiblich (Gezähltes: Zimmer)", "ثَمَانِيَةُ بُيُوتٍ", ["ثَمَانِي غُرَفٍ", "ثَمَانِيَةُ غُرَفٍ", "ثَمَانِي غُرْفَةٍ", "ثَمَانُ غُرَفٍ"], "ثَمَانِي + weiblicher Plural.", ["Männliche Form.", "Plural.", "Falsch."])
]);
R("m20", 3, [
  E("____ كَلِمَاتٍ (zehn Wörter)", ["عَشْرُ", "عَشَرَةُ", "عَشَرُ", "عُشْرُ"], "Weiblich: عَشْرُ (Sukūn auf ش).", ["Männlich.", "Falscher Vokal.", "Bruch „ein Zehntel“."]),
  E("____ أَوْلَادٍ (zehn Kinder)", ["عَشَرَةُ", "عَشْرُ", "عَشْرَةُ", "عُشْرُ"], "Männlich: عَشَرَةُ (Fatḥa auf ش).", ["Weiblich.", "Falscher Vokal.", "Bruch."]),
  F("Was ist der Unterschied? عَشَرَةُ – عَشْرُ", "", ["عَشَرَةُ: männliches Gezähltes, عَشْرُ: weibliches", "beides gleich", "عَشَرَةُ: weiblich, عَشْرُ: männlich", "عَشْرُ ist 20"], "Fatḥa vs. Sukūn auf ش.", ["Unterschiedlich.", "Vertauscht.", "20 = عِشْرُونَ."]),
  U("Statt Jungen: Mädchen", "عَشَرَةُ أَوْلَادٍ", ["عَشْرُ بَنَاتٍ", "عَشَرَةُ بَنَاتٍ", "عَشْرَةُ بَنَاتٍ", "عَشْرُ بِنْتٍ"], "Weiblich → عَشْرُ.", ["Männlich.", "Gemischt.", "Plural."]),
  U("Übersetze ins Arabische", "Ich habe zehn Riyal.", ["عِنْدِي عَشَرَةُ رِيَالَاتٍ.", "عِنْدِي عَشْرُ رِيَالَاتٍ.", "عِنْدِي عَشَرَةُ رِيَالٍ.", "عِنْدِي عَشَرَةٌ رِيَالَاتٌ."], "رِيَالٌ männlich → عَشَرَةُ.", ["رِيَالٌ ist männlich.", "Plural.", "Iḍāfa."])
]);
R("m20", 4, [
  E("لِي بِنْتٌ ____.", ["وَاحِدَةٌ", "وَاحِدٌ", "اثْنَتَانِ", "أُولَى"], "Weiblich: وَاحِدَةٌ.", ["Männlich.", "„zwei“.", "„erste“."]),
  E("عِنْدِي سَيَّارَتَانِ ____.", ["اثْنَتَانِ", "اثْنَانِ", "اثْنَتَيْنِ", "وَاحِدَةٌ"], "Weiblich: اثْنَتَانِ.", ["Männlich.", "Akk./Gen.", "„eine“."]),
  U("Mach es weiblich", "عِنْدِي ابْنَانِ اثْنَانِ.", ["عِنْدِي بِنْتَانِ اثْنَتَانِ.", "عِنْدِي بِنْتَانِ اثْنَانِ.", "عِنْدِي بَنَاتٌ اثْنَتَانِ.", "عِنْدِي بِنْتٌ اثْنَتَانِ."], "بِنْتَانِ + اثْنَتَانِ.", ["Zahl muss weiblich werden.", "Dual.", "Dual."])
]);

/* ---------- Lektion 21 ---------- */
R("m21", 0, [
  U("Plural", "هَذَا طَالِبٌ صَغِيرٌ وَهَذِهِ بِنْتٌ صَغِيرَةٌ.", ["هَؤُلَاءِ طُلَّابٌ صِغَارٌ وَهَؤُلَاءِ بَنَاتٌ صِغَارٌ.", "هَذِهِ طُلَّابٌ صَغِيرَةٌ وَهَذِهِ بَنَاتٌ صَغِيرَةٌ.", "هَؤُلَاءِ طُلَّابٌ صِغَارٌ وَهَذِهِ بَنَاتٌ صَغِيرَةٌ.", "هَؤُلَاءِ طَالِبَانِ صَغِيرَانِ وَبِنْتَانِ صَغِيرَتَانِ."], "Personen → هَؤُلَاءِ + Plural.", ["Sachregel.", "Mädchen sind Personen.", "Das ist Dual."])
]);
R("m21", 1, [
  E("____ الْمَسْجِدُ قَدِيمٌ. (Jene Moschee …)", ["ذَاكَ", "تِلْكَ", "هَذِهِ", "هَؤُلَاءِ"], "ذَاكَ = ذَلِكَ.", ["Weiblich.", "Weiblich, nah.", "Plural."]),
  F("Was bedeutet ذَاكَ?", "ذَاكَ", ["jener (= ذَلِكَ)", "dieser (= هَذَا)", "jene (= تِلْكَ)", "diese (Plural)"], "ذَاكَ und ذَلِكَ sind gleichbedeutend.", ["Das ist nah.", "Das ist weiblich.", "Das ist Plural."]),
  U("Ersetze ذَاكَ durch das gleichbedeutende Wort", "ذَاكَ رَجُلٌ طَوِيلٌ.", ["ذَلِكَ رَجُلٌ طَوِيلٌ.", "تِلْكَ رَجُلٌ طَوِيلٌ.", "هَذَا رَجُلٌ طَوِيلٌ.", "أُولَئِكَ رَجُلٌ طَوِيلٌ."], "ذَاكَ = ذَلِكَ.", ["Weiblich.", "Nah.", "Plural."]),
  E("مَا ____؟ – ذَاكَ دُكَّانٌ. (Was ist das dort?)", ["ذَاكَ", "هَذِهِ", "تِلْكَ", "هُوَ"], "Die Antwort hat ذَاكَ.", ["Weiblich.", "Weiblich.", "Personalpronomen."]),
  U("Übersetze ins Arabische", "Jener Junge ist mein Bruder.", ["ذَاكَ الْوَلَدُ أَخِي.", "ذَاكَ وَلَدٌ أَخِي.", "تِلْكَ الْوَلَدُ أَخِي.", "ذَاكَ الْوَلَدُ أَخُوهُ."], "ذَاكَ + al-Wort.", ["„jener Junge“ braucht al.", "Weiblich.", "„sein Bruder“."])
]);
R("m21", 2, [
  E("مُحَمَّدٌ رَسُولُ اللَّهِ، ____. (wir lieben ihn)", ["نُحِبُّهُ", "نُحِبُّهَا", "أُحِبُّهُ", "تُحِبُّهُ"], "„wir lieben ihn“.", ["„sie“.", "„ich“.", "„du“."])
]);

/* ---------- Lektion 22 ---------- */
R("m22", 0, [
  E("هَذَا ____ الْمُدَرِّسِ. (das Buch des Lehrers)", ["كِتَابُ", "كِتَابٌ", "الْكِتَابُ", "كِتَابًا"], "Muḍāf → kein Tanwīn.", ["Kein Tanwīn als Muḍāf.", "Kein al.", "Nominativ."]),
  E("يَا ____، أَيْنَ الْقَلَمُ؟ (O Lehrer)", ["أُسْتَاذُ", "أُسْتَاذٌ", "الْأُسْتَاذُ", "أُسْتَاذًا"], "Nach يَا kein Tanwīn.", ["Kein Tanwīn.", "Kein al.", "Kein Akkusativ."]),
  F("Wann fällt das Tanwīn weg?", "", ["mit الـ, als Muḍāf oder nach يَا", "nur im Plural", "nur bei weiblichen Wörtern", "nie"], "Drei Fälle: al, Muḍāf, يَا.", ["Nicht nur im Plural.", "Nicht nur weiblich.", "Es fällt oft weg."]),
  U("Mach es bestimmt", "طَالِبٌ", ["الطَّالِبُ", "الطَّالِبٌ", "طَالِبُ", "الْطَّالِبُ"], "Mit al fällt das Tanwīn.", ["Kein Tanwīn mit al.", "al fehlt.", "Das l wird angeglichen."]),
  U("Mach daraus einen Muḍāf: „das Auto des Ministers“", "سَيَّارَةٌ", ["سَيَّارَةُ الْوَزِيرِ", "سَيَّارَةٌ الْوَزِيرِ", "السَّيَّارَةُ الْوَزِيرِ", "سَيَّارَةُ الْوَزِيرُ"], "Muḍāf ohne Tanwīn.", ["Kein Tanwīn.", "Kein al.", "Genitiv."]),
  U("Ruf ihn an", "طَالِبٌ", ["يَا طَالِبُ", "يَا طَالِبٌ", "يَا الطَّالِبُ", "يَا طَالِبًا"], "Nach يَا kein Tanwīn.", ["Kein Tanwīn.", "Kein al.", "Kein Akkusativ."])
]);
R("m22", 1, [
  F("Was heißt الْمَمْنُوعُ مِنَ الصَّرْفِ?", "", ["ein Wort ohne Tanwīn (Diptoton)", "ein Verb", "ein Wort mit al", "ein Plural"], "Diptota bekommen nie Tanwīn.", ["Es ist ein Nomen.", "Es geht um Tanwīn.", "Nicht nur Plurale."])
]);
R("m22", 2, [
  E("هَذَا ____. (Das ist Usāma.)", ["أُسَامَةُ", "أُسَامَةٌ", "الْأُسَامَةُ", "أُسَامَةَ"], "Männlicher Name auf ة → Diptoton.", ["Kein Tanwīn.", "Kein al.", "Nominativ."]),
  E("____ شَهْرٌ مُبَارَكٌ. (Ramaḍān ist ein gesegneter Monat.)", ["رَمَضَانُ", "رَمَضَانٌ", "الرَّمَضَانُ", "رَمَضَانَ"], "Name auf ـَانُ → Diptoton, kein Tanwīn.", ["Kein Tanwīn.", "Kein al.", "Nominativ."])
]);
R("m22", 3, [
  E("السَّمَاءُ ____. (blau)", ["زَرْقَاءُ", "أَزْرَقُ", "زَرْقَاءٌ", "زُرْقٌ"], "Feminin: فَعْلَاءُ.", ["Maskulin.", "Kein Tanwīn.", "Plural."]),
  E("هَذَا قَمِيصٌ ____. (weiß)", ["أَبْيَضُ", "أَبْيَضٌ", "بَيْضَاءُ", "بِيضٌ"], "Maskulin: أَفْعَلُ.", ["Kein Tanwīn.", "Feminin.", "Plural."]),
  E("هَذَا ____. (Das ist Anwar.)", ["أَنْوَرُ", "أَنْوَرٌ", "الْأَنْوَرُ", "أَنْوَرَ"], "Name nach أَفْعَلُ → Diptoton.", ["Kein Tanwīn.", "Kein al.", "Nominativ."]),
  U("Mach es unbestimmt", "الْقَلَمُ الْأَسْوَدُ", ["قَلَمٌ أَسْوَدُ", "قَلَمٌ أَسْوَدٌ", "قَلَمُ أَسْوَدُ", "قَلَمٌ سَوْدَاءُ"], "Nomen mit Tanwīn, Farbe ohne.", ["Farbe ohne Tanwīn.", "Nomen braucht Tanwīn.", "Maskulin."])
]);
R("m22", 5, [
  F("Aus welcher Form ist أَطِبَّاءُ entstanden?", "أَطِبَّاءُ", ["أَطْبِبَاءُ", "طُبَّاءُ", "أَطِبُّونَ", "طِبَابٌ"], "Muster أَفْعِلَاءُ; die zwei b sind zusammengefallen.", ["Muster فُعَلَاءُ passt nicht.", "Gesunder Plural.", "Falsch."]),
  E("هَؤُلَاءِ ____. (Ärzte)", ["أَطِبَّاءُ", "أَطِبَّاءٌ", "طَبِيبُونَ", "أَطْبِبَاءُ"], "Diptoton, ohne Tanwīn.", ["Kein Tanwīn.", "Gebrochener Plural.", "Ursprungsform, nicht gebräuchlich."]),
  F("Nach welchem Muster ist أَطِبَّاءُ gebildet?", "أَطِبَّاءُ", ["أَفْعِلَاءُ", "فُعَلَاءُ", "مَفَاعِلُ", "أَفْعَالٌ"], "Wie أَصْدِقَاءُ, أَغْنِيَاءُ.", ["Wie وُزَرَاءُ.", "Wie مَسَاجِدُ.", "Wie أَقْلَامٌ."]),
  U("Plural", "هُوَ طَبِيبٌ.", ["هُمْ أَطِبَّاءُ.", "هُمْ طَبِيبُونَ.", "هُمْ أَطِبَّاءٌ.", "هِيَ أَطِبَّاءُ."], "أَطِبَّاءُ ohne Tanwīn.", ["Gebrochener Plural.", "Kein Tanwīn.", "Personen → هُمْ."])
]);

/* ---------- Lektion 23 ---------- */
R("m23", 0, [
  F("Wann steht ein Nomen im Genitiv?", "", ["nach einer Präposition oder als Muḍāf ilaihi", "nur nach فِي", "als Subjekt", "nach يَا"], "Zwei Gründe: Präposition und Iḍāfa.", ["Nach allen Präpositionen.", "Subjekt = Nominativ.", "Nach يَا Ḍamma oder Akkusativ."]),
  E("هَذَا كِتَابُ ____.", ["الطَّالِبِ", "الطَّالِبُ", "الطَّالِبَ", "طَالِبٌ"], "Muḍāf ilaihi → Genitiv.", ["Nominativ.", "Akkusativ.", "Nominativ."]),
  E("أَنَا مِنْ ____.", ["الْعِرَاقِ", "الْعِرَاقُ", "الْعِرَاقَ", "عِرَاقٌ"], "Nach مِنْ Genitiv.", ["Nominativ.", "Akkusativ.", "Nominativ."]),
  F("Warum steht الْمُدَرِّسِ im Genitiv? كِتَابُ الْمُدَرِّسِ", "كِتَابُ الْمُدَرِّسِ", ["Es ist Muḍāf ilaihi.", "Es steht nach einer Präposition.", "Es ist Subjekt.", "Es ist Objekt."], "Zweiter Teil der Iḍāfa.", ["Keine Präposition.", "Kein Subjekt.", "Kein Objekt."]),
  F("Warum steht الْبَيْتِ im Genitiv? فِي الْبَيْتِ", "فِي الْبَيْتِ", ["wegen der Präposition فِي", "weil es Muḍāf ilaihi ist", "weil es Subjekt ist", "weil es bestimmt ist"], "Nach Präpositionen Genitiv.", ["Keine Iḍāfa.", "Kein Subjekt.", "Bestimmtheit macht keinen Fall."]),
  U("Mach eine Iḍāfa", "بَيْتٌ + التَّاجِرُ", ["بَيْتُ التَّاجِرِ", "بَيْتٌ التَّاجِرِ", "الْبَيْتُ التَّاجِرِ", "بَيْتُ التَّاجِرُ"], "Muḍāf + Genitiv.", ["Kein Tanwīn.", "Kein al.", "Genitiv."])
]);
R("m23", 1, [
  E("ذَهَبْتُ إِلَى ____. (zu Aḥmad)", ["أَحْمَدَ", "أَحْمَدِ", "أَحْمَدٍ", "أَحْمَدُ"], "Diptoton im Genitiv → Fatḥa.", ["Kein Kasra.", "Kein Tanwīn.", "Genitiv."]),
  E("هَذَا قَلَمُ ____. (Fāṭimas Stift)", ["فَاطِمَةَ", "فَاطِمَةِ", "فَاطِمَةٍ", "فَاطِمَةُ"], "Diptoton → Fatḥa.", ["Kein Kasra.", "Kein Tanwīn.", "Genitiv."]),
  E("الْكِتَابُ عِنْدَ ____.", ["عُثْمَانَ", "عُثْمَانِ", "عُثْمَانٍ", "عُثْمَانُ"], "Diptoton → Fatḥa.", ["Kein Kasra.", "Kein Tanwīn.", "Genitiv."]),
  F("Welches Zeichen hat ein Diptoton im Genitiv (ohne al)?", "", ["Fatḥa", "Kasra", "Kasra-Tanwīn", "Ḍamma"], "Fatḥa anstelle der Kasra.", ["Nur mit al oder als Muḍāf.", "Kein Tanwīn.", "Das ist Nominativ."])
]);
R("m23", 2, [
  E("ذَهَبْتُ إِلَى بَيْتِ ____. (zu Ibrāhīms Haus)", ["إِبْرَاهِيمَ", "إِبْرَاهِيمِ", "إِبْرَاهِيمٍ", "إِبْرَاهِيمُ"], "Diptoton als Muḍāf ilaihi → Fatḥa.", ["Kein Kasra.", "Kein Tanwīn.", "Genitiv."]),
  E("ذَهَبْتُ مَعَ ____. (mit Yūsuf)", ["يُوسُفَ", "يُوسُفِ", "يُوسُفٍ", "يُوسُفُ"], "Fremder Name → Fatḥa.", ["Kein Kasra.", "Kein Tanwīn.", "Genitiv."]),
  U("Statt Bilāl: Ḥamza", "سَيَّارَةُ بِلَالٍ", ["سَيَّارَةُ حَمْزَةَ", "سَيَّارَةُ حَمْزَةٍ", "سَيَّارَةُ حَمْزَةِ", "سَيَّارَةُ حَمْزَةُ"], "Diptoton → Fatḥa.", ["Kein Tanwīn.", "Kein Kasra.", "Genitiv."]),
  U("Setz إِلَى davor", "جُدَّةُ", ["إِلَى جُدَّةَ", "إِلَى جُدَّةِ", "إِلَى جُدَّةٍ", "إِلَى الْجُدَّةِ"], "Städtename → Fatḥa.", ["Kein Kasra.", "Kein Tanwīn.", "Kein al."]),
  U("Übersetze ins Arabische", "Ich ging mit Zainab und Maryam zum Markt.", ["ذَهَبْتُ مَعَ زَيْنَبَ وَمَرْيَمَ إِلَى السُّوقِ.", "ذَهَبْتُ مَعَ زَيْنَبٍ وَمَرْيَمٍ إِلَى السُّوقِ.", "ذَهَبْتُ مَعَ زَيْنَبِ وَمَرْيَمِ إِلَى السُّوقِ.", "ذَهَبْتُ مَعَ زَيْنَبُ وَمَرْيَمُ إِلَى السُّوقِ."], "Beide Namen → Fatḥa.", ["Kein Tanwīn.", "Kein Kasra.", "Genitiv."])
]);
R("m23", 3, [
  E("عِنْدِي خَمْسَةُ ____. (fünf Taschentücher)", ["مَنَادِيلَ", "مَنَادِيلٍ", "مَنَادِيلِ", "مَنَادِيلُ"], "Diptoton nach Zahl → Fatḥa.", ["Kein Tanwīn.", "Kein Kasra.", "Genitiv."]),
  E("فِي الْبَيْتِ أَرْبَعُ ____. (vier Fenster)", ["نَوَافِذَ", "نَوَافِذٍ", "نَوَافِذِ", "نَوَافِذُ"], "Diptoton → Fatḥa.", ["Kein Tanwīn.", "Kein Kasra.", "Genitiv."]),
  E("لِي ثَلَاثَةُ ____. (drei Freunde)", ["أَصْدِقَاءَ", "أَصْدِقَاءٍ", "أَصْدِقَاءِ", "أَصْدِقَاءُ"], "Diptoton → Fatḥa.", ["Kein Tanwīn.", "Kein Kasra.", "Genitiv."]),
  U("Mach daraus „sechs …“", "مِفْتَاحٌ", ["سِتَّةُ مَفَاتِيحَ", "سِتَّةُ مَفَاتِيحٍ", "سِتُّ مَفَاتِيحَ", "سِتَّةُ مَفَاتِيحُ"], "Männlich → mit ة; Diptoton → Fatḥa.", ["Kein Tanwīn.", "مِفْتَاحٌ ist männlich.", "Genitiv."]),
  U("Mach daraus „sieben …“", "دَقِيقَةٌ", ["سَبْعُ دَقَائِقَ", "سَبْعَةُ دَقَائِقَ", "سَبْعُ دَقَائِقٍ", "سَبْعُ دَقِيقَةٍ"], "Weiblich → ohne ة; Diptoton → Fatḥa.", ["دَقِيقَةٌ ist weiblich.", "Kein Tanwīn.", "Plural."])
]);
R("m23", 4, [
  F("Wie lautet der Iʿrāb von أَحْمَدَ in مِنْ أَحْمَدَ?", "مِنْ أَحْمَدَ", ["مَجْرُورٌ وَعَلَامَةُ جَرِّهِ الْفَتْحَةُ نِيَابَةً عَنِ الْكَسْرَةِ", "مَنْصُوبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ", "مَجْرُورٌ وَعَلَامَةُ جَرِّهِ الْكَسْرَةُ", "مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ"], "Genitiv, Zeichen Fatḥa statt Kasra (Diptoton).", ["Es ist Genitiv, nicht Akkusativ.", "Das Zeichen ist Fatḥa.", "Es ist Genitiv."]),
  F("Was bedeutet نِيَابَةً عَنِ الْكَسْرَةِ?", "", ["anstelle der Kasra", "mit der Kasra", "ohne Endung", "wegen der Kasra"], "Die Fatḥa vertritt die Kasra.", ["Gegenteil.", "Es gibt eine Endung.", "Falsch."]),
  F("Was ist مَسَاجِدَ in ثَلَاثَةُ مَسَاجِدَ?", "ثَلَاثَةُ مَسَاجِدَ", ["Muḍāf ilaihi, Genitiv mit Fatḥa", "Objekt, Akkusativ", "Subjekt", "Adjektiv"], "Diptoton als Muḍāf ilaihi.", ["Kein Objekt.", "Kein Subjekt.", "Kein Adjektiv."]),
  F("Warum steht in فِي مَدِينَةِ جُدَّةَ bei مَدِينَةِ ein Kasra?", "فِي مَدِينَةِ جُدَّةَ", ["مَدِينَةٌ ist kein Diptoton.", "Weil جُدَّةَ folgt.", "Weil es Muḍāf ist – alle Muḍāf haben Kasra.", "Das ist falsch."], "Normales Nomen → Kasra; nur جُدَّةَ ist diptot.", ["Es liegt am Wort selbst.", "Muḍāf haben den Fall ihrer Stellung.", "Es ist richtig."])
]);
R("m23", 5, [
  E("صَلَّيْتُ فِي ____. (in den Moscheen der Stadt)", ["مَسَاجِدِ الْمَدِينَةِ", "مَسَاجِدَ الْمَدِينَةِ", "مَسَاجِدٍ الْمَدِينَةِ", "الْمَسَاجِدَ الْمَدِينَةِ"], "Als Muḍāf → normale Kasra.", ["Als Muḍāf Kasra.", "Kein Tanwīn.", "Kein al am Muḍāf."])
]);

})(window.MADINA_PLUS = window.MADINA_PLUS || {});
