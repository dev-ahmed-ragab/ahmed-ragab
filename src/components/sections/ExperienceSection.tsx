"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/data/experience";
import { CosmicFlyingSaucer } from "@/components/cosmic/CosmicFlyingSaucer";
import {
  History,
  Rocket,
  GraduationCap,
  Globe,
  Layers,
  Sparkles,
  Cpu,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Code2,
} from "lucide-react";

interface MilestoneCardConfig {
  number: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  accentColor: string;
  textColor: string;
  solidBg: string;
  bgGradient: string;
  boxShadow: string;
  metricBoxBg: string;
  pillBg: string;
  pillText: string;
  metrics: { val: string; label: { en: string; ar: string } }[];
  claim: { en: string; ar: string };
  eyebrowCompany: { en: string; ar: string };
  eyebrowTag: { en: string; ar: string };
}

// 6 completely independent, 100% opaque, borderless cards (Dina Khedr aesthetic)
const MILESTONE_CONFIGS: Record<string, MilestoneCardConfig> = {
  // 1. Iqraa Platform (Deep Emerald Space)
  "iqraa-founder": {
    number: "01",
    icon: Rocket,
    accentColor: "#10b981",
    textColor: "text-emerald-300",
    solidBg: "#08201b",
    bgGradient: "linear-gradient(145deg, #0c2d25 0%, #051814 60%, #0f382f 100%)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
    metricBoxBg: "rgba(3, 20, 17, 0.75)",
    pillBg: "bg-emerald-500/15 text-emerald-300",
    pillText: "text-emerald-200",
    metrics: [
      { val: "1,000+", label: { en: "Active Students", ar: "طالب جامعي نشط" } },
      { val: "< 1s", label: { en: "API Latency", ar: "سرعة استجابة فائقة" } },
      { val: "CASL", label: { en: "RBAC & RLS", ar: "صلاحيات وحماية" } },
      { val: "BullMQ", label: { en: "Background Queues", ar: "طوابير مهام Redis" } },
    ],
    claim: {
      en: "Multi-tenant EdTech SaaS platform with autonomous AI pipelines & zero lock-in",
      ar: "منصة تعليمية ذكية SaaS تخدم آلاف الطلاب بمعمارية سحابية مستقلة",
    },
    eyebrowCompany: { en: "Iqraa Platform", ar: "Iqraa Platform" },
    eyebrowTag: { en: "AI EdTech SaaS", ar: "منظومة الذكاء الأكاديمي" },
  },

  // 2. Apptraction — Maham Platform (Deep Ocean Navy)
  "maham-contract": {
    number: "02",
    icon: Cpu,
    accentColor: "#06b6d4",
    textColor: "text-cyan-300",
    solidBg: "#071f33",
    bgGradient: "linear-gradient(145deg, #092844 0%, #041424 60%, #0d365b 100%)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
    metricBoxBg: "rgba(3, 18, 30, 0.75)",
    pillBg: "bg-cyan-500/15 text-cyan-300",
    pillText: "text-cyan-200",
    metrics: [
      { val: "60 FPS", label: { en: "Drag & Drop UI", ar: "سحب وإفلات سلس" } },
      { val: "Realtime", label: { en: "Supabase Channels", ar: "مزامنة لحظية حية" } },
      { val: "13 Rules", label: { en: "Architecture Specs", ar: "أدلة معمارية صارمة" } },
      { val: "Desktop", label: { en: "Electron & PWA", ar: "ديسكتوب وتطبيق PWA" } },
    ],
    claim: {
      en: "Enterprise school management suite with 60FPS drag & drop and realtime multi-client sync",
      ar: "منظومة إدارة مدارس متكاملة بمحرر تفاعلي بالسحب والإفلات ومزامنة سحابية حية",
    },
    eyebrowCompany: { en: "Apptraction", ar: "Apptraction" },
    eyebrowTag: { en: "School Management (Maham)", ar: "تطبيق مهمة لإدارة المدارس" },
  },

  // 3. RoyalMed Medical Academy (Royal Amethyst Violet)
  "royalmed-collaborator": {
    number: "03",
    icon: Sparkles,
    accentColor: "#c084fc",
    textColor: "text-purple-300",
    solidBg: "#1b0e2f",
    bgGradient: "linear-gradient(145deg, #24133f 0%, #120921 60%, #2f1853 100%)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
    metricBoxBg: "rgba(18, 8, 33, 0.75)",
    pillBg: "bg-purple-500/15 text-purple-300",
    pillText: "text-purple-200",
    metrics: [
      { val: "+40%", label: { en: "Load Speed Boost", ar: "تسريع تحميل الموقع" } },
      { val: "10k+", label: { en: "Q-Bank Items", ar: "أسئلة بنك إكلينيكية" } },
      { val: "Timed", label: { en: "Clinical Exams", ar: "امتحانات بمؤقت زمني" } },
      { val: "DRM", label: { en: "Bunny Stream", ar: "بث فيديو محمي" } },
    ],
    claim: {
      en: "Interactive clinical examination engine with instant grading analytics and DRM streaming",
      ar: "محرك امتحانات إكلينيكية بمؤقت زمني وتحليل فوري وبث فيديو محمي من القرصنة",
    },
    eyebrowCompany: { en: "RoyalMed", ar: "RoyalMed" },
    eyebrowTag: { en: "Clinical Academy", ar: "أكاديمية طبية إكلينيكية" },
  },

  // 4. Web Masters (Deep Cobalt Sapphire)
  "web-masters-intern": {
    number: "04",
    icon: Globe,
    accentColor: "#38bdf8",
    textColor: "text-sky-300",
    solidBg: "#091c3d",
    bgGradient: "linear-gradient(145deg, #0d2652 0%, #051229 60%, #11326d 100%)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
    metricBoxBg: "rgba(5, 17, 38, 0.75)",
    pillBg: "bg-sky-500/15 text-sky-300",
    pillText: "text-sky-200",
    metrics: [
      { val: "Daily", label: { en: "Agile Sprints", ar: "دورات عمل أجايل" } },
      { val: "100%", label: { en: "Pixel-Perfect Figma", ar: "دقة بكسل كاملة" } },
      { val: "Strict", label: { en: "PR Code Reviews", ar: "مراجعات كود صارمة" } },
      { val: "React", label: { en: "Modular Hooks", ar: "واجهات وهوكس معيارية" } },
    ],
    claim: {
      en: "Accredited corporate frontend internship executing responsive React applications from Figma",
      ar: "تدريب مؤسسي رسمي معتمد لتطوير واجهات React وتحويل تصاميم Figma بدقة كاملة",
    },
    eyebrowCompany: { en: "Web Masters", ar: "Web Masters" },
    eyebrowTag: { en: "Frontend Engineering Intern", ar: "تدريب تطوير واجهات" },
  },

  // 5. Freelance Web Development (Warm Espresso Bronze)
  "freelance-engineer": {
    number: "05",
    icon: Layers,
    accentColor: "#fbbf24",
    textColor: "text-amber-300",
    solidBg: "#23170a",
    bgGradient: "linear-gradient(145deg, #2e1e0c 0%, #160f05 60%, #3a260f 100%)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
    metricBoxBg: "rgba(24, 14, 4, 0.75)",
    pillBg: "bg-amber-500/15 text-amber-300",
    pillText: "text-amber-200",
    metrics: [
      { val: "< 1s", label: { en: "First Paint", ar: "ظهور أقل من ثانية" } },
      { val: "Next.js", label: { en: "Modern Stack", ar: "تقنيات حديثة" } },
      { val: "Direct", label: { en: "WhatsApp Leads", ar: "تحويل للواتساب" } },
      { val: "Mobile", label: { en: "First UI", ar: "واجهات سريعة" } },
    ],
    claim: {
      en: "Modern React & Next.js web apps with sub-second speed and direct WhatsApp funnels",
      ar: "تطبيقات ويب حديثة بـ React و Next.js بسرعة أقل من ثانية وتحويل مباشر للواتساب",
    },
    eyebrowCompany: { en: "Freelance", ar: "Freelance" },
    eyebrowTag: { en: "Modern Web Apps", ar: "تطبيقات ويب حديثة" },
  },

  // 6. Mechatronics Engineering (Aerospace Midnight Slate)
  "mechatronics-degree": {
    number: "06",
    icon: GraduationCap,
    accentColor: "#818cf8",
    textColor: "text-indigo-300",
    solidBg: "#111633",
    bgGradient: "linear-gradient(145deg, #161d44 0%, #0a0d20 60%, #1e265b 100%)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
    metricBoxBg: "rgba(10, 13, 33, 0.75)",
    pillBg: "bg-indigo-500/15 text-indigo-300",
    pillText: "text-indigo-200",
    metrics: [
      { val: "Top 1%", label: { en: "Al-Mo3adala Exam", ar: "تفوق امتحان المعادلة" } },
      { val: "Control", label: { en: "Control Systems", ar: "خوارزميات التحكم الآلي" } },
      { val: "Robotics", label: { en: "Embedded Core", ar: "أنظمة مدمجة وروبوتات" } },
      { val: "Menoufia", label: { en: "Faculty Legacy", ar: "صرح هندسة المنوفية" } },
    ],
    claim: {
      en: "Rigorous mechatronics education applying control algorithms and physics to software systems",
      ar: "دراسة هندسية متقدمة توظف فيزياء التحكم الآلي في نمذجة المعماريات البرمجية",
    },
    eyebrowCompany: { en: "Menoufia University", ar: "Menoufia University" },
    eyebrowTag: { en: "Faculty of Engineering", ar: "كلية الهندسة بشبين الكوم" },
  },
};

