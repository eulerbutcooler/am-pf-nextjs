import Image from "next/image";

export default function Mugshot() {
  return (
    <div className="relative ml-32 h-96 w-72 rounded-2xl">
      <div className="group h-full w-full rounded-2xl">
        <Image
          src="/mugshot.jpg"
          alt="amaan pathan"
          className="h-full w-full rounded-2xl object-cover"
          width={282}
          height={378}
        />
      </div>
    </div>
  );
}
