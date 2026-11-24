"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { siteConfig } from "@/config/site";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  MessageCircle,
  Download,
  Send,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Radio,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackContactIntent, trackDownloadCV } from "@/lib/analytics";

export function ContactSection() {
  const t = useTranslations("contact");
  const locale = useLocale() as "en" | "ar";
  const isAr = locale === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const topicPresets = [
    {
      id: "role",
      label: { en: "💼 Full-Stack Role", ar: "💼 وظيفة عن بُعد" },
      subject: { en: "Remote Full-Stack Role Inquiry", ar: "استفسار بخصوص وظيفة عن بُعد" },
    },
    {
      id: "contract",
      label: { en: "🚀 Startup Contract", ar: "🚀 تعاقد مشروع ناشئ" },
      subject: { en: "Contract & MVP Collaboration", ar: "تعاقد لتطوير منتج رقمي أو MVP" },
    },
    {
      id: "consulting",
      label: { en: "⚡ Architecture Review", ar: "⚡ استشارة معمارية" },
      subject: { en: "Technical Architecture Consultation", ar: "استشارة معمارية برمجية" },
    },
    {
      id: "hello",
      label: { en: "💬 Say Hello", ar: "💬 تحية وتعارف" },
      subject: { en: "Networking & Connecting", ar: "تحية وتواصل مهني" },
    },
  ];

  const handleSelectTopic = (topic: (typeof topicPresets)[0]) => {
    setSelectedTopic(topic.id);
    setFormData((prev) => ({
      ...prev,
      subject: topic.subject[locale],
    }));
  };

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopiedEmail(true);
      trackContactIntent("email", { action: "copied_to_clipboard" });
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        trackContactIntent("form", { subject: formData.subject });
        setStatusMessage(
          isAr
            ? "تم إرسال رسالتك بنجاح! سيتواصل معك أحمد رجب في غضون 24 ساعة."
            : "Transmission confirmed! Ahmed Ragab will reply to your message within 24 hours."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSelectedTopic("");
      } else {
        setStatus("error");
        setStatusMessage(
          data.error ||
            (isAr
              ? "تعذر إرسال الرسالة، يمكنك مراسلة أحمد مباشرة عبر البريد الإلكتروني."
              : "Failed to transmit message. Please contact Ahmed directly via email.")
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        isAr
          ? "حدث خطأ في شبكة الاتصال، يرجى إعادة المحاولة أو مراسلة البريد مباشرة."
          : "Network communication error. Please try again or use direct email."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 w-full z-10 overflow-hidden"
    >
      {/* Subtle Ambient Nebula Glows */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 end-10 w-[420px] h-[420px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full space-y-14 sm:space-y-18">
        {/* ================================================================= */}
        {/* SECTION HEADER: MONUMENTAL EDITORIAL TYPOGRAPHY                   */}
        {/* ================================================================= */}
        <div className="flex flex-col items-start space-y-4 max-w-3xl">
          {/* Live Global Status Instrument */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-md text-xs font-mono font-semibold text-emerald-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>
              {isAr
                ? "متاح للتعاقدات وعروض العمل الدولية عن بُعد"
                : "Available for Global Remote Contracts & Full-Time Roles"}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14]">
            {isAr
              ? "جاهز للمرحلة القادمة؟ لنبتكر شيئاً استثنائياً معاً."
              : "Ready for the Next Orbit? Let's Build Something Exceptional."}
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            {isAr
              ? "سواء كنت تبحث عن مهندس منتجات لقيادة مشروعك، أو تريد استشارة معمارية متقدمة، أو فرصة عمل متكاملة — قنوات الاتصال مفتوحة ومباشرة."
              : "Whether you are looking for a product engineer to lead an MVP, architect a high-throughput system, or discuss a remote role — direct channels are open."}
          </p>
        </div>

        {/* ================================================================= */}
        {/* 2-COLUMN ARCHITECTURAL MASTER PANELS (Deep Obsidian Luxury)       */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* =============================================================== */}
          {/* LEFT PANEL (5 cols): DIRECT CHANNELS & TELEMETRY HUB            */}
          {/* =============================================================== */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            {/* Primary Direct Email Master Card */}
            <div
              style={{
                backgroundColor: "#080d19",
                boxShadow:
                  "0 20px 50px -10px rgba(0, 0, 0, 0.75), 0 1px 1px rgba(255, 255, 255, 0.05) inset",
              }}
              className="rounded-[24px] sm:rounded-[28px] border border-white/10 hover:border-cyan-500/35 p-6 sm:p-7 space-y-3 relative overflow-hidden transition-colors group"
            >
              {/* Top Hairline Sheen */}
              <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />

              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{isAr ? "البريد الإلكتروني المباشر" : "Direct Email Transmission"}</span>
                </span>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">{isAr ? "تم النسخ" : "Copied!"}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>{isAr ? "نسخ" : "Copy"}</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                onClick={() => trackContactIntent("email", { action: "clicked_mailto" })}
                className="text-lg sm:text-xl font-mono font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between gap-2 break-all pt-1"
              >
                <span>{siteConfig.email}</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            </div>

            {/* Direct Connect Hub (WhatsApp, LinkedIn, GitHub) */}
            <div
              style={{
                backgroundColor: "#080d19",
                boxShadow:
                  "0 20px 50px -10px rgba(0, 0, 0, 0.75), 0 1px 1px rgba(255, 255, 255, 0.05) inset",
              }}
              className="rounded-[24px] sm:rounded-[28px] border border-white/10 p-6 sm:p-7 space-y-4 relative overflow-hidden"
            >
              {/* WhatsApp Direct Link */}
              <a
                href="https://wa.me/201096097617"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactIntent("whatsapp")}
                className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.08] hover:border-emerald-500/40 bg-white/[0.02] hover:bg-emerald-950/20 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      WhatsApp Direct
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      (+20) 01096097617 • {isAr ? "محادثة فورية" : "Instant Chat"}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0" />
              </a>

              {/* LinkedIn Connection */}
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactIntent("linkedin")}
                className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.08] hover:border-blue-500/40 bg-white/[0.02] hover:bg-blue-950/20 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0">
                    <LinkedInIcon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      LinkedIn
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      in/ahmed-ragab-pro • {isAr ? "الشبكة المهنية" : "Network & Endorsements"}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors shrink-0" />
              </a>

              {/* GitHub Repositories */}
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactIntent("github")}
                className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.08] hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.06] transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <GitHubIcon className="w-5 h-5 text-slate-200" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      GitHub
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      @dev-ahmed-ragab • {isAr ? "المستودعات البرمجية" : "Source Code & Projects"}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors shrink-0" />
              </a>

              {/* Direct Download CV / Resume Button */}
              <a
                href={siteConfig.links.cv}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDownloadCV(locale)}
                className="flex items-center justify-between p-3.5 rounded-xl border border-cyan-500/30 hover:border-cyan-400 bg-cyan-950/20 hover:bg-cyan-950/40 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-cyan-200 group-hover:text-white transition-colors">
                      {isAr ? "تحميل السيرة الذاتية (CV)" : "Download Curriculum Vitae (PDF)"}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Ahmed_Ragab_CV.pdf • 508 KB (2026)
                    </span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform shrink-0" />
              </a>
            </div>

            {/* Operational Telemetry Card */}
            <div
              style={{
                backgroundColor: "#080d19",
              }}
              className="rounded-[20px] border border-white/10 p-5 space-y-2 text-xs font-mono text-slate-400"
            >
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Cairo / Menoufia, Egypt • Available Worldwide (100% Remote)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-violet-400 shrink-0" />
                <span>UTC+2 • Seamless overlap with US, EU, and GCC business hours</span>
              </div>
            </div>
          </div>

          {/* =============================================================== */}
          {/* RIGHT PANEL (7 cols): ARCHITECTURAL TRANSMISSION TERMINAL (FORM) */}
          {/* =============================================================== */}
          <div className="lg:col-span-7">
            <div
              style={{
                backgroundColor: "#080d19",
                boxShadow:
                  "0 20px 50px -10px rgba(0, 0, 0, 0.75), 0 1px 1px rgba(255, 255, 255, 0.05) inset",
              }}
              className="rounded-[28px] sm:rounded-[32px] border border-white/10 hover:border-cyan-500/30 p-6 sm:p-10 space-y-6 relative overflow-hidden transition-colors"
            >
              {/* Top Hairline Sheen */}
              <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />

              {/* Terminal Title */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span>{isAr ? "إرسال رسالة مباشرة" : "Dispatch Direct Transmission"}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {isAr
                    ? "اختر تصنيف الرسالة واكتب متطلبات مشروعك وسأقوم بالرد عليك خلال 24 ساعة."
                    : "Select an inquiry preset and share your project requirements. I reply within 24 hours."}
                </p>
              </div>

              {/* Preset Topic Selector */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                  {isAr ? "موضوع الاستفسار السريع:" : "Inquiry Preset Topic:"}
                </span>
                <div className="flex flex-wrap gap-2">
                  {topicPresets.map((preset) => {
                    const isSelected = selectedTopic === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => handleSelectTopic(preset)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                          isSelected
                            ? "bg-cyan-500/20 border-cyan-400/60 text-cyan-200 shadow-sm shadow-cyan-500/20"
                            : "bg-white/[0.03] hover:bg-white/[0.07] border-white/10 text-slate-300 hover:text-white"
                        }`}
                      >
                        {preset.label[locale]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Precision Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                {/* Name & Email (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1">
                      <span>{isAr ? "الاسم الكريم" : "Your Name"}</span>
                      <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder={isAr ? "أحمد مصطفى" : "Alex Mercer"}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#050811] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1">
                      <span>{isAr ? "البريد الإلكتروني" : "Your Email"}</span>
                      <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#050811] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-slate-300">
                    {isAr ? "عنوان الموضوع" : "Subject"}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, subject: e.target.value }))
                    }
                    placeholder={
                      isAr
                        ? "فرصة عمل / تعاقد مشروع ناشئ / استشارة معمارية"
                        : "Remote Contract Role / Project Collaboration"
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#050811] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all font-sans"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1">
                    <span>{isAr ? "تفاصيل المشروع أو الدور الوظيفي" : "Project Details or Role Scope"}</span>
                    <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder={
                      isAr
                        ? "أخبرني عن طبيعة المشروع، حزمة التقنيات، أو دور العمل المطلوب..."
                        : "Describe your project timeline, technical stack, or role details..."
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#050811] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all resize-none leading-relaxed font-sans"
                  />
                </div>

                {/* Status Feedback Banner */}
                <AnimatePresence>
                  {statusMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm ${
                        status === "success"
                          ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300"
                          : "bg-rose-950/40 border-rose-500/40 text-rose-300"
                      }`}
                    >
                      {status === "success" ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      )}
                      <p className="leading-relaxed">{statusMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full min-h-[50px] rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-600 hover:brightness-110 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      <span>{isAr ? "جارٍ إرسال الرسالة..." : "Transmitting Signal..."}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-cyan-200" />
                      <span>{isAr ? "إرسال الرسالة الآن" : "Transmit Message Now"}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
