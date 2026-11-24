import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CosmicCanvas } from "@/components/canvas/CosmicCanvas";
import { CosmicAssistantModal } from "@/components/cosmic/CosmicAssistantModal";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const currentUrl = `${baseUrl}/${locale}`;

  const title = isArabic ? siteConfig.title.ar : siteConfig.title.en;
  const description = isArabic ? siteConfig.description.ar : siteConfig.description.en;
  const keywords = isArabic ? siteConfig.keywords.ar : siteConfig.keywords.en;

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords,
    authors: [
      {
        name: siteConfig.name,
        url: baseUrl,
      },
    ],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
        "en-US": `${baseUrl}/en`,
        "ar-EG": `${baseUrl}/ar`,
        "x-default": `${baseUrl}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: siteConfig.name,
      locale: isArabic ? "ar_EG" : "en_US",
      alternateLocale: isArabic ? ["en_US"] : ["ar_EG"],
      type: "website",
      images: [
        {
          url: `${baseUrl}/assets/astronaut.jpg`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${isArabic ? siteConfig.role.ar : siteConfig.role.en}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.socials.twitterHandle,
      images: [`${baseUrl}/assets/astronaut.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: [
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
    },
    category: "technology",
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  // Enable static rendering in Next.js 15
  setRequestLocale(locale);

  const messages = await getMessages();
  const isArabic = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isArabic ? "rtl" : "ltr"}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-space-950 text-slate-100 antialiased relative selection:bg-nebula-violet/30 selection:text-white">
        <JsonLd locale={locale} />
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {/* Expansive seamless cosmic atmosphere (No rigid grids) */}
            <div className="fixed inset-0 cosmic-atmosphere pointer-events-none z-0" />

            {/* Stardust Canvas Engine */}
            <CosmicCanvas />

            <div className="relative z-10 flex flex-col min-h-screen w-full">
              <Navbar />
              <main className="flex-1 w-full">{children}</main>
              <Footer />
            </div>

            {/* AI Assistant Floating Widget */}
            <CosmicAssistantModal />
          </NextIntlClientProvider>
        </ThemeProvider>

        {/* Vercel Web Analytics & Core Web Vitals (Client-Only dynamic) */}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
