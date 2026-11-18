"use client";

import { motion } from "framer-motion";
import { LottiePlayer } from "./LottiePlayer";

// ==========================================
// 1. Ringed Saturn-like Gas Giant
// ==========================================
interface RingedPlanetProps {
  className?: string;
  size?: number;
  variant?: "violet" | "cyan" | "amber";
  tilt?: number;
}

export function RingedPlanet({
  className = "",
  size = 220,
  variant = "violet",
  tilt = -22,
}: RingedPlanetProps) {
  // Color themes
  const themes = {
    violet: {
      sphereStart: "#7c3aed",
      sphereMid: "#4338ca",
      sphereEnd: "#1e1b4b",
      band1: "rgba(167, 139, 250, 0.4)",
      band2: "rgba(129, 140, 248, 0.35)",
      ringOuter: "rgba(196, 181, 253, 0.75)",
      ringMid: "rgba(139, 92, 246, 0.45)",
      ringInner: "rgba(99, 102, 241, 0.65)",
      glow: "rgba(139, 92, 246, 0.4)",
      atmosphere: "#a78bfa",
    },
    cyan: {
      sphereStart: "#06b6d4",
      sphereMid: "#0284c7",
      sphereEnd: "#082f49",
      band1: "rgba(103, 232, 249, 0.4)",
      band2: "rgba(56, 189, 248, 0.35)",
      ringOuter: "rgba(165, 243, 252, 0.75)",
      ringMid: "rgba(6, 182, 212, 0.45)",
      ringInner: "rgba(14, 165, 233, 0.65)",
      glow: "rgba(6, 182, 212, 0.4)",
      atmosphere: "#67e8f9",
    },
    amber: {
      sphereStart: "#f59e0b",
      sphereMid: "#d97706",
      sphereEnd: "#451a03",
      band1: "rgba(252, 211, 77, 0.4)",
      band2: "rgba(245, 158, 11, 0.35)",
      ringOuter: "rgba(253, 230, 138, 0.75)",
      ringMid: "rgba(217, 119, 6, 0.45)",
      ringInner: "rgba(180, 83, 9, 0.65)",
      glow: "rgba(245, 158, 11, 0.4)",
      atmosphere: "#fcd34d",
    },
  };

  const theme = themes[variant] || themes.violet;
  const idPrefix = `planet-${variant}-${size}`;

  return (
    <motion.div
      className={`relative inline-block select-none pointer-events-none ${className}`}
      animate={{
        y: [-5, 5, -5],
        rotate: [tilt - 1.5, tilt + 1.5, tilt - 1.5],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ width: size, height: size }}
    >
      {/* Outer Ethereal Glow */}
      <div
        className="absolute inset-0 rounded-full blur-2xl transform scale-90"
        style={{ background: theme.glow }}
      />

      <svg
        viewBox="0 0 240 240"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          {/* Planet Sphere Gradient */}
          <radialGradient
            id={`${idPrefix}-sphere`}
            cx="35%"
            cy="35%"
            r="65%"
            fx="28%"
            fy="28%"
          >
            <stop offset="0%" stopColor={theme.sphereStart} />
            <stop offset="55%" stopColor={theme.sphereMid} />
            <stop offset="100%" stopColor={theme.sphereEnd} />
          </radialGradient>

          {/* Planetary Shadow (Crescent night side) */}
          <radialGradient
            id={`${idPrefix}-shadow`}
            cx="80%"
            cy="80%"
            r="75%"
            fx="85%"
            fy="85%"
          >
            <stop offset="0%" stopColor="#030712" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#030712" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#030712" stopOpacity="0" />
          </radialGradient>

          {/* Atmosphere Rim Highlight */}
          <linearGradient
            id={`${idPrefix}-atmo`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={theme.atmosphere} stopOpacity="0.8" />
            <stop offset="40%" stopColor={theme.atmosphere} stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>

          {/* Ring Gradient */}
          <linearGradient
            id={`${idPrefix}-ring`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={theme.ringOuter} />
            <stop offset="45%" stopColor={theme.ringMid} />
            <stop offset="52%" stopColor="transparent" stopOpacity="0.1" /> {/* Cassini Division */}
            <stop offset="60%" stopColor={theme.ringInner} />
            <stop offset="100%" stopColor={theme.ringOuter} stopOpacity="0.3" />
          </linearGradient>

          {/* Clip path for planet sphere */}
          <clipPath id={`${idPrefix}-sphere-clip`}>
            <circle cx="120" cy="120" r="54" />
          </clipPath>
        </defs>

        {/* --- 1. BACK HALF OF RINGS (rendered behind planet) --- */}
        <g opacity="0.85">
          <path
            d="M 12 120 A 114 34 0 0 1 228 120"
            stroke={`url(#${idPrefix}-ring)`}
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M 28 120 A 96 26 0 0 1 212 120"
            stroke={theme.ringOuter}
            strokeWidth="3"
            strokeOpacity="0.6"
          />
        </g>

        {/* --- 2. PLANET BODY (Sphere + Atmospheric Bands + Shadow) --- */}
        <circle
          cx="120"
          cy="120"
          r="54"
          fill={`url(#${idPrefix}-sphere)`}
        />

        {/* Atmospheric Bands (Clipped to sphere) */}
        <g clipPath={`url(#${idPrefix}-sphere-clip)`}>
          <ellipse
            cx="120"
            cy="104"
            rx="60"
            ry="10"
            fill={theme.band1}
          />
          <ellipse
            cx="120"
            cy="118"
            rx="60"
            ry="7"
            fill={theme.band2}
          />
          <ellipse
            cx="120"
            cy="132"
            rx="60"
            ry="11"
            fill={theme.band1}
            opacity="0.7"
          />
          {/* Day / Night Crescent Shadow */}
          <circle
            cx="120"
            cy="120"
            r="54"
            fill={`url(#${idPrefix}-shadow)`}
          />
          {/* Ring shadow cast across planet surface */}
          <path
            d="M 64 120 Q 120 128 176 120 Q 120 123 64 120 Z"
            fill="#030712"
            opacity="0.6"
          />
        </g>

        {/* Atmosphere Glowing Rim */}
        <circle
          cx="120"
          cy="120"
          r="54"
          stroke={`url(#${idPrefix}-atmo)`}
          strokeWidth="2"
          fill="none"
        />

        {/* --- 3. FRONT HALF OF RINGS (rendered in front of planet) --- */}
        <g opacity="0.92">
          <path
            d="M 228 120 A 114 34 0 0 1 12 120"
            stroke={`url(#${idPrefix}-ring)`}
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Fine Outer Ring Groove */}
          <path
            d="M 212 120 A 96 26 0 0 1 28 120"
            stroke={theme.ringOuter}
            strokeWidth="2.5"
            strokeOpacity="0.8"
          />
          {/* Inner Ring Glow */}
          <path
            d="M 190 120 A 74 19 0 0 1 50 120"
            stroke={theme.ringInner}
            strokeWidth="2"
            strokeOpacity="0.5"
          />
        </g>

        {/* Tiny Orbiting Moonlet */}
        <circle cx="218" cy="108" r="3" fill="#ffffff" opacity="0.9" />
        <circle cx="218" cy="108" r="5" fill={theme.atmosphere} opacity="0.4" />
      </svg>
    </motion.div>
  );
}

// ==========================================
// 2. Cyan Ice Giant / Terrestrial World
// ==========================================
interface IceGiantPlanetProps {
  className?: string;
  size?: number;
}

export function IceGiantPlanet({ className = "", size = 160 }: IceGiantPlanetProps) {
  return (
    <motion.div
      className={`relative inline-block select-none pointer-events-none ${className}`}
      animate={{
        y: [4, -4, 4],
        rotate: [0, 4, 0],
      }}
      transition={{
        duration: 11,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 rounded-full blur-xl bg-nebula-cyan/25 transform scale-95" />

      <svg
        viewBox="0 0 180 180"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="ice-sphere" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="45%" stopColor="#06b6d4" />
            <stop offset="80%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#082f49" />
          </radialGradient>

          <radialGradient id="ice-shadow" cx="80%" cy="80%" r="75%">
            <stop offset="0%" stopColor="#020617" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#020617" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0" />
          </radialGradient>

          <clipPath id="ice-clip">
            <circle cx="90" cy="90" r="62" />
          </clipPath>
        </defs>

        {/* Base Planet */}
        <circle cx="90" cy="90" r="62" fill="url(#ice-sphere)" />

        {/* Swirls & Continents */}
        <g clipPath="url(#ice-clip)">
          {/* Atmosphere Swirl 1 */}
          <path
            d="M 30 70 Q 75 88 115 72 T 155 78 Q 135 62 95 65 Z"
            fill="#a5f3fc"
            opacity="0.45"
          />
          {/* Swirl 2 */}
          <path
            d="M 35 110 Q 80 125 120 108 T 152 118 Q 120 135 70 124 Z"
            fill="#38bdf8"
            opacity="0.35"
          />
          {/* Polar Ice Cap */}
          <ellipse cx="90" cy="34" rx="34" ry="10" fill="#ffffff" opacity="0.6" />
          <ellipse cx="90" cy="146" rx="30" ry="8" fill="#e0f2fe" opacity="0.5" />
          {/* Night side shadow */}
          <circle cx="90" cy="90" r="62" fill="url(#ice-shadow)" />
        </g>

        {/* Outer Halo Rim */}
        <circle
          cx="90"
          cy="90"
          r="62"
          stroke="#a5f3fc"
          strokeWidth="1.5"
          strokeOpacity="0.65"
          fill="none"
        />

        {/* Orbiting Moon */}
        <circle cx="160" cy="65" r="4" fill="#ffffff" />
        <circle cx="160" cy="65" r="7" fill="#38bdf8" opacity="0.3" />
      </svg>
    </motion.div>
  );
}

// ==========================================
// 3. Quantum Core Exoplanet / Plasma World
// ==========================================
export interface QuantumPlanetProps {
  className?: string;
  size?: number;
  variant?: "amber" | "violet" | "cyan" | "plasma";
  tilt?: number;
}

export function QuantumPlanet({
  className = "",
  size = 170,
  variant = "amber",
  tilt = -24,
}: QuantumPlanetProps) {
  // Radiant color themes for plasma/quantum worlds
  const themes = {
    amber: {
      coreStart: "#fffbeb",
      coreMid: "#f59e0b",
      coreDeep: "#ea580c",
      coreDark: "#451a03",
      mantle: "#0f172a",
      halo: "rgba(245, 158, 11, 0.35)",
      ringOuter: "rgba(253, 230, 138, 0.8)",
      ringMid: "rgba(245, 158, 11, 0.6)",
      ringInner: "rgba(6, 182, 212, 0.7)",
      streamline1: "rgba(254, 240, 138, 0.45)",
      streamline2: "rgba(56, 189, 248, 0.4)",
      streamline3: "rgba(192, 132, 252, 0.35)",
      atmosphereRim: "#fde68a",
      magnetoLine: "rgba(251, 191, 36, 0.4)",
    },
    violet: {
      coreStart: "#faf5ff",
      coreMid: "#a855f7",
      coreDeep: "#7c3aed",
      coreDark: "#1e1b4b",
      mantle: "#0f172a",
      halo: "rgba(168, 85, 247, 0.35)",
      ringOuter: "rgba(233, 213, 255, 0.8)",
      ringMid: "rgba(168, 85, 247, 0.6)",
      ringInner: "rgba(56, 189, 248, 0.7)",
      streamline1: "rgba(216, 180, 254, 0.45)",
      streamline2: "rgba(56, 189, 248, 0.4)",
      streamline3: "rgba(244, 114, 182, 0.35)",
      atmosphereRim: "#d8b4fe",
      magnetoLine: "rgba(192, 132, 252, 0.4)",
    },
    cyan: {
      coreStart: "#ecfeff",
      coreMid: "#06b6d4",
      coreDeep: "#0284c7",
      coreDark: "#082f49",
      mantle: "#030712",
      halo: "rgba(6, 182, 212, 0.35)",
      ringOuter: "rgba(207, 250, 254, 0.8)",
      ringMid: "rgba(6, 182, 212, 0.6)",
      ringInner: "rgba(168, 85, 247, 0.7)",
      streamline1: "rgba(165, 243, 252, 0.45)",
      streamline2: "rgba(129, 140, 248, 0.4)",
      streamline3: "rgba(52, 211, 153, 0.35)",
      atmosphereRim: "#a5f3fc",
      magnetoLine: "rgba(103, 232, 249, 0.4)",
    },
    plasma: {
      coreStart: "#ffffff",
      coreMid: "#ec4899",
      coreDeep: "#a855f7",
      coreDark: "#3b0764",
      mantle: "#030712",
      halo: "rgba(236, 72, 153, 0.35)",
      ringOuter: "rgba(251, 207, 232, 0.8)",
      ringMid: "rgba(236, 72, 153, 0.6)",
      ringInner: "rgba(6, 182, 212, 0.7)",
      streamline1: "rgba(244, 114, 182, 0.45)",
      streamline2: "rgba(103, 232, 249, 0.4)",
      streamline3: "rgba(251, 191, 36, 0.35)",
      atmosphereRim: "#fbcfe8",
      magnetoLine: "rgba(244, 114, 182, 0.4)",
    },
  };

  const theme = themes[variant] || themes.amber;
  const idPrefix = `quantum-${variant}-${size}`;

  return (
    <motion.div
      className={`relative inline-block select-none pointer-events-none ${className}`}
      animate={{
        y: [-6, 6, -6],
        rotate: [tilt - 1.5, tilt + 1.5, tilt - 1.5],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ width: size, height: size }}
    >
      {/* Radiant Atmospheric Halo */}
      <div
        className="absolute inset-0 rounded-full blur-2xl transform scale-95"
        style={{ background: theme.halo }}
      />
      <div className="absolute inset-2 rounded-full blur-xl bg-nebula-cyan/15 transform scale-90" />

      <svg
        viewBox="0 0 220 220"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          {/* Base Sphere Radial Gradient */}
          <radialGradient
            id={`${idPrefix}-sphere`}
            cx="32%"
            cy="32%"
            r="68%"
            fx="26%"
            fy="26%"
          >
            <stop offset="0%" stopColor={theme.coreStart} />
            <stop offset="25%" stopColor={theme.coreMid} />
            <stop offset="60%" stopColor={theme.coreDeep} />
            <stop offset="85%" stopColor={theme.coreDark} />
            <stop offset="100%" stopColor={theme.mantle} />
          </radialGradient>

          {/* Central White-Hot Energy Burst */}
          <radialGradient
            id={`${idPrefix}-energy-burst`}
            cx="35%"
            cy="35%"
            r="45%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="35%" stopColor={theme.coreStart} stopOpacity="0.7" />
            <stop offset="70%" stopColor={theme.coreMid} stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Planetary Night Shadow Crescent */}
          <radialGradient
            id={`${idPrefix}-shadow`}
            cx="78%"
            cy="78%"
            r="75%"
            fx="82%"
            fy="82%"
          >
            <stop offset="0%" stopColor="#030712" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#030712" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#030712" stopOpacity="0" />
          </radialGradient>

          {/* Atmosphere Rim Highlight */}
          <linearGradient
            id={`${idPrefix}-rim`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={theme.atmosphereRim} stopOpacity="0.9" />
            <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>

          {/* Plasma Rings Linear Gradient */}
          <linearGradient
            id={`${idPrefix}-rings`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={theme.ringOuter} />
            <stop offset="42%" stopColor={theme.ringMid} />
            <stop offset="50%" stopColor="transparent" stopOpacity="0.1" /> {/* Cassini Gap */}
            <stop offset="58%" stopColor={theme.ringInner} />
            <stop offset="100%" stopColor={theme.ringOuter} stopOpacity="0.35" />
          </linearGradient>

          {/* Clip path for planet sphere */}
          <clipPath id={`${idPrefix}-sphere-clip`}>
            <circle cx="110" cy="110" r="52" />
          </clipPath>
        </defs>

        {/* --- 1. MAGNETOSPHERE FLUX LINES --- */}
        <ellipse
          cx="110"
          cy="110"
          rx="98"
          ry="46"
          transform="rotate(-36 110 110)"
          stroke={theme.magnetoLine}
          strokeWidth="1.2"
          strokeDasharray="4 6"
          opacity="0.5"
        />
        <ellipse
          cx="110"
          cy="110"
          rx="92"
          ry="38"
          transform="rotate(32 110 110)"
          stroke={theme.magnetoLine}
          strokeWidth="0.8"
          strokeDasharray="3 5"
          opacity="0.4"
        />

        {/* --- 2. BACK HALF OF CONCENTRIC PLASMA RINGS --- */}
        <g transform={`rotate(${tilt} 110 110)`} opacity="0.85">
          {/* Primary Plasma Ring - Back Half */}
          <path
            d="M 16 110 A 94 25 0 0 1 204 110"
            stroke={`url(#${idPrefix}-rings)`}
            strokeWidth="14"
            strokeLinecap="round"
          />
          {/* Outer Harmonic Fine Groove */}
          <path
            d="M 32 110 A 78 20 0 0 1 188 110"
            stroke={theme.ringOuter}
            strokeWidth="2.5"
            strokeOpacity="0.65"
          />
        </g>

        {/* --- 3. PLANET BODY & SLEEK ATMOSPHERIC CURRENTS --- */}
        {/* Base Sphere */}
        <circle cx="110" cy="110" r="52" fill={`url(#${idPrefix}-sphere)`} />

        {/* Clipped Atmospheric Flows & Night Shadow */}
        <g clipPath={`url(#${idPrefix}-sphere-clip)`}>
          {/* Radiant Core Burst */}
          <circle
            cx="86"
            cy="86"
            r="32"
            fill={`url(#${idPrefix}-energy-burst)`}
          />

          {/* Sleek Atmospheric Jetstreams (No Swiss cheese holes!) */}
          <path
            d="M 64 88 Q 110 98 156 88 Q 110 94 64 88 Z"
            fill={theme.streamline1}
          />
          <path
            d="M 58 104 Q 85 114 110 106 T 162 104 Q 135 112 110 110 T 58 104 Z"
            fill={theme.streamline2}
          />
          <path
            d="M 60 120 Q 110 132 160 120 Q 110 126 60 120 Z"
            fill={theme.streamline3}
          />
          <path
            d="M 70 134 Q 110 144 150 134 Q 110 139 70 134 Z"
            fill={theme.streamline1}
            opacity="0.6"
          />

          {/* Planetary Night Shadow Crescent */}
          <circle cx="110" cy="110" r="52" fill={`url(#${idPrefix}-shadow)`} />

          {/* Ring shadow across the equator */}
          <path
            d="M 58 110 Q 110 118 162 110 Q 110 113 58 110 Z"
            fill="#030712"
            opacity="0.55"
          />
        </g>

        {/* Glowing Atmospheric Rim */}
        <circle
          cx="110"
          cy="110"
          r="52"
          stroke={`url(#${idPrefix}-rim)`}
          strokeWidth="2.2"
          fill="none"
        />

        {/* --- 4. FRONT HALF OF CONCENTRIC PLASMA RINGS --- */}
        <g transform={`rotate(${tilt} 110 110)`} opacity="0.95">
          {/* Primary Plasma Ring - Front Half */}
          <path
            d="M 204 110 A 94 25 0 0 1 16 110"
            stroke={`url(#${idPrefix}-rings)`}
            strokeWidth="14"
            strokeLinecap="round"
          />
          {/* Outer Harmonic Fine Groove */}
          <path
            d="M 188 110 A 78 20 0 0 1 32 110"
            stroke={theme.ringOuter}
            strokeWidth="2.5"
            strokeOpacity="0.8"
          />
          {/* High-speed inner plasma ribbon */}
          <path
            d="M 172 110 A 62 15 0 0 1 48 110"
            stroke={theme.ringInner}
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
        </g>

        {/* --- 5. ORBITING QUANTUM BEACON NODE --- */}
        <circle cx="196" cy="94" r="3.5" fill="#ffffff" />
        <circle cx="196" cy="94" r="7" fill={theme.atmosphereRim} opacity="0.4" />
      </svg>
    </motion.div>
  );
}

// Aliases for seamless drop-in compatibility across the project
export const QuantumCorePlanet = QuantumPlanet;
export const PlasmaWorld = QuantumPlanet;
export const AmberPlanet = QuantumPlanet;

// ==========================================
// 4. Lottie Satellite Communication Probe
// ==========================================
export interface LottieSatelliteProps {
  className?: string;
  size?: number;
  direction?: "left" | "right";
  animationSrc?: string;
  speed?: number;
  showPings?: boolean;
}

export function LottieSatellite({
  className = "",
  size = 130,
  direction = "right",
  animationSrc = "/lottie/satellite_clean.json",
  speed = 0.8,
  showPings = true,
}: LottieSatelliteProps) {
  const isRight = direction === "right";

  return (
    <motion.div
      className={`relative inline-block select-none pointer-events-none ${className}`}
      animate={{
        y: [-5, 5, -5],
        rotate: isRight ? [-2, 3, -2] : [2, -3, 2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ width: size, height: size }}
    >
      {/* Subspace Comms Beacon Aura Glow */}
      <div className="absolute inset-0 rounded-full blur-2xl bg-nebula-cyan/20 transform scale-75 pointer-events-none" />

      {/* High-Tech Lottie Satellite Probe Animation */}
      <div
        className={`w-full h-full relative z-10 flex items-center justify-center ${
          isRight ? "" : "-scale-x-100"
        }`}
      >
        <LottiePlayer
          src={animationSrc}
          loop
          autoplay
          speed={speed}
          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_8px_20px_rgba(6,182,212,0.25)]"
        />
      </div>

      {/* Pulsing Subspace Radio Wave Rings */}
      {showPings && (
        <>
          <motion.div
            className="absolute top-2 start-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-nebula-cyan/70 pointer-events-none"
            animate={{
              scale: [1, 2.8],
              opacity: [0.85, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="absolute top-2 start-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-nebula-violet/50 pointer-events-none"
            animate={{
              scale: [1, 3.8],
              opacity: [0.65, 0],
            }}
            transition={{
              duration: 2.2,
              delay: 0.7,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </>
      )}
    </motion.div>
  );
}

// Backwards-compatible alias
export const SatelliteProbe = LottieSatellite;
export type SatelliteProbeProps = LottieSatelliteProps;

// ==========================================
// 5. Clean Lottie Rotating Planet
// ==========================================
export interface LottiePlanetProps {
  className?: string;
  size?: number;
  animationSrc?: string;
  glowColor?: "cyan" | "violet" | "amber" | "indigo";
  speed?: number;
}

export function LottiePlanet({
  className = "",
  size = 150,
  animationSrc = "/lottie/planet_cosmic.json",
  glowColor = "cyan",
  speed = 0.7,
}: LottiePlanetProps) {
  const glowClasses = {
    cyan: "bg-nebula-cyan/25",
    violet: "bg-nebula-violet/25",
    amber: "bg-amber-500/20",
    indigo: "bg-nebula-indigo/25",
  };

  return (
    <motion.div
      className={`relative inline-block select-none pointer-events-none ${className}`}
      animate={{
        y: [-4, 4, -4],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ width: size, height: size }}
    >
      {/* Ethereal planetary atmospheric halo */}
      <div
        className={`absolute inset-0 rounded-full blur-2xl ${glowClasses[glowColor]} transform scale-90 pointer-events-none`}
      />

      {/* Vector Lottie Planet Animation */}
      <div className="w-full h-full relative z-10 flex items-center justify-center">
        <LottiePlayer
          src={animationSrc}
          loop
          autoplay
          speed={speed}
          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_10px_25px_rgba(6,182,212,0.2)]"
        />
      </div>
    </motion.div>
  );
}

// ==========================================
// 6. Sleek Lottie Rocket
// ==========================================
export interface LottieRocketProps {
  className?: string;
  size?: number;
  animationSrc?: string;
  speed?: number;
  tilt?: number;
}

export function LottieRocket({
  className = "",
  size = 120,
  animationSrc = "/lottie/rocket_cosmic.json",
  speed = 0.85,
  tilt = 12,
}: LottieRocketProps) {
  return (
    <motion.div
      className={`relative inline-block select-none pointer-events-none ${className}`}
      animate={{
        y: [-5, 5, -5],
        rotate: [tilt - 1.5, tilt + 1.5, tilt - 1.5],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ width: size, height: size }}
    >
      {/* Propulsion exhaust thruster glow */}
      <div className="absolute bottom-1 start-1/2 -translate-x-1/2 w-10 h-10 rounded-full blur-xl bg-amber-500/35 pointer-events-none" />
      <div className="absolute inset-0 rounded-full blur-2xl bg-nebula-cyan/15 transform scale-75 pointer-events-none" />

      {/* Vector Lottie Soaring Rocket Animation */}
      <div className="w-full h-full relative z-10 flex items-center justify-center">
        <LottiePlayer
          src={animationSrc}
          loop
          autoplay
          speed={speed}
          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_12px_28px_rgba(245,158,11,0.25)]"
        />
      </div>
    </motion.div>
  );
}

// ==========================================
// 7. Iqraa Orbital Space Station
// ==========================================
interface OrbitalStationProps {
  className?: string;
  size?: number;
}

export function OrbitalStation({ className = "", size = 150 }: OrbitalStationProps) {
  return (
    <motion.div
      className={`relative inline-block select-none pointer-events-none ${className}`}
      animate={{
        y: [-5, 5, -5],
        rotate: [-1, 2, -1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 rounded-full blur-xl bg-nebula-indigo/20 transform scale-90" />

      <svg
        viewBox="0 0 160 160"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="station-hull" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          <linearGradient id="station-panel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
        </defs>

        <g transform="rotate(-18 80 80)">
          {/* Rotating Torus Habitat Ring */}
          <ellipse
            cx="80"
            cy="80"
            rx="56"
            ry="20"
            stroke="url(#station-hull)"
            strokeWidth="5"
            fill="none"
          />
          <ellipse
            cx="80"
            cy="80"
            rx="56"
            ry="20"
            stroke="#67e8f9"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
          />

          {/* Habitat Ring Spokes */}
          <line x1="80" y1="60" x2="80" y2="100" stroke="#94a3b8" strokeWidth="2.5" />
          <line x1="24" y1="80" x2="136" y2="80" stroke="#94a3b8" strokeWidth="2.5" />

          {/* Central Core Spindle */}
          <rect
            x="74"
            y="48"
            width="12"
            height="64"
            rx="3"
            fill="url(#station-hull)"
            stroke="#cbd5e1"
            strokeWidth="1"
          />

          {/* Top Solar Wing */}
          <rect x="52" y="32" width="56" height="12" rx="2" fill="url(#station-panel)" stroke="#38bdf8" strokeWidth="0.8" />
          <line x1="66" y1="32" x2="66" y2="44" stroke="#bae6fd" strokeWidth="0.6" />
          <line x1="80" y1="32" x2="80" y2="44" stroke="#bae6fd" strokeWidth="0.6" />
          <line x1="94" y1="32" x2="94" y2="44" stroke="#bae6fd" strokeWidth="0.6" />

          {/* Bottom Solar Wing */}
          <rect x="52" y="116" width="56" height="12" rx="2" fill="url(#station-panel)" stroke="#38bdf8" strokeWidth="0.8" />
          <line x1="66" y1="116" x2="66" y2="128" stroke="#bae6fd" strokeWidth="0.6" />
          <line x1="80" y1="116" x2="80" y2="128" stroke="#bae6fd" strokeWidth="0.6" />
          <line x1="94" y1="116" x2="94" y2="128" stroke="#bae6fd" strokeWidth="0.6" />

          {/* Docking Bay Ports */}
          <circle cx="80" cy="48" r="4" fill="#64748b" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="80" cy="112" r="4" fill="#64748b" stroke="#38bdf8" strokeWidth="1" />

          {/* Blinking Navigation LED Strobe */}
          <circle cx="80" cy="26" r="2.5" fill="#10b981" />
          <circle cx="24" cy="80" r="2.5" fill="#06b6d4" />
          <circle cx="136" cy="80" r="2.5" fill="#06b6d4" />
        </g>
      </svg>
    </motion.div>
  );
}

// ==========================================
// 8. Orbital Trajectory Pathway
// ==========================================
interface OrbitalTrajectoryProps {
  className?: string;
}

export function OrbitalTrajectory({ className = "" }: OrbitalTrajectoryProps) {
  return (
    <svg
      viewBox="0 0 600 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      <defs>
        <linearGradient id="orbital-dash-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      <path
        d="M 20 280 C 180 260 220 60 400 40 C 480 30 540 90 580 140"
        stroke="url(#orbital-dash-grad)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />

      {/* Trajectory Waypoint Beacons */}
      <circle cx="220" cy="140" r="3" fill="#06b6d4" opacity="0.6" />
      <circle cx="400" cy="40" r="4" fill="#8b5cf6" opacity="0.8" />
      <circle cx="400" cy="40" r="7" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" fill="none" />
    </svg>
  );
}
