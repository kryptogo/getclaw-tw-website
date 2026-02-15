"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HighlightGroup, HighlighterItem, Particles } from "@/components/ui/highlighter";
import ScrollReveal from "./ScrollReveal";
import { Mail, Calendar, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="py-32 px-10 bg-bg max-md:py-24 max-md:px-6 max-[480px]:py-16 max-[480px]:px-4"
      id="contact"
    >
      <ScrollReveal>
        <div className="max-w-[900px] mx-auto">
          <HighlightGroup className="group">
            <HighlighterItem className="rounded-3xl">
              <div className="relative z-20 overflow-hidden rounded-3xl border border-border bg-bg-white">
                <Particles
                  className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"
                  quantity={150}
                  color="#c12d20"
                  vy={-0.2}
                />
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-10 md:p-14">
                  {/* Left: Text content */}
                  <div className="flex-1 text-center md:text-left">
                    <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] mb-4">
                      立即開始
                    </span>
                    <h2 className="text-[clamp(28px,4vw,40px)] font-black mb-4 leading-[1.3]">
                      準備好讓 AI
                      <br className="max-md:hidden" />
                      接管瑣事了嗎？
                    </h2>
                    <p className="text-text-secondary text-[clamp(14px,1.3vw,17px)] leading-[1.8] mb-4 font-light">
                      預約免費諮詢，告訴我們你的工作流程。
                      <br className="max-md:hidden" />
                      我們幫你規劃 Agent 配置，當天就能上線。
                    </p>
                    <p className="text-sm text-primary font-bold mb-8">
                      前 10 名客戶享早鳥優惠價（遠端部署 NT$28,000）
                    </p>
                    <div className="flex items-center gap-3 flex-wrap max-md:justify-center">
                      <Button asChild size="lg">
                        <Link href="/book">
                          預約免費諮詢
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline">
                        <a href="https://line.me/R/ti/p/@377lrocj" target="_blank" rel="noopener noreferrer">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="https://cdn.simpleicons.org/line" alt="" width={16} height={16} className="mr-2" />
                          LINE 諮詢
                        </a>
                      </Button>
                      <Button asChild size="lg" variant="outline">
                        <a href="mailto:contact@kryptogo.com">
                          <Mail className="mr-2 h-4 w-4" />
                          寄信聯繫
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Right: Visual element */}
                  <div className="relative w-[240px] h-[240px] shrink-0 max-md:w-[200px] max-md:h-[200px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    {/* Floating tags */}
                    <div className="absolute top-6 right-0 rounded-2xl border border-border bg-bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium shadow-sm animate-[fade-in-up_0.5s_ease_0.2s_forwards] opacity-0">
                      信件分流
                    </div>
                    <div className="absolute top-1/4 left-0 rounded-2xl border border-border bg-bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium shadow-sm animate-[fade-in-up_0.5s_ease_0.4s_forwards] opacity-0">
                      智慧排程
                    </div>
                    <div className="absolute bottom-1/4 right-2 rounded-2xl border border-border bg-bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium shadow-sm animate-[fade-in-up_0.5s_ease_0.6s_forwards] opacity-0">
                      會議摘要
                    </div>
                    <div className="absolute bottom-6 left-4 rounded-2xl border border-border bg-bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium shadow-sm animate-[fade-in-up_0.5s_ease_0.8s_forwards] opacity-0">
                      自動化流程
                    </div>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </HighlightGroup>
        </div>
      </ScrollReveal>
    </section>
  );
}
