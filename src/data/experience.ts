export interface ExperienceItem {
  id: string;
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
  {
    id: "iqraa-founder",
    role: {
      en: "Founder & Lead Product Engineer",
      ar: "المؤسس التقني وقائد هندسة المنتج",
    },
    company: {
      en: "Iqraa Platform (EdTech & AI)",
      ar: "منصة إقرأ للتعليم والذكاء الاصطناعي",
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
      ar: "المنتج الريادي الأساسي",
    },
    description: {
      en: "Founded and engineered a complete multi-tenant EdTech SaaS platform serving 100+ active students. Architected custom RAG AI agent pipelines for academic curriculum extraction, automated quiz synthesis, and PostgreSQL Row-Level Security.",
      ar: "تأسيس وبناء المعمارية الكاملة لمنصة تعليمية سحابية تخدم أكثر من 100 طالب نشط، مزودة بوكلاء ذكاء اصطناعي لاستخراج المناهج وتوليد الاختبارات، مع نظام صلاحيات محكم وحماية Row-Level Security.",
    },
    achievements: {
      en: [
        "Scaled platform to 100+ active students with sub-second API query latency.",
        "Engineered RAG-based AI pipeline for document summarization with zero vendor lock-in.",
        "Built multi-role RBAC architecture (Admin, Professor, TA, Student) with Supabase Postgres RLS.",
      ],
      ar: [
        "تشغيل المنصة لأكثر من 100 طالب نشط مع سرعة استجابة فائقة للواجهات البرمجية.",
        "هندسة مسار ذكاء اصطناعي (RAG) لمعالجة وتلخيص المستندات بمعمارية مرنة ومستقلة.",
        "بناء نظام صلاحيات محكم لـ 4 أدوار (أدمن، أستاذ، معيد، طالب) بحماية Row-Level Security.",
      ],
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Docker", "AI Agents"],
    image: "/assets/experience-showcase.jpg",
    caseStudyId: "iqraa",
    highlightMetric: {
      en: "⚡ +100 Active Students • Sub-2s Query Latency • Zero Vendor Lock-in",
      ar: "⚡ أكثر من 100 طالب نشط • استجابة ذكية أقل من ثانيتين • معمارية مستقلة",
    },
    actionLink: {
      label: { en: "Launch Live Platform →", ar: "زيارة منصة إقرأ مباشرة ←" },
      href: "https://iqraa.live",
    },
  },
  {
    id: "nda-contract",
    role: {
      en: "Full Stack Engineer — Maham App & Document Engine",
      ar: "مطور برمجيات متكامل — تطبيق مهمة ومحرر المستندات",
    },
    company: {
      en: "Apptraction (Maham School SaaS)",
      ar: "شركة أبتراكشن (منصة مهام)",
    },
    location: {
      en: "Remote Contract",
      ar: "تعاقد عن بُعد",
    },
    period: {
      en: "August 2025 – Present",
      ar: "أغسطس 2025 – حتى الآن",
    },
    type: "Contract",
    badge: {
      en: "Enterprise SaaS & Desktop",
      ar: "أنظمة ويب ومكتبي للشركات",
    },
    description: {
      en: "Engineered core modules for enterprise web and desktop solutions, specializing in Canva-style dynamic document canvas builders, SMS OTP security authentication, and cross-platform Electron packaging.",
      ar: "هندسة وبناء محرر مستندات تفاعلي بنمط Canva بالسحب والإفلات مع تصدير PDF بدقة طباعية ميكرومترية، ونظام أمان متعدد المراحل بـ SMS OTP، وتغليف ديسكتوب بـ Electron وتطبيق ويب تقدمي PWA.",
    },
    achievements: {
      en: [
        "Engineered a Canva-style dynamic PDF builder enabling users to design, customize, and print high-fidelity documents.",
        "Implemented multi-factor authentication with SMS OTP verification, email confirmation, and session encryption.",
        "Packaged the web app into an Electron desktop client and offline-ready PWA.",
        "Integrated dual-language (RTL/LTR) architecture and unified dark/light theming.",
      ],
      ar: [
        "هندسة محرر مستندات تفاعلي بأسلوب Canva يتيح تصميم المستندات وتصدير PDF بدقة طباعية فائقة.",
        "تطبيق نظام أمان متعدد المراحل بـ OTP ورسائل الهاتف وتأكيد البريد الإلكتروني.",
        "تغليف تطبيق الويب إلى تطبيق ديسكتوب بـ Electron وتطبيق ويب تقدمي PWA يدعم الأوفلاين.",
        "بناء معمارية تعدد اللغات كاملة (RTL/LTR) ونظام سمات الألوان المتناسق.",
      ],
    },
    technologies: ["Next.js", "TypeScript", "Electron", "Supabase", "PWA", "Tailwind CSS", "JWT"],
    image: "/assets/experience-showcase.jpg",
    caseStudyId: "dynamic-pdf-builder",
    highlightMetric: {
      en: "⚡ 60FPS Drag & Drop • Millimetric Vector PDF • Cross-Platform Web & Desktop",
      ar: "⚡ سحب وإفلات بـ 60 إطار/ثانية • تصدير PDF ميكرومتري • ويب وديسكتوب",
    },
  },
  {
    id: "royalmed",
    role: {
      en: "Core Developer & Performance Architect",
      ar: "مطور أساسي ومهندس تحسين الأداء",
    },
    company: {
      en: "RoyalMed Medical Academy",
      ar: "منصة رويال ميد الأكاديمية الطبية",
    },
    location: {
      en: "Contract / Remote",
      ar: "تعاقد / عن بُعد",
    },
    period: {
      en: "Late 2024 – February 2025",
      ar: "أواخر 2024 – فبراير 2025",
    },
    type: "Contract",
    badge: {
      en: "Medical EdTech",
      ar: "تعليم طبي وتحسين أداء",
    },
    description: {
      en: "Delivered interactive medical lecture modules for medical students, engineered custom video playback with assessment checkpoints, and optimized website loading speeds by up to 40%.",
      ar: "تطوير وحدات المحاضرات التفاعلية لطلاب كليات الطب، ومشغل الفيديو المخصص مع محطات اختبار مرحلية، وتسريع تحميل صفحات المنصة بنسبة 40% عبر استراتيجيات التخزين والتحميل الكسول.",
    },
    achievements: {
      en: [
        "Improved website loading speeds by up to 40% through lazy-loading strategies and asset caching.",
        "Built responsive lecture viewers and student assessment dashboards.",
        "Ensured WCAG accessibility and seamless mobile usability for studying on the go.",
      ],
      ar: [
        "تسريع تحميل صفحات الموقع بنسبة 40% عبر استراتيجيات التخزين والتحميل الكسول للوسائط.",
        "بناء مشغل المحاضرات التفاعلي ولوحة تتبع إنجاز واختبارات الطلاب.",
        "ضمان التوافق التام مع معايير الوصول وسلاسة الاستخدام على شاشات الهواتف.",
      ],
    },
    technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    image: "/assets/experience-showcase.jpg",
    caseStudyId: "royalmed",
    highlightMetric: {
      en: "⚡ +40% Speed Boost • WCAG Compliant • Interactive Exam Checkpoints",
      ar: "⚡ تسريع تحميل بنسبة 40% • متوافق مع معايير WCAG • اختبارات طبية تفاعلية",
    },
  },
  {
    id: "web-masters",
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
      en: "February 2025 – July 2025",
      ar: "فبراير 2025 – يوليو 2025",
    },
    type: "Internship",
    badge: {
      en: "Team Agile & Reviews",
      ar: "عمل مؤسسي و Agile",
    },
    description: {
      en: "Completed accredited corporate internship developing client-facing applications using modern React workflows, Figma design tokens, pixel-perfect responsive layouts, and rigorous code reviews.",
      ar: "إتمام برنامج تدريب رسمي معتمد لبناء تطبيقات واجهات أمامية للعملاء وفق أحدث معايير React، مع تحويل تصاميم Figma بدقة بكسل كاملة، والمشاركة اليومية في دورات Agile ومراجعات الكود الصارمة.",
    },
    achievements: {
      en: [
        "Collaborated in sprint cycles, daily standups, and rigorous pull request code reviews.",
        "Implemented pixel-perfect responsive designs from Figma design specifications.",
        "Refactored legacy UI components into modern modular React hooks.",
      ],
      ar: [
        "المشاركة في دورات عمل الـ Sprints والـ Standups ومراجعات الكود الصارمة (Code Reviews).",
        "تحويل تصاميم Figma المعقدة إلى كود متجاوب بدقة بكسل (Pixel-Perfect).",
        "إعادة هيكلة مكونات قديمة وتحويلها إلى React Hooks معيارية قابلة لإعادة الاستخدام.",
      ],
    },
    technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Git", "Figma", "Agile/Scrum"],
    image: "/assets/experience-showcase.jpg",
    highlightMetric: {
      en: "⚡ Daily Agile Sprints • Strict PR Code Reviews • Pixel-Perfect Figma Execution",
      ar: "⚡ دورات Agile يومية • مراجعات كود صارمة (PRs) • دقة بكسل كاملة من Figma",
    },
  },
  {
    id: "freelance-wordpress",
    role: {
      en: "Freelance Full-Stack & WordPress Engineer",
      ar: "مطور برمجيات حر ومتخصص ووردبريس",
    },
    company: {
      en: "Freelance & Agency Clients (Skyscrapers)",
      ar: "مشاريع مستقلة — بوابة سكاي سكريبرز العقارية",
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
      ar: "مشاريع عملاء وووردبريس",
    },
    description: {
      en: "Delivered bespoke commercial websites, custom WordPress themes, PHP logic, and high-converting lead funnels for real estate and business agencies (e.g., Skyscrapers Real Estate Portal).",
      ar: "تطوير مواقع تجارية مخصصة وقوالب ووردبريس فريدة بلغة PHP وهيكلة بيانات فريدة (Custom Post Types) مع استقبال طلبات المعاينة فورياً عبر الواتساب والبريد وسرعة تحميل فائقة على كافة الشاشات.",
    },
    achievements: {
      en: [
        "Architected custom WordPress real estate and agency themes with Custom Post Types and speed optimizations.",
        "Integrated dynamic forms, lead capture webhooks, and WhatsApp click-to-chat business flows.",
        "Delivered responsive mobile-first UI with sub-second initial load speeds on budget hosting.",
      ],
      ar: [
        "بناء قوالب ووردبريس مخصصة للشركات العقارية والمؤسسات بأنواع بيانات مخصصة (CPTs) وسرعة تحميل فائقة.",
        "دمج نماذج التواصل الفورية وتحويل طلبات العملاء مباشرة للواتساب والبريد الإلكتروني.",
        "تصميم واجهات متجاوبة للهواتف مع تحسين الأداء ومؤشرات Web Vitals على الاستضافات المشتركة.",
      ],
    },
    technologies: ["WordPress", "PHP", "Elementor", "Custom Themes", "JavaScript", "Tailwind CSS", "MySQL"],
    image: "/assets/experience-showcase.jpg",
    caseStudyId: "skyscrapers",
    highlightMetric: {
      en: "⚡ Sub-second First Paint • Bespoke CPT Schema • Automated WhatsApp Leads",
      ar: "⚡ سرعة تحميل أولية فائقة • هيكلة بيانات مخصصة (CPTs) • قمع تحويل فوري للواتساب",
    },
  },
  {
    id: "mechatronics-degree",
    role: {
      en: "Bachelor of Engineering — Mechatronics Engineering",
      ar: "بكالوريوس الهندسة — هندسة الميكاترونكس",
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
      en: "Engineering Discipline",
      ar: "انضباط وعقلية هندسية",
    },
    description: {
      en: "Rigorous mechatronics engineering education combining system dynamics, electronics, control algorithms, and mathematical logic with scalable software architecture.",
      ar: "دراسة هندسية متقدمة تدمج بين الأنظمة الميكانيكية، الدوائر الإلكترونية، خوارزميات التحكم الآلي، ونظم الحواسيب، وتوظيف التفكير المنطقي والفيزيائي في بناء معماريات البرمجيات المعقدة.",
    },
    achievements: {
      en: [
        "Ranked among top achievers in technical diploma qualifying for direct engineering faculty admission (Al-Mo3adala).",
        "Applied physical spatial reasoning and system dynamics to software system modeling.",
      ],
      ar: [
        "الالتحاق بكلية الهندسة بعد تفوق استثنائي في الدبلوم التقني واجتياز المعادلة بجدارة.",
        "توظيف مهارات التحليل الفيزيائي والنمذجة المكانية في بناء وتصميم معماريات البرمجيات.",
      ],
    },
    technologies: ["Control Systems", "Embedded Systems", "System Modeling", "Physics & Mathematics"],
    image: "/assets/experience-showcase.jpg",
    highlightMetric: {
      en: "⚡ Control Algorithms • Embedded Hardware + Code • Diploma Honors",
      ar: "⚡ خوارزميات تحكم • أنظمة مدمجة وبرمجة عتاد • مرتبة الشرف في المعادلة الهندسية",
    },
  },
];
