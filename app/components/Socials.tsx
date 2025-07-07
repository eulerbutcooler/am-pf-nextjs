"use client";
import { SiX, SiGithub, SiLinkedin } from "react-icons/si";

export default function Socials() {
  const socials = [
    {
      href: "https://twitter.com/elrbtclr",
      icon: <SiX className="h-5 w-5 text-black sm:h-6 sm:w-6" />,
    },
    {
      href: "https://github.com/eulerbutcooler",
      icon: <SiGithub className="h-5 w-5 text-black sm:h-6 sm:w-6" />,
    },
    {
      href: "https://linkedin.com/in/amaan-pathan",
      icon: <SiLinkedin className="h-5 w-5 text-black sm:h-6 sm:w-6" />,
    },
  ];

  return (
    <div className="flex w-48 flex-row justify-between gap-6 sm:w-56 sm:justify-between sm:gap-0">
      {socials.map(({ href, icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_5px_white] active:scale-100 sm:h-10 sm:w-10"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
