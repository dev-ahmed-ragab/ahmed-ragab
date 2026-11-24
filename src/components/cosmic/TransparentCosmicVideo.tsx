"use client";

import { useEffect, useRef, useState } from "react";

interface TransparentCosmicVideoProps {
  src: string;
  className?: string;
}

export function TransparentCosmicVideo({
  src,
  className = "",
}: TransparentCosmicVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    let animId: number;
    let isCancelled = false;

    // Set initial canvas resolution to match video aspect ratio (856x1072)
    canvas.width = 856;
    canvas.height = 1072;

    const setupCanvas = () => {
      if (video.videoWidth && video.videoHeight) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      }
      setHasStarted(true);
    };

    if (video.readyState >= 1) {
      setupCanvas();
    } else {
      video.addEventListener("loadedmetadata", setupCanvas);
      video.addEventListener("canplay", setupCanvas);
    }

    // Try WebGL first for zero-overhead GPU rendering
    let gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
    });

    let useWebGL = false;
    let program: WebGLProgram | null = null;
    let texture: WebGLTexture | null = null;
    let posBuf: WebGLBuffer | null = null;
    let texBuf: WebGLBuffer | null = null;

    if (gl) {
      try {
        const vs = gl.createShader(gl.VERTEX_SHADER)!;
        gl.shaderSource(
          vs,
          `attribute vec2 a_p; attribute vec2 a_t; varying vec2 v_t;
           void main() { gl_Position = vec4(a_p, 0.0, 1.0); v_t = a_t; }`
        );
        gl.compileShader(vs);

        const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
        gl.shaderSource(
          fs,
          `precision mediump float;
           uniform sampler2D u_v;
           varying vec2 v_t;
           void main() {
             vec4 c = texture2D(u_v, v_t);
             float m = max(c.r, max(c.g, c.b));
             float a = smoothstep(0.04, 0.16, m);
             gl_FragColor = vec4(c.rgb, c.a * a);
           }`
        );
        gl.compileShader(fs);

        program = gl.createProgram()!;
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);

        if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
          gl.useProgram(program);

          posBuf = gl.createBuffer()!;
          gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
          gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
            gl.STATIC_DRAW
          );

          const aP = gl.getAttribLocation(program, "a_p");
          gl.enableVertexAttribArray(aP);
          gl.vertexAttribPointer(aP, 2, gl.FLOAT, false, 0, 0);

          texBuf = gl.createBuffer()!;
          gl.bindBuffer(gl.ARRAY_BUFFER, texBuf);
          gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([0, 1, 1, 1, 0, 0, 1, 0]),
            gl.STATIC_DRAW
          );

          const aT = gl.getAttribLocation(program, "a_t");
          gl.enableVertexAttribArray(aT);
          gl.vertexAttribPointer(aT, 2, gl.FLOAT, false, 0, 0);

          texture = gl.createTexture()!;
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

          useWebGL = true;
        }
      } catch {
        useWebGL = false;
      }
    }

    // 2D fallback context if WebGL fails
    const ctx2d = !useWebGL ? canvas.getContext("2d", { willReadFrequently: true }) : null;

    const renderLoop = () => {
      if (isCancelled) return;

      if (video.readyState >= 2) {
        if (!hasStarted) setHasStarted(true);

        if (useWebGL && gl && texture && program) {
          gl.viewport(0, 0, canvas.width, canvas.height);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGBA,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            video
          );
          gl.clearColor(0, 0, 0, 0);
          gl.clear(gl.COLOR_BUFFER_BIT);
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        } else if (ctx2d) {
          ctx2d.clearRect(0, 0, canvas.width, canvas.height);
          ctx2d.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imgData = ctx2d.getImageData(0, 0, canvas.width, canvas.height);
          const d = imgData.data;
          for (let i = 0; i < d.length; i += 4) {
            const maxC = Math.max(d[i], d[i + 1], d[i + 2]);
            if (maxC < 15) {
              d[i + 3] = 0;
            } else if (maxC < 35) {
              d[i + 3] = Math.round(((maxC - 15) / 20) * 255);
            }
          }
          ctx2d.putImageData(imgData, 0, 0);
        }
      }

      animId = requestAnimationFrame(renderLoop);
    };

    // Ensure video is playing
    video.play().catch(() => {});
    animId = requestAnimationFrame(renderLoop);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animId);
      video.removeEventListener("loadedmetadata", setupCanvas);
      video.removeEventListener("canplay", setupCanvas);
      if (gl) {
        if (texture) gl.deleteTexture(texture);
        if (posBuf) gl.deleteBuffer(posBuf);
        if (texBuf) gl.deleteBuffer(texBuf);
        if (program) gl.deleteProgram(program);
      }
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* 
        Video element:
        IMPORTANT: Must NOT be `display: none` (hidden), because browsers suspend playback on hidden media!
        Using opacity-0 and pointer-events-none keeps it fully decoding frames while invisible.
      */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full opacity-0 pointer-events-none -z-50"
      />

      {/* Real-time hardware-transparent Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none select-none"
        style={{
          background: "transparent",
        }}
      />
    </div>
  );
}

export default TransparentCosmicVideo;
