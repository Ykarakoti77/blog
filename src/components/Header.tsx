// src/components/Header.tsx
"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toggleDarkMode from "@/utils/theme";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center font-sans">
      <Link href="/" className="hover:bg-gray-100 dark:hover:bg-[#3030309e]">
        <h1 className="text-xl text-black dark:text-gray-200 font-bold font-sans">
          Yash Karakoti
        </h1>
      </Link>

      <div className="space-x-4 flex items-center">
        <button
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-gray-100 flex"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          <i className="material-icons scale-85">dark_mode</i>
        </button>
        <Link
          href="/"
          className={clsx(
            "font-mono text-sm font-normal",
            "px-2.5 py-1 rounded transition duration-100",
            pathname === "/"
              ? "bg-gray-200 dark:bg-[#303030]"
              : "hover:bg-gray-100 dark:hover:bg-[#3030309e]"
          )}
        >
          About
        </Link>

        <Link
          href="/blog"
          className={clsx(
            "font-mono text-sm",
            "px-2.5 py-1 rounded transition duration-100",
            pathname.startsWith("/blog")
              ? "bg-gray-200 dark:bg-[#303030]"
              : "hover:bg-gray-100 dark:hover:bg-[#3030309e]"
          )}
        >
          Blogs
        </Link>
      </div>
    </header>
  );
}
