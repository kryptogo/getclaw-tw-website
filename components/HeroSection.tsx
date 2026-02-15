import Link from "next/link";

const integrations = [
  { name: "Gmail", icon: "https://cdn.simpleicons.org/gmail" },
  { name: "Google Calendar", icon: "https://cdn.simpleicons.org/googlecalendar" },
  { name: "Slack", icon: "https://cdn.simpleicons.org/slack" },
  { name: "LINE", icon: "https://cdn.simpleicons.org/line" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/000000/ffffff" },
  { name: "Google Drive", icon: "https://cdn.simpleicons.org/googledrive" },
  { name: "HubSpot", icon: "https://cdn.simpleicons.org/hubspot" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717/ffffff" },
  { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier" },
  { name: "Trello", icon: "https://cdn.simpleicons.org/trello" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 bg-bg-dark text-white overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(193,45,32,0.15)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        <span className="inline-block text-[13px] font-bold text-primary-light tracking-[0.15em] uppercase mb-6">
          OpenClaw White-Glove Deployment
        </span>

        <h1 className="text-[clamp(28px,5vw,56px)] font-black leading-[1.25] mb-6 tracking-tight">
          你的 AI 執行助理，
          <br className="max-md:hidden" />
          部署在你自己的硬體上。
        </h1>

        <p className="text-[clamp(16px,1.8vw,20px)] text-white/70 leading-[1.8] mb-10 max-w-[680px] mx-auto font-light">
          專為創辦人與高管團隊打造的 OpenClaw 白手套部署服務。
          <br className="max-md:hidden" />
          不用燒工程資源、不用擔心資安風險——當天上線，14 天調優。
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap max-[480px]:flex-col">
          <Link
            href="/book"
            className="inline-block bg-primary text-white border-none px-10 py-4 rounded-full text-[clamp(15px,1.6vw,18px)] font-bold cursor-pointer transition-all shadow-[0_4px_20px_rgba(193,45,32,0.4)] hover:bg-primary-dark hover:scale-105 hover:shadow-[0_6px_28px_rgba(193,45,32,0.55)] max-[480px]:w-full max-[480px]:text-center"
          >
            預約免費諮詢 →
          </Link>
          <a
            href="#pricing"
            className="inline-block bg-transparent text-white/90 border-2 border-white/20 px-9 py-3.5 rounded-full text-[clamp(15px,1.6vw,18px)] font-bold cursor-pointer transition-all hover:border-white/50 hover:bg-white/5 max-[480px]:w-full max-[480px]:text-center"
          >
            了解定價
          </a>
        </div>

        {/* Karpathy quote */}
        <blockquote className="mt-16 text-white/50 text-sm italic max-w-[500px] mx-auto">
          <p className="mb-2">
            「這是我最近看到最接近科幻小說的東西。」
          </p>
          <cite className="not-italic text-white/40 text-xs">
            — Andrej Karpathy
          </cite>
        </blockquote>
      </div>

      {/* Integration logos */}
      <div className="relative z-10 mt-16 max-w-[800px] mx-auto text-center">
        <p className="text-xs text-white/30 uppercase tracking-[0.15em] mb-4">
          可整合超過 10,000 種服務
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {integrations.map((item) => (
            <span
              key={item.name}
              className="inline-flex items-center gap-2 text-sm text-white/50 font-medium px-3 py-1.5 rounded-md border border-white/8 bg-white/3"
            >
              <img
                src={item.icon}
                alt={item.name}
                width={16}
                height={16}
                loading="lazy"
              />
              {item.name}
            </span>
          ))}
          <span className="text-sm text-white/30">+10,000</span>
        </div>
      </div>
    </section>
  );
}
