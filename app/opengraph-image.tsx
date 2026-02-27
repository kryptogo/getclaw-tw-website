import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GetClaw — 讓 AI 真正幫你做事，不只是裝在你的電腦上";
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
          background: "linear-gradient(135deg, #1a0a0a 0%, #2d0c0c 50%, #1a0a0a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#c12d20",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              color: "white",
              fontWeight: 900,
            }}
          >
            G
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              display: "flex",
            }}
          >
            <span style={{ color: "#c12d20" }}>Get</span>
            <span style={{ color: "#e8e0d8" }}>Claw</span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 500,
            color: "#e8e0d8",
            marginBottom: "12px",
          }}
        >
          讓 AI 真正幫你做事，不只是裝在你的電腦上
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "20px",
            color: "#a89888",
          }}
        >
          專人量身導入 · 14天密集陪跑 · 資料不離開你的硬體
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, transparent, #c12d20, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
