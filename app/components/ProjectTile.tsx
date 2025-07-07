"use client";
import { SiGithub } from "react-icons/si";
import { Globe } from "lucide-react";
import { techIcons } from "../utils/tech";
import React from "react";
import Image from "next/image";

interface ProjectTile {
  title: string;
  ghlink: string;
  livelink: string;
  about: string;
  hashtags: string[];
  img: string;
}

export default function ProjectTile(project: ProjectTile) {
  return (
    <div className="relative flex h-[26rem] w-72 flex-shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-white/30 bg-transparent p-0 font-sans transition-shadow duration-300 hover:shadow-[0_0_16px_2px_rgba(255,255,255,0.5)] sm:mx-10 sm:w-80">
      <Image
        width={480}
        height={320}
        src={project.img}
        alt={project.title}
        className="mx-auto h-40 w-full rounded-t-2xl object-fill px-2 pt-2 sm:object-cover"
      />
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
        <div className="flex flex-row items-center justify-between text-xl sm:text-2xl">
          <div className="font-bold">{project.title}</div>
          <div className="flex flex-row px-2">
            <a
              href={project.ghlink}
              className="px-1 transition-transform duration-200 hover:scale-110 active:scale-100 sm:px-2"
            >
              <SiGithub className="h-5 w-5 drop-shadow-none hover:drop-shadow-[0_0_8px_#FFFFFF] sm:h-6 sm:w-6" />
            </a>
            <a
              href={project.livelink}
              className="px-1 transition-transform duration-200 hover:scale-110 active:scale-100 sm:px-2"
            >
              <Globe className="h-5 w-6 drop-shadow-none hover:drop-shadow-[0_0_8px_#FFFFFF] sm:h-6 sm:w-7" />
            </a>
          </div>
        </div>
        <div className="mt-4 h-24 text-xs sm:text-sm">{project.about}</div>
        <div className="mt-4 flex flex-row flex-wrap items-start gap-2 sm:gap-3">
          {project.hashtags.map((tag, idx) => (
            <span
              key={idx}
              className="flex h-5 w-5 items-center justify-center py-0.5 text-xs text-white sm:h-6 sm:w-6"
            >
              {techIcons[tag] &&
                React.cloneElement(techIcons[tag], {
                  className: "h-full w-full text-white",
                })}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
