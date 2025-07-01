import { SiGithub } from "react-icons/si";
import { Globe } from "lucide-react";

interface ProjectTile {
  title: string;
  ghlink: string;
  livelink: string;
  about: string;
  hashtags: string[];
}

export default function ProjectTile(project: ProjectTile) {
  return (
    <div className="relative mx-10 h-72 w-72 rounded-2xl bg-gray-800 font-sans">
      <div>
        <div className="absolute bottom-26 flex w-full flex-row justify-between">
          <div className="px-2">{project.title}</div>
          <div className="flex flex-row px-2">
            <a href={project.ghlink} className="px-2">
              <SiGithub className="h-6 w-6" />
            </a>
            <a href={project.ghlink} className="px-2">
              <Globe className="h-6 w-7" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-20 w-full px-2">{project.about}</div>
    </div>
  );
}
