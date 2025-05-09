import { ImageResponse } from "@vercel/og";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name") || "name";
  const url = searchParams.get("url") || "website url";
  const title = searchParams.get("title") || "Title";
  const description =
    searchParams.get("description") || "A short description of your website.";
  const date = searchParams.get("date") || "Date Not Provided";

  const interSemiBold = await readFile(
    join(process.cwd(), "src/assets/Inter-SemiBold.ttf")
  );
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
          }}
        >
          <h1
            style={{
              fontSize: "70px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
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
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
