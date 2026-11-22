/* ==========================================================================
   CV DATA: edit this file to update the CV.
   --------------------------------------------------------------------------
   • Every piece of text on the page comes from this file.
   • Text can be a plain string (used for every language) or a translation
     object: { en: "...", sk: "...", hu: "..." }.
   • Dates are "YYYY-MM" or "YYYY". Use "present" for the current role.
   • In summaries, {years} is replaced with your years in education,
     calculated from the earliest role below.
   ========================================================================== */

window.CV_DATA = {
  meta: {
    languages: ["en", "sk", "hu"], // the order of the language switch
    defaultLang: "en", // used when the visitor's browser language isn't listed
    lastUpdated: "2026-11",
  },

  profile: {
    firstName: "Csaba",
    lastName: "Fazekas",
    photo: "", // e.g. "assets/photo.jpg"; leave empty to show initials
    title: {
      en: "Educator & leader in digital education",
      sk: "Pedagóg a líder v digitálnom vzdelávaní",
      hu: "Pedagógus és vezető a digitális oktatás területén",
    },
    tagline: {
      en: "Digitalisation · Teaching · Leadership",
      sk: "Digitalizácia · Pedagogika · Líderstvo",
      hu: "Digitalizáció · Pedagógia · Vezetés",
    },
    location: { en: "Fiľakovo, Slovakia", sk: "Fiľakovo, Slovensko", hu: "Fülek, Szlovákia" },
    email: "fazekas.csaba@koharysuli.sk",
    phone: "", // optional, e.g. "+421 900 000 000"
    socials: [
      { type: "github", label: "GitHub", url: "https://github.com/csabafazekas" },
      // { type: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/..." },
    ],
    summary: {
      en: [
        "I'm an educator from Fiľakovo, Slovakia, with more than {years} years of experience teaching informatics and English in primary and secondary schools. As a school digital coordinator, I introduced digital tools, managed school IT systems and trained teachers to use technology with confidence.",
        "As a school principal, I bring together teaching, technology and leadership: I lead and motivate colleagues as they bring new methods and tools into the classroom. I work confidently in Hungarian, Slovak and English.",
      ],
      sk: [
        "Som pedagóg z Fiľakova a za sebou mám viac ako {years} rokov praxe vo vyučovaní informatiky a anglického jazyka na základnej aj strednej škole. Ako školský digitálny koordinátor mám skúsenosti so zavádzaním digitálnych nástrojov, správou školských IT systémov a so školením učiteľov.",
        "Ako riaditeľ školy spájam pedagogiku, technológie a líderstvo: vediem a motivujem kolegov pri zavádzaní nových metód a nástrojov do výučby. S istotou pracujem po maďarsky, slovensky aj anglicky.",
      ],
      hu: [
        "Füleki pedagógus vagyok, több mint {years} év tapasztalattal az informatika és az angol nyelv tanításában alap- és középiskolában. Iskolai digitális koordinátorként digitális eszközöket vezettem be, iskolai informatikai rendszereket kezeltem, és pedagógusokat képeztem.",
        "Iskolaigazgatóként a pedagógiát, a technológiát és a vezetést kapcsolom össze: vezetem és motiválom a kollégákat az új módszerek és eszközök bevezetésében. Magyarul, szlovákul és angolul is magabiztosan dolgozom.",
      ],
    },
  },

  // Up to five key facts shown around the monogram card (label is optional). auto: "years" is calculated for you.
  // icon: clock | digital | leader | star | languages | cap
  highlights: [
    { icon: "clock", auto: "years", suffix: "+", label: { en: "years in education", sk: "rokov v školstve", hu: "év az oktatásban" } },
    {
      icon: "digital",
      value: { en: "Digital coordinator", sk: "Digitálny koordinátor", hu: "Digitális koordinátor" },
    },
    {
      icon: "leader",
      value: { en: "School leadership", sk: "Vedenie školy", hu: "Iskolavezetés" },
      label: { en: "since 2024", sk: "od roku 2024", hu: "2024 óta" },
    },
    {
      icon: "languages",
      value: "3",
      label: { en: "working languages (HU\u00a0·\u00a0SK\u00a0·\u00a0EN)", sk: "pracovné jazyky (HU\u00a0·\u00a0SK\u00a0·\u00a0EN)", hu: "munkanyelv (HU\u00a0·\u00a0SK\u00a0·\u00a0EN)" },
    },
    {
      icon: "cap",
      value: "Mgr.",
      label: {
        en: "Master's in teaching Informatics & English",
        sk: "učiteľstvo informatiky a anglického jazyka",
        hu: "informatika–angol szakos tanár",
      },
    },
  ],

  // Newest first. `short` is the label used in the career-path strip.
  experience: [
    {
      role: { en: "Principal", sk: "Riaditeľ základnej školy", hu: "Igazgató" },
      short: { en: "Principal", sk: "Riaditeľ školy", hu: "Igazgató" },
      org: { en: "Štefan Koháry II. Primary School", sk: "ZŠ Štefana Koháriho II. s VJM", hu: "II. Koháry István Alapiskola" },
      location: { en: "Fiľakovo", sk: "Fiľakovo", hu: "Fülek" },
      start: "2025-03",
      end: "present",
      highlights: {
        en: [
          "Lead the school's pedagogical, administrative and operational work, and its relationships with parents and the local community.",
          "Manage the budget, financial planning and the effective use of staff and resources.",
          "Develop the school education programme, introduce innovative teaching methods and lead teachers' professional development.",
        ],
        sk: [
          "Riadenie pedagogickej, administratívnej a prevádzkovej činnosti školy a budovanie vzťahov s rodičmi a miestnou komunitou.",
          "Správa rozpočtu, finančné plánovanie a efektívne využívanie ľudských a materiálnych zdrojov.",
          "Rozvoj školského vzdelávacieho programu, zavádzanie inovatívnych metód výučby a vedenie profesijného rozvoja učiteľov.",
        ],
        hu: [
          "Irányítom az iskola pedagógiai, adminisztratív és működési tevékenységét, és építem a kapcsolatot a szülőkkel és a helyi közösséggel.",
          "Felelek a költségvetésért, a pénzügyi tervezésért, valamint az emberi és anyagi erőforrások hatékony felhasználásáért.",
          "Fejlesztem az iskolai nevelési-oktatási programot, innovatív tanítási módszereket vezetek be, és irányítom a pedagógusok szakmai fejlődését.",
        ],
      },
    },
    {
      role: { en: "Deputy Principal", sk: "Zástupca riaditeľa školy", hu: "Igazgatóhelyettes" },
      short: { en: "Deputy principal", sk: "Zástupca riaditeľa", hu: "Igazgatóhelyettes" },
      org: { en: "Štefan Koháry II. Primary School", sk: "ZŠ Štefana Koháriho II. s VJM", hu: "II. Koháry István Alapiskola" },
      location: { en: "Fiľakovo", sk: "Fiľakovo", hu: "Fülek" },
      start: "2024-07",
      end: "2025-02",
      highlights: {
        en: [
          "Coordinated the day-to-day running of the school, keeping lessons and activities running smoothly.",
          "Supported and supervised the teaching staff and evaluated teaching performance.",
          "Organised school events and projects; managed school documentation and internal rules.",
        ],
        sk: [
          "Koordinácia každodenného chodu školy a zabezpečenie hladkého priebehu vyučovania a školských aktivít.",
          "Podpora a supervízia pedagogického zboru, hodnotenie pedagogických výkonov.",
          "Organizácia školských podujatí a projektov, správa školskej dokumentácie a vnútorných predpisov.",
        ],
        hu: [
          "Koordináltam az iskola mindennapi működését, és biztosítottam a tanítás és az iskolai programok zavartalan menetét.",
          "Támogattam és felügyeltem a tantestület munkáját, értékeltem a pedagógiai teljesítményt.",
          "Iskolai rendezvényeket és projekteket szerveztem, kezeltem az iskolai dokumentációt és a belső szabályzatokat.",
        ],
      },
    },
    {
      role: { en: "School Digital Coordinator", sk: "Školský digitálny koordinátor", hu: "Iskolai digitális koordinátor" },
      short: { en: "Digital coordinator", sk: "Digitálny koordinátor", hu: "Digitális koordinátor" },
      org: { en: "Štefan Koháry II. Primary School", sk: "ZŠ Štefana Koháriho II. s VJM", hu: "II. Koháry István Alapiskola" },
      location: { en: "Fiľakovo", sk: "Fiľakovo", hu: "Fülek" },
      start: "2021-09",
      end: "2024-08",
      highlights: {
        en: [
          "Introduced and managed digital tools for teaching and school administration.",
          "Trained and supported teachers and pupils in using digital technology.",
          "Coordinated and maintained the school network, e-learning platforms and other IT systems.",
        ],
        sk: [
          "Zavádzanie a správa digitálnych nástrojov pre výučbu a administratívu školy.",
          "Školenia a technická podpora učiteľov a žiakov pri využívaní digitálnych technológií.",
          "Koordinácia a údržba školskej počítačovej siete, e-learningových platforiem a ďalších IT riešení.",
        ],
        hu: [
          "Digitális eszközöket vezettem be és kezeltem a tanításhoz és az iskolai adminisztrációhoz.",
          "Képzéseket tartottam, és technikai segítséget nyújtottam a pedagógusoknak és a diákoknak a digitális technológiák használatában.",
          "Koordináltam és karbantartottam az iskolai hálózatot, az e-learning platformokat és más informatikai rendszereket.",
        ],
      },
    },
    {
      role: { en: "Informatics Teacher (secondary)", sk: "Učiteľ informatiky na SŠ", hu: "Középiskolai informatikatanár" },
      short: { en: "Informatics teacher, grammar school", sk: "Učiteľ informatiky na gymnáziu", hu: "Informatikatanár (gimnázium)" },
      org: { en: "Fiľakovo Grammar School", sk: "Gymnázium – Gimnázium Fiľakovo", hu: "Füleki Gimnázium" },
      location: { en: "Fiľakovo", sk: "Fiľakovo", hu: "Fülek" },
      start: "2015-02",
      end: "2024-08",
      highlights: {
        en: [
          "Taught informatics, including programming, algorithms and computer systems.",
          "Prepared curricula, tests and online learning materials, and gave students individual support.",
        ],
        sk: [
          "Vyučovanie informatiky vrátane programovania, algoritmov a práce s počítačovými systémami.",
          "Príprava učebných plánov, testov a online materiálov, individuálna podpora študentov.",
        ],
        hu: [
          "Informatikát tanítottam, beleértve a programozást, az algoritmusokat és a számítógépes rendszereket.",
          "Tanterveket, teszteket és online tananyagokat készítettem, és egyénileg támogattam a diákokat.",
        ],
      },
    },
    {
      role: { en: "Teacher of English and Informatics", sk: "Učiteľ anglického jazyka a informatiky", hu: "Angol- és informatikatanár" },
      short: { en: "English & informatics teacher", sk: "Učiteľ ANJ a informatiky", hu: "Angol- és informatikatanár" },
      org: { en: "Štefan Koháry II. Primary School", sk: "ZŠ Štefana Koháriho II. s VJM", hu: "II. Koháry István Alapiskola" },
      location: { en: "Fiľakovo", sk: "Fiľakovo", hu: "Fülek" },
      start: "2012-09",
      end: "2024-06",
      highlights: {
        en: [
          "Taught English at different proficiency levels and developed pupils' digital skills, including programming.",
          "Created learning materials, assessed pupils and supported their progress; took part in school projects.",
        ],
        sk: [
          "Výučba anglického jazyka na rôznych úrovniach a rozvoj digitálnych zručností žiakov vrátane programovania.",
          "Tvorba učebných materiálov, hodnotenie žiakov a podpora ich napredovania, účasť na školských projektoch.",
        ],
        hu: [
          "Angol nyelvet tanítottam különböző szinteken, és fejlesztettem a diákok digitális készségeit, a programozást is beleértve.",
          "Tananyagokat készítettem, értékeltem a diákokat és támogattam a fejlődésüket, részt vettem iskolai projektekben.",
        ],
      },
    },
  ],

  // icon: leader | digital | teaching · short: the label inside the Venn diagram
  strengths: [
    {
      icon: "leader",
      short: { en: "Leadership", sk: "Líderstvo", hu: "Vezetés" },
      title: { en: "Leadership", sk: "Líderstvo", hu: "Vezetés" },
      items: {
        en: ["Strategic and day-to-day school management", "Budget and resource planning", "Staff leadership and professional development", "Parent and community relations", "School documentation and internal rules"],
        sk: ["Strategické a každodenné riadenie školy", "Plánovanie rozpočtu a zdrojov", "Vedenie a profesijný rozvoj zamestnancov", "Spolupráca s rodičmi a komunitou", "Školská dokumentácia a vnútorné predpisy"],
        hu: ["Stratégiai és napi iskolairányítás", "Költségvetés- és erőforrás-tervezés", "A tantestület vezetése és szakmai fejlesztése", "Kapcsolattartás a szülőkkel és a közösséggel", "Iskolai dokumentáció és belső szabályzatok"],
      },
    },
    {
      icon: "digital",
      short: { en: "Digitalisation", sk: "Digitalizácia", hu: "Digitalizáció" },
      title: { en: "Digitalisation of education", sk: "Digitalizácia vzdelávania", hu: "Az oktatás digitalizációja" },
      items: {
        en: ["Digital transformation of schools", "E-learning platforms", "School IT systems and networks (CCNA)", "Digital-skills training for teachers"],
        sk: ["Digitálna transformácia školy", "E-learningové platformy", "Školské IT systémy a siete (CCNA)", "Školenia digitálnych zručností pre učiteľov"],
        hu: ["Az iskola digitális átalakítása", "E-learning platformok", "Iskolai informatikai rendszerek és hálózatok (CCNA)", "Digitáliskészség-képzés pedagógusoknak"],
      },
    },
    {
      icon: "teaching",
      short: { en: "Teaching", sk: "Pedagogika", hu: "Pedagógia" },
      title: { en: "Teaching", sk: "Pedagogika", hu: "Pedagógia" },
      items: {
        en: ["English language teaching", "Informatics, programming and algorithms", "Curriculum and learning-material design", "Assessment and individual feedback"],
        sk: ["Výučba anglického jazyka", "Informatika, programovanie a algoritmy", "Tvorba vzdelávacích programov a materiálov", "Hodnotenie a individuálna spätná väzba"],
        hu: ["Angolnyelv-oktatás", "Informatika, programozás és algoritmusok", "Tanterv- és tananyagfejlesztés", "Értékelés és egyéni visszajelzés"],
      },
    },
  ],

  education: [
    {
      title: {
        en: "Master's degree (Mgr.), Teaching Informatics and English",
        sk: "Magisterské štúdium (Mgr.), učiteľstvo informatiky a anglického jazyka",
        hu: "Mesterképzés (Mgr.), informatika–angol tanári szak",
      },
      org: { en: "Constantine the Philosopher University in Nitra", sk: "Univerzita Konštantína Filozofa v Nitre", hu: "Nyitrai Konstantin Filozófus Egyetem" },
      start: "2010",
      end: "2012",
    },
    {
      title: {
        en: "Bachelor's degree (Bc.), Teaching Informatics and English",
        sk: "Bakalárske štúdium (Bc.), učiteľstvo informatiky a anglického jazyka",
        hu: "Alapképzés (Bc.), informatika–angol tanári szak",
      },
      org: { en: "Constantine the Philosopher University in Nitra", sk: "Univerzita Konštantína Filozofa v Nitre", hu: "Nyitrai Konstantin Filozófus Egyetem" },
      start: "2007",
      end: "2010",
    },
  ],

  qualifications: [
    {
      title: { en: "Second attestation for teaching staff", sk: "Druhá atestácia pedagogického zamestnanca", hu: "Második pedagógus-atesztáció" },
      org: { en: "NIVAM, National Institute for Education and Youth", sk: "NIVAM, Národný inštitút vzdelávania a mládeže", hu: "NIVAM, Nemzeti Oktatási és Ifjúsági Intézet" },
      year: "2025",
    },
    {
      title: {
        en: "Transforming education and schools for the digital age",
        sk: "Transformácia vzdelávania a školy pre digitálnu dobu",
        hu: "Az oktatás és az iskola átalakítása a digitális korban",
      },
      org: { en: "Pavol Jozef Šafárik University in Košice", sk: "Univerzita Pavla Jozefa Šafárika v Košiciach", hu: "Kassai Pavol Jozef Šafárik Egyetem" },
      year: "2021",
    },
    {
      title: { en: "First attestation for teaching staff", sk: "Prvá atestácia pedagogického zamestnanca", hu: "Első pedagógus-atesztáció" },
      org: { en: "NIVAM, National Institute for Education and Youth", sk: "NIVAM, Národný inštitút vzdelávania a mládeže", hu: "NIVAM, Nemzeti Oktatási és Ifjúsági Intézet" },
      year: "2019",
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      org: { en: "Fiľakovo Grammar School", sk: "Gymnázium Fiľakovo", hu: "Füleki Gimnázium" },
      year: "2006",
    },
  ],

  languages: [
    { code: "HU", name: { en: "Hungarian", sk: "Maďarčina", hu: "Magyar" }, level: { en: "Native", sk: "Materinský jazyk", hu: "Anyanyelv" }, percent: 100 },
    { code: "SK", name: { en: "Slovak", sk: "Slovenčina", hu: "Szlovák" }, level: { en: "C1 · Proficient", sk: "C1 · Skúsený používateľ", hu: "C1 · Felsőfok" }, percent: 88 },
    { code: "EN", name: { en: "English", sk: "Angličtina", hu: "Angol" }, level: { en: "C1 · Proficient", sk: "C1 · Skúsený používateľ", hu: "C1 · Felsőfok" }, percent: 88 },
  ],

  contact: {
    text: {
      en: "Interested in working together or want to know more? Email is the best way to reach me.",
      sk: "Máte záujem o spoluprácu alebo viac informácií? Najlepšie ma zastihnete e-mailom.",
      hu: "Együttműködésről vagy további részletekről érdeklődne? E-mailben érhet el a legkönnyebben.",
    },
  },
};
