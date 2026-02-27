import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: 1,
    title: "了解你的工作方式",
    time: "30 分鐘",
    items: ["聊聊你每天怎麼工作、哪些事情最煩", "一起決定要設幾個 AI 助理、各自負責什麼"],
    delay: 0,
  },
  {
    number: 2,
    title: "專人到場量身設置",
    time: "當天完成",
    items: [
      "到你的辦公室（或遠端連線），把 AI 裝好、資安做到位",
      "根據你的工作方式，串接信箱、行事曆、通訊軟體",
      "幫你建好最重要的 3 個工作流程",
      "完整文件交付",
    ],
    delay: 0.15,
  },
  {
    number: 3,
    title: "14 天密集陪跑",
    time: "這是重點",
    items: [
      "第 1-3 天：觀察你實際怎麼用，找出 AI 卡住的地方",
      "第 4-7 天：調整指令和流程，讓回覆品質大幅提升",
      "第 8-14 天：深化更多工作場景，加入新的自動化流程",
      "全程專屬群組，有問題隨時問、當天回覆",
      "結束時交付《你的 AI 工作流程手冊》",
    ],
    delay: 0.3,
  },
];

export default function ServiceFlowSection() {
  return (
    <section className="py-32 px-10 bg-bg max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4" id="how">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-4">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            服務流程
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4">
            三階段，從認識你到你離不開
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-8 mt-16 max-lg:grid-cols-1">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={step.delay}>
              <Card className={`relative p-8 h-full ${step.number === 3 ? "ring-2 ring-primary/30 bg-primary/[0.02]" : ""}`}>
                <div className={`w-12 h-12 rounded-full ${step.number === 3 ? "bg-primary" : "bg-primary"} text-white text-xl font-black flex items-center justify-center mb-6`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                <Badge variant={step.number === 3 ? "default" : "highlight"} className="mb-4">
                  {step.time}
                </Badge>
                <CardContent className="p-0">
                  <ul className="list-none flex flex-col gap-2">
                    {step.items.map((item) => (
                      <li key={item} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="text-text-muted mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Connector arrow (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-5 w-3 h-3 border-r-2 border-b-2 border-text-muted rotate-[-45deg] max-lg:hidden" />
                )}
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* ClawCare teaser */}
        <ScrollReveal className="mt-12">
          <div className="text-center bg-bg-dark rounded-2xl p-8 max-md:p-6">
            <p className="text-white/90 font-bold text-lg mb-2">陪跑結束之後？ClawCare 持續優化</p>
            <p className="text-white/50 text-sm max-w-[500px] mx-auto">
              這不是結束，而是開始。每月工作流程健檢、新場景開發、指令持續調校——你的業務在變，AI 也跟著變。
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
