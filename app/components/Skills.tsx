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
    <div className="bg-bgdark relative flex w-full flex-col overflow-hidden text-center font-sans sm:mx-0 sm:h-80 sm:flex-row sm:items-start">
      <div className="z-30 mt-10 flex justify-center text-center font-sans text-lg font-bold tracking-widest text-white sm:mt-4 sm:mr-2 sm:ml-4 sm:justify-start sm:text-left sm:text-xl sm:[writing-mode:sideways-lr]">
        TECH I&apos;VE USED
      </div>

      {/* Mobile ka horizontal scroll */}
      <div className="relative h-20 w-full overflow-hidden sm:hidden">
        <div className="from-bgdark pointer-events-none absolute left-0 z-10 h-full w-8 bg-gradient-to-r to-transparent" />
        <div className="from-bgdark pointer-events-none absolute right-0 z-10 h-full w-8 bg-gradient-to-l to-transparent" />

        <motion.div
          className="flex h-full items-center"
          animate={{
            x: [0, -100 * skills.length - 220],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <div className="flex gap-6 px-6">
            {skills.map(({ title, icon }, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-3 text-lg text-white"
              >
                {React.cloneElement(icon, { className: "h-5 w-5 text-white" })}
                <span className="whitespace-nowrap">{title}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-6 px-6">
            {skills.map(({ title, icon }, i) => (
              <div
                key={`duplicate-${i}`}
                className="flex shrink-0 items-center gap-3 text-lg text-white"
              >
                {React.cloneElement(icon, { className: "h-5 w-5 text-white" })}
                <span className="whitespace-nowrap">{title}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Desktop ka vertical scroll */}
      <div className="hidden sm:block sm:w-full">
        <div className="from-bgdark pointer-events-none absolute top-0 z-10 h-16 w-full bg-gradient-to-b to-transparent sm:h-20" />
        <div className="from-bgdark pointer-events-none absolute bottom-0 z-10 h-16 w-full bg-gradient-to-t to-transparent sm:h-20" />

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
          <div className="flex flex-col gap-4 px-4 py-2 sm:gap-5 sm:px-6 sm:py-3">
            {skills.map(({ title, icon }, i) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                key={i}
                className="flex shrink-0 items-center gap-3 text-lg text-white sm:gap-4 sm:text-xl"
              >
                {React.cloneElement(icon, {
                  className: "h-5 w-5 sm:h-6 sm:w-6 text-white",
                })}
                <span className="whitespace-nowrap">{title}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-4 px-4 py-2 sm:gap-5 sm:px-6 sm:py-3">
            {skills.map(({ title, icon }, i) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                key={`duplicate-${i}`}
                className="flex shrink-0 items-center gap-3 text-lg text-white sm:gap-4 sm:text-xl"
              >
                {React.cloneElement(icon, {
                  className: "h-5 w-5 sm:h-6 sm:w-6 text-white",
                })}
                <span className="whitespace-nowrap">{title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
