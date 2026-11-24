export interface ArchitectureCodeSnippet {
  filename: string;
  language: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  code: string;
}

export interface ExperienceCaseStudy {
  slug: string;
  id: string;
  title: {
    en: string;
    ar: string;
  };
  client: {
    en: string;
    ar: string;
  };
  role: {
    en: string;
    ar: string;
  };
  period: {
    en: string;
    ar: string;
  };
  location: {
    en: string;
    ar: string;
  };
  statusBadge: {
    en: string;
    ar: string;
  };
  heroImage: string;
  logo?: string;
  summary: {
    en: string;
    ar: string;
  };
  liveUrl?: string;
  blogUrl?: string;
  githubUrl?: string;
  privateNotice?: {
    en: string;
    ar: string;
  };
  metrics: Array<{
    val: string;
    label: { en: string; ar: string };
    desc?: { en: string; ar: string };
  }>;
  problem: {
    en: string[];
    ar: string[];
  };
  solution: {
    en: string[];
    ar: string[];
  };
  architecturePillars: Array<{
    title: { en: string; ar: string };
    desc: { en: string; ar: string };
  }>;
  technologies: string[];
  gallery: Array<{
    src: string;
    caption: { en: string; ar: string };
  }>;
  keyHighlights: {
    en: string[];
    ar: string[];
  };
  codeSnippets?: ArchitectureCodeSnippet[];
  accentColor: string;
  cardBg: string;
}

