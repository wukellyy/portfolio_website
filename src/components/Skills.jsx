import React from "react";
import SkillCard from "./SkillCard";

import { FRONTEND_SKILLS } from "../data/skills.js";
import { BACKEND_SKILLS } from "../data/skills.js";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-cream">
      <div className="w-[500px] mx-auto h-full flex flex-col justify-center items-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-neutral-800">
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
