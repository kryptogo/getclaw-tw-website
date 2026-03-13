import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section id="intro" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 bg-bg-dark text-white overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(193,45,32,0.15)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        <Badge variant="highlight" className="mb-4 text-[11px] tracking-[0.2em] uppercase bg-white/5 text-white/50 border-white/10">
          你的第一個不用發薪水的員工，今天就到職
        </Badge>

        <h1 className="text-[clamp(28px,5vw,56px)] font-black leading-[1.25] mb-5 tracking-tight">
          有人懂你的業務幫你設計，
          <br className="max-md:hidden" />
          跟自己亂試，天差地別。
        </h1>

        <p className="text-[clamp(16px,1.8vw,20px)] text-white/70 leading-[1.8] mb-10 max-w-[720px] mx-auto font-light">
          專人了解你的工作方式，量身打造你的 AI 員工。
          <br className="max-md:hidden" />
          當天上線、Token 費用全包、不滿意隨時退。
        </p>

        <div className="flex flex-col items-center gap-3">
          <Button asChild size="xl">
            <Link href="/book">
              預約免費諮詢 →
            </Link>
          </Button>
          <Link
            href="#ai-fit-check"
            className="text-sm text-white/40 underline underline-offset-4 decoration-white/20 hover:text-white/60 transition-colors"
          >
            或先做免費 AI 適配度評估
          </Link>
        </div>
      </div>
    </section>
  );
}
