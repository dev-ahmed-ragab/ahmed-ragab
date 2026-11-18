"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { Sparkles, Terminal } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-space-950/80 backdrop-blur-md w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-nebula-indigo to-nebula-violet flex items-center justify-center text-[10px] font-bold text-white">
            AR
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {t("rights")}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
          <Terminal className="w-3.5 h-3.5 text-nebula-cyan" />
          <span>{t("builtWith")}</span>
        </div>
      </div>
    </footer>
  );
}
