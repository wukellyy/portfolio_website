import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[60px] bg-neutral-800 text-cream">
      <div className="flex flex-col justify-center items-center h-full gap-1">
        <p className="text-xs font-bold">© 2025 Kelly Wu</p>
        <p className="text-xs">
          Built with React, Tailwind CSS, and a love for Figma
        </p>
      </div>
    </div>
  );
};

export default Footer;
