import { ImageResponse } from "next/og";

export const alt = "Mayavé — A New Definition of Desire";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#8D0124",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(120% 90% at 50% 35%, rgba(170,24,44,0.7), rgba(141,1,36,0))",
          }}
        />
        <div style={{ display: "flex", width: 84, height: 2, background: "#D8B15E" }} />
        <div
          style={{
            display: "flex",
            fontSize: 116,
            fontWeight: 600,
            letterSpacing: 28,
            paddingLeft: 28,
            marginTop: 44,
          }}
        >
          MAYAVÉ
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 14,
            paddingLeft: 14,
            marginTop: 32,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          A NEW DEFINITION OF DESIRE
        </div>
      </div>
    ),
    { ...size },
  );
}
