"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExperienceCaseStudy } from "@/data/experienceCaseStudies";
import { DetailSubNav } from "@/components/layout/DetailSubNav";
import { siteConfig } from "@/config/site";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  Download,
  AlertCircle,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Copy,
  Check,
  Code2,
  FileText,
  Terminal,
  BookOpen,
  Lock,
} from "lucide-react";

interface Props {
  caseStudy: ExperienceCaseStudy;
  locale: "en" | "ar";
  prevStudy: ExperienceCaseStudy | null;
  nextStudy: ExperienceCaseStudy | null;
}

export function ExperienceCaseStudyContent({
  caseStudy,
  locale,
  prevStudy,
  nextStudy,
}: Props) {
  const isAr = locale === "ar";
  const [activeCodeTab, setActiveCodeTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const BackIcon = isAr ? ArrowRight : ArrowLeft;
  const NextNavIcon = isAr ? ChevronLeft : ChevronRight;
  const PrevNavIcon = isAr ? ChevronRight : ChevronLeft;

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeSnippet = caseStudy.codeSnippets?.[activeCodeTab];

  return (
    <div className="min-h-screen bg-space-950 text-slate-100 relative selection:bg-cyan-500/30 selection:text-white pt-14 sm:pt-16">
      {/* =================================================================== */}
      {/* 1. TOP STICKY CENTRALIZED ACTION BAR                                */}
      {/* =================================================================== */}
      <DetailSubNav
        backHref="/#experience"
        backLabel={{ en: "Back to Experience", ar: "العودة لسجل الخبرات" }}
        liveDemoUrl={caseStudy.liveUrl}
        liveDemoLabel={{ en: "Live Platform", ar: "زيارة المنصة الحية" }}
        githubUrl={caseStudy.githubUrl}
        cvUrl={siteConfig.links.cv}
      />

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-24 space-y-12 sm:space-y-16">
        {/* ================================================================= */}
        {/* 2. EDITORIAL HEADER & METADATA                                    */}
        {/* ================================================================= */}
        <header className="space-y-6 text-start max-w-4xl">
          {/* Status & Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{caseStudy.statusBadge[locale]}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            {caseStudy.title[locale]}
          </h1>

          {/* Subtitle / Role & Client */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base text-slate-300 font-medium">
            <span className="text-white font-bold">{caseStudy.role[locale]}</span>
            <span className="opacity-30">•</span>
            <span style={{ color: caseStudy.accentColor }} className="font-semibold">
              {caseStudy.client[locale]}
            </span>
          </div>

          {/* Metadata Row: Period & Location */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>{caseStudy.period[locale]}</span>
            </div>
            <span className="opacity-30">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{caseStudy.location[locale]}</span>
            </div>
          </div>

          {/* Action Links Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-emerald-500 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all"
              >
                <span>{isAr ? "زيارة المنصة الحية مباشرة" : "Launch Live Platform"}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {caseStudy.blogUrl && (
              <a
                href={caseStudy.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>{isAr ? "مدونة المنصة التقنية" : "Engineering Blog"}</span>
              </a>
            )}

            {caseStudy.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>{isAr ? "استعراض الكود على GitHub" : "View Source on GitHub"}</span>
              </a>
            )}
          </div>
        </header>

        {/* ================================================================= */}
        {/* 3. HERO SHOWCASE VISUAL                                           */}
        {/* ================================================================= */}
        {/* Special Case: Apptraction full-frame branded canvas */}
        {caseStudy.slug === "apptraction" || caseStudy.slug === "maham" ? (
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-cyan-500/20 shadow-2xl bg-[#0a0f3c]">
            <Image
              src="/assets/apptraction-logo.png"
              alt="Apptraction Official Brandmark"
              fill
              className="object-contain p-6 sm:p-10"
              priority
            />
          </div>
        ) : (
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/10 shadow-2xl bg-black">
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.title[locale]}
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Optional Overlay Brand Logo */}
            {caseStudy.logo && caseStudy.slug !== "mechatronics" && (
              <div className="absolute top-6 start-6 sm:top-8 sm:start-8 z-20 px-4 py-2 rounded-2xl bg-space-950/80 backdrop-blur-md border border-white/15 shadow-xl">
                <Image
                  src={caseStudy.logo}
                  alt="Brand Logo"
                  width={120}
                  height={40}
                  className="h-7 w-auto object-contain"
                />
              </div>
            )}
          </div>
        )}

        {/* ================================================================= */}
        {/* 4. KEY METRICS TELEMETRY GRID                                     */}
        {/* ================================================================= */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
          {caseStudy.metrics.map((m, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 flex flex-col justify-between space-y-2 shadow-inner"
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-2xl sm:text-3xl lg:text-4xl font-mono font-extrabold"
                  style={{ color: caseStudy.accentColor }}
                >
                  {m.val}
                </span>
                <Sparkles className="w-4 h-4 text-slate-500" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {m.label[locale]}
                </div>
                {m.desc && (
                  <p className="text-[11px] text-slate-400 leading-snug pt-0.5">
                    {m.desc[locale]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Private NDA Notice if applicable */}
        {caseStudy.privateNotice && (
          <div className="p-4 sm:p-5 rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] backdrop-blur-md flex items-start gap-3.5 text-xs sm:text-sm text-amber-200">
            <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1 text-start">
              <span className="font-bold block text-amber-300">
                {isAr ? "ملاحظة أمان ومعلومات تجارية خاصة (NDA)" : "Protected Client Architecture (NDA Notice)"}
              </span>
              <p className="leading-relaxed opacity-90">
                {caseStudy.privateNotice[locale]}
              </p>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* 5. MAIN NARRATIVE: 2-COLUMN STRUCTURE                             */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Story (8 Columns) */}
          <div className="lg:col-span-8 space-y-12 text-start">
            {/* Overview Section */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                <span>{isAr ? "الملخص التنفيذي" : "Executive Overview"}</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {caseStudy.summary[locale]}
              </p>
            </section>

            {/* GITHUB-STYLE MARKDOWN DOSSIER: THE CHALLENGE & SOLUTION */}
            <div className="rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl">
              {/* Dossier Header Bar */}
              <div className="bg-[#161b22] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-200 font-semibold">
                    {caseStudy.slug.toUpperCase()}-SPEC.md
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-400">
                    main
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 hidden sm:inline">
                  {isAr ? "التوثيق الهندسي" : "Engineering Specification"}
                </span>
              </div>

              {/* Dossier Content Body */}
              <div className="p-6 sm:p-8 space-y-8 text-start font-sans">
                {/* 1. Problem / The Challenge */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-rose-300">
                    <AlertCircle className="w-4 h-4 text-rose-400" />
                    <span>{isAr ? "01. التحديات والمشكلات التقنية (The Problem)" : "01. The Engineering Challenge"}</span>
                  </div>
                  <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/[0.04] space-y-2 text-xs sm:text-sm text-slate-300">
                    {caseStudy.problem[locale].map((prob, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5">
                        <span className="text-rose-400 font-mono mt-0.5">•</span>
                        <span className="leading-relaxed">{prob}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Architectural Solution */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{isAr ? "02. الحل المعماري والتطبيق الفني (The Solution)" : "02. Architectural Solution & Implementation"}</span>
                  </div>
                  <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] space-y-2 text-xs sm:text-sm text-slate-300">
                    {caseStudy.solution[locale].map((sol, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-1 shrink-0" />
                        <span className="leading-relaxed">{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Core Architectural Pillars */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-cyan-300">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span>{isAr ? "03. الركائز المعمارية للنظام (Architecture Pillars)" : "03. Architecture Pillars & System Design"}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {caseStudy.architecturePillars.map((pillar, pilIdx) => (
                      <div
                        key={pilIdx}
                        className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-1.5"
                      >
                        <h4 className="text-xs sm:text-sm font-bold text-white">
                          {pillar.title[locale]}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {pillar.desc[locale]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Realistic Syntax-Highlighted Code Specification */}
                {caseStudy.codeSnippets && caseStudy.codeSnippets.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-violet-300">
                        <Terminal className="w-4 h-4 text-violet-400" />
                        <span>{isAr ? "04. نماذج الكود والمعمارية البرمجية (Code Implementation)" : "04. Production Code Architecture"}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {isAr ? "كود حقيقي موثق" : "Verified Source"}
                      </span>
                    </div>

                    {/* Code Snippet Container */}
                    <div className="rounded-xl border border-white/15 bg-[#090d16] overflow-hidden">
                      {/* Tabs Bar */}
                      <div className="bg-[#111726] px-3 py-2 border-b border-white/10 flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {caseStudy.codeSnippets.map((snip, sIdx) => (
                            <button
                              key={sIdx}
                              type="button"
                              onClick={() => setActiveCodeTab(sIdx)}
                              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                                activeCodeTab === sIdx
                                  ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40"
                                  : "text-slate-400 hover:text-slate-200"
                              }`}
                            >
                              {snip.filename}
                            </button>
                          ))}
                        </div>

                        {activeSnippet && (
                          <button
                            type="button"
                            onClick={() => handleCopyCode(activeSnippet.code)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                          >
                            {copied ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span>{isAr ? "تم النسخ" : "Copied"}</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3 text-slate-400" />
                                <span>{isAr ? "نسخ الكود" : "Copy"}</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      {/* Snippet Description */}
                      {activeSnippet && (
                        <div className="px-4 py-2 border-b border-white/5 bg-white/[0.01] text-xs font-mono text-slate-400 flex items-center justify-between">
                          <span>{activeSnippet.title[locale]}</span>
                          <span className="text-[10px] text-cyan-400 uppercase">
                            {activeSnippet.language}
                          </span>
                        </div>
                      )}

                      {/* Code Block */}
                      {activeSnippet && (
                        <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[380px]">
                          <code>{activeSnippet.code}</code>
                        </pre>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ============================================================= */}
            {/* 6. VISUAL ARTIFACTS GALLERY (TAILORED PER CASE STUDY)         */}
            {/* ============================================================= */}
            {caseStudy.gallery && caseStudy.gallery.length > 0 && (
              <section className="space-y-6 pt-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <span>
                      {caseStudy.slug === "mechatronics"
                        ? isAr
                          ? "محطات المسار الأكاديمي"
                          : "Academic Journey Milestones"
                        : isAr
                          ? "معرض الصور والأدلة"
                          : "Visual Artifacts"}
                    </span>
                  </h2>
                  <span className="text-xs font-mono text-slate-400">
                    {caseStudy.gallery.length} {isAr ? "محطات" : "Items"}
                  </span>
                </div>

                {caseStudy.slug === "mechatronics" ? (
                  /* Tailored Story-Driven Milestone Cards for Mechatronics */
                  <div className="space-y-5">
                    {caseStudy.gallery.map((item, gIdx) => (
                      <figure
                        key={gIdx}
                        className="rounded-2xl overflow-hidden border border-indigo-500/20 bg-white/[0.02] p-3 sm:p-4 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center group/fig hover:border-indigo-400/40 transition-all"
                      >
                        <div className="md:col-span-5 relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-space-950">
                          <Image
                            src={item.src}
                            alt={item.caption[locale]}
                            fill
                            className="object-cover object-top group-hover/fig:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <figcaption className="md:col-span-7 flex flex-col space-y-2 text-start px-1 sm:px-2">
                          <span className="text-[11px] font-mono font-bold text-indigo-300 uppercase tracking-wider">
                            {isAr ? `محطة 0${gIdx + 1}` : `Milestone 0${gIdx + 1}`}
                          </span>
                          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                            {item.caption[locale]}
                          </p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ) : (
                  /* Clean 2-Column Showcase for Software & Product Case Studies */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {caseStudy.gallery.map((item, gIdx) => (
                      <figure
                        key={gIdx}
                        className="rounded-2xl overflow-hidden border border-white/10 bg-black/60 space-y-2 p-2 shadow-xl group/fig transition-all hover:border-cyan-500/40 flex flex-col justify-between"
                      >
                        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-space-950">
                          <Image
                            src={item.src}
                            alt={item.caption[locale]}
                            fill
                            className="object-cover object-top group-hover/fig:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <figcaption className="text-xs font-mono text-slate-300 px-3 py-1.5 leading-relaxed text-start min-h-[2.75rem] flex items-center">
                          {item.caption[locale]}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Sticky Sidebar (4 Columns) */}
          <aside className="lg:col-span-4 space-y-6 sticky top-20">
            {/* Tech Stack Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 space-y-4 text-start">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                {isAr ? "التقنيات المستخدمة" : "Integrated Tech Stack"}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono border border-white/10 bg-white/5 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Deliverables Bullet Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 space-y-3 text-start">
              <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                {isAr ? "أبرز الإنجازات" : "Key Deliverables"}
              </h3>
              <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                {caseStudy.keyHighlights[locale].map((hi, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{hi}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact CTA Card */}
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 to-space-950 p-6 space-y-3 text-start">
              <h4 className="text-sm font-bold text-white">
                {isAr ? "هل تبحث عن مهندس منتجات؟" : "Looking for a product engineer?"}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isAr
                  ? "أحمد رجب مهندس Full-Stack متخصص في بناء المنتجات السحابية المتكاملة."
                  : "Ahmed Ragab builds full-stack products that scale — from architecture to deployment."}
              </p>
              <a
                href={`mailto:${siteConfig.email}?subject=Collaboration%20Inquiry%20from%20Portfolio`}
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-cyan-200 hover:underline pt-1"
              >
                <span>{isAr ? "راسل أحمد ←" : "Get in touch →"}</span>
              </a>
            </div>
          </aside>
        </div>

        {/* ================================================================= */}
        {/* 7. ADJACENT MILESTONE NAVIGATION                                  */}
        {/* ================================================================= */}
        <footer className="pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevStudy ? (
            <Link
              href={`/${locale}/experience/${prevStudy.slug}`}
              className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center justify-between group text-start"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-slate-400 block">
                  {isAr ? "المحطة السابقة" : "Previous Milestone"}
                </span>
                <span className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {prevStudy.title[locale]}
                </span>
              </div>
              <PrevNavIcon className="w-5 h-5 text-slate-400 group-hover:text-cyan-300 group-hover:-translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextStudy ? (
            <Link
              href={`/${locale}/experience/${nextStudy.slug}`}
              className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center justify-between group text-end"
            >
              <NextNavIcon className="w-5 h-5 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-transform order-last sm:order-first" />
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-slate-400 block">
                  {isAr ? "المحطة التالية" : "Next Milestone"}
                </span>
                <span className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {nextStudy.title[locale]}
                </span>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </footer>
      </main>
    </div>
  );
}

export default ExperienceCaseStudyContent;
