import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  getProjectDossier,
  getAllProjectSlugs,
  getAdjacentProjects,
} from "@/data/project-dossiers";
import { ProjectDossierView } from "@/components/projects/ProjectDossierView";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const locales = ["ar", "en"];
  const slugs = getAllProjectSlugs();

  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectDossier(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const isAr = locale === "ar";
  const title = `${project.title[isAr ? "ar" : "en"]} | ${siteConfig.name}`;
  const description = project.subtitle[isAr ? "ar" : "en"];
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = `${baseUrl}/${locale}/projects/${slug}`;

  return {
    title,
    description,
    keywords: [
      ...siteConfig.keywords[isAr ? "ar" : "en"],
      project.category,
      ...project.techStack.frontend,
      ...project.techStack.backend,
    ],
    authors: [
      {
        name: siteConfig.name,
        url: baseUrl,
      },
    ],
    creator: siteConfig.name,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/projects/${slug}`,
        ar: `${baseUrl}/ar/projects/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: isAr ? "ar_EG" : "en_US",
      type: "article",
      images: [
        {
          url: project.heroImage.startsWith("http")
            ? project.heroImage
            : `${baseUrl}${project.heroImage}`,
          width: 1200,
          height: 630,
          alt: project.title[isAr ? "ar" : "en"],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        project.heroImage.startsWith("http")
          ? project.heroImage
          : `${baseUrl}${project.heroImage}`,
      ],
      creator: "@dev_ahmed_ragab",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { locale, slug } = await params;

  // Validate locale
  if (locale !== "ar" && locale !== "en") {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const project = getProjectDossier(slug);
  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <ProjectDossierView
      project={project}
      locale={locale as "ar" | "en"}
      prevProject={prev}
      nextProject={next}
    />
  );
}
