"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Palette, Waves, RefreshCw } from "lucide-react";

export type CosmicThemeId = "deep-space" | "midnight-violet" | "abyss-cyan";

interface ThemeOption {
  id: CosmicThemeId;
  labelKey: "deepSpace" | "midnightViolet" | "abyssCyan";
  descKey: "deepSpaceDesc" | "midnightVioletDesc" | "abyssCyanDesc";
  emoji: string;
  icon: typeof Sparkles;
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
    icon: Sparkles,
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
    icon: Palette,
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
    icon: Waves,
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
  const [rotation, setRotation] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const t = useTranslations("theme");
  const locale = useLocale();
  const isArabic = locale === "ar";

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentThemeId = (
    mounted ? theme || resolvedTheme || "deep-space" : "deep-space"
  ) as CosmicThemeId;

  const currentIndex = THEME_OPTIONS.findIndex((opt) => opt.id === currentThemeId);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const currentOption = THEME_OPTIONS[safeIndex];

  // 1-Click Cycle Handler: deep-space -> midnight-violet -> abyss-cyan -> deep-space
  const handleCycleTheme = () => {
    const nextIndex = (safeIndex + 1) % THEME_OPTIONS.length;
    const nextOption = THEME_OPTIONS[nextIndex];
    setTheme(nextOption.id);
    setRotation((prev) => prev + 120);

    // Show floating feedback micro-toast
    const feedbackText = `${nextOption.emoji} ${t(nextOption.labelKey)}`;
    setToastMessage(feedbackText);

    // Auto-dismiss after 1.4s
    setTimeout(() => {
      setToastMessage(null);
    }, 1400);

    onThemeSelect?.();
  };

  if (!mounted) {
    if (variant === "mobile") {
      return (
        <div className={`space-y-2 ${className}`}>
          <div className="h-12 rounded-xl bg-white/5 animate-pulse" />
        </div>
      );
    }
    return (
      <div
        className={`min-h-[40px] w-28 rounded-xl border border-white/10 bg-white/5 animate-pulse ${className}`}
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
              className="w-2 h-2 rounded-full shadow-sm"
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
                onClick={() => {
                  setTheme(opt.id);
                  onThemeSelect?.();
                }}
                className={`relative min-h-[50px] p-2 rounded-xl border text-center flex flex-col items-center justify-center gap-1 transition-all active:scale-95 ${
                  isSelected
                    ? "border-cyan-400/40 bg-white/10 shadow-lg text-white"
                    : "border-white/10 bg-white/5 hover:bg-white/10 text-slate-300"
                }`}
                style={{
                  boxShadow: isSelected
                    ? `0 0 16px -2px ${opt.colors.primary}50`
                    : "none",
                }}
                aria-pressed={isSelected}
                aria-label={t(opt.labelKey)}
              >
                <div className="flex items-center gap-1">
                  <span
                    className="w-2.5 h-2.5 rounded-full ring-1 ring-white/20"
                    style={{ backgroundColor: opt.colors.primary }}
                  />
                  <span
                    className="w-2 h-2 rounded-full opacity-80"
                    style={{ backgroundColor: opt.colors.accent }}
                  />
                </div>

                <span className="text-[11px] font-semibold tracking-tight truncate max-w-full">
                  {t(opt.labelKey)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop variant: Tactile 1-Click Cosmic Cycler Capsule (No Clunky Dropdown!)
  const IconComponent = currentOption.icon;

  return (
    <div className={`relative ${className}`}>
      {/* 1-Click Cycler Button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.94 }}
        onClick={handleCycleTheme}
        className="min-h-[40px] px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-cyan-400/35 flex items-center gap-2.5 text-xs font-semibold text-slate-200 transition-all shadow-sm backdrop-blur-md cursor-pointer select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        aria-label={`${t("title")}: ${t(currentOption.labelKey)}. Click to cycle next cosmic theme.`}
        title={isArabic ? "انقر للتبديل السريع بين ألوان الفضاء" : "Click to cycle cosmic theme"}
      >
        {/* Animated Glowing Dual Orb */}
        <span className="relative flex h-3 w-3 shrink-0 items-center justify-center">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
            style={{ backgroundColor: currentOption.colors.primary }}
          />
          <span
            className="relative inline-flex rounded-full h-2.5 w-2.5 ring-1 ring-white/20 shadow-sm transition-colors duration-300"
            style={{ backgroundColor: currentOption.colors.primary }}
          />
        </span>

        {/* Current Theme Name with smooth color transition */}
        <span className="text-xs font-medium tracking-tight text-slate-200 group-hover:text-white transition-colors">
          {t(currentOption.labelKey)}
        </span>

        {/* Rotating Icon Feedback */}
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="shrink-0 text-slate-400 group-hover:text-cyan-300 transition-colors"
        >
          <IconComponent className="w-3.5 h-3.5" />
        </motion.div>
      </motion.button>

      {/* Floating Micro-Toast Feedback on Theme Change */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.92 }}
            transition={{ duration: 0.16 }}
            className={`absolute top-full mt-2 ${
              isArabic ? "start-0" : "end-0"
            } z-50 pointer-events-none whitespace-nowrap px-3 py-1.5 rounded-xl border border-cyan-400/35 bg-[#060a14]/95 text-cyan-200 text-xs font-mono font-bold shadow-xl backdrop-blur-xl flex items-center gap-1.5`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ThemeToggle;
