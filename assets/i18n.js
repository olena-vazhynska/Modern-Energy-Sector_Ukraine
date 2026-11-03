/* ============================================================================
   UI STRINGS — everything that is chrome rather than content.
   Content strings live in data/*.js as { en, uk } pairs.
   ========================================================================== */

window.UI = {
  brand: { en: "International Training Centre of the ILO · Course A4019972", uk: "Міжнародний навчальний центр МОП · Курс A4019972" },

  tabOverview:     { en: "Overview", uk: "Огляд" },
  tabParticipants: { en: "Participants", uk: "Учасники" },
  tabInsights:     { en: "Insights & foresight", uk: "Інсайти та передбачення" },

  /* --- overview ---------------------------------------------------------- */
  eyeCourse:   { en: "01 · The course", uk: "01 · Курс" },
  eyeJourney:  { en: "02 · The learning journey", uk: "02 · Навчальна подорож" },
  eyeAgenda:   { en: "03 · The programme", uk: "03 · Програма" },
  h_about:     { en: "What this course is about", uk: "Про що цей курс" },
  h_features:  { en: "What makes it work", uk: "Що робить його дієвим" },
  l_features:  { en: "Six features that shape every session and every visit.", uk: "Шість особливостей, що формують кожну сесію і кожен візит." },
  h_learn:     { en: "What will I learn?", uk: "Чого я навчуся?" },
  h_do:        { en: "What will I be able to do?", uk: "Що я зможу робити?" },
  h_journey:   { en: "Before, during and after Turin", uk: "До, під час і після Турина" },
  h_format:    { en: "How we work", uk: "Як ми працюємо" },
  h_visits:    { en: "Three study visits, three lenses", uk: "Три навчальні візити, три перспективи" },
  l_visits:    { en: "Observe the system behind the practice — not only the technology.", uk: "Спостерігайте систему, що стоїть за практикою, — а не лише технологію." },
  h_agenda:    { en: "The programme, session by session", uk: "Програма, сесія за сесією" },
  l_agenda:    { en: "The online onboarding, the five residential days and the online closing workshop. All times are Turin time (CET/CEST).", uk: "Онлайн-онбординг, п’ять очних днів і онлайн-підсумкова зустріч. Час туринський (CET/CEST)." },
  h_who:       { en: "Who takes this course?", uk: "Хто навчається на цьому курсі?" },
  h_why:       { en: "Why join?", uk: "Чому варто долучитися?" },
  h_people:    { en: "Resource persons", uk: "Тренери та експерти" },
  l_people:    { en: "ILO and ITCILO specialists, invited practitioners and the Ukrainian institutional contribution.", uk: "Фахівці МОП і МНЦ МОП, запрошені практики та внесок українських інституцій." },
  allDays:     { en: "All days", uk: "Усі дні" },
  sessionCount:{ en: "{n} sessions shown", uk: "Показано сесій: {n}" },
  src_overview:{ en: "Sources: A4019972 agenda of 25 October 2026 (EN and UK); the course Information Note (ITCILO SPGT, 2026); the online onboarding deck of 20 October 2026; and the residential opening deck of 26 October 2026.", uk: "Джерела: агенда A4019972 від 25 жовтня 2026 (EN та UA); інформаційна записка курсу (МНЦ МОП, SPGT, 2026); презентація онлайн-онбордингу від 20 жовтня 2026; презентація відкриття очного етапу від 26 жовтня 2026." },

  /* --- participants ------------------------------------------------------ */
  eyeCohort:   { en: "02 · The cohort", uk: "02 · Група" },
  eyeSurvey:   { en: "Pre-course survey", uk: "Анкета перед курсом" },
  eyeIntros:   { en: "In their own words", uk: "Їхніми власними словами" },
  h_participants: { en: "Who is in the room", uk: "Хто в залі" },
  l_participants: { en: "Search, filter and sort the roster. The charts below update with your filters.", uk: "Шукайте, фільтруйте та сортуйте список. Діаграми нижче оновлюються разом із фільтрами." },
  h_demographics: { en: "The group in numbers", uk: "Група в цифрах" },
  l_demographics: { en: "Composition of the filtered selection.", uk: "Склад відфільтрованої вибірки." },
  h_survey:    { en: "What you told us before you came", uk: "Що ви розповіли нам до приїзду" },
  h_intros:    { en: "Self-introductions", uk: "Самопредставлення" },
  l_intros:    { en: "Posted on the eCampus forum before the residential week. Shown here in the participant's own Ukrainian, with a working English translation.", uk: "Опубліковано на форумі eCampus перед очним тижнем. Наведено українською мовою учасника з робочим перекладом англійською." },
  ph_search:   { en: "Search by name, institution, city or role…", uk: "Пошук за іменем, установою, містом чи посадою…" },
  reset:       { en: "Reset", uk: "Скинути" },
  showing:     { en: "Showing {n} of {t} participants", uk: "Показано {n} із {t} учасників" },
  noMatch:     { en: "No participant matches these filters.", uk: "Жоден учасник не відповідає цим фільтрам." },
  allOf:       { en: "All — {f}", uk: "Усі — {f}" },
  colName:     { en: "Name", uk: "Ім’я" },
  colOrg:      { en: "Institution", uk: "Установа" },
  colOrgType:  { en: "Institution type", uk: "Тип установи" },
  colSector:   { en: "Function", uk: "Функція" },
  colCity:     { en: "Based in", uk: "Місто" },
  colPosition: { en: "Position", uk: "Посада" },
  statPeople:  { en: "Participants", uk: "Учасники" },
  statOrgs:    { en: "Institutions", uk: "Установи" },
  statCities:  { en: "Cities", uk: "Міста" },
  statWomen:   { en: "Women", uk: "Жінки" },
  chartOrgType:{ en: "By institution type", uk: "За типом установи" },
  chartSector: { en: "By function in the sector", uk: "За функцією в секторі" },
  chartOrg:    { en: "By institution", uk: "За установою" },
  chartCity:   { en: "By city", uk: "За містом" },
  chartSex:    { en: "By sex, as recorded at registration", uk: "За статтю, як зафіксовано при реєстрації" },
  records:     { en: "{t} records · {c} categories", uk: "Записів: {t} · категорій: {c}" },
  andMore:     { en: "+ {n} more", uk: "+ ще {n}" },
  respondents: { en: "{n} of 19 respondents", uk: "{n} із 19 респондентів" },
  src_participants: { en: "Roster source: A4019972_ParticipantList_EN_16_10_2026 (22 registered). Contact details are deliberately not published. Survey source: pre-course survey on the ITCILO eCampus, 19 submissions. Introductions: eCampus forum “Let's get to know each other”.", uk: "Джерело списку: A4019972_ParticipantList_EN_16_10_2026 (22 зареєстровані). Контактні дані свідомо не публікуються. Джерело анкети: анкета перед курсом на eCampus МНЦ МОП, 19 відповідей. Представлення: форум eCampus «Познайомимося»." },

  /* --- insights ---------------------------------------------------------- */
  eyeInsights: { en: "03 · The wall of cards", uk: "03 · Стіна карток" },
  eyeForesight:{ en: "Looking ahead", uk: "Погляд уперед" },
  eyeLibrary:  { en: "The full library", uk: "Повна бібліотека" },
  h_insights:  { en: "What you said you need", uk: "Що ви назвали своїми потребами" },
  h_library:   { en: "Every resource in one place", uk: "Усі ресурси в одному місці" },
  l_library:   { en: "Search and filter the complete set — the publications cited in the course decks, and the ILO, UN and EU resources added for this dashboard.", uk: "Шукайте і фільтруйте повний перелік — публікації, згадані в презентаціях курсу, та ресурси МОП, ООН і ЄС, додані для цього дашборду." },
  ph_insights: { en: "Search the needs — try “drones”, “inspection” or “fatigue”…", uk: "Пошук потреб — спробуйте «дрони», «інспекція» або «втома»…" },
  ph_library:  { en: "Search titles, publishers and notes…", uk: "Пошук за назвами, видавцями та примітками…" },
  btn_expand:  { en: "Open all", uk: "Розгорнути всі" },
  btn_collapse:{ en: "Close all", uk: "Згорнути всі" },
  allClusters: { en: "All four clusters", uk: "Усі чотири кластери" },
  needsCount:  { en: "{n} of {t} needs shown", uk: "Показано потреб: {n} із {t}" },
  noNeeds:     { en: "No need matches that search.", uk: "Жодна потреба не відповідає цьому пошуку." },
  whereAnswered:{ en: "Where the programme answers this", uk: "Де програма відповідає на це" },
  furtherReading:{ en: "Further reading", uk: "Подальше читання" },
  mentions:    { en: "mentions", uk: "згадок" },
  srcCards:    { en: "Wall of cards", uk: "Стіна карток" },
  srcSurvey:   { en: "Pre-course survey", uk: "Анкета перед курсом" },
  srcForum:    { en: "Self-introductions", uk: "Самопредставлення" },
  citedInCourse:{ en: "Cited in the course", uk: "Згадано в курсі" },
  addedReading:{ en: "Added reading", uk: "Додане читання" },
  allCats:     { en: "All categories", uk: "Усі категорії" },
  allOrigins:  { en: "All sources", uk: "Усі джерела" },
  onlyCited:   { en: "Cited in the course decks", uk: "Згадано в презентаціях курсу" },
  onlyAdded:   { en: "Added for this dashboard", uk: "Додано для цього дашборду" },
  resCount:    { en: "{n} of {t} resources", uk: "Ресурсів: {n} із {t}" },
  noRes:       { en: "No resource matches that search.", uk: "Жоден ресурс не відповідає цьому пошуку." },
  linkedNeeds: { en: "Linked needs", uk: "Пов’язані потреби" },
  src_insights:{ en: "Sources: the wall of challenge and expectation cards collected in the opening round on 26 October 2026; the pre-course survey (19 submissions); the eCampus self-introductions; and the course session decks. Card items are faithful summaries of handwritten Ukrainian originals, not verbatim quotations, and are not attributed to individuals. All external links were checked on 3 November 2026.", uk: "Джерела: стіна карток із викликами та очікуваннями, зібрана у вступному раунді 26 жовтня 2026; анкета перед курсом (19 відповідей); самопредставлення на eCampus; презентації сесій курсу. Пункти з карток є точними узагальненнями рукописних українських оригіналів, а не дослівними цитатами, і не прив’язані до окремих осіб. Усі зовнішні посилання перевірено 3 листопада 2026." },

  /* --- categories (library) ---------------------------------------------- */
  cat: {
    standard:    { en: "International standards", uk: "Міжнародні стандарти" },
    guidance:    { en: "Guidance and method", uk: "Настанови та методи" },
    governance:  { en: "Governance", uk: "Врядування" },
    inspection:  { en: "Labour inspection", uk: "Інспекція праці" },
    psychosocial:{ en: "Psychosocial risk", uk: "Психосоціальні ризики" },
    people:      { en: "People and work design", uk: "Люди та дизайн роботи" },
    technology:  { en: "Technology and AI", uk: "Технології та ШІ" },
    mining:      { en: "Mining and underground", uk: "Гірничі та підземні роботи" },
    inclusion:   { en: "Inclusion and gender", uk: "Інклюзія та гендер" },
    energy:      { en: "Energy sector", uk: "Енергетичний сектор" },
    ukraine:     { en: "Ukraine", uk: "Україна" },
    eu:          { en: "European Union", uk: "Європейський Союз" },
    evidence:    { en: "Evidence and data", uk: "Докази та дані" },
    context:     { en: "Context", uk: "Контекст" }
  },

  type: {
    convention:       { en: "Convention", uk: "Конвенція" },
    guidelines:       { en: "Guidelines", uk: "Настанови" },
    "code-of-practice": { en: "Code of practice", uk: "Кодекс практики" },
    standard:         { en: "Standard", uk: "Стандарт" },
    directive:        { en: "EU directive", uk: "Директива ЄС" },
    regulation:       { en: "EU regulation", uk: "Регламент ЄС" },
    "national-law":   { en: "Ukrainian law", uk: "Законодавство України" },
    report:           { en: "Report", uk: "Звіт" },
    news:             { en: "News", uk: "Новина" },
    data:             { en: "Data", uk: "Дані" },
    "web-resource":   { en: "Web resource", uk: "Вебресурс" }
  },

  kind: {
    plenary: { en: "Session", uk: "Сесія" },
    lab:     { en: "Lab", uk: "Лабораторія" },
    visit:   { en: "Study visit", uk: "Візит" },
    social:  { en: "Programme event", uk: "Подія програми" },
    online:  { en: "Online", uk: "Онлайн" }
  },

  horizon: {
    Present: { en: "Already here", uk: "Уже тут" },
    Near:    { en: "Near horizon", uk: "Близький горизонт" },
    Medium:  { en: "Medium horizon", uk: "Середній горизонт" }
  },

  foot: {
    disclaimer: {
      en: "This dashboard was produced for training purposes in the context of ITCILO activity A4019972 — Modern OSH Governance and Inspection in the Energy Sector, Turin, 26–30 October 2026. It summarises participant input collected during the programme; nothing on this page is attributed to a named individual, and no contact details are published. External resources are listed for teaching and should be consulted in their current official version.",
      uk: "Цей дашборд створено з навчальною метою в межах заходу МНЦ МОП A4019972 — «Сучасне управління БЗР та інспекція праці в енергетичному секторі», Турин, 26–30 жовтня 2026. Він узагальнює внесок учасників, зібраний під час програми; жодне твердження на цій сторінці не приписується конкретній особі, контактні дані не публікуються. Зовнішні ресурси наведено для навчальних цілей — звіряйтеся з їхніми чинними офіційними редакціями."
    },
    rights: {
      en: "© International Training Centre of the ILO, 2026 · Programme on Social Protection, Governance and Tripartism (SPGT)",
      uk: "© Міжнародний навчальний центр МОП, 2026 · Програма з соціального захисту, врядування та трипартизму (SPGT)"
    }
  }
};
