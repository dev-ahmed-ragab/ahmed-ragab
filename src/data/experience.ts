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
      ar: "منصة إقرأ (تقنيات التعليم والذكاء الاصطناعي)",
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
      en: "Startup / Production",
      ar: "ستارت آب / إنتاجي",
    },
    description: {
      en: "Founded and engineered a complete multi-tenant EdTech platform providing AI-assisted curriculum exploration, automated quiz synthesis, and academic analysis.",
      ar: "تأسيس وهندسة معمارية منصة تعليمية سحابية متكاملة تقدم حلول الذكاء الاصطناعي لاستكشاف المناهج الدراسية وتوليد الاختبارات وتحليل المحتوى الأكاديمي.",
    },
    achievements: {
      en: [
        "Scaled platform to 100+ active students with sub-second API responses.",
        "Engineered RAG-based AI pipeline for document summarization with zero vendor lock-in.",
        "Built multi-role RBAC architecture (Admin, Professor, TA, Student) with Postgres RLS.",
      ],
      ar: [
        "تشغيل المنصة لأكثر من 100 طالب نشط مع سرعة استجابة فائقة للواجهات البرمجية.",
        "هندسة مسار ذكاء اصطناعي (RAG) لمعالجة وتلخيص المستندات بمعمارية مرنة ومستقلة.",
        "بناء نظام صلاحيات محكم لـ 4 أدوار (أدمن، أستاذ، معيد، طالب) بحماية Row-Level Security.",
      ],
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Docker", "AI Agents"],
  },
  {
    id: "nda-contract",
    role: {
      en: "Full Stack Developer (Part-Time Contract)",
      ar: "مطور برمجيات متكامل (تعاقد جزئي)",
    },
    company: {
      en: "Confidential Company (Under NDA)",
      ar: "شركة خاصة (تحت اتفاقية عدم الإفصاح NDA)",
    },
    location: {
      en: "Remote",
      ar: "عن بُعد",
    },
    period: {
      en: "August 2025 – Present",
      ar: "أغسطس 2025 – حتى الآن",
    },
    type: "Contract",
    badge: {
      en: "Enterprise Web & Desktop",
      ar: "أنظمة ويب ومكتبي للشركات",
    },
    description: {
      en: "Architected core features for high-traffic enterprise web and desktop solutions, specializing in custom document canvas builders and secure authentication.",
      ar: "هندسة وبناء الميزات الجوهرية لأنظمة شركات معقدة تعمل على الويب والديسكتوب، مع التركيز على محرر مستندات تفاعلي ونظام أمان متقدم.",
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
  },
  {
    id: "royalmed",
    role: {
      en: "Core Developer & Performance Architect",
      ar: "مطور أساسي ومهندس تحسين الأداء",
    },
    company: {
      en: "RoyalMed Medical Platform",
      ar: "منصة رويال ميد التعليمية الطبية",
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
      en: "EdTech & Performance",
      ar: "تعليم طبي وتحسين أداء",
    },
    description: {
      en: "Delivered interactive medical lecture modules for medical university students and optimized overall platform web performance.",
      ar: "تطوير وحدات المحاضرات الطبية التفاعلية لطلاب كليات الطب وإعادة هيكلة تحسين سرعة وأداء المنصة.",
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
  },
  {
    id: "web-masters",
    role: {
      en: "Frontend Developer Intern",
      ar: "متدرب تطوير واجهات أمامية",
    },
    company: {
      en: "Web Masters",
      ar: "ويب ماسترز (Web Masters)",
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
      en: "Completed official accredited internship developing client-facing applications using modern React workflows and engineering collaboration practices.",
      ar: "إتمام برنامج تدريب رسمي معتمد لبناء تطبيقات واجهات أمامية للعملاء وفق أحدث معايير React وممارسات العمل الجماعي الاحترافية.",
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
      en: "Pursuing rigorous engineering education combining mechanical systems, electronics, control algorithms, and computer systems.",
      ar: "دراسة هندسية متقدمة تدمج بين الأنظمة الميكانيكية، الدوائر الإلكترونية، خوارزميات التحكم الآلي، ونظم الحواسيب.",
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
  },
];
