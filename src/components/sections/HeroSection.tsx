"use client";

import { useTranslations, useLocale } from "next-intl";
import { siteConfig } from "@/config/site";
import { ArrowDown, Download, Terminal, Layers, Cpu } from "lucide-react";
import { FloatingAstronaut } from "@/components/cosmic/FloatingAstronaut";
import { RingedPlanet, LottieSatellite, LottieRocket } from "@/components/cosmic/CelestialElements";
import { trackDownloadCV } from "@/lib/analytics";

export function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-8 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      {/* Ambient nebula glows */}
      <div className="absolute top-1/4 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[580px] h-[280px] sm:h-[580px] bg-nebula-indigo/15 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 end-4 sm:end-10 w-[220px] sm:w-[420px] h-[220px] sm:h-[420px] bg-nebula-cyan/12 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -start-10 sm:-start-20 w-[240px] sm:w-[300px] h-[240px] sm:h-[300px] bg-nebula-violet/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-12 items-center">

        {/* Left Column (Below astronaut on mobile, First on Desktop) */}
        <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-7 text-start w-full">

          {/* Name */}
          <span className="text-sm sm:text-base font-mono font-semibold text-white/50 tracking-widest uppercase">
            {isAr ? siteConfig.fullName.ar : siteConfig.fullName.en}
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-[1.1] break-words">
            {t("headline")}
          </h1>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto relative">
            <a
              href="#projects"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-nebula-indigo via-nebula-violet to-nebula-indigo bg-size-200 hover:brightness-110 shadow-lg shadow-nebula-indigo/30 transition-all group active:scale-[0.98]"
            >
              <span>{t("ctaProjects")}</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href={siteConfig.links.cv}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackDownloadCV(locale)}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-nebula-cyan/40 backdrop-blur-md transition-all shadow-sm active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-nebula-cyan" />
              <span>{t("ctaResume")}</span>
            </a>

            <div className="hidden sm:flex items-center ps-2 pointer-events-none">
              <LottieRocket size={52} tilt={20} speed={0.8} />
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 w-full max-w-xl border-t border-white/10">
            <div className="flex flex-col space-y-1 pt-3 sm:pt-4 min-w-0">
              <span className="text-[10px] sm:text-xs text-nebula-cyan font-mono uppercase tracking-wider flex items-center gap-1">
                <Terminal className="w-3 h-3 shrink-0" />
                <span className="truncate">{t("statsLabels.experience")}</span>
              </span>
              <span className="text-[11px] sm:text-sm font-bold text-white leading-snug">
                {t("quickStats.experience")}
              </span>
            </div>

            <div className="flex flex-col space-y-1 pt-3 sm:pt-4 min-w-0">
              <span className="text-[10px] sm:text-xs text-nebula-violet font-mono uppercase tracking-wider flex items-center gap-1">
                <Layers className="w-3 h-3 shrink-0" />
                <span className="truncate">{t("statsLabels.specialty")}</span>
              </span>
              <span className="text-[11px] sm:text-sm font-bold text-white leading-snug">
                {t("quickStats.specialty")}
              </span>
            </div>

            <div className="flex flex-col space-y-1 pt-3 sm:pt-4 min-w-0">
              <span className="text-[10px] sm:text-xs text-nebula-emerald font-mono uppercase tracking-wider flex items-center gap-1">
                <Cpu className="w-3 h-3 shrink-0" />
                <span className="truncate">{t("statsLabels.discipline")}</span>
              </span>
              <span className="text-[11px] sm:text-sm font-bold text-white leading-snug">
                {t("quickStats.architecture")}
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: Astronaut scene (Above text on mobile, Second on Desktop) */}
        <div className="order-1 lg:order-2 lg:col-span-5 relative flex flex-col items-center justify-center overflow-visible min-h-[210px] sm:min-h-[420px] lg:min-h-[480px]">
          <div className="absolute w-[200px] sm:w-[420px] h-[200px] sm:h-[420px] rounded-full border border-nebula-indigo/15 animate-spin-slow pointer-events-none" />
          <div className="absolute w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] rounded-full border border-nebula-cyan/10 pointer-events-none" />

          <div className="absolute -top-2 end-4 sm:-top-10 sm:-end-6 z-0 opacity-80 sm:opacity-90 pointer-events-none scale-75 sm:scale-100">
            <RingedPlanet size={130} variant="violet" tilt={-22} />
          </div>

          <div className="hidden sm:block absolute top-4 -start-6 z-20 pointer-events-none">
            <LottieSatellite size={90} direction="right" speed={0.8} showPings={true} />
          </div>

          <div className="relative z-10 w-full max-w-[230px] sm:max-w-none flex justify-center items-center">
            <FloatingAstronaut size={400} />
          </div>
        </div>

      </div>
    </section>
  );
}
