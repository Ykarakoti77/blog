// src/components/Header.tsx
"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderProps = {
  onToggleDarkMode: () => void;
  isDarkMode: boolean; // ✅ Add this line
};

export default function Header({ onToggleDarkMode }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center font-sans">
      <Link href="/" className="hover:bg-gray-100">
        <h1 className="text-2xl text-gray-900 font-bold">Yash Karakoti</h1>
      </Link>

      <div className="space-x-4 flex items-center">
        <button
          className="text-gray-600 dark:text-grey-600 hover:text-black dark:hover:text-gray-600 flex"
          onClick={onToggleDarkMode}
          aria-label="Toggle dark mode"
        >
          <span className="material-icons">dark_mode</span>
        </button>
        <Link
          href="/"
          className={clsx(
            "font-mono text-sm",
            "px-2.5 py-1 rounded transition duration-100",
            pathname === "/" ? "bg-gray-200" : "hover:bg-gray-100"
          )}
        >
          About
        </Link>

        <Link
          href="/blog"
          className={clsx(
            "font-mono text-sm",
            "px-2.5 py-1 rounded transition duration-100",
            pathname.startsWith("/blog") ? "bg-gray-200" : "hover:bg-gray-100"
          )}
        >
          Blogs
        </Link>
      </div>
    </header>
  );
}
