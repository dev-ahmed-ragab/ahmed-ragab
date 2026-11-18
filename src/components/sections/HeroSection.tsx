"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { ArrowDown, Download, Sparkles, Terminal, Layers, Cpu } from "lucide-react";
import { FloatingAstronaut } from "@/components/cosmic/FloatingAstronaut";
import { RingedPlanet, LottieSatellite, LottieRocket } from "@/components/cosmic/CelestialElements";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 w-full overflow-visible">
      {/* Expansive cosmic ambient nebula glows */}
      <div className="absolute top-1/4 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[580px] h-[350px] sm:h-[580px] bg-nebula-indigo/15 rounded-full blur-[130px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 end-10 w-[260px] sm:w-[420px] h-[260px] sm:h-[420px] bg-nebula-cyan/12 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -start-20 w-[300px] h-[300px] bg-nebula-violet/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headlines & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-start w-full">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-nebula-emerald/30 bg-nebula-emerald/10 backdrop-blur-md shadow-sm max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nebula-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nebula-emerald"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-emerald-300 tracking-wide font-mono truncate">
              {t("badge")}
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-3 w-full">
            <span className="text-xs sm:text-sm uppercase font-mono tracking-widest text-nebula-cyan font-bold block">
              {t("tagline")}
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14] break-words">
              {t("headline")}
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {t("subheadline")}
          </p>

          {/* Action CTAs (Touch friendly, >=48px height) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto relative">
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
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-nebula-cyan/40 backdrop-blur-md transition-all shadow-sm active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-nebula-cyan" />
              <span>{t("ctaResume")}</span>
            </a>

            {/* Launchpad Accent: Sleek Soaring Rocket near CTAs */}
            <div className="hidden sm:flex items-center ps-2 pointer-events-none">
              <LottieRocket size={60} tilt={20} speed={0.8} />
            </div>
          </div>

          {/* Engineering Snapshot Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 w-full max-w-xl border-t border-white/10">
            <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm flex sm:flex-col justify-between sm:justify-start items-center sm:items-start gap-1">
              <div className="flex items-center gap-1.5 text-xs text-nebula-cyan font-mono">
                <Terminal className="w-3.5 h-3.5 shrink-0" />
                <span>Experience</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white text-end sm:text-start">
                {t("quickStats.experience")}
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm flex sm:flex-col justify-between sm:justify-start items-center sm:items-start gap-1">
              <div className="flex items-center gap-1.5 text-xs text-nebula-violet font-mono">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>Specialty</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white text-end sm:text-start">
                {t("quickStats.specialty")}
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm flex sm:flex-col justify-between sm:justify-start items-center sm:items-start gap-1">
              <div className="flex items-center gap-1.5 text-xs text-nebula-emerald font-mono">
                <Cpu className="w-3.5 h-3.5 shrink-0" />
                <span>Discipline</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white text-end sm:text-start">
                {t("quickStats.architecture")}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Free-Floating Astronaut & Celestial Space Scene */}
        {/* Absolutely NO square frame, NO solid box, NO container clipping */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center overflow-visible min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]">
          {/* Subtle concentric celestial orbital traces in space background */}
          <div className="absolute w-[300px] sm:w-[460px] h-[300px] sm:h-[460px] rounded-full border border-nebula-indigo/15 animate-spin-slow pointer-events-none" />
          <div className="absolute w-[400px] sm:w-[560px] h-[400px] sm:h-[560px] rounded-full border border-nebula-cyan/10 pointer-events-none" />

          {/* Flat Vector Saturn-Like Ringed Planet floating in background */}
          <div className="absolute -top-6 end-0 sm:-top-12 sm:-end-6 z-0 opacity-80 sm:opacity-90 pointer-events-none">
            <RingedPlanet size={180} variant="violet" tilt={-22} />
          </div>

          {/* Clean Lottie Communication Satellite Probe beaming telemetry signals */}
          <div className="absolute top-1 start-0 sm:top-4 sm:-start-8 z-20 pointer-events-none">
            <LottieSatellite
              size={115}
              direction="right"
              speed={0.8}
              showPings={true}
            />
          </div>

          {/* 
            The Free-Floating Astronaut:
            Unboxed, looking upwards towards the stars, floating with zero-g physics 
          */}
          <div className="relative z-10 w-full flex justify-center items-center">
            <FloatingAstronaut />
          </div>

          {/* Floating Subtle Telemetry Tag (Floating freely below, NOT boxing the astronaut) */}
          <div className="relative z-20 -mt-2 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-space-950/70 backdrop-blur-md border border-white/10 shadow-lg pointer-events-none">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nebula-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nebula-cyan" />
            </span>
            <span className="text-[11px] font-mono text-slate-300">
              Orbital Coordinates: <span className="text-nebula-cyan font-bold">2026.03</span>
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
              Online
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
