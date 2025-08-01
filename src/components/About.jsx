import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen pt-[12vh] bg-cream flex justify-center items-center"
    >
      <div className="px-8 sm:w-[550px] md:w-[650px] lg:w-[750px] h-full flex flex-col justify-center items-center text-center text-neutral-800 gap-2">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Me</h2>
        <div className="flex flex-col gap-2 text-lg lg:text-xl">
          <p className="font-semibold">
            Hi! I'm Kelly — a recent Computer Science graduate from NYU.
          </p>
          <p>
            I enjoy working across the full stack to build user-facing features
            that are fast, reliable, and intuitive.
          </p>
          <p>
            I'm equipped with a solid technical foundation and a genuine
            eagerness to learn, experiment, and grow with new tools and
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
