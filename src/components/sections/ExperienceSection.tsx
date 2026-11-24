"use client";

import { useState, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { experiences, ExperienceItem } from "@/data/experience";
import { projects, Project } from "@/data/projects";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { CosmicFlyingSaucer } from "@/components/cosmic/CosmicFlyingSaucer";
import { Badge } from "@/components/ui/badge";
import {
  History,
  Rocket,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export function ExperienceSection() {
  const t = useTranslations("experience");
  const locale = useLocale() as "en" | "ar";
  const isAr = locale === "ar";
  const sectionRef = useRef<HTMLElement | null>(null);

  // InView detection: Saucer smoothly glides in when entering section, retracts when leaving
  const isInView = useInView(sectionRef, {
    margin: "-5% 0px -10% 0px",
  });

  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const handleOpenCaseStudy = (caseStudyId?: string) => {
    if (!caseStudyId) return;
    const foundProject = projects.find((p) => p.id === caseStudyId);
    if (foundProject) {
      setActiveModalProject(foundProject);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 w-full bg-transparent z-10"
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* ================================================================= */}
        {/* Section Header: Pure Editorial Grand Header (Clean & Refined)     */}
        {/* ================================================================= */}
        <div className="flex flex-col items-start space-y-4 mb-16 sm:mb-20 max-w-3xl">
          <Badge
            variant="cosmicViolet"
            className="gap-2 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider rounded-full shadow-sm"
          >
            <History className="w-3.5 h-3.5 text-cyan-300" />
            <span>{isAr ? "سجل الرحلة والمحطات الهندسية" : "Flight Log & Career Stations"}</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {isAr ? "المحطات المهنية والأثر الهندسي" : "Career Milestones & Engineering Impact"}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {isAr
              ? "مسار تصاعدي يوثق تأسيس المنصات السحابية الذكية، وهندسة أنظمة الشركات المعقدة، والخبرات التعاقدية الرصينة."
              : "A chronological trajectory from founding scalable EdTech SaaS to architecting enterprise desktop systems and high-throughput platforms."}
          </p>
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
                <CosmicFlyingSaucer size={140} />
                <div className="mt-1 px-3 py-1 rounded-full bg-space-950/95 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 backdrop-blur-md shadow-xl flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>{isAr ? "مكوك المدار النشط" : "Station Telemetry"}</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* =============================================================== */}
          {/* TOAST / DECK STACKING CARDS (Unified Luxury Obsidian & Starlight)*/}
          {/* =============================================================== */}
          <div className="cosmic-stack relative">
            {experiences.map((exp, idx) => {
              const orbitNumber = String(idx + 1).padStart(2, "0");

              return (
                <article
                  key={exp.id}
                  style={{
                    "--i": idx,
                    zIndex: 10 + idx,
                    backgroundColor: "#080d19", // Solid 100% Opaque Luxury Deep Obsidian (Consistent across all cards!)
                    borderColor: "rgba(255, 255, 255, 0.09)",
                    boxShadow: "0 22px 50px -10px rgba(0, 0, 0, 0.75), 0 1px 1px rgba(255, 255, 255, 0.05) inset",
                  } as React.CSSProperties}
                  className="cosmic-story w-full rounded-[28px] sm:rounded-[36px] border hover:border-cyan-500/35 p-6 sm:p-8 lg:p-10 transition-colors duration-300 flex flex-col justify-between overflow-hidden relative group"
                >
                  {/* Subtle Soft Top Starlight Hairline (No harsh neon, pure refinement) */}
                  <div
                    className="absolute top-0 inset-x-8 sm:inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none"
                  />

                  {/* 2-Column Responsive Layout: Story on Left, Visual Showcase on Right */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Left Column (7 cols): Tag, Title, Description, Highlight Pill, Actions */}
                    <div className="lg:col-span-7 flex flex-col space-y-4 text-start">
                      {/* Eyebrow Header */}
                      <div className="flex items-center gap-2.5 text-xs font-mono font-semibold flex-wrap">
                        <span className="text-sm font-extrabold text-cyan-400 font-mono">
                          {orbitNumber}
                        </span>
                        <span className="opacity-40 text-slate-500">•</span>
                        <span className="font-bold text-sm tracking-wide text-white">
                          {exp.company[locale]}
                        </span>
                        <span className="opacity-40 text-slate-500">•</span>
                        <span className="font-medium text-slate-400">
                          {exp.period[locale]}
                        </span>
                      </div>

                      {/* Role Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                        {exp.role[locale]}
                      </h3>

                      {/* Narrative Description */}
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                        {exp.description[locale]}
                      </p>

                      {/* Core Highlight Pill (Unified Frosted Starlight Badge) */}
                      <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold max-w-fit border border-white/10 bg-white/[0.04] text-slate-200 shadow-sm backdrop-blur-sm">
                        <Sparkles className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                        <span>{exp.highlightMetric[locale]}</span>
                      </div>

                      {/* Action Links Row */}
                      <div className="flex items-center gap-4 pt-1 flex-wrap">
                        {/* Live Platform Link if available */}
                        {exp.actionLink && (
                          <a
                            href={exp.actionLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm text-cyan-300 hover:text-cyan-200 hover:underline transition-colors"
                          >
                            <span>{exp.actionLink.label[locale]}</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}

                        {/* Case Study Blueprint Link if available */}
                        {exp.caseStudyId && (
                          <button
                            type="button"
                            onClick={() => handleOpenCaseStudy(exp.caseStudyId)}
                            className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm text-cyan-300 hover:text-cyan-200 hover:underline transition-colors cursor-pointer"
                          >
                            <span>
                              {isAr ? "استعراض دراسة الحالة الهندسية ←" : "Read Case Study Blueprint →"}
                            </span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Right Column (5 cols): The Dedicated Visual Frame */}
                    <div
                      onClick={() => exp.caseStudyId && handleOpenCaseStudy(exp.caseStudyId)}
                      className="lg:col-span-5 relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] rounded-2xl sm:rounded-[22px] overflow-hidden border border-white/10 group/img cursor-pointer shadow-lg bg-black/40"
                      title={
                        exp.caseStudyId
                          ? isAr
                            ? "انقر لاستعراض دراسة الحالة"
                            : "Click to view case study"
                          : undefined
                      }
                    >
                      {/* Visual Showcase Image */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={exp.image}
                        alt={exp.role[locale]}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-[1.04]"
                      />

                      {/* Top Status Badge */}
                      <div className="absolute top-3 start-3 pointer-events-none">
                        <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-black/80 text-white backdrop-blur-md border border-white/20 shadow-md">
                          {exp.badge[locale]}
                        </span>
                      </div>

                      {/* Subtle Bottom Hover Bar */}
                      {exp.caseStudyId && (
                        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between opacity-95 sm:opacity-0 sm:group-hover/img:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-mono font-semibold text-white flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                            <span>{isAr ? "دراسة الحالة والمعمارية" : "Case Study Blueprint"}</span>
                          </span>
                          <ChevronRight className="w-4 h-4 text-cyan-300" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Tech Stack Tags Strip */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-5 mt-6 border-t border-white/10">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono border border-white/[0.08] bg-white/[0.03] text-slate-400"
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
      </div>

      {/* Case Study Blueprint Dialog */}
      <ProjectCaseStudyModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}

export default ExperienceSection;
