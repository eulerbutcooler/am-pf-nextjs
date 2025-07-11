"use cache";
import Image from "next/image";
import CurrentReadServer from "../actions/currentreadserver";

export default async function CurrentReadTile() {
  const bookdetails = await CurrentReadServer();
  if (!bookdetails) {
    return "No book found";
  }
  return (
    <div>
      {/* Mobile ka layout */}
      <div className="flex flex-col items-center sm:hidden">
        <div className="mb-2 flex justify-center text-center font-sans text-lg font-bold tracking-widest text-white">
          CURRENT READ
        </div>
        <Image
          src={bookdetails.image?.url}
          alt={bookdetails.title}
          width={240}
          height={320}
          className="mb-10 h-48 w-36 object-cover"
        />
      </div>

      {/* Desktop ka layout */}
      <div className="mt-5 hidden flex-row items-start sm:flex">
        <div className="mr-4 font-sans text-xl font-bold tracking-widest text-white [writing-mode:sideways-lr]">
          CURRENT READ
        </div>
        <Image
          src={bookdetails.image?.url}
          alt={bookdetails.title}
          width={180}
          height={180}
          className="mr-10 h-44 w-44"
        />
      </div>
    </div>
  );
}
