import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { experienceCaseStudies } from "@/data/experienceCaseStudies";
import { siteConfig } from "@/config/site";
import { ExperienceCaseStudyContent } from "@/components/experience/ExperienceCaseStudyContent";

function findCaseStudy(slug: string) {
  const normalized = slug.toLowerCase();
  return experienceCaseStudies.find(
    (c) =>
      c.slug.toLowerCase() === normalized ||
      (normalized === "maham" && c.slug === "apptraction") ||
      (normalized === "apptraction" && c.slug === "maham")
  );
}

export function generateStaticParams() {
  const baseSlugs = experienceCaseStudies.map((cs) => cs.slug);
  const allSlugs = Array.from(new Set([...baseSlugs, "apptraction", "maham"]));

  return routing.locales.flatMap((locale) =>
    allSlugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isAr = locale === "ar";
  const caseStudy = findCaseStudy(slug);

  if (!caseStudy) return {};

  const title = isAr
    ? `${caseStudy.title.ar} | ${siteConfig.name}`
    : `${caseStudy.title.en} | ${siteConfig.name}`;
  const description = isAr ? caseStudy.summary.ar : caseStudy.summary.en;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [caseStudy.heroImage],
    },
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const caseStudy = findCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  // Find adjacent case studies for bottom navigation
  const currentIndex = experienceCaseStudies.findIndex((c) => c.id === caseStudy.id);
  const prevStudy = currentIndex > 0 ? experienceCaseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < experienceCaseStudies.length - 1
      ? experienceCaseStudies[currentIndex + 1]
      : null;

  return (
    <ExperienceCaseStudyContent
      caseStudy={caseStudy}
      locale={locale as "en" | "ar"}
      prevStudy={prevStudy}
      nextStudy={nextStudy}
    />
  );
}
