import { SKILL_ICON_DATA } from "./skillIconsData";

export type SkillCategory = "frontend" | "backend" | "systems";

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  color: string;
  iconSrc: string;
  score: string;
  connections: string[];
  level: {
    en: string;
    ar: string;
  };
  projects: {
    en: string[];
    ar: string[];
  };
  description: {
    en: string;
    ar: string;
  };
}

export const SKILL_ITEMS: SkillItem[] = [
  // ==========================================
  // FRONTEND & REACTIVE UI
  // ==========================================
  {
    id: "nextjs",
    name: "Next.js 15",
    category: "frontend",
    color: "#ffffff",
    iconSrc: SKILL_ICON_DATA["nextjs"] || "/icons/skills/nextjs.svg",
    score: "Production Core",
    connections: ["react", "typescript", "tailwind", "supabase", "reactquery"],
    level: {
      en: "Core Architecture • Production",
      ar: "معمارية أساسية • بيئة إنتاجية",
    },
    projects: {
      en: ["Iqraa (EdTech AI)", "AxpoOS (Enterprise Cockpit)", "Maham (School OS)"],
      ar: ["إقرأ (التعليم الذكي)", "AxpoOS (لوحة العمليات)", "منصة مَهام (إدارة المدارس)"],
    },
    description: {
      en: "App Router, Server Actions, streaming, Turbopack, and high-performance ISR caching.",
      ar: "راوتر التطبيقات، سيرفر أكشنز، التوجيه المتدفق ومحرك Turbopack والتخزين المؤقت.",
    },
  },
  {
    id: "react",
    name: "React 19",
    category: "frontend",
    color: "#61dafb",
    iconSrc: SKILL_ICON_DATA["react"] || "/icons/skills/react.svg",
    score: "Production Core",
    connections: ["nextjs", "typescript", "tailwind", "redux", "reactquery"],
    level: {
      en: "Advanced • Concurrent UI",
      ar: "متقدم • واجهات متزامنة",
    },
    projects: {
      en: ["RoyalMed", "ProHealth", "Iqraa", "Maham Platform"],
      ar: ["رويال ميد", "برو هيلث", "منصة إقرأ", "منصة مَهام"],
    },
    description: {
      en: "Concurrent rendering, transitions, custom hooks, and robust component architecture.",
      ar: "تصيير تزامني متقدم، تحولات الحالة، هوكس مخصصة وهيكلية مكونات مرنة.",
    },
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    color: "#3178c6",
    iconSrc: SKILL_ICON_DATA["typescript"] || "/icons/skills/typescript.svg",
    score: "Production Core",
    connections: ["javascript", "nextjs", "react", "nodejs"],
    level: {
      en: "Advanced • Strict Typing",
      ar: "متقدم • أنماط صارمة",
    },
    projects: {
      en: ["Iqraa Platform", "AxpoOS", "Maham Platform"],
      ar: ["منصة إقرأ", "AxpoOS", "منصة مَهام"],
    },
    description: {
      en: "Strict type safety, generics, discriminated unions, and scalable codebase contracts.",
      ar: "أمان برمجي صارم، أنماط عامة متقدمة، وضبط عقود واجهات البيانات.",
    },
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    color: "#38bdf8",
    iconSrc: SKILL_ICON_DATA["tailwind"] || "/icons/skills/tailwind.svg",
    score: "Production Core",
    connections: ["nextjs", "react", "shadcnui", "css3"],
    level: {
      en: "Expert • Design Systems",
      ar: "خبير • نظم التصميم والـ RTL",
    },
    projects: {
      en: ["Iqraa", "Maham Platform", "RoyalMed", "ProHealth"],
      ar: ["منصة إقرأ", "منصة مَهام", "رويال ميد", "برو هيلث"],
    },
    description: {
      en: "Utility-first design systems, custom themes, arbitrary variants, and seamless RTL.",
      ar: "أنظمة تصميم مرنة، سمات لونية تفاعلية، ودعم كامل للاتجاه العربي (RTL).",
    },
  },
  {
    id: "reactquery",
    name: "TanStack Query",
    category: "frontend",
    color: "#ff4154",
    iconSrc: SKILL_ICON_DATA["reactquery"] || "/icons/skills/reactquery.svg",
    score: "Server State",
    connections: ["nextjs", "react", "supabase", "typescript"],
    level: {
      en: "Advanced • Server State",
      ar: "متقدم • إدارة ومزامنة السيرفر",
    },
    projects: {
      en: ["Iqraa (EdTech)", "Maham Platform"],
      ar: ["منصة إقرأ", "منصة مَهام"],
    },
    description: {
      en: "Optimistic mutations, cache invalidation, automated refetching, and offline caching.",
      ar: "تحديثات متفائلة، إبطال الكاش، إعادة الجلب التلقائي، والمزامنة اللحظية.",
    },
  },
  {
    id: "shadcnui",
    name: "Shadcn UI",
    category: "frontend",
    color: "#e2e8f0",
    iconSrc: SKILL_ICON_DATA["shadcnui"] || "/icons/skills/shadcnui.svg",
    score: "Design System",
    connections: ["tailwind", "react", "nextjs"],
    level: {
      en: "Advanced • Radix Primitives",
      ar: "متقدم • مكونات Radix المعيارية",
    },
    projects: {
      en: ["Iqraa", "Maham Platform", "Personal Portfolio"],
      ar: ["منصة إقرأ", "منصة مَهام", "البورتفوليو الشخصي"],
    },
    description: {
      en: "Accessible Radix UI primitives, design consistency, and custom dialog architectures.",
      ar: "مكونات Radix UI سهلة الوصول، سمات مبنية على التوكنز وتناسق بصري متكامل.",
    },
  },
  {
    id: "framermotion",
    name: "Framer Motion",
    category: "frontend",
    color: "#f43f5e",
    iconSrc: SKILL_ICON_DATA["framermotion"] || "/icons/skills/framermotion.svg",
    score: "60FPS UI",
    connections: ["react", "nextjs", "tailwind"],
    level: {
      en: "Advanced • 60FPS Physics",
      ar: "متقدم • فيزياء حركة 60FPS",
    },
    projects: {
      en: ["RoyalMed", "Iqraa", "Cosmic Portfolio"],
      ar: ["رويال ميد", "منصة إقرأ", "البورتفوليو الكوني"],
    },
    description: {
      en: "Spring physics, layout transitions, scroll-linked parallax, and gesture controls.",
      ar: "حركات انسيابية ناعمة بفيزياء النوابض، بارالاكس التمرير والتفاعل باللمس.",
    },
  },
  {
    id: "redux",
    name: "Redux / Zustand",
    category: "frontend",
    color: "#764abc",
    iconSrc: SKILL_ICON_DATA["redux"] || "/icons/skills/redux.svg",
    score: "Client State",
    connections: ["react", "nextjs", "typescript"],
    level: {
      en: "Advanced • State Stores",
      ar: "متقدم • إدارة الحالة العالمية",
    },
    projects: {
      en: ["RoyalMed (Redux)", "Maham Platform (Zustand)"],
      ar: ["رويال ميد (Redux)", "منصة مَهام (Zustand)"],
    },
    description: {
      en: "Predictable state slices, persistent stores, and client session hydration.",
      ar: "إدارة الحالة العالمية، تقطيع البيانات (slices)، ومزامنة التخزين المحلي.",
    },
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    color: "#f7df1e",
    iconSrc: SKILL_ICON_DATA["javascript"] || "/icons/skills/javascript.svg",
    score: "Core Language",
    connections: ["typescript", "react", "nodejs", "html5"],
    level: {
      en: "Expert • Modern ESNext",
      ar: "خبير • معايير ESNext الحديثة",
    },
    projects: {
      en: ["RoyalMed", "B-Labn", "Frenzy Blog", "YouTube Clone"],
      ar: ["رويال ميد", "بـ لبن", "فرينزي بلوج", "يوتيوب كلون"],
    },
    description: {
      en: "Modern ESNext, asynchronous event loop, microtasks, Closures, and DOM optimization.",
      ar: "محرك الجافاسكريبت الحديث، البرمجة غير المتزامنة والتعامل الأمثل مع الـ DOM.",
    },
  },
  {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    color: "#e34f26",
    iconSrc: SKILL_ICON_DATA["html5"] || "/icons/skills/html5.svg",
    score: "Semantic Web",
    connections: ["css3", "javascript", "react"],
    level: {
      en: "Expert • Semantic Web",
      ar: "خبير • هيكلية الويب ومعايير SEO",
    },
    projects: {
      en: ["All Production Projects"],
      ar: ["كافة المشاريع الإنتاجية"],
    },
    description: {
      en: "Semantic markup, modern accessibility (a11y), responsive media, and web standards.",
      ar: "هيكلية الويب الدلالية، إمكانية الوصول، الوسائط المتكيفة ومعايير الويب.",
    },
  },
  {
    id: "css3",
    name: "CSS3",
    category: "frontend",
    color: "#1572b6",
    iconSrc: SKILL_ICON_DATA["css3"] || "/icons/skills/css3.svg",
    score: "Layout Engine",
    connections: ["html5", "tailwind", "framermotion"],
    level: {
      en: "Expert • Layout Engines",
      ar: "خبير • تحويلات وشبكات CSS",
    },
    projects: {
      en: ["All Web Projects"],
      ar: ["كافة مشاريع الواجهات"],
    },
    description: {
      en: "CSS Grid, Flexbox, GPU-accelerated transforms, animations, and custom properties.",
      ar: "أنظمة التخطيط الشبكي، تحويلات كارت الشاشة المسرعة، ومتغيرات CSS الحديثة.",
    },
  },

  // ==========================================
  // BACKEND, APIS & CLOUD DATA
  // ==========================================
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    color: "#5fa04e",
    iconSrc: SKILL_ICON_DATA["nodejs"] || "/icons/skills/nodejs.svg",
    score: "Backend Engine",
    connections: ["express", "mongodb", "postgresql", "nestjs", "javascript", "typescript"],
    level: {
      en: "Advanced • Backend Services",
      ar: "متقدم • خوادم عالية الإنتاجية",
    },
    projects: {
      en: ["RoyalMed", "ProHealth", "B-Labn", "Frenzy Blog"],
      ar: ["رويال ميد", "برو هيلث", "بـ لبن", "فرينزي بلوج"],
    },
    description: {
      en: "Asynchronous I/O, REST APIs, stream pipelines, authentication, and microservices.",
      ar: "معالجة المدخلات غير المتزامنة، واجهات REST، وتدفق البيانات والمصادقة الأمنية.",
    },
  },
  {
    id: "express",
    name: "Express.js",
    category: "backend",
    color: "#a1a1aa",
    iconSrc: SKILL_ICON_DATA["express"] || "/icons/skills/express.svg",
    score: "API Services",
    connections: ["nodejs", "mongodb", "restapi"],
    level: {
      en: "Advanced • API Middleware",
      ar: "متقدم • سلاسل الميدلوير والتوثيق",
    },
    projects: {
      en: ["RoyalMed", "ProHealth", "Frenzy Blog"],
      ar: ["رويال ميد", "برو هيلث", "فرينزي بلوج"],
    },
    description: {
      en: "Robust middleware pipelines, route protection, rate limiting, and JWT validation.",
      ar: "برمجة سلاسل الـ Middleware، حماية المسارات، وتوثيق المستخدمين بـ JWT.",
    },
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "backend",
    color: "#e0234e",
    iconSrc: SKILL_ICON_DATA["nestjs"] || "/icons/skills/nestjs.svg",
    score: "Enterprise Modular",
    connections: ["nodejs", "postgresql", "typescript"],
    level: {
      en: "Enterprise • Modular Backend",
      ar: "مؤسسي • معمارية الخدمات المنظمة",
    },
    projects: {
      en: ["Iqraa API (Backend Core)"],
      ar: ["سيرفر منصة إقرأ (Iqraa API)"],
    },
    description: {
      en: "Modular architecture, dependency injection, BullMQ background queues & WebSockets.",
      ar: "معمارية معيارية، حقن التبعيات، طوابير مهام BullMQ والاتصال الفوري بـ WebSockets.",
    },
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "backend",
    color: "#3ecf8e",
    iconSrc: SKILL_ICON_DATA["supabase"] || "/icons/skills/supabase.svg",
    score: "Realtime Cloud",
    connections: ["postgresql", "nextjs", "react", "reactquery"],
    level: {
      en: "Production • Realtime & Auth",
      ar: "إنتاجي • التزامن الفوري وحماية RLS",
    },
    projects: {
      en: ["Iqraa Platform", "Traxr", "Maham Platform"],
      ar: ["منصة إقرأ", "منصة تتبع Traxr", "منصة مَهام"],
    },
    description: {
      en: "Row-Level Security (RLS), edge functions, realtime data sync, and storage buckets.",
      ar: "أمان على مستوى السطر (RLS)، الدوال السحابية، التزامن الفوري وتخزين الملفات.",
    },
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "backend",
    color: "#4169e1",
    iconSrc: SKILL_ICON_DATA["postgresql"] || "/icons/skills/postgresql.svg",
    score: "Production DB",
    connections: ["supabase", "nestjs", "nodejs", "nextjs"],
    level: {
      en: "Advanced • Relational Data",
      ar: "متقدم • قواعد البيانات العلائقية",
    },
    projects: {
      en: ["Iqraa Platform", "Traxr", "Maham Platform"],
      ar: ["منصة إقرأ", "منصة Traxr", "منصة مَهام"],
    },
    description: {
      en: "ACID transactions, relational schema design, complex joins, indexing, and JSONB.",
      ar: "المعاملات المحمية (ACID)، تصميم المخططات العلائقية، الفهارس واستعلامات JSONB.",
    },
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "backend",
    color: "#47a248",
    iconSrc: SKILL_ICON_DATA["mongodb"] || "/icons/skills/mongodb.svg",
    score: "Document Store",
    connections: ["nodejs", "express", "react"],
    level: {
      en: "Advanced • Document Store",
      ar: "متقدم • قواعد بيانات المستندات",
    },
    projects: {
      en: ["RoyalMed", "ProHealth", "B-Labn", "Frenzy Blog"],
      ar: ["رويال ميد", "برو هيلث", "بـ لبن", "فرينزي بلوج"],
    },
    description: {
      en: "Mongoose ODM schemas, aggregation pipelines, document indexing, and clustering.",
      ar: "مخططات Mongoose، خطوط تجميع البيانات المعقدة وفهارس الاستعلام السريعة.",
    },
  },
  {
    id: "restapi",
    name: "REST APIs & JWT",
    category: "backend",
    color: "#06b6d4",
    iconSrc: SKILL_ICON_DATA["restapi"] || "/icons/skills/restapi.svg",
    score: "Auth & Security",
    connections: ["nodejs", "express", "react", "nextjs"],
    level: {
      en: "Expert • Secure Auth Pipelines",
      ar: "خبير • واجهات وتوثيق آمن",
    },
    projects: {
      en: ["RoyalMed", "ProHealth", "Iqraa", "YouTube Clone"],
      ar: ["رويال ميد", "برو هيلث", "منصة إقرأ", "يوتيوب كلون"],
    },
    description: {
      en: "Strict JWT authentication, OTP verification, rate limiting, and webhook dispatch.",
      ar: "توثيق مشفر بـ JWT، التحقق بـ OTP، حماية المعدل (Rate Limiting) وربط الويب هوكس.",
    },
  },

  // ==========================================
  // SYSTEMS, CLOUD & MECHATRONICS
  // ==========================================
  {
    id: "docker",
    name: "Docker",
    category: "systems",
    color: "#2496ed",
    iconSrc: SKILL_ICON_DATA["docker"] || "/icons/skills/docker.svg",
    score: "Platform & Deploy",
    connections: ["nodejs", "nestjs", "linux", "postgresql"],
    level: {
      en: "Intermediate • Containers",
      ar: "متوسط • بيئات الحاويات السحابية",
    },
    projects: {
      en: ["Iqraa API", "Isolated Development Stacks"],
      ar: ["سيرفر إقرأ API", "بيئات التطوير المعزولة"],
    },
    description: {
      en: "Multi-stage Dockerfiles, docker-compose orchestration, and isolated development setups.",
      ar: "ملفات تشغيل متعددة المراحل، تشغيل الخدمات بـ docker-compose، وعزل البيئات.",
    },
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "systems",
    color: "#f05032",
    iconSrc: SKILL_ICON_DATA["git"] || "/icons/skills/git.svg",
    score: "CI/CD & Workflows",
    connections: ["linux", "nextjs", "react", "docker"],
    level: {
      en: "Advanced • CI/CD Workflows",
      ar: "متقدم • إدارة المستودعات والـ CI/CD",
    },
    projects: {
      en: ["All Repositories on GitHub"],
      ar: ["كافة المستودعات والمشاريع على GitHub"],
    },
    description: {
      en: "Trunk-based and branch workflows, PR code reviews, Vercel CI/CD automated deployments.",
      ar: "إدارة الفروع، مراجعات الأكواد (PRs)، والنشر الآلي المستمر عبر منصة Vercel.",
    },
  },
  {
    id: "electron",
    name: "Electron",
    category: "systems",
    color: "#47848f",
    iconSrc: SKILL_ICON_DATA["electron"] || "/icons/skills/electron.svg",
    score: "Desktop Runtime",
    connections: ["react", "nodejs", "typescript"],
    level: {
      en: "Advanced • Desktop Apps",
      ar: "متقدم • تطبيقات سطح المكتب",
    },
    projects: {
      en: ["Maham Desktop (School OS)"],
      ar: ["تطبيق مَهام المكتبي (إدارة المدارس)"],
    },
    description: {
      en: "Cross-platform desktop packaging, native IPC bridge, file system access, and installers.",
      ar: "تغليف تطبيقات الويب كبرامج ديسكتوب لنظامي ويندوز وماك مع جسور ربط آمنة.",
    },
  },
  {
    id: "linux",
    name: "Linux & Bash",
    category: "systems",
    color: "#fcc624",
    iconSrc: SKILL_ICON_DATA["linux"] || "/icons/skills/linux.svg",
    score: "Server Operations",
    connections: ["docker", "git", "python", "nodejs"],
    level: {
      en: "Advanced • Shell & Servers",
      ar: "متقدم • إدارة السيرفرات وشل لينكس",
    },
    projects: {
      en: ["Iqraa Production VPS", "Server Automation"],
      ar: ["خادم منصة إقرأ الإنتاجي", "أتمتة السيرفرات"],
    },
    description: {
      en: "Shell automation, systemd daemon management, SSH, server provisioning, and cron jobs.",
      ar: "أتمتة أوامر الشل، إدارة الخدمات الخلفية، الاتصال الآمن بـ SSH والخوادم.",
    },
  },
  {
    id: "wordpress",
    name: "WordPress / CMS",
    category: "systems",
    color: "#21759b",
    iconSrc: SKILL_ICON_DATA["wordpress"] || "/icons/skills/wordpress.svg",
    score: "Headless & Themes",
    connections: ["javascript", "html5", "css3"],
    level: {
      en: "Advanced • Custom Themes",
      ar: "متقدم • برمجة قوالب مخصصة بـ PHP",
    },
    projects: {
      en: ["Skyscrapers Real Estate", "Wanderlust Travel"],
      ar: ["بوابة سكاي سكريبرز العقارية", "بوابة السياحة الدولية"],
    },
    description: {
      en: "Custom PHP theme architecture, Custom Post Types (CPTs), headless integration, and e-commerce.",
      ar: "برمجة القوالب المخصصة بـ PHP، أنواع البيانات (CPTs)، وحلول التجارة الإلكترونية.",
    },
  },
  {
    id: "python",
    name: "Python",
    category: "systems",
    color: "#3776ab",
    iconSrc: SKILL_ICON_DATA["python"] || "/icons/skills/python.svg",
    score: "Automation & AI",
    connections: ["linux", "cplusplus", "nodejs"],
    level: {
      en: "Advanced • Automation & AI",
      ar: "متقدم • الأتمتة والذكاء الاصطناعي",
    },
    projects: {
      en: ["Iqraa AI Document Parsers", "Robotics Algorithms"],
      ar: ["مسارات معالجة وتلخيص المحاضرات بإقرأ", "خوارزميات الروبوتات"],
    },
    description: {
      en: "Automation scripts, data processing, AI API orchestration, and mechatronics math.",
      ar: "سكريبتات الأتمتة، معالجة البيانات، ربط نماذج الذكاء الاصطناعي ورياضيات التحكم.",
    },
  },
  {
    id: "cplusplus",
    name: "C / C++",
    category: "systems",
    color: "#00599c",
    iconSrc: SKILL_ICON_DATA["cplusplus"] || "/icons/skills/cplusplus.svg",
    score: "Embedded Systems",
    connections: ["arduino", "python", "linux"],
    level: {
      en: "Academic • Embedded Systems",
      ar: "أكاديمي • أنظمة الميكاترونكس المدمجة",
    },
    projects: {
      en: ["Mechatronics Engineering Labs", "Firmware Logic"],
      ar: ["مشاريع هندسة الميكاترونكس", "برمجة المتحكمات"],
    },
    description: {
      en: "Low-level memory management, pointers, embedded controllers, and hardware actuation.",
      ar: "إدارة الذاكرة المباشرة، المتحكمات الدقيقة، والتكامل الهندسي مع العتاد الفيزيائي.",
    },
  },
  {
    id: "arduino",
    name: "Arduino / IoT",
    category: "systems",
    color: "#00979d",
    iconSrc: SKILL_ICON_DATA["arduino"] || "/icons/skills/arduino.svg",
    score: "Sensors & Robotics",
    connections: ["cplusplus", "python"],
    level: {
      en: "Mechatronics • Sensors & Actuators",
      ar: "ميكاترونكس • حساسات ومحركات صناعية",
    },
    projects: {
      en: ["Robotics & Sensor Telemetry Systems"],
      ar: ["أنظمة قراءة الحساسات والروبوتات الصناعية"],
    },
    description: {
      en: "Microcontrollers, I2C/SPI protocols, motor drivers, sensor telemetry, and robotics.",
      ar: "برمجة المتحكمات، بروتوكولات الاتصال الصناعي، قيادة المحركات والروبوتات.",
    },
  },
];
