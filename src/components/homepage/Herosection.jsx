import React from "react";
import { Link } from "react-router-dom";
const Herosection = () => {
  return (
    <div className=" flex justify-center items-center flex-col px-4 py-10">
      <div className="flex justify-center items-start flex-col gap-2">
        <div className="top flex flex-col gap-1">
          <h1 className="font4 font-bold text-6xl md:text-7xl lg:text-8xl uppercase">
            Born to Build
          </h1>
          <h2 className="font2 font-semibold  text-orange-500 ml-10 mb-5">
            Exclusive Web Designs
          </h2>
        </div>
        <div className="2nd flex justify-center items-center flex-col md:flex-row gap-4">
          <div className="left w-[95%] md:w-[65%]">
            <img
              src="profile_img.webp"
              alt="profile_img"
              className="h-90 w-120 rounded shadow-md"
            />
          </div>
          <div className="right w-[90%] md:w-[25%]">
            <p className="font2 text-justify mb-5">
              Frontend developer crafting clean, responsive and user-focused web
              experiences with creativity, passion, and continuous learning to
              bring ideas beautifully alive.
            </p>
            <Link
              to={"/contact"}
              className="font1 underline underline-offset-3 text-xl"
            >
              Work with Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
