"use client";

import { motion, useReducedMotion } from "framer-motion";

interface CosmicFlyingSaucerProps {
  className?: string;
  size?: number;
}

/**
 * Aerospace-grade Orbital Reconnaissance Craft
 * Features realistic brushed-titanium metallic hull, armored glass canopy,
 * recessed ion vents, and GPU-accelerated cosmic color-shifting plasma core.
 */
export function CosmicFlyingSaucer({
  className = "",
  size = 165,
}: CosmicFlyingSaucerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{ width: size, height: size * 0.72 }}
      aria-hidden="true"
    >
      {/* Volumetric Downward Grav-Drive Ion Plume (Color-Shifting) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { opacity: 0.45 }
            : {
                opacity: [0.35, 0.7, 0.45, 0.65, 0.35],
                scaleY: [0.92, 1.12, 0.98, 1.08, 0.92],
                scaleX: [0.96, 1.04, 0.98, 1.02, 0.96],
                filter: [
                  "hue-rotate(0deg)",
                  "hue-rotate(90deg)",
                  "hue-rotate(180deg)",
                  "hue-rotate(270deg)",
                  "hue-rotate(360deg)",
                ],
              }
        }
        transition={{
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          scaleY: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          scaleX: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          filter: { duration: 14, repeat: Infinity, ease: "linear" },
        }}
        className="absolute top-[58%] w-[115%] h-[115px] pointer-events-none -z-10 origin-top"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 50% 0%, rgba(6, 182, 212, 0.42) 0%, rgba(56, 189, 248, 0.16) 45%, transparent 78%)",
        }}
      />

      {/* Weighty Zero-G Orbital Hover & Banking */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { y: 0, rotate: 0 }
            : {
                y: [-5, 7, -5],
                rotate: [-1.4, 1.8, -1.4],
              }
        }
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 8.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative w-full h-full flex items-center justify-center will-change-transform"
      >
        <svg
          viewBox="0 0 260 170"
          className="w-full h-full overflow-visible drop-shadow-[0_18px_34px_rgba(2,6,23,0.9)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Realistic Brushed Titanium Upper Hull */}
            <linearGradient id="hull-titanium" x1="15%" y1="0%" x2="85%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="22%" stopColor="#94a3b8" />
              <stop offset="48%" stopColor="#334155" />
              <stop offset="76%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Dark Carbon Composite Armor Plate */}
            <linearGradient id="hull-carbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            {/* Lower Underside Armor */}
            <linearGradient id="hull-underside" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="55%" stopColor="#090d16" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            {/* Metallic Specular Rim Highlight */}
            <linearGradient id="hull-specular" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="30%" stopColor="rgba(226,232,240,0.45)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.75)" />
              <stop offset="70%" stopColor="rgba(226,232,240,0.45)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>

            {/* Armored Smoked Glass Canopy */}
            <radialGradient id="canopy-glass" cx="38%" cy="28%" r="70%">
              <stop offset="0%" stopColor="#475569" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#0f172a" stopOpacity="0.92" />
              <stop offset="75%" stopColor="#020617" stopOpacity="0.96" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.98" />
            </radialGradient>

            {/* Plasma Energy Ring Gradient (Base Cyan -> shifted via hue-rotate) */}
            <linearGradient id="plasma-ring" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="25%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#a5f3fc" />
              <stop offset="75%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>

            {/* Radial Ion Core */}
            <radialGradient id="ion-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ecfeff" />
              <stop offset="40%" stopColor="#22d3ee" />
              <stop offset="80%" stopColor="#0891b2" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>

            {/* Soft Realism Glow Filter */}
            <filter id="craft-plasma-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3.2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* =============================================================== */}
          {/* 1. METALLIC AEROSPACE HULL (Realistic Titanium & Carbon)        */}
          {/* =============================================================== */}

          {/* Rear Dorsal Stabilizer Fins */}
          <path
            d="M74,78 L42,60 L66,68 Z"
            fill="url(#hull-carbon)"
            stroke="#334155"
            strokeWidth="1"
          />
          <path
            d="M186,78 L218,60 L194,68 Z"
            fill="url(#hull-carbon)"
            stroke="#334155"
            strokeWidth="1"
          />

          {/* Lower Ventral Grav-Drive Housing */}
          <path
            d="M95,104 L165,104 L148,124 Q130,130 112,124 Z"
            fill="url(#hull-underside)"
            stroke="#334155"
            strokeWidth="1.1"
          />

          {/* Lower Hull Chassis Plate */}
          <ellipse
            cx="130"
            cy="96"
            rx="112"
            ry="24"
            fill="url(#hull-underside)"
            stroke="#1e293b"
            strokeWidth="1.2"
          />

          {/* Side Winglet / Nacelle Armor Cowls */}
          <path
            d="M14,91 Q24,80 58,79 L62,93 Q28,96 14,91 Z"
            fill="url(#hull-carbon)"
            stroke="#475569"
            strokeWidth="0.9"
          />
          <path
            d="M246,91 Q236,80 202,79 L198,93 Q232,96 246,91 Z"
            fill="url(#hull-carbon)"
            stroke="#475569"
            strokeWidth="0.9"
          />

          {/* Main Upper Titanium Disk Hull */}
          <ellipse
            cx="130"
            cy="86"
            rx="108"
            ry="22"
            fill="url(#hull-titanium)"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1"
          />

          {/* Subtle Armor Panel Seams & Bevels */}
          <ellipse
            cx="130"
            cy="85"
            rx="82"
            ry="15"
            fill="none"
            stroke="rgba(15,23,42,0.75)"
            strokeWidth="1.2"
          />
          <path
            d="M42,84 L74,80 M218,84 L186,80 M85,99 L94,91 M175,99 L166,91"
            stroke="rgba(15,23,42,0.7)"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Crisp Metallic Specular Edge Highlight */}
          <path
            d="M36,80 Q130,61 224,80"
            fill="none"
            stroke="url(#hull-specular)"
            strokeWidth="1.2"
          />

          {/* Cockpit Collar / Reinforced Titanium Frame */}
          <ellipse
            cx="130"
            cy="74"
            rx="46"
            ry="11"
            fill="url(#hull-carbon)"
            stroke="#475569"
            strokeWidth="1.2"
          />

          {/* Armored Smoked-Glass Cockpit Canopy */}
          <path
            d="M90,74 Q92,36 130,36 Q168,36 170,74 Q130,80 90,74 Z"
            fill="url(#canopy-glass)"
            stroke="#64748b"
            strokeWidth="1.3"
          />

          {/* Canopy Structural Rib Struts */}
          <path
            d="M112,76 Q114,44 123,37 M148,76 Q146,44 137,37"
            fill="none"
            stroke="#334155"
            strokeWidth="1.4"
            opacity="0.85"
          />

          {/* Crisp Glass Reflection Highlight */}
          <path
            d="M104,56 Q114,41 134,40 Q124,47 110,60 Z"
            fill="rgba(255,255,255,0.22)"
          />

          {/* Micro Dorsal Sensor Array */}
          <rect x="128" y="26" width="4" height="10" rx="1.5" fill="#475569" />

          {/* =============================================================== */}
          {/* 2. COLOR-SHIFTING PLASMA & ION ENERGY LAYER                     */}
          {/* (Smoothly shifts across Cyan -> Violet -> Amber -> Emerald)     */}
          {/* =============================================================== */}
          <motion.g
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    filter: [
                      "hue-rotate(0deg)",
                      "hue-rotate(90deg)",
                      "hue-rotate(180deg)",
                      "hue-rotate(270deg)",
                      "hue-rotate(360deg)",
                    ],
                  }
            }
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Subtle Interior Cockpit HUD Glow */}
            <ellipse
              cx="130"
              cy="64"
              rx="18"
              ry="4.5"
              fill="#22d3ee"
              opacity="0.35"
              filter="url(#craft-plasma-glow)"
            />

            {/* Dorsal Beacon Tip */}
            <circle
              cx="130"
              cy="25"
              r="2.4"
              fill="#67e8f9"
              filter="url(#craft-plasma-glow)"
            />

            {/* Main Equatorial Ion Accelerator Ring */}
            <ellipse
              cx="130"
              cy="90"
              rx="109"
              ry="12"
              fill="none"
              stroke="url(#plasma-ring)"
              strokeWidth="2.2"
              filter="url(#craft-plasma-glow)"
              opacity="0.92"
            />

            {/* Recessed Side Intake Thruster Vents */}
            <path
              d="M30,88 L50,86 L49,90 L29,91 Z"
              fill="#22d3ee"
              filter="url(#craft-plasma-glow)"
              opacity="0.85"
            />
            <path
              d="M230,88 L210,86 L211,90 L231,91 Z"
              fill="#22d3ee"
              filter="url(#craft-plasma-glow)"
              opacity="0.85"
            />

            {/* Precision Navigation & Strobe Nodes along Hull Rim */}
            <g filter="url(#craft-plasma-glow)">
              <motion.circle
                cx="42"
                cy="91"
                r="2.2"
                fill="#67e8f9"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: 0 }}
              />
              <motion.circle
                cx="76"
                cy="98"
                r="2.4"
                fill="#22d3ee"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: 0.3 }}
              />
              <motion.circle
                cx="112"
                cy="101"
                r="2.6"
                fill="#a5f3fc"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: 0.6 }}
              />
              <motion.circle
                cx="148"
                cy="101"
                r="2.6"
                fill="#a5f3fc"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: 0.6 }}
              />
              <motion.circle
                cx="184"
                cy="98"
                r="2.4"
                fill="#22d3ee"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: 0.3 }}
              />
              <motion.circle
                cx="218"
                cy="91"
                r="2.2"
                fill="#67e8f9"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: 0 }}
              />
            </g>

            {/* Ventral Grav-Drive Propulsion Core */}
            <motion.ellipse
              cx="130"
              cy="125"
              rx="18"
              ry="5.5"
              fill="url(#ion-core)"
              filter="url(#craft-plasma-glow)"
              animate={
                shouldReduceMotion
                  ? { opacity: 0.85 }
                  : {
                      rx: [15, 22, 15],
                      opacity: [0.75, 1, 0.75],
                    }
              }
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
}

export default CosmicFlyingSaucer;
