import React from "react";
import { Mail, Phone, Facebook, Instagram, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contactsection = () => {
  return (
    <section className="w-full px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col gap-6"
      >
        <p className="text-lg text-gray-500 tracking-wide">
          Let's Work Together
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight font-serif">
          Start a Project or Just Say Hi!
        </h1>

        <div className="mt-8 flex flex-col gap-5 text-lg">
          <div className="flex items-center gap-4 group">
            <Mail className="group-hover:text-blue-600 transition-all duration-300" />
            <a
              href="mailto:itx.abubakar777@gmail.com"
              className="hover:underline"
            >
              itx.abubakar777@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 group">
            <Phone className="group-hover:text-green-600 transition-all duration-300" />
            <a
              href="tel:+923028629392"
              className="hover:underline"
            >
              +92 302 8629392
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4 text-xl">
            <a className="hover:text-blue-600 hover:scale-110 transition duration-300">
              <Facebook />
            </a>
            <a className="hover:text-pink-600 hover:scale-110 transition duration-300">
              <Instagram />
            </a>
            <a className="hover:text-gray-900 hover:scale-110 transition duration-300">
              <Github />
            </a>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div className="relative w-72 h-72 md:w-80 md:h-80">
          {/* Gradient Rounded Frame */}
          <div className="absolute inset-0 rounded-3xl  from-blue-500 to-purple-500 blur-xl opacity-40"></div>

          {/* Real Image */}
          <img
            src="/profile_img.webp"
            alt="Profile"
            className="relative w-full h-full rounded-3xl shadow-2xl object-cover border border-white/20 backdrop-blur-md"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Contactsection;
