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
      <div className="mt-5 flex flex-row items-start">
        <div className="mr-2 font-sans text-xl font-bold tracking-widest [writing-mode:sideways-lr]">
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
