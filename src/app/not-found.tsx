"use client";

import Link from "next/link";
import { LottiePlayer } from "@/components/cosmic/LottiePlayer";
import { Rocket, Home, AlertCircle, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#030712] text-slate-100 flex items-center justify-center p-4 sm:p-6 overflow-x-hidden relative selection:bg-nebula-cyan selection:text-space-950">
        {/* Cosmic Ambient Nebula Glows */}
        <div className="absolute top-1/4 -start-20 w-80 h-80 sm:w-96 sm:h-96 bg-nebula-violet/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -end-20 w-80 h-80 sm:w-96 sm:h-96 bg-nebula-cyan/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-xl w-full mx-auto text-center space-y-6 relative z-10 flex flex-col items-center">
          {/* Telemetry Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-900/90 border border-nebula-violet/30 shadow-lg shadow-nebula-violet/10 text-xs font-mono text-nebula-violet">
            <AlertCircle className="w-3.5 h-3.5 text-nebula-cyan animate-pulse" />
            <span>Trajectory Anomaly // 404 Deep Space Drift</span>
          </div>

          {/* Lottie 404 Space Drifter Vector Animation */}
          <div className="relative w-full max-w-lg aspect-video rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-2xl shadow-nebula-violet/20 flex items-center justify-center p-2 group">
            <div className="absolute inset-0 bg-radial-gradient from-nebula-indigo/10 to-transparent pointer-events-none" />
            <LottiePlayer
              src="/lottie/error_edit.json"
              loop
              autoplay
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>

          {/* Bilingual Explanatory Text */}
          <div className="space-y-2 max-w-md">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Lost in Digital Orbit
            </h1>
            <div className="text-sm font-semibold text-nebula-cyan font-mono">
              تائه في الفضاء الرقمي • إحداثيات غير موجودة
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              The orbital vector you followed drifted beyond known coordinates.
              Recalibrate your navigation systems to return to base.
            </p>
          </div>

          {/* Navigation Action Buttons (Touch friendly > 44px) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-nebula-indigo to-nebula-violet hover:brightness-110 shadow-lg shadow-nebula-indigo/25 transition-all active:scale-[0.98]"
            >
              <Rocket className="w-4 h-4" />
              <span>Return to Launchpad / العودة للمدار</span>
            </Link>

            <Link
              href="/#projects"
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all active:scale-[0.98]"
            >
              <Compass className="w-4 h-4 text-nebula-cyan" />
              <span>Explore Missions / المشاريع</span>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