export const experienceCaseStudies: ExperienceCaseStudy[] = [
  // =========================================================================
  // 1. IQRAA PLATFORM
  // =========================================================================
  {
    slug: "iqraa",
    id: "iqraa-founder",
    title: {
      en: "Iqraa Platform — AI EdTech & Talent Intelligence SaaS",
      ar: "منصة إقرأ — منظومة الذكاء الأكاديمي وجاهزية المواهب السحابية",
    },
    client: {
      en: "Iqraa Platform (iqraa.live) · Flagship Startup",
      ar: "Iqraa Platform (iqraa.live) · شركة ناشئة رائدة",
    },
    role: {
      en: "Lead Full-Stack Engineer & Technical Founder",
      ar: "المؤسس التقني وقائد هندسة المنصة",
    },
    period: {
      en: "2025 – Present",
      ar: "2025 – حتى الآن",
    },
    location: {
      en: "Cairo, Egypt (Global Cloud)",
      ar: "القاهرة، مصر (سحابة عالمية)",
    },
    statusBadge: {
      en: "Live in Production · Serving 1,000+ Students",
      ar: "منصة إنتاجية حية · تخدم أكثر من 1,000 طالب نشط",
    },
    heroImage: "/assets/projects/iqraa-hero-v2.jpg",
    logo: "/assets/iqraa-logo.png",
    summary: {
      en: "Architected and engineered an end-to-end multi-tenant academic intelligence and talent readiness SaaS serving 1,000+ active university students. Built on Next.js 15 (App Router), React 19, TypeScript, and NestJS backed by Prisma and PostgreSQL with granular CASL authorization.",
      ar: "تأسيس وبناء المعمارية الكاملة لمنصة تعليمية سحابية متعددة المستأجرين تخدم أكثر من 1,000 طالب جامعي نشط بنطاقات فرعية معزولة وخوارزمية رياضية لقياس جاهزية المهارات (IPI)، مبنية بـ Next.js 15 و React 19 و NestJS مع Prisma و PostgreSQL وحوكمة صلاحيات معيارية بـ CASL.",
    },
    liveUrl: "https://iqraa.live",
    blogUrl: "https://iqraa.live/blog",
    metrics: [
      {
        val: "1,000+",
        label: { en: "Active Students", ar: "طالب جامعي نشط" },
        desc: { en: "Active student cohorts evaluated across Egyptian university faculties", ar: "طلاب جامعيون يخضعون للتقييم الأكاديمي الدوري بكليات الهندسة والعلوم" },
      },
      {
        val: "< 1s",
        label: { en: "Sub-Second Latency", ar: "استجابة أقل من ثانية" },
        desc: { en: "Sub-second API response time across distributed query pipelines", ar: "سرعة استجابة فائقة للواجهات البرمجية واستعلامات البيانات" },
      },
      {
        val: "CASL",
        label: { en: "RBAC & RLS", ar: "صلاحيات وحماية" },
        desc: { en: "Granular ability-based authorization and strict tenant isolation", ar: "حوكمة صلاحيات دقيقة مبنية على الأفعال وعزل تام لبيانات المؤسسات" },
      },
      {
        val: "BullMQ",
        label: { en: "Async Queues", ar: "طوابير معالجة مهام" },
        desc: { en: "Redis-backed job queuing for lecture processing & AI reports", ar: "معالجة خلفية غير متزامنة بـ Redis لتحليل المحاضرات وتوليد التقارير" },
      },
    ],
    problem: {
      en: [
        "Traditional universities rely on rote memorization exams that fail to reflect students' real-world problem-solving abilities or market readiness.",
        "Educational institutions and hackathon organizers lack isolated branded platforms, forcing them to build infrastructure from scratch.",
        "Academic grading cycles take weeks without immediate automated feedback or multidimensional skill gap analysis.",
        "Strict compliance and governance needs require rigorous role isolation between students, teaching assistants, professors, and enterprise sponsors.",
      ],
      ar: [
        "انفصال التقييم الأكاديمي عن جاهزية سوق العمل واعتماد الجامعات على اختبارات الحفظ التي لا تعكس مهارات حل المشكلات الفعلية.",
        "تشتت المنظومات الجامعية وصعوبة الاستضافة المتعددة دون الاضطرار لبناء بنية تحتية سحابية من الصفر لكل هاكاثون أو كلية.",
        "بطء التقييم التحليلي واستغراق أسابيع في فحص التقييمات دون تقديم تغذية راجعة فورية أو قياس دقيق للمهارات.",
        "الحاجة لنظام صلاحيات دقيق للغاية (RBAC) يعزل صلاحيات الطلاب، المعيدين، الأساتذة، ومسؤولي المؤسسة.",
      ],
    },
    solution: {
      en: [
        "Designed a multi-tenant cloud architecture supporting dynamic subdomains (e.g., faculty.iqraa.live) with custom branding and strict tenant data isolation.",
        "Engineered the proprietary IPI (Iqraa Performance Index) algorithmic talent readiness scoring engine, factoring technical depth, continuity, and temporal decay.",
        "Constructed a modular NestJS enterprise backend utilizing Prisma ORM for 100% strict type-safety across PostgreSQL databases.",
        "Implemented CASL ability-based authorization and asynchronous job queues via NestJS BullMQ and Redis for heavy lecture ingestion.",
        "Built Iqraa Hub — a private internal ops platform for blog publishing, bug tracking, user complaint management, and release notes, deployed separately at iqraa-hub.vercel.app.",
      ],
      ar: [
        "تصميم بنية تحتية برمجية تدعم النطاقات الفرعية الحيوية (Dynamic Subdomains): كل جامعة أو هاكاثون يحصل على رابط وهوية مستقلة مع عزل تام للبيانات.",
        "هندسة خوارزمية مؤشر الأداء IPI التي تعتمد على عمق المعرفة التقنية والاستمرارية مع تطبيق الاضمحلال الزمني (Temporal Decay) لتشجيع الاستمرار.",
        "بناء خادم مؤسسي موثوق بـ NestJS و Prisma ORM لضمان أمان برمجي كامل Type-Safety على قاعدة بيانات PostgreSQL.",
        "تطبيق معيار الصلاحيات المتقدم CASL وفصل العمليات الشاقة في طوابير انتظار معالجة غير متزامنة بـ BullMQ و Redis.",
        "بناء إقرأ هب — منصة التشغيل الداخلية الخاصة لنشر المدونة وتتبع الأخطاء وإدارة شكاوى المستخدمين وإشعارات الإصدارات، منشورة بشكل مستقل على iqraa-hub.vercel.app.",
      ],
    },
    architecturePillars: [
      {
        title: { en: "Multi-Tenant Dynamic Subdomains", ar: "المعمارية المؤسسية متعددة النطاقات" },
        desc: {
          en: "Wildcard routing on Vercel Edge with automated tenant detection, custom branding, and isolated schema access.",
          ar: "توجيه ذكي للنطاقات الفرعية على شبكة Vercel مع التعرف التلقائي على المؤسسة وتخصيص الهوية البصرية.",
        },
      },
      {
        title: { en: "IPI Algorithmic Readiness Radars", ar: "خوارزمية مؤشر الأداء وجاهزية المواهب" },
        desc: {
          en: "Multidimensional vector calculation generating interactive Canvas skill radars with continuous temporal decay adjustments.",
          ar: "حساب متجه متعدد الأبعاد يولد رادارات مهارات تفاعلية مع تضاؤل زمني يشجع الطالب على تحديث جاهزيته باستمرار.",
        },
      },
      {
        title: { en: "Asynchronous Background Ingestion", ar: "طوابير المعالجة الخلفية غير المتزامنة" },
        desc: {
          en: "Offloaded heavy PDF lecture ingestion, OCR extraction, and AI quiz generation to Redis and NestJS BullMQ workers.",
          ar: "عزل عمليات معالجة الكتب الضخمة واستخراج النصوص بالذكاء الاصطناعي في طوابير خلفية بـ Redis و BullMQ لمنع أي بطء للواجهة.",
        },
      },
      {
        title: { en: "Granular Ability-Based Security", ar: "حوكمة الصلاحيات المعيارية بـ CASL" },
        desc: {
          en: "Unified CASL rules applied symmetrically across NestJS route guards and React client context hooks.",
          ar: "قواعد حماية موحدة بـ CASL تطبق على مستوى حراس السيرفر في NestJS ومكونات الواجهة في React لمنع أي تسريب للبيانات.",
        },
      },
      {
        title: { en: "Iqraa Hub — Internal Ops Layer", ar: "إقرأ هب — نظام التشغيل الداخلي" },
        desc: {
          en: "A private companion platform handling blog publishing, bug tracking, complaint management, and release notes — built and deployed independently alongside the main platform.",
          ar: "منصة داخلية خاصة مكملة للمنصة الرئيسية، تتولى نشر المدونة وتتبع الأخطاء وإدارة الشكاوى وإشعارات الإصدارات — مبنية ومنشورة بشكل مستقل.",
        },
      },
    ],
    technologies: [
      "Next.js 15 (App Router)",
      "React 19",
      "TypeScript",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "BullMQ",
      "Redis",
      "CASL",
      "Tailwind CSS",
      "Docker",
      "Vercel Edge",
    ],
    gallery: [
      { src: "/assets/iqraa/iqraa-lecture-player.jpg", caption: { en: "Production Lecture Player — Chapters, Exercise Bank & Notes", ar: "واجهة مشغل المحاضرات الفعلية — فهرس الأبواب وبنك التمارين" } },
      { src: "/assets/iqraa/iqraa-hub-console.jpg", caption: { en: "Iqraa Hub — Internal Engineering Console & Feedback Triage", ar: "إقرأ هب — منصة العمليات الداخلية وإدارة البلاغات والمدونة" } },
      { src: "/assets/iqraa-dashboard-real.png", caption: { en: "Production Platform Dashboard & Student Analytics", ar: "لوحة تحكم المنصة الإنتاجية وتحليلات الطلاب الحية" } },
      { src: "/assets/iqraa-activity-radar.png", caption: { en: "IPI Multidimensional Talent Readiness Radar", ar: "رادار مؤشر الجاهزية الأكاديمية متعدد المحاور IPI" } },
      { src: "/assets/iqraa-courses-hub.png", caption: { en: "Lecture Hub & Course Directory Interface", ar: "مركز المحاضرات ودليل الكورسات الأكاديمية" } },
    ],
    codeSnippets: [
      {
        filename: "prisma/schema.prisma",
        language: "prisma",
        title: { en: "Multi-Tenant Relational Schema", ar: "هيكلة قاعدة البيانات متعددة المستأجرين" },
        description: {
          en: "Isolated subdomain routing, tenant membership mapping, and IPI skill vector models.",
          ar: "نمذجة النطاقات الفرعية، وربط عضوية الطلاب بالمؤسسات، ومحاور رادار الجاهزية.",
        },
        code: `// Multi-tenant architecture schema for Iqraa Platform
model Tenant {
  id           String         @id @default(cuid())
  slug         String         @unique // e.g. "faculty.iqraa.live"
  name         String
  customDomain String?        @unique
  branding     Json           // Theme, primaryColor, institutional logo
  members      TenantMember[]
  courses      Course[]
  createdAt    DateTime       @default(now())
}

model User {
  id          String            @id @default(cuid())
  email       String            @unique
  name        String
  memberships TenantMember[]
  ipiProfiles IpiRadarProfile[]
}

model TenantMember {
  id        String     @id @default(cuid())
  tenantId  String
  userId    String
  role      TenantRole // ADMIN, INSTRUCTOR, TA, STUDENT
  tenant    Tenant     @relation(fields: [tenantId], references: [id])
  user      User       @relation(fields: [userId], references: [id])

  @@unique([tenantId, userId])
}

model IpiRadarProfile {
  id              String   @id @default(cuid())
  userId          String
  problemSolving  Float    @default(0)
  systemDesign    Float    @default(0)
  codeDiscipline  Float    @default(0)
  temporalDecay   Float    @default(1.0)
  lastCalculated  DateTime @default(now())
  user            User     @relation(fields: [userId], references: [id])
}`,
      },
      {
        filename: "src/auth/casl-ability.factory.ts",
        language: "typescript",
        title: { en: "CASL Ability-Based Authorization", ar: "حوكمة الصلاحيات المعيارية (CASL)" },
        description: {
          en: "Tenant-bounded action rules preventing cross-institution data leaks.",
          ar: "قواعد صلاحيات محكومة بالنطاق المؤسسي تمنع تسريب البيانات بين الكليات.",
        },
        code: `import { AbilityBuilder, createMongoAbility, MongoAbility } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { User, TenantRole } from '@prisma/client';

export type AppAbility = MongoAbility<[string, any]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User, currentTenantId: string) {
    const { can, cannot, build } = new AbilityBuilder<AppAbility>(createMongoAbility);
    const membership = user.memberships?.find(m => m.tenantId === currentTenantId);

    if (membership?.role === TenantRole.ADMIN) {
      can('manage', 'all', { tenantId: currentTenantId });
    } else if (membership?.role === TenantRole.INSTRUCTOR) {
      can('create', 'Course', { tenantId: currentTenantId });
      can('update', 'Course', { instructorId: user.id, tenantId: currentTenantId });
      can('read', 'Submission', { tenantId: currentTenantId });
    } else {
      can('read', 'Course', { published: true, tenantId: currentTenantId });
      can('create', 'Submission', { tenantId: currentTenantId });
      cannot('read', 'ExamSolution', { tenantId: currentTenantId });
    }

    return build();
  }
}`,
      },
      {
        filename: "src/analytics/ipi-decay-calculator.ts",
        language: "typescript",
        title: { en: "IPI Temporal Decay Algorithm", ar: "خوارزمية الاضمحلال الزمني لمؤشر الجاهزية" },
        description: {
          en: "Algorithmic decay applying exponential half-life weighting to academic metrics.",
          ar: "حساب رياضي يطبق عامل نصف العمر الزمني لتحديث قياس جاهزية الطالب باستمرار.",
        },
        code: `// Computes effective IPI score factoring temporal decay
export function calculateIpiWithTemporalDecay(
  rawScore: number,
  lastActivityDate: Date,
  halfLifeDays = 30
): number {
  const diffMs = Math.max(0, Date.now() - lastActivityDate.getTime());
  const daysPassed = diffMs / (1000 * 60 * 60 * 24);
  
  // Exponential half-life decay bounded by minimum active floor (0.65)
  const decayFactor = Math.pow(0.5, daysPassed / halfLifeDays);
  const effectiveMultiplier = 0.65 + 0.35 * decayFactor;
  
  return Number((rawScore * effectiveMultiplier).toFixed(2));
}`,
      },
    ],
    keyHighlights: {
      en: [
        "Shipped Iqraa Platform live at iqraa.live — serving 1,000+ active students.",
        "Built the proprietary IPI algorithm with exponential temporal decay for continuous skill measurement.",
        "Zero cross-tenant data leaks across all multi-tenant database models.",
        "Built and deployed Iqraa Hub as a standalone private ops platform for internal team workflows.",
        "End-to-end CI/CD with Vitest and Playwright automated test suites.",
      ],
      ar: [
        "إطلاق منصة إقرأ على iqraa.live بنجاح لتخدم أكثر من 1,000 طالب جامعي نشط.",
        "بناء خوارزمية IPI المبتكرة بالاضمحلال الزمني الأسي لقياس جاهزية الطالب بشكل مستمر.",
        "تحقيق عزل تام بنسبة 100% لبيانات المؤسسات المختلفة عبر نماذج قاعدة البيانات متعددة المستأجرين.",
        "بناء إقرأ هب كمنصة تشغيل داخلية مستقلة لدعم سير عمل الفريق الداخلي.",
        "تكامل مستمر واختبارات جودة شاملة بـ Vitest و Playwright.",
      ],
    },
    accentColor: "#10b981",
    cardBg: "#071a16",
  },

  // =========================================================================
  // 2. APPTRACTION — MAHAM SCHOOL MANAGEMENT SAAS
  // =========================================================================
  {
    slug: "apptraction",
    id: "maham-contract",
    title: {
      en: "Apptraction — Enterprise School Management Suite (Maham)",
      ar: "شركة Apptraction — منظومة مَهام السحابية المتكاملة لإدارة المدارس",
    },
    client: {
      en: "Apptraction — Enterprise Service Contract (Under NDA)",
      ar: "شركة Apptraction — تعاقد تجاري مؤسسي (محمي بـ NDA)",
    },
    role: {
      en: "Frontend & Product Engineer (Contract)",
      ar: "مهندس واجهات ومنتجات برمجية (تعاقد)",
    },
    period: {
      en: "2025",
      ar: "2025",
    },
    location: {
      en: "Remote Contract",
      ar: "تعاقد عن بُعد",
    },
    statusBadge: {
      en: "Corporate Contract · 13 Architecture Specs Governed",
      ar: "تعاقد شركات مؤسسي · محكوم بـ 13 دليلاً معمارياً",
    },
    heroImage: "/assets/apptraction-logo.png",
    logo: "/assets/apptraction-logo.png",
    summary: {
      en: "Engineered core modules for enterprise school management at Apptraction for the Maham platform, including a high-precision dynamic document & PDF builder engine. Specialized in interactive drag-and-drop assignment workflows, live multi-client synchronization via Supabase Realtime, and cross-platform desktop packaging via Electron and PWA.",
      ar: "هندسة وتطوير الأنظمة الأساسية لمنصة مَهام الموجهة للمدارس لدى شركة Apptraction، بما يشمل محرك بناء وتصدير مستندات PDF المتقدمة التفاعلي، وبناء محرر واجبات بالسحب والإفلات بـ @dnd-kit بـ 60 إطار/ثانية، ومزامنة حية بـ Supabase Realtime، وتغليف ديسكتوب بـ Electron وتطبيق PWA.",
    },
    privateNotice: {
      en: "Protected commercial client project under Non-Disclosure Agreement (NDA). Architecture walkthrough and code walkthroughs are available upon request during technical interviews.",
      ar: "مشروع تجاري خاص لشركة تجارية محمي باتفاقية سرية معلومات (NDA). متاح استعراض المعمارية والكود التقني مباشرة أثناء المقابلات الفنية.",
    },
    metrics: [
      {
        val: "60 FPS",
        label: { en: "Drag & Drop UI", ar: "سحب وإفلات تفاعلي" },
        desc: { en: "Smooth 60FPS assignment builder using @dnd-kit with optimistic state", ar: "محرر واجبات بالسحب والإفلات فائق النعومة وتحديثات واجهة متفائلة" },
      },
      {
        val: "Live",
        label: { en: "Supabase Realtime", ar: "مزامنة لحظية حية" },
        desc: { en: "Multi-client instant state sync via postgres_changes channels", ar: "مزامنة فورية متعددة المستخدمين عبر قنوات postgres_changes السحابية" },
      },
      {
        val: "13 Rules",
        label: { en: "Architecture Specs", ar: "أدلة معمارية موثقة" },
        desc: { en: "Standardized UI design system governed by 13 strict architectural rulebooks", ar: "نظام تصميم موحد ومكتبة مكونات محكومة بـ 13 دليلاً إرشادياً معمارياً" },
      },
      {
        val: "Desktop",
        label: { en: "Electron & PWA", ar: "ديسكتوب وتطبيق ويب" },
        desc: { en: "Offline-ready Progressive Web App and cross-platform desktop wrapper", ar: "تطبيق ويب تقدمي يدعم العمل بدون إنترنت وتطبيق ديسكتوب بـ Electron" },
      },
    ],
    problem: {
      en: [
        "Fragmented UI component ecosystem with inconsistent button patterns, uncontrolled dialog state, and ad-hoc loaders.",
        "Teachers suffered from tedious, multi-step assignment scheduling, requiring excessive manual clicks for each class cohort.",
        "Daily attendance taking caused continuous page reloads, causing high friction and lagging state across large classrooms.",
        "Manual curriculum data entry was error-prone, requiring hours to digitize national Arabic textbooks and structured lesson outlines.",
      ],
      ar: [
        "تشتت الهوية البصرية والمكونات واستخدام عناصر تحميل وأيقونات غير متناسقة وغياب معايير موحدة للواجهات.",
        "بطء تجربة المعلم في إنشاء ونقل الواجبات وتصحيحها ومتابعة تسليمات مئات الطلاب عبر خطوات يدوية طويلة.",
        "تسجيل الحضور والغياب كان يتطلب إعادة تحميل الصفحة، مما يسبب بطء العمل في الفصول الكبيرة.",
        "صعوبة إدخال كتب الوزارة والمناهج الدراسية العربية يدوياً والحاجة لنظام OCR يتعرف على النصوص العربية بدقة.",
      ],
    },
    solution: {
      en: [
        "Standardized the frontend component library on Tailwind CSS, Radix UI, and Lucide icons, codified into 13 strict architectural rulebooks.",
        "Engineered the interactive drag-and-drop assignment creation module using @dnd-kit/core and @dnd-kit/sortable with instant optimistic UI updates.",
        "Constructed a high-throughput attendance marking engine (AttendanceDailyMarking.tsx, 1200+ LOC) with zero-reload updates.",
        "Integrated document ingestion pipeline combining PaddleOCR with Google Cloud Vision for precise unit extraction from Arabic textbooks.",
      ],
      ar: [
        "بناء نظام تصميم موحد ومكتبة مكونات معيارية مبنية على Tailwind CSS و Radix UI محكومة بـ 13 دليلاً إرشادياً معمارياً.",
        "هندسة محرر واجبات تفاعلي بالسحب والإفلات بـ @dnd-kit يتيح نقل المهام بين المسودات والمجدولة والمنشورة بسلاسة تامة.",
        "تطوير شاشة تسجيل الحضور اليومي التفاعلية (AttendanceDailyMarking.tsx بـ +1200 سطر كود) برصد لحظي بدون ريفريش.",
        "دمج أدوات استخراج المناهج بالذكاء الاصطناعي بالاعتماد على PaddleOCR و Google Cloud Vision لاستخراج الدروس العربية.",
      ],
    },
    architecturePillars: [
      {
        title: { en: "Standardized Component Rulebooks", ar: "13 دليلاً معمارياً لنظام التصميم" },
        desc: {
          en: "Codified design standards eliminating UI fragmentation and mandating single source-of-truth components across tables, dialogs, and loaders.",
          ar: "توحيد 100% من مكونات المنصة عبر معايير موثقة تضمن التزام أي مطور جديد بنفس معايير الأزرار والجداول واللودرات.",
        },
      },
      {
        title: { en: "Optimistic DnD State Sync", ar: "سحب وإفلات تفاعلي بتحديثات متفائلة" },
        desc: {
          en: "60FPS drag-and-drop sorting via @dnd-kit with optimistic local state and background Supabase persistence.",
          ar: "إعادة ترتيب فورية للواجبات بـ 60 إطار في الثانية مع تحديث الحالة محلياً وحفظ التغييرات في الخلفية دون أي وميض.",
        },
      },
      {
        title: { en: "Multi-Role Row-Level Security", ar: "حوكمة الصلاحيات وسياسات RLS" },
        desc: {
          en: "Quad-role access hierarchy (Admin, Teacher, Student, Parent) interfacing directly with PostgreSQL Row-Level Security.",
          ar: "هيكل صلاحيات رباعي يفصل بيانات كل مدرسة وفصل ويحمي استعلامات قاعدة البيانات بسياسات Row Level Security المشددة.",
        },
      },
      {
        title: { en: "Offline Desktop & PWA Engine", ar: "محرك الديسكتوب والتطبيق التقدمي" },
        desc: {
          en: "Cross-platform Electron shell with IPC state caching and service worker synchronization for low-connectivity schools.",
          ar: "تغليف المنصة لتطبيق ديسكتوب بـ Electron وتطبيق ويب PWA مع كاش محلي للعمل في المدارس ذات الاتصال الضعيف.",
        },
      },
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase Realtime",
      "@dnd-kit/core",
      "Electron",
      "PWA",
      "PostgreSQL RLS",
      "Radix UI",
    ],
    gallery: [
      { src: "/assets/apptraction-logo.png", caption: { en: "Apptraction Enterprise Engineering Standards & Brandmark", ar: "شعار وهوية شركة Apptraction ومعايير البناء المؤسسية" } },
    ],
    codeSnippets: [
      {
        filename: "src/hooks/useAssignmentBoard.ts",
        language: "typescript",
        title: { en: "Optimistic 60FPS Drag & Drop Engine", ar: "محرك السحب والإفلات التفاعلي (@dnd-kit)" },
        description: {
          en: "Zero-latency optimistic state updates with background Supabase RPC synchronization.",
          ar: "تحديثات واجهة فورية دون أي تأخير زمني ومزامنة خلفية مع السيرفر السحابي.",
        },
        code: `import { useState, useCallback } from 'react';
import { DragEndEvent, useSensors, useSensor, PointerSensor, KeyboardSensor } from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { supabase } from '@/lib/supabase/client';

export function useAssignmentBoard(initialColumns: ColumnMap, schoolId: string) {
  const [columns, setColumns] = useState(initialColumns);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = useCallback(async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    // 1. Optimistic local state update (0ms UI lag for 60FPS experience)
    setColumns(prev => moveAssignmentBetweenColumns(prev, active.id, over.id));

    // 2. Background RPC persistence protected by Supabase RLS
    const { error } = await supabase.rpc('reorder_school_assignment', {
      p_school_id: schoolId,
      p_assignment_id: active.id,
      p_target_column: over.id,
    });

    if (error) {
      // Rollback to previous state on error
      setColumns(initialColumns);
    }
  }, [schoolId, initialColumns]);

  return { columns, sensors, handleDragEnd };
}`,
      },
      {
        filename: "src/lib/realtime/schoolChannel.ts",
        language: "typescript",
        title: { en: "Supabase Realtime Channel Subscription", ar: "قنوات المزامنة اللحظية (Supabase Realtime)" },
        description: {
          en: "Subscribes to multi-client classroom state changes without polling.",
          ar: "الاستماع المباشر للتغييرات في الفصول والواجبات لحظياً عبر قنوات السيرفر.",
        },
        code: `import { useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';

export function useSchoolRealtimeSync(schoolId: string, onEvent: (payload: any) => void) {
  useEffect(() => {
    const channel = supabase
      .channel(\`school:\${schoolId}:assignments\`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'assignments',
          filter: \`school_id=eq.\${schoolId}\`,
        },
        (payload) => {
          onEvent(payload);
        }
      )
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          console.log(\`[Telemetry] Realtime channel active for school: \${schoolId}\`);
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [schoolId, onEvent]);
}`,
      },
    ],
    keyHighlights: {
      en: [
        "Reduced teacher assignment workflow durations by 50%.",
        "100% component consistency enforced across dozens of complex enterprise views.",
        "Zero-latency multi-client state synchronization via Supabase postgres_changes.",
        "Packaged into cross-platform Electron desktop app and offline-capable PWA.",
      ],
      ar: [
        "تسريع عمليات المعلم ورصد الواجبات والدرجات بنسبة 50%.",
        "توحيد 100% من مكونات المنصة عبر نظام تصميم صارم وموثق.",
        "مزامنة لحظية للبيانات بين المعلمين والطلاب عبر قنوات Supabase Realtime.",
        "تغليف المنصة لتطبيق ديسكتوب بـ Electron وتطبيق ويب تقدمي PWA.",
      ],
    },
    accentColor: "#06b6d4",
    cardBg: "#081726",
  },

  // =========================================================================
  // 3. ROYALMED MEDICAL ACADEMY
  // =========================================================================
  {
    slug: "royalmed",
    id: "royalmed-collaborator",
    title: {
      en: "RoyalMed — Clinical Examination & Medical Academy Engine",
      ar: "منصة RoyalMed — محرك الامتحانات الإكلينيكية والأكاديمية الطبية",
    },
    client: {
      en: "RoyalMed Medical Academy",
      ar: "RoyalMed (الأكاديمية الطبية)",
    },
    role: {
      en: "Software Engineer / Technical Collaborator",
      ar: "مهندس برمجيات ومتعاون تقني",
    },
    period: {
      en: "Late 2024 – Mid 2025",
      ar: "أواخر 2024 – منتصف 2025",
    },
    location: {
      en: "Contract / Remote",
      ar: "تعاقد / عن بُعد",
    },
    statusBadge: {
      en: "Client Engineering · 10,000+ Q-Bank Items",
      ar: "مشروع عميل معتمد · أكثر من 10,000 سؤال إكلينيكي",
    },
    heroImage: "/assets/royalmed-showcase.jpg",
    logo: "/assets/royalmed/hero.jpg",
    summary: {
      en: "Co-developed the comprehensive medical educational platform for RoyalMed Academy. Engineered interactive timed clinical examination modules with MCQ scoring rubrics, boosted website loading speed by 40%, and integrated Bunny Stream DRM API for pirated video stream prevention.",
      ar: "تطوير مشترك للمنصة التعليمية الطبية الشاملة لأكاديمية RoyalMed. هندسة محرك امتحانات إكلينيكية بمؤقت زمني وتصحيح فوري، تسريع استجابة الموقع بنسبة 40%، وربط بث المحاضرات المشفر بـ Bunny Stream DRM API لمنع سرقة الفيديوهات.",
    },
    metrics: [
      {
        val: "+40%",
        label: { en: "Load Speed Boost", ar: "تسريع تحميل الموقع" },
        desc: { en: "Overhauled asset loading and page payload weights", ar: "تحسين سرعة الظهور الأولى وتقليل أحجام البيانات" },
      },
      {
        val: "10k+",
        label: { en: "Clinical Questions", ar: "أسئلة بنك إكلينيكية" },
        desc: { en: "Structured medical clinical question database with explanations", ar: "بنك أسئلة طبية مع شروحات تفصيلية للإجابات النموذجية" },
      },
      {
        val: "Timed",
        label: { en: "Examination Engine", ar: "امتحانات بمؤقت زمني" },
        desc: { en: "Interactive countdown timer with auto-submit logic", ar: "امتحانات تفاعلية بمؤقت زمني وتسليم تلقائي عند انتهاء الوقت" },
      },
      {
        val: "DRM",
        label: { en: "Bunny Stream API", ar: "بث فيديو محمي" },
        desc: { en: "Encrypted HLS video streaming pipeline protecting IP", ar: "بث فيديو مشفر عبر تقنية DRM يمنع تصوير الشاشة وسرقة المحاضرات" },
      },
    ],
    problem: {
      en: [
        "Medical students faced slow page load times caused by uncompressed lecture assets, reducing study engagement.",
        "Clinical examination preparation lacked simulated exam environments with strict timed constraints and instant review analytics.",
        "Medical video lectures were vulnerable to unauthorized copying and piracy, risking the academy's proprietary intellectual property.",
      ],
      ar: [
        "بطء تحميل صفحات الموقع بسبب تراكم ملفات الوسائط غير المضغوطة مما أثر على تجربة دراسة الطلاب.",
        "افتقار الطلاب لبيئة امتحانات تحاكي الاختبارات الحقيقية بمؤقت زمني وتصحيح تفاعلي فوري.",
        "تعرض المحاضرات الطبية للقرصنة وتصوير الشاشة والحاجة لحل حماية مشفر موثوق.",
      ],
    },
    solution: {
      en: [
        "Engineered the interactive clinical examination engine with MCQ testing, countdown timers, and immediate score breakdowns.",
        "Refactored frontend asset pipelines and implemented smart caching, achieving a 40% load speed improvement.",
        "Integrated the Bunny Stream DRM API pipeline with dynamic token generation to prevent unauthorized lecture piracy.",
      ],
      ar: [
        "بناء محرك الامتحانات الإكلينيكية التفاعلي بمؤقت زمني ونظام درجات وتحليل فوري لإجابات الطلاب.",
        "إعادة هيكلة استراتيجيات الكاش والتحميل الكسول للوسائط مما قلل زمن التحميل بنسبة 40%.",
        "دمج مشغل فيديو محمي من القرصنة عبر Bunny Stream DRM لمنع سرقة المحاضرات.",
      ],
    },
    architecturePillars: [
      {
        title: { en: "Clinical Exam Countdown Engine", ar: "محرك الامتحانات بمؤقت زمني" },
        desc: {
          en: "Deterministic timer with client-server validation preventing tab switching abuse and auto-submitting upon expiration.",
          ar: "مؤقت زمني منضبط يمنع التلاعب ويسلم الامتحان تلقائياً عند انتهاء الوقت.",
        },
      },
      {
        title: { en: "Anti-Piracy Video DRM Pipeline", ar: "بث الفيديو المحمي من القرصنة" },
        desc: {
          en: "Integrated Bunny Stream DRM API with tokenized URL expiry, preventing unauthorized video downloads.",
          ar: "تشفير المحاضرات بروابط مؤقتة ومفاتيح تشفير متغيرة تمنع تحميل أو تسجيل المحاضرات.",
        },
      },
      {
        title: { en: "Dual Role Administration", ar: "لوحات التحكم الإدارية المزدوجة" },
        desc: {
          en: "Tailored Admin cockpit for curriculum ingestion alongside intuitive student lecture review hubs.",
          ar: "لوحة تحكم لإدارة المحتوى وبنوك الأسئلة بجانب واجهة سهلة للطلاب لمتابعة الدروس.",
        },
      },
    ],
    technologies: [
      "React 18",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Redux Toolkit",
      "Bunny Stream API",
      "Tailwind CSS",
    ],
    gallery: [
      { src: "/assets/royalmed-showcase.jpg", caption: { en: "RoyalMed Academy Showcase Banner & Curriculum Suite", ar: "بانر منصة RoyalMed واستعراض المناهج الطبية" } },
      { src: "/assets/royalmed/hero.jpg", caption: { en: "Platform Landing Hub & Student Gateway", ar: "بوابة الطلاب الرئيسية ومركز المحاضرات الطبية" } },
      { src: "/assets/royalmed/dashboard.jpg", caption: { en: "Clinical Exam Analytics & Student Scoreboard", ar: "لوحة تحليلات نتائج الامتحانات الإكلينيكية" } },
      { src: "/assets/royalmed/courses.jpg", caption: { en: "Lecture Directory & Video Streaming Module", ar: "دليل الكورسات الطبية ومشغل الفيديو المحمي" } },
    ],
    codeSnippets: [
      {
        filename: "src/modules/exam/useClinicalTimer.ts",
        language: "typescript",
        title: { en: "Deterministic Clinical Exam Timer", ar: "محرك المؤقت الزمني للامتحانات الإكلينيكية" },
        description: {
          en: "Client-side countdown with automatic timeout trigger and local state persistence.",
          ar: "مؤقت زمني دقيق بمستوى الثانية يقوم بالحفظ المؤقت والتسليم الآلي للدرجات.",
        },
        code: `import { useState, useEffect, useRef } from 'react';

export function useClinicalExamTimer(initialSeconds: number, onAutoSubmit: () => void) {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);
  const submittedRef = useRef(false);

  useEffect(() => {
    if (secondsRemaining <= 0 && !submittedRef.current) {
      submittedRef.current = true;
      onAutoSubmit();
      return;
    }

    const interval = setInterval(() => {
      setSecondsRemaining(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsRemaining, onAutoSubmit]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = \`\${String(minutes).padStart(2, '0')}:\${String(seconds).padStart(2, '0')}\`;

  return { secondsRemaining, formattedTime };
}`,
      },
    ],
    keyHighlights: {
      en: [
        "Engineered timed MCQ clinical exam engine with instant student grading.",
        "Boosted website loading speed by 40% across academic assets.",
        "Integrated Bunny Stream DRM API preventing lecture video theft.",
      ],
      ar: [
        "بناء محرك الامتحانات الإكلينيكية التفاعلي بمؤقت زمني وتصحيح فوري.",
        "تسريع تحميل صفحات المنصة بنسبة 40% عبر استراتيجيات الكاش الذكية.",
        "دمج بث الفيديو المشفر عبر Bunny Stream DRM لحماية المحتوى الأكاديمي.",
      ],
    },
    accentColor: "#c084fc",
    cardBg: "#160b26",
  },

  // =========================================================================
  // 4. WEB MASTERS (FRONTEND INTERN)
  // =========================================================================
  {
    slug: "web-masters",
    id: "web-masters-intern",
    title: {
      en: "Web Masters — Accredited Corporate Frontend Internship",
      ar: "شركة Web Masters — تدريب مؤسسي رسمي معتمد لتطوير الواجهات الأمامية",
    },
    client: {
      en: "Web Masters (Accredited Corporate)",
      ar: "Web Masters (تدريب مؤسسي معتمد)",
    },
    role: {
      en: "Frontend Developer Intern",
      ar: "متدرب تطوير واجهات أمامية (React)",
    },
    period: {
      en: "Early 2024 – Mid 2024",
      ar: "أوائل 2024 – منتصف 2024",
    },
    location: {
      en: "Egypt (Accredited)",
      ar: "مصر (معتمد)",
    },
    statusBadge: {
      en: "Corporate Internship · Agile Sprints · Pixel-Perfect Figma",
      ar: "تدريب مؤسسي معتمد · دورات Agile · دقة بكسل كاملة من Figma",
    },
    heroImage: "/assets/experience-showcase.jpg",
    logo: "/assets/experience-showcase.jpg",
    summary: {
      en: "Completed accredited corporate internship developing responsive client applications with React, implementing pixel-perfect layouts from Figma design specifications, and collaborating in daily agile sprints and pull request code reviews.",
      ar: "إتمام تدريب رسمي معتمد لبناء واجهات ويب تفاعلية للعملاء وفق أحدث معايير React، مع تحويل تصاميم Figma بدقة بكسل كاملة والالتزام بدورات Agile اليومية ومراجعات الكود الصارمة.",
    },
    metrics: [
      {
        val: "Daily",
        label: { en: "Agile Sprints", ar: "دورات عمل أجايل" },
        desc: { en: "Daily standups, sprint retrospectives, and task estimates", ar: "مشاركة يومية في اجتماعات Standup ودورات تسليم أسبوعية" },
      },
      {
        val: "100%",
        label: { en: "Pixel-Perfect", ar: "دقة بكسل كاملة" },
        desc: { en: "Figma translation matching exact typography, tokens, and spacing", ar: "تحويل التصاميم من Figma بكفاءة بكسل مطابقة للمقاييس المعيارية" },
      },
      {
        val: "Strict",
        label: { en: "Code Reviews", ar: "مراجعات كود صارمة" },
        desc: { en: "Adhering to strict pull request reviews, clean architecture, and lint rules", ar: "الالتزام بمراجعات الكود الصارمة ومعايير الجودة للـ Pull Requests" },
      },
      {
        val: "React",
        label: { en: "Modular Hooks", ar: "واجهات وهوكس معيارية" },
        desc: { en: "Modular UI components with reusable hooks and clean state", ar: "بناء مكونات معيارية قابلة لإعادة الاستخدام بـ React Hooks" },
      },
    ],
    problem: {
      en: [
        "Corporate client workflows required strict compliance with detailed Figma specs, tight sprint deadlines, and zero visual regressions.",
        "Legacy codebases suffered from component bloat and deeply nested state requiring systematic refactoring.",
      ],
      ar: [
        "متطلبات العملاء كانت تتطلب دقة كاملة ومطابقة 100% لتصاميم Figma مع الالتزام بمواعيد تسليم الـ Sprints.",
        "وجود مكونات قديمة تحتاج لإعادة هيكلة وتفكيك إلى React Hooks معيارية قابلة لإعادة الاستخدام.",
      ],
    },
    solution: {
      en: [
        "Engineered responsive client layouts from Figma with pixel-perfect precision across all mobile and desktop viewports.",
        "Refactored legacy UI components into clean React functional components with custom hooks.",
        "Collaborated actively in daily standups and maintained high test coverage.",
      ],
      ar: [
        "بناء واجهات متجاوبة ومتوافقة تماماً مع تصاميم Figma على مختلف أحجام الشاشات.",
        "إعادة هيكلة المكونات القديمة وتحويلها إلى React Hooks معيارية سريعة التحميل.",
        "المشاركة في مراجعات الكود البرمجي (PR Reviews) لضمان كتابة كود نظيف وقابل للصيانة.",
      ],
    },
    architecturePillars: [
      {
        title: { en: "Figma to Code Precision", ar: "دقة التحويل من Figma" },
        desc: {
          en: "Strict token mapping aligning typography, line-heights, shadows, and paddings directly from design files.",
          ar: "مطابقة تامة لمتغيرات الألوان والمسافات والخطوط لضمان دقة التنفيذ بكسل ببكسل.",
        },
      },
      {
        title: { en: "Sprint Velocity & Git Workflows", ar: "انضباط دورات العمل ومسارات Git" },
        desc: {
          en: "Feature branch management, semantic pull requests, and automated linting pipelines.",
          ar: "إدارة الفروع البرمجية ومراجعات الكود المنظمة عبر مسارات Git المؤسسية.",
        },
      },
    ],
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Git & GitHub",
      "Figma",
      "Agile/Scrum",
    ],
    gallery: [
      { src: "/assets/experience-showcase.jpg", caption: { en: "Multi-Device Responsive Frontend Showcase", ar: "معرض الواجهات المتجاوبة على مختلف شاشات الحواسيب والهواتف" } },
      { src: "/assets/ahmed-outdoor-portrait.jpg", caption: { en: "Ahmed Ragab during early frontend engineering & rigorous self-learning", ar: "المهندس أحمد رجب في مرحلة التدريب والتأسيس الهندسي للواجهات الأمامية" } },
    ],
    keyHighlights: {
      en: [
        "Completed accredited corporate frontend developer training.",
        "Delivered responsive React landing pages with 100% Figma fidelity.",
        "Engaged in daily agile standups and strict code reviews.",
      ],
      ar: [
        "إتمام برنامج تدريب مطور واجهات أمامية مؤسسي معتمد بنجاح.",
        "تسليم واجهات React متجاوبة بدقة بكسل كاملة مطابقة لتصاميم Figma.",
        "المشاركة الفعالة في دورات العمل ومراجعات الـ PRs المؤسسية.",
      ],
    },
    accentColor: "#38bdf8",
    cardBg: "#07162b",
  },

  // =========================================================================
  // 5. FREELANCE & AGENCY CLIENTS
  // =========================================================================
  {
    slug: "freelance",
    id: "freelance-engineer",
    title: {
      en: "Freelance Web Engineering — Modern React & Next.js",
      ar: "مطور ويب مستقل — تطبيقات React و Next.js",
    },
    client: {
      en: "Commercial & Startup Clients",
      ar: "عملاء تجاريون وشركات ناشئة",
    },
    role: {
      en: "Freelance Full-Stack Web Engineer",
      ar: "مطور ويب مستقل (Freelance)",
    },
    period: {
      en: "2023 – 2024",
      ar: "2023 – 2024",
    },
    location: {
      en: "Remote",
      ar: "عن بُعد",
    },
    statusBadge: {
      en: "Sub-Second Load Times · Modern Web Stack",
      ar: "تحميل أقل من ثانية · تقنيات الويب الحديثة",
    },
    heroImage: "/assets/projects/prohealth/home-preview.jpg",
    logo: "/assets/experience-showcase.jpg",
    summary: {
      en: "Delivered fast, modern web applications using React, Next.js, TypeScript, and Tailwind CSS—achieving sub-second (< 1s) first paint times and direct WhatsApp lead conversion.",
      ar: "تطوير مواقع وتطبيقات ويب حديثة باستخدام React و Next.js و TypeScript و Tailwind CSS بزمن تحميل أقل من ثانية وتحويل مباشر لطلبات العملاء عبر واتساب.",
    },
    metrics: [
      {
        val: "< 1s",
        label: { en: "First Paint", ar: "ظهور أقل من ثانية" },
        desc: { en: "Sub-second initial paint and optimized Core Web Vitals", ar: "سرعة تحميل أولية أقل من ثانية وأداء مرتفع" },
      },
      {
        val: "Next.js",
        label: { en: "Modern Stack", ar: "تقنيات حديثة" },
        desc: { en: "Type-safe React, Next.js App Router, and clean API integrations", ar: "واجهات React و Next.js وربط سلس مع قواعد البيانات" },
      },
      {
        val: "Direct",
        label: { en: "WhatsApp Leads", ar: "تحويل للواتساب" },
        desc: { en: "Instant pre-filled WhatsApp conversion funnels for client inquiries", ar: "تحويل فوري لطلبات العملاء والحجز عبر واتساب" },
      },
      {
        val: "Mobile",
        label: { en: "First UI", ar: "واجهات سريعة" },
        desc: { en: "100% responsive mobile-first layouts built with Tailwind CSS", ar: "تصميم متجاوب بالكامل لشاشات الهواتف" },
      },
    ],
    problem: {
      en: [
        "Clients suffered from slow legacy websites taking 4+ seconds to load, causing high bounce rates on mobile networks.",
        "Traditional multi-step contact forms caused prospective customers to drop off before reaching sales.",
      ],
      ar: [
        "معاناة العملاء من بطء المواقع التقليدية واستغراقها أكثر من 4 ثوانٍ في التحميل على الهواتف.",
        "فقدان نسبة كبيرة من العملاء بسبب تعقيد نماذج التواصل التقليدية.",
      ],
    },
    solution: {
      en: [
        "Built lightweight, server-rendered React & Next.js interfaces cutting initial load times under 1 second.",
        "Engineered direct WhatsApp click-to-chat conversion hooks with pre-filled inquiry context.",
        "Optimized images, fonts, and mobile layouts for smooth performance across all devices.",
      ],
      ar: [
        "بناء واجهات حديثة وخفيفة بـ React و Next.js مما خفض زمن التحميل لأقل من ثانية.",
        "دمج مسارات تحويل مباشرة للواتساب برسائل جاهزة لرفع معدل استجابة العملاء.",
        "تحسين الصور والأداء العام لضمان تجربة تصفح سلسة على جميع الهواتف.",
      ],
    },
    architecturePillars: [
      {
        title: { en: "Sub-Second Performance", ar: "أداء فائق أقل من ثانية" },
        desc: {
          en: "Lean React components, optimized assets, and clean routing for instant page loads.",
          ar: "مكونات خفيفة وتحميل ذكي للأصول لتحقيق أسرع استجابة ممكنة.",
        },
      },
      {
        title: { en: "Direct WhatsApp Funnel", ar: "تحويل مباشر للواتساب" },
        desc: {
          en: "Pre-populated WhatsApp messages routing leads straight to the client's sales team.",
          ar: "توليد رسائل تفاعلية تنقل العميل مباشرة لمحادثة فريق المبيعات.",
        },
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
    ],
    gallery: [
      { src: "/assets/projects/prohealth/home-preview.jpg", caption: { en: "ProHealth — Medical Booking & Clinic Platform", ar: "منصة ProHealth — منظومة الحجوزات والعيادات الطبية" } },
      { src: "/assets/projects/frenzy-blog/home-preview.png", caption: { en: "Frenzy Blog — High-Speed Publishing Platform", ar: "منصة Frenzy Blog — منصة نشر سريعة التحميل" } },
    ],
    keyHighlights: {
      en: [
        "Delivered commercial web apps with < 1s initial paint.",
        "Built with React, Next.js, TypeScript, and Tailwind CSS.",
        "Integrated automated WhatsApp lead conversion flows.",
      ],
      ar: [
        "تسليم تطبيقات ويب تجارية بسرعة ظهور أقل من ثانية.",
        "تطوير كامل باستخدام React و Next.js و TypeScript.",
        "تطبيق مسارات تحويل مباشر لطلبات العملاء عبر واتساب.",
      ],
    },
    accentColor: "#fbbf24",
    cardBg: "#211508",
  },

  // =========================================================================
  // 6. MECHATRONICS ENGINEERING (MENOUFIA UNIVERSITY)
  // =========================================================================
  {
    slug: "mechatronics",
    id: "mechatronics-degree",
    title: {
      en: "Menoufia University — Mechatronics Engineering Degree",
      ar: "جامعة المنوفية — بكالوريوس الهندسة في هندسة الميكاترونكس",
    },
    client: {
      en: "Faculty of Engineering, Menoufia University",
      ar: "كلية الهندسة بشبين الكوم، جامعة المنوفية",
    },
    role: {
      en: "Bachelor of Engineering in Mechatronics Engineering",
      ar: "بكالوريوس الهندسة — هندسة الميكاترونكس",
    },
    period: {
      en: "2023 – 2028 (Expected)",
      ar: "2023 – 2028 (متوقع)",
    },
    location: {
      en: "Menoufia, Egypt",
      ar: "المنوفية، مصر",
    },
    statusBadge: {
      en: "Top 1% Al-Mo3adala · Aerospace & Systems Discipline",
      ar: "أوائل امتحان المعادلة (Top 1%) · انضباط التفكير الهندسي والتحكم الآلي",
    },
    heroImage: "/assets/ahmed-menoufia-faculty.webp",
    logo: "/assets/ahmed-menoufia-faculty.webp",
    summary: {
      en: "My engineering journey began with passing the national Al-Mo3adala equivalency exam at Zagazig University Faculty of Engineering in the Top 1% nationwide, earning admission to Mechatronics Engineering at Menoufia University—where control systems, physics, and robotics shape my approach to scalable software architecture.",
      ar: "بدأت رحلتي الهندسية باجتياز امتحان المعادلة في كلية الهندسة جامعة الزقازيق ضمن أوائل الجمهورية (Top 1%)، لألتحق بكلية الهندسة جامعة المنوفية (قسم الميكاترونكس) حيث أدمج أنظمة التحكم والفيزياء مع هندسة البرمجيات.",
    },
    liveUrl: "https://mu.menofia.edu.eg/",
    metrics: [
      {
        val: "Top 1%",
        label: { en: "Al-Mo3adala Exam", ar: "تفوق امتحان المعادلة" },
        desc: { en: "Ranked among top achievers nationwide qualifying for direct engineering faculty admission", ar: "التفوق بين أوائل الجمهورية في امتحان المعادلة المؤهل للالتحاق المباشر بكلية الهندسة" },
      },
      {
        val: "Control",
        label: { en: "Systems Modeling", ar: "خوارزميات التحكم الآلي" },
        desc: { en: "Feedback loops, state estimation, and dynamic mathematical system modeling", ar: "حلقات التغذية الراجعة والنمذجة الرياضية المنضبطة للأنظمة الديناميكية" },
      },
      {
        val: "Robotics",
        label: { en: "Embedded Core", ar: "أنظمة مدمجة وروبوتات" },
        desc: { en: "Microcontroller programming, sensor telemetry, and hardware-software bridges", ar: "برمجة المتحكمات المدمجة وقراءة الحساسات وربط العتاد بالسيرفرات السحابية" },
      },
      {
        val: "Menoufia",
        label: { en: "Faculty Legacy", ar: "صرح هندسة المنوفية" },
        desc: { en: "Historic Egyptian engineering institution renowned for aerospace and systems rigor", ar: "صرح هندسي عريق مشهود له بالانضباط العلمي والهندسي والفيزيائي" },
      },
    ],
    problem: {
      en: [
        "Pure computer science often views software as isolated syntax without understanding deterministic system modeling, hardware bridges, or physical real-time constraints.",
        "Developing mission-critical scalable software requires strict mathematical rigor, state machine determinism, and root-cause analytical thinking.",
      ],
      ar: [
        "النظر للبرمجة كمجرد أكواد صماء دون فهم فيزياء الأنظمة وحلقات التغذية الراجعة والقيود الزمنية للأنظمة الحقيقية.",
        "بناء معماريات برمجية معقدة يتطلب انضباطاً رياضياً عالياً وتفكيراً منهجياً في تحديد الأسباب الجذرية للمشكلات.",
      ],
    },
    solution: {
      en: [
        "Applied physical spatial reasoning and dynamic control systems principles directly to software architecture and reactive state management.",
        "Bridged hardware microcontrollers with cloud backends using structured IoT protocols and REST/WebSocket interfaces.",
        "Maintained continuous academic excellence in calculus, differential equations, and dynamic physical modeling.",
      ],
      ar: [
        "توظيف التحليل الفيزيائي والنمذجة الرياضية في تصميم وإدارة الحالات البرمجية المعقدة (State Machines).",
        "ربط المتحكمات المدمجة والعتاد الفيزيائي بالسيرفرات السحابية وقواعد البيانات بدقة متناهية.",
        "الاستفادة من دراسة التفاضل والتكامل والفيزياء في حل المشكلات البرمجية المعمارية العميقة.",
      ],
    },
    architecturePillars: [
      {
        title: { en: "The Systems Advantage", ar: "ميزة التفكير الهندسي المنظم (Systems Advantage)" },
        desc: {
          en: "Approaching web applications as physical machines with deterministic states, inputs, outputs, and zero unintended side effects.",
          ar: "التعامل مع التطبيقات السحابية كآلات فيزيائية ذات حالات منضبطة ومدخلات ومخرجات دقيقة بدون أخطاء غير متوقعة.",
        },
      },
      {
        title: { en: "Spatial Reasoning & Mental Modeling", ar: "التفكير البصري والمكاني 3D" },
        desc: {
          en: "High-capacity mental 3D visualization applied to distributed databases, cloud microservices, and reactive data streams.",
          ar: "قدرة عالية على تخيل المعماريات البرمجية وتدفق البيانات كفضاءات ثلاثية الأبعاد مترابطة.",
        },
      },
      {
        title: { en: "Radical Self-Reliance", ar: "الاستقلالية والتعلم بالمحاكاة العكسية" },
        desc: {
          en: "Deconstructing complex systems to first principles and mastering modern technologies without waiting for rigid roadmaps.",
          ar: "تفكيك الأنظمة المعقدة إلى مبادئها الأولية والتعلم الذاتي المستمر وبناء الحلول البرمجية من الصفر.",
        },
      },
    ],
    technologies: [
      "Control Systems",
      "Dynamic Modeling",
      "Embedded Microcontrollers",
      "Robotics",
      "Physics & Mathematics",
      "Digital Signal Processing",
      "C / C++ Basics",
      "Systems Architecture",
    ],
    gallery: [
      { src: "/assets/ahmed-zagazig-faculty.webp", caption: { en: "Al-Mo3adala Exam Milestone — Zagazig University Faculty of Engineering (Top 1% Nationwide)", ar: "محطة امتحان المعادلة — كلية الهندسة جامعة الزقازيق (التفوق ضمن أوائل الجمهورية)" } },
      { src: "/assets/ahmed-menoufia-faculty.webp", caption: { en: "Faculty of Engineering, Menoufia University — Shebin El-Kom Campus", ar: "كلية الهندسة بشبين الكوم — جامعة المنوفية" } },
      { src: "/assets/faculty-candidates/candidate-4-wide-monument.jpg", caption: { en: "Menoufia Faculty Courtyard — Aerospace Jet Monument", ar: "ساحة كلية الهندسة بالمنوفية — بجوار النصب التذكاري للطائرة" } },
    ],
    keyHighlights: {
      en: [
        "Earned admission to engineering faculty through top ranking in competitive national examinations.",
        "Applied mechatronics control feedback loops directly to modern React state management.",
        "Maintained continuous balance between rigorous engineering academics and high-scale software founding.",
      ],
      ar: [
        "الالتحاق بكلية الهندسة بعد التفوق بين أوائل الدبلوم التقني واجتياز امتحان المعادلة بجدارة.",
        "توظيف مهارات التحكم الآلي والفيزياء في إدارة الحالات البرمجية المتزامنة.",
        "الموازنة الدقيقة بين التميز الأكاديمي الهندسي وتأسيس المنصات السحابية الإنتاجية.",
      ],
    },
    accentColor: "#818cf8",
    cardBg: "#0f142b",
  },
];
