"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface SpaceshipBackdropProps {
  containerRef?: React.RefObject<HTMLElement | null>;
  className?: string;
  assetSrc?: string;
}

export function SpaceshipBackdrop({
  containerRef,
  className = "",
  assetSrc = "/assets/projects-spaceship-crew.png",
}: SpaceshipBackdropProps) {
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport, { passive: true });
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Section-targeted scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 20,
    mass: 0.8,
  });

  // Very subtle zoom scale (1.0 to 1.03) to create breathing depth while remaining stationary in viewport
  const subtleScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    shouldReduceMotion || isMobile ? [1, 1, 1] : [1, 1.03, 1.01]
  );

  return (
    <div
      aria-hidden="true"
      className={`relative w-full h-full select-none pointer-events-none overflow-hidden ${className}`}
    >
      {/* Full-bleed Panoramic Starship & Maintenance Crew Layer */}
      <motion.div
        style={{
          scale: subtleScale,
        }}
        className="absolute inset-0 w-full h-full"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetSrc}
          alt="Ahmed Ragab Spaceship & Orbital Maintenance Crew"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)",
          }}
          className="w-full h-full object-contain sm:object-cover object-center opacity-85 sm:opacity-95 filter drop-shadow-[0_20px_50px_rgba(6,182,212,0.18)]"
        />
      </motion.div>
    </div>
  );
}

export default SpaceshipBackdrop;
