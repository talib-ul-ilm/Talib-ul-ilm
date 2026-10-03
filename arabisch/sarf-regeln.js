/* Ṣarf-Regeln zum Nachschlagen (nachschlagen.js). Text wie in den Lektionen: **fett**, Arabisch inline.
   form: Id einer Form aus sarf.js – dann zeigt das Nachschlagen die Formen von نَصَرَ als Beispiel.
   tags: weitere Suchwörter. */
window.SARF_REGELN = [
  { id: "wurzel", title: "Wurzel und Wägewort (Mīzān)", ar: "الْمِيزَانُ الصَّرْفِيُّ", tags: "radikal wurzel muster wazn fa'ala",
    text: [
      "Die meisten arabischen Wörter haben eine **Wurzel aus drei Buchstaben** (Radikale), z. B. ن ص ر „helfen“.",
      "Gemessen wird mit dem Wägewort **فَعَلَ**: ف ist der 1., ع der 2. und ل der 3. Radikal. نَصَرَ steht auf فَعَلَ, يَنْصُرُ auf يَفْعُلُ, نَاصِرٌ auf فَاعِلٌ.",
      "Ein Verb ohne Zusatzbuchstaben heißt **ثُلَاثِيٌّ مُجَرَّدٌ** (dreiradikalig, „nackt“)."
    ] },
  { id: "abwab", title: "Die sechs Abwāb (Verbklassen)", ar: "أَبْوَابُ الثُّلَاثِيِّ الْمُجَرَّدِ", tags: "bab abwab verbklasse vokal",
    text: [
      "Ein Bāb sagt, welchen Vokal der **2. Radikal** in Vergangenheit und Gegenwart hat:",
      "1. **نَصَرَ يَنْصُرُ** (a – u) · 2. **ضَرَبَ يَضْرِبُ** (a – i) · 3. **فَتَحَ يَفْتَحُ** (a – a)",
      "4. **عَلِمَ يَعْلَمُ** (i – a) · 5. **حَسُنَ يَحْسُنُ** (u – u) · 6. **حَسِبَ يَحْسِبُ** (i – i)",
      "Bāb 3 hat fast immer einen Kehllaut (ء ه ع ح غ خ) als 2. oder 3. Radikal. Bāb 5 sind Eigenschaften (schön sein, groß sein) und hat kein Objekt und kein Passiv. Bāb 6 ist selten.",
      "Welcher Bāb ein Verb hat, lernt man mit dem Wort – man sieht es nicht der Wurzel an."
    ] },
  { id: "madi", form: "madi", title: "Vergangenheit (Māḍī)", ar: "الْفِعْلُ الْمَاضِي", tags: "perfekt vergangenheit madi endungen",
    text: [
      "Die Vergangenheit wird mit **Endungen** gebildet, die Wurzel bleibt vorne gleich: نَصَرَ „er half“.",
      "Endungen: هُوَ ـَ · هُمَا ـَا · هُمْ ـُوا · هِيَ ـَتْ · هُمَا ـَتَا · هُنَّ ـْنَ · أَنْتَ ـْتَ · أَنْتُمَا ـْتُمَا · أَنْتُمْ ـْتُمْ · أَنْتِ ـْتِ · أَنْتُنَّ ـْتُنَّ · أَنَا ـْتُ · نَحْنُ ـْنَا",
      "Ab هُنَّ hat der 3. Radikal ein **Sukūn**: نَصَرْنَ، نَصَرْتَ، نَصَرْتُ.",
      "Beim هُمْ steht nach dem Wāw ein Alif, das man nicht spricht: نَصَرُوا."
    ] },
  { id: "mudari", form: "mudari", title: "Gegenwart / Zukunft (Muḍāriʿ)", ar: "الْفِعْلُ الْمُضَارِعُ", tags: "praesens imperfekt mudari vorsilben praefix aniatu",
    text: [
      "Die Gegenwart hat **Vorsilben** und Endungen. Die Vorsilben merkt man sich mit **أَنَيْتُ**: أ = أَنَا, ن = نَحْنُ, ي = er/sie (Pl.), ت = sie (f.) und alle „du/ihr“-Formen.",
      "Der 1. Radikal hat Sukūn, der 2. den Vokal des Bāb: يَنْصُرُ، يَضْرِبُ، يَفْتَحُ.",
      "Endungen im Nominativ (مَرْفُوعٌ): ـُ (يَنْصُرُ) · Dual ـَانِ · Plural m. ـُونَ · du (f.) ـِينَ · Plural f. ـْنَ (يَنْصُرْنَ).",
      "Mit **سَـ** oder **سَوْفَ** davor ist es eindeutig Zukunft: سَيَنْصُرُ."
    ] },
  { id: "khamsa", title: "Die fünf Verbformen", ar: "الْأَفْعَالُ الْخَمْسَةُ", tags: "fuenf verben nun faellt weg dual plural",
    text: [
      "Fünf Formen des Muḍāriʿ enden auf **Nūn**: يَفْعَلَانِ، تَفْعَلَانِ، يَفْعَلُونَ، تَفْعَلُونَ، تَفْعَلِينَ.",
      "Im Nominativ steht das Nūn. Im **Subjunktiv** (nach لَنْ) und **Jussiv** (nach لَمْ, لَا des Verbots) **fällt das Nūn weg**: لَنْ يَنْصُرُوا، لَمْ تَنْصُرِي.",
      "Das Nūn des weiblichen Plurals (يَنْصُرْنَ) gehört nicht dazu – es bleibt immer."
    ] },
  { id: "mansub", form: "lan", title: "Muḍāriʿ im Subjunktiv (manṣūb)", ar: "الْمُضَارِعُ الْمَنْصُوبُ", tags: "subjunktiv mansub nasb lan an kay hatta fatha",
    text: [
      "Nach **لَنْ** (nicht – in Zukunft), **أَنْ** (dass), **كَيْ / لِـ** (damit) und **حَتَّى** (bis) steht der Muḍāriʿ im Subjunktiv.",
      "Zeichen: **Fatḥa** statt Ḍamma (لَنْ يَنْصُرَ); bei den fünf Verbformen fällt das Nūn weg (لَنْ يَنْصُرُوا).",
      "لَنْ verneint die Zukunft: لَنْ أَذْهَبَ „ich werde nicht gehen“."
    ] },
  { id: "majzum", form: "lam", title: "Muḍāriʿ im Jussiv (maǧzūm)", ar: "الْمُضَارِعُ الْمَجْزُومُ", tags: "jussiv majzum jazm lam sukun verneinung vergangenheit",
    text: [
      "Nach **لَمْ** (nicht – Vergangenheit), **لَا** des Verbots und **لِـ** des Befehls steht der Muḍāriʿ im Jussiv.",
      "Zeichen: **Sukūn** (لَمْ يَنْصُرْ); bei den fünf Verbformen fällt das Nūn weg (لَمْ يَنْصُرُوا).",
      "لَمْ + Muḍāriʿ hat die Bedeutung der **Vergangenheit**: لَمْ يَذْهَبْ „er ging nicht“ = مَا ذَهَبَ."
    ] },
  { id: "amr", form: "amr", title: "Befehl (Amr)", ar: "فِعْلُ الْأَمْرِ", tags: "befehl imperativ amr hamzat al-wasl",
    text: [
      "Der Befehl kommt vom **Jussiv der 2. Person**: تَنْصُرْ → die Vorsilbe تَـ fällt weg → نْصُرْ.",
      "Weil man nicht mit Sukūn beginnen kann, kommt eine **Hamzat al-waṣl** davor: **اُ** wenn der 2. Radikal Ḍamma hat (اُنْصُرْ، اُكْتُبْ), sonst **اِ** (اِضْرِبْ، اِفْتَحْ، اِعْلَمْ).",
      "Formen: أَنْتَ اُنْصُرْ · أَنْتُمَا اُنْصُرَا · أَنْتُمْ اُنْصُرُوا · أَنْتِ اُنْصُرِي · أَنْتُنَّ اُنْصُرْنَ."
    ] },
  { id: "nahy", form: "nahy", title: "Verbot (Nahy)", ar: "النَّهْيُ", tags: "verbot nahy la nahiya",
    text: [
      "Verbot = **لَا** + Muḍāriʿ im **Jussiv**: لَا تَنْصُرْ „hilf nicht!“, لَا تَذْهَبُوا „geht nicht!“.",
      "Dieses لَا heißt **لَا النَّاهِيَةُ**; das لَا, das nur verneint (لَا يَذْهَبُ „er geht nicht“), ändert die Endung nicht."
    ] },
  { id: "passiv_madi", form: "madi_p", title: "Passiv der Vergangenheit", ar: "الْمَاضِي الْمَجْهُولُ", tags: "passiv majhul fu'ila vergangenheit",
    text: [
      "Muster **فُعِلَ**: Ḍamma auf dem 1. Radikal, Kasra auf dem 2.: نَصَرَ → **نُصِرَ** „ihm wurde geholfen“.",
      "Der Handelnde wird nicht genannt; das frühere Objekt wird zum **نَائِبُ الْفَاعِلِ** (Stellvertreter des Subjekts, Nominativ): كُتِبَ الدَّرْسُ.",
      "Passiv bilden nur Verben mit Objekt (transitive Verben)."
    ] },
  { id: "passiv_mudari", form: "mudari_p", title: "Passiv der Gegenwart", ar: "الْمُضَارِعُ الْمَجْهُولُ", tags: "passiv majhul yuf'alu gegenwart",
    text: [
      "Muster **يُفْعَلُ**: Ḍamma auf der Vorsilbe, Fatḥa auf dem 2. Radikal: يَنْصُرُ → **يُنْصَرُ** „ihm wird geholfen“.",
      "Das gilt für alle Abwāb gleich: يُضْرَبُ، يُفْتَحُ، يُعْلَمُ."
    ] },
  { id: "fail", form: "fail", title: "Partizip Aktiv (Ism al-fāʿil)", ar: "اسْمُ الْفَاعِلِ", tags: "partizip aktiv ism fail faa'il taeter",
    text: [
      "Der Tätige – Muster **فَاعِلٌ**: نَاصِرٌ „Helfer“, كَاتِبٌ „Schreiber“, عَالِمٌ „Wissender“.",
      "Es wird wie ein Nomen gebeugt: نَاصِرَانِ، نَاصِرُونَ، نَاصِرَةٌ، نَاصِرَاتٌ."
    ] },
  { id: "maful", form: "maful", title: "Partizip Passiv (Ism al-mafʿūl)", ar: "اسْمُ الْمَفْعُولِ", tags: "partizip passiv ism maful maf'ul betroffener",
    text: [
      "Der Betroffene – Muster **مَفْعُولٌ**: مَنْصُورٌ „dem geholfen wird“, مَكْتُوبٌ „geschrieben, Brief“, مَعْلُومٌ „bekannt“.",
      "Nur von Verben mit Objekt. Gebeugt wie ein Nomen: مَنْصُورَانِ، مَنْصُورُونَ، مَنْصُورَةٌ."
    ] },
  { id: "idgham", title: "Gleiche Buchstaben treffen sich", ar: "الْإِدْغَامُ فِي الصَّرْفِ", tags: "idgham shadda verdopplung gleiche buchstaben",
    text: [
      "Endet die Wurzel mit dem Buchstaben, mit dem die Endung beginnt, verschmelzen beide zu einem Buchstaben mit **Šadda**:",
      "سَكَتَ + ـْتُ → **سَكَتُّ** (nicht سَكَتْتُ) · حَسُنَ + ـْنَ → **حَسُنَّ** · سَكَنَ + ـْنَا → **سَكَنَّا**."
    ] },
  { id: "personen", title: "Die 14 Personen (Reihenfolge der Tabelle)", ar: "الضَّمَائِرُ", tags: "personen pronomen damir reihenfolge emsile",
    text: [
      "Die Tabellen folgen dem Emsile: **هُوَ، هُمَا، هُمْ** (er, sie beide, sie m.) · **هِيَ، هُمَا، هُنَّ** (sie, sie beide f., sie f.) · **أَنْتَ، أَنْتُمَا، أَنْتُمْ** · **أَنْتِ، أَنْتُمَا، أَنْتُنَّ** · **أَنَا، نَحْنُ**.",
      "Im Arabischen gibt es neben Singular und Plural den **Dual** (zwei) und bei „du/ihr/sie“ eigene weibliche Formen."
    ] }
];
