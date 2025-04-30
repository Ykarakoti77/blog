import Link from "next/link";

export default function PostsPage() {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        <li>
          <Link href="/posts/first-post">First Post</Link>
        </li>
        <li>
          <Link href="/posts/second-post">Second Post</Link>
        </li>
      </ul>
    </div>
  );
}
