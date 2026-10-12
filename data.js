/* Fiqh-Inhalte nach „Wasīlatu ṭ-Ṭalab“ (وسيلة الطلب) von Mullā al-Ḥanafī al-Aḥsāʾī (gest. 1270 n. H.) –
   eine kurze hanafitische Abhandlung über das, worüber der Verantwortliche (mukallaf) nicht unwissend sein darf.
   Haupttext und Erläuterungen der Ausgabe (Abschnitte mit note: true, mit den klassischen Werken, auf die sie
   sich stützen). Aufbau wie im Buch: Glaubensgrundlagen, Reinheit, Gebet, Zakāt, Fasten, Ḥaǧǧ.
   Format: FIQH_TOPICS = [{ id, title, ar, lessons, intro, sections: [{ h, note?, li: [...] }] }],
   FIQH_QUESTIONS = [{ t: Themen-id, s: Abschnitt, lvl: 1–3, q, a: [richtig, falsch, falsch, falsch], c: 0, e }]. */

window.FIQH_TOPICS = [];
window.FIQH_QUESTIONS = [];

/* Helfer, mit denen weitere Dateien Inhalte ergänzen können. */
window.FIQH = {
  topic: function (id) {
    for (var i = 0; i < window.FIQH_TOPICS.length; i++) if (window.FIQH_TOPICS[i].id === id) return window.FIQH_TOPICS[i];
    return null;
  },
  addSections: function (id, sections) {
    var t = this.topic(id);
    if (!t) throw new Error("Unbekanntes Thema: " + id);
    sections.forEach(function (s) { t.sections.push(s); });
  },
  addTopic: function (topic) { window.FIQH_TOPICS.push(topic); },
  addQuestions: function (qs) { qs.forEach(function (q) { window.FIQH_QUESTIONS.push(q); }); }
};

