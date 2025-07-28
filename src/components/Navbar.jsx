import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);

    if (!nav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <div className="fixed w-full h-[12vh] flex justify-between items-center px-8 md:px-12 bg-cream text-neutral-800 z-30">
      <div className="text-4xl font-bold">
        <a href="/">KW</a>
      </div>

      {/* Menu */}
      <ul className="hidden sm:flex">
        <li className="px-4 cursor-pointer text-lg hover:font-medium">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="px-4 cursor-pointer text-lg hover:font-medium">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="px-4 cursor-pointer text-lg hover:font-medium">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="px-4 cursor-pointer text-lg hover:font-medium">
          <Link to="projects" offset={-100} smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="px-4 cursor-pointer text-lg hover:font-medium">
          <Link to="contact" offset={100} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="cursor-pointer sm:hidden" onClick={handleNav}>
        <FaBars size={32} />
      </div>

      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          nav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 w-[75%] sm:w-[65%] h-screen bg-cream p-10 transition-transform duration-500 ease-in-out ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center w-full">
            <div className="text-4xl font-bold">
              <a href="/">KW</a>
            </div>
            <div className="cursor-pointer" onClick={handleNav}>
              <IoClose size={50} />
            </div>
          </div>

          <ul className="flex flex-col py-8">
            <li className="py-4 cursor-pointer text-2xl hover:font-medium">
              <Link onClick={handleNav} to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="py-4 cursor-pointer text-2xl hover:font-medium">
              <Link onClick={handleNav} to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="py-4 cursor-pointer text-2xl hover:font-medium">
              <Link
                onClick={handleNav}
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="py-4 cursor-pointer text-2xl hover:font-medium">
              <Link
                onClick={handleNav}
                to="projects"
                offset={-100}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="py-4 cursor-pointer text-2xl hover:font-medium">
              <Link
                onClick={handleNav}
                to="contact"
                offset={100}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
