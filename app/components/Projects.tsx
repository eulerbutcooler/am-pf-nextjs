"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectTile from "./ProjectTile";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "WIKISILLYGOOSE",
      img: "/wsg.png",
      ghlink: "https://github.com/eulerbutcooler/wikisillygoose",
      livelink: "https://wikisillygoose.eulerbutcooler.tech/",
      about:
        "A fun project that lets you find interesting places to visit around the place you clicked. Randomized so you get a new place everytime.",
      hashtags: ["Nextjs", "Gemini", "ThreeJS", "Vercel"],
    },
    {
      title: "PRISM",
      img: "/prism.png",
      ghlink: "https://github.com/eulerbutcooler/prism-backend",
      livelink: "https://prism2025.tech",
      about:
        "Website for Lucknow University's tech fest enabling students from all over India to register for it. Implemented auth, database schema, validation checks and hosting.",
      hashtags: ["Nodejs", "Express", "React", "Postgres", "Docker", "Nginx"],
    },
    {
      title: "MAIDAAN",
      img: "/maidaan.png",
      ghlink: "https://github.com/eulerbutcooler/Maidaan-Extra-Cool",
      livelink: "https://prism2025.tech",
      about:
        "A social sports event management platform enabling organization to host tournaments and players to participate seamlessly. Worked on sign-in flow and added UI improvements.",
      hashtags: ["TailwindCSS", "Axios", "React", "Typescript"],
    },
    {
      title: "GUIDEFOX",
      img: "/guidefox.png",
      ghlink: "https://github.com/eulerbutcooler/bluewave-onboarding",
      livelink: "https://guidefox.io/",
      about:
        "Contributed to Guidefox by Bluewave labs, Canada. Refactored the backend, wrote tests and added validations for auth and banners using Formik, Yup and Express-validator.",
      hashtags: ["Express", "React", "Javascript", "Zod"],
    },
  ];

  return (
    <div className="mt-10 w-full pb-8 sm:pb-0">
      <div className="mb-6 flex justify-center sm:mb-8">
        <h2 className="text-center font-sans text-lg font-bold tracking-widest text-white sm:text-2xl">
          PROJECTS
        </h2>
      </div>

      {/* Mobile carousel*/}
      <div className="relative sm:hidden">
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ left: -576, right: 0 }}
            onDragEnd={(_, info) => {
              const offset = info.offset.x;
              if (offset > 50 && activeIndex > 0) {
                setActiveIndex(activeIndex - 1);
              } else if (offset < -50 && activeIndex < projects.length - 1) {
                setActiveIndex(activeIndex + 1);
              }
            }}
            animate={{
              x: `calc(50vw - 144px - ${activeIndex * 288}px)`,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 100 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="flex flex-1/3"
                animate={{
                  scale: index === activeIndex ? 1 : 0.85,
                  filter: index === activeIndex ? "blur(0px)" : "blur(2px)",
                  opacity: index === activeIndex ? 1 : 0.6,
                }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveIndex(index)}
              >
                <ProjectTile {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots indicator */}
        <div className="mt-4 flex justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-200 ${
                index === activeIndex ? "scale-125 bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden flex-row sm:flex">
        {projects.map((project) => (
          <ProjectTile key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
