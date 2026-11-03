/* ============================================================================
   COURSE DATA — A4019972 · Modern OSH Governance and Inspection in the
   Energy Sector · Turin, 26–30 October 2026
   ----------------------------------------------------------------------------
   Every user-facing string is a bilingual pair { en, uk }. The renderer calls
   t(value) and picks the active language, falling back to English.

   Sources
   -------
   · A4019972_Ukraine_OSH_LI_Agenda_FINAL (EN) and A4019972_Programme_UA (UK)
   · Information Note "Modern OSH Governance and Inspection in the Energy
     Sector" (EN / UK), ITCILO SPGT, 2026
   · A4019972_Ukraine_OSH_Onboarding_20Oct2026.pptx — online onboarding deck
   · D1S1_Modern_OSH_Ukraine_Residential_Opening_26Oct2026.pptx — residential
     opening deck, which carries the co-creation logic of the week
   ========================================================================== */

window.COURSE = {

  /* ---------------------------------------------------------------- meta -- */
  code: "A4019972",
  updated: "2026-11-03",
  title: {
    en: "Modern OSH Governance and Inspection in the Energy Sector",
    uk: "Сучасне управління БЗР та інспекція праці в енергетичному секторі"
  },
  titleLines: {
    en: ["Modern OSH Governance", "and Inspection in the", "Energy Sector"],
    uk: ["Сучасне управління БЗР", "та інспекція праці", "в енергетичному секторі"]
  },
  lead: {
    en: "A five-day residential programme at the ITCILO campus in Turin, framed by one online onboarding session and one online closing workshop — built around the experience of the people who keep Ukraine's energy system running.",
    uk: "П’ятиденна очна програма в кампусі МНЦ МОП у Турині, обрамлена однією онлайн-сесією знайомства та однією онлайн-підсумковою зустріччю, — побудована навколо досвіду людей, які підтримують роботу енергосистеми України."
  },
  project: {
    en: "A capacity-building activity under the ILO project “Protecting and Preparing Ukraine’s Energy Workforce for Sustainable Recovery”, supported by the Government of the Kingdom of the Netherlands.",
    uk: "Захід із розвитку потенціалу в межах проєкту МОП «Захист і підготовка енергетичних працівників України до сталого відновлення» за підтримки Уряду Королівства Нідерландів."
  },

  meta: [
    { label: { en: "Dates", uk: "Дати" },
      value: { en: "26–30 October 2026", uk: "26–30 жовтня 2026" } },
    { label: { en: "Venue", uk: "Місце проведення" },
      value: { en: "ITCILO campus, Turin, Italy", uk: "Кампус МНЦ МОП, Турин, Італія" } },
    { label: { en: "Languages", uk: "Мови" },
      value: { en: "English with interpretation into Ukrainian", uk: "Англійська з перекладом українською" } },
    { label: { en: "Programme", uk: "Програма" },
      value: { en: "Social Protection, Governance and Tripartism (SPGT)", uk: "Соціальний захист, врядування та трипартизм (SPGT)" } }
  ],

  kpis: [
    { value: "22", label: { en: "Registered participants", uk: "Зареєстровані учасники" } },
    { value: "3",  label: { en: "Study visits", uk: "Навчальні візити" } },
    { value: "15", label: { en: "Resource persons", uk: "Тренери та експерти" } },
    { value: "7",  label: { en: "Days of learning", uk: "Днів навчання" } }
  ],

  /* ------------------------------------------------------------ overview -- */
  snapshot: {
    en: "Ukraine's energy workforce is operating in an exceptionally demanding environment. Repair and maintenance teams keep electricity, heating and other essential services running while facing damaged infrastructure, emergency interventions, heightened security risks, fatigue and sustained operational pressure. At the same time, the sector is preparing for recovery and transformation towards a more modern, decentralized and digitally enabled energy system. This programme brings those two realities together: modern occupational safety and health (OSH) governance and inspection, practical prevention in high-risk and emergency conditions, and the responsible use of digital innovation — all continuously tested against the relevance for Ukraine's energy sector.",
    uk: "Енергетичні працівники України працюють у винятково складних умовах. Ремонтні та експлуатаційні бригади забезпечують електро- і теплопостачання та інші життєво важливі послуги, стикаючись із пошкодженою інфраструктурою, аварійними втручаннями, підвищеними ризиками безпеки, втомою та постійним операційним тиском. Водночас галузь готується до відновлення й трансформації в бік сучасної, децентралізованої та цифровізованої енергетичної системи. Програма поєднує ці дві реальності: сучасне управління безпекою та здоров’ям на роботі (БЗР) й інспекцію праці, практичну профілактику в умовах підвищеної небезпеки та надзвичайних ситуацій, а також відповідальне використання цифрових інновацій — і постійно перевіряє їхню релевантність для енергетичного сектору України."
  },

  // The premise that frames the whole week — residential opening, slides 2–3.
  premise: {
    eyebrow: { en: "Why this workshop is different", uk: "Чому цей воркшоп інший" },
    title: {
      en: "There is no ready-made handbook for the reality you work in.",
      uk: "Немає готового підручника для реальності, в якій ви працюєте."
    },
    steps: [
      { k: { en: "Your experience", uk: "Ваш досвід" },
        v: { en: "is the starting point", uk: "є відправною точкою" } },
      { k: { en: "International experience", uk: "Міжнародний досвід" },
        v: { en: "offers comparisons", uk: "дає можливість порівняння" } },
      { k: { en: "Our shared work", uk: "Наша спільна робота" },
        v: { en: "is to adapt and improve", uk: "полягає в адаптації та вдосконаленні" } }
    ],
    note: {
      en: "The most important expertise is already in the room. Public authorities, labour inspection, energy enterprises, mining and rescue services — the week is shaped by the questions, examples and professional judgement participants bring.",
      uk: "Найважливіша експертиза вже є в цій залі. Органи влади, інспекція праці, енергетичні підприємства, гірничорятувальні служби — тиждень формують питання, приклади та професійні судження самих учасників."
    }
  },

  // The cohort photograph. Taken on the Sogin study visit; it stands in for the
  // group picture because it is the one frame with the whole cohort in it.
  cohort: {
    src: "assets/cohort.jpg",
    alt: {
      en: "The course cohort photographed together outdoors at the Sogin site in Trino, standing in front of a decommissioned steam-turbine rotor, with the European, Italian and Sogin flags behind them.",
      uk: "Група учасників курсу на спільному фото надворі на майданчику Sogin у Тріно, перед виведеним з експлуатації ротором парової турбіни; позаду — прапори ЄС, Італії та Sogin."
    },
    caption: {
      en: "The cohort on the second study visit — Sogin S.p.A., Trino, Thursday 29 October 2026.",
      uk: "Група під час другого навчального візиту — Sogin S.p.A., Тріно, четвер 29 жовтня 2026 року."
    },
    note: {
      en: "Twenty-two participants from Ukraine's ministries, inspection authorities, energy enterprises and mine-rescue services, with the ILO and ITCILO team.",
      uk: "Двадцять два учасники з міністерств, наглядових органів, енергетичних підприємств і гірничорятувальних служб України разом із командою МОП та МНЦ МОП."
    }
  },

  // The three responsibilities participants balance daily — opening, slide 4.
  balance: [
    { n: "01", title: { en: "Protect people", uk: "Захистити людей" },
      body: { en: "Exposure, working conditions, health and dignity.", uk: "Вплив шкідливих чинників, умови праці, здоров’я та гідність." } },
    { n: "02", title: { en: "Keep services running", uk: "Забезпечити роботу послуг" },
      body: { en: "Emergency repair, reliability and essential public needs.", uk: "Аварійно-відновлювальні роботи, надійність і базові суспільні потреби." } },
    { n: "03", title: { en: "Build for recovery", uk: "Будувати для відновлення" },
      body: { en: "Modern systems, skills and longer-term resilience.", uk: "Сучасні системи, навички та довгострокова стійкість." } }
  ],
  balanceNote: {
    en: "Strong OSH governance helps make these responsibilities compatible — not competitive.",
    uk: "Сильне управління БЗР робить ці обов’язки сумісними, а не конкурентними."
  },

  topics: [
    { en: "OSH governance, international principles and the role of inspection in a changing energy sector.", uk: "Управління БЗР, міжнародні принципи та роль інспекції праці в енергетиці, що змінюється." },
    { en: "Risk assessment and OSH management systems for high-risk energy operations.", uk: "Оцінювання ризиків і системи управління БЗР для робіт підвищеної небезпеки в енергетиці." },
    { en: "Wartime and emergency OSH protocols: emergency repair, access, evacuation, incident reporting and coordination.", uk: "Протоколи БЗР воєнного часу та для надзвичайних ситуацій: аварійний ремонт, доступ, евакуація, звітування про інциденти та координація." },
    { en: "PPE and protective solutions for electrical, damaged, contaminated and underground working environments.", uk: "ЗІЗ та засоби захисту для роботи в електроустановках, на пошкоджених, забруднених і підземних об’єктах." },
    { en: "Emergency preparedness, rescue coordination and safe work in underground and mining-related operations.", uk: "Готовність до надзвичайних ситуацій, координація рятувальних робіт і безпечна праця на підземних та гірничих роботах." },
    { en: "Psychosocial risks affecting emergency crews, rescue teams, shift workers, dispatchers and supervisors.", uk: "Психосоціальні ризики для аварійних бригад, рятувальників, змінних працівників, диспетчерів та керівників." },
    { en: "Digital OSH tools — AI, sensors, wearables, drones, dashboards, mobile reporting, computer vision and predictive analytics — and their governance risks.", uk: "Цифрові інструменти БЗР — ШІ, датчики, носимі пристрої, дрони, дашборди, мобільне звітування, комп’ютерний зір і предиктивна аналітика — та пов’язані з ними ризики управління." },
    { en: "Strategic foresight and emerging OSH risks linked to technological and organizational change.", uk: "Стратегічне передбачення та нові ризики БЗР, пов’язані з технологічними й організаційними змінами." },
    { en: "Worker participation, safety culture and cooperation among authorities, enterprises, OSH professionals, inspectors and worker representatives.", uk: "Участь працівників, культура безпеки та співпраця між органами влади, підприємствами, фахівцями з БЗР, інспекторами і представниками працівників." }
  ],

  outcomes: [
    { en: "Analyse priority OSH risks in wartime, recovery and high-risk energy operations.", uk: "Аналізувати пріоритетні ризики БЗР в умовах війни, відновлення та робіт підвищеної небезпеки в енергетиці." },
    { en: "Apply structured risk assessment and the hierarchy of controls to practical workplace situations.", uk: "Застосовувати структуроване оцінювання ризиків та ієрархію заходів контролю до реальних виробничих ситуацій." },
    { en: "Review workplace safety and emergency protocols and identify areas for strengthening.", uk: "Переглядати протоколи безпеки та реагування на надзвичайні ситуації й визначати, що потребує посилення." },
    { en: "Assess the suitability of PPE and other protective measures for specific high-risk tasks and environments.", uk: "Оцінювати придатність ЗІЗ та інших захисних заходів для конкретних небезпечних робіт і середовищ." },
    { en: "Identify responsible uses of digital technologies for prevention, monitoring, inspection and rapid response.", uk: "Визначати відповідальні способи застосування цифрових технологій для профілактики, моніторингу, інспекції та швидкого реагування." },
    { en: "Design practical approaches to psychosocial risk prevention and support in energy and mining-related operations.", uk: "Розробляти практичні підходи до запобігання психосоціальним ризикам і підтримки працівників в енергетиці та гірничій справі." },
    { en: "Translate lessons from study visits and international experience into realistic measures for Ukrainian institutions and enterprises.", uk: "Переносити уроки з навчальних візитів і міжнародного досвіду в реалістичні заходи для українських установ і підприємств." },
    { en: "Identify concrete priorities for strengthening OSH governance, inspection, training and prevention in the energy sector.", uk: "Визначати конкретні пріоритети для посилення управління БЗР, інспекції, навчання та профілактики в енергетичному секторі." }
  ],

  audience: {
    en: "A mixed group of around 20–25 participants selected in consultation with the ILO and the Ministry of Energy of Ukraine: representatives of the Ministry of Energy and other public authorities; OSH professionals and company-level practitioners from electricity, heating, gas, coal, renewables and grid maintenance; labour and technical inspectors; members of enterprise OSH committees and worker representatives; mining and rescue services, including personnel working with civilian rescue teams and underground operations; and trainers, advisors and methodological staff.",
    uk: "Змішана група з близько 20–25 учасників, відібраних у консультації з МОП і Міністерством енергетики України: представники Міненерго та інших органів влади; фахівці з БЗР і практики підприємств з електро-, тепло-, газопостачання, вугільної галузі, відновлюваної енергетики та обслуговування мереж; інспектори праці та технічні інспектори; члени комісій з БЗР і представники працівників; гірничорятувальні служби, зокрема персонал цивільних рятувальних підрозділів і підземних робіт; а також тренери, радники й методисти."
  },

  // Key features from the Information Note.
  pillars: [
    { icon: "◉", title: { en: "Learn from practice", uk: "Навчання на практиці" },
      body: { en: "Three study visits connect the classroom with real OSH management, prevention and high-risk operational environments.", uk: "Три навчальні візити поєднують аудиторію з реальним управлінням БЗР, профілактикою та роботами підвищеної небезпеки." } },
    { icon: "◆", title: { en: "Work on real challenges", uk: "Робота з реальними викликами" },
      body: { en: "Practical labs and group work address protocols, PPE, psychosocial risks, digital OSH and compliance challenges relevant to Ukraine.", uk: "Практичні лабораторії та групова робота охоплюють протоколи, ЗІЗ, психосоціальні ризики, цифрові інструменти БЗР і питання дотримання вимог, актуальні для України." } },
    { icon: "✦", title: { en: "Meet the experts", uk: "Зустріч з експертами" },
      body: { en: "ILO and ITCILO specialists and recognized external experts in OSH, inspection, energy, mining, emergency preparedness and digital innovation.", uk: "Фахівці МОП і МНЦ МОП та визнані зовнішні експерти з БЗР, інспекції праці, енергетики, гірничої справи, готовності до НС і цифрових інновацій." } },
    { icon: "⇄", title: { en: "Transfer lessons home", uk: "Перенесення уроків додому" },
      body: { en: "Briefings and debriefings around the study visits help identify what can realistically be adapted to each institutional and workplace context.", uk: "Брифінги та обговорення навколо візитів допомагають визначити, що реалістично адаптувати до конкретного інституційного та виробничого контексту." } },
    { icon: "✓", title: { en: "Certified learning", uk: "Сертифіковане навчання" },
      body: { en: "Participants meeting the attendance and mandatory activity requirements receive an ITCILO Certificate of Participation and digital credentials.", uk: "Учасники, які виконали вимоги щодо відвідування та обов’язкових активностей, отримують Сертифікат участі МНЦ МОП і цифрові бейджі." } },
    { icon: "⚑", title: { en: "Observe the system, not only the tool", uk: "Дивитися на систему, а не лише на інструмент" },
      body: { en: "Every session and visit is read through four questions: how a risk is recognized early, who can make the safe decision, what keeps prevention working, and what adaptation would require.", uk: "Кожна сесія і візит розглядаються через чотири питання: як ризик виявляють рано, хто може ухвалити безпечне рішення, що підтримує роботу профілактики та чого потребує адаптація." } }
  ],

  // The four-question observation lens — residential opening, slide 14.
  lens: {
    title: { en: "A useful observation lens", uk: "Корисна оптика спостереження" },
    blurb: {
      en: "Four questions carried into every session and every study visit. They look for the conditions that make a good practice possible — not only for the practice itself.",
      uk: "Чотири питання, які супроводжують кожну сесію та кожний навчальний візит. Вони шукають умови, що роблять хорошу практику можливою, а не лише саму практику."
    },
    items: [
      { n: "01", q: { en: "How is a risk recognized early?", uk: "Як ризик виявляють рано?" },
        a: { en: "Sources of information, reporting, worker voice.", uk: "Джерела інформації, звітування, голос працівника." } },
      { n: "02", q: { en: "Who can make the safe decision?", uk: "Хто може ухвалити безпечне рішення?" },
        a: { en: "Authority, escalation and stop-work arrangements.", uk: "Повноваження, ескалація та право зупинити роботу." } },
      { n: "03", q: { en: "What keeps prevention working?", uk: "Що підтримує роботу профілактики?" },
        a: { en: "Maintenance, learning, skills and supervision.", uk: "Технічне обслуговування, навчання, навички та нагляд." } },
      { n: "04", q: { en: "What would adaptation require?", uk: "Чого потребує адаптація?" },
        a: { en: "Law, resources, organizations and operating conditions.", uk: "Законодавство, ресурси, організації та умови експлуатації." } }
    ]
  },

  // The four question clusters the week is steered by — opening, slide 28.
  guiding: [
    { id: "emergency", label: { en: "Emergency work and critical controls", uk: "Аварійні роботи та критичні заходи контролю" },
      q: { en: "What must remain reliable under pressure?", uk: "Що має залишатися надійним під тиском?" } },
    { id: "governance", label: { en: "OSH governance and cooperation", uk: "Управління БЗР і співпраця" },
      q: { en: "Where are responsibilities or processes difficult?", uk: "Де обов’язки чи процеси є складними?" } },
    { id: "people", label: { en: "People, organization and well-being", uk: "Люди, організація та добробут" },
      q: { en: "What needs to change in the way work is supported?", uk: "Що потрібно змінити в тому, як підтримується праця?" } },
    { id: "tech", label: { en: "Technologies and practical transfer", uk: "Технології та практичний трансфер" },
      q: { en: "Which tools or practices could be useful — and feasible?", uk: "Які інструменти чи практики можуть бути корисними — і здійсненними?" } }
  ],

  /* ----------------------------------------------------- learning journey -- */
  journeyLead: {
    en: "The learning journey runs well beyond the five days in Turin. One online session opens it, five residential days build and test the method, and one online workshop closes it with foresight and action planning.",
    uk: "Навчальна подорож виходить далеко за межі п’яти днів у Турині. Одна онлайн-сесія її відкриває, п’ять очних днів будують і перевіряють метод, а одна онлайн-зустріч завершує її стратегічним передбаченням і плануванням дій."
  },
  phases: [
    { id: "onboard", date: { en: "20 Oct", uk: "20 жовт." }, kind: "online",
      title: { en: "Online opening", uk: "Онлайн-відкриття" },
      body: { en: "Sectoral perspectives, international OSH standards, Ukrainian experience, and pre-departure preparation.", uk: "Галузеві перспективи, міжнародні стандарти БЗР, український досвід та підготовка до поїздки." } },
    { id: "workshops", date: { en: "26–27 Oct", uk: "26–27 жовт." }, kind: "class",
      title: { en: "Technical workshops", uk: "Технічні сесії" },
      body: { en: "OSH systems, emergency protocols, PPE, digital innovation and labour inspection — then a lab that turns the week's questions into a common observation charter.", uk: "Системи БЗР, аварійні протоколи, ЗІЗ, цифрові інновації та інспекція праці — а далі лабораторія, яка перетворює питання тижня на спільну хартію спостереження." } },
    { id: "visits", date: { en: "28–30 Oct", uk: "28–30 жовт." }, kind: "visit",
      title: { en: "Learning from practice", uk: "Навчання на практиці" },
      body: { en: "Three complementary study visits, each followed by structured reflection that separates evidence from interpretation.", uk: "Три взаємодоповнювальні навчальні візити, кожен із структурованою рефлексією, що відокремлює факти від інтерпретації." } },
    { id: "closing", date: { en: "4 Nov", uk: "4 лист." }, kind: "online",
      title: { en: "Online follow-up", uk: "Онлайн-продовження" },
      body: { en: "Strategic foresight for OSH to 2050, debrief of the residential phase, action planning and next steps.", uk: "Стратегічне бачення розвитку БЗР до 2050 року, обговорення результатів очного етапу, планування дій і наступних кроків." } }
  ],

  // How the co-creation works in practice — opening deck slides 15, 26–28.
  cocreation: {
    title: { en: "How the week is co-created", uk: "Як тиждень створюється спільно" },
    blurb: {
      en: "The programme does not open with a curriculum. It opens by collecting what the room already knows — and the agenda is then read against it.",
      uk: "Програма починається не з навчального плану, а зі збору того, що вже знає зала, — і далі агенда читається крізь цю призму."
    },
    steps: [
      { n: "1", title: { en: "One voice each", uk: "Один голос від кожного" },
        body: { en: "Every participant introduces themselves, names one OSH challenge they see in their work, and one expectation they bring to the week.", uk: "Кожен учасник представляється, називає один виклик БЗР у своїй роботі та одне очікування від тижня." } },
      { n: "2", title: { en: "Captured on cards", uk: "Фіксація на картках" },
        body: { en: "Challenges and expectations are written on cards — orange for challenges, green for expectations — and posted on the wall where they stay visible all week.", uk: "Виклики й очікування записують на картках — помаранчеві для викликів, зелені для очікувань — і розміщують на стіні, де вони залишаються видимими весь тиждень." } },
      { n: "3", title: { en: "Clustered into four questions", uk: "Групування у чотири питання" },
        body: { en: "The cards are grouped into the four question clusters that steer the week: emergency work, governance, people, technology.", uk: "Картки групують у чотири питальні кластери, що скеровують тиждень: аварійні роботи, врядування, люди, технології." } },
      { n: "4", title: { en: "Tested against the agenda", uk: "Перевірка через агенду" },
        body: { en: "Each session and study visit is introduced as an answer — partial, comparative, sometimes inconvenient — to one of those clusters.", uk: "Кожну сесію та візит представляють як відповідь — часткову, порівняльну, іноді незручну — на один із цих кластерів." } },
      { n: "5", title: { en: "Returned to at the close", uk: "Повернення наприкінці" },
        body: { en: "The priorities are revisited in the Friday debrief and the 4 November online workshop, where they become action points.", uk: "До пріоритетів повертаються під час п’ятничного обговорення та онлайн-зустрічі 4 листопада, де вони стають планом дій." } }
    ],
    quote: {
      en: "Our task is not to settle every question today — but to make sure the right questions shape the week.",
      uk: "Наше завдання — не вирішити сьогодні кожне питання, а переконатися, що тиждень формують правильні питання."
    }
  },

  format: {
    en: "Expert presentations, facilitated discussion, peer exchange, protocol-review labs and applied group work. Two of the three visits are preceded by a technical briefing and all three are followed by a facilitated debriefing, so that observation becomes transferable practice rather than anecdote.",
    uk: "Експертні презентації, модеровані дискусії, обмін досвідом між колегами, лабораторії з перегляду протоколів і прикладна групова робота. Візитам передує технічний брифінг, а після кожного проводиться модероване обговорення, щоб спостереження перетворилося на практику, яку можна перенести, а не на окрему історію."
  },

  why: [
    { en: "Work on OSH challenges that directly reflect the realities of Ukraine's energy sector and its recovery.", uk: "Працювати з викликами БЗР, які прямо відображають реалії енергетичного сектору України та його відновлення." },
    { en: "Combine international standards and comparative experience with practical tools for prevention, inspection and workplace action.", uk: "Поєднати міжнародні стандарти й порівняльний досвід із практичними інструментами профілактики, інспекції та дій на робочому місці." },
    { en: "Observe OSH systems and high-risk operations directly through structured study visits.", uk: "Безпосередньо спостерігати системи БЗР і роботи підвищеної небезпеки під час структурованих навчальних візитів." },
    { en: "Explore how AI and other digital technologies can strengthen prevention and compliance while managing new risks responsibly.", uk: "Дослідити, як ШІ та інші цифрові технології можуть посилити профілактику й дотримання вимог, відповідально керуючи новими ризиками." },
    { en: "Exchange experience with peers and experts and leave with concrete ideas applicable at institutional and enterprise level.", uk: "Обмінятися досвідом із колегами та експертами й поїхати з конкретними ідеями для інституційного та виробничого рівня." }
  ],

  /* -------------------------------------------------------- study visits -- */
  visits: [
    { id: "iren", day: { en: "28 Oct", uk: "28 жовт." }, host: "IREN",
      title: { en: "Energy utility OSH practice", uk: "Практика охорони праці на енергетичному підприємстві" },
      focus: { en: "OSH governance and prevention in an energy company environment: safety management systems, maintenance, emergency protocols, digital reporting and worker engagement.", uk: "Управління БЗР і профілактика на енергетичному підприємстві: системи управління безпекою, обслуговування, аварійні протоколи, цифрове звітування та залучення працівників." },
      lens: { en: "How prevention becomes part of everyday operations.", uk: "Як профілактика стає частиною щоденної роботи." } },
    { id: "sogin", day: { en: "29 Oct", uk: "29 жовт." }, host: "Sogin S.p.A.",
      title: { en: "High-risk energy operations", uk: "Енергетичний об’єкт підвищеної небезпеки" },
      focus: { en: "Critical controls, procedures and operational risk management in a hazardous environment, with attention to emergency readiness.", uk: "Критичні заходи контролю, процедури та управління операційними ризиками в небезпечному середовищі з увагою до готовності до НС." },
      lens: { en: "The conditions that make controls effective.", uk: "Умови, за яких заходи контролю працюють." } },
    { id: "imerys", day: { en: "30 Oct", uk: "30 жовт." }, host: "Imerys Talc Italy S.p.A.",
      title: { en: "Underground work and mining", uk: "Підземні роботи та гірничодобувна галузь" },
      focus: { en: "Underground hazards, risk assessment, ventilation, rescue arrangements, hazard prevention and safety culture.", uk: "Підземні небезпеки, оцінювання ризиків, вентиляція, рятувальні заходи, запобігання небезпекам і культура безпеки." },
      lens: { en: "Rescue capacity and the culture that sustains it.", uk: "Рятувальна спроможність і культура, що її підтримує." } }
  ],

  /* ----------------------------------------------------- resource persons -- */
  people: [
    { name: "Tetyana Minenko", org: { en: "ILO Office for Ukraine", uk: "Бюро МОП в Україні" },
      role: { en: "National Project Manager", uk: "Національна керівниця проєкту" },
      nameUk: "Тетяна Міненко" },
    { name: "Olena Vazhynska", org: { en: "ITCILO", uk: "МНЦ МОП" },
      role: { en: "Programme Officer, SPGT — course manager", uk: "Фахівчиня програми SPGT — менеджерка курсу" },
      nameUk: "Олена Важинська" },
    { name: "Casper Edmonds", org: { en: "ILO", uk: "МОП" },
      role: { en: "Sectoral dynamics, decent work and just transition in energy", uk: "Галузеві тенденції, гідна праця та справедливий перехід в енергетиці" },
      nameUk: "Каспер Едмондс" },
    { name: "Changyou Zhu", org: { en: "ILO", uk: "МОП" },
      role: { en: "Labour inspection, risk-based targeting and strategic compliance", uk: "Інспекція праці, ризик-орієнтоване планування та стратегічне дотримання вимог" },
      nameUk: "Чан’ю Чжу" },
    { name: "Francisco Santos-O'Connor", org: { en: "ILO OSHE", uk: "Підрозділ МОП з питань БЗР (OSHE)" },
      role: { en: "International OSH principles, rights and standards; strategic foresight to 2050", uk: "Міжнародні принципи, права та стандарти БЗР; стратегічне передбачення до 2050 року" },
      nameUk: "Франсіско Сантос-О’Коннор" },
    { name: "Ahmet Dükünlü", org: { en: "ILO", uk: "МОП" },
      role: { en: "Project Technical Officer — OSH; OSH management systems in practice", uk: "Технічний спеціаліст проєкту з БЗР; системи управління БЗР на практиці" },
      nameUk: "Ахмет Дукунлу" },
    { name: "Camila Pereira Rego Meireles", org: { en: "ILO", uk: "МОП" },
      role: { en: "Inclusive and modern energy work", uk: "Інклюзивна та сучасна праця в енергетиці" },
      nameUk: "Каміла Перейра Рего Мейрелес" },
    { name: "Oleksandr Ihnatov", org: { en: "State Labour Service of Ukraine", uk: "Держпраці України" },
      role: { en: "Director, Department of Occupational Safety — national inspection practice", uk: "Директор Департаменту з питань безпеки праці — національна інспекційна практика" },
      nameUk: "Олександр Ігнатов" },
    { name: "Riccardo Melandri", org: { en: "Invited expert", uk: "Запрошений експерт" },
      role: { en: "OSH management systems, risk assessment and decision-making under pressure", uk: "Системи управління БЗР, оцінювання ризиків і рішення в умовах тиску" },
      nameUk: "Ріккардо Меландрі" },
    { name: "Claudio Galbiati", org: { en: "Invited expert", uk: "Запрошений експерт" },
      role: { en: "Innovation for prevention: AI, digital tools, PPE and emergency preparedness", uk: "Інновації для профілактики: ШІ, цифрові інструменти, ЗІЗ і готовність до НС" },
      nameUk: "Клаудіо Гальбіаті" },
    { name: "Sara Bonatto", org: { en: "Invited expert", uk: "Запрошена експертка" },
      role: { en: "Underground and mining safety; transferring lessons across sectors", uk: "Безпека підземних і гірничих робіт; перенесення уроків між галузями" },
      nameUk: "Сара Бонатто" },
    { name: "Felix Martin Daza", org: { en: "ITCILO", uk: "МНЦ МОП" },
      role: { en: "Opening remarks; gender and OSH", uk: "Вступне слово; гендер і БЗР" },
      nameUk: "Фелікс Мартін Даса" },
    { name: "Charles Crevier", org: { en: "ITCILO", uk: "МНЦ МОП" },
      role: { en: "Opening remarks", uk: "Вступне слово" },
      nameUk: "Шарль Кревʼє" },
    { name: "Paola Costantini", org: { en: "ITCILO", uk: "МНЦ МОП" },
      role: { en: "Onboarding and pre-departure briefing; participant coordination", uk: "Онбординг і брифінг перед поїздкою; координація учасників" },
      nameUk: "Паола Костантіні" },
    { name: "Viktoriia Lavrynovych", org: { en: "ITCILO", uk: "МНЦ МОП" },
      role: { en: "Learning environment and participant support", uk: "Навчальне середовище та підтримка учасників" },
      nameUk: "Вікторія Лавринович" }
  ],

  /* ---------------------------------------------------------------- days -- */
  // `kind`: plenary | lab | visit | social | online
  // `guides`: ids from COURSE.guiding — used by the Insights tab to link a
  //           participant challenge to the sessions that answer it.
  days: [
    {
      id: "d0", kind: "online",
      date: { en: "Tuesday 20 October", uk: "Вівторок, 20 жовтня" },
      label: { en: "Online onboarding", uk: "Онлайн-онбординг" },
      strap: { en: "A shared foundation before Turin", uk: "Спільна основа перед Турином" },
      sessions: [
        { time: "10:00–12:00", kind: "online",
          title: { en: "Welcome and opening remarks", uk: "Вітання та вступні слова" },
          who: ["Felix Martin Daza", "Tetyana Minenko"], guides: ["governance"] },
        { time: "10:00–12:00", kind: "online",
          title: { en: "Sectoral dynamics in energy: decent work, OSH and the implications of new technologies and AI", uk: "Галузеві тенденції в енергетиці: гідна праця, БЗР та вплив нових технологій і штучного інтелекту" },
          who: ["Casper Edmonds"], guides: ["tech", "people"] },
        { time: "10:00–12:00", kind: "online",
          title: { en: "International OSH principles, rights and standards; OSH management systems", uk: "Міжнародні принципи, права та стандарти у сфері БЗР. Системи управління БЗР" },
          who: ["Francisco Santos-O'Connor"], guides: ["governance"] },
        { time: "10:00–12:00", kind: "online",
          title: { en: "The role of labour inspection and social partners; implications for crisis and recovery", uk: "Роль інспекції праці та соціальних партнерів в умовах кризи й відновлення" },
          who: ["Changyou Zhu"], guides: ["governance"] },
        { time: "10:00–12:00", kind: "online",
          title: { en: "Ukraine's energy sector in crisis and recovery: worker realities, good practices and priorities", uk: "Енергетичний сектор України в умовах кризи та відновлення: реалії працівників, успішні практики та пріоритети" },
          who: [], whoNote: { en: "Two Ukrainian speakers", uk: "Два доповідачі з України" }, guides: ["emergency", "people"] },
        { time: "10:00–12:00", kind: "online",
          title: { en: "Onboarding and pre-departure briefing: programme orientation, eCampus, travel, interpretation, study visits", uk: "Орієнтаційна зустріч перед поїздкою: програма, доступ до eCampus, проїзд, усний переклад, навчальні візити" },
          who: ["Paola Costantini"], guides: [] }
      ]
    },
    {
      id: "d1", kind: "class",
      date: { en: "Monday 26 October", uk: "Понеділок, 26 жовтня" },
      label: { en: "Crisis and recovery", uk: "Криза та відновлення" },
      strap: { en: "From Ukrainian realities to resilient OSH governance", uk: "Від українських реалій до стійкої системи управління БЗР" },
      sessions: [
        { time: "09:00–10:30", kind: "plenary",
          title: { en: "Opening and introduction · Protecting energy workers in crisis and recovery: from Ukrainian realities to resilient OSH governance", uk: "Відкриття та вступ · Захист працівників енергетики в умовах кризи та відновлення: від українських реалій до стійкої системи управління БЗР" },
          who: ["Tetyana Minenko", "Olena Vazhynska"], guides: ["emergency", "governance", "people", "tech"],
          note: { en: "Includes the “one voice each” round in which every participant names one challenge and one expectation. These cards are the raw material of the Insights tab.", uk: "Включає раунд «один голос від кожного», у якому кожен учасник називає один виклик і одне очікування. Ці картки — основа вкладки «Інсайти»." } },
        { time: "11:00–12:30", kind: "plenary",
          title: { en: "Saving lives: strengthening OSH management systems and risk assessment in high-risk energy operations", uk: "Збереження життя: зміцнення систем управління БЗР та оцінювання професійних ризиків під час робіт підвищеної небезпеки в енергетиці" },
          who: ["Riccardo Melandri"], guides: ["governance", "emergency"] },
        { time: "14:00–15:15", kind: "plenary",
          title: { en: "OSH management systems and risk assessment in high-risk energy operations: emergency repair protocols and safe decision-making under pressure", uk: "Системи управління БЗР та оцінювання професійних ризиків у небезпечних енергетичних роботах: протоколи аварійно-відновлювальних робіт і безпечні рішення в умовах браку часу" },
          who: ["Riccardo Melandri"], guides: ["emergency"] },
        { time: "15:45–17:00", kind: "lab",
          title: { en: "Protecting energy workers in crisis and recovery — group work", uk: "Захист працівників енергетики в умовах кризи та відновлення — робота в групах" },
          who: ["Tetyana Minenko", "Olena Vazhynska"], guides: ["emergency", "people"],
          note: { en: "Pair exchange, mixed-table comparison, and one system or procedure each table commits to strengthen.", uk: "Обмін у парах, порівняння за змішаними столами та одна система чи процедура, яку кожен стіл зобов’язується посилити." } },
        { time: "17:15", kind: "social",
          title: { en: "City tour", uk: "Екскурсія містом" }, who: [], guides: [] }
      ]
    },
    {
      id: "d2", kind: "class",
      date: { en: "Tuesday 27 October", uk: "Вівторок, 27 жовтня" },
      label: { en: "Innovation and inspection", uk: "Інновації та інспекція" },
      strap: { en: "PPE, AI and digital tools; labour inspection; preparing for the visits", uk: "ЗІЗ, ШІ та цифрові інструменти; інспекція праці; підготовка до візитів" },
      sessions: [
        { time: "09:00–10:30", kind: "plenary",
          title: { en: "Innovation for prevention: new technologies, AI and digital tools for OSH", uk: "Інновації для запобігання ризикам: нові технології, штучний інтелект і цифрові інструменти для БЗР" },
          who: ["Claudio Galbiati"], guides: ["tech"] },
        { time: "11:00–12:30", kind: "plenary",
          title: { en: "OSH protocols, PPE and emergency preparedness · AI technology applications for OSH", uk: "Протоколи з охорони праці, ЗІЗ та готовність до надзвичайних ситуацій · Застосування технологій штучного інтелекту для БЗР" },
          who: ["Claudio Galbiati"], guides: ["tech", "emergency"] },
        { time: "12:30", kind: "social",
          title: { en: "Group picture", uk: "Спільне фото" }, who: [], guides: [] },
        { time: "14:00–15:15", kind: "plenary",
          title: { en: "Safeguarding worker safety: labour inspection in the energy sector", uk: "Захист працівників: інспекція праці в енергетичному секторі" },
          who: ["Ahmet Dükünlü", "Changyou Zhu", "Oleksandr Ihnatov"], guides: ["governance"],
          note: { en: "Three complementary perspectives: what inspectors should verify; where attention should go (risk-based targeting and strategic compliance planning); and Ukraine's own constraints and instruments under martial law.", uk: "Три взаємодоповнювальні перспективи: що має перевіряти інспектор; куди спрямувати увагу (ризик-орієнтоване планування та стратегічне дотримання вимог); і власні обмеження та інструменти України в умовах воєнного стану." } },
        { time: "15:45–17:00", kind: "lab",
          title: { en: "Preparing for the study visits: observing through an OSH and inspection lens — the Protocol-to-Practice Lab", uk: "Підготовка до навчальних візитів: спостереження з погляду БЗР та інспекції праці — лабораторія «Від протоколу до практики»" },
          who: ["Olena Vazhynska"], guides: ["emergency", "governance", "tech"],
          note: { en: "Four mixed tables interrogate three draft wartime OSH protocols, build and peer-review observation questions, and agree a common observation charter for the three visits.", uk: "Чотири змішані столи аналізують три проєкти протоколів БЗР воєнного часу, формулюють і взаємно перевіряють питання для спостереження та узгоджують спільну хартію спостереження для трьох візитів." } }
      ]
    },
    {
      id: "d3", kind: "visit",
      date: { en: "Wednesday 28 October", uk: "Середа, 28 жовтня" },
      label: { en: "Energy utility practice", uk: "Практика енергопідприємства" },
      strap: { en: "IREN visit · inclusive energy work · participant-led debrief", uk: "Візит до IREN · інклюзивна праця в енергетиці · обговорення за участю слухачів" },
      sessions: [
        { time: "09:00–12:30", kind: "visit",
          title: { en: "Study visit 1: Energy company / utility OSH practice — IREN", uk: "Навчальний візит 1: практика охорони праці на енергетичному підприємстві — IREN" },
          who: [], guides: ["governance", "emergency"] },
        { time: "14:00–15:15", kind: "plenary",
          title: { en: "Modern and inclusive energy work for the future", uk: "Сучасна та інклюзивна праця в енергетиці: погляд у майбутнє" },
          who: ["Olena Vazhynska", "Casper Edmonds", "Camila Pereira Rego Meireles"], guides: ["people", "tech"],
          note: { en: "Gender-responsive OSH and task-based risk assessment; PPE that fits the workforce; psychosocial risks and fatigue as work-design risks; heat and extreme weather; safe reintegration; social dialogue as a safety control.", uk: "Гендерно чутлива БЗР і оцінювання ризиків за завданнями; ЗІЗ, що відповідають складу персоналу; психосоціальні ризики та втома як ризики дизайну роботи; спека й екстремальна погода; безпечна реінтеграція; соціальний діалог як засіб контролю безпеки." } },
        { time: "15:45–17:00", kind: "lab",
          title: { en: "Learning from practice: translating observations into stronger OSH systems — participant-led debrief and transfer clinic", uk: "Від спостережень до практичних рішень: зміцнення систем управління БЗР — обговорення результатів за участю слухачів" },
          who: ["Casper Edmonds"], guides: ["governance", "people"] }
      ]
    },
    {
      id: "d4", kind: "visit",
      date: { en: "Thursday 29 October", uk: "Четвер, 29 жовтня" },
      label: { en: "High-risk operations", uk: "Роботи підвищеної небезпеки" },
      strap: { en: "Sogin visit · mining safety · transferring lessons across sectors", uk: "Візит до Sogin · безпека гірничих робіт · обмін досвідом між галузями" },
      sessions: [
        { time: "09:00–12:30", kind: "visit",
          title: { en: "Study visit 2: High-risk energy operation site — Sogin S.p.A.", uk: "Навчальний візит 2: енергетичний об’єкт підвищеної небезпеки — Sogin S.p.A." },
          who: [], guides: ["emergency", "governance"] },
        { time: "14:00–15:15", kind: "plenary",
          title: { en: "Underground work and mining safety: critical risks, prevention measures and lessons for the energy sector", uk: "Безпека підземних і гірничих робіт: основні ризики, заходи запобігання та уроки для енергетичного сектору" },
          who: ["Sara Bonatto"], guides: ["emergency"],
          note: { en: "Design choices that shape safety; ground control and rockfall; waste dumps and tailings; fire risk and ventilation; warning systems, emergency egress and rescue organization; incident investigation; AI for geotechnical monitoring.", uk: "Проєктні рішення, що визначають безпеку; управління гірським тиском і обвали; відвали та хвостосховища; ризик пожежі та вентиляція; системи оповіщення, аварійні виходи й організація рятування; розслідування інцидентів; ШІ для геотехнічного моніторингу." } },
        { time: "15:45–17:00", kind: "lab",
          title: { en: "From high-risk operations to underground work: transferring lessons across sectors", uk: "Від робіт підвищеної небезпеки до підземних робіт: обмін досвідом між галузями" },
          who: ["Sara Bonatto", "Casper Edmonds"], guides: ["emergency", "people"] },
        { time: "19:00", kind: "social",
          title: { en: "Course dinner", uk: "Спільна вечеря" }, who: [], guides: [] }
      ]
    },
    {
      id: "d5", kind: "visit",
      date: { en: "Friday 30 October", uk: "П’ятниця, 30 жовтня" },
      label: { en: "Underground work", uk: "Підземні роботи" },
      strap: { en: "Imerys Talc Italy visit · observations for institutional practice", uk: "Візит до Imerys Talc Italy · спостереження для інституційної практики" },
      sessions: [
        { time: "09:00–12:30", kind: "visit",
          title: { en: "Study visit 3: Underground work and mining — Imerys Talc Italy S.p.A.", uk: "Навчальний візит 3: підземні роботи та гірничодобувна галузь — Imerys Talc Italy S.p.A." },
          who: [], guides: ["emergency", "people"] }
      ]
    },
    {
      id: "d6", kind: "online",
      date: { en: "Wednesday 4 November", uk: "Середа, 4 листопада" },
      label: { en: "Online closing", uk: "Онлайн-завершення" },
      strap: { en: "Strategic foresight, debrief and action planning", uk: "Стратегічне передбачення, підсумки та планування дій" },
      sessions: [
        { time: "10:00–12:00", kind: "online",
          title: { en: "Modern OSH governance and inspection in a transforming energy sector · Strategic Foresight for OSH to 2050", uk: "Сучасне управління БЗР та інспекція праці в енергетиці, що трансформується · Формування стратегічного бачення розвитку БЗР до 2050 року" },
          who: ["Francisco Santos-O'Connor"], guides: ["tech", "governance"] },
        { time: "10:00–12:00", kind: "online",
          title: { en: "Closing workshop: wrap-up, debrief of the residential phase, action planning and next steps", uk: "Підсумкова зустріч: обговорення результатів очного навчання, планування подальших дій та наступні кроки" },
          who: ["Olena Vazhynska", "Tetyana Minenko"], guides: ["governance", "people"] }
      ]
    }
  ],

  campus: {
    title: { en: "Practical arrangements", uk: "Практичні питання" },
    items: [
      { k: { en: "Venue", uk: "Місце" }, v: { en: "International Training Centre of the ILO, Turin — on the banks of the Po river.", uk: "Міжнародний навчальний центр МОП, Турин — на березі річки По." } },
      { k: { en: "Languages", uk: "Мови" }, v: { en: "English with simultaneous interpretation into Ukrainian; Italian–Ukrainian interpretation during the study visits.", uk: "Англійська із синхронним перекладом українською; під час візитів — італійсько-український переклад." } },
      { k: { en: "Daily schedule", uk: "Розклад дня" }, v: { en: "Main programme 09:00–17:00. Coffee 10:30–11:00 and 15:15–15:45; lunch 12:30–14:00.", uk: "Основна програма 09:00–17:00. Кава 10:30–11:00 і 15:15–15:45; обід 12:30–14:00." } },
      { k: { en: "Study visits", uk: "Навчальні візити" }, v: { en: "Group transfers, onsite interpretation and the required PPE are organised by the Centre.", uk: "Групові трансфери, переклад на місці та необхідні ЗІЗ організовує Центр." } },
      { k: { en: "Programme events", uk: "Події програми" }, v: { en: "City tour on Monday 17:15; course dinner on Thursday 19:00; group picture Tuesday 12:30.", uk: "Екскурсія містом у понеділок о 17:15; спільна вечеря у четвер о 19:00; спільне фото у вівторок о 12:30." } },
      { k: { en: "Certification", uk: "Сертифікація" }, v: { en: "An ITCILO Certificate of Participation and digital credentials for participants completing the mandatory activities and attending at least 80% of sessions.", uk: "Сертифікат участі МНЦ МОП і цифрові бейджі для учасників, які виконали обов’язкові активності та відвідали щонайменше 80% сесій." } }
    ]
  },

  contact: {
    org: "International Training Centre of the ILO",
    unit: { en: "Programme on Social Protection, Governance and Tripartism (SPGT)", uk: "Програма з соціального захисту, врядування та трипартизму (SPGT)" },
    address: "Viale Maestri del Lavoro 10, 10127 Turin, Italy",
    email: "spgt@itcilo.org",
    web: "www.itcilo.org"
  }
};
