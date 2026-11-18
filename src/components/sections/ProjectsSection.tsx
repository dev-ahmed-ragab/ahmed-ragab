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
  ChevronRight,
  Layers,
  Lock,
  Zap,
} from "lucide-react";
import { OrbitalStation } from "@/components/cosmic/CelestialElements";

export function ProjectsSection() {
  const t = useTranslations("projects");
  const locale = useLocale() as "en" | "ar";
  const isAr = locale === "ar";
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const pinnedProjects = projects.filter((p) => p.pinned);

  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
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

        {/* Flagship Projects Grid — Impeccable Single-Surface Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
          {pinnedProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-space-900/40 hover:bg-space-900/70 border border-white/10 hover:border-nebula-cyan/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-nebula-cyan/10 backdrop-blur-md"
            >
              {/* Subtle top accent gradient line */}
              <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-nebula-cyan/30 to-transparent group-hover:via-nebula-cyan/70 transition-all" />

              <div className="space-y-5">
                {/* Header row: Category & Orbit Index */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-nebula-cyan bg-nebula-cyan/10 border border-nebula-cyan/25 px-2.5 py-1 rounded-lg">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.featuredYear}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-500 font-semibold tracking-wider">
                    0{idx + 1} // ORBIT
                  </span>
                </div>

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

                {/* Clean Metrics Strip (No nested card wrappers) */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {project.metrics[locale].map((metric) => (
                    <span
                      key={metric}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-md"
                    >
                      <Zap className="w-3 h-3 text-nebula-emerald" />
                      <span>{metric}</span>
                    </span>
                  ))}
                </div>

                {/* Clean Highlights (Direct bullet list, no nested container) */}
                <ul className="space-y-2 pt-1">
                  {project.highlights[locale].slice(0, 2).map((highlight, hIdx) => (
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

              {/* Bottom row: Tech Stack & 3 Clean Action Buttons */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-4">
                {/* Tech Pills */}
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

                {/* 3 Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full pt-1">
                  {/* Button 1: Live Demo */}
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

        {/* Explore Full Archive CTA Button */}
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
