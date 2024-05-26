import { differenceInYears } from "date-fns";
import React from "react";
import picture from "@/assets/me-walking.png";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const AboutMe = () => {
  const yearsOfExperience = differenceInYears(new Date(), new Date(2021, 6, 1));

  return (
    <section
      className="flex flex-col
     lg:flex-row relative h-auto lg:h-auto w-screen items-center justify-center"
    >
      <div className="flex flex-col mt-20 md:mt-10 w-auto lg:w-2/3 gap-5 text-justify p-12 sm:p-20 lg:p-40 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <p className="text-white">About me</p>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl text-muted-foreground">About me.</h1>
        <p>
          Hi there! I&apos;m Raphael, a passionate front-end developer with a
          love for crafting elegant and user-friendly interfaces. With{" "}
          {yearsOfExperience} years of experience in front-end development, I
          find joy in the ever-evolving landscape of web technologies and the
          creative challenges they present.
        </p>
        <p>
          My coding journey began at 24 when I started teaching myself HTML,
          CSS, and JavaScript through online resources like YouTube. Since then,
          I&apos;ve been on a relentless quest to expand my knowledge and
          enhance the quality of my work. From mastering the latest frameworks
          to refining my problem-solving skills, I&apos;m dedicated to
          continuous growth and learning.
        </p>
        <p>
          What sets me apart is my unwavering passion for learning and my
          meticulous attention to detail. As a junior front-end developer, I
          bring a fresh perspective and a hunger for innovation to every
          project. I thrive in collaborative environments, leveraging my strong
          communication skills to collaborate effectively with cross-functional
          teams and bring creative visions to life.
        </p>
        <p>
          Outside of work, you&apos;ll often find me producing music or honing
          my skills on the piano. When I&apos;m not immersed in code or
          melodies, I enjoy staying active at the gym or indulging in a game of
          volleyball at the beach. I believe in the power of honesty, empathy,
          and compassion to create positive change in people&apos;s lives, and
          I&apos;m dedicated to continuous personal and professional growth.
        </p>
        <p>
          Let&apos;s <strong>connect and create</strong> something amazing
          together!
        </p>
      </div>
      <div className="relative w-auto md:w-1/4  opacity-50">
        <Image src={picture} alt="Raphael's picture" width={350} />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black to-transparent " />
      </div>
    </section>
  );
};

export default AboutMe;
