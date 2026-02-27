import Link from "next/link";
import SocialIcon from "./SocialIcon";

const socialLinks = [
  { icon: "instagram" as const, href: "https://www.instagram.com/getclaw.tw", label: "Instagram" },
  { icon: "facebook" as const, href: "https://facebook.com/getclaw.tw", label: "Facebook" },
  { icon: "linkedin" as const, href: "https://linkedin.com/company/kryptogo", label: "LinkedIn" },
  { icon: "x" as const, href: "https://twitter.com/kryptogo_", label: "X (Twitter)" },
  { icon: "medium" as const, href: "https://medium.com/kryptogo", label: "Medium" },
  { icon: "youtube" as const, href: "https://www.youtube.com/@kryptogo_", label: "YouTube" },
  { icon: "github" as const, href: "https://github.com/kryptogo", label: "GitHub" },
];

const lineLink = {
  href: "https://line.me/R/ti/p/@377lrocj",
  label: "LINE 官方帳號",
};

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white/50 pt-16 px-10 pb-10" role="contentinfo">
      <div className="max-w-[1200px] mx-auto grid grid-cols-[2fr_1fr_1fr_1fr] gap-16 max-lg:grid-cols-2 max-lg:gap-10 max-md:grid-cols-1">
        <div>
          <img
            src="/assets/getclaw-logo-white.webp"
            alt="GetClaw"
            className="h-7 mb-4"
          />
          <p className="text-sm leading-[1.7] max-w-[320px]">
            讓 AI 真正幫你做事，不只是裝在你的電腦上。
            <br />
            專為創辦人與高管團隊打造的白手套導入服務。
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href={lineLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={lineLink.label}
              className="text-white/40 transition-colors hover:text-white/90"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://cdn.simpleicons.org/line/ffffff66"
                alt="LINE"
                width={18}
                height={18}
                className="opacity-100 transition-opacity hover:opacity-100"
              />
            </a>
            {socialLinks.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/40 transition-colors hover:text-white/90"
              >
                <SocialIcon icon={s.icon} size={18} className="fill-current" />
              </a>
            ))}
          </div>
          <p className="text-xs text-white/30 mt-4">
            Powered by KryptoGO — ISO 27001 / 27701 / SOC 2 Type 2
          </p>
        </div>

        <div>
          <h5 className="text-white/90 text-sm font-bold mb-4 tracking-wide">
            產品
          </h5>
          <ul className="list-none flex flex-col gap-2">
            <li>
              <Link href="/use-cases" className="text-sm text-white/50 transition-colors hover:text-white/90">
                使用場景
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-sm text-white/50 transition-colors hover:text-white/90">
                定價方案
              </Link>
            </li>
            <li>
              <Link href="/security" className="text-sm text-white/50 transition-colors hover:text-white/90">
                安全與合規
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-sm text-white/50 transition-colors hover:text-white/90">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm text-white/50 transition-colors hover:text-white/90">
                部落格
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white/90 text-sm font-bold mb-4 tracking-wide">
            資源
          </h5>
          <ul className="list-none flex flex-col gap-2">
            <li>
              <Link href="/docs" className="text-sm text-white/50 transition-colors hover:text-white/90">
                完全設定指南
              </Link>
            </li>
            <li>
              <Link href="/collison-install" className="text-sm text-white/50 transition-colors hover:text-white/90">
                到府導入理念
              </Link>
            </li>
            <li>
              <Link href="/book" className="text-sm text-white/50 transition-colors hover:text-white/90">
                預約諮詢
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white/90 text-sm font-bold mb-4 tracking-wide">
            法律
          </h5>
          <ul className="list-none flex flex-col gap-2">
            <li>
              <Link href="/terms" className="text-sm text-white/50 transition-colors hover:text-white/90">
                服務條款
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-sm text-white/50 transition-colors hover:text-white/90">
                隱私權政策
              </Link>
            </li>
            <li>
              <a href="mailto:contact@kryptogo.com" className="text-sm text-white/50 transition-colors hover:text-white/90">
                contact@kryptogo.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-10 pt-6 border-t border-white/8 text-[13px] flex justify-between items-center max-md:flex-col max-md:gap-2 max-md:text-center">
        <span>
          &copy; 2026 輕量科技股份有限公司 GetClaw Inc. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
