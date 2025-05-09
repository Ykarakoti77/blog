import { ImageResponse } from "@vercel/og";

export const runtime = "edge"; // Run on the Edge runtime

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name") || "name";
  const url = searchParams.get("url") || "website url";
  const title = searchParams.get("title") || "Title";
  const description =
    searchParams.get("description") || "A short description of your website.";
  const date = searchParams.get("date") || "Date Not Provided";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          backgroundColor: "#f0f0f0",
          padding: "60px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "24px",
            color: "#555",
          }}
        >
          <div>{name}</div>
          <div>{url}</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#f0f0f0",
            padding: "40px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h1 style={{ fontSize: "60px", margin: "0", color: "#333" }}>
            {title}
          </h1>
          <p style={{ fontSize: "30px", color: "#666", textAlign: "center" }}>
            {description}
          </p>
          <p style={{ fontSize: "20px", color: "#999" }}>{date}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
