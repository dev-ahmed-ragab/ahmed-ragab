import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date();

  const routes = ["", "/en", "/ar"];

  return routes.map((route) => {
    const isRoot = route === "";
    return {
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: isRoot ? 1.0 : 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ar: `${baseUrl}/ar`,
          "x-default": `${baseUrl}/en`,
        },
      },
    };
  });
}
