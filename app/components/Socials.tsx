"use client";

import { SiX, SiGithub, SiLinkedin } from "react-icons/si";
import { motion } from "motion/react";

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
        <motion.a
          whileHover={{
            boxShadow: "0 0 20px 5px white",
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 w-12 bg-white rounded-full flex items-center justify-center
                       hover:scale-110 hover:shadow-[0_0_20px_5px_white] transition-all duration-300"
        >
          {icon}
        </motion.a>
      ))}
    </div>
  );
}
