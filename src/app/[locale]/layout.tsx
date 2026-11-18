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
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return {
    title: isArabic ? siteConfig.title.ar : siteConfig.title.en,
    description: isArabic ? siteConfig.description.ar : siteConfig.description.en,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: isArabic ? siteConfig.title.ar : siteConfig.title.en,
      description: isArabic ? siteConfig.description.ar : siteConfig.description.en,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: isArabic ? "ar_EG" : "en_US",
      type: "website",
    },
    icons: {
      icon: "/favicon.ico",
    },
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
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {/* Expansive seamless cosmic atmosphere (No rigid grids) */}
            <div className="fixed inset-0 cosmic-atmosphere pointer-events-none z-0" />

            {/* Stardust Canvas Engine */}
            <CosmicCanvas />

            <div className="relative z-10 flex flex-col min-h-screen w-full overflow-x-hidden">
              <Navbar />
              <main className="flex-1 w-full overflow-x-hidden">{children}</main>
              <Footer />
            </div>

            {/* AI Assistant Floating Widget */}
            <CosmicAssistantModal />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
