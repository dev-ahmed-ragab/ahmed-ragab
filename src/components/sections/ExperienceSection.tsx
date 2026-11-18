"use client";

import { useTranslations, useLocale } from "next-intl";
import { experiences } from "@/data/experience";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History, Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { LottiePlayer } from "@/components/cosmic/LottiePlayer";

export function ExperienceSection() {
  const t = useTranslations("experience");
  const locale = useLocale() as "en" | "ar";

  return (
    <section id="experience" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 w-full overflow-hidden">
      {/* Glow aura */}
      <div className="absolute top-1/3 end-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-nebula-cyan/8 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {/* Section Header with Stargazing Astronaut Companion */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col items-start space-y-3 max-w-2xl">
            <Badge
              variant="cosmicViolet"
              className="gap-2 px-3 py-1 font-mono text-xs uppercase tracking-wider rounded-full"
            >
              <History className="w-3.5 h-3.5" />
              <span>{t("badge")}</span>
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t("title")}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Stargazing Astronaut Watching Milestones */}
          <div className="relative shrink-0 flex flex-col items-center self-start md:self-center">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36">
              <div className="absolute inset-0 rounded-full bg-nebula-violet/20 blur-xl pointer-events-none" />
              <LottiePlayer
                src="/lottie/cute_astronaut_telescope.json"
                loop
                autoplay
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
            <div className="text-[10px] font-mono text-nebula-cyan/90 bg-space-950/80 px-2.5 py-0.5 rounded-full border border-nebula-cyan/25 -mt-1 shadow-lg backdrop-blur-md">
              🔭 Stargazing Milestones
            </div>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-s border-white/10 ms-3 sm:ms-6 space-y-10 sm:space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative ps-4 sm:ps-8 group">
              {/* Timeline Node Point (Exact centering in both RTL and LTR) */}
              <div className="absolute -start-[15px] sm:-start-[17px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-space-950 border-2 border-nebula-indigo flex items-center justify-center shadow-lg shadow-nebula-indigo/30 group-hover:border-nebula-cyan group-hover:scale-110 transition-all">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-nebula-indigo group-hover:bg-nebula-cyan transition-colors" />
              </div>

              {/* Experience Card */}
              <Card className="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-7 border border-white/10 space-y-4">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge variant="cosmicCyan" className="text-xs font-bold">
                    {exp.badge[locale]}
                  </Badge>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      {exp.period[locale]}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      {exp.location[locale]}
                    </span>
                  </div>
                </div>

                {/* Role & Company */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-nebula-cyan transition-colors">
                    {exp.role[locale]}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 flex items-center gap-1.5 mt-0.5">
                    <Briefcase className="w-3.5 h-3.5 text-nebula-violet shrink-0" />
                    <span>{exp.company[locale]}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.description[locale]}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {t("keyAchievements")}
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements[locale].map((ach, aIdx) => (
                      <li
                        key={aIdx}
                        className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-nebula-emerald shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="subtle"
                      className="text-[11px] px-2.5 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}