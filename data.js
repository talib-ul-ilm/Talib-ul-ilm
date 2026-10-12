/* Fiqh-Inhalte – werden gerade neu aufgebaut.
   Die bisherige Quelle (Unterrichtsfolien „Fiqh Unterricht 1–16“ und das İlmihal von H. Döndüren in buch/)
   wurde entfernt; die Inhalte aus der neuen Quelle kommen hierher.
   Format: FIQH_TOPICS = [{ id, title, ar, lessons, intro, sections: [{ h, u?, src?, li: [...] }] }],
   FIQH_QUESTIONS = [{ t: Themen-id, q, a: [richtig, falsch, falsch, falsch], c: 0, e }]. */

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
  addQuestions: function (qs) {
    qs.forEach(function (q) { q.src = q.src || "buch"; window.FIQH_QUESTIONS.push(q); });
  }
};
