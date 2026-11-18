"use client";

import { useTranslations, useLocale } from "next-intl";
import { skillCategories } from "@/data/skills";
import { TechIcon } from "@/components/ui/TechIcon";
import { Badge } from "@/components/ui/badge";
import { Cpu, Zap } from "lucide-react";
import { LottiePlanet } from "@/components/cosmic/CelestialElements";

export function SkillsSection() {
  const t = useTranslations("skills");
  const locale = useLocale() as "en" | "ar";

  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 w-full overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-nebula-indigo/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Propulsion Core Rotating Lottie Planet */}
        <div className="absolute top-0 end-0 hidden sm:block pointer-events-none opacity-90 -translate-y-4">
          <LottiePlanet size={145} glowColor="cyan" speed={0.7} />
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16 space-y-3">
          <Badge
            variant="cosmicEmerald"
            className="gap-2 px-3 py-1 font-mono text-xs uppercase tracking-wider rounded-full"
          >
            <Cpu className="w-3.5 h-3.5 text-nebula-emerald" />
            <span>{t("badge")}</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t("title")}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Skill Category Cards — Impeccable Single Surface with Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-space-900/40 border border-white/10 p-6 sm:p-7 flex flex-col justify-between space-y-6 group backdrop-blur-md hover:border-nebula-cyan/30 transition-all shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-nebula-indigo/15 border border-nebula-indigo/30 flex items-center justify-center text-nebula-cyan shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-nebula-cyan transition-colors">
                    {category.title[locale]}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {category.description[locale]}
                </p>
              </div>

              {/* Clean divider list (No nested cards) */}
              <div className="divide-y divide-white/5 pt-2">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="py-3 first:pt-0 last:pb-0 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <TechIcon
                          name={skill.iconSlug}
                          className="w-4 h-4 text-nebula-cyan shrink-0"
                        />
                        <span className="text-xs font-bold text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-nebula-violet/90 bg-nebula-violet/10 px-2 py-0.5 rounded">
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-relaxed ps-6">
                      {skill.description[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
