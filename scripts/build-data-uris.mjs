import fs from 'fs';
import path from 'path';

const dir = path.resolve('public/icons/skills');
const files = fs.readdirSync(dir);
const lines = [
  '// Auto-generated authentic SVG data URIs for 100% instant offline rendering',
  'export const SKILL_ICON_DATA: Record<string, string> = {',
];

for (const f of files) {
  if (f.endsWith('.svg')) {
    const slug = f.replace('.svg', '');
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const uri = 'data:image/svg+xml;utf8,' + encodeURIComponent(content);
    lines.push(`  ${JSON.stringify(slug)}: ${JSON.stringify(uri)},`);
  }
}

lines.push('};');
lines.push('');

fs.writeFileSync(path.resolve('src/data/skillIconsData.ts'), lines.join('\n'), 'utf8');
console.log('Successfully created src/data/skillIconsData.ts with', files.filter(f => f.endsWith('.svg')).length, 'icons');
