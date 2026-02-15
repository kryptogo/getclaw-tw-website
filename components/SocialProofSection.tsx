import ScrollReveal from "./ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

const quotes = [
  {
    text: "這是我最近看到最接近科幻小說的東西。",
    author: "Andrej Karpathy",
    role: "前 Tesla AI 總監、OpenAI 創始成員",
    avatar: "AK",
  },
  {
    text: "I replaced my EA with this. It's insane how good it is.",
    author: "Sam Parr",
    role: "The Hustle 創辦人",
    avatar: "SP",
  },
  {
    text: "每天處理 200+ 封郵件的 CEO,最需要的不是更好的信箱——是一個不會漏信的 AI 助理。",
    author: "OpenClaw 產品團隊",
    role: "基於 500+ 用戶行為分析",
    avatar: "OC",
  },
];

const mediaLogos = [
  { name: "TechCrunch", slug: "techcrunch" },
  { name: "Forbes", slug: "forbes" },
  { name: "Wired", slug: "wired" },
];

export default function SocialProofSection() {
  return (
    <section className="py-24 px-10 bg-bg max-md:py-16 max-md:px-6">
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal className="text-center mb-4">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            客戶評價
          </span>
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-black leading-[1.3] mb-3">
            被全球頂尖 AI 領袖推薦
          </h2>
          <p className="text-text-secondary text-[clamp(14px,1.3vw,16px)] font-light">
            不只是我們說好——看看業界怎麼說
          </p>
        </ScrollReveal>

        {/* Quotes grid */}
        <div className="grid grid-cols-3 gap-6 mt-12 max-lg:grid-cols-1">
          {quotes.map((q, i) => (
            <ScrollReveal key={q.author} delay={i * 0.1}>
              <Card className="h-full flex flex-col transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                <CardContent className="p-7 flex flex-col h-full">
                  {/* Star rating */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, si) => (
                      <svg key={si} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[15px] font-medium leading-relaxed mb-6 flex-1">
                    「{q.text}」
                  </p>
                  <footer className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                      {q.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-sm leading-tight">{q.author}</p>
                      <p className="text-text-muted text-xs leading-tight">{q.role}</p>
                    </div>
                  </footer>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* FOMO / Knowledge anxiety nudge */}
        <ScrollReveal className="mt-16">
          <Card>
            <CardContent className="p-8 text-center max-md:p-6">
              <p className="text-text-secondary text-sm leading-[1.8] max-w-[600px] mx-auto">
                <span className="text-primary font-bold">根據 McKinsey 調查</span>,2025 年已有 <span className="font-black text-text">72%</span> 的企業將 AI 整合進至少一項業務流程。
                還沒開始的公司,平均每週浪費 <span className="font-black text-text">12 小時</span>在可自動化的行政工作上。
              </p>
              <p className="text-text-muted text-xs mt-3">
                你的競爭對手可能已經在用了。
              </p>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Media references - subtle */}
        <ScrollReveal className="mt-12">
          <div className="flex items-center justify-center gap-8 opacity-30">
            <p className="text-xs text-text-muted uppercase tracking-widest whitespace-nowrap">
              OpenClaw 已被報導於
            </p>
            {mediaLogos.map((m) => (
              <img
                key={m.slug}
                src={`https://cdn.simpleicons.org/${m.slug}/888888`}
                alt={m.name}
                width={20}
                height={20}
                loading="lazy"
                className="grayscale"
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
