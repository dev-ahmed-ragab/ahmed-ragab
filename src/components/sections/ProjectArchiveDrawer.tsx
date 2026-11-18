"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { projects } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, ExternalLink, Archive } from "lucide-react";

interface ProjectArchiveDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectArchiveDrawer({
  isOpen,
  onClose,
}: ProjectArchiveDrawerProps) {
  const t = useTranslations("archive");
  const locale = useLocale() as "en" | "ar";
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "Enterprise SaaS",
    "Full-Stack",
    "MERN Stack",
    "Frontend & Tools",
    "WordPress",
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      selectedCategory === "ALL" || p.category === selectedCategory;
    const titleMatch = p.title[locale]
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const stackMatch = p.stack.some((s) =>
      s.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return matchesCategory && (titleMatch || stackMatch);
  });

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[95vw] max-w-5xl max-h-[90vh] flex flex-col p-0 overflow-hidden bg-space-950 border border-white/15 shadow-2xl shadow-nebula-indigo/30">
        {/* Header */}
        <DialogHeader className="p-5 sm:p-6 border-b border-white/10 bg-space-900/50 text-start space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-nebula-cyan uppercase tracking-wider mb-1">
            <Archive className="w-3.5 h-3.5" />
            <span>{t("title")}</span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-white">
            {locale === "en"
              ? "Complete Engineering Archive"
              : "أرشيف الأعمال والمشاريع الكامل"}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            {t("description")}
          </DialogDescription>
        </DialogHeader>

        {/* Search & Category Filter */}
        <div className="p-4 sm:p-6 border-b border-white/10 bg-space-900/30 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute start-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full min-h-[44px] ps-9 pe-4 py-2.5 text-xs rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-nebula-violet transition-colors"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <Button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                variant={selectedCategory === cat ? "cosmic" : "outline"}
                size="sm"
                className={`font-mono text-xs min-h-[40px] sm:min-h-0 sm:h-8 px-3 ${
                  selectedCategory === cat
                    ? "shadow-md shadow-nebula-indigo/30"
                    : "border-white/5 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects List / Table */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {filteredProjects.length === 0 ? (
            <div className="py-16 text-center text-slate-500 text-sm font-mono">
              No matching projects found.
            </div>
          ) : (
            filteredProjects.map((p) => (
              <div
                key={p.id}
                className="p-4 rounded-xl border border-white/5 bg-space-900/40 hover:border-nebula-indigo/40 hover:bg-space-900/80 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="cosmicCyan" className="text-[11px] px-2 py-0.5">
                      {p.featuredYear}
                    </Badge>
                    <Badge variant="subtle" className="text-[11px] px-2 py-0.5">
                      {p.category}
                    </Badge>
                    {p.pinned && (
                      <Badge variant="cosmicAmber" className="text-[10px] px-1.5 py-0.5">
                        FLAGSHIP
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-nebula-cyan transition-colors">
                    {p.title[locale]}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {p.description[locale]}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.stack.map((stk) => (
                      <Badge
                        key={stk}
                        variant="subtle"
                        className="text-[10px] px-2 py-0.5"
                      >
                        {stk}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-2 pt-2 md:pt-0 w-full sm:w-auto shrink-0">
                  {p.links.demo && (
                    <Button
                      asChild
                      variant="cosmic"
                      size="sm"
                      className="gap-1.5 min-h-[44px] sm:min-h-0 sm:h-8 flex-1 sm:flex-initial text-xs px-3.5"
                    >
                      <a
                        href={p.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  )}
                  {p.links.github && (
                    <Button
                      asChild
                      variant="cosmicOutline"
                      size="sm"
                      className="gap-1.5 min-h-[44px] sm:min-h-0 sm:h-8 flex-1 sm:flex-initial text-xs px-3.5"
                    >
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>Code</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
