/* eslint-disable @typescript-eslint/no-explicit-any */
// app/blog/[slug]/page.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { Metadata } from "next";
import { format, formatDistanceToNow } from "date-fns";
import prettyCodePlugin from "@/lib/rehype-pretty-config";
import remarkGfm from "remark-gfm";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

// Used by App Router to pre-render all blog post paths
export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/posts");
  const files = fs.readdirSync(postsDir);

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

// Optional: set dynamic meta tags like title/description for each blog
export async function generateMetadata(
  props: BlogPostProps
): Promise<Metadata> {
  const params = await props.params;
  const filePath = path.join(process.cwd(), "src/posts", `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter } = matter(fileContent);

  const ogImageUrl = `https://yashkarakotime.vercel.app/api/og?title=${encodeURIComponent(
    frontmatter.title
  )}&description=${encodeURIComponent(
    frontmatter.description
  )}&date=${encodeURIComponent(
    format(new Date(frontmatter.date), "d LLLL yyyy")
  )}&name=Yash%20Karakoti&url=yashkarakotime.vercel.app`;

  const url = `https://yashkarakotime.vercel.app/blog/${params.slug}`;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
      url: url,
      images: [ogImageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
      images: [ogImageUrl],
    },
  };
}

// Main component for rendering a single blog post
export default async function BlogPost(props: BlogPostProps) {
  const params = await props.params;
  const filePath = path.join(process.cwd(), "src/posts", `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Extract frontmatter and raw markdown content
  const { content, data: frontmatter } = matter(fileContent);

  // Compile the MDX content into a React component
  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        rehypePlugins: [prettyCodePlugin],
        remarkPlugins: [remarkGfm], // add this
      },
    },
  });

  const formattedDate = format(new Date(frontmatter.date), "d LLLL yyyy");
  const relativeDate = formatDistanceToNow(new Date(frontmatter.date), {
    addSuffix: true,
  });

  return (
    <div className="max-w-3xl mx-auto font-sans">
      <header className="mb-8 border-b border-gray-300 pb-4 ">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          {frontmatter.title}
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium font-mono mt-2">
          @{frontmatter.author} | {formattedDate} ({relativeDate})
        </p>
        {frontmatter.description && (
          <p className="text-base text-gray-500 font-light mt-3 dark:text-gray-400">
            {frontmatter.description}
          </p>
        )}
      </header>

      {/* Render compiled MDX content with tailwind typography styles */}
      <article className="prose dark:prose-invert"> {mdxContent}</article>
    </div>
  );
}
