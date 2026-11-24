import {
  siNextdotjs,
  siReact,
  siTypescript,
  siJavascript,
  siHtml5,
  siCss,
  siPython,
  siCplusplus,
  siC,
  siTailwindcss,
  siFramer,
  siRedux,
  siShadcnui,
  siNodedotjs,
  siExpress,
  siSupabase,
  siPostgresql,
  siMongodb,
  siGraphql,
  siElectron,
  siPwa,
  siDocker,
  siGit,
  siGithub,
  siLinux,
  siGnubash,
  siArduino,
  siWordpress,
  siGreensock,
} from "simple-icons";

interface TechIconProps {
  name: string;
  className?: string;
}

const restApiIcon = {
  path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-4h2v4zm0-6h-2V7h2v3z",
  hex: "06b6d4",
  title: "REST APIs",
};

const iconMap: Record<string, { path: string; hex: string; title: string }> = {
  nextdotjs: siNextdotjs,
  nextjs: siNextdotjs,
  react: siReact,
  typescript: siTypescript,
  javascript: siJavascript,
  html5: siHtml5,
  html: siHtml5,
  css3: siCss,
  css: siCss,
  python: siPython,
  cplusplus: siCplusplus,
  "c++": siCplusplus,
  c: siC,
  tailwindcss: siTailwindcss,
  tailwind: siTailwindcss,
  framermotion: siFramer,
  framer: siFramer,
  redux: siRedux,
  reduxtoolkit: siRedux,
  shadcnui: siShadcnui,
  shadcn: siShadcnui,
  nodedotjs: siNodedotjs,
  nodejs: siNodedotjs,
  express: siExpress,
  expressjs: siExpress,
  supabase: siSupabase,
  postgresql: siPostgresql,
  postgres: siPostgresql,
  mongodb: siMongodb,
  graphql: siGraphql,
  restapi: restApiIcon,
  api: restApiIcon,
  rest: restApiIcon,
  docker: siDocker,
  electron: siElectron,
  git: siGit,
  github: siGithub,
  linux: siLinux,
  bash: siGnubash,
  gnubash: siGnubash,
  arduino: siArduino,
  microcontroller: siArduino,
  pwa: siPwa,
  wordpress: siWordpress,
  greensock: siGreensock,
};

export function TechIcon({ name, className = "w-5 h-5" }: TechIconProps) {
  const icon = iconMap[name.toLowerCase()];

  if (!icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-label={icon.title}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
