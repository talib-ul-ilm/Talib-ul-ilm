/* Taǧwīd – Inhalte.
   Quellen:
   – „Hidāyat ar-Raḥmān fī Taǧwīd al-Qurʾān“ (هداية الرحمن في تجويد القرآن), Frage-Antwort-Heft mit 77 Fragen
     (Lesart Ḥafṣ ʿan ʿĀṣim). Die Nummern bei den Fragen („B 29“) verweisen auf die Frage im Heft.
   – Taǧwīd-Tafel „Kur’an-ı Kerîm’de geçen harflerin isimleri ve ses çıkış yerleri“, Âlem Yayıncılık, İstanbul
     (Maḫāriǧ der Buchstaben, Regeln mit Beispielen, Pausenzeichen).
   Aufbau je Kapitel:
     { id, title, ar, intro, rules: [{ h, ar, text, ex: [[arabisch, Umschrift/Hinweis], …] }],
       table?: { head: [...], rows: [[...], …] }, book: [[Nr, Frage (ar), Antwort (de)], …],
       quiz: [{ q, ar?, a: [richtig, falsch, falsch, falsch], e, src? }] } */
window.TAJWID = {
  src: {
    book: "Hidāyat ar-Raḥmān fī Taǧwīd al-Qurʾān",
    chart: "Taǧwīd-Tafel, Âlem Yayıncılık (İstanbul)"
  },
  chapters: [

/* ---------------------------------------------------------------- 1 */
{ id: "einf", title: "Was ist Taǧwīd?", ar: "تَعْرِيفُ عِلْمِ التَّجْوِيدِ",
  intro: "Taǧwīd heißt wörtlich „etwas gut machen“. Als Wissenschaft lehrt er, jeden Buchstaben des Qurʾān richtig auszusprechen: von seiner Austrittsstelle (Maḫraǧ) und mit seinen Eigenschaften (Ṣifāt).",
  rules: [
    { h: "Definition", ar: "إِعْطَاءُ كُلِّ حَرْفٍ حَقَّهُ مَخْرَجًا وَصِفَةً",
      text: "Eine Wissenschaft, mit der man erkennt, wie man jedem Buchstaben sein Recht gibt – was seine Austrittsstelle und seine Eigenschaften betrifft." },
    { h: "Urteil (Ḥukm)", ar: "﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾",
      text: "Das Heft nennt das Lesen mit Taǧwīd eine Pflicht (wuǧūb) und belegt es mit dem Vers „Und trage den Qurʾān langsam und deutlich vor“ (al-Muzzammil 73:4)." },
    { h: "Gegenstand, Ziel und Frucht", ar: "الْكَلِمَاتُ الْقُرْآنِيَّةُ",
      text: "Gegenstand (mawḍūʿ) sind die Wörter des Qurʾān. Ziel (ġāya) ist, die Zunge vor Fehlern im Buch Allahs zu bewahren. Die Frucht (ṯamara) ist, das Wohlgefallen Allahs zu erlangen." }
  ],
  book: [
    [1, "مَا هُوَ عِلْمُ التَّجْوِيدِ؟", "Eine Wissenschaft, mit der man erkennt, wie man jedem Buchstaben sein Recht gibt – nach Austrittsstelle und Eigenschaft."],
    [2, "مَا حُكْمُ عِلْمِ التَّجْوِيدِ، وَمَا مَوْضُوعُهُ، وَمَا غَايَتُهُ؟", "Urteil: Pflicht, wegen ﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾. Gegenstand: die Wörter des Qurʾān. Ziel: die Zunge vor Fehlern im Buch Allahs bewahren."],
    [3, "مَا ثَمَرَتُهُ؟", "Das Wohlgefallen Allahs, des Erhabenen, zu erlangen."]
  ],
  quiz: [
    { q: "Was bedeutet Taǧwīd als Wissenschaft?", a: ["Jedem Buchstaben sein Recht geben – nach Austrittsstelle und Eigenschaft", "Den Qurʾān möglichst schnell lesen", "Die Bedeutung der Verse erklären", "Den Qurʾān auswendig lernen"], e: "Taǧwīd: إِعْطَاءُ كُلِّ حَرْفٍ حَقَّهُ مَخْرَجًا وَصِفَةً – jeder Buchstabe mit richtiger Austrittsstelle (Maḫraǧ) und richtigen Eigenschaften (Ṣifāt).", src: "B 1" },
    { q: "Was ist der Gegenstand (mawḍūʿ) des Taǧwīd?", a: ["Die Wörter des Qurʾān", "Die arabische Grammatik", "Die Hadithe", "Die Rechtsurteile"], e: "Der Gegenstand sind die Wörter des Qurʾān (الْكَلِمَاتُ الْقُرْآنِيَّةُ).", src: "B 2" },
    { q: "Welcher Vers wird als Beleg für das Lesen mit Taǧwīd genannt?", a: ["﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾", "﴿اقْرَأْ بِاسْمِ رَبِّكَ﴾", "﴿إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ﴾", "﴿فَاقْرَءُوا مَا تَيَسَّرَ مِنْهُ﴾"], e: "„Und trage den Qurʾān langsam und deutlich vor“ (al-Muzzammil 73:4).", src: "B 2" },
    { q: "Was ist das Ziel (ġāya) des Taǧwīd?", a: ["Die Zunge vor Fehlern im Buch Allahs bewahren", "Schöner zu singen als andere", "Arabisch sprechen lernen", "Die Lesarten zu vergleichen"], e: "Ziel: صَوْنُ اللِّسَانِ عَنِ الْخَطَإِ فِي كِتَابِ اللَّهِ.", src: "B 2" },
    { q: "Was ist die Frucht (ṯamara) des Taǧwīd?", a: ["Das Wohlgefallen Allahs zu erlangen", "Eine Iǧāza zu bekommen", "Viele Verse auswendig zu können", "Schneller zu lesen"], e: "Die Frucht ist الْفَوْزُ بِرِضَاءِ اللَّهِ تَعَالَى.", src: "B 3" }
  ] },

/* ---------------------------------------------------------------- 2 */
{ id: "madd", title: "Madd – die Dehnung", ar: "الْمُدُودُ وَأَنْوَاعُهَا",
  intro: "Madd ist das Dehnen des Lautes mit einem Dehnungsbuchstaben. Gemessen wird in Ḥarakāt: eine Ḥaraka dauert etwa so lange, wie man einen Finger in normalem Tempo beugt oder streckt. (Auf türkischen Tafeln wird in „Elif“ gezählt: 1 Elif = 2 Ḥarakāt.)",
  rules: [
    { h: "Die drei Dehnungsbuchstaben", ar: "نُوحِيهَا",
      text: "Wāw sākina mit Ḍamma davor, Yāʾ sākina mit Kasra davor und Alif sākina mit Fatḥa davor. Alle drei stecken in ﴿نُوحِيهَا﴾.",
      ex: [["قَالَ، زَارَ، كَانَ", "Alif nach Fatḥa"], ["قِيلَ، نِيلَ، زِيدَ", "Yāʾ nach Kasra"], ["يَقُولُ، يَصُومُ، يَزُورُ", "Wāw nach Ḍamma"]] },
    { h: "Madd ṭabīʿī – natürliche Dehnung (2)", ar: "الْمَدُّ الطَّبِيعِيُّ",
      text: "Ohne ihn besteht der Buchstabe gar nicht; er hängt von keiner Ursache (Hamza oder Sukūn) ab. Dauer: 2 Ḥarakāt.",
      ex: [["نُوحِيهَا", "nū-ḥī-hā"], ["تَوَّابًا، طه، أَبَدًا", ""]] },
    { h: "Madd al-badal (2)", ar: "مَدُّ الْبَدَلِ",
      text: "Eine Hamza steht vor dem Dehnungsbuchstaben im selben Wort. Die Dehnung „ersetzt“ eine ursprüngliche zweite Hamza. Dauer bei Ḥafṣ: 2.",
      ex: [["ءَامَنُوا", "āmanū"], ["أُوتُوا", "ūtū"], ["إِيمَانًا", "īmānan"]] },
    { h: "Madd al-ʿiwaḍ (2)", ar: "مَدُّ الْعِوَضِ",
      text: "Beim Anhalten auf Tanwīn mit Fatḥa spricht man ein Alif statt des Tanwīn. Dauer: 2.",
      ex: [["غَفُورًا رَحِيمًا", "beim Anhalten: … raḥīmā"]] },
    { h: "Madd aṣ-ṣila – Hāʾ des Pronomens", ar: "مَدُّ الصِّلَةِ",
      text: "Das Hāʾ des Pronomens (هُ / هِ) wird gedehnt, wenn davor und danach ein Buchstabe mit Vokal steht. Folgt kein Hamza: ṣila ṣuġrā (2 wie ṭabīʿī). Folgt ein Hamza: ṣila kubrā (4–5 wie munfaṣil). Steht davor oder danach ein Sākin, wird nicht gedehnt.",
      ex: [["إِنَّهُ هُوَ", "ṣuġrā: innahū huwa"], ["مَالَهُ أَخْلَدَهُ", "kubrā: mālahūūū aḫladah"], ["فِيهِ، إِلَيْهِ، عَلَيْهِ", "Sākin davor → keine Dehnung"], ["عَلَّمَهُ اللَّهُ", "Sākin danach → keine Dehnung"]] },
    { h: "Ausnahmen beim Hāʾ", ar: "فِيهِ مُهَانًا · يَرْضَهُ لَكُمْ",
      text: "﴿فِيهِ مُهَانًا﴾ (al-Furqān 25:69) wird gedehnt, obwohl ein Sākin davor steht. ﴿يَرْضَهُ لَكُمْ﴾ (az-Zumar 39:7) wird kurz gelesen. In ﴿لَمْ يَتَسَنَّهْ﴾ und ﴿مَا نَفْقَهُ﴾ ist das Hāʾ kein Pronomen, sondern Teil des Wortes – darum keine Dehnung." },
    { h: "Madd muttaṣil – verbunden (4–5, Pflicht)", ar: "الْمَدُّ الْمُتَّصِلُ",
      text: "Dehnungsbuchstabe und Hamza im selben Wort. 4 oder 5 Ḥarakāt – pflichtmäßig (wuǧūban).",
      ex: [["أُولَٰئِكَ", ""], ["جَاءَ، جِيءَ، سُوءَ", ""]] },
    { h: "Madd munfaṣil – getrennt (4–5, erlaubt)", ar: "الْمَدُّ الْمُنْفَصِلُ",
      text: "Der Dehnungsbuchstabe steht am Ende eines Wortes, die Hamza am Anfang des nächsten. 4 oder 5 Ḥarakāt – erlaubt (ǧawāzan).",
      ex: [["بِمَا أُنْزِلَ", ""], ["يَا أَيُّهَا، إِنِّي أَخَافُ، تُوبُوا إِلَى اللَّهِ", ""]] },
    { h: "Madd ʿāriḍ li-s-sukūn (2 / 4 / 6)", ar: "الْمَدُّ الْعَارِضُ لِلسُّكُونِ",
      text: "Nach dem Dehnungsbuchstaben kommt ein Buchstabe mit Vokal, auf dem man anhält – er bekommt dadurch ein vorübergehendes Sukūn. Drei Möglichkeiten: 6 (ṭūl), 4 (tawassuṭ) oder 2 (qaṣr).",
      ex: [["نَسْتَعِينُ", "beim Anhalten: nastaʿīīn"], ["يَعْلَمُونَ", "beim Anhalten: yaʿlamūūn"]] },
    { h: "Madd al-līn (2 / 4 / 6)", ar: "مَدُّ اللِّينِ",
      text: "Wāw oder Yāʾ sākina nach Fatḥa, danach ein Buchstabe, auf dem man anhält. Nur beim Anhalten gedehnt, beim Weiterlesen nie. Drei Möglichkeiten wie beim ʿāriḍ.",
      ex: [["خَوْفٍ", "ḫawf"], ["بَيْتِ", "bayt"], ["قُرَيْشٍ", "qurayš"]] }
  ],
  table: { head: ["Madd", "Ursache", "Ḥarakāt"], rows: [
    ["ṭabīʿī", "keine", "2"], ["badal", "Hamza davor", "2"], ["ʿiwaḍ", "Anhalten auf Tanwīn-Fatḥa", "2"],
    ["ṣila ṣuġrā / kubrā", "Hāʾ des Pronomens", "2 / 4–5"], ["muttaṣil", "Hamza im selben Wort", "4–5 (Pflicht)"],
    ["munfaṣil", "Hamza im nächsten Wort", "4–5 (erlaubt)"], ["lāzim", "ursprüngliches Sukūn", "6 (immer)"],
    ["ʿāriḍ li-s-sukūn", "Sukūn beim Anhalten", "2 / 4 / 6"], ["līn", "Sukūn beim Anhalten nach aw / ay", "2 / 4 / 6"]] },
  book: [
    [4, "مَا هُوَ الْمَدُّ؟", "Das Dehnen des Lautes mit einem der Dehnungsbuchstaben."],
    [5, "مَا هِيَ حُرُوفُ الْمَدِّ؟", "Drei: Wāw sākina mit Ḍamma davor, Yāʾ sākina mit Kasra davor, Alif sākina mit Fatḥa davor – gesammelt in ﴿نُوحِيهَا﴾."],
    [6, "كَمْ عَدَدُ الْمُدُودِ، وَمَا هِيَ؟", "Neun: ṭabīʿī, badal, ʿiwaḍ, ṣila, muttaṣil, munfaṣil, lāzim, ʿāriḍ li-s-sukūn und līn."],
    [7, "مَا هُوَ الْمَدُّ الطَّبِيعِيُّ، وَكَمْ حَرَكَةً يُمَدُّ؟", "Ohne ihn besteht der Buchstabe nicht, und er hängt von keiner Ursache ab. Beispiel ﴿نُوحِيهَا﴾. 2 Ḥarakāt."],
    [8, "مَا هُوَ مِقْدَارُ الْحَرَكَةِ؟", "So lange, wie man einen Finger in mittlerem Tempo beugt oder streckt."],
    [9, "مَا هُوَ مَدُّ الْبَدَلِ؟", "Hamza und danach ein Dehnungsbuchstabe im selben Wort, z. B. ﴿ءَامَنُوا﴾, ﴿أُوتُوا﴾, ﴿إِيمَانًا﴾. Heißt „Ersatz“, weil die zweite Hamza durch die Dehnung ersetzt wurde. 2 Ḥarakāt."],
    [10, "مَا هُوَ مَدُّ الْعِوَضِ؟", "Beim Anhalten ein Alif als Ersatz für Tanwīn mit Fatḥa, z. B. ﴿غَفُورًا رَحِيمًا﴾. 2 Ḥarakāt."],
    [11, "مَا هُوَ مَدُّ الصِّلَةِ؟", "Dehnung des Hāʾ des Pronomens, wenn davor und danach ein Buchstabe mit Vokal steht: ṣila ṣuġrā (2), vor Hamza ṣila kubrā (wie munfaṣil). Mit Sākin davor oder danach keine Dehnung. Ausnahmen: ﴿فِيهِ مُهَانًا﴾ gedehnt, ﴿يَرْضَهُ لَكُمْ﴾ kurz."],
    [12, "مَا هُوَ الْمَدُّ الْمُتَّصِلُ؟", "Dehnungsbuchstabe und danach Hamza im selben Wort, z. B. ﴿أُولَٰئِكَ﴾. 4 oder 5 Ḥarakāt, pflichtmäßig."],
    [13, "مَا هُوَ الْمَدُّ الْمُنْفَصِلُ؟", "Dehnungsbuchstabe am Ende eines Wortes, Hamza am Anfang des nächsten, z. B. ﴿بِمَا أُنْزِلَ﴾. 4 oder 5 Ḥarakāt, erlaubt."],
    [19, "مَا هُوَ الْمَدُّ الْعَارِضُ لِلسُّكُونِ؟", "Nach dem Dehnungsbuchstaben ein Buchstabe mit Vokal, auf dem man mit Sukūn anhält, z. B. ﴿نَسْتَعِينُ﴾. Drei Möglichkeiten: 6, 4 oder 2."],
    [20, "مَا هُوَ مَدُّ اللِّينِ؟", "Dehnung mit Wāw oder Yāʾ sākina nach Fatḥa, wenn danach beim Anhalten ein Sukūn entsteht, z. B. ﴿خَوْفٍ﴾, ﴿بَيْتِ﴾. Beim Weiterlesen nie. Drei Möglichkeiten wie beim ʿāriḍ."],
    [21, "إِلَى كَمْ يَنْقَسِمُ الْمَدُّ؟", "In zwei: den ursprünglichen (aṣlī) und den abgeleiteten (farʿī)."],
    [22, "مَا هُوَ الْمَدُّ الْأَصْلِيُّ؟", "Der Madd ṭabīʿī; dazu gehören auch ʿiwaḍ und ṣila ṣuġrā."],
    [23, "مَا الْمَدُّ الْفَرْعِيُّ؟", "Der von einer Ursache abhängt: Hamza oder Sukūn."],
    [24, "كَمْ نَوْعًا الْمَدُّ الَّذِي يَتَوَقَّفُ عَلَى سَبَبِ الْهَمْزِ؟", "Drei: muttaṣil, munfaṣil (dazu ṣila kubrā) und badal."],
    [25, "كَمْ نَوْعًا الْمَدُّ الَّذِي يَتَوَقَّفُ عَلَى سَبَبِ السُّكُونِ؟", "Drei: lāzim, ʿāriḍ li-s-sukūn und līn."]
  ],
  quiz: [
    { q: "Welches Wort enthält alle drei Dehnungsbuchstaben?", a: ["﴿نُوحِيهَا﴾", "﴿نَسْتَعِينُ﴾", "﴿يَرْمَلُونَ﴾", "﴿قُطْبُ جَدٍّ﴾"], e: "﴿نُوحِيهَا﴾: Wāw nach Ḍamma (nū), Yāʾ nach Kasra (ḥī), Alif nach Fatḥa (hā).", src: "B 5" },
    { q: "Wann ist ein Wāw ein Dehnungsbuchstabe?", a: ["Wenn es Sukūn hat und davor eine Ḍamma steht", "Wenn es Sukūn hat und davor eine Fatḥa steht", "Wenn es eine Šadda hat", "Immer am Wortende"], e: "Wāw sākina nach Ḍamma = Madd-Buchstabe (يَقُولُ). Nach Fatḥa ist es ein Līn-Buchstabe (خَوْفٍ).", src: "B 5" },
    { q: "Wie viele Madd-Arten zählt das Heft?", a: ["Neun", "Drei", "Sechs", "Vierzehn"], e: "Neun: ṭabīʿī, badal, ʿiwaḍ, ṣila, muttaṣil, munfaṣil, lāzim, ʿāriḍ li-s-sukūn, līn.", src: "B 6" },
    { q: "Wie lang ist der Madd ṭabīʿī?", a: ["2 Ḥarakāt", "4 Ḥarakāt", "6 Ḥarakāt", "1 Ḥaraka"], e: "Die natürliche Dehnung hat keine Ursache und dauert 2 Ḥarakāt.", src: "B 7" },
    { q: "Welche Madd-Art liegt vor?", ar: "ءَامَنُوا", a: ["Madd al-badal", "Madd muttaṣil", "Madd lāzim", "Madd al-ʿiwaḍ"], e: "Hamza vor dem Dehnungsbuchstaben im selben Wort → badal (2 Ḥarakāt).", src: "B 9" },
    { q: "Welche Madd-Art liegt vor?", ar: "جَاءَ", a: ["Madd muttaṣil – 4 oder 5 Ḥarakāt", "Madd munfaṣil – 4 oder 5 Ḥarakāt", "Madd al-badal – 2 Ḥarakāt", "Madd ṭabīʿī – 2 Ḥarakāt"], e: "Alif und danach Hamza im selben Wort → muttaṣil, pflichtmäßig 4 oder 5.", src: "B 12" },
    { q: "Welche Madd-Art liegt vor?", ar: "بِمَا أُنْزِلَ", a: ["Madd munfaṣil", "Madd muttaṣil", "Madd al-badal", "Madd al-ʿiwaḍ"], e: "Das Alif von بِمَا am Wortende, die Hamza am Anfang von أُنْزِلَ → getrennt (munfaṣil), 4 oder 5 erlaubt.", src: "B 13" },
    { q: "Was ist der Unterschied zwischen muttaṣil und munfaṣil?", a: ["Muttaṣil: Hamza im selben Wort (Pflicht); munfaṣil: Hamza im nächsten Wort (erlaubt)", "Muttaṣil wird 2, munfaṣil 6 Ḥarakāt gedehnt", "Muttaṣil nur beim Anhalten, munfaṣil immer", "Es gibt keinen Unterschied"], e: "Beide werden 4–5 Ḥarakāt gedehnt; muttaṣil ist wuǧūban (Pflicht), munfaṣil ǧawāzan (erlaubt).", src: "B 12–13" },
    { q: "Wie spricht man ﴿رَحِيمًا﴾ beim Anhalten?", a: ["raḥīmā – Alif statt Tanwīn (Madd al-ʿiwaḍ)", "raḥīman – mit Tanwīn", "raḥīm – ganz ohne Endung", "raḥīmun"], e: "Beim Anhalten auf Tanwīn mit Fatḥa entsteht ein Alif: Madd al-ʿiwaḍ, 2 Ḥarakāt.", src: "B 10" },
    { q: "Wie viele Möglichkeiten gibt es beim Madd ʿāriḍ li-s-sukūn?", ar: "نَسْتَعِينُ", a: ["Drei: 2, 4 oder 6 Ḥarakāt", "Nur 2 Ḥarakāt", "Nur 6 Ḥarakāt", "4 oder 5 Ḥarakāt"], e: "Qaṣr (2), tawassuṭ (4) oder ṭūl (6).", src: "B 19" },
    { q: "Wann wird Madd al-līn gedehnt?", ar: "خَوْفٍ", a: ["Nur beim Anhalten", "Nur beim Weiterlesen", "Immer 6 Ḥarakāt", "Nie"], e: "Līn (aw / ay) wird nur beim Anhalten gedehnt – beim Weiterlesen nie.", src: "B 20" },
    { q: "Welche Dehnung hat das Hāʾ in ﴿إِنَّهُ هُوَ﴾?", a: ["Ṣila ṣuġrā – 2 Ḥarakāt", "Ṣila kubrā – 4–5 Ḥarakāt", "Keine Dehnung", "Madd lāzim – 6 Ḥarakāt"], e: "Vokal davor und danach, danach keine Hamza → kleine Ṣila, wie ṭabīʿī.", src: "B 11" },
    { q: "Warum wird das Hāʾ in ﴿فِيهِ﴾ normalerweise nicht gedehnt?", a: ["Weil davor ein Sākin (das Yāʾ) steht", "Weil danach eine Hamza steht", "Weil es kein Pronomen ist", "Weil es am Wortanfang steht"], e: "Steht vor dem Hāʾ ein Sākin, gibt es keine Ṣila – außer in ﴿فِيهِ مُهَانًا﴾ (al-Furqān).", src: "B 11" },
    { q: "Welche Stelle ist eine Ausnahme, in der das Hāʾ trotz Sākin davor gedehnt wird?", a: ["﴿فِيهِ مُهَانًا﴾", "﴿عَلَيْهِ﴾", "﴿إِلَيْهِ﴾", "﴿يَرْضَهُ لَكُمْ﴾"], e: "﴿فِيهِ مُهَانًا﴾ (al-Furqān 25:69) wird gedehnt. ﴿يَرْضَهُ لَكُمْ﴾ ist die umgekehrte Ausnahme: dort wird kurz gelesen.", src: "B 11" },
    { q: "Welche drei Madd-Arten hängen von der Ursache „Hamza“ ab?", a: ["Muttaṣil, munfaṣil und badal", "Lāzim, ʿāriḍ und līn", "Ṭabīʿī, ʿiwaḍ und ṣila ṣuġrā", "Muttaṣil, lāzim und līn"], e: "Hamza: muttaṣil, munfaṣil (mit ṣila kubrā), badal. Sukūn: lāzim, ʿāriḍ, līn.", src: "B 24–25" }
  ] },

/* ---------------------------------------------------------------- 3 */
{ id: "lazim", title: "Madd lāzim", ar: "أَحْكَامُ الْمَدِّ اللَّازِمِ",
  intro: "Beim Madd lāzim folgt auf den Dehnungsbuchstaben ein ursprüngliches Sukūn – eines, das beim Anhalten wie beim Weiterlesen bleibt. Er wird immer 6 Ḥarakāt gedehnt.",
  rules: [
    { h: "Kalimī muṯaqqal – im Wort, mit Šadda", ar: "كَلِمِيٌّ مُثَقَّلٌ",
      text: "Im Wort, und nach dem Dehnungsbuchstaben steht ein Buchstabe mit Šadda.",
      ex: [["الْحَاقَّةُ", "al-ḥāāāqqa"], ["وَلَا الضَّالِّينَ", ""], ["تَأْمُرُونِّي", ""]] },
    { h: "Kalimī muḫaffaf – im Wort, ohne Šadda", ar: "كَلِمِيٌّ مُخَفَّفٌ",
      text: "Im Wort, nach dem Dehnungsbuchstaben ein ursprüngliches Sukūn ohne Šadda. Nur zweimal im Qurʾān, beide in Sūrat Yūnus (10:51 und 10:91).",
      ex: [["آلْآنَ", "āāāl-āna"]] },
    { h: "Ḥarfī muṯaqqal – im Buchstabennamen, mit Idġām", ar: "حَرْفِيٌّ مُثَقَّلٌ",
      text: "Bei den Einzelbuchstaben am Sūra-Anfang: Der Buchstabenname besteht aus drei Buchstaben, der mittlere ist ein Dehnungsbuchstabe, und der letzte wird in den folgenden assimiliert.",
      ex: [["الٓمٓ", "alif lāāām-mīīīm – das Lām mit Idġām ins Mīm"]] },
    { h: "Ḥarfī muḫaffaf – im Buchstabennamen, ohne Idġām", ar: "حَرْفِيٌّ مُخَفَّفٌ",
      text: "Wie oben, aber ohne Idġām.",
      ex: [["الٓمٓ", "das Mīm: mīīīm"], ["الٓر", "alif lāāām rā"], ["حمٓ", "ḥā mīīīm"]] },
    { h: "Welche Buchstaben am Sūra-Anfang?", ar: "نَقَصَ عَسَلُكُمْ · حَيٌّ طَهُرَ",
      text: "6 Ḥarakāt: die Buchstaben von „نَقَصَ عَسَلُكُمْ“ (ن ق ص ع س ل ك م). Beim ʿAyn in كٓهيعٓصٓ und عٓسٓقٓ ist 4 oder 6 erlaubt (Līn). Nur 2 Ḥarakāt (ṭabīʿī): die Buchstaben von „حَيٌّ طَهُرَ“ (ح ي ط ه ر) – z. B. طه = ṭā-hā. Das Alif wird nicht gedehnt." }
  ],
  book: [
    [14, "مَا هُوَ الْمَدُّ اللَّازِمُ؟", "Nach dem Dehnungsbuchstaben ein ursprüngliches Sukūn, z. B. ﴿وَالصَّافَّاتِ﴾. 6 Ḥarakāt, immer (luzūman)."],
    [15, "إِلَى كَمْ يَنْقَسِمُ الْمَدُّ اللَّازِمُ؟", "In kalimī (im Wort) und ḥarfī (im Buchstaben); jedes davon muṯaqqal (mit Šadda) oder muḫaffaf (ohne)."],
    [16, "مَا مِثَالُ الْكَلِمِيِّ الْمُثَقَّلِ؟", "﴿الْحَاقَّةُ﴾ – nach dem Dehnungsbuchstaben ein Buchstabe mit Šadda."],
    [17, "مَا مِثَالُ الْكَلِمِيِّ الْمُخَفَّفِ؟", "﴿آلْآنَ﴾ – nur zweimal, in Sūrat Yūnus. Nach dem Dehnungsbuchstaben ein ursprüngliches Sukūn ohne Šadda."],
    [18, "مَا مِثَالُ الْحَرْفِيِّ الْمُثَقَّلِ وَالْمُخَفَّفِ؟", "﴿الٓمٓ﴾: das Lām ist muṯaqqal (Idġām ins Mīm), das Mīm muḫaffaf. Regel: drei Buchstaben, der mittlere ein Dehnungsbuchstabe – nur in den Sūra-Anfängen („نَقَصَ عَسَلُكُمْ“). ʿAyn in كٓهيعٓصٓ / عٓسٓقٓ: 4 oder 6. „حَيٌّ طَهُرَ“ nur ṭabīʿī."]
  ],
  quiz: [
    { q: "Wie lang ist der Madd lāzim?", a: ["Immer 6 Ḥarakāt", "2, 4 oder 6 Ḥarakāt", "4 oder 5 Ḥarakāt", "2 Ḥarakāt"], e: "Lāzim = „notwendig“: immer 6 Ḥarakāt.", src: "B 14" },
    { q: "Welche Art Madd lāzim liegt vor?", ar: "الْحَاقَّةُ", a: ["Kalimī muṯaqqal", "Kalimī muḫaffaf", "Ḥarfī muṯaqqal", "Ḥarfī muḫaffaf"], e: "Im Wort, und nach dem Alif steht ein Qāf mit Šadda → kalimī muṯaqqal.", src: "B 16" },
    { q: "Welches Wort ist das Beispiel für kalimī muḫaffaf?", a: ["﴿آلْآنَ﴾", "﴿الضَّالِّينَ﴾", "﴿دَابَّةٍ﴾", "﴿الطَّامَّةُ﴾"], e: "﴿آلْآنَ﴾ – nur zweimal im Qurʾān, in Sūrat Yūnus.", src: "B 17" },
    { q: "In ﴿الٓمٓ﴾: welcher Madd liegt auf dem Lām?", a: ["Ḥarfī muṯaqqal – wegen des Idġām ins Mīm", "Ḥarfī muḫaffaf", "Madd ṭabīʿī", "Kein Madd"], e: "„lām“ + „mīm“: das Mīm von lām geht ins folgende Mīm über (Idġām) → muṯaqqal.", src: "B 18" },
    { q: "Welche Buchstaben am Sūra-Anfang werden 6 Ḥarakāt gedehnt?", a: ["Die von „نَقَصَ عَسَلُكُمْ“", "Die von „حَيٌّ طَهُرَ“", "Die von „قُطْبُ جَدٍّ“", "Die von „يَرْمَلُونَ“"], e: "ن ق ص ع س ل ك م → 6 Ḥarakāt (beim ʿAyn 4 oder 6).", src: "B 18" },
    { q: "Wie lange wird ﴿طه﴾ gedehnt?", a: ["Ṭā und Hā je 2 Ḥarakāt (ṭabīʿī)", "Je 6 Ḥarakāt", "Je 4 Ḥarakāt", "Gar nicht"], e: "Ṭ und H gehören zu „حَيٌّ طَهُرَ“: ihre Namen haben nur zwei Buchstaben → natürliche Dehnung.", src: "B 18" },
    { q: "Wie darf das ʿAyn in ﴿كٓهيعٓصٓ﴾ gedehnt werden?", a: ["4 oder 6 Ḥarakāt", "Nur 2 Ḥarakāt", "Nur 6 Ḥarakāt", "Gar nicht"], e: "Im Namen ʿayn ist das Yāʾ ein Līn-Buchstabe, darum 4 (tawassuṭ) oder 6 (ṭūl).", src: "B 18" }
  ] },

/* ---------------------------------------------------------------- 4 */
{ id: "nun", title: "Nūn sākina und Tanwīn", ar: "أَحْكَامُ النُّونِ السَّاكِنَةِ وَالتَّنْوِينِ",
  intro: "Nūn sākina ist ein Nūn ohne Vokal. Tanwīn ist ein Nūn sākina am Ende eines Nomens, das man spricht, aber nicht schreibt und beim Anhalten weglässt. Für beide gelten vier Regeln – je nachdem, welcher Buchstabe folgt.",
  rules: [
    { h: "1. Iẓhār ḥalqī – deutlich", ar: "الْإِظْهَارُ الْحَلْقِيُّ",
      text: "Vor den sechs Kehllauten ء ه ع ح غ خ wird das Nūn klar aus seiner Austrittsstelle gesprochen, ohne Ġunna.",
      ex: [["مَنْ ءَامَنَ", "man āmana"], ["حَقِيقٌ عَلَىٰ", ""], ["أَنْعَمْتَ", ""], ["مِنْ خَوْفٍ، عَذَابٌ أَلِيمٌ", ""]] },
    { h: "2. Idġām mit Ġunna – ي ن م و", ar: "الْإِدْغَامُ بِغُنَّةٍ · يُومِنُ",
      text: "Das Nūn geht in den folgenden Buchstaben über, mit Nasalklang (Ġunna). Die Buchstaben: „يُومِنُ“. Nur über zwei Wörter hinweg.",
      ex: [["صِرَاطًا مُسْتَقِيمًا", ""], ["مَنْ يَعْمَلْ", "may-yaʿmal"], ["فَضْلًا مِنَ اللَّهِ", ""], ["خَيْرًا يَرَهُ", ""]] },
    { h: "Ausnahme: Iẓhār muṭlaq", ar: "الْإِظْهَارُ الْمُطْلَقُ",
      text: "Stehen Nūn und ي / و im selben Wort, gibt es keinen Idġām: das Nūn bleibt deutlich.",
      ex: [["الدُّنْيَا", ""], ["صِنْوَانٌ، قِنْوَانٌ، بُنْيَانٌ", ""]] },
    { h: "3. Idġām ohne Ġunna – ل ر", ar: "الْإِدْغَامُ بِلَا غُنَّةٍ",
      text: "Vor Lām und Rāʾ geht das Nūn ganz ohne Ġunna in den Buchstaben über – wie eine Šadda.",
      ex: [["مِنْ رَبِّهِمْ", "mir-rabbihim"], ["هُدًى لِلْمُتَّقِينَ", ""], ["غَفُورٌ رَحِيمٌ", ""]] },
    { h: "4. Iqlāb – vor ب", ar: "الْإِقْلَابُ",
      text: "Vor Bāʾ wird das Nūn zu einem verborgenen Mīm mit Ġunna.",
      ex: [["مِنْ بَعْدِ", "mim-baʿdi"], ["سَمِيعٌ بَصِيرٌ", ""], ["لَيُنْبَذَنَّ", ""]] },
    { h: "5. Iḫfāʾ – vor den übrigen 15", ar: "الْإِخْفَاءُ",
      text: "Ein Zustand zwischen Iẓhār und Idġām, ohne Šadda, mit Ġunna. Die 15 Buchstaben sind die Anfänge der Wörter in: صِفْ ذَا ثَنَا كَمْ جَادَ شَخْصٌ قَدْ سَمَا · دُمْ طَيِّبًا زِدْ فِي تُقًى ضَعْ ظَالِمَا",
      ex: [["يُنْفِقُونَ", ""], ["عَنْ صَلَاتِهِمْ", ""], ["غَنِيٌّ كَرِيمٌ", ""]] },
    { h: "Nūn sākina vor Nūn", ar: "مِنْ نَارٍ",
      text: "Folgt auf Nūn sākina ein Nūn, ist es Idġām (zwei gleiche Buchstaben) und zugleich mit Ġunna.",
      ex: [["مِنْ نَارٍ", ""], ["وَمَنْ نُعَمِّرْهُ", ""]] },
    { h: "Ġunna", ar: "الْغُنَّةُ",
      text: "Ein Laut aus dem Nasenraum (Ḫayšūm), bei dem die Zunge nicht mitwirkt." }
  ],
  table: { head: ["Regel", "Buchstaben", "Ġunna"], rows: [
    ["Iẓhār", "ء ه ع ح غ خ", "nein"], ["Idġām bi-ġunna", "ي ن م و (يُومِنُ)", "ja"], ["Idġām bi-lā ġunna", "ل ر", "nein"],
    ["Iqlāb", "ب", "ja"], ["Iḫfāʾ", "ص ذ ث ك ج ش ق س د ط ز ف ت ض ظ", "ja"]] },
  book: [
    [26, "مَا هِيَ النُّونُ السَّاكِنَةُ؟", "Das Nūn, das keinen Vokal hat."],
    [27, "مَا هُوَ التَّنْوِينُ؟", "Ein Nūn sākina am Ende eines Nomens: gesprochen, aber nicht geschrieben und beim Anhalten weggelassen."],
    [28, "كَمْ حُكْمًا لِلنُّونِ السَّاكِنَةِ وَالتَّنْوِينِ؟", "Vier – je nach folgendem Buchstaben: Iẓhār, Idġām, Iqlāb, Iḫfāʾ."],
    [29, "مَا هُوَ الْإِظْهَارُ، وَمَا حُرُوفُهُ؟", "Jeden Buchstaben aus seiner Austrittsstelle ohne Ġunna sprechen – vor den sechs Kehllauten ء ه ع ح غ خ, z. B. ﴿مَنْ ءَامَنَ﴾, ﴿حَقِيقٌ عَلَىٰ﴾, ﴿أَنْعَمْتَ﴾. Heißt Iẓhār ḥalqī."],
    [30, "مَا هُوَ الْإِدْغَامُ، وَمَا حُرُوفُهُ؟", "Einen Buchstaben ohne Vokal in einen mit Vokal eingehen lassen, sodass beide ein Buchstabe mit Šadda werden. Buchstaben: sechs, gesammelt in „يَرْمَلُونَ“."],
    [31, "إِلَى كَمْ يَنْقَسِمُ الْإِدْغَامُ؟", "In zwei: mit Ġunna und ohne Ġunna."],
    [32, "مَا هُوَ الْإِدْغَامُ بِغُنَّةٍ؟", "Vor einem Buchstaben von „يُومِنُ“, z. B. ﴿صِرَاطًا مُسْتَقِيمًا﴾ – nur über zwei Wörter. Im selben Wort ist es Iẓhār muṭlaq: ﴿الدُّنْيَا﴾, ﴿صِنْوَانٌ﴾, ﴿قِنْوَانٌ﴾."],
    [33, "مَا هُوَ الْإِدْغَامُ بِلَا غُنَّةٍ؟", "Vor Lām oder Rāʾ, z. B. ﴿مِنْ رَبِّهِمْ﴾, ﴿هُدًى لِلْمُتَّقِينَ﴾."],
    [34, "مَا هِيَ الْغُنَّةُ؟", "Ein Laut aus dem Nasenraum, bei dem die Zunge nicht mitwirkt."],
    [35, "مَا هُوَ الْإِقْلَابُ، وَمَا حَرْفُهُ؟", "Nūn sākina oder Tanwīn wird vor Bāʾ zu einem verborgenen Mīm mit Ġunna – nur vor Bāʾ, z. B. ﴿مِنْ بَعْدِ﴾, ﴿سَمِيعٌ بَصِيرٌ﴾."],
    [36, "مَا هُوَ الْإِخْفَاءُ، وَمَا حُرُوفُهُ؟", "Ein Zustand zwischen Iẓhār und Idġām, ohne Šadda, mit Ġunna – vor den 15 Buchstaben am Anfang der Wörter von „صِفْ ذَا ثَنَا كَمْ …“, z. B. ﴿يُنْفِقُونَ﴾, ﴿فَتْحٌ قَرِيبٌ﴾."]
  ],
  quiz: [
    { q: "Wie viele Regeln gelten für Nūn sākina und Tanwīn?", a: ["Vier: Iẓhār, Idġām, Iqlāb, Iḫfāʾ", "Drei: Iẓhār, Idġām, Iḫfāʾ", "Zwei: mit und ohne Ġunna", "Sechs"], e: "Je nach folgendem Buchstaben: Iẓhār, Idġām, Iqlāb oder Iḫfāʾ.", src: "B 28" },
    { q: "Welche Regel gilt?", ar: "مَنْ ءَامَنَ", a: ["Iẓhār ḥalqī", "Iḫfāʾ", "Idġām mit Ġunna", "Iqlāb"], e: "Nach dem Nūn sākina kommt Hamza – ein Kehllaut → deutlich (Iẓhār).", src: "B 29" },
    { q: "Welche sind die Buchstaben des Iẓhār ḥalqī?", a: ["ء ه ع ح غ خ", "ي ن م و", "ق ط ب ج د", "ل ر"], e: "Die sechs Kehllaute: Hamza, Hāʾ, ʿAyn, Ḥāʾ, Ġayn, Ḫāʾ.", src: "B 29" },
    { q: "Welche Regel gilt?", ar: "مِنْ رَبِّهِمْ", a: ["Idġām ohne Ġunna", "Idġām mit Ġunna", "Iẓhār", "Iḫfāʾ"], e: "Nūn sākina vor Rāʾ → vollständiger Idġām ohne Ġunna: mir-rabbihim.", src: "B 33" },
    { q: "Welche Regel gilt?", ar: "مَنْ يَعْمَلْ", a: ["Idġām mit Ġunna", "Idġām ohne Ġunna", "Iẓhār muṭlaq", "Iqlāb"], e: "Yāʾ gehört zu „يُومِنُ“ und steht im nächsten Wort → Idġām mit Ġunna.", src: "B 32" },
    { q: "Warum wird das Nūn in ﴿الدُّنْيَا﴾ deutlich gesprochen?", a: ["Nūn und Yāʾ stehen im selben Wort – Iẓhār muṭlaq", "Weil Yāʾ ein Kehllaut ist", "Weil es ein Tanwīn ist", "Weil danach eine Šadda steht"], e: "Idġām gibt es nur über zwei Wörter. Im selben Wort (الدُّنْيَا، صِنْوَانٌ، قِنْوَانٌ، بُنْيَانٌ) bleibt das Nūn deutlich.", src: "B 32" },
    { q: "Welche Regel gilt?", ar: "سَمِيعٌ بَصِيرٌ", a: ["Iqlāb – das Tanwīn wird zu Mīm mit Ġunna", "Iḫfāʾ", "Iẓhār", "Idġām ohne Ġunna"], e: "Vor Bāʾ wird Nūn sākina / Tanwīn zu einem verborgenen Mīm: samīʿum-baṣīr.", src: "B 35" },
    { q: "Welche Regel gilt?", ar: "يُنْفِقُونَ", a: ["Iḫfāʾ", "Iẓhār", "Idġām mit Ġunna", "Iqlāb"], e: "Fāʾ ist einer der 15 Iḫfāʾ-Buchstaben → verborgen, mit Ġunna.", src: "B 36" },
    { q: "Wie viele Iḫfāʾ-Buchstaben gibt es?", a: ["15", "6", "4", "14"], e: "Die Anfangsbuchstaben der Wörter in „صِفْ ذَا ثَنَا كَمْ جَادَ شَخْصٌ قَدْ سَمَا · دُمْ طَيِّبًا زِدْ فِي تُقًى ضَعْ ظَالِمَا“.", src: "B 36" },
    { q: "Was ist die Ġunna?", a: ["Ein Laut aus dem Nasenraum, ohne Mitwirkung der Zunge", "Ein Laut aus der Kehle", "Eine Dehnung von 2 Ḥarakāt", "Das Anhalten ohne Atemholen"], e: "صَوْتٌ يَخْرُجُ مِنَ الْخَيْشُومِ لَا عَمَلَ لِلِّسَانِ فِيهِ.", src: "B 34" },
    { q: "Was ist ein Tanwīn?", a: ["Ein Nūn sākina am Nomen-Ende: gesprochen, nicht geschrieben, beim Anhalten weggelassen", "Ein Nūn mit Šadda", "Ein Nūn am Wortanfang", "Das Nūn der Frauenform"], e: "نُونٌ سَاكِنَةٌ تَتْبَعُ آخِرَ الِاسْمِ لَفْظًا وَتُفَارِقُهُ خَطًّا وَوَقْفًا.", src: "B 27" },
    { q: "Welche Regel gilt?", ar: "مِنْ نَارٍ", a: ["Idġām mit Ġunna (zwei gleiche Buchstaben)", "Iẓhār", "Iḫfāʾ", "Idġām ohne Ġunna"], e: "Nūn sākina vor Nūn: Idġām miṯlayn und zugleich mit Ġunna – min-nār.", src: "Tafel" }
  ] },

/* ---------------------------------------------------------------- 5 */
{ id: "mim", title: "Mīm sākina", ar: "أَحْكَامُ الْمِيمِ السَّاكِنَةِ",
  intro: "Für das Mīm ohne Vokal gibt es drei Regeln.",
  rules: [
    { h: "1. Idġām miṯlayn ṣaġīr – vor م", ar: "إِدْغَامٌ مُتَمَاثِلٌ بِغُنَّةٍ",
      text: "Vor einem zweiten Mīm verschmelzen beide zu einem Mīm mit Šadda und Ġunna.",
      ex: [["وَلَكُمْ مَا كَسَبْتُمْ", "wa-lakum-mā"], ["أَطْعَمَهُمْ مِنْ جُوعٍ", ""], ["عَلَيْهِمْ مُؤْصَدَةٌ", ""]] },
    { h: "2. Iḫfāʾ šafawī – vor ب", ar: "الْإِخْفَاءُ الشَّفَوِيُّ",
      text: "Vor Bāʾ wird das Mīm verborgen gesprochen, mit Ġunna – „Lippen-Iḫfāʾ“.",
      ex: [["تَرْمِيهِمْ بِحِجَارَةٍ", ""], ["إِنَّ رَبَّهُمْ بِهِمْ", ""]] },
    { h: "3. Iẓhār šafawī – vor allen anderen", ar: "الْإِظْهَارُ الشَّفَوِيُّ",
      text: "Vor allen übrigen Buchstaben wird das Mīm deutlich gesprochen – besonders deutlich vor و und ف, damit man es nicht verbirgt.",
      ex: [["أَمْ حَسِبْتُمْ", ""], ["لَكُمْ دِينُكُمْ", ""], ["هُمْ فِيهَا", ""]] }
  ],
  book: [
    [37, "كَمْ هِيَ أَحْكَامُ الْمِيمِ السَّاكِنَةِ؟", "Drei: Idġām in ein gleiches Mīm mit Ġunna (﴿وَلَكُمْ مَا كَسَبْتُمْ﴾), verborgen mit Ġunna vor Bāʾ – Iḫfāʾ šafawī (﴿تَرْمِيهِمْ بِحِجَارَةٍ﴾), deutlich vor den übrigen – Iẓhār šafawī (﴿أَمْ حَسِبْتُمْ﴾), besonders deutlich vor Wāw und Fāʾ."]
  ],
  quiz: [
    { q: "Welche Regel gilt?", ar: "تَرْمِيهِمْ بِحِجَارَةٍ", a: ["Iḫfāʾ šafawī", "Iẓhār šafawī", "Iqlāb", "Idġām miṯlayn"], e: "Mīm sākina vor Bāʾ → Lippen-Iḫfāʾ mit Ġunna.", src: "B 37" },
    { q: "Welche Regel gilt?", ar: "وَلَكُمْ مَا كَسَبْتُمْ", a: ["Idġām miṯlayn mit Ġunna", "Iḫfāʾ šafawī", "Iẓhār šafawī", "Idġām ohne Ġunna"], e: "Mīm sākina vor Mīm → verschmelzen, mit Ġunna.", src: "B 37" },
    { q: "Welche Regel gilt?", ar: "أَمْ حَسِبْتُمْ", a: ["Iẓhār šafawī", "Iẓhār ḥalqī", "Iḫfāʾ šafawī", "Idġām"], e: "Vor allen Buchstaben außer م und ب bleibt das Mīm deutlich (Lippen-Iẓhār).", src: "B 37" },
    { q: "Vor welchen Buchstaben muss das Mīm sākina besonders deutlich gesprochen werden?", a: ["Vor و und ف", "Vor ب und م", "Vor den Kehllauten", "Vor ل und ر"], e: "Wāw und Fāʾ liegen nah an den Lippen – deshalb besonders darauf achten, das Mīm nicht zu verbergen.", src: "B 37" },
    { q: "Wie viele Regeln hat das Mīm sākina?", a: ["Drei", "Vier", "Zwei", "Fünf"], e: "Idġām (vor م), Iḫfāʾ (vor ب), Iẓhār (vor den übrigen).", src: "B 37" }
  ] },

/* ---------------------------------------------------------------- 6 */
{ id: "idgham", title: "Idġām – Arten", ar: "أَقْسَامُ الْإِدْغَامِ",
  intro: "Treffen zwei Buchstaben aufeinander, der erste ohne Vokal, der zweite mit, kann der erste in den zweiten übergehen. Nach Austrittsstelle und Eigenschaften gibt es drei Arten.",
  rules: [
    { h: "Miṯlayn – gleiche Buchstaben", ar: "الْإِدْغَامُ الْمُتَمَاثِلُ",
      text: "Gleiche Austrittsstelle und gleiche Eigenschaften – also zwei gleiche Buchstaben.",
      ex: [["فَمَا رَبِحَتْ تِجَارَتُهُمْ", ""], ["أَنِ اضْرِبْ بِعَصَاكَ", ""], ["آوَوْا وَنَصَرُوا", ""]] },
    { h: "Mutaǧānisayn – gleiche Austrittsstelle", ar: "الْإِدْغَامُ الْمُتَجَانِسُ",
      text: "Gleiche Austrittsstelle, aber verschiedene Eigenschaften: ط/ت/د, ذ/ظ/ث und ب/م. Der Sākin wird zum folgenden Buchstaben, als hätte dieser eine Šadda. Bei ﴿بَسَطْتَ﴾ bleibt die „Schwere“ des Ṭāʾ hörbar.",
      ex: [["قَالَتْ طَائِفَةٌ", "t → ṭ"], ["عَبَدْتُمْ", "d → t"], ["أَثْقَلَتْ دَعَوَا", "t → d"], ["إِذْ ظَلَمُوا", "ḏ → ẓ"], ["يَلْهَثْ ذَٰلِكَ", "ṯ → ḏ"], ["ارْكَبْ مَعَنَا", "b → m"]] },
    { h: "Mutaqāribayn – nahe Buchstaben", ar: "الْإِدْغَامُ الْمُتَقَارِبُ",
      text: "Austrittsstelle oder Eigenschaften (oder beides) sind nahe beieinander: Lām vor Rāʾ und Qāf vor Kāf.",
      ex: [["قُلْ رَبِّ", "qur-rabbi"], ["بَلْ رَفَعَهُ اللَّهُ", ""], ["أَلَمْ نَخْلُقْكُمْ", "naḫlukkum"]] }
  ],
  book: [
    [38, "إِلَى كَمْ يَنْقَسِمُ الْإِدْغَامُ بِحَسَبِ الصِّفَةِ؟", "In drei: mutamāṯil, mutaǧānis, mutaqārib."],
    [39, "مَا هُوَ الْإِدْغَامُ الْمُتَمَاثِلُ؟", "Beide Buchstaben stimmen in Austrittsstelle und Eigenschaft überein und folgen aufeinander, z. B. ﴿فَمَا رَبِحَتْ تِجَارَتُهُمْ﴾, ﴿أَنِ اضْرِبْ بِعَصَاكَ﴾."],
    [40, "مَا هُوَ الْإِدْغَامُ الْمُتَجَانِسُ؟", "Gleiche Austrittsstelle, verschiedene Eigenschaften: Ṭāʾ–Tāʾ (﴿بَسَطْتَ﴾), Tāʾ–Ṭāʾ (﴿قَالَتْ طَائِفَةٌ﴾), Tāʾ–Dāl (﴿أَثْقَلَتْ دَعَوَا﴾), Dāl–Tāʾ, Ṯāʾ–Ḏāl (﴿يَلْهَثْ ذَٰلِكَ﴾), Bāʾ–Mīm (﴿ارْكَبْ مَعَنَا﴾)."],
    [41, "مَا هُوَ الْإِدْغَامُ الْمُتَقَارِبُ؟", "Die Buchstaben sind sich in Austrittsstelle oder Eigenschaft nahe: Lām mit Rāʾ (﴿بَلْ رَفَعَهُ﴾), Qāf mit Kāf (﴿نَخْلُقْكُمْ﴾)."]
  ],
  quiz: [
    { q: "Welche Idġām-Art liegt vor?", ar: "اضْرِبْ بِعَصَاكَ", a: ["Miṯlayn – zwei gleiche Buchstaben", "Mutaǧānisayn", "Mutaqāribayn", "Kein Idġām"], e: "Bāʾ sākina vor Bāʾ → gleiche Buchstaben.", src: "B 39" },
    { q: "Welche Idġām-Art liegt vor?", ar: "قَالَتْ طَائِفَةٌ", a: ["Mutaǧānisayn", "Miṯlayn", "Mutaqāribayn", "Iḫfāʾ"], e: "Tāʾ und Ṭāʾ haben dieselbe Austrittsstelle, aber verschiedene Eigenschaften.", src: "B 40" },
    { q: "Welche Idġām-Art liegt vor?", ar: "قُلْ رَبِّ", a: ["Mutaqāribayn", "Mutaǧānisayn", "Miṯlayn", "Idġām ohne Ġunna des Nūn"], e: "Lām und Rāʾ liegen nah beieinander → mutaqārib: qur-rabbi.", src: "B 41" },
    { q: "Welche Idġām-Art liegt vor?", ar: "ارْكَبْ مَعَنَا", a: ["Mutaǧānisayn (Bāʾ in Mīm)", "Miṯlayn", "Mutaqāribayn", "Iḫfāʾ šafawī"], e: "Bāʾ und Mīm kommen beide von den Lippen → gleiche Austrittsstelle, verschiedene Eigenschaften.", src: "B 40" },
    { q: "Was heißt „mutaǧānisayn“?", a: ["Gleiche Austrittsstelle, verschiedene Eigenschaften", "Gleiche Austrittsstelle und gleiche Eigenschaften", "Nahe Austrittsstellen", "Ganz verschiedene Buchstaben"], e: "Mutaǧānis = „gleichartig“: Maḫraǧ gleich, Ṣifāt verschieden.", src: "B 40" },
    { q: "Welche Buchstabengruppe gehört zu mutaǧānisayn?", a: ["ط – ت – د", "ل – ر", "ق – ك", "ء – ه"], e: "Ṭāʾ, Tāʾ und Dāl kommen von der Zungenspitze an den oberen Schneidezähnen.", src: "B 40" },
    { q: "Wie spricht man ﴿أَلَمْ نَخْلُقْكُمْ﴾?", a: ["naḫlukkum – Qāf geht in Kāf über", "naḫluqkum – beide deutlich", "naḫluqqum", "naḫlum-kum"], e: "Qāf vor Kāf: mutaqāribayn → naḫlukkum.", src: "B 41" }
  ] },

/* ---------------------------------------------------------------- 7 */
{ id: "lam", title: "Lām: Allah und der Artikel", ar: "أَحْكَامُ اللَّامِ",
  intro: "Das Lām hat vier Regeln: dick (tafḫīm), dünn (tarqīq), Idġām und Iẓhār.",
  rules: [
    { h: "Lām im Namen Allah", ar: "لَفْظُ الْجَلَالَةِ",
      text: "Nach Fatḥa oder Ḍamma wird das Lām in „Allah“ dick (tafḫīm) gesprochen, nach Kasra dünn (tarqīq).",
      ex: [["نَصْرُ اللَّهِ، عَبْدُ اللَّهِ", "dick – nach Ḍamma"], ["قَالَ اللَّهُ، هُوَ اللَّهُ", "dick – nach Fatḥa"], ["بِاللَّهِ، لِلَّهِ، بِسْمِ اللَّهِ", "dünn – nach Kasra"]] },
    { h: "Lām šamsiyya – Sonnenbuchstaben", ar: "اللَّامُ الشَّمْسِيَّةُ",
      text: "Vor 14 Buchstaben wird das Lām des Artikels nicht gesprochen; der folgende Buchstabe bekommt eine Šadda. Die Buchstaben sind die Anfänge in: طِبْ ثُمَّ صِلْ رَحِمًا تَفُزْ ضِفْ ذَا نِعَمْ · دَعْ سُوءَ ظَنٍّ زُرْ شَرِيفًا لِلْكَرَمْ",
      ex: [["الشَّمْسُ", "aš-šams"], ["النَّاسُ، النَّارُ، التِّينُ", ""], ["الثَّوَابُ", ""]] },
    { h: "Lām qamariyya – Mondbuchstaben", ar: "اللَّامُ الْقَمَرِيَّةُ",
      text: "Vor den anderen 14 Buchstaben wird das Lām deutlich gesprochen: ابْغِ حَجَّكَ وَخَفْ عَقِيمَهُ.",
      ex: [["الْقَمَرُ", "al-qamar"], ["الْعَصْرِ، الْفَجْرِ", ""], ["الْخَالِقُ، الْبَارِئُ", ""]] },
    { h: "Faustregel", ar: "",
      text: "Steht nach dem Lām des Artikels ein Buchstabe mit Šadda, ist es šamsiyya („wie الشَّمْس“), sonst qamariyya („wie الْقَمَر“)." },
    { h: "Lām im Verb und im Relativpronomen", ar: "الْتَقَى · الَّذِي",
      text: "Das Lām eines Verbs wird deutlich gesprochen (﴿الْتَقَتَا﴾, ﴿الْتَقَى﴾, ﴿أَلْهَاكُمُ﴾). Das Lām von الَّذِي / الَّتِي wird assimiliert." }
  ],
  book: [
    [42, "كَمْ حُكْمًا لِلَّامِ الْمُعَرِّفَةِ؟", "Vier: Tafḫīm, Tarqīq, Idġām, Iẓhār."],
    [43, "مَتَى تُفَخَّمُ اللَّامُ، وَمَتَى تُرَقَّقُ؟", "Das Lām im Namen Allah wird dick, wenn davor Ḍamma oder Fatḥa steht (﴿عَبْدُ اللَّهِ﴾, ﴿سَيُؤْتِينَا اللَّهُ﴾); sonst dünn."],
    [44, "مَتَى تُدْغَمُ اللَّامُ الْمُعَرِّفَةُ، وَمَتَى تُظْهَرُ؟", "Idġām vor den 14 Buchstaben von „طِبْ ثُمَّ صِلْ …“ (šamsiyya, z. B. ﴿الثَّوَابُ﴾); Iẓhār vor „ابْغِ حَجَّكَ وَخَفْ عَقِيمَهُ“ (qamariyya, z. B. ﴿الْخَالِقُ﴾, ﴿الْبَارِئُ﴾)."],
    [45, "لَامُ الْفِعْلِ وَلَامُ الْمَوْصُولِ: شَمْسِيَّةٌ أَمْ قَمَرِيَّةٌ؟", "Das Lām des Verbs wird deutlich gesprochen (Iẓhār), das Lām des Relativpronomens (الَّذِي، الَّتِي) assimiliert (Idġām)."]
  ],
  quiz: [
    { q: "Wie wird das Lām in ﴿بِسْمِ اللَّهِ﴾ gesprochen?", a: ["Dünn (tarqīq) – davor steht eine Kasra", "Dick (tafḫīm)", "Gar nicht", "Mit Ġunna"], e: "Nach Kasra wird das Lām im Namen Allah dünn gesprochen.", src: "B 43" },
    { q: "Wie wird das Lām in ﴿نَصْرُ اللَّهِ﴾ gesprochen?", a: ["Dick (tafḫīm) – davor steht eine Ḍamma", "Dünn (tarqīq)", "Gar nicht", "Mal so, mal so"], e: "Nach Ḍamma oder Fatḥa: dick.", src: "B 43" },
    { q: "Welches Lām liegt vor?", ar: "الشَّمْسُ", a: ["Lām šamsiyya – wird nicht gesprochen", "Lām qamariyya – wird gesprochen", "Lām des Verbs", "Lām im Namen Allah"], e: "Das Šīn trägt eine Šadda, das Lām wird übersprungen: aš-šams.", src: "B 44" },
    { q: "Welches Lām liegt vor?", ar: "الْقَمَرُ", a: ["Lām qamariyya – wird gesprochen", "Lām šamsiyya – wird nicht gesprochen", "Lām des Relativpronomens", "Idġām"], e: "Qāf gehört zu „ابْغِ حَجَّكَ وَخَفْ عَقِيمَهُ“ → al-qamar.", src: "B 44" },
    { q: "Wie viele Sonnenbuchstaben gibt es?", a: ["14", "15", "6", "28"], e: "14 šamsiyya und 14 qamariyya – zusammen 28.", src: "B 44" },
    { q: "Woran erkennt man im Qurʾān ein Lām šamsiyya am schnellsten?", a: ["Der Buchstabe danach trägt eine Šadda", "Das Lām trägt ein Sukūn", "Es steht am Wortende", "Davor steht eine Kasra"], e: "Steht nach dem Lām ein Buchstabe mit Šadda → šamsiyya; sonst qamariyya.", src: "B 44" },
    { q: "Wie wird das Lām in ﴿الْتَقَى﴾ gesprochen?", a: ["Deutlich – es ist das Lām eines Verbs", "Gar nicht – es ist šamsiyya", "Mit Ġunna", "Dick"], e: "Das Lām des Verbs wird deutlich gesprochen (Iẓhār).", src: "B 45" }
  ] },

/* ---------------------------------------------------------------- 8 */
{ id: "ra", title: "Rāʾ – dick oder dünn", ar: "أَحْكَامُ الرَّاءِ",
  intro: "Das Rāʾ wird entweder dick (tafḫīm) oder dünn (tarqīq) gesprochen; an zwei Stellen ist beides erlaubt.",
  rules: [
    { h: "Dick (tafḫīm) – 5 Fälle", ar: "تَفْخِيمُ الرَّاءِ",
      text: "1) Mit Fatḥa oder Ḍamma. 2) Sākin nach Fatḥa oder Ḍamma. 3) Sākin nach einer nicht ursprünglichen Kasra (Hamzat al-waṣl). 4) Sākin nach ursprünglicher Kasra, wenn danach im selben Wort ein Isti‘lāʾ-Buchstabe ohne Kasra folgt. 5) Beim Anhalten sākin, davor ein Sākin, und davor Fatḥa oder Ḍamma.",
      ex: [["رَبَّنَا، عُرُبًا أَتْرَابًا", "1"], ["الْقُرْآنِ، الْعَرْشِ", "2"], ["ارْجِعِي، لِمَنِ ارْتَضَىٰ", "3"], ["قِرْطَاسٍ، مِرْصَادًا، فِرْقَةٍ", "4"], ["وَالْعَصْرِ، وَالْفَجْرِ", "5 – beim Anhalten"]] },
    { h: "Dünn (tarqīq) – 4 Fälle", ar: "تَرْقِيقُ الرَّاءِ",
      text: "1) Mit Kasra. 2) Sākin nach (ursprünglicher) Kasra. 3) Beim Anhalten sākin nach Yāʾ sākina. 4) Beim Anhalten sākin, davor ein Sākin, davor Kasra.",
      ex: [["رِجَالٌ، بِالْبِرِّ", "1"], ["فِرْعَوْنَ، وَاسْتَغْفِرْهُ", "2"], ["قَدِيرٌ، خَيْرٌ، بَصِيرٌ", "3 – beim Anhalten"], ["السِّحْرِ، الذِّكْرِ", "4 – beim Anhalten"]] },
    { h: "Beides erlaubt – 2 Fälle", ar: "جَوَازُ الْوَجْهَيْنِ",
      text: "1) Sākin nach ursprünglicher Kasra, danach ein Isti‘lāʾ-Buchstabe mit Kasra: ﴿كُلُّ فِرْقٍ﴾. 2) Beim Anhalten: davor ein Isti‘lāʾ-Buchstabe sākin, davor Kasra: ﴿مِصْرَ﴾, ﴿الْقِطْرِ﴾.",
      ex: [["كُلُّ فِرْقٍ", ""], ["مِصْرَ، الْقِطْرِ", "beim Anhalten"]] }
  ],
  book: [
    [46, "كَمْ حُكْمًا لِلرَّاءِ؟", "Drei: Tafḫīm, Tarqīq und beides erlaubt."],
    [47, "مَتَى تُفَخَّمُ الرَّاءُ؟", "An fünf Stellen: mit Fatḥa oder Ḍamma; sākin nach Ḍamma oder Fatḥa (﴿الْقُرْآنِ﴾, ﴿الْعَرْشِ﴾); sākin nach einer vorübergehenden Kasra (﴿ارْتَضَىٰ﴾); sākin nach ursprünglicher Kasra mit folgendem Isti‘lāʾ-Buchstaben ohne Kasra (﴿قِرْطَاسٍ﴾, ﴿مِرْصَادًا﴾); beim Anhalten sākin mit Sākin davor und davor Ḍamma oder Fatḥa (﴿وَالْعَصْرِ﴾)."],
    [48, "مَتَى تُرَقَّقُ الرَّاءُ؟", "An vier Stellen: mit Kasra (﴿رِجَالٌ﴾); sākin nach Kasra (﴿فِرْعَوْنَ﴾); sākin nach Yāʾ sākina (﴿قَدِيرٌ﴾, ﴿خَيْرٌ﴾); beim Anhalten sākin mit Sākin davor und davor Kasra (﴿السِّحْرِ﴾)."],
    [49, "فِي كَمْ مَوْضِعٍ يَجُوزُ فِي الرَّاءِ التَّفْخِيمُ وَالتَّرْقِيقُ؟", "An zwei: sākin nach ursprünglicher Kasra mit folgendem Isti‘lāʾ-Buchstaben mit Kasra (﴿فِرْقٍ﴾); oder sākin mit Isti‘lāʾ-Buchstaben sākin davor und davor Kasra (﴿مِصْرَ﴾)."]
  ],
  quiz: [
    { q: "Dick oder dünn?", ar: "رَبَّنَا", a: ["Dick – Rāʾ mit Fatḥa", "Dünn", "Beides erlaubt", "Gar nicht gesprochen"], e: "Rāʾ mit Fatḥa oder Ḍamma ist immer dick.", src: "B 47" },
    { q: "Dick oder dünn?", ar: "رِجَالٌ", a: ["Dünn – Rāʾ mit Kasra", "Dick", "Beides erlaubt", "Mit Ġunna"], e: "Rāʾ mit Kasra ist dünn.", src: "B 48" },
    { q: "Dick oder dünn?", ar: "فِرْعَوْنَ", a: ["Dünn – Rāʾ sākin nach Kasra", "Dick – Rāʾ sākin", "Beides erlaubt", "Dick – wegen des ʿAyn"], e: "Rāʾ sākin nach ursprünglicher Kasra, kein Isti‘lāʾ-Buchstabe danach → dünn.", src: "B 48" },
    { q: "Dick oder dünn?", ar: "قِرْطَاسٍ", a: ["Dick – nach dem Rāʾ folgt ein Isti‘lāʾ-Buchstabe (ṭ)", "Dünn – davor steht Kasra", "Beides erlaubt", "Gar nicht gesprochen"], e: "Sākin nach Kasra, aber danach im selben Wort Ṭāʾ (Isti‘lāʾ) ohne Kasra → dick.", src: "B 47" },
    { q: "Dick oder dünn?", ar: "ارْجِعِي", a: ["Dick – die Kasra davor gehört zur Hamzat al-waṣl", "Dünn – davor steht Kasra", "Beides erlaubt", "Mit Qalqala"], e: "Die Kasra der Hamzat al-waṣl ist nicht ursprünglich → das Rāʾ bleibt dick.", src: "B 47" },
    { q: "Wie spricht man das Rāʾ in ﴿قَدِيرٌ﴾ beim Anhalten?", a: ["Dünn – davor steht Yāʾ sākina", "Dick", "Beides erlaubt", "Mit Ġunna"], e: "Beim Anhalten sākin nach Yāʾ sākina → dünn.", src: "B 48" },
    { q: "Wo sind beide Aussprachen des Rāʾ erlaubt?", a: ["﴿فِرْقٍ﴾ und ﴿مِصْرَ﴾ (beim Anhalten)", "﴿رَبَّنَا﴾ und ﴿رِجَالٌ﴾", "﴿الْقُرْآنِ﴾ und ﴿الْعَرْشِ﴾", "Nirgends"], e: "Diese zwei Fälle nennt das Heft; in allen anderen ist die Aussprache festgelegt.", src: "B 49" },
    { q: "Wie spricht man das Rāʾ in ﴿وَالْعَصْرِ﴾ beim Anhalten?", a: ["Dick – davor Sākin, davor Fatḥa", "Dünn – wegen der Kasra", "Beides erlaubt", "Gar nicht"], e: "Beim Anhalten entscheidet der Vokal vor dem Sākin (ʿaṣ): Fatḥa → dick.", src: "B 47" }
  ] },

/* ---------------------------------------------------------------- 9 */
{ id: "sifat", title: "Qalqala und Eigenschaften", ar: "الْقَلْقَلَةُ وَالصِّفَاتُ",
  intro: "Die Eigenschaften (Ṣifāt) unterscheiden Buchstaben mit gleicher Austrittsstelle. Das Heft nennt Qalqala und einige Gruppen.",
  rules: [
    { h: "Qalqala – Nachhall", ar: "الْقَلْقَلَةُ · قُطْبُ جَدٍّ",
      text: "Ein hörbarer Nachstoß des Lautes, wenn einer dieser fünf Buchstaben ohne Vokal ist: ق ط ب ج د („قُطْبُ جَدٍّ“). Ṣuġrā (klein) mitten im Wort, kubrā (groß) am Wortende beim Anhalten.",
      ex: [["يَجْعَلُونَ، يَدْخُلُونَ", "ṣuġrā"], ["الْحَقُّ، الْفَلَقِ", "kubrā – beim Anhalten"]] },
    { h: "Isti‘lāʾ – die dicken Buchstaben", ar: "الِاسْتِعْلَاءُ · خُصَّ ضَغْطٍ قِظْ",
      text: "Sieben Buchstaben, bei denen sich der hintere Zungenrücken hebt; sie werden immer dick gesprochen: خ ص ض غ ط ق ظ." },
    { h: "Alif", ar: "الْأَلِفُ",
      text: "Das Alif folgt dem Buchstaben davor: nach einem dicken Buchstaben dick (﴿الْقَادِرُ﴾), nach einem dünnen dünn (﴿الْبَارِئُ﴾)." },
    { h: "Weitere Gruppen", ar: "",
      text: "Ṣafīr (Pfeiflaute): ص ز س. Hams (Hauchlaute, 10): „فَحَثَّهُ شَخْصٌ سَكَتَ“. Laṯawiyya (Zahnfleischlaute): ث ذ ظ. Istiṭāla (Ausdehnung): nur ض." }
  ],
  book: [
    [50, "مَا الْقَلْقَلَةُ، وَمَا حُرُوفُهَا؟", "Ein hörbarer Nachstoß des Lautes beim Aussprechen des Buchstabens, wenn er sākin ist. Fünf Buchstaben: „قُطْبُ جَدٍّ“."],
    [51, "إِلَى كَمْ تَنْقَسِمُ الْقَلْقَلَةُ؟", "Zwei: ṣuġrā mitten im Wort (﴿يَجْعَلُونَ﴾) und kubrā am Wortende beim Anhalten."],
    [52, "مَا حُرُوفُ الِاسْتِعْلَاءِ؟", "„خُصَّ ضَغْطٍ قِظْ“ – sie heißen die dicken Buchstaben."],
    [53, "مَا حُكْمُ الْأَلِفِ السَّاكِنَةِ؟", "Sie folgt dem Buchstaben davor, dick oder dünn: ﴿الْقَادِرُ﴾, ﴿الْبَارِئُ﴾."],
    [54, "مَا هِيَ حُرُوفُ الصَّفِيرِ؟", "Drei: Ṣād, Zāy, Sīn."],
    [55, "مَا هِيَ حُرُوفُ الْهَمْسِ؟", "Zehn: „فَحَثَّهُ شَخْصٌ سَكَتَ“."],
    [56, "مَا هِيَ الْحُرُوفُ اللِّثَوِيَّةُ؟", "Drei: Ṯāʾ, Ḏāl, Ẓāʾ."],
    [57, "مَا حَرْفُ الِاسْتِطَالَةِ؟", "Nur das Ḍād."]
  ],
  quiz: [
    { q: "Welche fünf Buchstaben haben Qalqala?", a: ["ق ط ب ج د", "ص ز س", "خ ص ض غ ط ق ظ", "ء ه ع ح غ خ"], e: "„قُطْبُ جَدٍّ“ – Qāf, Ṭāʾ, Bāʾ, Ǧīm, Dāl.", src: "B 50" },
    { q: "Wann hat ein Qalqala-Buchstabe seinen Nachhall?", a: ["Wenn er sākin ist", "Wenn er eine Fatḥa hat", "Nur am Wortanfang", "Immer"], e: "Qalqala entsteht nur beim Sukūn – mitten im Wort (ṣuġrā) oder beim Anhalten (kubrā).", src: "B 50" },
    { q: "Welche Qalqala liegt beim Anhalten auf ﴿الْحَقُّ﴾ vor?", a: ["Kubrā – am Wortende", "Ṣuġrā – mitten im Wort", "Keine", "Ġunna"], e: "Am Wortende beim Anhalten: große Qalqala.", src: "B 51" },
    { q: "Welche Buchstaben sind die „dicken“ (Isti‘lāʾ)?", a: ["خ ص ض غ ط ق ظ", "ق ط ب ج د", "ث ذ ظ", "ص ز س"], e: "„خُصَّ ضَغْطٍ قِظْ“.", src: "B 52" },
    { q: "Wie wird das Alif in ﴿الْقَادِرُ﴾ gesprochen?", a: ["Dick – es folgt dem dicken Qāf", "Dünn – Alif ist immer dünn", "Gar nicht", "Mit Qalqala"], e: "Das Alif folgt dem Buchstaben davor.", src: "B 53" },
    { q: "Welche sind die Pfeiflaute (Ṣafīr)?", a: ["ص ز س", "ث ذ ظ", "ق ك", "ل ن ر"], e: "Ṣād, Zāy und Sīn.", src: "B 54" },
    { q: "Welcher Buchstabe hat die Eigenschaft Istiṭāla?", a: ["ض", "ظ", "ش", "ر"], e: "Nur das Ḍād – sein Laut dehnt sich entlang des Zungenrands.", src: "B 57" }
  ] },

/* ---------------------------------------------------------------- 10 */
{ id: "hamza", title: "Hamzat al-waṣl", ar: "هَمْزَةُ الْوَصْلِ",
  intro: "Die Hamzat al-waṣl (Verbindungs-Hamza) spricht man nur, wenn man mit dem Wort beginnt. Beim Weiterlesen fällt sie weg.",
  rules: [
    { h: "Wo steht sie?", ar: "",
      text: "In Verben (﴿ادْعُوا رَبَّكُمْ﴾), in bestimmten Nomen (﴿اسْمُهُ﴾) und im Artikel „al-“." },
    { h: "Beginn bei Verben", ar: "",
      text: "Man schaut auf den dritten Buchstaben des Verbs: Hat er eine ursprüngliche Ḍamma → Beginn mit u. Hat er Fatḥa oder Kasra → Beginn mit i.",
      ex: [["اعْبُدُوا", "uʿbudū – dritter Buchstabe mit Ḍamma"], ["اسْتَغْفِرُوا", "istaġfirū – Fatḥa"], ["ارْجِعُوا", "irǧiʿū – Kasra"]] },
    { h: "Ausnahme: nicht ursprüngliche Ḍamma", ar: "امْشُوا · اقْضُوا · ابْنُوا",
      text: "Hier beginnt man mit Kasra, denn die Ḍamma ist nicht ursprünglich: امْشُوا kommt von امْشِيُوا, اقْضُوا von اقْضِيُوا, ابْنُوا von ابْنِيُوا.",
      ex: [["امْشُوا", "imšū"], ["اقْضُوا", "iqḍū"], ["ابْنُوا", "ibnū"]] },
    { h: "Beginn bei Nomen und beim Artikel", ar: "",
      text: "Bei den Nomen beginnt man mit Kasra (z. B. ابْن، ابْنَة، امْرِئ، امْرَأَة، اسْم، اثْنَان، اثْنَتَان). Beim Artikel „al-“ beginnt man mit Fatḥa: الرَّجُلُ.",
      ex: [["اسْمُهُ", "ismuhū"], ["الرَّجُلُ", "ar-raǧul"]] }
  ],
  book: [
    [58, "مَا هَمْزَةُ الْوَصْلِ؟", "Die Hamza, die am Anfang gesprochen wird und beim Weiterlesen wegfällt."],
    [59, "فِي أَيِّ مَوْضِعٍ تَكُونُ هَمْزَةُ الْوَصْلِ؟", "In Verben (﴿ادْعُوا رَبَّكُمْ﴾), in Nomen (﴿اسْمُهُ يَحْيَىٰ﴾) und bei den Partikeln nur im Artikel „al-“."],
    [60, "كَيْفَ يُبْدَأُ بِهَمْزَةِ الْوَصْلِ فِي الْأَفْعَالِ؟", "Mit Ḍamma, wenn der dritte Buchstabe des Verbs eine ursprüngliche Ḍamma hat (﴿اعْبُدُوا﴾); mit Kasra, wenn er Fatḥa (﴿اسْتَغْفِرُوا﴾) oder Kasra (﴿ارْجِعُوا﴾) hat."],
    [61, "عَنْ أَيِّ شَيْءٍ احْتَرَزَ بِقَوْلِهِ «بِضَمَّةٍ أَصْلِيَّةٍ»؟", "Von ﴿امْشُوا﴾, ﴿اقْضُوا﴾, ﴿ابْنُوا﴾: man beginnt mit Kasra, weil die Ḍamma nicht ursprünglich ist (امْشِيُوا، اقْضِيُوا، ابْنِيُوا)."],
    [62, "كَيْفَ يُبْدَأُ بِهَمْزَةِ الْوَصْلِ فِي الْأَسْمَاءِ؟", "Mit Kasra – in zehn überlieferten Nomen (u. a. اسْم، ابْن، ابْنَة، امْرِئ، امْرَأَة، اثْنَان، اثْنَتَان), in anderen nach den Regeln der Morphologie."],
    [63, "كَيْفَ يُبْدَأُ بِهَمْزَةِ الْوَصْلِ فِي الْحَرْفِ؟", "Nur beim Artikel „al-“, mit Fatḥa: ﴿الرَّجُلُ﴾."]
  ],
  quiz: [
    { q: "Was ist die Hamzat al-waṣl?", a: ["Eine Hamza, die nur am Anfang gesprochen wird und beim Weiterlesen wegfällt", "Eine Hamza, die immer gesprochen wird", "Eine Hamza am Wortende", "Eine Hamza mit Šadda"], e: "تَثْبُتُ فِي الِابْتِدَاءِ وَتَسْقُطُ فِي الدَّرْجِ.", src: "B 58" },
    { q: "Womit beginnt man bei ﴿اعْبُدُوا﴾?", a: ["Mit Ḍamma: uʿbudū", "Mit Kasra: iʿbudū", "Mit Fatḥa: aʿbudū", "Ohne Hamza"], e: "Der dritte Buchstabe (Bāʾ) hat eine ursprüngliche Ḍamma → Beginn mit u.", src: "B 60" },
    { q: "Womit beginnt man bei ﴿ارْجِعُوا﴾?", a: ["Mit Kasra: irǧiʿū", "Mit Ḍamma", "Mit Fatḥa", "Mit Sukūn"], e: "Der dritte Buchstabe (Ǧīm) hat Kasra → Beginn mit i.", src: "B 60" },
    { q: "Womit beginnt man bei ﴿امْشُوا﴾?", a: ["Mit Kasra – die Ḍamma ist nicht ursprünglich", "Mit Ḍamma – der dritte Buchstabe hat Ḍamma", "Mit Fatḥa", "Beides ist erlaubt"], e: "امْشُوا kommt von امْشِيُوا: der dritte Buchstabe hatte ursprünglich Kasra → imšū.", src: "B 61" },
    { q: "Womit beginnt man beim Artikel „al-“?", a: ["Mit Fatḥa", "Mit Kasra", "Mit Ḍamma", "Ohne Hamza"], e: "Bei Partikeln gibt es die Hamzat al-waṣl nur im Artikel – immer mit Fatḥa.", src: "B 63" },
    { q: "Womit beginnt man bei ﴿اسْمُهُ﴾?", a: ["Mit Kasra: ismuhū", "Mit Fatḥa", "Mit Ḍamma", "Ohne Hamza"], e: "Die Nomen mit Hamzat al-waṣl beginnen mit Kasra.", src: "B 62" }
  ] },

/* ---------------------------------------------------------------- 11 */
{ id: "makharij", title: "Maḫāriǧ – Austrittsstellen", ar: "مَخَارِجُ الْحُرُوفِ",
  intro: "Jeder Buchstabe hat eine Austrittsstelle (Maḫraǧ). Es gibt fünf Hauptbereiche: den Mund- und Rachenraum (Ǧawf), die Kehle (Ḥalq), die Zunge (Lisān), die Lippen (Šafatān) und den Nasenraum (Ḫayšūm).",
  rules: [
    { h: "So findest du den Maḫraǧ", ar: "أَبْ · أَتْ · أَقْ",
      text: "Gib dem Buchstaben ein Sukūn, setze eine Hamza mit Vokal davor und hör hin: Wo der Laut im Mund abbricht, ist seine Austrittsstelle (z. B. „ab“, „at“, „aq“)." },
    { h: "Ǧawf – der leere Raum", ar: "الْجَوْفُ",
      text: "Die drei Dehnungsbuchstaben: Alif nach Fatḥa, Wāw sākina nach Ḍamma, Yāʾ sākina nach Kasra." },
    { h: "Ḥalq – die Kehle", ar: "الْحَلْقُ",
      text: "Tiefste Stelle: ء ه · Mitte: ع ح · nächste zum Mund: غ خ." },
    { h: "Lisān – die Zunge", ar: "اللِّسَانُ",
      text: "ق: hinterster Zungenrücken am Gaumen · ك: etwas weiter vorn · ج ش ي: Zungenmitte am mittleren Gaumen · ض: Zungenrand an den Backenzähnen (meist links) · ل ن ر: vorderer Zungenrand am Zahnfleisch (ن etwas unter ل, ر nahe ن) · ط د ت: Zungenspitze an den Wurzeln der oberen Schneidezähne · ص ز س: Zungenspitze zwischen den Schneidezähnen · ظ ذ ث: Zungenspitze an den Spitzen der oberen Schneidezähne." },
    { h: "Šafatān – die Lippen", ar: "الشَّفَتَانِ",
      text: "ف: Innenseite der Unterlippe an den Spitzen der oberen Schneidezähne · و ب م: zwischen beiden Lippen – beim Wāw geöffnet, bei Bāʾ und Mīm geschlossen." },
    { h: "Ḫayšūm – der Nasenraum", ar: "الْخَيْشُومُ",
      text: "Hier entsteht die Ġunna (bei Nūn und Mīm)." }
  ],
  table: { head: ["Buchstabe", "Austrittsstelle und Klang (nach der Tafel)"], rows: [
    ["ا", "Tiefe der Kehle; als Dehnungsbuchstabe aus dem Mundraum"], ["ب", "Lippen kräftig und schnell geschlossen – dünn, klar, kräftig"],
    ["ت", "Zungenspitze an den Wurzeln der oberen Schneidezähne – dünn, deutlich"], ["ث", "Zungenspitze an den Spitzen der oberen Schneidezähne, leicht herausgestreckt – gelispelt, weich"],
    ["ج", "Zungenmitte kräftig am oberen Gaumen – kräftig, dünn, klar"], ["ح", "Mitte der Kehle, leicht verengt – weich, fließend"],
    ["خ", "Obere Kehle, nahe dem Mund, mit leichtem Reiben – dick"], ["د", "Zungenspitze an den Wurzeln der oberen Schneidezähne – dünn, kräftig"],
    ["ذ", "Zungenspitze an den oberen Schneidezähnen, leicht heraus – gelispelt, weich"], ["ر", "Zungenspitze gewölbt am Zahnfleisch – mit Fatḥa/Ḍamma dick, mit Kasra dünn"],
    ["ز", "Zungenspitze an den unteren Schneidezähnen – weich, scharf"], ["س", "Zungenspitze etwas unter den unteren Schneidezähnen – scharf, fließend"],
    ["ش", "Zungenmitte am oberen Gaumen – weich, fließend"], ["ص", "Zungenspitze an den unteren Schneidezähnen – dick, pfeifend"],
    ["ض", "Zungenrand an den oberen Backenzähnen, links oder rechts – dick, gedehnt"], ["ط", "Zungenspitze an den Wurzeln der oberen Schneidezähne – dick, kräftig"],
    ["ظ", "Zungenspitze an den Spitzen der oberen Schneidezähne – dick, gelispelt"], ["ع", "Mitte der Kehle, leicht gepresst"],
    ["غ", "Obere Kehle zum Mund hin – dick, weich"], ["ف", "Spitzen der oberen Schneidezähne auf der Unterlippe – weich, fließend"],
    ["ق", "Hinterster Zungenrücken am oberen Gaumen – dick, kräftig"], ["ك", "Etwas vor der Stelle des Qāf – dünn, kräftig"],
    ["ل", "Beide Zungenränder am Zahnfleisch der oberen Zähne – dünn"], ["م", "Lippen leicht geschlossen – mit Nasenklang"],
    ["ن", "Zungenspitze am Zahnfleisch der oberen Zähne – mit Nasenklang"], ["و", "Lippen gerundet nach vorn – weich, dünn"],
    ["ه", "Tiefe der Kehle – dünn, fließend"], ["ي", "Zungenmitte am oberen Gaumen – weich, dünn"]] },
  book: [
    [64, "مَا هِيَ أَنْوَاعُ الْمَخَارِجِ؟", "Fünf: Ǧawf, Ḥalq, Lisān, Šafatān, Ḫayšūm."],
    [65, "مِنْ أَيْنَ مَخْرَجُ حُرُوفِ الْمَدِّ؟", "Aus dem Ǧawf (dem leeren Mund- und Rachenraum)."],
    [66, "مِنْ أَيْنَ مَخْرَجُ حُرُوفِ الْحَلْقِ؟", "Aus der Kehle."],
    [67, "مِنْ أَيْنَ مَخْرَجُ الْقَافِ وَالْكَافِ؟", "Vom hintersten Zungenteil mit dem Gaumen darüber; das Kāf etwas darunter."],
    [68, "مِنْ أَيْنَ مَخْرَجُ الْجِيمِ وَالشِّينِ وَالْيَاءِ؟", "Aus der Zungenmitte mit der Mitte des oberen Gaumens."],
    [69, "مِنْ أَيْنَ مَخْرَجُ الضَّادِ؟", "Vom Zungenrand – links (häufig), rechts (selten) oder beidseitig (seltener) – entlang der Backenzähne."],
    [70, "مِنْ أَيْنَ مَخْرَجُ اللَّامِ وَالنُّونِ وَالرَّاءِ؟", "Vom vorderen Zungenrand am oberen Gaumen; das Nūn etwas unter dem Lām, das Rāʾ nahe dem Nūn."],
    [71, "مِنْ أَيْنَ مَخْرَجُ الطَّاءِ وَالدَّالِ وَالتَّاءِ؟", "Von der Zungenspitze mit den Wurzeln der oberen Schneidezähne."],
    [72, "مِنْ أَيْنَ مَخْرَجُ الصَّادِ وَالزَّايِ وَالسِّينِ؟", "Von der Zungenspitze zwischen den oberen und unteren Schneidezähnen."],
    [73, "مِنْ أَيْنَ مَخْرَجُ الظَّاءِ وَالذَّالِ وَالثَّاءِ؟", "Von der Zungenspitze mit den Spitzen der oberen Schneidezähne."],
    [74, "مِنْ أَيْنَ مَخْرَجُ الْفَاءِ؟", "Von der Innenseite der Unterlippe mit den Spitzen der oberen Schneidezähne."],
    [75, "مِنْ أَيْنَ مَخْرَجُ الْوَاوِ وَالْبَاءِ وَالْمِيمِ؟", "Zwischen den Lippen – beim Wāw geöffnet, bei Bāʾ und Mīm geschlossen. Die Ġunna kommt aus dem Nasenraum."],
    [76, "كَيْفَ يُعْرَفُ مَخْرَجُ الْحَرْفِ؟", "Gib dem Buchstaben Sukūn, setze eine Hamzat al-waṣl davor und hör hin: wo der Laut im Mund abbricht, ist seine Austrittsstelle."]
  ],
  quiz: [
    { q: "Wie viele Hauptbereiche der Maḫāriǧ gibt es?", a: ["Fünf", "Drei", "Siebzehn", "Zehn"], e: "Ǧawf, Ḥalq, Lisān, Šafatān, Ḫayšūm.", src: "B 64" },
    { q: "Woher kommen die Dehnungsbuchstaben?", a: ["Aus dem Ǧawf – dem leeren Mund- und Rachenraum", "Aus der Kehle", "Von den Lippen", "Aus dem Nasenraum"], e: "Alif, Wāw und Yāʾ als Madd-Buchstaben haben keinen festen Punkt – sie kommen aus dem Ǧawf.", src: "B 65" },
    { q: "Welche Buchstaben kommen aus der tiefsten Stelle der Kehle?", a: ["ء ه", "ع ح", "غ خ", "ق ك"], e: "Tiefste: Hamza und Hāʾ; Mitte: ʿAyn und Ḥāʾ; nächste zum Mund: Ġayn und Ḫāʾ.", src: "B 66" },
    { q: "Woher kommt das Qāf?", a: ["Vom hintersten Zungenrücken am Gaumen", "Aus der Kehle", "Von der Zungenmitte", "Von der Zungenspitze"], e: "Qāf: hinterster Zungenteil mit dem Gaumen darüber; das Kāf etwas weiter vorn/darunter.", src: "B 67" },
    { q: "Welche drei Buchstaben kommen aus der Zungenmitte?", a: ["ج ش ي", "ط د ت", "ل ن ر", "ص ز س"], e: "Ǧīm, Šīn und Yāʾ (nicht als Dehnungsbuchstabe).", src: "B 68" },
    { q: "Woher kommt das Ḍād?", a: ["Vom Zungenrand an den oberen Backenzähnen", "Von der Zungenspitze an den Schneidezähnen", "Aus der Kehle", "Von den Lippen"], e: "Meist vom linken Zungenrand, seltener rechts oder beidseitig.", src: "B 69" },
    { q: "Woher kommen ظ ذ ث?", a: ["Zungenspitze an den Spitzen der oberen Schneidezähne", "Zungenspitze an den Zahnwurzeln", "Zungenmitte", "Lippen"], e: "Die „Zahnfleisch-/Zahnspitzenlaute“ – die Zungenspitze kommt leicht heraus.", src: "B 73" },
    { q: "Woher kommt das Fāʾ?", a: ["Innenseite der Unterlippe mit den oberen Schneidezähnen", "Zwischen beiden Lippen", "Aus der Kehle", "Von der Zungenspitze"], e: "Fāʾ ist der einzige Buchstabe mit dieser Stelle.", src: "B 74" },
    { q: "Was unterscheidet das Wāw von Bāʾ und Mīm?", a: ["Beim Wāw sind die Lippen geöffnet, bei Bāʾ und Mīm geschlossen", "Das Wāw kommt aus der Kehle", "Bāʾ und Mīm kommen aus dem Nasenraum", "Nichts"], e: "Alle drei von den Lippen – Wāw mit Öffnung, Bāʾ und Mīm mit Schließen.", src: "B 75" },
    { q: "Wie findet man den Maḫraǧ eines Buchstabens?", a: ["Sukūn geben, Hamza mit Vokal davor – wo der Laut abbricht", "Den Buchstaben laut mit Fatḥa rufen", "Im Spiegel die Zunge ansehen", "Den Buchstaben dehnen"], e: "Z. B. „ab“, „aq“: wo der Laut stoppt, ist die Austrittsstelle.", src: "B 76" },
    { q: "Woher kommt die Ġunna?", a: ["Aus dem Nasenraum (Ḫayšūm)", "Aus der Kehle", "Von den Lippen", "Aus dem Ǧawf"], e: "Die Ġunna ist ein Nasenklang ohne Mitwirkung der Zunge.", src: "B 34, 75" }
  ] },

/* ---------------------------------------------------------------- 12 */
{ id: "sakt", title: "Sakt und Pausenzeichen", ar: "السَّكْتُ وَعَلَامَاتُ الْوَقْفِ",
  intro: "Sakt ist ein kurzes Innehalten ohne Atemholen. Die Pausenzeichen im Muṣḥaf zeigen, wo man anhalten soll, darf oder nicht darf – damit der Sinn nicht verfälscht wird.",
  rules: [
    { h: "Sakt bei Ḥafṣ", ar: "السَّكْتُ",
      text: "Pflicht an vier Stellen: 1) ﴿عِوَجًا ۜ قَيِّمًا﴾ (al-Kahf 18:1–2) 2) ﴿مِنْ مَرْقَدِنَا ۜ هَٰذَا﴾ (Yā-Sīn 36:52) 3) ﴿وَقِيلَ مَنْ ۜ رَاقٍ﴾ (al-Qiyāma 75:27) 4) ﴿كَلَّا ۖ بَلْ ۜ رَانَ﴾ (al-Muṭaffifīn 83:14). Dazu ﴿مَالِيَهْ ۜ هَلَكَ﴾ (al-Ḥāqqa 69:28–29): Sakt oder Idġām." },
    { h: "Hāʾ as-Sakt", ar: "هَاءُ السَّكْتِ",
      text: "In einigen Wörtern steht ein Hāʾ mit Sukūn am Ende, das man auch beim Weiterlesen spricht: ﴿كِتَابِيَهْ﴾, ﴿حِسَابِيَهْ﴾, ﴿مَالِيَهْ﴾, ﴿سُلْطَانِيَهْ﴾, ﴿مَا هِيَهْ﴾, ﴿لَمْ يَتَسَنَّهْ﴾, ﴿فَبِهُدَاهُمُ اقْتَدِهْ﴾." },
    { h: "Pausenzeichen im Madina-Muṣḥaf", ar: "مـ · لا · ج · صلى · قلى · ∴",
      text: "مـ: anhalten ist Pflicht (sonst ändert sich der Sinn) · لا: nicht anhalten · ج: beides gleich erlaubt · صلى: weiterlesen ist besser · قلى: anhalten ist besser · ∴ ∴ (Muʿānaqa): an einer der beiden Stellen anhalten, nicht an beiden." },
    { h: "Weitere Zeichen (türkische Ausgaben, nach der Tafel)", ar: "ط · ز · ق · قف · ك · ع",
      text: "ط: anhalten ist besser, aber nicht Pflicht · ز: weiterlesen ist besser; wer keinen Atem mehr hat, darf anhalten · ق: anhalten erlaubt, weiterlesen besser · قف: „halt an“ – anhalten ist gut · ك: wie das vorige Zeichen · ع: Rukūʿ-Zeichen – ein Abschnitt endet (im Gebet ein guter Ort für den Rukūʿ)." },
    { h: "Lesezeichen (nach der Tafel)", ar: "مد · قصر · نِ · س",
      text: "مد unter einem Buchstaben: dehnen, obwohl kein Dehnungszeichen steht · قصر: nicht dehnen, wo man es erwarten würde · kleines نِ zwischen zwei Wörtern: das Tanwīn wird mit Kasra ans nächste Wort gebunden (z. B. نُوحٌ ابْنَهُ → nūḥu-ni-bnahū) · kleines س über/unter ص: das Ṣād kann auch als Sīn gelesen werden." }
  ],
  book: [
    [77, "فِي كَمْ مَوْضِعٍ يَسْكُتُ الْقَارِئُ عَلَى رِوَايَةِ حَفْصٍ؟", "Das Heft nennt fünf Stellen: al-Kahf (﴿عِوَجًا﴾), Yā-Sīn (﴿مِنْ مَرْقَدِنَا﴾), al-Qiyāma (﴿مَنْ رَاقٍ﴾), al-Muṭaffifīn (﴿بَلْ رَانَ﴾) und al-Ḥāqqa (﴿مَالِيَهْ هَلَكَ﴾)."]
  ],
  quiz: [
    { q: "Was ist Sakt?", a: ["Ein kurzes Innehalten ohne Atemholen", "Ein Anhalten mit Atemholen", "Das Überspringen eines Wortes", "Eine Dehnung von 6 Ḥarakāt"], e: "Sakt: den Laut kurz unterbrechen, ohne zu atmen, dann weiterlesen.", src: "B 77 · Tafel" },
    { q: "Welche Stelle hat bei Ḥafṣ einen Sakt?", a: ["﴿عِوَجًا ۜ قَيِّمًا﴾ (al-Kahf)", "﴿الْحَمْدُ لِلَّهِ﴾ (al-Fātiḥa)", "﴿قُلْ هُوَ اللَّهُ أَحَدٌ﴾", "﴿إِنَّا أَعْطَيْنَاكَ﴾"], e: "Die vier Stellen: al-Kahf, Yā-Sīn, al-Qiyāma, al-Muṭaffifīn.", src: "B 77" },
    { q: "Warum sagt man bei ﴿بَلْ ۜ رَانَ﴾ kein „barrān“?", a: ["Wegen des Sakt auf بَلْ gibt es keinen Idġām", "Weil Lām und Rāʾ nie verschmelzen", "Weil das Rāʾ dünn ist", "Weil بَلْ ein Verb ist"], e: "Ohne Sakt würde das Lām ins Rāʾ übergehen (wie ﴿بَلْ رَفَعَهُ﴾); der Sakt verhindert das.", src: "B 77" },
    { q: "Was bedeutet das Zeichen مـ im Muṣḥaf?", a: ["Anhalten ist Pflicht", "Nicht anhalten", "Beides erlaubt", "Weiterlesen ist besser"], e: "Waqf lāzim: wer hier weiterliest, kann den Sinn verändern.", src: "Tafel" },
    { q: "Was bedeutet das Zeichen لا?", a: ["Nicht anhalten", "Anhalten ist Pflicht", "Anhalten ist besser", "Rukūʿ"], e: "Hier nicht anhalten; wenn doch, geht man zurück und liest verbunden weiter.", src: "Tafel" },
    { q: "Was bedeuten die drei Punkte ∴ ∴ (Muʿānaqa)?", a: ["An einer der beiden Stellen anhalten, nicht an beiden", "An beiden Stellen anhalten", "An keiner anhalten", "Dreimal wiederholen"], e: "Hält man an der einen an, liest man an der anderen weiter – sonst wird der Sinn verfälscht.", src: "Tafel" },
    { q: "Was ist mit dem Hāʾ in ﴿كِتَابِيَهْ﴾ gemeint?", a: ["Hāʾ as-Sakt – es wird auch beim Weiterlesen gesprochen", "Ein Pronomen, das gedehnt wird", "Ein Tanwīn", "Ein stummes Hāʾ"], e: "Das Pausen-Hāʾ (كِتَابِيَهْ، حِسَابِيَهْ، مَالِيَهْ …) bleibt immer hörbar.", src: "Tafel" }
  ] }
  ]
};
