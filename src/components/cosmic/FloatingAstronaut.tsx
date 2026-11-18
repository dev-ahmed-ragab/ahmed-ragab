"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { LottiePlayer } from "./LottiePlayer";
import { Sparkles, Move } from "lucide-react";

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
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Global window scroll physics
  const { scrollYProgress } = useScroll();

  // Smooth zero-g inertia physics via Framer Motion spring
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 18,
    mass: 0.8,
  });

  // Scroll-linked trajectory transforms:
  // As the user travels down the cosmic page, the astronaut gently drifts and tilts
  const scrollYOffset = useTransform(smoothScroll, [0, 0.35, 0.7, 1], [0, 100, 220, 360]);
  const scrollXOffset = useTransform(smoothScroll, [0, 0.25, 0.6, 1], [0, -28, 20, -10]);
  const scrollRotate = useTransform(smoothScroll, [0, 0.25, 0.6, 1], [-3, 5, -5, 2]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none flex items-center justify-center ${className}`}
    >
      {/* 
        Layer 1: Scroll Physics Wrapper (Smooth scroll-linked zero-g travel)
      */}
      <motion.div
        style={{
          y: scrollYOffset,
          x: scrollXOffset,
          rotate: scrollRotate,
        }}
        className="relative flex items-center justify-center will-change-transform"
      >
        {/*
          Layer 2: Organic Idle Zero-G Swimming Motion
          Subtle yaw/pitch bobbing, breathing zero-gravity feel
        */}
        <motion.div
          animate={
            isDragging
              ? { y: 0, rotate: 0 }
              : {
                  y: [-10, 12, -10],
                  rotate: [-2, 3, -2],
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
          className="relative will-change-transform flex items-center justify-center"
        >
          {/* 
            Backlight: Ethereal Cosmic Glow behind silhouette 
            (Purely seamless radial starlight aura)
          */}
          <div
            className={`absolute -inset-10 -z-10 rounded-full blur-[70px] pointer-events-none transition-opacity duration-500 ${
              isDragging ? "opacity-100 scale-125" : isHovered ? "opacity-90" : "opacity-75"
            }`}
            style={{
              background:
                "radial-gradient(ellipse 65% 65% at 50% 45%, rgba(6, 182, 212, 0.32) 0%, rgba(139, 92, 246, 0.26) 45%, transparent 75%)",
            }}
          />

          {/* Secondary ambient indigo thruster stardust back-bloom */}
          <div
            className="absolute -bottom-6 -start-6 w-48 h-48 rounded-full blur-[60px] pointer-events-none opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, transparent 70%)",
            }}
          />

          {/* 
            Layer 3: Interactive Framer Motion Drag Physics Container
            Grab and throw or drag the astronaut across the screen!
          */}
          <motion.div
            drag
            dragConstraints={{ left: -150, right: 150, top: -100, bottom: 200 }}
            dragElastic={0.25}
            dragTransition={{ bounceStiffness: 260, bounceDamping: 18 }}
            whileHover={{ scale: 1.05, cursor: "grab" }}
            whileDrag={{ scale: 1.12, cursor: "grabbing" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            className="relative pointer-events-auto touch-none cursor-grab active:cursor-grabbing flex flex-col items-center group"
            style={{
              width: size,
              maxWidth: "92vw",
            }}
          >
            {/* Interactive Orbit Hint Tooltip */}
            <AnimatePresence>
              {(isHovered || isDragging) && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: -8, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.92 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="absolute -top-12 z-30 pointer-events-none px-3.5 py-1.5 rounded-full bg-space-950/90 backdrop-blur-xl border border-nebula-cyan/40 shadow-xl shadow-nebula-cyan/20 text-xs font-mono text-slate-100 flex items-center gap-2 whitespace-nowrap"
                >
                  {isDragging ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-nebula-cyan animate-spin" />
                      <span className="text-nebula-cyan font-semibold">Zero-G Trajectory / مدار انعدام الجاذبية</span>
                    </>
                  ) : (
                    <>
                      <Move className="w-3.5 h-3.5 text-nebula-cyan animate-pulse" />
                      <span>🚀 Drag me across orbit! / اسحبني في الفضاء</span>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Lottie Vector Astronaut (Customized Cosmic Edition) */}
            <div className="w-full aspect-square drop-shadow-[0_20px_45px_rgba(6,182,212,0.25)] transition-all duration-300">
              <LottiePlayer
                src="/lottie/floating_beyond.json"
                loop
                autoplay
                speed={0.55}
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FloatingAstronaut;
