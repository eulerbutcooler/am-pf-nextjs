"use server";
import Image from "next/image";
import CurrentReadServer from "../actions/currentreadserver";
export default async function CurrentReadTile() {
  const bookdetails = await CurrentReadServer();
  if (!bookdetails) {
    return "No book found";
  }
  return (
    <div>
      <div className="mr-32">
        <Image
          src={bookdetails.image?.url}
          alt={bookdetails.title}
          width={270}
          height={200}
        />
      </div>
    </div>
  );
}
