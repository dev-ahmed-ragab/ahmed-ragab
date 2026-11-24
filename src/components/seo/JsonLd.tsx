import React from "react";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

interface JsonLdProps {
  locale: string;
}

export function JsonLd({ locale }: JsonLdProps) {
  const isArabic = locale === "ar";
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const personSchema = {
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: siteConfig.name,
    alternateName: [
      siteConfig.fullName.en,
      siteConfig.fullName.ar,
      "أحمد رجب",
      "Ahmed Ragab Abdelkareem",
    ],
    url: baseUrl,
    image: `${baseUrl}/assets/astronaut.jpg`,
    jobTitle: isArabic ? siteConfig.role.ar : siteConfig.role.en,
    worksFor: {
      "@type": "Organization",
      name: "Iqraa",
      url: siteConfig.links.iqraa,
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: isArabic
        ? "كلية الهندسة، جامعة المنوفية (هندسة ميكاترونكس)"
        : "Faculty of Engineering, Menoufia University (Mechatronics Engineering)",
      url: "https://mu.menofia.edu.eg/",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "Bachelor of Science in Mechatronics Engineering (2023 – 2028)",
      recognizedBy: {
        "@type": "EducationalOrganization",
        name: "Menoufia University",
      },
    },
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: isArabic ? "القاهرة" : "Cairo",
      addressRegion: isArabic ? "المنوفية / القاهرة" : "Menoufia / Cairo",
      addressCountry: "EG",
    },
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.iqraa,
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Docker",
      "Mechatronics Engineering",
      "Full-Stack Web Development",
      "AI & Agentic Systems",
      "Cloud Architectures",
    ],
    description: isArabic ? siteConfig.description.ar : siteConfig.description.en,
  };

  const webSiteSchema = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: isArabic ? siteConfig.title.ar : siteConfig.title.en,
    alternateName: siteConfig.name,
    description: isArabic ? siteConfig.description.ar : siteConfig.description.en,
    inLanguage: [isArabic ? "ar" : "en", isArabic ? "ar-EG" : "en-US"],
    author: { "@id": `${baseUrl}/#person` },
    publisher: { "@id": `${baseUrl}/#person` },
  };

  const projectsSchema = {
    "@type": "ItemList",
    "@id": `${baseUrl}/#projects`,
    name: isArabic ? "أبرز مشاريع المهندس أحمد رجب" : "Featured Projects by Ahmed Ragab",
    description: isArabic
      ? "قائمة بالأنظمة السحابية والمنتجات البرمجية التي طورها أحمد رجب"
      : "Curated software platforms and web applications engineered by Ahmed Ragab",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        "@id": `${baseUrl}/#project-${project.id}`,
        name: isArabic ? project.title.ar : project.title.en,
        description: isArabic ? project.description.ar : project.description.en,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web browser, Cross-platform",
        author: { "@id": `${baseUrl}/#person` },
        ...(project.links.demo ? { url: project.links.demo } : {}),
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        keywords: project.stack.join(", "),
      },
    })),
  };

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [personSchema, webSiteSchema, projectsSchema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaGraph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
