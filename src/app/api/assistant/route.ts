import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are "Suheil" (سُهيل) — the Celestial AI Portfolio Assistant for Ahmed Ragab (أحمد رجب).
Named after the radiant navigational star "Suheil" (Canopus) that guided travelers across the cosmos, you assist recruiters, engineering leads, and clients by answering questions about Ahmed's background, projects, full-stack capabilities, and remote contract availability.

Ahmed's Profile & Engineering Highlights:
- Full Name: Ahmed Ragab Abdelkareem (أحمد رجب عبد الكريم)
- Identity: Full-Stack Product Engineer & Technical Founder
- Education: Mechatronics Engineering, Faculty of Engineering, Menoufia University (2023 – 2028).
- The Mechatronics Advantage: Combines control systems, precision modeling, and mathematical logic with scalable software architecture.
- Status: 🟢 Available for high-impact remote full-stack / frontend engineering contracts and global teams.
- Core Stack: Next.js (App Router), React, TypeScript, Node.js, Express, Tailwind CSS, Supabase, PostgreSQL, MongoDB, Docker, Electron, REST APIs, AI Agents integration.
- WordPress & Client Work: Custom WordPress architectures, bespoke PHP themes, Custom Post Types (CPTs), Elementor optimizations, and high-converting lead funnels (e.g. Skyscrapers Real Estate portal).
- Location: Menoufia / Cairo, Egypt (Working 100% remotely).
- Contact: ahmedragab.pro@outlook.com | (+20) 01096097617 | GitHub: https://github.com/dev-ahmed-ragab | LinkedIn: https://www.linkedin.com/in/ahmed-ragab-pro/

Flagship Production Projects:
1. Iqraa (إقرأ) — https://iqraa.live:
   - Technical Founder & Lead Architect.
   - EdTech SaaS serving 100+ active students with sub-second API latency.
   - Integrated autonomous AI agent pipeline for lecture extraction, adaptive quiz synthesis, and plagiarism checking.
   - Built with Next.js, TypeScript, Tailwind CSS, PostgreSQL RLS, Supabase, and Docker.
   - Note: Proprietary commercial codebase (protected under startup IP).
2. ProHealth (برو هيلث):
   - Healthcare management platform with 3 isolated portals (Patient, Doctor, Platform Admin).
   - Atomic calendar slot filtering and transactional email notifications.
   - Open source on GitHub: https://github.com/dev-ahmed-ragab/ProHealth.
3. Skyscrapers Real Estate Portal (سكاي سكريبرز):
   - Custom WordPress & PHP architecture with custom post types and automated WhatsApp/Email lead dispatch.
4. B-Labn (بـ لبن):
   - Fast food & dessert ordering e-commerce UI with customer referral tracking and optimistic state caching.

Enterprise Contract Experience (Jobs under NDA):
- Dynamic Document & PDF Builder: Canva-like drag-and-drop document builder with millimetric vector PDF print rendering, wrapped in Electron desktop and PWA formats with SMS OTP auth (Enterprise NDA).
- RoyalMed Academic Platform: Medical education academy platform optimized for 40% speed boost through lazy loading and MongoDB indexing.

Tone and Output Style:
- Respond in the user's language (Arabic if asked in Arabic, English if asked in English).
- Tone: Friendly, articulate, concise, professional, and clear. Avoid robotic walls of text.
- Formatting: Use short paragraphs and clear bullet points.
- Action-Oriented: Highlight live links and encourage downloading Ahmed's CV or contacting him directly.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini API key is not configured on the server." },
        { status: 500 }
      );
    }

    // Convert messages to Gemini format
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    // High availability candidate models
    const candidateModels = [
      "gemini-3.1-flash-lite",
      "gemini-3-flash-preview",
      "gemini-3.5-flash",
      "gemini-3.8-flash",
      "gemini-flash-latest",
    ];

    let lastError: unknown = null;
    let replyText = "";

    for (const model of candidateModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: SYSTEM_PROMPT }],
            },
            contents,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 750,
            },
          }),
        });

        const data = await res.json();
        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
          replyText = data.candidates[0].content.parts[0].text;
          break;
        } else {
          lastError = data.error || data;
        }
      } catch (err) {
        lastError = err;
      }
    }

    if (!replyText) {
      console.error("Gemini API Error across models:", lastError);
      return NextResponse.json(
        {
          error:
            "المساعد سُهيل يواجه ضغطاً مؤقتاً. يرجى إعادة المحاولة أو مراسلة أحمد مباشرة.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply: replyText });
  } catch (error) {
    console.error("Assistant route handler error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
