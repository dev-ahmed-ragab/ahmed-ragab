"use client";

import { useState, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { projects, Project } from "@/data/projects";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import {
  ExternalLink,
  Compass,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SpaceshipBackdrop } from "@/components/cosmic/SpaceshipBackdrop";
import { motion, AnimatePresence } from "framer-motion";
import { trackProjectClick } from "@/lib/analytics";

const INITIAL_VISIBLE_COUNT = 6;

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const t = useTranslations("projects");
  const locale = useLocale() as "en" | "ar";
  const isAr = locale === "ar";

  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleToggleLoadMore = () => {
    if (hasMore) {
      setVisibleCount(projects.length);
    } else {
      setVisibleCount(INITIAL_VISIBLE_COUNT);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full overflow-hidden bg-transparent"
    >
      {/* ================================================================= */}
      {/* 1. SECTION-SCOPED STATIONARY PANORAMIC SPACESHIP BACKDROP         */}
      {/* Uses clip-path: inset(0) so the fixed backdrop stays pinned       */}
      {/* inside the Projects Section and NEVER bleeds into Experience!     */}
      {/* ================================================================= */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        style={{ clipPath: "inset(0)" }}
        aria-hidden="true"
      >
        <div className="fixed inset-0 w-full h-full pointer-events-none">
          <SpaceshipBackdrop containerRef={sectionRef} />
        </div>
      </div>

      {/* ================================================================= */}
      {/* 2. FOREGROUND CONTENT: 3-COLUMN IMPECCABLE GRID                   */}
      {/* ================================================================= */}
      <div className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-nebula-cyan/40 bg-space-950/80 backdrop-blur-md font-mono text-xs font-semibold text-nebula-cyan uppercase tracking-wider shadow-sm shadow-nebula-cyan/20">
            <Compass className="w-3.5 h-3.5" />
            <span>{t("badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
            {t("title")}
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed drop-shadow-sm">
            {t("description")}
          </p>
        </div>

        {/* Impeccable 3-Column Grid on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          <AnimatePresence>
            {visibleProjects.map((project, idx) => {
              const projectImg = project.image || `/assets/projects/${project.id}.svg`;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.35, delay: (idx % 3) * 0.06 }}
                  className="group relative rounded-2xl border border-white/10 hover:border-nebula-cyan/40 bg-space-950/90 hover:bg-space-950/95 backdrop-blur-xl shadow-xl shadow-black/80 hover:shadow-nebula-cyan/15 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle Top Accent Glow on Hover */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-nebula-cyan/30 to-transparent group-hover:via-nebula-cyan transition-all duration-500" />

                  {/* Card Content Top Container */}
                  <div className="flex flex-col">
                    {/* Visual Window Mockup Preview */}
                    <div className="relative w-full aspect-[16/10] bg-space-900/90 overflow-hidden border-b border-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={projectImg}
                        alt={project.title[locale]}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />

                      {/* Vignette overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-space-950/80 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Badges */}
                      <div className="absolute top-3 start-3 end-3 flex items-center justify-between gap-2 pointer-events-none">
                        <span className="text-[11px] font-mono font-bold text-nebula-cyan bg-space-950/90 border border-nebula-cyan/35 px-2.5 py-0.5 rounded-full shadow-md backdrop-blur-md">
                          {project.category}
                        </span>

                        <span className="text-[11px] font-mono text-slate-300 bg-space-950/80 border border-white/15 px-2 py-0.5 rounded-full backdrop-blur-md">
                          {project.featuredYear}
                        </span>
                      </div>
                    </div>

                    {/* Text Details Area */}
                    <div className="p-5 sm:p-6 space-y-3 flex flex-col flex-grow">
                      {/* Title & Subtitle */}
                      <div className="space-y-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-nebula-cyan transition-colors tracking-tight line-clamp-1">
                          {project.title[locale]}
                        </h3>
                        <p className="text-xs font-mono text-cyan-300/90 line-clamp-1 font-medium">
                          {project.subtitle[locale]}
                        </p>
                      </div>

                      {/* Concise Description (Clamped to 3 lines for strict visual alignment) */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                        {project.description[locale]}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-5 pt-0 sm:p-6 sm:pt-0 mt-auto flex items-center justify-between gap-3 border-t border-white/5 pt-4">
                    {/* Primary Button: Open Shadcn Modal */}
                    <Button
                      onClick={() => setActiveModalProject(project)}
                      variant="cosmicPrimary"
                      size="sm"
                      className="rounded-xl gap-2 text-xs font-semibold px-4 min-h-[40px] flex-1 justify-center shadow-md shadow-nebula-cyan/20"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                      <span>{isAr ? "معاينة المشروع" : "Case Study"}</span>
                    </Button>

                    {/* Secondary Action Icons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() =>
                            trackProjectClick(
                              project.title.en,
                              "demo",
                              project.links.demo
                            )
                          }
                          title={isAr ? "زيارة الموقع" : "Live Demo"}
                          className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() =>
                            trackProjectClick(
                              project.title.en,
                              "github",
                              project.links.github
                            )
                          }
                          title={isAr ? "المستودع البرمجي" : "GitHub Repo"}
                          className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        >
                          <GitHubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load More Projects Toggle Button */}
        {projects.length > INITIAL_VISIBLE_COUNT && (
          <div className="mt-12 sm:mt-16 text-center">
            <Button
              onClick={handleToggleLoadMore}
              variant="cosmicOutline"
              size="lg"
              className="rounded-2xl gap-2.5 px-8 text-sm font-semibold min-h-[48px] backdrop-blur-md shadow-lg shadow-black/60"
            >
              {hasMore ? (
                <>
                  <span>
                    {isAr
                      ? `استعراض باقي المشاريع (${projects.length - visibleCount}+)`
                      : `View All Projects (${projects.length - visibleCount}+)`}
                  </span>
                  <ChevronDown className="w-4 h-4 text-nebula-cyan" />
                </>
              ) : (
                <>
                  <span>{isAr ? "عرض أقل" : "Show Less"}</span>
                  <ChevronUp className="w-4 h-4 text-nebula-cyan" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>

      {/* Shadcn UI Case Study & Preview Modal */}
      <ProjectCaseStudyModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}

export default ProjectsSection;
