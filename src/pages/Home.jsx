import React from "react";
import Herosection from "../components/homepage/Herosection";
import Aboutsection from "../components/homepage/Aboutsection";
import Projectsection from "../components/homepage/Projectsection";
import Bannersection from "../components/homepage/Bannersection";
import Servicessection from "../components/homepage/Servicessection";
import Contactsection from "../components/homepage/Contactsection";

const Home = () => {
  return (
    <>
      <Herosection />
      <Aboutsection />
      <Projectsection />
      <Bannersection/>
      <Servicessection/>
      <Contactsection/>
    </>
  );
};

export default Home;
