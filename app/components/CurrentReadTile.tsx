"use server";
import CurrentReadServer from "../actions/currentreadserver";
export default async function CurrentReadTile() {
  const bookdetails = await CurrentReadServer();
  if (!bookdetails) {
    return "No book found";
  }
  return (
    <div>
      <div className="mr-32">
        <img
          src={bookdetails.image?.url}
          alt={bookdetails.title}
          width={"120px"}
        />
      </div>
    </div>
  );
}
