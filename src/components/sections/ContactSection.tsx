"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
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
  MapPin,
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
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 w-full overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 start-1/2 -translate-x-1/2 w-[350px] sm:w-[550px] h-[250px] sm:h-[350px] bg-nebula-violet/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full space-y-12">
        {/* Subspace Transmission Station Lottie Satellite */}
        <div className="absolute -top-8 end-4 hidden sm:block pointer-events-none opacity-80">
          <LottieSatellite size={135} direction="left" speed={0.8} />
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3">
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

        {/* Impeccable 2-Column Transmission Hub (Clean, Zero Nested Boxes) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Status */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Availability Pill */}
            <div className="p-4 rounded-2xl bg-space-900/50 border border-nebula-emerald/30 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-nebula-emerald animate-ping shrink-0" />
                <span className="text-xs font-bold text-emerald-300 font-mono">
                  {t("statusValue")}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{siteConfig.location[locale]}</span>
              </div>
            </div>

            {/* Direct Channels List */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                {isAr ? "قنوات الاتصال المباشرة:" : "Direct Channels:"}
              </div>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-3.5 rounded-xl bg-space-900/40 hover:bg-space-900/80 border border-white/10 hover:border-nebula-cyan/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-nebula-indigo/15 border border-nebula-indigo/30 flex items-center justify-center text-nebula-indigo shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 text-start">
                    <div className="text-[11px] font-mono text-slate-400">{t("emailLabel")}</div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-nebula-cyan transition-colors truncate">
                      {siteConfig.email}
                    </div>
                  </div>
                </div>
                <Send className="w-4 h-4 text-slate-500 group-hover:text-nebula-cyan group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all shrink-0 ms-2" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/201096097617"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-space-900/40 hover:bg-space-900/80 border border-white/10 hover:border-emerald-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 text-start">
                    <div className="text-[11px] font-mono text-slate-400">WhatsApp</div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      (+20) 01096097617
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 shrink-0 ms-2" />
              </a>

              {/* Download CV */}
              <a
                href={siteConfig.links.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-space-900/40 hover:bg-space-900/80 border border-white/10 hover:border-nebula-violet/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-nebula-violet/15 border border-nebula-violet/30 flex items-center justify-center text-nebula-violet shrink-0">
                    <Download className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 text-start">
                    <div className="text-[11px] font-mono text-slate-400">Curriculum Vitae</div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-nebula-violet transition-colors">
                      {t("downloadCv")}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-nebula-violet shrink-0 ms-2" />
              </a>
            </div>

            {/* Social Links Pill Bar */}
            <div className="flex items-center gap-2.5 pt-2">
              <Button
                asChild
                variant="cosmicOutline"
                size="sm"
                className="flex-1 min-h-[42px] rounded-xl text-xs font-semibold gap-2 border-white/10 hover:border-nebula-cyan/40 justify-center"
              >
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className="w-3.5 h-3.5 text-nebula-cyan" />
                  <span>LinkedIn</span>
                </a>
              </Button>

              <Button
                asChild
                variant="cosmicOutline"
                size="sm"
                className="flex-1 min-h-[42px] rounded-xl text-xs font-semibold gap-2 border-white/10 hover:border-nebula-violet/40 justify-center"
              >
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="w-3.5 h-3.5 text-nebula-violet" />
                  <span>GitHub</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Direct Message Transmission Form */}
          <div className="lg:col-span-7 rounded-2xl bg-space-900/40 border border-white/10 p-6 sm:p-8 backdrop-blur-md space-y-5">
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
        </div>
      </div>
    </section>
  );
}
