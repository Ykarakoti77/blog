import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/posts");

export async function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });

  // Sort posts by date (most recent first)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
