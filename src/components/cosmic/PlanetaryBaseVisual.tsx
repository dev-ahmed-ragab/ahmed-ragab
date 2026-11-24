"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flag, Radio, Compass, Activity, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PlanetaryBaseVisualProps {
  locale: "en" | "ar";
  t: (key: string) => string;
  activeId?: string;
  onSelectMilestone?: (id: string) => void;
  milestones?: Array<{
    id: string;
    period: string;
    role: string;
    company: string;
    badge: string;
  }>;
}

export function PlanetaryBaseVisual({
  locale,
  t,
  activeId,
  onSelectMilestone,
  milestones = [],
}: PlanetaryBaseVisualProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isRtl = locale === "ar";

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-space-900/90 via-space-950/95 to-[#030712] p-4 sm:p-6 shadow-2xl backdrop-blur-2xl">
      {/* Background Ambient Glows */}
      <div className="absolute -top-16 -start-16 w-56 h-56 rounded-full bg-nebula-violet/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -end-16 w-56 h-56 rounded-full bg-nebula-cyan/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 start-1/4 w-64 h-40 rounded-full bg-nebula-emerald/15 blur-3xl pointer-events-none" />

      {/* Decorative scanline overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-40 z-10" />

      {/* Header HUD Status Bar */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
            {t("stationActive")}
          </span>
        </div>
        <Badge
          variant="outline"
          className="font-mono text-[11px] border-nebula-cyan/30 text-cyan-300 bg-nebula-cyan/10"
        >
          {t("pioneerCoordinates")}
        </Badge>
      </div>

      {/* Main Photographic Cinematic Display: Ahmed Planting Flag on Moon with Saturn */}
      <div className="relative z-10 my-4 w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.85)] group">
        {/* Real Generated User Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/experience-mission-flag.webp"
          alt="Ahmed Ragab Planting Mission Flag on Planetary Surface with Saturn"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Ambient Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/50 via-transparent to-[#030712]/50 pointer-events-none" />

        {/* Cinematic Badge Overlay */}
        <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-[11px] font-mono text-slate-300 backdrop-blur-md bg-space-950/70 px-3 py-1.5 rounded-xl border border-white/10">
          <div className="flex items-center gap-2">
            <Flag className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            <span className="font-semibold text-white">
              {isRtl ? "محطة الوصول: تأسيس إقرأ والريادة" : "Mission Outpost: Iqraa Founder"}
            </span>
          </div>
          <span className="text-emerald-400 font-bold">100% COMPLETE</span>
        </div>
      </div>

      {/* Mission Telemetry Summary & Milestone Jumpers */}
      <div className="relative z-20 pt-3 border-t border-white/10 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Compass className="w-3.5 h-3.5 text-nebula-cyan" />
            {t("missionTrajectory")}
          </span>
          <span className="text-cyan-300 font-semibold">{t("fullStackElevation")}</span>
        </div>

        {/* Interactive Milestone Jump Nodes */}
        {milestones.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
            {milestones.map((ms, idx) => {
              const isSelected = activeId === ms.id;
              return (
                <button
                  key={ms.id}
                  type="button"
                  onClick={() => onSelectMilestone?.(ms.id)}
                  className={`text-start px-2.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                    isSelected
                      ? "bg-nebula-cyan/20 border-nebula-cyan/60 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                      : "bg-space-900/60 border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-space-800/60"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-0.5">
                    <span>LOG 0{milestones.length - idx}</span>
                    <span className="text-cyan-300">{ms.period}</span>
                  </div>
                  <div className="font-semibold text-slate-200 truncate">{ms.role}</div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default PlanetaryBaseVisual;
