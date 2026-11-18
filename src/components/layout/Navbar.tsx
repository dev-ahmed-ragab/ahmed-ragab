"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import {
  Globe,
  Download,
  Menu,
  X,
  ChevronRight,
  Compass,
  History,
  Cpu,
  Radio,
  Mail,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isArabic = locale === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile sheet is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleLocale = useCallback(() => {
    const nextLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: nextLocale });
  }, [locale, router, pathname]);

  const navLinks = [
    {
      href: "#projects",
      label: t("projects"),
      icon: Compass,
      description: isArabic ? "أبرز الأنظمة البرمجية" : "Flagship production systems",
    },
    {
      href: "#experience",
      label: t("experience"),
      icon: History,
      description: isArabic ? "المحطات والمسار الهندسي" : "Career trajectory & milestones",
    },
    {
      href: "#skills",
      label: t("skills"),
      icon: Cpu,
      description: isArabic ? "التقنيات والمحركات" : "Systems & engineering tools",
    },
    {
      href: "#contact",
      label: t("contact"),
      icon: Radio,
      description: isArabic ? "إشارة الاتصال المباشر" : "Direct subspace transmission",
    },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 start-0 end-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-space-950/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-nebula-violet rounded-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nebula-indigo to-nebula-violet flex items-center justify-center font-bold text-white shadow-lg shadow-nebula-indigo/30 group-hover:scale-105 transition-transform">
                AR
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-white group-hover:text-nebula-cyan transition-colors">
                  Ahmed Ragab
                </span>
                <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-nebula-emerald animate-pulse"></span>
                  Product Engineer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-space-900/60 backdrop-blur-md px-4 py-1.5 shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons (Desktop) */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Cosmic Theme Switcher */}
              <ThemeToggle variant="dropdown" />

              {/* Language Toggle */}
              <Button
                variant="cosmicOutline"
                size="sm"
                onClick={toggleLocale}
                className="min-h-[40px] px-3.5 py-2 text-xs font-semibold rounded-xl"
                title={isArabic ? "Switch to English" : "التبديل إلى العربية"}
                aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
              >
                <Globe className="w-3.5 h-3.5 text-nebula-cyan" />
                <span>{locale === "en" ? "عربي" : "EN"}</span>
              </Button>

              {/* CV Download CTA */}
              <Button
                asChild
                variant="cosmicPrimary"
                size="sm"
                className="min-h-[40px] px-4 py-2 text-xs font-bold rounded-xl"
              >
                <a
                  href={siteConfig.links.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t("resume")}</span>
                </a>
              </Button>
            </div>

            {/* Mobile Action Controls (Touch Friendly >= 44px) */}
            <div className="flex md:hidden items-center gap-2">
              {/* Quick Language Switcher Button (44px min touch target) */}
              <button
                onClick={toggleLocale}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center gap-1 px-3 text-slate-200 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-nebula-cyan/40 active:scale-95 transition-all"
                aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
              >
                <Globe className="w-4 h-4 text-nebula-cyan" />
                <span className="text-xs font-mono font-bold">
                  {locale === "en" ? "AR" : "EN"}
                </span>
              </button>

              {/* Mobile Drawer Trigger (44px min touch target) */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-200 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-nebula-cyan/40 active:scale-95 transition-all"
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5 text-slate-200" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Cosmic Mobile Navigation Drawer / Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Slide-over Drawer Panel */}
            <motion.div
              initial={{ x: isArabic ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isArabic ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="relative w-full max-w-[340px] xs:max-w-[380px] h-full bg-space-950/98 border-s border-white/10 shadow-2xl flex flex-col justify-between overflow-y-auto overscroll-contain z-10"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Drawer"
            >
              {/* Drawer Top Header */}
              <div className="p-5 border-b border-white/10 flex items-center justify-between bg-space-900/50">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-nebula-indigo to-nebula-violet flex items-center justify-center font-bold text-white shadow-md shadow-nebula-indigo/30">
                    AR
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">
                      Ahmed Ragab
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-nebula-emerald animate-pulse"></span>
                      Product Engineer
                    </div>
                  </div>
                </div>

                {/* Close Button (44px min touch target) */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 px-5 py-6 space-y-5 overflow-y-auto">
                {/* Direct Action Quick Switchers (CV, Language, Theme) */}
                <div className="space-y-3">
                  {/* Primary CV Download CTA Button */}
                  <Button
                    asChild
                    variant="cosmicPrimary"
                    size="lg"
                    className="w-full min-h-[48px] px-4 py-3 rounded-xl font-bold text-xs text-white justify-between shadow-lg"
                  >
                    <a
                      href={siteConfig.links.cv}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center">
                          <Download className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-semibold text-sm">
                          {t("resume")}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono uppercase bg-white/20 px-2 py-0.5 rounded text-white tracking-wider font-bold">
                        PDF
                      </span>
                    </a>
                  </Button>

                  {/* Language Switcher Bar */}
                  <button
                    onClick={toggleLocale}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-white/10 bg-space-900/60 hover:bg-white/5 hover:border-nebula-cyan/40 flex items-center justify-between text-xs text-slate-200 active:scale-[0.98] transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-nebula-cyan" />
                      <span className="font-medium text-slate-300">
                        {isArabic ? "لغة الموقع" : "Language"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 font-mono text-[11px] font-bold">
                      <span
                        className={`px-2 py-0.5 rounded ${
                          locale === "ar"
                            ? "bg-nebula-cyan text-space-950 font-bold"
                            : "text-slate-400"
                        }`}
                      >
                        العربية
                      </span>
                      <span className="text-slate-600">/</span>
                      <span
                        className={`px-2 py-0.5 rounded ${
                          locale === "en"
                            ? "bg-nebula-cyan text-space-950 font-bold"
                            : "text-slate-400"
                        }`}
                      >
                        English
                      </span>
                    </div>
                  </button>

                  {/* Theme Switcher in Mobile Drawer */}
                  <ThemeToggle variant="mobile" />
                </div>

                {/* Section Navigation Links (Each >= 48px Touch Target) */}
                <div className="space-y-1 pt-1">
                  <div className="px-1 pb-2 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                    {isArabic ? "محطات الاستكشاف" : "Orbital Navigation"}
                  </div>
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="w-full min-h-[48px] px-3.5 py-3 rounded-xl flex items-center justify-between text-slate-200 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 active:bg-white/10 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-nebula-cyan group-hover:scale-105 group-hover:border-nebula-cyan/30 transition-all">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="text-start">
                            <div className="text-sm font-semibold group-hover:text-nebula-cyan transition-colors">
                              {link.label}
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono">
                              {link.description}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-nebula-cyan group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer with Direct Social Channels */}
              <div className="p-5 border-t border-white/10 bg-space-900/40 space-y-3">
                {/* Status Beacon */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-nebula-emerald/10 border border-nebula-emerald/20 text-[11px] font-mono text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nebula-emerald opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-nebula-emerald"></span>
                  </span>
                  <span>{t("status")}</span>
                </div>

                {/* Subspace Social Links (Standard Clean SVGs + shadcn Buttons) */}
                <div className="grid grid-cols-4 gap-2 pt-1">
                  <Button
                    asChild
                    variant="cosmicOutline"
                    size="icon"
                    className="min-h-[44px] min-w-[44px] rounded-xl hover:border-nebula-violet/40"
                  >
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-nebula-violet"
                        aria-hidden="true"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="cosmicOutline"
                    size="icon"
                    className="min-h-[44px] min-w-[44px] rounded-xl hover:border-nebula-cyan/40"
                  >
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-nebula-cyan"
                        aria-hidden="true"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="cosmicOutline"
                    size="icon"
                    className="min-h-[44px] min-w-[44px] rounded-xl hover:border-nebula-indigo/40"
                  >
                    <a
                      href={`mailto:${siteConfig.email}`}
                      aria-label="Direct Email"
                    >
                      <Mail className="w-4 h-4 text-nebula-indigo" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="cosmicOutline"
                    size="icon"
                    className="min-h-[44px] min-w-[44px] rounded-xl hover:border-emerald-500/40"
                  >
                    <a
                      href="https://wa.me/201096097617"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp Direct"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
