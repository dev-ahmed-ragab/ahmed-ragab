"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Palette, Waves, ChevronDown, Check } from "lucide-react";

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

const THEME_OPTIONS: ThemeOption[] = [
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
  variant?: "dropdown" | "mobile";
  className?: string;
  onThemeSelect?: () => void;
}

export function ThemeToggle({
  variant = "dropdown",
  className = "",
  onThemeSelect,
}: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = useTranslations("theme");
  const locale = useLocale();
  const isArabic = locale === "ar";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const currentThemeId = (
    mounted ? (theme || resolvedTheme || "deep-space") : "deep-space"
  ) as CosmicThemeId;

  const currentOption =
    THEME_OPTIONS.find((opt) => opt.id === currentThemeId) || THEME_OPTIONS[0];

  const handleSelect = (id: CosmicThemeId) => {
    setTheme(id);
    setIsOpen(false);
    onThemeSelect?.();
  };

  if (!mounted) {
    if (variant === "mobile") {
      return (
        <div className={`space-y-2 ${className}`}>
          <div className="h-10 rounded-xl bg-white/5 animate-pulse" />
        </div>
      );
    }
    return (
      <div
        className={`min-h-[40px] min-w-[40px] rounded-xl border border-white/10 bg-white/5 animate-pulse ${className}`}
      />
    );
  }

  // Mobile drawer variant: full-width segmented list with preview glow dots
  if (variant === "mobile") {
    return (
      <div className={`space-y-2.5 w-full ${className}`}>
        <div className="flex items-center justify-between px-1">
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            {t("title")}
          </span>
          <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full animate-pulse shadow-sm"
              style={{ backgroundColor: currentOption.colors.primary }}
            />
            {t(currentOption.labelKey)}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {THEME_OPTIONS.map((opt) => {
            const isSelected = opt.id === currentThemeId;
            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`relative min-h-[52px] p-2 rounded-xl border text-center flex flex-col items-center justify-center gap-1.5 transition-all active:scale-95 ${
                  isSelected
                    ? "border-white/30 bg-white/10 shadow-lg"
                    : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
                }`}
                style={{
                  boxShadow: isSelected
                    ? `0 0 16px -2px ${opt.colors.primary}50`
                    : "none",
                }}
                aria-pressed={isSelected}
                aria-label={t(opt.labelKey)}
              >
                {/* Glowing preview dual dots */}
                <div className="flex items-center gap-1">
                  <span
                    className="w-2.5 h-2.5 rounded-full ring-2 ring-white/10"
                    style={{ backgroundColor: opt.colors.primary }}
                  />
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: opt.colors.accent }}
                  />
                </div>

                <span
                  className={`text-[11px] font-semibold tracking-tight truncate max-w-full ${
                    isSelected ? "text-white" : "text-slate-300"
                  }`}
                >
                  {t(opt.labelKey)}
                </span>

                {isSelected && (
                  <motion.div
                    layoutId="activeThemePillMobile"
                    className="absolute inset-0 rounded-xl border-2 pointer-events-none"
                    style={{ borderColor: opt.colors.primary }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop variant: compact glass button + dropdown with preview dots
  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="min-h-[40px] px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 flex items-center gap-2 text-xs font-semibold text-slate-200 transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-nebula-violet"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={`${t("title")}: ${t(currentOption.labelKey)}`}
        title={t("title")}
      >
        {/* Glow dot indicator */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: currentOption.colors.primary }}
          />
          <span
            className="relative inline-flex rounded-full h-2.5 w-2.5 ring-1 ring-white/20"
            style={{ backgroundColor: currentOption.colors.primary }}
          />
        </span>

        {/* Theme Title */}
        <span className="hidden xl:inline text-xs font-medium">
          {t(currentOption.labelKey)}
        </span>

        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className={`absolute top-full mt-2 w-56 rounded-2xl p-2 glass-panel shadow-2xl border border-white/15 z-50 backdrop-blur-2xl ${
              isArabic ? "start-0" : "end-0"
            }`}
            style={{ backgroundColor: "rgba(10, 14, 28, 0.92)" }}
            role="menu"
            aria-orientation="vertical"
          >
            <div className="px-2.5 py-1.5 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider border-b border-white/10 mb-1">
              {t("title")}
            </div>

            <div className="space-y-1">
              {THEME_OPTIONS.map((opt) => {
                const isSelected = opt.id === currentThemeId;
                const IconComponent = opt.icon;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    className={`w-full px-2.5 py-2 rounded-xl flex items-center justify-between text-start text-xs transition-all ${
                      isSelected
                        ? "bg-white/15 text-white font-bold shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                    role="menuitem"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Dual preview color dots */}
                      <div className="flex items-center gap-1 shrink-0">
                        <span
                          className="w-3 h-3 rounded-full ring-1 ring-white/20 shadow-sm"
                          style={{
                            backgroundColor: opt.colors.primary,
                            boxShadow: isSelected
                              ? `0 0 8px ${opt.colors.primary}`
                              : "none",
                          }}
                        />
                        <span
                          className="w-2 h-2 rounded-full opacity-80"
                          style={{ backgroundColor: opt.colors.accent }}
                        />
                      </div>

                      <div className="truncate">
                        <div className="text-xs font-semibold leading-tight truncate">
                          {t(opt.labelKey)}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono truncate">
                          {t(opt.descKey)}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <Check
                        className="w-4 h-4 shrink-0 ms-2"
                        style={{ color: opt.colors.primary }}
                      />
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
