"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import type { ProjectDossier } from "@/data/project-dossiers";
import { DetailSubNav } from "@/components/layout/DetailSubNav";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Copy,
  Check,
  Layers,
  Database,
  Cpu,
  ShieldCheck,
  Code2,
  Activity,
  Sparkles,
  Lock,
  ChevronRight,
  Terminal,
  Server,
  Share2,
  Workflow,
  Radio,
  FileCode,
} from "lucide-react";

interface ProjectDossierViewProps {
  project: ProjectDossier;
  locale: "ar" | "en";
  prevProject: ProjectDossier | null;
  nextProject: ProjectDossier | null;
}

export function ProjectDossierView({
  project,
  locale,
  prevProject,
  nextProject,
}: ProjectDossierViewProps) {
  const isAr = locale === "ar";
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [viewAsciiTopology, setViewAsciiTopology] = useState(false);

  const activeImage = project.gallery[activeGalleryIndex] || {
    id: "hero",
    src: project.heroImage,
    title: project.title,
    caption: project.subtitle,
  };

  const handleCopyCode = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(project.database.codeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans pb-24 pt-14 sm:pt-16"
    >
      {/* ===================================================================
          1. STICKY DUAL-SYNCHRONIZED TOP SUB-HEADER
         =================================================================== */}
      <DetailSubNav
        backHref="/#projects"
        backLabel={{ en: "Back to Projects", ar: "العودة للمشاريع" }}
        liveDemoUrl={project.links.demo}
        liveDemoLabel={{ en: "Live Demo", ar: "زيارة الموقع" }}
        githubUrl={project.links.github}
      />

      {/* Main Page Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 space-y-12 sm:space-y-16">
        {/* ===================================================================
            2. PROJECT HERO SECTION
           =================================================================== */}
        <section className="space-y-6">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 px-3 py-1 rounded-full shadow-sm">
              {project.badge[locale]}
            </span>
            <span className="text-xs font-mono text-slate-300 bg-slate-900 border border-white/10 px-3 py-1 rounded-full">
              {project.year}
            </span>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.status[locale]}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project.title[locale]}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl font-normal leading-relaxed">
              {project.subtitle[locale]}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-2xl bg-[#080d1e] border border-white/10 shadow-lg hover:border-cyan-500/30 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400 mb-1">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white mb-1">
                  {metric.label[locale]}
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {metric.description[locale]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            3. AHMED'S ENGINEERING ROLE & OWNERSHIP CARD
           =================================================================== */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1328] via-[#090e1f] to-[#060a16] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          {/* Subtle glow background */}
          <div className="absolute top-0 end-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            {/* Header with Role Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
                  <ShieldCheck className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                    {isAr ? "الدور والمسؤولية الهندسية" : "Engineering Ownership & Role"}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {project.ownership.roleTitle[locale]}
                  </h2>
                </div>
              </div>

              {project.links.githubNotice && (
                <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 bg-amber-950/40 border border-amber-500/30 px-3 py-1.5 rounded-xl self-start sm:self-auto">
                  <Lock className="w-3.5 h-3.5" />
                  <span>{project.links.githubNotice[locale]}</span>
                </div>
              )}
            </div>

            {/* Ownership Summary */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {project.ownership.summary[locale]}
            </p>

            {/* Key Responsibilities Checklist */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                {isAr ? "أبرز المسؤوليات والإنجازات المعمارية:" : "Key Technical Contributions & Architectural Scope:"}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.ownership.responsibilities[locale].map((resp, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-black/30 border border-white/5 text-xs sm:text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Architectural Decisions */}
            {project.ownership.architecturalDecisions.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  {isAr ? "القرارات المعمارية الهندسية وأسبابها:" : "Architectural Decisions & Rationale:"}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.ownership.architecturalDecisions.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-[#0e172e]/80 border border-cyan-500/20 space-y-2"
                    >
                      <div className="text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                        <span>{item.decision[locale]}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {item.rationale[locale]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ===================================================================
            4. VISUAL MEDIA & SCREENSHOT SHOWCASE
           =================================================================== */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>{isAr ? "معرض الشاشات والمعمارية" : "Visual & Architecture Showcase"}</span>
            </h2>

            {/* Gallery Tabs if multiple images exist */}
            {project.gallery.length > 1 && (
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#080d1e] border border-white/10 overflow-x-auto">
                {project.gallery.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`px-3 py-1 text-xs rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap ${
                      activeGalleryIndex === idx
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.title[locale]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Main Visual Display Frame */}
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#080d1e] shadow-2xl">
            {/* Screen Top Bar Mockup */}
            <div className="px-4 py-3 bg-[#0d1428] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ms-2 text-xs font-mono text-slate-400 hidden sm:inline">
                  {activeImage.title[locale]}
                </span>
              </div>
              <div className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                HD Preview
              </div>
            </div>

            {/* Image Preview Container */}
            <div className="relative w-full aspect-[16/9] bg-[#050814]">
              <Image
                src={activeImage.src}
                alt={activeImage.title[locale]}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-top"
              />
            </div>

            {/* Caption Footer */}
            {activeImage.caption && (
              <div className="p-4 sm:p-5 bg-[#090e1e] border-t border-white/5 text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                <Activity className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{activeImage.caption[locale]}</span>
              </div>
            )}
          </div>
        </section>

        {/* ===================================================================
            5. TECHNICAL CASE STUDY: CHALLENGE & PROBLEM SPACE
           =================================================================== */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#080d1e] border border-white/10 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0">
              <Terminal className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold">
                {isAr ? "نطاق المشكلة والتحدي" : "Problem Space & Context"}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {isAr ? "التحدي الهندسي والحاجة التجارية" : "The Engineering Challenge & Business Need"}
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {project.problemSpace.overview[locale]}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {project.problemSpace.painPoints.map((pain, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#0d1428] border border-white/5 space-y-2"
              >
                <div className="text-sm font-bold text-rose-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  <span>{pain.title[locale]}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {pain.description[locale]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            6. SYSTEM ARCHITECTURE & DATA FLOW
           =================================================================== */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#080d1e] border border-white/10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  {isAr ? "المعمارية الهندسية" : "System Architecture"}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {isAr ? "معمارية النظام وتدفق البيانات" : "Architectural Design & Service Layers"}
                </h2>
              </div>
            </div>

            {project.architecture.diagramAscii && (
              <button
                onClick={() => setViewAsciiTopology(!viewAsciiTopology)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-cyan-300 transition-colors cursor-pointer self-start sm:self-auto"
              >
                <Workflow className="w-3.5 h-3.5" />
                <span>{viewAsciiTopology ? (isAr ? "عرض المخطط البصري" : "Visual Nodes") : (isAr ? "مخطط الشبكة ASCII" : "ASCII Topology")}</span>
              </button>
            )}
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {project.architecture.overview[locale]}
          </p>

          {/* Dynamic Switcher: Either Visual Nodes or ASCII Topology */}
          {viewAsciiTopology && project.architecture.diagramAscii ? (
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#030611] p-4 sm:p-6 font-mono text-xs text-cyan-300 overflow-x-auto shadow-inner">
              <pre className="leading-tight select-all">
                {project.architecture.diagramAscii.trim()}
              </pre>
            </div>
          ) : (
            /* Visual Interactive Flow Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {project.architecture.layers.map((layer, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#0d1428] border border-white/5 space-y-2 hover:border-blue-500/30 transition-colors relative group"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <Server className="w-4 h-4 text-blue-400 group-hover:text-cyan-300 transition-colors" />
                      <span>{layer.name[locale]}</span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                      Tier {i + 1}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-blue-300 font-semibold">{layer.tech}</div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {layer.details[locale]}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ===================================================================
            7. DATABASE SCHEMAS & DATA MODELS (REAL CODE)
           =================================================================== */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#080d1e] border border-white/10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0">
                <Database className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
                  {isAr ? "قواعد البيانات ونماذج البيانات" : "Database & Data Contracts"}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {project.database.engine}
                </h2>
              </div>
            </div>

            {/* Copy Schema Button */}
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-200 hover:text-white transition-colors cursor-pointer self-start sm:self-auto"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isAr ? "تم النسخ" : "Copied"}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>{isAr ? "نسخ المخطط" : "Copy Schema"}</span>
                </>
              )}
            </button>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {project.database.summary[locale]}
          </p>

          {/* Formatted Code Block */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#02050f] shadow-2xl">
            <div className="px-4 py-2.5 bg-[#0a1024] border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span>{project.database.schemaLanguage.toUpperCase()} SCHEMA SPECIFICATION</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                Production Verified
              </span>
            </div>
            <pre className="p-4 sm:p-6 overflow-x-auto font-mono text-xs text-purple-200 leading-relaxed select-all">
              <code>{project.database.codeSnippet}</code>
            </pre>
          </div>

          {/* Model Entities Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {project.database.modelsOrTables.map((model, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-2xl bg-[#0d1428] border border-white/5 space-y-2"
              >
                <div className="text-sm font-mono font-bold text-cyan-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>{model.name}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {model.description[locale]}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {model.keyFields.map((field, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/5"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            8. DEEP ENGINEERING HIGHLIGHTS & SOLUTIONS
           =================================================================== */}
        {project.engineeringHighlights.length > 0 && (
          <section className="p-6 sm:p-8 rounded-3xl bg-[#080d1e] border border-white/10 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                  {isAr ? "الابتكار والحلول الهندسية" : "Engineering Highlights"}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {isAr ? "أبرز التحديات التقنية والحلول المبتكرة" : "Key Engineering Challenges & Solutions"}
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {project.engineeringHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#0d1428] border border-white/5 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {highlight.title[locale]}
                    </h3>
                    <span className="text-[11px] font-mono text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-500/30 self-start sm:self-auto">
                      {highlight.category[locale]}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                      <div className="text-xs font-mono font-semibold text-rose-400 uppercase">
                        {isAr ? "التحدي:" : "The Challenge:"}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {highlight.challenge[locale]}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                      <div className="text-xs font-mono font-semibold text-cyan-400 uppercase">
                        {isAr ? "الحل الهندسي:" : "The Engineering Solution:"}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {highlight.solution[locale]}
                      </p>
                    </div>
                  </div>

                  {highlight.codeSnippet && (
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#02050f] text-xs font-mono">
                      <div className="px-4 py-2 bg-[#090e20] text-slate-400 border-b border-white/10 text-[11px]">
                        CODE BREAKDOWN: {highlight.codeSnippet.language.toUpperCase()}
                      </div>
                      <pre className="p-4 text-cyan-300 overflow-x-auto select-all">
                        <code>{highlight.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===================================================================
            9A. IQRAA HUB — Internal Operations Layer (Iqraa only)
           =================================================================== */}
        {project.id === "iqraa" && (
          <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#071a16] to-[#040d10] border border-emerald-500/20 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Radio className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  {isAr ? "نظام التشغيل الداخلي" : "Internal Operations Layer"}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {isAr ? "إقرأ هب — المنصة الداخلية" : "Iqraa Hub — Ops Platform"}
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isAr
                ? "إقرأ هب هو نظام الإدارة الداخلي المبني لدعم تشغيل المنصة الرئيسية. يستخدم لنشر المدونة التقنية، وتتبع الأخطاء، وإدارة شكاوى المستخدمين، واستعراض إشعارات الإصدارات — كل ذلك من واجهة موحدة ومغلقة."
                : "Iqraa Hub is the internal ops system built to run Iqraa Platform behind the scenes. It handles blog publishing, bug tracking, user complaint management, and release notes — all from a single private interface."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  en: "Blog Publishing",
                  ar: "نشر المدونة",
                  desc: { en: "Write & publish to Iqraa blog", ar: "كتابة ونشر مقالات المدونة" }
                },
                {
                  en: "Bug Tracking",
                  ar: "تتبع الأخطاء",
                  desc: { en: "Internal issue logging & triage", ar: "تسجيل ومتابعة الأخطاء داخلياً" }
                },
                {
                  en: "User Complaints",
                  ar: "شكاوى المستخدمين",
                  desc: { en: "Collect & resolve support tickets", ar: "تجميع ومتابعة بلاغات الدعم" }
                },
                {
                  en: "Release Notes",
                  ar: "إشعارات الإصدارات",
                  desc: { en: "Version changelog management", ar: "إدارة سجل التغييرات" }
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/15 space-y-1.5"
                >
                  <div className="text-sm font-bold text-emerald-300">
                    {isAr ? item.ar : item.en}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isAr ? item.desc.ar : item.desc.en}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs font-mono text-slate-400">
                {isAr ? "الكود مغلق — مشروع داخلي خاص" : "Private codebase — internal tooling only"}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <a
                href="https://iqraa-hub.vercel.app/en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>iqraa-hub.vercel.app</span>
              </a>
            </div>
          </section>
        )}

        {/* ===================================================================
            10. COMPLETE TECH STACK
           =================================================================== */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#080d1e] border border-white/10 shadow-xl space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span>{isAr ? "حزمة التقنيات المستخدمة" : "Comprehensive Tech Stack"}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#0d1428] border border-white/5 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Frontend & UI
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.frontend.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-slate-200 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d1428] border border-white/5 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
                Backend & Services
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.backend.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-slate-200 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d1428] border border-white/5 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold">
                Database & Caching
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.database.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-slate-200 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d1428] border border-white/5 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                DevOps & Tooling
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.devopsAndTools.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-slate-200 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            10. PRODUCTION OUTCOMES & IMPACT
           =================================================================== */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#080d1e] border border-white/10 shadow-xl space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            <span>{isAr ? "النتائج والأثر التقني الملموس" : "Measurable Production Outcomes"}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.outcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0d1428] border border-white/5 space-y-2 hover:border-emerald-500/30 transition-colors"
              >
                <div className="text-2xl font-mono font-extrabold text-emerald-400">
                  {outcome.metric}
                </div>
                <div className="text-sm font-bold text-white">
                  {outcome.label[locale]}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {outcome.detail[locale]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            11. PROJECT NAVIGATION (PREVIOUS & NEXT PROJECT CAROUSEL)
           =================================================================== */}
        <section className="pt-6 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Previous Project */}
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="p-5 rounded-2xl bg-[#080d1e] border border-white/10 hover:border-cyan-500/40 transition-all group flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-colors">
                  {isAr ? (
                    <ArrowRight className="w-5 h-5 text-cyan-400 transition-transform group-hover:translate-x-1" />
                  ) : (
                    <ArrowLeft className="w-5 h-5 text-cyan-400 transition-transform group-hover:-translate-x-1" />
                  )}
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-mono text-slate-400">
                    {isAr ? "المشروع السابق" : "Previous Project"}
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {prevProject.title.en}
                  </div>
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {/* Next Project */}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="p-5 rounded-2xl bg-[#080d1e] border border-white/10 hover:border-cyan-500/40 transition-all group flex items-center justify-between gap-4 text-end"
              >
                <div className="overflow-hidden">
                  <div className="text-xs font-mono text-slate-400">
                    {isAr ? "المشروع التالي" : "Next Project"}
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {nextProject.title.en}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-colors shrink-0">
                  {isAr ? (
                    <ArrowLeft className="w-5 h-5 text-cyan-400 transition-transform group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="w-5 h-5 text-cyan-400 transition-transform group-hover:translate-x-1" />
                  )}
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>
        </section>

        {/* ===================================================================
            12. FOOTER CTA
           =================================================================== */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0b1227] via-[#070b1a] to-[#040714] border border-white/15 shadow-2xl text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isAr
                ? "هل تبحث عن مهندس يبني منتجات تتوسع؟"
                : "Need an engineer who ships scalable products?"}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              {isAr
                ? "أحمد رجب متاح لفرص التعاقد عن بعد والشراكات التقنية."
                : "Ahmed Ragab is open to remote engineering roles and technical partnerships."}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:ahmedragab.pro@outlook.com"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:brightness-110 transition-all"
            >
              ahmedragab.pro@outlook.com
            </a>
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-slate-200 hover:text-white font-medium text-sm transition-colors"
            >
              {isAr ? "تواصل معي" : "Contact"}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
