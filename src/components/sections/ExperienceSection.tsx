"use client";

import { useTranslations, useLocale } from "next-intl";
import { experiences, ExperienceItem } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import {
  History,
  Rocket,
  ShieldAlert,
  GraduationCap,
  Globe,
  Layers,
  Sparkles,
  ExternalLink,
  Cpu,
} from "lucide-react";
import { LottiePlayer } from "@/components/cosmic/LottiePlayer";

// Map experience types to cosmic theme accents & icons
function getMilestoneTheme(type: ExperienceItem["type"]) {
  switch (type) {
    case "Founder":
      return {
        icon: Rocket,
        accentColor: "#10b981",
        textColor: "text-emerald-300",
        badgeBg: "bg-emerald-950/70 border-emerald-500/40 text-emerald-300",
        lineGlow: "via-emerald-400",
        borderHover: "hover:border-emerald-400/50",
      };
    case "Contract":
      return {
        icon: ShieldAlert,
        accentColor: "#06b6d4",
        textColor: "text-cyan-300",
        badgeBg: "bg-cyan-950/70 border-cyan-500/40 text-cyan-300",
        lineGlow: "via-cyan-400",
        borderHover: "hover:border-cyan-400/50",
      };
    case "Internship":
      return {
        icon: Globe,
        accentColor: "#8b5cf6",
        textColor: "text-violet-300",
        badgeBg: "bg-violet-950/70 border-violet-500/40 text-violet-300",
        lineGlow: "via-violet-400",
        borderHover: "hover:border-violet-400/50",
      };
    case "Freelance":
      return {
        icon: Layers,
        accentColor: "#f59e0b",
        textColor: "text-amber-300",
        badgeBg: "bg-amber-950/70 border-amber-500/40 text-amber-300",
        lineGlow: "via-amber-400",
        borderHover: "hover:border-amber-400/50",
      };
    case "Academic":
      return {
        icon: GraduationCap,
        accentColor: "#6366f1",
        textColor: "text-indigo-300",
        badgeBg: "bg-indigo-950/70 border-indigo-500/40 text-indigo-300",
        lineGlow: "via-indigo-400",
        borderHover: "hover:border-indigo-400/50",
      };
    default:
      return {
        icon: Cpu,
        accentColor: "#06b6d4",
        textColor: "text-cyan-300",
        badgeBg: "bg-cyan-950/70 border-cyan-500/40 text-cyan-300",
        lineGlow: "via-cyan-400",
        borderHover: "hover:border-cyan-400/50",
      };
  }
}

// 4-Stat Metric Grids & Claims per experience (In the exact style of Dina Khedr's portfolio)
const milestoneStats: Record<
  string,
  {
    metrics: { val: string; label: { en: string; ar: string } }[];
    claim: { en: string; ar: string };
    actionLink?: { label: { en: string; ar: string }; href: string };
    solidBg: string;
  }
