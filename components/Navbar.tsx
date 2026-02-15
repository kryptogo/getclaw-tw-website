"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const navLinks = [
  { label: "使用場景", href: "/use-cases" },
  { label: "定價", href: "#pricing" },
  { label: "安全與合規", href: "/security" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, []);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] px-6 transition-all duration-400 ease-in-out ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
        role="navigation"
        aria-label="主要導覽"
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-16 px-6 mt-3 bg-white/95 backdrop-blur-[20px] rounded-xl border border-black/6 shadow-[0_2px_20px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.02)]">
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/assets/getclaw-logo-red.png"
              alt="GetClaw"
              className="h-7 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-text-secondary px-4 py-2 rounded-lg transition-colors hover:text-text hover:bg-black/4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/book"
              className="bg-primary text-white border-none px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all shadow-[0_1px_3px_rgba(193,45,32,0.2)] hover:bg-primary-dark hover:shadow-[0_2px_8px_rgba(193,45,32,0.35)]"
            >
              預約免費諮詢
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden items-center justify-center flex-col gap-[5px] w-10 h-10 rounded-lg bg-transparent border-none cursor-pointer transition-colors hover:bg-black/4"
            onClick={toggleMobile}
            aria-label="開啟選單"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-[18px] h-0.5 bg-text rounded-sm transition-transform duration-300 ${
                mobileOpen
                  ? "rotate-45 translate-x-[5px] translate-y-[5px]"
                  : ""
              }`}
            />
            <span
              className={`block w-[18px] h-0.5 bg-text rounded-sm transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-[18px] h-0.5 bg-text rounded-sm transition-transform duration-300 ${
                mobileOpen
                  ? "-rotate-45 translate-x-[5px] -translate-y-[5px]"
                  : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile nav drawer */}
      <div
        className={`fixed inset-0 z-[999] bg-white/98 backdrop-blur-[24px] flex-col items-center justify-center gap-3 transition-opacity duration-300 ${
          mobileOpen
            ? "flex opacity-100 pointer-events-auto"
            : "hidden opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-label="行動版選單"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMobile}
            className="text-lg font-semibold text-text px-8 py-3 rounded-lg transition-colors hover:text-primary hover:bg-primary/4"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/book"
          onClick={closeMobile}
          className="bg-primary text-white px-10 py-3.5 rounded-lg text-base font-bold mt-6 shadow-[0_4px_20px_rgba(193,45,32,0.3)]"
        >
          預約免費諮詢
        </Link>
      </div>
    </>
  );
}
