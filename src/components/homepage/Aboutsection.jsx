import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Aboutsection = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-center items-center gap-6 w-full px-4 md:py-10 my-20 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* LEFT */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-start"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <h1 className="font2 font-bold text-4xl md:text-5xl lg:text-5xl uppercase">
          About Me
        </h1>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col gap-6 mt-6 md:mt-0"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <motion.p
          className="lg:w-[90%] text-justify px-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I’m <strong>Abubakar Afzal</strong>, a dedicated Frontend Web
          Developer who loves creating clean, intuitive, and engaging digital
          experiences. I focus on building responsive, user-friendly interfaces
          that combine creativity with performance to deliver meaningful web
          experiences.
        </motion.p>

        <motion.p
          className="lg:w-[90%] text-justify px-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I have a strong foundation in HTML, CSS, and JavaScript, and I am
          proficient in frameworks like React, Next.js, and Tailwind. I also
          have experience with animation libraries like GSAP and Framer Motion.
        </motion.p>

        <Link
          to={"/about"}
          className="border px-3 py-1.5 rounded hover:bg-[#1E1E1E] hover:text-white transition-all duration-300 font2 w-32 text-center"
        >
          Read More
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Aboutsection;
