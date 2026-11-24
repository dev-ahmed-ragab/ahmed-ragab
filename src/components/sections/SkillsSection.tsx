"use client";

import { useState, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Layout,
  Database,
  Server,
  Play,
  Pause,
  FolderGit2,
  CheckCircle2,
} from "lucide-react";
import { GalaxySkillCloud, type NodeScreenPos } from "@/components/cosmic/GalaxySkillCloud";
import { SKILL_ITEMS, type SkillItem, type SkillCategory } from "@/data/skills";

export function SkillsSection() {
  const t = useTranslations("skills");
  const locale = useLocale() as "en" | "ar";
  const isAr = locale === "ar";

  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all");
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);
  const [nodePos, setNodePos] = useState<NodeScreenPos | null>(null);
  const [autoSpin, setAutoSpin] = useState<boolean>(true);

  const handleSelectSkill = useCallback((skill: SkillItem | null, pos?: NodeScreenPos | null) => {
    setHoveredSkill(skill);
    setNodePos(pos || null);
  }, []);

  // Category filter tabs
  const categoryTabs: { id: SkillCategory | "all"; label: string; icon: typeof Layout }[] = [
    { id: "all", label: t("tabAll"), icon: Sparkles },
    { id: "frontend", label: t("tabFrontend"), icon: Layout },
    { id: "backend", label: t("tabBackend"), icon: Database },
    { id: "systems", label: t("tabSystems"), icon: Server },
  ];

  // Calculate smart playing-card position relative to the hovered node
  const getCardStyle = () => {
    if (!nodePos) return { left: 0, top: 0 };
    const { x, y, containerWidth, containerHeight } = nodePos;

    // Generous, comfortable playing-card dimensions (w-[336px])
    const cardWidth = 336;
    const cardHeight = 310;

    const isRightHalf = x > containerWidth * 0.5;
    // Offset card 36px to the side of the node so it never overlaps the node icon!
    let leftPos = isRightHalf ? x - cardWidth - 36 : x + 36;
    leftPos = Math.max(16, Math.min(containerWidth - cardWidth - 16, leftPos));

    let topPos = y - cardHeight / 2;
    topPos = Math.max(16, Math.min(containerHeight - cardHeight - 16, topPos));

    return {
      left: Math.round(leftPos),
      top: Math.round(topPos),
    };
  };

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full flex flex-col items-center">
        {/* Clean Centered Header (Borderless & expansive) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t("title")}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Sleek Floating Filter Navigation Dock */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4 z-20 w-full">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 sm:p-1 rounded-2xl sm:rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-lg max-w-full">
            {categoryTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white/15 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)] border border-white/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-cyan-300" : "text-slate-400"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}

            {/* Subtle Divider */}
            <div className="w-[1px] h-4 bg-white/10 mx-1 hidden sm:block" />

            {/* Subtle Pause/Play Rotation Control */}
            <button
              type="button"
              onClick={() => setAutoSpin(!autoSpin)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                autoSpin
                  ? "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  : "bg-amber-500/20 text-amber-200 border border-amber-400/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]"
              }`}
              title={autoSpin ? t("pauseOrbit") : t("resumeOrbit")}
            >
              {autoSpin ? <Pause className="w-3.5 h-3.5 text-cyan-400" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
              <span className="hidden md:inline">{autoSpin ? t("pauseOrbit") : t("resumeOrbit")}</span>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* FREE-FLOATING 3D GALAXY SKILL CLOUD (Canvas 2D)           */}
        {/* Completely borderless, freezes solid on node hover       */}
        {/* ========================================================= */}
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
          <GalaxySkillCloud
            skills={SKILL_ITEMS}
            activeCategory={activeCategory}
            onSelectSkill={handleSelectSkill}
            showMesh={true}
            autoSpin={autoSpin}
          />

          {/* ======================================================= */}
          {/* CONTEXTUAL PLAYING CARD (كارت الكوتشينا الفاخر مكان الوقوف) */}
          {/* Appears precisely near the hovered skill node           */}
          {/* ======================================================= */}
          <AnimatePresence>
            {hoveredSkill && nodePos && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  left: getCardStyle().left,
                  top: getCardStyle().top,
                }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{
                  opacity: { duration: 0.15 },
                  scale: { duration: 0.15 },
                  left: { type: "spring", stiffness: 360, damping: 30 },
                  top: { type: "spring", stiffness: 360, damping: 30 },
                }}
                className="absolute z-40 pointer-events-none hidden sm:flex flex-col w-[336px] p-5 rounded-2xl bg-[#030712]/95 border backdrop-blur-2xl select-none transition-colors duration-200"
                style={{
                  borderColor: `${hoveredSkill.color}65`,
                  boxShadow: `0 20px 50px rgba(0,0,0,0.95), 0 0 35px ${hoveredSkill.color}35, inset 0 1px 0 rgba(255,255,255,0.18)`,
                }}
              >
                {/* Playing Card Top Bar: Category & Score */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3.5">
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-cyan-400">
                    {hoveredSkill.category} CORE
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/25 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                    {hoveredSkill.score}
                  </span>
                </div>

                {/* Card Header: Icon & Skill Name */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 shrink-0 border"
                    style={{
                      borderColor: hoveredSkill.color,
                      backgroundColor: "rgba(10, 15, 30, 0.8)",
                      boxShadow: `0 0 18px ${hoveredSkill.color}45`,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={hoveredSkill.iconSrc}
                      alt={hoveredSkill.name}
                      className="w-7 h-7 object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-extrabold text-white tracking-tight truncate">
                      {hoveredSkill.name}
                    </h4>
                    <span className="text-xs font-mono text-cyan-300 block truncate mt-0.5">
                      {hoveredSkill.level[locale]}
                    </span>
                  </div>
                </div>

                {/* Projects Used In (المشاريع التي اشتغلت عليها بها) */}
                <div className="pt-2.5 border-t border-white/10 space-y-2 mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-300">
                    <FolderGit2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{t("usedInProjects")}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {hoveredSkill.projects[locale].map((proj) => (
                      <span
                        key={proj}
                        className="text-[11px] font-sans font-medium px-2.5 py-1 rounded-lg bg-white/[0.07] border border-white/10 text-slate-100 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{proj}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Short Practical Highlight */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                  {hoveredSkill.description[locale]}
                </p>

                {/* Subtle corner hologram rank */}
                <div
                  className="absolute -top-1 -end-1 w-3 h-3 rounded-full blur-[2px]"
                  style={{ backgroundColor: hoveredSkill.color }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Bottom Dock Card (< 640px) */}
          <div className="min-h-[75px] mt-2 sm:hidden flex items-center justify-center w-full z-20 px-2">
            <AnimatePresence mode="wait">
              {hoveredSkill ? (
                <motion.div
                  key={hoveredSkill.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="flex flex-col gap-2 p-3.5 rounded-2xl bg-space-950/95 border border-white/20 backdrop-blur-2xl shadow-2xl w-full max-w-sm text-start"
                  style={{
                    borderColor: `${hoveredSkill.color}50`,
                    boxShadow: `0 12px 30px rgba(0,0,0,0.9), 0 0 25px ${hoveredSkill.color}25`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={hoveredSkill.iconSrc}
                        alt={hoveredSkill.name}
                        className="w-5 h-5 object-contain"
                      />
                      <span className="font-bold text-white text-xs">
                        {hoveredSkill.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-amber-300 font-bold">
                      {hoveredSkill.score}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {hoveredSkill.projects[locale].map((proj) => (
                      <span
                        key={proj}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-200"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>

                  <p className="text-[11px] text-slate-300 leading-snug line-clamp-2">
                    {hoveredSkill.description[locale]}
                  </p>
                </motion.div>
              ) : (
                <div className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md text-[11px] font-mono text-slate-400 text-center">
                  <span>{t("interactiveHint")}</span>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Idle Hint for Desktop */}
          <div className="hidden sm:flex min-h-[36px] mt-1 items-center justify-center w-full z-20">
            <span className="text-[11px] font-mono text-slate-500 text-center">
              {t("interactiveHint")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
