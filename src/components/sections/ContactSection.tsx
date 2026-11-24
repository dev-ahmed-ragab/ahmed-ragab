"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import {
  Mail,
  Download,
  Send,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MapPin,
  Copy,
  Check,
  Radio,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        setStatusMessage(
          isAr
            ? "تم إرسال إشارتك بنجاح! سيتواصل معك أحمد رجب في غضون 24 ساعة."
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
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 w-full overflow-hidden bg-transparent z-10"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-nebula-cyan/40 bg-space-950/80 backdrop-blur-md font-mono text-xs font-semibold text-nebula-cyan uppercase tracking-wider shadow-sm shadow-nebula-cyan/20">
            <Radio className="w-3.5 h-3.5 text-nebula-cyan animate-pulse" />
            <span>{t("badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
            {isAr ? "لنبتكر شيئاً استثنائياً معاً" : "Initiate Subspace Transmission"}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {t("description")}
          </p>
        </div>

        {/* 2-Column Impeccable Layout: Presence & Channels (Left) | Interactive Terminal (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: PRESENCE, DIRECT CHANNELS & VECTOR BEACON     */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Direct Email 1-Click Action Bar */}
            <div className="group relative rounded-2xl border border-white/10 hover:border-nebula-cyan/40 bg-space-950/80 backdrop-blur-xl p-5 sm:p-6 transition-all duration-300 shadow-xl shadow-black/60">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider">
                  <Mail className="w-4 h-4 text-nebula-cyan" />
                  <span>{t("emailLabel")}</span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  title="Copy email to clipboard"
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
                className="text-lg sm:text-xl font-mono font-bold text-white group-hover:text-nebula-cyan transition-colors flex items-center gap-2 break-all"
              >
                <span>{siteConfig.email}</span>
                <ArrowUpRight className="w-4 h-4 text-nebula-cyan opacity-75 shrink-0" />
              </a>
            </div>

            {/* Availability & Global Timezone Card */}
            <div className="rounded-2xl border border-white/10 bg-space-950/70 backdrop-blur-xl p-5 sm:p-6 space-y-3.5 shadow-xl shadow-black/60">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-300 font-mono">
                  {isAr ? "متاح للتعاقدات وعروض العمل الدولية عن بُعد" : "Available for Remote Contracts & Global Teams"}
                </span>
              </div>

              <div className="text-xs text-slate-300 font-mono flex items-center gap-2">
                <MapPin className="w-4 h-4 text-nebula-cyan shrink-0" />
                <span>Cairo / Menoufia, Egypt • Remote Worldwide</span>
              </div>

              <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
                <Clock className="w-4 h-4 text-nebula-violet shrink-0" />
                <span>UTC+2 (Seamless overlap with US, EU & GCC)</span>
              </div>
            </div>

            {/* Direct Connect Pills (WhatsApp, LinkedIn, GitHub, CV) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/201096097617"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3.5 rounded-xl border border-white/10 hover:border-emerald-500/40 bg-space-950/70 hover:bg-space-900/90 text-slate-200 hover:text-white transition-all backdrop-blur-md text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3.5 rounded-xl border border-white/10 hover:border-blue-500/40 bg-space-950/70 hover:bg-space-900/90 text-slate-200 hover:text-white transition-all backdrop-blur-md text-xs font-semibold"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-400 shrink-0" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3.5 rounded-xl border border-white/10 hover:border-white/30 bg-space-950/70 hover:bg-space-900/90 text-slate-200 hover:text-white transition-all backdrop-blur-md text-xs font-semibold"
              >
                <GitHubIcon className="w-4 h-4 text-slate-300 shrink-0" />
                <span>GitHub</span>
              </a>

              {/* Download CV */}
              <a
                href={siteConfig.links.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3.5 rounded-xl border border-nebula-cyan/30 hover:border-nebula-cyan bg-nebula-cyan/10 hover:bg-nebula-cyan/20 text-cyan-200 hover:text-white transition-all backdrop-blur-md text-xs font-semibold"
              >
                <Download className="w-4 h-4 text-nebula-cyan shrink-0" />
                <span>{isAr ? "تحميل CV" : "Download CV"}</span>
              </a>
            </div>

            {/* Transparent Vector Beacon Graphic (Pure SVG, zero background box) */}
            <div className="relative w-full aspect-[4/3] max-h-56 hidden lg:flex items-center justify-center pointer-events-none select-none opacity-80">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/subspace-beacon.svg"
                alt="Quantum Subspace Communication Beacon"
                className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(6,182,212,0.25)]"
              />
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: MODERN GLASS TRANSMISSION TERMINAL (FORM)    */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-white/10 bg-space-950/80 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl shadow-nebula-cyan/10 space-y-6">
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-nebula-cyan/50 to-transparent" />

              {/* Terminal Title */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-nebula-cyan" />
                  <span>{isAr ? "إرسال رسالة مباشرة" : "Dispatch Direct Transmission"}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {isAr
                    ? "اختر موضوع الرسالة أو اكتب تفاصيل مشروعك وسأقوم بالرد عليك سريعاً."
                    : "Select a topic or describe your project requirements for a fast response."}
                </p>
              </div>

              {/* Topic Selection Pills */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider block">
                  {isAr ? "موضوع الاستفسار:" : "Inquiry Subject Preset:"}
                </span>
                <div className="flex flex-wrap gap-2">
                  {topicPresets.map((preset) => {
                    const isSelected = selectedTopic === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => handleSelectTopic(preset)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                          isSelected
                            ? "bg-nebula-cyan/25 border-nebula-cyan text-white shadow-md shadow-nebula-cyan/25"
                            : "bg-white/[0.03] hover:bg-white/[0.08] border-white/10 text-slate-300 hover:text-white"
                        }`}
                      >
                        {preset.label[locale]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1">
                      <span>{isAr ? "الاسم الكريم" : "Your Name"}</span>
                      <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder={isAr ? "أحمد مصطفى" : "Alex Mercer"}
                      className="w-full px-4 py-2.5 rounded-xl border border-white/15 bg-space-900/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-nebula-cyan focus:bg-space-900 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1">
                      <span>{isAr ? "البريد الإلكتروني" : "Your Email"}</span>
                      <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-white/15 bg-space-900/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-nebula-cyan focus:bg-space-900 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-slate-300">
                    {isAr ? "عنوان الرسالة" : "Subject"}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, subject: e.target.value }))
                    }
                    placeholder={
                      isAr
                        ? "فرصة عمل / تعاقد مشروع / استشارة معمارية"
                        : "Remote Contract Role / Project Collaboration"
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-white/15 bg-space-900/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-nebula-cyan focus:bg-space-900 transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1">
                    <span>{isAr ? "تفاصيل الرسالة أو متطلبات المشروع" : "Message Details"}</span>
                    <span className="text-rose-400">*</span>
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
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-space-900/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-nebula-cyan focus:bg-space-900 transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Status Feedback Message */}
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
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  variant="cosmicPrimary"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-3 rounded-xl gap-2.5 font-semibold text-sm min-h-[48px] shadow-lg shadow-nebula-cyan/25"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      <span>{isAr ? "جارٍ إرسال الإشارة..." : "Transmitting Signal..."}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-cyan-200" />
                      <span>{isAr ? "إرسال الإشارة الآن" : "Transmit Message"}</span>
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
