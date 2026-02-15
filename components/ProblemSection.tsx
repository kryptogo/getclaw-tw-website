import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    icon: "$",
    title: "招募成本高昂",
    desc: "資深技術主管薪資門檻高，中小企業難以負擔全職費用",
  },
  {
    icon: "?",
    title: "技術決策無人把關",
    desc: "外包品質參差不齊，缺乏技術判斷能力導致反覆踩坑",
  },
  {
    icon: "!",
    title: "溝通斷層",
    desc: "老闆與工程師之間缺乏翻譯者，需求與實作嚴重脫節",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-32 px-10 bg-bg-white max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4" id="problem">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1 max-md:gap-10">
          <ScrollReveal>
            <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
              WHY GETCLAW
            </span>
            <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.3] mb-4 text-text">
              中小企業的技術困境
            </h2>
            <p className="text-[clamp(16px,1.4vw,19px)] text-text-secondary leading-[1.8] max-w-[640px] font-light">
              請一位全職技術長，年薪動輒 200
              萬以上。但你真正需要的，可能只是一個能做決策、帶得動開發的人。
            </p>
            <ul className="list-none flex flex-col gap-6 mt-8">
              {problems.map((p) => (
                <li
                  key={p.title}
                  className="flex items-start gap-4 p-6 bg-bg rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-xl">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold mb-1">{p.title}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal
            className="flex items-center justify-center max-md:order-[-1]"
            delay={0.15}
          >
            <div className="bg-bg rounded-3xl p-16 text-center w-full max-w-[400px]">
              <div className="text-[clamp(48px,6vw,80px)] font-black text-primary leading-none mb-2">
                73<span className="text-[clamp(20px,2.5vw,28px)] font-light text-text-secondary">%</span>
              </div>
              <p className="text-[15px] text-text-muted mt-4 leading-relaxed">
                的中小企業表示
                <br />
                「找不到合適的技術合夥人」
                <br />
                是數位轉型最大障礙
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
