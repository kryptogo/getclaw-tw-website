import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: 1,
    title: "Kickoff",
    time: "30 分鐘",
    items: ["了解工作流程、常用工具、痛點", "決定部署幾個 Agent"],
    delay: 0,
  },
  {
    number: 2,
    title: "Deploy",
    time: "5–8hr，當天上線",
    items: [
      "安裝 + 安全加固",
      "Email / Calendar / 通訊軟體整合",
      "最多 3 個關鍵工作流程",
      "完整文件交付",
    ],
    delay: 0.15,
  },
  {
    number: 3,
    title: "Hypercare",
    time: "14 天",
    items: ["每日監控 + 微調", "專屬 LINE / Slack 頻道即時支援"],
    delay: 0.3,
  },
];

export default function ServiceFlowSection() {
  return (
    <section className="py-32 px-10 bg-bg max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4" id="how">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-4">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4">
            三步驟，當天上線
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-8 mt-16 max-lg:grid-cols-1">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={step.delay}>
              <div className="relative bg-bg-white rounded-2xl p-8 border border-border h-full">
                <div className="w-12 h-12 rounded-full bg-primary text-white text-xl font-black flex items-center justify-center mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-primary font-medium mb-4">{step.time}</p>
                <ul className="list-none flex flex-col gap-2">
                  {step.items.map((item) => (
                    <li key={item} className="text-sm text-text-secondary flex items-start gap-2">
                      <span className="text-text-muted mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Connector arrow (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-5 w-3 h-3 border-r-2 border-b-2 border-text-muted rotate-[-45deg] max-lg:hidden" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
