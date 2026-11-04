/* ============================================================================
   INSIGHTS AND FUTURE FORESIGHT — A4019972
   ----------------------------------------------------------------------------
   What this tab does
   ------------------
   On the first morning in Turin every participant named one OSH challenge from
   their own work and one expectation for the week. Those were written on cards
   — orange for challenges, green for expectations — and posted on the wall.
   This tab takes that wall, merges it with the pre-course survey and the
   eCampus self-introductions, and does three things with each item:

     1. states the need in the participants' own terms;
     2. links it to the sessions and study visits of this programme that
        answer it (`sessions`, referenced as "<dayId>:<sessionIndex>");
     3. lists further reading — the standards, guides and publications cited in
        the course presentations, plus relevant ILO, UN and EU resources
        (`reading`, referenced by resource id).

   Sources
   -------
   · Wall of cards, residential opening, 26 October 2026 (36 photographs).
     Ukrainian handwriting; items are rendered here as faithful summaries, not
     as verbatim quotations, and are never attributed to a named individual.
   · Pre-course survey on the ITCILO eCampus — 19 submissions.
   · eCampus forum "Let's get to know each other" — 16 self-introductions.
   · Session decks in the course folder (see data/course.js for the agenda).
   ========================================================================== */

window.INSIGHTS = {

  lead: {
    en: "Thirty-one needs, drawn from the wall of cards, the pre-course survey, the self-introductions and the study visits, grouped into the four question clusters that steer the week. Open one to see which sessions of this programme answer it — and what to read next.",
    uk: "Тридцять одна потреба, зібрана зі стіни карток, анкети перед курсом, самопредставлень і навчальних візитів та згрупована у чотири питальні кластери, що скеровують тиждень. Відкрийте будь-яку, щоб побачити, які сесії програми на неї відповідають — і що читати далі."
  },

  method: {
    title: { en: "How this was built", uk: "Як це побудовано" },
    steps: [
      { en: "Every participant named one challenge and one expectation in the opening round on Monday 26 October. The cards stayed on the wall for the whole week.", uk: "Кожен учасник назвав один виклик і одне очікування у вступному раунді в понеділок 26 жовтня. Картки залишалися на стіні весь тиждень." },
      { en: "The cards were read together with the 19 pre-course survey submissions and the 16 eCampus self-introductions, and grouped into the four question clusters that steer the week.", uk: "Картки прочитано разом із 19 відповідями на анкету перед курсом і 16 самопредставленнями на eCampus та згруповано у чотири питальні кластери, що скеровують тиждень." },
      { en: "Each need was then matched to the sessions and study visits that address it, and to the resources cited in those sessions.", uk: "Далі кожну потребу зіставлено із сесіями та навчальними візитами, що її розглядають, і з ресурсами, згаданими на цих сесіях." },
      { en: "Finally, publicly available ILO, UN and EU resources were added where the course itself goes only part of the way.", uk: "Нарешті, додано загальнодоступні ресурси МОП, ООН та ЄС там, де сам курс охоплює питання лише частково." },
      { en: "After the visits, one need was added from what the group saw rather than from what it wrote, together with the Italian legal instruments that produce those practices — so that a permit system or an emergency plan can be read as something reproducible, not as a local habit.", uk: "Після візитів додано одну потребу — з того, що група побачила, а не записала, — разом з італійськими правовими інструментами, які створюють ці практики, щоб систему нарядів-допусків чи план дій у надзвичайних ситуаціях можна було прочитати як відтворюване рішення, а не місцеву звичку." }
    ],
    caveat: {
      en: "Items are summaries of handwritten Ukrainian cards and of free-text survey answers. They are deliberately not attributed to individuals and should be read as the collective position of the group, not as quotations.",
      uk: "Пункти є узагальненнями рукописних українських карток і відкритих відповідей анкети. Вони свідомо не прив’язані до окремих осіб і мають читатися як колективна позиція групи, а не як цитати."
    }
  },

  /* ------------------------------------------------------------ clusters -- */
  clusters: [
    {
      id: "emergency",
      label: { en: "Emergency work and critical controls", uk: "Аварійні роботи та критичні заходи контролю" },
      question: { en: "What must remain reliable under pressure?", uk: "Що має залишатися надійним під тиском?" },
      blurb: {
        en: "The largest group of cards, and the top challenge in the survey: twelve of nineteen respondents named worker safety during emergency repair and restoration as most relevant to their institution right now.",
        uk: "Найбільша група карток і головний виклик за результатами анкети: дванадцять із дев’ятнадцяти респондентів назвали безпеку працівників під час аварійних ремонтів і відновлення найактуальнішою темою для своєї установи."
      },
      needs: [
        { id: "e1", src: ["cards", "survey"], weight: 12,
          title: { en: "Organising work after shelling and during blackouts", uk: "Організація робіт після обстрілів і під час блекаутів" },
          body: { en: "Repair crews are sent out while the situation on the ground is still unclear: damaged assets, unknown structural condition, possible explosive remnants, no power and no light. Participants asked for a workable sequence — who assesses, who authorises, what must be checked before the first person enters.", uk: "Ремонтні бригади виїжджають, коли ситуація на місці ще не з’ясована: пошкоджені об’єкти, невідомий стан конструкцій, можливі вибухонебезпечні залишки, відсутність живлення і світла. Учасники просили робочу послідовність: хто оцінює, хто дає дозвіл, що має бути перевірено, перш ніж туди зайде перша людина." },
          sessions: ["d1:2", "d2:1", "d2:4", "d4:0"],
          reading: ["ilo-osh-2001", "ilo-c155", "niosh-hierarchy", "ilo-recording-code", "eu-89-391", "undac-rdna"] },

        { id: "e2", src: ["cards", "survey"], weight: 9,
          title: { en: "Flexible safety protocols for repeat strikes and drone threat", uk: "Гнучкі безпекові протоколи на випадок повторних ударів і загрози дронів" },
          body: { en: "The explicit ask was for protocols that minimise the time a repair crew spends exposed — algorithms for crew action during airstrikes, repeated shelling and FPV drone threat, together with detection aids and tactical medicine training for the crew itself.", uk: "Прямий запит — протоколи, що мінімізують час перебування бригади під загрозою: алгоритми дій персоналу під час повітряних атак, повторних обстрілів і загрози FPV-дронів, разом із засобами виявлення загроз та підготовкою з тактичної медицини для самої бригади." },
          sessions: ["d1:2", "d2:1", "d2:4"],
          reading: ["ilo-osh-2001", "ilo-c155", "ppe-standards", "ilo-ukraine-project", "ilo-dc-dashboard", "eu-89-391", "ilo-psychosocial"] },

        { id: "e3", src: ["cards"], weight: 7,
          title: { en: "Mine rescue under armed aggression", uk: "Гірничорятувальні роботи в умовах збройної агресії" },
          body: { en: "Mine rescue units now respond to the consequences of hostilities as well as to ordinary mine accidents. The named risk is a de-energised mine with people still in the workings — flooding, gas accumulation, and no way to bring them to the surface.", uk: "Гірничорятувальні загони тепер ліквідовують наслідки бойових дій нарівні зі звичайними аваріями на шахтах. Названий ризик — знеструмлена шахта, в якій ще перебувають люди: затоплення, загазування і неможливість підняти їх на поверхню." },
          sessions: ["d4:1", "d4:2", "d5:0"],
          reading: ["ilo-c176", "ilo-code-underground", "ilo-code-opencast", "ilo-mining-sector", "eu-92-104", "ilo-osh-2001"] },

        { id: "e4", src: ["cards"], weight: 4,
          title: { en: "Forecasting risk before emergency-rescue work begins", uk: "Прогнозування ризиків перед початком аварійно-рятувальних робіт" },
          body: { en: "Not assessment after the fact, but anticipation: being able to predict the risk profile of a rescue intervention at a given enterprise before the unit is committed to it.", uk: "Не оцінювання постфактум, а передбачення: здатність спрогнозувати профіль ризиків рятувальної операції на конкретному підприємстві ще до того, як загін буде задіяний." },
          sessions: ["d1:1", "d4:1", "d2:0"],
          reading: ["ilo-osh-2001", "ilo-c176", "ilo-code-underground", "euosha-ai-monitoring"] },

        { id: "e5", src: ["cards"], weight: 6,
          title: { en: "International standards were not written for war", uk: "Міжнародні стандарти писали не для війни" },
          body: { en: "Stated plainly on one of the cards: international OSH standards, regulations and good-practice guidance are not generally designed for extreme circumstances created by war. That leaves a grey area, and every framework has to be interpreted and adapted into measures that can actually be implemented in the field.", uk: "Прямо сформульовано на одній із карток: міжнародні стандарти БЗР, нормативні акти та настанови з найкращих практик здебільшого не розраховані на екстремальні обставини, створені війною. Це залишає «сіру зону», і кожну рамку доводиться тлумачити й адаптувати до заходів, які справді можна виконати в полі." },
          sessions: ["d0:2", "d1:0", "d2:4", "d6:0"],
          reading: ["ilo-c155", "ilo-c187", "ilo-fundamental-osh", "ilo-safe-healthy-right", "ilo-osh-2001", "ilo-ukraine-project"] },

        { id: "e6", src: ["cards", "forum"], weight: 5,
          title: { en: "Emergency response protocols as such", uk: "Протоколи реагування на надзвичайні ситуації як такі" },
          body: { en: "Several cards simply named the thing that was missing: a protocol for responding to an emergency. The Tuesday lab takes three draft wartime OSH protocols apart and asks what in each of them is actually inspectable.", uk: "Кілька карток просто назвали те, чого бракує: протокол реагування на надзвичайну ситуацію. Лабораторія у вівторок розбирає три проєкти протоколів БЗР воєнного часу й запитує, що в кожному з них справді піддається перевірці." },
          sessions: ["d2:1", "d2:4", "d4:1"],
          reading: ["it-piano-emergenza", "it-dm-antincendio", "ilo-osh-2001", "ilo-recording-code", "ilo-labour-inspection-guidelines", "eu-89-391"] }
      ]
    },

    {
      id: "governance",
      label: { en: "OSH governance and cooperation", uk: "Управління БЗР і співпраця" },
      question: { en: "Where are responsibilities or processes difficult?", uk: "Де обов’язки чи процеси є складними?" },
      blurb: {
        en: "Eight of nineteen respondents work in OSH policy, institutional coordination or strategic planning, and eight in inspection or compliance. The cards from this group are about the rules themselves — and about what inspection can lawfully do while a moratorium is in force.",
        uk: "Восьмеро з дев’ятнадцяти респондентів працюють у сфері політики БЗР, інституційної координації чи стратегічного планування, ще восьмеро — в інспекції та контролі дотримання вимог. Картки цієї групи — про самі правила і про те, що інспекція може робити законно, доки діє мораторій."
      },
      needs: [
        { id: "g1", src: ["forum", "survey"], weight: 8,
          title: { en: "Modernising state supervision — risk-based, flexible, effective", uk: "Модернізація державного нагляду — ризик-орієнтований, гнучкий, дієвий" },
          body: { en: "Both State Labour Service participants gave the same reason for coming: to make state supervision more flexible, more modern and more effective. In practice that means risk-based targeting, better accident-cause analysis, and connecting evidence from a single workplace to a pattern that merits a system response.", uk: "Обидва учасники від Держпраці назвали ту саму причину приїзду: зробити державний нагляд гнучкішим, сучаснішим і дієвішим. На практиці це означає ризик-орієнтоване планування, якіснішу аналітику причин нещасних випадків і зв’язок між доказами з одного робочого місця та закономірністю, що потребує системної відповіді." },
          sessions: ["d0:3", "d2:3", "d2:4", "d6:0"],
          reading: ["ilo-c081", "ilo-labour-inspection-guidelines", "ilo-strategic-compliance", "ilo-strategic-compliance-stories", "ilo-osh-inspection-topic", "ilo-guide-inspectors", "ela-joint-inspections"] },

        { id: "g2", src: ["cards", "survey"], weight: 10,
          title: { en: "Harmonising Ukrainian OSH law with the EU acquis", uk: "Гармонізація українського законодавства з БЗР із acquis ЄС" },
          body: { en: "Named on several cards and in the survey: Ukrainian legislation is seen as incomplete and insufficiently aligned with the European framework, while national legal acts need to be brought up to current European requirements. This is now an accession question, not only a technical one.", uk: "Названо на кількох картках і в анкеті: українське законодавство сприймається як недосконале та недостатньо узгоджене з європейською рамкою, а національні нормативно-правові акти потребують приведення до чинних європейських вимог. Це вже питання вступу до ЄС, а не лише технічне." },
          sessions: ["d0:2", "d2:3", "d6:0", "d6:1"],
          reading: ["eu-osha-directives", "eu-89-391", "it-dlgs-81", "eu-89-656", "eu-2009-104", "eu-92-104", "eu-2013-35", "eu-osh-framework-2021", "ilo-c155", "ilo-c187", "ua-law-osh"] },

        { id: "g3", src: ["cards"], weight: 5,
          title: { en: "The moratorium on inspections, and what remains lawful", uk: "Мораторій на перевірки — і що залишається законним" },
          body: { en: "Two cards named the legal instruments directly: the framework law on state supervision of economic activity and the resolution suspending inspection measures. The practical question is what an inspectorate can still do — advice, information campaigns, unannounced checks on specified grounds — while routine inspection is suspended.", uk: "Дві картки прямо назвали правові інструменти: рамковий закон про державний нагляд (контроль) у сфері господарської діяльності та постанову про зупинення заходів нагляду. Практичне питання — що інспекція все ще може робити: консультування, інформаційні кампанії, позапланові перевірки на визначених підставах — доки планові перевірки призупинено." },
          sessions: ["d2:3", "d2:4"],
          reading: ["ua-law-877", "ua-res-303", "ua-dsp-faq", "ilo-golight-ukraine", "ilo-info-campaign-ukraine", "ilo-strategic-compliance", "ilo-c081"] },

        { id: "g4", src: ["cards"], weight: 4,
          title: { en: "Complying with the Law on Labour Protection where hostilities are ongoing", uk: "Дотримання Закону «Про охорону праці» там, де тривають бойові дії" },
          body: { en: "A duty that does not suspend itself. The card asked how the statutory requirements are to be met in areas under active hostilities — where neither the employer nor the inspector can reach the site under normal conditions.", uk: "Обов’язок, який не призупиняється сам собою. Картка запитувала, як виконувати нормативні вимоги в районах активних бойових дій, де ні роботодавець, ні інспектор не можуть потрапити на об’єкт у звичайному режимі." },
          sessions: ["d1:0", "d2:3", "d2:4"],
          reading: ["ua-law-osh", "ilo-c155", "ilo-c081", "ilo-strategic-compliance", "ilo-ukraine-project"] },

        { id: "g5", src: ["cards"], weight: 6,
          title: { en: "Financing prevention: OSH costs in the tariff", uk: "Фінансування профілактики: витрати на БЗР у тарифі" },
          body: { en: "Two separate cards made the same argument: expenditure on PPE and on running the OSH function should be recognised in the electricity tariff or in the cost of the product. Without that, prevention competes with every other line in the budget.", uk: "Дві окремі картки висловили той самий аргумент: витрати на ЗІЗ і на утримання служби БЗР мають бути враховані в тарифі на електроенергію або в собівартості продукції. Без цього профілактика конкурує з усіма іншими статтями бюджету." },
          sessions: ["d1:1", "d3:0", "d3:2"],
          reading: ["ilo-osh-2001", "euosha-costs-benefits", "it-dlgs-231", "it-mog-231", "ilo-c187", "iea-energy-employment"] },

        { id: "g6", src: ["cards"], weight: 3,
          title: { en: "Speeding up regulatory decision-making", uk: "Пришвидшення ухвалення регуляторних рішень" },
          body: { en: "One card framed the key OSH challenge as institutional speed: the ability to get a regulatory decision taken, rather than the content of the decision itself.", uk: "Одна з карток окреслила ключовий виклик БЗР як інституційну швидкість: здатність домогтися ухвалення регуляторного рішення, а не зміст самого рішення." },
          sessions: ["d2:3", "d6:0", "d6:1"],
          reading: ["ilo-c187", "ilo-strategic-compliance", "eu-osh-framework-2021"] },

        { id: "g7", src: ["cards"], weight: 4,
          title: { en: "Fighting formalism — safety that exists outside the file", uk: "Боротьба з формалізмом — безпека, що існує поза документом" },
          body: { en: "Explicitly framed as something to look for at the European host sites: how do they avoid safety measures becoming paperwork? The whole observation method of the week is built around this distinction — a documented system is where inspection starts, not where it concludes.", uk: "Прямо сформульовано як те, що слід шукати на європейських майданчиках: як вони уникають перетворення заходів безпеки на паперову роботу? На цій відмінності побудовано весь метод спостереження тижня: задокументована система — це початок перевірки, а не її висновок." },
          sessions: ["d2:3", "d2:4", "d3:0", "d3:2", "d4:0"],
          reading: ["ilo-osh-2001", "ilo-guide-inspectors", "ilo-labour-inspection-guidelines", "euosha-safety-culture"] },

        { id: "g8", src: ["cards"], weight: 3,
          title: { en: "How work-related deaths and injuries are investigated and compensated", uk: "Як розслідують і компенсують смерті та травми на роботі" },
          body: { en: "A card from the enterprise side questioned the current treatment of deaths from natural causes at work, and of insurance payments where the injured worker was intoxicated at the time. Behind it sits a general question about recording, notification and the integrity of accident statistics.", uk: "Картка з боку підприємства поставила під питання чинний порядок щодо смертей із природних причин на роботі та страхових виплат, коли потерпілий на момент події був у стані сп’яніння. За цим стоїть загальне питання про облік, повідомлення та достовірність статистики нещасних випадків." },
          sessions: ["d2:3", "d4:1"],
          reading: ["ilo-recording-code", "ilo-c155", "ilo-guide-inspectors", "eurostat-accidents"] }
      ]
    },

    {
      id: "people",
      label: { en: "People, organization and well-being", uk: "Люди, організація та добробут" },
      question: { en: "What needs to change in the way work is supported?", uk: "Що потрібно змінити в тому, як підтримується праця?" },
      blurb: {
        en: "Thirteen of nineteen respondents work on training, capacity development or safety culture — the second largest area of expertise in the room. The cards here are about fatigue, staffing and what people are asked to carry.",
        uk: "Тринадцятеро з дев’ятнадцяти респондентів працюють із навчанням, розвитком потенціалу чи культурою безпеки — друга за величиною сфера експертизи в залі. Картки тут — про втому, кадри й те, що люди змушені на собі нести."
      },
      needs: [
        { id: "p1", src: ["cards", "survey"], weight: 11,
          title: { en: "The psychosocial and physical state of the workforce", uk: "Психосоціальний і фізичний стан персоналу" },
          body: { en: "Named on four separate cards and by five survey respondents. The requests ranged from tools for improving the psychosocial condition of workers, to psychosocial rehabilitation, to addressing chronic stress and burnout in emergency crews, dispatchers and the rest of the workforce. One card simply asked for rest.", uk: "Названо на чотирьох окремих картках і п’ятьма респондентами анкети. Запити — від інструментів для покращення психосоціального стану працівників до психосоціальної реабілітації та протидії хронічному стресу й вигорянню аварійних бригад, диспетчерів і решти персоналу. Одна картка просто просила про відпочинок." },
          sessions: ["d3:1", "d3:2", "d4:2"],
          reading: ["ilo-psychosocial", "ilo-mental-health-work", "ilo-840k-news", "euosha-psychosocial", "who-mental-health-guidelines", "ilo-c190"] },

        { id: "p2", src: ["cards"], weight: 7,
          title: { en: "Shortage and turnover of qualified staff", uk: "Брак і плинність кваліфікованих кадрів" },
          body: { en: "Several cards named the staffing problem in its own right: a shortage of qualified people, high turnover, and pay levels that do not hold them. In mining it was coupled with chronic underfunding, absent modernisation and ageing equipment — with automation named as the partial answer where it is possible.", uk: "Кілька карток назвали кадрову проблему окремо: брак кваліфікованих людей, висока плинність і рівень оплати, який їх не втримує. У гірничій галузі це поєднано з хронічним недофінансуванням, відсутністю модернізації та застарілим обладнанням — а автоматизацію названо частковою відповіддю там, де вона можлива." },
          sessions: ["d3:1", "d4:1", "d6:0"],
          reading: ["iea-energy-employment", "irena-jobs", "ilo-just-transition-guidelines", "ilo-inclusion-adjustments"] },

        { id: "p3", src: ["cards"], weight: 6,
          title: { en: "Training new workers who arrive without the relevant education", uk: "Підготовка нових працівників без профільної освіти" },
          body: { en: "A direct consequence of the staffing shortage. People are being brought into high-voltage and underground work without the vocational background the job historically assumed — which changes what induction, supervision and competence verification have to do.", uk: "Прямий наслідок кадрового дефіциту. На роботи з високою напругою та під землею приходять люди без професійної підготовки, яку ця робота історично передбачала, — що змінює вимоги до вступного навчання, нагляду та перевірки компетентності." },
          sessions: ["d1:3", "d3:1", "d3:2", "d4:1"],
          reading: ["ilo-osh-2001", "ilo-c155", "ilo-inclusion-adjustments", "euosha-safety-culture", "eu-89-391"] },

        { id: "p4", src: ["cards", "survey"], weight: 8,
          title: { en: "Changing the safety culture — risk assessment as a tool, not a form", uk: "Зміна культури безпеки — оцінювання ризиків як інструмент, а не формальність" },
          body: { en: "One of the most quoted lines of the week came from this group: risk assessment should be seen not as a formal requirement, but as an important tool for preventing injuries and incidents. The underlying ask is about leadership, worker involvement and a proactive rather than reactive safety culture.", uk: "Одна з найчастіше цитованих фраз тижня пролунала саме тут: оцінювання ризиків має сприйматися не як формальна вимога, а як важливий інструмент запобігання травмам та інцидентам. За цим стоїть запит на лідерство, залучення працівників і проактивну, а не реактивну культуру безпеки." },
          sessions: ["d1:1", "d1:3", "d3:0", "d3:2"],
          reading: ["ilo-osh-2001", "it-dvr", "euosha-safety-culture", "ilo-guide-inspectors", "ilo-c155", "iso-45001"] },

        { id: "p5", src: ["cards"], weight: 3,
          title: { en: "Minimising occupational injuries", uk: "Мінімізація виробничого травматизму" },
          body: { en: "Stated in three words on one card, and as a destination by several others: a strong inspection function, managed risk and the absence of emergencies, injuries and other incidents.", uk: "Сформульовано трьома словами на одній картці й повторено іншими як мета: сильна інспекційна діяльність, керовані ризики та відсутність аварій, травм та інших інцидентів." },
          sessions: ["d1:1", "d1:2", "d2:3"],
          reading: ["ilo-osh-2001", "ilo-recording-code", "eurostat-accidents", "ilo-3m-news"] },

        { id: "p6", src: ["cards"], weight: 2,
          title: { en: "Protecting the person who runs OSH at the enterprise", uk: "Захист того, хто відповідає за БЗР на підприємстві" },
          body: { en: "An unusual and very concrete proposal: move the OSH manager off the enterprise's own payroll, so that the person who has to stop unsafe work is not employed by the people whose production it stops. It is a question about where the authority to make the safe decision actually sits.", uk: "Незвичайна і дуже конкретна пропозиція: вивести керівника служби БЗР зі штату підприємства, щоб людина, яка має зупинити небезпечну роботу, не була найнята тими, чиє виробництво вона зупиняє. Це питання про те, де насправді перебуває повноваження ухвалити безпечне рішення." },
          sessions: ["d2:3", "d2:4", "d3:2"],
          reading: ["ilo-c155", "ilo-osh-2001", "ilo-c081", "eu-89-391"] },

        { id: "p7", src: ["cards"], weight: 3,
          title: { en: "Readiness for a decentralised energy system", uk: "Готовність до децентралізованої енергетики" },
          body: { en: "An expectation rather than a complaint: the workforce question that comes with distributed generation, many more small sites, more contractors, and a different competence profile than a centralised grid required.", uk: "Радше очікування, ніж скарга: кадрове питання, яке приносить розподілена генерація — значно більше малих об’єктів, більше підрядників та інший профіль компетентностей, ніж вимагала централізована мережа." },
          sessions: ["d3:1", "d6:0"],
          reading: ["irena-jobs", "iea-energy-employment", "ilo-just-transition-guidelines", "ilo-gender-just-transition"] },

        { id: "p8", src: ["cards", "survey"], weight: 4,
          title: { en: "Inclusion, accessibility and a changing workforce", uk: "Інклюзія, безбар’єрність і зміна складу персоналу" },
          body: { en: "Raised independently in two self-introductions — inclusion and barrier-free arrangements described as what deserves the most attention right now — and reflected in the Wednesday session on gender-responsive OSH, PPE that fits the workforce, and safe reintegration.", uk: "Піднято незалежно у двох самопредставленнях — інклюзивність і безбар’єрність названо тим, що заслуговує найбільшої уваги зараз, — і відображено в сесії середи про гендерно чутливу БЗР, ЗІЗ, що відповідають складу персоналу, і безпечну реінтеграцію." },
          sessions: ["d3:1"],
          reading: ["ilo-gender-osh-10keys", "ilo-gender-osh-topic", "ilo-inclusion-adjustments", "ilo-gender-just-transition", "ilo-c190"] }
      ]
    },

    {
      id: "tech",
      label: { en: "Technologies and practical transfer", uk: "Технології та практичний трансфер" },
      question: { en: "Which tools or practices could be useful — and feasible?", uk: "Які інструменти чи практики можуть бути корисними — і здійсненними?" },
      blurb: {
        en: "Seven of nineteen respondents named digital monitoring and AI among their three most relevant challenges — but only three described technology as their own area of expertise. The gap between interest and capability is the point of the Tuesday morning session.",
        uk: "Семеро з дев’ятнадцяти респондентів назвали цифровий моніторинг і ШІ серед трьох найактуальніших викликів — але лише троє описали технології як власну сферу експертизи. Розрив між інтересом і спроможністю — сенс сесії вівторка зранку."
      },
      needs: [
        { id: "t1", src: ["cards"], weight: 7,
          title: { en: "Digitalisation and new technologies as a challenge in themselves", uk: "Цифровізація та нові технології як виклик сам по собі" },
          body: { en: "Listed on the orange side of the wall, not the green: for part of the group, the arrival of digital tools is itself the problem to be managed — procurement, competence, data, and the risk of a tool that reports compliance without producing it.", uk: "Записано на помаранчевому, а не на зеленому боці стіни: для частини групи саме поява цифрових інструментів і є проблемою, якою треба керувати — закупівлі, компетентності, дані та ризик інструмента, що звітує про відповідність, не створюючи її." },
          sessions: ["d2:0", "d2:1", "d6:0"],
          reading: ["euosha-ai-monitoring", "euosha-ai-worker-management", "eu-ai-act", "eu-gdpr", "ilo-osh-2001"] },

        { id: "t2", src: ["cards", "survey"], weight: 9,
          title: { en: "Automating and digitalising risk assessment", uk: "Автоматизація та цифровізація оцінювання ризиків" },
          body: { en: "The single most repeated expectation on the wall: review the way risk assessment is done, and automate or digitalise it. Several cards went further and asked specifically for AI support in the assessment itself.", uk: "Найчастіше повторене очікування на стіні: переглянути спосіб оцінювання ризиків і автоматизувати або цифровізувати його. Кілька карток пішли далі й прямо просили про підтримку ШІ в самому оцінюванні." },
          sessions: ["d2:0", "d2:1", "d1:1", "d3:0"],
          reading: ["oira", "it-dvr", "it-cem", "euosha-ai-monitoring", "euosha-ai-worker-management", "ilo-osh-2001", "niosh-hierarchy", "iso-45001", "eu-ai-act"] },

        { id: "t3", src: ["cards"], weight: 4,
          title: { en: "Video capture of works, and AI for risk analysis", uk: "Відеофіксація робіт і ШІ для аналізу ризиків" },
          body: { en: "A precise expectation: record the work as it happens and use AI to analyse the footage for risk. It is also the clearest point at which the course has to put a governance question alongside the technical one — worker consent, data protection and what the recording may lawfully be used for.", uk: "Точно сформульоване очікування: фіксувати роботу відео і використовувати ШІ для аналізу ризиків на цих записах. Це й найочевидніша точка, де курс мусить поставити поряд із технічним питанням питання врядування — згода працівника, захист даних і те, для чого запис може законно використовуватися." },
          sessions: ["d2:0", "d2:1"],
          reading: ["euosha-ai-worker-management", "eu-gdpr", "eu-ai-act", "euosha-ai-monitoring", "ilo-c190"] },

        { id: "t4", src: ["survey", "cards"], weight: 8,
          title: { en: "Remote monitoring and drones — taking the person out of the hazard", uk: "Дистанційний моніторинг і дрони — вивести людину з небезпечної зони" },
          body: { en: "The most developed technical proposal in the survey: use remote monitoring tools and drones to inspect high-voltage overhead lines and substation components, so that dangerous defects are found without putting an inspector or a lineworker at risk. A card put the same idea in general form — approaches and methods that distance the person from the harmful or dangerous factor.", uk: "Найбільш розгорнута технічна пропозиція в анкеті: використати засоби дистанційного моніторингу та дрони для обстеження високовольтних повітряних ліній і обладнання підстанцій, щоб виявляти небезпечні дефекти, не наражаючи інспектора чи електромонтера. Картка сформулювала ту саму ідею узагальнено — підходи і методи, що дистанціюють людину від шкідливого чи небезпечного фактора." },
          sessions: ["d2:0", "d2:1", "d3:0", "d4:0"],
          reading: ["niosh-hierarchy", "euosha-ai-monitoring", "euosha-ai-worker-management", "ilo-osh-2001", "eu-2009-104"] },

        { id: "t5", src: ["cards"], weight: 3,
          title: { en: "Automated operation without human intervention", uk: "Автоматизована експлуатація без втручання людини" },
          body: { en: "The furthest-reaching expectation on the wall: operating systems that run without a person present at all. It belongs with the foresight session rather than with Tuesday's tools — and raises the question of what the remaining human role is when the routine one disappears.", uk: "Найдалекосяжніше очікування на стіні: системи експлуатації, що працюють взагалі без присутності людини. Це питання радше для сесії стратегічного передбачення, ніж для інструментів вівторка, — і воно ставить питання, якою залишається роль людини, коли рутинна зникає." },
          sessions: ["d2:0", "d6:0"],
          reading: ["euosha-ai-worker-management", "eu-ai-act", "iea-energy-employment", "ilo-just-transition-guidelines"] },

        { id: "t6", src: ["cards", "survey"], weight: 12,
          title: { en: "How European energy companies actually organise high-risk work", uk: "Як європейські енергокомпанії насправді організовують роботи підвищеної небезпеки" },
          body: { en: "The most frequent expectation of all, in both the cards and the survey: to see, on site, how European energy enterprises organise and carry out high-risk work using a risk-based approach — and which of it could be brought home. This is precisely what the three study visits and the common observation charter are for.", uk: "Найчастіше очікування загалом — і на картках, і в анкеті: побачити на місці, як європейські енергетичні підприємства організовують і виконують роботи підвищеної небезпеки із застосуванням ризик-орієнтованого підходу — і що з цього можна перенести додому. Саме для цього існують три навчальні візити та спільна хартія спостереження." },
          sessions: ["d2:4", "d3:0", "d3:2", "d4:0", "d4:2", "d5:0"],
          reading: ["it-dlgs-81", "it-mog-231", "it-permesso-lavoro", "ilo-osh-2001", "iso-45001", "eu-89-391", "eu-92-104", "ilo-guide-inspectors", "euosha-safety-culture"] },

        { id: "t7", src: ["cards", "forum"], weight: 4,
          title: { en: "Competence verification before access to the job", uk: "Перевірка компетентності перед допуском до роботи" },
          body: { en: "An expectation framed as a comparison: how is specialised training organised before a worker is admitted to the job — for example for electrical safety or for an electrician on live networks? What is actually verified, by whom, and how often?", uk: "Очікування, сформульоване як порівняння: як організовано спеціальне навчання перед допуском працівника до роботи — наприклад, з електробезпеки або для електромонтера на діючих мережах? Що саме перевіряють, хто і як часто?" },
          sessions: ["d3:0", "d4:0", "d5:0", "d3:2"],
          reading: ["it-permesso-lavoro", "it-cem", "ilo-osh-2001", "eu-89-391", "eu-2013-35", "ppe-standards", "ilo-guide-inspectors"] },

        { id: "t8", src: ["cards", "survey"], weight: 5,
          title: { en: "Ready-made material to use on Monday morning", uk: "Готові напрацювання, які можна застосувати в понеділок зранку" },
          body: { en: "One survey answer set the bar precisely: an improvement plan, checklists and document templates that can be applied at work immediately after the training. The Tuesday lab and the three visit debriefs are designed to produce exactly that.", uk: "Одна з відповідей анкети встановила планку точно: план покращень, чек-листи й шаблони документів, які можна застосувати в роботі одразу після навчання. Лабораторія вівторка та три обговорення після візитів розраховані саме на це." },
          sessions: ["d2:4", "d3:2", "d4:2", "d6:1"],
          reading: ["ilo-osh-2001", "ilo-guide-inspectors", "ilo-labour-inspection-guidelines", "iso-45001"] },

        { id: "t9", src: ["visit", "cards"], weight: 6,
          title: { en: "Digital work permits, and the legal system underneath them", uk: "Цифрові наряди-допуски — і правова система, що за ними стоїть" },
          body: { en: "The single most asked-about thing on the IREN visit. The permit is issued and closed on a screen rather than on paper: the job cannot start until the isolation is confirmed and the authorising person has signed, the controls travel with the permit, and closing it returns the equipment to service with a timestamped record of who did what. Several participants recognised it immediately as the answer to a problem they already have — proving, after the fact, that a maintenance job was properly authorised and properly handed back.\n\nThe part that is easy to miss is that the software is the last layer, not the first. Underneath it sits Article 26 of Legislative Decree 81/2008, which obliges the client to verify the contractor, inform it of the site's specific risks and draw up the interference risk assessment; above it sits the Modello 231, under which a failure of that system is a liability of the company itself. The tablet is what makes the duty auditable. Buying the tablet without the duty produces a faster way to record the same gaps.", uk: "Те, про що найбільше запитували під час візиту до IREN. Наряд-допуск оформлюють і закривають на екрані, а не на папері: робота не може початися, доки не підтверджено схему від’єднання і не підписав відповідальний, заходи контролю «подорожують» разом із нарядом, а його закриття повертає обладнання в роботу з позначкою часу про те, хто що зробив. Дехто з учасників одразу впізнав у цьому відповідь на проблему, яку вже має, — довести постфактум, що ремонтну роботу було належно дозволено і належно повернуто.\n\nЛегко не помітити, що програмне забезпечення тут — останній шар, а не перший. Під ним лежить стаття 26 Законодавчого декрету 81/2008, яка зобов’язує замовника перевірити підрядника, поінформувати його про специфічні ризики об’єкта і скласти оцінювання ризиків взаємного впливу; над ним — Modello 231, за яким збій цієї системи є відповідальністю самої компанії. Планшет робить обов’язок придатним для аудиту. Купівля планшета без обов’язку дає лише швидший спосіб фіксувати ті самі прогалини." },
          sessions: ["d3:0", "d3:2", "d2:4", "d4:0"],
          reading: ["it-permesso-lavoro", "it-dlgs-81", "it-mog-231", "it-dlgs-231", "euosha-maintenance", "euosha-digitalisation", "iso-45001", "eu-89-391"] }
      ]
    }
  ],

  /* ------------------------------------------------- future foresight ----- */
  foresight: {
    title: { en: "Future foresight", uk: "Погляд у майбутнє" },
    lead: {
      en: "The learning journey closes on 4 November with a strategic foresight session on OSH to 2050. These are the seven drivers that the week's own material puts on that horizon — each one already visible in the cards, the survey or the sessions.",
      uk: "Навчальна подорож завершується 4 листопада сесією стратегічного передбачення щодо БЗР до 2050 року. Це сім рушіїв, які матеріал самого тижня виносить на цей горизонт, — кожен уже помітний у картках, анкеті або сесіях."
    },
    session: "d6:0",
    drivers: [
      { id: "f1", horizon: { en: "Near", uk: "Близький" },
        title: { en: "A decentralised, digitally enabled grid", uk: "Децентралізована, цифровізована мережа" },
        body: { en: "Distributed generation multiplies the number of small sites, contractors and interfaces. The OSH question shifts from a few large assets with permanent crews to many small ones with intermittent presence — and to who is competent at each of them.", uk: "Розподілена генерація помножує кількість малих об’єктів, підрядників та інтерфейсів. Питання БЗР зміщується від кількох великих об’єктів із постійними бригадами до багатьох малих із непостійною присутністю — і до того, хто компетентний на кожному з них." },
        links: ["p7", "t6"], reading: ["irena-jobs", "iea-energy-employment", "ilo-just-transition-guidelines"] },

      { id: "f2", horizon: { en: "Near", uk: "Близький" },
        title: { en: "AI and algorithmic management reach the worksite", uk: "ШІ та алгоритмічне управління доходять до робочого майданчика" },
        body: { en: "Computer vision on work sites, predictive analytics on incident data and wearables on people arrive faster than the governance around them. The group's enthusiasm for AI-assisted risk assessment and video analysis is matched by almost no in-house technology expertise — three of nineteen.", uk: "Комп’ютерний зір на майданчиках, предиктивна аналітика інцидентів і носимі пристрої на людях з’являються швидше, ніж врядування навколо них. Ентузіазму групи щодо оцінювання ризиків за допомогою ШІ та відеоаналізу майже не відповідає власна технологічна експертиза — троє з дев’ятнадцяти." },
        links: ["t2", "t3", "t5"], reading: ["eu-ai-act", "euosha-ai-worker-management", "euosha-ai-monitoring", "eu-gdpr"] },

      { id: "f3", horizon: { en: "Present", uk: "Теперішній" },
        title: { en: "The psychosocial legacy of the war", uk: "Психосоціальна спадщина війни" },
        body: { en: "Chronic stress, burnout and the cumulative effect of years of emergency work do not end with the hostilities. Rehabilitation, reintegration of returning workers and the mental health of dispatchers and crews become a sustained OSH responsibility, not an episode.", uk: "Хронічний стрес, вигоряння та кумулятивний ефект років аварійної роботи не закінчуються разом із бойовими діями. Реабілітація, реінтеграція працівників, що повертаються, і психічне здоров’я диспетчерів та бригад стають тривалою відповідальністю БЗР, а не епізодом." },
        links: ["p1", "p8"], reading: ["ilo-psychosocial", "ilo-mental-health-work", "who-mental-health-guidelines", "ilo-840k-news"] },

      { id: "f4", horizon: { en: "Near", uk: "Близький" },
        title: { en: "Reconstruction at scale, delivered through contractor chains", uk: "Відновлення у великих масштабах через ланцюги підрядників" },
        body: { en: "Recovery will be delivered largely by contractors and subcontractors. Contractor safety oversight — raised independently in the survey — becomes the decisive OSH control, and the hardest one for a weakened inspectorate to reach.", uk: "Відновлення здійснюватимуть переважно підрядники й субпідрядники. Нагляд за безпекою підрядників — окремо піднятий в анкеті — стає вирішальним заходом контролю БЗР і найважчим для ослабленої інспекції." },
        links: ["g1", "g7"], reading: ["ilo-c081", "ilo-strategic-compliance", "ela-joint-inspections", "undac-rdna"] },

      { id: "f5", horizon: { en: "Near", uk: "Близький" },
        title: { en: "EU accession as an OSH timetable", uk: "Вступ до ЄС як розклад для БЗР" },
        body: { en: "Approximation to the EU OSH acquis turns a comparative interest into a legal obligation with dates. The Framework Directive and its daughter directives — work equipment, PPE use, electromagnetic fields, mineral-extracting industries — become the reference against which national acts are rewritten.", uk: "Наближення до acquis ЄС у сфері БЗР перетворює порівняльний інтерес на правове зобов’язання з конкретними строками. Рамкова директива та похідні від неї — робоче обладнання, застосування ЗІЗ, електромагнітні поля, видобувна промисловість — стають орієнтиром для переписування національних актів." },
        links: ["g2", "g6"], reading: ["eu-89-391", "eu-89-656", "eu-2009-104", "eu-2013-35", "eu-92-104", "eu-osh-framework-2021"] },

      { id: "f6", horizon: { en: "Medium", uk: "Середній" },
        title: { en: "Climate, heat and the changing risk envelope", uk: "Клімат, спека та зміна профілю ризиків" },
        body: { en: "Heat is already an occupational hazard for outdoor restoration work, and extreme weather changes both the failure modes of the network and the conditions under which it is repaired. The Wednesday session treats this as an OSH design question, not a comfort question.", uk: "Спека вже є виробничою небезпекою для відновлювальних робіт просто неба, а екстремальна погода змінює і режими відмов мережі, і умови її ремонту. Сесія середи розглядає це як питання дизайну БЗР, а не комфорту." },
        links: ["p3"], reading: ["ilo-climate-osh", "ilo-heat-at-work", "euosha-psychosocial"] },

      { id: "f7", horizon: { en: "Medium", uk: "Середній" },
        title: { en: "Who the energy workforce will be", uk: "Хто складатиме енергетичний персонал" },
        body: { en: "A workforce drawn from a smaller pool, with more women in roles historically closed to them, more workers returning with acquired disabilities, and more people entering without the vocational route the job assumed. PPE, task design and risk assessment all have to follow.", uk: "Персонал, набраний із меншого кадрового резерву: більше жінок на ролях, історично для них закритих, більше працівників, що повертаються з набутою інвалідністю, і більше тих, хто приходить без професійного маршруту, який ця робота передбачала. ЗІЗ, дизайн завдань і оцінювання ризиків мають це відобразити." },
        links: ["p2", "p3", "p8"], reading: ["ilo-gender-osh-10keys", "ilo-inclusion-adjustments", "ilo-gender-just-transition", "irena-jobs"] }
    ]
  }
};
