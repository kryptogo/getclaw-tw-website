import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: 1,
    title: "免費諮詢",
    desc: "30 分鐘線上會議，了解你的業務需求與技術現況",
    delay: 0,
  },
  {
    number: 2,
    title: "需求診斷",
    desc: "產出技術健檢報告，釐清優先順序與建議方案",
    delay: 0.1,
  },
  {
    number: 3,
    title: "方案啟動",
    desc: "依據診斷結果，制定合作方案並立即開始執行",
    delay: 0.2,
  },
  {
    number: 4,
    title: "持續迭代",
    desc: "定期回報與策略調整，陪伴企業技術成長",
    delay: 0.3,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-32 px-10 bg-bg-white max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4" id="how">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-4">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4 text-text mx-auto">
            四步驟，啟動你的虛擬技術長
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-4 gap-6 mt-16 max-lg:grid-cols-2 max-lg:gap-10 max-md:grid-cols-1 max-md:gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={step.delay}>
              <div className="text-center px-6 py-10 relative">
                <div className="w-12 h-12 rounded-full bg-primary text-white text-xl font-black flex items-center justify-center mx-auto mb-6">
                  {step.number}
                </div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.desc}
                </p>

                {/* Connector line (hidden on tablet and smaller) */}
                {i < steps.length - 1 && (
                  <div className="absolute top-6 -right-3 w-6 h-0.5 bg-border max-lg:hidden" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
