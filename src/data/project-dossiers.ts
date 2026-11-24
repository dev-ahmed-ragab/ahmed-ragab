export interface ProjectMetric {
  label: { en: string; ar: string };
  value: string;
  description: { en: string; ar: string };
}

export interface ProjectOwnership {
  roleTitle: { en: string; ar: string };
  summary: { en: string; ar: string };
  responsibilities: { en: string[]; ar: string[] };
  architecturalDecisions: Array<{
    decision: { en: string; ar: string };
    rationale: { en: string; ar: string };
  }>;
}

export interface ProjectProblemSpace {
  overview: { en: string; ar: string };
  painPoints: Array<{
    title: { en: string; ar: string };
    description: { en: string; ar: string };
  }>;
}

export interface ProjectArchitectureLayer {
  name: { en: string; ar: string };
  tech: string;
  details: { en: string; ar: string };
}

export interface ProjectArchitecture {
  overview: { en: string; ar: string };
  diagramAscii?: string;
  layers: ProjectArchitectureLayer[];
}

export interface DatabaseModel {
  name: string;
  description: { en: string; ar: string };
  keyFields: string[];
}

export interface ProjectDatabase {
  engine: string;
  summary: { en: string; ar: string };
  schemaLanguage: "prisma" | "sql" | "typescript" | "json";
  codeSnippet: string;
  modelsOrTables: DatabaseModel[];
}

export interface EngineeringHighlight {
  title: { en: string; ar: string };
  category: { en: string; ar: string };
  challenge: { en: string; ar: string };
  solution: { en: string; ar: string };
  codeSnippet?: {
    language: string;
    code: string;
  };
}

export interface ProjectGalleryItem {
  id: string;
  src: string;
  title: { en: string; ar: string };
  caption: { en: string; ar: string };
}

export interface ProjectTechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  devopsAndTools: string[];
}

export interface ProjectOutcome {
  metric: string;
  label: { en: string; ar: string };
  detail: { en: string; ar: string };
}

export interface ProjectDossier {
  id: string;
  slug: string;
  badge: { en: string; ar: string };
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  category: "Enterprise SaaS" | "Flagship Tool" | "Full-Stack MERN" | "Frontend & Media";
  year: string;
  status: { en: string; ar: string };
  heroImage: string;
  links: {
    demo?: string;
    github?: string;
    githubNotice?: { en: string; ar: string };
  };
  metrics: ProjectMetric[];
  ownership: ProjectOwnership;
  problemSpace: ProjectProblemSpace;
  architecture: ProjectArchitecture;
  database: ProjectDatabase;
  engineeringHighlights: EngineeringHighlight[];
  gallery: ProjectGalleryItem[];
  techStack: ProjectTechStack;
  outcomes: ProjectOutcome[];
}

