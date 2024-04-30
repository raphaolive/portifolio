import Image from "next/image";
import { differenceInYears } from "date-fns";
import { Card, CardContent } from "../ui/card";

import js from "@/assets/js.png";
import css from "@/assets/css.png";
import html from "@/assets/html.png";
import cy from "@/assets/cy.png";
import next from "@/assets/next.png";
import react from "@/assets/react.png";
import reactNative from "@/assets/react-native.png";
import ts from "@/assets/ts.png";

export const SectionFour = () => {
  const skills = [
    {
      technology: "JavaScript",
      image: js,
    },
    {
      technology: "TypeScript",
      image: ts,
    },
    {
      technology: "HTML",
      image: html,
    },
    {
      technology: "CSS",
      image: css,
    },
    {
      technology: "Cypress",
      image: cy,
    },
    {
      technology: "React",
      image: react,
    },
    {
      technology: "React Native",
      image: reactNative,
    },
    {
      technology: "NextJs",
      image: next,
    },
  ];

  const yearsOfExperience = differenceInYears(new Date(), new Date(2021, 6, 1));

  return (
    <section className="flex flex-col gap-12 w-2/3 h-auto m-auto my-52">
      <h1 className="text-3xl font-bold text-muted-foreground text-center">
        My skills
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <div key={`${skill.technology}-${index}`} className="text-center">
            <p className=" text-xl text-bold mb-3">{skill.technology}</p>
            <Card className="text-center bg-gray-800 dark:bg-transparent hover:border-cyan-500/[0.5] hover:shadow-2xl hover:shadow-cyan-500/[0.2] hover:scale-102 transition duration-500">
              <CardContent className="flex aspect-square items-center justify-center p-4 ">
                <Image src={skill.image} width={120} height={120} alt="" />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
