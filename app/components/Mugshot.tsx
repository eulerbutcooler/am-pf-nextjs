"use client";
import { motion } from "motion/react";
//@ts-ignore
export default function Mugshot() {
  return (
    <div className=" h-96 w-72 ml-32">
      <motion.div
        whileHover={{
          boxShadow: "0 0 20px 5px #FFFFFF",
        }}
        className="w-full h-full rounded-2xl "
      >
        <img
          src="/mugshot.jpg"
          alt="amaan pathan"
          className="object-cover w-full h-full rounded-2xl"
        ></img>
      </motion.div>
    </div>
  );
}
