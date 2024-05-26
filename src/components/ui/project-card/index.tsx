import React from "react";
import { Card, CardContent, CardFooter } from "../card";
import Image, { StaticImageData } from "next/image";
import { Button } from "../button";
import Link from "next/link";
import { ArrowCircleRight } from "@phosphor-icons/react/dist/ssr";

type Props = {
  image: StaticImageData;
  project: string;
  target: string;
};

export const ProjectCard = ({ image, project, target }: Props) => {
  return (
    <div className="group relative w-[270px]  h-[200px] sm:w-[370px]  sm:h-[300px] md:w-[370px] md:h-[300px] lg:w-[370px] lg:h-[300px] xl:w-[470px] xl:h-[400px] 2xl:w-[570px] 2xl:h-[500px] rounded-3xl hover:scale-105  duration-500 cursor-pointer">
      <div className="absolute w-full h-full -z-10 rounded-3xl">
        <Image
          src={image}
          alt=""
          fill
          objectFit="cover"
          style={{ borderRadius: "1.5rem" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black to-transparent" />
      </div>
      <div className="flex flex-col items-center gap-10 absolute left-1/2 -translate-x-1/2 bottom-10">
        <p className="text-4xl group-hover:scale-110 duration-500 ">
          {project}
        </p>
        <Button className="flex gap-3">
          <Link href={target}>I want to see</Link>
          <ArrowCircleRight size={20} />
        </Button>
      </div>
    </div>
  );
};
