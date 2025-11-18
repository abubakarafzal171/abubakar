import React from "react";
import Aboutsection from "../components/aboutpage/Aboutsection";
import Bannersection from "../components/aboutpage/Bannersection";
import Servicessection from "../components/aboutpage/Servicessection";

const About = () => {
  return (
    <div className={` h-full w-full    `}>
      {/* ABOUT SECTION */}
  <Aboutsection/>

      {/* BANNER SECTION */}
   <Bannersection/>

      {/* SERVICES SECTION */}
  <Servicessection/>
    </div>
  );
};

export default About;
