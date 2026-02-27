import ScrollReveal from "./ScrollReveal";
import { IconCEO, IconFinance, IconSales, IconHandshake } from "./icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const agents = [
  {
    role: "CEO 助理",
    Icon: IconCEO,
    desc: "信件分流 + 行事曆管理 + 會議摘要",
    tasks: ["重要信件篩選與摘要", "智慧排程與衝突偵測", "會議簡報自動生成"],
    delay: 0,
  },
  {
    role: "CFO 助理",
    Icon: IconFinance,
    desc: "財務信件分類 + 報表提醒 + 審批通知",
    tasks: ["發票與帳單自動歸檔", "月結提醒與報表摘要", "審批流程通知"],
    delay: 0.1,
  },
  {
    role: "業務助理",
    Icon: IconSales,
    desc: "CRM 更新 + 客戶跟進 + 報價追蹤",
    tasks: ["CRM 資料自動同步", "客戶跟進排程提醒", "報價單狀態追蹤"],
    delay: 0.2,
  },
  {
    role: "行政助理",
    Icon: IconHandshake,
    desc: "共用信箱 + 訪客接待 + 行程協調",
    tasks: ["共用信箱分流處理", "訪客行程與接待安排", "跨部門行程協調"],
    delay: 0.3,
  },
];

export default function AgentSection() {
  return (
    <section className="py-32 px-10 bg-bg-white max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4" id="agents">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-4">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            執行助理
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4">
            什麼是「AI 執行助理」?
          </h2>
          <p className="text-text-secondary text-[clamp(15px,1.4vw,18px)] leading-[1.8] max-w-[700px] mx-auto font-light">
            每個助理負責一個角色，各自獨立、互不干擾。大多數 5–50 人團隊會導入 2–4 個助理。每個助理的工作流程都是我們根據你的實際需求量身設計的——不是套模板，是了解你怎麼工作之後，一個一個幫你打造。
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-4 gap-6 mt-16 max-lg:grid-cols-2 max-md:grid-cols-1">
          {agents.map((agent) => (
            <ScrollReveal key={agent.role} delay={agent.delay}>
              <Card className="h-full transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <agent.Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{agent.role}</h3>
                  <p className="text-sm text-text-secondary mb-4">{agent.desc}</p>
                  <ul className="list-none flex flex-col gap-1.5">
                    {agent.tasks.map((task) => (
                      <li key={task}>
                        <Badge variant="outline" className="text-xs font-normal w-full justify-start">
                          <span className="text-primary mr-1.5">●</span>
                          {task}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