export function ExperienceSection() {
  const t = useTranslations("experience");
  const locale = useLocale() as "en" | "ar";
  const isAr = locale === "ar";
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    margin: "-5% 0px -10% 0px",
  });

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-14 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-transparent z-10"
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* ================================================================= */}
        {/* SECTION HEADER: Pure Editorial Grand Header (Dina Khedr Style)    */}
        {/* ================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-20">
          <div className="flex flex-col items-start space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] backdrop-blur-md font-mono text-xs font-semibold text-violet-300 uppercase tracking-wider">
              <History className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t("badge")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t("title")}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {t("description")}
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest hidden sm:block">
            {isAr ? "٦ محطات" : "6 Milestones"}
          </div>
        </div>

        {/* ================================================================= */}
        {/* STACK WRAPPER + INTERACTIVE DOCKING SAUCER COMPANION              */}
        {/* ================================================================= */}
        <div className="relative w-full">
          {/* Animated Flying Saucer Docking beside the active card (Desktop) */}
          <div
            className={`hidden xl:block absolute ${
              isAr ? "-start-36" : "-end-36"
            } top-0 bottom-0 pointer-events-none z-40`}
          >
            <div className="sticky top-44 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, x: isAr ? 140 : -140, scale: 0.6 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0, scale: 1 }
                    : { opacity: 0, x: isAr ? 140 : -140, scale: 0.6 }
                }
                transition={{
                  type: "spring",
                  stiffness: 75,
                  damping: 18,
                  mass: 0.8,
                }}
                className="flex flex-col items-center"
              >
                <CosmicFlyingSaucer size={165} />
              </motion.div>
            </div>
          </div>

          {/* =============================================================== */}
          {/* STICKY STACKING DECK (الكروت المتراصة بدون إطار - Dina Khedr)       */}
          {/* =============================================================== */}
          <div className="cosmic-stack">
            {experiences.map((exp, idx) => {
              const config = MILESTONE_CONFIGS[exp.id] || {
                number: String(idx + 1).padStart(2, "0"),
                icon: Cpu,
                accentColor: "#06b6d4",
                textColor: "text-cyan-300",
                solidBg: "#071f33",
                bgGradient: "linear-gradient(145deg, #092844 0%, #041424 60%, #0d365b 100%)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
                metricBoxBg: "rgba(3, 18, 30, 0.75)",
                pillBg: "bg-cyan-500/15 text-cyan-300",
                pillText: "text-cyan-200",
                metrics: [
                  { val: "100%", label: { en: "Quality", ar: "كفاءة وجودة" } },
                  { val: "Modern", label: { en: "Architecture", ar: "معمارية حديثة" } },
                  { val: "Full", label: { en: "Stack", ar: "ستاك متكامل" } },
                  { val: "Verified", label: { en: "Production", ar: "إنتاجي موثق" } },
                ],
                claim: {
                  en: "Scalable software systems engineered with modern standards",
                  ar: "أنظمة برمجية قابلة للتوسع صممت وفق أعلى المعايير",
                },
                eyebrowCompany: { en: exp.company.en, ar: exp.company.ar },
                eyebrowTag: { en: exp.role.en, ar: exp.role.ar },
              };

              const caseStudySlug = exp.slug || "iqraa";

              return (
                <article
                  key={exp.id}
                  style={
                    {
                      "--i": idx,
                      zIndex: 10 + idx,
                      backgroundColor: config.solidBg,
                      backgroundImage: config.bgGradient,
                      boxShadow: config.boxShadow,
                      opacity: 1,
                    } as React.CSSProperties
                  }
                  className="cosmic-story w-full rounded-[24px] sm:rounded-[40px] border-0 p-5 sm:p-10 lg:p-12 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
                >
                  {/* Subtle Top Glow Highlight */}
                  <div
                    className="absolute top-0 inset-x-12 h-px pointer-events-none opacity-40"
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, ${config.accentColor} 50%, transparent 100%)`,
                    }}
                  />

                  {/* 2-Column Responsive Layout: Left Editorial Narrative, Right Tailored Showcase */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center">
                    {/* Left Column (7 cols): Eyebrow, Title, Narrative, Claim Pill, Read Link, Metrics */}
                    <div className="lg:col-span-7 flex flex-col space-y-3 sm:space-y-5 text-start">
                      {/* Eyebrow: 01 · Company · Tag · Period */}
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-slate-300/80 flex-wrap">
                        <span className="font-bold text-slate-200">{config.number}</span>
                        <span className="opacity-40">·</span>
                        <span className="font-semibold text-white">
                          {config.eyebrowCompany[locale]}
                        </span>
                        <span className="opacity-40 hidden sm:inline">·</span>
                        <span className="text-slate-300 font-medium hidden sm:inline">
                          {config.eyebrowTag[locale]}
                        </span>
                        <span className="opacity-40">·</span>
                        <span className="text-slate-400 font-mono text-[10px] sm:text-[11px]">
                          {exp.period[locale]}
                        </span>
                      </div>

                      {/* Optional Brandmark in Left Column (e.g. Iqraa) */}
                      {exp.id === "iqraa-founder" && (
                        <div className="hidden sm:block pt-1">
                          <Image
                            src="/assets/iqraa-logo.png"
                            alt="Iqraa Platform"
                            width={140}
                            height={45}
                            className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                          />
                        </div>
                      )}

                      {/* Monumental Title */}
                      <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                        {exp.role[locale]}
                      </h3>

                      {/* Clean & Punchy 1-2 Line Description */}
                      <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl line-clamp-3 sm:line-clamp-none">
                        {exp.description[locale]}
                      </p>

                      {/* Claim badge */}
                      <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-medium bg-white/[0.06] text-slate-300 backdrop-blur-sm">
                        <span style={{ color: config.accentColor }}>·</span>
                        <span className="line-clamp-1 sm:line-clamp-none">{config.claim[locale]}</span>
                      </div>

                      {/* "Read the case study →" Direct Link (Opens Dedicated Page) */}
                      <div className="flex items-center gap-4 sm:gap-5 pt-1 sm:pt-2 flex-wrap">
                        <Link
                          href={`/${locale}/experience/${caseStudySlug}`}
                          className="inline-flex items-center gap-2 min-h-[44px] text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors group/link cursor-pointer"
                        >
                          <span>{isAr ? "الحالة الكاملة" : "Case study"}</span>
                          <ArrowIcon
                            className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                            style={{ color: config.accentColor }}
                          />
                        </Link>

                        {/* Optional External Launch Button if available */}
                        {exp.actionLink && (
                          <a
                            href={exp.actionLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 min-h-[44px] text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                          >
                            <span>{exp.actionLink.label[locale]}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      {/* Metric HUD: Borderless, Opaque Stat Cards */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-3">
                        {config.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            style={{ backgroundColor: config.metricBoxBg }}
                            className="rounded-2xl p-3 sm:p-3.5 flex flex-col justify-center space-y-1 shadow-sm min-w-0 overflow-hidden"
                          >
                            <span
                              dir="ltr"
                              className="inline-block w-fit text-base sm:text-lg lg:text-xl font-extrabold font-mono tracking-tight leading-tight truncate"
                              style={{ color: config.accentColor }}
                              title={m.val}
                            >
                              {m.val}
                            </span>
                            <span className="text-[11px] font-mono text-slate-300 font-medium leading-tight line-clamp-2">
                              {m.label[locale]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column (5 cols): Customized Visual Showcase Tailored per Card (Desktop) */}
                    <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
                      {/* CARD 1: IQRAA PLATFORM */}
                      {exp.id === "iqraa-founder" && (
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-space-950/80 shadow-2xl flex flex-col justify-between p-6 sm:p-7 group/card">
                          {/* Pristine high-clarity marble campus architecture */}
                          <Image
                            src="/assets/iqraa/iqraa-campus-hero.jpg"
                            alt="Iqraa Platform — Academic Campus Architecture"
                            fill
                            className="object-cover opacity-90 group-hover/card:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#08201b]/90 via-[#08201b]/25 to-black/30 pointer-events-none" />

                          {/* Top Status */}
                          <div className="relative z-10 flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 text-[11px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-md border border-emerald-500/30">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span>{isAr ? "منصة إنتاجية حية" : "Live in Production"}</span>
                            </span>
                            <span className="text-xs font-mono text-white font-medium px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md">
                              iqraa.live
                            </span>
                          </div>

                          {/* Unobstructed, pristine view of the marble campus architecture */}
                          <div className="relative z-10 my-auto pointer-events-none" />

                          {/* Bottom Architecture Note */}
                          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-emerald-500/30 text-[11px] font-mono text-emerald-100 backdrop-blur-sm">
                            <span>1,000+ Active Students</span>
                            <span>Multi-Tenant Architecture</span>
                          </div>
                        </div>
                      )}

                      {/* CARD 2: APPTRACTION (FULL-FRAME LOGO) */}
                      {exp.id === "maham-contract" && (
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#0a0f3c] shadow-2xl group/card">
                          <Image
                            src="/assets/apptraction-logo.png"
                            alt="Apptraction Official Logo"
                            fill
                            className="object-cover object-center group-hover/card:scale-105 transition-transform duration-700"
                          />
                        </div>
                      )}

                      {/* CARD 3: ROYALMED MEDICAL ACADEMY */}
                      {exp.id === "royalmed-collaborator" && (
                        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-[#120921] shadow-2xl group/card">
                          <Image
                            src="/assets/royalmed-showcase.jpg"
                            alt="RoyalMed Medical Academy Showcase"
                            fill
                            className="object-cover object-center group-hover/card:scale-105 transition-transform duration-700"
                          />
                        </div>
                      )}

                      {/* CARD 4: WEB MASTERS (CUSTOM FIGMA-TO-REACT STUDIO VISUAL) */}
                      {exp.id === "web-masters-intern" && (
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0d2652] via-[#071633] to-[#0a1f47] border border-sky-400/20 shadow-2xl p-5 sm:p-6 flex flex-col justify-between group/card">
                          {/* Subtle grid pattern */}
                          <div
                            className="absolute inset-0 opacity-15 pointer-events-none"
                            style={{
                              backgroundImage:
                                "radial-gradient(circle at 1px 1px, rgba(56,189,248,0.45) 1px, transparent 0)",
                              backgroundSize: "20px 20px",
                            }}
                          />

                          {/* Window Top Bar */}
                          <div className="relative z-10 flex items-center justify-between border-b border-sky-400/15 pb-3">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                            </div>
                            <span className="text-[11px] font-mono text-sky-300/90">
                              Figma → React.tsx
                            </span>
                          </div>

                          {/* Center Split: UI Component + Code Snippet */}
                          <div className="relative z-10 grid grid-cols-2 gap-3 my-auto py-3">
                            {/* Left: Figma Frame Preview */}
                            <div className="rounded-2xl border border-sky-400/25 bg-sky-950/50 p-3 flex flex-col justify-between space-y-2.5">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono text-sky-300">UI Frame</span>
                                <span className="w-2 h-2 rounded-full bg-sky-400" />
                              </div>
                              <div className="space-y-1.5">
                                <div className="h-2.5 w-3/4 rounded bg-sky-300/30" />
                                <div className="h-2 w-full rounded bg-white/10" />
                                <div className="h-2 w-5/6 rounded bg-white/10" />
                              </div>
                              <div className="h-6 w-full rounded-lg bg-sky-500/30 border border-sky-400/40" />
                            </div>

                            {/* Right: Clean React Code */}
                            <div className="rounded-2xl border border-white/10 bg-[#050d1d]/90 p-3 font-mono text-[10px] leading-relaxed text-sky-200/90 flex flex-col justify-center space-y-1">
                              <div>
                                <span className="text-violet-300">export</span>{" "}
                                <span className="text-sky-300">function</span>{" "}
                                <span className="text-emerald-300">Card</span>() {"{"}
                              </div>
                              <div className="ps-2 text-slate-300">
                                return &lt;<span className="text-sky-400">Section</span> /&gt;;
                              </div>
                              <div>{"}"}</div>
                            </div>
                          </div>

                          {/* Bottom Status */}
                          <div className="relative z-10 flex items-center justify-between pt-2.5 border-t border-sky-400/15 text-[11px] font-mono text-sky-200/80">
                            <span>React · Tailwind CSS</span>
                            <span>Pixel-Perfect PRs</span>
                          </div>
                        </div>
                      )}

                      {/* CARD 5: FREELANCE (CLEAN 2-ROW LANDSCAPE SHOWCASE) */}
                      {exp.id === "freelance-engineer" && (
                        <div className="w-full flex flex-col gap-3">
                          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-space-950 shadow-xl group/sub">
                            <Image
                              src="/assets/projects/prohealth/home-preview.jpg"
                              alt="ProHealth Medical Platform"
                              fill
                              className="object-cover object-top group-hover/sub:scale-[1.03] transition-transform duration-500"
                            />
                          </div>
                          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-space-950 shadow-xl group/sub">
                            <Image
                              src="/assets/projects/frenzy-blog/home-preview.png"
                              alt="Frenzy Blog Platform"
                              fill
                              className="object-cover object-top group-hover/sub:scale-[1.03] transition-transform duration-500"
                            />
                          </div>
                        </div>
                      )}

                      {/* CARD 6: MECHATRONICS (MENOUFIA FACULTY OF ENGINEERING) */}
                      {exp.id === "mechatronics-degree" && (
                        <div className="relative w-full max-w-[340px] aspect-[4/5] mx-auto rounded-3xl overflow-hidden bg-space-950/80 shadow-2xl group/card">
                          <Image
                            src="/assets/ahmed-menoufia-faculty.webp"
                            alt="Ahmed Ragab at Faculty of Engineering Menoufia University"
                            fill
                            className="object-cover object-[center_22%] group-hover/card:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#111633]/50 via-transparent to-transparent pointer-events-none" />
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
