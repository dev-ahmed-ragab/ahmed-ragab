import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'public', 'assets', 'projects');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const projectMockups = [
  {
    id: 'iqraa',
    title: 'Iqraa AI EdTech SaaS',
    url: 'iqraa.live',
    accent: '#06b6d4',
    secondary: '#8b5cf6',
    tag: 'AI Multi-Tenant Architecture'
  },
  {
    id: 'dynamic-pdf-builder',
    title: 'Dynamic Document & PDF Builder',
    url: 'studio.document-builder.app',
    accent: '#3b82f6',
    secondary: '#ec4899',
    tag: 'Canvas Layout Engine & Supabase'
  },
  {
    id: 'royalmed',
    title: 'RoyalMed Enterprise Medical Suite',
    url: 'royalmed.clinic.io',
    accent: '#10b981',
    secondary: '#06b6d4',
    tag: 'HIPAA-Compliant Patient EHR'
  },
  {
    id: 'prohealth',
    title: 'ProHealth Patient Booking Portal',
    url: 'prohealth.care',
    accent: '#0ea5e9',
    secondary: '#6366f1',
    tag: '3 Role-Based Gateways'
  },
  {
    id: 'frenzy-blog',
    title: 'Frenzy Content & Publishing Engine',
    url: 'frenzy.dev.io',
    accent: '#f59e0b',
    secondary: '#ef4444',
    tag: 'Next.js 15 ISR & Markdown'
  },
  {
    id: 'b-labn',
    title: 'B.Labn Quick-Commerce Storefront',
    url: 'blabn.store.eg',
    accent: '#f43f5e',
    secondary: '#fbbf24',
    tag: 'Cart System & Payment Gateway'
  },
  {
    id: 'youtube-clone',
    title: 'PulseStream Media Engine',
    url: 'stream.ahmedragab.dev',
    accent: '#ef4444',
    secondary: '#9333ea',
    tag: 'Adaptive Video & Infinite Feed'
  },
  {
    id: 'fitness-app',
    title: 'PulseFit Workout & Exercise Hub',
    url: 'pulsefit.workout.app',
    accent: '#8b5cf6',
    secondary: '#06b6d4',
    tag: 'Exercise DB & Calorie Tracker'
  },
  {
    id: 'skyscrapers',
    title: 'Skyline Luxury Real Estate',
    url: 'skyscrapers.realty.com',
    accent: '#14b8a6',
    secondary: '#3b82f6',
    tag: 'Filter Matrix & Property Tours'
  },
  {
    id: 'travel-agency',
    title: 'Voyage Cosmic Travel Explorer',
    url: 'voyage.wander.tours',
    accent: '#f97316',
    secondary: '#ec4899',
    tag: 'Itinerary Engine & Bookings'
  }
];

