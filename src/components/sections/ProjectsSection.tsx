"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { projects, Project } from "@/data/projects";
import { ProjectArchiveDrawer } from "./ProjectArchiveDrawer";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import {
  ExternalLink,
  Compass,
  CheckCircle2,
  TrendingUp,
  ChevronRight,
  Layers,
  Lock,
} from "lucide-react";
import { OrbitalStation } from "@/components/cosmic/CelestialElements";
import { LottiePlayer } from "@/components/cosmic/LottiePlayer";

export function ProjectsSection() {
  const t = useTranslations("projects");
  const locale = useLocale() as "en" | "ar";
  const isAr = locale === "ar";
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const pinnedProjects = projects.filter((p) => p.pinned);

  return (
    <section id="projects" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 start-0 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-nebula-violet/10 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Orbital Space Station Floating Anchor */}
        <div className="absolute top-0 end-0 hidden sm:block pointer-events-none opacity-80 -translate-y-4">
          <OrbitalStation size={160} />
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-nebula-cyan/30 bg-nebula-cyan/10 font-mono text-xs font-semibold text-nebula-cyan uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>{t("badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t("title")}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Flagship Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
          {pinnedProjects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-8 flex flex-col justify-between border border-white/10 relative overflow-hidden group w-full"
            >
              {/* Subtle accent corner glow */}
              <div className="absolute top-0 end-0 w-32 h-32 bg-gradient-to-bl from-nebula-indigo/20 to-transparent pointer-events-none" />

              <div className="space-y-5 sm:space-y-6">
                {/* Header row: Category, Year & Index */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-nebula-cyan bg-nebula-cyan/10 border border-nebula-cyan/25 px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.featuredYear}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-500 font-bold">
                    0{idx + 1} // ORBIT
                  </span>
                </div>

                {/* Flagship Developer Interactive Companion (Iqraa) */}
                {project.id === "iqraa" && (
                  <div className="relative flex items-center justify-between p-3.5 rounded-xl bg-space-950/80 border border-nebula-cyan/30 shadow-lg shadow-nebula-cyan/5 overflow-hidden">
                    <div className="space-y-1.5 z-10">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-nebula-cyan/15 text-nebula-cyan text-[10px] font-mono font-bold uppercase tracking-wider border border-nebula-cyan/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-nebula-cyan animate-ping" />
                        Founder & System Architect
                      </div>
                      <p className="text-xs text-slate-300 font-mono">
                        Cosmic SaaS Architecture • 100+ Live Users
                      </p>
                    </div>
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 -my-3 group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 rounded-full bg-nebula-cyan/20 blur-md pointer-events-none" />
                      <LottiePlayer
                        src="/lottie/space_boy_developer.json"
                        loop
                        autoplay
                        className="w-full h-full object-contain pointer-events-none"
                      />
                    </div>
                  </div>
                )}

                {/* Title & Subtitle */}
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-nebula-cyan transition-colors">
                    {project.title[locale]}
                  </h3>
                  <div className="text-xs font-mono text-nebula-violet font-semibold">
                    {project.subtitle[locale]}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description[locale]}
                </p>

                {/* Key Metrics Strip */}
                <div className="p-3.5 rounded-xl border border-white/5 bg-space-950/60 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5 text-nebula-emerald" />
                    <span>{t("keyMetrics")}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {project.metrics[locale].map((metric) => (
                      <div
                        key={metric}
                        className="text-xs font-semibold text-white bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5 break-words"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engineering Highlights */}
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {t("coreHighlights")}
                  </div>
                  <ul className="space-y-2">
                    {project.highlights[locale].map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-nebula-cyan shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom row: Tech Stack & Action Links */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5 w-full">
                  {project.stack.map((stk) => (
                    <span
                      key={stk}
                      className="text-[11px] font-mono text-slate-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                    >
                      {stk}
                    </span>
                  ))}
                </div>

                {/* 3 Action Buttons (Mobile friendly >= 44px) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full pt-1">
                  {/* Button 1: Live Link */}
                  {project.links.demo ? (
                    <Button
                      asChild
                      variant="cosmicPrimary"
                      size="sm"
                      className="w-full min-h-[44px] px-3 rounded-xl text-xs font-bold gap-1.5"
                    >
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{t("viewDemo")}</span>
                      </a>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      variant="cosmicCyan"
                      size="sm"
                      className="w-full min-h-[44px] px-3 rounded-xl text-xs font-semibold gap-1.5 opacity-90"
                    >
                      <a href="#contact">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{isAr ? "معاينة خاصة" : "Request Demo"}</span>
                      </a>
                    </Button>
                  )}

                  {/* Button 2: GitHub Repository (or Private Notice) */}
                  {project.links.github ? (
                    <Button
                      asChild
                      variant="cosmicOutline"
                      size="sm"
                      className="w-full min-h-[44px] px-3 rounded-xl text-xs font-semibold gap-1.5"
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubIcon className="w-3.5 h-3.5" />
                        <span>{t("viewCode")}</span>
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="cosmicOutline"
                      size="sm"
                      disabled
                      className="w-full min-h-[44px] px-3 rounded-xl text-xs font-semibold gap-1.5 opacity-50 cursor-not-allowed border-dashed"
                      title={project.githubNotice?.[locale] || (isAr ? "مشروع خاص تجاري / كود مغلق" : "Private Commercial Codebase")}
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>{isAr ? "كود خاص (NDA)" : "Private (NDA)"}</span>
                    </Button>
                  )}

                  {/* Button 3: System Details / Case Study */}
                  <Button
                    onClick={() => setActiveCaseStudy(project)}
                    variant="ghost"
                    size="sm"
                    className="w-full min-h-[44px] px-3 rounded-xl text-xs font-bold gap-1.5 border border-nebula-cyan/30 text-nebula-cyan hover:bg-nebula-cyan/10"
                  >
                    <Layers className="w-3.5 h-3.5 text-nebula-cyan" />
                    <span>{isAr ? "التفاصيل الهندسية" : "Case Study"}</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Full Archive CTA Button (Min 48px Touch Target) */}
        <div className="mt-12 sm:mt-16 flex justify-center w-full">
          <Button
            onClick={() => setArchiveOpen(true)}
            variant="cosmicOutline"
            size="lg"
            className="w-full sm:w-auto min-h-[48px] group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-xs sm:text-sm text-white bg-space-900/90 border border-white/15 hover:border-nebula-cyan/50 backdrop-blur-xl shadow-xl shadow-nebula-indigo/15 hover:shadow-nebula-cyan/25"
          >
            <span className="w-2 h-2 rounded-full bg-nebula-cyan animate-ping shrink-0" />
            <span className="truncate">{t("archiveCta")}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform text-nebula-cyan shrink-0" />
          </Button>
        </div>
      </div>

      {/* Slide-over Archive Drawer Modal */}
      <ProjectArchiveDrawer
        isOpen={archiveOpen}
        onClose={() => setArchiveOpen(false)}
      />

      {/* Case Study Specification Modal */}
      <ProjectCaseStudyModal
        project={activeCaseStudy}
        isOpen={Boolean(activeCaseStudy)}
        onClose={() => setActiveCaseStudy(null)}
      />
    </section>
  );
}