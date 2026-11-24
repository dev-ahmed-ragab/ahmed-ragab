"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check, ChevronDown } from "lucide-react";

export type CosmicThemeId = "deep-space" | "midnight-violet" | "abyss-cyan";

interface ThemeOption {
  id: CosmicThemeId;
  labelKey: "deepSpace" | "midnightViolet" | "abyssCyan";
  descKey: "deepSpaceDesc" | "midnightVioletDesc" | "abyssCyanDesc";
  emoji: string;
  colors: {
    bg: string;
    primary: string;
    accent: string;
  };
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "deep-space",
    labelKey: "deepSpace",
    descKey: "deepSpaceDesc",
    emoji: "🌌",
    colors: {
      bg: "#030712",
      primary: "#8b5cf6",
      accent: "#06b6d4",
    },
  },
  {
    id: "midnight-violet",
    labelKey: "midnightViolet",
    descKey: "midnightVioletDesc",
    emoji: "🔮",
    colors: {
      bg: "#0a0618",
      primary: "#a855f7",
      accent: "#ec4899",
    },
  },
  {
    id: "abyss-cyan",
    labelKey: "abyssCyan",
    descKey: "abyssCyanDesc",
    emoji: "🌊",
    colors: {
      bg: "#02101e",
      primary: "#06b6d4",
      accent: "#10b981",
    },
  },
];

interface ThemeToggleProps {
  variant?: "cycler" | "dropdown" | "mobile";
  className?: string;
  onThemeSelect?: () => void;
}

export function ThemeToggle({
  variant = "cycler",
  className = "",
  onThemeSelect,
}: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const t = useTranslations("theme");
  const locale = useLocale();
  const isArabic = locale === "ar";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const currentThemeId = (
    mounted ? theme || resolvedTheme || "deep-space" : "deep-space"
  ) as CosmicThemeId;

  const currentOption =
    THEME_OPTIONS.find((opt) => opt.id === currentThemeId) || THEME_OPTIONS[0];

  const handleSelectTheme = (themeId: CosmicThemeId) => {
    setTheme(themeId);
    setIsOpen(false);
    onThemeSelect?.();
  };

  if (!mounted) {
    return (
      <div
        className={`h-8 w-24 rounded-full border border-white/10 bg-white/5 animate-pulse ${className}`}
      />
    );
  }

  // Mobile drawer variant: full-width 3-segment switcher
  if (variant === "mobile") {
    return (
      <div className={`space-y-2.5 w-full ${className}`}>
        <div className="flex items-center justify-between px-1">
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            {t("title")}
          </span>
          <span className="text-xs text-slate-300 font-mono flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full ring-2 ring-cyan-400/80 shadow-sm"
              style={{ backgroundColor: currentOption.colors.primary }}
            />
            {currentOption.emoji} {t(currentOption.labelKey)}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {THEME_OPTIONS.map((opt) => {
            const isSelected = opt.id === currentThemeId;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelectTheme(opt.id)}
                className={`relative min-h-[56px] p-2 rounded-xl border text-center flex flex-col items-center justify-center gap-1 transition-all active:scale-95 cursor-pointer ${
                  isSelected
                    ? "border-cyan-400 bg-white/10 shadow-lg text-white ring-1 ring-cyan-400/40"
                    : "border-white/10 bg-white/5 hover:bg-white/10 text-slate-300"
                }`}
              >
                <div className="flex items-center gap-1">
                  <span
                    className={`w-2.5 h-2.5 rounded-full transition-transform ${
                      isSelected
                        ? "ring-2 ring-white ring-offset-1 ring-offset-space-950 scale-110"
                        : "opacity-80"
                    }`}
                    style={{ backgroundColor: opt.colors.primary }}
                  />
                  <span
                    className="w-2 h-2 rounded-full opacity-70"
                    style={{ backgroundColor: opt.colors.accent }}
                  />
                </div>

                <span className="text-[11px] font-semibold leading-tight text-center whitespace-normal max-w-full">
                  {t(opt.labelKey)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop / Header Variant: Sleek, high-end Theme Menu Button (No traffic light!)
  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Sleek Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="min-h-[40px] lg:min-h-0 lg:h-9 px-3 rounded-xl lg:rounded-full border border-white/15 bg-space-950/70 hover:border-cyan-400/40 text-slate-200 flex items-center gap-2 transition-all shadow-sm backdrop-blur-md cursor-pointer select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 active:scale-95"
        title={isArabic ? "تغيير المظهر الكوني" : "Select Theme"}
        aria-expanded={isOpen}
      >
        <Palette
          className="w-3.5 h-3.5 transition-transform group-hover:rotate-12 duration-200"
          style={{ color: currentOption.colors.primary }}
        />
        
        {/* Active Theme Glowing Dot */}
        <span
          className="w-2 h-2 rounded-full shrink-0 shadow-sm transition-all"
          style={{
            backgroundColor: currentOption.colors.primary,
            boxShadow: `0 0 8px ${currentOption.colors.primary}`,
          }}
        />

        <span className="text-[11px] font-mono font-bold text-white hidden md:inline truncate max-w-[80px]">
          {t(currentOption.labelKey)}
        </span>

        <ChevronDown
          className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-cyan-400" : ""
          }`}
        />
      </button>

      {/* Luxury Floating Glassmorphism Theme Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute top-full mt-2 end-0 z-50 w-64 max-w-[calc(100vw-2rem)] rounded-2xl border border-white/15 bg-[#060a18]/95 p-2 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10"
            role="menu"
          >
            <div className="px-2.5 py-1.5 mb-1 border-b border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                {t("title")}
              </span>
              <span className="text-[10px] font-mono text-cyan-400 font-semibold">
                {currentOption.emoji} Active
              </span>
            </div>

            <div className="space-y-1">
              {THEME_OPTIONS.map((opt) => {
                const isSelected = opt.id === currentThemeId;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelectTheme(opt.id)}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-start transition-all cursor-pointer group ${
                      isSelected
                        ? "bg-white/10 border border-cyan-500/30 text-white"
                        : "hover:bg-white/5 border border-transparent text-slate-300 hover:text-white"
                    }`}
                    role="menuitem"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Dual-color Swatch Ring */}
                      <div
                        className="w-5 h-5 rounded-lg flex items-center justify-center p-0.5 border border-white/20 shrink-0"
                        style={{ backgroundColor: opt.colors.bg }}
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: opt.colors.primary }}
                        />
                      </div>

                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold tracking-tight truncate flex items-center gap-1.5">
                          <span>{opt.emoji}</span>
                          <span>{t(opt.labelKey)}</span>
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono truncate">
                          {t(opt.descKey)}
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 ms-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ThemeToggle;
