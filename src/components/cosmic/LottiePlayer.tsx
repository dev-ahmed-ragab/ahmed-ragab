"use client";

import React, { useEffect, useState, useMemo, type CSSProperties, type Ref } from "react";
import { Lottie, type LottieHandle } from "lottie-react";

export interface LottiePlayerProps {
  /**
   * The animation data object (parsed JSON) or path to JSON file.
   * Both animationData and src are supported for compatibility.
   */
  animationData?: object | Record<string, unknown>;
  src?: string | object;
  loop?: boolean | number;
  autoplay?: boolean;
  speed?: number;
  className?: string;
  style?: CSSProperties;
  lottieRef?: Ref<LottieHandle>;
  fallback?: React.ReactNode;
  preserveAspectRatio?: string;
  assetsPath?: string;
}

export function LottiePlayer({
  animationData,
  src,
  loop = true,
  autoplay = true,
  speed = 1,
  className = "",
  style,
  lottieRef,
  fallback,
  preserveAspectRatio = "xMidYMid meet",
  assetsPath,
}: LottiePlayerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const animationSource = useMemo(() => {
    return animationData ?? src;
  }, [animationData, src]);

  // SSR Placeholder to prevent any window/document access or hydration mismatches
  if (!mounted || !animationSource) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden ${className}`}
        style={style}
        aria-hidden="true"
      >
        {fallback || (
          <div className="w-full h-full min-h-[40px] flex items-center justify-center opacity-30">
            <span className="w-3 h-3 rounded-full bg-nebula-cyan/40 animate-ping" />
          </div>
        )}
      </div>
    );
  }

  return (
    <Lottie
      src={animationSource}
      loop={loop}
      autoplay={autoplay}
      speed={speed}
      className={className}
      style={style}
      lottieRef={lottieRef}
      assetsPath={assetsPath}
      rendererSettings={{
        preserveAspectRatio,
      }}
    />
  );
}

export default LottiePlayer;
