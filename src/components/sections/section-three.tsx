import Image from "next/image";
import { differenceInYears } from "date-fns";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import quick from "@/assets/quick-page.webp";
import nona from "@/assets/nona-americana.webp";
import tali from "@/assets/tali-house.webp";
import { Card, CardContent } from "../ui/card";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export const SectionThree = () => {
  const jobs = [
    {
      title: "Tali House",
      image: tali,
      description: "I could have a chance to code an amazing hotel website.",
    },
    {
      title: "Nona Americana",
      image: nona,
      description: "Delicious restaurant of italian food in South America.",
    },
    {
      title: "Quick Page",
      image: quick,
      description: "An amazing landing page with best practices.",
    },
  ];

  const yearsOfExperience = differenceInYears(new Date(), new Date(2021, 6, 1));

  return (
    <section className="flex flex-row-reverse items-center gap-12 w-2/4 h-auto m-auto my-52">
      <h1 className="text-3xl ml-10 font-bold text-muted-foreground">
        Portifolio
      </h1>

      <Carousel className="w-full">
        <CarouselContent>
          {jobs.map((job, index) => (
            <CarouselItem key={`${job.title}${index}`}>
              <CardContainer className="inter-var">
                <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[50rem] h-auto sm:h-[35rem] rounded-xl p-6 border ">
                  <CardItem
                    translate="20"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {job.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="30"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {job.description}
                  </CardItem>
                  <CardItem translateZ="90" className="w-full mt-4">
                    <Image
                      src={job.image}
                      alt="tali"
                      height={1000}
                      width={1000}
                      className="h-600 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  </CardItem>
                  <div className="flex mt-12 justify-center">
                    <CardItem
                      translateZ={30}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold"
                    >
                      I want to see.
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
