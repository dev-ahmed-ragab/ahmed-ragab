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
  MessageSquare,
  ExternalLink,
  Download,
  Mail,
  User,
  Cpu,
  CornerDownLeft,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/config/site";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function CosmicAssistantModal() {
  const locale = useLocale() as "en" | "ar";
  const isAr = locale === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const [cliMode, setCliMode] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const initialGreeting = isAr
    ? "مرحباً بك! أنا «سُهيل»، المساعد الذكي لبورتفوليو أحمد رجب. يسعدني الإجابة على أي استفسار يخص مشاريعه، معمارية منصة إقرأ، مهاراته في الواجهات والأنظمة، أو مدى جاهزيته للتعاقد وعروض العمل عن بُعد."
    : "Greetings! I am Suheil, Ahmed Ragab's portfolio intelligence guide. Ask me anything regarding his production architectures, EdTech SaaS (Iqraa), full-stack capabilities, or availability for high-impact remote engineering roles.";

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: initialGreeting,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestedPrompts = isAr
    ? [
        { label: "🟢 هل أحمد متاح للعمل عن بُعد؟", text: "هل أحمد متاح حالياً للتعاقدات أو عروض التوظيف عن بعد؟" },
        { label: "🚀 ما هي منصة إقرأ؟", text: "ما هي منصة إقرأ وما الدور الهندسي الذي قام به أحمد فيها؟" },
        { label: "⚡ ما هو التك ستوك الأساسي؟", text: "ما هي التقنيات الأساسية التي يتقنها أحمد في الواجهات الأمامية والأنظمة؟" },
        { label: "🏛️ هل لديه خبرة في WordPress؟", text: "هل يتقن أحمد تطوير مواقع وقوالب WordPress المخصصة؟" },
      ]
    : [
        { label: "🟢 Is Ahmed available for hire?", text: "Is Ahmed currently available for remote engineering contracts or full-time roles?" },
        { label: "🚀 What is Iqraa SaaS?", text: "Tell me about Iqraa Platform and Ahmed's architectural role." },
        { label: "⚡ What is his tech stack?", text: "What technologies and architectures does Ahmed specialize in?" },
        { label: "🏛️ WordPress capabilities?", text: "What experience does Ahmed have with custom WordPress development?" },
      ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
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
              ? "عذراً، حدث ضغط مؤقت في الاتصال. يمكنك إعادة السؤال أو مراسلة أحمد مباشرة عبر: ahmedragab.pro@outlook.com"
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
            ? "تعذر الاتصال بالخادم. يرجى التأكد من اتصال الإنترنت."
            : "Network error. Please verify your connection.",
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
          ? "تمت إعادة تشغيل الجلسة بنجاح. ما الذي تود استكشافه عن أعمال أحمد؟"
          : "Session reset. How can I assist your review of Ahmed's portfolio?",
      },
    ]);
  };

  // Helper to render Generative UI Action Pills based on message content
  const renderActionCards = (text: string) => {
    const lower = text.toLowerCase();
    const hasIqraa = lower.includes("iqraa") || text.includes("إقرأ");
    const hasCv = lower.includes("cv") || lower.includes("resume") || text.includes("سيرة");
    const hasContact = lower.includes("contact") || lower.includes("email") || text.includes("تواصل") || text.includes("توظيف");
    const hasProHealth = lower.includes("prohealth") || text.includes("برو هيلث");

    if (!hasIqraa && !hasCv && !hasContact && !hasProHealth) return null;

    return (
      <div className="flex flex-wrap items-center gap-1.5 pt-2 mt-2 border-t border-white/10">
        {hasIqraa && (
          <a
            href="https://iqraa.live"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-nebula-cyan/15 hover:bg-nebula-cyan/25 border border-nebula-cyan/30 text-[11px] font-mono text-cyan-200 transition-colors"
          >
            <span>🚀 {isAr ? "فتح منصة إقرأ" : "Launch Iqraa.live"}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}

        {hasCv && (
          <a
            href={siteConfig.links.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-nebula-violet/15 hover:bg-nebula-violet/25 border border-nebula-violet/30 text-[11px] font-mono text-purple-200 transition-colors"
          >
            <span>📄 {isAr ? "تحميل الـ CV" : "Download CV"}</span>
            <Download className="w-3 h-3" />
          </a>
        )}

        {hasProHealth && (
          <a
            href="https://github.com/dev-ahmed-ragab/ProHealth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-[11px] font-mono text-slate-200 transition-colors"
          >
            <GitHubIcon className="w-3 h-3" />
            <span>{isAr ? "كود ProHealth" : "ProHealth Repo"}</span>
          </a>
        )}

        {hasContact && (
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 transition-colors"
          >
            <Mail className="w-3 h-3" />
            <span>{isAr ? "إرسال رسالة لأحمد" : "Contact Ahmed"}</span>
          </a>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-End) */}
      <div className="fixed bottom-6 end-6 z-40 flex items-center gap-3">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-space-950/90 hover:bg-space-900 border border-nebula-cyan/40 hover:border-nebula-cyan shadow-xl shadow-nebula-cyan/20 backdrop-blur-xl transition-all cursor-pointer"
          aria-label="Open Suheil AI Assistant"
        >
          {/* Subtle glow aura */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-nebula-cyan to-nebula-violet opacity-40 blur-sm group-hover:opacity-75 transition-opacity pointer-events-none" />

          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nebula-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-nebula-cyan" />
          </span>

          <Sparkles className="w-4 h-4 text-nebula-cyan relative" />

          <div className="relative flex flex-col text-start">
            <span className="text-xs font-mono font-bold text-white hidden sm:inline leading-none">
              {isAr ? "اسأل «سُهيل»" : "Ask Suheil AI"}
            </span>
            <span className="text-[9px] font-mono text-slate-400 hidden sm:inline mt-0.5">
              {isAr ? "المساعد الذكي" : "Celestial Guide"}
            </span>
          </div>
        </motion.button>
      </div>

      {/* Floating Modal & Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <div
            onClick={(e) => {
              // Click outside backdrop dismisses modal immediately!
              if (e.target === e.currentTarget) {
                setIsOpen(false);
              }
            }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-md transition-all"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.96 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="w-full sm:max-w-2xl h-[86vh] sm:h-[620px] max-h-[92vh] flex flex-col rounded-t-3xl sm:rounded-2xl bg-space-950 border border-white/15 shadow-2xl shadow-nebula-indigo/30 overflow-hidden relative"
            >
              {/* Mobile Pull-down indicator handle */}
              <div className="sm:hidden w-12 h-1 bg-white/20 rounded-full mx-auto my-2" />

              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-space-900/60 backdrop-blur-md relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-nebula-cyan/15 border border-nebula-cyan/30 flex items-center justify-center text-nebula-cyan shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-white font-mono">
                        {isAr ? "سُهيل // المساعد الذكي" : "Suheil // Celestial Intelligence"}
                      </h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-nebula-emerald/15 text-nebula-emerald border border-nebula-emerald/30 font-mono">
                        Gemini
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {isAr
                        ? "دليلك لاستكشاف مسار وخبرات أحمد رجب"
                        : "Grounded in Ahmed's real engineering portfolio"}
                    </p>
                  </div>
                </div>

                {/* Header Actions */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleReset}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    title={isAr ? "إعادة بدء المحادثة" : "Reset session"}
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    title={isAr ? "إغلاق" : "Close"}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat Message Scroll Area */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex gap-3 ${
                      m.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {m.role === "assistant" && (
                      <div className="w-7 h-7 rounded-lg bg-nebula-cyan/15 border border-nebula-cyan/30 flex items-center justify-center text-nebula-cyan shrink-0 mt-0.5">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-4 leading-relaxed whitespace-pre-wrap ${
                        m.role === "user"
                          ? "bg-gradient-to-r from-nebula-indigo to-nebula-violet text-white shadow-md shadow-nebula-indigo/20"
                          : "bg-space-900/60 border border-white/10 text-slate-200 shadow-sm"
                      }`}
                    >
                      {cliMode && (
                        <div className="text-[10px] text-slate-500 font-mono mb-1">
                          {m.role === "user" ? "> visitor:~$ " : "> suheil:~$ "}
                        </div>
                      )}

                      <div>{m.content}</div>

                      {/* Generative UI Action Pills when relevant */}
                      {m.role === "assistant" && renderActionCards(m.content)}
                    </div>

                    {m.role === "user" && (
                      <div className="w-7 h-7 rounded-lg bg-nebula-violet/20 border border-nebula-violet/30 flex items-center justify-center text-nebula-violet shrink-0 mt-0.5">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                ))}

                {loading && (
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="w-7 h-7 rounded-lg bg-nebula-cyan/15 border border-nebula-cyan/30 flex items-center justify-center text-nebula-cyan shrink-0">
                      <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    </div>
                    <div className="p-3 rounded-2xl bg-space-900/60 border border-white/10 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-nebula-cyan animate-ping" />
                      <span className="text-xs font-mono text-slate-300">
                        {isAr ? "«سُهيل» يحلل الاستفسار..." : "Suheil synthesizing answer..."}
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions Pills (Only when conversation is fresh) */}
              {messages.length <= 3 && !loading && (
                <div className="px-4 py-2 bg-space-900/40 border-t border-white/5 flex items-center gap-2 overflow-x-auto scrollbar-none">
                  <span className="text-[10px] font-mono text-slate-400 shrink-0">
                    {isAr ? "مقترحات:" : "Suggestions:"}
                  </span>
                  {suggestedPrompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => sendMessage(p.text)}
                      className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-nebula-cyan/40 text-[11px] text-slate-300 hover:text-white transition-all whitespace-nowrap shrink-0"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Bottom Input Area & Discrete CLI Toggle */}
              <div className="p-3 sm:p-4 border-t border-white/10 bg-space-900/80 backdrop-blur-md space-y-2">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage(input);
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="relative flex-1 flex items-center">
                    {cliMode && (
                      <span className="ps-3 text-[11px] font-mono text-nebula-cyan shrink-0">
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
                          ? "اكتب سؤالك هنا (عربي أو إنجليزي)..."
                          : "Ask Suheil anything about Ahmed's portfolio..."
                      }
                      className="w-full min-h-[46px] ps-4 pe-10 py-2.5 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-nebula-cyan transition-colors"
                    />

                    <button
                      type="submit"
                      disabled={loading || !input.trim()}
                      className="absolute end-1.5 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-nebula-indigo hover:bg-nebula-violet disabled:opacity-30 disabled:pointer-events-none text-white transition-all"
                      title={isAr ? "إرسال" : "Send"}
                    >
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>

                {/* Discreet Mode Switcher at the bottom */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                  <span>
                    {isAr ? "نجم سُهيل الملاحي" : "Suheil Navigational Guide"}
                  </span>

                  <button
                    onClick={() => setCliMode(!cliMode)}
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] text-slate-400 hover:text-nebula-cyan hover:bg-white/5 transition-colors"
                  >
                    <TerminalIcon className="w-3 h-3" />
                    <span>{cliMode ? "Exit CLI / العودة للمحادثة" : "Terminal CLI mode"}</span>
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
