"use client";
// import { motion } from "motion/react";
export default function Mugshot() {
  return (
    <div className="h-96 w-72 rounded-2xl ml-32 border-3 border-bgdark hover:border-white transition-all duration-150">
      <img
        src="/mugshot.jpg"
        alt="amaan pathan"
        className="object-cover w-full h-full rounded-2xl"
      ></img>
    </div>
  );
}
