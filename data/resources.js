/* ============================================================================
   RESOURCE LIBRARY — A4019972
   ----------------------------------------------------------------------------
   Two kinds of entry, flagged by `course: true`:

     · cited  — named or linked in the course presentations themselves
                (see the slide decks listed in data/course.js);
     · added  — publicly available ILO, UN and EU resources added for this
                dashboard because a participant need points beyond the course.

   `cats` drive the filters in the library. `id` is what data/insights.js
   references from each need and each foresight driver.

   All links were checked on 4 November 2026. A few publishers (NORMLEX, IRENA,
   CDC/NIOSH, ISO) block automated checks, so those were verified against the
   course decks they were taken from.
   ========================================================================== */

window.RESOURCES = [

  /* ------------------------------------------------ international standards */
  { id: "ilo-c155", course: true, type: "convention", year: 1981,
    pub: "ILO", cats: ["standard", "governance"],
    title: { en: "Occupational Safety and Health Convention, 1981 (No. 155)", uk: "Конвенція про безпеку й гігієну праці, 1981 (№ 155)" },
    note: { en: "The core instrument: a coherent national OSH policy, employer duties, worker rights including removal from imminent danger, and the duty to investigate.", uk: "Основний документ: узгоджена національна політика БЗР, обов’язки роботодавця, права працівників, зокрема право залишити місце неминучої небезпеки, та обов’язок розслідувати випадки." },
    url: "https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C155" },

  { id: "ilo-c187", course: true, type: "convention", year: 2006,
    pub: "ILO", cats: ["standard", "governance"],
    title: { en: "Promotional Framework for Occupational Safety and Health Convention, 2006 (No. 187)", uk: "Конвенція про основи, що сприяють безпеці та гігієні праці, 2006 (№ 187)" },
    note: { en: "National OSH systems, national programmes and the principle of continuous improvement — the instrument behind any argument for institutional speed and resourcing.", uk: "Національні системи БЗР, національні програми та принцип безперервного вдосконалення — інструмент, на який спирається будь-який аргумент щодо інституційної швидкості та ресурсів." },
    url: "https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C187" },

  { id: "ilo-c081", course: false, type: "convention", year: 1947,
    pub: "ILO", cats: ["standard", "inspection"],
    title: { en: "Labour Inspection Convention, 1947 (No. 81)", uk: "Конвенція про інспекцію праці, 1947 (№ 81)" },
    note: { en: "What a labour inspectorate must be able to do: free access, sufficient inspectors, adequate powers, and an annual report. The reference point for any discussion of a moratorium.", uk: "Що інспекція праці має бути спроможна робити: вільний доступ, достатня кількість інспекторів, належні повноваження та щорічний звіт. Відправна точка для будь-якої розмови про мораторій." },
    url: "https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C081" },

  { id: "ilo-c176", course: false, type: "convention", year: 1995,
    pub: "ILO", cats: ["standard", "mining"],
    title: { en: "Safety and Health in Mines Convention, 1995 (No. 176)", uk: "Конвенція про безпеку та гігієну праці на шахтах, 1995 (№ 176)" },
    note: { en: "The mining-specific instrument: ventilation, ground control, rescue arrangements, the right to withdraw, and the duty to keep a record of who is underground.", uk: "Галузевий документ для гірничої справи: вентиляція, управління гірським тиском, рятувальні заходи, право залишити небезпечне місце та обов’язок вести облік тих, хто перебуває під землею." },
    url: "https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C176" },

  { id: "ilo-c190", course: true, type: "convention", year: 2019,
    pub: "ILO", cats: ["standard", "people"],
    title: { en: "Violence and Harassment Convention, 2019 (No. 190)", uk: "Конвенція про насильство та домагання, 2019 (№ 190)" },
    note: { en: "Treats violence and harassment as an occupational safety and health matter — the basis for the Wednesday session's framing of dignity as prevention.", uk: "Розглядає насильство й домагання як питання безпеки та здоров’я на роботі — основа для того, як сесія середи трактує гідність як профілактику." },
    url: "https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C190" },

  { id: "ilo-fundamental-osh", course: true, type: "report", year: 2024,
    pub: "ILO", cats: ["standard", "governance"],
    title: { en: "Fundamental Conventions on occupational safety and health", uk: "Основоположні конвенції з безпеки та гігієни праці" },
    note: { en: "Conventions Nos. 155 and 187 in one volume, following their designation as fundamental in 2022.", uk: "Конвенції № 155 і № 187 в одному виданні — після визнання їх основоположними у 2022 році." },
    url: "https://www.ilo.org/publications/fundamental-conventions-occupational-safety-and-health" },

  { id: "ilo-safe-healthy-right", course: true, type: "web-resource", year: 2026,
    pub: "ILO", cats: ["standard", "governance"],
    title: { en: "A safe and healthy working environment as a fundamental principle and right at work", uk: "Безпечне та здорове робоче середовище як основоположний принцип і право у сфері праці" },
    note: { en: "The ILO's own account of what the 2022 designation changes in practice for member States.", uk: "Виклад МОП про те, що рішення 2022 року змінює на практиці для держав-членів." },
    url: "https://www.ilo.org/topics-and-sectors/safety-and-health-work/safe-and-healthy-working-environment-fundamental-principle-and-right-work" },

  /* ------------------------------------------------- management and method */
  { id: "ilo-osh-2001", course: true, type: "guidelines", year: 2001,
    pub: "ILO", cats: ["guidance", "governance"],
    title: { en: "Guidelines on occupational safety and health management systems (ILO-OSH 2001)", uk: "Настанови щодо систем управління безпекою та гігієною праці (ILO-OSH 2001)" },
    note: { en: "Cited throughout the week. Policy, organizing, planning and implementation, evaluation, action for improvement — the structure every session's “system” question returns to.", uk: "Цитується протягом усього тижня. Політика, організація, планування і впровадження, оцінювання, дії з удосконалення — структура, до якої повертається питання «системи» на кожній сесії." },
    url: "https://www.ilo.org/publications/guidelines-occupational-safety-and-health-management-systems-ilo-osh-2001" },

  { id: "iso-45001", course: false, type: "standard", year: 2018,
    pub: "ISO / UNI", cats: ["guidance", "governance", "italy"],
    title: { en: "ISO 45001:2018 — Occupational health and safety management systems (adopted in Italy as UNI ISO 45001:2018)", uk: "ISO 45001:2018 — Системи управління охороною здоров’я та безпекою праці (в Італії запроваджено як UNI ISO 45001:2018)" },
    note: { en: "The certifiable counterpart to ILO-OSH 2001, and the system standard behind the Italian sites the group visited. Its engine is the Plan–Do–Check–Act cycle: the standard does not ask an organisation to be safe once, it asks for evidence that the organisation keeps finding and closing its own gaps. That is the continuous-improvement duty in Clause 10, and it is what an auditor — or an inspector — actually looks for. Several participants' enterprises are already working towards or within an ISO-based integrated system.", uk: "Сертифікований аналог ILO-OSH 2001 і системний стандарт, що стоїть за італійськими об’єктами, які відвідала група. Його двигун — цикл «Плануй–Виконуй–Перевіряй–Дій»: стандарт вимагає не одноразової безпеки, а доказів того, що організація постійно знаходить і закриває власні прогалини. Це обов’язок безперервного вдосконалення в розділі 10 — і саме це насправді шукає аудитор або інспектор. Низка підприємств учасників уже рухається до інтегрованої системи на основі ISO або працює в ній." },
    url: "https://store.uni.com/uni-iso-45001-2018" },

  { id: "niosh-hierarchy", course: true, type: "web-resource", year: 2023,
    pub: "NIOSH / CDC", cats: ["guidance", "technology"],
    title: { en: "Hierarchy of controls", uk: "Ієрархія заходів контролю" },
    note: { en: "Elimination, substitution, engineering controls, administrative controls, PPE — in that order. The single most useful test for any proposal to “distance the person from the hazard”.", uk: "Усунення, заміщення, інженерні заходи, адміністративні заходи, ЗІЗ — саме в цьому порядку. Найкорисніший тест для будь-якої пропозиції «віддалити людину від небезпеки»." },
    url: "https://www.cdc.gov/niosh/hierarchy-of-controls/about/index.html" },

  { id: "ilo-recording-code", course: false, type: "code-of-practice", year: 1996,
    pub: "ILO", cats: ["guidance", "inspection"],
    title: { en: "Recording and notification of occupational accidents and diseases — ILO code of practice", uk: "Облік і повідомлення про нещасні випадки та професійні захворювання — кодекс усталеної практики МОП" },
    note: { en: "Legal and administrative arrangements, enterprise-level recording, statistics and investigation. The reference for the card that questioned how deaths at work are currently classified.", uk: "Правові й адміністративні механізми, облік на рівні підприємства, статистика та розслідування. Орієнтир для картки, що ставила під питання чинну класифікацію смертей на роботі." },
    url: "https://www.ilo.org/media/270756/download" },

  /* --------------------------------------------------- labour inspection -- */
  { id: "ilo-labour-inspection-guidelines", course: true, type: "guidelines", year: 2023,
    pub: "ILO", cats: ["inspection", "governance"],
    title: { en: "Guidelines on general principles of labour inspection", uk: "Настанови щодо загальних принципів інспекції праці" },
    note: { en: "What an inspection visit is for, how evidence is gathered proportionately, and how follow-up is verified.", uk: "Для чого проводиться інспекційний візит, як пропорційно збирати докази і як перевіряти виконання приписів." },
    url: "https://www.ilo.org/publications/guidelines-general-principles-labour-inspection" },

  { id: "ilo-strategic-compliance", course: true, type: "web-resource", year: 2026,
    pub: "ILO", cats: ["inspection", "governance"],
    title: { en: "The ILO approach to strategic compliance planning for labour inspectorates", uk: "Підхід МОП до стратегічного планування дотримання вимог для інспекцій праці" },
    note: { en: "Diagnose the root cause of a compliance problem before choosing the intervention. Presented on Tuesday afternoon as the way out of “more inspection activity” as a goal in itself.", uk: "Спочатку діагностувати корінну причину проблеми з дотриманням вимог, а вже потім обирати втручання. Представлено у вівторок по обіді як вихід із пастки «більше перевірок» як самоцілі." },
    url: "https://www.ilo.org/topics-and-sectors/ilo-approach-strategic-compliance-planning-labour-inspectorates" },

  { id: "ilo-strategic-compliance-stories", course: true, type: "report", year: 2023,
    pub: "ILO", cats: ["inspection", "evidence"],
    title: { en: "Strategic Compliance Planning in action: stories of change", uk: "Стратегічне планування дотримання вимог у дії: історії змін" },
    note: { en: "Worked country cases — including the Australian retail-franchise example used in the Tuesday session to show site-level enforcement becoming network-wide change.", uk: "Опрацьовані кейси країн — зокрема австралійський приклад мережі франшиз, використаний у вівторок, щоб показати перехід від контролю на одному об’єкті до змін у всій мережі." },
    url: "https://www.ilo.org/publications/strategic-compliance-planning-action-stories-change" },

  { id: "ilo-osh-inspection-topic", course: true, type: "web-resource", year: 2026,
    pub: "ILO", cats: ["inspection"],
    title: { en: "Occupational safety and health inspection", uk: "Інспекція з питань безпеки та гігієни праці" },
    note: { en: "The ILO's topic hub for OSH inspection, with the tools and country material behind it.", uk: "Тематичний розділ МОП з інспекції БЗР — з інструментами та країновими матеріалами." },
    url: "https://www.ilo.org/topics/safety-and-health-work/occupational-safety-and-health-inspection" },

  { id: "ilo-guide-inspectors", course: true, type: "guidelines", year: 2026,
    pub: "ILO", cats: ["inspection", "guidance"],
    title: { en: "OSH: A guide for labour inspectors — how can occupational safety and health be managed?", uk: "БЗР: посібник для інспекторів праці — як управляти безпекою та гігієною праці?" },
    note: { en: "Practical chapter on what to look for when a management system is claimed to exist. Directly answers the “fighting formalism” card.", uk: "Практичний розділ про те, що саме перевіряти, коли стверджують, що система управління існує. Пряма відповідь на картку про боротьбу з формалізмом." },
    url: "https://www.ilo.org/topics-and-sectors/occupational-safety-and-health-guide-labour-inspectors-and-other/how-can-occupational-safety-and-health-be-managed" },

  { id: "ela-joint-inspections", course: true, type: "web-resource", year: 2026,
    pub: "European Labour Authority", cats: ["inspection", "eu"],
    title: { en: "Concerted and joint inspections", uk: "Узгоджені та спільні інспекції" },
    note: { en: "How EU Member States run coordinated cross-border enforcement — the comparison used in the Tuesday session for targeted, intelligence-led action.", uk: "Як держави — члени ЄС проводять скоординований транскордонний контроль; порівняння, використане у вівторок для цілеспрямованих дій на основі аналітики." },
    url: "https://www.ela.europa.eu/en/activities/concerted-and-joint-inspections" },

  /* ------------------------------------------------- Ukraine: ILO and law */
  { id: "ilo-ukraine-project", course: true, type: "news", year: 2024,
    pub: "ILO", cats: ["ukraine", "context"],
    title: { en: "ILO and the Government of the Netherlands launch a project to protect Ukrainians working in the energy sector", uk: "МОП та Уряд Нідерландів започатковують проєкт із захисту українців, які працюють в енергетиці" },
    note: { en: "The project this programme sits under: “Protecting and Preparing Ukraine's Energy Workforce for Sustainable Recovery”.", uk: "Проєкт, у межах якого проводиться ця програма: «Захист і підготовка енергетичних працівників України до сталого відновлення»." },
    url: "https://www.ilo.org/resource/news/ilo-and-government-netherlands-launch-project-protect-ukrainians-working" },

  { id: "ilo-dc-dashboard", course: true, type: "data", year: 2026,
    pub: "ILO", cats: ["ukraine", "context"],
    title: { en: "ILO Development Cooperation Dashboard — project 110329", uk: "Дашборд співпраці МОП у сфері розвитку — проєкт 110329" },
    note: { en: "Budget, outcomes and reporting for the project behind this course.", uk: "Бюджет, результати та звітність проєкту, у межах якого проводиться цей курс." },
    url: "https://webapps.ilo.org/DevelopmentCooperationDashboard/p/project/110329" },

  { id: "ilo-golight-ukraine", course: true, type: "news", year: 2024,
    pub: "ILO", cats: ["ukraine", "inspection"],
    title: { en: "Labour inspectorate “Go Light” campaign successfully implemented in Ukraine", uk: "Кампанія інспекції праці «Go Light» успішно реалізована в Україні" },
    note: { en: "Evidence that a Ukrainian inspectorate can run a strategic campaign while routine inspection is constrained.", uk: "Доказ того, що українська інспекція може проводити стратегічну кампанію навіть за обмежених планових перевірок." },
    url: "https://www.ilo.org/meetings-and-events/labour-inspectorate-go-light-campaign-successfully-implemented-ukraine" },

  { id: "ilo-info-campaign-ukraine", course: true, type: "news", year: 2024,
    pub: "ILO", cats: ["ukraine", "inspection"],
    title: { en: "Information campaign for Ukrainian labour inspectors reaches 123,000 workers", uk: "Інформаційна кампанія для українських інспекторів праці охопила 123 000 працівників" },
    note: { en: "The scale a non-inspection instrument can reach — relevant where the moratorium limits what else is available.", uk: "Масштаб, якого може досягти неінспекційний інструмент, — актуально там, де мораторій обмежує інші можливості." },
    url: "https://www.ilo.org/resource/news/information-campaign-ukrainian-labour-inspectors-brings-123000-workers" },

  { id: "ua-law-osh", course: false, type: "national-law", year: 1992,
    pub: "Verkhovna Rada of Ukraine", cats: ["ukraine", "governance"],
    title: { en: "Law of Ukraine “On Labour Protection” No. 2694-XII", uk: "Закон України «Про охорону праці» № 2694-XII" },
    note: { en: "The national framework act, in its current consolidated version on the official portal.", uk: "Національний рамковий закон у чинній консолідованій редакції на офіційному порталі." },
    url: "https://zakon.rada.gov.ua/laws/show/2694-12" },

  { id: "ua-law-877", course: false, type: "national-law", year: 2007,
    pub: "Verkhovna Rada of Ukraine", cats: ["ukraine", "inspection"],
    title: { en: "Law of Ukraine No. 877-V on the basic principles of State supervision (control) of economic activity", uk: "Закон України № 877-V «Про основні засади державного нагляду (контролю) у сфері господарської діяльності»" },
    note: { en: "Named on a card as one of the two instruments that define what inspection may currently do.", uk: "Названий на картці як один із двох інструментів, що визначають, які дії інспекції наразі можливі." },
    url: "https://zakon.rada.gov.ua/laws/show/877-16" },

  { id: "ua-res-303", course: false, type: "national-law", year: 2022,
    pub: "Cabinet of Ministers of Ukraine", cats: ["ukraine", "inspection"],
    title: { en: "Resolution No. 303 of 13 March 2022 — suspension of State supervision (control) measures under martial law", uk: "Постанова № 303 від 13 березня 2022 року — припинення заходів державного нагляду (контролю) в умовах воєнного стану" },
    note: { en: "The moratorium named on a card, together with the grounds on which unscheduled measures remain possible where there is a threat to life and health. Amended several times since.", uk: "Мораторій, названий на картці, разом із підставами, за яких позапланові заходи залишаються можливими за наявності загрози життю та здоров’ю. Відтоді кілька разів змінювався." },
    url: "https://zakon.rada.gov.ua/laws/show/303-2022-%D0%BF" },

  { id: "ua-dsp-faq", course: true, type: "web-resource", year: 2026,
    pub: "State Labour Service of Ukraine", cats: ["ukraine", "inspection"],
    title: { en: "On what grounds may labour-law control measures be carried out? — Derzhpratsi FAQ", uk: "Які є підстави для проведення заходів контролю з питань законодавства про працю? — ЧЗП Держпраці" },
    note: { en: "The inspectorate's own plain-language statement of the grounds currently available to it.", uk: "Власне пояснення інспекції простою мовою щодо підстав, які наразі є в її розпорядженні." },
    url: "https://dsp.gov.ua/faq/iaki-ie-pidstavy-dlia-provedennia-zakhodiv-kontroliu-z-pytan-zakonodavstva-pro-pratsiu/" },

  { id: "undac-rdna", course: false, type: "report", year: 2025,
    pub: "World Bank, Government of Ukraine, European Commission, United Nations", cats: ["ukraine", "context", "evidence"],
    title: { en: "Ukraine Fourth Rapid Damage and Needs Assessment (RDNA4)", uk: "Четверта швидка оцінка завданої шкоди та потреб України (RDNA4)" },
    note: { en: "Damage to energy assets rose by 70 per cent between RDNA3 and RDNA4; energy and extractives is the third-largest sector by reconstruction need at close to US$68 billion. The scale behind the contractor-chain question.", uk: "Пошкодження енергетичних активів зросли на 70% між RDNA3 і RDNA4; енергетика та видобувна галузь — третій за обсягом потреб у відновленні сектор, близько 68 млрд дол. США. Масштаб, що стоїть за питанням ланцюгів підрядників." },
    url: "https://www.worldbank.org/en/news/press-release/2025/02/25/updated-ukraine-recovery-and-reconstruction-needs-assessment-released" },

  /* --------------------------------------------------------- psychosocial */
  { id: "ilo-psychosocial", course: true, type: "report", year: 2026,
    pub: "ILO", cats: ["psychosocial", "people"],
    title: { en: "The psychosocial working environment: global developments and pathways to action", uk: "Психосоціальне робоче середовище: глобальні тенденції та шляхи до дій" },
    note: { en: "Treats psychosocial risk as a work-design problem — demands, autonomy, supervision, rest, reporting and fair procedure — rather than as individual resilience.", uk: "Розглядає психосоціальний ризик як проблему дизайну роботи — вимоги, автономія, нагляд, відпочинок, звітування та справедливі процедури — а не як індивідуальну стійкість." },
    url: "https://www.ilo.org/publications/psychosocial-working-environment-global-developments-and-pathways-action" },

  { id: "ilo-840k-news", course: true, type: "news", year: 2026,
    pub: "ILO", cats: ["psychosocial", "evidence"],
    title: { en: "840,000 deaths a year linked to psychosocial risks at work", uk: "840 000 смертей на рік пов’язані з психосоціальними ризиками на роботі" },
    note: { en: "The global estimate used in the residential opening — a worldwide figure, not a measure of Ukraine's own experience.", uk: "Глобальна оцінка, використана на відкритті очного етапу, — світова цифра, а не показник для України." },
    url: "https://www.ilo.org/resource/news/840000-deaths-year-linked-psychosocial-risks-work" },

  { id: "ilo-3m-news", course: true, type: "news", year: 2023,
    pub: "ILO", cats: ["evidence"],
    title: { en: "Nearly 3 million people die of work-related accidents and diseases each year", uk: "Майже 3 мільйони людей щороку помирають від нещасних випадків і хвороб, пов’язаних із роботою" },
    note: { en: "2.93 million work-related deaths and 395 million non-fatal injuries a year — the two figures on the opening slide.", uk: "2,93 млн смертей, пов’язаних із роботою, і 395 млн нефатальних травм щороку — дві цифри зі вступного слайда." },
    url: "https://www.ilo.org/resource/news/nearly-3-million-people-die-work-related-accidents-and-diseases" },

  { id: "ilo-mental-health-work", course: true, type: "report", year: 2022,
    pub: "ILO / WHO", cats: ["psychosocial", "people"],
    title: { en: "Mental health at work", uk: "Психічне здоров’я на роботі" },
    note: { en: "The joint ILO–WHO policy brief: organizational interventions, manager training and support for people with mental health conditions at work.", uk: "Спільний політичний бриф МОП і ВООЗ: організаційні втручання, навчання керівників і підтримка людей із психічними розладами на роботі." },
    url: "https://www.ilo.org/publications/mental-health-work" },

  { id: "who-mental-health-guidelines", course: false, type: "guidelines", year: 2022,
    pub: "World Health Organization", cats: ["psychosocial", "people"],
    title: { en: "WHO guidelines on mental health at work", uk: "Настанови ВООЗ щодо психічного здоров’я на роботі" },
    note: { en: "Evidence-graded recommendations, including for workers in high-stress occupations and for return to work after a mental health condition.", uk: "Рекомендації з оцінкою доказовості, зокрема для працівників високостресових професій і для повернення до роботи після психічного розладу." },
    url: "https://www.who.int/publications/i/item/9789240053052" },

  { id: "euosha-psychosocial", course: false, type: "web-resource", year: 2026,
    pub: "EU-OSHA", cats: ["psychosocial", "eu"],
    title: { en: "Psychosocial risks and stress at work", uk: "Психосоціальні ризики та стрес на роботі" },
    note: { en: "EU-OSHA's practical hub, with assessment tools and sector material that can be adapted directly.", uk: "Практичний розділ EU-OSHA з інструментами оцінювання та галузевими матеріалами, які можна адаптувати безпосередньо." },
    url: "https://osha.europa.eu/en/themes/psychosocial-risks-and-stress" },

  /* ------------------------------------------------- climate and wellbeing */
  { id: "ilo-climate-osh", course: true, type: "report", year: 2024,
    pub: "ILO", cats: ["evidence", "people"],
    title: { en: "Ensuring safety and health at work in a changing climate", uk: "Забезпечення безпеки та здоров’я на роботі в умовах зміни клімату" },
    note: { en: "How heat, UV, extreme weather, air pollution and vector-borne disease change the occupational risk envelope — including for outdoor restoration work.", uk: "Як спека, УФ-випромінювання, екстремальна погода, забруднення повітря та трансмісивні хвороби змінюють профіль виробничих ризиків — зокрема для відновлювальних робіт просто неба." },
    url: "https://www.ilo.org/publications/ensuring-safety-and-health-work-changing-climate" },

  { id: "ilo-heat-at-work", course: true, type: "report", year: 2024,
    pub: "ILO", cats: ["evidence", "people"],
    title: { en: "Heat at work: implications for safety and health", uk: "Спека на роботі: наслідки для безпеки та здоров’я" },
    note: { en: "Practical measures: work–rest cycles, hydration, acclimatization and the redesign of outdoor tasks.", uk: "Практичні заходи: цикли праці й відпочинку, питний режим, акліматизація та перепроєктування робіт просто неба." },
    url: "https://www.ilo.org/publications/heat-work-implications-safety-and-health" },

  /* ------------------------------------------------- inclusion and gender */
  { id: "ilo-gender-osh-10keys", course: true, type: "guidelines", year: 2013,
    pub: "ILO", cats: ["inclusion", "guidance"],
    title: { en: "10 Keys for gender-sensitive OSH practice — guidelines for gender mainstreaming", uk: "10 ключів до гендерно чутливої практики БЗР — настанови щодо врахування гендерного підходу" },
    note: { en: "The checklist behind the Wednesday session: a gender-neutral risk assessment is not the same as a gender-blind one.", uk: "Чек-лист, що стоїть за сесією середи: гендерно нейтральне оцінювання ризиків — не те саме, що гендерно сліпе." },
    url: "https://www.ilo.org/publications/10-keys-gender-sensitive-osh-practice-%E2%80%93-guidelines-gender-mainstreaming" },

  { id: "ilo-gender-osh-topic", course: true, type: "web-resource", year: 2026,
    pub: "ILO", cats: ["inclusion"],
    title: { en: "Gender and occupational safety and health", uk: "Гендер і безпека та гігієна праці" },
    note: { en: "The ILO topic page, with the task-based assessment method and PPE-fit material.", uk: "Тематична сторінка МОП із методом оцінювання за завданнями та матеріалами про відповідність ЗІЗ." },
    url: "https://www.ilo.org/topics-and-sectors/safety-and-health-work/gender-and-occupational-safety-and-health" },

  { id: "ilo-inclusion-adjustments", course: true, type: "guidelines", year: 2022,
    pub: "ILO", cats: ["inclusion", "guidance"],
    title: { en: "Promoting diversity and inclusion through workplace adjustments — a practical guide", uk: "Сприяння різноманіттю та інклюзії через адаптацію робочих місць — практичний посібник" },
    note: { en: "Directly relevant to the reintegration of workers returning with acquired disabilities, and to recruitment from a narrowed labour pool.", uk: "Прямо стосується реінтеграції працівників, які повертаються з набутою інвалідністю, і найму зі звуженого кадрового резерву." },
    url: "https://www.ilo.org/publications/promoting-diversity-and-inclusion-through-workplace-adjustments-practical" },

  { id: "ilo-gender-just-transition", course: true, type: "report", year: 2022,
    pub: "ILO", cats: ["inclusion", "energy"],
    title: { en: "Gender equality and inclusion for a just transition in climate action", uk: "Гендерна рівність та інклюзія для справедливого переходу в кліматичних діях" },
    note: { en: "Who gets the jobs created by the energy transition, and on what conditions.", uk: "Хто отримує робочі місця, створені енергетичним переходом, і на яких умовах." },
    url: "https://www.ilo.org/publications/gender-equality-and-inclusion-just-transition-climate-action" },

  { id: "ilo-just-transition-guidelines", course: false, type: "guidelines", year: 2015,
    pub: "ILO", cats: ["energy", "governance"],
    title: { en: "Guidelines for a just transition towards environmentally sustainable economies and societies for all", uk: "Настанови щодо справедливого переходу до екологічно стійких економік і суспільств для всіх" },
    note: { en: "The policy framework behind “recovery is not a return to earlier arrangements” — social dialogue, skills, social protection and OSH together.", uk: "Політична рамка, що стоїть за тезою «відновлення — не повернення до попереднього стану»: соціальний діалог, навички, соціальний захист і БЗР разом." },
    url: "https://www.ilo.org/publications/guidelines-just-transition-towards-environmentally-sustainable-economies" },

  /* ---------------------------------------------------- energy and labour */
  { id: "irena-jobs", course: true, type: "report", year: 2024,
    pub: "IRENA / ILO", cats: ["energy", "evidence"],
    title: { en: "Renewable energy and jobs — annual review 2024", uk: "Відновлювана енергетика та робочі місця — щорічний огляд 2024" },
    note: { en: "The occupational breakdown used on Wednesday to show how sharply women's participation varies by occupation within the same sector.", uk: "Розподіл за професіями, використаний у середу, щоб показати, наскільки різко відрізняється участь жінок за професіями в одній галузі." },
    url: "https://www.irena.org/Publications/2024/Oct/Renewable-energy-and-jobs-Annual-review-2024" },

  { id: "iea-energy-employment", course: true, type: "report", year: 2024,
    pub: "International Energy Agency", cats: ["energy", "evidence"],
    title: { en: "World Energy Employment 2024", uk: "Зайнятість у світовій енергетиці 2024" },
    note: { en: "Where energy employment is growing and where skills shortages bite — the global frame for the staffing cards.", uk: "Де зростає зайнятість в енергетиці та де відчувається дефіцит навичок — глобальна рамка для «кадрових» карток." },
    url: "https://www.iea.org/reports/world-energy-employment-2024/executive-summary" },

  { id: "eurostat-accidents", course: true, type: "data", year: 2026,
    pub: "Eurostat", cats: ["evidence", "eu"],
    title: { en: "Accidents at work statistics", uk: "Статистика нещасних випадків на виробництві" },
    note: { en: "The EU comparator set, broken down by economic activity — useful when arguing a case on sector risk rather than on individual events.", uk: "Порівняльний набір даних ЄС у розрізі видів економічної діяльності — корисний, коли аргумент будується на галузевому ризику, а не на окремих подіях." },
    url: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Accidents_at_work_statistics" },

  /* -------------------------------------------------------- mining safety */
  { id: "ilo-code-underground", course: false, type: "code-of-practice", year: 2006,
    pub: "ILO", cats: ["mining", "guidance"],
    title: { en: "Safety and health in underground coalmines — ILO code of practice", uk: "Безпека та гігієна праці в підземних вугільних шахтах — кодекс усталеної практики МОП" },
    note: { en: "Ventilation, dust, firedamp, fire, transport, shaft and road driving, and the national framework around them. The closest instrument to the mine-rescue cards.", uk: "Вентиляція, пил, рудниковий газ, пожежі, транспорт, проходження стволів і виробок та національна рамка навколо них. Найближчий документ до карток гірничорятувальників." },
    url: "https://www.ilo.org/resource/safety-and-health-coal-mines" },

  { id: "ilo-code-opencast", course: false, type: "code-of-practice", year: 2026,
    pub: "ILO", cats: ["mining", "guidance"],
    title: { en: "ILO codes of practice in mining", uk: "Кодекси усталеної практики МОП у гірничій справі" },
    note: { en: "The full set, including opencast mines and the older instruments on electricity and fire underground that the Thursday session draws on.", uk: "Повний перелік, зокрема для відкритих гірничих робіт і старіші документи щодо електрики та пожеж під землею, на які спирається сесія четверга." },
    url: "https://www.ilo.org/resource/codes-practice-mining" },

  { id: "ilo-mining-sector", course: false, type: "web-resource", year: 2026,
    pub: "ILO", cats: ["mining", "energy"],
    title: { en: "Occupational safety and health in the mining sector", uk: "Безпека та гігієна праці в гірничодобувному секторі" },
    note: { en: "The ILO's sector hub for coal and other mining — standards, codes and current work in one place.", uk: "Галузевий розділ МОП з вугільної та іншої гірничої справи — стандарти, кодекси та поточна робота в одному місці." },
    url: "https://www.ilo.org/resource/occupational-safety-and-health-mining-coal-and-other-mining-sector" },

  /* ------------------------------------------------------------ EU law --- */
  { id: "eu-89-391", course: false, type: "directive", year: 1989,
    pub: "European Union", cats: ["eu", "standard", "governance"],
    title: { en: "Directive 89/391/EEC — the OSH Framework Directive", uk: "Директива 89/391/ЄЕС — Рамкова директива з БЗР" },
    note: { en: "The parent act of the EU OSH acquis: risk assessment, prevention principles, worker information, consultation and training. Everything Ukraine must approximate starts here.", uk: "Базовий акт acquis ЄС із БЗР: оцінювання ризиків, принципи профілактики, інформування, консультування та навчання працівників. Будь-яке наближення України починається звідси." },
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A31989L0391" },

  { id: "eu-89-656", course: false, type: "directive", year: 1989,
    pub: "European Union", cats: ["eu", "standard"],
    title: { en: "Directive 89/656/EEC — use of personal protective equipment at work", uk: "Директива 89/656/ЄЕС — використання засобів індивідуального захисту на роботі" },
    note: { en: "Minimum requirements for selecting, assessing and using PPE — the duty side of the PPE performance standards cited in the Tuesday session.", uk: "Мінімальні вимоги до вибору, оцінювання та використання ЗІЗ — бік обов’язків для стандартів ефективності ЗІЗ, названих у вівторок." },
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A31989L0656" },

  { id: "eu-2009-104", course: false, type: "directive", year: 2009,
    pub: "European Union", cats: ["eu", "standard"],
    title: { en: "Directive 2009/104/EC — use of work equipment", uk: "Директива 2009/104/ЄС — використання робочого обладнання" },
    note: { en: "Inspection regimes for work equipment, including equipment exposed to conditions that cause deterioration — directly relevant to damaged assets.", uk: "Режими перевірок робочого обладнання, зокрема обладнання, що зазнає впливу умов, які спричиняють погіршення стану, — прямо стосується пошкоджених активів." },
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32009L0104" },

  { id: "eu-2013-35", course: false, type: "directive", year: 2013,
    pub: "European Union", cats: ["eu", "standard", "energy"],
    title: { en: "Directive 2013/35/EU — electromagnetic fields", uk: "Директива 2013/35/ЄС — електромагнітні поля" },
    note: { en: "Exposure limit values and action levels for workers exposed to electromagnetic fields — the directive most specific to electricity transmission and distribution work.", uk: "Граничні значення впливу та рівні дії для працівників, що зазнають впливу електромагнітних полів, — найбільш специфічна директива для робіт із передачі й розподілу електроенергії." },
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32013L0035" },

  { id: "eu-92-104", course: false, type: "directive", year: 1992,
    pub: "European Union", cats: ["eu", "mining"],
    title: { en: "Directive 92/104/EEC — surface and underground mineral-extracting industries", uk: "Директива 92/104/ЄЕС — видобувна промисловість: відкриті та підземні роботи" },
    note: { en: "Minimum OSH requirements for mining: the safety and health document, escape and rescue, fire, ventilation and the duty to supervise.", uk: "Мінімальні вимоги БЗР для гірничих робіт: документ з безпеки та здоров’я, евакуація й рятування, пожежна безпека, вентиляція та обов’язок нагляду." },
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A31992L0104" },

  { id: "eu-osh-framework-2021", course: false, type: "report", year: 2021,
    pub: "European Commission", cats: ["eu", "governance"],
    title: { en: "EU strategic framework on health and safety at work 2021–2027", uk: "Стратегічна рамка ЄС щодо безпеки та здоров’я на роботі на 2021–2027 роки" },
    note: { en: "Anticipating change, improving prevention, and increasing preparedness — the EU's own three priorities, and a template for a national OSH programme.", uk: "Передбачення змін, посилення профілактики та підвищення готовності — три власні пріоритети ЄС і шаблон для національної програми з БЗР." },
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52021DC0323" },

  { id: "eu-osha-directives", course: false, type: "web-resource", year: 2026,
    pub: "EU-OSHA", cats: ["eu", "standard"],
    title: { en: "European directives on safety and health at work — the full index", uk: "Європейські директиви з безпеки та здоров’я на роботі — повний покажчик" },
    note: { en: "The whole acquis in one list, with plain-language summaries. The practical starting point for a legal approximation exercise.", uk: "Увесь acquis одним переліком із поясненнями простою мовою. Практична відправна точка для роботи з наближення законодавства." },
    url: "https://osha.europa.eu/en/safety-and-health-legislation/european-directives" },

  /* --------------------------------------------------- digital governance */
  { id: "eu-ai-act", course: false, type: "regulation", year: 2024,
    pub: "European Union", cats: ["technology", "eu", "governance"],
    title: { en: "Regulation (EU) 2024/1689 — the AI Act", uk: "Регламент (ЄС) 2024/1689 — Акт про штучний інтелект" },
    note: { en: "AI systems used for employment and worker management are classified high-risk, with duties on transparency, human oversight and data governance. The frame for any AI-in-OSH proposal.", uk: "Системи ШІ для зайнятості та управління працівниками віднесено до високоризикових, із обов’язками щодо прозорості, людського нагляду та врядування даними. Рамка для будь-якої пропозиції щодо ШІ в БЗР." },
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689" },

  { id: "eu-gdpr", course: false, type: "regulation", year: 2016,
    pub: "European Union", cats: ["technology", "eu", "governance"],
    title: { en: "Regulation (EU) 2016/679 — General Data Protection Regulation", uk: "Регламент (ЄС) 2016/679 — Загальний регламент про захист даних" },
    note: { en: "Necessary and proportionate processing, and the limits of consent in an employment relationship — the governance question that sits under video capture of works.", uk: "Необхідна та пропорційна обробка даних і межі згоди в трудових відносинах — питання врядування, що стоїть за відеофіксацією робіт." },
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679" },

  { id: "euosha-ai-worker-management", course: false, type: "report", year: 2022,
    pub: "EU-OSHA", cats: ["technology", "eu"],
    title: { en: "Artificial intelligence for worker management — an overview", uk: "Штучний інтелект для управління працівниками — огляд" },
    note: { en: "What AI-based worker management does to autonomy, workload and trust, and the prevention-through-design principles that keep it on the right side of OSH.", uk: "Як управління працівниками на основі ШІ впливає на автономію, навантаження й довіру, і які принципи профілактики через дизайн утримують його в межах БЗР." },
    url: "https://osha.europa.eu/en/publications/artificial-intelligence-worker-management-overview" },

  { id: "euosha-ai-monitoring", course: false, type: "report", year: 2023,
    pub: "EU-OSHA", cats: ["technology", "eu"],
    title: { en: "Smart digital monitoring systems for OSH: uses and challenges", uk: "Розумні системи цифрового моніторингу для БЗР: застосування та виклики" },
    note: { en: "Sensors, wearables, drones and computer vision assessed for what they actually prevent — and the new risks they introduce. The closest match to the group's remote-monitoring proposals.", uk: "Датчики, носимі пристрої, дрони й комп’ютерний зір — оцінені за тим, що вони справді запобігають, і за новими ризиками, які вони створюють. Найближча відповідність пропозиціям групи щодо дистанційного моніторингу." },
    url: "https://osha.europa.eu/en/publications/smart-digital-monitoring-systems-occupational-safety-and-health-uses-and-challenges" },

  { id: "euosha-safety-culture", course: false, type: "web-resource", year: 2026,
    pub: "EU-OSHA", cats: ["guidance", "people"],
    title: { en: "Good OSH is good for business", uk: "Належна БЗР — вигідна для бізнесу" },
    note: { en: "Leadership, worker participation and the business case — the material behind “risk assessment as a tool, not a form”.", uk: "Лідерство, участь працівників і бізнес-обґрунтування — матеріал, що стоїть за тезою «оцінювання ризиків як інструмент, а не формальність»." },
    url: "https://osha.europa.eu/en/themes/good-osh-is-good-for-business" },

  { id: "euosha-costs-benefits", course: false, type: "web-resource", year: 2026,
    pub: "EU-OSHA", cats: ["evidence", "governance"],
    title: { en: "The costs and benefits of occupational safety and health", uk: "Витрати та вигоди безпеки й гігієни праці" },
    note: { en: "The evidence base for arguing that prevention spending belongs in the tariff rather than in the residual budget.", uk: "Доказова база для аргументу, що витрати на профілактику належать до тарифу, а не до залишкового бюджету." },
    url: "https://osha.europa.eu/en/themes/good-osh-is-good-for-business" },

  /* ===========================================================================
     ITALY — the legal architecture behind what the group saw on the visits
     ---------------------------------------------------------------------------
     Added after the study visits. Participants asked repeatedly how European
     energy companies actually organise high-risk work; the honest answer is
     that what they saw at IREN, Sogin and Imerys is the visible surface of a
     specific legal stack. These entries are that stack, bottom to top, so the
     practice can be read as something reproducible rather than as a local
     habit. Article-level links go to Normattiva, the official consolidated
     text maintained by the Istituto Poligrafico e Zecca dello Stato.
     ======================================================================== */

  { id: "it-dlgs-81", course: false, type: "italy-law", year: 2008,
    pub: "Repubblica Italiana", cats: ["italy", "governance", "guidance"],
    title: { en: "Legislative Decree 81/2008 — the Italian consolidated act on occupational safety and health (Testo Unico)", uk: "Законодавчий декрет 81/2008 — зведений акт Італії про безпеку та здоров’я на роботі (Testo Unico)" },
    note: { en: "The single statute behind every Italian site the group visited. It transposes the EU Framework Directive 89/391/EEC and its daughter directives into one consolidated text: employer duties that cannot be delegated, the risk assessment document, the prevention and protection service, the workers' safety representative, emergency planning, contractor coordination, and a title for each family of hazard. Where Ukraine has a framework law plus a large body of separate rules, Italy has one act — which is part of why the sites could show a single coherent system.", uk: "Єдиний закон, що стоїть за кожним італійським об’єктом, який відвідала група. Він імплементує Рамкову директиву ЄС 89/391/ЄЕС та похідні від неї в один зведений текст: обов’язки роботодавця, які не можна делегувати, документ оцінювання ризиків, службу запобігання і захисту, уповноваженого працівників з безпеки, планування дій у надзвичайних ситуаціях, координацію підрядників і окремий розділ для кожної групи небезпек. Там, де Україна має рамковий закон і великий масив окремих актів, Італія має один акт — частково тому об’єкти і змогли показати єдину узгоджену систему." },
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2008-04-09;81" },

  { id: "it-dvr", course: false, type: "italy-law", year: 2008,
    pub: "Repubblica Italiana", cats: ["italy", "guidance", "governance"],
    title: { en: "The risk assessment document (DVR) — Article 28, Legislative Decree 81/2008", uk: "Документ оцінювання ризиків (DVR) — стаття 28 Законодавчого декрету 81/2008" },
    note: { en: "The obligation that anchors the whole Italian system. The assessment must cover all risks, including work-related stress, risks to pregnant workers, and those connected with gender, age, country of origin and the specific type of contract. The document must carry a certain date, the criteria used, the measures chosen, the prevention programme and the names of those who took part — which makes it inspectable rather than declaratory. Read it next to the Ukrainian risk-assessment duty: the difference is less in what must be assessed than in what must be written down and provable.", uk: "Обов’язок, на якому тримається вся італійська система. Оцінювання має охоплювати всі ризики, зокрема пов’язаний із роботою стрес, ризики для вагітних працівниць, а також ризики, пов’язані зі статтю, віком, країною походження і конкретним типом договору. Документ повинен мати достовірну дату, застосовані критерії, обрані заходи, програму профілактики та імена учасників процесу — що робить його придатним для перевірки, а не декларативним. Читайте поряд з українським обов’язком оцінювання ризиків: різниця не стільки в тому, що оцінювати, скільки в тому, що має бути записано і доведено." },
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2008-04-09;81~art28" },

  { id: "it-cem", course: false, type: "web-resource", year: 2026,
    pub: "INAIL · Portale Agenti Fisici", cats: ["italy", "guidance", "energy"],
    title: { en: "Assessing the electromagnetic field risk — Portale Agenti Fisici", uk: "Оцінювання ризику електромагнітних полів — Portale Agenti Fisici" },
    note: { en: "A worked example of a specific risk assessment sitting under the general DVR duty, and the one most directly relevant to a grid operator. Title VIII, Chapter IV of Legislative Decree 81/2008 transposes EU Directive 2013/35/EU and sets exposure limit values and action levels; this national portal, run by INAIL with the regions, supplies the calculation tools, the database of measured sources and the guidance to do the assessment. Useful as a model for how a specific-risk assessment can be standardised nationally instead of improvised enterprise by enterprise.", uk: "Опрацьований приклад оцінювання конкретного ризику в межах загального обов’язку DVR — і найбільш релевантний для оператора мережі. Розділ VIII, глава IV Законодавчого декрету 81/2008 імплементує Директиву ЄС 2013/35/ЄС і встановлює граничні значення впливу та рівні дії; цей національний портал, який веде INAIL разом з регіонами, надає інструменти розрахунку, базу виміряних джерел і настанови для проведення оцінювання. Корисний як модель того, як оцінювання конкретного ризику можна стандартизувати на національному рівні, а не імпровізувати на кожному підприємстві." },
    url: "https://www.portaleagentifisici.it/fo_campi_elettromagnetici_valutazione.php" },

  { id: "it-permesso-lavoro", course: false, type: "italy-law", year: 2008,
    pub: "Repubblica Italiana", cats: ["italy", "governance", "technology"],
    title: { en: "Contractor coordination and the permit to work — Article 26, Legislative Decree 81/2008", uk: "Координація підрядників і наряд-допуск — стаття 26 Законодавчого декрету 81/2008" },
    note: { en: "The legal root of the permit systems the group saw in use. Article 26 requires the client to verify the contractor's technical and professional suitability, to inform it of the specific risks of the site, to cooperate and coordinate on prevention, and to draw up the DUVRI — the interference risk assessment — for work carried out by outside firms. The permit to work is the operational instrument that discharges this duty for a single job: it names the work, the isolation, the controls, the authorising person and the time window. Where it has been digitalised, it also produces the audit trail that proves the coordination happened.", uk: "Правовий корінь систем нарядів-допусків, які група бачила в дії. Стаття 26 вимагає від замовника перевірити технічну та професійну придатність підрядника, поінформувати його про специфічні ризики об’єкта, співпрацювати й координувати профілактичні заходи та скласти DUVRI — оцінювання ризиків взаємного впливу — для робіт, що виконують сторонні фірми. Наряд-допуск є операційним інструментом, який виконує цей обов’язок для окремої роботи: він називає роботу, схему від’єднання, заходи контролю, особу, що дозволяє, і часове вікно. Там, де його оцифровано, він також створює аудиторський слід, який доводить, що координація дійсно відбулася." },
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2008-04-09;81~art26" },

  { id: "it-piano-emergenza", course: false, type: "italy-law", year: 2008,
    pub: "Repubblica Italiana", cats: ["italy", "energy", "guidance"],
    title: { en: "Emergency planning — Articles 43–46, Legislative Decree 81/2008", uk: "Планування дій у надзвичайних ситуаціях — статті 43–46 Законодавчого декрету 81/2008" },
    note: { en: "What an emergency plan for a power plant has to contain, and who has to be able to execute it. The employer must organise the necessary relations with the external emergency services, designate and train the workers responsible for first aid, firefighting and evacuation, and ensure that every worker exposed to serious and immediate danger can take action to avoid the consequences. The detailed fire-safety management rules sit in the Ministerial Decree of 2 September 2021. Read together, these are the instruments that produce the kind of plan the group saw on the visits — including the assembly points, the roles and the drill records.", uk: "Що має містити план дій у надзвичайних ситуаціях для електростанції та хто має бути здатним його виконати. Роботодавець зобов’язаний організувати необхідну взаємодію із зовнішніми аварійними службами, призначити і навчити працівників, відповідальних за першу допомогу, пожежогасіння та евакуацію, і забезпечити, щоб кожен працівник, який зазнає серйозної та безпосередньої небезпеки, міг діяти для уникнення наслідків. Деталізовані правила управління пожежною безпекою містить Міністерський декрет від 2 вересня 2021 року. Разом це інструменти, що створюють той тип плану, який група бачила під час візитів, — зокрема пункти збору, ролі та записи про навчальні тривоги." },
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2008-04-09;81~art43" },

  { id: "it-dm-antincendio", course: false, type: "italy-law", year: 2021,
    pub: "Ministero dell'Interno", cats: ["italy", "guidance"],
    title: { en: "Ministerial Decree of 2 September 2021 — fire safety management in the workplace", uk: "Міністерський декрет від 2 вересня 2021 року — управління пожежною безпекою на робочому місці" },
    note: { en: "The current rule on fire-risk management, emergency plans, drills and the training and qualification of the fire teams, replacing the 1998 decree. This is the operational detail behind the emergency plan of any Italian industrial site, including the frequency of exercises and what has to be recorded about them.", uk: "Чинний акт про управління пожежним ризиком, плани дій у надзвичайних ситуаціях, навчальні тривоги, а також навчання і кваліфікацію пожежних команд; замінив декрет 1998 року. Це операційна деталізація, що стоїть за планом дій будь-якого італійського промислового об’єкта, зокрема періодичність тренувань і те, що про них має бути задокументовано." },
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.ministeriale:2021-09-02" },

  { id: "it-dlgs-231", course: false, type: "italy-law", year: 2001,
    pub: "Repubblica Italiana", cats: ["italy", "governance"],
    title: { en: "Legislative Decree 231/2001 — administrative liability of organisations", uk: "Законодавчий декрет 231/2001 — адміністративна відповідальність організацій" },
    note: { en: "The reason Italian companies invest in safety management rather than merely complying with it. The decree makes the organisation itself liable — with fines, and with bans on contracting with the public administration — for certain offences committed in its interest by its own people. Since 2007 that list includes manslaughter and serious injury caused by breach of occupational safety rules. For an energy utility, a fatal accident is therefore not only a prosecution of a manager; it is a corporate exposure that reaches procurement and financing.", uk: "Причина, чому італійські компанії інвестують в управління безпекою, а не просто дотримуються вимог. Декрет робить відповідальною саму організацію — через штрафи та заборону укладати договори з державними органами — за певні правопорушення, вчинені в її інтересах її ж людьми. З 2007 року цей перелік охоплює необережне спричинення смерті та тяжких тілесних ушкоджень унаслідок порушення правил охорони праці. Для енергетичної компанії смертельний нещасний випадок — це вже не лише переслідування керівника, а корпоративний ризик, що сягає закупівель і фінансування." },
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2001-06-08;231" },

  { id: "it-mog-231", course: false, type: "italy-law", year: 2008,
    pub: "Repubblica Italiana", cats: ["italy", "governance", "guidance"],
    title: { en: "The organisation and management model (“Modello 231”) — Article 30, Legislative Decree 81/2008", uk: "Модель організації та управління («Modello 231») — стаття 30 Законодавчого декрету 81/2008" },
    note: { en: "The bridge between the two decrees, and the single most transferable idea in this set. Article 30 says that an organisation and management model has effect in exonerating the company from liability under Decree 231/2001 only if it ensures a system that discharges the specific legal duties — hazard identification, emergency management, worker consultation, training, supervision, documentation and periodic verification — and only if it includes a disciplinary system and a mechanism for its own review. It also deems models conforming to ILO-OSH 2001 or to the BS OHSAS 18001 lineage, now ISO 45001, to be compliant. In other words: the management system is not paperwork sitting beside the law, it is the condition on which corporate liability turns.", uk: "Міст між двома декретами і найбільш придатна для перенесення ідея в цьому наборі. Стаття 30 встановлює, що модель організації та управління звільняє компанію від відповідальності за Декретом 231/2001 лише тоді, коли вона забезпечує систему, яка виконує конкретні правові обов’язки — виявлення небезпек, управління надзвичайними ситуаціями, консультації з працівниками, навчання, нагляд, документування та періодичну перевірку — і лише якщо вона містить дисциплінарну систему та механізм власного перегляду. Вона також визнає моделі, що відповідають ILO-OSH 2001 або лінії BS OHSAS 18001, нині ISO 45001, такими, що відповідають вимогам. Інакше кажучи: система управління — це не папери поруч із законом, а умова, від якої залежить корпоративна відповідальність." },
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2008-04-09;81~art30" },

  { id: "euosha-maintenance", course: false, type: "report", year: 2010,
    pub: "EU-OSHA", cats: ["guidance", "evidence", "energy"],
    title: { en: "Maintenance and occupational safety and health: a statistical picture", uk: "Технічне обслуговування та безпека праці: статистична картина" },
    note: { en: "Why maintenance deserves its own protocol rather than being treated as ordinary work. Maintenance workers are exposed to a wider range of hazards than almost any other group, they work on equipment that is partly dismantled or temporarily out of its safe state, and they are frequently contractors unfamiliar with the site. The evidence here is the argument for the permit, the isolation, the pre-job briefing and the formal handback that the group saw in use at IREN.", uk: "Чому технічне обслуговування заслуговує на окремий протокол, а не на поводження як зі звичайною роботою. Ремонтний персонал зазнає ширшого спектра небезпек, ніж майже будь-яка інша група, працює з обладнанням, що частково розібране або тимчасово виведене зі свого безпечного стану, і часто є підрядниками, незнайомими з об’єктом. Наведені дані є аргументом на користь наряду-допуску, схеми від’єднання, цільового інструктажу та формального повернення обладнання, які група бачила в дії в IREN." },
    url: "https://osha.europa.eu/en/publications/maintenance-and-occupational-safety-and-health-statistical-picture" },

  { id: "euosha-digitalisation", course: false, type: "web-resource", year: 2026,
    pub: "EU-OSHA", cats: ["technology", "guidance", "eu"],
    title: { en: "Digitalisation of work — EU-OSHA", uk: "Цифровізація праці — EU-OSHA" },
    note: { en: "The governance side of a digital permit, a digital checklist or a tablet-based inspection round: what the tool changes about who decides, what is recorded, how long it is kept and who can see it. Worth reading before procuring any of the systems the group admired on the visits.", uk: "Бік врядування цифрового наряду-допуску, цифрового чек-листа чи обходу з планшетом: що інструмент змінює в тому, хто ухвалює рішення, що фіксується, скільки зберігається і хто має доступ. Варто прочитати перед закупівлею будь-якої з систем, які група оцінила під час візитів." },
    url: "https://osha.europa.eu/en/themes/digitalisation-work" },

  { id: "oira", course: false, type: "web-resource", year: 2026,
    pub: "EU-OSHA", cats: ["guidance", "technology", "eu"],
    title: { en: "OiRA — Online interactive Risk Assessment", uk: "OiRA — онлайн-інструмент інтерактивного оцінювання ризиків" },
    note: { en: "A free EU-OSHA platform of sector-specific risk assessment tools, several of them in national versions. Relevant here as a demonstration that a risk assessment can be delivered as a structured digital instrument that produces a dated, exportable document and an action plan — the direction several cards asked for when they called for the automation and digitalisation of risk assessment.", uk: "Безкоштовна платформа EU-OSHA з галузевими інструментами оцінювання ризиків, частина з яких має національні версії. Релевантна як демонстрація того, що оцінювання ризиків може бути структурованим цифровим інструментом, який створює датований документ для експорту та план заходів, — саме той напрям, про який просили кілька карток, коли йшлося про автоматизацію та цифровізацію оцінювання ризиків." },
    url: "https://oiraproject.eu/en" },

  /* --------------------------------------------------------- PPE standards */
  { id: "ppe-standards", course: true, type: "standard", year: 2026,
    pub: "ISO / CEN / NFPA", cats: ["guidance", "technology"],
    title: { en: "PPE performance standards cited in the PPE and emergency-preparedness session", uk: "Стандарти ефективності ЗІЗ, названі на сесії про ЗІЗ і готовність до НС" },
    note: { en: "Protective clothing against infective agents (EN 14126, EN 14325, ISO 16603/16604, ISO 22610/22612); high-visibility clothing (ISO 20471); safety, protective and occupational footwear (ISO 20344, 20345, 20346, 20347); filtering half masks (EN 149); and the NFPA references for SCBA (1981) and fire-service OSH programmes (1500). Listed here as a reading list — consult the current edition of each.", uk: "Захисний одяг від інфекційних агентів (EN 14126, EN 14325, ISO 16603/16604, ISO 22610/22612); одяг підвищеної видимості (ISO 20471); захисне та спеціальне взуття (ISO 20344, 20345, 20346, 20347); фільтрувальні півмаски (EN 149); та стандарти NFPA для дихальних апаратів (1981) і програм БЗР пожежних служб (1500). Наведено як перелік для читання — звіряйтеся з чинною редакцією кожного." },
    url: "https://osha.europa.eu/en/safety-and-health-legislation/european-directives" }
];
