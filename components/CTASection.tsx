import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="py-32 px-10 bg-bg text-center max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4" id="contact">
      <ScrollReveal>
        <div className="max-w-[700px] mx-auto">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            GET STARTED
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-black mb-4 leading-[1.3]">
            準備好讓 AI 接管瑣事了嗎？
          </h2>
          <p className="text-[clamp(16px,1.4vw,19px)] text-text-secondary leading-[1.8] mb-10 font-light">
            預約免費諮詢，告訴我們你的工作流程。
            <br />
            我們幫你規劃 Agent 配置，當天就能上線。
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap max-[480px]:flex-col">
            <Link
              href="/book"
              className="inline-block bg-primary text-white border-none px-10 py-4 rounded-full text-[clamp(15px,1.6vw,18px)] font-bold cursor-pointer transition-all shadow-[0_4px_20px_rgba(193,45,32,0.3)] hover:bg-primary-dark hover:scale-105 hover:shadow-[0_6px_28px_rgba(193,45,32,0.45)] max-[480px]:w-full max-[480px]:text-center"
            >
              預約免費諮詢 →
            </Link>
            <a
              href="#pricing"
              className="inline-block bg-transparent text-text border-2 border-border px-9 py-3.5 rounded-full text-[clamp(15px,1.6vw,18px)] font-bold cursor-pointer transition-all hover:border-text hover:bg-black/3 max-[480px]:w-full max-[480px]:text-center"
            >
              了解定價
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
