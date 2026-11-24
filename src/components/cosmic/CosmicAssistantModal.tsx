"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  RefreshCw,
  Send,
  ExternalLink,
  Sparkles,
  User,
  Bot,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

// =========================================================================
// 1. FormattedText: Parses Markdown **bold** and bullet points cleanly
// =========================================================================
function FormattedText({ text }: { text: string }) {
  const lines = useMemo(() => text.split("\n"), [text]);

  return (
    <div className="space-y-2">
      {lines.map((line, lineIdx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={lineIdx} className="h-1.5" />;
        }

        const isBullet =
          trimmed.startsWith("•") ||
          trimmed.startsWith("- ") ||
          trimmed.startsWith("* ");

        const cleanLine = isBullet
          ? trimmed.replace(/^[•\-\*]\s*/, "")
          : trimmed;

        // Parse **bold** parts cleanly without showing raw asterisks
        const parts = cleanLine.split(/(\*\*[^*]+\*\*)/g);

        const renderedContent = parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong
                key={i}
                className="font-bold text-white tracking-wide"
              >
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        });

        if (isBullet) {
          return (
            <div key={lineIdx} className="flex items-start gap-2.5 ps-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              <div className="flex-1 text-slate-200 leading-relaxed">
                {renderedContent}
              </div>
            </div>
          );
        }

        return (
          <p key={lineIdx} className="leading-relaxed text-slate-200">
            {renderedContent}
          </p>
        );
      })}
    </div>
  );
}

