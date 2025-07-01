import About from "./components/About";
import CurrentReadTile from "./components/CurrentReadTile";
import Mugshot from "./components/Mugshot";
import Projects from "./components/Projects";
import Quote from "./components/Quote";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="bg-bgdark h-screen w-screen">
      <div>
        <Quote />
      </div>
      <div className="flex flex-col">
        <div className="mt-20 flex flex-row justify-between">
          <div className="flex flex-row flex-wrap">
            <Mugshot />
            <About />
          </div>
          <div className="mt-5 flex flex-row">
            <Skills />
            <CurrentReadTile />
          </div>
        </div>
        <div>
          <Projects />
        </div>
      </div>
    </div>
  );
}
