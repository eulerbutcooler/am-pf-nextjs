import Socials from "./Socials";

export default function About() {
  return (
    <div className="ml-10 flex flex-col gap-8 font-sans text-white">
      <span className="text-4xl font-bold">Amaan Pathan</span>
      <span className="w-64 text-2xl">Full stack developer</span>
      <span className="w-64 text-2xl">
        Passionate about scalable backends and performant frontends
      </span>
      <a
        href="Resume.pdf"
        className="my-1 w-64 rounded-full bg-white text-center text-2xl font-extrabold text-black transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_5px_white] active:scale-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <Socials />
    </div>
  );
}
