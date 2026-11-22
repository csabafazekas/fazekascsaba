/* ==========================================================================
   CV DATA: edit this file to update the CV.
   --------------------------------------------------------------------------
   • Every piece of text on the page comes from this file.
   • Text can be a plain string (used for every language) or a translation
     object: { en: "...", sk: "...", hu: "..." }.
   • Dates are "YYYY-MM" or "YYYY". Use "present" for the current role.
   • In summaries, {years} is replaced with your years in education,
     calculated from the earliest role below.
   • The three pillars (digital · teaching · leadership) set the colours of
     the strengths diagram and the career-path chart. Each role's `area`
     must be one of the `id`s in `strengths`.
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
        "I bring together teaching, technology and leadership: I lead and motivate colleagues as they bring new methods and tools into the classroom. I work fluently in Hungarian, Slovak and English.",
      ],
      sk: [
        "Som pedagóg z Fiľakova a za sebou mám viac ako {years} rokov praxe vo vyučovaní informatiky a anglického jazyka na základnej aj strednej škole. Ako školský digitálny koordinátor mám skúsenosti so zavádzaním digitálnych nástrojov, správou školských IT systémov a so školením učiteľov.",
        "Spájam pedagogiku, technológie a líderstvo: vediem a motivujem kolegov pri zavádzaní nových metód a nástrojov do výučby. Plynule pracujem po maďarsky, slovensky aj anglicky.",
      ],
      hu: [
        "Füleki pedagógus vagyok, több mint {years} év tapasztalattal az informatika és az angol nyelv tanításában alap- és középiskolában. Iskolai digitális koordinátorként digitális eszközöket vezettem be, iskolai informatikai rendszereket kezeltem, és pedagógusokat képeztem.",
        "A pedagógiát, a technológiát és a vezetést kapcsolom össze: vezetem és motiválom a kollégákat az új módszerek és eszközök bevezetésében. Magyarul, szlovákul és angolul is magabiztosan dolgozom.",
      ],
    },
  },

  // The four key facts shown around the monogram card. auto: "years" is calculated for you.
  // icon: clock | digital | leader | languages | cap | star
  highlights: [
    { icon: "clock", auto: "years", suffix: "+", label: { en: "years in education", sk: "rokov v školstve", hu: "év az oktatásban" } },
    {
      icon: "digital",
      value: { en: "Digital coordinator", sk: "Digitálny koordinátor", hu: "Digitális koordinátor" },
      label: "2021 – 2024",
    },
    {
      icon: "leader",
      value: { en: "Leadership", sk: "Líderstvo", hu: "Vezetés" },
      label: { en: "leading a teaching team since 2024", sk: "vedenie pedagogického tímu od 2024", hu: "tantestület vezetése 2024 óta" },
    },
    {
      icon: "languages",
      value: "3",
      label: { en: "working languages (HU · SK · EN)", sk: "pracovné jazyky (HU · SK · EN)", hu: "munkanyelv (HU · SK · EN)" },
    },
  ],

  // The three pillars, in display order. id is used by experience[].area.
  // short: the label inside the diagram and the chart legend.
  strengths: [
    {
      id: "digital",
      icon: "digital",
      short: { en: "Digitalisation", sk: "Digitalizácia", hu: "Digitalizáció" },
      title: { en: "Digitalisation of education", sk: "Digitalizácia vzdelávania", hu: "Az oktatás digitalizációja" },
      items: {
        en: ["Digital transformation of schools", "Digital tools for teaching and administration", "E-learning platforms", "School IT systems and networks (CCNA)", "Digital-skills training for teachers and pupils"],
        sk: ["Digitálna transformácia školy", "Digitálne nástroje vo výučbe a administratíve", "E-learningové platformy", "Školské IT systémy a siete (CCNA)", "Školenia digitálnych zručností pre učiteľov a žiakov"],
        hu: ["Az iskola digitális átalakítása", "Digitális eszközök a tanításban és az adminisztrációban", "E-learning platformok", "Iskolai informatikai rendszerek és hálózatok (CCNA)", "Digitáliskészség-képzés pedagógusoknak és diákoknak"],
      },
    },
    {
      id: "teaching",
      icon: "teaching",
      short: { en: "Teaching", sk: "Pedagogika", hu: "Pedagógia" },
      title: { en: "Teaching", sk: "Pedagogika", hu: "Pedagógia" },
      items: {
        en: ["Informatics: programming and algorithms", "English at different proficiency levels", "Curricula and online learning materials", "Assessment and individual feedback", "Innovative teaching methods"],
        sk: ["Informatika: programovanie a algoritmy", "Anglický jazyk na rôznych úrovniach", "Tvorba učebných plánov a online materiálov", "Hodnotenie a individuálna spätná väzba", "Inovatívne metódy výučby"],
        hu: ["Informatika: programozás és algoritmusok", "Angol nyelv különböző szinteken", "Tantervek és online tananyagok", "Értékelés és egyéni visszajelzés", "Innovatív tanítási módszerek"],
      },
    },
    {
      id: "leadership",
      icon: "leader",
      short: { en: "Leadership", sk: "Líderstvo", hu: "Vezetés" },
      title: { en: "Leadership", sk: "Líderstvo", hu: "Vezetés" },
      items: {
        en: ["Leading and motivating a team", "Teacher training and professional development", "Introducing change and innovation", "Coordinating projects and events", "Working with parents and the community"],
        sk: ["Vedenie a motivácia tímu", "Profesijný rozvoj a školenia učiteľov", "Zavádzanie zmien a inovácií", "Koordinácia projektov a podujatí", "Spolupráca s rodičmi a komunitou"],
        hu: ["Csapatvezetés és motiválás", "Pedagógusok képzése és szakmai fejlődése", "Változások és innovációk bevezetése", "Projektek és rendezvények koordinálása", "Együttműködés a szülőkkel és a közösséggel"],
      },
    },
  ],

  // Newest first. `short` is the label in the career-path chart; `area` is a strengths id.
  experience: [
    {
      area: "leadership",
      role: { en: "Principal", sk: "Riaditeľ základnej školy", hu: "Igazgató" },
      short: { en: "Principal", sk: "Riaditeľ školy", hu: "Igazgató" },
      org: { en: "Štefan Koháry II. Primary School", sk: "ZŠ Štefana Koháriho II. s VJM", hu: "II. Koháry István Alapiskola" },
      location: { en: "Fiľakovo", sk: "Fiľakovo", hu: "Fülek" },
      start: "2025-03",
      end: "present",
      highlights: {
        en: [
          "Lead and motivate the teaching team; organise training and professional development for teachers.",
          "Develop the school education programme and introduce innovative teaching methods.",
          "Build relationships with pupils, parents and the local community.",
        ],
        sk: [
          "Vedenie a motivácia pedagogického tímu, organizovanie školení a profesijného rozvoja učiteľov.",
          "Rozvoj školského vzdelávacieho programu a zavádzanie inovatívnych metód výučby.",
          "Budovanie vzťahov so žiakmi, rodičmi a miestnou komunitou.",
        ],
        hu: [
          "Vezetem és motiválom a tantestületet, képzéseket és szakmai továbbképzéseket szervezek a pedagógusoknak.",
          "Fejlesztem az iskolai nevelési-oktatási programot, és innovatív tanítási módszereket vezetek be.",
          "Kapcsolatot építek a diákokkal, a szülőkkel és a helyi közösséggel.",
        ],
      },
    },
    {
      area: "leadership",
      role: { en: "Deputy Principal", sk: "Zástupca riaditeľa školy", hu: "Igazgatóhelyettes" },
      short: { en: "Deputy principal", sk: "Zástupca riaditeľa", hu: "Igazgatóhelyettes" },
      org: { en: "Štefan Koháry II. Primary School", sk: "ZŠ Štefana Koháriho II. s VJM", hu: "II. Koháry István Alapiskola" },
      location: { en: "Fiľakovo", sk: "Fiľakovo", hu: "Fülek" },
      start: "2024-07",
      end: "2025-02",
      highlights: {
        en: [
          "Supported, advised and supervised the teaching staff.",
          "Coordinated school projects, events and extracurricular activities.",
        ],
        sk: [
          "Podpora, poradenstvo a supervízia pedagogického zboru.",
          "Koordinácia školských projektov, podujatí a mimoškolských aktivít.",
        ],
        hu: [
          "Támogattam, tanácsokkal segítettem és felügyeltem a tantestület munkáját.",
          "Koordináltam az iskolai projekteket, rendezvényeket és a tanórán kívüli tevékenységeket.",
        ],
      },
    },
    {
      area: "digital",
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
      area: "teaching",
      role: { en: "Informatics Teacher (secondary)", sk: "Učiteľ informatiky na SŠ", hu: "Középiskolai informatikatanár" },
      short: { en: "Informatics teacher, grammar school", sk: "Učiteľ informatiky na gymnáziu", hu: "Informatikatanár (gimnázium)" },
      org: { en: "Fiľakovo Grammar School", sk: "Gymnázium – Gimnázium Fiľakovo", hu: "Füleki Gimnázium" },
      location: { en: "Fiľakovo", sk: "Fiľakovo", hu: "Fülek" },
      start: "2015-02",
      end: "2024-08",
      highlights: {
        en: [
          "Taught informatics, including programming, algorithms and computer systems.",
          "Prepared curricula, tests and online learning materials.",
          "Gave students individual help and feedback to improve their skills.",
        ],
        sk: [
          "Vyučovanie informatiky vrátane programovania, algoritmov a práce s počítačovými systémami.",
          "Príprava učebných plánov, testov a online materiálov.",
          "Individuálna pomoc a spätná väzba na zlepšenie zručností študentov.",
        ],
        hu: [
          "Informatikát tanítottam, beleértve a programozást, az algoritmusokat és a számítógépes rendszereket.",
          "Tanterveket, teszteket és online tananyagokat készítettem.",
          "Egyéni segítséget és visszajelzést adtam a diákoknak készségeik fejlesztéséhez.",
        ],
      },
    },
    {
      area: "teaching",
      role: { en: "Teacher of English and Informatics", sk: "Učiteľ anglického jazyka a informatiky", hu: "Angol- és informatikatanár" },
      short: { en: "English & informatics teacher", sk: "Učiteľ ANJ a informatiky", hu: "Angol- és informatikatanár" },
      org: { en: "Štefan Koháry II. Primary School", sk: "ZŠ Štefana Koháriho II. s VJM", hu: "II. Koháry István Alapiskola" },
      location: { en: "Fiľakovo", sk: "Fiľakovo", hu: "Fülek" },
      start: "2012-09",
      end: "2024-06",
      highlights: {
        en: [
          "Taught English across a range of proficiency levels.",
          "Developed pupils' digital competences, including programming.",
          "Created teaching aids and materials; assessed pupils and supported their progress.",
        ],
        sk: [
          "Výučba anglického jazyka na rôznych úrovniach jazykových zručností.",
          "Rozvoj digitálnych kompetencií žiakov vrátane programovania.",
          "Tvorba učebných pomôcok a materiálov, hodnotenie a podpora napredovania žiakov.",
        ],
        hu: [
          "Angol nyelvet tanítottam különböző nyelvi szinteken.",
          "Fejlesztettem a diákok digitális kompetenciáit, a programozást is beleértve.",
          "Taneszközöket és tananyagokat készítettem, értékeltem a diákokat és támogattam a fejlődésüket.",
        ],
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
