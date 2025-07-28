import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen pt-[12vh] bg-cream flex justify-center items-center"
    >
      <div className="px-8 w-full sm:w-[550px] md:w-[650px] lg:w-[750px] h-full flex flex-col justify-center items-center text-center text-neutral-800 gap-2">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Contact Me</h2>
        <div className="w-[320px] sm:w-[400px] lg:w-[450px] h-auto p-8 flex flex-col justify-center items-center bg-cream border-2 border-neutral-800 rounded-2xl m-2 shadow-lg">
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center gap-3">
              <IoMdMail className="text-[30px] lg:text-[40px]" />
              <a
                href="mailto:kelly.wu@nyu.edu"
                className="font-semibold text-lg lg:text-xl underline hover:text-neutral-600 transition"
              >
                kelly.wu@nyu.edu
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-[30px] lg:text-[40px]" />
              <a
                href="https://linkedin.com/in/wukellyy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-lg lg:text-xl hover:underline hover:text-neutral-600 transition"
              >
                linkedin.com/in/wukellyy
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaSquareGithub className="text-[30px] lg:text-[40px]" />
              <a
                href="https://github.com/wukellyy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-lg lg:text-xl hover:underline hover:text-neutral-600 transition"
              >
                github.com/wukellyy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
