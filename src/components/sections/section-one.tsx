import Image from "next/image";
import cover from "@/assets/cover.jpg";

export const SectionOne = () => {
  return (
    <section className="relative w-screen h-screen">
      <Image src={cover} alt="cover" fill objectFit="cover" />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -trnaslate-y-1/2">
        <h1 className="text-6xl text-white font-bold text-start">
          Hello. <br /> I am a Front end developer
        </h1>
        <p className=" text-2xl text-muted-foreground text-start mt-3">
          I am addicted to coding and creating things wether from scratch or
          from a design.
        </p>
      </div>
    </section>
  );
};
