"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="flex fixed bottom-0 left-0 right-0 z-[700] bg-gradient-to-r from-primary-dark/95 via-primary/95 to-primary-dark/95 backdrop-blur-md text-white text-center text-sm font-medium py-3 px-4 border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] max-sm:py-2">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-4 w-full max-sm:flex-col max-sm:gap-2">
        <span className="inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          本週剩餘名額：<strong className="font-bold">5 位</strong>　早鳥導入價 NT$28,000（原價 NT$48,000）
        </span>
        <Button asChild size="sm" variant="secondary" className="bg-white text-primary hover:bg-white/90 hover:scale-105">
          <Link href="/book">
            立即預約 →
          </Link>
        </Button>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-4 text-white/60 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10 max-sm:top-2"
          aria-label="關閉公告"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
