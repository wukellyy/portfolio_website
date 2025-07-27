import React from "react";
import { HiDownload } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import ProfilePic from "../assets/profile_pic.jpeg";

const Home = () => {
  return (
    <div className="w-full h-screen bg-cream">
      <div className="h-full px-8 flex flex-col md:flex-row-reverse justify-center items-center gap-6 md:gap-15 lg:gap-20">
        <div>
          <img
            src={ProfilePic}
            alt="Profile Picture"
            className="w-70 h-70 md:w-80 md:h-80 lg:w-100 lg:h-100 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-3">
            <div className="text-neutral-600 font-semibold text-lg lg:text-2xl">
              Hello, I'm
            </div>
            <div className="text-neutral-800 font-bold text-4xl lg:text-5xl">
              Kelly Wu
            </div>
            <div className="text-neutral-600 font-bold text-2xl lg:text-4xl">
              Full-Stack Developer
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-cream border-2 border-neutral-800 rounded-4xl px-6 py-2 hover:scale-105 ease-in duration-300">
              <div className="flex justify-center items-center gap-1 text-neutral-800">
                <HiDownload size={20} />
                <p className="font-semibold">Resume</p>
              </div>
            </button>
            <button className="text-cream bg-neutral-800 border-2 border-neutral-800 rounded-4xl px-6 py-2 hover:scale-105 ease-in duration-300">
              <p className="font-semibold">Contact Me</p>
            </button>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/wukellyy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={45}
                className="hover:scale-105 ease-in duration-300"
              />
            </a>
            <a
              href="http://github.com/wukellyy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub
                size={45}
                className="hover:scale-105 ease-in duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
