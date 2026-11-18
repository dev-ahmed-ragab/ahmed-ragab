export interface SkillCategory {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  skills: {
    name: string;
    iconSlug: string;
    level: string;
    description: {
      en: string;
      ar: string;
    };
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend-architecture",
    title: {
      en: "Frontend & Architecture",
      ar: "واجهات المستخدم وهندسة المعمارية",
    },
    description: {
      en: "Building responsive, sub-second, accessible user interfaces with modern React paradigms.",
      ar: "بناء واجهات مستخدم فائقة السرعة، متجاوبة، وسهلة الاستخدام بأحدث أنماط React.",
    },
    skills: [
      {
        name: "Next.js (App Router)",
        iconSlug: "nextdotjs",
        level: "Expert",
        description: {
          en: "Server Components, Server Actions, streaming, Turbopack, and dynamic routing.",
          ar: "مكونات السيرفر، معالجة البيانات، التوجيه الديناميكي، ومحرك Turbopack.",
        },
      },
      {
        name: "React 19 & TypeScript",
        iconSlug: "react",
        level: "Advanced",
        description: {
          en: "Strict type safety, custom hooks, transitions, and concurrent rendering.",
          ar: "أمان برمجيات صارم بالأنماط، هوكس مخصصة، والتعامل مع العمليات المتزامنة.",
        },
      },
      {
        name: "Tailwind CSS",
        iconSlug: "tailwindcss",
        level: "Expert",
        description: {
          en: "Utility-first design systems, dynamic theming, and full RTL logical layouts.",
          ar: "أنظمة تصميم مرنة، سمات لونية تفاعلية، ودعم كامل للاتجاه العربي (RTL).",
        },
      },
      {
        name: "GSAP & Web Animations",
        iconSlug: "greensock",
        level: "Advanced",
        description: {
          en: "ScrollTrigger, timeline choreography, canvas frame sequences, 60FPS.",
          ar: "تحريك متزامن مع التمرير، مسارات حركة معقدة، ورسم إطارات على الكانفاس.",
        },
      },
    ],
  },
  {
    id: "backend-data",
    title: {
      en: "Backend & Cloud Services",
      ar: "الأنظمة الخلفية وقواعد البيانات السحابية",
    },
    description: {
      en: "Scalable APIs, secure authentication, and real-time database management.",
      ar: "واجهات برمجية قابلة للتوسع، أنظمة حماية مشفرة، وإدارة لحظية للبيانات.",
    },
    skills: [
      {
        name: "Supabase & Postgres",
        iconSlug: "supabase",
        level: "Advanced",
        description: {
          en: "Row-Level Security (RLS), real-time subscriptions, and serverless edge functions.",
          ar: "أمان على مستوى الصفوف (RLS)، مزامنة لحظية، ودوال سحابية على الـ Edge.",
        },
      },
      {
        name: "Node.js & Express",
        iconSlug: "nodedotjs",
        level: "Advanced",
        description: {
          en: "RESTful architecture, middleware design, JWT auth, and OTP verification pipelines.",
          ar: "معمارية REST، برمجة الـ Middlewares، توثيق JWT، ونظم التحقق بـ OTP.",
        },
      },
      {
        name: "MongoDB & Mongoose",
        iconSlug: "mongodb",
        level: "Advanced",
        description: {
          en: "Schema modeling, aggregation pipelines, and indexing optimization.",
          ar: "تصميم المخططات، خطوط تجميع البيانات، وتحسين كفاءة الفهارس.",
        },
      },
      {
        name: "Docker & Container Basics",
        iconSlug: "docker",
        level: "Intermediate",
        description: {
          en: "Containerized environments, multi-stage Dockerfiles for Next.js and APIs.",
          ar: "بيئات تشغيل معزولة وملفات Dockerfile متعددة المراحل للنشر السحابي.",
        },
      },
    ],
  },
  {
    id: "platforms-tools",
    title: {
      en: "Desktop, PWA & Tooling",
      ar: "الديسكتوب، تطبيقات PWA وأدوات التطوير",
    },
    description: {
      en: "Expanding web codebases into standalone native-feel desktop and cross-platform apps.",
      ar: "توسيع تطبيقات الويب لتعمل كتطبيقات ديسكتوب وتطبيقات ويب تقدمية سريعة.",
    },
    skills: [
      {
        name: "Electron",
        iconSlug: "electron",
        level: "Advanced",
        description: {
          en: "Packaging web apps into cross-platform desktop installers with native OS APIs.",
          ar: "تغليف تطبيقات الويب في حزم تثبيت ديسكتوب مستقلة تعمل على ويندوز وماك.",
        },
      },
      {
        name: "Progressive Web Apps (PWA)",
        iconSlug: "pwa",
        level: "Advanced",
        description: {
          en: "Service Workers, offline caching strategies, app manifests, and installability.",
          ar: "تفعيل التخزين المؤقت أوفلاين، إشعارات الخلفية، وقابلية التثبيت الفوري.",
        },
      },
      {
        name: "Git & CI/CD",
        iconSlug: "git",
        level: "Advanced",
        description: {
          en: "Git branch workflows, PR reviews, Vercel automated deployments, and release hygiene.",
          ar: "إدارة الفروع، مراجعات الأكواد (PRs)، والنشر الآلي المستمر عبر Vercel.",
        },
      },
      {
        name: "WordPress / Custom Themes",
        iconSlug: "wordpress",
        level: "Advanced",
        description: {
          en: "Custom PHP theme architecture, WooCommerce, Elementor pro hooks, and security.",
          ar: "برمجة القوالب المخصصة بـ PHP، متاجر WooCommerce، وحماية المواقع.",
        },
      },
    ],
  },
];
