import React from "react";
import { ProjectCard } from "../ui/project-card";

import nona from "@/assets/nona-americana.webp";
import quick from "@/assets/quick-page.webp";
import tali from "@/assets/tali-house.webp";

export const Works = () => {
  const projects = [
    {
      name: "Nona Americana",
      image: nona,
      target: "/nona-americana",
    },
    {
      name: "Tali House",
      image: tali,
      target: "/tali-house",
    },
    {
      name: "Quick",
      image: quick,
      target: "/landing-quick",
    },
  ];

  return (
    <section className="flex w-screen h-auto p-5 md:p-40 justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl">works</h1>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            project={project.name}
            image={project.image}
            target={project.target}
          />
        ))}
      </div>
    </section>
  );
};
