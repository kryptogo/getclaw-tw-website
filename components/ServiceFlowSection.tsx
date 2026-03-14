import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: 1,
    title: "現場診斷你的工作流",
    time: "半天",
    items: [
      "到你的辦公室，訪談 CEO 和關鍵部門負責人",
      "觀察實際操作：ERP、通路後台、報表流程",
      "盤點你的系統、資料散落點、溝通管道",
      "產出《AI 導入診斷報告》，含痛點分析與分階段建議",
    ],
    delay: 0,
  },
  {
    number: 2,
    title: "累積你的 Context",
    time: "知識飛輪的起點",
    items: [
      "建立你的個人知識庫：組織架構、SOP、常用文件",
      "讓 AI 學習你的溝通風格、業務術語、決策邏輯",
      "串接信箱、行事曆、LINE，讓資料自動匯入",
      "這是讓你的 AI「跟別人不一樣」的關鍵步驟",
    ],
    delay: 0.15,
  },
  {
    number: 3,
    title: "量身設置，當天上線",
    time: "當天完成",
    items: [
      "安裝環境、設定 LINE Chatbot、串接公開 URL",
      "設定語言模型、語音轉文字、群組權限",
      "根據診斷結果，幫你建好最重要的 3 個自動化場景",
      "完整技術文件交付，含障礙排除 Checklist",
    ],
    delay: 0.3,
  },
  {
    number: 4,
    title: "14 天密集陪跑",
    time: "這是重點",
    items: [
      "第 1-3 天：觀察你實際怎麼用，找出 AI 卡住的地方",
      "第 4-7 天：調整指令和流程，讓回覆品質大幅提升",
      "第 8-14 天：深化更多工作場景，加入新的自動化流程",
      "全程專屬群組，有問題隨時問、當天回覆",
      "結束時交付《你的 AI 工作流程手冊》",
    ],
    delay: 0.45,
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
            四階段，從認識你到 AI 越來越懂你
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-4 gap-6 mt-16 max-lg:grid-cols-2 max-md:grid-cols-1">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={step.delay}>
              <Card className={`relative p-6 h-full ${step.number === 2 ? "ring-2 ring-primary/30 bg-primary/[0.02]" : ""}`}>
                <div className={`w-10 h-10 rounded-full bg-primary text-white text-lg font-black flex items-center justify-center mb-4`}>
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
            <p className="text-white/90 font-bold text-lg mb-2">知識飛輪：你的 AI 會越來越聰明</p>
            <p className="text-white/50 text-sm max-w-[560px] mx-auto">
              陪跑結束只是開始。隨著你持續使用，AI 累積的 Context 越多，回答品質就越好。
              ClawCare 每月幫你健檢工作流、開發新場景、持續調校——讓你的 AI 跟別人的越來越不一樣。
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
