"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "使用場景", href: "/use-cases", sectionId: "use-cases" },
  { label: "定價", href: "/pricing", sectionId: "pricing" },
  { label: "安全與合規", href: "/security", sectionId: "security" },
  { label: "FAQ", href: "/faq", sectionId: "faq" },
  { label: "技術文件", href: "/docs", sectionId: "docs" },
  { label: "部落格", href: "/blog", sectionId: "blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // On homepage: hide until scroll > 50px (reveal on scroll)
  // On other pages: always visible
  const visible = isHome ? scrolled : true;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Scroll spy — observe each section on homepage
  useEffect(() => {
    if (!isHome) {
      setActiveSection(null);
      return;
    }

    const sectionIds = navLinks.map((l) => l.sectionId);
    const visibleSections = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        }
        // Pick the section with highest visibility ratio
        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of visibleSections) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        setActiveSection(best);
      },
      { threshold: [0, 0.3, 0.6], rootMargin: "-20% 0px -20% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [isHome]);

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

  // Section IDs that exist on the homepage for smooth scrolling
  const homeSections = new Set(["use-cases", "pricing", "security", "faq"]);

  const handleNavClick = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      href: string,
      sectionId: string
    ) => {
      if (isHome && homeSections.has(sectionId)) {
        // On homepage: smooth scroll to section instead of navigating
        e.preventDefault();
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        closeMobile();
      } else {
        // Normal navigation to dedicated route
        closeMobile();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isHome, closeMobile]
  );

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
            {navLinks.map((link) => {
              const isActive =
                (isHome && homeSections.has(link.sectionId) &&
                  activeSection === link.sectionId) ||
                (!isHome && pathname.startsWith(link.href));
              return (
                <li key={link.sectionId}>
                  <Link
                    href={link.href}
                    onClick={(e) =>
                      handleNavClick(e, link.href, link.sectionId)
                    }
                    className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? "text-primary bg-primary/8"
                        : "text-text-secondary hover:text-text hover:bg-black/4"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop right buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button asChild>
              <Link href="/book">
                預約免費諮詢
              </Link>
            </Button>
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
        {navLinks.map((link) => {
          const isActive =
            (link.href.startsWith("/#") && activeSection === link.sectionId) ||
            (!link.href.startsWith("/#") && pathname.startsWith(link.href));
          return (
            <Link
              key={link.sectionId}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.sectionId)}
              className={`text-lg font-semibold px-8 py-3 rounded-lg transition-colors ${
                isActive
                  ? "text-primary bg-primary/8"
                  : "text-text hover:text-primary hover:bg-primary/4"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <Button asChild size="lg" className="mt-6">
          <Link href="/book" onClick={closeMobile}>
            預約免費諮詢
          </Link>
        </Button>
      </div>
    </>
  );
}
