"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 10, suffix: "+小時/週", label: "平均為客戶省下的時間" },
  { value: 14, suffix: "天", label: "專人密集陪跑" },
  { value: 90, suffix: "%+", label: "導入後持續使用率" },
  { value: 100, suffix: "%", label: "資料留在你的機器" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1800;
    const startTime = performance.now();
    const isDecimal = value % 1 !== 0;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo for dramatic deceleration
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = eased * value;

      if (isDecimal) {
        setDisplay(current.toFixed(1));
      } else if (value >= 1000) {
        setDisplay(Math.floor(current).toLocaleString());
      } else {
        setDisplay(Math.floor(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate();
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="py-16 px-10 bg-bg-white border-y border-border max-md:py-12 max-md:px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-4 gap-8 max-md:grid-cols-2 max-[480px]:grid-cols-2 max-[480px]:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-[clamp(28px,4vw,44px)] font-black text-primary leading-none mb-2">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-sm text-text-secondary font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
