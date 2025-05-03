import Link from "next/link";
import { getAllPosts } from "@/lib/posts"; // Your helper to read MDX metadata
import Title from "@/components/Title";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="px-1 pt-1">
      <Title title="Blogs" />
      <p className="text-sm font-light font-mono mb-6">
        Some notes, ideas, and writeups I’ve published over time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="p-2 px-3 border border-gray-700 rounded-lg hover:shadow-sm transition"
          >
            <p className="text-sm font-mono font-medium text-gray-800 pb-1 dark:text-gray-300">
              {post.title}
            </p>
            <p className="text-xs font-mono text-gray-500 dark:text-gray-400">
              {post.date} — {post.description}
            </p>
          </Link>
        ))}
      </div>

      <p className="text-xs text-gray-400 text-left mt-6 font-mono">
        -- ARCHIVE --
      </p>
    </section>
  );
}
