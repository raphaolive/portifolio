// SAMPLE https://www.behance.net/gallery/195190601/Front-end-developer-portfolio-Website-UI-Design?tracking_source=search_projects|developer+portfolio&l=4

import { SectionFour } from "@/components/sections/section-four";
import { SectionOne } from "@/components/sections/section-one";
import { SectionThree } from "@/components/sections/section-three";
import { SectionTwo } from "@/components/sections/section-two";

export default function Home() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
}
