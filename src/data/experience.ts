export interface ExperienceItem {
  id: string;
  slug?: string;
  role: {
    en: string;
    ar: string;
  };
  company: {
    en: string;
    ar: string;
  };
  location: {
    en: string;
    ar: string;
  };
  period: {
    en: string;
    ar: string;
  };
  type: "Founder" | "Contract" | "Internship" | "Freelance" | "Academic";
  badge: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  achievements: {
    en: string[];
    ar: string[];
  };
  technologies: string[];
  image: string;
  caseStudyId?: string;
  highlightMetric: {
    en: string;
    ar: string;
  };
  actionLink?: {
    label: {
      en: string;
      ar: string;
    };
    href: string;
  };
}

export const experiences: ExperienceItem[] = [
  // 1. Iqraa Platform (Founder & Lead Full-Stack)
  {
    id: "iqraa-founder",
    slug: "iqraa",
    role: {
      en: "Lead Full-Stack Engineer & Technical Founder",
      ar: "المؤسس التقني وقائد هندسة المنصة",
    },
    company: {
      en: "Iqraa Platform (iqraa.live)",
      ar: "Iqraa Platform (منصة إقرأ)",
    },
    location: {
      en: "Cairo, Egypt",
      ar: "القاهرة، مصر",
    },
    period: {
      en: "2025 – Present",
      ar: "2025 – حتى الآن",
    },
    type: "Founder",
    badge: {
      en: "Flagship Startup",
      ar: "مشروع ريادي",
    },
    description: {
      en: "Founded and shipped an AI-powered multi-tenant EdTech SaaS. Serves 1,000+ university students with sub-second API latency.",
      ar: "أسست وأطلقت منصة SaaS تعليمية بالذكاء الاصطناعي متعددة المستأجرين. تخدم أكثر من 1,000 طالب جامعي باستجابة أقل من ثانية.",
    },
    achievements: {
      en: [
        "Engineered proprietary IPI talent readiness scoring engine with multidimensional skill radars.",
        "Built scalable multi-tenant architecture with isolated subdomains and institutional branding.",
        "Implemented CASL ability-based authorization and asynchronous background queues with BullMQ & Redis.",
      ],
      ar: [
        "هندسة خوارزمية قياس جاهزية المهارات (IPI) ورادار التقييم الأكاديمي متعدد المحاور.",
        "بناء معمارية متعددة المستأجرين (Multi-Tenancy) بنطاقات فرعية معزولة وهوية مخصصة للجامعات.",
        "تطبيق نظام صلاحيات محكم (CASL) ومعالجة خلفية غير متزامنة بـ BullMQ و Redis.",
      ],
    },
    technologies: ["Next.js 15", "React 19", "NestJS", "Prisma", "PostgreSQL", "BullMQ", "Redis", "Docker", "CASL"],
    image: "/assets/iqraa-dashboard-real.png",
    caseStudyId: "iqraa",
    highlightMetric: {
      en: "1,000+ Active Students · Sub-second Latency · Multi-Tenant Architecture",
      ar: "أكثر من 1,000 طالب نشط · استجابة أقل من ثانية · معمارية متعددة المستأجرين",
    },
    actionLink: {
      label: { en: "Launch Platform", ar: "زيارة منصة إقرأ" },
      href: "https://iqraa.live",
    },
  },

  // 2. Maham School Management Platform (Contract at Apptraction)
  {
    id: "maham-contract",
    slug: "apptraction",
    role: {
      en: "Frontend & Product Engineer (Contract)",
      ar: "مهندس واجهات ومنتجات برمجية (تعاقد)",
    },
    company: {
      en: "Apptraction — Maham Platform",
      ar: "Apptraction (منصة مَهام لإدارة المدارس)",
    },
    location: {
      en: "Remote Contract",
      ar: "تعاقد عن بُعد",
    },
    period: {
      en: "2025",
      ar: "2025",
    },
    type: "Contract",
    badge: {
      en: "Enterprise Contract",
      ar: "تعاقد شركات",
    },
    description: {
      en: "Built the core interactive modules for Maham — a school management platform. Delivered a Canva-style PDF builder, 60FPS drag-and-drop editor, and real-time multi-client sync.",
      ar: "بنيت الوحدات التفاعلية الأساسية لمنصة مَهام لإدارة المدارس. محرر PDF بأسلوب Canva، سحب وإفلات بـ 60FPS، ومزامنة لحظية بين المستخدمين.",
    },
    achievements: {
      en: [
        "Architected Canva-style dynamic document and PDF generation builder with instant print previews and template schemas.",
        "Engineered interactive 60FPS drag-and-drop assignment editor using @dnd-kit with optimistic UI updates.",
        "Implemented real-time multi-client state sync via Supabase Realtime postgres_changes channels.",
        "Packaged the platform into an offline-ready PWA and cross-platform Electron desktop application.",
      ],
      ar: [
        "بناء محرر المستندات وتوليد ملفات PDF التفاعلي بأسلوب Canva مع المعاينة والطباعة الفورية وقوالب الشهادات.",
        "هندسة محرر واجبات تفاعلي بالسحب والإفلات بـ 60 إطار/ثانية وتحديثات متفائلة بـ @dnd-kit.",
        "تطبيق مزامنة لحظية متعددة المستخدمين عبر قنوات Supabase Realtime postgres_changes.",
        "تغليف المنصة لتطبيق ديسكتوب مستقل بـ Electron وتطبيق ويب تقدمي PWA يدعم الأوفلاين.",
      ],
    },
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase Realtime", "@dnd-kit", "Electron", "PWA"],
    image: "/assets/apptraction-logo.png",
    caseStudyId: "maham-app",
    highlightMetric: {
      en: "60FPS Drag & Drop · Supabase Realtime · Cross-Platform Desktop & Web",
      ar: "سحب وإفلات بـ 60 إطار/ثانية · مزامنة لحظية · ويب وديسكتوب",
    },
  },

  // 3. RoyalMed (Technical Collaborator)
  {
    id: "royalmed-collaborator",
    slug: "royalmed",
    role: {
      en: "Software Engineer / Technical Collaborator",
      ar: "مهندس برمجيات ومتعاون تقني",
    },
    company: {
      en: "RoyalMed Medical Academy",
      ar: "RoyalMed (الأكاديمية الطبية)",
    },
    location: {
      en: "Contract / Remote",
      ar: "تعاقد / عن بُعد",
    },
    period: {
      en: "Late 2024 – Mid 2025",
      ar: "أواخر 2024 – منتصف 2025",
    },
    type: "Contract",
    badge: {
      en: "Clinical Academy",
      ar: "أكاديمية طبية",
    },
    description: {
      en: "Co-built the clinical exam engine, improved page load speed by 40%, and integrated DRM video streaming via Bunny Stream.",
      ar: "بنيت محرك الامتحانات الإكلينيكية بمؤقت زمني، حسّنت سرعة التحميل بـ 40%، ودمجت بث فيديو محمي عبر Bunny Stream.",
    },
    achievements: {
      en: [
        "Developed interactive timed clinical examination engine with instant grading analytics and question review.",
        "Overhauled website loading speeds by up to 40% through smart asset caching and lazy loading.",
        "Integrated anti-piracy video streaming pipelines using Bunny Stream DRM API.",
      ],
      ar: [
        "بناء محرك الامتحانات الإكلينيكية التفاعلي بمؤقت زمني ونظام درجات وتحليل فوري لإجابات الطلاب.",
        "تسريع تحميل صفحات الموقع بنسبة 40% عبر استراتيجيات التخزين الكاش والتحميل الكسول للوسائط.",
        "دمج مشغل فيديو محمي من القرصنة لمنع سرقة المحاضرات عبر Bunny Stream DRM API.",
      ],
    },
    technologies: ["React 18", "Node.js", "Express", "MongoDB Atlas", "Redux Toolkit", "Bunny Stream API"],
    image: "/assets/royalmed/hero.jpg",
    caseStudyId: "royalmed",
    highlightMetric: {
      en: "+40% Speed Boost · 10,000+ QBank · Timed Clinical Exams · Bunny DRM",
      ar: "تسريع تحميل 40% · أكثر من 10 آلاف سؤال · امتحانات بمؤقت · حماية DRM",
    },
  },

  // 4. Web Masters (Internship)
  {
    id: "web-masters-intern",
    slug: "web-masters",
    role: {
      en: "Frontend Developer Intern",
      ar: "متدرب تطوير واجهات أمامية (React)",
    },
    company: {
      en: "Web Masters",
      ar: "شركة ويب ماسترز (Web Masters)",
    },
    location: {
      en: "Egypt (Accredited)",
      ar: "مصر (تدريب معتمد)",
    },
    period: {
      en: "Early 2024 – Mid 2024",
      ar: "أوائل 2024 – منتصف 2024",
    },
    type: "Internship",
    badge: {
      en: "Accredited Internship",
      ar: "تدريب معتمد",
    },
    description: {
      en: "Corporate frontend internship building responsive React apps from Figma specs, with daily Agile sprints and strict PR reviews.",
      ar: "تدريب مؤسسي لبناء واجهات React من تصاميم Figma، ضمن دورات Agile يومية ومراجعات كود صارمة.",
    },
    achievements: {
      en: [
        "Collaborated in sprint cycles, daily standups, and rigorous pull request code reviews.",
        "Implemented pixel-perfect responsive designs from Figma design specifications.",
        "Refactored legacy UI components into modern modular React hooks with improved rendering times.",
      ],
      ar: [
        "المشاركة في دورات عمل الـ Sprints والـ Standups ومراجعات الكود الصارمة (PRs).",
        "تحويل تصاميم Figma المعقدة إلى كود متجاوب بدقة بكسل كاملة (Pixel-Perfect).",
        "إعادة هيكلة مكونات الواجهة وتحويلها إلى React Hooks معيارية قابلة لإعادة الاستخدام.",
      ],
    },
    technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Git", "Figma", "Agile/Scrum"],
    image: "/assets/experience-showcase.jpg",
    highlightMetric: {
      en: "Daily Agile Sprints · Strict PR Code Reviews · Pixel-Perfect Figma Execution",
      ar: "دورات Agile يومية · مراجعات كود صارمة (PRs) · دقة بكسل كاملة من Figma",
    },
  },

  // 5. Freelance Web Development
  {
    id: "freelance-engineer",
    slug: "freelance",
    role: {
      en: "Freelance Full-Stack Web Engineer",
      ar: "مطور ويب مستقل (Freelance)",
    },
    company: {
      en: "Freelance & Commercial Clients",
      ar: "مشاريع مستقلة لعملاء تجاريين",
    },
    location: {
      en: "Remote",
      ar: "عن بُعد",
    },
    period: {
      en: "2023 – 2024",
      ar: "2023 – 2024",
    },
    type: "Freelance",
    badge: {
      en: "Client Delivery",
      ar: "مشاريع مستقلة",
    },
    description: {
      en: "Delivered fast, modern web apps with React and Next.js — sub-second load times and direct WhatsApp lead conversion for clients.",
      ar: "بنيت تطبيقات ويب سريعة بـ React و Next.js — تحميل أقل من ثانية وتحويل مباشر للعملاء عبر واتساب.",
    },
    achievements: {
      en: [
        "Built responsive, mobile-first web platforms with React, Next.js, and Tailwind CSS.",
        "Integrated direct WhatsApp conversion funnels and automated lead capture flows.",
        "Achieved sub-second (< 1s) first contentful paint and high Lighthouse scores.",
      ],
      ar: [
        "بناء منصات ويب متجاوبة وسريعة باستخدام React و Next.js و Tailwind CSS.",
        "ربط نماذج الحجز والاستفسار مباشرة بقنوات التواصل والواتساب.",
        "تحقيق سرعة تحميل أولية أقل من ثانية وتجربة استخدام سلسة على الهواتف.",
      ],
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
    image: "/assets/projects/prohealth/home-preview.jpg",
    highlightMetric: {
      en: "< 1s Load Speed · Modern React Stack · Direct WhatsApp Leads",
      ar: "تحميل أقل من ثانية · تقنيات React الحديثة · تحويل مباشر للواتساب",
    },
  },

  // 6. Mechatronics Engineering (Academic Milestone)
  {
    id: "mechatronics-degree",
    slug: "mechatronics",
    role: {
      en: "B.Eng. in Mechatronics Engineering",
      ar: "بكالوريوس هندسة الميكاترونكس",
    },
    company: {
      en: "Faculty of Engineering, Menoufia University",
      ar: "كلية الهندسة، جامعة المنوفية",
    },
    location: {
      en: "Menoufia, Egypt",
      ar: "المنوفية، مصر",
    },
    period: {
      en: "2023 – 2028 (Expected)",
      ar: "2023 – 2028 (متوقع)",
    },
    type: "Academic",
    badge: {
      en: "Academic Milestone",
      ar: "المحطة الأكاديمية",
    },
    description: {
      en: "Studying Mechatronics Engineering at Menoufia University. Finished top 1% in the national Al-Mo3adala exam.",
      ar: "أدرس هندسة الميكاترونكس بجامعة المنوفية. أنهيت امتحان المعادلة ضمن أوائل 1% على مستوى الجمهورية.",
    },
    achievements: {
      en: [
        "Passed the national Al-Mo3adala engineering equivalency exam at Zagazig University (Top 1%).",
        "Applied control systems and state modeling directly to modern software architecture.",
        "Built hands-on foundations in embedded systems, robotics, and applied physics.",
      ],
      ar: [
        "اجتياز امتحان المعادلة في كلية الهندسة جامعة الزقازيق ضمن أوائل الجمهورية (Top 1%).",
        "توظيف أنظمة التحكم والنمذجة الرياضية في بناء المعماريات البرمجية.",
        "دراسة الأنظمة المدمجة والروبوتات والفيزياء التطبيقية.",
      ],
    },
    technologies: ["Control Systems", "Embedded Systems", "System Modeling", "Robotics", "C / C++"],
    image: "/assets/ahmed-menoufia-faculty.webp",
    highlightMetric: {
      en: "Aerospace & Control Systems · Menoufia Engineering Legacy · Systems Discipline",
      ar: "خوارزميات تحكم وفيزياء · صرح هندسة المنوفية · انضباط التفكير الهندسي",
    },
    actionLink: {
      label: { en: "Menoufia University Portal", ar: "بوابة جامعة المنوفية الرسمية" },
      href: "https://mu.menofia.edu.eg/",
    },
  },
];
