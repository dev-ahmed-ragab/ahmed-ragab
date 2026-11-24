import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/security";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `أنت «رائد» (Raed) — المساعد الذكي والممثل الرقمي للمهندس أحمد رجب (Ahmed Ragab).
مهمتك الأساسية هي الإجابة بدقة واحترافية ووضوح عن هوية أحمد رجب، خبراته، مهاراته التقنية، مشاريعه، وجاهزيته للعمل.

من هو أحمد رجب؟ (معلومات دقيقة وأساسية):
• الاسم: أحمد رجب عبد الكريم (Ahmed Ragab Abdelkareem).
• الهوية المهنية: مهندس منتجات برمجية ومؤسس تقني (Full-Stack Product Engineer & Technical Founder).
• التعليم: يدرس هندسة الميكاترونكس بكلية الهندسة، جامعة المنوفية (2023 – 2028). يجمع بين التفكير الرياضي والتحكم الهندسي المعقد، وبين بناء برمجيات ويب سحابية حديثة فائقة السرعة.
• الحالة المهنية: 🟢 متاح ومستعد للتعاقدات الدولية وفرص العمل عن بُعد (Remote Full-Stack / Frontend Roles).
• المهارات والتك ستوك:
  - الواجهات (Frontend): Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui.
  - السيرفرات وقواعد البيانات (Backend & Data): Node.js, Express, Supabase, PostgreSQL, MongoDB, Docker, RESTful APIs.
  - المعمارية والأنظمة: Clean Architecture, Serverless Functions, Micro-SaaS development, AI Agents Integration.
