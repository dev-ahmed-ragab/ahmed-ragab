export interface ProjectGalleryItem {
  id: string;
  src: string;
  title: {
    en: string;
    ar: string;
  };
  caption?: {
    en: string;
    ar: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  title: {
    en: string;
    ar: string;
  };
  subtitle: {
    en: string;
    ar: string;
  };
  role: {
    en: string;
    ar: string;
  };
  roleDetails?: {
    en: string[];
    ar: string[];
  };
  description: {
    en: string;
    ar: string;
  };
  metrics: {
    en: string[];
    ar: string[];
  };
  stack: string[];
  image?: string;
  category: "Full-Stack" | "Enterprise SaaS" | "Frontend & Tools" | "MERN Stack";
  links: {
    demo?: string;
    github?: string;
  };
  githubNotice?: {
    en: string;
    ar: string;
  };
  pinned: boolean;
  featuredYear: string;
  highlights: {
    en: string[];
    ar: string[];
  };
  gallery?: ProjectGalleryItem[];
  caseStudy?: {
    overview: { en: string; ar: string };
    problem: { en: string; ar: string };
    solution: { en: string; ar: string };
    architecture: { en: string[]; ar: string[] };
    outcomes?: { en: string[]; ar: string[] };
    mockupGradient?: string;
    mockupBadge?: string;
  };
}

export const projects: Project[] = [
  // ==========================================
  // 1. Iqraa Platform — Founder & Flagship SaaS (#1)
  // ==========================================
  {
    id: "iqraa",
    slug: "iqraa-ai-saas",
    title: {
      en: "Iqraa",
      ar: "Iqraa",
    },
    subtitle: {
      en: "AI-powered EdTech SaaS — 1,000+ active students",
      ar: "منصة تعليمية بالذكاء الاصطناعي — أكثر من 1,000 طالب نشط",
    },
    role: {
      en: "Technical Founder & Lead Architect",
      ar: "المؤسس التقني وكبير مهندسي المنصة",
    },
    roleDetails: {
      en: [
        "Founded and architected the entire multi-tenant system from concept to production.",
        "Engineered the proprietary IPI (Iqraa Performance Index) algorithmic talent readiness scoring engine.",
        "Built asynchronous task pipelines with NestJS BullMQ and Redis for heavy document processing.",
        "Integrated multi-provider AI agents (Claude, OpenAI, Gemini) via Vercel AI SDK.",
      ],
      ar: [
        "تأسيس وهندسة معمارية المنصة السحابية المتعددة المستأجرين من الصفر وحتى الإطلاق الإنتاجي.",
        "هندسة خوارزمية قياس جاهزية المهارات (IPI) وتوليد رادارات التقييم الأكاديمي التفاعلية متعددة المحاور.",
        "بناء مسار معالجة مهام غير متزامن بـ NestJS BullMQ و Redis لمعالجة الكتب والملفات الضخمة.",
        "دمج وكلاء الذكاء الاصطناعي (Claude, OpenAI, Gemini) بنظام هجين مستقل عبر Vercel AI SDK.",
      ],
    },
    description: {
      en: "Multi-tenant EdTech SaaS with custom AI pipelines. Built on Next.js 15, NestJS, and PostgreSQL. Serves 1,000+ students with sub-second API latency, role-based access, and async document processing via BullMQ.",
      ar: "منصة تعليمية سحابية متعددة المستأجرين مع مسارات ذكاء اصطناعي مخصصة. مبنية بـ Next.js 15 و NestJS و PostgreSQL. تخدم أكثر من 1,000 طالب باستجابة API أقل من ثانية ومعالجة مستندات غير متزامنة عبر BullMQ.",
    },
    metrics: {
      en: ["1,000+ Live Students", "Sub-second Query Latency", "Multi-Tenant Architecture"],
      ar: ["أكثر من 1,000 طالب نشط", "استجابة استعلامات أقل من ثانية", "معمارية متعددة المستأجرين"],
    },
    stack: ["Next.js 15", "React 19", "TypeScript", "NestJS", "Prisma ORM", "PostgreSQL", "Docker", "AI Agents", "Tailwind CSS"],
    category: "Enterprise SaaS",
    links: {
      demo: "https://iqraa.live",
    },
    githubNotice: {
      en: "Proprietary Commercial Startup (Codebase Private)",
      ar: "مشروع ناشئ تجاري خاص (الكود غير معلن لأسباب تنافسية)",
    },
    pinned: true,
    featuredYear: "2025 – Present",
    image: "/assets/projects/iqraa-hero-v2.jpg",
    highlights: {
      en: [
        "Architected role-based multi-tenant system with isolated dynamic subdomains.",
        "Engineered proprietary IPI scoring algorithm rendering multidimensional skill radars.",
        "Built asynchronous task pipelines with NestJS BullMQ and Redis for heavy document processing.",
        "Integrated multi-provider AI agents (Claude, OpenAI, Gemini) via Vercel AI SDK.",
      ],
      ar: [
        "بناء معمارية سحابية متعددة المستأجرين بنطاقات فرعية معزولة وحماية محكمة.",
        "هندسة خوارزمية قياس جاهزية المهارات (IPI) ورادار التقييم الأكاديمي متعدد المحاور.",
        "بناء مسار معالجة مهام غير متزامن بـ NestJS BullMQ و Redis لمعالجة الكتب والملفات.",
        "دمج وكلاء الذكاء الاصطناعي (Claude, OpenAI, Gemini) عبر Vercel AI SDK.",
      ],
    },
    gallery: [
      {
        id: "dashboard",
        src: "/assets/iqraa-dashboard-real.png",
        title: { en: "Live Student AI Dashboard", ar: "لوحة تحكم الطالب والذكاء الاصطناعي" },
        caption: {
          en: "Interactive lecture transcripts, RAG-generated quizzes, and adaptive learning recommendations.",
          ar: "تفريغ فوري للمحاضرات، اختبارات مولدة بمسارات RAG الذكية، وتوصيات أكاديمية متكيفة.",
        },
      },
      {
        id: "radar",
        src: "/assets/iqraa-activity-radar.png",
        title: { en: "Academic Activity Radar", ar: "رادار النشاط الأكاديمي والتحليلات" },
        caption: {
          en: "Real-time comprehension telemetry, study session durations, and subject mastery radar.",
          ar: "مؤشرات فورية لمستوى الفهم والاستيعاب، وتوزيع ساعات المذاكرة، ورادار إتقان المواد.",
        },
      },
      {
        id: "welcome",
        src: "/assets/iqraa-welcome-real.png",
        title: { en: "Student Gateway Portal", ar: "بوابة دخول الطلاب والمنظومة" },
        caption: {
          en: "High-security multi-tenant onboarding gateway with role-based routing (Admin, Faculty, Student).",
          ar: "بوابة سحابية متعددة المستأجرين بنظام توجيه وصلاحيات محكمة حسب الدور (أدمن، أستاذ، طالب).",
        },
      },
      {
        id: "courses",
        src: "/assets/iqraa-courses-hub.png",
        title: { en: "Course & Lecture Repository", ar: "مستودع المناهج والمحاضرات" },
        caption: {
          en: "Centralized syllabus repository with instant search and AI audio/PDF ingestion pipelines.",
          ar: "مستودع مركزي للمناهج مع بحث فوري ومعالجة آلية لملفات الصوت و PDF.",
        },
      },
      {
        id: "lecture-player",
        src: "/assets/iqraa/iqraa-lecture-player.jpg",
        title: { en: "Interactive Lecture Player", ar: "مشغل المحاضرات التفاعلي" },
        caption: {
          en: "Production course player with structured chapter sidebar, exercise banks, and lesson notes.",
          ar: "واجهة مشغل المحاضرات الفعلية مع فهرس الأبواب، بنك التمارين والأسئلة، وملاحظات الدرس.",
        },
      },
      {
        id: "iqraa-hub",
        src: "/assets/iqraa/iqraa-hub-console.jpg",
        title: { en: "Iqraa Hub — Internal Engineering Console", ar: "إقرأ هب — لوحة العمليات الهندسية" },
        caption: {
          en: "Companion internal ops console for bug triage, user feedback, release notes, and engineering blog.",
          ar: "منصة التشغيل الداخلية المصاحبة لإدارة البلاغات والأفكار، تتبع الأخطاء، ونشر المدونة التقنية.",
        },
      },
    ],
    caseStudy: {
      overview: {
        en: "Autonomous multi-tenant EdTech SaaS with custom AI agent pipelines, serving 1,000+ active students with sub-second response times.",
        ar: "منصة تعليمية ذكية متعددة المستأجرين مدمجة بوكلاء ذكاء اصطناعي، تخدم أكثر من 1,000 طالب نشط باستجابة فائقة السرعة.",
      },
      problem: {
        en: "Traditional university curricula rely on static rote tests that fail to assess practical technical capability. Simultaneously, universities struggle to provision isolated evaluation environments for individual faculties or hackathons without building expensive cloud backbones from scratch.",
        ar: "تعاني المنظومات التعليمية والجامعات من الاعتماد على اختبارات حفظ تقليدية لا تعكس مهارات حل المشكلات الفعلية أو الجاهزية العملية للطالب، بالإضافة لصعوبة توفير بيئات تقييم معزولة وخاصة بكل كلية أو هاكاثون دون الاضطرار لبناء بنية تحتية سحابية مستقلة ومكلفة.",
      },
      solution: {
        en: "Architected a multi-tenant cloud SaaS powered by Next.js 15, React 19, and NestJS backed by PostgreSQL and Prisma ORM. Implemented dynamic subdomain partitioning (tenant isolation), fine-grained CASL permissions, asynchronous BullMQ task queues, and custom RAG AI agents.",
        ar: "هندسة معمارية سحابية موحدة ومتعددة المستأجرين بـ Next.js 15 و React 19 وباك إند NestJS مع قواعد بيانات PostgreSQL و Prisma ORM. تطبيق عزل البيانات بالنطاقات الفرعية الحيوية (Dynamic Subdomains)، وحوكمة الصلاحيات بـ CASL، وطوابير معالجة غير متزامنة بـ BullMQ و Redis، وتوليد الاختبارات عبر وكلاء الذكاء الاصطناعي.",
      },
      architecture: {
        en: [
          "PostgreSQL multi-tenant schema with granular Row-Level Security per institution and course.",
          "Asynchronous AI task pipeline for heavy PDF OCR, embeddings, and similarity indexing via BullMQ & Redis.",
          "Proprietary IPI algorithm computing multidimensional talent readiness radars with temporal decay.",
          "Client-side edge caching reducing server cold-starts and delivering sub-2s query latency.",
          "Mobile-first PWA with Service Workers for offline chapter review and low-latency testing.",
        ],
        ar: [
          "قاعدة بيانات PostgreSQL متعددة المستأجرين مع عزل كامل للبيانات وسياسات أمان مشددة.",
          "مسار مهام غير متزامن لمعالجة ملفات PDF واستخراج النصوص وتوليد متجهات التشابه عبر BullMQ و Redis.",
          "خوارزمية قياس جاهزية المهارات (IPI) لحساب التقييم المركب والاضمحلال الزمني وتوليد الرادار البياني.",
          "تخزين مؤقت على شبكة الحافة (Edge Caching) يقلل وقت الاستجابة لأقل من ثانيتين.",
          "تطبيق ويب تقدمي (PWA) مع Service Workers لدعم المذاكرة دون اتصال إنترنت قوي.",
        ],
      },
      outcomes: {
        en: [
          "Scaled to 1,000+ active university students with sub-second API query latencies.",
          "Reduced exam synthesis and grading time from several days to under 10 seconds.",
          "Production deployment running with automated CI/CD and zero vendor lock-in.",
        ],
        ar: [
          "تشغيل المنصة لأكثر من 1,000 طالب جامعي نشط مع سرعة استجابة فائقة للواجهات البرمجية.",
          "تقليص وقت توليد الاختبارات وتصحيحها من أيام إلى ثوانٍ معدودة عبر محرك التقييم الذكي.",
          "إطلاق ناجح في الإنتاج على iqraa.live بخوادم متقدمة وبنية قابلة للتوسع لآلاف الطلاب.",
        ],
      },
      mockupGradient: "bg-gradient-to-br from-space-900 via-space-950 to-nebula-cyan/25",
      mockupBadge: "Production EdTech SaaS",
    },
  },

  // ==========================================
  // 2. AxpoOS — Flagship Project #2
  // ==========================================
  {
    id: "axpo-os",
    slug: "axpo-os-enterprise-cockpit",
    title: {
      en: "AxpoOS",
      ar: "AxpoOS",
    },
    subtitle: {
      en: "Enterprise cloud dashboard — 11 vertical modules",
      ar: "لوحة تحكم مؤسسية سحابية — 11 وحدة تشغيلية",
    },
    role: {
      en: "Lead Frontend Architect & Developer",
      ar: "كبير مهندسي الواجهات والمطور الرئيسي",
    },
    roleDetails: {
      en: [
        "Architected all 46 production routes using Next.js 16 (App Router) and React 19.",
        "Engineered the zero-friction Instant Recruiter Preview mode bypassing auth barriers.",
        "Built runtime dynamic theme engine supporting 4 modern design presets with zero layout shift.",
        "Integrated high-density data tables using TanStack Table v9 and live telemetry charts with Recharts.",
      ],
      ar: [
        "هندسة وبناء كافة المسارات الـ 46 الإنتاجية بأحدث معايير Next.js 16 و React 19.",
        "ابتكار ميزة المعاينة الفورية لمدراء التوظيف لتجربة النظام بضغطة زر بدون شاشات تسجيل دخول معقدة.",
        "بناء محرك سمات وتصميم ديناميكي يتيح التبديل اللحظي بين 4 تصاميم جاهزة بدون وميض للشاشة.",
        "معالجة البيانات الضخمة بجداول TanStack Table v9 فائقة السرعة ورسوم Recharts البيانية اللحظية.",
      ],
    },
    description: {
      en: "Enterprise admin cockpit consolidating CRM, logistics, finance, and infrastructure across 11 dashboards. Built with Next.js 16, React 19, TanStack Table v9, and Zustand. Features instant recruiter preview and runtime theme switching.",
      ar: "منصة إدارة مؤسسية تجمع CRM والمالية واللوجستيات ومراقبة الخوادم في 11 لوحة تحكم. مبنية بـ Next.js 16 و React 19 مع TanStack Table v9 و Zustand. تدعم معاينة فورية للريكروترز وتبديل الثيم لحظياً.",
    },
    metrics: {
      en: ["11 Vertical Dashboards", "Next.js 16 & React 19", "Instant Recruiter Preview"],
      ar: ["11 لوحة تحكم تخصصية", "أحدث معايير Next 16 و React 19", "معاينة فورية بضغطة زر"],
    },
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "shadcn/ui", "TanStack Table v9", "Recharts", "Zustand", "Biome"],
    category: "Enterprise SaaS",
    links: {
      demo: "https://axpo-os.vercel.app",
      github: "https://github.com/dev-ahmed-ragab/axpo-os",
    },
    pinned: true,
    featuredYear: "2026",
    image: "/assets/projects/axpo-os-hero.jpg",
    highlights: {
      en: [
        "Consolidated 11 vertical operational dashboards with sub-millisecond route transitions.",
        "Engineered zero-friction Instant Recruiter CTA providing immediate access to core workflows.",
        "Implemented runtime theme engine switching across 4 design presets with zero layout shift.",
        "Built with React Compiler, Biome linting, and 100% strict TypeScript typing.",
      ],
      ar: [
        "توحيد 11 لوحة تحكم تخصصية مع انتقالات سلسة وسريعة بين المسارات البرمجية.",
        "تطبيق ميزة المعاينة الفورية للريكروترز لتجربة النظام مباشرة دون حواجز تسجيل الدخول.",
        "محرك سمات ديناميكي يتيح التبديل الفوري بين 4 تصاميم مختلفة بدون وميض للشاشة.",
        "معمارية حديثة بـ React Compiler، وأدوات Biome، وأمان برمجي تام بـ TypeScript.",
      ],
    },
    gallery: [
      {
        id: "cockpit",
        src: "/assets/projects/axpo-os.svg",
        title: { en: "AxpoOS Enterprise Cockpit", ar: "لوحة تحكم وإدارة العمليات السحابية AxpoOS" },
        caption: {
          en: "Executive telemetry overview, cloud infrastructure stats, and instant recruiter preview.",
          ar: "مؤشرات العمليات المؤسسية، مراقبة البنية التحتية السحابية، ووضع المعاينة الفورية.",
        },
      },
    ],
    caseStudy: {
      overview: {
        en: "Comprehensive enterprise operating cockpit unifying telemetry across 11 vertical business sectors with instant guest access.",
        ar: "منظومة إدارية سحابية متكاملة لقطاع الشركات B2B تدمج 11 قطاعاً تشغيلياً مع إتاحة التجربة الفورية لمسؤولي التوظيف.",
      },
      problem: {
        en: "Enterprise SaaS operators face disjointed portals across CRM, accounting, and cloud monitoring, resulting in high cognitive overhead. Furthermore, 80% of hiring managers bounce from portfolio demos when confronted with long sign-up forms.",
        ar: "تعاني الشركات من تشتت موظفيها ومديريها بين عشرات الأدوات المنفصلة (المالية في برنامج، والـ CRM في أداة أخرى، وتذاكر الدعم في نظام ثالث)، بالإضافة إلى نفور مسؤولي التوظيف من المشاريع التي تطلب تعبئة استمارات تسجيل طويلة.",
      },
      solution: {
        en: "Architected a unified administrative cockpit utilizing Next.js 16 and React 19, powered by TanStack Table v9 for data virtualization and Zustand for theme and layout persistence. Built a frictionless instant recruiter onboarding button jumping straight into production telemetry.",
        ar: "بناء منصة موحدة بالاعتماد على Next.js 16 و React 19، مع توظيف TanStack Table لعرض البيانات الضخمة ومكتبة Zustand لحفظ التخصيصات، مع زر المعاينة الفورية المخصص للريكروترز.",
      },
      architecture: {
        en: [
          "Next.js 16 Turbopack architecture achieving zero build errors across 46 dynamic routes.",
          "TanStack Table v9 virtualized tables handling high-density institutional data seamlessly.",
          "Zustand state store powering dynamic runtime theme switches across 4 modern presets.",
          "Embedded productivity suite featuring native Mail client, internal Chat, and Kanban boards.",
        ],
        ar: [
          "معمارية Next.js 16 مع محرك Turbopack تجتاز البناء بنجاح كامل لجميع الـ 46 مساراً.",
          "جداول TanStack Table v9 المعالجة للبيانات الكثيفة بفرز وفلترة فائقة السرعة.",
          "إدارة حالة بـ Zustand تدعم تغيير الثيم الحي بين 4 تصاميم مختلفة بمرونة تامة.",
          "حزمة أدوات إنتاجية مدمجة تشمل بريداً داخلياً، محادثات فورية، ولوحات مهام كانبان.",
        ],
      },
      outcomes: {
        en: [
          "Zero build errors across all 46 production routes (Exit Code 0).",
          "Sub-100ms dashboard route transitions with React 19 Compiler optimizations.",
          "Zero layout shift during live runtime theme and layout preset switches.",
        ],
        ar: [
          "اجتياز أمر البناء للإنتاج بنجاح كامل لجميع الـ 46 مساراً بدون أي أخطاء نمطية.",
          "انتقالات مسارات فائقة السرعة في أقل من 100ms بفضل تحسينات React Compiler.",
          "ثبات بصري تام (Zero Layout Shift) عند التبديل اللحظي بين أنماط التصميم والخطوط.",
        ],
      },
      mockupGradient: "bg-gradient-to-br from-space-900 via-space-950 to-nebula-cyan/25",
      mockupBadge: "Enterprise Flagship OS",
    },
  },

  // ==========================================
  // 3. Traxr — Flagship Project #3
  // ==========================================
  {
    id: "traxr",
    slug: "traxr-linear-issue-tracker",
    title: {
      en: "Traxr",
      ar: "Traxr",
    },
    subtitle: {
      en: "Real-time issue tracker — Linear-inspired, offline-first",
      ar: "متتبع مهام بالوقت الفعلي — مستوحى من Linear، يعمل أوفلاين",
    },
    role: {
      en: "Full-Stack & Frontend Engineer",
      ar: "مطور برمجيات متكامل وواجهات أمامية",
    },
    roleDetails: {
      en: [
        "Architected multi-client live updates using Supabase Realtime postgres_changes channels.",
        "Engineered offline-first local snapshot using IndexedDB and optimistic Zustand stores.",
        "Built ultra-smooth drag-and-drop Kanban workflows utilizing @dnd-kit with instant persistence.",
        "Authored 174 automated database and RLS policy test assertions executed via PGlite Wasm.",
      ],
      ar: [
        "بناء مزامنة لحظية متعددة المستخدمين عبر قنوات Supabase Realtime postgres_changes.",
        "معمارية Offline-First متقدمة عبر IndexedDB وتحديثات واجهة متفائلة بـ Zustand.",
        "لوحة كانبان تفاعلية فائقة السلاسة بـ @dnd-kit مع حفظ فوري لترتيب وتصنيف المهام.",
        "كتابة واجتياز 174 اختباراً مؤتمتاً لسياسات أمان PostgreSQL RLS عبر PGlite Wasm.",
      ],
    },
    description: {
      en: "Keyboard-first issue tracker inspired by Linear. Multi-tenant PostgreSQL RLS, real-time sync via Supabase, offline-first IndexedDB caching, Kanban drag-and-drop, ⌘K command palette, and 174 automated RLS test assertions.",
      ar: "متتبع مهام بلوحة المفاتيح مستوحى من Linear. يدعم PostgreSQL RLS متعدد المستأجرين، مزامنة فورية عبر Supabase، تخزين IndexedDB للعمل أوفلاين، كانبان بالسحب والإفلات، لوحة أوامر ⌘K، و174 اختبار RLS مؤتمت.",
    },
    metrics: {
      en: ["Real-Time Sync", "174 Passing RLS Tests", "Offline-First Caching"],
      ar: ["مزامنة حية لحظية", "174 اختبار أمان RLS ناجح", "يعمل أوفلاين بدون إنترنت"],
    },
    stack: ["Next.js 15", "TypeScript", "Supabase Realtime", "PostgreSQL RLS", "Zustand", "@dnd-kit", "Tiptap v3", "PGlite", "Tailwind CSS"],
    category: "Full-Stack",
    links: {
      demo: "https://traxr.vercel.app",
      github: "https://github.com/dev-ahmed-ragab/traxr",
    },
    pinned: true,
    featuredYear: "2025",
    image: "/assets/projects/traxr.svg",
    highlights: {
      en: [
        "Architected multi-client live updates using Supabase Realtime postgres_changes channels.",
        "Engineered offline-first local snapshot using IndexedDB and optimistic Zustand stores.",
        "Built ultra-smooth drag-and-drop Kanban workflows utilizing @dnd-kit with instant persistence.",
        "Authored 174 automated database and RLS policy test assertions executed via PGlite Wasm.",
      ],
      ar: [
        "بناء مزامنة لحظية متعددة المستخدمين عبر قنوات Supabase Realtime postgres_changes.",
        "معمارية Offline-First متقدمة عبر IndexedDB وتحديثات واجهة متفائلة بـ Zustand.",
        "لوحة كانبان تفاعلية فائقة السلاسة بـ @dnd-kit مع حفظ فوري لترتيب وتصنيف المهام.",
        "كتابة واجتياز 174 اختباراً مؤتمتاً لسياسات أمان PostgreSQL RLS عبر PGlite Wasm.",
      ],
    },
    gallery: [
      {
        id: "kanban",
        src: "/assets/projects/traxr.svg",
        title: { en: "Traxr Linear-Style Kanban Cockpit", ar: "لوحة مهام الكانبان واختصارات الكيبورد" },
        caption: {
          en: "Real-time sync, ⌘K command palette, and interactive drag-and-drop status lanes.",
          ar: "مزامنة لحظية، قائمة أوامر سريعة ⌘K، وأعمدة مهام تفاعلية بالسحب والإفلات.",
        },
      },
    ],
    caseStudy: {
      overview: {
        en: "Keyboard-first, high-velocity project management platform engineered for software teams with real-time sync and offline resilience.",
        ar: "منصة تتبع وإنجاز مهام فائقة السرعة مصممة لفرق التطوير تعتمد على اختصارات الكيبورد والمزامنة اللحظية التامة.",
      },
      problem: {
        en: "Traditional issue trackers feel sluggish, introduce latency on status edits, and fail entirely when developers experience intermittent network drops.",
        ar: "تتسم أدوات إدارة المشاريع التقليدية بالبطء والتعقيد وتتوقف تماماً عن العمل عند انقطاع الاتصال بالإنترنت.",
      },
      solution: {
        en: "Built a keyboard-driven application inspired by Linear, combining local browser persistence via IndexedDB, optimistic UI updates, and Supabase postgres_changes for zero-latency multi-user sync.",
        ar: "تطوير أداة سريعة بنمط Linear تدمج التخزين المحلي بـ IndexedDB مع التحديثات المتفائلة وقنوات Supabase لتحديث الشاشات لحظياً.",
      },
      architecture: {
        en: [
          "Supabase postgres_changes channels delivering sub-50ms multi-client state propagation.",
          "IndexedDB local cache enabling instant cold startup and full offline editing capabilities.",
          "Rich Tiptap v3 markdown editor with code block syntax highlighting and mentions.",
          "174 automated database assertions verifying multi-tenant RLS isolation using PGlite.",
        ],
        ar: [
          "قنوات Supabase postgres_changes تنقل تحديثات الحالة بين أعضاء الفريق في أجزاء من الثانية.",
          "تخزين IndexedDB محلي يتيح فتح التطبيق فورياً ومواصلة العمل حتى بدون شبكة.",
          "محرر نصوص متقدم بـ Tiptap v3 يدعم كتل الأكواد البرمجية وتنسيقات المارك داون.",
          "174 اختبار قاعدة بيانات مؤتمت للتحقق من عزل الصلاحيات وحماية البيانات بـ PGlite.",
        ],
      },
      outcomes: {
        en: [
          "Sub-50ms optimistic UI updates across all issue state mutations.",
          "100% offline functionality enabling developers to create, edit, and organize issues disconnected.",
          "174 passing automated RLS and database security assertions.",
        ],
        ar: [
          "تحديثات واجهة متفائلة فورية في أقل من 50ms عند تعديل أي تذكرة برمجية.",
          "عمل كامل بدون إنترنت بنسبة 100% مع مزامنة ذاتية فور عودة الاتصال.",
          "اجتياز 174 اختبار أمان RLS وقواعد بيانات لضمان حماية بيانات الفرق تماماً.",
        ],
      },
      mockupGradient: "bg-gradient-to-br from-space-900 via-space-950 to-nebula-violet/25",
      mockupBadge: "High-Velocity Issue Tracker",
    },
  },

  // ==========================================
  // 4. RoyalMed — Medical Academy Platform (#4)
  // ==========================================
  {
    id: "royalmed",
    slug: "royalmed-medical-platform",
    title: {
      en: "RoyalMed",
      ar: "RoyalMed",
    },
    subtitle: {
      en: "Medical e-learning platform with DRM video & clinical exams",
      ar: "منصة تعليمية طبية — فيديو محمي وامتحانات إكلينيكية",
    },
    role: {
      en: "Software Engineer / Technical Collaborator",
      ar: "مطور برمجيات ومهندس تقني متعاون",
    },
    roleDetails: {
      en: [
        "Built the interactive clinical examination engine with timed rubrics and automated grading.",
        "Overhauled website loading speeds by up to 40% through asset compression and lazy loading.",
        "Integrated anti-piracy video streaming pipelines using Bunny Stream API.",
        "Engineered dual-role dashboards (Admin and Student) for managing lectures and 10,000+ QBank entries.",
      ],
      ar: [
        "بناء وتطوير محرك الامتحانات الإكلينيكية التفاعلي بمؤقت زمني وتحليل فوري لنتائج الطلاب.",
        "إعادة هيكلة تحميل الموارد واستراتيجيات التخزين الكاش مما رفع سرعة التصفح بنسبة 40%.",
        "دمج مشغل فيديو محمي من القرصنة لمنع سرقة المحاضرات عبر Bunny Stream API.",
        "تطوير لوحات تحكم مزدوجة للطلاب والإدارة مع فهرسة دقيقة لأكثر من 10 آلاف سؤال بنك.",
      ],
    },
    description: {
      en: "Medical e-learning platform for college students. Built the timed clinical exam engine with instant grading, improved page load speed by 40%, and integrated DRM-protected video streaming via Bunny Stream.",
      ar: "منصة تعليمية طبية لطلاب الكليات. بنيت محرك الامتحانات الإكلينيكية بمؤقت زمني وتصحيح فوري، حسّنت سرعة التحميل بنسبة 40%، ودمجت بث فيديو محمي عبر Bunny Stream.",
    },
    metrics: {
      en: ["+40% Page Load Speed", "500+ Lectures & 10k QBank", "Timed Clinical Exams"],
      ar: ["تحسين سرعة التحميل بـ 40%", "أكثر من 500 محاضرة و10 آلاف سؤال", "امتحانات إكلينيكية بمؤقت زمني"],
    },
    stack: ["React 18", "Node.js", "Express", "MongoDB Atlas", "Redux Toolkit", "Tailwind CSS", "Bunny Stream API"],
    category: "Full-Stack",
    links: {},
    githubNotice: {
      en: "Client Academic Repository (Private Institutional Codebase)",
      ar: "مستودع خاص بالمؤسسة الأكاديمية الطبية",
    },
    pinned: false,
    featuredYear: "Late 2024 – 2025",
    image: "/assets/royalmed/hero.jpg",
    highlights: {
      en: [
        "Built interactive clinical examination engine with countdown timers and automated analytics.",
        "Overhauled web vital performance and asset delivery, boosting page load speeds by 40%.",
        "Engineered dual-role dashboards (Admin & Student) with rich question bank (QBank) indexing.",
        "Integrated anti-piracy video streaming pipelines using Bunny Stream API.",
      ],
      ar: [
        "بناء محرك الامتحانات الإكلينيكية التفاعلي بمؤقت زمني وتحليل فوري لنتائج الطلاب.",
        "تحسين مؤشرات أداء الويب (Web Vitals) وتخفيض زمن التحميل بنسبة 40%.",
        "تطوير لوحات تحكم مزدوجة للطلاب والإدارة مع فهرسة دقيقة لبنك الأسئلة (QBank).",
        "دمج مشغل فيديو محمي لمنع قرصنة المحاضرات عبر Bunny Stream API.",
      ],
    },
    gallery: [
      {
        id: "hero",
        src: "/assets/royalmed/hero.jpg",
        title: { en: "Medical Academy Portal", ar: "الواجهة الرئيسية ودليل المقررات" },
        caption: {
          en: "Official medical academic homepage offering structured curriculum for university students.",
          ar: "الواجهة الرسمية للمنصة الطبية وتقديم المناهج المنظمة لطلاب كليات الطب.",
        },
      },
      {
        id: "dashboard",
        src: "/assets/royalmed/dashboard.jpg",
        title: { en: "Faculty & Platform Overview", ar: "لوحة مؤشرات المنصة والتحليلات" },
        caption: {
          en: "Real-time statistics covering 500+ lectures, 10,000+ QBank entries, and student progress metrics.",
          ar: "إحصائيات فورية تغطي أكثر من 500 محاضرة و10 آلاف سؤال بنك وتتبع إنجاز الطلاب.",
        },
      },
      {
        id: "courses",
        src: "/assets/royalmed/courses.jpg",
        title: { en: "Clinical Course Catalog", ar: "دليل المقررات الإكلينيكية" },
        caption: {
          en: "Interactive lecture browser with dynamic subject categorization and performance tracking.",
          ar: "متصفح تفاعلي للمحاضرات مع تصنيف المواد وتتبع تقدم الطلاب بدقة.",
        },
      },
      {
        id: "auth",
        src: "/assets/royalmed/auth.jpg",
        title: { en: "Secure Student Authentication", ar: "بوابة التسجيل وحماية الحسابات" },
        caption: {
          en: "Encrypted user registration and role verification for medical learners.",
          ar: "نظام تسجيل ودخول مشفر للطلاب مع التحقق من الهوية والصلاحيات الأكاديمية.",
        },
      },
    ],
    caseStudy: {
      overview: {
        en: "Academic medical platform overhauled for 40% speed boost, high-concurrency video lecture playback, and interactive timed clinical testing.",
        ar: "منصة طبية أكاديمية تم تسريع أدائها بنسبة 40% مع تشغيل المحاضرات المحمية وامتحانات إكلينيكية بمؤقت زمني وتصحيح لحظي.",
      },
      problem: {
        en: "Medical college students encountered buffering during exam rush hours, and initial page load times exceeded 6 seconds due to unoptimized assets.",
        ar: "عانى طلاب كلية الطب من بطء التحميل وتوقف الفيديوهات أثناء فترات الامتحانات بسبب كبر حجم الموارد وتأخر استعلامات قاعدة البيانات.",
      },
      solution: {
        en: "Implemented responsive video streaming sharding, asset compression, lazy loading, and optimized MongoDB aggregation pipelines, slashing load times by 40%.",
        ar: "تطبيق تقنيات تجزئة الفيديو بـ Bunny Stream، ضغط الصور، التحميل الكسول، وتحسين استعلامات MongoDB، مما رفع سرعة التصفح بنسبة 40%.",
      },
      architecture: {
        en: [
          "Asset optimization pipeline compressing high-resolution medical anatomical diagrams.",
          "Custom timed exam engine with instantaneous question feedback and score compilation.",
          "MongoDB indexing strategy cutting read latency on student quiz results by 65%.",
          "Bunny Stream integration safeguarding proprietary faculty video intellectual property.",
        ],
        ar: [
          "مسار معالجة وضغط لصور التشريح والمخططات الطبية عالية الدقة.",
          "محرك امتحانات مخصص يقدم فيدباك فوري بعد الإجابة ويحسب التقدير العام تلقائياً.",
          "فهرسة دقيقة لقواعد بيانات MongoDB خفضت زمن استعلام نتائج الاختبارات بـ 65%.",
          "ربط Bunny Stream لحماية المحاضرات الفكرية المصورة للأطباء من القرصنة والتحميل.",
        ],
      },
      mockupGradient: "bg-gradient-to-br from-space-900 via-space-950 to-nebula-emerald/25",
      mockupBadge: "Medical Academy Platform",
    },
  },

  // ==========================================
  // 5. ProHealth — MERN Stack Healthcare Platform (#5)
  // ==========================================
  {
    id: "prohealth",
    slug: "prohealth-booking-platform",
    title: {
      en: "ProHealth",
      ar: "ProHealth",
    },
    subtitle: {
      en: "Clinic Management & Appointment System",
      ar: "منظومة إدارة العيادات وحجز المواعيد الطبية",
    },
    role: {
      en: "Full Stack Engineer (MERN)",
      ar: "مهندس برمجيات متكامل (MERN Stack)",
    },
    roleDetails: {
      en: [
        "Architected 3 separate secure dashboard portals with strict role isolation.",
        "Implemented atomic calendar slot locking preventing race conditions during simultaneous bookings.",
        "Designed strict JWT-based authentication with transactional email triggers.",
      ],
      ar: [
        "بناء 3 بوابات مستقلة للمرضى والأطباء والإدارة بنظام صلاحيات مشفر.",
        "تطبيق نظام حجز ذري يمنع تضارب أو تكرار حجز نفس الموعد لأكثر من مريض.",
        "تصميم نظام توثيق وأمان مشفر بـ JWT مع إرسال تأكيدات البريد التفاعلية.",
      ],
    },
    description: {
      en: "Medical appointment platform with 3 isolated role-based dashboards (Patient, Doctor, Admin). Atomic slot locking prevents double-booking. Includes JWT auth and transactional email notifications.",
      ar: "منصة حجز طبي بـ 3 لوحات تحكم منفصلة (مريض، طبيب، إدارة). حجز ذري يمنع التضارب، توثيق JWT، وإشعارات بريد تلقائية.",
    },
    metrics: {
      en: ["3 Role-Based Portals", "Real-Time Booking Filters", "Email Confirmation Engine"],
      ar: ["3 لوحات تحكم منفصلة", "فلترة مواعيد لحظية", "نظام تأكيد عبر البريد الإلكتروني"],
    },
    stack: ["React 18", "Node.js", "Express.js", "MongoDB Atlas", "JWT Auth", "Tailwind CSS"],
    category: "MERN Stack",
    links: {
      demo: "https://pro-health-wine.vercel.app",
      github: "https://github.com/dev-ahmed-ragab/ProHealth",
    },
    pinned: true,
    featuredYear: "2024",
    image: "/assets/projects/prohealth/home-preview.jpg",
    highlights: {
      en: [
        "Built isolated portal workflows for Patients, Doctors, and Platform Administrators.",
        "Implemented atomic calendar slot locking preventing race conditions during simultaneous bookings.",
        "Designed strict JWT-based authentication with transactional email confirmations.",
      ],
      ar: [
        "بناء مسارات عمل منفصلة ومؤمنة لكل من المرضى والأطباء ومدراء النظام.",
        "تطبيق نظام حجز ذري يمنع تضارب أو تكرار حجز نفس الموعد لأكثر من مريض.",
        "تصميم نظام توثيق وأمان مشفر بـ JWT مع إرسال تأكيدات البريد التفاعلية.",
      ],
    },
    gallery: [
      {
        id: "home",
        src: "/assets/projects/prohealth/home-preview.jpg",
        title: { en: "Healthcare Homepage & Appointment Booking", ar: "الواجهة الرئيسية وحجز المواعيد الطبية" },
        caption: {
          en: "Patient onboarding, specialty filtering, and doctor schedule selection.",
          ar: "حجز مواعيد المرضى، اختيار التخصصات الطبية، وتصفح جدول المواعيد المتاحة.",
        },
      },
      {
        id: "doctors",
        src: "/assets/projects/prohealth/doctors-preview.jpg",
        title: { en: "Doctor Directory & Dynamic Filtering", ar: "دليل الأطباء والفلترة الذكية للتخصصات" },
        caption: {
          en: "Instant multi-specialty filtering across medical consultants and clinics.",
          ar: "فلترة لحظية للأطباء حسب التخصص، التقييم، وأوقات العمل.",
        },
      },
    ],
    caseStudy: {
      overview: {
        en: "Multi-role medical appointment management platform with 3 isolated dashboards, live calendar slot booking, and transactional email confirmations.",
        ar: "منصة حجوزات طبية بـ 3 بوابات منفصلة للمرضى والأطباء والإدارة مع تأكيد فوري عبر البريد الإلكتروني.",
      },
      problem: {
        en: "Clinics experienced double-booking errors and lack of role isolation between medical staff and administrative billing teams.",
        ar: "تعرضت العيادات لتضارب في المواعيد المحجوزة وغياب الفصل الدقيق بين صلاحيات الطاقم الطبي وصلاحيات الإدارة والفوترة.",
      },
      solution: {
        en: "Architected 3 separate secure dashboard portals with atomic slot reservation locks and transactional email notifications via Nodemailer.",
        ar: "بناء 3 بوابات مستقلة مع قفل ذري للمواعيد يمنع الحجز المزدوج تماماً ونظام إشعارات بريد فورية.",
      },
      architecture: {
        en: [
          "Role-based authorization middleware protecting confidential patient records.",
          "Atomic calendar slot locking preventing race conditions during simultaneous bookings.",
          "Automated transactional email dispatch with calendar invitation attachments.",
        ],
        ar: [
          "طبقة حماية برمجية (RBAC Middleware) تفصل وتؤمن بيانات وسجلات المرضى.",
          "نظام حجز ذري يمنع حدوث تضارب أو تكرار حجز نفس الموعد لأكثر من مريض.",
          "إرسال إشعارات وتأكيدات الحجز تلقائياً عبر البريد الإلكتروني مع تفاصيل الموعد.",
        ],
      },
      mockupGradient: "bg-gradient-to-br from-space-900 via-space-950 to-nebula-amber/25",
      mockupBadge: "Healthcare System",
    },
  },

  // ==========================================
  // 6. Frenzy Blog — Modern MERN Publishing Platform (#6)
  // ==========================================
  {
    id: "frenzy-blog",
    slug: "frenzy-blog-publishing-platform",
    title: {
      en: "Frenzy Blog",
      ar: "Frenzy Blog",
    },
    subtitle: {
      en: "Full-Stack Publishing & Content Engine",
      ar: "منصة النشر والتدوين السحابية الحديثة",
    },
    role: {
      en: "Full-Stack Developer",
      ar: "مطور برمجيات متكامل (Full-Stack)",
    },
    roleDetails: {
      en: [
        "Engineered the content moderation queue for administrative review and publication approval.",
        "Implemented schema-level MongoDB compound indexes for sub-50ms article and tag lookups.",
        "Built responsive client interface with custom hooks for optimistic comment submissions.",
      ],
      ar: [
        "بناء لوحة إشراف إدارية لمراجعة وتدقيق المقالات والموافقة على نشرها.",
        "فهارس استعلام مركبة في MongoDB لتجميع واسترجاع المقالات والوسوم في أجزاء من الثانية.",
        "واجهة React تفاعلية وسريعة مع تحديثات فورية متفائلة عند التعليق والنشر.",
      ],
    },
    description: {
      en: "Developer blogging platform with rich-text editing, tag-based discovery, reading time estimates, and an admin moderation queue. MongoDB compound indexes keep article lookups under 50ms.",
      ar: "منصة تدوين للمطورين بمحرر نصوص غني، تصنيف بالوسوم، تقدير وقت القراءة، ولوحة مراجعة إدارية. فهارس MongoDB مركبة لاسترجاع المقالات في أقل من 50ms.",
    },
    metrics: { en: ["Full Admin Portal", "Fast Tag Search", "Content Moderation"], ar: ["لوحة إشراف كاملة", "بحث فوري بالوسوم", "مراجعة واعتماد المحتوى"] },
    stack: ["React 19", "Vite", "Node.js 22", "Express 4.21", "MongoDB Atlas", "Tailwind CSS"],
    category: "MERN Stack",
    links: {
      demo: "https://frenzy-blog.vercel.app",
      github: "https://github.com/dev-ahmed-ragab/frenzy-blog",
    },
    pinned: false,
    featuredYear: "2024",
    image: "/assets/projects/frenzy-blog/home-preview.png",
    highlights: {
      en: [
        "Architected content moderation queue for administrative review and publication approval.",
        "Implemented schema-level MongoDB compound indexes for sub-50ms article and tag lookups.",
        "Built responsive client interface with custom hooks for optimistic comment submissions.",
      ],
      ar: [
        "بناء لوحة إشراف إدارية لمراجعة وتدقيق المقالات والموافقة على نشرها.",
        "فهارس استعلام مركبة في MongoDB لتجميع واسترجاع المقالات والوسوم في أجزاء من الثانية.",
        "واجهة React تفاعلية وسريعة مع تحديثات فورية متفائلة عند التعليق والنشر.",
      ],
    },
    gallery: [
      {
        id: "home",
        src: "/assets/projects/frenzy-blog/home-preview.png",
        title: { en: "Articles Feed & Discovery", ar: "تغذية المقالات واستكشاف المحتوى التقني" },
        caption: {
          en: "Browse technical blogs with estimated read times, author badges, and category tabs.",
          ar: "تصفح المقالات التقنية مع وقت القراءة المقدر، وشارات الكُتّاب، وتصنيفات المقالات.",
        },
      },
      {
        id: "posts",
        src: "/assets/projects/frenzy-blog/posts-live.jpg",
        title: { en: "Live Articles & Reading View", ar: "عرض المقالات وتجربة القراءة المتجاوبة" },
        caption: {
          en: "High-contrast typography optimized for prolonged technical reading.",
          ar: "تنسيق طباعي مريح للعين مخصص لقراءة المقالات البرمجية الطويلة.",
        },
      },
      {
        id: "details",
        src: "/assets/projects/frenzy-blog/article-details-preview.png",
        title: { en: "Article Details & Discussions", ar: "تفاصيل المقال ونظام التعليقات" },
        caption: {
          en: "Full article layout with integrated comment threads and author metadata.",
          ar: "عرض المقال بالكامل مع نظام التعليقات التفاعلي ومعلومات الكاتب.",
        },
      },
      {
        id: "about",
        src: "/assets/projects/frenzy-blog/about-preview.png",
        title: { en: "Platform Mission & Author Profile", ar: "نبذة المنصة وملف الكاتب" },
        caption: {
          en: "Author bio, technology specialization, and platform milestones.",
          ar: "الملف التعريفي للكاتب، التخصصات البرمجية، ورؤية المنصة.",
        },
      },
    ],
    caseStudy: {
      overview: {
        en: "Full-Stack MERN publishing engine equipped with JWT role authorization, tag taxonomy, and an administrative moderation panel.",
        ar: "منصة تدوين متكاملة بمكدس MERN بنظام صلاحيات JWT وتصنيف للمقالات ولوحة تحكم إدارية.",
      },
      problem: {
        en: "Content authors needed a zero-friction publishing workflow with secure role moderation, instant tag indexing, and resilient image hosting.",
        ar: "احتاج صُنّاع المحتوى إلى بيئة نشر مرنة مع إدارة محكمة لصلاحيات المحررين والمشرفين وحفظ آمن للوسائط.",
      },
      solution: {
        en: "Engineered a decoupled REST API with Express.js & MongoDB, utilizing schema indexing for sub-50ms article search and stateless JWT auth.",
        ar: "بناء واجهة REST API متكاملة بـ Express و MongoDB، مع فهارس استعلامات سريعة جداً للمقالات ومصادقة مستخدمين آمنة بـ JWT.",
      },
      architecture: {
        en: [
          "Stateless JWT authorization with HTTP-only secure session cookies.",
          "Indexed MongoDB compound queries for instant tag and category aggregation.",
          "Decoupled React client utilizing custom hooks for optimistic comment submission.",
        ],
        ar: [
          "نظام مصادقة مشفر بـ JWT مع حماية الكوكيز من هجمات XSS.",
          "فهارس استعلام مركبة في MongoDB لتجميع الوسوم والتصنيفات في أجزاء من الثانية.",
          "واجهة React تفاعلية مع تحديثات فورية متفائلة عند التعليق والنشر.",
        ],
      },
      mockupGradient: "bg-gradient-to-br from-space-900 via-space-950 to-nebula-violet/25",
      mockupBadge: "MERN Stack Publishing",
    },
  },

  // ==========================================
  // 7. B-Labn — Restaurant Storefront & Dispatch (#7)
  // ==========================================
  {
    id: "b-labn",
    slug: "b-labn-ordering-app",
    title: {
      en: "B-Labn",
      ar: "B-Labn",
    },
    subtitle: {
      en: "Food & Dessert Online Ordering App",
      ar: "تطبيق ويب سريع لطلب الوجبات والحلويات",
    },
    role: {
      en: "Frontend & Full-Stack Developer",
      ar: "مطور واجهات ومتكامل (Full-Stack)",
    },
    roleDetails: {
      en: [
        "Built pure client-side routing and reactive DOM updates using Vanilla JavaScript SPA architecture.",
        "Engineered viral customer referral system calculating promotional coupon discounts in real time.",
        "Implemented local storage cart persistence and optimistic UI feedback on checkout.",
      ],
      ar: [
        "بناء نظام توجيه وتحديثات DOM تفاعلية بنقاء Vanilla JS SPA بدون أطر عمل إضافية.",
        "هندسة نظام إحالة العملاء وحساب كوبونات وخصومات الترويج في الوقت الفعلي.",
        "تطبيق سلة تسوق فورية مع حفظ البيانات محلياً واستجابة فائقة السرعة عند الشراء.",
      ],
    },
    description: {
      en: "Dessert ordering app built with Vanilla JS SPA on Vite + Node.js/MongoDB. Instant cart updates, local storage persistence, referral coupon engine, and an admin order dispatch board.",
      ar: "تطبيق طلب حلويات بـ Vanilla JS SPA على Vite + Node.js/MongoDB. سلة فورية، حفظ محلي، نظام كوبونات إحالة، ولوحة متابعة طلبات.",
    },
    metrics: { en: ["Vanilla JS SPA", "Referral Engine", "Sub-100ms Cart Updates"], ar: ["معمارية Vanilla JS SPA", "نظام مكافآت وإحالة", "استجابة سلة فورية"] },
    stack: ["Vanilla JS (SPA)", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB Atlas"],
    category: "Full-Stack",
    links: {
      demo: "http://b-labn.vercel.app",
      github: "https://github.com/dev-ahmed-ragab/b-Labn",
    },
    pinned: false,
    featuredYear: "2024",
    image: "/assets/projects/b-labn/home.png",
    highlights: {
      en: [
        "Built pure client-side routing and reactive DOM updates using Vanilla JavaScript SPA architecture.",
        "Engineered viral customer referral system calculating promotional coupon discounts in real time.",
        "Implemented local storage cart persistence and optimistic UI feedback on checkout.",
      ],
      ar: [
        "بناء نظام توجيه وتحديثات DOM تفاعلية بنقاء Vanilla JS SPA بدون أطر عمل إضافية.",
        "هندسة نظام إحالة العملاء وحساب كوبونات وخصومات الترويج في الوقت الفعلي.",
        "تطبيق سلة تسوق فورية مع حفظ البيانات محلياً واستجابة فائقة السرعة عند الشراء.",
      ],
    },
    gallery: [
      {
        id: "home",
        src: "/assets/projects/b-labn/home.png",
        title: { en: "B-Labn Restaurant Storefront", ar: "الواجهة الرئيسية وعرض قوائم الحلويات" },
        caption: {
          en: "Interactive dessert menu with category tabs, dish photos, and promotional banners.",
          ar: "قائمة طعام تفاعلية مع تصنيف الأصناف وصور الحلويات وعروض الخصم.",
        },
      },
      {
        id: "menu",
        src: "/assets/projects/b-labn/menu.png",
        title: { en: "Menu Catalog & Item Customization", ar: "استعراض الأصناف والإضافات المخصصة" },
        caption: {
          en: "Fast selection with ingredient customizers and instant cart addition.",
          ar: "تحديد أحجام وإضافات الأطباق مع إضافة فورية لسلة التسوق.",
        },
      },
      {
        id: "cart",
        src: "/assets/projects/b-labn/cart.png",
        title: { en: "Dynamic Shopping Cart", ar: "سلة الطلبات اللحظية وحساب الإجمالي" },
        caption: {
          en: "Real-time quantity adjustments, referral coupon code verification, and checkout.",
          ar: "تعديل كميات الأطباق فورا، تطبيق أكواد الخصم، واستكمال عملية الطلب.",
        },
      },
      {
        id: "about",
        src: "/assets/projects/b-labn/about.png",
        title: { en: "Brand Story & Referral Rewards", ar: "قصة العلامة التجارية ومكافآت المشاركة" },
        caption: {
          en: "Customer referral tracking link generator and brand identity story.",
          ar: "توليد روابط الإحالة للعملاء لمشاركة العروض والربح من الطلبات.",
        },
      },
    ],
    caseStudy: {
      overview: {
        en: "Fast e-commerce storefront for rapid food ordering with custom state caching and referral incentive system.",
        ar: "واجهة متجر إلكتروني تفاعلية لطلبات الطعام مع نظام إحالة العملاء وسلة شراء سريعة.",
      },
      problem: {
        en: "Food ordering clients needed an ultra-responsive menu that updates instantly without full page reloads, accompanied by viral customer sharing mechanics.",
        ar: "احتاج العميل لقائمة طعام سريعة التجاوب لتسجيل طلبات الزبائن وتتبع مكافآت الإحالة بدون إعادة تحميل الصفحة.",
      },
      solution: {
        en: "Engineered an optimistic UI cart with local storage persistence and referral coupon discount calculations in real-time.",
        ar: "بناء سلة تسوق فورية التحديث مع حفظ المشتريات محلياً وحساب خصومات الإحالة وكوبونات الخصم لحظياً.",
      },
      architecture: {
        en: [
          "Optimistic UI updates providing instant visual feedback on cart operations.",
          "Referral code validation and discount calculation microservice.",
          "Mobile-first responsive menu navigation optimized for fast touch ordering.",
        ],
        ar: [
          "تحديثات واجهة متفائلة (Optimistic UI) تعطي استجابة فورية عند تعديل السلة.",
          "محرك فحص أكواد الإحالة واحتساب نسب الخصم والمكافآت.",
          "تصميم موجه أولاً للهواتف لتمكين الطلب السريع باللمس في ثوانٍ معدودة.",
        ],
      },
      mockupGradient: "bg-gradient-to-br from-space-900 via-space-950 to-nebula-violet/25",
      mockupBadge: "E-Commerce & Food Ordering",
    },
  },

  // ==========================================
  // 8. YouTube Clone — Video Streaming Client (#8)
  // ==========================================
  {
    id: "youtube-clone",
    slug: "youtube-clone-streaming",
    title: {
      en: "YouTube Clone",
      ar: "YouTube Clone",
    },
    subtitle: {
      en: "Responsive Video Streaming & Feed Platform",
      ar: "منصة بث وتشغيل مقاطع الفيديو التفاعلية",
    },
    role: {
      en: "Frontend Engineer (React)",
      ar: "مهندس واجهات أمامية (React)",
    },
    roleDetails: {
      en: [
        "Developed custom caching hooks that memoize RapidAPI responses, eliminating redundant queries.",
        "Engineered responsive video player view with dynamic recommended video feeds.",
        "Built channel inspection pages with subscriber counts, avatar headers, and uploads grid.",
      ],
      ar: [
        "تطوير Custom Hooks ذكية لتخزين استجابات الـ API مؤقتاً ومنع تكرار الطلبات.",
        "مشغل فيديو متجاوب مع عرض فوري للفيديوهات المقترحة المتعلقة بالمحتوى.",
        "صفحات مخصصة للقنوات تعرض عدد المشتركين وغلاف القناة وأحدث الفيديوهات المرفوعة.",
      ],
    },
    description: {
      en: "YouTube client using the Data v3 API. Custom hook memoization cuts redundant requests. Includes infinite category browsing, search, responsive video playback, and channel profile pages.",
      ar: "تطبيق بحث وتشغيل فيديو عبر YouTube Data v3 API. تخزين مؤقت بـ Custom Hooks لتقليل الطلبات، تصفح تصنيفات، بحث، مشغل متجاوب، وصفحات قنوات.",
    },
    metrics: { en: ["RapidAPI Integration", "Custom Hook Caching", "Responsive Player"], ar: ["ربط كامل بـ RapidAPI", "كاش مخصص للـ Hooks", "مشغل فيديو متجاوب"] },
    stack: ["React 18", "RapidAPI", "Material UI 5", "Axios", "React Player"],
    category: "Frontend & Tools",
    links: {
      demo: "https://youtube-clone-ruby-one.vercel.app",
      github: "https://github.com/dev-ahmed-ragab/youtube-clone",
    },
    pinned: false,
    featuredYear: "2024",
    image: "/assets/projects/youtube-clone/home-feed.jpg",
    highlights: {
      en: [
        "Developed custom caching hooks that memoize RapidAPI responses, eliminating redundant queries.",
        "Engineered responsive video player view with dynamic recommended video feeds.",
        "Built channel inspection pages with subscriber counts, avatar headers, and uploads grid.",
      ],
      ar: [
        "تطوير Custom Hooks ذكية لتخزين استجابات الـ API مؤقتاً ومنع تكرار الطلبات.",
        "مشغل فيديو متجاوب مع عرض فوري للفيديوهات المقترحة المتعلقة بالمحتوى.",
        "صفحات مخصصة للقنوات تعرض عدد المشتركين وغلاف القناة وأحدث الفيديوهات المرفوعة.",
      ],
    },
    gallery: [
      {
        id: "feed",
        src: "/assets/projects/youtube-clone/home-feed.jpg",
        title: { en: "YouTube Video Feed & Navigation", ar: "تغذية الفيديوهات واستكشاف الأقسام" },
        caption: {
          en: "Category chips, search bar, and lazy-loaded video card thumbnails.",
          ar: "تصنيف الفيديوهات، شريط البحث السريع، وتحميل الصور المصغرة بانسيابية.",
        },
      },
      {
        id: "player",
        src: "/assets/projects/youtube-clone/video-player.jpg",
        title: { en: "Interactive Video Playback", ar: "مشغل الفيديو التفاعلي وتفاصيل القناة" },
        caption: {
          en: "Embedded React Player with view telemetry, likes count, and related recommendations.",
          ar: "مشغل فيديو تفاعلي يعرض عدد المشاهدات والإعجابات وتوصيات الفيديوهات المشابهة.",
        },
      },
      {
        id: "search",
        src: "/assets/projects/youtube-clone/search-results.jpg",
        title: { en: "Search & Filtering Results", ar: "نتائج البحث الفوري واستعراض القنوات" },
        caption: {
          en: "Instant keyword search results with channel profiles and direct video navigation.",
          ar: "نتائج بحث سريعة حسب الكلمات المفتاحية مع إمكانية الدخول المباشر للقناة.",
        },
      },
    ],
    caseStudy: {
      overview: {
        en: "Rapid video search and playback streaming interface consuming YouTube Data v3 API with custom hook caching and infinite browsing.",
        ar: "تطبيق بث وتصفح فيديو فائق السرعة يعتمد على واجهة YouTube Data API مع كاش مخصص واستعراض لانهائي.",
      },
      problem: {
        en: "Third-party video APIs enforce strict rate limits and introduce network latency without proper client-side caching.",
        ar: "واجهات API الخارجية للفيديو تفرض قيوداً على عدد الطلبات وتسبب بطئاً ملحوظاً في التصفح عند تكرار استدعائها.",
      },
      solution: {
        en: "Developed custom caching hooks that memoize API responses, eliminating duplicate requests and providing instant channel/video playback switching.",
        ar: "تطوير Custom Hooks ذكية لتخزين استجابات الـ API مؤقتاً، مما منع تكرار الطلبات وسرّع التنقل بين القنوات والفيديوهات.",
      },
      architecture: {
        en: [
          "Custom React hook caching layer preventing redundant API calls.",
          "Mobile-responsive video player viewport with seamless picture-in-picture mode.",
          "Lazy-loaded video thumbnails reducing initial page bundle payload by 40%.",
        ],
        ar: [
          "طبقة كاش مخصصة بالـ Hooks تمنع إهدار رصيد الـ API وتسرع الاستجابة.",
          "مشغل فيديو متجاوب بالكامل يدعم نمط العرض المصغر والتصفح السلس.",
          "تحميل كسول (Lazy Loading) للصور المصغرة لتقليص حجم الصفحة بنسبة 40%.",
        ],
      },
      mockupGradient: "bg-gradient-to-br from-space-900 via-space-950 to-nebula-cyan/25",
      mockupBadge: "React Video Engine",
    },
  },

  // ==========================================
  // 9. Fitness — Interactive Workout & Exercise Platform (#9)
  // ==========================================
  {
    id: "fitness-app",
    slug: "fitness-app-workout-hub",
    title: {
      en: "Fitness",
      ar: "Fitness",
    },
    subtitle: {
      en: "Smart Workout Directory, Muscle Indexing & Live BMI Hub",
      ar: "منصة التمارين الذكية، تصنيف العضلات وحاسبة اللياقة الفورية",
    },
    role: {
      en: "Frontend Engineer",
      ar: "مهندس واجهات أمامية",
    },
    roleDetails: {
      en: [
        "Engineered instant multi-parameter filtering across 1,300+ exercises by target muscle, equipment, and body part.",
        "Built a live algorithmic BMI & body-metric calculator delivering tailored training tier recommendations.",
        "Integrated ExerciseDB & YouTube Search APIs with skeleton loading states and responsive video form guides.",
      ],
      ar: [
        "هندسة نظام بحث وفلترة لحظية لأكثر من 1,300 تمرين حسب العضلة المستهدفة، المعدات، والجزء التشريحي.",
        "تطوير حاسبة مؤشر كتلة جسم (BMI) ذكية تقدم توصيات تدريبية مخصصة وفورية.",
        "ربط واجهات ExerciseDB وYouTube API لعرض مقاطع شرح الأداء الصحيح مع هياكل تحميل سريعة.",
      ],
    },
    description: {
      en: "Modern fitness & workout discovery platform featuring 1,300+ indexed exercises, muscle-group filtering, YouTube form tutorials, and a real-time BMI & training-tier calculator.",
      ar: "منصة حديثة لاستكشاف التمارين الرياضية تضم أكثر من 1,300 تمرين مصنف حسب العضلات، مع شروحات فيديو للأداء الصحيح وحاسبة مؤشر كتلة الجسم (BMI) اللحظية.",
    },
    metrics: {
      en: ["1,300+ Exercises", "Real-Time BMI Engine", "Video Form Guides"],
      ar: ["+1,300 تمرين", "حاسبة BMI فورية", "شروحات فيديو"],
    },
    stack: ["React 18", "ExerciseDB API", "Material UI 5", "YouTube API", "Tailwind CSS"],
    category: "Frontend & Tools",
    links: {
      demo: "https://fitness-zeta-mauve.vercel.app",
      github: "https://github.com/dev-ahmed-ragab/fitness",
    },
    pinned: false,
    featuredYear: "2024",
    image: "/assets/projects/fitness/banner.jpg",
    highlights: {
      en: [
        "Instant search & multi-parameter filtering across 1,300+ exercises by muscle group, body part, and equipment.",
        "Integrated algorithmic BMI calculator with real-time body-composition feedback and workout guidance.",
        "Embedded YouTube exercise demonstrations and similar-movement recommendations with smooth skeleton loaders.",
      ],
      ar: [
        "بحث فوري وفلترة متعددة المعايير لأكثر من 1,300 تمرين حسب العضلة والمعدة الرياضية.",
        "حاسبة BMI ذكية مدمجة تقدم تحليلاً فورياً وتوصيات تدريبية تناسب حالة المستخدم.",
        "ربط كل تمرين بمقاطع فيديو إرشادية واقتراح تمارين بديلة بنفس المعدات أو العضلة المستهدفة.",
      ],
    },
    gallery: [
      {
        id: "banner",
        src: "/assets/projects/fitness/banner.jpg",
        title: { en: "Fitness — Interactive Workout & Exercise Hub", ar: "Fitness — منصة التمارين واللياقة التفاعلية" },
        caption: {
          en: "Explore 1,300+ exercises by targeted muscle groups with video demonstrations and a live BMI calculator.",
          ar: "تصفح أكثر من 1,300 تمرين مصنف حسب العضلات المستهدفة مع فيديوهات الأداء وحاسبة BMI المدمجة.",
        },
      },
    ],
    caseStudy: {
      overview: {
        en: "A clean, high-speed fitness companion web app that bridges raw exercise databases with practical workout discovery, video form guidance, and live BMI analytics.",
        ar: "تطبيق ويب سريع وأنيق للياقة البدنية يربط قواعد بيانات التمارين الضخمة بتجربة بحث سلسة، شروحات فيديو عملية، وحاسبة كتلة جسم لحظية.",
      },
      problem: {
        en: "Beginners and gym-goers often struggle to navigate cluttered exercise lists, verify proper lifting form, and align routines with their body metrics.",
        ar: "يواجه المتدربون صعوبة في تصفح قوائم التمارين المبعثرة، والتحقق من الأداء الحركي الصحيح، وربط التمارين بمؤشرات أجسامهم.",
      },
      solution: {
        en: "Built an indexed, responsive workout hub powered by ExerciseDB and YouTube APIs with instant client-side filtering, related-exercise suggestions, and an interactive BMI calculator.",
        ar: "تطوير منصة تمارين مفهرسة ومتجاوبة تعتمد على ExerciseDB وYouTube APIs مع فلترة لحظية، اقتراحات تمارين بديلة، وحاسبة BMI تفاعلية.",
      },
      architecture: {
        en: [
          "Debounced search & multi-category muscle-group indexing across 1,300+ ExerciseDB records.",
          "Real-time BMI calculation engine mapping height/weight inputs to actionable fitness tiers.",
          "Optimized image/video lazy rendering with skeleton placeholders and responsive Material UI + Tailwind layout.",
        ],
        ar: [
          "محرك بحث وفهرسة لحظية لأكثر من 1,300 تمرين حسب المجموعات العضلية والمعدات.",
          "خوارزمية حساب BMI فورية تحول الطول والوزن إلى مؤشرات وتوصيات تدريبية واضحة.",
          "تحسين تحميل الوسائط مع هياكل Skeleton وتصميم متجاوب يجمع بين Material UI وTailwind CSS.",
        ],
      },
      mockupGradient: "bg-gradient-to-br from-space-900 via-space-950 to-nebula-violet/25",
      mockupBadge: "Interactive Fitness Hub",
    },
  },
];