(function () {
  var cur = null;
  function topic(t) { window.FIQH_TOPICS.push(t); cur = t.id; }
  /* q(Abschnitt, Niveau, Frage, [richtig, falsch, falsch, falsch], Erklärung) */
  function q(s, lvl, text, a, e) { window.FIQH_QUESTIONS.push({ t: cur, s: s, lvl: lvl, q: text, a: a, c: 0, e: e }); }

/* ================= Einleitung ================= */

topic({ id: "buch", title: "Das Buch und sein Autor", ar: "وسيلة الطلب", lessons: "Einleitung",
  intro: "Wer Mullā al-Ḥanafī al-Aḥsāʾī war und wofür „Wasīlatu ṭ-Ṭalab“ geschrieben wurde: eine kurze Abhandlung für den Anfang des Fiqh-Studiums.",
  sections: [
    { h: "Der Autor", li: [
      "Abū Bakr ibn Muḥammad ibn ʿUmar al-Aḥsāʾī, bekannt als **Mullā al-Ḥanafī al-Aḥsāʾī** – Gelehrter, Dichter und Rechtsgelehrter (faqīh) aus dem Gebiet al-Aḥsāʾ im Osten der Arabischen Halbinsel.",
      "Geboren **1198 n. H. / 1784 n. Chr.** in der Stadt **al-Hufūf** (Stadtteil al-Kūf). Sein Vater starb früh; er wuchs bei seiner Mutter in einer stark islamisch geprägten Erziehung auf.",
      "Er lernte schon als Kind Lesen, Schreiben und den Qurʾān und hatte den **Qurʾān vor dem zehnten Lebensjahr auswendig** gelernt.",
      "Zu seinen Lehrern gehörten Gelehrte aus al-Aḥsāʾ und dem Ḥiǧāz – Ḥanafiten, Šāfiʿiten und Mālikiten.",
      "Mit der Lehrerlaubnis seiner Lehrer unterrichtete er an der **al-Madrasa aš-Šalhūbiyya** in seiner Heimat und verfasste neben diesem Text **über 50 weitere Schriften** im Fiqh, darunter Erläuterungen zu Werken anderer Gelehrter.",
      "Er starb **1270 n. H. / 1853 n. Chr.** nach dem Ḥaǧǧ in Makka und wurde auf dem Friedhof **al-Muʿallā** begraben."
    ]},
    { h: "Das Buch", li: [
      "„Wasīlatu ṭ-Ṭalab“ (**„Das Mittel des Strebens“**) ist nach den Worten des Autors „eine kurze Abhandlung im Fiqh – von dem, worüber der Verantwortliche (mukallaf) an Urteilen nicht unwissend sein darf“.",
      "Es ist ein Werk für den **Anfang des Studiums**: Es sammelt die Hauptthemen, die für jeden praktizierenden Muslim im Alltag wichtig sind, und legt ein Grundgerüst, auf dem spätere, tiefere Werke aufbauen.",
      "Es folgt der **hanafitischen Rechtsschule**.",
      "Aufbau: Einleitung in die Glaubensfundamente (mit Ridda, großen Sünden und Reue), dann das Buch der **Reinheit**, des **Gebets**, der **Zakāt**, des **Fastens** und der **Pilgerfahrt (Ḥaǧǧ)**."
    ]}
  ] });
q(0, 1, "Unter welchem Namen ist der Autor von „Wasīlatu ṭ-Ṭalab“ bekannt?",
  ["Mullā al-Ḥanafī al-Aḥsāʾī", "Imām aš-Šurunbulālī", "Ibn ʿĀbidīn", "Burhān ad-Dīn al-Marġīnānī"],
  "Abū Bakr ibn Muḥammad ibn ʿUmar al-Aḥsāʾī ist als Mullā al-Ḥanafī al-Aḥsāʾī bekannt. Die anderen sind Autoren hanafitischer Werke, die in den Erläuterungen zitiert werden.");
q(1, 1, "Wofür hat der Autor „Wasīlatu ṭ-Ṭalab“ nach eigenen Worten geschrieben?",
  ["Für das, worüber der Verantwortliche (mukallaf) an Urteilen nicht unwissend sein darf", "Für die Richter, die zwischen den Madhabs entscheiden", "Als ausführliche Sammlung aller Meinungsverschiedenheiten", "Als Kommentar zu einem Hadith-Werk"],
  "Es ist „eine kurze Abhandlung im Fiqh – von dem, worüber der Verantwortliche an Urteilen nicht unwissend sein darf“.");
q(1, 1, "Welcher Rechtsschule folgt „Wasīlatu ṭ-Ṭalab“?",
  ["der hanafitischen", "der šāfiʿitischen", "der mālikitischen", "der ḥanbalitischen"],
  "Der Autor ist Ḥanafit; die Erläuterungen stützen sich auf hanafitische Werke wie Marāqī l-Falāḥ und al-Iḫtiyār.");
q(0, 2, "Wann hatte Mullā al-Ḥanafī den Qurʾān auswendig gelernt?",
  ["noch vor seinem zehnten Lebensjahr", "mit zwanzig Jahren in Makka", "erst nach seiner Lehrerlaubnis", "während seines Ḥaǧǧ"],
  "Seine Mutter ließ ihn früh bei Lehrern sitzen; den Qurʾān vollendete er, bevor er zehn Jahre alt war.");
q(0, 2, "Wo starb Mullā al-Ḥanafī al-Aḥsāʾī?",
  ["in Makka, nach dem Ḥaǧǧ", "in al-Hufūf, seiner Geburtsstadt", "in Kairo an der al-Azhar", "in Damaskus"],
  "Er starb 1270 n. H. nach der Pilgerfahrt in Makka und wurde auf dem Friedhof al-Muʿallā begraben.");
q(0, 3, "An welcher Schule unterrichtete Mullā al-Ḥanafī in seiner Heimat?",
  ["an der al-Madrasa aš-Šalhūbiyya", "an der al-Madrasa an-Niẓāmiyya", "an der Madrasa as-Sulaymāniyya", "an der Dār al-ʿUlūm Deoband"],
  "Nachdem ihm seine Lehrer die Lehrerlaubnis gegeben hatten, lehrte er an der al-Madrasa aš-Šalhūbiyya.");
q(1, 2, "Mit welchem Buch beginnt der Fiqh-Teil von „Wasīlatu ṭ-Ṭalab“ nach der Einleitung in die Glaubensfundamente?",
  ["mit dem Buch der Reinheit", "mit dem Buch des Gebets", "mit dem Buch der Zakāt", "mit dem Buch des Ḥaǧǧ"],
  "Nach der Einleitung (Glaube, Ridda, große Sünden, Reue) folgen Reinheit, Gebet, Zakāt, Fasten und Ḥaǧǧ.");

/* ================= Die Rechtsurteile (Tabelle der Nizamiya) ================= */

topic({ id: "ahkam", title: "Die Rechtsurteile (Aḥkām at-Taklīf)", ar: "الأحكام التكليفية", lessons: "Tabelle der Rechtsurteile", src: "Nizamiya – Aḥkām at-Taklīf",
  intro: "Die Begriffe, mit denen der Fiqh jede Handlung einordnet – auf einer Skala von Farḍ (Pflicht) über Mubāḥ (erlaubt) bis Ḥarām (verboten). Sie kommen in jedem Kapitel von „Wasīlatu ṭ-Ṭalab“ vor.",
  sections: [
    { h: "Die Skala: von der Pflicht bis zum Verbot", scale: [
      ["Farḍ", "Pflicht", "#3f9a3a"], ["Wāǧib", "erforderlich · Farḍ ʿamalī", "#5aac55"], ["Sunna muʾakkada", "betonte Sunna", "#5bb38a"],
      ["Sunna ġayr muʾakkada", "nicht betonte Sunna", "#5aa9a4"], ["Mustaḥabb · Nafl · Mandūb · Adab · Taṭawwuʿ", "empfohlen / zusätzlich", "#6a9fbd"],
      ["Ḥalāl · Mubāḥ", "erlaubt", "#8fa3c9"], ["Tark al-awlā", "Unterlassung des Besseren", "#c9a16a"], ["Makrūh tanzīhan", "leicht verpönt", "#e3a92b"],
      ["Isāʾa", "Missetat", "#e07b24"], ["Makrūh taḥrīman", "verbotsnahe verpönt", "#d0501f"], ["Ḥarām", "verboten", "#b8261e"]], li: [
      "Die Urteile stehen auf einer Linie – vom Stärksten auf der Seite des Gebotenen bis zum Stärksten auf der Seite des Verbotenen:",
      "**Farḍ** (Pflicht) → **Wāǧib** (erforderlich) → **Sunna muʾakkada** (betonte Sunna) → **Sunna ġayr muʾakkada** (nicht betonte Sunna) → **Mustaḥabb** (empfohlen) → **Ḥalāl / Mubāḥ** (erlaubt) → **Tark al-awlā** (Unterlassung des Besseren) → **Makrūh tanzīhan** (leicht verpönt) → **Isāʾa** (Missetat) → **Makrūh taḥrīman** (verbotsnahe verpönt) → **Ḥarām** (verboten).",
      "In der **Mitte** steht **Ḥalāl / Mubāḥ**: weder geboten noch verboten."
    ]},
    { h: "Die Seite des Gebotenen", li: [
      "**Farḍ** (Pflicht) – das stärkste Gebot. Beispiele aus dem Buch: die Säulen der Gebetswaschung, die Zakāt, der Ḥaǧǧ einmal im Leben.",
      "**Wāǧib** (erforderlich), auch **Farḍ ʿamalī** (praktische Pflicht) genannt – in der Praxis wie eine Pflicht. Beispiele: das Witr-Gebet, die Fātiḥa im Gebet, die Reue von jeder Sünde.",
      "**Sunna muʾakkada** (betonte Sunna) – z. B. die zwei Rakʿa vor dem Morgengebet, Aḏān und Iqāma für die Pflichtgebete.",
      "**Sunna ġayr muʾakkada** (nicht betonte Sunna).",
      "**Mustaḥabb / Nafl / Mandūb / Adab / Taṭawwuʿ** (empfohlen / zusätzlich) – z. B. das Suḥūr und sein Verspäten, vier Rakʿa vor dem Nachmittagsgebet."
    ]},
    { h: "Die Mitte", li: [
      "**Ḥalāl / Mubāḥ** (erlaubt): Die Handlung ist weder geboten noch verpönt."
    ]},
    { h: "Die Seite des Verbotenen", li: [
      "**Tark al-awlā** (die Unterlassung des Besseren) – das Schwächste auf dieser Seite.",
      "**Makrūh tanzīhan** (leicht verpönt) – z. B. das Gebet mit einer Unreinheit unter der Menge eines Dirham.",
      "**Isāʾa** (Missetat) – z. B. mit genau der Menge eines Dirham an Unreinheit zu beten.",
      "**Makrūh taḥrīman** (verbotsnahe verpönt) – z. B. im Gebet wie ein Hund sitzen (iqʿāʾ), intensives Küssen beim Fasten.",
      "**Ḥarām** (verboten) – das stärkste Verbot, z. B. Wein, Unzucht, unrechtmäßiges Töten."
    ]},
    { h: "Gegenstücke auf der Skala", li: [
      "Die Skala ist **spiegelbildlich** um das Mubāḥ angeordnet; gleich weit von der Mitte stehen sich gegenüber:",
      "**Farḍ ↔ Ḥarām** · **Wāǧib ↔ Makrūh taḥrīman** · **Sunna muʾakkada ↔ Isāʾa** · **Sunna ġayr muʾakkada ↔ Makrūh tanzīhan** · **Mustaḥabb ↔ Tark al-awlā**."
    ]},
    { h: "Anmerkungen", li: [
      "Handlungen mit **demselben Urteil** können sich untereinander noch in ihrer **Stärke** unterscheiden.",
      "Beispiel: Die Sunna vor dem **Morgengebet** und die nach dem **Nachtgebet** sind beide **sunna muʾakkada** – die vor dem Morgengebet hat aber einen höheren Rang und steht der Priorität nach **fast auf der Stufe des Wāǧib**.",
      "Manchmal werden **nafl / nāfila** (Pl. **nawāfil**), **sunna**, **mandūb** und **mustaḥabb** für **alle empfohlenen Handlungen** gebraucht – unabhängig von ihrer Stärke (von der betonten Sunna bis zum Mustaḥabb)."
    ]}
  ] });
q(0, 1, "Welches Urteil steht in der Mitte der Skala der Rechtsurteile?",
  ["Ḥalāl / Mubāḥ (erlaubt)", "Sunna muʾakkada", "Makrūh tanzīhan", "Wāǧib"],
  "Die Skala reicht von Farḍ bis Ḥarām; in der Mitte steht Ḥalāl / Mubāḥ – weder geboten noch verboten.");
q(0, 1, "Was ist das stärkste Urteil auf der Seite des Gebotenen?",
  ["Farḍ (Pflicht)", "Wāǧib (erforderlich)", "Sunna muʾakkada", "Mustaḥabb"],
  "Ganz links auf der Skala steht Farḍ, danach Wāǧib, Sunna muʾakkada, Sunna ġayr muʾakkada und Mustaḥabb.");
q(0, 1, "Was ist das stärkste Urteil auf der Seite des Verbotenen?",
  ["Ḥarām (verboten)", "Makrūh taḥrīman", "Isāʾa", "Makrūh tanzīhan"],
  "Ganz rechts steht Ḥarām; davor Makrūh taḥrīman, Isāʾa, Makrūh tanzīhan und Tark al-awlā.");
q(1, 1, "Was bedeutet „Wāǧib“?",
  ["erforderlich – in der Praxis wie eine Pflicht (farḍ ʿamalī)", "erlaubt", "leicht verpönt", "empfohlen, aber nicht betont"],
  "Wāǧib steht direkt nach Farḍ und heißt auch Farḍ ʿamalī, praktische Pflicht.");
q(1, 2, "Wie heißt das Wāǧib noch?",
  ["Farḍ ʿamalī (praktische Pflicht)", "Sunna muʾakkada", "Tark al-awlā", "Mandūb"],
  "Auf der Tabelle steht unter Wāǧib: „Farḍ ʿAmalī (praktisch Pflicht)“.");
q(1, 1, "Was bedeutet „Sunna muʾakkada“?",
  ["betonte Sunna", "nicht betonte Sunna", "Pflicht", "verbotsnahe verpönt"],
  "Muʾakkada heißt „bekräftigt, betont“ – Sunna muʾakkada ist die betonte Sunna.");
q(1, 2, "Welche Begriffe stehen auf der Tabelle zusammen beim „Mustaḥabb“?",
  ["Nafl, Mandūb, Adab, Taṭawwuʿ (empfohlen / zusätzlich)", "Farḍ und Wāǧib", "Isāʾa und Makrūh", "Ḥalāl und Mubāḥ"],
  "Mustaḥabb / Nafl / Mandūb / Adab / Taṭawwuʿ – das Empfohlene bzw. Zusätzliche.");
q(3, 1, "Was bedeutet „Makrūh taḥrīman“?",
  ["verbotsnahe verpönt", "leicht verpönt", "die Unterlassung des Besseren", "erlaubt"],
  "Makrūh taḥrīman steht direkt vor dem Ḥarām: verbotsnahe verpönt.");
q(3, 1, "Was bedeutet „Makrūh tanzīhan“?",
  ["leicht verpönt", "verbotsnahe verpönt", "verboten", "betonte Sunna"],
  "Makrūh tanzīhan ist das leicht Verpönte – näher am Erlaubten als am Verbotenen.");
q(3, 1, "Was bedeutet „Isāʾa“?",
  ["Missetat", "Pflicht", "Unterlassung des Besseren", "Empfehlung"],
  "Isāʾa (Missetat) steht zwischen Makrūh tanzīhan und Makrūh taḥrīman.");
q(3, 1, "Was bedeutet „Tark al-awlā“?",
  ["die Unterlassung des Besseren", "das Verbotene", "die betonte Sunna", "die praktische Pflicht"],
  "Tark al-awlā ist das schwächste Urteil auf der Seite des Verbotenen: man lässt das Bessere.");
q(0, 2, "Welche Reihenfolge ist auf der Seite des Gebotenen richtig (vom Stärksten an)?",
  ["Farḍ – Wāǧib – Sunna muʾakkada – Sunna ġayr muʾakkada – Mustaḥabb", "Wāǧib – Farḍ – Mustaḥabb – Sunna muʾakkada – Sunna ġayr muʾakkada", "Farḍ – Sunna muʾakkada – Wāǧib – Mustaḥabb – Sunna ġayr muʾakkada", "Sunna muʾakkada – Farḍ – Wāǧib – Mustaḥabb – Sunna ġayr muʾakkada"],
  "Vom Stärksten zur Mitte: Farḍ, Wāǧib, Sunna muʾakkada, Sunna ġayr muʾakkada, Mustaḥabb – dann Mubāḥ.");
q(0, 2, "Welche Reihenfolge ist auf der Seite des Verbotenen richtig (von der Mitte bis zum Ḥarām)?",
  ["Tark al-awlā – Makrūh tanzīhan – Isāʾa – Makrūh taḥrīman – Ḥarām", "Makrūh tanzīhan – Tark al-awlā – Makrūh taḥrīman – Isāʾa – Ḥarām", "Isāʾa – Tark al-awlā – Makrūh tanzīhan – Makrūh taḥrīman – Ḥarām", "Tark al-awlā – Isāʾa – Makrūh taḥrīman – Makrūh tanzīhan – Ḥarām"],
  "Von der Mitte weg: Tark al-awlā, Makrūh tanzīhan, Isāʾa, Makrūh taḥrīman, Ḥarām.");
q(0, 2, "Was ist schwerer: Isāʾa oder Makrūh tanzīhan?",
  ["Isāʾa – sie steht näher am Ḥarām", "Makrūh tanzīhan", "beide sind gleich", "keines von beiden ist verpönt"],
  "Auf der Skala: … Makrūh tanzīhan → Isāʾa → Makrūh taḥrīman → Ḥarām. Isāʾa ist also schwerer.");
q(4, 2, "Welches Urteil ist das Gegenstück zum Wāǧib?",
  ["Makrūh taḥrīman", "Makrūh tanzīhan", "Isāʾa", "Tark al-awlā"],
  "Gleich weit von der Mitte: Farḍ ↔ Ḥarām, Wāǧib ↔ Makrūh taḥrīman, Sunna muʾakkada ↔ Isāʾa, Sunna ġayr muʾakkada ↔ Makrūh tanzīhan, Mustaḥabb ↔ Tark al-awlā.");
q(4, 3, "Welches Urteil steht der Sunna muʾakkada auf der anderen Seite gegenüber?",
  ["Isāʾa (Missetat)", "Makrūh taḥrīman", "Ḥarām", "Tark al-awlā"],
  "Sunna muʾakkada ist das dritte Urteil von links, Isāʾa das dritte von rechts.");
q(4, 3, "Welches Urteil steht dem Mustaḥabb gegenüber?",
  ["Tark al-awlā (Unterlassung des Besseren)", "Makrūh tanzīhan", "Isāʾa", "Ḥarām"],
  "Beide stehen direkt neben dem Mubāḥ – das eine auf der Seite des Gebotenen, das andere auf der Seite des Verbotenen.");
q(5, 2, "Die Sunna vor dem Morgengebet und die nach dem Nachtgebet sind beide Sunna muʾakkada. Was gilt?",
  ["Die vor dem Morgengebet hat einen höheren Rang – fast wie ein Wāǧib", "Beide sind in jeder Hinsicht gleich stark", "Die nach dem Nachtgebet ist stärker", "Die vor dem Morgengebet ist eigentlich Farḍ"],
  "Handlungen mit demselben Urteil können sich in ihrer Stärke unterscheiden: Die Sunna des Faǧr wird fast den wāǧib-Handlungen gleichgestellt.");
q(5, 2, "Wofür werden „nafl“, „sunna“, „mandūb“ und „mustaḥabb“ manchmal allgemein gebraucht?",
  ["für alle empfohlenen Handlungen – unabhängig von ihrer Stärke", "nur für Pflichtgebete", "für alles Verpönte", "nur für Handlungen beim Ḥaǧǧ"],
  "Manchmal werden diese Begriffe für alles Empfohlene verwendet, von der betonten Sunna bis zum Mustaḥabb.");
q(5, 3, "Wie lautet der Plural von „nāfila“?",
  ["nawāfil", "nāfilāt", "anfāl", "nufūl"],
  "nafl / nāfila, Plural nawāfil – „zusätzliche“ Handlungen und Gebete.");
q(1, 2, "Welches Urteil hat das Witr-Gebet nach „Wasīlatu ṭ-Ṭalab“?",
  ["Wāǧib", "Farḍ", "Sunna ġayr muʾakkada", "Mustaḥabb"],
  "„Das Witr-Gebet ist wāǧib und besteht aus drei Gebetseinheiten mit einem Taslīm.“");
q(3, 2, "Im Gebet wie ein Hund sitzen (iqʿāʾ) – welches Urteil nennt die Erläuterung?",
  ["Makrūh taḥrīman (verbotsnahe verpönt)", "Mubāḥ", "Tark al-awlā", "Ḥarām"],
  "Das iqʿāʾ ist verbotsnahe verpönt: mit dem Gesäß auf dem Boden, die Knie zur Brust gezogen, die Hände auf dem Boden.");
q(3, 3, "Mit genau der Menge eines Dirham an Unreinheit beten – wie stuft Ibn ʿĀbidīn das ein?",
  ["als Isāʾa (Missetat) – das Gebet ist aber gültig", "als Ḥarām – das Gebet ist ungültig", "als Mubāḥ", "als Sunna"],
  "Genau ein Dirham hindert das Gebet nicht, es wäre aber eine Missetat; darunter ist es leicht verpönt.");
q(2, 2, "Was gilt für eine Handlung, die Ḥalāl / Mubāḥ ist?",
  ["sie ist erlaubt – weder geboten noch verpönt", "sie ist eine leichte Pflicht", "sie ist leicht verpönt", "sie ist eine betonte Sunna"],
  "Mubāḥ steht genau in der Mitte der Skala.");

/* ================= Glaubensgrundlagen ================= */

topic({ id: "iman", title: "Islām und Īmān", ar: "أركان الإسلام والإيمان", lessons: "Einleitung in die Glaubensfundamente",
  intro: "Die fünf Säulen des Islām, die sechs Säulen des Glaubens und was der Glaube an jede von ihnen bedeutet – dazu der vollkommene Glaube.",
  sections: [
    { h: "Die fünf Säulen des Islām", li: [
      "1. Das **Bezeugnis**, dass es keinen Gott außer Allāh gibt und dass Muḥammad ﷺ der Gesandte Allāhs ist.",
      "2. Das Verrichten des **Gebets**.",
      "3. Das Entrichten der **Zakāt**.",
      "4. Das **Fasten** im Monat Ramaḍān.",
      "5. Die **Pilgerfahrt (ḥaǧǧ)** zum Hause Allāhs für den, der sich auf den Weg zu ihm begeben kann."
    ]},
    { h: "Die sechs Säulen des Īmān", li: [
      "Der Glaube ist, dass du glaubst an **Allāh**, **Seine Engel**, **Seine Bücher**, **Seine Gesandten**, den **Jüngsten Tag** und an die **Vorherbestimmung** – dass ihr Gutes und ihr Schlechtes von Allāh, dem Erhabenen, kommt."
    ]},
    { h: "Was der Glaube an jede Säule bedeutet", li: [
      "**An Allāh**: mit Überzeugung glauben, dass Er **einzig** ist und keinen Partner hat, **urewig** ohne Anfang, **beständig** ohne Ende, und dass Er **lebendig, sprechend, allwissend, wollend und allmächtig** ist: „Nichts gleicht Seinem Gleichnis, und Er ist der Allhörende, der Allsehende.“ (aš-Šūrā 42:11)",
      "**An die Engel**: dass sie die Diener Allāhs sind, die Ihm **keinen Augenblick ungehorsam** sind.",
      "**An die Bücher**: dass alles, was Allāh an Büchern herabgesandt hat, Seine **urewige Rede (kalām)** ist und **nicht erschaffen**.",
      "**An die Gesandten**: dass alle Gesandten Allāhs **mit der Wahrheit** zur Schöpfung entsandt wurden.",
      "**An den Jüngsten Tag**: dass Allāh die Schöpfung nach dem Tod **auferweckt** und zur **Rechenschaft** zieht – und dass die **Befragung durch Munkar und Nakīr**, die **Strafe des Grabes**, die **Brücke**, die **Waage**, das **Becken** und die **Fürsprache** wahr sind, ebenso Paradies und Höllenfeuer.",
      "**An die Vorherbestimmung**: dass alles, was im Universum geschieht – gut oder schlecht –, durch die **Bestimmung Allāhs** geschieht."
    ]},
    { h: "Der vollkommene Glaube", li: [
      "Der vollkommene Glaube ist die **Bestätigung mit der Zunge**, das **Bewahrheiten mit dem Herzen** und das **Handeln nach den Säulen**.",
      "Wer die Bestätigung (mit der Zunge) unterlässt, ist ein **Ungläubiger (kāfir)**.",
      "Wer das Bewahrheiten (mit dem Herzen) unterlässt, ist ein **Heuchler (munāfiq)**.",
      "Wer das Handeln (nach den Säulen) unterlässt, ist ein **Frevler (fāsiq)**."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "**aš-Šūrā 42:11** ist wie die Redeweise „Jemand wie du tut so etwas nicht“: Schon einem angenommenen Gleichnis Allāhs wird jede Ähnlichkeit mit der Schöpfung abgesprochen – wie viel mehr Ihm selbst. Das ist eine **Übersteigerung in der Verneinung (mubālaġa fī n-nafy)** (al-Bayḍāwī, Anwāru t-Tanzīl).",
      "Mit den Büchern als Rede Allāhs ist ihre **ursprüngliche Offenbarung** gemeint, nicht die heutigen Ausgaben früherer Schriften: Verfälscht wurden die geschriebenen Buchstaben und Texte, nicht die Rede Allāhs selbst.",
      "**Munkar und Nakīr** sind die Namen der Engel, die für die Befragung im Grab zuständig sind.",
      "Gemeint ist hier die **Vollkommenheit des Glaubens (kamālu l-īmān)**, die auch die Taten des Gehorsams als Früchte des Glaubens einschließt – nicht seine bloße Wirklichkeit (**muṭlaqu l-īmān**), um die es in ʿAqīda- und Kalām-Texten meist geht."
    ]}
  ] });
q(0, 1, "Wie viele Säulen hat der Islām?",
  ["fünf", "sechs", "vier", "sieben"],
  "Bezeugnis, Gebet, Zakāt, Fasten im Ramaḍān und Ḥaǧǧ für den, der dazu imstande ist.");
q(0, 1, "Was gehört NICHT zu den fünf Säulen des Islām?",
  ["der Glaube an die Engel", "das Verrichten des Gebets", "das Entrichten der Zakāt", "das Fasten im Ramaḍān"],
  "Der Glaube an die Engel ist eine Säule des Īmān, nicht des Islām.");
q(0, 1, "Für wen gehört die Pilgerfahrt zu den Säulen des Islām?",
  ["für den, der sich auf den Weg zum Hause Allāhs begeben kann", "für jeden Muslim ohne Ausnahme", "nur für die Bewohner Makkas", "nur für Gelehrte"],
  "Die fünfte Säule ist der Ḥaǧǧ zum Hause Allāhs „für denjenigen, der sich zu ihm auf den Weg begeben kann“.");
q(1, 1, "Wie viele Säulen hat der Īmān (Glaube)?",
  ["sechs", "fünf", "vier", "sieben"],
  "Allāh, Seine Engel, Bücher, Gesandten, der Jüngste Tag und die Vorherbestimmung.");
q(1, 1, "Welche Säule gehört zum Īmān?",
  ["der Glaube an die Vorherbestimmung – ihr Gutes und Schlechtes kommt von Allāh", "das Fasten im Ramaḍān", "das Entrichten der Zakāt", "die Pilgerfahrt"],
  "Die sechste Säule des Glaubens ist die Vorherbestimmung (qadar); Fasten, Zakāt und Ḥaǧǧ sind Säulen des Islām.");
q(2, 1, "Was bedeutet der Glaube an die Engel?",
  ["dass sie Diener Allāhs sind, die Ihm keinen Augenblick ungehorsam sind", "dass sie Allāh nur manchmal gehorchen", "dass sie wie die Menschen zwischen Gut und Böse wählen", "dass sie die Bücher selbst verfasst haben"],
  "Der Glaube an die Engel: mit Überzeugung glauben, dass sie die Diener Allāhs sind, die Ihm keinen Augenblick ungehorsam sind.");
q(2, 2, "Wie wird die Rede Allāhs beschrieben, die Er in Seinen Büchern herabgesandt hat?",
  ["urewig und nicht erschaffen", "erschaffen, aber vollkommen", "von den Engeln formuliert", "nur für ihre Zeit gültig, danach erschaffen"],
  "Alles, was Allāh an Büchern herabgesandt hat, ist Seine urewige Rede (kalām) und nicht erschaffen.");
q(2, 2, "Welche Eigenschaften Allāhs nennt das Buch beim Glauben an Allāh?",
  ["lebendig, sprechend, allwissend, wollend und allmächtig", "einzig, aber mit einem Anfang", "urewig, aber nicht allwissend", "beständig, aber an einen Ort gebunden"],
  "Allāh ist einzig ohne Partner, urewig ohne Anfang, beständig ohne Ende, lebendig, sprechend, allwissend, wollend und allmächtig.");
q(2, 1, "Wer sind Munkar und Nakīr?",
  ["die Engel, die im Grab befragen", "zwei Propheten vor Mūsā", "die Wächter des Paradieses", "zwei Gefährten des Propheten ﷺ"],
  "Zum Glauben an den Jüngsten Tag gehört, dass die Befragung durch Munkar und Nakīr wahr ist – sie sind die Engel der Grabbefragung.");
q(2, 2, "Was gehört laut Buch zum Glauben an den Jüngsten Tag?",
  ["die Grabesstrafe, die Brücke, die Waage, das Becken und die Fürsprache sind wahr", "dass nur die Seele auferweckt wird", "dass es keine Rechenschaft gibt", "dass das Paradies nur ein Gleichnis ist"],
  "Allāh erweckt die Schöpfung nach dem Tod und zieht sie zur Rechenschaft; Befragung, Grabesstrafe, Brücke, Waage, Becken, Fürsprache, Paradies und Hölle sind wahr.");
q(3, 1, "Woraus besteht der vollkommene Glaube?",
  ["Bestätigung mit der Zunge, Bewahrheiten mit dem Herzen, Handeln nach den Säulen", "nur aus dem Bewahrheiten mit dem Herzen", "nur aus Taten", "aus Wissen und Wohlstand"],
  "Der vollkommene Glaube: Bestätigung durch die Zunge, Bewahrheiten mit dem Herzen und das Handeln nach den Säulen.");
q(3, 2, "Wer die Bestätigung mit der Zunge unterlässt, ist nach dem Buch ein …",
  ["Ungläubiger (kāfir)", "Heuchler (munāfiq)", "Frevler (fāsiq)", "Neuerer (mubtadiʿ)"],
  "Wer die Bestätigung unterlässt, ist kāfir; wer das Bewahrheiten unterlässt, munāfiq; wer das Handeln unterlässt, fāsiq.");
q(3, 2, "Wer das Bewahrheiten mit dem Herzen unterlässt, ist ein …",
  ["Heuchler (munāfiq)", "Ungläubiger (kāfir) – aber nur äußerlich", "Frevler (fāsiq)", "Unwissender (ǧāhil)"],
  "Wer mit der Zunge bestätigt, aber im Herzen nicht bewahrheitet, ist ein Heuchler (munāfiq).");
q(3, 2, "Wer das Handeln nach den Säulen unterlässt, ist ein …",
  ["Frevler (fāsiq)", "Ungläubiger (kāfir)", "Heuchler (munāfiq)", "Abtrünniger (murtadd)"],
  "Wer glaubt und bestätigt, aber nicht danach handelt, ist ein Frevler (fāsiq) – er verlässt damit nicht den Islām.");
q(4, 3, "Was ist mit „kamālu l-īmān“ gemeint?",
  ["die Vollkommenheit des Glaubens, die auch die Taten des Gehorsams einschließt", "die bloße Wirklichkeit des Glaubens ohne Taten", "der Glaube eines Neubekehrten", "der Glaube der Engel"],
  "Die Taten sind die Früchte des Glaubens; sie gehören zu seiner Vollkommenheit (kamālu l-īmān). Die bloße Wirklichkeit heißt muṭlaqu l-īmān.");
q(4, 3, "Was drückt „Nichts gleicht Seinem Gleichnis“ (42:11) nach al-Bayḍāwī aus?",
  ["eine Übersteigerung in der Verneinung: Allāh ähnelt der Schöpfung in keiner Hinsicht", "dass Allāh ein Gleichnis hat, das Ihm ähnelt", "dass Allāh nur hört und sieht", "dass die Engel Allāh nicht gleichen, die Menschen aber schon"],
  "Wenn schon einem angenommenen Gleichnis jede Ähnlichkeit abgesprochen wird, dann erst recht Allāh selbst – mubālaġa fī n-nafy.");

topic({ id: "ridda", title: "Ridda – der Abfall vom Islām", ar: "الردة", lessons: "Einleitung in die Glaubensfundamente",
  intro: "Was Ridda ist und welche Worte und Taten zum Unglauben (kufr) führen.",
  sections: [
    { h: "Was ist Ridda?", li: [
      "Die Abtrünnigkeit (**ridda**) ist das Abtrennen vom Islām durch einen **Ausspruch oder eine Tat**, die den Unglauben (kufr) begründen.",
      "Gemeint ist, was aus **bewusstem Vorsatz** geschieht – etwa das **Niederwerfen vor einem Götzen** oder das **Werfen des Muṣḥaf in den Dreck**.",
      "Beim Wort, das Unglauben begründet, gibt es **keinen Unterschied**, ob es aus **Überzeugung, Trotz oder Spott** gesagt wird."
    ]},
    { h: "Was zum Unglauben führt", li: [
      "Wer etwas **Verbotenes (ḥarām)** – wie Wein (ḫamr), Unzucht oder unrechtmäßiges Töten – für **erlaubt** erklärt, oder etwas, das mit **Konsens** erlaubt ist, für **verboten** erklärt.",
      "Wer sich einem **Götzen durch ein Opfer** in seinem Namen annähern will.",
      "Wer zu einem Muslim **„O Ungläubiger!“** sagt – ohne Auslegung.",
      "Wer **fest entschlossen** ist, in der Zukunft Unglauben zu begehen, hat schon in der Gegenwart Unglauben begangen.",
      "Wer über einen der **Namen Allāhs**, Seinen Befehl, Sein Versprechen oder Seine Drohung **scherzt**.",
      "Wer die **Sunna** des Gesandten Allāhs ﷺ **herabwürdigt**."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Der **Muṣḥaf** ist der Qurʾān in gebundener (geschriebener) Form.",
      "Zu unterscheiden ist das **kategorische Verbot (taḥrīm qaṭʿī)** vom Abraten in einer bestimmten Lage: Muftis sagen manchmal „nicht erlaubt“ wegen des konkreten Schadens, obwohl die Sache an sich erlaubt ist.",
      "Umgekehrt kann eine **Notlage** etwas grundsätzlich Verbotenes vorübergehend erlauben – etwa Schweinefleisch, wenn es nichts anderes zu essen gibt –, ohne dass es dadurch erlaubt wird: **„Die Not erlaubt das Verbotene“ (aḍ-ḍarūra tubīḥu l-maḥẓūrāt)**; vgl. al-Baqara 2:173.",
      "Wer in einer Frage, über die **kein Konsens (iǧmāʿ)** besteht, eine abweichende Meinung vertritt, fällt dadurch **nicht** in den Unglauben.",
      "**„Ohne Auslegung“** heißt: ohne Bezug auf eine Quelle oder eine Begründung, warum der Glaube des anderen Unglaube wäre."
    ]}
  ] });
q(0, 1, "Was ist die Ridda?",
  ["das Abtrennen vom Islām durch einen Ausspruch oder eine Tat, die Unglauben begründen", "das Unterlassen eines Sunna-Gebets", "jede große Sünde", "der Wechsel der Rechtsschule"],
  "Ridda ist das Abtrennen vom Islām durch einen Ausspruch oder eine Tat, die kufr begründen – aus bewusstem Vorsatz.");
q(0, 1, "Welches Beispiel nennt das Buch für eine Tat der Ridda?",
  ["das Niederwerfen vor einem Götzen", "das Verpassen des Morgengebets", "das Essen im Ramaḍān aus Vergesslichkeit", "das Lügen im Handel"],
  "Beispiele sind das Niederwerfen vor einem Götzen und das Werfen des Muṣḥaf in den Dreck.");
q(0, 2, "Spielt es beim Wort des Unglaubens eine Rolle, ob es aus Überzeugung, Trotz oder Spott gesagt wird?",
  ["nein – es gibt keinen Unterschied", "ja – nur aus Überzeugung zählt es", "ja – Spott ist immer entschuldigt", "nur Trotz zählt"],
  "Bezüglich des Wortes, das den Unglauben begründet, gibt es keinen Unterschied, ob es aus Überzeugung, Trotz oder Spott gesagt wird.");
q(1, 2, "Wer etwas, das mit Konsens erlaubt ist, für verboten erklärt …",
  ["hat Unglauben begangen", "hat nur eine kleine Sünde begangen", "ist besonders fromm", "hat eine Meinung, die man stehen lassen kann"],
  "Sowohl das Erklären von Ḥarām für erlaubt als auch das Erklären von mit Konsens Erlaubtem für verboten ist kufr.");
q(1, 2, "Was gilt für jemanden, der fest entschlossen ist, in der Zukunft Unglauben zu begehen?",
  ["er hat schon in der Gegenwart Unglauben begangen", "nichts, solange er es nicht tut", "er muss nur bereuen, ist aber Muslim", "er wird erst am Tag der Tat zum Ungläubigen"],
  "Wer fest dazu entschlossen ist, in der Zukunft Unglauben zu begehen, hat in der Gegenwart bereits Unglauben begangen.");
q(1, 2, "Wann ist es Unglaube, zu einem Muslim „O Ungläubiger!“ zu sagen?",
  ["wenn es ohne Auslegung geschieht", "immer, auch mit einer Begründung aus den Quellen", "nie – es ist nur eine Beleidigung", "nur im Gebet"],
  "Sagt er es ohne Auslegung – ohne Quelle oder Begründung, warum der Glaube des anderen Unglaube wäre –, hat er Unglauben begangen.");
q(1, 1, "Was gehört nach dem Buch ebenfalls zu den Dingen, die zum Unglauben führen?",
  ["das Scherzen über einen der Namen Allāhs", "das Vergessen einer Sure", "das Verpassen des Freitagsgebets aus Krankheit", "das Fasten am Freitag"],
  "Wer über einen der Namen Allāhs, Seinen Befehl, Sein Versprechen oder Seine Drohung scherzt oder die Sunna herabwürdigt, begeht Unglauben.");
q(2, 3, "Fällt jemand in den Unglauben, der in einer Frage ohne Konsens (iǧmāʿ) eine abweichende Meinung vertritt?",
  ["nein – wegen der Meinungsverschiedenheit nicht", "ja, immer", "nur, wenn er Ḥanafit ist", "ja, wenn er die Meinung öffentlich sagt"],
  "Ist eine Sache nicht durch Konsens eindeutig ḥalāl oder ḥarām, macht eine abweichende Meinung niemanden zum Ungläubigen.");
q(2, 3, "Was besagt der Grundsatz „aḍ-ḍarūra tubīḥu l-maḥẓūrāt“?",
  ["Die Not erlaubt das Verbotene – vorübergehend, ohne dass es erlaubt wird", "Das Verbotene wird durch Gewohnheit erlaubt", "Jeder darf selbst bestimmen, was erlaubt ist", "Was die Mehrheit tut, ist erlaubt"],
  "In einer akuten Notlage (z. B. nur Schweinefleisch zu essen) kann Verbotenes vorübergehend erlaubt sein; es bleibt aber grundsätzlich ḥarām (vgl. 2:173).");

topic({ id: "kabair", title: "Große Sünden und die Sünden der Organe", ar: "الكبائر", lessons: "Einleitung in die Glaubensfundamente",
  intro: "Die großen Sünden, die sieben Organe, mit denen man Allāh ungehorsam sein kann, und die vier Hauptsünden des Herzens.",
  sections: [
    { h: "Die großen Sünden", li: [
      "Zu den großen Sünden (**kabāʾir**), durch die der Täter zum **Frevler (fāsiq)** wird, gehören unter anderem:",
      "das **Töten** ohne Recht · die **Unzucht** · das **Stehlen** · das Nehmen von **Zinsen (ribā)** · die **Verleumdung** einer keuschen Frau mit Unzucht (qaḏf) · der **Ungehorsam gegenüber den Eltern** · das **Trinken von Berauschendem** · das **Unterlassen des Gebets**."
    ]},
    { h: "Die sieben Organe", li: [
      "Du bist Allāh nur mit deinen Körperteilen ungehorsam – und sie sind eine **Gunst** Allāhs und ein dir **anvertrautes Gut**. Es sind **sieben**: Auge, Ohr, Zunge, Magen, Geschlechtsorgan, Hand und Fuß.",
      "**Auge**: bewahre es vor dem Blick auf das Verbotene (muḥarramāt).",
      "**Ohr**: hüte es davor, der Lästerei und der Lüge zuzuhören.",
      "**Zunge**: schütze sie vor dem Lästern, der Lüge, dem Streiten und Ähnlichem.",
      "**Magen**: schütze ihn vor dem Verbotenen und dem Zweifelhaften.",
      "**Geschlechtsorgan**: bewahre es vor dem, was Allāh dir verboten hat.",
      "**Hände**: bewahre sie davor, jemandem von der Schöpfung zu schaden oder etwas zu nehmen, das nicht erlaubt ist.",
      "**Füße**: hüte sie davor, mit ihnen zum Verpönten zu gehen."
    ]},
    { h: "Die Sünden des Herzens", li: [
      "Die Sünden des Herzens sind viele; ihre **vier Kernaspekte** sind: **Neid**, **Augendienerei**, **Hochmut** und **Selbstgefälligkeit**.",
      "**Neid (ḥasad)**: der Wunsch, dass die Gunst eines anderen vergeht.",
      "**Augendienerei (riyāʾ)**: durch eine Tat nach Ansehen in den Herzen der Geschöpfe streben.",
      "**Hochmut (kibr)**: einen anderen verachten.",
      "**Selbstgefälligkeit (ʿuǧb)**: sich selbst mit einem Blick der Verherrlichung betrachten."
    ]}
  ] });
q(0, 1, "Was wird man durch eine große Sünde nach dem Buch?",
  ["ein Frevler (fāsiq)", "ein Ungläubiger (kāfir)", "ein Heuchler (munāfiq)", "ein Abtrünniger (murtadd)"],
  "Die großen Sünden machen den Täter zum Frevler (fāsiq) – nicht zum Ungläubigen.");
q(0, 1, "Was gehört zu den großen Sünden, die das Buch aufzählt?",
  ["das Unterlassen des Gebets", "das Vergessen des Bittgebets nach dem Gebet", "das Essen mit der linken Hand aus Versehen", "das Verpassen eines freiwilligen Fastens"],
  "Genannt werden: Töten ohne Recht, Unzucht, Stehlen, Zinsen, Verleumdung einer keuschen Frau, Ungehorsam gegenüber den Eltern, Trinken von Berauschendem und Unterlassen des Gebets.");
q(0, 2, "Was ist mit der „Verleumdung einer keuschen Frau“ unter den großen Sünden gemeint?",
  ["sie fälschlich der Unzucht zu beschuldigen", "ihr ein Geschenk zu verweigern", "sie nicht zu grüßen", "über ihren Beruf zu sprechen"],
  "Gemeint ist das Beschuldigen einer keuschen Frau der Unzucht (qaḏf).");
q(1, 1, "Mit wie vielen Organen ist man Allāh nach dem Buch ungehorsam?",
  ["sieben", "fünf", "zehn", "drei"],
  "Auge, Ohr, Zunge, Magen, Geschlechtsorgan, Hand und Fuß.");
q(1, 2, "Wovor soll man nach dem Buch den Magen schützen?",
  ["vor dem Verbotenen und dem Zweifelhaften", "vor dem Fasten", "vor jedem Fleisch", "nur vor Wein"],
  "Was den Magen betrifft, so schütze ihn vor dem Verbotenen (ḥarām) und dem Zweifelhaften (šubha).");
q(1, 2, "Wovor soll man das Ohr hüten?",
  ["davor, der Lästerei und der Lüge zuzuhören", "vor jeder Musik und jedem Lärm", "vor dem Hören des Qurʾān", "vor dem Adhān"],
  "Was das Ohr anbelangt, so hüte es davor, der Lästerei und der Lüge zuzuhören.");
q(1, 2, "Wie beschreibt das Buch die Organe, mit denen man Allāh ungehorsam ist?",
  ["als Gunst Allāhs und anvertrautes Gut", "als Eigentum des Menschen, mit dem er tun kann, was er will", "als Ursache jeder Sünde, die man meiden soll", "als Teil der Vorherbestimmung, für den man nicht verantwortlich ist"],
  "Die Organe sind eine Gunst Allāhs und ein von Ihm anvertrautes Gut – gerade mit ihnen ist man Ihm ungehorsam.");
q(2, 1, "Was sind die vier Kernaspekte der Sünden des Herzens?",
  ["Neid, Augendienerei, Hochmut, Selbstgefälligkeit", "Zorn, Geiz, Faulheit, Angst", "Lüge, Lästern, Streit, Spott", "Unzucht, Diebstahl, Mord, Zinsen"],
  "Die Sünden des Herzens sind viele; ihre Kernaspekte sind Neid (ḥasad), Augendienerei (riyāʾ), Hochmut (kibr) und Selbstgefälligkeit (ʿuǧb).");
q(2, 2, "Was ist Neid (ḥasad) nach der Definition des Buches?",
  ["der Wunsch, dass die Gunst eines anderen vergeht", "der Wunsch, dieselbe Gunst wie ein anderer zu haben", "das Verachten eines anderen", "das Streben nach Ansehen"],
  "Neid ist der Wunsch, dass die Gunst eines anderen vergeht.");
q(2, 2, "Was ist Augendienerei (riyāʾ)?",
  ["durch eine Tat nach Ansehen in den Herzen der Geschöpfe streben", "einen anderen verachten", "sich selbst bewundern", "den Verlust einer fremden Gunst wünschen"],
  "Die Augendienerei ist das Streben nach Rang in den Herzen der Schöpfung durch eine Tat.");
q(2, 2, "Was ist der Unterschied zwischen Hochmut (kibr) und Selbstgefälligkeit (ʿuǧb)?",
  ["Hochmut verachtet andere, Selbstgefälligkeit verherrlicht sich selbst", "beides ist dasselbe", "Hochmut ist im Herzen, Selbstgefälligkeit nur auf der Zunge", "Selbstgefälligkeit ist erlaubt, Hochmut nicht"],
  "Hochmut ist das Verachten eines anderen; Selbstgefälligkeit ist, sich selbst mit einem Blick der Verherrlichung zu betrachten.");

topic({ id: "tawba", title: "Die Reue (tawba)", ar: "التوبة", lessons: "Einleitung in die Glaubensfundamente",
  intro: "Die Reue ist Pflicht. Ihre drei Bedingungen – und was zusätzlich nötig ist, wenn das Recht eines anderen betroffen ist.",
  sections: [
    { h: "Die Bedingungen der Reue", li: [
      "Die Reue von **jeder Sünde** ist **verpflichtend (wāǧib)**.",
      "Ihre Bedingungen: 1. dass der Sünder seine Tat **bedauert**, 2. dass er sie **jetzt unterlässt**, 3. dass er **fest entschlossen** ist, **nie wieder** zu ihr zurückzukehren.",
      "Das gilt, wenn die Sünde **zwischen ihm und Allāh** liegt und kein Recht eines anderen betrifft."
    ]},
    { h: "Wenn ein Recht betroffen ist", li: [
      "Ist das **Recht eines anderen** mit der Sünde verbunden, wird die **Erfüllung dieses Rechts** verpflichtend.",
      "Versäumtes **Gebet oder Fasten** muss **nachgeholt** werden; die **Zakāt** wird **nachträglich entrichtet**.",
      "Den **Besitz der Menschen** gibt er zurück, wenn er noch besteht; ist er zugrunde gegangen, **ersetzt** er ihn oder bittet um **Verzeihung**. Ist der Berechtigte gestorben, gibt er es seinem **Erben**.",
      "**Lästern**: Hat es den Betroffenen nicht erreicht, genügen die drei Bedingungen. Hat es ihn erreicht, bittet er ihn um **Verzeihung**; ist das nicht möglich, bittet er **Allāh um Vergebung für ihn**."
    ]}
  ] });
q(0, 1, "Welches Urteil hat die Reue von einer Sünde?",
  ["verpflichtend (wāǧib)", "empfohlen (mustaḥabb)", "nur bei großen Sünden nötig", "erlaubt, aber nicht nötig"],
  "Die Reue von jeglicher Sünde ist verpflichtend.");
q(0, 1, "Welche Bedingung gehört zur Reue?",
  ["dass man fest entschlossen ist, nie wieder zu der Sünde zurückzukehren", "dass man sie vor anderen bekennt", "dass man drei Tage fastet", "dass man eine Ṣadaqa gibt"],
  "Bedauern, jetzt unterlassen und fest entschlossen sein, nie wieder zurückzukehren.");
q(0, 2, "Wie viele Bedingungen hat die Reue, wenn die Sünde nur zwischen dem Menschen und Allāh liegt?",
  ["drei", "zwei", "vier", "fünf"],
  "Bedauern, Unterlassen in der Gegenwart, fester Entschluss, nie zurückzukehren.");
q(1, 1, "Was muss jemand tun, der aus Reue über versäumte Gebete umkehrt?",
  ["die Gebete nachholen", "nichts weiter – die Reue genügt", "eine Kaffāra von 60 Tagen fasten", "nur für jedes Gebet ein Sunna-Gebet beten"],
  "Bei versäumtem Gebet oder Fasten ist das Nachholen verpflichtend.");
q(1, 2, "Was gilt, wenn der Besitz, den man jemandem genommen hat, zugrunde gegangen ist?",
  ["man ersetzt ihn oder bittet den Eigentümer um Verzeihung", "die Pflicht entfällt", "man gibt den Wert als Ṣadaqa an Arme", "man fastet drei Tage"],
  "Man gibt den Besitz zurück, wenn er noch besteht; ist er zugrunde gegangen, ersetzt man ihn oder bittet um Verzeihung.");
q(1, 2, "Der Mensch, dem man etwas schuldet, ist gestorben. Was nun?",
  ["man gibt es seinem Erben", "die Schuld entfällt mit seinem Tod", "man gibt es der Moschee", "man behält es und bittet nur um Vergebung"],
  "Ist der Anspruchsinhaber verstorben, gibt man das Recht seinem Erben.");
q(1, 3, "Jemand hat über einen anderen gelästert, und das Lästern hat ihn erreicht – Verzeihung zu erbitten ist aber nicht möglich. Was tut er?",
  ["er bittet Allāh um Vergebung für ihn", "er muss nichts weiter tun", "er gibt ihm Geld", "er muss es öffentlich widerrufen"],
  "Hat ihn das Lästern erreicht, bittet man ihn um Verzeihung; ist das nicht möglich, bittet man Allāh für ihn um Vergebung.");
q(1, 3, "Was genügt, wenn das Lästern den Betroffenen nicht erreicht hat?",
  ["die drei Bedingungen der Reue", "man muss ihm trotzdem davon erzählen und um Verzeihung bitten", "eine Kaffāra", "nur ein Bittgebet für sich selbst"],
  "Erreicht das Lästern den Betroffenen nicht, reichen Bedauern, Unterlassen und der feste Entschluss.");

/* ================= Das Buch der Reinheit ================= */

topic({ id: "wudhu", title: "Wuḍūʾ – die Gebetswaschung", ar: "الوضوء", lessons: "Kitāb aṭ-Ṭahāra",
  intro: "Die vier Säulen der Gebetswaschung, ihre zwölf Sunna-Handlungen und die neun Dinge, die sie brechen.",
  sections: [
    { h: "Die vier Säulen", li: [
      "1. Das **Waschen des Gesichts**.",
      "2. Das Waschen der **Arme einschließlich der Ellbogen**.",
      "3. Das Bestreichen (masḥ) von **einem Viertel des Kopfes**.",
      "4. Das Waschen der **Füße einschließlich der Fußknöchel**."
    ]},
    { h: "Die Sunna-Handlungen", li: [
      "1. die **Absicht** (niyya) · 2. mit dem Namen Allāhs beginnen (**tasmiya**) · 3. die **Hände dreimal** bis zu den Handgelenken waschen · 4. das Zahnholz (**siwāk**)",
      "5. den **Mund ausspülen** · 6. die **Nase ausspülen** · 7. den **Bart und die Finger durchstreichen** (taḫlīl)",
      "8. jede Waschung **dreimal** · 9. den **ganzen Kopf und die Ohren** bestreichen · 10. die **Reihenfolge** (tartīb) · 11. die **Kontinuität** (muwālā) · 12. das **Reiben** (dalk)"
    ]},
    { h: "Was das Wuḍūʾ bricht", li: [
      "1. Was aus den **beiden Körperöffnungen** heraustritt.",
      "2. Das **Herausfließen von Unreinheit** außerhalb dieser beiden Öffnungen (z. B. Blut).",
      "3. Das **Erbrechen**, wenn es **mundvoll** ist.",
      "4. Der **Schlaf** dessen, der **nicht fest aufsitzt**.",
      "5. Die **Ohnmacht** · 6. das **Verrücktwerden** · 7. die **Trunkenheit**.",
      "8. Das **laute Lachen** des Betenden (im Gebet).",
      "9. Die **direkte körperliche Intimität** (mubāšara fāḥiša)."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Die vier Säulen heißen auch **Pflichtteile (farāʾiḍ)**; sie stehen in **al-Māʾida 5:6**: „O ihr Gläubigen, wenn ihr euch zum Gebet aufstellen wollt, so wascht eure Gesichter und eure Arme bis zu den Ellbogen, bestreicht eure Köpfe und wascht eure Füße bis zu den Knöcheln.“",
      "Das **Gesicht** reicht in der Länge vom üblichen Haaransatz bis unter das Kinn, in der Breite von Ohrläppchen zu Ohrläppchen (al-Mawṣilī, al-Iḫtiyār).",
      "Die **Absicht** fasst man, um den Lohn zu erhalten; ihr Ort ist das **Herz**. Manche Gelehrte hielten das Aussprechen für gut – vom Propheten ﷺ und den Salaf ist es aber nicht überliefert (aṭ-Ṭaḥṭāwī).",
      "Mund und Nase spült man **jeweils dreimal mit neuem Wasser** aus (aš-Šurunbulālī, Marāqī l-Falāḥ).",
      "**Muwālā**: das nächste Körperteil waschen, bevor das vorige unter normalen Umständen trocknet. **Dalk**: das Wasser nicht nur darüber gießen, sondern die Stelle reiben.",
      "Bei den Körperöffnungen ist **Luft aus dem vorderen Ausgang ausgenommen**. Das Wuḍūʾ bricht schon, wenn die Unreinheit am Ausgang **sichtbar** wird.",
      "Unreinheit außerhalb der Öffnungen bricht es, wenn sie **von selbst fließen** würde (bei einem Verband: wie sie ohne ihn fließen würde).",
      "**Mundvoll** ist Erbrochenes, das man nur mit Mühe zurückhalten könnte. Mehrfaches Erbrechen aus **einem** Anlass wird zusammengezählt.",
      "Das **Lachen** bricht es, wenn der Nachbar es hört – beim islamrechtlich Erwachsenen im Gebet."
    ]}
  ] });
q(0, 1, "Wie viele Säulen (Pflichtteile) hat die Gebetswaschung?",
  ["vier", "drei", "sechs", "zwölf"],
  "Gesicht waschen, Arme bis einschließlich Ellbogen waschen, ein Viertel des Kopfes bestreichen, Füße bis einschließlich Knöchel waschen.");
q(0, 1, "Wie viel vom Kopf muss beim Wuḍūʾ mindestens bestrichen werden?",
  ["ein Viertel", "der ganze Kopf", "die Hälfte", "drei Haare"],
  "Das Bestreichen von einem Viertel des Kopfes ist eine Säule; den ganzen Kopf zu bestreichen ist Sunna.");
q(0, 1, "Bis wohin werden die Arme beim Wuḍūʾ gewaschen?",
  ["einschließlich der Ellbogen", "bis kurz vor die Ellbogen", "bis zu den Handgelenken", "bis zu den Schultern"],
  "Das Waschen der Arme einschließlich der Ellbogen ist eine Säule.");
q(0, 2, "Was gehört NICHT zu den vier Säulen des Wuḍūʾ?",
  ["das Ausspülen des Mundes", "das Waschen des Gesichts", "das Waschen der Füße mit den Knöcheln", "das Bestreichen eines Viertels des Kopfes"],
  "Das Ausspülen des Mundes ist beim Wuḍūʾ Sunna (beim Ġusl dagegen Pflicht).");
q(1, 1, "Welches Urteil hat die Absicht (niyya) beim Wuḍūʾ nach dem Buch?",
  ["Sunna", "Säule (farḍ)", "verpönt", "Bedingung für die Gültigkeit"],
  "Die Absicht steht bei den Sunna-Handlungen des Wuḍūʾ – man fasst sie, um den Lohn zu erhalten.");
q(1, 1, "Was ist beim Wuḍūʾ Sunna?",
  ["das Zahnholz (siwāk)", "das Waschen des Gesichts", "das Bestreichen eines Viertels des Kopfes", "das Waschen der Füße"],
  "Siwāk, Tasmiya, Hände dreimal waschen, Mund und Nase ausspülen, Dreimaligkeit u. a. sind Sunna.");
q(1, 2, "Was bedeutet „muwālā“ beim Wuḍūʾ?",
  ["ohne Pause waschen, bevor das vorige Körperteil trocknet", "die Reihenfolge der Körperteile", "das Reiben der Haut", "das dreimalige Waschen"],
  "Muwālā ist die Kontinuität: das vorangegangene Körperteil soll nicht trocknen, ehe das nächste gewaschen wird.");
q(1, 2, "Was ist mit „dalk“ gemeint?",
  ["das Reiben der gewaschenen Stelle", "das Durchstreichen des Bartes", "das Bestreichen der Ohren", "das Ausspülen der Nase"],
  "Man schüttet das Wasser nicht nur über das Organ, sondern reinigt die Fläche durch Reiben.");
q(1, 2, "Welches Urteil hat die Reihenfolge (tartīb) beim Wuḍūʾ nach dem Buch?",
  ["Sunna", "Säule", "Wāǧib", "verpönt"],
  "Reihenfolge, Kontinuität und Reiben sind die letzten drei der zwölf Sunna-Handlungen.");
q(2, 1, "Bricht Erbrechen das Wuḍūʾ?",
  ["ja, wenn es mundvoll ist", "ja, immer – auch wenig", "nein, nie", "nur, wenn man fastet"],
  "Das Erbrechen bricht das Wuḍūʾ, sollte es mundvoll sein.");
q(2, 1, "Wessen Schlaf bricht das Wuḍūʾ?",
  ["der Schlaf dessen, der nicht fest aufsitzt", "jeder Schlaf, auch im festen Sitzen", "nur der Schlaf in der Nacht", "nur der Schlaf länger als eine Stunde"],
  "Der Schlaf desjenigen, der nicht fest aufsitzt, bricht die Gebetswaschung.");
q(2, 2, "Bricht Blut, das aus einer Wunde herausfließt, das Wuḍūʾ?",
  ["ja – das Herausfließen von Unreinheit außerhalb der beiden Öffnungen bricht es", "nein, nur was aus den beiden Öffnungen kommt", "nur, wenn es mehr als ein Dirham ist", "nur beim Fasten"],
  "Auch das Herausfließen von Unreinheit außerhalb der beiden Körperöffnungen bricht das Wuḍūʾ – wenn sie von selbst fließen würde.");
q(2, 2, "Wann bricht das Lachen das Wuḍūʾ?",
  ["wenn der Betende im Gebet so laut lacht, dass der Nachbar es hört", "jedes Lachen, auch außerhalb des Gebets", "nur ein Lächeln im Gebet", "nie"],
  "Das laute Lachen des Betenden bricht es – hörbar für den Nachbarn, beim islamrechtlich Erwachsenen.");
q(2, 1, "Was bricht das Wuḍūʾ NICHT nach der Liste des Buches?",
  ["das Lesen des Qurʾān", "die Ohnmacht", "die Trunkenheit", "das Verrücktwerden"],
  "Ohnmacht, Verrücktwerden und Trunkenheit stehen unter den neun Dingen, die das Wuḍūʾ brechen.");
q(3, 2, "In welchem Vers werden die Pflichtteile des Wuḍūʾ genannt?",
  ["al-Māʾida 5:6", "al-Baqara 2:183", "an-Nisāʾ 4:103", "al-Fātiḥa 1:5"],
  "„O ihr Gläubigen, wenn ihr euch zum Gebet aufstellen wollt, so wascht eure Gesichter …“ (5:6).");
q(3, 2, "Wie weit reicht das Gesicht beim Wuḍūʾ in der Breite?",
  ["von Ohrläppchen zu Ohrläppchen", "nur bis zu den Augenwinkeln", "bis hinter die Ohren", "von Schläfe zu Schläfe ohne Wangen"],
  "In der Länge vom üblichen Haaransatz bis unter das Kinn, in der Breite zwischen den beiden Ohrläppchen (al-Iḫtiyār).");
q(3, 3, "Bricht Luft, die aus dem vorderen Ausgang entweicht, das Wuḍūʾ?",
  ["nein – sie ist ausgenommen", "ja, wie alles aus den Öffnungen", "nur bei Frauen", "nur im Gebet"],
  "Von dem, was aus den beiden Öffnungen tritt, ist die Luft aus dem vorderen Ausgang ausgenommen.");
q(3, 3, "Was ist mit „mundvoll“ beim Erbrechen gemeint?",
  ["so viel, dass man es nur mit Mühe zurückhalten könnte", "ein Schluck Wasser", "mehr als ein Dirham", "alles, was man schmeckt"],
  "Mundvoll ist, was man außer mit Erschwernis nicht zurückhalten kann; mehrfaches Erbrechen aus einem Anlass zählt zusammen.");
q(3, 3, "Ist das Aussprechen der Absicht beim Wuḍūʾ vom Propheten ﷺ überliefert?",
  ["nein – der Ort der Absicht ist das Herz; manche Gelehrte hielten das Aussprechen dennoch für gut", "ja, als Pflicht", "ja, als betonte Sunna", "es ist verboten"],
  "Aṭ-Ṭaḥṭāwī: Manche hielten das Aussprechen für gut, um Herz und Tat zu vereinen; überliefert ist es vom Propheten ﷺ und den Salaf nicht.");

topic({ id: "ghusl", title: "Ġusl – die Ganzkörperwaschung", ar: "الغسل", lessons: "Kitāb aṭ-Ṭahāra",
  intro: "Die drei Pflichtteile der Ganzkörperwaschung, ihre Sunna, was sie zur Pflicht macht und wann sie Sunna ist.",
  sections: [
    { h: "Die Pflichtteile", li: [
      "1. Das (kräftige) **Ausspülen des Mundes**.",
      "2. Das (kräftige) **Ausspülen der Nase**.",
      "3. Das **Waschen des gesamten Körpers**."
    ]},
    { h: "Die Sunna-Handlungen", li: [
      "1. Die **Hände** waschen, 2. das **Geschlechtsorgan** waschen, 3. die **Unreinheit** am Körper entfernen,",
      "4. dann das **Wuḍūʾ** vollziehen 5. und das Wasser **dreimal** über den Körper fließen lassen."
    ]},
    { h: "Was den Ġusl zur Pflicht macht", li: [
      "1. Das Austreten von **Sperma mit Lust**.",
      "2. Das **Einführen der Eichel** (Geschlechtsverkehr), vorne oder hinten.",
      "3. Sperma (**manī**) oder Lusttropfen (**maḏī**) nach dem **Erwachen** sehen.",
      "4. Das **Ende der Menstruation** oder des **Wochenbetts**."
    ]},
    { h: "Wann der Ġusl Sunna ist", li: [
      "Für den **Freitag**, für das Gebet der **beiden Feste**, für den **Iḥrām** und für **ʿArafa**."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Das Geschlechtsorgan wäscht man, **ob Schmutz daran ist oder nicht**.",
      "Steht man an einer Stelle, an der sich das Wasser **sammelt**, wäscht man die **Füße erst am Ende** des Ġusl; sonst nicht später.",
      "Beim **Lusttropfen** nach dem Erwachen: Der Ġusl ist nötig, wenn man an einen **Traum** denkt und meint, es sei maḏī – oder mit Erinnerung an einen Traum unsicher ist (manī oder maḏī). Ohne Erinnerung an einen Traum und bei der Vermutung maḏī ist **kein Ġusl** nötig (aṭ-Ṭaḥṭāwī).",
      "Die beiden Feste sind **ʿĪd al-Aḍḥā** (Opferfest) und **ʿĪd al-Fiṭr** (Fest des Fastenbrechens). **Iḥrām** ist der Weihezustand des Pilgers beim Ḥaǧǧ oder der ʿUmra."
    ]}
  ] });
q(0, 1, "Wie viele Pflichtteile hat der Ġusl?",
  ["drei", "vier", "fünf", "einen"],
  "Mund ausspülen, Nase ausspülen und den ganzen Körper waschen.");
q(0, 1, "Welches Urteil hat das Ausspülen des Mundes beim Ġusl?",
  ["Pflicht (farḍ)", "Sunna", "Mustaḥabb", "verpönt"],
  "Beim Ġusl ist das Ausspülen von Mund und Nase Pflicht – anders als beim Wuḍūʾ, wo es Sunna ist.");
q(0, 2, "Was unterscheidet das Ausspülen von Mund und Nase bei Wuḍūʾ und Ġusl?",
  ["beim Ġusl ist es Pflicht, beim Wuḍūʾ Sunna", "beim Wuḍūʾ ist es Pflicht, beim Ġusl Sunna", "bei beiden ist es Pflicht", "bei beiden ist es Sunna"],
  "Ġusl: Mund, Nase, ganzer Körper sind Pflicht. Wuḍūʾ: Mund und Nase stehen bei den Sunna-Handlungen.");
q(1, 2, "In welcher Reihenfolge geht die Sunna des Ġusl?",
  ["Hände, Geschlechtsorgan, Unreinheit entfernen, Wuḍūʾ, dann dreimal Wasser über den Körper", "erst dreimal Wasser über den Körper, dann Wuḍūʾ", "nur Wuḍūʾ, dann fertig", "erst die Füße, dann der Kopf"],
  "Man wäscht die Hände, das Geschlechtsorgan und die Unreinheit am Körper, macht dann Wuḍūʾ und lässt das Wasser dreimal über den Körper fließen.");
q(2, 1, "Was macht den Ġusl zur Pflicht?",
  ["das Ende der Menstruation", "das Berühren eines Hundes", "das Essen von Kamelfleisch", "der Schlaf im Liegen"],
  "Pflicht wird der Ġusl durch Samenerguss mit Lust, Geschlechtsverkehr, Sehen von manī/maḏī nach dem Erwachen und das Ende von Menstruation oder Wochenbett.");
q(2, 2, "Wann macht der Samenerguss den Ġusl zur Pflicht?",
  ["wenn er mit Lust geschieht", "nur im Wachzustand", "nur, wenn man verheiratet ist", "nie – nur Wuḍūʾ ist nötig"],
  "Das Austreten des Spermas durch Gelüste macht den Ġusl zur Pflicht.");
q(2, 2, "Was macht nach dem Wochenbett den Ġusl zur Pflicht?",
  ["sein Ende", "sein Beginn", "der erste Tag nach der Geburt", "nichts – er ist nur Sunna"],
  "Das Enden der Menstruation oder des Wochenbetts macht den Ġusl zur Pflicht.");
q(3, 1, "Für welchen Tag ist der Ġusl Sunna?",
  ["für den Freitag", "für jeden Montag", "für den 15. jedes Monats", "nur für den ersten Ramaḍān"],
  "Sunna ist der Ġusl für den Freitag, das Gebet der beiden Feste, den Iḥrām und ʿArafa.");
q(3, 2, "Wofür nennt das Buch den Ġusl als Sunna?",
  ["Freitag, beide Festgebete, Iḥrām und ʿArafa", "jedes Pflichtgebet", "das Totengebet und den Friedhofsbesuch", "nur den Ḥaǧǧ"],
  "Vier Anlässe: Freitag, das Gebet der beiden Festtage, der Weihezustand (iḥrām) und ʿArafa.");
q(4, 3, "Man steht beim Ġusl an einer Stelle, an der sich das Wasser sammelt. Wann wäscht man die Füße?",
  ["erst am Ende des Ġusl", "ganz am Anfang", "gar nicht", "zweimal – vorher und nachher"],
  "Sammelt sich das Wasser, wäscht man die Füße am Ende; sonst verschiebt man es nicht.");
q(4, 3, "Man findet nach dem Erwachen Feuchtigkeit, erinnert sich an keinen Traum und vermutet maḏī. Ist der Ġusl nötig?",
  ["nein", "ja, immer", "nur am Freitag", "ja, wenn es Nacht war"],
  "Ohne Erinnerung an einen Traum und bei der vorherrschenden Vermutung maḏī bedarf es keines Ġusl (aṭ-Ṭaḥṭāwī).");

topic({ id: "wasser", title: "Das Wasser zur Reinigung", ar: "المياه", lessons: "Kitāb aṭ-Ṭahāra",
  intro: "Mit welchem Wasser die rituelle Reinigung gültig ist – und mit welchem nicht.",
  sections: [
    { h: "Gültig und ungültig", li: [
      "Die rituelle Reinigung ist gültig mit **absolutem Wasser** (māʾ muṭlaq) – selbst wenn es sich durch **langes Stehen** verändert hat, aber **nicht durch Unreinheit**.",
      "**Ungültig** ist sie mit **stillem, wenigem Wasser**, in das eine **Unreinheit** gefallen ist,",
      "und mit Wasser, das schon **benutzt** wurde (mustaʿmal): zur **Aufhebung einer rituellen Unreinheit** oder zur **Annäherung an Allāh** (qurba)."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Ein Beispiel für Wasser „zur Annäherung an Allāh“: auf ein bestehendes Wuḍūʾ mit der Absicht des Gottesdienstes **noch einmal Wuḍūʾ** machen (al-Mawṣilī, al-Iḫtiyār).",
      "Wasser gilt als **benutzt**, sobald es sich **vom gewaschenen Körperteil löst**."
    ]}
  ] });
q(0, 1, "Mit welchem Wasser ist die rituelle Reinigung gültig?",
  ["mit absolutem Wasser (māʾ muṭlaq)", "nur mit Zamzam-Wasser", "mit jedem Wasser, auch benutztem", "nur mit warmem Wasser"],
  "Die Reinheit erlangt man mit absolutem Wasser.");
q(0, 2, "Wasser hat sich durch langes Stehen verändert. Darf man damit Wuḍūʾ machen?",
  ["ja – solange es sich nicht durch Unreinheit verändert hat", "nein, nie", "nur im Notfall", "nur für den Ġusl"],
  "Gültig mit absolutem Wasser, selbst wenn es sich durch langes Verweilen verändert hat – jedoch nicht durch Unreinheit.");
q(0, 2, "In stilles, weniges Wasser ist eine Unreinheit gefallen. Ist die Reinigung damit gültig?",
  ["nein", "ja, wenn man sie nicht sieht", "ja, immer", "nur für die Hände"],
  "Ungültig ist die Reinigung durch stilles, weniges Wasser, in das eine Unreinheit gefallen ist.");
q(1, 2, "Wann gilt Wasser als „benutzt“ (mustaʿmal)?",
  ["sobald es sich vom gewaschenen Körperteil löst", "sobald es den Körper berührt", "nach einer Stunde", "erst, wenn es in einen Behälter fließt"],
  "Wasser gilt dann als verwendet, wenn es sich vom gewaschenen Körperteil löst.");
q(1, 3, "Welches Beispiel nennt die Erläuterung für Wasser, das „zur Annäherung an Allāh“ benutzt wurde?",
  ["auf ein bestehendes Wuḍūʾ mit der Absicht des Gottesdienstes noch einmal Wuḍūʾ machen", "Wasser zum Kochen", "Wasser zum Gießen von Pflanzen", "Wasser aus der Moschee"],
  "Mit der Absicht von ʿibāda über ein vorhandenes Wuḍūʾ erneut Wuḍūʾ machen (al-Iḫtiyār).");

topic({ id: "tayammum", title: "Tayammum – die Ersatzwaschung", ar: "التيمم", lessons: "Kitāb aṭ-Ṭahāra",
  intro: "Wann man statt mit Wasser mit reiner Erde reinigt, wie man es tut und was es ungültig macht.",
  sections: [
    { h: "Wann und wie", li: [
      "Wer Wasser nicht benutzen kann – wegen einer **Entfernung von einer Meile**, **Krankheit**, **Kälte** oder **Furcht** (vor dem Feind) –, macht **Tayammum**.",
      "Man macht es mit **Absicht** und **zweimaligem Aufsetzen** der Hände auf die Erde; bestrichen werden das **Gesicht** und die **Arme einschließlich der Ellbogen**.",
      "Das gilt auch im Zustand der **großen rituellen Unreinheit**, bei **Menstruation** und im **Wochenbett**."
    ]},
    { h: "Was es ungültig macht", li: [
      "1. Alles, was das **Wuḍūʾ** ungültig macht.",
      "2. Die Fähigkeit, **genug Wasser** zu benutzen."
    ]},
    { h: "Bei Verletzungen", li: [
      "Ist die **Mehrheit** der zu waschenden Körperteile **verletzt**, macht man **Tayammum**.",
      "Sonst **wäscht** man das Gesunde und **bestreicht** das Verletzte."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Wie viele Meter die arabische **Meile** hat, ist umstritten; Dr. ʿAlī Ǧumʿa gibt sie nach den Ḥanafiten mit etwa **1855 Metern** an."
    ]}
  ] });
q(0, 1, "Wann darf man Tayammum machen?",
  ["wenn man Wasser nicht benutzen kann – z. B. wegen Krankheit oder einer Meile Entfernung", "immer, wenn man keine Lust auf Wasser hat", "nur auf Reisen über 80 km", "nur im Winter"],
  "Gründe: Entfernung von einer Meile, Krankheit, Kälte oder Furcht vor dem Feind.");
q(0, 1, "Wie oft setzt man beim Tayammum die Hände auf die Erde?",
  ["zweimal", "einmal", "dreimal", "viermal"],
  "Man macht es beabsichtigend mit zweimaligem Aufsetzen der Hände – für das Gesicht und für die Arme.");
q(0, 2, "Was wird beim Tayammum bestrichen?",
  ["das Gesicht und die Arme einschließlich der Ellbogen", "nur die Hände", "Gesicht, Arme, Kopf und Füße", "nur das Gesicht"],
  "Beim Tayammum werden das Gesicht und die Arme einschließlich der Ellbogen umfasst.");
q(0, 2, "Darf man im Zustand der großen rituellen Unreinheit Tayammum machen?",
  ["ja – auch bei großer Unreinheit, Menstruation und Wochenbett", "nein, nur bei kleiner Unreinheit", "nur Männer", "nur, wenn man schon Wuḍūʾ hat"],
  "Das gilt selbst dann, wenn man im Zustand der großen rituellen Unreinheit ist, menstruiert oder im Wochenbett ist.");
q(1, 1, "Was macht das Tayammum ungültig?",
  ["alles, was das Wuḍūʾ bricht – und die Fähigkeit, genug Wasser zu benutzen", "nur das Ende der Gebetszeit", "nur das Finden von Erde", "nichts – es gilt einen ganzen Tag"],
  "Es macht ungültig: was das Wuḍūʾ ungültig macht, und die Fähigkeit, genug Wasser zu benutzen.");
q(2, 2, "Die Mehrheit der zu waschenden Körperteile ist verletzt. Was tut man?",
  ["Tayammum", "nur die gesunden Teile waschen", "gar nichts", "nur die Verletzung bestreichen"],
  "Ist die Mehrheit verletzt, macht man Tayammum; sonst wäscht man das Gesunde und bestreicht das Verwundete.");
q(2, 2, "Nur ein kleiner Teil der zu waschenden Körperteile ist verletzt. Was tut man?",
  ["das Gesunde waschen und das Verletzte bestreichen", "Tayammum", "das Gebet auslassen", "alles waschen, auch die Wunde"],
  "Ist nicht die Mehrheit verletzt, wäscht man das Gesunde und bestreicht das Verwundete.");
q(3, 3, "Wie lang ist die arabische Meile nach Dr. ʿAlī Ǧumʿa (gemäß den Ḥanafiten)?",
  ["etwa 1855 m", "etwa 500 m", "etwa 5 km", "genau 1000 m"],
  "Die Meteranzahl ist umstritten; ʿAlī Ǧumʿa gibt sie nach den Ḥanafiten mit 1855 m an.");

topic({ id: "najasa", title: "Unreinheit und ihre Reinigung", ar: "النجاسة", lessons: "Kitāb aṭ-Ṭahāra",
  intro: "Wodurch Körper, Kleidung, Ledersocken, Schwert und Erde rein werden – und wie viel Unreinheit nachgesehen wird.",
  sections: [
    { h: "Die Reiniger", li: [
      "**Körper und Kleidung** werden durch **reinigende Flüssigkeiten** gereinigt.",
      "Die **Ledersocken** (ḫuff) durch **Reiben**.",
      "Das **Schwert** und Ähnliches durch **Abwischen**.",
      "Die **Erde** durch **Trocknen** und das **Vergehen der Spuren**."
    ]},
    { h: "Wie viel nachgesehen wird", li: [
      "**Schwere Unreinheit** (naǧāsa ġalīẓa) – z. B. **Blut**, der **Urin** von Tieren, deren Fleisch **nicht** gegessen wird, und **Mist** – wird bis zur **Menge eines Dirham** nachgesehen.",
      "**Leichte Unreinheit** (naǧāsa ḫafīfa) – z. B. der **Urin** von Tieren, deren Fleisch **gegessen** wird – wird nachgesehen, wenn sie **weniger als ein Viertel** der Kleidung ausmacht."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Nach **Ibn ʿĀbidīn** hindert **genau die Menge eines Dirham** das Gebet nicht – es wäre aber eine **Missetat (isāʾa)**; mit **weniger** als einem Dirham zu beten ist **leicht verpönt**. Auch al-Muġaynī: Das Gebet mit einem Dirham und weniger ist **gültig**.",
      "Das Gewicht eines Dirham gibt Dr. ʿAlī Ǧumʿa nach den Ḥanafiten mit etwa **3,125 g** an.",
      "Bei **Flüssigkeiten** gilt als Richtwert: so viel Wasser, wie in der **nach oben gerichteten Handfläche** bleibt, wenn man die Finger ausstreckt (aš-Šurunbulālī)."
    ]}
  ] });
q(0, 1, "Wodurch wird die Erde von Unreinheit rein?",
  ["durch Trocknen und das Vergehen der Spuren", "nur durch Waschen mit Wasser", "durch Abwischen", "gar nicht"],
  "Die Erde wird durch das Trocknen und das Vergehen der Spuren rein.");
q(0, 2, "Wodurch werden Ledersocken (ḫuff) von Unreinheit gereinigt?",
  ["durch Reiben", "nur durch Waschen", "durch Trocknen in der Sonne", "durch Abwischen mit dem Ärmel – nur innen"],
  "Die Ledersocken werden durch das Reiben gereinigt.");
q(0, 2, "Wodurch wird ein Schwert von Unreinheit gereinigt?",
  ["durch Abwischen", "durch Vergraben", "durch Reiben im Sand", "es kann nicht rein werden"],
  "Das Schwert und seinesgleichen (glatte Dinge) werden durch Abwischen gereinigt.");
q(1, 1, "Bis zu welcher Menge wird schwere Unreinheit (z. B. Blut) nachgesehen?",
  ["bis zur Menge eines Dirham", "bis zu einem Viertel der Kleidung", "gar nicht", "bis zur Hälfte des Körpers"],
  "Schwere Unreinheiten werden bis zur Menge eines Dirham nachgesehen.");
q(1, 2, "Was gehört nach dem Buch zur schweren Unreinheit?",
  ["Blut, Mist und der Urin von Tieren, deren Fleisch nicht gegessen wird", "der Urin von Tieren, deren Fleisch gegessen wird", "Wasser, das lange gestanden hat", "Schweiß"],
  "Der Urin eines Tieres, dessen Fleisch gegessen wird, ist dagegen leichte Unreinheit.");
q(1, 2, "Wie viel leichte Unreinheit wird an der Kleidung nachgesehen?",
  ["weniger als ein Viertel der Kleidung", "bis zur Menge eines Dirham", "gar nichts", "bis zur Hälfte"],
  "Leichte Unreinheiten werden nachgesehen, wenn sie weniger als ein Viertel der gesamten Kleidung ausmachen.");
q(1, 2, "Der Urin eines Tieres, dessen Fleisch gegessen wird, ist …",
  ["leichte Unreinheit", "schwere Unreinheit", "rein", "nur beim Kamel unrein"],
  "Das Buch nennt ihn als Beispiel für leichte Unreinheit (Grenze: weniger als ein Viertel der Kleidung).");
q(2, 3, "Wie viel wiegt ein Dirham nach Dr. ʿAlī Ǧumʿa (gemäß den Ḥanafiten)?",
  ["etwa 3,125 g", "etwa 30 g", "etwa 1 g", "etwa 12,5 g"],
  "Das Gewicht eines Dirham wird nach den Ḥanafiten mit etwa 3,125 g bemessen.");
q(2, 3, "Welcher Richtwert gilt für die Menge eines Dirham bei Flüssigkeiten?",
  ["so viel Wasser, wie in der nach oben gerichteten, ausgestreckten Handfläche bleibt", "ein Teelöffel", "ein Tropfen", "so viel, wie in eine Faust passt"],
  "Richtwert: das Wasser, das in der Handinnenfläche bleibt, nachdem man Wasser genommen und die Finger ausgestreckt hat (Marāqī l-Falāḥ).");
q(2, 3, "Ist das Gebet mit genau der Menge eines Dirham an Unreinheit gültig?",
  ["ja – aber es wäre eine Missetat (isāʾa)", "nein, es ist ungültig", "ja, ohne jede Verpöntheit", "nur bei Frauen"],
  "Ibn ʿĀbidīn: genau ein Dirham hindert das Gebet nicht, es wäre aber eine Missetat.");

topic({ id: "istinja", title: "Istinǧāʾ – Reinigung nach der Notdurft", ar: "الاستنجاء", lessons: "Kitāb aṭ-Ṭahāra",
  intro: "Die Reinigung nach dem Stuhlgang und dem Wasserlassen und was dabei verpönt ist.",
  sections: [
    { h: "Das Istinǧāʾ", li: [
      "Das Istinǧāʾ – etwa mit einem **Stein** – ist **Sunna**. Das **Waschen** (mit Wasser) ist jedoch **vorzüglicher**.",
      "Es ist **verpönt**, dafür **Knochen** und **Tiermist** zu benutzen."
    ]},
    { h: "Was bei der Notdurft verpönt ist", li: [
      "1. sich der **Qibla** zuwenden · 2. ihr den **Rücken** zuwenden · 3. **sprechen**",
      "4. sich **direkt zur Sonne** ausrichten · 5. die Notdurft **unter einem fruchttragenden Baum** verrichten."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Sunna ist das Istinǧāʾ nur, solange die Unreinheit **nicht über den Ausgang hinausgeht**.",
      "Geht sie darüber hinaus und erreicht **die Menge eines Dirham**, ist das Entfernen mit Wasser **wāǧib**; ist es **mehr als ein Dirham**, ist es **farḍ** (Marāqī l-Falāḥ)."
    ]}
  ] });
q(0, 1, "Welches Urteil hat das Istinǧāʾ mit einem Stein?",
  ["Sunna", "Pflicht (farḍ)", "verpönt", "verboten"],
  "Das Istinǧāʾ durch beispielsweise einen Stein ist Sunna; das Waschen ist vorzüglicher.");
q(0, 1, "Was ist beim Istinǧāʾ vorzüglicher als ein Stein?",
  ["das Waschen mit Wasser", "Papier", "Erde", "nichts – der Stein ist am besten"],
  "Das Waschen ist vorzüglicher.");
q(0, 2, "Womit ist das Istinǧāʾ verpönt?",
  ["mit Knochen und Tiermist", "mit Steinen", "mit Wasser", "mit Erde"],
  "Es ist für das Istinǧāʾ verpönt, Knochen und Tiermist zu nutzen.");
q(1, 1, "Was ist bei der Notdurft verpönt?",
  ["sich der Qibla zuwenden", "die Toilette mit dem linken Fuß betreten", "danach die Hände waschen", "sich zu bedecken"],
  "Verpönt sind: zur Qibla oder mit dem Rücken zu ihr, sprechen, direkt zur Sonne, unter einem fruchttragenden Baum.");
q(1, 2, "Wo soll man die Notdurft nach dem Buch nicht verrichten?",
  ["unter einem fruchttragenden Baum", "in einem Badezimmer", "in einem Haus", "nachts"],
  "Es ist verpönt, seine Notdurft unter einem Frucht tragenden Baum zu verrichten.");
q(1, 2, "Ist es verpönt, der Qibla bei der Notdurft den Rücken zuzuwenden?",
  ["ja – wie das Zuwenden", "nein, nur das Zuwenden ist verpönt", "nein, es ist Sunna", "nur außerhalb von Gebäuden"],
  "Beides ist verpönt: sich der Qibla zuzuwenden und ihr den Rücken zuzuwenden.");
q(2, 3, "Die Unreinheit geht über den Ausgang hinaus und ist mehr als ein Dirham. Welches Urteil hat das Waschen mit Wasser?",
  ["farḍ", "Sunna", "wāǧib", "mustaḥabb"],
  "Über den Ausgang hinaus: in Höhe eines Dirham ist das Waschen wāǧib, mehr als ein Dirham farḍ.");
q(2, 3, "Die Unreinheit geht über den Ausgang hinaus und beträgt genau die Menge eines Dirham. Welches Urteil hat das Waschen?",
  ["wāǧib", "farḍ", "Sunna", "mubāḥ"],
  "Genau ein Dirham über den Ausgang hinaus: Entfernen mit Wasser ist wāǧib (Marāqī l-Falāḥ).");

/* ================= Das Buch des Gebets ================= */

topic({ id: "shurut", title: "Die Voraussetzungen des Gebets", ar: "شروط الصلاة", lessons: "Kitāb aṣ-Ṣalāh",
  intro: "Die sieben Voraussetzungen, ohne die das Gebet nicht gültig ist – und die ʿAwra von Mann und Frau.",
  sections: [
    { h: "Die sieben Voraussetzungen", li: [
      "1. Die Reinheit des **Körpers** vom rituellen Unreinheitszustand (**ḥadaṯ**) und von unreinen Substanzen (**ḫabaṯ**).",
      "2. Die Reinheit der **Kleidung** und des **Gebetsplatzes**.",
      "3. Das **Bedecken der Blöße** (ʿawra).",
      "4. Das Hinwenden zur **Qibla**.",
      "5. Die **Zeit**.",
      "6. Die **Absicht**.",
      "7. Der **Eröffnungs-Takbīr** (takbīrat al-iḥrām)."
    ]},
    { h: "Erläuterungen: die ʿAwra", note: true, li: [
      "Die Blöße des **Mannes**: vom Bereich **unter dem Bauchnabel bis unter die Knie**.",
      "Die Blöße der freien **Frau**: ihr **ganzer Körper außer Gesicht und Händen**.",
      "Zu ihren **Füßen** gibt es zwei Meinungen: Nach der richtigen gehören sie **im Gebet nicht** zur ʿAwra, **außerhalb** des Gebets schon (al-Mawṣilī, al-Iḫtiyār)."
    ]}
  ] });
q(0, 1, "Wie viele Voraussetzungen des Gebets nennt das Buch?",
  ["sieben", "fünf", "vier", "zwölf"],
  "Reinheit des Körpers, Reinheit von Kleidung und Platz, ʿAwra bedecken, Qibla, Zeit, Absicht, Eröffnungs-Takbīr.");
q(0, 1, "Was gehört zu den Voraussetzungen des Gebets?",
  ["das Hinwenden zur Qibla", "das Rezitieren der Fātiḥa", "die Verbeugung", "das letzte Sitzen"],
  "Die Qibla ist eine Voraussetzung (šarṭ); Fātiḥa ist wāǧib, Verbeugung und letztes Sitzen sind Säulen.");
q(0, 2, "Wovon muss der Körper für das Gebet rein sein?",
  ["vom rituellen Unreinheitszustand (ḥadaṯ) und von unreinen Substanzen (ḫabaṯ)", "nur vom Ḥadaṯ", "nur von sichtbarem Schmutz", "nur von Blut"],
  "Die erste Voraussetzung ist die Reinheit des Körpers von ḥadaṯ und ḫabaṯ.");
q(0, 2, "Gehört der Eröffnungs-Takbīr zu den Voraussetzungen oder zu den Säulen des Gebets – nach diesem Buch?",
  ["zu den Voraussetzungen", "zu den Säulen", "zu den Wāǧibāt", "zu den Sunan"],
  "Wasīlatu ṭ-Ṭalab zählt den Eröffnungs-Takbīr als siebte Voraussetzung auf.");
q(1, 1, "Was ist die ʿAwra des Mannes?",
  ["vom Bereich unter dem Bauchnabel bis unter die Knie", "nur die Geschlechtsteile", "vom Hals bis zu den Füßen", "vom Bauchnabel bis zu den Knöcheln"],
  "Die Blöße des Mannes beginnt unter dem Bauchnabel und geht bis unter die Knie.");
q(1, 2, "Was ist die ʿAwra der freien Frau?",
  ["der ganze Körper außer Gesicht und Händen", "der ganze Körper ohne Ausnahme", "nur Haare und Körper ohne Arme", "vom Bauchnabel bis zu den Knien"],
  "Die Blöße der freien Frau ist ihr ganzer Körper bis auf Gesicht und Hände.");
q(1, 3, "Gehören die Füße der Frau im Gebet zur ʿAwra – nach der richtigen Meinung?",
  ["nein – im Gebet nicht, außerhalb schon", "ja, im Gebet und außerhalb", "nein, nie", "nur beim Ḥaǧǧ"],
  "Nach der richtigen Meinung sind die Füße im Gebet nicht Teil der ʿAwra, außerhalb jedoch schon (al-Iḫtiyār).");

topic({ id: "arkan", title: "Die Säulen des Gebets", ar: "أركان الصلاة", lessons: "Kitāb aṣ-Ṣalāh",
  intro: "Die Säulen (arkān) sind die Pflichtteile im Gebet selbst. Fehlt eine, ist das Gebet nicht gültig.",
  sections: [
    { h: "Die Säulen", li: [
      "1. Das **Stehen** (qiyām) in den **nicht freiwilligen** Gebeten – für den, der dazu imstande ist.",
      "2. Das Rezitieren eines **Verses** in **zwei Rakʿa** des Pflichtgebets (farḍ) und in **jeder Rakʿa** der freiwilligen Gebete (nafl) und des **Witr**.",
      "3. Die **Verbeugung** (rukūʿ) und die **Niederwerfung** (suǧūd).",
      "4. Die **Reihenfolge** zwischen Stehen, Verbeugung und Niederwerfung.",
      "5. Das **letzte Sitzen** (al-qaʿda al-aḫīra)."
    ]}
  ] });
q(0, 1, "In welchen Gebeten ist das Stehen eine Säule?",
  ["in den nicht freiwilligen Gebeten – für den, der dazu imstande ist", "in allen Gebeten, auch den freiwilligen", "nur im Freitagsgebet", "nur im Witr"],
  "Das Stehen ist Säule in nicht freiwilligen Gebeten für den, der dazu imstande ist; freiwillige darf man im Sitzen beten.");
q(0, 2, "In wie vielen Rakʿa eines Pflichtgebets ist das Rezitieren eines Verses eine Säule?",
  ["in zwei", "in allen", "in einer", "in keiner"],
  "Das Rezitieren eines Verses ist Säule in zwei Gebetseinheiten des Pflichtgebets – im Nafl und Witr in jeder.");
q(0, 2, "In welchen Gebeten ist das Rezitieren in JEDER Rakʿa eine Säule?",
  ["in den freiwilligen Gebeten und im Witr", "nur in den Pflichtgebeten", "nur im Morgengebet", "im Totengebet"],
  "In jeder Gebetseinheit freiwilliger (nafl) Gebete und des Witr-Gebets.");
q(0, 1, "Welches Sitzen ist eine Säule des Gebets?",
  ["das letzte Sitzen", "das erste Sitzen", "jedes Sitzen zwischen den Niederwerfungen", "keines"],
  "Das letzte Sitzen ist eine Säule; das erste Sitzen ist wāǧib.");
q(0, 2, "Was gehört zu den Säulen des Gebets?",
  ["die Reihenfolge zwischen Stehen, Verbeugung und Niederwerfung", "der Salām am Ende", "das Heben der Hände", "die Fātiḥa"],
  "Die Reihenfolge ist eine Säule; Salām und Fātiḥa sind wāǧib, das Heben der Hände Sunna.");
q(0, 1, "Wie viele Säulen des Gebets zählt das Buch auf?",
  ["fünf", "sieben", "drei", "zehn"],
  "Stehen, Rezitieren, Verbeugung und Niederwerfung, Reihenfolge, letztes Sitzen.");

topic({ id: "wajibat", title: "Die Wāǧibāt des Gebets", ar: "واجبات الصلاة", lessons: "Kitāb aṣ-Ṣalāh",
  intro: "Was im Gebet erforderlich (wāǧib) ist – nicht so stark wie eine Säule, aber unerlässlich. Wer eines aus Versehen auslässt, macht die Niederwerfung der Unachtsamkeit.",
  sections: [
    { h: "Die Wāǧibāt", li: [
      "1. Die **Fātiḥa** und eine **weitere Sure** in den **ersten beiden Rakʿa** des Pflichtgebets und in **jeder Rakʿa** des Nafl und Witr.",
      "2. Das **ruhige Ausführen** der Säulen (ṭumaʾnīna).",
      "3. Das **erste Sitzen**.",
      "4. Den **Tašahhud** in **beiden** Sitzungen lesen.",
      "5. Den **Salām zweimal** sagen.",
      "6. Ein **Bittgebet im Witr** (Qunūt).",
      "7. Das **laute Rezitieren** des Imām in den lauten Gebeten.",
      "8. Das **leise Rezitieren** des Imām in den leisen Gebeten."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "**Wāǧib** sind Dinge, die nicht die Stufe des Farḍ erreichen, aber im Gebet **unerlässlich** sind.",
      "Statt einer Sure genügen auch **drei kurze Verse** (so viel wie die kürzeste Sure) oder **ein langer Vers**, der drei kurzen gleichkommt (aṭ-Ṭaḥṭāwī).",
      "**Laut** gelesen wird im **Morgen-, Abend- und Nachtgebet**; **leise** im **Mittags- und Nachmittagsgebet**."
    ]}
  ] });
q(0, 1, "Welches Urteil hat das Rezitieren der Fātiḥa im Gebet nach dem Buch?",
  ["Wāǧib", "Säule (farḍ)", "Sunna", "Mustaḥabb"],
  "Das Lesen der Fātiḥa und einer weiteren Sure steht bei den Wāǧibāt.");
q(0, 1, "Welches Urteil hat das erste Sitzen?",
  ["Wāǧib", "Säule", "Sunna", "Mustaḥabb"],
  "Das erste Sitzen ist wāǧib, das letzte Sitzen eine Säule.");
q(0, 2, "Wie oft sagt man den Salām am Ende des Gebets – und welches Urteil hat er?",
  ["zweimal – wāǧib", "einmal – Säule", "zweimal – Sunna", "dreimal – wāǧib"],
  "Den Ausspruch des Salām zweimal zu sagen, ist wāǧib.");
q(0, 2, "In welchen Rakʿa eines Pflichtgebets ist die Fātiḥa mit einer weiteren Sure wāǧib?",
  ["in den ersten beiden", "in allen", "nur in der ersten", "in den letzten beiden"],
  "Fātiḥa und eine weitere Sure in den ersten beiden Rakʿa des Farḍ – im Nafl und Witr in jeder Rakʿa.");
q(0, 2, "Was bedeutet das „ruhige Ausführen der Säulen“ (ṭumaʾnīna)?",
  ["Verbeugung, Niederwerfung usw. ohne Hast, bis der Körper zur Ruhe kommt", "das leise Rezitieren", "das Schließen der Augen", "das Beten an einem ruhigen Ort"],
  "Das ruhige Ausführen der Säulen ist wāǧib.");
q(0, 2, "In welchem Gebet ist das Bittgebet (Qunūt) wāǧib?",
  ["im Witr", "im Morgengebet", "im Freitagsgebet", "im Totengebet"],
  "Das Sprechen eines Bittgebets in der letzten Rakʿa des Witr ist wāǧib.");
q(0, 2, "Wo wird der Tašahhud gelesen?",
  ["in beiden Sitzungen", "nur im letzten Sitzen", "nur im ersten Sitzen", "im Stehen"],
  "Den Tašahhud in beiden Sitzungen zu lesen, ist wāǧib.");
q(1, 2, "In welchen Gebeten rezitiert der Imām laut?",
  ["Morgen-, Abend- und Nachtgebet", "Mittags- und Nachmittagsgebet", "in allen Gebeten", "nur im Freitagsgebet"],
  "Laut: Faǧr, Maġrib, ʿIšāʾ – leise: Ẓuhr und ʿAṣr. Beides ist für den Imām wāǧib.");
q(1, 3, "Was genügt statt einer weiteren Sure nach der Fātiḥa?",
  ["drei kurze Verse oder ein langer Vers, der ihnen gleichkommt", "ein einzelner kurzer Vers", "ein Bittgebet", "die Basmala"],
  "Eine kurze Sure, drei kurze Verse (so viel wie die kürzeste Sure) oder ein langer Vers, der drei kurzen gleichkommt (aṭ-Ṭaḥṭāwī).");

topic({ id: "sunan", title: "Die Sunna-Handlungen des Gebets", ar: "سنن الصلاة", lessons: "Kitāb aṣ-Ṣalāh",
  intro: "Die 27 Sunna-Handlungen des Gebets – vom Aḏān bis zum Wenden des Kopfes beim Salām.",
  sections: [
    { h: "Vor dem Gebet und im Stehen", li: [
      "1. **Aḏān und Iqāma** für die Pflichtgebete · 2. die **Hände heben** beim Eröffnungs-Takbīr",
      "3. die Lobpreisung (**ṯanāʾ**) · 4. die Zufluchtnahme (**taʿawwuḏ**) · 5. die **Tasmiya**",
      "6. nach der Fātiḥa **leise „Āmīn“** · 7. die **rechte Hand auf die linke** legen"
    ]},
    { h: "In der Verbeugung", li: [
      "8. der **Takbīr** der Verbeugung · 9. die **dreimalige Lobpreisung** („subḥāna rabbiya l-ʿaẓīm“)",
      "10. die **Knie greifen** · 11. die **Finger spreizen** · 12. den **Rücken gerade** machen · 13. sich aus der Verbeugung **erheben**",
      "14. der Imām sagt **„samiʿa Llāhu liman ḥamidah“** · 15. der Mitbetende sagt **„rabbanā wa laka l-ḥamd“** · 16. wer allein betet, **sagt beides**"
    ]},
    { h: "In der Niederwerfung und im Sitzen", li: [
      "17. der **Takbīr** der Niederwerfung · 18. sich aus ihr **erheben** · 19. die **dreimalige Lobpreisung** („subḥāna rabbiya l-aʿlā“)",
      "20. der Mann hält die **Arme von den Seiten** fern · 21. den **Bauch von den Oberschenkeln** · 22. die **Unterarme vom Boden**",
      "23. den **linken Fuß hinlegen** und den **rechten aufstellen**",
      "24. die **Fātiḥa** in den Rakʿa **nach den ersten beiden** des Pflichtgebets",
      "25. die **Ṣalawāt** auf den Propheten ﷺ im letzten Sitzen · 26. **Bittgebete** darin · 27. den **Kopf wenden** bei beiden Salām"
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Die **Tasmiya** spricht man **zu Beginn jeder Rakʿa vor der Fātiḥa** (Marāqī l-Falāḥ).",
      "Die Lobpreisung in der Verbeugung: **„subḥāna rabbiya l-ʿaẓīm“**; in der Niederwerfung: **„subḥāna rabbiya l-aʿlā“**."
    ]}
  ] });
q(0, 1, "Welches Urteil haben Aḏān und Iqāma für die Pflichtgebete nach dem Buch?",
  ["Sunna", "Pflicht", "verpönt", "Säule des Gebets"],
  "Der Aḏān und die Iqāma für die Pflichtgebete sind die erste der Sunna-Handlungen.");
q(0, 1, "Wie sagt man nach der Fātiḥa „Āmīn“ (nach dem Buch)?",
  ["leise", "laut", "gar nicht", "nur der Imām, laut"],
  "Nach der Sūra al-Fātiḥa leise „Āmīn“ zu sagen, ist Sunna.");
q(0, 2, "Was ist die „ṯanāʾ“ im Gebet?",
  ["die Lobpreisung am Anfang nach dem Eröffnungs-Takbīr", "das Bittgebet im Witr", "der Tašahhud", "der Salām"],
  "Die Lobpreisung (ṯanāʾ) gehört zu den Sunna-Handlungen im Stehen, zusammen mit Taʿawwuḏ und Tasmiya.");
q(1, 1, "Was sagt man dreimal in der Verbeugung?",
  ["„subḥāna rabbiya l-ʿaẓīm“", "„subḥāna rabbiya l-aʿlā“", "„rabbanā wa laka l-ḥamd“", "„Allāhu akbar“"],
  "In der Verbeugung „subḥāna rabbiya l-ʿaẓīm“, in der Niederwerfung „subḥāna rabbiya l-aʿlā“.");
q(1, 2, "Was sagt der Mitbetende beim Erheben aus der Verbeugung?",
  ["„rabbanā wa laka l-ḥamd“", "„samiʿa Llāhu liman ḥamidah“", "beides", "nichts"],
  "Der Imām sagt „samiʿa Llāhu liman ḥamidah“, der Mitbetende „rabbanā wa laka l-ḥamd“, der allein Betende vereint beides.");
q(1, 2, "Was sagt jemand, der allein betet, beim Erheben aus der Verbeugung?",
  ["beides: „samiʿa Llāhu liman ḥamidah“ und „rabbanā wa laka l-ḥamd“", "nur „samiʿa Llāhu liman ḥamidah“", "nur „rabbanā wa laka l-ḥamd“", "„Allāhu akbar“"],
  "Der allein Betende vereint beides.");
q(1, 1, "Was ist in der Verbeugung Sunna?",
  ["die Knie greifen, die Finger spreizen und den Rücken gerade machen", "die Hände auf die Hüfte legen", "den Kopf heben", "die Augen schließen"],
  "Greifen der Knie, Spreizen der Finger und Geradestellen des Rückens sind Sunna.");
q(2, 1, "Was sagt man dreimal in der Niederwerfung?",
  ["„subḥāna rabbiya l-aʿlā“", "„subḥāna rabbiya l-ʿaẓīm“", "„Allāhu akbar“", "„astaġfiru Llāh“"],
  "Die dreimalige Lobpreisung in der Niederwerfung: „subḥāna rabbiya l-aʿlā“.");
q(2, 2, "Was hält der Mann in der Niederwerfung fern (Sunna)?",
  ["die Arme von den Seiten, den Bauch von den Oberschenkeln und die Unterarme vom Boden", "die Stirn vom Boden", "die Knie vom Boden", "die Füße vom Boden"],
  "Das Fernhalten der Arme von den Seiten, des Bauches von den Oberschenkeln und der Unterarme vom Boden ist für den Mann Sunna.");
q(2, 2, "Wie sitzt man nach der Sunna im Gebet?",
  ["linken Fuß hinlegen, rechten Fuß aufstellen", "beide Füße aufstellen", "auf beiden Fersen", "mit gekreuzten Beinen"],
  "Das Hinlegen des linken Fußes und das Aufstellen des rechten ist Sunna.");
q(2, 2, "Welches Urteil hat die Fātiḥa in der 3. und 4. Rakʿa eines Pflichtgebets nach dem Buch?",
  ["Sunna", "Wāǧib", "Säule", "verpönt"],
  "Das Rezitieren der Fātiḥa nach den ersten beiden Rakʿa der Pflichtgebete steht bei den Sunna-Handlungen.");
q(2, 2, "Wo sind die Ṣalawāt auf den Propheten ﷺ Sunna?",
  ["im letzten Sitzen", "im ersten Sitzen", "in der Verbeugung", "im Stehen"],
  "Die Ṣalawāt im letzten Sitzen und Bittgebete darin sind Sunna.");
q(3, 3, "Wann spricht man im Gebet die Tasmiya (Basmala)?",
  ["zu Beginn jeder Rakʿa vor der Fātiḥa", "nur einmal in der ersten Rakʿa", "vor jeder Sure nach der Fātiḥa", "gar nicht"],
  "Die Tasmiya spricht man zu Beginn jeder Gebetseinheit vor der Fātiḥa (Marāqī l-Falāḥ).");

topic({ id: "mufsidat", title: "Was das Gebet ungültig macht", ar: "مفسدات الصلاة", lessons: "Kitāb aṣ-Ṣalāh",
  intro: "Dreizehn Dinge, die das Gebet ungültig machen – von der menschlichen Rede bis zum Lesen aus dem Muṣḥaf.",
  sections: [
    { h: "Was das Gebet ungültig macht", li: [
      "1. die (menschliche) **Rede** · 2. ein **Bittgebet, das der Rede ähnelt** · 3. jemanden absichtlich mit dem **Salām grüßen** · 4. und den Gruß **mündlich erwidern**",
      "5. **übermäßige Bewegung** · 6. die **Brust von der Qibla abwenden** · 7. **Essen und Trinken**",
      "8. ohne Entschuldigung **husten, stöhnen** und „ah“-Laute von sich geben · 9. **hörbares Weinen** wegen eines Schmerzes oder Unglücks",
      "10. dem Niesenden **„yarḥamuka Llāh“** sagen · 11. auf Rede **antworten** – selbst mit Qurʾān-Versen oder Gedenkformeln",
      "12. einen **anderen Imām** (außerhalb des eigenen Gebets) **korrigieren** · 13. aus dem **Muṣḥaf** rezitieren"
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Beim Bittgebet unterscheidet man: Was man **nur von Allāh** erbitten kann (Vergebung, Wohlergehen) macht das Gebet **nicht** ungültig; was man **auch von Menschen** erbitten kann (bestimmte Kleidung, die Heirat mit einer bestimmten Person) macht es **ungültig** (aṭ-Ṭaḥṭāwī).",
      "**Übermäßige Bewegung**: Ein Beobachter, der nicht weiß, dass man betet, würde wegen der Bewegung **nicht annehmen**, dass man im Gebet ist.",
      "Ausgenommen ist **hörbares Weinen** aus dem **Gedenken an Paradies und Hölle** – es macht das Gebet nicht ungültig."
    ]}
  ] });
q(0, 1, "Macht Essen und Trinken das Gebet ungültig?",
  ["ja", "nein, nur das Sprechen", "nur, wenn es mehr als ein Bissen ist", "nur im Pflichtgebet"],
  "Das Essen und Trinken steht unter den Dingen, die das Gebet ungültig machen.");
q(0, 1, "Was macht das Gebet ungültig?",
  ["dem Niesenden „yarḥamuka Llāh“ sagen", "nach der Fātiḥa leise „Āmīn“ sagen", "die Hände beim Takbīr heben", "die Finger in der Verbeugung spreizen"],
  "Dem Niesenden „yarḥamuka Llāh“ zu sagen, ist Antwort auf einen Menschen und macht das Gebet ungültig.");
q(0, 2, "Macht das Rezitieren aus dem Muṣḥaf das Gebet ungültig?",
  ["ja", "nein, es ist Sunna", "nur im Pflichtgebet", "nur, wenn man laut liest"],
  "Das Rezitieren aus dem Muṣḥaf steht als 13. Punkt unter den Dingen, die das Gebet ungültig machen.");
q(0, 2, "Jemand antwortet im Gebet auf eine Frage mit einem Qurʾān-Vers. Was gilt?",
  ["das Gebet wird ungültig", "das ist erlaubt, weil es Qurʾān ist", "das ist Sunna", "das Gebet bleibt gültig, ist aber verpönt"],
  "Das Antworten auf Rede macht das Gebet ungültig, selbst wenn es mit Qurʾān-Versen oder Gedenkformeln geschieht.");
q(0, 2, "Man korrigiert im Gebet einen Imām, dem man nicht folgt. Was gilt?",
  ["das Gebet wird ungültig", "das ist Sunna", "das ist wāǧib", "das Gebet bleibt gültig"],
  "Einen anderen Imām außerhalb des eigenen Gebets zu korrigieren, macht das Gebet ungültig.");
q(0, 2, "Welches Weinen macht das Gebet ungültig?",
  ["hörbares Weinen wegen eines Schmerzes oder Unglücks", "jedes Weinen", "stilles Weinen aus Ehrfurcht", "Weinen beim Gedenken an das Paradies"],
  "Hörbares Weinen wegen Schmerz oder Unglück macht ungültig; ausgenommen ist das Weinen beim Gedenken an Paradies und Hölle.");
q(1, 3, "Man bittet im Gebet um die Heirat mit einer bestimmten Person. Was gilt?",
  ["das Gebet wird ungültig – so etwas kann man auch von Menschen erbitten", "das Gebet bleibt gültig", "das ist Sunna", "nur im Witr erlaubt"],
  "Ein Bittgebet, das der Rede ähnelt (um Dinge, die man auch von Menschen erbitten kann), macht das Gebet ungültig.");
q(1, 3, "Welches Bittgebet macht das Gebet NICHT ungültig?",
  ["um jenseitige Vergebung – das kann man nur von Allāh erbitten", "um ein bestimmtes Kleidungsstück", "um ein neues Auto", "um eine bestimmte Arbeitsstelle"],
  "Was man nur von Allāh erbitten kann, macht das Gebet nicht ungültig (aṭ-Ṭaḥṭāwī).");
q(1, 2, "Woran misst man „übermäßige Bewegung“ im Gebet?",
  ["ein Beobachter würde nicht mehr annehmen, dass man betet", "an mehr als drei Bewegungen", "an jeder Bewegung der Hand", "an der Dauer des Gebets"],
  "Maßstab: Eine Person, die nicht weiß, dass man betet, nimmt wegen der vielen Bewegung nicht an, dass man im Gebet ist.");

topic({ id: "makruhat", title: "Was im Gebet verpönt ist", ar: "مكروهات الصلاة", lessons: "Kitāb aṣ-Ṣalāh",
  intro: "25 Dinge, die das Gebet nicht ungültig machen, aber verpönt (makrūh) sind – in der Haltung, der Kleidung und am Ort.",
  sections: [
    { h: "Haltung und Kleidung", li: [
      "1. unnötig mit **Kleidung und Körper spielen** · 2. die **Hände auf die Hüfte** legen · 3. den **Kopf wenden**",
      "4. wie ein **Hund sitzen** (iqʿāʾ) · 5. die **Haare zu einem Zopf** binden · 6. den **Turban** so binden, dass die **Kopfmitte frei** bleibt · 7. den **Kopf nicht bedecken**",
      "8. die Kleidung von den **Schultern herunterhängen** lassen · 9. in **Arbeitskleidung** beten · 10. mit **Drang zur Notdurft** beten",
      "11. die **Augen schließen** · 12. sie **zum Himmel heben** · 13. die **Erde von der Stirn wischen**",
      "14. Kleidung mit **Bildern** tragen · 15. sich ohne Grund an eine **Wand stützen**"
    ]},
    { h: "Ort und Umstände", li: [
      "16. in Richtung des **Gesichts eines anderen** beten · 17. in Richtung **Feuer**",
      "18. auf einem **Weg** · 19. in einem **Badezimmer** · 20. auf einem **Friedhof** · 21. auf dem **Land eines anderen** ohne seine Zustimmung",
      "22. bei **Essen**, das man begehrt · 23. mit einer Unreinheit, die die Gültigkeit **nicht hindert**",
      "24. **außerhalb des Stehens** rezitieren · 25. in der **zweiten Rakʿa länger** rezitieren als in der ersten"
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Das **Iqʿāʾ** ist **verbotsnahe verpönt (makrūh taḥrīman)**: mit dem Gesäß auf dem Boden sitzen, die Knie aufgestellt und an die Brust gezogen, die Hände auf dem Boden (aṭ-Ṭaḥṭāwī).",
      "Mit den **Bildern** auf der Kleidung sind Bilder von **Lebewesen** gemeint."
    ]}
  ] });
q(0, 1, "Ist es verpönt, im Gebet die Augen zu schließen?",
  ["ja", "nein, es ist Sunna", "nein, es ist wāǧib", "es macht das Gebet ungültig"],
  "Das Schließen der Augen und das Heben zum Himmel stehen bei den verpönten Dingen.");
q(0, 1, "Was ist im Gebet verpönt?",
  ["die Hände auf die Hüfte legen", "die rechte Hand auf die linke legen", "die Knie in der Verbeugung greifen", "den linken Fuß hinlegen"],
  "Das Ablegen der Hände auf die Hüfte ist verpönt; die anderen Dinge sind Sunna.");
q(0, 2, "Was ist das Iqʿāʾ und wie ist es eingestuft?",
  ["Sitzen wie ein Hund – verbotsnahe verpönt", "Sitzen auf den Fersen – Sunna", "Stehen auf einem Bein – erlaubt", "Verbeugen ohne Ruhe – ungültig"],
  "Mit dem Gesäß auf dem Boden, Knie an der Brust, Hände auf dem Boden – makrūh taḥrīman.");
q(0, 2, "Ist es verpönt, mit Drang zur Notdurft zu beten?",
  ["ja", "nein", "nur im Freitagsgebet", "es macht das Gebet ungültig"],
  "Mit dem Drang der Notdurft zu beten, ist verpönt.");
q(0, 2, "Welche Bilder auf der Kleidung machen das Gebet verpönt?",
  ["Bilder von Lebewesen", "jede Farbe", "Schriftzüge", "Bilder von Bäumen und Bergen"],
  "Gemeint sind Bilder von Lebewesen.");
q(0, 2, "Ist es verpönt, mit unbedecktem Kopf zu beten?",
  ["ja – nach dem Buch verpönt", "nein, es ist Sunna", "es macht das Gebet ungültig", "nur für Frauen erlaubt"],
  "Das Nicht-Bedecken des Kopfes steht unter den verpönten Dingen.");
q(1, 1, "Wo ist das Gebet nach dem Buch verpönt?",
  ["auf einem Friedhof", "in einer Moschee", "zu Hause", "in einem Garten"],
  "Verpönt ist das Gebet auf einem Weg, in einem Badezimmer, auf einem Friedhof und auf dem Land eines anderen ohne seine Zustimmung.");
q(1, 2, "In der zweiten Rakʿa länger rezitieren als in der ersten – was gilt?",
  ["verpönt", "Sunna", "wāǧib", "macht das Gebet ungültig"],
  "Das längere Rezitieren in der zweiten Gebetseinheit im Vergleich zur ersten ist verpönt.");
q(1, 2, "Man betet, während Essen da ist, das man begehrt. Was gilt?",
  ["es ist verpönt", "das Gebet ist ungültig", "es ist Sunna", "es ist wāǧib, zuerst zu beten"],
  "Das Gebet bei Anwesenheit von Essen, das man begehrt, ist verpönt.");
q(1, 3, "Man betet mit einer Unreinheit, die die Gültigkeit nicht hindert (z. B. weniger als ein Dirham). Was gilt?",
  ["das Gebet ist gültig, aber verpönt", "das Gebet ist ungültig", "das Gebet ist ohne jede Einschränkung in Ordnung", "man muss es danach wiederholen"],
  "Unreinheit, die nicht hindernd ist, macht das Gebet verpönt – unter einem Dirham leicht verpönt.");

topic({ id: "witr", title: "Witr und die freiwilligen Gebete", ar: "الوتر والنوافل", lessons: "Kitāb aṣ-Ṣalāh",
  intro: "Das Witr-Gebet ist wāǧib. Dazu die Sunna-Gebete vor und nach den Pflichtgebeten und die empfohlenen Gebete.",
  sections: [
    { h: "Das Witr-Gebet", li: [
      "Das Witr ist **wāǧib** und besteht aus **drei Rakʿa mit einem Taslīm**.",
      "In **jeder** Rakʿa liest man die **Fātiḥa und eine weitere Sure**.",
      "In der **dritten** Rakʿa spricht man **vor der Verbeugung** ein Bittgebet (**Qunūt**).",
      "Im **Ramaḍān** betet man das Witr **in der Gemeinschaft**."
    ]},
    { h: "Die Sunna-Gebete", li: [
      "**Zwei Rakʿa vor dem Morgengebet** und je **zwei nach dem Mittags-, Abend- und Nachtgebet**.",
      "**Vier Rakʿa vor dem Mittags- und dem Freitagsgebet** und **vier nach dem Freitagsgebet** – jeweils mit **einem Taslīm**."
    ]},
    { h: "Die empfohlenen Gebete (mustaḥabb)", li: [
      "**Vier** Rakʿa **vor** dem Nachmittags- und dem Nachtgebet.",
      "**Vier** Rakʿa **nach** dem Nacht- und dem Mittagsgebet.",
      "**Sechs** Rakʿa **nach** dem Abendgebet."
    ]}
  ] });
q(0, 1, "Welches Urteil hat das Witr-Gebet?",
  ["Wāǧib", "Farḍ", "Sunna muʾakkada", "Mustaḥabb"],
  "„Das Witr-Gebet ist wāǧib.“");
q(0, 1, "Aus wie vielen Rakʿa besteht das Witr?",
  ["drei, mit einem Taslīm", "eine", "drei, mit zwei Taslīm", "fünf"],
  "Es besteht aus drei Gebetseinheiten mit einem Taslīm.");
q(0, 2, "Wann spricht man im Witr das Qunūt?",
  ["in der dritten Rakʿa vor der Verbeugung", "in der dritten Rakʿa nach der Verbeugung", "in der ersten Rakʿa", "nach dem Salām"],
  "In der dritten Gebetseinheit spricht man vor der Verbeugung ein Bittgebet (qunūt).");
q(0, 2, "Wann betet man das Witr in der Gemeinschaft?",
  ["im Ramaḍān", "jeden Freitag", "nie – immer allein", "nur an den Festtagen"],
  "Im Monat Ramaḍān betet man das Witr in der Gemeinschaft.");
q(0, 2, "Was liest man in jeder Rakʿa des Witr?",
  ["die Fātiḥa und eine weitere Sure", "nur die Fātiḥa", "nur in den ersten beiden eine Sure", "nur das Qunūt"],
  "In jeder seiner Gebetseinheiten liest man die Fātiḥa und eine weitere Sure.");
q(1, 1, "Wie viele Rakʿa Sunna betet man vor dem Morgengebet?",
  ["zwei", "vier", "keine", "sechs"],
  "Zwei Gebetseinheiten vor dem Morgengebet sind Sunna.");
q(1, 2, "Wie viele Rakʿa Sunna betet man vor dem Mittagsgebet – und wie?",
  ["vier, mit einem Taslīm", "zwei", "vier, mit zwei Taslīm", "sechs"],
  "Vier Rakʿa vor dem Mittags- und dem Freitagsgebet und vier danach – alle mit einem Taslīm.");
q(1, 2, "Wie viele Rakʿa Sunna betet man nach dem Freitagsgebet?",
  ["vier", "zwei", "keine", "sechs"],
  "Vier nach dem Freitagsgebet, mit einem Taslīm.");
q(1, 2, "Nach welchen Pflichtgebeten sind je zwei Rakʿa Sunna?",
  ["nach dem Mittags-, Abend- und Nachtgebet", "nach dem Morgen- und Nachmittagsgebet", "nach allen fünf", "nur nach dem Abendgebet"],
  "Zwei nach dem Mittags-, Abend- und Nachtgebet.");
q(2, 2, "Wie viele empfohlene Rakʿa betet man nach dem Abendgebet?",
  ["sechs", "zwei", "vier", "acht"],
  "Sechs Gebetseinheiten nach dem Abendgebet sind empfohlen (mustaḥabb).");
q(2, 3, "Welches Gebet hat vier empfohlene Rakʿa davor?",
  ["das Nachmittagsgebet (und das Nachtgebet)", "das Morgengebet", "das Abendgebet", "das Freitagsgebet"],
  "Empfohlen: vier vor dem Nachmittags- und dem Nachtgebet; vier vor dem Mittags- und Freitagsgebet sind dagegen Sunna.");
q(2, 3, "Vier Rakʿa nach dem Nachtgebet – welches Urteil nennt das Buch?",
  ["empfohlen (mustaḥabb)", "Sunna muʾakkada", "wāǧib", "verpönt"],
  "Zwei nach dem Nachtgebet sind Sunna; vier nach dem Nacht- und Mittagsgebet sind empfohlen.");

topic({ id: "sahw", title: "Die Niederwerfung der Unachtsamkeit", ar: "سجود السهو", lessons: "Kitāb aṣ-Ṣalāh",
  intro: "Wann man am Ende des Gebets zwei Niederwerfungen macht – und was gilt, wenn man das erste oder letzte Sitzen vergessen hat.",
  sections: [
    { h: "Wann sie nötig ist", li: [
      "Wer eine **Wāǧib-Handlung** auslässt – auch wenn das **mehrmals** vorkommt –, macht **zwei Niederwerfungen** mit **Tašahhud und Salām**.",
      "Der **Mitbetende** macht sie wegen der Unachtsamkeit **seines Imām** – aber **nicht** wegen seiner **eigenen**."
    ]},
    { h: "Das vergessene Sitzen", li: [
      "Wer das **erste Sitzen** vergessen hat, kehrt zu ihm zurück, **solange er nicht aufgestanden** ist.",
      "Wer das **letzte Sitzen** vergessen hat, kehrt zurück, **solange er sich nicht niedergeworfen** hat. Hat er sich schon niedergeworfen, wird das **Farḍ zu einem Nafl**, und er fügt eine **sechste Rakʿa** hinzu.",
      "Wer das **letzte Sitzen gesessen** hat und dann aufgestanden ist, kehrt zurück und gibt den **Salām**. Hat er sich schon niedergeworfen, ist das **Farḍ vollständig**; er fügt eine **sechste Rakʿa** hinzu und macht dann die Niederwerfung der Unachtsamkeit."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Das gilt für das Auslassen **aus Versehen**. Wer ein Wāǧib **absichtlich** auslässt, **sündigt**; es wird für ihn **wāǧib, das Gebet in seiner Zeit zu wiederholen**. Die Niederwerfung der Unachtsamkeit macht er dann nicht (aṭ-Ṭaḥṭāwī).",
      "Beim Aufstehen aus dem ersten Sitzen: War man dem **Stehen näher**, steht man ganz auf; war man dem **Sitzen näher**, setzt man sich wieder.",
      "Kehrt man zum vergessenen letzten Sitzen zurück, macht man die Niederwerfung der Unachtsamkeit – **gleich**, ob man dem Stehen oder dem Sitzen näher war.",
      "Die **sechste Rakʿa** gilt für Gebete mit **vier** Rakʿa. Beim **Faǧr** fügt man eine **vierte** hinzu; beim **Maġrib** ist man schon in der vierten und fügt **nichts** hinzu."
    ]}
  ] });
q(0, 1, "Wann wird die Niederwerfung der Unachtsamkeit verpflichtend?",
  ["wenn man eine Wāǧib-Handlung aus Versehen auslässt", "wenn man eine Sunna auslässt", "wenn man eine Säule auslässt", "nach jedem Gebet"],
  "Beim Auslassen einer Wāǧib-Handlung werden zwei Niederwerfungen mit Tašahhud und Salām verpflichtend.");
q(0, 1, "Wie viele Niederwerfungen macht man bei der Niederwerfung der Unachtsamkeit?",
  ["zwei – mit Tašahhud und Salām", "eine", "drei", "vier"],
  "Zwei Niederwerfungen mit Tašahhud und Salām.");
q(0, 2, "Man hat im selben Gebet zwei Wāǧib-Handlungen vergessen. Wie viele Sahw-Niederwerfungen?",
  ["einmal zwei Niederwerfungen", "zweimal zwei Niederwerfungen", "vier Niederwerfungen, je zwei pro Fehler", "keine – das Gebet ist ungültig"],
  "Unabhängig davon, ob es wiederholt vorkommt, sind es zwei Niederwerfungen.");
q(0, 2, "Der Imām hat aus Versehen ein Wāǧib ausgelassen. Was gilt für den Mitbetenden?",
  ["er macht die Niederwerfung mit dem Imām", "er macht nichts", "er wiederholt das Gebet", "er macht sie nach dem Salām allein"],
  "Die Niederwerfung ist für den Mitbetenden wegen der Unachtsamkeit seines Imām notwendig.");
q(0, 2, "Der Mitbetende selbst hat aus Versehen ein Wāǧib ausgelassen. Was gilt?",
  ["er macht keine Niederwerfung der Unachtsamkeit", "er macht sie allein nach dem Salām", "er muss das Gebet wiederholen", "er macht sie vor dem Imām"],
  "Die Niederwerfung ist für den Mitbetenden nicht durch seine eigene Unachtsamkeit notwendig.");
q(1, 1, "Man hat das erste Sitzen vergessen. Bis wann kehrt man zurück?",
  ["solange man nicht aufgestanden ist", "solange man sich nicht niedergeworfen hat", "bis zum Salām", "nie"],
  "Wer das erste Sitzen ausgelassen hat, kehrt zurück, solange er nicht aufgestanden ist.");
q(1, 2, "Man hat das letzte Sitzen vergessen. Bis wann kehrt man zurück?",
  ["solange man sich in der zusätzlichen Rakʿa nicht niedergeworfen hat", "solange man nicht aufgestanden ist", "bis zum Ende der Gebetszeit", "nie"],
  "Beim letzten Sitzen kehrt man zurück, solange man sich nicht niedergeworfen hat.");
q(1, 3, "Man hat in einem Gebet mit vier Rakʿa das letzte Sitzen vergessen und sich in der fünften schon niedergeworfen. Was gilt?",
  ["das Farḍ wird zum Nafl; man fügt eine sechste Rakʿa hinzu", "das Farḍ ist gültig; man gibt sofort den Salām", "man setzt sich hin und macht Sahw", "das Gebet ist ganz ungültig, ohne weitere Handlung"],
  "Hat man sich niedergeworfen, wird das Farḍ-Gebet zu einem Nafl-Gebet, und man hängt eine sechste Gebetseinheit an.");
q(1, 3, "Man hat das letzte Sitzen gesessen, ist dann aufgestanden und hat sich in der fünften Rakʿa schon niedergeworfen. Was gilt?",
  ["das Farḍ ist vollständig; man fügt eine sechste Rakʿa hinzu und macht dann Sahw", "das Farḍ wird zum Nafl", "man muss das Gebet wiederholen", "man gibt sofort den Salām ohne Sahw"],
  "Hat man das letzte Sitzen gesessen, ist das Farḍ vervollständigt; man fügt eine sechste Rakʿa hinzu und macht dann die Niederwerfung der Unachtsamkeit.");
q(2, 3, "Jemand lässt ein Wāǧib absichtlich aus. Was gilt?",
  ["er sündigt; es ist wāǧib, das Gebet in seiner Zeit zu wiederholen", "er macht einfach Sahw", "nichts – Wāǧib ist nicht wichtig", "das Gebet ist gültig ohne Folgen"],
  "Beim absichtlichen Auslassen wird man sündig und muss das Gebet in seiner Zeit wiederholen – Sahw ersetzt das nicht (aṭ-Ṭaḥṭāwī).");
q(2, 3, "Man vergisst beim Faǧr-Gebet das letzte Sitzen und wirft sich in der dritten Rakʿa nieder. Wie viele Rakʿa fügt man hinzu?",
  ["eine – zur vierten", "eine – zur sechsten", "zwei", "keine"],
  "Beim Faǧr kann man eine vierte Gebetseinheit hinzufügen; die sechste gilt für Gebete mit vier Rakʿa.");

topic({ id: "janaza", title: "Das Totengebet", ar: "صلاة الجنازة", lessons: "Kitāb aṣ-Ṣalāh",
  intro: "Die Voraussetzungen, Säulen und Sunna-Handlungen des Totengebets mit seinen vier Takbīr.",
  sections: [
    { h: "Voraussetzungen und Säulen", li: [
      "**Voraussetzungen**: der **Islām** des Toten und seine **Reinheit**.",
      "**Säulen**: die **Takbīrāt** und das **Stehen**."
    ]},
    { h: "Der Ablauf (Sunna)", li: [
      "Nach dem **ersten** Takbīr die **Lobpreisung** (ṯanāʾ).",
      "Nach dem **zweiten** Takbīr die **Ṣalawāt** auf den Propheten ﷺ.",
      "Nach dem **dritten** Takbīr das **Bittgebet** (für den Toten).",
      "Nach dem **vierten** Takbīr gibt man den **Salām**."
    ]}
  ] });
q(0, 1, "Was sind die Säulen des Totengebets?",
  ["die Takbīrāt und das Stehen", "Verbeugung und Niederwerfung", "die Fātiḥa und eine Sure", "das letzte Sitzen"],
  "Das Totengebet hat keine Verbeugung und keine Niederwerfung; seine Säulen sind die Takbīrāt und das Stehen.");
q(0, 2, "Was sind die Voraussetzungen des Totengebets (den Toten betreffend)?",
  ["sein Islām und seine Reinheit", "sein Alter und sein Wohnort", "dass er Ḥanafit war", "dass er in einer Moschee liegt"],
  "Seine Voraussetzungen sind der Islām des Toten und seine Reinheit.");
q(1, 1, "Was spricht man nach dem zweiten Takbīr des Totengebets?",
  ["die Ṣalawāt auf den Propheten ﷺ", "die Lobpreisung", "das Bittgebet für den Toten", "den Salām"],
  "1. Lobpreisung, 2. Ṣalawāt, 3. Bittgebet, 4. Salām.");
q(1, 1, "Wie viele Takbīr hat das Totengebet?",
  ["vier", "drei", "fünf", "sieben"],
  "Nach dem vierten Takbīr gibt man abschließend den Salām.");
q(1, 2, "Was folgt im Totengebet auf den dritten Takbīr?",
  ["das Bittgebet", "die Ṣalawāt", "die Lobpreisung", "die Fātiḥa"],
  "Nach dem dritten Takbīr spricht man das Bittgebet.");
q(1, 2, "Was spricht man nach dem ersten Takbīr des Totengebets?",
  ["die Lobpreisung (ṯanāʾ)", "die Ṣalawāt", "das Bittgebet", "nichts"],
  "Nach dem ersten Takbīr die Lobpreisung.");

/* ================= Das Buch der Zakāt ================= */

topic({ id: "zakat", title: "Die Zakāt und ihr Niṣāb", ar: "الزكاة", lessons: "Kitāb az-Zakāh",
  intro: "Für wen die Zakāt Pflicht ist, der Mindestbetrag (niṣāb) bei Tieren, Gold und Silber – und das Zehntel der Ernte.",
  sections: [
    { h: "Für wen sie Pflicht ist", li: [
      "Die Zakāt ist **farḍ** für jeden **freien, verantwortlichen (mukallaf) Muslim**, der einen **Niṣāb** besitzt – ein **jährlicher** Mindestbetrag, dessen Wert **potenziell wächst** und der **frei von Schulden** ist."
    ]},
    { h: "Der Niṣāb der Tiere", li: [
      "**Kamele**: Niṣāb bei **5 Kamelen** – darin ist **ein Schaf** fällig.",
      "**Kühe**: Niṣāb bei **30 Kühen** – darin ist **eine Kuh, die ihr erstes Lebensjahr vollendet** hat, fällig.",
      "**Schafe und Ziegen**: Niṣāb bei **40** – darin ist **ein Schaf bzw. eine Ziege** fällig."
    ]},
    { h: "Gold und Silber", li: [
      "Der Niṣāb von **Gold**: **20 Miṯqāl**. Der Niṣāb von **Silber**: **200 Dirham**.",
      "Darin sind **2,5 %** als Zakāt fällig."
    ]},
    { h: "Das Zehntel (ʿušr) der Ernte", li: [
      "Von der Ernte ist das **Zehntel (10 %)** fällig, wenn sie durch **Regen oder fließendes Wasser** bewässert wurde.",
      "Bei **künstlicher Bewässerung** ist die **Hälfte davon (5 %)** fällig."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Auch die Menge des **Miṯqāl** ist umstritten. **10 Dirham entsprechen 7 Miṯqāl**; danach wäre ein Miṯqāl etwa **4,464 g** und **20 Miṯqāl etwa 89,28 g** Gold (ʿAlī Ǧumʿa).",
      "Mit einem Dirham von etwa **3,125 g** wären **200 Dirham etwa 625 g** Silber."
    ]}
  ] });
q(0, 1, "Welches Urteil hat die Zakāt?",
  ["Farḍ (Pflicht)", "Wāǧib", "Sunna muʾakkada", "Mustaḥabb"],
  "Die Zakāt ist farḍ für jeden freien, verantwortlichen Muslim mit Niṣāb.");
q(0, 2, "Welche Bedingung gehört zum Niṣāb der Zakāt?",
  ["er ist frei von Schulden und wächst potenziell", "er muss in Gold vorliegen", "er muss seit zehn Jahren bestehen", "er muss in einer Bank liegen"],
  "Ein jährlicher Mindestbetrag, dessen Wert potenziell wächst und der frei von Schulden ist.");
q(0, 2, "Wer muss nach dem Buch Zakāt geben?",
  ["jeder freie, verantwortliche Muslim mit Niṣāb", "jeder Mensch, der arbeitet", "nur Händler", "nur, wer den Ḥaǧǧ gemacht hat"],
  "Frei, verantwortlich gemacht (mukallaf), Muslim, mit einem Niṣāb.");
q(1, 1, "Ab wie vielen Kamelen ist Zakāt fällig?",
  ["ab 5", "ab 30", "ab 40", "ab 1"],
  "Der Niṣāb des Kamels liegt bei fünf Kamelen; darin ist ein Schaf fällig.");
q(1, 2, "Was ist bei 5 Kamelen als Zakāt fällig?",
  ["ein Schaf", "ein Kamel", "2,5 % ihres Werts in Geld", "eine Kuh"],
  "Bei fünf Kamelen ist ein Schaf als Zakāt verpflichtend.");
q(1, 1, "Ab wie vielen Kühen ist Zakāt fällig?",
  ["ab 30", "ab 5", "ab 40", "ab 100"],
  "Der Niṣāb der Kuh liegt bei 30 Kühen.");
q(1, 2, "Was ist bei 30 Kühen als Zakāt fällig?",
  ["eine Kuh, die ihr erstes Lebensjahr vollendet hat", "ein Schaf", "zwei Kühe", "eine dreijährige Kuh"],
  "Darin ist eine Kuh, die das erste Lebensjahr vollendet hat, notwendig.");
q(1, 1, "Ab wie vielen Schafen oder Ziegen ist Zakāt fällig?",
  ["ab 40", "ab 30", "ab 5", "ab 20"],
  "Der Niṣāb der Ziege und des Schafs liegt bei 40; darin ist eines fällig.");
q(2, 1, "Wie viel Zakāt ist auf Gold und Silber fällig?",
  ["2,5 %", "10 %", "5 %", "20 %"],
  "Auf Gold (ab 20 Miṯqāl) und Silber (ab 200 Dirham) sind 2,5 % fällig.");
q(2, 2, "Was ist der Niṣāb von Gold?",
  ["20 Miṯqāl", "200 Dirham", "40 Miṯqāl", "5 Miṯqāl"],
  "Der Niṣāb von Gold liegt bei 20 Miṯqāl, der von Silber bei 200 Dirham.");
q(2, 2, "Was ist der Niṣāb von Silber?",
  ["200 Dirham", "20 Miṯqāl", "100 Dirham", "40 Dirham"],
  "Der Niṣāb von Silber liegt bei 200 Dirham.");
q(3, 2, "Wie viel ist von einer Ernte fällig, die durch Regen bewässert wurde?",
  ["ein Zehntel (10 %)", "2,5 %", "die Hälfte des Zehntels (5 %)", "nichts"],
  "Bei Bewässerung durch Regen und fließendes Wasser ist das Zehntel fällig.");
q(3, 2, "Wie viel ist von einer künstlich bewässerten Ernte fällig?",
  ["die Hälfte des Zehntels (5 %)", "ein Zehntel (10 %)", "2,5 %", "ein Viertel"],
  "Bei künstlich Bewässertem ist die Hälfte des Zehntels notwendig.");
q(4, 3, "Wie viel wiegen 20 Miṯqāl Gold nach der Berechnung von ʿAlī Ǧumʿa etwa?",
  ["etwa 89,28 g", "etwa 625 g", "etwa 20 g", "etwa 200 g"],
  "10 Dirham = 7 Miṯqāl; ein Miṯqāl ≈ 4,464 g, also 20 Miṯqāl ≈ 89,28 g.");
q(4, 3, "Wie viel wiegen 200 Dirham Silber (bei 3,125 g pro Dirham) etwa?",
  ["etwa 625 g", "etwa 89 g", "etwa 200 g", "etwa 3 kg"],
  "200 × 3,125 g ≈ 625 g.");
q(4, 3, "Wie viele Miṯqāl entsprechen 10 Dirham?",
  ["7", "10", "5", "20"],
  "Zehn Dirham entsprechen sieben Miṯqāl.");

topic({ id: "masarif", title: "Die Empfänger der Zakāt", ar: "مصارف الزكاة", lessons: "Kitāb az-Zakāh",
  intro: "Wem man die Zakāt geben darf – und wem nicht.",
  sections: [
    { h: "Wer sie bekommen darf", li: [
      "Der **Arme** (faqīr), der **Bedürftige** (miskīn), der **Beauftragte**, der sie einsammelt und verwahrt, der **Sklave**, der sich freikaufen will, der **Verschuldete**, wer **auf dem Wege Allāhs** ist, und der (mittellose) **Reisende**.",
      "Die Zakāt kann **allen** oder auch nur **einigen** von ihnen gegeben werden."
    ]},
    { h: "Wer sie nicht bekommen darf", li: [
      "**Vorfahren** (Eltern, Großeltern …) und **Nachfahren** (Kinder, Enkel …), der **Ehepartner**, der **eigene Sklave**,",
      "der **Reiche**, sein (minderjähriges) **Kind** und sein **Sklave**, und der Stamm der **Banū Hāšim**.",
      "Wer die **Nahrung seines Tages** hat, soll **nicht** (um Zakāt oder Ṣadaqa) bitten."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "**Faqīr**: jemand, der **wenig** hat. **Miskīn**: jemand, der **gar nichts** hat (al-Muġaynī, al-Lubāb).",
      "Mit dem **Reisenden** ist nicht jeder Reisende gemeint, sondern wer **in seiner Heimat Besitz** hat, aber dort, wo er ist, **nichts** hat (al-Marġīnānī, al-Hidāya).",
      "Die **Banū Hāšim** sind die **Familie des Propheten** ﷺ."
    ]}
  ] });
q(0, 1, "Darf man die Zakāt einem Verschuldeten geben?",
  ["ja – er gehört zu den Empfängern", "nein", "nur, wenn er ein Verwandter ist", "nur am Freitag"],
  "Der Verschuldete steht unter den Zakāt-Begünstigten.");
q(0, 2, "Muss die Zakāt auf alle Empfängergruppen verteilt werden?",
  ["nein – sie kann allen oder nur einigen gegeben werden", "ja, gleichmäßig auf alle", "ja, mindestens auf drei", "nur an eine einzige Gruppe"],
  "Die Zakāt kann allen von ihnen oder auch nur manchen gegeben werden.");
q(1, 1, "Darf man die eigene Zakāt seinen Eltern geben?",
  ["nein – Vorfahren dürfen sie nicht bekommen", "ja, sie haben Vorrang", "ja, wenn sie arm sind", "nur der Mutter"],
  "Nicht gegeben werden darf sie Vorfahren, Nachfahren, dem Ehepartner und dem eigenen Sklaven.");
q(1, 1, "Darf man die Zakāt seinem Ehepartner geben?",
  ["nein", "ja", "nur der Ehefrau", "nur dem Ehemann"],
  "Der Ehepartner gehört zu denen, denen man die Zakāt nicht gibt.");
q(1, 2, "Darf jemand aus den Banū Hāšim Zakāt bekommen?",
  ["nein – sie sind die Familie des Propheten ﷺ", "ja, wie jeder Arme", "nur, wenn er reich ist", "nur in Makka"],
  "Die Zakāt wird dem Stamm Banū Hāšim nicht gegeben.");
q(1, 2, "Was sagt das Buch über jemanden, der die Nahrung seines Tages hat?",
  ["er soll nicht um Zakāt oder Ṣadaqa bitten", "er muss Zakāt geben", "er darf so viel bitten, wie er will", "er gilt als Bedürftiger"],
  "Wer die Nahrung seines Tages hat, sollte nicht nach Zakāt oder Ṣadaqa fragen.");
q(2, 2, "Was ist der Unterschied zwischen faqīr und miskīn nach der Erläuterung?",
  ["der faqīr hat wenig, der miskīn gar nichts", "der faqīr hat gar nichts, der miskīn wenig", "beide bedeuten dasselbe", "der miskīn ist ein Reisender"],
  "Faqīr: jemand, der kaum etwas hat; miskīn: jemand, der gar nichts hat (al-Lubāb).");
q(2, 3, "Welcher Reisende darf Zakāt bekommen?",
  ["wer in seiner Heimat Besitz hat, aber dort, wo er ist, nichts", "jeder, der auf Reisen ist", "nur Pilger", "wer eine lange Reise plant"],
  "Gemeint ist der Reisende, der in seiner Heimat über Besitz verfügt, an einem anderen Ort aber gar nichts hat (al-Hidāya).");

topic({ id: "fitr", title: "Die Spende des Fastenbrechens", ar: "صدقة الفطر", lessons: "Kitāb az-Zakāh",
  intro: "Wer die Ṣadaqat al-Fiṭr geben muss, wie viel und wann.",
  sections: [
    { h: "Pflicht, Menge und Zeitpunkt", li: [
      "Sie ist **verpflichtend** für jeden **freien Muslim**, der einen **Niṣāb** besitzt – für **sich selbst**, sein **armes Kind** und seinen **Sklaven** in seinem Dienst.",
      "Sie beträgt einen **halben Ṣāʿ Weizen**, einen **ganzen Ṣāʿ getrocknete Datteln** oder einen **ganzen Ṣāʿ Gerste**.",
      "Ihr **Zeitpunkt** ist das **Aufbrechen der Morgendämmerung** am Tag des Fiṭr."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Ein **Ṣāʿ** beträgt etwa **3,25 kg** (ʿAlī Ǧumʿa).",
      "Der Zeitpunkt ist das Eintreffen der **ersten Faǧr-Zeit nach dem Ramaḍān**."
    ]}
  ] });
q(0, 1, "Für wen muss ein Vater die Ṣadaqat al-Fiṭr geben?",
  ["für sich selbst und sein armes Kind", "nur für sich", "für alle Verwandten", "für seine Nachbarn"],
  "Sie ist verpflichtend hinsichtlich seiner selbst, seines armen Kindes und seines Sklaven in seinem Dienst.");
q(0, 2, "Wie viel Weizen ist als Ṣadaqat al-Fiṭr fällig?",
  ["ein halber Ṣāʿ", "ein ganzer Ṣāʿ", "zwei Ṣāʿ", "ein Viertel Ṣāʿ"],
  "Ein halber Ṣāʿ Weizen – bei Datteln und Gerste ein ganzer Ṣāʿ.");
q(0, 2, "Wie viel Datteln sind als Ṣadaqat al-Fiṭr fällig?",
  ["ein ganzer Ṣāʿ", "ein halber Ṣāʿ", "eine Handvoll", "zwei Ṣāʿ"],
  "Ein ganzer Ṣāʿ trockene Datteln oder Gerste.");
q(0, 2, "Wann wird die Ṣadaqat al-Fiṭr fällig?",
  ["beim Aufbrechen der Morgendämmerung am Tag des Fiṭr", "am ersten Ramaḍān", "nach dem Festgebet", "am Abend vor dem Fest"],
  "Ihr Zeitpunkt ist die Morgendämmerung des Fiṭr – die erste Faǧr-Zeit nach dem Ramaḍān.");
q(0, 2, "Wer muss die Ṣadaqat al-Fiṭr geben?",
  ["jeder freie Muslim, der einen Niṣāb besitzt", "jeder, der gefastet hat", "nur Reiche über 10.000 €", "nur Männer"],
  "Sie ist verpflichtend für jeden freien Muslim, der einen Niṣāb besitzt.");
q(1, 3, "Wie viel ist ein Ṣāʿ etwa (nach ʿAlī Ǧumʿa)?",
  ["etwa 3,25 kg", "etwa 1 kg", "etwa 10 kg", "etwa 500 g"],
  "Ein Ṣāʿ beträgt etwa 3,25 kg.");

/* ================= Das Buch des Fastens ================= */

topic({ id: "saum", title: "Das Fasten: Absicht und Entschuldigungen", ar: "الصوم", lessons: "Kitāb aṣ-Ṣawm",
  intro: "Bis wann man die Absicht zum Fasten fassen kann, das Suḥūr – und wer nicht fasten muss.",
  sections: [
    { h: "Die Absicht", li: [
      "Das Fasten des **Ramaḍān**, eines **festgelegten Gelübdes** und **freiwillige** Fasten sind gültig mit einer Absicht **von der Nacht bis kurz vor die Hälfte des Tages** – auch mit einer allgemeinen Absicht.",
      "Für die **anderen** Arten des Fastens ist es **Voraussetzung**, eine **bestimmte Absicht in der Nacht** zu fassen."
    ]},
    { h: "Das Suḥūr", li: [
      "Das **Suḥūr** ist **empfohlen**, ebenso es zu **verspäten** und sich beim **Fastenbrechen zu beeilen**."
    ]},
    { h: "Wer nicht fasten muss", li: [
      "Das Nichtfasten ist erlaubt für den **Reisenden**, für die **schwangere** oder **stillende** Frau, die **um sich oder ihr Kind fürchtet**, und für den **Kranken**, der eine **Verschlimmerung** fürchtet.",
      "Auch der **altersschwache Greis** darf das Fasten unterlassen; er gibt stattdessen die **Fidya**.",
      "Ein **freiwilliges** Fasten wird mit dem **Beginn verpflichtend**; man bricht es nicht ohne Entschuldigungsgrund."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Mit **Nacht** ist die Zeit **nach Sonnenuntergang** gemeint (al-Iḫtiyār).",
      "Die **anderen** Arten, für die man die Absicht in der Nacht fassen muss: das **Nachholen** (qaḍāʾ) von Ramaḍān-Tagen, das Nachholen **abgebrochener freiwilliger** Fasten, das **Sühnefasten** (kaffāra) und das **allgemeine Gelübde** (Marāqī l-Falāḥ).",
      "Die **Fidya** beträgt einen **halben Ṣāʿ Weizen** oder seinen Gegenwert in Geld (Marāqī l-Falāḥ)."
    ]}
  ] });
q(0, 1, "Bis wann kann man die Absicht für ein Ramaḍān-Fasten fassen?",
  ["von der Nacht bis kurz vor die Hälfte des Tages", "nur vor der Morgendämmerung", "bis zum Nachmittagsgebet", "bis zum Sonnenuntergang"],
  "Ramaḍān, festgelegtes Gelübde und freiwilliges Fasten: Absicht von der Nacht bis kurz vor die Hälfte des Tages.");
q(0, 2, "Für welches Fasten muss die Absicht schon in der Nacht gefasst werden?",
  ["für das Nachholen von Ramaḍān-Tagen", "für das Ramaḍān-Fasten selbst", "für ein freiwilliges Fasten", "für ein festgelegtes Gelübde"],
  "Für die anderen Arten (Qaḍāʾ, Kaffāra, allgemeines Gelübde) ist eine bestimmte Absicht in der Nacht Voraussetzung.");
q(0, 3, "Was ist mit „Nacht“ bei der Absicht zum Fasten gemeint?",
  ["die Zeit nach Sonnenuntergang", "die Zeit nach Mitternacht", "das letzte Drittel der Nacht", "die Zeit nach dem Nachtgebet"],
  "Gemeint ist hier die Zeit nach dem Untergehen der Sonne (al-Iḫtiyār).");
q(0, 3, "Welche Fasten zählen zu den „anderen Arten“, die eine bestimmte Absicht in der Nacht brauchen?",
  ["Qaḍāʾ des Ramaḍān, Qaḍāʾ abgebrochener freiwilliger Fasten, Kaffāra und allgemeines Gelübde", "Ramaḍān und freiwillige Fasten", "nur das Fasten am Tag von ʿArafa", "nur das Sühnefasten"],
  "So nennt es Marāqī l-Falāḥ.");
q(1, 1, "Welches Urteil hat das Suḥūr?",
  ["empfohlen", "Pflicht", "verpönt", "erlaubt, aber nicht empfohlen"],
  "Das Fastenfrühstück (suḥūr) ist empfohlen, ebenso es zu verspäten.");
q(1, 2, "Was ist beim Fastenbrechen empfohlen?",
  ["sich damit zu beeilen", "es bis zum Nachtgebet zu verschieben", "es erst nach dem Abendgebet zu tun", "nur Wasser zu trinken"],
  "Empfohlen ist das Verspäten des Suḥūr und das Beeilen beim Fastenbrechen.");
q(2, 1, "Wer darf im Ramaḍān das Fasten unterlassen?",
  ["der Reisende", "jeder, der viel arbeitet", "wer Hunger hat", "wer schlecht geschlafen hat"],
  "Erlaubt ist es für den Reisenden, die Schwangere oder Stillende mit Angst und den Kranken mit Angst vor Verschlimmerung.");
q(2, 2, "Wann darf eine schwangere oder stillende Frau das Fasten unterlassen?",
  ["wenn sie um sich selbst oder ihr Kind fürchtet", "immer, ohne Grund", "nie", "nur im letzten Monat"],
  "Erlaubt für die schwangere oder stillende Frau, die Angst um sich selbst oder ihr Kind hat.");
q(2, 2, "Was gibt ein altersschwacher Greis, der nicht fasten kann?",
  ["die Fidya", "die Kaffāra von 60 Tagen", "nichts", "die Zakāt doppelt"],
  "Das Unterlassen ist für den altersschwachen Senior erlaubt; er gibt stattdessen die Fidya.");
q(2, 2, "Was gilt für ein freiwilliges Fasten, das man begonnen hat?",
  ["es wird verpflichtend – man bricht es nicht ohne Entschuldigungsgrund", "man darf es jederzeit ohne Folgen brechen", "es ist verboten, es fortzusetzen", "es zählt wie ein Ramaḍān-Tag"],
  "Das freiwillige Fasten wird mit dem Beginn notwendig.");
q(3, 3, "Wie viel beträgt die Fidya nach der Erläuterung?",
  ["einen halben Ṣāʿ Weizen oder seinen Gegenwert in Geld", "einen ganzen Ṣāʿ Datteln", "die Speisung von 60 Armen", "2,5 % des Vermögens"],
  "Die Fidya beträgt einen halben Ṣāʿ Weizen oder seinen monetären Gegenwert (Marāqī l-Falāḥ).");

topic({ id: "mufattirat", title: "Was das Fasten bricht", ar: "مفسدات الصوم", lessons: "Kitāb aṣ-Ṣawm",
  intro: "Was das Fasten nicht bricht, was nur das Nachholen verlangt – und wann zusätzlich die Kaffāra fällig ist.",
  sections: [
    { h: "Was das Fasten NICHT bricht", li: [
      "Wenn der Fastende **aus Vergesslichkeit** isst, trinkt oder Geschlechtsverkehr hat,",
      "einen **feuchten Traum** hat, **allein durch den Blick** zum Samenerguss kommt, sich **einölt**, **Augenkohl** (kuḥl) aufträgt, sich **schröpfen** lässt, jemanden **küsst**,",
      "wenn **Staub** oder eine **Fliege** in seinen Hals gelangt, er **Wasser ins Ohr** fließen lässt, etwas mit dem Mund **kostet** oder **Erbrochenes** von selbst hochkommt und wieder zurückgeht – dann bricht er sein Fasten **nicht**."
    ]},
    { h: "Nur Nachholen (qaḍāʾ)", li: [
      "Man holt das Fasten nach – **ohne Kaffāra** –, wenn man es **aus Versehen** bricht,",
      "ein Medikament **rektal oder nasal** einführt, **Öl ins Ohr** träufelt, einen **Kieselstein verschluckt**, das Ramaḍān-Fasten **nicht beabsichtigt** hat,",
      "durch **Küssen** (oder mit einem Tier) zum Samenerguss kommt, oder **Suḥūr isst** in der Annahme, es sei noch **Nacht**, obwohl es schon **Tag** ist."
    ]},
    { h: "Nachholen und Kaffāra", li: [
      "Wer **absichtlich** Geschlechtsverkehr hat oder **absichtlich** ein **Nahrungsmittel oder Medikament** isst oder trinkt, **holt das Fasten nach** und leistet die **Kaffāra**."
    ]},
    { h: "Die Kaffāra", li: [
      "1. Einen **Sklaven freilassen**.",
      "2. Wer das nicht kann: **zwei aufeinanderfolgende islamische Monate** fasten, in die **weder ein ʿĪd noch die Tašrīq-Tage** (11.–13. Ḏū l-Ḥiǧǧa) fallen.",
      "3. Wer auch das nicht kann: **60 Arme speisen** (Marāqī l-Falāḥ)."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "**Küssen**: Ist man sich nicht sicher, sich beherrschen zu können, ist es **verpönt**; **intensives** Küssen ist immer **verbotsnahe verpönt** (aṭ-Ṭaḥṭāwī).",
      "Etwas mit dem Mund **kosten** ist allgemein **verbotsnahe verpönt**, mit einigen Ausnahmen.",
      "**Erbrechen**: Kommt es von selbst hoch und geht von selbst zurück, bricht es das Fasten nicht – auch wenn es mundvoll ist. Absichtlich **weniger** als mundvoll zu erbrechen bricht es ebenfalls nicht. **Absichtlich mundvoll** erbrechen oder von selbst hochgekommenes Mundvolles **absichtlich hinunterschlucken** bricht es (Marāqī l-Falāḥ)."
    ]}
  ] });
q(0, 1, "Ein Fastender isst aus Vergesslichkeit. Was gilt?",
  ["sein Fasten ist nicht gebrochen", "er muss den Tag nachholen", "er muss nachholen und Kaffāra leisten", "er muss 60 Arme speisen"],
  "Wenn der Fastende aus Vergesslichkeit isst oder trinkt, bricht er sein Fasten nicht.");
q(0, 1, "Bricht das Auftragen von Augenkohl (kuḥl) das Fasten?",
  ["nein", "ja", "nur, wenn man es im Hals schmeckt", "nur im Ramaḍān"],
  "Sich einölen, Augenkohl auftragen und sich schröpfen lassen brechen das Fasten nicht.");
q(0, 2, "Staub gelangt unabsichtlich in den Hals eines Fastenden. Was gilt?",
  ["das Fasten ist nicht gebrochen", "er muss nachholen", "er muss nachholen und Kaffāra leisten", "das Fasten ist gebrochen, aber ohne Nachholen"],
  "Gelangt Staub oder eine Fliege in den Hals, bricht das Fasten nicht.");
q(0, 2, "Bricht ein feuchter Traum das Fasten?",
  ["nein", "ja", "nur am Tag", "ja, mit Kaffāra"],
  "Ein feuchter Traum bricht das Fasten nicht.");
q(0, 2, "Erbrochenes kommt von selbst hoch und geht von selbst wieder zurück. Was gilt?",
  ["das Fasten ist nicht gebrochen", "man muss nachholen", "man muss nachholen und Kaffāra leisten", "nur wenn es mundvoll ist, ist es gebrochen"],
  "Kommt es von allein hoch und geht von allein zurück, bricht es das Fasten nicht – selbst wenn es mundvoll ist.");
q(1, 1, "Jemand isst Suḥūr in der Annahme, es sei noch Nacht – es war aber schon Tag. Was gilt?",
  ["er holt den Tag nach, ohne Kaffāra", "nichts – das Fasten ist gültig", "er holt nach und leistet Kaffāra", "er muss 60 Tage fasten"],
  "Wer mit der Annahme Suḥūr macht, dass es Nacht sei, holt das Fasten nach – ohne Sühneleistung.");
q(1, 2, "Jemand verschluckt beim Fasten einen Kieselstein. Was gilt?",
  ["er holt den Tag nach, ohne Kaffāra", "nichts", "Nachholen und Kaffāra", "nur Kaffāra"],
  "Einen Kieselstein verschlucken: nur Nachholen (qaḍāʾ).");
q(1, 2, "Jemand träufelt sich beim Fasten Öl ins Ohr. Was gilt?",
  ["er holt den Tag nach, ohne Kaffāra", "das Fasten ist nicht gebrochen", "Nachholen und Kaffāra", "er muss den Tag wiederholen und 60 Arme speisen"],
  "Öl ins Ohr träufeln erfordert das Nachholen. Wasser ins Ohr fließen lassen bricht das Fasten dagegen nicht.");
q(1, 3, "Was unterscheidet „Wasser ins Ohr fließen lassen“ und „Öl ins Ohr träufeln“ beim Fasten?",
  ["Wasser bricht das Fasten nicht, Öl verlangt das Nachholen", "beides bricht das Fasten nicht", "beides verlangt Nachholen und Kaffāra", "Wasser verlangt das Nachholen, Öl nicht"],
  "So unterscheidet es das Buch in den beiden Listen.");
q(2, 1, "Was ist die Folge, wenn man im Ramaḍān absichtlich isst?",
  ["Nachholen und Kaffāra", "nur Nachholen", "nichts", "nur Kaffāra, ohne Nachholen"],
  "Wer absichtlich ein Nahrungsmittel oder Medikament isst oder trinkt, holt nach und leistet die Kaffāra.");
q(3, 1, "Was ist die erste Stufe der Kaffāra beim Fasten?",
  ["einen Sklaven freilassen", "60 Arme speisen", "zwei Monate fasten", "Zakāt doppelt geben"],
  "1. Sklaven freilassen; wer das nicht kann, 2. zwei aufeinanderfolgende Monate fasten; sonst 3. 60 Arme speisen.");
q(3, 2, "Wie lange fastet man bei der Kaffāra?",
  ["zwei aufeinanderfolgende islamische Monate", "60 Tage mit Unterbrechungen", "einen Monat", "zehn Tage"],
  "Zwei aufeinanderfolgende islamische Monate, ohne ʿĪd- oder Tašrīq-Tage dazwischen.");
q(3, 2, "Wie viele Arme speist man, wenn man die ersten beiden Stufen der Kaffāra nicht leisten kann?",
  ["60", "10", "30", "100"],
  "Sollte man auch dazu nicht in der Lage sein, speist man 60 Arme.");
q(3, 3, "Welche Tage dürfen in die zwei Monate des Kaffāra-Fastens nicht fallen?",
  ["die ʿĪd-Tage und die Tašrīq-Tage (11.–13. Ḏū l-Ḥiǧǧa)", "die Freitage", "die weißen Tage", "der Tag von ʿĀšūrāʾ"],
  "Weder ʿĪd- noch die Tašrīq-Tage dürfen dazwischen liegen.");
q(4, 3, "Wie ist intensives Küssen beim Fasten eingestuft?",
  ["verbotsnahe verpönt – auch wenn man sich beherrschen kann", "erlaubt", "es bricht das Fasten immer", "Sunna"],
  "Intensives Küssen ist generell verbotsnahe verpönt (aṭ-Ṭaḥṭāwī).");
q(4, 3, "Was bricht beim Erbrechen das Fasten?",
  ["absichtlich mundvoll erbrechen", "von selbst erbrechen, das zurückgeht", "absichtlich weniger als mundvoll erbrechen", "nichts davon"],
  "Absichtlich eine Mundfülle zu erbrechen, bricht das Fasten (Marāqī l-Falāḥ).");

/* ================= Das Buch der Pilgerfahrt ================= */

topic({ id: "hajj", title: "Der Ḥaǧǧ: Pflicht, Säulen und Wāǧibāt", ar: "الحج", lessons: "Kitāb al-Ḥaǧǧ",
  intro: "Für wen der Ḥaǧǧ Pflicht ist, seine drei Pflichtbestandteile, seine zwölf Wāǧibāt – und die ʿUmra.",
  sections: [
    { h: "Für wen er Pflicht ist", li: [
      "Der Ḥaǧǧ ist eine **einmalige Pflicht** für jeden **freien, verantwortlichen und gesunden Muslim**,",
      "der über **Proviant und ein Reittier** verfügt, die über das **Notwendige hinausgehen**, und bei dem die **Sicherheit des Weges** gewährleistet ist."
    ]},
    { h: "Die Pflichtbestandteile", li: [
      "1. Der **Iḥrām**.",
      "2. Das **Verweilen bei ʿArafāt** (wuqūf).",
      "3. Die Besuchsumrundung der Kaʿba (**ṭawāf az-ziyāra**)."
    ]},
    { h: "Die Wāǧibāt", li: [
      "1. der Iḥrām von den festgelegten Grenzen (**mīqāt**) aus · 2. das Verweilen bei ʿArafāt **bis zum Sonnenuntergang** verlängern · 3. das Verweilen bei **Muzdalifa**",
      "4. das **Bewerfen der Steinsäulen** · 5. das **Rasieren oder Kürzen** der Haare · 6. der Ṭawāf az-Ziyāra **an den Opfertagen**",
      "7. das Laufen zwischen **Ṣafā und Marwa** (saʿy) · 8. die Abschiedsumrundung (**ṭawāf al-wadāʿ**) · 9. den Ṭawāf beim **schwarzen Stein** beginnen",
      "10. beim Ṭawāf (selbst) **gehen** · 11. dabei **rein** sein · 12. dabei die **Blöße bedecken**"
    ]},
    { h: "Die ʿUmra", li: [
      "Die kleine Pilgerfahrt (**ʿumra**) ist **Sunna**. Sie besteht aus **Iḥrām, Ṭawāf, Saʿy** und dem **Rasieren** des Kopfes.",
      "Sie am **Tag von ʿArafa** und an den **vier Tagen danach** zu machen, ist **verpönt**."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Ist der Weg nach Makka eine islamrechtliche **Reise**, hat die **Frau** einen **Maḥram** oder ihren **Ehemann** bei sich; sonst wäre es **verbotsnahe verpönt** (al-Muġaynī, al-Lubāb).",
      "Das **Gehen** beim Ṭawāf ist nur für den wāǧib, der **keinen Entschuldigungsgrund** hat (Marāqī l-Falāḥ).",
      "Die **Reinheit** beim Ṭawāf ist **körperlich und rituell** gemeint."
    ]}
  ] });
q(0, 1, "Wie oft im Leben ist der Ḥaǧǧ Pflicht?",
  ["einmal", "jedes Jahr", "dreimal", "alle zehn Jahre"],
  "Er ist eine einmalige Pflicht für jeden, der die Bedingungen erfüllt.");
q(0, 2, "Was gehört zu den Bedingungen der Ḥaǧǧ-Pflicht?",
  ["Proviant und Reittier über das Notwendige hinaus und ein sicherer Weg", "ein Alter von mindestens 40 Jahren", "die Erlaubnis eines Imām", "dass man schon eine ʿUmra gemacht hat"],
  "Frei, verantwortlich, gesund, Muslim, Proviant und Reittier über das Notwendige hinaus, Sicherheit des Weges.");
q(1, 1, "Wie viele Pflichtbestandteile (farāʾiḍ) hat der Ḥaǧǧ?",
  ["drei", "zwölf", "fünf", "sieben"],
  "Iḥrām, das Verweilen bei ʿArafāt und der Ṭawāf az-Ziyāra.");
q(1, 1, "Was gehört zu den Pflichtbestandteilen des Ḥaǧǧ?",
  ["das Verweilen bei ʿArafāt", "das Verweilen bei Muzdalifa", "das Bewerfen der Steinsäulen", "der Ṭawāf al-Wadāʿ"],
  "Der Wuqūf bei ʿArafāt ist Pflicht (farḍ); Muzdalifa, Steinewerfen und Abschiedsumrundung sind wāǧib.");
q(1, 2, "Welches Urteil hat der Ṭawāf az-Ziyāra?",
  ["Pflichtbestandteil (farḍ)", "wāǧib", "Sunna", "mustaḥabb"],
  "Er ist einer der drei Pflichtbestandteile; ihn an den Opfertagen zu machen, ist wāǧib.");
q(2, 1, "Welches Urteil hat das Bewerfen der Steinsäulen?",
  ["wāǧib", "farḍ", "Sunna", "mustaḥabb"],
  "Das Bewerfen der Steinsäulen steht bei den Wāǧibāt des Ḥaǧǧ.");
q(2, 2, "Welches Urteil hat der Saʿy zwischen Ṣafā und Marwa nach dem Buch?",
  ["wāǧib", "farḍ", "Sunna", "verpönt"],
  "Das Laufen zwischen Ṣafā und Marwa ist eines der Wāǧibāt.");
q(2, 2, "Bis wann soll man das Verweilen bei ʿArafāt verlängern (wāǧib)?",
  ["bis zum Sonnenuntergang", "bis zum Mittagsgebet", "bis Mitternacht", "bis zur Morgendämmerung"],
  "Das Verlängern des Verweilens bei ʿArafāt bis zum Sonnenuntergang ist wāǧib.");
q(2, 2, "Wo beginnt man den Ṭawāf?",
  ["beim schwarzen Stein", "beim Maqām Ibrāhīm", "bei der Tür der Kaʿba", "beim Zamzam-Brunnen"],
  "Das Beginnen des Ṭawāf vom schwarzen Stein aus ist wāǧib.");
q(2, 2, "Was gehört zu den Wāǧibāt des Ḥaǧǧ?",
  ["der Ṭawāf al-Wadāʿ", "das Verweilen bei ʿArafāt", "der Iḥrām", "der Ṭawāf az-Ziyāra"],
  "Die Abschiedsumrundung ist wāǧib; Iḥrām, ʿArafāt und Ṭawāf az-Ziyāra sind die Pflichtbestandteile.");
q(3, 1, "Welches Urteil hat die ʿUmra nach dem Buch?",
  ["Sunna", "Pflicht", "wāǧib", "verpönt"],
  "Die kleine Pilgerfahrt (ʿumra) ist Sunna.");
q(3, 2, "Woraus besteht die ʿUmra?",
  ["Iḥrām, Ṭawāf, Saʿy und Rasieren", "Iḥrām, ʿArafāt und Muzdalifa", "nur Ṭawāf", "Ṭawāf und Steinewerfen"],
  "Sie besteht aus dem Iḥrām, Ṭawāf, Saʿy und dem Rasieren des Kopfes.");
q(3, 2, "Wann ist die ʿUmra verpönt?",
  ["am Tag von ʿArafa und an den vier Tagen danach", "im Ramaḍān", "im Monat Rabīʿ al-Awwal", "am Freitag"],
  "Sie am Tag von ʿArafa und den vier Tagen danach zu vollziehen, ist verpönt.");
q(4, 3, "Was gilt für eine Frau, deren Weg nach Makka eine islamrechtliche Reise ist?",
  ["sie hat einen Maḥram oder ihren Ehemann bei sich – sonst ist es verbotsnahe verpönt", "sie darf nicht reisen, auch nicht mit Maḥram", "es gibt keine Bedingung", "sie muss in einer Gruppe von mindestens zehn Frauen reisen"],
  "So al-Muġaynī in al-Lubāb.");
q(4, 3, "Für wen ist das Gehen beim Ṭawāf wāǧib?",
  ["für den, der keinen Entschuldigungsgrund hat", "für jeden ohne Ausnahme", "nur für Männer", "für niemanden – es ist Sunna"],
  "Das Laufen ist nur für den wāǧib, der keinen Entschuldigungsgrund hat (Marāqī l-Falāḥ).");

topic({ id: "ablauf", title: "Der Ablauf des Ḥaǧǧ", ar: "صفة الحج", lessons: "Kitāb al-Ḥaǧǧ",
  intro: "Schritt für Schritt: Iḥrām und Talbiya, Ankunft in Makka, Minā, ʿArafāt, Muzdalifa, das Steinewerfen und der Abschied.",
  sections: [
    { h: "Der Iḥrām", li: [
      "Wer in den Iḥrām gehen will, macht **Ġusl oder Wuḍūʾ**, zieht **Izār und Ridāʾ** (Unter- und Obertuch) an und sagt: „O Allāh, ich beabsichtige den Ḥaǧǧ, so mache ihn mir leicht und nimm ihn von mir an.“",
      "Nach dem **Iḥrām-Gebet** spricht er mit der Absicht des Ḥaǧǧ die **Talbiya**.",
      "Nun hält er sich fern von **Obszönität, Frevel und Streit**, vom **Töten von Jagdwild**, vom **Parfümieren**, vom **Bedecken von Kopf und Gesicht**, vom **Rasieren** der Haare, vom **Nägelschneiden** und vom Anziehen von **genähter Kleidung**, **Ledersocken** und **parfümierter** Kleidung."
    ]},
    { h: "Ankunft in Makka", li: [
      "Man spricht die Talbiya **oft und mit erhobener Stimme**. In Makka beginnt man bei der **Moschee**.",
      "Man wendet sich dem **schwarzen Stein** zu, spricht **Takbīr und Tahlīl** mit erhobenen Händen und **berührt** ihn – ohne anderen zu schaden.",
      "Dann umrundet man die Kaʿba **siebenmal** im **Ṭawāf al-Qudūm** (Ankunft) und betet **zwei Rakʿa**.",
      "Man steigt auf **Ṣafā**, spricht Takbīr, Tahlīl und Ṣalawāt, läuft zur **Marwa** und tut dort dasselbe – **siebenmal**."
    ]},
    { h: "Minā, ʿArafāt und Muzdalifa", li: [
      "Am Morgen des **8. Ḏū l-Ḥiǧǧa** geht man nach **Minā** und bleibt bis zum **Morgengebet des Tages von ʿArafa**.",
      "Dann nach **ʿArafāt**: Nach dem **Zawāl** betet man **Mittags- und Nachmittagsgebet zusammen** – mit **einem Aḏān und zwei Iqāma**. Danach steht man **nahe dem Berg** und macht Bittgebete.",
      "Nach **Sonnenuntergang** geht man nach **Muzdalifa** und betet dort **Abend- und Nachtgebet**.",
      "Nach dem **Morgengebet** bleibt man in Muzdalifa mit Takbīr, Tahlīl, Talbiya, Ṣalawāt und Bittgebeten."
    ]},
    { h: "Der Opfertag und die Tage danach", li: [
      "Wenn es hell geworden ist, geht man nach **Minā** und bewirft die **Säule von ʿAqaba siebenmal**, mit einem **Takbīr bei jedem Stein**.",
      "Dann **beendet man die Talbiya**, **schlachtet** das Opfertier und **rasiert** sich – danach ist **alles wieder erlaubt außer der Intimität mit den Frauen**.",
      "Nach dem **Zawāl des zweiten Opfertages** bewirft man in Minā **alle drei Säulen**: zuerst die **erste**, dann die **mittlere**, zuletzt die **ʿAqaba**. Am **nächsten Tag** genauso – und ebenso am Tag darauf, wenn man noch bleibt."
    ]},
    { h: "Der Abschied", li: [
      "Beim Aufbruch aus Makka umrundet man die Kaʿba **siebenmal** im **Ṭawāf al-Wadāʿ**.",
      "Dann trinkt man **Zamzam**, küsst die **Tür der Kaʿba**, legt die Brust auf den Bereich **zwischen dem schwarzen Stein und der Tür**, umarmt die **Bedeckung** der Kaʿba, verabschiedet sich und **weint**."
    ]},
    { h: "Erläuterungen", note: true, li: [
      "Die **Talbiya**: „Labbayka Llāhumma labbayk, labbayka lā šarīka laka labbayk, inna l-ḥamda wa n-niʿmata laka wa l-mulk, lā šarīka lak.“ (Marāqī l-Falāḥ)",
      "Beim Saʿy zählt **ein Weg von einem Hügel zum anderen** als eine Runde – nicht hin und zurück."
    ]}
  ] });
q(0, 1, "Was zieht der Mann im Iḥrām an?",
  ["Izār und Ridāʾ – Unter- und Obertuch", "seine normale Kleidung", "ein genähtes weißes Gewand", "Ledersocken und Turban"],
  "Man zieht das Unter- und Oberteil (izār und ridāʾ) an; genähte Kleidung ist im Iḥrām verboten.");
q(0, 1, "Was sagt man nach dem Iḥrām-Gebet mit der Absicht des Ḥaǧǧ?",
  ["die Talbiya", "den Aḏān", "die Fātiḥa", "den Tašahhud"],
  "Im Anschluss an das Iḥrām-Gebet sagt man, beabsichtigend für den Ḥaǧǧ, die Talbiya.");
q(0, 2, "Was ist im Iḥrām verboten?",
  ["Parfümieren, Kopf bedecken, Nägel schneiden", "Talbiya laut sprechen", "Bittgebete", "Zamzam trinken"],
  "Man hält sich fern vom Parfümieren, Bedecken von Kopf und Gesicht, Rasieren, Nägelschneiden, genähter Kleidung u. a.");
q(0, 2, "Was ist im Iḥrām außerdem verboten?",
  ["das Töten von Jagdwild", "das Gebet in der Moschee", "das Trinken von Wasser", "das Sprechen"],
  "Zu den Verboten gehören Obszönität, Frevel, Streit und das Töten von Jagdtieren.");
q(1, 1, "Wie heißt die Umrundung bei der Ankunft in Makka?",
  ["Ṭawāf al-Qudūm", "Ṭawāf az-Ziyāra", "Ṭawāf al-Wadāʿ", "Saʿy"],
  "Bei der Ankunft umrundet man die Kaʿba siebenmal im Ṭawāf al-Qudūm.");
q(1, 1, "Wie oft umrundet man die Kaʿba bei einem Ṭawāf?",
  ["siebenmal", "dreimal", "fünfmal", "zehnmal"],
  "Jeder Ṭawāf besteht aus sieben Umrundungen.");
q(1, 2, "Was macht man direkt nach dem Ṭawāf al-Qudūm?",
  ["man betet zwei Rakʿa", "man wirft Steine", "man rasiert sich", "man geht nach ʿArafāt"],
  "Danach betet man zwei Gebetseinheiten und geht zum Ṣafā.");
q(1, 2, "Wie verhält man sich am schwarzen Stein?",
  ["Takbīr und Tahlīl mit erhobenen Händen, dann ihn berühren – ohne anderen zu schaden", "ihn mit Gewalt erreichen, egal wie", "ihn nur ansehen, nie berühren", "ihn dreimal umarmen"],
  "Man spricht Takbīr und Tahlīl mit erhobenen Händen und berührt ihn, ohne anderen Schaden zuzufügen.");
q(2, 1, "Wann geht man nach Minā?",
  ["am Morgen des 8. Ḏū l-Ḥiǧǧa", "am 10. Ḏū l-Ḥiǧǧa", "am ersten Tag des Ramaḍān", "am Abend des 9."],
  "Am Morgen des 8. Ḏū l-Ḥiǧǧa macht man sich auf nach Minā.");
q(2, 2, "Wie betet man in ʿArafāt Mittags- und Nachmittagsgebet?",
  ["zusammen, mit einem Aḏān und zwei Iqāma", "getrennt, jedes zu seiner Zeit", "zusammen, mit zwei Aḏān", "nur das Mittagsgebet"],
  "Nach dem Zawāl betet man Mittags- und Nachmittagsgebet mit einem Aḏān und zwei Iqāmas (ǧamʿ).");
q(2, 2, "Wo betet man in der Nacht nach ʿArafa Abend- und Nachtgebet?",
  ["in Muzdalifa", "in ʿArafāt", "in Minā", "in der Ḥaram-Moschee"],
  "Wenn die Sonne untergegangen ist, begibt man sich nach Muzdalifa und betet dort Abend- und Nachtgebet.");
q(3, 1, "Welche Säule bewirft man am Opfertag zuerst – und wie oft?",
  ["die Säule von ʿAqaba – siebenmal", "alle drei – je siebenmal", "die erste Säule – dreimal", "die mittlere Säule – siebenmal"],
  "Am Morgen des Opfertages bewirft man die Säule von ʿAqaba siebenmal, mit einem Takbīr bei jedem Stein.");
q(3, 2, "Wann hört man mit der Talbiya auf?",
  ["mit dem Bewerfen der Säule von ʿAqaba am Opfertag", "beim Betreten von Makka", "in ʿArafāt", "beim Ṭawāf al-Wadāʿ"],
  "Nach dem Bewerfen der ʿAqaba hört man mit der Talbiya auf und schlachtet das Opfertier.");
q(3, 2, "Was ist nach dem Rasieren am Opfertag wieder erlaubt?",
  ["alles außer der Intimität mit den Frauen", "gar nichts", "alles ohne Ausnahme", "nur Parfüm"],
  "Nach dem Rasieren ist einem bis auf die Intimität mit den Frauen alles wieder erlaubt.");
q(3, 3, "In welcher Reihenfolge bewirft man am zweiten Opfertag die drei Säulen?",
  ["erste – mittlere – ʿAqaba", "ʿAqaba – mittlere – erste", "mittlere – erste – ʿAqaba", "beliebig"],
  "Nach dem Zawāl beginnt man mit der ersten Säule, dann die mittlere, abschließend die Säule von ʿAqaba.");
q(3, 3, "Ab wann bewirft man am zweiten Opfertag die drei Säulen?",
  ["nach dem Zawāl", "vor Sonnenaufgang", "nach dem Nachtgebet", "nach dem Morgengebet"],
  "Man bewirft die drei Säulen nach dem Zawāl des zweiten Opfertages.");
q(4, 1, "Wie heißt die Umrundung beim Verlassen von Makka?",
  ["Ṭawāf al-Wadāʿ", "Ṭawāf al-Qudūm", "Ṭawāf az-Ziyāra", "Ṭawāf al-ʿUmra"],
  "Beim Aufbruch nach Hause umrundet man die Kaʿba siebenmal zum Ṭawāf al-Wadāʿ.");
q(5, 2, "Was zählt beim Saʿy als eine Runde?",
  ["ein Weg von einem Hügel zum anderen", "hin und zurück", "dreimal hin und her", "der ganze Weg von Ṣafā bis zur Kaʿba"],
  "Eine Ausführung ist der einmalige Weg von einem Hügel zum anderen, nicht hin und wieder zurück.");
q(5, 2, "Wie beginnt die Talbiya?",
  ["„Labbayka Llāhumma labbayk …“", "„Subḥāna rabbiya l-ʿaẓīm …“", "„Bismi Llāhi r-raḥmāni r-raḥīm …“", "„Allāhu akbar, Allāhu akbar …“"],
  "„Labbayka Llāhumma labbayk, labbayka lā šarīka laka labbayk, inna l-ḥamda wa n-niʿmata laka wa l-mulk, lā šarīka lak.“");

topic({ id: "arafa", title: "ʿArafa und die Frau im Ḥaǧǧ", ar: "الوقوف وأحوال النساء", lessons: "Kitāb al-Ḥaǧǧ",
  intro: "Wann das Verweilen bei ʿArafa gültig ist, was gilt, wenn man es verpasst – und worin sich der Ḥaǧǧ der Frau unterscheidet.",
  sections: [
    { h: "Das Verweilen bei ʿArafa", li: [
      "Wer **nicht in Makka eingetreten** ist und (mindestens) **einen Augenblick bei ʿArafa** verweilt hat, für den **entfällt der Ṭawāf al-Qudūm**.",
      "Gültig ist schon **ein Augenblick** bei ʿArafa – vom **Zawāl des Tages von ʿArafa** bis zur **Morgendämmerung des Opfertages**.",
      "Wer **gar nicht** bei ʿArafa verweilt, dessen **Ḥaǧǧ ist ungültig**: Er macht **Ṭawāf und Saʿy**, verlässt den Iḥrām und **holt den Ḥaǧǧ im nächsten Jahr nach**."
    ]},
    { h: "Die Frau im Ḥaǧǧ", li: [
      "Die Frau ist **wie der Mann**, außer dass sie",
      "ihren **Kopf nicht entblößt**, die **Talbiya nicht laut** spricht, ihren Kopf **nicht rasiert**, sondern nur **kürzt**, und **genähte Kleidung** tragen darf.",
      "Die **Menstruation** hindert sie an **keiner** Handlung des Ḥaǧǧ **außer dem Ṭawāf** – denn er findet in der Moschee statt, die sie in diesem Zustand nicht betritt (al-Iḫtiyār)."
    ]}
  ] });
q(0, 1, "Was gilt, wenn jemand gar nicht bei ʿArafa verweilt hat?",
  ["sein Ḥaǧǧ ist ungültig; er holt ihn im nächsten Jahr nach", "er macht eine Kaffāra, und der Ḥaǧǧ gilt", "er verweilt stattdessen in Muzdalifa", "nichts – ʿArafa ist nur Sunna"],
  "Wer gar nicht bei ʿArafa verweilt, dessen Ḥaǧǧ ist ungültig; er macht Ṭawāf und Saʿy, verlässt den Iḥrām und holt den Ḥaǧǧ im folgenden Jahr nach.");
q(0, 2, "Wie lange muss man mindestens bei ʿArafa verweilen?",
  ["einen Augenblick – zwischen Zawāl des ʿArafa-Tages und Morgendämmerung des Opfertages", "den ganzen Tag", "eine Stunde nach dem Mittagsgebet", "die ganze Nacht"],
  "Nur einen Augenblick in dieser Zeit zu verweilen, ist für das Verweilen bei ʿArafa gültig.");
q(0, 2, "Für wen entfällt der Ṭawāf al-Qudūm?",
  ["für den, der nicht in Makka eingetreten ist und zuerst bei ʿArafa verweilt hat", "für jede Frau", "für alle Bewohner Makkas", "für niemanden"],
  "Wer nicht in Makka eingetreten ist und einen Augenblick bei ʿArafa verweilt hat, für den entfällt der Ṭawāf al-Qudūm.");
q(1, 1, "Rasiert die Frau beim Ḥaǧǧ ihren Kopf?",
  ["nein – sie kürzt nur", "ja, wie der Mann", "nur ein Viertel", "nur bei der ʿUmra"],
  "Die Frau rasiert ihren Kopf nicht, sondern kürzt nur.");
q(1, 2, "Wie spricht die Frau die Talbiya?",
  ["nicht laut", "laut wie der Mann", "gar nicht", "nur in ʿArafāt laut"],
  "Sie spricht die Talbiya nicht laut.");
q(1, 2, "Darf die Frau im Iḥrām genähte Kleidung tragen?",
  ["ja", "nein, wie der Mann", "nur ein genähtes Kopftuch", "nur nachts"],
  "Die Frau darf genähte Kleidung tragen; nur der Mann trägt Izār und Ridāʾ.");
q(1, 3, "Woran hindert die Menstruation die Frau beim Ḥaǧǧ?",
  ["nur am Ṭawāf – weil er in der Moschee stattfindet", "an allen Handlungen", "nur am Steinewerfen", "an nichts"],
  "Sie hindert sie an keiner Handlung des Ḥaǧǧ außer dem Ṭawāf, da sie in diesem Zustand die Moschee nicht betritt (al-Iḫtiyār).");

})();
