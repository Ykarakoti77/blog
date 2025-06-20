// layout.tsx

import { geistSans, geistMono } from "@/font";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const themeScript = `
    (function() {
      try {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } catch (e) {}
    })();
  `;

const title = "Yash Karakoti";
const description =
  "Yash Karakoti is a software engineer and competitive programmer, passionate about building scalable systems and solving complex problems.";

export const metadata = {
  title: title,
  description: description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="max-w-3xl mx-auto p-4 pt-3 sm:pt-6">
          <Header />
          <main className="mt-6 sm:mt-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
