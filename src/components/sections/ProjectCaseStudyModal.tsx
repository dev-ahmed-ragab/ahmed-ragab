"use client";

import { useLocale } from "next-intl";
import { Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import {
  ExternalLink,
  Lock,
  Layers,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  TrendingUp,
  Cpu,
} from "lucide-react";

interface ProjectCaseStudyModalProps {
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

  if (!project) return null;

  const cs = project.caseStudy;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[95vw] max-w-4xl max-h-[88vh] flex flex-col p-0 overflow-hidden bg-space-950 border border-white/15 shadow-2xl shadow-nebula-indigo/30">
        {/* Modal Header */}
        <DialogHeader className="p-5 sm:p-7 border-b border-white/10 bg-space-900/60 backdrop-blur-md relative z-10 text-start space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-nebula-cyan bg-nebula-cyan/10 border border-nebula-cyan/30 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {project.featuredYear}
              </span>
            </div>

            <span className="text-xs font-mono text-slate-400 font-bold">
              SYSTEM ARCHITECTURE SPECIFICATION
            </span>
          </div>

          <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title[locale]}
          </DialogTitle>

          <DialogDescription className="text-sm font-mono text-nebula-violet font-semibold">
            {project.subtitle[locale]}
          </DialogDescription>
        </DialogHeader>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 sm:space-y-8">
          {/* Visual Blueprint / Impact Overview Banner */}
          <div
            className={`w-full rounded-2xl border border-white/10 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[160px] ${
              cs?.mockupGradient || "bg-gradient-to-br from-space-900 via-space-950 to-nebula-indigo/20"
            }`}
          >
            <div className="flex items-center justify-between gap-2 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] font-mono text-slate-400 ms-2">
                  system://{project.slug}.cloud
                </span>
              </div>
              <Badge variant="cosmicCyan" className="text-[11px] font-mono">
                {cs?.mockupBadge || "Production Architecture"}
              </Badge>
            </div>

            <div className="relative z-10 my-3">
              <div className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {cs?.overview[locale] || project.description[locale]}
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-2 relative z-10 pt-2 border-t border-white/10">
              {project.metrics[locale].map((m, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-black/40 border border-white/10 text-xs font-mono font-semibold text-cyan-200"
                >
                  ⚡ {m}
                </span>
              ))}
            </div>
          </div>

          {/* Problem vs. Solution 2-Column Split (Clean Impeccable Typography) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Challenge / Problem */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{isAr ? "التحدي الهندسي (The Challenge)" : "The Engineering Challenge"}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {cs?.problem[locale] ||
                  (isAr
                    ? "بناء نظام قادر على معالجة تدفقات البيانات المعقدة بسرعة فائقة مع الحفاظ على الأمان الصارم وتجربة مستخدم بديهية."
                    : "Architecting a high-throughput system capable of rapid execution while upholding strict security boundaries and seamless UX.")}
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-nebula-emerald font-mono text-xs font-bold uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 shrink-0" />
                <span>{isAr ? "الحل المعماري (The Solution)" : "The Engineered Solution"}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {cs?.solution[locale] ||
                  (isAr
                    ? "تصميم معمارية قابلة للتوسع بمكونات منفصلة، وتفعيل تقنيات التخزين المؤقت وحماية البيانات الصارمة."
                    : "Engineered a scalable modular architecture utilizing intelligent caching strategies and role-isolated security boundaries.")}
              </p>
            </div>
          </div>

          {/* Core Architectural Pillars */}
          {cs?.architecture && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-nebula-cyan font-bold uppercase tracking-wider">
                <Layers className="w-4 h-4 shrink-0" />
                <span>
                  {isAr
                    ? "القرارات المعمارية الرئيسية (Architecture Blueprint)"
                    : "Key Architectural Blueprint"}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cs.architecture[locale].map((pillar, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-nebula-cyan shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Tech Stack Breakdown */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-nebula-violet font-bold uppercase tracking-wider">
              <Cpu className="w-4 h-4 shrink-0" />
              <span>{isAr ? "التقنيات المستخدمة (Tech Stack)" : "Integrated Technologies"}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((stk) => (
                <span
                  key={stk}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                >
                  {stk}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Bottom Action Buttons */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-space-900/80 backdrop-blur-md flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Notice about repo if private / commercial */}
          <div className="text-xs font-mono text-slate-400">
            {project.links.github ? (
              <span className="text-emerald-400">🟢 {isAr ? "الكود متاح على جيت هاب" : "Public Repository Available"}</span>
            ) : (
              <span className="text-amber-400 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span>{project.githubNotice?.[locale] || (isAr ? "مشروع تجاري خاص / كود مغلق" : "Private Commercial Repo")}</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
            {/* Button 1: GitHub Repo (if exists) or disabled with notice */}
            {project.links.github ? (
              <Button
                asChild
                variant="cosmicOutline"
                size="sm"
                className="flex-1 sm:flex-none min-h-[44px] px-4 rounded-xl text-xs font-semibold gap-2"
              >
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>{isAr ? "مستودع GitHub" : "View on GitHub"}</span>
                </a>
              </Button>
            ) : (
              <Button
                variant="cosmicOutline"
                size="sm"
                disabled
                className="flex-1 sm:flex-none min-h-[44px] px-4 rounded-xl text-xs font-semibold gap-2 opacity-50 cursor-not-allowed border-dashed"
                title={project.githubNotice?.[locale] || "Proprietary Codebase"}
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{isAr ? "كود خاص (NDA)" : "Private (NDA)"}</span>
              </Button>
            )}

            {/* Button 2: Direct Live Link (if exists) */}
            {project.links.demo ? (
              <Button
                asChild
                variant="cosmicPrimary"
                size="sm"
                className="flex-1 sm:flex-none min-h-[44px] px-5 rounded-xl text-xs font-bold gap-2"
              >
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{isAr ? "فتح النظام المباشر" : "Launch Live System"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            ) : (
              <Button
                asChild
                variant="cosmicCyan"
                size="sm"
                className="flex-1 sm:flex-none min-h-[44px] px-4 rounded-xl text-xs font-semibold gap-2"
              >
                <a href="#contact" onClick={onClose}>
                  <span>{isAr ? "طلب معاينة خاصة" : "Request Live Demo"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            )}

            {/* Button 3: Close / Done */}
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="min-h-[44px] px-4 rounded-xl text-xs"
            >
              {isAr ? "إغلاق" : "Close"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