// =========================================================================
// 2. TypewriterMessage: Smooth progressive text flow (Never cuts off)
// =========================================================================
function TypewriterMessage({
  content,
  isStreaming = false,
}: {
  content: string;
  isStreaming?: boolean;
}) {
  const [charIndex, setCharIndex] = useState(isStreaming ? 0 : content.length);

  useEffect(() => {
    if (!isStreaming) {
      setCharIndex(content.length);
      return;
    }

    setCharIndex(0);
    let current = 0;
    const total = content.length;
    // Fast, natural streaming speed: 2-3 characters every 16ms
    const step = Math.max(2, Math.floor(total / 60));

    const interval = setInterval(() => {
      current += step;
      if (current >= total) {
        setCharIndex(total);
        clearInterval(interval);
      } else {
        setCharIndex(current);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [content, isStreaming]);

  return <FormattedText text={content.slice(0, charIndex)} />;
}

// =========================================================================
// 3. CosmicAssistantModal Component
// =========================================================================
export function CosmicAssistantModal() {
  const locale = useLocale() as "en" | "ar";
  const isAr = locale === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const initialGreeting = isAr
    ? "أهلاً بك! أنا «رائد»، المساعد الذكي للمهندس أحمد رجب.\n\nيسعدني إجابتك عن أي تفاصيل تخص خلفيته الهندسية، معمارية منصة «إقرأ»، مشاريعه التقنية، أو جاهزيته للعمل عن بُعد. تفضل بسؤالك!"
    : "Welcome! I am Raed, Ahmed Ragab's AI assistant.\n\nAsk me anything about his engineering background, the architecture of Iqraa SaaS, his core tech stack, or remote hiring availability!";

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: initialGreeting,
      isStreaming: false,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const suggestedPrompts = isAr
    ? [
        { label: "من هو أحمد رجب؟ 🚀", text: "من هو أحمد رجب وما هي خلفيته الهندسية؟" },
        { label: "ما هي منصة إقرأ؟ 💡", text: "ما هي منصة إقرأ وما الدور التقني الذي قام به أحمد فيها؟" },
        { label: "التك ستوك والمهارات ⚡", text: "ما هي التقنيات واللغات الأساسية التي يتقنها أحمد؟" },
        { label: "هل متاح للعمل عن بُعد؟ 🟢", text: "هل أحمد متاح حالياً للتعاقدات أو عروض العمل عن بعد؟" },
      ]
    : [
        { label: "Who is Ahmed? 🚀", text: "Who is Ahmed Ragab and what is his engineering background?" },
        { label: "What is Iqraa? 💡", text: "What is Iqraa SaaS and what was Ahmed's technical role in it?" },
        { label: "Core Tech Stack ⚡", text: "What is Ahmed's primary tech stack and skills?" },
        { label: "Available for hire? 🟢", text: "Is Ahmed currently available for remote roles or contracts?" },
      ];

  const sendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const history = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json();
      if (data && data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: data.reply,
            isStreaming: true,
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
            ? "أحمد رجب هو مهندس منتجات برمجية ومؤسس تقني (Full-Stack Product Engineer)، يدرس هندسة الميكاترونكس ومؤسس منصة «إقرأ» للذكاء الاصطناعي. متاح حالياً للعمل والتعاقدات عن بُعد، ويمكنك التواصل معه مباشرة عبر: ahmedragab.pro@outlook.com."
            : "Ahmed Ragab is a Full-Stack Product Engineer and founder of Iqraa.live. He is available for remote roles at ahmedragab.pro@outlook.com.",
          isStreaming: false,
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
          ? "أهلاً بك! تم بدء محادثة جديدة، تفضل بسؤالك وسأجيبك فوراً."
          : "Fresh chat started! Ask me anything about Ahmed's portfolio.",
        isStreaming: true,
      },
    ]);
  };

  // Sleek, minimal action link for Iqraa if mentioned
  const renderIqraaLink = (content: string) => {
    const lower = content.toLowerCase();
    const hasIqraa = lower.includes("iqraa") || content.includes("إقرأ");
    if (!hasIqraa) return null;

    return (
      <div className="pt-2.5 mt-2.5 border-t border-white/10 flex items-center">
        <a
          href="https://iqraa.live"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-medium text-cyan-300 transition-colors"
        >
          <span>{isAr ? "زيارة منصة إقرأ" : "Visit Iqraa.live"}</span>
          <ExternalLink className="w-3 h-3 text-cyan-400" />
        </a>
      </div>
    );
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Right/Left) */}
      <div className="fixed bottom-3.5 end-3.5 sm:bottom-5 sm:end-5 z-40">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-2 sm:gap-2.5 px-3.5 py-2 sm:px-4 sm:py-3 rounded-full bg-space-950/90 hover:bg-space-900 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.25)] backdrop-blur-2xl text-white transition-all cursor-pointer group"
          aria-label="Open AI Assistant"
        >
          <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cyan-500/20 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>

          <div className="flex flex-col text-start pe-1">
            <span className="text-[11px] sm:text-xs font-bold leading-tight text-white group-hover:text-cyan-300 transition-colors">
              {isAr ? "تحدث مع «رائد»" : "Chat with Raed"}
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 leading-tight hidden sm:block">
              {isAr ? "المساعد الذكي" : "AI Assistant"}
            </span>
          </div>
        </motion.button>
      </div>

      {/* Clean, Simple, Airy Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
            className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="w-full sm:max-w-xl md:max-w-2xl h-[86vh] sm:h-[620px] flex flex-col rounded-t-3xl sm:rounded-3xl bg-space-950/95 border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_35px_rgba(6,182,212,0.12)] backdrop-blur-2xl overflow-hidden relative"
            >
              {/* Header: Clean, Simple, No Clutter */}
              <div className="px-5 py-3.5 sm:px-6 border-b border-white/10 flex items-center justify-between bg-space-900/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 shrink-0">
                    <Sparkles className="w-4.5 h-4.5" />
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                    {isAr ? "«رائد» | المساعد الذكي" : "Raed | AI Assistant"}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleReset}
                    className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    title={isAr ? "محادثة جديدة" : "New Chat"}
                    aria-label="New Chat"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    title={isAr ? "إغلاق" : "Close"}
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 text-sm">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex gap-3 ${
                      m.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {m.role === "assistant" && (
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] sm:max-w-[82%] rounded-3xl p-4 sm:p-5 text-[14px] leading-relaxed shadow-sm transition-all ${
                        m.role === "user"
                          ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-br-md shadow-md shadow-cyan-950/30"
                          : "bg-white/[0.05] border border-white/10 text-slate-100 rounded-bl-md"
                      }`}
                    >
                      {m.role === "assistant" ? (
                        <TypewriterMessage
                          content={m.content}
                          isStreaming={m.isStreaming}
                        />
                      ) : (
                        <p className="whitespace-pre-wrap">{m.content}</p>
                      )}

                      {m.role === "assistant" && renderIqraaLink(m.content)}
                    </div>

                    {m.role === "user" && (
                      <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 mt-1">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Loading State */}
                {loading && (
                  <div className="flex items-center gap-3 text-slate-400 text-xs">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 animate-spin-slow" />
                    </div>
                    <div className="px-3.5 py-2 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-1.5 text-cyan-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.15s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.3s]" />
                      <span className="ms-1 text-xs text-slate-300">
                        {isAr ? "يكتب الرد الآن..." : "Thinking..."}
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestions Chips */}
              {messages.length <= 2 && !loading && (
                <div className="px-4 sm:px-5 py-2.5 border-t border-white/5 bg-space-900/30 flex flex-wrap items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  {suggestedPrompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => sendMessage(p.text)}
                      className="min-h-[36px] px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/40 text-xs text-slate-300 hover:text-white transition-all whitespace-nowrap cursor-pointer shadow-sm hover:scale-[1.02]"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Bottom Input Area */}
              <div className="p-4 sm:p-5 border-t border-white/10 bg-space-900/80 backdrop-blur-xl">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage();
                  }}
                  className="flex items-center gap-2.5"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={
                      isAr
                        ? "اسأل «رائد» أي سؤال عن أحمد..."
                        : "Ask Raed about Ahmed..."
                    }
                    className="flex-1 min-h-[48px] px-4 py-2.5 rounded-2xl border border-white/15 bg-white/[0.05] text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400/70 focus:bg-white/[0.08] focus:ring-2 focus:ring-cyan-500/20 transition-all font-sans"
                  />

                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="min-h-[48px] min-w-[48px] flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 disabled:opacity-25 disabled:pointer-events-none text-white shadow-lg shadow-cyan-950 transition-all cursor-pointer active:scale-95"
                    aria-label="Send"
                  >
                    <Send className="w-4.5 h-4.5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
