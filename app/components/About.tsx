import Socials from "./Socials";

export default function About() {
  return (
    <div className="ml-10 flex flex-col gap-8 font-sans text-white">
      <span className="text-4xl">Amaan Pathan</span>
      <span className="w-64 text-2xl">Full stack developer</span>
      <span className="w-64 text-2xl">
        Passionate about scalable backends and performant frontends
      </span>
      <a href="Resume.pdf" className="w-64 text-2xl">
        Resume
      </a>
      <Socials />
    </div>
  );
}
