import fs from 'fs';
import path from 'path';
import * as simpleIcons from 'simple-icons';

const outDir = path.resolve('public/icons/skills');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Map of slug to simple-icons object or custom SVG
const iconList = [
  { slug: 'nextjs', icon: simpleIcons.siNextdotjs, color: '#ffffff' },
  { slug: 'react', icon: simpleIcons.siReact, color: '#61dafb' },
  { slug: 'typescript', icon: simpleIcons.siTypescript, color: '#3178c6' },
  { slug: 'javascript', icon: simpleIcons.siJavascript, color: '#f7df1e' },
  { slug: 'html5', icon: simpleIcons.siHtml5, color: '#e34f26' },
  { slug: 'css3', icon: simpleIcons.siCss, color: '#1572b6' },
  { slug: 'tailwind', icon: simpleIcons.siTailwindcss, color: '#38bdf8' },
  { slug: 'framermotion', icon: simpleIcons.siFramer, color: '#f43f5e' },
  { slug: 'redux', icon: simpleIcons.siRedux, color: '#764abc' },
  { slug: 'shadcnui', icon: simpleIcons.siShadcnui, color: '#e2e8f0' },
  { slug: 'reactquery', icon: simpleIcons.siReactquery, color: '#ff4154' },
  { slug: 'nodejs', icon: simpleIcons.siNodedotjs, color: '#5fa04e' },
  { slug: 'express', icon: simpleIcons.siExpress, color: '#a1a1aa' },
  { slug: 'nestjs', icon: simpleIcons.siNestjs, color: '#e0234e' },
  { slug: 'postgresql', icon: simpleIcons.siPostgresql, color: '#4169e1' },
  { slug: 'mongodb', icon: simpleIcons.siMongodb, color: '#47a248' },
  { slug: 'supabase', icon: simpleIcons.siSupabase, color: '#3ecf8e' },
  { slug: 'docker', icon: simpleIcons.siDocker, color: '#2496ed' },
  { slug: 'git', icon: simpleIcons.siGit, color: '#f05032' },
  { slug: 'electron', icon: simpleIcons.siElectron, color: '#47848f' },
  { slug: 'linux', icon: simpleIcons.siLinux, color: '#fcc624' },
  { slug: 'python', icon: simpleIcons.siPython, color: '#3776ab' },
  { slug: 'cplusplus', icon: simpleIcons.siCplusplus, color: '#00599c' },
  { slug: 'arduino', icon: simpleIcons.siArduino, color: '#00979d' },
  { slug: 'wordpress', icon: simpleIcons.siWordpress, color: '#21759b' },
  { slug: 'greensock', icon: simpleIcons.siGreensock, color: '#88ce02' },
];

for (const item of iconList) {
  const icon = item.icon;
  if (!icon) {
    console.error(`Missing icon for ${item.slug}`);
    continue;
  }
  const color = item.color || `#${icon.hex}`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path fill="${color}" d="${icon.path}"/></svg>`;
  fs.writeFileSync(path.join(outDir, `${item.slug}.svg`), svg, 'utf8');
}

// Also custom REST API icon
const restApiSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path fill="#06b6d4" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-4h2v4zm0-6h-2V7h2v3z"/></svg>`;
fs.writeFileSync(path.join(outDir, 'restapi.svg'), restApiSvg, 'utf8');

console.log(`Generated ${iconList.length + 1} SVG icons in public/icons/skills/`);
