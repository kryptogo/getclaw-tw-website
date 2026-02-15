"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

const TOTAL_FRAMES = 189;
const FRAME_PATH = "/assets/hero-frames/frame_";
const FRAME_EXT = ".png";
const FRAME_PAD = 4;
const BATCH_SIZE = 10;

function padNumber(n: number, len: number): string {
  return String(n).padStart(len, "0");
}

function frameSrc(index: number): string {
  return FRAME_PATH + padNumber(index + 1, FRAME_PAD) + FRAME_EXT;
}

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const framesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(TOTAL_FRAMES).fill(null)
  );
  const currentFrameRef = useRef(-1);
  const tickingRef = useRef(false);

  const [loadProgress, setLoadProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [introOpacity, setIntroOpacity] = useState(1);
  const [ctaOpacity, setCtaOpacity] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(false);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = framesRef.current[index];
    if (!img) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = canvas.width / dpr;
    const ch = canvas.height / dpr;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const canvasRatio = cw / ch;
    const imgRatio = iw / ih;

    let drawW: number, drawH: number, offsetX: number, offsetY: number;
    if (imgRatio > canvasRatio) {
      drawH = ch;
      drawW = ch * imgRatio;
      offsetX = (cw - drawW) / 2;
      offsetY = 0;
    } else {
      drawW = cw;
      drawH = cw / imgRatio;
      offsetX = 0;
      offsetY = (ch - drawH) / 2;
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    currentFrameRef.current = index;
  }, []);

  const sizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (
      currentFrameRef.current >= 0 &&
      framesRef.current[currentFrameRef.current]
    ) {
      drawFrame(currentFrameRef.current);
    }
  }, [drawFrame]);

  const getFrameIndex = useCallback((): number => {
    const hero = heroRef.current;
    if (!hero) return 0;
    const heroRect = hero.getBoundingClientRect();
    const sectionTop = -heroRect.top;
    const scrollableHeight = hero.offsetHeight - window.innerHeight;
    if (scrollableHeight <= 0) return 0;
    const progress = Math.max(0, Math.min(1, sectionTop / scrollableHeight));
    return Math.min(Math.floor(progress * TOTAL_FRAMES), TOTAL_FRAMES - 1);
  }, []);

  const render = useCallback(() => {
    tickingRef.current = false;
    const frameIndex = getFrameIndex();
    if (
      frameIndex !== currentFrameRef.current &&
      framesRef.current[frameIndex]
    ) {
      drawFrame(frameIndex);
    }

    const progress = frameIndex / (TOTAL_FRAMES - 1);
    setIntroOpacity(Math.max(0, 1 - progress / 0.1));
    setShowScrollHint(progress < 0.02);
    setCtaOpacity(Math.max(0, Math.min(1, (progress - 0.85) / 0.15)));
  }, [drawFrame, getFrameIndex]);

  useEffect(() => {
    sizeCanvas();

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(render);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sizeCanvas);

    let loadedCount = 0;

    function loadImage(index: number): Promise<void> {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          framesRef.current[index] = img;
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          if (index === 0 && currentFrameRef.current < 0) {
            drawFrame(0);
          }
          if (loadedCount >= TOTAL_FRAMES) {
            setLoaded(true);
            setTimeout(() => setShowScrollHint(true), 600);
          }
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          if (loadedCount >= TOTAL_FRAMES) {
            setLoaded(true);
          }
          resolve();
        };
        img.src = frameSrc(index);
      });
    }

    async function loadAll() {
      await loadImage(0);
      const remaining: number[] = [];
      for (let i = 1; i < TOTAL_FRAMES; i++) remaining.push(i);
      for (let i = 0; i < remaining.length; i += BATCH_SIZE) {
        const batch = remaining.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map(loadImage));
      }
      render();
    }

    loadAll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sizeCanvas);
    };
  }, [sizeCanvas, drawFrame, render]);

  return (
    <section ref={heroRef} className="relative w-full h-[300vh]" id="hero">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="block w-full h-full bg-bg"
          style={{ objectFit: "contain" }}
          aria-hidden="true"
        />

        {/* Loading overlay */}
        <div
          className={`absolute inset-0 z-20 flex flex-col items-center justify-center bg-bg transition-opacity duration-400 ease-out ${
            loaded ? "opacity-0 pointer-events-none" : ""
          }`}
          role="status"
          aria-live="polite"
        >
          <div className="w-[200px] h-[3px] bg-black/8 rounded-sm overflow-hidden">
            <div
              className="h-full bg-primary rounded-sm transition-[width] duration-150"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <div className="text-[13px] text-text-muted mt-2 tracking-widest">
            {loadProgress}%
          </div>
        </div>

        {/* Text overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-end pb-[8vh] bg-gradient-to-b from-transparent via-transparent to-black/40">
          {/* Intro text */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-max max-w-[90vw]"
            style={{ opacity: introOpacity, transition: "opacity 0.1s" }}
          >
            <h1 className="text-[clamp(28px,5vw,64px)] font-black text-white leading-[1.2] tracking-wide mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              你的 AI 執行助理
            </h1>
            <p className="text-[clamp(14px,1.6vw,18px)] text-white/70 font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
              向下滾動，開始開箱
            </p>
          </div>

          {/* Scroll hint */}
          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-400 ${
              showScrollHint ? "opacity-100" : "opacity-0"
            }`}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-[bounce-arrow_2s_infinite]"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          {/* CTA text at end of scroll */}
          <div
            className="text-center w-max max-w-[90vw] pointer-events-auto"
            style={{ opacity: ctaOpacity, transition: "opacity 0.1s" }}
          >
            <h1 className="text-[clamp(28px,5vw,64px)] font-black text-white leading-[1.2] tracking-wide mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              部署在你自己的硬體上
            </h1>
            <p className="text-[clamp(15px,2vw,22px)] text-white/85 font-normal mb-7 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
              從安裝到安全加固，我們全部搞定
            </p>
            <Link
              href="/book"
              className="inline-block bg-primary text-white border-none px-10 py-4 rounded-full text-[clamp(16px,1.8vw,20px)] font-bold cursor-pointer transition-all shadow-[0_4px_20px_rgba(193,45,32,0.3)] hover:bg-primary-dark hover:scale-105 hover:shadow-[0_6px_28px_rgba(193,45,32,0.45)]"
            >
              預約免費諮詢 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
