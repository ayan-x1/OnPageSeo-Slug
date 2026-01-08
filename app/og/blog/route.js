import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  const safeTitle =
    title && title.trim().length > 0
      ? title.slice(0, 100)
      : "SEO Slug Blog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#020617",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: 60, fontWeight: 800 }}>
          {safeTitle}
        </h1>

        <p style={{ fontSize: 28, marginTop: 20, opacity: 0.8 }}>
          SEO-friendly Dynamic Routing with Next.js
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
