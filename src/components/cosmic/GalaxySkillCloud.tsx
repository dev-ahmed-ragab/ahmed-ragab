"use client";

import React, { useEffect, useRef, useState } from "react";
import type { SkillItem, SkillCategory } from "@/data/skills";

export interface NodeScreenPos {
  x: number;
  y: number;
  containerWidth: number;
  containerHeight: number;
}

export interface GalaxySkillCloudProps {
  skills: SkillItem[];
  activeCategory: SkillCategory | "all";
  highlightedSkillId?: string | null;
  onSelectSkill?: (skill: SkillItem | null, pos?: NodeScreenPos | null) => void;
  showMesh?: boolean;
  autoSpin?: boolean;
  className?: string;
}

interface ProjectedNode extends SkillItem {
  x0: number;
  y0: number;
  z0: number;
  sx: number;
  sy: number;
  sz: number;
  iconSize: number;
}

/**
 * Universal color parser that handles Hex (#38bdf8), RGB/RGBA, and Tailwind raw HSL triplets ("258 90% 66%")
 */
function toColorWithAlpha(colorStr: string, alpha: number): string {
  if (!colorStr) return `rgba(56, 189, 248, ${alpha})`;
  const trimmed = colorStr.trim();

  // 1. Hex format (#fff, #38bdf8)
  if (trimmed.startsWith("#")) {
    const h = trimmed.slice(1);
    const full =
      h.length === 3 || h.length === 4
        ? h
            .slice(0, 3)
            .split("")
            .map((x) => x + x)
            .join("")
        : h.slice(0, 6);
    const r = parseInt(full.slice(0, 2), 16) || 0;
    const g = parseInt(full.slice(2, 4), 16) || 0;
    const b = parseInt(full.slice(4, 6), 16) || 0;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // 2. Direct rgba or rgb
  if (trimmed.startsWith("rgb")) {
    const parts = trimmed.match(/\d+(\.\d+)?/g);
    if (parts && parts.length >= 3) {
      return `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha})`;
    }
  }

  // 3. Raw HSL triplet format from globals.css: "258 90% 66%"
  if (trimmed.includes("%") || /^\d+\s+\d+/.test(trimmed)) {
    const tokens = trimmed.replace(/,/g, " ").trim().split(/\s+/);
    if (tokens.length >= 3) {
      const h = tokens[0];
      const s = tokens[1].includes("%") ? tokens[1] : `${tokens[1]}%`;
      const l = tokens[2].includes("%") ? tokens[2] : `${tokens[2]}%`;
      return `hsla(${h}, ${s}, ${l}, ${alpha})`;
    }
  }

  return `rgba(56, 189, 248, ${alpha})`;
}

export function GalaxySkillCloud({
  skills,
  activeCategory,
  highlightedSkillId = null,
  onSelectSkill,
  showMesh = true,
  autoSpin = true,
  className = "",
}: GalaxySkillCloudProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const propsRef = useRef({ activeCategory, highlightedSkillId, showMesh, autoSpin, onSelectSkill });
  propsRef.current = { activeCategory, highlightedSkillId, showMesh, autoSpin, onSelectSkill };

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas || skills.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 1. Mathematically perfect Fibonacci Sphere distribution (No squishy wobble!)
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const nodes: ProjectedNode[] = skills.map((skill, i) => {
      const y = skills.length === 1 ? 0 : 1 - (i / (skills.length - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      return {
        ...skill,
        x0: Math.cos(theta) * r,
        y0: y,
        z0: Math.sin(theta) * r,
        sx: 0,
        sy: 0,
        sz: 0,
        iconSize: 42,
      };
    });

    // 2. Build constellation edges from EXPLICIT SEMANTIC CONNECTIONS
    const edges: [number, number][] = [];
    const adj: Set<number>[] = nodes.map(() => new Set());
    const idToIdx = new Map<string, number>();
    nodes.forEach((n, idx) => idToIdx.set(n.id, idx));

    for (let i = 0; i < nodes.length; i++) {
      const connections = nodes[i].connections || [];
      for (const targetId of connections) {
        const j = idToIdx.get(targetId);
        if (j !== undefined && j !== i) {
          if (!adj[i].has(j)) {
            adj[i].add(j);
            adj[j].add(i);
            edges.push([Math.min(i, j), Math.max(i, j)]);
          }
        }
      }
    }

    // 3. Preload SVG icons directly (Data URIs load synchronously in memory)
    const images: (HTMLImageElement | null)[] = nodes.map(() => null);
    nodes.forEach((node, idx) => {
      const img = new Image();
      img.onload = () => {
        images[idx] = img;
      };
      img.src = node.iconSrc;
      if (img.complete && img.naturalWidth > 0) {
        images[idx] = img;
      }
    });

    // 4. Energy pulses along active constellation lines
    const pulses = edges.slice(0, Math.min(10, edges.length)).map((_, idx) => ({
      edgeIdx: (idx * 2) % Math.max(1, edges.length),
      t: (idx * 0.18) % 1,
      speed: 0.0035 + (idx % 3) * 0.0015,
    }));

    // 5. Dynamic theme token reader
    const readTheme = () => {
      const styles = getComputedStyle(document.documentElement);
      const getVal = (prop: string, fallback: string) => {
        const val = styles.getPropertyValue(prop).trim();
        return val || fallback;
      };

      return {
        primary: getVal("--primary", "#38bdf8"),
        accent: getVal("--accent", "#8b5cf6"),
        foreground: getVal("--foreground", "#f8fafc"),
        pillBg: getVal("--card", "226 61% 7%"),
        spaceBg: getVal("--bg-space", "#030712"),
        fontFamily: getVal("--font-sans", "system-ui, -apple-system, sans-serif"),
      };
    };

    let theme = readTheme();
    const themeObserver = new MutationObserver(() => {
      theme = readTheme();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme", "style"],
    });

    // 6. Predictable, steady cosmic drift (ALWAYS forward, never reverse!)
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 600;
    let height = 500;
    let rotX = 0.15;
    let rotY = 0;
    const BASE_VEL_Y = 0.0012; // Slow, calm, majestic forward drift
    let velX = 0;
    let velY = BASE_VEL_Y;
    let hoveredIdx = -1;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let isVisible = true;
    let rafId = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(280, rect.width);
      height = Math.max(340, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const resizeObs = new ResizeObserver(resize);
    resizeObs.observe(container);
    resize();

    const isNodeActive = (idx: number) => {
      const { activeCategory: cat, highlightedSkillId: extId } = propsRef.current;
      const focusIdx =
        hoveredIdx !== -1
          ? hoveredIdx
          : extId
          ? nodes.findIndex((n) => n.id === extId)
          : -1;

      if (focusIdx !== -1) {
        return idx === focusIdx || adj[focusIdx].has(idx);
      }
      if (cat === "all") return true;
      return nodes[idx].category === cat;
    };

    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      // Rotation mechanics:
      // When dragging: follow drag gestures
      // When hovering a node: FREEZE ROTATION COMPLETELY (no wobble, no reverse, no jerk!)
      // When idle: advance forward steadily at BASE_VEL_Y
      if (dragging) {
        // Drag handled in onPointerMove
      } else if (hoveredIdx !== -1) {
        // Dead still! Do not increment rotY or rotX!
        velX = 0;
        velY = 0;
      } else if (propsRef.current.autoSpin && !reducedMotion) {
        // Gentle forward glide
        velY += (BASE_VEL_Y - velY) * 0.06;
        velX += (0 - velX) * 0.06;
        rotY += velY;
        rotX += velX;
      } else {
        velX *= 0.92;
        velY *= 0.92;
        rotY += velY;
        rotX += velX;
      }

      // 3D -> 2D spherical projection (SOLID sphere, zero wobble)
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const isCompact = width < 520;
      const radius = Math.min(width, height) * (isCompact ? 0.36 : 0.38);
      const fov = radius * 2.8;
      const cx = width / 2;
      const cy = height / 2;
      const minIcon = isCompact ? 24 : 34;
      const iconRange = isCompact ? 12 : 16;

      for (const n of nodes) {
        const x1 = n.x0 * cosY - n.z0 * sinY;
        const z1 = n.x0 * sinY + n.z0 * cosY;
        const y2 = n.y0 * cosX - z1 * sinX;
        const z2 = n.y0 * sinX + z1 * cosX;

        const persp = fov / (fov - z2 * radius);
        n.sx = cx + x1 * radius * persp;
        n.sy = cy + y2 * radius * persp;
        n.sz = z2;
        n.iconSize = minIcon + ((z2 + 1) / 2) * iconRange;
      }

      // Constellation lines: Pure, elegant, monochromatic starlight (NO colored triangles!)
      if (propsRef.current.showMesh) {
        for (const [a, b] of edges) {
          const na = nodes[a];
          const nb = nodes[b];
          const avgZ = (na.sz + nb.sz) / 2;

          // Is this line connected to the currently hovered node?
          const isLaser =
            hoveredIdx !== -1 && (a === hoveredIdx || b === hoveredIdx);
          const bothActive = isNodeActive(a) && isNodeActive(b);

          ctx.beginPath();
          ctx.moveTo(na.sx, na.sy);
          ctx.lineTo(nb.sx, nb.sy);

          if (isLaser) {
            // Intense glowing laser in the hovered technology's brand color!
            const hoverNode = nodes[hoveredIdx];
            ctx.strokeStyle = hoverNode.color;
            ctx.lineWidth = 2.2;
            ctx.globalAlpha = 0.95;
            ctx.stroke();
          } else if (hoveredIdx !== -1) {
            // Other lines fade into the background softly when a skill is focused
            ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = 0.4;
            ctx.stroke();
          } else if (bothActive) {
            // Idle active: subtle clean starlight line
            const depthAlpha = 0.08 + ((avgZ + 1) / 2) * 0.12;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
            ctx.lineWidth = 0.85;
            ctx.globalAlpha = depthAlpha;
            ctx.stroke();
          } else {
            // Inactive category: ultra faint
            ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = 0.25;
            ctx.stroke();
          }
          ctx.globalAlpha = 1.0;
        }

        // Data pulses: ONLY along laser lines when a node is hovered, or subtle white starlight pulses when idle
        if (!reducedMotion) {
          for (const p of pulses) {
            p.t += p.speed;
            if (p.t > 1) {
              p.t = 0;
              p.edgeIdx = (p.edgeIdx + 3) % edges.length;
            }
            const [a, b] = edges[p.edgeIdx];
            const isLaser =
              hoveredIdx !== -1 && (a === hoveredIdx || b === hoveredIdx);

            if (hoveredIdx !== -1 && !isLaser) continue;
            if (!isNodeActive(a) || !isNodeActive(b)) continue;

            const na = nodes[a];
            const nb = nodes[b];
            const pz = na.sz + (nb.sz - na.sz) * p.t;
            if (pz < -0.3) continue;

            ctx.beginPath();
            ctx.arc(
              na.sx + (nb.sx - na.sx) * p.t,
              na.sy + (nb.sy - na.sy) * p.t,
              isLaser ? 2.8 : 1.6,
              0,
              Math.PI * 2
            );
            ctx.fillStyle = isLaser ? nodes[hoveredIdx].color : "#ffffff";
            ctx.globalAlpha = isLaser ? 0.95 : 0.45;
            ctx.fill();
            ctx.globalAlpha = 1.0;
          }
        }
      }

      // Draw skills sorted back-to-front
      const order = nodes.map((_, idx) => idx).sort((a, b) => nodes[a].sz - nodes[b].sz);

      for (const idx of order) {
        const n = nodes[idx];
        const depth = (n.sz + 1) / 2;
        const isHover = idx === hoveredIdx;
        const isConnected = hoveredIdx !== -1 && adj[hoveredIdx].has(idx);
        const active = isNodeActive(idx);

        let alpha = 0.16;
        if (isHover) {
          alpha = 1.0;
        } else if (isConnected) {
          alpha = 0.95;
        } else if (active) {
          alpha = 0.35 + depth * 0.65;
        }

        const sz = n.iconSize;

        ctx.save();
        ctx.globalAlpha = alpha;

        // Circular glass backdrop behind icon
        ctx.beginPath();
        ctx.arc(n.sx, n.sy, sz * 0.54, 0, Math.PI * 2);
        ctx.fillStyle = toColorWithAlpha(
          theme.pillBg,
          isHover ? 0.98 : isConnected ? 0.88 : 0.7
        );
        ctx.fill();

        ctx.lineWidth = isHover ? 2.2 : isConnected ? 1.6 : 1;
        ctx.strokeStyle = toColorWithAlpha(
          n.color,
          isHover ? 1.0 : isConnected ? 0.85 : 0.35
        );
        ctx.stroke();

        // Glowing outer halo ring on hover or connected sibling
        if (isHover || isConnected) {
          ctx.beginPath();
          ctx.arc(n.sx, n.sy, sz * (isHover ? 0.72 : 0.66), 0, Math.PI * 2);
          ctx.strokeStyle = toColorWithAlpha(n.color, isHover ? 0.5 : 0.25);
          ctx.lineWidth = isHover ? 1.8 : 1.0;
          ctx.stroke();
        }

        // Official SVG icon
        const img = images[idx];
        if (img && img.complete && img.naturalWidth > 0) {
          const iconDraw = sz * 0.66;
          ctx.drawImage(img, n.sx - iconDraw / 2, n.sy - iconDraw / 2, iconDraw, iconDraw);
        } else {
          ctx.fillStyle = n.color;
          ctx.font = `700 ${Math.max(12, Math.round(sz * 0.34))}px ${theme.fontFamily}`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(n.name.slice(0, 2).toUpperCase(), n.sx, n.sy);
        }

        // Skill name pill underneath icon
        const baseFont = width < 520 ? 9.5 : 11;
        const fontSize = Math.max(9, Math.round(baseFont + depth * 1.5));
        ctx.font = `${isHover || isConnected ? 600 : 500} ${fontSize}px ${theme.fontFamily}`;
        const tw = ctx.measureText(n.name).width;
        const padX = isHover ? 9 : width < 520 ? 5 : 7;
        const pillH = isHover ? 22 : width < 520 ? 17 : 20;
        const pillX = n.sx - tw / 2 - padX;
        const pillY = n.sy + sz * 0.54 + 4;

        ctx.beginPath();
        ctx.roundRect(pillX, pillY, tw + padX * 2, pillH, 10);
        ctx.fillStyle = toColorWithAlpha(
          theme.pillBg,
          isHover ? 0.98 : isConnected ? 0.9 : 0.78
        );
        ctx.fill();

        if (isHover || isConnected) {
          ctx.lineWidth = isHover ? 1.4 : 1;
          ctx.strokeStyle = toColorWithAlpha(n.color, isHover ? 0.95 : 0.6);
          ctx.stroke();
        }

        ctx.fillStyle = isHover || isConnected ? "#ffffff" : toColorWithAlpha(theme.foreground, 0.9);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(n.name, n.sx, pillY + pillH / 2);

        ctx.restore();
      }

      rafId = requestAnimationFrame(render);
    };

    // Pause animation when scrolled out of view
    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(render);
        } else {
          cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0.05 }
    );
    io.observe(container);

    // Pointer events: Drag spins freely; moving cursor does NOT steer or reverse rotation!
    let downX = 0;
    let downY = 0;

    const findHitNode = (mx: number, my: number, maxDist: number) => {
      let best = -1;
      let bestZ = -Infinity;
      let bestDist = maxDist;
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].sz <= -0.35) continue;
        const d = Math.hypot(nodes[i].sx - mx, nodes[i].sy - my);
        // Prefer front-most node when multiple nodes overlap within hit radius
        if (d < bestDist || (d < maxDist && nodes[i].sz > bestZ + 0.15 && d < maxDist * 0.9)) {
          if (nodes[i].sz >= bestZ - 0.15 || d < bestDist * 0.65) {
            bestDist = d;
            bestZ = nodes[i].sz;
            best = i;
          }
        }
      }
      return best;
    };

    const emitSelection = (idx: number) => {
      if (idx !== -1) {
        const nextSkill = skills[idx];
        const node = nodes[idx];
        propsRef.current.onSelectSkill?.(nextSkill, {
          x: node.sx,
          y: node.sy,
          containerWidth: width,
          containerHeight: height,
        });
      } else {
        propsRef.current.onSelectSkill?.(null, null);
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      downX = e.clientX;
      downY = e.clientY;
      lastX = e.clientX;
      lastY = e.clientY;
      container.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (dragging) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        rotY += dx * 0.005;
        rotX += dy * 0.005;
        velY = dx * 0.002;
        velX = dy * 0.002;
        lastX = e.clientX;
        lastY = e.clientY;
        return;
      }

      if (e.pointerType === "touch") return;

      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      // Stable Hysteresis hit testing: No steering, no acceleration
      let best = -1;
      if (hoveredIdx !== -1) {
        const currNode = nodes[hoveredIdx];
        const distToCurrent = Math.hypot(currNode.sx - mx, currNode.sy - my);
        // Keep active node as long as cursor is within 48px
        if (distToCurrent < 48 && currNode.sz > -0.35) {
          best = hoveredIdx;
        }
      }

      if (best === -1) {
        best = findHitNode(mx, my, 32);
      }

      if (best !== hoveredIdx) {
        hoveredIdx = best;
        emitSelection(best);
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      const moved = Math.hypot(e.clientX - downX, e.clientY - downY);
      dragging = false;

      // Touch tap support: tap a node to toggle its details card
      if (moved < 8 && e.pointerType !== "mouse") {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const tapped = findHitNode(mx, my, 36);
        hoveredIdx = tapped === hoveredIdx ? -1 : tapped;
        emitSelection(hoveredIdx);
      }
    };

    const onPointerLeave = (e: PointerEvent) => {
      dragging = false;
      if (e.pointerType === "mouse") {
        hoveredIdx = -1;
        emitSelection(-1);
      }
    };

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointerleave", onPointerLeave);

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      io.disconnect();
      resizeObs.disconnect();
      themeObserver.disconnect();
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [skills]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[410px] sm:h-[580px] lg:h-[660px] cursor-grab touch-pan-y sm:touch-none overflow-visible active:cursor-grabbing select-none ${className}`}
      aria-label="Interactive galaxy skill cloud"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

export default GalaxySkillCloud;
