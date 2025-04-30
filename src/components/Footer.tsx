import Contact from "./Contact";

export default function Footer() {
  return (
    <footer className="text-center text-xs text-gray-500 mt-12 py-6 border-t font-mono border-gray-200">
      <Contact />© {new Date().getFullYear()} Yash Karakoti. :wq
    </footer>
  );
}
