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
  description: {
    en: string;
    ar: string;
  };
  metrics: {
    en: string[];
    ar: string[];
  };
  stack: string[];
  category: "Full-Stack" | "Enterprise SaaS" | "Frontend & Tools" | "MERN Stack" | "WordPress";
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
  caseStudy?: {
    overview: { en: string; ar: string };
    problem: { en: string; ar: string };
    solution: { en: string; ar: string };
    architecture: { en: string[]; ar: string[] };
    mockupGradient?: string;
    mockupBadge?: string;
  };
}

export const projects: Project[] = [
  {
    id: "iqraa",
    slug: "iqraa-ai-saas",
    title: {
      en: "Iqraa — AI-Powered Educational Platform",
      ar: "إقرأ — منصة التعليم المدعومة بالذكاء الاصطناعي",
    },
    subtitle: {
      en: "Technical Founder & Lead Architect",
      ar: "المؤسس التقني وكبير مهندسي المنصة",
    },
    description: {
      en: "A comprehensive multi-tenant EdTech SaaS platform serving 100+ active students. Integrated with custom AI agents for academic content extraction, automated quiz generation, and plagiarism analysis.",
      ar: "منصة تعليمية سحابية متكاملة تخدم أكثر من 100 طالب نشط، مزودة بوكلاء ذكاء اصطناعي لاستخراج المحتوى الأكاديمي، وتوليد الاختبارات، واكتشاف الانتحال العلمي تلقائياً.",
    },
    metrics: {
      en: ["100+ Live Users", "Sub-2s Query Latency", "Zero Vendor Lock-in Architecture"],
      ar: ["أكثر من 100 مستخدم نشط", "استجابة استعلامات أقل من ثانيتين", "معمارية مستقلة بدون احتكار الموردين"],
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Docker"],
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
    highlights: {
      en: [
        "Architected role-based multi-tenant system with strict row-level security (RLS).",
        "Engineered AI agent pipeline for lecture processing and document summarization.",
        "Delivered a native-like PWA with offline caching and background synchronization.",
      ],
      ar: [
        "بناء معمارية متعددة المستأجرين بنظام أدوار محكم وحماية على مستوى الصفوف (RLS).",
        "هندسة مسار عمل لوكلاء الذكاء الاصطناعي لمعالجة المحاضرات وتلخيص المستندات.",
        "تطوير تطبيق ويب تقدمي (PWA) فائق السرعة يدعم التخزين المحلي أوفلاين.",
      ],
    },
    caseStudy: {
      overview: {
        en: "Autonomous multi-tenant EdTech SaaS with custom AI agent pipelines, serving 100+ active students with sub-second response times.",
        ar: "منصة تعليمية ذكية متعددة المستأجرين مدمجة بوكلاء ذكاء اصطناعي، تخدم أكثر من 100 طالب نشط باستجابة فائقة السرعة.",
      },
      problem: {
        en: "University students face an overwhelming density of lecture PDFs, manual exam preparation is time-consuming, and professors lack fast automated tools to evaluate comprehension and detect academic duplication.",
        ar: "يواجه طلاب الجامعات عبئاً كبيراً في استيعاب مئات الصفحات من المحاضرات، وتستغرق مراجعة المناهج وقتاً طويلاً، بينما يفتقر الأساتذة لأدوات آلية لتقييم استيعاب الطلاب ورصد التشابه الأكاديمي بسرعة.",
      },
      solution: {
        en: "Architected a full multi-tenant SaaS powered by Next.js and Supabase RLS. Integrated custom RAG pipelines that ingest lecture transcripts, generate context-aware quizzes, and provide real-time AI study companionship without vendor lock-in.",
        ar: "هندسة منصة سحابية متكاملة بـ Next.js و Supabase وحماية RLS. دمج مسارات RAG تستخلص محتوى المحاضرات وتولد اختبارات تفاعلية فورية وتقدم دعماً أكاديمياً مستقلاً بدون الاعتماد على مورد واحد.",
      },
      architecture: {
        en: [
          "PostgreSQL multi-tenant schema with granular Row-Level Security per institution and course.",
          "Asynchronous AI task pipeline for heavy PDF OCR, embeddings, and similarity indexing.",
          "Client-side edge caching reducing server cold-starts and delivering sub-2s query latency.",
          "Mobile-first PWA with Service Workers for offline chapter review and low-latency testing.",
        ],
        ar: [
          "قاعدة بيانات PostgreSQL متعددة المستأجرين مع عزل كامل للبيانات بتقنية Row-Level Security.",
          "مسار مهام غير متزامن لمعالجة ملفات PDF الكبيرة واستخراج النصوص وتوليد متجهات التشابه.",
          "تخزين مؤقت على شبكة الحافة (Edge Caching) يقلل وقت الاستجابة لأقل من ثانيتين.",
          "تطبيق ويب تقدمي (PWA) مع Service Workers لدعم المذاكرة دون اتصال إنترنت قوي.",
        ],
      },
      mockupGradient: "bg-gradient-to-br from-space-900 via-space-950 to-nebula-cyan/25",
      mockupBadge: "Production EdTech SaaS",
    },
  },
  {
    id: "dynamic-pdf-builder",
    slug: "canva-pdf-builder-enterprise",
    title: {
      en: "Enterprise Dynamic Document & PDF Builder",
      ar: "نظام بناء وتصدير المستندات والـ PDF للمؤسسات",
    },
    subtitle: {
      en: "Full-Stack Contract (Confidential NDA)",
      ar: "تطوير متكامل لشركة خاصة (تحت اتفاقية سرية)",
    },
    description: {
      en: "Engineered a Canva-style drag-and-drop document builder enabling users to customize and generate dynamic high-precision PDF reports. Wrapped into Electron desktop and PWA formats.",
      ar: "هندسة محرر مستندات تفاعلي بنمط Canva بالسحب والإفلات لتصميم وتصدير تقارير PDF معقدة بدقة متناهية، مع تحويله لتطبيق ديسكتوب بـ Electron وتطبيق PWA.",
    },
    metrics: {
      en: ["60FPS Drag & Drop", "Cross-Platform (Web & Desktop)", "Multi-language RTL/LTR"],
      ar: ["سحب وإفلات بـ 60 إطار/ثانية", "يعمل على الويب والديسكتوب", "دعم كامل للعربية والإنجليزية"],
    },
    stack: ["Next.js", "TypeScript", "Electron", "Supabase", "PWA", "Tailwind CSS"],
    category: "Enterprise SaaS",
    links: {},
    githubNotice: {
      en: "Confidential Enterprise Contract (Protected by NDA)",
      ar: "مشروع تعاقدي خاص لشركة تحت اتفاقية سرية (NDA)",
    },
    pinned: false,
    featuredYear: "2025",
    highlights: {
      en: [
        "Engineered canvas-based dynamic layout engine with millimetric PDF print rendering.",
        "Implemented full secure authentication: Email/Password, phone OTP verification, and JWT.",
        "Packaged into a standalone cross-platform desktop application using Electron.",
      ],
      ar: [
        "هندسة محرك تصميم ديناميكي بالسحب والإفلات يطبع ملفات PDF مطابقة للمواصفات بدقة ميكرومترية.",
        "تطبيق نظام أمان وحماية شامل: تسجيل بالبريد، تحقق برمز OTP على الهاتف، وتشفير JWT.",
        "تغليف المنصة كتطبيق ديسكتوب مستقل لنظامي ويندوز وماك باستخدام Electron.",
      ],
    },
    caseStudy: {
      overview: {
        en: "High-precision drag-and-drop dynamic canvas editor with millimetric vector PDF export, packaged into desktop and progressive web apps.",
        ar: "محرر مستندات تفاعلي بالسحب والإفلات وتصدير PDF دقيق للطباعة الميكرومترية، مغلف في تطبيق مكتبي PWA و Electron.",
      },
      problem: {
        en: "Enterprise users required a bespoke desktop-grade document builder capable of pixel-perfect document design with zero layout shift when compiled into high-resolution print PDFs.",
        ar: "احتاجت المؤسسة لمحرر مستندات تفاعلي يقدم دقة عالية بالسحب والإفلات، مع ضمان عدم تغير تنسيق العناصر إطلاقاً عند تصديرها لملفات PDF جاهزة للطباعة.",
      },
      solution: {
        en: "Developed a virtualized 60FPS canvas engine with snapping guides, layer hierarchies, dynamic token interpolation, and integrated Electron IPC bridge for native OS file system saving.",
        ar: "تطوير محرك كانفاس 60 إطار/ثانية بنظام محاذاة ذكي وطبقات متعددة، مع ربط جسر Electron IPC للحفظ المباشر على نظام التشغيل وتشفير الجلسات.",
      },
      architecture: {
        en: [
          "Custom matrix transformation engine ensuring 1:1 screen-to-print coordinate fidelity.",
          "Multi-layered state management utilizing immutable history for multi-step Undo/Redo.",
          "Multi-factor enterprise auth with phone SMS OTP verification and cryptographic tokens.",
          "Unified dual deployment targeting Chrome web runtime and Electron desktop wrappers.",
        ],
        ar: [
          "محرك تحويل إحداثيات رياضي يطابق ما يظهر على الشاشة مع الطباعة بنسبة 100%.",
          "إدارة حالة متعددة الطبقات مع سجل تاريخي للتراجع والتقدم (Undo/Redo) الفوري.",
          "نظام توثيق وحماية متعدد المراحل برموز OTP ورسائل SMS وجلسات مشفرة.",
          "نشر موحد يعمل على المتصفح كتطبيق ويب وعلى سطح المكتب عبر Electron.",
        ],
      },
      mockupGradient: "bg-gradient-to-br from-space-900 via-space-950 to-nebula-violet/25",
      mockupBadge: "Enterprise Document Builder",
    },
  },
  {
    id: "royalmed",
    slug: "royalmed-medical-platform",
    title: {
      en: "RoyalMed — Medical Academic Academy",
      ar: "رويال ميد — المنصة الأكاديمية الطبية",
    },
    subtitle: {
      en: "Core Developer & Performance Architect",
      ar: "مطور أساسي ومهندس تحسين الأداء",
    },
    description: {
      en: "A dedicated academic e-learning platform serving medical college students. Delivered interactive course delivery modules and overhauled core asset loading to improve speeds by up to 40%.",
      ar: "منصة تعليمية أكاديمية متخصصة لطلاب كليات الطب. قمت ببناء وحدات الدورات التدريبية التفاعلية وإعادة هيكلة تحميل الموارد لتسريع الموقع بنسبة تصل إلى 40%.",
    },
    metrics: {
      en: ["+40% Page Load Speed", "Accessible Medical Lectures", "Optimized Video Streaming"],
      ar: ["تحسين سرعة التحميل بـ 40%", "واجهة سهلة الاستخدام للطلبة", "بث فيديو سلس ومحسن"],
    },
    stack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    category: "Full-Stack",
    links: {},
    githubNotice: {
      en: "Client Academic Repository (Private Institutional Codebase)",
      ar: "مستودع خاص بالمؤسسة الأكاديمية الطبية",
    },
    pinned: false,
    featuredYear: "Late 2024 – 2025",
    highlights: {
      en: [
        "Optimized web vital performance and asset delivery, boosting speed by 40%.",
        "Engineered medical training course modules with progress tracking and quizzes.",
        "Collaborated directly with faculty stakeholders to translate complex curriculum into UI flows.",
      ],
      ar: [
        "تحسين مؤشرات أداء الويب (Web Vitals) وتخفيض زمن التحميل بنسبة 40%.",
        "بناء وحدات تدريبية تفاعلية مع تتبع إنجاز الطلاب والاختبارات الدورية.",
        "التنسيق المباشر مع أطباء ومسؤولي الكلية لتحويل المحتوى المعقد لواجهات سلسة.",
      ],
    },
    caseStudy: {
      overview: {
        en: "Academic medical platform overhauled for 40% speed boost, high-concurrency video lecture playback, and interactive quiz tracking.",
        ar: "منصة طبية أكاديمية تم تحسين أدائها بنسبة 40% مع تشغيل المحاضرات الطبية باستهلاك بيانات منخفض وتتبع الإنجاز.",
      },
      problem: {
        en: "Medical college students encountered frequent buffering during exam rush hours, and initial page load times exceeded 6 seconds due to unoptimized assets.",
        ar: "عانى طلاب كلية الطب من بطء التحميل وتوقف الفيديوهات أثناء فترات الامتحانات بسبب كبر حجم الموارد وعدم وجود استراتيجية تخزين كاش.",
      },
      solution: {
        en: "Implemented responsive video streaming sharding, asset compression, lazy loading, and optimized MongoDB aggregation pipelines, slashing load times by 40%.",
        ar: "تطبيق تقنيات تجزئة الفيديو، ضغط الصور، التحميل الكسول، وتحسين استعلامات MongoDB، مما رفع سرعة التصفح بنسبة 40%.",
      },
      architecture: {
        en: [
          "Asset optimization pipeline compressing high-resolution medical anatomical diagrams.",
          "Custom video player with adaptive bitrate selection and timestamped notes.",
          "MongoDB indexing strategy cutting read latency on student quiz results by 65%.",
        ],
        ar: [
          "مسار معالجة وضغط لصور التشريح والمخططات الطبية عالية الدقة.",
          "مشغل فيديو مخصص يتكيف مع سرعة الاتصال ويتيح تدوين الملاحظات التفاعلية.",
          "فهرسة دقيقة لقواعد بيانات MongoDB خفضت زمن استعلام نتائج الاختبارات بـ 65%.",
        ],
      },
      mockupGradient: "bg-gradient-to-br from-space-900 via-space-950 to-nebula-emerald/25",
      mockupBadge: "Medical Academy Platform",
    },
  },
  {
    id: "prohealth",
    slug: "prohealth-booking-platform",
    title: {
      en: "ProHealth — Multi-Role Healthcare Management",
      ar: "برو هيلث — منصة الحجوزات الطبية الشاملة",
    },
    subtitle: {
      en: "Full Stack Engineer (MERN)",
      ar: "تطوير متكامل (MERN Stack)",
    },
    description: {
      en: "Production-ready healthcare platform featuring three distinct authenticated dashboards (Patient, Doctor, Admin) with automated appointment scheduling and email notifications.",
      ar: "منصة طبية متكاملة تضم ثلاث لوحات تحكم مستقلة ومؤمنة بالكامل (المريض، الطبيب، مسؤول النظام) مع إدارة المواعيد والفلترة الذكية والإشعارات الفورية.",
    },
    metrics: {
      en: ["3 Role-Based Portals", "Real-Time Booking Filters", "Email Confirmation Engine"],
      ar: ["3 لوحات تحكم منفصلة", "فلترة مواعيد لحظية", "نظام تأكيد عبر البريد الإلكتروني"],
    },
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
    category: "MERN Stack",
    links: {
      demo: "https://github.com/dev-ahmed-ragab/ProHealth",
      github: "https://github.com/dev-ahmed-ragab/ProHealth",
    },
    githubNotice: {
      en: "Public Open-Source Engineering Showcase",
      ar: "مشروع مفتوح المصدر على GitHub",
    },
    pinned: true,
    featuredYear: "2024",
    highlights: {
      en: [
        "Built isolated portal workflows for Patients, Doctors, and Platform Administrators.",
        "Implemented smart calendar filtering, slot booking, and cancellation rules.",
        "Designed strict JWT-based authentication with transactional email triggers.",
      ],
      ar: [
        "بناء مسارات عمل منفصلة لكل من المرضى والأطباء ومدراء النظام.",
        "تطبيق خوارزميات ذكية لفلترة الأطباء وحجز المواعيد وإلغائها تلقائياً.",
        "تصميم نظام توثيق وأمان مشفر بـ JWT مع إرسال رسائل البريد التفاعلية.",
      ],
    },
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
  // Archive Projects
  {
    id: "frenzy-blog",
    slug: "frenzy-blog",
    title: {
      en: "Frenzy Blog — Publishing Platform",
      ar: "فرينزي بلوج — منصة التدوين المتقدمة",
    },
    subtitle: { en: "Full-Stack MERN", ar: "تطوير شامل MERN" },
    description: {
      en: "Modern publishing platform featuring authoring tools, dynamic tag indexing, and an administrative moderation panel.",
      ar: "منصة تدوين حديثة بمحرر محتوى تفاعلي وتصنيف ذكي بالوسوم ولوحة إشراف إدارية للمحتوى.",
    },
    metrics: { en: ["Full Admin Portal", "RTL / LTR Friendly"], ar: ["لوحة إشراف كاملة", "دعم كامل للغة"] },
    stack: ["React.js", "Express.js", "MongoDB", "Node.js"],
    category: "MERN Stack",
    links: { github: "https://github.com/dev-ahmed-ragab/frenzy-blog" },
    pinned: false,
    featuredYear: "2024",
    highlights: { en: ["Admin moderation tools"], ar: ["أدوات إشراف وتحكم إداري"] },
  },
  {
    id: "b-labn",
    slug: "b-labn",
    title: {
      en: "B-Labn — Restaurant & Order Management",
      ar: "بـ لبن — متجر وقائمة طلبات إلكترونية",
    },
    subtitle: { en: "E-Commerce & Ordering UI", ar: "منصة طلبات وقوائم طعام تفاعلية" },
    description: {
      en: "Dynamic restaurant catalog showcasing dessert menu items with customer referral tracking, localized cart checkout, and kitchen order queues.",
      ar: "متجر وقائمة تفاعلية لعرض قوائم الحلويات بنظام إحالة للعملاء، وسلة تسوق سريعة، ولوحة إدارة للطلبات الواردة.",
    },
    metrics: { en: ["Interactive Cart", "Referral Engine", "Sub-100ms UI Updates"], ar: ["سلة طلبات تفاعلية", "نظام مكافآت وإحالة", "استجابة واجهة فورية"] },
    stack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "MERN Stack",
    links: { github: "https://github.com/dev-ahmed-ragab/b-Labn" },
    githubNotice: {
      en: "Public Open-Source Frontend & Backend Repository",
      ar: "مشروع مفتوح المصدر على GitHub",
    },
    pinned: true,
    featuredYear: "2024",
    highlights: { en: ["Referral tracking system", "State-managed cart checkout"], ar: ["تتبع الإحالات والمبيعات", "إدارة حالة متقدمة للسلة"] },
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
  {
    id: "youtube-clone",
    slug: "youtube-clone",
    title: {
      en: "Streaming Video Client (YouTube Clone)",
      ar: "تطبيق بث وبحث الفيديو (يوتيوب كلون)",
    },
    subtitle: { en: "React & RapidAPI Integration", ar: "واجهة فيديو برمجية تفاعلية" },
    description: {
      en: "High-performance video exploration client leveraging the official YouTube Data v3 API with custom hook caching.",
      ar: "تطبيق استعراض وبحث مقاطع الفيديو باستخدام واجهة YouTube Data v3 API مع كاش مخصص للبيانات.",
    },
    metrics: { en: ["Instant Search", "Custom Hook Caching"], ar: ["بحث فوري بدون تأخير", "إدارة حالة متقدمة"] },
    stack: ["React.js", "RapidAPI", "Material UI", "Custom Hooks"],
    category: "Frontend & Tools",
    links: { github: "https://github.com/dev-ahmed-ragab/youtube-clone" },
    pinned: false,
    featuredYear: "2024",
    highlights: { en: ["Video playback & channel inspection"], ar: ["تشغيل الفيديو وتصفح القنوات"] },
  },
  {
    id: "fitness-app",
    slug: "fitness-app",
    title: {
      en: "PulseFit — Exercise & Workout Hub",
      ar: "بالس فيت — منصة التمارين واللياقة",
    },
    subtitle: { en: "Interactive Fitness Guide", ar: "دليل تمارين تفاعلي" },
    description: {
      en: "Interactive workout catalog providing muscle group filtering, exercise demonstration videos, and a live BMI calculator.",
      ar: "دليل تمارين تفاعلي مصنف حسب العضلات المستهدفة مع فيديوهات إرشادية وحاسبة مؤشر كتلة الجسم (BMI).",
    },
    metrics: { en: ["Interactive BMI Calc", "1000+ Exercise Database"], ar: ["حاسبة BMI ذكية", "أكثر من 1000 تمرين"] },
    stack: ["React.js", "ExerciseDB API", "Tailwind CSS"],
    category: "Frontend & Tools",
    links: { github: "https://github.com/dev-ahmed-ragab/fitness" },
    pinned: false,
    featuredYear: "2024",
    highlights: { en: ["Comprehensive workout filtering"], ar: ["فلترة التمارين بدقة"] },
  },
  {
    id: "skyscrapers",
    slug: "skyscrapers-real-estate",
    title: {
      en: "Skyscrapers Real Estate Portal",
      ar: "سكاي سكريبرز — بوابة العقارات والمشاريع",
    },
    subtitle: { en: "Custom WordPress Architecture & Lead Engine", ar: "تطوير ووردبريس مخصص وقمع مبيعات" },
    description: {
      en: "Bespoke property listing platform with dynamic custom fields, lead capture funnels, and optimized mobile loading speeds.",
      ar: "موقع استعراض مشاريع عقارية بتصميم مخصص بالكامل ونماذج استقبال طلبات العملاء وتحميل سريع على كافة الشاشات.",
    },
    metrics: { en: ["Sub-second First Paint", "Custom Post Types", "Automated Lead Funnel"], ar: ["سرعة تحميل أولية فائقة", "هيكلة أنواع بيانات مخصصة", "تحويل وتجميع طلبات العملاء"] },
    stack: ["WordPress", "PHP", "Custom Theme", "Elementor", "MySQL"],
    category: "WordPress",
    links: {},
    githubNotice: {
      en: "Client Commercial Website (Production Real Estate Portal)",
      ar: "موقع تجاري مخصص لشركة عقارية",
    },
    pinned: true,
    featuredYear: "2024",
    highlights: { en: ["Custom post type architecture", "Automated lead dispatch"], ar: ["هيكلة مخصصة لأنواع العقارات", "إرسال بيانات العملاء تلقائياً"] },
    caseStudy: {
      overview: {
        en: "Tailored real estate portal designed for high lead conversion, advanced property filtering, and lightweight asset delivery.",
        ar: "بوابة عقارية مخصصة لتحقيق أعلى معدل لتحويل الزوار إلى عملاء مع فلاتر ذكية للبحث عن الوحدات.",
      },
      problem: {
        en: "Heavy off-the-shelf WordPress themes loaded dozens of redundant scripts, resulting in 5+ second load times and lost prospective buyers on mobile devices.",
        ar: "القوالب التجارية الجاهزة كانت تُبطئ الموقع بأكواد وإضافات زائدة تسببت في بطء التصفح وفقدان المشترين المحتملين.",
      },
      solution: {
        en: "Developed a lightweight bespoke theme using native WordPress hooks, custom taxonomies, and integrated WhatsApp & email lead capture directly into property detail pages.",
        ar: "تطوير قالب مخصص خفيف الوزن باستخدام WordPress Hooks الأصلية، مع ربط إرسال استفسارات الوحدات مباشرة للواتساب والبريد.",
      },
      architecture: {
        en: [
          "Bespoke Custom Post Types (CPTs) and taxonomies for compound amenities filtering.",
          "CSS/JS asset purging removing 70% of unused library code for ultra-fast mobile rendering.",
          "Lead capture webhook triggers alerting the sales team within seconds of inquiry.",
        ],
        ar: [
          "هيكلة بيانات مخصصة (Custom Post Types) لفلترة الوحدات السكنية والتجارية بسهولة.",
          "تنظيف وتقليص ملفات CSS/JS بنسبة 70% للحصول على سرعة تصفح استثنائية على الهواتف.",
          "ربط استقبال طلبات المعاينة فورياً لتنبيه فريق المبيعات فور إرسال الطلب.",
        ],
      },
      mockupGradient: "bg-gradient-to-br from-space-900 via-space-950 to-nebula-emerald/25",
      mockupBadge: "Custom WordPress Architecture",
    },
  },
  {
    id: "travel-agency",
    slug: "travel-agency",
    title: {
      en: "Wanderlust Travel & Tour Agency",
      ar: "بوابة السياحة والرحلات الدولية",
    },
    subtitle: { en: "Custom Theme & Itinerary Builder", ar: "منصة باقات الرحلات السياحية" },
    description: {
      en: "Bilingual tourism platform showcasing international holiday packages with dynamic itinerary galleries.",
      ar: "موقع سياحي متكامل لعرض باقات السفر والرحلات وتفاصيل البرامج اليومية بدعم متعدد اللغات.",
    },
    metrics: { en: ["Interactive Itinerary", "Mobile First"], ar: ["جدول رحلات تفاعلي", "تصميم عصري"] },
    stack: ["WordPress", "Custom Plugins", "WooCommerce"],
    category: "WordPress",
    links: {},
    pinned: false,
    featuredYear: "2024",
    highlights: { en: ["Fast booking inquiries"], ar: ["استقبال استفسارات الحجز"] },
  },
];
