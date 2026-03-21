import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "GetClaw ClawCare 定價｜企業 AI 特助月費 NT$25,000 起";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #1a0a0a 0%, #2d0c0c 50%, #1a0a0a 100%)",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#c12d20",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              color: "white",
              fontWeight: 900,
            }}
          >
            G
          </div>
          <div
            style={{
              fontSize: "44px",
              fontWeight: 900,
              display: "flex",
            }}
          >
            <span style={{ color: "#c12d20" }}>Get</span>
            <span style={{ color: "#e8e0d8" }}>Claw</span>
          </div>
        </div>

        {/* Pricing headline */}
        <div
          style={{
            fontSize: "42px",
            fontWeight: 800,
            color: "#e8e0d8",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          企業 AI 特助，月費 NT$25,000 起
        </div>

        {/* Plan pills */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          {[
            { name: "基本版", price: "25,000" },
            { name: "進階版", price: "48,000", highlight: true },
            { name: "企業版", price: "98,000+" },
          ].map((plan) => (
            <div
              key={plan.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px 32px",
                borderRadius: "16px",
                background: plan.highlight
                  ? "rgba(193, 45, 32, 0.25)"
                  : "rgba(255, 255, 255, 0.06)",
                border: plan.highlight
                  ? "2px solid #c12d20"
                  : "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  color: plan.highlight ? "#ff6b5e" : "#a89888",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                {plan.name}
              </span>
              <span
                style={{
                  fontSize: "24px",
                  color: "#e8e0d8",
                  fontWeight: 700,
                }}
              >
                NT${plan.price}/月
              </span>
            </div>
          ))}
        </div>

        {/* Value prop */}
        <div
          style={{
            fontSize: "20px",
            color: "#a89888",
          }}
        >
          比聘人便宜 75% · 比顧問公司快 10 倍 · 真人顧問持續優化
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background:
              "linear-gradient(90deg, transparent, #c12d20, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
