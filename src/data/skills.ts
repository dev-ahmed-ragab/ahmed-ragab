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
    id: "frontend-web",
    title: {
      en: "Modern Frontend & Web Apps",
      ar: "واجهات الويب وتطبيقات React",
    },
    description: {
      en: "Crafting fast, responsive, and intuitive web applications with modern React paradigms.",
      ar: "بناء واجهات مستخدم تفاعلية وسريعة التجاوب باستخدام أحدث تقنيات React و Next.js.",
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
      en: "Backend, APIs & Cloud Data",
      ar: "الأنظمة الخلفية وقواعد البيانات",
    },
    description: {
      en: "Practical APIs, secure authentication, and real-time database management.",
      ar: "واجهات برمجية عملية، أنظمة تسجيل مشفرة، وإدارة قواعد البيانات السحابية.",
    },
    skills: [
      {
        name: "Supabase & PostgreSQL",
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
        name: "Docker & Deployment Basics",
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
      en: "WordPress, Desktop & Tools",
      ar: "ووردبريس، الديسكتوب وأدوات التطوير",
    },
    description: {
      en: "Custom WordPress CMS solutions, desktop packaging, and professional Git workflows.",
      ar: "حلول ووردبريس مخصصة للعملاء، تطبيقات ديسكتوب، وإدارة احترافية للمستودعات.",
    },
    skills: [
      {
        name: "WordPress / Custom Themes & CPTs",
        iconSlug: "wordpress",
        level: "Advanced",
        description: {
          en: "Custom PHP theme architecture, Custom Post Types, lead funnels, and WooCommerce.",
          ar: "برمجة القوالب المخصصة بـ PHP، أنواع بيانات مخصصة (CPTs)، وقنوات استقبال العملاء.",
        },
      },
      {
        name: "Electron Desktop Apps",
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
        name: "Git & CI/CD Workflows",
        iconSlug: "git",
        level: "Advanced",
        description: {
          en: "Git branch workflows, PR reviews, Vercel automated deployments, and release hygiene.",
          ar: "إدارة الفروع، مراجعات الأكواد (PRs)، والنشر الآلي المستمر عبر Vercel.",
        },
      },
    ],
  },
];
