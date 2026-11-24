"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Share2,
  Check,
  Download,
} from "lucide-react";
import { GitHubIcon } from "@/components/ui/BrandIcons";

export interface DetailSubNavProps {
  backHref: string;
  backLabel: {
    en: string;
    ar: string;
  };
  liveDemoUrl?: string;
  liveDemoLabel?: {
    en: string;
    ar: string;
  };
  githubUrl?: string;
  cvUrl?: string;
  customAction?: {
    label: { en: string; ar: string };
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
    external?: boolean;
  };
}

export function DetailSubNav({
  backHref,
  backLabel,
  liveDemoUrl,
  liveDemoLabel,
  githubUrl,
  cvUrl,
  customAction,
}: DetailSubNavProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handleCopyUrl = async () => {
    if (typeof window !== "undefined") {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedUrl(true);
        setTimeout(() => setCopiedUrl(false), 2000);
      } catch {
        setCopiedUrl(false);
      }
    }
  };

  const BackArrow = isArabic ? ArrowRight : ArrowLeft;

  return (
    <header className="sticky top-14 sm:top-16 z-40 bg-space-950/90 border-b border-white/10 backdrop-blur-xl px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 shadow-md shadow-black/40 transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Back Link */}
        <Link
          href={backHref as any}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-cyan-300 transition-colors group px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 shrink-0 cursor-pointer active:scale-95"
        >
          <BackArrow className="w-4 h-4 text-cyan-400 group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5 transition-transform" />
          <span>{backLabel[isArabic ? "ar" : "en"]}</span>
        </Link>

        {/* Center: Open & Empty (Clean breathing room as requested) */}
        <div className="flex-1" />

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Share / Copy URL */}
          <button
            type="button"
            onClick={handleCopyUrl}
            title={isArabic ? "نسخ رابط الصفحة" : "Copy Page Link"}
            className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 active:scale-95"
          >
            {copiedUrl ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Share2 className="w-4 h-4 text-slate-300" />
            )}
          </button>

          {/* GitHub Repository */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Repository"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-all shrink-0 cursor-pointer active:scale-95"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}

          {/* Download CV */}
          {cvUrl && (
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-all shrink-0 cursor-pointer active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isArabic ? "تحميل CV" : "Download CV"}</span>
            </a>
          )}

          {/* Custom Action (e.g. University Portal, etc.) */}
          {customAction && (
            <a
              href={customAction.href}
              target={customAction.external ? "_blank" : undefined}
              rel={customAction.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-cyan-500/30 bg-cyan-950/30 hover:bg-cyan-950/60 text-cyan-200 hover:text-white text-xs font-semibold transition-all shrink-0 cursor-pointer active:scale-95"
            >
              <span>{customAction.label[isArabic ? "ar" : "en"]}</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          )}

          {/* Primary Action: Live Demo / Platform */}
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-md shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              <span>
                {liveDemoLabel
                  ? liveDemoLabel[isArabic ? "ar" : "en"]
                  : isArabic
                  ? "زيارة الموقع"
                  : "Live Demo"}
              </span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

export default DetailSubNav;
