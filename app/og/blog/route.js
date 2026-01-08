import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Seo ";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #020617, #020617)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: 64, fontWeight: 800, maxWidth: 900 }}>
          {title}
        </h1>

        <p style={{ fontSize: 28, marginTop: 24, opacity: 0.8 }}>
          SEO-Optimized Blog · Next.js App Router
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
