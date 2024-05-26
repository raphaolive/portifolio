import Image from "next/image";
import cover from "@/assets/cover.jpg";

export const Cover = () => {
  return (
    <section className="relative w-screen h-[400px] sm:h-[600px] md:h-[900px]">
      <div className="relative h-full w-full">
        <div className="">
          <Image src={cover} alt="cover" quality={20} fill objectFit="cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent" />
        <div className="absolute w-screen h-1/2 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute w-screen h-1/2 bottom-0 bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="absolute top-2/3 md:top-1/2 right-0 transform -translate-x-1/4 1xl:-translate-x-1/3 -trnaslate-y-1/2 -mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-muted-foreground font-thin text-end">
          Hello, I&apos;m Rapha
        </h1>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-end mt-5 text-white">
          Frontend Developer
        </p>
      </div>
    </section>
  );
};
