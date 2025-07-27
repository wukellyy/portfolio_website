import React from "react";
import ProjectCard from "./ProjectCard";

import { PROJECTS } from "../data/projects";

const Projects = () => {
  return (
    <div className="w-full bg-cream">
      <div className="w-[500px] xl:w-full mx-auto h-full flex flex-col justify-center items-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-neutral-800">
          Projects
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-2">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
