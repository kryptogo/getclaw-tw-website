import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const familiarTools = [
  { name: "LINE", icon: "https://cdn.simpleicons.org/line", highlight: true },
  { name: "Gmail", icon: "https://cdn.simpleicons.org/gmail" },
  { name: "Slack", icon: "https://cdn.simpleicons.org/slack" },
  { name: "Telegram", icon: "https://cdn.simpleicons.org/telegram" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/000000/ffffff" },
  { name: "Google Calendar", icon: "https://cdn.simpleicons.org/googlecalendar" },
];

export default function HeroSection() {
  return (
    <section id="intro" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 bg-bg-dark text-white overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(193,45,32,0.15)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        <Badge variant="highlight" className="mb-6 text-[13px] tracking-[0.15em] uppercase bg-primary/20 text-primary-light border-primary/30">
          不只是安裝，是幫你設計 AI 工作方式
        </Badge>

        <h1 className="text-[clamp(28px,5vw,56px)] font-black leading-[1.25] mb-6 tracking-tight">
          有人懂你的業務幫你設計，
          <br className="max-md:hidden" />
          跟自己亂試，天差地別。
        </h1>

        <p className="text-[clamp(16px,1.8vw,20px)] text-white/70 leading-[1.8] mb-6 max-w-[720px] mx-auto font-light">
          專人到府了解你的工作方式，量身打造你的 AI 執行助理。
          <br className="max-md:hidden" />
          讓 AI 越用越懂你——不只是工具，是你的第二個大腦。
        </p>

        {/* Social proof micro-nudge */}
        <p className="text-white/40 text-sm mb-10 flex items-center justify-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          已有企業主導入使用，平均省下每週 10+ 小時行政時間
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap max-[480px]:flex-col">
          <Button asChild size="xl">
            <Link href="/book">
              預約免費諮詢 →
            </Link>
          </Button>
          <Button asChild size="xl" variant="outline-white">
            <a href="/pricing">
              了解定價
            </a>
          </Button>
        </div>

        {/* Familiar tools callout — replaces Karpathy quote */}
        <div className="mt-16 max-w-[600px] mx-auto">
          <p className="text-white/50 text-sm font-medium mb-4">
            用你已經習慣的工具，直接跟 AI 助理對話
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {familiarTools.map((item) => (
              <span
                key={item.name}
                className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border ${
                  item.highlight
                    ? "text-white border-green-500/40 bg-green-500/10"
                    : "text-white/50 border-white/8 bg-white/3"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.icon}
                  alt={item.name}
                  width={18}
                  height={18}
                  loading="lazy"
                />
                {item.name}
              </span>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-3">
            不需要學新介面——LINE 傳訊息就能用，還可整合超過 10,000 種服務
          </p>
        </div>
      </div>
    </section>
  );
}
