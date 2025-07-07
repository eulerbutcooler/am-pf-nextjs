import Socials from "./Socials";

export default function About() {
  return (
    <div className="flex flex-col gap-3 text-center font-sans text-white sm:ml-8 sm:gap-5 sm:text-left">
      <div className="flex justify-center sm:justify-start">
        <span className="text-2xl font-bold sm:text-3xl">Amaan Pathan</span>
      </div>
      <span className="text-lg sm:w-56 sm:text-xl">Full stack developer</span>
      <span className="text-lg sm:w-56 sm:text-xl">
        Passionate about scalable backends and performant frontends
      </span>
      <a
        href="Resume.pdf"
        className="mx-auto my-1 w-48 rounded-full bg-white py-2 text-center text-lg font-extrabold text-black transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_5px_white] active:scale-100 sm:mx-0 sm:w-56 sm:py-1 sm:text-xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <div className="flex justify-center sm:block">
        <Socials />
      </div>
    </div>
  );
}
