"use client";

import { SiX, SiGithub, SiLinkedin } from "react-icons/si";

export default function Socials() {
  const socials = [
    {
      href: "https://twitter.com/elrbtclr",
      icon: <SiX className="h-7 w-7 text-black" />,
    },
    {
      href: "https://github.com/eulerbutcooler",
      icon: <SiGithub className="h-7 w-7 text-black" />,
    },
    {
      href: "https://linkedin.com/in/amaan-pathan",
      icon: <SiLinkedin className="h-7 w-7 text-black" />,
    },
  ];

  return (
    <div className="flex flex-row gap-10">
      {socials.map(({ href, icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_5px_white] active:scale-100"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
