"use client";
import { motion } from "motion/react";

const text = `Break in the sun till the sun breaks down`;
const letters = text.split("");

export default function Quote() {
  return (
    <div className="text-ogreen flex w-full justify-center pt-4 pb-2 text-center font-mono text-sm font-bold tracking-widest sm:text-lg">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.05,
            duration: 0.01,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}
