import About from "./components/About";
import CurrentReadTile from "./components/CurrentReadTile";
import Mugshot from "./components/Mugshot";
import Projects from "./components/Projects";
import Quote from "./components/Quote";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="bg-bgdark min-h-screen w-full">
      <div>
        <Quote />
      </div>
      <div className="flex flex-col">
        <div className="mt-10 flex flex-row justify-between">
          <div className="flex flex-row">
            <Mugshot />
            <About />
          </div>
          <div className="flex flex-row justify-around">
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
