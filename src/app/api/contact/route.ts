import { NextResponse } from "next/server";
import { checkRateLimit, escapeHtml, getClientIp } from "@/lib/security";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const { allowed, retryAfterSec } = checkRateLimit(`contact:${ip}`, 5, 10 * 60 * 1000);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(retryAfterSec) } }
      );
    }

    const body = await req.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const subject = typeof body?.subject === "string" ? body.subject.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    if (name.length > 120 || email.length > 180 || subject.length > 200 || message.length > 4000) {
      return NextResponse.json(
        { error: "Input exceeds maximum allowed length." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || "ahmedragab.pro@outlook.com";

    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: email,
          subject: subject || `🚀 Portfolio Transmission from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #030712; color: #f1f5f9; border-radius: 12px; border: 1px solid rgba(139, 92, 246, 0.2);">
              <h2 style="color: #06b6d4; margin-top: 0;">🛰️ New Subspace Transmission</h2>
              <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <p style="margin: 5px 0;"><strong>Sender Name:</strong> ${safeName}</p>
                <p style="margin: 5px 0;"><strong>Sender Email:</strong> <a href="mailto:${safeEmail}" style="color: #a78bfa;">${safeEmail}</a></p>
                ${safeSubject ? `<p style="margin: 5px 0;"><strong>Subject:</strong> ${safeSubject}</p>` : ""}
              </div>
              <h3 style="color: #a78bfa;">Message Content:</h3>
              <div style="background: rgba(0,0,0,0.4); padding: 15px; border-radius: 8px; line-height: 1.6; white-space: pre-wrap;">
                ${safeMessage}
              </div>
              <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 25px 0 15px;" />
              <p style="font-size: 11px; color: #94a3b8; margin: 0;">Sent directly from ahmedragab.vercel.app portfolio transmission terminal.</p>
            </div>
          `,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error("Resend delivery error:", data);
        return NextResponse.json(
          { error: data.message || "Failed to dispatch email via Resend." },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Your message has been transmitted successfully!",
        id: data.id,
      });
    } else {
      // In development or when RESEND_API_KEY is pending
      console.log("⚡ [Simulated Contact Transmission Received]:", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json({
        success: true,
        simulated: true,
        message:
          "Transmission received! (Resend key is being configured, message logged successfully).",
      });
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while transmitting your message." },
      { status: 500 }
    );
  }
}