• أبرز المشاريع:
  1. منصة إقرأ (Iqraa — https://iqraa.live): المؤسس التقني والمعماري الرئيسي؛ منصة تعليمية ذكية SaaS تخدم أكثر من 1,000 طالب نشط بنظم استخراج المحاضرات والتقييم بالذكاء الاصطناعي، مبنية بـ Next.js و TypeScript و NestJS و PostgreSQL.
  2. برو هيلث (ProHealth): منصة حجوزات وإدارة طبية متكاملة بـ 3 بوابات منفصلة (طبيب، مريض، إدارة) مفتوحة المصدر على جيت هاب.
  3. منصة مَهام لإدارة المدارس (Maham / Apptraction): تطوير الواجهات التفاعلية ومحرك بناء وتصدير مستندات PDF المتقدمة وتغليف الديسكتوب بـ Electron (عقد مؤسسي خاضع لـ NDA).
  4. سكاي سكريبرز (Skyscrapers): بوابة تسويق عقاري احترافية بمعمارية WordPress و PHP متقدمة ونظام تصنيف تلقائي للعملاء.
• قنوات التواصل المباشرة:
  - البريد الإلكتروني: ahmedragab.pro@outlook.com
  - واتساب/هاتف: (+20) 01096097617
  - جيت هاب: https://github.com/dev-ahmed-ragab
  - لينكد إن: https://www.linkedin.com/in/ahmed-ragab-pro/

قواعد الرد:
1. كن واضحاً، مباشراً، لبقاً ومحترفاً. لا تستخدم ألقاباً غريبة (مثل: "ملهمنا" أو "مجرتنا"). تحدث عن أحمد رجب بصفته المهندس الذي تمثله ("المهندس أحمد رجب هو...").
2. إذا سأل المستخدم بالعربية، أجب بالعربية السليمة والواضحة فوراً.
3. تجنب الرموز والنجوم المزعجة في النص؛ اجعل الكلام مقروءاً وممتعاً وسريع الفهم.`;

// المحرك الذكي المحلي لتأمين إجابات فورية ودقيقة 100%
function generateSmartFallback(userQuery: string): string {
  const query = userQuery.toLowerCase().trim();
  const isArabic = /[\u0600-\u06FF]/.test(userQuery);

  if (isArabic) {
    if (
      query.includes("من هو") ||
      query.includes("مين") ||
      query.includes("أحمد") ||
      query.includes("احمد") ||
      query.includes("خلفيته") ||
      query.includes("نبذة") ||
      query.includes("عنك") ||
      query.includes("هويته")
    ) {
      return "أحمد رجب هو مهندس منتجات برمجية ومؤسس تقني (Full-Stack Product Engineer & Technical Founder)، وطالب في هندسة الميكاترونكس بكلية الهندسة جامعة المنوفية.\n\nيجمع أحمد بين الدقة الهندسية والتحكم المنطقي للأنظمة المعقدة وبين أحدث معايير تطوير الويب الحديثة (Next.js 15, React 19, TypeScript, PostgreSQL).\n\nأحمد هو المؤسس التقني لمنصة «إقرأ» للذكاء الاصطناعي (Iqraa.live)، ولديه خبرة عملية واسعة في بناء وتوسيع المنتجات الرقمية من الفكرة وحتى الإطلاق والتشغيل السحابي، وهو متاح حالياً للتعاقدات وعروض العمل عن بُعد.";
    }

    if (query.includes("اقرأ") || query.includes("إقرأ") || query.includes("iqraa")) {
      return "منصة «إقرأ» (Iqraa.live) هي منصة تعليمية سحابية ذكية (EdTech SaaS) أسسها وقاد معماريتها التقنية أحمد رجب.\n\nالمنصة تخدم أكثر من 1,000 طالب نشط بسرعة استجابة فائقة، وتتضمن أنظمة ذكاء اصطناعي مدمجة لتحليل المحاضرات وتوليد الاختبارات، ومبنية بأحدث تقنيات Next.js و TypeScript و NestJS و PostgreSQL.";
    }

    if (
      query.includes("تقنيات") ||
      query.includes("مهارات") ||
      query.includes("ستاك") ||
      query.includes("stack") ||
      query.includes("لغات")
    ) {
      return "يرتكز ستاك أحمد التقني الأساسي على:\n\n• الواجهات الأمامية: Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion.\n• السيرفرات وقواعد البيانات: Node.js, Express, Supabase, PostgreSQL, MongoDB.\n• الأنظمة والأدوات: Docker, Git, Electron, REST APIs, AI Agent Integration.";
    }

    if (
      query.includes("شغل") ||
      query.includes("عمل") ||
      query.includes("توظيف") ||
      query.includes("متاح") ||
      query.includes("تعاقد") ||
      query.includes("remote")
    ) {
      return "نعم، أحمد رجب متاح حالياً للتعاقدات وفرص التوظيف عن بُعد (Full-Stack / Frontend Engineer).\n\nيمكنك التواصل معه مباشرة عبر البريد: ahmedragab.pro@outlook.com أو واتساب: (+20) 01096097617، أو تحميل سيرته الذاتية من زر التحميل بالأعلى.";
    }

    if (query.includes("cv") || query.includes("سيرة") || query.includes("سي في") || query.includes("resume")) {
      return "يمكنك تحميل السيرة الذاتية الرسمية لأحمد رجب (PDF) مباشرة من زر «تحميل السيرة الذاتية» أعلى الصفحة، أو مراسلته عبر: ahmedragab.pro@outlook.com.";
    }

    if (
      query.includes("تواصل") ||
      query.includes("ايميل") ||
      query.includes("إيميل") ||
      query.includes("رقم") ||
      query.includes("واتساب") ||
      query.includes("لينكد")
    ) {
      return "يمكنك التواصل مع أحمد رجب عبر القنوات التالية:\n\n• البريد: ahmedragab.pro@outlook.com\n• واتساب: (+20) 01096097617\n• لينكد إن: linkedin.com/in/ahmed-ragab-pro\n• جيت هاب: github.com/dev-ahmed-ragab";
    }

    return "أهلاً بك! أنا «رائد»، المساعد الذكي للمهندس أحمد رجب. يسعدني إجابتك عن أي تفاصيل تخص مشاريع أحمد (مثل منصة إقرأ أو برو هيلث)، خلفيته الهندسية في الميكاترونكس، أو جاهزيته للعمل والتعاقدات عن بُعد. تفضل بسؤالك!";
  } else {
    // English
    if (query.includes("who is") || query.includes("about") || query.includes("ahmed")) {
      return "Ahmed Ragab is a Full-Stack Product Engineer & Technical Founder, studying Mechatronics Engineering at Menoufia University.\n\nHe bridges complex systems engineering with scalable modern web architectures (Next.js 15, React 19, TypeScript, PostgreSQL). He is the Technical Founder of Iqraa.live and is currently available for high-impact remote engineering contracts and roles.";
    }

    if (query.includes("iqraa")) {
      return "Iqraa (iqraa.live) is an AI-powered EdTech SaaS platform founded and architected by Ahmed Ragab. It serves 1,000+ active university students with sub-second latency, featuring automated lecture transcription, curriculum indexing, and AI quiz synthesis built on Next.js 15, React 19, TypeScript, NestJS, and PostgreSQL.";
    }

    if (query.includes("stack") || query.includes("skills") || query.includes("tech")) {
      return "Ahmed's core engineering stack includes:\n\n• Frontend: Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion.\n• Backend & Data: Node.js, Express, Supabase, PostgreSQL, MongoDB.\n• Systems & Cloud: Docker, Git, Electron, REST APIs, AI Agent pipelines.";
    }

    if (query.includes("hire") || query.includes("available") || query.includes("contract") || query.includes("job") || query.includes("remote")) {
      return "Yes! Ahmed is available for global remote full-stack / frontend contracts and roles.\n\nYou can reach him directly at ahmedragab.pro@outlook.com or WhatsApp: (+20) 01096097617.";
    }

    return "Hello! I am Raed, Ahmed Ragab's AI assistant. Ask me anything about Ahmed's background, flagship projects (like Iqraa SaaS), or remote contract availability!";
  }
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const { allowed, retryAfterSec } = checkRateLimit(`assistant:${ip}`, 20, 5 * 60 * 1000);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before sending another message." },
        { status: 429, headers: { "Retry-After": String(retryAfterSec) } }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required." },
        { status: 400 }
      );
    }

    const lastUserMsg = [...messages].reverse().find((m) => m.role === "user");
    const userQuery = typeof lastUserMsg?.content === "string"
      ? lastUserMsg.content.slice(0, 1500)
      : "";

    const apiKey = process.env.GEMINI_API_KEY;

    const candidateModels = [
      "gemini-flash-lite-latest",
      "gemini-3.5-flash-lite",
      "gemini-flash-latest",
      "gemini-3.8-flash",
    ];

    let replyText = "";

    if (apiKey) {
      const validMessages = messages.filter(
        (m: { role: string; content: string }, index: number) => {
          if (index === 0 && m.role === "assistant") return false;
          return Boolean(m.content && m.content.trim());
        }
      );

      const messagesToSend =
        validMessages.length > 0
          ? validMessages.slice(-4)
          : [{ role: "user", content: userQuery || "من هو أحمد رجب؟" }];

      const contents = messagesToSend.map(
        (m: { role: string; content: string }) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        })
      );

      for (const model of candidateModels) {
        try {
          const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            signal: AbortSignal.timeout(4000),
            body: JSON.stringify({
              systemInstruction: {
                parts: [{ text: SYSTEM_PROMPT }],
              },
              contents,
              generationConfig: {
                temperature: 0.5,
                maxOutputTokens: 500,
              },
            }),
          });

          if (res.ok) {
            const data = await res.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text && text.trim()) {
              replyText = text.trim();
              break;
            }
          }
        } catch {
          continue;
        }
      }
    }

    if (!replyText) {
      replyText = generateSmartFallback(userQuery);
    }

    return NextResponse.json({ reply: replyText });
  } catch (error) {
    console.error("Assistant route handler error:", error);
    return NextResponse.json({
      reply:
        "أحمد رجب هو مهندس منتجات برمجية ومؤسس تقني (Full-Stack Product Engineer)، يدرس هندسة الميكاترونكس ومؤسس منصة «إقرأ» للذكاء الاصطناعي. متاح حالياً للعمل عن بُعد ويمكنك مراسلته على: ahmedragab.pro@outlook.com.",
    });
  }
}
