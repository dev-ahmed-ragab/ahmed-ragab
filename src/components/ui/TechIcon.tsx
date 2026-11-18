import {
  siNextdotjs,
  siReact,
  siTypescript,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siSupabase,
  siPostgresql,
  siMongodb,
  siElectron,
  siPwa,
  siDocker,
  siGit,
  siWordpress,
  siGreensock,
} from "simple-icons";

interface TechIconProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, { path: string; hex: string; title: string }> = {
  nextdotjs: siNextdotjs,
  react: siReact,
  typescript: siTypescript,
  tailwindcss: siTailwindcss,
  nodedotjs: siNodedotjs,
  express: siExpress,
  supabase: siSupabase,
  postgresql: siPostgresql,
  mongodb: siMongodb,
  electron: siElectron,
  pwa: siPwa,
  docker: siDocker,
  git: siGit,
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
