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
  SiTailwindcss,
  SiDeno,
  SiNodedotjs,
} from "react-icons/si";

export const skills = [
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
  { title: "Next.js", icon: <SiNextdotjs className="h-6 w-6 text-white" /> },
  {
    title: "TailwindCSS",
    icon: <SiTailwindcss className="h-6 w-6 text-white" />,
  },
  { title: "Deno", icon: <SiDeno className="h-6 w-6 text-white" /> },
  { title: "Nodejs", icon: <SiNodedotjs className="h-6 w-6 text-white" /> },
  { title: "Hono", icon: <SiHono className="h-6 w-6 text-white" /> },
  { title: "Express", icon: <SiExpress className="h-6 w-6 text-white" /> },
  { title: "MongoDB", icon: <SiMongodb className="h-6 w-6 text-white" /> },
  { title: "Postgres", icon: <SiPostgresql className="h-6 w-6 text-white" /> },
  { title: "Redis", icon: <SiRedis className="h-6 w-6 text-white" /> },
  { title: "Bash", icon: <SiGnubash className="h-6 w-6 text-white" /> },
  { title: "Git", icon: <SiGit className="h-6 w-6 text-white" /> },
];

export default function Skills() {
  return (
    <div className="bg-bgdark relative h-96 w-full overflow-hidden text-center font-sans">
      <div className="from-bgdark pointer-events-none absolute top-0 z-10 h-24 w-full bg-gradient-to-b to-transparent" />
      <div className="from-bgdark pointer-events-none absolute bottom-0 z-10 h-24 w-full bg-gradient-to-t to-transparent" />

      <motion.div
        whileHover={{
          transition: {
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          },
        }}
        className="w-full"
        animate={{
          y: ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="flex flex-col gap-6 px-6 py-3">
          {skills.map(({ title, icon }, i) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              key={i}
              className="flex shrink-0 items-center gap-4 text-2xl text-white"
            >
              {icon}
              <span className="whitespace-nowrap">{title}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-6 px-6 py-3">
          {skills.map(({ title, icon }, i) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              key={`duplicate-${i}`}
              className="flex shrink-0 items-center gap-4 text-2xl text-white"
            >
              {icon}
              <span className="whitespace-nowrap">{title}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
