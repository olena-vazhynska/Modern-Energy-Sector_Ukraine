# Modern OSH Governance and Inspection in the Energy Sector — course dashboard

Bilingual (English / Ukrainian) dashboard for ITCILO activity **A4019972**, Turin,
26–30 October 2026, with an online onboarding session on 20 October and an online
closing workshop on 4 November.

**Live:** <https://olena-vazhynska.github.io/Modern-Energy-Sector_Ukraine/>

A capacity-building activity under the ILO project *Protecting and Preparing
Ukraine's Energy Workforce for Sustainable Recovery*, supported by the Government
of the Kingdom of the Netherlands.

---

## The three tabs

### 01 · Overview
The course as it was designed and as it was actually run. It opens with the
premise the residential workshop itself opens with — *there is no ready-made
handbook for the reality you work in* — and then sets out:

* the three responsibilities participants balance daily (protect people, keep
  services running, build for recovery);
* what the programme covers and what participants will be able to do;
* the learning journey across the four phases (online opening → technical
  workshops → three study visits → online follow-up);
* **how the week is co-created**: the five-step ladder from the "one voice each"
  round, through the wall of cards, to the four question clusters that steer the
  agenda and are returned to at the close;
* the four-question observation lens carried into every session and visit;
* the three study visits and their distinct lenses;
* the full session-by-session programme, filterable by day;
* the fifteen resource persons.

### 02 · Participants
The 22 registered participants as a searchable, filterable, sortable roster, with
demographics that recompute live against whatever filter is applied. Merged into
the same tab:

* the **pre-course survey** — 19 of 22 responded — including what the group named
  as its three most relevant challenges, where its expertise sits, and the
  barriers that had previously kept people out of training;
* the **self-introductions** posted on the eCampus forum, in each participant's
  own Ukrainian with a working English translation.

Contact details from the roster are deliberately not published.

### 03 · Insights and future foresight
The analytical core. On the first morning in Turin every participant named one
OSH challenge from their own work and one expectation for the week; these were
written on cards — orange for challenges, green for expectations — and posted on
the wall, where they stayed all week.

This tab reads that wall together with the pre-course survey and the
self-introductions, and turns it into **30 needs** across the four question
clusters. Open any need and you get:

1. the need stated in the participants' own terms, with a weight showing how
   often it was raised and a tag for where it came from;
2. **where the programme answers it** — the specific sessions and study visits,
   each one a link that switches to the Overview tab and scrolls the agenda to
   that session;
3. **further reading** — first the standards and publications cited in the course
   presentations themselves, then publicly available ILO, UN and EU resources
   added where the course goes only part of the way.

Below the needs sit **seven foresight drivers** on the horizon of the 4 November
strategic-foresight session, each linked back to the needs it grows out of, and a
**searchable library of 59 resources** filterable by category and by whether it
was cited in the course or added for this dashboard.

---

## Structure

```
index.html              markup shell; every string is injected
assets/
  style.css             visual identity, light and dark
  i18n.js               UI chrome strings (EN / UK)
  app.js                language, theme, tabs, Overview tab, agenda
  participants.js       roster, demographics, survey, introductions
  insights.js           needs, session links, foresight, library
  boot.js               entry point
  hero.jpg              course cover image
data/
  course.js             course description, journey, agenda, resource persons
  participants.js       roster, survey results, self-introductions
  insights.js           needs → sessions → reading; foresight drivers
  resources.js          the 59-item library
```

No build step and no framework. Every user-facing string in `data/` is a
`{ en, uk }` pair; changing the language re-renders every tab from the same data.

The language can be set with `?lang=uk`, and is otherwise taken from a previous
choice, then from the browser's own language. Theme follows the operating system
unless the reader overrides it.

## Visual identity

Taken from the course cover image — a white hard hat against a refinery skyline
at dusk. Plum and rose from the sky, amber from the plant lights below, warm
off-white from the helmet.

## Sources

* `A4019972_Ukraine_OSH_LI_Agenda_FINAL` (EN) and `A4019972_Programme_UA` (UK),
  25 October 2026.
* Information Note, *Modern OSH Governance and Inspection in the Energy Sector*,
  ITCILO SPGT, 2026 (EN and UK).
* `A4019972_ParticipantList_EN_16_10_2026` — 22 registered participants.
* Pre-course survey on the ITCILO eCampus — 19 submissions.
* eCampus forum "Let's get to know each other" — 16 self-introductions.
* The online onboarding deck (20 October) and the residential opening deck
  (26 October), which carry the co-creation logic of the week.
* Session decks for the risk-assessment, digital-innovation, labour-inspection,
  protocol lab, inclusive-energy-work and mining-safety sessions.
* 36 photographs of the wall of challenge and expectation cards.

Items drawn from the cards are faithful summaries of handwritten Ukrainian
originals, not verbatim quotations, and are never attributed to a named
individual. All external links were checked on 3 November 2026.

## Licence and use

Produced for training purposes in the context of activity A4019972.
© International Training Centre of the ILO, 2026 · Programme on Social
Protection, Governance and Tripartism (SPGT) · <spgt@itcilo.org>
