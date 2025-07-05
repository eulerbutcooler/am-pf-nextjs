"use client";
import React from "react";
import { motion } from "framer-motion";
import { techIcons } from "../utils/tech";
const skills = Object.entries(techIcons).map(([title, icon]) => ({
  title,
  icon,
}));

export default function Skills() {
  return (
    <div className="bg-bgdark relative flex h-96 w-full flex-row items-start overflow-hidden text-center font-sans">
      <div className="z-30 mt-4 mr-2 ml-4 font-sans text-xl font-bold tracking-widest text-white [writing-mode:sideways-lr]">
        TECH I'VE USED
      </div>
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
              {React.cloneElement(icon, { className: "h-6 w-6 text-white" })}
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
              {React.cloneElement(icon, { className: "h-6 w-6 text-white" })}
              <span className="whitespace-nowrap">{title}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
