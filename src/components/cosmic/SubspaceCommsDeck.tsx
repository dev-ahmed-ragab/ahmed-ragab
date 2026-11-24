"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Radio,
  Headphones,
  Sliders,
  Zap,
  ShieldCheck,
  Activity,
  Sparkles,
  Wifi,
  Volume2,
  Signal,
  CheckCircle2,
} from "lucide-react";

export interface SubspaceCommsDeckProps {
  locale?: "en" | "ar";
  className?: string;
  astronautAssetSrc?: string;
}

export interface CommsFrequencyChannel {
  id: string;
  channelCode: string;
  frequency: string;
  band: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  techEn: string;
  techAr: string;
  latency: string;
  bandwidth: string;
  signalStrength: number;
}

export const COMMS_CHANNELS: CommsFrequencyChannel[] = [
  {
    id: "contracts",
    channelCode: "CH-01",
    frequency: "1420.405 MHz",
    band: "H-Line Subspace",
    nameEn: "High-Impact Remote Contracts",
    nameAr: "عقود عن بُعد عالية التأثير",
    roleEn: "Senior Full-Stack / Frontend Lead",
    roleAr: "مهندس واجهات برمجية وتطبيقات متكاملة",
    techEn: "Next.js 15 • TypeScript • Modern React",
    techAr: "بيئات Next.js و TypeScript المتكاملة",
    latency: "11 ms",
    bandwidth: "10 Gbps Quantum Stream",
    signalStrength: 5,
  },
  {
    id: "architecture",
    channelCode: "CH-02",
    frequency: "842.180 GHz",
    band: "Deep-Space Carrier",
    nameEn: "Enterprise SaaS & System Architecture",
    nameAr: "معمارية برمجيات SaaS والأنظمة الكبرى",
    roleEn: "Distributed Systems & Cloud Engines",
    roleAr: "أنظمة متعددة المستأجرين ومحركات بيانات حية",
    techEn: "Supabase • Node.js • Multi-Tenant Postgres",
    techAr: "قواعد بيانات ومحركات سحابية فائقة التوسع",
    latency: "14 ms",
    bandwidth: "40 Gbps Neural Mesh",
    signalStrength: 5,
  },
  {
    id: "founder",
    channelCode: "CH-03",
    frequency: "5.200 THz",
    band: "Founder Subspace Beam",
    nameEn: "Technical Founder & MVP Shipping",
    nameAr: "تأسيس المنتجات التقنية وإطلاق MVP",
    roleEn: "Product Engineer & SaaS Builder",
    roleAr: "بناء وإطلاق المنتجات والشركات الناشئة",
    techEn: "MERN Stack • Microservices • AI Integration",
    techAr: "حلول MERN المتكاملة والذكاء الاصطناعي",
    latency: "8 ms",
    bandwidth: "100 Gbps Subspace Link",
    signalStrength: 5,
  },
];

export function SubspaceCommsDeck({
  locale = "ar",
  className = "",
  astronautAssetSrc = "/assets/contact-comms-receiver.webp",
}: SubspaceCommsDeckProps) {
  const isAr = locale === "ar";
  const [activeChannelId, setActiveChannelId] = useState<string>("contracts");
  const [isReceivingSignal, setIsReceivingSignal] = useState<boolean>(true);

  const selectedChannel =
    COMMS_CHANNELS.find((c) => c.id === activeChannelId) || COMMS_CHANNELS[0];

  return (
    <div
      className={`relative w-full rounded-3xl border border-white/15 bg-gradient-to-b from-space-900/90 via-space-950/95 to-[#030712] p-5 sm:p-7 shadow-2xl backdrop-blur-2xl overflow-hidden ${className}`}
    >
      {/* Background Ambient Cosmic Glows */}
      <div className="absolute -top-20 -start-20 w-60 h-60 rounded-full bg-nebula-cyan/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -end-20 w-60 h-60 rounded-full bg-nebula-violet/20 blur-3xl pointer-events-none" />

      {/* Decorative Scanline Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-40 z-10" />

      {/* Top Deck Header Bar */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-semibold">
            {isAr ? "مركز استقبال الإشارات الفضائية" : "Subspace Comms Receiver Deck"}
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <Headphones className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="text-emerald-400 font-semibold">
            {isAr ? "مستمع للإشارات • جاهز للاستقبال" : "COMMS ACTIVE • LISTENING"}
          </span>
        </div>
      </div>

      {/* Main Photographic Cinematic Display: Ahmed on Comms in Cockpit */}
      <div className="relative z-20 w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.85)] group mb-6">
        {/* Real Generated User Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={astronautAssetSrc}
          alt="Ahmed Ragab Receiving Subspace Transmission in Spaceship Cockpit"
          className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Ambient Dark Edge Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/50 via-transparent to-[#030712]/50 pointer-events-none" />

        {/* Live Audio Transmission Waveform Badge Overlay */}
        <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-[11px] font-mono text-slate-200 backdrop-blur-md bg-space-950/75 px-3 py-2 rounded-xl border border-white/10">
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-semibold text-white">
              {isAr ? selectedChannel.nameAr : selectedChannel.nameEn}
            </span>
          </div>
          {/* Animated Spectral Equalizer Bars */}
          <div className="flex items-center gap-1">
            {[4, 12, 18, 8, 16, 22, 10, 14, 6].map((h, idx) => (
              <motion.span
                key={idx}
                animate={{ height: [4, h, 6] }}
                transition={{
                  duration: 0.8 + idx * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 bg-cyan-400 rounded-full"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Channel Frequency Tuner Selector */}
      <div className="relative z-20 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Sliders className="w-3.5 h-3.5 text-nebula-cyan" />
            {isAr ? "قنوات التردد المفتوحة:" : "Open Subspace Frequencies:"}
          </span>
          <span className="text-cyan-300 font-semibold">{selectedChannel.frequency}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {COMMS_CHANNELS.map((ch) => {
            const isSelected = activeChannelId === ch.id;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => setActiveChannelId(ch.id)}
                className={`text-start p-3 rounded-2xl text-xs font-mono transition-all duration-300 border ${
                  isSelected
                    ? "bg-nebula-cyan/20 border-nebula-cyan/60 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    : "bg-space-900/60 border-white/10 text-slate-400 hover:text-white hover:border-white/25 hover:bg-space-800/60"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                  <span className="font-bold text-cyan-300">{ch.channelCode}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Signal className="w-3 h-3" />
                    {ch.latency}
                  </span>
                </div>
                <div className="font-semibold text-slate-200 line-clamp-1">
                  {isAr ? ch.nameAr : ch.nameEn}
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-1">
                  {isAr ? ch.techAr : ch.techEn}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const SubspaceAntennaRadar = SubspaceCommsDeck;
export default SubspaceCommsDeck;
