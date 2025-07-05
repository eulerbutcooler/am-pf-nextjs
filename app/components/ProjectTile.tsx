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
    <div className="relative mx-10 flex h-96 w-80 flex-col overflow-hidden rounded-2xl border border-white/30 bg-transparent p-0 font-sans transition-shadow duration-300 hover:shadow-[0_0_16px_2px_rgba(255,255,255,0.5)]">
      <Image
        width={480}
        height={480}
        src={project.img}
        alt={project.title}
        className="mx-auto h-40 w-full rounded-t-2xl object-cover px-2 pt-2"
      />
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex flex-row items-center justify-between text-2xl">
          <div className="font-bold">{project.title}</div>
          <div className="flex flex-row px-2">
            <a
              href={project.ghlink}
              className="px-2 transition-transform duration-200 hover:scale-110 active:scale-100"
            >
              <SiGithub className="h-6 w-6 drop-shadow-none hover:drop-shadow-[0_0_8px_#FFFFFF]" />
            </a>
            <a
              href={project.livelink}
              className="px-2 transition-transform duration-200 hover:scale-110 active:scale-100"
            >
              <Globe className="h-6 w-7 drop-shadow-none hover:drop-shadow-[0_0_8px_#FFFFFF]" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-sm">{project.about}</div>
        <div className="mt-4 flex flex-row items-start gap-3">
          {project.hashtags.map((tag, idx) => (
            <span key={idx} className="py-0.5 text-xs text-white">
              {techIcons[tag] &&
                React.cloneElement(techIcons[tag], {
                  className: "h-5 w-5 text-white",
                })}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
