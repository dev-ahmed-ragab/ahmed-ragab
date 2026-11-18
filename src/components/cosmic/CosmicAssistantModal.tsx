"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Terminal as TerminalIcon,
  Send,
  X,
  Sparkles,
  RefreshCw,
  MessageSquare,
  ArrowRight,
  User,
  Cpu,
  CornerDownLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function CosmicAssistantModal() {
  const locale = useLocale() as "en" | "ar";
  const isAr = locale === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"chat" | "terminal">("chat");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: isAr
        ? "أهلاً بك! أنا «أوريون» (Orion)، المساعد الذكي لبورتفوليو أحمد رجب. يمكنك سؤالي عن مشاريعه، معمارية منصة إقرأ، مهاراته البرمجية، أو حالته للتوظيف والتعاقد عن بُعد."
        : "Greetings! I am Orion, Ahmed Ragab's Cosmic Portfolio Assistant. Ask me anything about his architecture, flagship projects (like Iqraa SaaS), tech stack, or availability for high-impact remote engineering contracts.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestedPrompts = isAr
    ? [
        { label: "🟢 هل أحمد متاح للتوظيف عن بُعد؟", text: "هل أحمد متاح حالياً للتعاقدات أو عروض التوظيف عن بعد؟ وما هي شروطه؟" },
        { label: "🚀 ما هي منصة إقرأ ودور أحمد فيها؟", text: "احكِ لي عن منصة إقرأ (Iqraa) وما الذي بناه أحمد فيها بالضبط؟" },
        { label: "⚡ ما هو التك ستوك الأساسي لأحمد؟", text: "ما هي التقنيات الأساسية التي يتقنها أحمد في الواجهات الأمامية والأنظمة السحابية؟" },
        { label: "⚙️ ما علاقة الميكاترونكس بالبرمجيات؟", text: "كيف تفيد دراسة هندسة الميكاترونكس أحمد في هندسة البرمجيات؟" },
      ]
    : [
        { label: "🟢 Is Ahmed available for remote hire?", text: "Is Ahmed currently available for remote engineering contracts or full-time roles?" },
        { label: "🚀 What is Iqraa SaaS & Ahmed's role?", text: "Tell me about Iqraa Platform and what Ahmed architected as Technical Founder." },
        { label: "⚡ What is his core tech stack?", text: "What technologies and architectures does Ahmed specialize in?" },
        { label: "⚙️ Why the Mechatronics background?", text: "How does Ahmed's Mechatronics Engineering background elevate his software engineering?" },
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

  const sendMessage = async (userText: string) => {
    const trimmed = userText.trim();
    if (!trimmed || loading) return;

    // Terminal Command Mode Intercept
    if (viewMode === "terminal") {
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
            content: `Available Cosmic CLI commands:
- projects : Summary of flagship production systems
- skills   : Breakdown of core languages and frameworks
- contact  : Direct subspace transmission details
- cv       : Official Curriculum Vitae direct link
- clear    : Reset terminal screen
- or ask any natural question in English or Arabic!`,
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
              ? "عذراً، حدث خطأ مؤقت في الاتصال بالنموذج. يمكنك تكرار السؤال أو مراسلة أحمد مباشرة عبر: ahmedragab.pro@outlook.com"
              : "Apologies, the assistant encountered a temporary connectivity spike. Please ask again or contact Ahmed directly at ahmedragab.pro@outlook.com",
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
            ? "تعذر إرسال الرسالة. يرجى التأكد من اتصال الإنترنت."
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
          ? "تمت إعادة تشغيل الجلسة بنجاح. ما الذي تود معرفته عن أعمال أحمد وخبراته؟"
          : "Session reset. How can I assist your review of Ahmed's engineering portfolio?",
      },
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right / Bottom-Left in RTL) */}
      <div className="fixed bottom-6 end-6 z-40 flex items-center gap-3">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-space-950/90 hover:bg-space-900 border border-nebula-cyan/40 hover:border-nebula-cyan shadow-xl shadow-nebula-cyan/20 backdrop-blur-xl transition-all cursor-pointer"
          aria-label="Open Cosmic AI Assistant"
        >
          {/* Animated glow aura */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-nebula-cyan to-nebula-violet opacity-40 blur-sm group-hover:opacity-75 transition-opacity pointer-events-none" />

          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nebula-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-nebula-cyan" />
          </span>

          <Bot className="w-5 h-5 text-nebula-cyan relative" />

          <span className="relative text-xs font-mono font-bold text-white hidden sm:inline">
            {isAr ? "اسأل المساعد الذكي (AI)" : "Ask AI Assistant"}
          </span>
        </motion.button>
      </div>

      {/* Floating Modal / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="w-full sm:max-w-2xl h-[88vh] sm:h-[650px] max-h-[92vh] flex flex-col rounded-t-3xl sm:rounded-2xl bg-space-950 border border-white/15 shadow-2xl shadow-nebula-indigo/30 overflow-hidden relative"
            >
              {/* Top Atmospheric Ambient Glow */}
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-nebula-indigo/15 to-transparent pointer-events-none" />

              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between relative z-10 bg-space-900/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-nebula-cyan/15 border border-nebula-cyan/30 flex items-center justify-center text-nebula-cyan shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-white font-mono">
                        Orion // Cosmic Intelligence
                      </h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-nebula-emerald/15 text-nebula-emerald border border-nebula-emerald/30 font-mono">
                        Gemini 3.1
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {isAr
                        ? "اسأل عن مشاريع وخبرات أحمد في الويب والأنظمة"
                        : "Grounded in Ahmed's real engineering portfolio"}
                    </p>
                  </div>
                </div>

                {/* View Mode Toggle & Close */}
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center p-0.5 rounded-lg bg-white/5 border border-white/10">
                    <button
                      onClick={() => setViewMode("chat")}
                      className={`p-1.5 rounded-md text-xs font-mono transition-colors ${
                        viewMode === "chat"
                          ? "bg-nebula-indigo text-white shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                      title="Chat UI"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setViewMode("terminal")}
                      className={`p-1.5 rounded-md text-xs font-mono transition-colors ${
                        viewMode === "terminal"
                          ? "bg-nebula-cyan text-space-950 font-bold shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                      title="Terminal CLI Mode"
                    >
                      <TerminalIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={handleReset}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    title="Reset Conversation"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    title="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat / Terminal Message Area */}
              <div
                className={`flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs ${
                  viewMode === "terminal"
                    ? "font-mono bg-space-950/90 text-emerald-300"
                    : "font-sans"
                }`}
              >
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex gap-3 ${
                      m.role === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {m.role === "assistant" && (
                      <div className="w-7 h-7 rounded-lg bg-nebula-cyan/15 border border-nebula-cyan/30 flex items-center justify-center text-nebula-cyan shrink-0 mt-0.5">
                        <Cpu className="w-3.5 h-3.5" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed whitespace-pre-wrap ${
                        viewMode === "terminal"
                          ? m.role === "user"
                            ? "bg-nebula-indigo/20 border border-nebula-indigo/30 text-cyan-200"
                            : "bg-black/50 border border-emerald-500/20 text-emerald-300 font-mono"
                          : m.role === "user"
                          ? "bg-gradient-to-r from-nebula-indigo to-nebula-violet text-white shadow-md shadow-nebula-indigo/20"
                          : "bg-white/[0.04] border border-white/10 text-slate-200 shadow-sm"
                      }`}
                    >
                      {viewMode === "terminal" && (
                        <div className="text-[10px] text-slate-500 font-mono mb-1">
                          {m.role === "user" ? "> recruiter@orion:~$ " : "> orion@agent:~$ "}
                        </div>
                      )}
                      {m.content}
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
                      <Cpu className="w-3.5 h-3.5 animate-spin" />
                    </div>
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-nebula-cyan animate-ping" />
                      <span className="text-xs font-mono text-slate-300">
                        {isAr ? "أوريون يحلل البيانات..." : "Orion synthesizing response..."}
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Prompts (Pills) */}
              {messages.length <= 3 && !loading && (
                <div className="px-4 py-2 bg-space-900/40 border-t border-white/5 flex items-center gap-2 overflow-x-auto scrollbar-none">
                  <span className="text-[10px] font-mono text-slate-400 shrink-0">
                    {isAr ? "أسئلة سريعة:" : "Suggested:"}
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

              {/* Input Bar */}
              <div className="p-3 sm:p-4 border-t border-white/10 bg-space-900/80 backdrop-blur-md">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage(input);
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="relative flex-1">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={
                        viewMode === "terminal"
                          ? "Type 'help' or command..."
                          : isAr
                          ? "اكتب استفسارك هنا (عربي أو إنجليزي)..."
                          : "Ask Orion anything about Ahmed's work..."
                      }
                      className="w-full min-h-[44px] ps-4 pe-10 py-2.5 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-nebula-cyan transition-colors font-mono"
                    />
                    <button
                      type="submit"
                      disabled={loading || !input.trim()}
                      className="absolute end-1.5 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-nebula-indigo hover:bg-nebula-violet disabled:opacity-30 disabled:pointer-events-none text-white transition-all"
                      title="Send message"
                    >
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
