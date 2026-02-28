"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

// Pick the best supported video format
function getVideoUrl(): { url: string; type: string } {
  if (typeof document === "undefined") return { url: "/assets/hero-animation.mp4", type: "video/mp4" };
  const v = document.createElement("video");
  if (v.canPlayType("video/webm; codecs=vp9")) {
    return { url: "/assets/hero-animation.webm", type: "video/webm" };
  }
  return { url: "/assets/hero-animation.mp4", type: "video/mp4" };
}

export default function HeroAnimation() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const tickingRef = useRef(false);
  const readyRef = useRef(false);

  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [introOpacity, setIntroOpacity] = useState(1);
  const [ctaOpacity, setCtaOpacity] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(false);

  const markReady = useCallback(() => {
    if (readyRef.current) return;
    readyRef.current = true;
    setLoadProgress(100);
    // Small delay so user sees 100% before overlay fades
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => setShowScrollHint(true), 400);
    }, 300);
  }, []);

  const render = useCallback(() => {
    tickingRef.current = false;
    const hero = heroRef.current;
    const video = videoRef.current;
    if (!hero || !video) return;

    const heroRect = hero.getBoundingClientRect();
    const sectionTop = -heroRect.top;
    const scrollableHeight = hero.offsetHeight - window.innerHeight;
    if (scrollableHeight <= 0) return;

    const progress = Math.max(0, Math.min(1, sectionTop / scrollableHeight));

    if (video.duration && video.duration > 0) {
      video.currentTime = progress * video.duration;
    }

    setIntroOpacity(Math.max(0, 1 - progress / 0.1));
    setShowScrollHint(progress < 0.02);
    setCtaOpacity(Math.max(0, Math.min(1, (progress - 0.85) / 0.15)));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;

    // Fetch video with progress tracking, then assign as blob URL
    const el = video; // non-null alias for async closure
    async function loadVideo() {
      const { url, type } = getVideoUrl();

      try {
        const res = await fetch(url);
        const contentLength = Number(res.headers.get("content-length") || 0);
        const reader = res.body?.getReader();

        if (!reader) {
          el.src = url;
          el.load();
          return;
        }

        const chunks: BlobPart[] = [];
        let received = 0;

        while (true) {
          const { done, value } = await reader.read();
          if (done || cancelled) break;
          chunks.push(value);
          received += value.length;

          if (contentLength > 0) {
            setLoadProgress(Math.min(95, Math.round((received / contentLength) * 100)));
          }
        }

        if (cancelled) return;

        const blob = new Blob(chunks, { type });
        const blobUrl = URL.createObjectURL(blob);

        el.src = blobUrl;
        el.load();

        // Wait for video to be ready after blob assignment
        const onReady = () => {
          if (!cancelled) {
            markReady();
            render();
          }
          el.removeEventListener("loadeddata", onReady);
        };
        el.addEventListener("loadeddata", onReady);

        // If already ready (fast cache hit)
        if (el.readyState >= 2) onReady();
      } catch {
        if (cancelled) return;
        el.src = getVideoUrl().url;
        el.load();
        setTimeout(() => {
          if (!cancelled) markReady();
        }, 2000);
      }
    }

    // Start loading when section is near viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadVideo();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(video);

    // Timeout fallback: show content after 8s no matter what
    const fallbackTimer = setTimeout(() => {
      if (!cancelled) markReady();
    }, 8000);

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(render);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelled = true;
      clearTimeout(fallbackTimer);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [render, markReady]);

  return (
    <section ref={heroRef} className="relative w-full h-[300vh]" id="hero">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="block w-full h-full object-cover bg-bg"
          muted
          playsInline
          preload="none"
          aria-hidden="true"
        />

        {/* Loading overlay with real progress */}
        <div
          className={`absolute inset-0 z-20 flex flex-col items-center justify-center bg-bg transition-opacity duration-500 ease-out ${
            loaded ? "opacity-0 pointer-events-none" : ""
          }`}
          role="status"
          aria-live="polite"
        >
          <div className="w-[200px] h-[3px] bg-black/8 rounded-sm overflow-hidden">
            <div
              className="h-full bg-primary rounded-sm transition-all duration-300 ease-out"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <div className="text-[13px] text-text-muted mt-2 tracking-widest">
            {loadProgress < 100 ? `${loadProgress}%` : "準備就緒"}
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
          <a
            href="#intro"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-400 cursor-pointer pointer-events-auto group ${
              showScrollHint ? "opacity-100" : "opacity-0 !pointer-events-none"
            }`}
            aria-label="跳到主要內容"
          >
            <span className="text-white/40 text-xs tracking-wider transition-all duration-300 group-hover:text-white/90 group-hover:tracking-[0.15em]">
              往下探索
            </span>
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-white/50 group-hover:bg-white/15 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-white/50 animate-[bounce-arrow_2s_infinite] transition-all duration-300 group-hover:stroke-white group-hover:animate-none group-hover:translate-y-0.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <span className="text-white/0 text-[11px] transition-all duration-300 group-hover:text-white/60">
              點擊直達介紹
            </span>
          </a>

          {/* CTA text at end of scroll */}
          <div
            className="text-center w-max max-w-[90vw]"
            style={{
              opacity: ctaOpacity,
              transition: "opacity 0.1s",
              pointerEvents: ctaOpacity > 0.1 ? "auto" : "none",
            }}
          >
            <h1 className="text-[clamp(28px,5vw,64px)] font-black text-white leading-[1.2] tracking-wide mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              跑在你自己的硬體上
            </h1>
            <p className="text-[clamp(15px,2vw,22px)] text-white/85 font-normal mb-7 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
              專人量身設置，資料不離開你的機器
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
