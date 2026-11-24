"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { TransparentCosmicVideo } from "./TransparentCosmicVideo";

interface FloatingAstronautProps {
  className?: string;
  size?: number; // optional custom size (width in px)
  priority?: boolean;
}

export function FloatingAstronaut({
  className = "",
  size = 460,
}: FloatingAstronautProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Global window scroll physics
  const { scrollYProgress } = useScroll();

  // Smooth zero-g inertia physics via Framer Motion spring
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 18,
    mass: 0.8,
  });

  // Scroll-linked trajectory transforms:
  // Kept within HeroSection boundaries so the astronaut never bleeds or hangs into subsequent sections
  const scrollYOffset = useTransform(
    smoothScroll,
    [0, 0.15, 0.3],
    shouldReduceMotion ? [0, 0, 0] : isMobile ? [0, 15, 30] : [0, 25, 45]
  );
  const scrollXOffset = useTransform(
    smoothScroll,
    [0, 0.15, 0.3],
    shouldReduceMotion || isMobile ? [0, 0, 0] : [0, -10, 5]
  );
  const scrollRotate = useTransform(
    smoothScroll,
    [0, 0.15, 0.3],
    shouldReduceMotion ? [0, 0, 0] : [-1, 1.5, 0]
  );
  const astronautOpacity = useTransform(
    smoothScroll,
    [0, 0.12, 0.22],
    [1, 0.85, 0]
  );

  return (
    <div
      ref={containerRef}
      className={`relative select-none flex items-center justify-center max-w-full overflow-visible ${className}`}
    >
      {/* 
        Layer 1: Scroll Physics Wrapper (Smooth scroll-linked zero-g travel)
      */}
      <motion.div
        style={{
          y: scrollYOffset,
          x: scrollXOffset,
          rotate: scrollRotate,
          opacity: astronautOpacity,
        }}
        className="relative flex items-center justify-center will-change-transform max-w-full"
      >
        {/*
          Layer 2: Organic Idle Zero-G Floating Motion
          Subtle yaw/pitch bobbing, breathing zero-gravity feel (Fixed in place, non-draggable)
        */}
        <motion.div
          animate={
            shouldReduceMotion
              ? { y: 0, rotate: 0 }
              : {
                  y: [-8, 10, -8],
                  rotate: [-1.2, 1.8, -1.2],
                }
          }
          transition={{
            y: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 9.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative will-change-transform flex items-center justify-center max-w-full"
        >
          {/* 
            Backlight: Ethereal Cosmic Glow behind silhouette 
            (Purely seamless radial starlight aura)
          */}
          <div
            className="absolute -inset-6 sm:-inset-10 -z-10 rounded-full blur-[50px] sm:blur-[70px] pointer-events-none opacity-75"
            style={{
              background:
                "radial-gradient(ellipse 65% 65% at 50% 45%, rgba(6, 182, 212, 0.32) 0%, rgba(139, 92, 246, 0.26) 45%, transparent 75%)",
            }}
          />

          {/* Secondary ambient indigo thruster stardust back-bloom */}
          <div
            className="absolute -bottom-4 -start-4 sm:-bottom-6 sm:-start-6 w-32 sm:w-48 h-32 sm:h-48 rounded-full blur-[45px] sm:blur-[60px] pointer-events-none opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, transparent 70%)",
            }}
          />

          {/* 
            Layer 3: Non-draggable, Purely Floating Container
          */}
          <div
            className="relative pointer-events-none flex flex-col items-center max-w-full"
            style={{
              width: size,
              maxWidth: "88vw",
            }}
          >
            {/* 100% Transparent Hardware-Accelerated Cosmic Video */}
            <div className="w-full aspect-[856/1072] transition-all duration-300 pointer-events-none relative flex items-center justify-center">
              <TransparentCosmicVideo
                src="/videos/ahmed_cosmic_hero.mp4"
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FloatingAstronaut;
