/* Taǧwīd – Ergänzungen, die nicht im Heft „Hidāyat ar-Raḥmān“ und nicht auf der Tafel stehen.
   Nach dem allgemein überlieferten Taǧwīd (u. a. Tuḥfat al-Aṭfāl und al-Muqaddima al-Ǧazariyya), Lesart Ḥafṣ ʿan ʿĀṣim
   über aš-Šāṭibiyya. Kapitel mit general: true und Regeln mit g: true werden auf der Seite als „ergänzt“ gekennzeichnet;
   Übungsfragen dazu haben src: "Allg.".
   Außerdem: MAKHARIJ – die 17 Austrittsstellen für die Maḫraǧ-Aufgaben. */
(function () {
  "use strict";
  var D = window.TAJWID;
  if (!D) return;
  function at(id) { for (var i = 0; i < D.chapters.length; i++) if (D.chapters[i].id === id) return i; return -1; }
  function insertAfter(id, ch) { D.chapters.splice(at(id) + 1, 0, ch); }
  D.src.general = "allgemeines Taǧwīd-Wissen (u. a. Tuḥfat al-Aṭfāl, al-Muqaddima al-Ǧazariyya)";

  /* ------------------------------------------------ Istiʿāḏa und Basmala */
  insertAfter("einf", { id: "istiadha", general: true, title: "Istiʿāḏa und Basmala", ar: "الِاسْتِعَاذَةُ وَالْبَسْمَلَةُ",
    intro: "Bevor man liest, sucht man Zuflucht bei Allah (Istiʿāḏa). Am Anfang jeder Sūra – außer at-Tawba – liest man die Basmala. Wie man Istiʿāḏa, Basmala und den ersten Vers verbindet oder trennt, ist geregelt.",
    rules: [
      { h: "Istiʿāḏa", ar: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
        text: "Vor dem Lesen, nach ﴿فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ﴾ (an-Naḥl 16:98). Nach der Mehrheit der Gelehrten Sunna. Laut, wenn man laut vor anderen liest; leise, wenn man leise oder im Gebet liest." },
      { h: "Basmala", ar: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        text: "Am Anfang jeder Sūra, außer at-Tawba. Beginnt man mitten in einer Sūra, darf man sie lesen oder weglassen." },
      { h: "Vier Wege am Sūra-Anfang", ar: "",
        text: "Istiʿāḏa – Basmala – erster Vers: 1) alles getrennt (qaṭʿ al-ǧamīʿ) · 2) Istiʿāḏa getrennt, Basmala mit dem Vers verbunden · 3) Istiʿāḏa mit Basmala verbunden, der Vers getrennt · 4) alles verbunden (waṣl al-ǧamīʿ). Alle vier sind erlaubt." },
      { h: "Zwischen zwei Sūren", ar: "",
        text: "Ende der Sūra – Basmala – Anfang der nächsten: erlaubt sind 1) alles getrennt, 2) Ende getrennt, Basmala mit dem Anfang verbunden, 3) alles verbunden. Nicht erlaubt: das Ende mit der Basmala verbinden und dann anhalten – sonst klingt die Basmala wie das Ende der vorigen Sūra." },
      { h: "Zwischen al-Anfāl und at-Tawba", ar: "",
        text: "Ohne Basmala. Drei Wege: anhalten (waqf), kurz innehalten ohne Atem (sakt) oder verbinden (waṣl). Beginnt man mit at-Tawba, liest man nur die Istiʿāḏa." }
    ],
    book: [],
    quiz: [
      { q: "Vor welcher Sūra liest man keine Basmala?", a: ["at-Tawba", "al-Fātiḥa", "al-Anfāl", "an-Nās"], e: "At-Tawba beginnt ohne Basmala – beim Beginn liest man nur die Istiʿāḏa.", src: "Allg." },
      { q: "Wie viele Wege gibt es, Istiʿāḏa, Basmala und den ersten Vers am Sūra-Anfang zu lesen?", a: ["Vier – alle erlaubt", "Drei", "Zwei", "Nur einen"], e: "Alles getrennt, alles verbunden, oder jeweils eines verbunden und eines getrennt.", src: "Allg." },
      { q: "Welcher Weg ist zwischen zwei Sūren NICHT erlaubt?", a: ["Das Sūra-Ende mit der Basmala verbinden und dann anhalten", "Alles getrennt lesen", "Alles verbunden lesen", "Ende getrennt, Basmala mit dem Anfang verbunden"], e: "Sonst klingt die Basmala, als gehöre sie zur vorigen Sūra.", src: "Allg." },
      { q: "Welche drei Wege gibt es zwischen al-Anfāl und at-Tawba?", a: ["Waqf, Sakt oder Waṣl – ohne Basmala", "Nur mit Basmala", "Nur Waqf", "Basmala oder Istiʿāḏa"], e: "Zwischen al-Anfāl und at-Tawba steht keine Basmala.", src: "Allg." },
      { q: "Welcher Vers ist der Beleg für die Istiʿāḏa?", a: ["﴿فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ﴾", "﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾", "﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ﴾", "﴿اقْرَأْ بِاسْمِ رَبِّكَ﴾"], e: "An-Naḥl 16:98.", src: "Allg." }
    ] });

  /* ------------------------------------------------ Nūn und Mīm mit Šadda */
  insertAfter("mim", { id: "ghunna", general: true, title: "Nūn und Mīm mit Šadda", ar: "النُّونُ وَالْمِيمُ الْمُشَدَّدَتَانِ",
    intro: "Nūn und Mīm mit Šadda werden immer mit Ġunna gesprochen, etwa 2 Ḥarakāt lang – gleich ob in der Mitte oder am Ende des Wortes, beim Weiterlesen oder beim Anhalten.",
    rules: [
      { h: "Ḥarf ġunna mušaddad", ar: "حَرْفُ غُنَّةٍ مُشَدَّدٌ",
        text: "Jedes نّ und مّ: Ġunna, 2 Ḥarakāt.",
        ex: [["إِنَّ، أَنَّ، ثُمَّ", ""], ["عَمَّ، لَمَّا، جَنَّةٍ", ""], ["مِنَ النَّاسِ", "auch nach dem Lām šamsiyya"]] },
      { h: "Die Stufen der Ġunna", ar: "مَرَاتِبُ الْغُنَّةِ",
        text: "Am vollsten beim Nūn/Mīm mit Šadda und beim Idġām mit Ġunna, dann beim Iḫfāʾ und Iqlāb, am schwächsten beim deutlich gesprochenen Nūn/Mīm (Iẓhār) und mit Vokal." }
    ],
    book: [],
    quiz: [
      { q: "Wie wird ein Nūn mit Šadda gesprochen?", ar: "إِنَّ", a: ["Mit Ġunna, etwa 2 Ḥarakāt", "Ohne Ġunna", "Mit Qalqala", "4–5 Ḥarakāt gedehnt"], e: "Nūn und Mīm mit Šadda: immer Ġunna.", src: "Allg." },
      { q: "Welche Regel gilt?", ar: "ثُمَّ", a: ["Ġunna – Mīm mit Šadda", "Iḫfāʾ šafawī", "Iẓhār šafawī", "Madd ṭabīʿī"], e: "Mīm mit Šadda → Ġunna, 2 Ḥarakāt.", src: "Allg." },
      { q: "Wo ist die Ġunna am vollsten?", a: ["Beim Nūn/Mīm mit Šadda", "Beim Iẓhār", "Beim Nūn mit Vokal", "Bei der Qalqala"], e: "Die Ġunna ist beim mušaddad und beim Idġām mit Ġunna am vollsten.", src: "Allg." },
      { q: "Gilt die Ġunna beim Nūn mit Šadda auch am Wortende beim Anhalten?", ar: "إِنْسٌ وَلَا جَانٌّ", a: ["Ja – immer", "Nein, nur mitten im Wort", "Nur beim Weiterlesen", "Nur bei Mīm"], e: "Die Ġunna des Nūn/Mīm mit Šadda bleibt immer, auch beim Anhalten (جَانّ).", src: "Allg." }
    ] });

  /* ------------------------------------------------ Eigenschaften vollständig (Kapitel sifat erweitern) */
  var sifat = D.chapters[at("sifat")];
  sifat.title = "Qalqala und Eigenschaften";
  sifat.rules = sifat.rules.concat([
    { g: true, h: "Die Eigenschaften mit Gegenteil", ar: "الصِّفَاتُ الَّتِي لَهَا ضِدٌّ",
      text: "Jeder Buchstabe hat von jedem Paar genau eine: Hams (Hauch strömt, 10: „فَحَثَّهُ شَخْصٌ سَكَتَ“) ↔ Ǧahr (Hauch stockt, die übrigen) · Šidda (Laut stockt, 8: „أَجِدْ قَطٍ بَكَتْ“) ↔ Tawassuṭ (dazwischen, 5: „لِنْ عُمَرْ“) ↔ Riḫāwa (Laut fließt, die übrigen) · Istiʿlāʾ (Zunge hebt sich, 7: „خُصَّ ضَغْطٍ قِظْ“) ↔ Istifāl (die übrigen) · Iṭbāq (Zunge liegt am Gaumen an, 4: ص ض ط ظ) ↔ Infitāḥ (die übrigen) · Iḏlāq (leicht, 6: „فِرَّ مِنْ لُبٍّ“) ↔ Iṣmāt (die übrigen)." },
    { g: true, h: "Die Eigenschaften ohne Gegenteil", ar: "الصِّفَاتُ الَّتِي لَا ضِدَّ لَهَا",
      text: "Ṣafīr (Pfeifen): ص ز س · Qalqala: ق ط ب ج د · Līn (Weichheit): و und ي sākin nach Fatḥa · Inḥirāf (Abweichen): ل ر · Takrīr (Wiederholung – beim Rāʾ nur andeuten, nicht rollen): ر · Tafaššī (Ausbreiten der Luft): ش · Istiṭāla (Ausdehnung): ض. Zusammen mit den zehn oben sind es 17 Eigenschaften." }
  ]);
  sifat.quiz = sifat.quiz.concat([
    { q: "Was bedeutet Hams?", a: ["Der Atem strömt beim Buchstaben weiter (Hauchlaut)", "Der Atem stockt", "Die Zunge hebt sich", "Der Laut wird wiederholt"], e: "Hams: Hauch strömt – 10 Buchstaben „فَحَثَّهُ شَخْصٌ سَكَتَ“. Gegenteil: Ǧahr.", src: "Allg." },
    { q: "Welche Buchstaben haben Šidda?", a: ["„أَجِدْ قَطٍ بَكَتْ“", "„لِنْ عُمَرْ“", "„فِرَّ مِنْ لُبٍّ“", "„خُصَّ ضَغْطٍ قِظْ“"], e: "Bei Šidda stockt der Laut ganz: ء ج د ق ط ب ك ت.", src: "Allg." },
    { q: "Welche Buchstaben haben Tawassuṭ (zwischen Šidda und Riḫāwa)?", a: ["„لِنْ عُمَرْ“ – ل ن ع م ر", "„أَجِدْ قَطٍ بَكَتْ“", "ص ز س", "ق ط ب ج د"], e: "Der Laut stockt nicht ganz und fließt nicht ganz.", src: "Allg." },
    { q: "Welche vier Buchstaben haben Iṭbāq?", a: ["ص ض ط ظ", "خ غ ق", "ق ط ب ج د", "ث ذ ظ"], e: "Beim Iṭbāq liegt die Zunge breit am Gaumen – die dicksten Buchstaben.", src: "Allg." },
    { q: "Welcher Buchstabe hat Takrīr (Wiederholung)?", a: ["ر", "ل", "ش", "ض"], e: "Das Rāʾ neigt zum Rollen; man deutet es nur an und rollt es nicht.", src: "Allg." },
    { q: "Welcher Buchstabe hat Tafaššī (Ausbreiten)?", a: ["ش", "ض", "ر", "س"], e: "Beim Šīn breitet sich die Luft im Mund aus.", src: "Allg." },
    { q: "Welche Buchstaben haben Inḥirāf (Abweichen)?", a: ["ل ر", "و ي", "ص ز س", "ق ك"], e: "Der Laut weicht von seiner Stelle ab – Lām zum Zungenrand, Rāʾ zum Zungenrücken.", src: "Allg." },
    { q: "Wie viele Eigenschaften (Ṣifāt) gibt es nach der Ǧazariyya?", a: ["17", "7", "10", "28"], e: "10 mit Gegenteil (5 Paare) und 7 ohne Gegenteil.", src: "Allg." }
  ]);

  /* ------------------------------------------------ Tafḫīm und Tarqīq allgemein */
  insertAfter("ra", { id: "tafkhim", general: true, title: "Dick und dünn allgemein", ar: "التَّفْخِيمُ وَالتَّرْقِيقُ",
    intro: "Jeder Buchstabe wird entweder dick (mufaḫḫam) oder dünn (muraqqaq) gesprochen. Dick heißt: der Mundraum füllt sich mit dem Laut; dünn: der Laut bleibt schmal.",
    rules: [
      { h: "Immer dick", ar: "خُصَّ ضَغْطٍ قِظْ",
        text: "Die sieben Isti‘lāʾ-Buchstaben خ ص ض غ ط ق ظ – in jedem Fall, auch mit Kasra. Am dicksten die vier mit Iṭbāq: ص ض ط ظ." },
      { h: "Mal dick, mal dünn", ar: "ا · ل · ر",
        text: "Das Alif folgt dem Buchstaben davor. Das Lām im Namen Allah ist nach Fatḥa/Ḍamma dick, nach Kasra dünn. Das Rāʾ hat eigene Regeln (voriges Kapitel)." },
      { h: "Immer dünn", ar: "",
        text: "Alle übrigen Buchstaben. Besonders aufpassen bei Buchstaben neben dicken, z. B. das Tāʾ in ﴿تَطْهِيرًا﴾ oder das Hamza und Lām in ﴿الْحَمْدُ﴾ nicht verdicken." },
      { h: "Stufen der Dicke", ar: "مَرَاتِبُ التَّفْخِيمِ",
        text: "Am dicksten mit Fatḥa und folgendem Alif (قَالَ), dann mit Fatḥa (قَ), mit Ḍamma (قُ), mit Sukūn (قْ) und am schwächsten mit Kasra (قِ).",
        ex: [["قَالَ · قَدْ · قُلْ · يَقْطَعُونَ · قِيلَ", "von dick nach weniger dick"]] }
    ],
    book: [],
    quiz: [
      { q: "Welche Buchstaben sind immer dick?", a: ["خ ص ض غ ط ق ظ", "ا ل ر", "ق ط ب ج د", "ء ه ع ح"], e: "Die sieben Isti‘lāʾ-Buchstaben „خُصَّ ضَغْطٍ قِظْ“.", src: "Allg." },
      { q: "Ist das Qāf mit Kasra (قِ) dick oder dünn?", a: ["Dick – nur schwächer als mit Fatḥa", "Dünn", "Mal so, mal so", "Es folgt dem Buchstaben davor"], e: "Isti‘lāʾ-Buchstaben sind immer dick; mit Kasra ist es die schwächste Stufe.", src: "Allg." },
      { q: "Welche Buchstaben werden mal dick, mal dünn gesprochen?", a: ["Alif, Lām (im Namen Allah) und Rāʾ", "Qāf, Ṭāʾ und Ḍād", "Bāʾ, Mīm und Wāw", "Alle Kehllaute"], e: "Alif folgt dem Buchstaben davor, Lām im Namen Allah und Rāʾ haben eigene Regeln.", src: "Allg." },
      { q: "Wann ist ein dicker Buchstabe am dicksten?", a: ["Mit Fatḥa und folgendem Alif (قَالَ)", "Mit Kasra", "Mit Sukūn", "Mit Ḍamma"], e: "Stufen: Fatḥa + Alif > Fatḥa > Ḍamma > Sukūn > Kasra.", src: "Allg." },
      { q: "Welche vier Buchstaben sind die dicksten?", a: ["ص ض ط ظ (Iṭbāq)", "خ غ ق ع", "ا و ي ء", "ل ر ن م"], e: "Bei ihnen liegt die Zunge zusätzlich breit am Gaumen an.", src: "Allg." }
    ] });

  /* ------------------------------------------------ Waqf und Ibtidāʾ */
  D.chapters.splice(at("sakt"), 0, { id: "waqf", general: true, title: "Waqf und Ibtidāʾ", ar: "الْوَقْفُ وَالِابْتِدَاءُ",
    intro: "Waqf ist das Anhalten mit Atemholen am Wortende, Ibtidāʾ das Neubeginnen. Beides soll den Sinn nicht verfälschen.",
    rules: [
      { h: "Arten des Anhaltens", ar: "أَقْسَامُ الْوَقْفِ",
        text: "Iḍṭirārī – gezwungen (Atem, Husten): erlaubt, danach neu ansetzen · Intiẓārī – um verschiedene Lesarten zu verbinden · Iḫtibārī – im Unterricht, um ein Wort zu prüfen · Iḫtiyārī – frei gewählt." },
      { h: "Das frei gewählte Anhalten", ar: "تَامٌّ · كَافٍ · حَسَنٌ · قَبِيحٌ",
        text: "Tāmm (vollständig): keine Verbindung in Wort und Sinn mit dem Folgenden – z. B. am Ende einer Geschichte. Kāfī (genügend): nur im Sinn verbunden. Ḥasan (gut): auch im Wortlaut verbunden – anhalten ist in Ordnung, weitergelesen wird dann vom vorigen Wort aus (außer am Versende). Qabīḥ (schlecht): der Sinn wird unvollständig oder falsch, z. B. anhalten bei ﴿فَوَيْلٌ لِلْمُصَلِّينَ﴾ (al-Māʿūn 107:4) ohne den nächsten Vers." },
      { h: "Neu beginnen (Ibtidāʾ)", ar: "الِابْتِدَاءُ",
        text: "Man beginnt dort, wo der Sinn richtig ist. Schlecht ist z. B. ein Beginn mit ﴿إِنَّ اللَّهَ فَقِيرٌ﴾ (Āl ʿImrān 3:181) – das sind die Worte der Leugner, die davor berichtet werden." },
      { h: "Wie man anhält", ar: "السُّكُونُ · الرَّوْمُ · الْإِشْمَامُ",
        text: "Normal mit Sukūn auf dem letzten Buchstaben. Erlaubt sind auch Rawm (den Vokal ganz leise andeuten – nur bei Ḍamma und Kasra) und Išmām (die Lippen nach dem Sukūn rund machen, ohne Laut – nur bei Ḍamma). Tanwīn mit Fatḥa wird zu Alif, Tāʾ marbūṭa zu Hāʾ: رَحْمَةٌ → raḥmah.",
        ex: [["رَحِيمًا", "→ raḥīmā"], ["رَحْمَةٌ", "→ raḥmah"], ["نَسْتَعِينُ", "→ nastaʿīn (Sukūn), Rawm oder Išmām möglich"]] }
    ],
    book: [],
    quiz: [
      { q: "Was ist Waqf?", a: ["Anhalten mit Atemholen am Wortende", "Kurzes Innehalten ohne Atem", "Das Überspringen eines Verses", "Das Dehnen eines Buchstabens"], e: "Beim Waqf holt man Atem – beim Sakt nicht.", src: "Allg." },
      { q: "Was ist Waqf tāmm?", a: ["Anhalten, wo keine Verbindung in Wort und Sinn zum Folgenden besteht", "Anhalten mitten im Satz", "Anhalten wegen Atemnot", "Anhalten, das den Sinn verfälscht"], e: "Tāmm = vollständig, z. B. am Ende einer Geschichte oder eines Themas.", src: "Allg." },
      { q: "Was ist Waqf qabīḥ?", a: ["Ein Anhalten, das den Sinn unvollständig oder falsch macht", "Ein Anhalten am Versende", "Ein Anhalten wegen Husten", "Ein Anhalten bei ج"], e: "Z. B. bei ﴿فَوَيْلٌ لِلْمُصَلِّينَ﴾ anhalten, ohne den nächsten Vers zu lesen.", src: "Allg." },
      { q: "Bei welchen Vokalen ist Rawm erlaubt?", a: ["Bei Ḍamma und Kasra", "Nur bei Fatḥa", "Bei allen", "Nur bei Tanwīn"], e: "Rawm: den Vokal leise andeuten – nicht bei Fatḥa.", src: "Allg." },
      { q: "Was ist Išmām?", a: ["Nach dem Sukūn die Lippen rund machen, ohne Laut – nur bei Ḍamma", "Den Vokal leise sprechen", "Den Buchstaben doppelt sprechen", "Mit Ġunna anhalten"], e: "Išmām ist nur sichtbar, nicht hörbar.", src: "Allg." },
      { q: "Wie spricht man ﴿رَحْمَةٌ﴾ beim Anhalten?", a: ["raḥmah – Tāʾ marbūṭa wird zu Hāʾ", "raḥmat", "raḥmatun", "raḥmā"], e: "Beim Anhalten wird die Tāʾ marbūṭa als Hāʾ mit Sukūn gesprochen.", src: "Allg." },
      { q: "Warum ist ein Beginn mit ﴿إِنَّ اللَّهَ فَقِيرٌ﴾ schlecht?", a: ["Es sind die berichteten Worte der Leugner – allein gelesen verfälscht es den Sinn", "Weil man nie mit إِنَّ beginnt", "Wegen der Ġunna", "Weil dort ein Sakt ist"], e: "Man beginnt früher, bei ﴿لَقَدْ سَمِعَ اللَّهُ قَوْلَ الَّذِينَ قَالُوا …﴾.", src: "Allg." }
    ] });

  /* ------------------------------------------------ Besonderheiten bei Ḥafṣ */
  D.chapters.push({ id: "hafs", general: true, title: "Besonderheiten bei Ḥafṣ", ar: "خَصَائِصُ رِوَايَةِ حَفْصٍ",
    intro: "Einige Wörter liest Ḥafṣ ʿan ʿĀṣim anders, als man es aus den allgemeinen Regeln erwarten würde. Dazu: Alifs, die geschrieben, aber nicht gesprochen werden, und was gilt, wenn zwei Madd-Ursachen zusammenkommen.",
    rules: [
      { h: "Imāla – nur ein Wort", ar: "مَجْرَاهَا",
        text: "﴿بِسْمِ اللَّهِ مَجْرَاهَا وَمُرْسَاهَا﴾ (Hūd 11:41): das Alif wird zum ē hin geneigt – „maǧrēhā“. Die einzige Imāla bei Ḥafṣ." },
      { h: "Išmām in تَأْمَنَّا", ar: "لَا تَأْمَنَّا",
        text: "﴿مَا لَكَ لَا تَأْمَنَّا عَلَىٰ يُوسُفَ﴾ (Yūsuf 12:11): beim Idġām der beiden Nūn die Lippen kurz runden (Išmām); erlaubt ist auch Rawm." },
      { h: "Tashīl in ءَأَعْجَمِيٌّ", ar: "ءَأَعْجَمِيٌّ",
        text: "(Fuṣṣilat 41:44): die zweite Hamza wird erleichtert (zwischen Hamza und Alif gesprochen)." },
      { h: "Madd al-farq", ar: "آلذَّكَرَيْنِ · آلْآنَ · آللَّهُ",
        text: "Frage-Hamza vor dem Artikel: die zweite Hamza wird zu einem Alif mit 6 Ḥarakāt (oder erleichtert) – damit man Frage und Aussage unterscheidet: ﴿آلذَّكَرَيْنِ﴾ (al-Anʿām 6:143–144), ﴿آلْآنَ﴾ (Yūnus 10:51, 91), ﴿آللَّهُ﴾ (Yūnus 10:59, an-Naml 27:59)." },
      { h: "Ḍaʿf – zwei Aussprachen", ar: "ضَعْفٍ · ضَعْفًا",
        text: "In ar-Rūm 30:54 (dreimal) darf man das Ḍād mit Fatḥa oder Ḍamma lesen: ḍaʿf oder ḍuʿf." },
      { h: "Ṣād oder Sīn", ar: "يَبْسُطُ · بَصْطَةً · الْمُصَيْطِرُونَ",
        text: "﴿يَبْسُطُ﴾ (al-Baqara 2:245) und ﴿بَصْطَةً﴾ (al-Aʿrāf 7:69) mit Sīn. ﴿الْمُصَيْطِرُونَ﴾ (aṭ-Ṭūr 52:37): Ṣād oder Sīn. ﴿بِمُصَيْطِرٍ﴾ (al-Ġāšiya 88:22): nur Ṣād. Das kleine س im Muṣḥaf zeigt das an." },
      { h: "Geschriebene, nicht gesprochene Alifs", ar: "أَنَا · لَٰكِنَّا · الظُّنُونَا",
        text: "Das Alif am Ende von ﴿أَنَا﴾, ﴿لَٰكِنَّا﴾ (al-Kahf 18:38), ﴿الظُّنُونَا﴾, ﴿الرَّسُولَا﴾, ﴿السَّبِيلَا﴾ (al-Aḥzāb 33:10, 66, 67) spricht man nur beim Anhalten, beim Weiterlesen nicht. ﴿سَلَاسِلَا﴾ (al-Insān 76:4): beim Anhalten mit oder ohne Alif. ﴿قَوَارِيرَا﴾ (76:15) beim Anhalten mit Alif, (76:16) ohne. In ﴿مِائَةٌ﴾ und ﴿لِشَيْءٍ﴾ (al-Kahf 18:23) wird das Alif nie gesprochen." },
      { h: "Zwei Madd-Ursachen", ar: "أَقْوَى السَّبَبَيْنِ",
        text: "Treffen zwei Madd-Ursachen zusammen, zählt die stärkere: lāzim > muttaṣil > ʿāriḍ li-s-sukūn > munfaṣil > badal. Beispiel ﴿وَلَا آمِّينَ الْبَيْتَ﴾ (al-Māʾida 5:2): badal und lāzim → 6 Ḥarakāt. ﴿السَّمَاءِ﴾ beim Anhalten: muttaṣil und ʿāriḍ → 4, 5 oder 6." }
    ],
    book: [],
    quiz: [
      { q: "Welches Wort hat bei Ḥafṣ die einzige Imāla?", a: ["﴿مَجْرَاهَا﴾ (Hūd 11:41)", "﴿تَأْمَنَّا﴾", "﴿ضَعْفٍ﴾", "﴿آلْآنَ﴾"], e: "„maǧrēhā“ – das Alif wird zum ē geneigt.", src: "Allg." },
      { q: "Was geschieht bei ﴿تَأْمَنَّا﴾ (Yūsuf 12:11)?", a: ["Išmām – die Lippen werden beim Idġām kurz gerundet", "Imāla", "Tashīl", "Sakt"], e: "Das Wort war ursprünglich تَأْمَنُنَا; die Ḍamma wird durch Išmām (oder Rawm) angedeutet.", src: "Allg." },
      { q: "Was ist mit der zweiten Hamza in ﴿ءَأَعْجَمِيٌّ﴾?", a: ["Sie wird erleichtert (Tashīl)", "Sie fällt weg", "Sie wird 6 Ḥarakāt gedehnt", "Sie wird verdoppelt"], e: "Fuṣṣilat 41:44 – die einzige Stelle mit Tashīl bei Ḥafṣ.", src: "Allg." },
      { q: "Warum wird in ﴿آلذَّكَرَيْنِ﴾ 6 Ḥarakāt gedehnt?", a: ["Madd al-farq – um die Frage von der Aussage zu unterscheiden", "Wegen eines Madd muttaṣil", "Wegen der Qalqala", "Wegen Sakt"], e: "Die Frage-Hamza trifft auf die Hamza des Artikels; die zweite wird zu Alif (6) oder erleichtert.", src: "Allg." },
      { q: "Wie liest Ḥafṣ ﴿يَبْسُطُ﴾ (al-Baqara 2:245)?", a: ["Mit Sīn", "Mit Ṣād", "Beides", "Mit Zāy"], e: "Das kleine س über dem Buchstaben zeigt es an.", src: "Allg." },
      { q: "Wann spricht man das Alif am Ende von ﴿أَنَا﴾?", a: ["Nur beim Anhalten", "Immer", "Nie", "Nur vor Hamza"], e: "Beim Weiterlesen fällt es weg: „ana“ – beim Anhalten „anā“.", src: "Allg." },
      { q: "In welchem Wort wird das Alif nie gesprochen?", a: ["﴿مِائَةٌ﴾", "﴿قَالَ﴾", "﴿أَنَا﴾", "﴿سَلَاسِلَا﴾"], e: "مِائَة wird „miʾa“ gelesen; ebenso ﴿لِشَيْءٍ﴾ in al-Kahf.", src: "Allg." },
      { q: "Welche Madd-Ursache ist die stärkste?", a: ["Lāzim", "Muttaṣil", "Munfaṣil", "Badal"], e: "Reihenfolge: lāzim > muttaṣil > ʿāriḍ > munfaṣil > badal.", src: "Allg." },
      { q: "Wie lang wird ﴿آمِّينَ﴾ (al-Māʾida 5:2) gedehnt?", a: ["6 Ḥarakāt – lāzim ist stärker als badal", "2 Ḥarakāt – badal", "4 Ḥarakāt", "Gar nicht"], e: "Badal (Hamza davor) und lāzim (Šadda danach) – es zählt die stärkere Ursache.", src: "Allg." },
      { q: "Wie darf man ﴿ضَعْفٍ﴾ in ar-Rūm 30:54 lesen?", a: ["Mit Fatḥa oder Ḍamma auf dem Ḍād", "Nur mit Fatḥa", "Nur mit Ḍamma", "Mit Kasra"], e: "Bei Ḥafṣ sind beide Aussprachen überliefert: ḍaʿf und ḍuʿf.", src: "Allg." }
    ] });

  /* ------------------------------------------------ Die 17 Austrittsstellen – für die Maḫraǧ-Aufgaben */
  D.makharij = [
    ["Ǧawf – der leere Mund- und Rachenraum", "ا و ي", "die drei Dehnungsbuchstaben"],
    ["tiefste Stelle der Kehle", "ء ه"],
    ["Mitte der Kehle", "ع ح"],
    ["oberste Stelle der Kehle (zum Mund hin)", "غ خ"],
    ["hinterster Zungenrücken am weichen Gaumen", "ق"],
    ["Zungenrücken, etwas vor der Stelle des Qāf", "ك"],
    ["Zungenmitte an der Mitte des Gaumens", "ج ش ي"],
    ["Zungenrand an den oberen Backenzähnen", "ض"],
    ["vorderer Zungenrand am Zahnfleisch der oberen Vorderzähne", "ل"],
    ["Zungenspitze am Zahnfleisch, etwas unter der Stelle des Lām", "ن"],
    ["Zungenspitze mit etwas Zungenrücken, nahe der Stelle des Nūn", "ر"],
    ["Zungenspitze an den Wurzeln der oberen Schneidezähne", "ط د ت"],
    ["Zungenspitze an den Schneidezähnen, mit Pfeifen", "ص ز س"],
    ["Zungenspitze an den Spitzen der oberen Schneidezähne", "ظ ذ ث"],
    ["Innenseite der Unterlippe an den oberen Schneidezähnen", "ف"],
    ["beide Lippen", "و ب م"],
    ["Nasenraum (Ḫayšūm)", "", "die Ġunna"]
  ];
})();