> = {
  "iqraa-founder": {
    metrics: [
      { val: "100+", label: { en: "Active Students", ar: "طالب نشط" } },
      { val: "< 1s", label: { en: "Query Latency", ar: "استجابة ذكية" } },
      { val: "4 Roles", label: { en: "RBAC & RLS", ar: "أدوار صلاحيات" } },
      { val: "100%", label: { en: "Custom AI RAG", ar: "وكلاء ذكاء اصطناعي" } },
    ],
    claim: {
      en: "Multi-tenant EdTech platform with autonomous AI agents & zero lock-in",
      ar: "منصة تعليمية سحابية متكاملة مدعومة بوكلاء ذكاء اصطناعي ومعمارية مستقلة",
    },
    actionLink: {
      label: { en: "Launch Live Platform →", ar: "زيارة منصة إقرأ مباشرة ←" },
      href: "https://iqraa.live",
    },
    solidBg: "bg-[#041615] border-emerald-500/35",
  },
  "nda-contract": {
    metrics: [
      { val: "Canva-Style", label: { en: "Document Engine", ar: "محرر مستندات" } },
      { val: "SMS OTP", label: { en: "Auth Security", ar: "حماية متعددة" } },
      { val: "Electron", label: { en: "Desktop & Web", ar: "ديسكتوب وويب" } },
      { val: "100%", label: { en: "PWA Offline", ar: "دعم الأوفلاين" } },
    ],
    claim: {
      en: "Enterprise canvas document builder and high-security multi-factor authentication",
      ar: "نظام بناء وتصدير مستندات PDF بدقة طباعية وحماية متعددة المراحل بـ OTP",
    },
    solidBg: "bg-[#051424] border-cyan-500/35",
  },
  "royalmed": {
    metrics: [
      { val: "+40%", label: { en: "Speed Boost", ar: "تسريع تحميل" } },
      { val: "100%", label: { en: "WCAG Compliant", ar: "معايير الوصول" } },
      { val: "React", label: { en: "Lecture Viewer", ar: "مشغل محاضرات" } },
      { val: "REST", label: { en: "Secure APIs", ar: "واجهات برمجية" } },
    ],
    claim: {
      en: "Delivered interactive medical lecture modules and 40% performance boost",
      ar: "تطوير وحدات المحاضرات الطبية التفاعلية وتسريع تحميل الموقع بنسبة 40%",
    },
    solidBg: "bg-[#070f2b] border-blue-500/35",
  },
  "web-masters": {
    metrics: [
      { val: "Agile", label: { en: "Daily Sprints", ar: "سبرينتات سريعة" } },
      { val: "Pixel", label: { en: "Figma to Code", ar: "دقة بكسل كاملة" } },
      { val: "Modular", label: { en: "React Hooks", ar: "مكونات معيارية" } },
      { val: "Strict", label: { en: "PR Code Review", ar: "مراجعات كود صارمة" } },
    ],
    claim: {
      en: "Accredited corporate frontend internship with modern React & Scrum workflows",
      ar: "تدريب عملي معتمد لتطوير واجهات المستخدم بممارسات الـ Agile ومراجعات الكود",
    },
    solidBg: "bg-[#120926] border-violet-500/35",
  },
  "freelance-wordpress": {
    metrics: [
      { val: "Bespoke", label: { en: "Custom Themes", ar: "قوالب مخصصة" } },
      { val: "< 1s", label: { en: "Page Load Speed", ar: "سرعة تحميل قياسية" } },
      { val: "PHP / SQL", label: { en: "Custom CPTs", ar: "بيانات مخصصة" } },
      { val: "Instant", label: { en: "WhatsApp Leads", ar: "تحويل طلبات فوري" } },
    ],
    claim: {
      en: "Bespoke commercial web solutions, custom PHP logic, and speed optimizations",
      ar: "تطوير مواقع تجارية مخصصة وقوالب ووردبريس فريدة وسرعة تحميل فائقة",
    },
    solidBg: "bg-[#1a1104] border-amber-500/35",
  },
  "mechatronics-degree": {
    metrics: [
      { val: "Top Tier", label: { en: "Diploma Honors", ar: "مرتبة الشرف التقنية" } },
      { val: "Control", label: { en: "System Dynamics", ar: "أنظمة التحكم الآلي" } },
      { val: "Embedded", label: { en: "Hardware + Code", ar: "أنظمة مدمجة" } },
      { val: "2028", label: { en: "Expected Degree", ar: "تخرج هندسي متوقع" } },
    ],
    claim: {
      en: "Mechatronics engineering combining system dynamics, electronics, and software",
      ar: "دراسة هندسة الميكاترونكس لدمج الفهم الفيزيائي والميكانيكي مع هندسة البرمجيات",
    },
    solidBg: "bg-[#080b20] border-indigo-500/35",
  },
};

