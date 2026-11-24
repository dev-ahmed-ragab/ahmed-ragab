"use client";

import { motion } from "framer-motion";

interface CosmicFlyingSaucerProps {
  className?: string;
  size?: number;
  activeCardIndex?: number;
}

export function CosmicFlyingSaucer({
  className = "",
  size = 140,
}: CosmicFlyingSaucerProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{ width: size, height: size * 0.75 }}
    >
      {/* Downward Tractor Beam / Thruster Ion Aura */}
      <motion.div
        animate={{
          opacity: [0.35, 0.75, 0.35],
          scaleY: [0.95, 1.15, 0.95],
          scaleX: [0.98, 1.05, 0.98],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[60%] w-[120%] h-[110px] pointer-events-none -z-10 origin-top"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(6, 182, 212, 0.38) 0%, rgba(139, 92, 246, 0.18) 45%, transparent 75%)",
        }}
      />

      {/* Floating Organism: Zero-G Idle Sway & Pitch */}
      <motion.div
        animate={{
          y: [-6, 8, -6],
          rotate: [-2, 2.5, -2],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <svg
          viewBox="0 0 200 130"
          className="w-full h-full overflow-visible drop-shadow-[0_12px_28px_rgba(6,182,212,0.4)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Upper Glass Canopy Dome Gradient */}
            <radialGradient id="saucer-dome" cx="42%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#cffafe" />
              <stop offset="30%" stopColor="#22d3ee" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#0891b2" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#082f49" stopOpacity="0.95" />
            </radialGradient>

            {/* Saucer Upper Hull Metallic Gradient */}
            <linearGradient id="saucer-upper-hull" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="25%" stopColor="#64748b" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="75%" stopColor="#475569" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Saucer Rim Ring Gradient */}
            <linearGradient id="saucer-rim" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#0e7490" />
              <stop offset="20%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="80%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0e7490" />
            </linearGradient>

            {/* Lower Hull Underside */}
            <linearGradient id="saucer-lower-hull" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="60%" stopColor="#020617" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            {/* Thruster Glow Filter */}
            <filter id="saucer-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. Lower Core Engine Cone */}
          <path
            d="M80,82 L120,82 L108,104 Q100,108 92,104 Z"
            fill="url(#saucer-lower-hull)"
            stroke="#06b6d4"
            strokeWidth="1.2"
          />

          {/* 2. Main Saucer Disk Body (Upper & Lower Wings) */}
          {/* Lower Hull Plate */}
          <ellipse cx="100" cy="74" rx="88" ry="22" fill="#090d16" stroke="#1e293b" strokeWidth="1" />

          {/* Upper Metallic Disk Plate */}
          <ellipse cx="100" cy="68" rx="84" ry="19" fill="url(#saucer-upper-hull)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

          {/* 3. Glowing Mid-Hull Ring Edge */}
          <ellipse
            cx="100"
            cy="71"
            rx="86"
            ry="9"
            fill="none"
            stroke="url(#saucer-rim)"
            strokeWidth="2.5"
            filter="url(#saucer-glow)"
          />

          {/* 4. Sequential Pulsing Thruster Nodes around the rim */}
          <g filter="url(#saucer-glow)">
            <circle cx="28" cy="71" r="3.2" fill="#22d3ee" />
            <circle cx="52" cy="76" r="3.4" fill="#a855f7" />
            <circle cx="82" cy="79" r="3.8" fill="#22d3ee" />
            <circle cx="118" cy="79" r="3.8" fill="#22d3ee" />
            <circle cx="148" cy="76" r="3.4" fill="#a855f7" />
            <circle cx="172" cy="71" r="3.2" fill="#22d3ee" />
          </g>

          {/* 5. Central Cockpit Observation Dome */}
          <path
            d="M72,60 Q70,24 100,24 Q130,24 128,60 Z"
            fill="url(#saucer-dome)"
            stroke="#67e8f9"
            strokeWidth="1.4"
          />

          {/* Dome Holographic Sheen & Pilot Silhouette */}
          <ellipse cx="94" cy="38" rx="14" ry="6" fill="rgba(255,255,255,0.45)" />
          {/* Subtle Pilot Silhouette */}
          <circle cx="100" cy="46" r="4.5" fill="#082f49" opacity="0.75" />
          <path d="M94,56 Q100,51 106,56 Z" fill="#082f49" opacity="0.75" />

          {/* 6. Top Sensor Beacon Spike */}
          <line x1="100" y1="24" x2="100" y2="12" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
          <circle cx="100" cy="11" r="2.8" fill="#38bdf8" filter="url(#saucer-glow)" />

          {/* 7. Bottom Center Propulsion Core Flare */}
          <motion.ellipse
            cx="100"
            cy="104"
            rx="14"
            ry="5"
            fill="#22d3ee"
            filter="url(#saucer-glow)"
            animate={{
              rx: [12, 18, 12],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

export default CosmicFlyingSaucer;
