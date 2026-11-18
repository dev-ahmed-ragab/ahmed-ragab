"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Radio,
  Mail,
  Download,
  Send,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { LottieSatellite } from "@/components/cosmic/CelestialElements";

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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

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
            ? "تم إرسال إشارتك بنجاح! سيتواصل أحمد معك في أقرب وقت."
            : "Transmission successful! Ahmed will reply to your inquiry shortly."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(
          data.error ||
            (isAr
              ? "تعذر إرسال الرسالة، يمكنك مراسلة أحمد مباشرة عبر الإيميل."
              : "Failed to transmit message. Please contact Ahmed directly via email.")
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        isAr
          ? "حدث خطأ في الاتصال بالشبكة. يرجى إعادة المحاولة."
          : "Network communication error. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 w-full overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 start-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[250px] sm:h-[350px] bg-nebula-violet/10 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {/* Subspace Transmission Station Lottie Satellite */}
        <div className="absolute -top-8 end-4 hidden sm:block pointer-events-none opacity-90">
          <LottieSatellite size={135} direction="left" speed={0.8} />
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 space-y-3">
          <Badge
            variant="cosmicCyan"
            className="gap-2 px-3 py-1 font-mono text-xs uppercase tracking-wider rounded-full"
          >
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>{t("badge")}</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t("title")}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Transmission Hub Card */}
        <Card className="glass-panel rounded-3xl p-5 sm:p-8 md:p-10 border border-white/10 shadow-2xl space-y-8 w-full">
          {/* Status strip */}
          <div className="p-3.5 sm:p-4 rounded-xl border border-nebula-emerald/30 bg-nebula-emerald/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-start">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-nebula-emerald animate-ping shrink-0" />
              <span className="text-xs font-bold text-emerald-300 font-mono">
                {t("statusValue")}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {siteConfig.location[locale]}
            </span>
          </div>

          {/* Interactive Direct Message Form (Powered by Resend Engine) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-nebula-cyan uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAr ? "إرسال رسالة مباشرة (Resend Engine)" : "Dispatch Direct Transmission"}</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1.5 text-start">
                  <label className="text-xs font-mono text-slate-300">
                    {isAr ? "الاسم الكريم *" : "Your Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isAr ? "مثال: م. سارة علي" : "e.g. John Doe"}
                    className="w-full min-h-[46px] px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-nebula-cyan transition-colors"
                  />
                </div>

                <div className="space-y-1.5 text-start">
                  <label className="text-xs font-mono text-slate-300">
                    {isAr ? "البريد الإلكتروني *" : "Your Email Address *"}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full min-h-[46px] px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-nebula-cyan transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-start">
                <label className="text-xs font-mono text-slate-300">
                  {isAr ? "موضوع الرسالة" : "Subject"}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={
                    isAr
                      ? "مثال: فرصة عمل عن بُعد / مشروع برمجي جديد"
                      : "e.g. Remote Contract Role / Project Collaboration"
                  }
                  className="w-full min-h-[46px] px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-nebula-cyan transition-colors"
                />
              </div>

              <div className="space-y-1.5 text-start">
                <label className="text-xs font-mono text-slate-300">
                  {isAr ? "نص الرسالة أو تفاصيل الفرصة *" : "Message Details *"}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    isAr
                      ? "اكتب تفاصيل الفرصة، التك ستوك المطلوب، أو متطلبات المشروع..."
                      : "Describe your project requirements, team setup, or role details..."
                  }
                  className="w-full p-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-nebula-cyan transition-colors resize-none"
                />
              </div>

              {/* Status Notice */}
              {status === "success" && (
                <div className="p-3.5 rounded-xl border border-nebula-emerald/30 bg-nebula-emerald/10 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-3.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "submitting"}
                variant="cosmicPrimary"
                size="lg"
                className="w-full sm:w-auto min-h-[48px] px-8 rounded-xl font-bold text-xs gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span>{isAr ? "جارِ الإرسال..." : "Transmitting..."}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{isAr ? "إرسال الإشارة الآن" : "Transmit Message"}</span>
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Quick Contact Actions Grid */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="text-xs font-mono text-slate-400">
              {isAr ? "أو تواصل مباشرة عبر القنوات الرسمية:" : "Or connect directly via verified channels:"}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
              {/* Direct Email (Min 56px Touch Target) */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-4 sm:p-5 min-h-[56px] rounded-2xl border border-white/10 bg-space-950/70 hover:border-nebula-indigo/50 hover:bg-space-900/80 transition-all flex items-center justify-between group active:scale-[0.98]"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-nebula-indigo/15 border border-nebula-indigo/30 flex items-center justify-center text-nebula-indigo group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 text-start">
                    <div className="text-xs font-mono text-slate-400">
                      {t("emailLabel")}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-nebula-cyan transition-colors truncate">
                      {siteConfig.email}
                    </div>
                  </div>
                </div>
                <Send className="w-4 h-4 text-slate-500 group-hover:text-nebula-cyan group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all shrink-0 ms-2" />
              </a>

              {/* Download CV (Min 56px Touch Target) */}
              <a
                href={siteConfig.links.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 min-h-[56px] rounded-2xl border border-white/10 bg-space-950/70 hover:border-nebula-violet/50 hover:bg-space-900/80 transition-all flex items-center justify-between group active:scale-[0.98]"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-nebula-violet/15 border border-nebula-violet/30 flex items-center justify-center text-nebula-violet group-hover:scale-105 transition-transform shrink-0">
                    <Download className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 text-start">
                    <div className="text-xs font-mono text-slate-400">
                      Curriculum Vitae
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-nebula-violet transition-colors truncate">
                      {t("downloadCv")}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-nebula-violet group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all shrink-0 ms-2" />
              </a>
            </div>
          </div>

          {/* Social Profiles Transmission (Touch Friendly >= 44px) */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full">
            <Button
              asChild
              variant="cosmicOutline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px] rounded-xl px-5 py-2.5 text-xs font-semibold gap-2 border-white/10 hover:border-nebula-cyan/40 justify-center active:scale-[0.98]"
            >
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-nebula-cyan"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>{t("connectLinkedIn")}</span>
              </a>
            </Button>

            <Button
              asChild
              variant="cosmicOutline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px] rounded-xl px-5 py-2.5 text-xs font-semibold gap-2 border-white/10 hover:border-nebula-violet/40 justify-center active:scale-[0.98]"
            >
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-nebula-violet"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>{t("browseGitHub")}</span>
              </a>
            </Button>

            <Button
              asChild
              variant="cosmicOutline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px] rounded-xl px-5 py-2.5 text-xs font-semibold gap-2 border-white/10 hover:border-emerald-500/40 justify-center active:scale-[0.98]"
            >
              <a
                href="https://wa.me/201096097617"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Direct</span>
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
