"use client";

import { useEffect, useRef } from "react";

interface CosmicCanvasProps {
  className?: string;
}

interface Star {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
  parallaxFactor: number;
}

interface DriftingDust {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  glowSize: number;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  life: number;
  maxLife: number;
  color: string;
}

export function CosmicCanvas({ className = "" }: CosmicCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let lastTime = performance.now();
    let nextMeteorTime = performance.now() + 4000;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let scrollY = window.scrollY;

    const isMobile = width < 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 2);

    const setupCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    setupCanvas();

    // 1. Distant Micro Stars (Subtle twinkling deep field - tuned for mobile performance)
    const distantCount = isMobile
      ? Math.min(75, Math.floor(width / 16))
      : Math.min(160, Math.floor(width / 9));
    const distantStars: Star[] = Array.from({ length: distantCount }, () => {
      const baseX = Math.random() * width;
      const baseY = Math.random() * height;
      const baseOpacity = Math.random() * 0.5 + 0.2;
      return {
        x: baseX,
        y: baseY,
        baseX,
        baseY,
        size: Math.random() * 0.75 + 0.35,
        opacity: baseOpacity,
        baseOpacity,
        twinkleSpeed: Math.random() * 1.5 + 0.6,
        twinklePhase: Math.random() * Math.PI * 2,
        color:
          Math.random() > 0.3
            ? "240, 246, 255" // Pure diamond white
            : Math.random() > 0.5
            ? "186, 230, 253" // Faint ice cyan
            : "233, 213, 255", // Faint lilac
        parallaxFactor: Math.random() * 0.04 + 0.01,
      };
    });

    // 2. Mid-Field Luminous Stars (Vibrant chromatic cosmic beacons)
    const luminousCount = isMobile
      ? Math.min(18, Math.floor(width / 50))
      : Math.min(45, Math.floor(width / 32));
    const starColors = [
      "139, 92, 246", // Violet
      "6, 182, 212",  // Cyan
      "99, 102, 241", // Indigo
      "251, 191, 36", // Soft Amber
      "255, 255, 255",// Bright White
    ];
    const luminousStars: Star[] = Array.from({ length: luminousCount }, () => {
      const baseX = Math.random() * width;
      const baseY = Math.random() * height;
      const baseOpacity = Math.random() * 0.55 + 0.35;
      return {
        x: baseX,
        y: baseY,
        baseX,
        baseY,
        size: Math.random() * 1.4 + 0.8,
        opacity: baseOpacity,
        baseOpacity,
        twinkleSpeed: Math.random() * 2.2 + 0.8,
        twinklePhase: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        parallaxFactor: Math.random() * 0.08 + 0.04,
      };
    });

    // 3. Drifting Cosmic Dust Motes (Floating ambient stardust)
    const dustCount = isMobile
      ? Math.min(10, Math.floor(width / 70))
      : Math.min(30, Math.floor(width / 45));
    const dustParticles: DriftingDust[] = Array.from({ length: dustCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 1.8 + 0.6,
      color: Math.random() > 0.5 ? "6, 182, 212" : "139, 92, 246",
      opacity: Math.random() * 0.4 + 0.15,
      glowSize: Math.random() * 8 + 4,
    }));

    // 4. Shooting Stars (Occasional cinematic meteors)
    const meteors: Meteor[] = [];

    const spawnMeteor = () => {
      // Spawn meteor from top or upper side
      const startX = Math.random() * (width * 0.85);
      const startY = Math.random() * (height * 0.4);
      const angle = (Math.PI / 180) * (Math.random() * 18 + 32); // 32 to 50 degrees down-right
      const speed = Math.random() * 7 + 8; // fast and graceful

      meteors.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 80 + 70,
        opacity: 0.9,
        life: 0,
        maxLife: Math.floor(Math.random() * 30 + 35),
        color: Math.random() > 0.4 ? "186, 230, 253" : "224, 231, 255",
      });
    };

    // Scroll listener for smooth 3D parallax depth
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize listener with debounced re-scale
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setupCanvas();
      }, 120);
    };
    window.addEventListener("resize", handleResize);

    // Tab visibility handling (pause animation when tab is inactive)
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = performance.now();
        render();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Animation Loop
    const render = () => {
      if (!isVisible) return;

      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1); // clamp delta
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // --- Render Distant Micro-Stars ---
      for (let i = 0; i < distantStars.length; i++) {
        const s = distantStars[i];
        s.twinklePhase += s.twinkleSpeed * delta;
        const currentOpacity =
          s.baseOpacity + Math.sin(s.twinklePhase) * (s.baseOpacity * 0.45);

        // Subtle vertical parallax wrap
        const py = (s.baseY - scrollY * s.parallaxFactor) % height;
        const finalY = py < 0 ? py + height : py;

        ctx.beginPath();
        ctx.arc(s.x, finalY, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${Math.max(0.1, currentOpacity)})`;
        ctx.fill();
      }

      // --- Render Luminous Stars with Subtle Bloom ---
      for (let i = 0; i < luminousStars.length; i++) {
        const s = luminousStars[i];
        s.twinklePhase += s.twinkleSpeed * delta;
        const currentOpacity =
          s.baseOpacity + Math.sin(s.twinklePhase) * (s.baseOpacity * 0.5);

        const py = (s.baseY - scrollY * s.parallaxFactor) % height;
        const finalY = py < 0 ? py + height : py;

        // Star core
        ctx.beginPath();
        ctx.arc(s.x, finalY, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${Math.max(0.2, currentOpacity)})`;
        ctx.fill();

        // Subtle starlight flare on brightest stars
        if (s.size > 1.2 && currentOpacity > 0.6) {
          ctx.beginPath();
          ctx.arc(s.x, finalY, s.size * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${s.color}, ${currentOpacity * 0.15})`;
          ctx.fill();
        }
      }

      // --- Render Floating Cosmic Dust Motes ---
      for (let i = 0; i < dustParticles.length; i++) {
        const p = dustParticles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();

        // Soft stardust halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.glowSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity * 0.18})`;
        ctx.fill();
      }

      // --- Meteor Spawn & Rendering ---
      if (now > nextMeteorTime) {
        spawnMeteor();
        // Next shooting star in 8 - 16 seconds
        nextMeteorTime = now + Math.random() * 8000 + 8000;
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.life++;
        m.x += m.vx;
        m.y += m.vy;

        const progress = m.life / m.maxLife;
        const currentOpacity = (1 - progress) * m.opacity;

        if (progress >= 1 || m.x > width + 100 || m.y > height + 100) {
          meteors.splice(i, 1);
          continue;
        }

        // Tail gradient
        const tailX = m.x - (m.vx / Math.hypot(m.vx, m.vy)) * m.length;
        const tailY = m.y - (m.vy / Math.hypot(m.vx, m.vy)) * m.length;

        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, `rgba(${m.color}, 0)`);
        grad.addColorStop(0.7, `rgba(${m.color}, ${currentOpacity * 0.5})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${currentOpacity})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // Meteor Head Spark
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimeout(resizeTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 w-full h-full max-w-full overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
}
