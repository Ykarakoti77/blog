import Title from "@/components/Title";
import Image from "next/image";

const achievements = [
  { title: "Candidate Master", platform: "Codeforces", rating: "1951" },
  { title: "5 Star", platform: "CodeChef", rating: "2061" },
  { title: "Knight", platform: "LeetCode", rating: "2065" },
];

const funFacts = [
  {
    title: "Vim Enthusiast",
    description: "I’m always tweaking my Vim setup.",
  },
  {
    title: "Typing Speed Aficionado",
    description: (
      <>
        Clocking ~128 WPM — because thinking should be the only bottleneck.
        <a
          href="https://www.youtube.com/watch?v=wcL-q_UI_GU"
          target="_blank"
          className="text-gray-500 underline ml-1 dark:text-gray-400"
        >
          (watch)
        </a>
        .
      </>
    ),
  },
  {
    title: "Chess Enthusiast",
    description: "Like to play chess during free time.",
  },
];

export default function HomePage() {
  return (
    <section className="px-1 pt-1">
      <Title title="About" />
      <div className="mb-10">
        <div className="w-32 h-32 rounded-full mx-auto overflow-hidden sm:float-right sm:mx-3 mb-5 ">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={128}
            height={128}
            className="object-cover grayscale-25 hover:grayscale-0 "
          />
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 font-normal font-mono">
          <p>
            Hey, I’m Yash, a software engineer with a strong background in
            competitive programming. My journey through platforms like
            Codeforces (Candidate Master) and CodeChef (5-Star) has pushed me to
            think critically, solve problems efficiently, and develop a deep
            understanding of algorithms and data structures.
          </p>
          <p className="my-3">
            I bring that same problem-solving mindset to backend development,
            building robust, scalable systems with .NET and C#, grounded in
            clean architecture and a strong emphasis on performance and
            reliability.
          </p>
          <p>
            At Shipotle Technologies, I work on designing and developing backend
            systems that power real-world applications, with an emphasis on
            robustness and maintainability.
          </p>
        </div>

        {/* Image on the right */}
      </div>

      <Title title="Achievements" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 mb-10">
        {achievements.map(({ title, platform, rating }) => (
          <div
            key={title + platform}
            className="p-2 px-3 border border-gray-700 rounded-lg hover:shadow-sm  transition"
          >
            <p className="text-sm font-mono font-medium text-gray-800 dark:text-gray-200 pb-0.5">
              {title}
            </p>
            <p className="text-xs font-mono text-gray-500 dark:text-gray-400">
              {platform} — {rating}
            </p>
          </div>
        ))}
      </div>

      <Title title="Not Just Code" />

      <p className="text-sm text-gray-500 dark:text-gray-400 font-normal font-mono mb-4">
        While I’m passionate about software engineering, there are a few other
        things I spend my time on. Here’s a glimpse:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {funFacts.map(({ title, description }) => (
          <div
            key={title}
            className="p-2 px-3 border border-gray-700 rounded-lg hover:shadow-sm transition"
          >
            <p className="text-sm font-mono font-medium text-gray-800 dark:text-gray-200 pb-1">
              {title}
            </p>
            <p className="text-xs font-mono text-gray-500 dark:text-gray-400 ">
              {description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 text-left mt-6 font-mono">
        -- NORMAL --
      </p>
    </section>
  );
}
