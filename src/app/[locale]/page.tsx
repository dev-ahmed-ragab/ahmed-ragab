import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { HeroSection } from "@/components/sections/HeroSection";

const ProjectsSection = dynamic(() =>
  import("@/components/sections/ProjectsSection").then((m) => m.ProjectsSection)
);
const ExperienceSection = dynamic(() =>
  import("@/components/sections/ExperienceSection").then((m) => m.ExperienceSection)
);
const SkillsSection = dynamic(() =>
  import("@/components/sections/SkillsSection").then((m) => m.SkillsSection)
);
const ContactSection = dynamic(() =>
  import("@/components/sections/ContactSection").then((m) => m.ContactSection)
);

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
