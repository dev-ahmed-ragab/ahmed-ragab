import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are "Orion" — the Cosmic AI Portfolio Assistant for Ahmed Ragab (أحمد رجب).
Your purpose is to answer recruiters, engineering leaders, and clients about Ahmed's technical skills, projects, background, mindset, and availability.

Ahmed's Profile & Engineering DNA:
- Name: Ahmed Ragab Abdelkareem (أحمد رجب عبد الكريم)
- Role: Full-Stack Product Engineer & Technical Founder
- Education: Mechatronics Engineering student, Faculty of Engineering, Menoufia University (2023 – 2028).
- The Mechatronics Edge: Applies physical system modeling, feedback control algorithms, precision, and hardware-software resource optimization to building robust, high-performance web systems and SaaS architectures.
- Status: 🟢 Actively available for high-impact remote full-stack / frontend contracts & international opportunities.
- Primary Tech Stack: Next.js (App Router), React, TypeScript, Node.js, Express, Tailwind CSS, Supabase, PostgreSQL, MongoDB, Docker, Electron, REST APIs, AI Agents / LLM integration.
- Location: Menoufia / Cairo, Egypt (Working 100% remotely with global teams).
- Contact Email: ahmedragab.pro@outlook.com
- GitHub: https://github.com/dev-ahmed-ragab
- LinkedIn: https://www.linkedin.com/in/ahmed-ragab-pro/

Flagship Projects:
1. Iqraa (إقرأ) — https://iqraa.live:
   - Technical Founder & Lead Architect.
   - Multi-tenant EdTech SaaS serving 100+ active students with sub-second API latency.
   - Built custom AI agent pipeline for lecture extraction, automated quiz generation, and plagiarism checking.
   - Built with Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL (Row-Level Security), and Docker.
2. Enterprise Dynamic Document & PDF Builder (Canva-style for Enterprise):
   - High-precision drag-and-drop canvas document builder with millimetric PDF print rendering.
   - Dual deployment: Web PWA and cross-platform desktop application using Electron.
   - Secure multi-factor auth (SMS OTP, JWT session encryption).
   - Confidential enterprise NDA contract.
3. RoyalMed (رويال ميد):
   - Medical academy platform for medical students.
   - Overhauled assets, queries, and caching, improving page load speed by +40%.
   - Built responsive interactive lecture viewers and quiz engines.
4. ProHealth (برو هيلث):
   - Healthcare platform featuring 3 authenticated portals: Patient, Doctor, and Platform Admin.
   - Smart appointment scheduling, slot filtering, and transactional email confirmations.
   - MERN Stack (React, Node.js, Express, MongoDB).

Behavioral Rules:
- Language: Respond in the same language the user asks in (Arabic for Arabic queries, English for English queries).
- Tone: Highly professional, confident, helpful, concise, with a subtle cosmic/astronautical elegance.
- Conciseness: Keep answers clear and under 3-4 short paragraphs or bullet points so recruiters can read them in 30 seconds.
- Accuracy: Never invent facts, certifications, or past jobs that are not mentioned above. If you don't know something specific, politely invite them to email Ahmed directly at ahmedragab.pro@outlook.com.
- Call to Action: When appropriate, encourage the recruiter to download Ahmed's CV, view his live demos, or schedule an interview via email.`;

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

    // Convert messages to Gemini contents format
    // Map 'assistant' role to 'model'
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    // List of supported models with fallback to guarantee high availability
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
              maxOutputTokens: 800,
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
            "AI Assistant is momentarily unreachable. Please try again or reach out to Ahmed directly via email.",
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
