import { ImageResponse } from "next/og";

export const alt = "Agendata — Le flux événementiel du web, capté, analysé, restitué";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "radial-gradient(60% 60% at 50% 0%, #4C43C9 0%, #16142B 70%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, opacity: 0.85 }}>Agendata</div>
        <div style={{ marginTop: 28, fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.04em" }}>
          Le flux événementiel du web, capté, analysé, restitué.
        </div>
        <div style={{ marginTop: 32, fontSize: 30, opacity: 0.7 }}>
          Des fiches prêtes pour votre système d&apos;information touristique (Apidae, …)
        </div>
      </div>
    ),
    size,
  );
}
