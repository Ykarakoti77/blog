// src/components/Header.tsx
"use client";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-2xl text-gray-900 font-bold">Yash Karakoti</h1>
      <div className="space-x-4 flex items-center">
        <button
          className="text-gray-600 dark:text-grey-600 hover:text-black dark:hover:text-gray-600 flex"
          aria-label="Toggle dark mode"
        >
          <span className="material-icons text-3xl">dark_mode</span>
        </button>
        <a
          href="#about"
          className="px-2.5 py-z1 rounded border border-transparent hover:border-gray-600 transition duration-200"
        >
          About
        </a>
        <a href="#follow" className="hover:underline hover:font-semibold">
          Follow
        </a>
      </div>
    </header>
  );
}
