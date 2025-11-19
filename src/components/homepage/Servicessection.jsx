import React from "react";
import { Palette, Sparkles, Package } from "lucide-react";
import { motion } from "framer-motion";

const Servicessection = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12 text-orange-500" />,   // THEMED COLOR
      title: "Illustration",
      desc: "I create high-quality editorial illustrations and brand-focused visuals.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-orange-500" />,  // THEMED COLOR
      title: "Visual Identity",
      desc: "I craft unique and memorable brand identities with precision and creativity.",
    },
    {
      icon: <Package className="w-12 h-12 text-orange-500" />,   // THEMED COLOR
      title: "Environmental Design",
      desc: "I bring 2D ideas into 3D spaces making design physical and tactile.",
    },
  ];

  return (
    <section className="w-full py-15 px-6 md:px-12 lg:px-20">
      
      {/* Heading Animation */}
      <motion.h2
        className="text-4xl md:text-5xl font-serif mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        What I Do
      </motion.h2>

      {/* Services Grid with stagger */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-14"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.25 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="space-y-5 text-center md:text-left"
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
            whileHover={{ scale: 1.05, rotate: 1 }}  // DIFFERENT & CLEAN HOVER EFFECT
            transition={{ type: "spring", stiffness: 120 }}
          >
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {service.icon}
            </motion.div>

            <h3 className="text-2xl font-semibold font-serif">{service.title}</h3>

            <p className="text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Servicessection;
