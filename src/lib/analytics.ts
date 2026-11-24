import posthog from "posthog-js";

/**
 * Safely captures a custom analytics event in PostHog
 */
export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    try {
      posthog.capture(eventName, properties);
    } catch (error) {
      console.warn(`[Analytics] Failed to track ${eventName}:`, error);
    }
  }
}

/**
 * Tracks when a recruiter or visitor clicks to download the CV / Resume
 */
export function trackDownloadCV(locale?: string) {
  trackEvent("cv_downloaded", {
    locale: locale || "unknown",
    timestamp: new Date().toISOString(),
  });
}

/**
 * Tracks when a visitor views or opens a project demo or source repository
 */
export function trackProjectClick(
  projectName: string,
  linkType: "demo" | "github" | "case_study",
  url?: string
) {
  trackEvent("project_clicked", {
    project: projectName,
    link_type: linkType,
    url: url || "",
    timestamp: new Date().toISOString(),
  });
}

/**
 * Tracks contact intent (clicking email, linkedin, whatsapp, or submitting contact form)
 */
export function trackContactIntent(
  channel: "email" | "linkedin" | "github" | "form" | "whatsapp",
  details?: Record<string, unknown>
) {
  trackEvent("contact_intent", {
    channel,
    ...details,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Tracks interactions with the AI Cosmic Assistant
 */
export function trackAssistantInteraction(action: "opened" | "question_sent" | "closed") {
  trackEvent("cosmic_assistant_interaction", {
    action,
    timestamp: new Date().toISOString(),
  });
}
