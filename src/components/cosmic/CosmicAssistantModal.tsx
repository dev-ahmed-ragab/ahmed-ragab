"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Send,
  X,
  RefreshCw,
  Terminal as TerminalIcon,
  ExternalLink,
  Download,
  Mail,
  User,
  CornerDownLeft,
  Bot,
  Zap,
  Radio,
  ChevronRight,
} from "lucide-react";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/config/site";

// =========================================================================
// 1. Suheil Companion Drone / Orb SVG Component
// =========================================================================
interface CompanionDroneProps {
  size?: number;
  className?: string;
  isScanning?: boolean;
}

export function CompanionDrone({
  size = 46,
  className = "",
  isScanning = false,
}: CompanionDroneProps) {
  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Cyan Glow Filter */}
          <filter id="drone-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Radial Metallic Hull Gradient */}
          <radialGradient
            id="drone-shell-grad"
            cx="38%"
            cy="36%"
            r="65%"
            fx="38%"
            fy="36%"
          >
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="60%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>

          {/* Optical Iris Lens Gradient */}
          <radialGradient
            id="drone-iris-grad"
            cx="45%"
            cy="45%"
            r="55%"
            fx="45%"
            fy="45%"
          >
            <stop offset="0%" stopColor="#cffafe" />
            <stop offset="35%" stopColor="#22d3ee" />
            <stop offset="75%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#164e63" />
          </radialGradient>
        </defs>

        {/* 1. Outer Orbital Gyro Ring with Tick Satellites */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: isScanning ? 4 : 16,
            ease: "linear",
          }}
          style={{ transformOrigin: "50px 50px" }}
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="1.2"
            strokeDasharray="6 8"
            strokeOpacity="0.45"
          />
          {/* Orbital Nodes */}
          <circle cx="94" cy="50" r="2.8" fill="#38bdf8" filter="url(#drone-glow)" />
          <circle cx="6" cy="50" r="2.8" fill="#38bdf8" filter="url(#drone-glow)" />
        </motion.g>

        {/* 2. Middle Counter-Rotating Elliptic Ring */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: isScanning ? 5 : 20,
            ease: "linear",
          }}
          style={{ transformOrigin: "50px 50px" }}
        >
          <ellipse
            cx="50"
            cy="50"
            rx="36"
            ry="16"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1"
            strokeDasharray="3 5"
            strokeOpacity="0.4"
          />
        </motion.g>

        {/* 3. Top Sensor Probe / Antenna */}
        <path
          d="M 50 25 L 50 13"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
        <motion.circle
          cx="50"
          cy="11"
          r="2.5"
          fill="#38bdf8"
          filter="url(#drone-glow)"
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.25, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: isScanning ? 0.6 : 1.4,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "50px 11px" }}
        />

        {/* 4. Bottom Ion Micro-Thruster Plasma Stream */}
        <motion.path
          d="M 44 73 L 50 86 L 56 73 Z"
          fill="#06b6d4"
          filter="url(#drone-glow)"
          animate={{
            opacity: [0.35, 0.85, 0.35],
            scaleY: [0.85, 1.35, 0.85],
          }}
          style={{ transformOrigin: "50px 73px" }}
          transition={{
            repeat: Infinity,
            duration: isScanning ? 0.5 : 1.6,
            ease: "easeInOut",
          }}
        />

        {/* 5. Main Spherical Drone Chassis */}
        <circle
          cx="50"
          cy="50"
          r="24"
          fill="url(#drone-shell-grad)"
          stroke="#06b6d4"
          strokeWidth="1.5"
          strokeOpacity="0.75"
        />

        {/* Micro-seam panel details */}
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="0.6"
          strokeOpacity="0.25"
          strokeDasharray="8 4"
        />

        {/* 6. Central Optical Eye (Suheil's Cybernetic Core) */}
        <circle
          cx="50"
          cy="50"
          r="14"
          fill="#020617"
          stroke="#22d3ee"
          strokeWidth="1.2"
        />

        <circle
          cx="50"
          cy="50"
          r="10.5"
          fill="url(#drone-iris-grad)"
          filter="url(#drone-glow)"
        />

        {/* Crosshair reticle ticks */}
        <path
          d="M 50 38 L 50 41 M 50 59 L 50 62 M 38 50 L 41 50 M 59 50 L 62 50"
          stroke="#cffafe"
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />

        {/* Pulsing Core Pupil */}
        <motion.circle
          cx="50"
          cy="50"
          r="4"
          fill="#ffffff"
          animate={{
            r: isScanning ? [3.5, 6, 3.5] : [3, 4.5, 3],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            repeat: Infinity,
            duration: isScanning ? 0.7 : 2,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

// =========================================================================
// 2. Chat Message Interface
// =========================================================================
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

// =========================================================================
// 3. Main CosmicAssistantModal Component
// =========================================================================
export function CosmicAssistantModal() {
  const locale = useLocale() as "en" | "ar";
  const isAr = locale === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const [cliMode, setCliMode] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasPromptPing, setHasPromptPing] = useState(false);
  const [pingDismissed, setPingDismissed] = useState(false);

  const initialGreeting = isAr
    ? "مرحباً بك! أنا «سُهيل»، المساعد المداري الذكي لبورتفوليو أحمد رجب. يسعدني الإجابة على أي استفسار يخص معمارية منصة إقرأ (Iqraa SaaS)، مشاريعه الإنتاجية، مهاراته في هندسة الأنظمة والواجهات، أو مدى جاهزيته للتعاقد وعروض التوظيف عن بُعد."
    : "Greetings! I am Suheil, Ahmed Ragab's cosmic intelligence guide. Ask me anything regarding his production architectures, EdTech SaaS (Iqraa), full-stack capabilities, or availability for high-impact remote engineering roles.";

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: initialGreeting,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Friendly idle ping notification
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !pingDismissed) {
        setHasPromptPing(true);
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, [isOpen, pingDismissed]);

  const suggestedPrompts = isAr
    ? [
        { label: "🟢 هل أحمد متاح للعمل عن بُعد؟", text: "هل أحمد متاح حالياً للتعاقدات أو عروض التوظيف عن بعد؟" },
        { label: "🚀 ما هي معمارية إقرأ؟", text: "ما هي منصة إقرأ وما الدور الهندسي والمعماري الذي قام به أحمد فيها؟" },
        { label: "⚡ ما هو التك ستوك الأساسي؟", text: "ما هي التقنيات الأساسية التي يتقنها أحمد في الواجهات الأمامية والأنظمة؟" },
        { label: "⚙️ ميزة مهندس الميكاترونكس؟", text: "كيف تنعكس دراسة هندسة الميكاترونكس على عقلية وجودة كتابة الكود لدى أحمد؟" },
        { label: "🏛️ هل يتقن WordPress؟", text: "ما مدى خبرة أحمد في بناء قوالب وأنظمة WordPress المخصصة؟" },
      ]
    : [
        { label: "🟢 Is Ahmed available for hire?", text: "Is Ahmed currently available for remote engineering contracts or full-time roles?" },
        { label: "🚀 What is Iqraa SaaS?", text: "Tell me about Iqraa Platform and Ahmed's architectural role." },
        { label: "⚡ Core Tech Stack?", text: "What technologies and architectures does Ahmed specialize in?" },
        { label: "⚙️ Mechatronics Advantage?", text: "How does Ahmed's Mechatronics Engineering background elevate his software engineering?" },
        { label: "🏛️ WordPress Capabilities?", text: "What experience does Ahmed have with custom WordPress development?" },
      ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setHasPromptPing(false);
      scrollToBottom();
      const focusTimer = setTimeout(() => inputRef.current?.focus(), 160);
      return () => clearTimeout(focusTimer);
    }
  }, [isOpen, messages]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const sendMessage = async (userText: string) => {
    const trimmed = userText.trim();
    if (!trimmed || loading) return;

    // CLI mode command intercept
    if (cliMode) {
      const lower = trimmed.toLowerCase();
      if (lower === "clear" || lower === "cls") {
        setMessages([]);
        setInput("");
        return;
      }
      if (lower === "help") {
        setMessages((prev) => [
          ...prev,
          { id: Date.now().toString(), role: "user", content: trimmed },
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: isAr
              ? `أوامر التيرمينال المتاحة:
- projects : ملخص المشاريع والأنظمة
- skills   : التقنيات والمحركات الأساسية
- contact  : قنوات التواصل المباشرة
- cv       : رابط تحميل السيرة الذاتية
- clear    : مسح الشاشة
أو اكتب أي سؤال طبيعي بالعربية أو الإنجليزية!`
              : `Available Terminal CLI Commands:
- projects : Summary of flagship production systems
- skills   : Breakdown of core languages and frameworks
- contact  : Direct transmission channels
- cv       : Official Curriculum Vitae direct link
- clear    : Clear screen
Or ask any natural question in English or Arabic!`,
          },
        ]);
        setInput("");
        return;
      }
    }

    const newMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setLoading(true);

    try {
      const history = [...messages, newMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json();
      if (res.ok && data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: data.reply,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: isAr
              ? "عذراً، حدث ضغط مؤقت في الاتصال المداري. يمكنك إعادة السؤال أو مراسلة أحمد مباشرة عبر: ahmedragab.pro@outlook.com"
              : "Apologies, temporary network traffic spike. Please ask again or contact Ahmed directly at ahmedragab.pro@outlook.com",
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: isAr
            ? "تعذر الاتصال بالخادم. يرجى التأكد من اتصال الإنترنت والمحاولة مجدداً."
            : "Network error. Please verify your connection and retry.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: "reset",
        role: "assistant",
        content: isAr
          ? "تمت إعادة تشغيل الجلسة بنجاح. ما الذي تود استكشافه عن أعمال وخبرات أحمد رجب؟"
          : "Session reset. How can I assist your review of Ahmed's portfolio?",
      },
    ]);
  };

  // Generative UI Action Pills based on message keywords
  const renderActionCards = (text: string) => {
    const lower = text.toLowerCase();
    const hasIqraa = lower.includes("iqraa") || text.includes("إقرأ");
    const hasCv = lower.includes("cv") || lower.includes("resume") || text.includes("سيرة");
    const hasContact =
      lower.includes("contact") ||
      lower.includes("email") ||
      text.includes("تواصل") ||
      text.includes("توظيف") ||
      text.includes("تعاقد");
    const hasProHealth = lower.includes("prohealth") || text.includes("برو هيلث");

    if (!hasIqraa && !hasCv && !hasContact && !hasProHealth) return null;

    return (
      <div className="flex flex-wrap items-center gap-1.5 pt-2.5 mt-2.5 border-t border-cyan-500/15">
        {hasIqraa && (
          <a
            href="https://iqraa.live"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 text-[11px] font-mono text-cyan-200 shadow-sm shadow-cyan-950/50 hover:border-cyan-400 transition-all"
          >
            <Zap className="w-3 h-3 text-cyan-400" />
            <span>{isAr ? "استكشف منصة إقرأ (Live)" : "Launch Iqraa.live"}</span>
            <ExternalLink className="w-3 h-3 text-cyan-400/80" />
          </a>
        )}

        {hasCv && (
          <a
            href={siteConfig.links.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/40 text-[11px] font-mono text-purple-200 shadow-sm shadow-purple-950/50 hover:border-purple-400 transition-all"
          >
            <Download className="w-3 h-3 text-purple-400" />
            <span>{isAr ? "تحميل السيرة الذاتية (CV)" : "Download Official CV"}</span>
          </a>
        )}

        {hasProHealth && (
          <a
            href="https://github.com/dev-ahmed-ragab/ProHealth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-850 hover:bg-space-800 border border-white/20 text-[11px] font-mono text-slate-200 hover:text-white transition-all"
          >
            <GitHubIcon className="w-3 h-3 text-slate-300" />
            <span>{isAr ? "كود ProHealth على GitHub" : "ProHealth Open-Source"}</span>
          </a>
        )}

        {hasContact && (
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-[11px] font-mono text-emerald-200 shadow-sm shadow-emerald-950/50 hover:border-emerald-400 transition-all"
          >
            <Mail className="w-3 h-3 text-emerald-400" />
            <span>{isAr ? "إرسال رسالة مباشرة لأحمد" : "Direct Transmission to Ahmed"}</span>
          </a>
        )}
      </div>
    );
  };

  return (
    <>
      {/* =====================================================================
          1. FLOATING COMPANION DRONE / ORB TRIGGER (Bottom Corner)
          ===================================================================== */}
      <div className="fixed bottom-4 end-4 sm:bottom-6 sm:end-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
        {/* Subtle Welcome Ping Speech Bubble (Idle Transmission) */}
        <AnimatePresence>
          {hasPromptPing && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.94 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="pointer-events-auto relative max-w-[270px] sm:max-w-xs p-3 rounded-2xl bg-space-950/95 border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 backdrop-blur-xl mb-1 text-start"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span className="text-[11px] font-mono font-bold text-cyan-300">
                    {isAr ? "إشارة من سُهيل" : "Suheil Transmission"}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setHasPromptPing(false);
                    setPingDismissed(true);
                  }}
                  className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Dismiss ping"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>

              <p className="text-[11px] text-slate-300 leading-relaxed font-sans mb-2">
                {isAr
                  ? "اسألني عن معمارية منصة إقرأ، مهارات أحمد البرمجية، أو مدى جاهزيته للعمل عن بُعد!"
                  : "Ask me about Ahmed's system architectures, Iqraa SaaS, or remote contract availability!"}
              </p>

              <button
                onClick={() => {
                  setHasPromptPing(false);
                  setIsOpen(true);
                }}
                className="w-full py-1 px-2.5 rounded-lg bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/30 text-[10px] font-mono text-cyan-200 hover:text-white flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>{isAr ? "بدء المحادثة" : "Initiate Uplink"}</span>
                <ChevronRight className="w-3 h-3 text-cyan-400" />
              </button>

              {/* Triangle pointer to the drone */}
              <div className="absolute -bottom-1.5 end-8 w-3 h-3 bg-space-950 border-b border-e border-cyan-500/40 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Levitating Drone & Capsule Unit */}
        <motion.div
          className="pointer-events-auto relative group flex items-center"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Radial Glowing Pulse Waves Emanating from Suheil */}
          <span className="absolute -inset-2 rounded-full border border-cyan-400/40 animate-ping opacity-30 pointer-events-none" />
          <motion.span
            className="absolute -inset-3 rounded-full border border-cyan-300/20 pointer-events-none"
            animate={{
              scale: [1, 1.45, 1],
              opacity: [0.25, 0.65, 0.25],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Trigger Button with Companion Drone */}
          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-3 px-3 py-2 sm:ps-3 sm:pe-4.5 sm:py-2.5 min-h-[50px] rounded-full bg-space-950/90 hover:bg-space-900 border border-cyan-500/50 hover:border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] backdrop-blur-2xl transition-all cursor-pointer group"
            aria-label="Open Suheil AI Celestial Assistant"
          >
            {/* Soft Ambient Aurora Backdrop */}
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 opacity-50 blur-sm group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Suheil Vector Companion Drone */}
            <div className="relative shrink-0 flex items-center justify-center">
              <CompanionDrone size={38} isScanning={loading} />
            </div>

            {/* Drone HUD Metadata Capsule (Hidden on small screens, expands nicely) */}
            <div className="relative flex flex-col text-start">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono font-bold text-white tracking-wide leading-none group-hover:text-cyan-300 transition-colors">
                  {isAr ? "سُهيل" : "Suheil AI"}
                </span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
                </span>
              </div>
              <span className="text-[9px] font-mono text-cyan-400/80 leading-none mt-1 hidden sm:inline">
                {isAr ? "المساعد المداري" : "Celestial Guide"}
              </span>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* =====================================================================
          2. FLOATING COSMIC ASSISTANT MODAL (High-Fidelity Dialogue Interface)
          ===================================================================== */}
      <AnimatePresence>
        {isOpen && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsOpen(false);
              }
            }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-space-950/80 backdrop-blur-xl transition-all"
          >
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 28,
              }}
              className="w-full sm:max-w-2xl h-[88vh] sm:h-[630px] max-h-[92vh] flex flex-col rounded-t-3xl sm:rounded-2xl bg-space-950/95 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden relative"
            >
              {/* Mobile Drawer Pull Indicator */}
              <div className="sm:hidden w-12 h-1 bg-white/20 rounded-full mx-auto my-2.5 shrink-0" />

              {/* ----------------- Modal Header ----------------- */}
              <div className="px-4 py-3.5 sm:px-5 sm:py-4 border-b border-cyan-500/20 flex items-center justify-between bg-space-900/80 backdrop-blur-md relative z-10">
                <div className="flex items-center gap-3">
                  {/* Active Drone Avatar in Header */}
                  <div className="relative w-10 h-10 rounded-xl bg-space-950 border border-cyan-500/40 flex items-center justify-center shadow-inner shadow-cyan-950 shrink-0">
                    <CompanionDrone size={32} isScanning={loading} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-white font-mono tracking-wide">
                        {isAr ? "سُهيل // المساعد المداري" : "Suheil // Celestial Intelligence"}
                      </h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        Gemini Core
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {isAr
                        ? "دليلك لاستكشاف معمارية ومشاريع وجاهزية أحمد رجب"
                        : "Grounded in Ahmed Ragab's production architectures"}
                    </p>
                  </div>
                </div>

                {/* Header Control Buttons */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleReset}
                    className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                    title={isAr ? "إعادة ضبط الجلسة" : "Reset session"}
                    aria-label={isAr ? "إعادة ضبط الجلسة" : "Reset session"}
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                    title={isAr ? "إغلاق" : "Close"}
                    aria-label={isAr ? "إغلاق" : "Close"}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* ----------------- Message Scroll Area ----------------- */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex gap-3 ${
                      m.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {m.role === "assistant" && (
                      <div className="w-7 h-7 rounded-lg bg-space-900 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5 shadow-sm">
                        <Bot className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-4 leading-relaxed whitespace-pre-wrap ${
                        m.role === "user"
                          ? "bg-gradient-to-r from-cyan-950/70 via-indigo-950/80 to-purple-950/80 border border-cyan-500/30 text-white shadow-md shadow-cyan-950/20"
                          : "bg-space-900/80 border border-white/10 text-slate-100 shadow-sm"
                      }`}
                    >
                      {cliMode && (
                        <div className="text-[10px] text-cyan-400 font-mono mb-1.5 opacity-80">
                          {m.role === "user" ? "> visitor:~$ " : "> suheil:~$ "}
                        </div>
                      )}

                      <div className="font-sans text-slate-200 leading-relaxed text-[12.5px]">
                        {m.content}
                      </div>

                      {/* Generative UI Action Pills when relevant */}
                      {m.role === "assistant" && renderActionCards(m.content)}
                    </div>

                    {m.role === "user" && (
                      <div className="w-7 h-7 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Live Synthesizing / Loading Indicator */}
                {loading && (
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="w-7 h-7 rounded-lg bg-space-900 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0">
                      <CompanionDrone size={20} isScanning={true} />
                    </div>
                    <div className="p-3 rounded-2xl bg-space-900/80 border border-cyan-500/20 flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span className="text-xs font-mono text-cyan-200">
                        {isAr
                          ? "«سُهيل» يحلل مسار البيانات..."
                          : "Suheil synthesizing orbital transmission..."}
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* ----------------- Suggested Quick Prompt Pills ----------------- */}
              {messages.length <= 3 && !loading && (
                <div className="px-4 py-2 bg-space-900/60 border-t border-white/5 flex items-center gap-2 overflow-x-auto scrollbar-none">
                  <span className="text-[10px] font-mono text-cyan-400 shrink-0 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {isAr ? "مقترحات:" : "Suggestions:"}
                  </span>
                  {suggestedPrompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => sendMessage(p.text)}
                      className="px-2.5 py-1 rounded-full bg-space-950/80 hover:bg-cyan-950 border border-cyan-500/20 hover:border-cyan-400/50 text-[11px] text-slate-300 hover:text-white transition-all whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              )}

              {/* ----------------- Bottom Input Area & CLI Mode ----------------- */}
              <div className="p-3 sm:p-4 border-t border-cyan-500/20 bg-space-900/90 backdrop-blur-md space-y-2">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage(input);
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="relative flex-1 flex items-center">
                    {cliMode && (
                      <span className="ps-3 text-[11px] font-mono text-cyan-400 shrink-0">
                        &gt;_
                      </span>
                    )}

                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={
                        cliMode
                          ? "Type 'help' or command (e.g. projects, skills, cv)..."
                          : isAr
                          ? "اسأل سُهيل أي شيء عن مشاريع أحمد أو جاهزيته للعمل..."
                          : "Ask Suheil anything regarding Ahmed's portfolio or hire availability..."
                      }
                      className="w-full min-h-[46px] ps-4 pe-11 py-2.5 rounded-xl border border-cyan-500/30 bg-space-950/80 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all font-sans"
                    />

                    <button
                      type="submit"
                      disabled={loading || !input.trim()}
                      className="absolute end-1.5 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 disabled:opacity-25 disabled:pointer-events-none text-white transition-all shadow-md shadow-cyan-950"
                      title={isAr ? "إرسال (Enter)" : "Send (Enter)"}
                      aria-label={isAr ? "إرسال" : "Send"}
                    >
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>

                {/* Footer Status & Discrete CLI Terminal Switcher */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-0.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                    {isAr ? "نجم سُهيل الملاحي // نشط" : "Suheil Navigational Uplink // Active"}
                  </span>

                  <button
                    onClick={() => setCliMode(!cliMode)}
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <TerminalIcon className="w-3 h-3 text-cyan-400/70" />
                    <span>{cliMode ? "Exit CLI / المحادثة العادية" : "Terminal CLI mode"}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