function generateSvg(p) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${p.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0f1d" />
      <stop offset="50%" stop-color="#030712" />
      <stop offset="100%" stop-color="#050816" />
    </linearGradient>
    <linearGradient id="grad-${p.id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${p.accent}" />
      <stop offset="100%" stop-color="${p.secondary}" />
    </linearGradient>
    <filter id="glow-${p.id}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="800" height="480" fill="url(#bg-${p.id})" />

  <!-- Ambient Light Bloom -->
  <circle cx="650" cy="80" r="160" fill="${p.accent}" opacity="0.14" filter="url(#glow-${p.id})" />
  <circle cx="150" cy="400" r="180" fill="${p.secondary}" opacity="0.1" filter="url(#glow-${p.id})" />

  <!-- App Window Chrome -->
  <g transform="translate(30, 24)">
    <!-- Window Frame -->
    <rect width="740" height="432" rx="16" fill="#0c1322" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />
    
    <!-- Topbar / Header -->
    <path d="M0,16 Q0,0 16,0 L724,0 Q740,0 740,16 L740,44 L0,44 Z" fill="#111a2e" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
    
    <!-- Traffic Light Controls -->
    <circle cx="24" cy="22" r="5.5" fill="#ef4444" opacity="0.85" />
    <circle cx="42" cy="22" r="5.5" fill="#f59e0b" opacity="0.85" />
    <circle cx="60" cy="22" r="5.5" fill="#10b981" opacity="0.85" />
    
    <!-- Address URL Bar -->
    <rect x="180" y="10" width="380" height="24" rx="6" fill="#090d16" stroke="rgba(255,255,255,0.08)" />
    <circle cx="196" cy="22" r="3.5" fill="${p.accent}" />
    <text x="212" y="26" fill="#94a3b8" font-family="monospace" font-size="11" font-weight="500">https://${p.url}</text>

    <!-- Sidebar -->
    <rect x="0" y="44" width="140" height="388" fill="#080d1a" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
    <!-- Sidebar Items -->
    <rect x="14" y="64" width="112" height="28" rx="6" fill="rgba(255,255,255,0.06)" />
    <circle cx="28" cy="78" r="4" fill="${p.accent}" />
    <rect x="42" y="75" width="64" height="6" rx="3" fill="#cbd5e1" />
    
    <rect x="14" y="102" width="112" height="24" rx="6" fill="transparent" />
    <circle cx="28" cy="114" r="4" fill="#475569" />
    <rect x="42" y="111" width="50" height="6" rx="3" fill="#64748b" />
    
    <rect x="14" y="134" width="112" height="24" rx="6" fill="transparent" />
    <circle cx="28" cy="146" r="4" fill="#475569" />
    <rect x="42" y="143" width="58" height="6" rx="3" fill="#64748b" />

    <rect x="14" y="166" width="112" height="24" rx="6" fill="transparent" />
    <circle cx="28" cy="178" r="4" fill="#475569" />
    <rect x="42" y="175" width="46" height="6" rx="3" fill="#64748b" />

    <!-- Main Content Stage -->
    <g transform="translate(160, 60)">
      <!-- Title & Pill -->
      <text x="0" y="20" fill="#ffffff" font-family="system-ui, sans-serif" font-size="17" font-weight="700">${p.title}</text>
      <rect x="0" y="32" width="220" height="20" rx="10" fill="rgba(6,182,212,0.12)" stroke="rgba(6,182,212,0.3)" />
      <text x="10" y="46" fill="${p.accent}" font-family="monospace" font-size="10" font-weight="600">${p.tag}</text>

      <!-- KPI Stat Cards -->
      <g transform="translate(0, 68)">
        <!-- Card 1 -->
        <rect x="0" y="0" width="170" height="70" rx="10" fill="#0e172a" stroke="rgba(255,255,255,0.08)" />
        <text x="14" y="24" fill="#64748b" font-family="sans-serif" font-size="10" font-weight="600">PERFORMANCE</text>
        <text x="14" y="50" fill="${p.accent}" font-family="monospace" font-size="20" font-weight="700">99.8%</text>
        
        <!-- Card 2 -->
        <rect x="184" y="0" width="170" height="70" rx="10" fill="#0e172a" stroke="rgba(255,255,255,0.08)" />
        <text x="198" y="24" fill="#64748b" font-family="sans-serif" font-size="10" font-weight="600">LATENCY</text>
        <text x="198" y="50" fill="#10b981" font-family="monospace" font-size="20" font-weight="700">&lt; 140ms</text>
        
        <!-- Card 3 -->
        <rect x="368" y="0" width="180" height="70" rx="10" fill="#0e172a" stroke="rgba(255,255,255,0.08)" />
        <text x="382" y="24" fill="#64748b" font-family="sans-serif" font-size="10" font-weight="600">STATUS</text>
        <text x="382" y="50" fill="${p.secondary}" font-family="monospace" font-size="16" font-weight="700">PRODUCTION</text>
      </g>

      <!-- Main Visual Graph / Layout -->
      <g transform="translate(0, 154)">
        <rect x="0" y="0" width="550" height="195" rx="12" fill="#0a1120" stroke="rgba(255,255,255,0.08)" />
        
        <!-- Grid lines -->
        <line x1="20" y1="50" x2="530" y2="50" stroke="rgba(255,255,255,0.04)" />
        <line x1="20" y1="95" x2="530" y2="95" stroke="rgba(255,255,255,0.04)" />
        <line x1="20" y1="140" x2="530" y2="140" stroke="rgba(255,255,255,0.04)" />

        <!-- Dynamic Chart Polyline -->
        <polyline points="30,150 90,130 150,110 210,135 270,75 330,85 390,45 450,60 510,35" 
                  fill="none" stroke="url(#grad-${p.id})" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
        
        <!-- Data nodes -->
        <circle cx="270" cy="75" r="5" fill="#030712" stroke="${p.accent}" stroke-width="2.5" />
        <circle cx="390" cy="45" r="5" fill="#030712" stroke="${p.secondary}" stroke-width="2.5" />
        <circle cx="510" cy="35" r="5" fill="#030712" stroke="${p.accent}" stroke-width="2.5" />

        <!-- Sub metrics -->
        <rect x="30" y="162" width="120" height="16" rx="4" fill="rgba(255,255,255,0.05)" />
        <rect x="165" y="162" width="90" height="16" rx="4" fill="rgba(255,255,255,0.05)" />
        <rect x="420" y="162" width="90" height="16" rx="8" fill="${p.accent}" opacity="0.2" />
        <text x="432" y="174" fill="${p.accent}" font-family="sans-serif" font-size="9" font-weight="700">ONLINE ACTIVE</text>
      </g>
    </g>
  </g>
</svg>`;
}

projectMockups.forEach(p => {
  const filePath = path.join(outDir, `${p.id}.svg`);
  fs.writeFileSync(filePath, generateSvg(p), 'utf8');
  console.log('Created mockup for:', p.id);
});
console.log('All mockups generated successfully!');
