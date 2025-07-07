import { Suspense } from "react";
import About from "./components/About";
import CurrentReadTile from "./components/CurrentReadTile";
import Mugshot from "./components/Mugshot";
import Projects from "./components/Projects";
import Quote from "./components/Quote";
import Skills from "./components/Skills";
import PageSkeleton from "./components/PageSkeleton";
export default function Home() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <div className="bg-bgdark min-h-screen w-full overflow-x-hidden">
        <div className="py-2">
          <Quote />
        </div>
        <div className="flex min-h-full flex-col">
          <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:justify-between sm:gap-0 sm:px-0">
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-0">
              <Mugshot />
              <About />
            </div>
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-around sm:gap-0">
              <Skills />
              <div className="hidden sm:block">
                <CurrentReadTile />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Projects />
          </div>
          <div className="sm:hidden">
            <CurrentReadTile />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
