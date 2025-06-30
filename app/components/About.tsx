import Socials from "./Socials";

export default function About() {
  return (
    <div className="ml-10 font-sans flex flex-col gap-8 text-white">
      <span className="text-4xl">Amaan Pathan</span>
      <span className="text-2xl w-64">Full stack developer</span>
      <span className="text-2xl w-64">
        Passionate about scalable backends and performant frontends
      </span>
      <a href="Resume.pdf" className="text-2xl w-64">
        Resume
      </a>
      <Socials />
    </div>
  );
}
