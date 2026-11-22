/* ==========================================================================
   CV DATA: edit this file to make the CV yours.
   --------------------------------------------------------------------------
   • Every piece of text on the page comes from this file.
   • Text can be a plain string ("Hello") or a translation object
     ({ en: "Hello", hu: "Szia" }). Plain strings are used for every language.
   • Dates are "YYYY-MM" or "YYYY". Use "present" for your current role.
   • Skill filter: the `tags` on experience and projects are matched to skill
     names (case-insensitive), so clicking "React" highlights everything
     tagged "React". For translated skill names, match on the English name.
   • The content below is SAMPLE content. Replace it with your own and set
     `meta.sampleContent` to false to hide the reminder banner.
   ========================================================================== */

window.CV_DATA = {
  meta: {
    languages: ["en", "hu"], // first entry is the fallback; remove "hu" for English only
    defaultLang: "en",
    sampleContent: true, // set to false once the content below is yours
    lastUpdated: "2026-11",
  },

  profile: {
    firstName: "Csaba",
    lastName: "Fazekas",
    photo: "", // e.g. "assets/photo.jpg"; leave empty to show your initials
    title: { en: "Full-Stack Software Engineer", hu: "Full-stack szoftvermérnök" },
    roles: {
      en: ["Full-stack developer", "TypeScript enthusiast", "Cloud & DevOps tinkerer", "Problem solver"],
      hu: ["Full-stack fejlesztő", "TypeScript-rajongó", "Felhő és DevOps megszállott", "Problémamegoldó"],
    },
    availability: { en: "Open to new opportunities", hu: "Nyitott vagyok új lehetőségekre" },
    location: { en: "Budapest, Hungary", hu: "Budapest, Magyarország" },
    email: "hello@example.com",
    phone: "+36 30 123 4567",
    website: "",
    // type: github | linkedin | globe | mail | link
    socials: [
      { type: "github", label: "GitHub", url: "https://github.com/csabafazekas" },
      { type: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" },
    ],
  },

  about: {
    summary: {
      en: [
        "I'm a software engineer who enjoys turning messy, real-world problems into simple, reliable products. Over the past years I've built web applications end to end, from database design and APIs to polished, accessible interfaces.",
        "I care about clean code, fast feedback loops and teams where people learn from each other. Outside of work I contribute to open source, mentor junior developers and spend as much time outdoors as I can.",
      ],
      hu: [
        "Szoftvermérnök vagyok, aki szereti a kusza, valós problémákat egyszerű és megbízható termékekké alakítani. Az elmúlt években teljes webalkalmazásokat építettem, az adatbázis-tervezéstől és az API-któl egészen az igényes, akadálymentes felületekig.",
        "Fontos számomra a tiszta kód, a gyors visszajelzés és az olyan csapat, ahol egymástól tanulunk. Munkán kívül nyílt forráskódú projektekben veszek részt, junior fejlesztőket mentorálok, és amennyit csak lehet, a szabadban töltök.",
      ],
    },
    // auto: "years" | "skills" | "projects" | "languages" are calculated for you
    stats: [
      { auto: "years", suffix: "+", label: { en: "Years of experience", hu: "Év tapasztalat" } },
      { value: 30, suffix: "+", label: { en: "Projects delivered", hu: "Átadott projekt" } },
      { auto: "skills", label: { en: "Core technologies", hu: "Fő technológia" } },
      { auto: "languages", label: { en: "Languages spoken", hu: "Beszélt nyelv" } },
    ],
  },

  experience: [
    {
      role: { en: "Senior Software Engineer", hu: "Senior szoftvermérnök" },
      company: "Northwind Digital",
      url: "",
      location: { en: "Budapest · Hybrid", hu: "Budapest · Hibrid" },
      type: { en: "Full-time", hu: "Teljes munkaidő" },
      start: "2022-03",
      end: "present",
      summary: {
        en: "Leading development of a B2B analytics platform used by more than 200 companies.",
        hu: "Egy több mint 200 vállalat által használt B2B analitikai platform fejlesztésének vezetése.",
      },
      highlights: {
        en: [
          "Led a team of five engineers in re-architecting the reporting engine, cutting average page load time by 60%.",
          "Introduced end-to-end testing and preview deployments, reducing production incidents by 40%.",
          "Designed a multi-tenant PostgreSQL schema and GraphQL API serving over 2 million requests a day.",
          "Mentored four junior developers, two of whom were promoted within a year.",
        ],
        hu: [
          "Ötfős fejlesztőcsapatot vezettem a riportmotor újratervezésében, amivel 60%-kal csökkent az átlagos oldalbetöltési idő.",
          "Bevezettem az end-to-end tesztelést és az előnézeti telepítéseket, így 40%-kal kevesebb éles hiba történt.",
          "Megterveztem egy több bérlős PostgreSQL-sémát és GraphQL API-t, amely naponta több mint 2 millió kérést szolgál ki.",
          "Négy junior fejlesztőt mentoráltam, közülük ketten egy éven belül előléptek.",
        ],
      },
      tags: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "REST & GraphQL", "AWS", "CI/CD", "System design", "Mentoring"],
    },
    {
      role: { en: "Software Engineer", hu: "Szoftvermérnök" },
      company: "Brightlane Software",
      url: "",
      location: "Budapest",
      type: { en: "Full-time", hu: "Teljes munkaidő" },
      start: "2019-06",
      end: "2022-02",
      summary: {
        en: "Built customer-facing booking and payment features for a travel-tech SaaS product.",
        hu: "Ügyfeleknek szóló foglalási és fizetési funkciókat fejlesztettem egy utazási SaaS termékhez.",
      },
      highlights: {
        en: [
          "Shipped a new React booking flow that raised conversion by 18%.",
          "Built Python microservices for payments and invoicing, containerised with Docker.",
          "Migrated legacy deployments to AWS with Terraform, halving infrastructure costs.",
        ],
        hu: [
          "Új, React-alapú foglalási folyamatot szállítottam, amely 18%-kal növelte a konverziót.",
          "Python mikroszolgáltatásokat építettem a fizetésekhez és a számlázáshoz, Dockerrel konténerizálva.",
          "A régi telepítéseket Terraformmal AWS-re migráltam, ezzel megfeleztük az infrastruktúra költségeit.",
        ],
      },
      tags: ["React", "TypeScript", "Python", "PostgreSQL", "Docker", "AWS", "Terraform", "Testing", "Agile / Scrum"],
    },
    {
      role: { en: "Junior Web Developer", hu: "Junior webfejlesztő" },
      company: "Pixelcraft Studio",
      url: "",
      location: "Debrecen",
      type: { en: "Full-time", hu: "Teljes munkaidő" },
      start: "2017-09",
      end: "2019-05",
      summary: {
        en: "Developed websites and web apps for agency clients in retail, hospitality and education.",
        hu: "Weboldalakat és webalkalmazásokat fejlesztettem ügynökségi ügyfeleknek a kiskereskedelem, a vendéglátás és az oktatás területén.",
      },
      highlights: {
        en: [
          "Delivered 15+ responsive websites with a focus on performance and accessibility.",
          "Built a reusable component library that cut new-project setup from days to hours.",
          "Worked directly with clients to gather requirements and present solutions.",
        ],
        hu: [
          "Több mint 15 reszponzív weboldalt adtam át, kiemelt figyelmet fordítva a teljesítményre és az akadálymentességre.",
          "Újrahasznosítható komponenskönyvtárat építettem, amellyel napokról órákra csökkent az új projektek előkészítése.",
          "Közvetlenül az ügyfelekkel dolgoztam az igények felmérésén és a megoldások bemutatásán.",
        ],
      },
      tags: ["CSS & Tailwind", "React", "TypeScript", "Node.js", "Agile / Scrum"],
    },
  ],

  // level: 1 Beginner · 2 Elementary · 3 Intermediate · 4 Advanced · 5 Expert
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "TypeScript", level: 5 },
        { name: "React", level: 5 },
        { name: "Next.js", level: 4 },
        { name: "CSS & Tailwind", level: 4 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 5 },
        { name: "Python", level: 4 },
        { name: "PostgreSQL", level: 4 },
        { name: "REST & GraphQL", level: 4 },
      ],
    },
    {
      category: { en: "Cloud & DevOps", hu: "Felhő és DevOps" },
      items: [
        { name: "Docker", level: 4 },
        { name: "CI/CD", level: 4 },
        { name: "AWS", level: 3 },
        { name: "Terraform", level: 3 },
      ],
    },
    {
      category: { en: "Ways of working", hu: "Munkamódszerek" },
      items: [
        { name: { en: "Testing", hu: "Tesztelés" }, level: 4 },
        { name: { en: "System design", hu: "Rendszertervezés" }, level: 4 },
        { name: "Agile / Scrum", level: 4 },
        { name: { en: "Mentoring", hu: "Mentorálás" }, level: 4 },
      ],
    },
  ],

  projectCategories: [
    { id: "web", label: { en: "Web apps", hu: "Webalkalmazások" } },
    { id: "backend", label: { en: "APIs & backend", hu: "API-k és backend" } },
    { id: "devops", label: "DevOps" },
    { id: "oss", label: { en: "Open source", hu: "Nyílt forráskód" } },
  ],

  projects: [
    {
      title: { en: "Realtime analytics dashboard", hu: "Valós idejű analitikai irányítópult" },
      category: "web",
      year: 2025,
      description: {
        en: "Interactive dashboard that streams business KPIs to operations teams with sub-second updates.",
        hu: "Interaktív irányítópult, amely másodperc alatti frissítéssel juttatja el az üzleti mutatókat az operatív csapatokhoz.",
      },
      details: {
        en: "Operations teams needed to react to changes within minutes, not days. Events stream in over WebSockets, are aggregated in PostgreSQL and rendered as thousands of smoothly updating data points in the browser.",
        hu: "Az operatív csapatoknak percek, nem napok alatt kellett reagálniuk a változásokra. Az események WebSocketen érkeznek, PostgreSQL-ben aggregálódnak, majd több ezer, folyamatosan frissülő adatpontként jelennek meg a böngészőben.",
      },
      highlights: {
        en: ["Processes 5,000 events per second with sub-second latency", "Drag-and-drop widgets and saved layouts", "Role-based access control and audit logging"],
        hu: ["Másodpercenként 5000 eseményt dolgoz fel, másodperc alatti késleltetéssel", "Húzd-és-ejtsd widgetek és menthető elrendezések", "Szerepköralapú jogosultságkezelés és naplózás"],
      },
      tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      links: { demo: "", source: "" },
    },
    {
      title: { en: "Booking platform API", hu: "Foglalási platform API" },
      category: "backend",
      year: 2023,
      description: {
        en: "Scalable REST and GraphQL API powering bookings, payments and invoicing for a travel product.",
        hu: "Skálázható REST és GraphQL API, amely egy utazási termék foglalásait, fizetéseit és számlázását szolgálja ki.",
      },
      details: {
        en: "Designed as a set of small Python services behind a single gateway, with a strong focus on correctness: idempotent payment flows, contract tests between services and zero-downtime database migrations.",
        hu: "Kis Python-szolgáltatások egyetlen gateway mögött, a helyességre fókuszálva: idempotens fizetési folyamatok, szerződéstesztek a szolgáltatások között és leállás nélküli adatbázis-migrációk.",
      },
      highlights: {
        en: ["99.95% uptime over two years", "Contract tests catch breaking changes before release", "Automated invoicing in three currencies"],
        hu: ["99,95%-os rendelkezésre állás két év alatt", "A szerződéstesztek még kiadás előtt jelzik a kompatibilitástörő változásokat", "Automatikus számlázás három pénznemben"],
      },
      tags: ["Python", "PostgreSQL", "Docker", "REST & GraphQL", "Testing"],
      links: { demo: "", source: "" },
    },
    {
      title: { en: "Infrastructure starter kit", hu: "Infrastruktúra-kezdőcsomag" },
      category: "devops",
      year: 2024,
      description: {
        en: "Reusable Terraform modules and CI/CD pipelines that launch a production-ready AWS environment in under an hour.",
        hu: "Újrahasznosítható Terraform-modulok és CI/CD folyamatok, amelyekkel egy óra alatt elindítható egy éles üzemre kész AWS-környezet.",
      },
      details: {
        en: "Born from setting up the same infrastructure over and over. The kit bundles networking, container hosting, databases, monitoring and secure defaults, so every new project starts from a solid baseline.",
        hu: "Abból született, hogy újra és újra ugyanazt az infrastruktúrát kellett felépíteni. A csomag tartalmazza a hálózatot, a konténerfuttatást, az adatbázisokat, a monitorozást és a biztonságos alapbeállításokat, így minden új projekt stabil alapról indul.",
      },
      highlights: {
        en: ["Used to bootstrap 12 internal projects", "Security best practices enabled by default", "Preview environment for every pull request"],
        hu: ["12 belső projekt indult vele", "Alapértelmezetten bekapcsolt biztonsági ajánlások", "Előnézeti környezet minden pull requesthez"],
      },
      tags: ["Terraform", "AWS", "CI/CD", "Docker"],
      links: { demo: "", source: "" },
    },
    {
      title: "devflow CLI",
      category: "oss",
      year: 2024,
      description: {
        en: "Open-source command-line tool that automates repetitive Git and release chores for developers.",
        hu: "Nyílt forráskódú parancssori eszköz, amely automatizálja a fejlesztők ismétlődő Git- és kiadási feladatait.",
      },
      details: {
        en: "A small side project that grew a community: devflow scaffolds branches, writes changelogs from commit history and publishes releases with a single command.",
        hu: "Egy kis hobbiprojekt, amely köré közösség épült: a devflow egyetlen paranccsal létrehozza az ágakat, a commitokból changelogot ír, és kiadást publikál.",
      },
      highlights: {
        en: ["1,200+ stars on GitHub", "30+ contributors from around the world", "95% test coverage"],
        hu: ["Több mint 1200 csillag a GitHubon", "Több mint 30 közreműködő a világ minden tájáról", "95%-os tesztlefedettség"],
      },
      tags: ["Node.js", "TypeScript", "CI/CD", "Testing"],
      links: { demo: "", source: "https://github.com/csabafazekas" },
    },
    {
      title: { en: "Personal finance tracker", hu: "Személyes pénzügyi nyilvántartó" },
      category: "web",
      year: 2022,
      description: {
        en: "A privacy-friendly budgeting app with smart categorisation and monthly insights.",
        hu: "Adatvédelmet tisztelő költségvetés-tervező alkalmazás okos kategorizálással és havi kimutatásokkal.",
      },
      details: {
        en: "Built to scratch my own itch. Transactions are imported from bank exports, categorised automatically and summarised in clear monthly reports.",
        hu: "Saját igényre készült. A tranzakciók banki exportból töltődnek be, automatikusan kategorizálódnak, és áttekinthető havi riportokban jelennek meg.",
      },
      highlights: {
        en: ["Server-rendered with Next.js for fast first loads", "Accessible, keyboard-friendly interface", "Works offline as a progressive web app"],
        hu: ["Next.js szerveroldali renderelés a gyors betöltésért", "Akadálymentes, billentyűzettel is kényelmes felület", "Progresszív webalkalmazásként offline is működik"],
      },
      tags: ["Next.js", "TypeScript", "CSS & Tailwind", "PostgreSQL"],
      links: { demo: "", source: "" },
    },
    {
      title: { en: "UI component library", hu: "UI-komponenskönyvtár" },
      category: "oss",
      year: 2019,
      description: {
        en: "Accessible React component library with design tokens, used across a dozen client projects.",
        hu: "Akadálymentes React-komponenskönyvtár design tokenekkel, egy tucat ügyfélprojektben használva.",
      },
      details: {
        en: "Started at the agency to stop rebuilding the same buttons and forms. Every component is documented, themeable and tested for keyboard and screen-reader support.",
        hu: "Az ügynökségnél indult, hogy ne kelljen mindig újraépíteni ugyanazokat a gombokat és űrlapokat. Minden komponens dokumentált, témázható, és billentyűzetes, illetve képernyőolvasós használatra is tesztelt.",
      },
      highlights: {
        en: ["40+ documented components", "WCAG 2.1 AA compliant", "Themeable through design tokens"],
        hu: ["Több mint 40 dokumentált komponens", "WCAG 2.1 AA megfelelőség", "Design tokenekkel témázható"],
      },
      tags: ["React", "TypeScript", "CSS & Tailwind", "Testing"],
      links: { demo: "", source: "" },
    },
  ],

  education: [
    {
      degree: { en: "MSc in Computer Science", hu: "Mérnökinformatikus MSc" },
      school: { en: "University of Technology", hu: "Műszaki Egyetem" },
      start: "2015",
      end: "2017",
      details: {
        en: "Thesis on distributed caching strategies for web applications.",
        hu: "Diplomamunka: elosztott gyorsítótárazási stratégiák webalkalmazásokhoz.",
      },
    },
    {
      degree: { en: "BSc in Computer Science", hu: "Programtervező informatikus BSc" },
      school: { en: "University of Technology", hu: "Műszaki Egyetem" },
      start: "2012",
      end: "2015",
      details: {
        en: "Specialised in software engineering and databases.",
        hu: "Szoftverfejlesztés és adatbázisok szakirány.",
      },
    },
  ],

  certifications: [
    { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", year: "2023", url: "" },
    { name: "Professional Scrum Master I", issuer: "Scrum.org", year: "2021", url: "" },
    { name: { en: "Advanced React Patterns", hu: "Haladó React-minták" }, issuer: { en: "Online course", hu: "Online kurzus" }, year: "2020", url: "" },
  ],

  languages: [
    { name: { en: "Hungarian", hu: "Magyar" }, level: { en: "Native", hu: "Anyanyelv" }, percent: 100 },
    { name: { en: "English", hu: "Angol" }, level: { en: "Professional (C1)", hu: "Tárgyalóképes (C1)" }, percent: 85 },
    { name: { en: "German", hu: "Német" }, level: { en: "Intermediate (B1)", hu: "Középfok (B1)" }, percent: 50 },
  ],

  interests: {
    en: ["Open source", "Hiking", "Photography", "Chess", "Cooking", "Cycling"],
    hu: ["Nyílt forráskód", "Túrázás", "Fotózás", "Sakk", "Főzés", "Kerékpározás"],
  },

  contact: {
    text: {
      en: "Have a role, a project or just an idea in mind? I'd love to hear about it. Email is the quickest way to reach me.",
      hu: "Van egy állásajánlatod, projekted vagy csak egy ötleted? Szívesen meghallgatom. E-mailben érsz el a leggyorsabban.",
    },
  },
};
