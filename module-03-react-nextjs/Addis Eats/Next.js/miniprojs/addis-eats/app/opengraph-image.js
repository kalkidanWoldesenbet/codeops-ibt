import { ImageResponse } from "next/og";

export const alt = "Addis Eats — authentic Ethiopian food";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#ea580c",
          color: "white",
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        <div>Addis Eats</div>
        <div style={{ fontSize: 32, marginTop: 24 }}>
          A Taste of Ethiopia
        </div>
      </div>
    ),
    size
  );
}
