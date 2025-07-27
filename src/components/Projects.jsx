import React from "react";
import ProjectCard from "./ProjectCard";

import { PROJECTS } from "../data/projects";

const Projects = () => {
  return (
    <div className="w-full bg-cream">
      <div className="w-[500px] mx-auto h-full flex flex-col justify-center items-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-neutral-800">
          Projects
        </h2>
        <div className="flex flex-col gap-2">
          {PROJECTS.map((project, idx) => (
            <div key={idx}>
              <ProjectCard project={project}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
