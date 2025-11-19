import React from "react";
import { Code, Monitor, Sparkles } from "lucide-react"; // MagicWand -> Sparkles
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code className="w-10 h-10 text-orange-500" />,
    title: "Frontend Development",
    desc: "Custom-coded responsive websites."
  },
  {
    icon: <Sparkles className="w-10 h-10 text-purple-500" />, // updated icon
    title: "UI Animations",
    desc: "GSAP & Framer Motion smooth interactions."
  },
  {
    icon: <Monitor className="w-10 h-10 text-blue-500" />,
    title: "Modern UI Design",
    desc: "Simple, minimal & fast UI layouts."
  },
];

const Servicessection = () => {
  return (
    <section className="w-full py-16 font2">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-10 font3 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="p-6 border rounded-lg text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: false }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h4 className="font-semibold font3 mb-2">{service.title}</h4>
              <p className="text-sm opacity-80">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicessection;
