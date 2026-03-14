import ScrollReveal from "./ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stories = [
  {
    scene: "開車時，用語音完成一篇社群貼文",
    description:
      "在開車途中，用語音跟 AI 助理說想法。AI 自動整理成貼文、配好 hashtag，到辦公室時已經排程發布。從構思到上架，全程沒打一個字。",
    role: "創業者 / 自媒體",
    before: "回到辦公室才能寫，常常靈感就忘了",
    after: "開車、走路、運動時隨時產出內容",
    highlight: "語音 → AI 整理 → 自動發布，零打字",
    delay: 0,
  },
  {
    scene: "拳擊教練的客製化顧問報告，5 分鐘生成",
    description:
      "教練上完四小時會議後，AI 助理自動從會議錄音中擷取關鍵資訊，生成一份針對每位學員的客製化訓練報告。以前要花整個晚上整理的東西，現在五分鐘就好。",
    role: "教練 / 顧問 / 培訓師",
    before: "4 小時會議後，還要花 3 小時整理紀錄",
    after: "AI 自動生成客製化報告，5 分鐘完成",
    highlight: "會議錄音 → AI 擷取 → 客製化報告",
    delay: 0.1,
  },
  {
    scene: "無 IT 人員的企業，用 LINE 群組管理代辦事項",
    description:
      "地方創生企業沒有 IT 人員，CEO 每天在 LINE、Email、Google Chat 之間切來切去。AI 助理加入工作群組後，自動記錄代辦事項、每天早上 8 點推送提醒，重要 Email 直接摘要轉發到 LINE。",
    role: "中小企業主 / 地方創生",
    before: "每天重複打開 5 個系統確認有沒有漏掉什麼",
    after: "所有重要訊息統一由 AI 在 LINE 推送",
    highlight: "Email + 行事曆 + 代辦 → LINE 一站整合",
    delay: 0.2,
  },
];

export default function RealStoriesSection() {
  return (
    <section
      className="py-32 px-10 bg-bg-white max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4"
      id="stories"
    >
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            真實場景
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4">
            你從沒想過 AI 可以這樣用
          </h2>
          <p className="text-text-secondary text-[clamp(14px,1.3vw,16px)] max-w-[600px] mx-auto">
            這些不是假設性的案例——是我們的客戶每天在用的真實場景。差別在於：有人幫你想到這些可能性。
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          {stories.map((story) => (
            <ScrollReveal key={story.scene} delay={story.delay}>
              <Card className="h-full overflow-hidden transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                {/* Scene header */}
                <div className="bg-gradient-to-br from-bg-dark to-bg-dark/90 p-6">
                  <Badge variant="outline" className="text-white/60 border-white/20 mb-3 text-xs">
                    {story.role}
                  </Badge>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    {story.scene}
                  </h3>
                </div>

                <CardContent className="p-6">
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">
                    {story.description}
                  </p>

                  {/* Before → After */}
                  <div className="space-y-3 mb-5">
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 text-xs font-bold mt-0.5 shrink-0">
                        Before
                      </span>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {story.before}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 text-xs font-bold mt-0.5 shrink-0">
                        After
                      </span>
                      <p className="text-xs text-text leading-relaxed font-medium">
                        {story.after}
                      </p>
                    </div>
                  </div>

                  {/* Key flow */}
                  <div className="bg-primary/5 rounded-lg px-4 py-3 border border-primary/10">
                    <p className="text-xs text-primary font-bold">
                      {story.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <p className="text-text-secondary text-sm max-w-[500px] mx-auto">
            每個人的工作方式不同，所以我們不套模板。
            <br />
            <span className="text-text font-bold">
              我們先了解你怎麼工作，再幫你設計專屬的 AI 工作流。
            </span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
