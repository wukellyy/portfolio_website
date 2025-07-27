import React from "react";

const SkillCard = (props) => {
  const { title, skills } = props;

  return (
    <div className="w-[500px] lg:w-[600px] h-auto p-8 flex flex-col items-center bg-cream border-2 border-neutral-800 rounded-2xl m-2">
      <h2 className="text-neutral-600 font-bold text-2xl lg:text-4xl mb-8 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-x-20 gap-y-8 text-neutral-800">
        {skills.map(({ name, level, Icon }, index) => (
          <div key={index} className="flex gap-4  items-center">
            <Icon className="text-[40px] md:text-[45px] lg:text-[55px]" />
            <div className="flex flex-col">
              <p className="font-semibold lg:text-2xl">{name}</p>
              <p className=" text-sm lg:text-lg">{level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
