"use client";

import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

const scenarios = [
  // 郵件與溝通
  { label: "郵件自動分類", category: "溝通" },
  { label: "重要信件摘要", category: "溝通" },
  { label: "自動回覆草稿", category: "溝通" },
  { label: "LINE 客服機器人", category: "溝通" },
  { label: "Slack 訊息整理", category: "溝通" },
  // 行程與排程
  { label: "智慧行事曆管理", category: "排程" },
  { label: "會議摘要自動生成", category: "排程" },
  { label: "Daily Brief 晨報", category: "排程" },
  { label: "訪客接待安排", category: "排程" },
  // 業務與銷售
  { label: "CRM 自動更新", category: "業務" },
  { label: "客戶跟進提醒", category: "業務" },
  { label: "報價單追蹤", category: "業務" },
  { label: "Cold Email 個人化", category: "業務" },
  { label: "提案書自動生成", category: "業務" },
  // 財務與行政
  { label: "發票自動歸檔", category: "財務" },
  { label: "月結報表提醒", category: "財務" },
  { label: "審批流程通知", category: "財務" },
  { label: "帳務對帳自動化", category: "財務" },
  // 內容與行銷
  { label: "語音轉貼文發布", category: "內容" },
  { label: "社群貼文排程", category: "內容" },
  { label: "KPI 報告自動產出", category: "內容" },
  { label: "競品資訊監控", category: "內容" },
  // 跨部門
  { label: "多管道客服整合", category: "跨部門" },
  { label: "新客戶 Onboarding", category: "跨部門" },
  { label: "跨部門行程協調", category: "跨部門" },
  { label: "中小企業全自動化", category: "跨部門" },
];

const categoryColors: Record<string, string> = {
  溝通: "border-blue-500/30 text-blue-600 hover:bg-blue-50",
  排程: "border-violet-500/30 text-violet-600 hover:bg-violet-50",
  業務: "border-emerald-500/30 text-emerald-600 hover:bg-emerald-50",
  財務: "border-amber-500/30 text-amber-600 hover:bg-amber-50",
  內容: "border-rose-500/30 text-rose-600 hover:bg-rose-50",
  跨部門: "border-primary/30 text-primary hover:bg-primary/5",
};

export default function ScenarioTagWall() {
  return (
    <section className="py-24 px-10 bg-bg max-md:py-16 max-md:px-6" id="scenarios">
      <div className="max-w-[900px] mx-auto">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            應用場景
          </span>
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-black leading-[1.3] mb-3">
            你想得到的瑣事，AI 員工都能做
          </h2>
          <p className="text-text-secondary text-[clamp(14px,1.3vw,16px)] font-light">
            超過 25 種場景，覆蓋溝通、排程、業務、財務、內容全方位
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {scenarios.map((s) => (
              <span
                key={s.label}
                className={`inline-flex items-center text-sm font-medium px-4 py-2 rounded-full border bg-white transition-colors cursor-default ${categoryColors[s.category] || ""}`}
              >
                {s.label}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="text-center mt-8">
          <Link
            href="/use-cases"
            className="inline-block text-primary font-bold text-sm hover:underline"
          >
            查看完整案例與成果數據 →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
