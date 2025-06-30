import About from "./components/About";
import CurrentReadTile from "./components/CurrentReadTile";
import Mugshot from "./components/Mugshot";
import Quote from "./components/Quote";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="bg-bgdark h-screen w-screen">
      <div>
        <Quote />
      </div>
      <div className="flex flex-row justify-between mt-20">
        <div className="flex flex-wrap flex-row">
          <Mugshot />
          <About />
        </div>
        <div className="flex flex-row gap-30 mt-5">
          <Skills />
          <CurrentReadTile />
        </div>
      </div>
    </div>
  );
}
