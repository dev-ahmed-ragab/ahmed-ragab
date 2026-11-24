"use client";

import { useTranslations, useLocale } from "next-intl";
import { siteConfig } from "@/config/site";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import {
  Mail,
  FileText,
  ArrowUp,
  Cpu,
  Layers,
  Globe2,
} from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "#", label: t("navHero") },
    { href: "#projects", label: t("navProjects") },
    { href: "#experience", label: t("navExperience") },
    { href: "#skills", label: t("navSkills") },
    { href: "#contact", label: t("navContact") },
  ];

  const ecosystemLinks = [
    {
      label: isArabic ? "منصة إقرأ للتعليم الذكي" : "Iqraa Platform",
      href: siteConfig.links.iqraa,
      badge: "SaaS",
      external: true,
    },
    {
      label: isArabic ? "مستودعات GitHub" : "GitHub Repositories",
      href: siteConfig.links.github,
      badge: "Code",
      external: true,
    },
    {
      label: isArabic ? "حساب LinkedIn" : "LinkedIn Profile",
      href: siteConfig.links.linkedin,
      badge: "Connect",
      external: true,
    },
    {
      label: isArabic ? "تحميل السيرة الذاتية (CV)" : "Download CV (PDF)",
      href: siteConfig.links.cv,
      badge: "PDF",
      external: false,
    },
  ];

  return (
    <footer className="relative border-t border-white/[0.08] bg-space-950/90 backdrop-blur-2xl w-full overflow-hidden text-slate-300">
      {/* Top Radiant Line Accent */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 sm:pt-14 sm:pb-12">
        {/* 3-Column Clean Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.06]">
          {/* Column 1: Brand & Founder Identity (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3.5">
              {/* Master Aerospace AR Brandmark */}
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full drop-shadow-[0_0_14px_rgba(0,240,255,0.45)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="footer-ar-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00F0FF" />
                      <stop offset="45%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#818CF8" />
                    </linearGradient>
                    <linearGradient id="footer-thrust-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#38BDF8" />
                    </linearGradient>
                  </defs>
                  <path d="M 12 86 L 39 14 L 54 14 L 27 86 Z" fill="url(#footer-ar-grad)" />
                  <path d="M 46 14 L 75 14 C 89 14 98 23 98 37 C 98 50 89 59 75 59 L 55 59 L 50 45 L 73 45 C 80 45 84 41 84 37 C 84 32 80 28 73 28 L 51 28 Z" fill="url(#footer-ar-grad)" />
                  <polygon points="25,64 59,64 55,50 21,50" fill="url(#footer-thrust-grad)" />
                  <polygon points="57,55 72,55 93,86 78,86" fill="url(#footer-ar-grad)" />
                </svg>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Ahmed Ragab
                  {isArabic && (
                    <span className="text-sm font-normal text-slate-400 ms-2">
                      (أحمد رجب)
                    </span>
                  )}
                </h3>
                <p className={`text-xs ${isArabic ? "font-sans" : "font-mono"} text-cyan-400`}>
                  {isArabic ? siteConfig.role.ar : siteConfig.role.en}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {t("bio")}
            </p>

            {/* Quick Contact & Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 hover:bg-cyan-400/10 hover:border-cyan-400/40 hover:text-cyan-300 flex items-center justify-center text-slate-300 transition-all shadow-sm group cursor-pointer"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 hover:bg-cyan-400/10 hover:border-cyan-400/40 hover:text-cyan-300 flex items-center justify-center text-slate-300 transition-all shadow-sm group cursor-pointer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 hover:bg-cyan-400/10 hover:border-cyan-400/40 hover:text-cyan-300 flex items-center justify-center text-slate-300 transition-all shadow-sm group cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={siteConfig.links.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 hover:bg-cyan-400/10 hover:border-cyan-400/40 hover:text-cyan-300 flex items-center justify-center text-slate-300 transition-all shadow-sm group cursor-pointer"
                aria-label="Curriculum Vitae (PDF)"
                title={isArabic ? "تحميل السيرة الذاتية" : "Download CV"}
              >
                <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs ${isArabic ? "font-sans" : "font-mono uppercase tracking-wider"} font-bold text-slate-200 flex items-center gap-1.5`}>
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t("navigationTitle")}</span>
            </h4>
            <ul className="space-y-1 text-xs">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-2 py-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Links & Platforms (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs ${isArabic ? "font-sans" : "font-mono uppercase tracking-wider"} font-bold text-slate-200 flex items-center gap-1.5`}>
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>{t("systemsTitle")}</span>
            </h4>
            <ul className="space-y-1 text-xs">
              {ecosystemLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-slate-400 hover:text-white transition-colors flex items-center justify-between py-2 group gap-2"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-cyan-400 transition-colors shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/10 bg-white/5 text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-400/30 transition-all shrink-0">
                      {item.badge}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Location, Copyright & Generous Back to Top Button */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs ${isArabic ? "font-sans" : "font-mono"} text-slate-400`}>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-start">
            <p>© {new Date().getFullYear()} Ahmed Ragab. {t("rights")}</p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Globe2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{t("location")}</span>
            </span>
          </div>

          {/* Prominent, Generous Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="min-h-[44px] flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:text-cyan-300 text-slate-200 transition-all text-xs font-semibold shadow-md active:scale-95 cursor-pointer group"
            aria-label={t("backToTop")}
          >
            <span>{t("backToTop")}</span>
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
