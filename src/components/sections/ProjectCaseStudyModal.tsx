"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import {
  ExternalLink,
  Lock,
  Layers,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  Cpu,
  Sparkles,
} from "lucide-react";

export interface ProjectCaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectCaseStudyModal({
  project,
  isOpen,
  onClose,
}: ProjectCaseStudyModalProps) {
  const locale = useLocale() as "en" | "ar";
  const isAr = locale === "ar";
  const t = useTranslations("projects");

  if (!project) return null;

  const cs = project.caseStudy;
  const projectImg = project.image || `/assets/projects/${project.id}.svg`;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[95vw] max-w-3xl max-h-[88vh] overflow-y-auto p-0 border border-white/15 bg-space-950/95 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-nebula-cyan/10 scrollbar-thin">
        {/* Top Visual Banner / Window Mockup */}
        <div className="relative w-full aspect-[16/9] max-h-64 sm:max-h-72 bg-space-900 overflow-hidden border-b border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={projectImg}
            alt={project.title[locale]}
            className="w-full h-full object-cover object-top"
          />
          {/* Subtle bottom vignette to blend into dialog content */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-space-950 via-space-950/60 to-transparent pointer-events-none" />

          {/* Top badges */}
          <div className="absolute top-4 start-4 flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-nebula-cyan bg-space-950/90 border border-nebula-cyan/40 px-3 py-1 rounded-full shadow-lg backdrop-blur-md">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-300 bg-space-950/80 border border-white/15 px-2.5 py-1 rounded-full backdrop-blur-md">
              {project.featuredYear}
            </span>
          </div>
        </div>

        {/* Dialog Header & Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <DialogHeader className="text-start space-y-1.5">
            <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <span>{project.title[locale]}</span>
            </DialogTitle>
            <DialogDescription className="text-sm font-mono text-cyan-300 font-semibold">
              {project.subtitle[locale]}
            </DialogDescription>
          </DialogHeader>

          {/* Full Narrative Description */}
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {project.description[locale]}
          </p>

          {/* Case Study Core: Problem vs Solution */}
          {cs && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Challenge / Problem */}
              <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-2 text-rose-300 font-mono text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{isAr ? "التحدي الهندسي" : "The Core Challenge"}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cs.problem[locale]}
                </p>
              </div>

              {/* Solution & Engineering Architecture */}
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isAr ? "الحل المعماري" : "The Architectural Solution"}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cs.solution[locale]}
                </p>
              </div>
            </div>
          )}

          {/* Architecture Highlights */}
          {cs?.architecture && cs.architecture[locale].length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                <Cpu className="w-4 h-4 text-nebula-cyan" />
                <span>{isAr ? "الهيكلية والمواصفات المعمارية" : "System Architecture Highlights"}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cs.architecture[locale].map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg border border-white/10 bg-white/[0.02] text-xs text-slate-200 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-nebula-cyan shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Stack */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              <span>{isAr ? "حزمة التقنيات المستخدمة" : "Technologies & Infrastructure"}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            {project.links.demo ? (
              <Button
                asChild
                variant="cosmicPrimary"
                size="sm"
                className="rounded-xl gap-2 text-xs font-semibold px-5 min-h-[44px]"
              >
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{isAr ? "زيارة الموقع الحي للمشروع" : "Launch Live Demo"}</span>
                </a>
              </Button>
            ) : (
              <div className="text-xs font-mono text-slate-400 italic">
                {isAr ? "منظومة إنتاجية داخلية غير معلنة" : "Internal Enterprise System"}
              </div>
            )}

            {project.links.github ? (
              <Button
                asChild
                variant="cosmicOutline"
                size="sm"
                className="rounded-xl gap-2 text-xs font-semibold px-4 min-h-[44px]"
              >
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>{isAr ? "المستودع البرمجي (GitHub)" : "View Source on GitHub"}</span>
                </a>
              </Button>
            ) : (
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-300/90 bg-amber-950/40 border border-amber-500/30 px-3 py-1.5 rounded-lg">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {project.githubNotice?.[locale] || (isAr ? "الكود خاص بالشركة" : "Proprietary Codebase")}
                </span>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectCaseStudyModal;
