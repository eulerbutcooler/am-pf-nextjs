"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiHono,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGnubash,
  SiGit,
} from "react-icons/si";

const skills = [
  {
    title: "Javascript",
    icon: <SiJavascript className="h-6 w-6 text-white" />,
  },
  {
    title: "Typescript",
    icon: <SiTypescript className="h-6 w-6 text-white" />,
  },
  { title: "Python", icon: <SiPython className="h-6 w-6 text-white" /> },
  { title: "Docker", icon: <SiDocker className="h-6 w-6 text-white" /> },
  { title: "React", icon: <SiReact className="h-6 w-6 text-white" /> },
  { title: "Nextjs", icon: <SiNextdotjs className="h-6 w-6 text-white" /> },
  { title: "Hono", icon: <SiHono className="h-6 w-6 text-white" /> },
  { title: "Express", icon: <SiExpress className="h-6 w-6 text-white" /> },
  { title: "Mongodb", icon: <SiMongodb className="h-6 w-6 text-white" /> },
  { title: "Postgres", icon: <SiPostgresql className="h-6 w-6 text-white" /> },
  { title: "Redis", icon: <SiRedis className="h-6 w-6 text-white" /> },
  { title: "Bash", icon: <SiGnubash className="h-6 w-6 text-white" /> },
  { title: "Git", icon: <SiGit className="h-6 w-6 text-white" /> },
];

const duplicatedSkills = [...skills, ...skills, ...skills];

export default function Skills() {
  return (
    <div className="relative h-96 overflow-hidden bg-bgdark">
      {/* Top gradient */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-16 z-10 bg-gradient-to-b from-bgdark to-transparent" />
      {/* Bottom gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 z-10 bg-gradient-to-t from-bgdark to-transparent" />
      <motion.div
        className="font-sans flex flex-col gap-4 text-2xl px-2"
        animate={{ y: ["0%", "-33.3333%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedSkills.map(({ title, icon }, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 text-white"
            whileHover={{ scale: 1.1 }}
          >
            {icon}
            <span>{title}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
