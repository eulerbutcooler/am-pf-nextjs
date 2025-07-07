import Image from "next/image";

export default function Mugshot() {
  return (
    <div className="relative mx-auto h-64 w-48 rounded-2xl sm:ml-24 sm:h-80 sm:w-60">
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
