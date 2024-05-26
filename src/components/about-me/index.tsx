import { ArrowCircleRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

export const AboutMe = () => {
  return (
    <section className="flex relative w-screen h-[300px] sm:h-[500px] md:h-[800px]  items-center justify-center">
      <div className="flex absolute m-auto w-2/3 items-center z-10">
        <p className="text-[3.7vw] 2xl:text-[60px] font-thin">
          With 2 years of experience in front-end development, I find joy in the
          ever-evolving landscape of web technologies and the creative
          challenges they present...
        </p>
        <button className="text-[6vw] ml-20 opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out cursor-pointer">
          <Link href="/about-me">
            <ArrowCircleRight />
          </Link>
        </button>
      </div>
      <div className="absolute w-screen text-center bottom-0">
        <h1 className="text-[20vw] 2xl:text-[350px] text-cyan-700 opacity-10">
          about me
        </h1>
      </div>
    </section>
  );
};
