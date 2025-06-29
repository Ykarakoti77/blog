import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCodeforces, SiCodechef, SiLeetcode } from "react-icons/si";

const navItems = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Ykarakoti77" },
  {
    icon: SiCodeforces,
    label: "Codeforces",
    href: "https://codeforces.com/profile/yash_karakoti",
  },
  {
    icon: SiCodechef,
    label: "Codechef",
    href: "https://www.codechef.com/users/yash_karakoti",
  },
  {
    icon: SiLeetcode,
    label: "LeetCode",
    href: "https://leetcode.com/u/yash_karakoti/",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yash-karakoti-412505219/",
  },
  {
    icon: FaXTwitter,
    label: "Twitter",
    href: "https://x.com/yashkarakoti_",
  },
];

export default function Contact() {
  return (
    <div className="flex justify-center py-4 px-2">
      <div className="flex flex-wrap justify-center gap-5 bg-gray-50 dark:bg-[#232222] px-4 py-2 rounded-3xl shadow-sm">
        {navItems.map(({ icon: Icon, label, href }, index) => (
          <a
            key={index}
            href={href}
            target={href.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#1c1c1c] group-hover:bg-gray-200 transition dark:group-hover:bg-[#3b3b3b]">
              <Icon
                className="font-thin text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-gray-100"
                size={16}
              />
            </div>
            <span className=" mt-1 text-gray-600  dark:text-gray-400 group-hover:text-black dark:group-hover:text-gray-100">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
