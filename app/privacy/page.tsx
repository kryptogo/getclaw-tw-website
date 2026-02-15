import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "隱私權政策",
  description: "GetClaw AI 執行助理隱私權政策。了解我們如何保護你的資料。",
  alternates: { canonical: "https://getclaw.tw/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-20 px-10 bg-bg-white max-md:px-6">
          <article className="max-w-[700px] mx-auto">
            <h1 className="text-3xl font-black mb-8">隱私權政策</h1>
            <p className="text-sm text-text-muted mb-8">最後更新日期：2025 年 1 月</p>

            <div className="space-y-8 text-sm text-text-secondary leading-[1.9]">
              <section>
                <h2 className="text-lg font-bold text-text mb-3">1. 概述</h2>
                <p>
                  輕量科技股份有限公司（以下稱「本公司」）重視您的隱私權。
                  本隱私權政策說明我們如何收集、使用、儲存及保護您的個人資料。
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">2. 資料架構說明</h2>
                <p>
                  GetClaw 服務採用<strong>自主託管架構</strong>。
                  這代表您的 AI 助理處理的所有資料（包括 email、行事曆、文件等），
                  都在您自己的硬體上處理和儲存，不會傳輸到本公司或任何第三方伺服器。
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">3. 我們收集的資料</h2>
                <p className="mb-3">在提供服務過程中，本公司可能收集以下資料：</p>
                <ul className="list-none flex flex-col gap-1">
                  <li>→ 諮詢預約資訊（姓名、email、公司名稱）</li>
                  <li>→ 部署相關技術資訊（系統配置、整合需求）</li>
                  <li>→ 帳單與付款資訊</li>
                  <li>→ 網站使用分析數據（匿名化）</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">4. 部署過程中的資料存取</h2>
                <p>
                  在部署過程中，本公司技術人員可能需要暫時存取您的系統以完成安裝與設定。
                  部署完成後，我們會建議您輪換所有憑證，
                  確保本公司無法繼續存取您的系統（除非您選擇 託管維護方案並授權持續存取）。
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">5. 資料使用目的</h2>
                <p>我們收集的資料僅用於：</p>
                <ul className="list-none flex flex-col gap-1 mt-2">
                  <li>→ 提供並改善 GetClaw 服務</li>
                  <li>→ 處理付款與帳務</li>
                  <li>→ 與您溝通服務相關事宜</li>
                  <li>→ 遵守法律義務</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">6. 資料保護</h2>
                <p>
                  本公司採用業界標準的安全措施保護您的個人資料。
                  我們的團隊具備 ISO 27001、ISO 27701、SOC 2 Type 2 與 CAMS 認證背景，
                  致力於維護最高標準的資訊安全。
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">7. 您的權利</h2>
                <p>
                  您有權要求存取、更正或刪除我們所持有的您的個人資料。
                  如需行使這些權利，請聯繫我們。
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">8. Cookie 使用</h2>
                <p>
                  本網站使用必要性 Cookie 以確保網站正常運作。
                  我們也可能使用分析 Cookie（如 Vercel Analytics）以了解網站使用情況，
                  這些數據均為匿名化處理。
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">9. 聯絡方式</h2>
                <p>
                  如對本隱私權政策有任何疑問，請聯繫：
                  <a href="mailto:contact@kryptogo.com" className="text-primary hover:underline ml-1">
                    contact@kryptogo.com
                  </a>
                </p>
              </section>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
