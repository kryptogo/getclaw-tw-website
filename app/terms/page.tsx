import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "服務條款",
  description: "GetClaw AI 執行助理部署服務條款。",
  alternates: { canonical: "https://getclaw.tw/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-20 px-10 bg-bg-white max-md:px-6">
          <article className="max-w-[700px] mx-auto">
            <h1 className="text-3xl font-black mb-8">服務條款</h1>
            <p className="text-sm text-text-muted mb-8">最後更新日期：2025 年 1 月</p>

            <div className="space-y-8 text-sm text-text-secondary leading-[1.9]">
              <section>
                <h2 className="text-lg font-bold text-text mb-3">1. 服務範圍</h2>
                <p>
                  GetClaw（以下稱「本服務」）由輕量科技股份有限公司（以下稱「本公司」）提供，
                  包括但不限於 OpenClaw AI 助理的部署安裝、安全加固、系統整合、工作流程設定，
                  以及 Managed Care 持續維護服務。
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">2. 服務使用</h2>
                <p>
                  您同意僅將本服務用於合法目的。本公司部署之 AI 助理系統，
                  運行於您自有或您有合法使用權限之硬體設備上。
                  您有責任確保硬體設備的物理安全與網路環境安全。
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">3. 智慧財產權</h2>
                <p>
                  OpenClaw 為開源軟體，依照其原始授權條款使用。
                  本公司提供之部署腳本、安全加固設定、工作流程模板等，
                  其智慧財產權屬於本公司，僅授權您於已部署的系統上使用。
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">4. 資料與隱私</h2>
                <p>
                  本服務採用 self-hosted 架構，您的資料處理均在您自己的硬體上進行。
                  本公司在部署過程中可能需要暫時存取您的系統，
                  部署完成後本公司不會保留您的任何資料。
                  詳細隱私權政策請參閱「隱私權政策」頁面。
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">5. 費用與付款</h2>
                <p>
                  服務費用依您選擇的方案而定。一次性部署費於部署完成後收取，
                  Managed Care 月費方案於每月初收取。
                  年約方案享有 2 個月免費優惠。
                  所有價格均為含稅價格（如適用）。
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">6. 免責聲明</h2>
                <p>
                  本服務以「現況」提供。本公司盡力確保部署品質與安全性，
                  但不保證 AI 助理的輸出結果完全正確或適用於所有情境。
                  您有責任審查 AI 助理執行的重要操作。
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">7. 責任限制</h2>
                <p>
                  在法律允許的最大範圍內，本公司對於使用本服務所產生的任何間接、
                  附帶、特殊或懲罰性損害不承擔責任。
                  本公司的總賠償責任不超過您在過去 12 個月內支付的服務費用總額。
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">8. 條款變更</h2>
                <p>
                  本公司保留隨時修改本服務條款之權利。修改後的條款將公佈於本頁面，
                  並自公佈之日起生效。繼續使用本服務即視為同意修改後的條款。
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-text mb-3">9. 聯絡方式</h2>
                <p>
                  如對本服務條款有任何疑問，請聯繫：
                  <a href="mailto:hello@getclaw.com" className="text-primary hover:underline ml-1">
                    hello@getclaw.com
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
