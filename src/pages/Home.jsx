import React from "react";
import Herosection from "../components/homepage/Herosection";
import Aboutsection from "../components/homepage/Aboutsection";
import Projectsection from "../components/homepage/Projectsection";
import Bannersection from "../components/homepage/Bannersection";
import Servicessection from "../components/homepage/Servicessection";
import Contactsection from "../components/homepage/Contactsection";

const Home = ({darkMode}) => {
  return (
    <div className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-black'}`}>
      <Herosection />
      <Aboutsection />
      <Projectsection />
      <Bannersection/>
      <Servicessection/>
      <Contactsection/>
    </div>
  );
};

export default Home;