export function ExperienceSection() {
  const t = useTranslations("experience");
  const locale = useLocale() as "en" | "ar";
  const isAr = locale === "ar";

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 w-full bg-transparent z-10"
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header with Stargazing Astronaut Companion */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 sm:mb-20">
          <div className="flex flex-col items-start space-y-3 max-w-2xl">
            <Badge
              variant="cosmicViolet"
              className="gap-2 px-3 py-1 font-mono text-xs uppercase tracking-wider rounded-full"
            >
              <History className="w-3.5 h-3.5" />
              <span>{t("badge")}</span>
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t("title")}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Stargazing Astronaut Watching Milestones */}
          <div className="relative shrink-0 flex flex-col items-center self-start md:self-center">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32">
              <div className="absolute inset-0 rounded-full bg-nebula-violet/20 blur-xl pointer-events-none" />
              <LottiePlayer
                src="/lottie/cute_astronaut_telescope.json"
                loop
                autoplay
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
            <div className="text-[10px] font-mono text-nebula-cyan/90 bg-space-950/80 px-2.5 py-0.5 rounded-full border border-nebula-cyan/25 -mt-1 shadow-lg backdrop-blur-md">
              🔭 Stargazing Milestones
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* DINAKHEDR-STYLE STICKY STACK (الكروت المتراصة ككوتشينة أنيقة)      */}
        {/* ================================================================= */}
        <div className="cosmic-stack">
          {experiences.map((exp, idx) => {
            const theme = getMilestoneTheme(exp.type);
            const orbitNumber = String(idx + 1).padStart(2, "0");
            const statInfo = milestoneStats[exp.id] || {
              metrics: [
                { val: "High", label: { en: "Impact", ar: "أثر عالي" } },
                { val: "Full", label: { en: "Stack", ar: "ستاك متكامل" } },
                { val: "Prod", label: { en: "Delivery", ar: "تسليم إنتاجي" } },
                { val: "100%", label: { en: "Quality", ar: "جودة معيارية" } },
              ],
              claim: { en: exp.description.en, ar: exp.description.ar },
              solidBg: "bg-[#060b18] border-white/20",
            };

            return (
              <article
                key={exp.id}
                style={{
                  "--i": idx,
                  zIndex: 10 + idx,
                } as React.CSSProperties}
                className={`cosmic-story w-full rounded-[28px] sm:rounded-[36px] border ${statInfo.solidBg} p-6 sm:p-10 shadow-[0_-12px_36px_rgba(0,0,0,0.85),0_24px_64px_rgba(0,0,0,0.95)] transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                {/* Top Subtle Gradient Edge Highlight */}
                <div
                  className={`absolute top-0 inset-x-8 sm:inset-x-12 h-[2px] bg-gradient-to-r from-transparent ${theme.lineGlow} to-transparent opacity-90`}
                />

                {/* 2-Column Responsive Layout: Story on Left, Metrics on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column (7 cols): Header, Title, Description, Claim Badge */}
                  <div className="lg:col-span-7 flex flex-col space-y-4 text-start">
                    {/* Tag / Eyebrow Header */}
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 flex-wrap">
                      <span className="text-cyan-300 font-bold">{orbitNumber}</span>
                      <span>•</span>
                      <span className="text-white font-medium">{exp.company[locale]}</span>
                      <span>•</span>
                      <span>{exp.period[locale]}</span>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                      {exp.role[locale]}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {exp.description[locale]}
                    </p>

                    {/* Feature Claim Badge (Dina Khedr Style) */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-xs sm:text-sm font-semibold text-slate-200">
                      <Sparkles
                        className="w-4 h-4 shrink-0"
                        style={{ color: theme.accentColor }}
                      />
                      <span>{statInfo.claim[locale]}</span>
                    </div>

                    {/* Direct Action Link if available */}
                    {statInfo.actionLink && (
                      <div className="pt-1">
                        <a
                          href={statInfo.actionLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold hover:underline"
                          style={{ color: theme.accentColor }}
                        >
                          <span>{statInfo.actionLink.label[locale]}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Right Column (5 cols): 4 Stat Metric Cards (Dina Khedr Style) */}
                  <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
                    {statInfo.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="rounded-2xl border border-white/10 bg-black/30 p-4 sm:p-5 flex flex-col justify-center space-y-1 shadow-inner backdrop-blur-sm"
                      >
                        <span
                          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono tracking-tight"
                          style={{ color: theme.accentColor }}
                        >
                          {m.val}
                        </span>
                        <span className="text-xs font-mono text-slate-300 font-medium">
                          {m.label[locale]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Stack Tags Strip */}
                <div className="flex flex-wrap items-center gap-1.5 pt-6 mt-6 border-t border-white/10">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
