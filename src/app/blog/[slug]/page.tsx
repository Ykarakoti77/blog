import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/posts"));
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const filePath = path.join(process.cwd(), "src/posts", `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(fileContent);

  const { content: mdxContent, frontmatter } = await compileMDX<{
    title: string;
    date: string;
    description: string;
  }>({
    source: content,
    options: { parseFrontmatter: true },
    components: {},
  });

  return (
    <article className="prose dark:prose-invert mx-auto">
      <h1 className="mb-2">{frontmatter.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{frontmatter.date}</p>
      {mdxContent}
    </article>
  );
}
