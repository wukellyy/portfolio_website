import React from "react";
import SkillCard from "./SkillCard";

import { FRONTEND_SKILLS } from "../data/skills.js";
import { BACKEND_SKILLS } from "../data/skills.js";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full min-h-screen pt-[12vh] bg-cream flex justify-center items-center"
    >
      <div className="px-8 sm:w-[550px] md:w-[650px] lg:w-[750px] h-full flex flex-col justify-center items-center text-center text-neutral-800 gap-2">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-neutral-800">
          Skills
        </h2>
        <div className="flex flex-col xl:flex-row xl:gap-4">
          <SkillCard title="Frontend Development" skills={FRONTEND_SKILLS} />
          <SkillCard title="Backend Development" skills={BACKEND_SKILLS} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
