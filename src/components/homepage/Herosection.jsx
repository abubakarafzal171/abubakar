import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <motion.div
      className="flex justify-center items-center flex-col px-4 md:py-10 pt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="flex justify-center items-start flex-col gap-2">
        <motion.div
          className="top flex flex-col gap-1"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h1 className="font4 font-bold text-6xl md:text-7xl lg:text-8xl uppercase py-5 ">
            Born to Build
          </h1>
          <h2 className="font2 font-semibold text-orange-500 ml-10 mb-5">
            Exclusive Web Designs
          </h2>
        </motion.div>

        <div className="2nd flex justify-center items-center flex-col md:flex-row gap-4">
          <motion.div
            className="left w-[95%] md:w-[65%]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <img
              src="profile_img.webp"
              alt="profile_img"
              className="h-90 w-120 rounded-2xl shadow-md"
            />
          </motion.div>

          <motion.div
            className="right w-[90%] md:w-[25%]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
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
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Herosection;
