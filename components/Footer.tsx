export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white/50 pt-16 px-10 pb-10" role="contentinfo">
      <div className="max-w-[1200px] mx-auto grid grid-cols-[2fr_1fr_1fr] gap-16 max-md:grid-cols-1 max-md:gap-10">
        <div>
          <img
            src="/assets/getclaw-logo-white.png"
            alt="GetClaw 輕量科技"
            className="h-7 mb-4"
          />
          <p className="text-sm leading-[1.7] max-w-[320px]">
            輕量科技股份有限公司
            <br />
            你的虛擬技術長，為中小企業提供專業技術領導力。
          </p>
        </div>

        <div>
          <h5 className="text-white/90 text-sm font-bold mb-4 tracking-wide">
            服務
          </h5>
          <ul className="list-none flex flex-col gap-2">
            <li>
              <a href="#services" className="text-sm text-white/50 transition-colors hover:text-white/90">
                系統架構規劃
              </a>
            </li>
            <li>
              <a href="#services" className="text-sm text-white/50 transition-colors hover:text-white/90">
                技術團隊管理
              </a>
            </li>
            <li>
              <a href="#services" className="text-sm text-white/50 transition-colors hover:text-white/90">
                外包品質把關
              </a>
            </li>
            <li>
              <a href="#services" className="text-sm text-white/50 transition-colors hover:text-white/90">
                產品技術顧問
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white/90 text-sm font-bold mb-4 tracking-wide">
            聯絡
          </h5>
          <ul className="list-none flex flex-col gap-2">
            <li>
              <a href="#" className="text-sm text-white/50 transition-colors hover:text-white/90">
                hello@getclaw.com
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-white/50 transition-colors hover:text-white/90">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-white/50 transition-colors hover:text-white/90">
                隱私權政策
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-10 pt-6 border-t border-white/8 text-[13px] flex justify-between items-center max-md:flex-col max-md:gap-2 max-md:text-center">
        <span>
          &copy; 2025 輕量科技股份有限公司 GetClaw Inc. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