export const projectDossiers: Record<string, ProjectDossier> = {
  // =========================================================================
  // 1. IQRAA PLATFORM — Founder & Flagship SaaS
  // =========================================================================
  "iqraa-ai-saas": {
    id: "iqraa",
    slug: "iqraa-ai-saas",
    badge: { en: "Production EdTech SaaS", ar: "منصة تعليمية سحابية إنتاجية" },
    title: {
      en: "Iqraa — AI-Powered Educational Platform",
      ar: "إقرأ — منصة التعليم والتقييم بالذكاء الاصطناعي",
    },
    subtitle: {
      en: "Multi-Tenant AI EdTech & Talent Readiness Cloud Ecosystem",
      ar: "منظومة سحابية متعددة المستأجرين لقياس جاهزية المهارات وتحليل الأداء بالذكاء الاصطناعي",
    },
    category: "Enterprise SaaS",
    year: "2025 – Present",
    status: { en: "Live in Production (1,000+ Active Students)", ar: "متاحة في الإنتاج (أكثر من 1,000 طالب نشط)" },
    heroImage: "/assets/projects/iqraa-hero-v2.jpg",
    links: {
      demo: "https://iqraa.live",
      githubNotice: {
        en: "Proprietary Commercial Startup — Private Codebase",
        ar: "مشروع ناشئ تجاري خاص — الكود غير معلن لأسباب تنافسية",
      },
    },
    metrics: [
      {
        value: "1,000+",
        label: { en: "Active Students", ar: "طالب نشط بالمنظومة" },
        description: { en: "Undergraduates actively enrolled across structured modules", ar: "طلاب ملتحقون بالمنظومة في مختلف المواد" },
      },
      {
        value: "< 2.0s",
        label: { en: "Query Latency", ar: "زمن استجابة الاستعلامات" },
        description: { en: "Sub-second database queries & fast edge-rendered SSR", ar: "استعلامات سريعة وتصيير على شبكة الحافة" },
      },
      {
        value: "14+",
        label: { en: "Domain Schemas", ar: "مخططات قواعد بيانات" },
        description: { en: "Modular Prisma domain schemas with zero cross-tenant leaks", ar: "مخططات Prisma معزولة تماماً لكل قطاع" },
      },
      {
        value: "99.8%",
        label: { en: "Uptime Reliability", ar: "موثوقية التشغيل" },
        description: { en: "Fault-tolerant Redis queue workers with automated retries", ar: "طوابير Redis متسامحة مع الأخطاء وإعادة محاولة تلقائية" },
      },
    ],
    ownership: {
      roleTitle: {
        en: "Technical Founder & Lead Systems Architect",
        ar: "المؤسس التقني وكبير مهندسي المنظومة",
      },
      summary: {
        en: "Led product strategy, architectural design, cloud infrastructure, and full-stack implementation from day zero. Authored the proprietary IPI scoring algorithm and automated AI agent pipelines.",
        ar: "قيادة الرؤية الفنية، وهندسة المعمارية السحابية، والتنفيذ البرمجي الشامل من نقطة الصفر. ابتكار خوارزمية IPI لحساب جاهزية المواهب وتطوير وكلاء الذكاء الاصطناعي الأكاديميين.",
      },
      responsibilities: {
        en: [
          "Architected the multi-tenant core supporting dynamic subdomains with isolated schema partitioning.",
          "Designed and implemented the proprietary Iqraa Performance Index (IPI) mathematical scoring engine.",
          "Engineered asynchronous BullMQ background workers with Redis for PDF text extraction and embeddings.",
          "Integrated multi-model LLM inference via Vercel AI SDK with fallback resilience across Claude, OpenAI, and Gemini.",
          "Constructed fine-grained CASL capability-based authorization guards across NestJS and React contexts.",
        ],
        ar: [
          "تصميم البنية السحابية المتعددة المستأجرين مع دعم النطاقات الفرعية الحيوية وعزل البيانات الصارم.",
          "ابتكار وهندسة خوارزمية مؤشر الأداء الأكاديمي (IPI) لحساب التقييم المركب وتوليد الرادار البياني.",
          "بناء مسار معالجة مهام غير متزامن باستخدام BullMQ و Redis لمعالجة كتب وملفات الـ PDF واستخراج المتجهات.",
          "دمج وكلاء الذكاء الاصطناعي عبر Vercel AI SDK مع دعم التبديل التلقائي بين Claude و OpenAI و Gemini.",
          "تطبيق نظام حوكمة الصلاحيات المتقدم CASL على مستوى الخادم (NestJS Guards) والواجهة (React Context).",
        ],
      },
      architecturalDecisions: [
        {
          decision: { en: "Modular Monolith (NestJS + Prisma) over Microservices", ar: "معمارية Modular Monolith (NestJS + Prisma) بدلاً من الخدمات المصغرة" },
          rationale: {
            en: "Preserved high developer velocity, type safety, and atomic transactions while isolating domains into clean, independent modules ready for future extraction.",
            ar: "الحفاظ على سرعة التطوير وضمان سلامة الأنواع والمعاملات الذرية مع فصل القطاعات في موديولات مستقلة.",
          },
        },
        {
          decision: { en: "Asynchronous BullMQ Queue for AI & Document Ingestion", ar: "استخدام طوابير BullMQ غير المتزامنة لمهام الذكاء الاصطناعي ومعالجة الوثائق" },
          rationale: {
            en: "Prevented heavy PDF parsing and LLM token generation from choking HTTP request threads, maintaining sub-second API responsiveness.",
            ar: "منع معالجة الملفات الثقيلة وتوليد نصوص الذكاء الاصطناعي من تعطيل خيوط طلبات HTTP، مما حافظ على سرعة الاستجابة.",
          },
        },
        {
          decision: { en: "CASL Ability-Based Access Control over Simple RBAC", ar: "اعتماد حوكمة الصلاحيات المبنية على القدرات (CASL) بدلاً من RBAC البسيط" },
          rationale: {
            en: "Allowed condition-based permission checks (e.g., 'Student can view submission only if graded OR within their enrolled faculty') in both client and server.",
            ar: "إتاحة فحص الصلاحيات الشرطية الدقيقة (مثل: يمكن للطالب رؤية التقييم فقط إذا تم تصحيحه أو داخل كليته) على الخادم والعميل بنفس القواعد.",
          },
        },
      ],
    },
    problemSpace: {
      overview: {
        en: "Traditional higher-education platforms are hindered by static evaluation systems, disconnected toolchains, and lack of actionable talent telemetry. Simultaneously, universities lack frictionless multi-tenant software to host independent academic workspaces.",
        ar: "تعاني المنظومات التعليمية والجامعية من أدوات تقييم تقليدية قائمة على الحفظ دون قياس الجاهزية العملية لسوق العمل، مع صعوبة توفير مساحات تعليمية رقمية مستقلة لكل كلية دون تكاليف سحابية باهظة.",
      },
      painPoints: [
        {
          title: { en: "Rote Memory vs. Practical Readiness", ar: "الانفصال بين التقييم الأكاديمي والجاهزية العملية" },
          description: {
            en: "Grading matrices rarely quantify multi-dimensional engineering competencies or problem-solving speed.",
            ar: "درجات الامتحانات التقليدية لا تعكس مهارات حل المشكلات الهندسية ولا سرعة التحليل أو الجاهزية التقنية.",
          },
        },
        {
          title: { en: "Fragmented University Infrastructure", ar: "تشتت البنية التحتية وصعوبة الاستضافة المتعددة" },
          description: {
            en: "Colleges struggle to provision isolated evaluation environments for individual hackathons or faculties.",
            ar: "رغبة الكليات في امتلاك بيئات تقييم معزولة وخاصة بكل قسم أو هاكاثون دون بناء بنية تحتية من الصفر.",
          },
        },
        {
          title: { en: "Slow Feedback Loops in Evaluation", ar: "بطء التقييم والافتقار للتغذية الراجعة الفورية" },
          description: {
            en: "Weeks pass before students receive feedback on large engineering submissions, killing learning momentum.",
            ar: "استغراق أسابيع في فحص مشاريع وتقييمات الطلاب دون تقديم تغذية راجعة فورية أو قياس نقاط الضعف بدقة.",
          },
        },
      ],
    },
    architecture: {
      overview: {
        en: "A robust modern cloud architecture structured into client interfaces (Next.js 15 App Router & React 19), an API core in NestJS, an asynchronous job processing cluster with Redis and BullMQ, and a multi-tenant PostgreSQL database governed by Prisma ORM.",
        ar: "معمارية سحابية حديثة مقسمة إلى طبقة واجهات العميل بـ Next.js 15 و React 19، ونواة خادم بـ NestJS، وعنقود معالجة غير متزامن بـ BullMQ و Redis، وقاعدة بيانات PostgreSQL متعددة المستأجرين بنظام Prisma ORM.",
      },
      diagramAscii: `
+---------------------------------------------------------------------------------+
|                                CLIENT LAYER (Edge)                              |
|  Next.js 15 (App Router) + React 19 | Tailwind CSS | Radix UI | CASL Ability    |
+---------------------------------------------------------------------------------+
                                       |
                   [HTTPS / REST & WebSocket Gateways]
                                       v
+---------------------------------------------------------------------------------+
|                             API CORE (NestJS Engine)                            |
|  - Dynamic Subdomain Resolution      - Identity & CASL Guards (JWT/RBAC)        |
|  - IPI Algorithmic Scoring Engine    - AI Ingestion & LLM Orchestrator          |
+---------------------------------------------------------------------------------+
           |                                                 |
           v                                                 v
+------------------------+                        +-------------------------------+
|  ASYNC WORKERS CLUSTER |                        |      DATABASE LAYER           |
|  BullMQ + Redis        |                        |  PostgreSQL (Multi-Tenant)    |
|  - OCR & Embeddings    |                        |  - 14 Domain Prisma Schemas   |
|  - PDF Quiz Generator  |                        |  - Granular Tenant Partition  |
|  - Telemetry Synthesis |                        |  - Audit Log Hashes           |
+------------------------+                        +-------------------------------+
      `,
      layers: [
        {
          name: { en: "Client Presentation Layer", ar: "طبقة واجهات العميل" },
          tech: "Next.js 15 (App Router), React 19, Tailwind CSS, Lucide, Recharts",
          details: {
            en: "Zero-latency SSR pages, interactive student competency radars, responsive lesson players, and localized RTL/LTR layout.",
            ar: "صفحات مصيرة على الحافة دون تأخير، رادارات تفاعلية لمؤشرات الطالب، ومشغلات محاضرات تدعم العربية والإنجليزية.",
          },
        },
        {
          name: { en: "API Core & Business Logic", ar: "طبقة الأعمال والخدمات السحابية" },
          tech: "NestJS, TypeScript, CASL, class-validator, Swagger OpenAPI",
          details: {
            en: "Strictly typed REST endpoints, dynamic multi-tenant domain resolution, student lifecycle management, and rate-limited auth gates.",
            ar: "خدمات برمجية دقيقة الأنواع، معالجة النطاقات الفرعية لكل كلية، وإدارة دورة حياة الطالب وصلاحياته بصرامة.",
          },
        },
        {
          name: { en: "Background Job Processing", ar: "طبقة المعالجة غير المتزامنة" },
          tech: "BullMQ, Redis, Worker Threads",
          details: {
            en: "Queue-backed document parsing, vector embeddings generation, automated code rubric scoring, and notification dispatch.",
            ar: "طوابير خلفية لمعالجة مستندات المناهج، وتوليد متجهات النصوص، وتصحيح المهام البرمجية وإرسال الإشعارات.",
          },
        },
        {
          name: { en: "Data & Storage Tier", ar: "طبقة قواعد البيانات والتخزين" },
          tech: "PostgreSQL, Prisma ORM, S3/Cloudflare R2 Object Storage",
          details: {
            en: "Partitioned relational tables with cryptographic audit hashes, foreign key cascading, and CDN-backed PDF assets.",
            ar: "جداول علائقية معزولة مع بصمة رقمية لمراجعة التعديلات، وعلاقات متماسكة، وتخزين سحابي لملفات المحاضرات.",
          },
        },
      ],
    },
    database: {
      engine: "PostgreSQL 16 + Prisma ORM (14 Sub-Schemas)",
      summary: {
        en: "Organized across 14 focused domain schemas (identity, organizations, ipi, assessments, ai, courses, etc.) with strict tenant isolation and integrity verification.",
        ar: "موزعة عبر 14 مخططاً قطاعياً متخصصاً (الهوية، المؤسسات، مؤشر الأداء IPI، التقييمات، الذكاء الاصطناعي، المناهج) مع عزل كامل لكل مستأجر وبصمات تدقيق مشفرة.",
      },
      schemaLanguage: "prisma",
      codeSnippet: `// =============================================================================
// Iqraa Platform — IPI Domain & Algorithmic Scoring Schema
// =============================================================================

model IpiRecord {
  id                 String                @id @default(uuid())
  userId             String
  courseId           String?
  taskSubmissionId   String?
  category           IpiCategory
  sourceType         String
  sourceWeight       Float                 @default(1.0)
  title              String
  rawPoints          Float
  finalPoints        Float                 @default(0)
  roleImpact         Float                 @default(1.0)
  verificationStatus IpiVerificationStatus @default(SELF_REPORTED)
  integrityHash      String?               // Cryptographic verification hash
  skillsGained       String[]
  lastActivityAt     DateTime              @default(now())
  createdAt          DateTime              @default(now())
  updatedAt          DateTime              @updatedAt

  user               User                  @relation(fields: [userId], references: [id], onDelete: Cascade)
  course             Course?               @relation(fields: [courseId], references: [id])
  auditLogs          IpiAuditLog[]

  @@index([userId, category])
  @@index([userId, lastActivityAt])
}

model IpiAuditLog {
  id          String   @id @default(uuid())
  recordId    String
  actorId     String
  changeDelta Json
  createdAt   DateTime @default(now())

  record      IpiRecord @relation(fields: [recordId], references: [id], onDelete: Cascade)
}`,
      modelsOrTables: [
        {
          name: "IpiRecord",
          description: {
            en: "Core unit of competency telemetry. Stores raw performance points, applied weights, and cryptographic verification hash.",
            ar: "الوحدة الأساسية لرصد المهارات. تخزن النقاط الخام، والأوزان النسبية، والبصمة الرقمية للتحقق من النزاهة.",
          },
          keyFields: ["id", "userId", "category", "rawPoints", "finalPoints", "integrityHash"],
        },
        {
          name: "User & StudentProfile",
          description: {
            en: "Identity entity coupled with institutional affiliations, cumulative readiness tiers, and CASL permission scopes.",
            ar: "كيان الهوية المرتبط بالانتماء المؤسسي، ومستوى الجاهزية التراكمي، ونطاق صلاحيات CASL.",
          },
          keyFields: ["id", "email", "username", "role", "organizationId", "isActive"],
        },
        {
          name: "AiConversation & AiMetric",
          description: {
            en: "Tracks RAG contextual chat interactions, token consumption, query resolution speed, and extracted comprehension scores.",
            ar: "تتبع محادثات المساعد الأكاديمي الذكي، واستهلاك الرموز، وسرعة حل التساؤلات، ومؤشرات الفهم المستخلصة.",
          },
          keyFields: ["id", "userId", "modelName", "contextTokens", "evaluationRating"],
        },
      ],
    },
    engineeringHighlights: [
      {
        title: { en: "The IPI Talent Readiness Algorithm", ar: "خوارزمية مؤشر قياس الجاهزية الأكاديمية (IPI)" },
        category: { en: "Algorithmic Engineering", ar: "هندسة الخوارزميات" },
        challenge: {
          en: "Synthesizing disparate student activities (code submissions, lecture attendance, quiz accuracy, and peer assistance) into a normalized, tamper-proof score.",
          ar: "تجميع أنشطة الطلاب المتنوعة (تسليمات الكود، حضور المحاضرات، دقة الاختبارات، ومساعدة الزملاء) في تقييم موحد ومحمي من التلاعب.",
        },
        solution: {
          en: "Engineered a compound weighted algorithm with exponential time-decay penalties. Active participation sustains radar dimensions while dormant periods gently decay points, encouraging continuous practice.",
          ar: "هندسة خوارزمية موزونة متعددة المحاور مع تطبيق معامل الاضمحلال الزمني الأسي، مما يشجع الطالب على الاستمرارية ويمنع تراكم النقاط القديمة دون ممارسة حية.",
        },
        codeSnippet: {
          language: "typescript",
          code: `export function calculateIpiScore(records: IpiRecord[], halfLifeDays = 45): number {
  const now = Date.now();
  const decayLambda = Math.LN2 / (halfLifeDays * 86400000);

  return records.reduce((accum, record) => {
    const ageMs = Math.max(0, now - new Date(record.lastActivityAt).getTime());
    const decayFactor = Math.exp(-decayLambda * ageMs);
    const weightedPoints = record.rawPoints * record.sourceWeight * record.roleImpact;
    return accum + (weightedPoints * decayFactor);
  }, 0);
}`,
        },
      },
      {
        title: { en: "Dynamic Tenant Subdomain Partitioning", ar: "عزل المستأجرين بالنطاقات الفرعية الحيوية" },
        category: { en: "Cloud Architecture", ar: "المعمارية السحابية" },
        challenge: {
          en: "Isolating university portals while maintaining a single cohesive code deployment and shared database cluster without risk of cross-tenant data leaks.",
          ar: "عزل بوابات الكليات المختلفة مع الحفاظ على كود برمجي موحد وقاعدة بيانات مشتركة دون أي احتمال لتسرب البيانات بين الجهات.",
        },
        solution: {
          en: "Implemented edge middleware resolving the hostname subdomain, extracting tenant context into async request storage, and automatically applying row-level tenant filters across all Prisma database operations.",
          ar: "تطبيق Middleware على شبكة الحافة يستخلص النطاق الفرعي ويحقن سياق المستأجر في التخزين غير المتزامن للطلب، ليتم تطبيقه آلياً على كافة استعلامات Prisma.",
        },
      },
    ],
    gallery: [
      {
        id: "hero",
        src: "/assets/projects/iqraa-hero-v2.jpg",
        title: { en: "Iqraa Platform Overview", ar: "النظرة العامة لمنصة إقرأ" },
        caption: {
          en: "Multi-tenant AI EdTech platform combining student readiness telemetry, lecture synthesis, and course analytics.",
          ar: "منصة تعليمية سحابية تجمع بين مؤشر الجاهزية الأكاديمية IPI، تحليل المحاضرات بالذكاء الاصطناعي، ومتابعة التقدم.",
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
        title: { en: "Iqraa Hub — Internal Console", ar: "إقرأ هب — لوحة العمليات الداخلية" },
        caption: {
          en: "Companion internal engineering console for bug triage, user feedback, release notes, and technical blog publishing.",
          ar: "منصة التشغيل الداخلية المصاحبة لإدارة البلاغات والأفكار، تتبع الأخطاء، ونشر المدونة التقنية.",
        },
      },
      {
        id: "dashboard",
        src: "/assets/iqraa-dashboard-real.png",
        title: { en: "Live Student AI Dashboard", ar: "لوحة تحكم الطالب والذكاء الاصطناعي الحية" },
        caption: {
          en: "Real-time lecture transcripts, adaptive recommendations, and RAG-generated academic milestones.",
          ar: "تفريغ فوري للمحاضرات، توصيات أكاديمية متكيفة، ومعالم دراسية مولدة بمسارات RAG الذكية.",
        },
      },
      {
        id: "radar",
        src: "/assets/iqraa-activity-radar.png",
        title: { en: "Multidimensional Activity Radar", ar: "رادار النشاط الأكاديمي والتحليلات" },
        caption: {
          en: "Real-time comprehension telemetry, study session durations, and subject mastery radar based on IPI.",
          ar: "مؤشرات فورية لمستوى الفهم والاستيعاب، وتوزيع ساعات المذاكرة، ورادار إتقان المواد المستند لخوارزمية IPI.",
        },
      },
      {
        id: "courses",
        src: "/assets/iqraa-courses-hub.png",
        title: { en: "Course & Curriculum Repository", ar: "مستودع المناهج والمحاضرات" },
        caption: {
          en: "Centralized syllabus repository with instant search and AI audio/PDF ingestion pipelines.",
          ar: "مستودع مركزي للمناهج مع بحث فوري ومعالجة آلية لملفات الصوت و PDF عبر طوابير BullMQ.",
        },
      },
    ],
    techStack: {
      frontend: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Recharts", "CASL Ability"],
      backend: ["NestJS", "Node.js", "Vercel AI SDK", "BullMQ", "class-validator"],
      database: ["PostgreSQL 16", "Prisma ORM", "Redis (Cache & Queues)"],
      devopsAndTools: ["Docker", "Vercel Edge", "GitHub Actions CI/CD", "Vitest", "Playwright"],
    },
    outcomes: [
      {
        metric: "1,000+",
        label: { en: "Active Student Cohort", ar: "طالب نشط بالمنظومة" },
        detail: { en: "Deployed live at iqraa.live and utilized by over 1,000 university students", ar: "تعمل بنجاح على iqraa.live ويستخدمها أكثر من 1,000 طالب جامعي" },
      },
      {
        metric: "< 10s",
        label: { en: "AI Quiz Synthesis", ar: "توليد الاختبارات بالذكاء الاصطناعي" },
        detail: { en: "Reduced exam authoring time from 3 days to under 10 seconds with context-accurate questions", ar: "تقليص زمن إعداد الاختبارات من 3 أيام إلى أقل من 10 ثوانٍ بأسئلة دقيقة المنهج" },
      },
      {
        metric: "0 Data Leaks",
        label: { en: "Tenant Isolation Score", ar: "عزل تام لبيانات المستأجرين" },
        detail: { en: "Flawless multi-tenant boundary compliance verified through automated integration suites", ar: "التزام تام بحدود عزل المؤسسات تم التحقق منه باختبارات تكامل مؤتمتة" },
      },
    ],
  },

  // =========================================================================
  // 2. AXPO-OS — Flagship Project #2
  // =========================================================================
  "axpo-os-enterprise-cockpit": {
    id: "axpo-os",
    slug: "axpo-os-enterprise-cockpit",
    badge: { en: "Flagship B2B Cockpit", ar: "لوحة تحكم مؤسسية رائدة" },
    title: {
      en: "AxpoOS — Enterprise Cloud Cockpit",
      ar: "آكس بو أو إس — نظام تشغيل المؤسسات السحابي",
    },
    subtitle: {
      en: "Next-Gen Enterprise Operating Cockpit & Real-Time Telemetry System",
      ar: "لوحة تحكم وعمليات B2B سحابية لـ 11 قطاعاً مؤسسياً بأحدث معايير الويب",
    },
    category: "Enterprise SaaS",
    year: "2026",
    status: { en: "Production Ready & Live on Vercel", ar: "جاهز للإنتاج ومتاح للمعاينة على Vercel" },
    heroImage: "/assets/projects/axpo-os-hero.jpg",
    links: {
      demo: "https://axpo-os.vercel.app",
      github: "https://github.com/dev-ahmed-ragab/axpo-os",
    },
    metrics: [
      {
        value: "46",
        label: { en: "Production Routes", ar: "مساراً إنتاجياً مدمجاً" },
        description: { en: "Zero build errors across all dashboard domains (Next.js 16)", ar: "تصدير نظيف لكافة المسارات بدون أي أخطاء تجميع" },
      },
      {
        value: "11",
        label: { en: "Enterprise Domains", ar: "قطاعاً مؤسسياً متخصصاً" },
        description: { en: "CRM, Logistics, Academy, File Manager, POS, Finance, etc.", ar: "المبيعات، اللوجستيات، الأكاديمية، إدارة الملفات، والمالية" },
      },
      {
        value: "0ms",
        label: { en: "Theme Switch Delay", ar: "تأخير التبديل اللوني" },
        description: { en: "Instant CSS variables transition with zero Cumulative Layout Shift", ar: "تبديل فوري لمتغيرات CSS دون وميض أو إزاحة للصفحة" },
      },
      {
        value: "100%",
        label: { en: "Zero-Friction Access", ar: "معاينة فورية للموظفين" },
        description: { en: "Instant recruiter bypass mode without cumbersome sign-up barriers", ar: "تجربة النظام بضغطة زر دون حاجة لتسجيل حساب" },
      },
    ],
    ownership: {
      roleTitle: {
        en: "Lead Frontend Architect & Developer",
        ar: "كبير مهندسي الواجهات والمطور الرئيسي",
      },
      summary: {
        en: "Architected and built all 46 production routes using Next.js 16 (App Router) and React 19. Designed the high-performance UI system, TanStack Table v9 virtualized tables, and the Zero-Friction Recruiter Preview engine.",
        ar: "هندسة وتطوير كافة المسارات الـ 46 الإنتاجية بأحدث معايير Next.js 16 و React 19. بناء نظام الواجهات، والجداول الافتراضية بـ TanStack Table v9، ومحرك المعاينة الفورية لمدراء التوظيف.",
      },
      responsibilities: {
        en: [
          "Constructed 46 fully typed production screens across 11 core enterprise domains with Next.js 16 App Router.",
          "Implemented the React 19 Compiler pipeline, eliminating manual useMemo and useCallback boilerplate.",
          "Designed high-density, multi-column sortable and filterable data tables using TanStack Table v9.",
          "Engineered the Zero-Friction Recruiter Onboarding architecture allowing one-click instant evaluation.",
          "Crafted a unified theme token architecture supporting 4 design presets (Cosmic, Slate, Enterprise, Cyber).",
        ],
        ar: [
          "بناء 46 شاشة إنتاجية كاملة الأنواع عبر 11 قطاعاً مؤسسياً باستخدام Next.js 16 App Router.",
          "تفعيل خط أنابيب React 19 Compiler، مما وفر كتابة useMemo و useCallback اليدوية وحسن سرعة التحديث.",
          "تصميم جداول بيانات عالية الكثافة تدعم الفرز والبحث متعدد الأعمدة عبر TanStack Table v9.",
          "ابتكار معمارية المعاينة الفورية لمدراء التوظيف لاختبار النظام بضغطة واحدة دون تعقيدات التسجيل.",
          "بناء محرك سمات وتصميم ديناميكي يتيح التبديل اللحظي بين 4 أنماط جاهزة بدون وميض للشاشة.",
        ],
      },
      architecturalDecisions: [
        {
          decision: { en: "Next.js 16 App Router with React 19 Compiler", ar: "اعتماد Next.js 16 App Router مع مترجم React 19" },
          rationale: {
            en: "Dramatically trimmed bundle overhead and eliminated manual memoization overhead while providing sub-second page transitions across 46 complex dashboards.",
            ar: "تقليص حجم الحزم البرمجية وتسريع الانتقال بين 46 لوحة تحكم بنسبة تتجاوز 40% دون جهد حفظ يدوي.",
          },
        },
        {
          decision: { en: "TanStack Table v9 for High-Density Operational Views", ar: "استخدام TanStack Table v9 للجداول المؤسسية عالية الكثافة" },
          rationale: {
            en: "Enabled headless, customizable tables supporting 10,000+ rows with multi-column sorting, column pinning, and instant client-side filtering.",
            ar: "إتاحة جداول مرنة وخفيفة تتعامل مع آلاف السجلات مع دعم الفرز المتعدد وتثبيت الأعمدة والبحث اللحظي.",
          },
        },
      ],
    },
    problemSpace: {
      overview: {
        en: "Enterprises suffer from tool sprawl: employees constantly tab between isolated SaaS platforms for CRM, finance, HR, logistics, and telemetry. Meanwhile, enterprise dashboard codebases frequently crumble under bundle bloat and sluggish re-renders.",
        ar: "تعاني المؤسسات الكبرى من تشتت موظفيها ومديريها بين عشرات الأدوات المنفصلة (المالية في برنامج، والـ CRM في أداة، والتذاكر في نظام ثالث)، مما يخلق تجربة عمل محبطة وفقداناً لتكامل البيانات مع بطء عام في الأداء.",
      },
      painPoints: [
        {
          title: { en: "Fragmented Tool Sprawl", ar: "تشتت الأنظمة وفقدان التكامل" },
          description: {
            en: "Operating separate applications for logistics, billing, and communication creates data silos and user friction.",
            ar: "استخدام تطبيقات متباعدة لكل إدارة يسبب تكرار إدخال البيانات وضياع الرؤية الشاملة للعمليات.",
          },
        },
        {
          title: { en: "Heavy Bundle Bloat", ar: "ثقل الحزم وبطء الانتقال بين الشاشات" },
          description: {
            en: "Traditional dashboard templates download massive JavaScript payloads, crashing mobile or remote connections.",
            ar: "قوالب لوحات التحكم التقليدية تعاني من بطء التحميل وثقل الـ Bundles عند التعامل مع جداول ورسوم ضخمة.",
          },
        },
        {
          title: { en: "Recruiter Auth Friction", ar: "صعوبة المعاينة للتوظيف" },
          description: {
            en: "80%+ of hiring managers bounce from portfolio apps when forced to create test accounts or fill forms.",
            ar: "يغادر أغلب مسؤولي التوظيف والمهندسين مشاريع البورتفوليو عند مطالبتهم بإنشاء حساب جديد أو ملء استمارات طويلة.",
          },
        },
      ],
    },
    architecture: {
      overview: {
        en: "AxpoOS is structured around Next.js 16 Route Groups: an isolated `(main)` layout containing the navigation sidebar, telemetry header, command palette, and 11 self-contained domain directories with granular route segregation.",
        ar: "معمارية AxpoOS مبنية على مجموعات مسارات Next.js 16: تخطيط رئيسي `(main)` يضم القائمة الجانبية الموحدة وشريط المؤشرات السريعة، مع 11 مجلداً قطاعياً مستقلاً تماماً.",
      },
      diagramAscii: `
+---------------------------------------------------------------------------------+
|                                 AXPO-OS SHELL                                   |
|  Global App Bar | Theme Selector | Instant Recruiter Switcher | Command Palette |
+---------------------------------------------------------------------------------+
                                       |
                   [Next.js 16 App Router Route Groups]
                                       v
+---------------------------------------------------------------------------------+
|                           11 OPERATIONAL DOMAINS                                |
|  +--------------------+  +--------------------+  +----------------------------+ |
|  | CRM & Sales        |  | Finance & Invoicing|  | Logistics & Fleet Telemetry| |
|  | (Pipelines/Deals)  |  | (Ledgers/Reports)  |  | (Live Shipments/Tracking)  | |
|  +--------------------+  +--------------------+  +----------------------------+ |
|  +--------------------+  +--------------------+  +----------------------------+ |
|  | Cloud Infrastructure| | Academy & LMS      |  | POS & Inventory            | |
|  | (Cluster Health)   |  | (Course Catalog)   |  | (Checkout/Stock Counts)    | |
|  +--------------------+  +--------------------+  +----------------------------+ |
|  +--------------------+  +--------------------+  +----------------------------+ |
|  | Chat, Mail, Tasks  |  | HR & Employee Hub  |  | Patient Health Monitoring | |
|  +--------------------+  +--------------------+  +----------------------------+ |
+---------------------------------------------------------------------------------+
                                       |
          [TanStack Table v9 Virtualization + Recharts Telemetry Engine]
      `,
      layers: [
        {
          name: { en: "Application Shell & Layout", ar: "غلاف التطبيق والتخطيط العام" },
          tech: "Next.js 16, Tailwind CSS v4, Radix UI Primitives, Lucide Icons",
          details: {
            en: "Fluid collapsible responsive sidebar, dynamic breadcrumbs, and floating telemetry status pill.",
            ar: "قائمة جانبية متكيفة ومرنة، مسار تنقل ذكي، ومؤشرات حالة النظام الفورية.",
          },
        },
        {
          name: { en: "High-Density Data Layer", ar: "طبقة الجداول والبيانات عالية الكثافة" },
          tech: "TanStack Table v9, React 19 Compiler",
          details: {
            en: "Virtualized high-throughput data grids with multi-level filtering, pagination, and instant CSV export.",
            ar: "جداول افتراضية سريعة تدعم الفلترة المتقدمة والتقسيم وتصدير البيانات.",
          },
        },
        {
          name: { en: "Telemetry & Charts Engine", ar: "محرك الرسوم البيانية والمؤشرات" },
          tech: "Recharts, SVG Accelerators",
          details: {
            en: "Interactive area, radar, and bar metrics with customized dark-mode glassmorphic tooltips.",
            ar: "رسوم بيانية تفاعلية للمبيعات واللوجستيات مع تلميحات زجاجية متوافقة مع النمط الداكن.",
          },
        },
      ],
    },
    database: {
      engine: "Mock Enterprise Telemetry Store & Supabase Schema Blueprint",
      summary: {
        en: "Backed by structured TypeScript interfaces reflecting enterprise ERP entities (organizations, workspaces, deals, shipments, patient vitals, invoices).",
        ar: "مبني على هياكل TypeScript متوافقة مع أنظمة الـ ERP المؤسسية الكبرى (الشركات، الصفقات، الشحنات، فواتير العملاء).",
      },
      schemaLanguage: "typescript",
      codeSnippet: `// =============================================================================
// AxpoOS — Core Enterprise Telemetry & Entity Contracts
// =============================================================================

export interface EnterpriseShipment {
  id: string;
  trackingNumber: string;
  originHub: string;
  destination: string;
  status: "IN_TRANSIT" | "DELIVERED" | "HELD_CUSTOMS" | "EXCEPTION";
  cargoWeightKg: number;
  temperatureSensorsCelsius?: number[];
  estimatedArrival: string;
  assignedCarrier: {
    id: string;
    name: string;
    fleetVehicleId: string;
  };
}

export interface CrmDeal {
  id: string;
  title: string;
  organizationId: string;
  valueUsd: number;
  stage: "LEAD" | "QUALIFIED" | "PROPOSAL" | "NEGOTIATION" | "CLOSED_WON";
  leadScore: number; // 0 - 100
  owner: { name: string; avatarUrl: string };
  lastContactAt: string;
}`,
      modelsOrTables: [
        {
          name: "EnterpriseShipment",
          description: {
            en: "Telemetry payload for live freight, transit status, sensor telemetry, and carrier allocation.",
            ar: "بيانات تتبع الشحنات اللوجستية وحالة النقل وقراءات الحساسات وسائق الشحنة.",
          },
          keyFields: ["id", "trackingNumber", "status", "cargoWeightKg", "estimatedArrival"],
        },
        {
          name: "CrmDeal",
          description: {
            en: "Sales pipeline record with probability scoring, deal stage velocity, and team owner metadata.",
            ar: "سجل صفقات المبيعات مع مؤشر احتمالية الإغلاق ومراحل التفاوض والمسؤول.",
          },
          keyFields: ["id", "title", "valueUsd", "stage", "leadScore"],
        },
      ],
    },
    engineeringHighlights: [
      {
        title: { en: "Zero-Friction Recruiter Onboarding Architecture", ar: "معمارية المعاينة الفورية الخالية من العوائق" },
        category: { en: "UX & Conversion Engineering", ar: "هندسة تجربة الاستخدام ومعدلات التحويل" },
        challenge: {
          en: "Technical hiring managers bounce within 15 seconds if greeted by an auth wall, yet the dashboard requires realistic state to prove engineering depth.",
          ar: "مسؤولو التوظيف يغادرون المنصات إذا واجهوا جدار تسجيل دخول، بينما لوحة التحكم تتطلب بيانات واقعية لإثبات القوة الهندسية.",
        },
        solution: {
          en: "Created an Instant Recruiter Session switcher that seeds local browser state with comprehensive realistic mock telemetry across all 11 modules with a single click.",
          ar: "ابتكار مفتاح لجلسات التوظيف الفورية يقوم بحقن بيانات مؤسسية متكاملة بضغطة زر وتجاوز شاشات التسجيل تماماً.",
        },
      },
    ],
    gallery: [
      {
        id: "hero",
        src: "/assets/projects/axpo-os-hero.jpg",
        title: { en: "AxpoOS Enterprise Command Center", ar: "مركز العمليات السحابي الموحد AxpoOS" },
        caption: {
          en: "Curved glass enterprise cockpit displaying real-time cloud waveforms, telemetry, and CRM pipelines.",
          ar: "لوحة تحكم زجاجية بانورامية تعرض مؤشرات السحابة اللحظية وخريطة اللوجستيات ومبيعات الـ CRM.",
        },
      },
      {
        id: "cockpit",
        src: "/assets/projects/axpo-os.svg",
        title: { en: "Enterprise Cockpit Architecture View", ar: "منظر المعمارية العامة للوحة آكس بو أو إس" },
        caption: {
          en: "Multi-domain cockpit view encompassing 11 operational subsystems with unified telemetry.",
          ar: "لوحة القيادة الموحدة التي تضم 11 قطاعاً تشغيلياً مع مؤشرات أداء فورية.",
        },
      },
    ],
    techStack: {
      frontend: ["Next.js 16 (App Router)", "React 19 (React Compiler)", "Tailwind CSS v4", "shadcn/ui", "TanStack Table v9", "Recharts", "Lucide Icons"],
      backend: ["Next.js Server Actions", "Node.js 22", "TypeScript 6"],
      database: ["Zustand Local State", "Enterprise Schema Entities"],
      devopsAndTools: ["Biome (Fast Linter/Formatter)", "Vercel Zero-Config CI/CD", "TypeScript Strict"],
    },
    outcomes: [
      {
        metric: "46 / 46",
        label: { en: "Production Routes", ar: "مساراً إنتاجياً مكتملاً" },
        detail: { en: "100% build pass rate on Vercel with zero hydration mismatches or layout shifts", ar: "اجتياز كامل لاختبارات البناء والتصدير بنسبة 100% دون أي أخطاء" },
      },
      {
        metric: "< 100ms",
        label: { en: "Route Transition", ar: "سرعة الانتقال بين الشاشات" },
        detail: { en: "Sub-second screen switches facilitated by React 19 automatic compiler optimizations", ar: "انتقال فائق السرعة بين الشاشات الـ 46 بفضل مترجم React 19" },
      },
    ],
  },

  // =========================================================================
  // 3. TRAXR — Flagship Project #3
  // =========================================================================
  "traxr-linear-issue-tracker": {
    id: "traxr",
    slug: "traxr-linear-issue-tracker",
    badge: { en: "Real-Time Engineering Tool", ar: "أداة إنتاجية فورية للمطورين" },
    title: {
      en: "Traxr — Linear-Style Issue Tracker",
      ar: "تراكسر — نظام تتبع المهام فائق السرعة",
    },
    subtitle: {
      en: "Keyboard-First, Offline-Capable Real-Time Engineering Project Tracker",
      ar: "نظام إدارة مشاريع هندسي فائق السرعة والرشاقة مستوحى من Linear مع مزامنة فورية ودعم العمل دون إنترنت",
    },
    category: "Flagship Tool",
    year: "2026",
    status: { en: "Open-Source Flagship & Live on Vercel", ar: "مشروع رائد مفتوح المصدر ومتاح على Vercel" },
    heroImage: "/assets/projects/traxr.svg",
    links: {
      demo: "https://traxr.vercel.app",
      github: "https://github.com/dev-ahmed-ragab/traxr",
    },
    metrics: [
      {
        value: "< 100ms",
        label: { en: "Realtime Sync", ar: "سرعة المزامنة الحية" },
        description: { en: "Sub-100ms multi-client synchronization via Supabase postgres_changes", ar: "مزامنة التعديلات عبر الأجهزة في أجزاء من الثانية" },
      },
      {
        value: "174",
        label: { en: "Automated RLS Tests", ar: "اختبار أمان RLS مؤتمت" },
        description: { en: "Verified multi-tenant data isolation using PGlite integration tests", ar: "فحص أمان وسياسات عزل البيانات بدون أي ثغرات" },
      },
      {
        value: "0ms",
        label: { en: "Optimistic Latency", ar: "تأخير التحديث التفاؤلي" },
        description: { en: "Instant UI updates backed by Zustand state and IndexedDB persistence", ar: "تحديث لحظي لواجهة المستخدم دون انتظار استجابة الخادم" },
      },
      {
        value: "⌘K",
        label: { en: "Command Palette", ar: "قائمة أوامر شاملة" },
        description: { en: "100% keyboard-navigable workflow inspired by Linear & Superhuman", ar: "تنقل كامل بلوحة المفاتيح لإدارة المهام بسرعة البرق" },
      },
    ],
    ownership: {
      roleTitle: {
        en: "Full-Stack & Frontend Engineer",
        ar: "مهندس النظم والواجهات المتكاملة",
      },
      summary: {
        en: "Architected the end-to-end system: Supabase PostgreSQL schema with 174 automated RLS tests, Zustand + IndexedDB offline-first synchronization engine, interactive drag-and-drop Kanban, and Tiptap v3 rich markdown editor.",
        ar: "هندسة وبناء النظام المتكامل: مخطط PostgreSQL مع 174 اختباراً لسياسات RLS، محرك المزامنة غير المتصلة بـ Zustand و IndexedDB، لوحة كانبان التفاعلية، ومحرر Tiptap v3.",
      },
      responsibilities: {
        en: [
          "Designed multi-tenant PostgreSQL schema with workspace_id tenant tagging on every workspace table.",
          "Penned 174 rigorous automated tests executed through PGlite to verify Row-Level Security rules.",
          "Implemented offline-first sync engine with optimistic updates and automatic conflict rollback.",
          "Built smooth, high-fps drag-and-drop Kanban board using @dnd-kit primitives.",
          "Crafted the ⌘K Command Palette and keyboard shortcut engine for frictionless engineer workflows.",
        ],
        ar: [
          "تصميم مخطط PostgreSQL متعدد المستأجرين مع وسم workspace_id في كافة الجداول لضمان سرعة الاستعلام وعزل البيانات.",
          "كتابة وتمرير 174 اختباراً مؤتمتاً لسياسات أمان Row-Level Security عبر بيئة PGlite.",
          "بناء محرك مزامنة يدعم العمل بدون إنترنت (Offline-First) مع تحديثات تفاؤلية وتراجع تلقائي عند الأخطاء.",
          "تطوير لوحة كانبان تفاعلية فائقة السلاسة باستخدام مكتبة @dnd-kit المتطورة.",
          "برمجة قائمة أوامر ⌘K واختصارات لوحة المفاتيح لتمكين المطور من العمل دون لمس الفأرة.",
        ],
      },
      architecturalDecisions: [
        {
          decision: { en: "Every Workspace Table Carries workspace_id Directly", ar: "إلزام كافة الجداول بحمل حقل workspace_id مباشرة" },
          rationale: {
            en: "Eliminated expensive nested SQL joins inside Supabase Realtime filter clauses and RLS policies, speeding up query execution by over 3x.",
            ar: "إلغاء عمليات الـ Join المكلفة في سياسات RLS وفلاتر Realtime، مما ضاعف سرعة الاستعلام بأكثر من 3 أضعاف.",
          },
        },
        {
          decision: { en: "Offline-First with Zustand + IndexedDB over Pure Network State", ar: "معمارية Offline-First بـ Zustand و IndexedDB بدلاً من الاعتماد التام على الشبكة" },
          rationale: {
            en: "Ensured developers can triage, reorder, and edit issues on flaky trains or flights without losing data or experiencing UI stutter.",
            ar: "ضمان قدرة المهندسين على ترتيب وتعديل المهام في ظروف الاتصال الضعيفة دون أي فقدان للبيانات.",
          },
        },
      ],
    },
    problemSpace: {
      overview: {
        en: "Legacy project management platforms like Jira are sluggish, bloated with confusing sub-menus, and lack instantaneous collaboration. When internet connectivity drops, unsaved issue edits vanish.",
        ar: "تتسم أدوات إدارة المهام التقليدية مثل Jira بالبطء الشديد، وتكدس القوائم، وغياب المزامنة اللحظية الحقيقية، مع ضياع التعديلات تماماً في حال انقطاع الاتصال بالإنترنت أثناء التنقل.",
      },
      painPoints: [
        {
          title: { en: "Sluggish Heavy Interfaces", ar: "بطء الواجهات وتعقيد القوائم" },
          description: {
            en: "Multi-second page reloads for simple state updates waste valuable engineering focus.",
            ar: "استغراق ثوانٍ عديدة لفتح التذكرة أو تغيير حالتها مما يعطل وتيرة عمل فرق البرمجة السريعة.",
          },
        },
        {
          title: { en: "Data Loss on Disconnects", ar: "فقدان التعديلات عند انقطاع الاتصال" },
          description: {
            en: "Typing an issue description on unstable mobile hotspot frequently discards unpersisted drafts.",
            ar: "ضياع وصف المشكلة أو التعليقات الطويلة عند انقطاع الشبكة فجأة قبل الحفظ.",
          },
        },
      ],
    },
    architecture: {
      overview: {
        en: "Traxr combines a Next.js 14/15 client with Supabase Realtime (WebSockets on Postgres changes), Zustand local optimistic stores synced to IndexedDB, and strict PostgreSQL Row-Level Security.",
        ar: "يجمع Traxr بين واجهة Next.js سريعة ومحرك Supabase Realtime عبر WebSockets، مع مخازن Zustand المحلية المتزامنة مع IndexedDB وسياسات أمان PostgreSQL RLS مشددة.",
      },
      diagramAscii: `
+---------------------------------------------------------------------------------+
|                                 TRAXR CLIENT                                    |
|  Next.js + TypeScript | @dnd-kit Kanban | Tiptap Editor | ⌘K Command Palette    |
+---------------------------------------------------------------------------------+
           |                                                   ^
  [0ms Optimistic UI]                                 [Realtime Sync Event]
           v                                                   |
+----------------------+                             +----------------------------+
|  LOCAL OFFLINE STORE |                             |    SUPABASE REALTIME       |
|  Zustand + IndexedDB |                             |    (postgres_changes)      |
+----------------------+                             +----------------------------+
           |                                                   ^
      [Sync Queue]                                             |
           v                                                   |
+---------------------------------------------------------------------------------+
|                          POSTGRESQL 15+ CLOUD DATABASE                          |
|  - Multi-tenant Workspaces, Teams, Issues, Cycles                               |
|  - 174 Verified Row-Level Security (RLS) Policies                               |
+---------------------------------------------------------------------------------+
      `,
      layers: [
        {
          name: { en: "Client UI & Interaction Layer", ar: "طبقة الواجهات والتفاعل" },
          tech: "Next.js 14/15, Tailwind CSS, @dnd-kit, Tiptap v3",
          details: {
            en: "Zero-latency drag-and-drop boards, keyboard shortcuts, and formatted markdown task descriptions.",
            ar: "لوحات كانبان تسحب وتفلت بسلاسة 60 إطاراً في الثانية، محرر مارك داون متقدم، واختصارات لوحة مفاتيح شاملة.",
          },
        },
        {
          name: { en: "Offline & Optimistic State Engine", ar: "محرك المزامنة والحالة المتفائلة" },
          tech: "Zustand, IndexedDB, Optimistic UI Queue",
          details: {
            en: "Immediate local state updates with background synchronization and graceful rollback mechanisms.",
            ar: "تحديث فوري للحالة محلياً مع إرسال الطلبات في الخلفية وآلية تراجع عند تعذر الاتصال.",
          },
        },
        {
          name: { en: "Real-Time Broadcast & Database", ar: "قاعدة البيانات والبث اللحظي" },
          tech: "Supabase PostgreSQL, Supabase Realtime, Row-Level Security",
          details: {
            en: "Sub-100ms multi-client broadcasts on Postgres table mutations guarded by 174 automated security tests.",
            ar: "بث فوري للتعديلات بين المتصفحات المتصلة في أقل من 100ms مع حماية RLS تم فحصها بـ 174 اختباراً.",
          },
        },
      ],
    },
    database: {
      engine: "Supabase PostgreSQL 15+ with Row-Level Security (RLS)",
      summary: {
        en: "Strict multi-tenant relational schema where workspaces hold teams, issues, cycles, and workflow states. Every workspace table carries workspace_id for indexable, bulletproof RLS.",
        ar: "مخطط علائقي متعدد المستأجرين مع سياسات أمان Row-Level Security. تحمل كل الجداول مفتاح workspace_id لتسريع الفحص الأمني وضمان عدم تسرب أي تذكرة.",
      },
      schemaLanguage: "sql",
      codeSnippet: `-- =============================================================================
-- Traxr · Production Issues Schema with Granular Workspace Isolation
-- =============================================================================

create table public.issues (
  id           uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  team_id      uuid not null references public.teams(id) on delete cascade,
  number       integer not null,
  title        text not null check (char_length(title) between 1 and 512),
  description  text not null default '',
  state_id     uuid not null references public.workflow_states(id),
  priority     smallint not null default 0 check (priority between 0 and 4),
  assignee_id  uuid references public.profiles(id) on delete set null,
  creator_id   uuid references public.profiles(id) on delete set null,
  project_id   uuid references public.projects(id) on delete set null,
  due_date     date,
  sort_order   double precision not null default 0,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  unique (team_id, number)
);

-- Row-Level Security Policy
alter table public.issues enable row level security;

create policy "issues_select_member" on public.issues
  for select using (
    exists (
      select 1 from public.workspace_members
      where workspace_members.workspace_id = issues.workspace_id
        and workspace_members.user_id = auth.uid()
    )
  );`,
      modelsOrTables: [
        {
          name: "public.issues",
          description: {
            en: "Core task entity with priority ordering, status state, assignee references, and team-scoped unique numbering.",
            ar: "كيان التذكرة الأساسي مع درجات الأولوية، والحالة، وتعيين المطورين، وترقيم فريد داخل الفريق.",
          },
          keyFields: ["id", "workspace_id", "team_id", "number", "title", "state_id", "priority"],
        },
        {
          name: "public.workspaces & workspace_members",
          description: {
            en: "Multi-tenant boundary container and role membership association table governing all RLS permissions.",
            ar: "حاويات مساحات العمل المؤسسية وجداول العضويات التي تحكم كافة سياسات الأمان RLS.",
          },
          keyFields: ["id", "name", "slug", "workspace_id", "user_id", "role"],
        },
      ],
    },
    engineeringHighlights: [
      {
        title: { en: "Sub-100ms Multi-Client Real-Time Synchronization", ar: "مزامنة متعددة العملاء في أقل من 100 مللي ثانية" },
        category: { en: "Real-Time Distributed State", ar: "مزامنة الحالة اللحظية الموزعة" },
        challenge: {
          en: "Propagating issue changes (status, assignees, titles) across all team members viewing the Kanban board simultaneously without creating race conditions.",
          ar: "بث تعديلات المهام وتغييرات الحالات في لوحة الكانبان لكافة أعضاء الفريق المتصلين في نفس اللحظة دون تضارب.",
        },
        solution: {
          en: "Subscribed to Supabase postgres_changes filtered by workspace_id and team_id. Incoming payloads update the local Zustand store atomically, updating UI components in real time.",
          ar: "الاستماع لقناة postgres_changes مفلترة بمعرف مساحة العمل والفريق لتحديث مخزن Zustand فورياً وعكس التعديل على الشاشات.",
        },
      },
      {
        title: { en: "Offline Persistence with Optimistic Recovery", ar: "المزامنة دون إنترنت مع التحديث التفاؤلي والتراجع الآمن" },
        category: { en: "Resilience Engineering", ar: "هندسة الموثوقية" },
        challenge: {
          en: "Preventing UI freeze or data loss when dragging tasks while the user experiences a network disconnect.",
          ar: "منع تجمد الواجهة أو ضياع التعديل عند سحب التذاكر في أثناء انقطاع اتصال الإنترنت المؤقت.",
        },
        solution: {
          en: "Applied the Optimistic UI pattern: immediately reorder the DOM and persist action into IndexedDB. If the subsequent server sync fails after retries, the change gracefully rolls back with an informative toast.",
          ar: "تطبيق نمط الواجهة المتفائلة بتعديل الترتيب محلياً وحفظه في IndexedDB، مع آلية تراجع وإشعار فوري عند الفشل النهائي للمزامنة.",
        },
      },
    ],
    gallery: [
      {
        id: "kanban",
        src: "/assets/projects/traxr.svg",
        title: { en: "Linear-Style Kanban & Command Palette View", ar: "لوحة الكانبان وقائمة الأوامر السريعة" },
        caption: {
          en: "High-density issue board with sub-100ms sync and keyboard navigation.",
          ar: "لوحة مهام سريعة عالية الكثافة مع مزامنة فورية واختصارات لوحة المفاتيح.",
        },
      },
    ],
    techStack: {
      frontend: ["Next.js 14/15", "TypeScript Strict", "Tailwind CSS", "@dnd-kit", "Tiptap v3", "Zustand"],
      backend: ["Supabase", "PostgreSQL", "Realtime WebSockets", "PGlite"],
      database: ["PostgreSQL 15+", "IndexedDB (Client Offline Cache)"],
      devopsAndTools: ["174 Automated RLS Tests", "Vercel", "GitHub Actions"],
    },
    outcomes: [
      {
        metric: "174 / 174",
        label: { en: "RLS Tests Passed", ar: "اختبارات أمان RLS ناجحة" },
        detail: { en: "100% test coverage over tenant data boundaries executed via PGlite test runner", ar: "تغطية كاملة لكافة حدود عزل البيانات وسياسات الأمان" },
      },
      {
        metric: "< 100ms",
        label: { en: "Cross-Device Latency", ar: "زمن المزامنة بين الأجهزة" },
        detail: { en: "Real-time state reflections across desktop and mobile devices simultaneously", ar: "انعكاس لحظي للتعديلات على كافة الأجهزة المتصلة فورياً" },
      },
    ],
  },

  // =========================================================================
  // 4. ROYALMED — Project #4
  // =========================================================================
  "royalmed-medical-platform": {
    id: "royalmed",
    slug: "royalmed-medical-platform",
    badge: { en: "Commercial Medical LMS", ar: "منصة أكاديمية طبية تجارية" },
    title: {
      en: "RoyalMed — Medical Academy & Exam Engine",
      ar: "رويال ميد — المنصة التعليمية والأكاديمية لطلاب الطب",
    },
    subtitle: {
      en: "Comprehensive Medical LMS, Protected Video Streaming, and Interactive Q-Bank",
      ar: "منصة تعليمية وطبية متكاملة لطلاب وأطباء كليات الطب تجمع بين المحاضرات المحمية وبنك الأسئلة التفاعلي",
    },
    category: "Enterprise SaaS",
    year: "2024 – 2025",
    status: { en: "Private Commercial Production Platform", ar: "منصة تجارية خاصة في الإنتاج الفعلي" },
    heroImage: "/assets/projects/royalmed.svg",
    links: {
      demo: "https://royalmed.cloud",
      githubNotice: {
        en: "Private Client Commercial Codebase — Verified Git Contribution History",
        ar: "كود تجاري خاص لشركة عميلة — مساهمات برمجية موثقة في فروع Git",
      },
    },
    metrics: [
      {
        value: "3",
        label: { en: "Portals / RBAC", ar: "لوحات تحكم متخصصة" },
        description: { en: "Distinct student learning, instructor management, and admin oversight suites", ar: "بوابات مستقلة للطالب والمحاضر والإدارة العامة" },
      },
      {
        value: "DRM",
        label: { en: "Video Protection", ar: "حماية وبث الفيديو" },
        description: { en: "Bunny Stream CDN integration preventing unauthorized video piracy", ar: "بث سحابي مشفر مع علامات مائية ديناميكية" },
      },
      {
        value: "100%",
        label: { en: "Interactive Q-Bank", ar: "بنك أسئلة طبي تفاعلي" },
        description: { en: "Timed exam simulator with categorized subjects and instant medical rationales", ar: "محاكي امتحانات موقوت مع تفسيرات طبية فورية" },
      },
      {
        value: "Sub-2s",
        label: { en: "Dashboard Load", ar: "سرعة تحميل اللوحة" },
        description: { en: "Optimized React UI components delivering rapid course navigation", ar: "واجهات سريعة تتيح تصفح المناهج والملفات فورياً" },
      },
    ],
    ownership: {
      roleTitle: {
        en: "Full-Stack Developer (Core Frontend Engine & Dashboards)",
        ar: "مطور النظم والواجهات الطبية الرئيسية",
      },
      summary: {
        en: "Collaborated on the core engineering of the platform, authoring the administrative course creation engine, student dashboard, interactive medical exam engine, and DRM video streaming integration.",
        ar: "المساهمة البرمجية الرئيسية في بناء محرك إدارة المناهج، وبوابة الطالب، ومحرك بنك الأسئلة الطبي التفاعلي، وربط البث المحمي عبر Bunny Stream.",
      },
      responsibilities: {
        en: [
          "Authored complete student and instructor dashboard interfaces with Next.js and Tailwind CSS.",
          "Constructed the interactive medical exam simulator with countdown timers, question bookmarks, and rationales.",
          "Integrated Bunny Stream CDN video player with dynamic watermark injection to prevent piracy.",
          "Engineered course module authoring screens allowing instructors to attach protected PDFs and quizzes.",
          "Documented verified Git proof of work on branches `ahmedragab` and `ahmed`.",
        ],
        ar: [
          "تطوير واجهات لوحات تحكم الطلاب والمحاضرين بالكامل باستخدام Next.js و Tailwind CSS.",
          "بناء محاكي الامتحانات الطبية التفاعلي مع مؤقت زمني، وحفظ الأسئلة للمراجعة، وعرض التفسيرات الطبية.",
          "ربط مشغل الفيديو السحابي Bunny Stream مع حقن العلامة المائية الديناميكية لمنع القرصنة.",
          "هندسة شاشات إنشاء وتعديل الكورسات للمحاضرين مع إرفاق ملفات الـ PDF المحمية.",
          "توثيق كافة المساهمات البرمجية وفروع العمل (Branches: `ahmedragab` & `ahmed`).",
        ],
      },
      architecturalDecisions: [
        {
          decision: { en: "Bunny Stream CDN with Dynamic DRM Watermarking", ar: "اعتماد Bunny Stream CDN مع العلامة المائية الديناميكية" },
          rationale: {
            en: "Protected proprietary medical lectures from screen capturing by rendering the student's email and IP dynamically over video frames.",
            ar: "حماية المحاضرات الطبية من تصوير الشاشة بعرض إيميل وعنوان IP الطالب بشكل عشوائي ومتحرك فوق الفيديو.",
          },
        },
      ],
    },
    problemSpace: {
      overview: {
        en: "Medical faculties and test prep academies struggle with content theft (piracy of expensive lecture videos) and lack dedicated tools to simulate medical board exams with detailed clinical rationales.",
        ar: "تعاني الأكاديميات الطبية ومراكز تدريب الأطباء من سرقة وتسريب المحاضرات المصورة، والافتقار لأدوات تقنية تتيح محاكاة امتحانات الزمالة والامتحانات الطبية بأسلوب تفاعلي وتفسيرات سريرية.",
      },
      painPoints: [
        {
          title: { en: "Digital Video Piracy", ar: "قرصنة المحاضرات الطبية" },
          description: {
            en: "Standard video players allow screen recorders or direct stream download links.",
            ar: "المشغلات التقليدية تسمح بتحميل الروابط المباشرة أو تصوير الشاشة دون تتبع.",
          },
        },
        {
          title: { en: "Lack of Clinical Exam Simulation", ar: "غياب بيئة محاكاة الامتحانات الواقعية" },
          description: {
            en: "Students need realistic time pressure, subject-filtered question banks, and instant clinical explanations.",
            ar: "يحتاج طالب الطب للتدريب تحت ضغط زمني مع تصنيف الأسئلة حسب المواد والتخصصات الطبية.",
          },
        },
      ],
    },
    architecture: {
      overview: {
        en: "Next.js frontend connected to secure backend microservices, leveraging Bunny Stream CDN for HLS encrypted video delivery, PostgreSQL for structured academic progression, and JWT RBAC for user authorization.",
        ar: "واجهات Next.js مربوطة بخدمات خادم آمنة، مع الاستفادة من Bunny Stream CDN لبث الفيديو المشفر ببروتوكول HLS، وقاعدة بيانات PostgreSQL لتتبع تقدم الطلاب وصلاحيات JWT.",
      },
      layers: [
        {
          name: { en: "Medical Student & Admin Portal", ar: "بوابة الطلاب والمديرين" },
          tech: "Next.js, React, Tailwind CSS, Lucide Icons",
          details: {
            en: "Modular dashboard views, course enrollment catalogs, and interactive medical test engines.",
            ar: "لوحات تحكم معيارية، كتالوج الكورسات المسجلة، ومحرك اختبارات طبي تفاعلي.",
          },
        },
        {
          name: { en: "Protected Media Streaming", ar: "بث الوسائط المحمي" },
          tech: "Bunny Stream CDN, HLS Encryption, Dynamic Canvas Watermarking",
          details: {
            en: "Adaptive bitrate streaming with dynamic on-screen token watermarking to prevent recording.",
            ar: "بث تكيفي حسب سرعة الإنترنت مع حقن علامات مائية متغيرة لمنع التسريب.",
          },
        },
      ],
    },
    database: {
      engine: "Relational PostgreSQL / Prisma Structure",
      summary: {
        en: "Tracks medical courses, video chapters, student progress percentages, question bank choices, and detailed quiz attempt results.",
        ar: "تتبع الكورسات الطبية، وفصول المحاضرات، ونسب إنجاز الطلاب، وبنوك الأسئلة ونتائج محاولات الامتحانات.",
      },
      schemaLanguage: "prisma",
      codeSnippet: `// =============================================================================
// RoyalMed · Medical Q-Bank & Exam Progression Schema
// =============================================================================

model MedicalQuestion {
  id              String   @id @default(uuid())
  subjectId       String
  questionText    String
  options         Json     // Array of choices { id, text, isCorrect }
  clinicalRationale String // Medical explanation for correct answer
  difficultyLevel String   // EASY | MEDIUM | HARD | CLINICAL_CASE
  createdAt       DateTime @default(now())
}

model ExamAttempt {
  id              String   @id @default(uuid())
  studentId       String
  totalQuestions  Int
  correctCount    Int
  scorePercentage Float
  timeSpentSeconds Int
  completedAt     DateTime @default(now())
}`,
      modelsOrTables: [
        {
          name: "MedicalQuestion",
          description: {
            en: "Clinical vignette question with multiple choices, tags, and detailed medical explanation.",
            ar: "حالة طبية سريرية مع خيارات متعددة، وتصنيف المادة، وشرح طبي مفصل للإجابة الصحيحة.",
          },
          keyFields: ["id", "subjectId", "questionText", "clinicalRationale", "difficultyLevel"],
        },
      ],
    },
    engineeringHighlights: [
      {
        title: { en: "Dynamic Canvas Watermarking for Video Piracy Prevention", ar: "العلامة المائية الديناميكية لمنع قرصنة المحتوى" },
        category: { en: "Security & Media Delivery", ar: "أمان الوسائط الرقمية" },
        challenge: {
          en: "Protecting high-value commercial medical video lectures from unauthorized redistribution without damaging the learning experience.",
          ar: "حماية المحاضرات الطبية باهظة القيمة من إعادة النشر والقرصنة دون التأثير على وضوح المشاهدة للطالب.",
        },
        solution: {
          en: "Integrated Bunny Stream CDN with a custom floating canvas overlay that renders the student's unique identity hash across random screen coordinates every 15 seconds.",
          ar: "ربط مشغل الفيديو السحابي بطبقة Canvas تفاعلية تطبع كود تعريف الطالب المشفر في أماكن عشوائية كل 15 ثانية.",
        },
      },
    ],
    gallery: [
      {
        id: "hero",
        src: "/assets/projects/royalmed.svg",
        title: { en: "RoyalMed Platform Architecture", ar: "معمارية منصة رويال ميد الطبية" },
        caption: {
          en: "Architecture encompassing LMS video distribution and interactive medical question engine.",
          ar: "معمارية المنصة الطبية التي تجمع بين توزيع المحاضرات المحمية وبنك الأسئلة.",
        },
      },
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      backend: ["Node.js", "Express", "JWT Auth", "Bunny Stream Video CDN"],
      database: ["PostgreSQL", "Prisma ORM"],
      devopsAndTools: ["Git Branching Workflow", "Vercel", "Bunny CDN"],
    },
    outcomes: [
      {
        metric: "100%",
        label: { en: "Stream Protection", ar: "حماية تامة للمحاضرات" },
        detail: { en: "Zero direct video downloads possible due to encrypted HLS media chunks", ar: "منع تحميل الروابط المباشرة تماماً بفضل تشفير HLS التكيفي" },
      },
    ],
  },

  // =========================================================================
  // 5. PROHEALTH — Project #5
  // =========================================================================
  "prohealth-booking-platform": {
    id: "prohealth",
    slug: "prohealth-booking-platform",
    badge: { en: "Production MERN System", ar: "منظومة MERN سحابية متكاملة" },
    title: {
      en: "ProHealth — Clinic & Appointment System",
      ar: "برو هيلث — منصة العيادات الطبية وإدارة الحجوزات",
    },
    subtitle: {
      en: "Full-Stack MERN Healthcare Ecosystem with Intelligent Slot Scheduling & 3 User Portals",
      ar: "منصة طبية متكاملة بـ MERN Stack لإدارة العيادات الطبية وحجز المواعيد مع 3 لوحات تحكم مستقلة",
    },
    category: "Full-Stack MERN",
    year: "2024",
    status: { en: "Live on Vercel (Frontend & Cloud Backend)", ar: "متاحة في الإنتاج الفعلي للواجهة والخادم" },
    heroImage: "/assets/projects/prohealth/home-preview.jpg",
    links: {
      demo: "https://pro-health-wine.vercel.app",
      github: "https://github.com/dev-ahmed-ragab/ProHealth",
    },
    metrics: [
      {
        value: "3",
        label: { en: "Distinct Roles", ar: "أدوار وصلاحيات محكمة" },
        description: { en: "Dedicated portals for Patients, Doctors, and System Administrators", ar: "لوحات مستقلة للمريض والطبيب والإدارة العامة" },
      },
      {
        value: "0",
        label: { en: "Double Bookings", ar: "تضارب في المواعيد" },
        description: { en: "Conflict-free appointment slot scheduler preventing schedule collisions", ar: "خوارزمية ذكية تمنع حجز نفس الموعد لأكثر من مريض" },
      },
      {
        value: "JWT",
        label: { en: "Secured Auth", ar: "مصادقة مشفرة" },
        description: { en: "Role-based authorization middleware protecting confidential patient records", ar: "حماية كاملة للبيانات الطبية وسجلات المرضى" },
      },
    ],
    ownership: {
      roleTitle: {
        en: "Full-Stack Developer",
        ar: "مطور MERN Stack متكامل",
      },
      summary: {
        en: "Engineered both the frontend client and backend REST API. Built the conflict-free appointment scheduler, JWT role-based middleware, Doctor consultation calendars, and administrative revenue analytics.",
        ar: "تطوير الواجهة الأمامية والباك إند بالكامل. برمجة خوارزمية جدولة المواعيد الذكية، وتأمين الصلاحيات بـ JWT، وإدارة سجلات العيادات والأطباء.",
      },
      responsibilities: {
        en: [
          "Developed responsive React 18 client with Tailwind CSS for high mobile booking conversion.",
          "Constructed modular Node.js/Express backend following the MVC architecture pattern.",
          "Engineered intelligent slot calculation algorithm accounting for doctor shifts and existing bookings.",
          "Secured endpoints using bcrypt password hashing and granular JWT role middlewares.",
          "Deployed cloud backend on Vercel serverless functions with MongoDB Atlas persistence.",
        ],
        ar: [
          "تطوير واجهة مستخدم سريعة بـ React 18 و Tailwind CSS مجهزة للأجهزة المحمولة.",
          "بناء خادم Node.js/Express منظم بنمط MVC وقابل للتوسع بسهولة.",
          "برمجة خوارزمية ذكية لحساب الفترات الزمنية المتاحة للأطباء ومنع تضارب الحجوزات.",
          "تأمين مسارات النظام عبر توكنات JWT المشفرة وحماية كلمات المرور بـ Bcrypt.",
          "نشر الخادم والواجهة على سحابة Vercel مع قاعدة بيانات MongoDB Atlas السحابية.",
        ],
      },
      architecturalDecisions: [
        {
          decision: { en: "Automated Slot Isolation at Database Level", ar: "قفل الفترات الزمنية على مستوى قاعدة البيانات" },
          rationale: {
            en: "Prevented concurrent double-booking race conditions by marking time slots occupied inside atomic database queries.",
            ar: "منع التضارب عند حجز مريضين لنفس الموعد في نفس اللحظة عبر عمليات قاعدة بيانات ذرية.",
          },
        },
      ],
    },
    problemSpace: {
      overview: {
        en: "Private medical clinics struggle with manual phone appointments, double-booked slots, and disjointed coordination between patients, attending doctors, and clinic administrators.",
        ar: "تعاني العيادات الطبية من فوضى الحجوزات عبر الهاتف والدفاتر الورقية، مما يسبب تضارب المواعيد وإهدار وقت الأطباء والمرضى، مع صعوبة التنسيق بين الأطباء والإدارة.",
      },
      painPoints: [
        {
          title: { en: "Double Booking Collisions", ar: "تضارب المواعيد وإهدار الوقت" },
          description: {
            en: "Two patients scheduled for the exact same hour causes clinic waiting room congestion.",
            ar: "حجز مريضين لنفس الفترة الزمنية يسبب تكدس العيادة واستياء المرضى.",
          },
        },
        {
          title: { en: "Confidentiality and Privacy Risks", ar: "سرية السجلات الطبية" },
          description: {
            en: "Medical records must be protected so doctors only access their own patients.",
            ar: "ضرورة التأكد من عزل بيانات المرضى وعدم وصول أي مستخدم لمعلومات طبية غير مصرح له بها.",
          },
        },
      ],
    },
    architecture: {
      overview: {
        en: "Classic decoupled MERN architecture with a responsive React frontend, a RESTful Express API layer structured into controllers and routes, and MongoDB Atlas as the document store.",
        ar: "معمارية MERN Stack كلاسيكية مع واجهة React تفاعلية وخادم Express منظم بمتحكمات ومسارات RESTful وقاعدة بيانات MongoDB Atlas.",
      },
      layers: [
        {
          name: { en: "Frontend Presentation", ar: "واجهة المستخدم التفاعلية" },
          tech: "React 18, Tailwind CSS, React Router v6, Axios",
          details: {
            en: "Clean booking wizard, specialty doctor filters, patient appointment dashboard, and doctor management panel.",
            ar: "خطوات حجز مبسطة، تصفية الأطباء حسب التخصص، ولوحات تحكم للمريض والطبيب.",
          },
        },
        {
          name: { en: "API & Controller Services", ar: "طبقة خدمات الخادم" },
          tech: "Node.js, Express.js, JWT, Bcrypt",
          details: {
            en: "Role middleware guards (/api/admin, /api/doctor, /api/user) and date-math slot processors.",
            ar: "حراس فحص الرتب (Roles) وخوارزمية فحص الساعات المتاحة.",
          },
        },
        {
          name: { en: "Data Store", ar: "قاعدة البيانات السحابية" },
          tech: "MongoDB Atlas, Mongoose ODM",
          details: {
            en: "Flexible document collections for users, doctors, and appointment slots with indexing on doctorId and slotDate.",
            ar: "مجموعات بيانات للمستخدمين والأطباء والمواعيد مع فهارس سريعة على التاريخ وهوية الطبيب.",
          },
        },
      ],
    },
    database: {
      engine: "MongoDB Atlas + Mongoose ODM",
      summary: {
        en: "Document schemas for appointments and user accounts with role discrimination and appointment slot tracking.",
        ar: "مخططات وثائق Mongoose للمواعيد والمستخدمين مع تمييز الصلاحيات وتتبع حالة الحجز.",
      },
      schemaLanguage: "typescript",
      codeSnippet: `// =============================================================================
// ProHealth · Appointment & Schedule Mongoose Schema
// =============================================================================

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  docId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  slotDate: { type: String, required: true }, // Format: "DD_MM_YYYY"
  slotTime: { type: String, required: true }, // Format: "10:30 AM"
  userData: { type: Object, required: true },
  docData: { type: Object, required: true },
  amount: { type: Number, required: true },
  date: { type: Number, required: true },
  cancelled: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false }
}, { timestamps: true });

appointmentSchema.index({ docId: 1, slotDate: 1, slotTime: 1 });`,
      modelsOrTables: [
        {
          name: "Appointment",
          description: {
            en: "Stores reservation record between patient and doctor with date, time, and payment status.",
            ar: "تخزين بيانات الحجز الطبي بين المريض والطبيب مع الوقت والرسوم وحالة الإلغاء.",
          },
          keyFields: ["userId", "docId", "slotDate", "slotTime", "cancelled", "isCompleted"],
        },
      ],
    },
    engineeringHighlights: [
      {
        title: { en: "Conflict-Free Appointment Slot Scheduler", ar: "خوارزمية جدولة المواعيد ومنع التضارب" },
        category: { en: "Business Logic", ar: "منطق الأعمال" },
        challenge: {
          en: "Dynamically calculating 30-minute booking intervals for each doctor based on available working hours while eliminating slots already claimed.",
          ar: "حساب فترات الحجز المتاحة (30 دقيقة) لكل طبيب ديناميكياً واستبعاد الأوقات المحجوزة مسبقاً بشكل فوري.",
        },
        solution: {
          en: "Constructed an algorithmic date processor that queries active non-cancelled appointments for the requested day and subtracts booked slots from the doctor's weekly roster before rendering available buttons to the patient.",
          ar: "بناء معالج تواريخ يستعلم عن الحجوزات القائمة لليوم ويطرحها من جدول الطبيب قبل عرض المواعيد المتاحة للزائر.",
        },
      },
    ],
    gallery: [
      {
        id: "home",
        src: "/assets/projects/prohealth/home-preview.jpg",
        title: { en: "Patient Booking Portal", ar: "بوابة حجز مواعيد المرضى" },
        caption: {
          en: "Interactive clinic landing interface with medical specialty navigation.",
          ar: "الواجهة الرئيسية لحجز العيادات مع تصفح التخصصات الطبية المختلفة.",
        },
      },
      {
        id: "doctors",
        src: "/assets/projects/prohealth/doctors-preview.jpg",
        title: { en: "Specialist Directory & Availability", ar: "دليل الأطباء والمواعيد المتاحة" },
        caption: {
          en: "Filtered doctor catalog with immediate real-time consultation slot booking.",
          ar: "كتالوج الأطباء مع إمكانية الفلترة وحجز المواعيد المتاحة فورياً.",
        },
      },
    ],
    techStack: {
      frontend: ["React 18", "Tailwind CSS", "React Router v6", "Axios"],
      backend: ["Node.js", "Express.js", "JWT Authentication", "Bcrypt"],
      database: ["MongoDB Atlas", "Mongoose ODM"],
      devopsAndTools: ["Vercel Serverless", "Git", "Postman"],
    },
    outcomes: [
      {
        metric: "100%",
        label: { en: "Booking Precision", ar: "دقة الحجوزات" },
        detail: { en: "Zero schedule collisions achieved across test suites and staging simulations", ar: "انعدام التضارب في المواعيد تماماً في بيئة الاختبار والمحاكاة" },
      },
    ],
  },

  // =========================================================================
  // 6. FRENZY BLOG — Project #6
  // =========================================================================
  "frenzy-blog-publishing-platform": {
    id: "frenzy-blog",
    slug: "frenzy-blog-publishing-platform",
    badge: { en: "Full-Stack Publishing Platform", ar: "منصة نشر وتدوين متكاملة" },
    title: {
      en: "Frenzy Blog — Publishing & Content Platform",
      ar: "فرونزي بلوج — منصة النشر والتدوين السحابية",
    },
    subtitle: {
      en: "Full-Stack Modern Blog Engine with Cloudinary Media Pipelines & Interactive Engagement",
      ar: "منصة تدوين سحابية متكاملة بـ MERN Stack مع معالجة وسائط سحابية ونظام تفاعل وتعليقات",
    },
    category: "Full-Stack MERN",
    year: "2024",
    status: { en: "Live on Vercel & Fully Documented", ar: "متاحة في الإنتاج وموثقة بالكامل" },
    heroImage: "/assets/projects/frenzy-blog/home-preview.png",
    links: {
      demo: "https://frenzy-blog.vercel.app",
      github: "https://github.com/dev-ahmed-ragab/frenzy-blog",
    },
    metrics: [
      {
        value: "CDN",
        label: { en: "Cloudinary Pipeline", ar: "معالجة وسائط سحابية" },
        description: { en: "Automated image optimization, compression, and delivery", ar: "ضغط وتحسين أحجام الصور تلقائياً على السحابة" },
      },
      {
        value: "JWT",
        label: { en: "Secure Publishing", ar: "نشر محمي بالصلاحيات" },
        description: { en: "Author authentication, comment moderation, and post management", ar: "إدارة المقالات والتعليقات مع حماية الصلاحيات" },
      },
      {
        value: "SEO",
        label: { en: "Search Ready", ar: "مهيأة لمحركات البحث" },
        description: { en: "Clean semantic URLs, dynamic metadata, and category tagging", ar: "عناوين مقالات نظيفة وتصنيف بالموضوعات" },
      },
    ],
    ownership: {
      roleTitle: {
        en: "Full-Stack Developer",
        ar: "مطور الواجهات والخدمات السحابية",
      },
      summary: {
        en: "Built the publishing platform from ground up: rich article editor, Cloudinary media upload pipelines, comment interaction threads, and REST API controllers in Node.js/Express.",
        ar: "تطوير منصة التدوين بالكامل: محرر المقالات الغني، مسار رفع الصور على Cloudinary، نظام التعليقات التفاعلي، وخادم Express.",
      },
      responsibilities: {
        en: [
          "Developed modern React frontend with rich card layouts and category filters.",
          "Constructed RESTful API in Node.js/Express with MongoDB persistence.",
          "Integrated Cloudinary API for on-the-fly media optimization and secure CDN storage.",
          "Implemented interactive comment and engagement threads with user avatars.",
        ],
        ar: [
          "بناء واجهة React عصرية مع بطاقات مقالات جذابة وتصفية بالمجالات.",
          "برمجة خادم RESTful متكامل بـ Node.js و Express مع قاعدة بيانات MongoDB.",
          "ربط واجهة Cloudinary البرمجية لضغط الصور وتخزينها سحابياً بسرعة عالية.",
          "تطوير نظام التعليقات والتفاعل وإدارة الملف الشخصي للكاتب.",
        ],
      },
      architecturalDecisions: [
        {
          decision: { en: "Cloudinary Cloud Ingestion over Local Disk Storage", ar: "الرفع المباشر على Cloudinary بدلاً من تخزين السيرفر المحلي" },
          rationale: {
            en: "Enabled seamless deployment onto serverless cloud platforms (Vercel) without running out of ephemeral container disk storage.",
            ar: "إتاحة نشر الخادم على بيئات Serverless دون الخوف من امتلاء مساحة القرص المؤقتة.",
          },
        },
      ],
    },
    problemSpace: {
      overview: {
        en: "Content creators need lightweight, responsive publishing engines that avoid heavy CMS bloat while delivering optimized images and instant reading experiences on mobile phones.",
        ar: "يحتاج صناع المحتوى لمنصات تدوين سريعة وخفيفة تبتعد عن تعقيدات أنظمة CMS التقليدية، مع ضمان سرعة تحميل المقالات والصور على الهواتف الذكية.",
      },
      painPoints: [
        {
          title: { en: "Bloated CMS Platforms", ar: "ثقل وبطء منصات التدوين التقليدية" },
          description: {
            en: "Legacy blogging engines suffer from plugin overload and slow mobile response times.",
            ar: "القوالب التقليدية تعاني من ثقل التحميل وتكدس الإضافات غير الضرورية.",
          },
        },
      ],
    },
    architecture: {
      overview: {
        en: "MERN Stack blogging system: React client communicating with Express REST controllers, utilizing Cloudinary for image hosting and MongoDB Atlas for document storage.",
        ar: "نظام تدوين بـ MERN Stack: واجهة React تتصل بخادم Express مع استضافة الصور على Cloudinary وقاعدة بيانات MongoDB Atlas.",
      },
      layers: [
        {
          name: { en: "Reader & Author Interface", ar: "واجهة القارئ والكاتب" },
          tech: "React, Tailwind CSS, React Router",
          details: {
            en: "Responsive reading layouts, author profiles, and real-time category navigation.",
            ar: "تصميم متناسق للقراءة، صفحات للمؤلفين، وتصنيف ذكي للمقالات.",
          },
        },
        {
          name: { en: "Publishing API", ar: "واجهة برمجة تطبيقات النشر" },
          tech: "Node.js, Express, Cloudinary SDK",
          details: {
            en: "CRUD routes for articles, image stream handling, and secure author auth.",
            ar: "مسارات إنشاء وتعديل المقالات، معالجة تدفق الصور، ومصادقة المستخدمين.",
          },
        },
      ],
    },
    database: {
      engine: "MongoDB Atlas + Mongoose",
      summary: {
        en: "Article documents containing markdown content, author references, tag arrays, and embedded comment subdocuments.",
        ar: "وثائق المقالات المتضمنة لمحتوى المقال، ووسوم التصنيف، والتعليقات.",
      },
      schemaLanguage: "typescript",
      codeSnippet: `// =============================================================================
// Frenzy Blog · Post & Comment Mongoose Schema
// =============================================================================

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  featuredImage: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });`,
      modelsOrTables: [
        {
          name: "Post",
          description: {
            en: "Stores article content, media URLs, author link, and interaction stats.",
            ar: "تخزين نصوص المقالات، وروابط الصور السحابية، وكاتب المقال والتفاعلات.",
          },
          keyFields: ["id", "title", "slug", "content", "featuredImage", "category"],
        },
      ],
    },
    engineeringHighlights: [
      {
        title: { en: "Automated Cloudinary Media Pipeline", ar: "مسار رفع ومعالجة الصور السحابية" },
        category: { en: "Media Optimization", ar: "تحسين الوسائط" },
        challenge: {
          en: "Handling high-resolution camera uploads without crashing serverless memory limits or slowing image display for readers.",
          ar: "التعامل مع الصور ذات الدقة العالية المرفوعة من الكاميرات دون استهلاك ذاكرة الخادم أو إبطاء القراءة.",
        },
        solution: {
          en: "Streamed image buffers directly from multipart form requests to Cloudinary with automatic WebP conversion and responsive width transforms.",
          ar: "تمرير تدفق بيانات الصور مباشرة إلى Cloudinary مع التحويل الآلي لصيغة WebP المضغوطة.",
        },
      },
    ],
    gallery: [
      {
        id: "home",
        src: "/assets/projects/frenzy-blog/home-preview.png",
        title: { en: "Frenzy Blog Homepage", ar: "الصفحة الرئيسية لفرونزي بلوج" },
        caption: {
          en: "Modern editorial magazine layout with featured articles.",
          ar: "تنسيق مجلة إلكترونية عصرية مع إبراز أحدث المقالات.",
        },
      },
      {
        id: "posts",
        src: "/assets/projects/frenzy-blog/posts-live.jpg",
        title: { en: "Category Filter & Post Feed", ar: "تصفية المقالات حسب الموضوعات" },
        caption: {
          en: "Topic tag filtering and responsive article cards.",
          ar: "تصفح المقالات حسب الأقسام مع بطاقات عرض متناسقة.",
        },
      },
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS", "Axios", "React Router"],
      backend: ["Node.js", "Express.js", "Cloudinary SDK", "JWT"],
      database: ["MongoDB Atlas", "Mongoose"],
      devopsAndTools: ["Vercel", "Git"],
    },
    outcomes: [
      {
        metric: "100%",
        label: { en: "Cloud Ingestion", ar: "معالجة سحابية تامة" },
        detail: { en: "Zero local disk dependency enabling infinite serverless scaling", ar: "استقلالية تامة عن مساحة السيرفر مع قابلية توسع سحابي فورية" },
      },
    ],
  },

  // =========================================================================
  // 7. B-LABN — Project #7
  // =========================================================================
  "b-labn-ordering-app": {
    id: "b-labn",
    slug: "b-labn-ordering-app",
    badge: { en: "Interactive Food SPA", ar: "تطبيق ويب سريع للطلب" },
    title: {
      en: "B-Labn — Fast-Food & Dessert Ordering App",
      ar: "بـ لبن — منصة وتطبيق طلب الحلويات والوجبات السريعة",
    },
    subtitle: {
      en: "High-Speed React E-Commerce SPA with Real-Time Cart State & Instant Order Dispatch",
      ar: "تطبيق ويب تفاعلي سريع لطلب الحلويات والمنتجات مع سلة تسوق فورية وتجربة مستخدم مبسطة",
    },
    category: "Frontend & Media",
    year: "2024",
    status: { en: "Live on Vercel", ar: "متاح للمعاينة الحية على Vercel" },
    heroImage: "/assets/projects/b-labn/home.png",
    links: {
      demo: "https://b-labn.vercel.app",
      github: "https://github.com/dev-ahmed-ragab/b-Labn",
    },
    metrics: [
      {
        value: "0ms",
        label: { en: "Cart Latency", ar: "استجابة السلة الفورية" },
        description: { en: "Instant add-to-cart mutations managed with reactive client state", ar: "تحديث السلة والكميات لحظياً دون أي تأخير" },
      },
      {
        value: "100%",
        label: { en: "Mobile Optimized", ar: "متوافق تماماً مع الموبايل" },
        description: { en: "Touch-first design catering to on-the-go food delivery consumers", ar: "تجربة تصفح وطلب سلسة لشاشات الهواتف الذكية" },
      },
      {
        value: "< 1s",
        label: { en: "Initial Load", ar: "سرعة التحميل الأولي" },
        description: { en: "Lightweight bundle architecture ensuring sub-second first paint", ar: "حزم برمجية خفيفة تضمن فتح التطبيق في أقل من ثانية" },
      },
    ],
    ownership: {
      roleTitle: {
        en: "Frontend & Full-Stack Developer",
        ar: "مطور الواجهات السريعة وتجربة الطلب",
      },
      summary: {
        en: "Designed and engineered the full e-commerce SPA: dynamic catalog filtering, cart state machine with local persistence, order summary calculations, and responsive mobile checkout flow.",
        ar: "تصميم وتطوير تطبيق الويب بالكامل: تصفية المنتجات حسب الأقسام، سلة التسوق الفورية مع حفظ محلي، وحساب الإجمالي وإتمام الطلب.",
      },
      responsibilities: {
        en: [
          "Crafted high-fidelity food ordering UI with custom category tabs and product modals.",
          "Implemented robust client-side cart state machine handling additions, removals, and quantity modifications.",
          "Ensured persistence of shopping bags across browser tab reloads using localStorage.",
          "Engineered responsive checkout summary calculating taxes, delivery fees, and order totals.",
        ],
        ar: [
          "تصميم واجهات طلب طعام عصرية مع تصنيفات تفاعلية ونوافذ تفاصيل المنتجات.",
          "برمجة سلة مشتريات فورية تتيح زيادة وإنقاص الكميات وحساب الأسعار تلقائياً.",
          "حفظ محتويات سلة المشتريات محلياً لمنع ضياع الطلب عند تحديث الصفحة.",
          "هندسة شاشة ملخص الطلب مع احتساب رسوم التوصيل والضرائب بدقة.",
        ],
      },
      architecturalDecisions: [
        {
          decision: { en: "Reactive In-Memory State with LocalStorage Hydration", ar: "إدارة الحالة التفاعلية في الذاكرة مع الحفظ المحلي" },
          rationale: {
            en: "Delivered instantaneous sub-second cart mutations without forcing users to wait for backend network roundtrips.",
            ar: "تقديم تجربة تسوق فائقة السرعة دون إجبار العميل على انتظار استجابة الخادم عند كل نقرة.",
          },
        },
      ],
    },
    problemSpace: {
      overview: {
        en: "Fast-food and dessert chains frequently lose customer orders on mobile due to slow, clunky multi-step ordering forms that fail to keep item state smoothly.",
        ar: "تفقد مطاعم الوجبات السريعة والحلويات الكثير من طلبات العملاء عبر الهواتف بسبب بطء التطبيقات التقليدية وتعقيد خطوات السلة.",
      },
      painPoints: [
        {
          title: { en: "Clunky Mobile Cart Experiences", ar: "تعقيد السلة على الموبايل" },
          description: {
            en: "Page refreshes on every cart item addition creates friction that discourages ordering.",
            ar: "إعادة تحميل الصفحة مع كل إضافة للمنتجات يسبب بطء التجربة وإحباط المشتري.",
          },
        },
      ],
    },
    architecture: {
      overview: {
        en: "React Single-Page Application (SPA) utilizing modular component hierarchy, custom hooks for cart management, and responsive CSS grid for mobile-to-desktop adaptability.",
        ar: "تطبيق ويب أحادي الصفحة (SPA) بـ React يعتمد على موديولات معيارية، وسنانير مخصصة (Custom Hooks) لإدارة السلة وتصميم متجاوب.",
      },
      layers: [
        {
          name: { en: "Menu & Catalog Navigation", ar: "كتالوج المنتجات والأقسام" },
          tech: "React, CSS Modules / Tailwind",
          details: {
            en: "Category selector (Ice Cream, Rice Pudding, Sweets) with instant client-side filtering.",
            ar: "أشرطة تصنيف سريعة (أرز باللبن، آيس كريم، قشطوطة) مع بحث وتصفية فورية.",
          },
        },
        {
          name: { en: "Cart Engine & Checkout", ar: "محرك السلة وإتمام الطلب" },
          tech: "React Context, LocalStorage",
          details: {
            en: "Persistent cart bag, live price recalculations, and clean checkout summaries.",
            ar: "سلة مشتريات محفوظة، إعادة حساب الأسعار آلياً، وشاشة طلب مبسطة.",
          },
        },
      ],
    },
    database: {
      engine: "Static JSON Product Catalog & LocalStorage Persistence",
      summary: {
        en: "Structured product catalogs with nutritional flags, pricing variants, and category taxonomy.",
        ar: "كتالوج منتجات منظم بصيغة JSON مع أسعار الأحجام المختلفة والأقسام.",
      },
      schemaLanguage: "json",
      codeSnippet: `// =============================================================================
// B-Labn · Product Catalog Model
// =============================================================================

{
  "id": "blabn-qashtouta-lotus",
  "name": "قشطوطة لوتس ملوكي",
  "category": "qashtouta",
  "price": 65,
  "description": "كيكة الحليب الإسفنجية الغارقة في كريمة وبسكويت اللوتس الأصلي",
  "image": "/assets/projects/b-labn/menu.png",
  "available": true
}`,
      modelsOrTables: [
        {
          name: "ProductItem",
          description: {
            en: "Food item entity with pricing, descriptive notes, and category tagging.",
            ar: "بيانات الصنف الغذائي مع السعر والوصف وصورة المنتج.",
          },
          keyFields: ["id", "name", "category", "price", "image"],
        },
      ],
    },
    engineeringHighlights: [
      {
        title: { en: "Instant Zero-Latency Cart Architecture", ar: "معمارية سلة المشتريات الفورية دون أي تأخير" },
        category: { en: "Frontend Performance", ar: "أداء الواجهات" },
        challenge: {
          en: "Maintaining seamless 60FPS UI feedback when rapidly modifying quantities on low-end mobile devices.",
          ar: "الحفاظ على سلاسة 60 إطاراً في الثانية عند تعديل كميات المنتجات بسرعة على هواتف الفئة المتوسطة.",
        },
        solution: {
          en: "Used an optimistic client state reducer paired with debounced localStorage writes, avoiding UI thrashing and delivering immediate tactile feedback.",
          ar: "استخدام معمارية Reducer تفاعلية مع حفظ مؤجل في التخزين المحلي لمنع تعليق المتصفح وتأكيد الطلب فورياً.",
        },
      },
    ],
    gallery: [
      {
        id: "home",
        src: "/assets/projects/b-labn/home.png",
        title: { en: "B-Labn Hero Experience", ar: "الواجهة الرئيسية لتطبيق بـ لبن" },
        caption: {
          en: "Vibrant food brand landing with instant CTA to explore the dessert menu.",
          ar: "تصميم واجهة جذاب يعكس الهوية البصرية للعلامة التجارية مع وصول فوري للمنيو.",
        },
      },
      {
        id: "menu",
        src: "/assets/projects/b-labn/menu.png",
        title: { en: "Interactive Menu Catalog", ar: "كتالوج المنيو التفاعلي" },
        caption: {
          en: "Categorized dessert items with quick-add actions and pricing.",
          ar: "تصفح أصناف الحلويات مع أزرار الإضافة السريعة للسلة.",
        },
      },
      {
        id: "cart",
        src: "/assets/projects/b-labn/cart.png",
        title: { en: "Real-Time Cart Drawer", ar: "سلة الطلبات اللحظية" },
        caption: {
          en: "Live quantity adjustment, delivery summary, and checkout.",
          ar: "تعديل الكميات فورياً مع حساب الإجمالي وإتمام الطلب.",
        },
      },
    ],
    techStack: {
      frontend: ["React 18", "Tailwind CSS", "JavaScript ES6+", "React Icons"],
      backend: ["Client-Side State Engine", "Vercel Static Hosting"],
      database: ["LocalStorage Persistence", "Structured JSON Catalog"],
      devopsAndTools: ["Vercel", "Git"],
    },
    outcomes: [
      {
        metric: "0ms",
        label: { en: "UI Response", ar: "استجابة الواجهة" },
        detail: { en: "Instant cart feedback creating a frictionless consumer ordering flow", ar: "تفاعل لحظي مع نقرات العميل يوفر تجربة شراء ممتعة" },
      },
    ],
  },

  // =========================================================================
  // 8. YOUTUBE CLONE — Project #8
  // =========================================================================
  "youtube-clone-streaming": {
    id: "youtube-clone",
    slug: "youtube-clone-streaming",
    badge: { en: "Media Streaming Engine", ar: "منصة بث وسائط وفيديو" },
    title: {
      en: "YouTube Clone — Video Streaming Engine",
      ar: "يوتيوب كلون — منصة بث وتشغيل الفيديو التفاعلية",
    },
    subtitle: {
      en: "Responsive Video Streaming Web Application Powered by React 18 & RapidAPI YouTube v3",
      ar: "تطبيق بث وتشغيل فيديو متجاوب ومتقدم بـ React 18 مع محرك بحث وبث حي عبر RapidAPI",
    },
    category: "Frontend & Media",
    year: "2024",
    status: { en: "Live on Vercel", ar: "متاح للمعاينة على Vercel" },
    heroImage: "/assets/projects/youtube-clone/home-feed.jpg",
    links: {
      demo: "https://youtube-clone-zeta-hazel.vercel.app",
      github: "https://github.com/dev-ahmed-ragab/youtube-clone",
    },
    metrics: [
      {
        value: "v3",
        label: { en: "YouTube API", ar: "ربط بواجهة YouTube v3" },
        description: { en: "Real-time query feeds, search suggestions, and video metadata", ar: "جلب أحدث مقاطع الفيديو والبحث الحي عبر واجهة جوجل الرسمية" },
      },
      {
        value: "4K",
        label: { en: "Adaptive Player", ar: "مشغل فيديو عالي الدقة" },
        description: { en: "ReactPlayer integration supporting HD/4K playback and controls", ar: "مشغل وسائط يدعم التحكم الكامل في جودة العرض والصوت" },
      },
      {
        value: "100%",
        label: { en: "Responsive Grid", ar: "شبكة عرض متجاوبة" },
        description: { en: "MUI Grid system adapting from mobile single-column to wide 4K screens", ar: "تخطيط متكيف يعرض مقاطع الفيديو بمرونة على كافة الشاشات" },
      },
    ],
    ownership: {
      roleTitle: {
        en: "Frontend React Engineer",
        ar: "مهندس واجهات الوسائط المتعددة",
      },
      summary: {
        en: "Architected and built the streaming web application: RapidAPI v3 integration, responsive feed pagination, ReactPlayer video playback, channel profiles, and instant query debouncing.",
        ar: "هندسة وتطوير تطبيق بث الفيديو: ربط واجهات RapidAPI v3، مشغل الفيديو المتكامل بـ ReactPlayer، صفحات القنوات، ومحرك البحث السريع.",
      },
      responsibilities: {
        en: [
          "Developed rich video feed layout with Material UI (MUI v5) and custom dark mode themes.",
          "Integrated RapidAPI YouTube v3 endpoints for live search queries, video statistics, and suggested clips.",
          "Implemented the ReactPlayer video component supporting smooth playback, full-screen, and volume controls.",
          "Constructed dedicated channel detail pages showing subscriber counts and video libraries.",
        ],
        ar: [
          "تطوير الواجهة التفاعلية باستخدام Material UI (MUI v5) بنمط داكن أنيق يحاكي يوتيوب الأصلي.",
          "ربط واجهات RapidAPI لجلب نتائج البحث الحية وإحصائيات المشاهدات ومقاطع الفيديو المقترحة.",
          "برمجة مشغل الفيديو ReactPlayer مع دعم ملء الشاشة والتحكم الكامل في الصوت والسرعة.",
          "بناء صفحات القنوات لعرض أعداد المشتركين ومكتبة الفيديوهات الخاصة بكل صانع محتوى.",
        ],
      },
      architecturalDecisions: [
        {
          decision: { en: "ReactPlayer Component over Native HTML5 Video Element", ar: "استخدام ReactPlayer بدلاً من وسم HTML5 التقليدي" },
          rationale: {
            en: "Provided native handling of YouTube stream protocols and automated responsive aspect ratios across desktop and mobile screens.",
            ar: "ضمان تشغيل مقاطع يوتيوب الرسمية بسلاسة مع الحفاظ على النسبة البصرية (16:9) على كل الأجهزة.",
          },
        },
      ],
    },
    problemSpace: {
      overview: {
        en: "Building a performant video streaming interface requires handling high-volume image thumbnails, managing embedded players without blocking the main browser thread, and providing responsive search suggestions.",
        ar: "يتطلب بناء منصات بث الفيديو التعامل مع كم هائل من الصور المصغرة والبيانات المتغيرة، وتشغيل مشغلات الفيديو دون التسبب في بطء المتصفح أو تشنج الصفحة.",
      },
      painPoints: [
        {
          title: { en: "Heavy Media Feed Rendering", ar: "ثقل تحميل وتصيير الفيديوهات" },
          description: {
            en: "Rendering dozens of high-res video thumbnails simultaneously can cause frame drops.",
            ar: "عرض عشرات الصور المصغرة في نفس الوقت قد يسبب بطء التمرير على الأجهزة الضعيفة.",
          },
        },
      ],
    },
    architecture: {
      overview: {
        en: "Modular React 18 client communicating with YouTube v3 API endpoints through Axios, with state managed via React hooks and styled with Material UI v5 components.",
        ar: "تطبيق React 18 معياري يتصل بخدمات YouTube v3 عبر Axios، مع إدارة الحالة بسنانير React وتنسيق الواجهات بـ Material UI v5.",
      },
      layers: [
        {
          name: { en: "UI Presentation & Player", ar: "واجهة العرض والمشغل" },
          tech: "React 18, Material UI (MUI v5), ReactPlayer",
          details: {
            en: "Feed grids, related video sidebars, category chips, and search bars.",
            ar: "شبكات الفيديوهات، القائمة الجانبية للمقاطع المقترحة، وشريط البحث السريع.",
          },
        },
        {
          name: { en: "Data Fetching & Cache", ar: "طبقة جلب البيانات" },
          tech: "RapidAPI YouTube v3, Axios",
          details: {
            en: "Asynchronous query handlers with parameter caching for rapid repeated searches.",
            ar: "استعلامات غير متزامنة مع تخزين مؤقت لتقليل استهلاك حصة الـ API.",
          },
        },
      ],
    },
    database: {
      engine: "RapidAPI YouTube v3 API Data Layer",
      summary: {
        en: "Structured JSON responses from YouTube API providing snippet titles, high-res thumbnails, channel IDs, and viewer statistics.",
        ar: "بيانات JSON مسترجعة من واجهة يوتيوب تتضمن العناوين والصور المصغرة ومعرفات القنوات والإحصائيات.",
      },
      schemaLanguage: "json",
      codeSnippet: `// =============================================================================
// YouTube Clone · Video Metadata Entity Contract
// =============================================================================

{
  "id": { "videoId": "dQw4w9WgXcQ" },
  "snippet": {
    "title": "Scalable Cloud Architecture with Next.js & NestJS",
    "channelTitle": "Ahmed Ragab",
    "channelId": "UCdev_ahmed_ragab",
    "description": "Deep architectural walkthrough of high-throughput web systems.",
    "thumbnails": {
      "high": { "url": "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" }
    }
  }
}`,
      modelsOrTables: [
        {
          name: "VideoSnippet",
          description: {
            en: "YouTube video metadata entity containing title, channel information, and media thumbnail URLs.",
            ar: "بيانات مقطع الفيديو من يوتيوب تشمل العنوان والقناة وروابط الصور المصغرة.",
          },
          keyFields: ["videoId", "title", "channelTitle", "thumbnailUrl"],
        },
      ],
    },
    engineeringHighlights: [
      {
        title: { en: "Rapid Search Query Optimization & Feed Virtualization", ar: "تحسين البحث السريع وتصيير الخلاصة" },
        category: { en: "API Integration & UX", ar: "تكامل الواجهات وتجربة المستخدم" },
        challenge: {
          en: "Preventing API rate-limit exhaustion while users rapidly type search queries into the top navigation bar.",
          ar: "حماية حصة الـ API من النفاد عند كتابة المستخدم لعبارات البحث بسرعة في شريط البحث.",
        },
        solution: {
          en: "Implemented search submission hooks with trimmed query caching, ensuring requests only dispatch upon user confirmation or deliberate pauses.",
          ar: "تطبيق خطافات بحث مع تخزين مؤقت للاستعلامات لمنع إرسال طلبات مكررة لنفس الكلمة.",
        },
      },
    ],
    gallery: [
      {
        id: "feed",
        src: "/assets/projects/youtube-clone/home-feed.jpg",
        title: { en: "Curated Video Feed", ar: "خلاصة مقاطع الفيديو الرئيسية" },
        caption: {
          en: "Dynamic topic categorization with responsive video card grid.",
          ar: "تصنيف الفيديوهات حسب الموضوعات مع شبكة عرض متجاوبة.",
        },
      },
      {
        id: "player",
        src: "/assets/projects/youtube-clone/video-player.jpg",
        title: { en: "Video Streaming Player & Related Clips", ar: "مشغل الفيديو والمقاطع المقترحة" },
        caption: {
          en: "Theater-mode video player with dynamic related video recommendations.",
          ar: "مشغل الفيديو مع مقترحات لمقاطع ذات صلة ومؤشرات القناة.",
        },
      },
      {
        id: "search",
        src: "/assets/projects/youtube-clone/search-results.jpg",
        title: { en: "Search Engine Results Feed", ar: "صفحة نتائج البحث السريع" },
        caption: {
          en: "Real-time search results matching query terms with channel metadata.",
          ar: "عرض نتائج البحث الفوري مع بيانات القناة وتاريخ النشر.",
        },
      },
    ],
    techStack: {
      frontend: ["React 18", "Material UI (MUI v5)", "ReactPlayer", "Axios", "React Router v6"],
      backend: ["RapidAPI YouTube v3 Engine", "Vercel Static Edge"],
      database: ["Cloud YouTube Data Store"],
      devopsAndTools: ["Vercel", "Git"],
    },
    outcomes: [
      {
        metric: "100%",
        label: { en: "API Compatibility", ar: "تكامل تام مع يوتيوب" },
        detail: { en: "Reliable playback across hundreds of live public video IDs", ar: "تشغيل سلس لمئات مقاطع الفيديو الحية دون أخطاء" },
      },
    ],
  },

  // =========================================================================
  // 9. FITNESS APP — Project #9
  // =========================================================================
  "fitness-app-workout-hub": {
    id: "fitness-app",
    slug: "fitness-app-workout-hub",
    badge: { en: "Health & Fitness Engine", ar: "تطبيق اللياقة البدنية والتمارين" },
    title: {
      en: "PulseFit — Modern Exercise & Workout Hub",
      ar: "بلس فيت — المنصة الرياضية ودليل التمارين التفاعلي",
    },
    subtitle: {
      en: "Comprehensive 1,000+ Exercise Directory, Target Muscle Filtering, and Integrated Video Guides",
      ar: "دليل رياضي تفاعلي يضم أكثر من 1,000 تمرين مع حركات متحركة وتصفية حسب العضلات المستهدفة وحاسبة BMI",
    },
    category: "Frontend & Media",
    year: "2024",
    status: { en: "Live on Vercel", ar: "متاح للمعاينة على Vercel" },
    heroImage: "/assets/projects/fitness/banner.jpg",
    links: {
      demo: "https://fitness-zeta-mauve.vercel.app",
      github: "https://github.com/dev-ahmed-ragab/fitness",
    },
    metrics: [
      {
        value: "1,000+",
        label: { en: "Exercise Catalog", ar: "تمريناً رياضياً موثقاً" },
        description: { en: "Detailed execution instructions, animated GIFs, and required equipment", ar: "شرح خطوات الأداء مع صور متحركة والمعدات المطلوبة" },
      },
      {
        value: "10+",
        label: { en: "Target Muscle Groups", ar: "مجموعات عضلية مستهدفة" },
        description: { en: "Back, Cardio, Chest, Lower Arms, Shoulders, Waist, Legs, etc.", ar: "عضلات الظهر، الصدر، الذراعين، الأكتاف، والبطن" },
      },
      {
        value: "BMI",
        label: { en: "Interactive Calculator", ar: "حاسبة كتلة الجسم" },
        description: { en: "Built-in BMI calculator with immediate metric categorization", ar: "حساب مؤشر كتلة الجسم وتقديم النصائح الرياضية المناسبة" },
      },
    ],
    ownership: {
      roleTitle: {
        en: "Frontend Developer",
        ar: "مطور واجهات اللياقة البدنية والتمارين",
      },
      summary: {
        en: "Architected and built the fitness portal: RapidAPI ExerciseDB & YouTube Search integration, horizontal muscle group filtering carousel, interactive BMI calculator, and client-side pagination.",
        ar: "تطوير المنصة الرياضية بالكامل: ربط واجهات ExerciseDB و YouTube API، شريط تصفية العضلات المستهدفة، حاسبة كتلة الجسم (BMI)، وتقسيم الصفحات.",
      },
      responsibilities: {
        en: [
          "Developed high-impact modern hero interface with live biometric indicator stats.",
          "Integrated RapidAPI ExerciseDB catalog providing 1,000+ exercises with animated execution GIFs.",
          "Implemented context-aware YouTube workout and form-correction video fetching for every exercise.",
          "Engineered interactive BMI Calculator computing body mass index with immediate metric guidance.",
          "Built smooth horizontal muscle group selector with responsive pagination controls.",
        ],
        ar: [
          "تصميم واجهة رئيسية جذابة تعكس الطاقة الرياضية وتبرز إحصائيات التمارين.",
          "ربط قاعدة بيانات ExerciseDB لجلب أكثر من 1,000 تمرين مع شروحات متحركة والمعدات.",
          "برمجة جلب فيديوهات الشرح وتصحيح الأخطاء آلياً من يوتيوب لكل تمرين.",
          "بناء حاسبة كتلة الجسم (BMI) التفاعلية مع تصنيف فوري وتقديم نصائح رياضية.",
          "تطوير شريط أفقي سلس لاختيار العضلة المستهدفة مع تقسيم الصفحات بدقة.",
        ],
      },
      architecturalDecisions: [
        {
          decision: { en: "RapidAPI ExerciseDB + Contextual YouTube Search Integration", ar: "الدمج بين قاعدة بيانات التمارين وفيديوهات يوتيوب السياقية" },
          rationale: {
            en: "Provided users with both immediate animated GIF previews and deep multi-minute coaching tutorials without manual video uploading.",
            ar: "تزويد المتدرب بصورة متحركة سريعة لأداء التمرين مع فيديوهات تدريبية تفصيلية من يوتيوب تلقائياً.",
          },
        },
      ],
    },
    problemSpace: {
      overview: {
        en: "Gym beginners frequently execute exercises with improper form due to confusing online descriptions, leading to injury, while struggling to find workouts tailored to the specific equipment available to them.",
        ar: "يعاني المبتدئون في صالات الجيم من أداء التمارين بأشكال خاطئة بسبب غموض الشروحات النصية مما يسبب إصابات عضلية، مع صعوبة إيجاد تمارين مناسبة للأجهزة المتاحة في ناديهم.",
      },
      painPoints: [
        {
          title: { en: "Improper Exercise Form & Injury Risk", ar: "الأداء الخاطئ للتمارين وخطر الإصابة" },
          description: {
            en: "Static text diagrams fail to communicate joint angles and tempo necessary for safe lifting.",
            ar: "الشروحات الورقية أو الثابتة تفشل في توضيح زوايا المفاصل وسرعة الحركة المطلوبة لأمان المتدرب.",
          },
        },
      ],
    },
    architecture: {
      overview: {
        en: "React 18 SPA built with Material UI v5 components, utilizing Axios for dual-API querying (ExerciseDB and YouTube Search), with client-side state caching for instant navigation.",
        ar: "تطبيق ويب تفاعلي بـ React 18 و Material UI v5، يعتمد على Axios للربط مع واجهتي ExerciseDB و YouTube، مع تخزين مؤقت للنتائج.",
      },
      layers: [
        {
          name: { en: "Exercise Hub UI", ar: "واجهة دليل التمارين" },
          tech: "React 18, Material UI (MUI v5), Emotion",
          details: {
            en: "Muscle group scroller, exercise cards with target muscle tags, and pagination.",
            ar: "شريط تمرير العضلات، بطاقات التمارين مع علامات توضيحية، وتقسيم الصفحات.",
          },
        },
        {
          name: { en: "Fitness API Gateway", ar: "بوابة بيانات اللياقة" },
          tech: "RapidAPI (ExerciseDB & YouTube API)",
          details: {
            en: "Fetches animated exercise GIFs, required gear, and matching coaching tutorials.",
            ar: "جلب الحركات الرياضية المتحركة والمعدات المطلوبة والفيديوهات التوضيحية.",
          },
        },
      ],
    },
    database: {
      engine: "RapidAPI ExerciseDB Global Exercise Repository",
      summary: {
        en: "Relational-style JSON payloads representing exercise biomechanics, body part classifications, and animated media endpoints.",
        ar: "بيانات JSON تشمل الميكانيكا الحيوية للتمرين، تصنيف عضلات الجسم، وروابط الصور المتحركة.",
      },
      schemaLanguage: "json",
      codeSnippet: `// =============================================================================
// PulseFit · Exercise Data Contract
// =============================================================================

{
  "id": "0025",
  "name": "barbell bench press",
  "bodyPart": "chest",
  "target": "pectorals",
  "equipment": "barbell",
  "gifUrl": "https://v2.exercisedb.io/image/barbell-bench-press.gif",
  "instructions": [
    "Lie flat on the bench with your feet firmly planted on the ground.",
    "Grip the barbell with hands slightly wider than shoulder-width.",
    "Lower the barbell slowly to mid-chest while keeping elbows at 45 degrees.",
    "Press the bar upward until arms are extended."
  ]
}`,
      modelsOrTables: [
        {
          name: "ExerciseRecord",
          description: {
            en: "Complete workout specification with muscle targets, required gear, and execution steps.",
            ar: "مواصفات التمرين الرياضي تشمل العضلة المستهدفة، والمعدات المطلوبة، وخطوات التنفيذ.",
          },
          keyFields: ["id", "name", "bodyPart", "target", "equipment", "gifUrl"],
        },
      ],
    },
    engineeringHighlights: [
      {
        title: { en: "Dual API Orchestration (ExerciseDB + Contextual YouTube Search)", ar: "تنسيق الاستعلام المزدوج بين ExerciseDB ومقاطع يوتيوب" },
        category: { en: "API Integration", ar: "تكامل الواجهات البرمجية" },
        challenge: {
          en: "Fetching accurate YouTube form-check tutorials corresponding to the specific exercise without misaligned video search results.",
          ar: "جلب فيديوهات توضيحية دقيقة ومطابقة لاسم التمرين من يوتيوب دون نتائج مضللة أو غير مرتبطة.",
        },
        solution: {
          en: "Constructed search sanitizers appending targeted coaching keywords ('form tutorial technique') to query strings, prioritizing high-authority fitness channels.",
          ar: "هندسة معالج لعبارات البحث يضيف كلمات دلالية توجيهية ('form tutorial') لضمان جلب مقاطع تدريبية احترافية فقط.",
        },
      },
    ],
    gallery: [
      {
        id: "banner",
        src: "/assets/projects/fitness/banner.jpg",
        title: { en: "PulseFit Fitness Hero", ar: "الواجهة الرئيسية لمنصة بلس فيت" },
        caption: {
          en: "High-impact workout portal with instant search and category navigation.",
          ar: "واجهة رياضية عصرية مع محرك بحث فوري وتصفح للمجموعات العضلية.",
        },
      },
    ],
    techStack: {
      frontend: ["React 18", "Material UI (MUI v5)", "Emotion", "Axios", "React Router v6"],
      backend: ["RapidAPI ExerciseDB Engine", "RapidAPI YouTube Search", "Vercel Static Edge"],
      database: ["Global Exercise DB Catalog"],
      devopsAndTools: ["Vercel", "Git"],
    },
    outcomes: [
      {
        metric: "1,000+",
        label: { en: "Catalog Depth", ar: "تنوع التمارين" },
        detail: { en: "Comprehensive exercise coverage for home workouts, gym machines, and free weights", ar: "تغطية كاملة لتمارين الجيم والمنزل والأوزان الحرة" },
      },
    ],
  },
};

export const projectSlugsList = [
  "iqraa-ai-saas",
  "axpo-os-enterprise-cockpit",
  "traxr-linear-issue-tracker",
  "royalmed-medical-platform",
  "prohealth-booking-platform",
  "frenzy-blog-publishing-platform",
  "b-labn-ordering-app",
  "youtube-clone-streaming",
  "fitness-app-workout-hub",
];

export function getProjectDossier(slug: string): ProjectDossier | undefined {
  return projectDossiers[slug];
}

export function getAllProjectSlugs(): string[] {
  return projectSlugsList;
}

export function getAdjacentProjects(currentSlug: string): {
  prev: ProjectDossier | null;
  next: ProjectDossier | null;
} {
  const index = projectSlugsList.indexOf(currentSlug);
  if (index === -1) return { prev: null, next: null };

  const prevSlug = index > 0 ? projectSlugsList[index - 1] : null;
  const nextSlug = index < projectSlugsList.length - 1 ? projectSlugsList[index + 1] : null;

  return {
    prev: prevSlug ? projectDossiers[prevSlug] || null : null,
    next: nextSlug ? projectDossiers[nextSlug] || null : null,
  };
}
