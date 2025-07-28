import React from "react";

const SkillCard = (props) => {
  const { title, skills } = props;

  return (
    <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto p-8 flex flex-col items-center bg-cream border-2 border-neutral-800 rounded-2xl m-2 shadow-lg">
      <h2 className="text-neutral-600 font-bold text-xl lg:text-3xl mb-8 ">
        {title}
      </h2>
      <div className="grid sm:grid-cols-2 text-neutral-800 gap-4 sm:gap-6 md:gap-x-14 md:gap-y-8">
        {skills.map(({ name, level, Icon }, idx) => (
          <div key={idx} className="flex gap-4 items-center">
            <Icon className="text-[40px] md:text-[45px] lg:text-[55px]" />
            <div className="flex flex-col items-start">
              <p className="font-semibold lg:text-2xl">{name}</p>
              <p className="text-sm lg:text-lg">{level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
