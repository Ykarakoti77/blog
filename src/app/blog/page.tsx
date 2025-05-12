import Link from "next/link";
import { getAllPosts } from "@/lib/posts"; // Your helper to read MDX metadata
import Title from "@/components/Title";
import { format } from "date-fns";

export const metadata = {
  title: "Yash's Blog",
  description:
    "A space where I share my thoughts, experiences, and things I’ve learned across topics that interest me.",
};

function getFormattedDate(date: Date) {
  return format(new Date(date), "d LLLL yyyy");
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="px-1 pt-1">
      <Title title="Blogs" />
      <p className="text-sm font-light font-mono mb-6  text-gray-800 pb-1 dark:text-gray-300">
        Some notes, ideas, and writeups I’ve published over time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`
            p-2 px-3 
            border border-gray-300 
            dark:border-[#4b49499e]
            rounded-md
            transition-all duration-200 ease-in-out 
            transform 
            hover:shadow-md 
            hover:bg-gray-100 
            dark:hover:bg-[#3030309e]
          `}
          >
            <p className="text-sm font-mono font-medium text-gray-800 pb-1 dark:text-gray-300">
              {post.title}
            </p>
            <p className="text-xs font-mono text-gray-500 dark:text-gray-400 pb-1">
              {getFormattedDate(post.date)}
            </p>
            <p className="text-xs font-mono text-gray-500 dark:text-gray-500">
              {post.description}
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
