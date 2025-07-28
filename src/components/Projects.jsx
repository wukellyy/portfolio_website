import React from "react";
import ProjectCard from "./ProjectCard";

import { PROJECTS } from "../data/projects";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full min-h-screen pt-[12vh] bg-cream flex justify-center items-center"
    >
      <div className="px-8 sm:w-[550px] md:w-[650px] lg:w-[1200px] h-full flex flex-col justify-center items-center text-center text-neutral-800 gap-2">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-neutral-800">
          Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
