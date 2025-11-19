import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    message:
      "Working with this team was an amazing experience. The quality and attention to detail were outstanding!",
  },
  {
    name: "Sarah Ahmed",
    role: "UI/UX Designer",
    message:
      "Incredible professionalism and clean workflow. Highly recommended for any creative project!",
  },
  {
    name: "Afrah Shaheen",
    role: "Project Manager",
    message:
      "Delivered the project before the deadline with superb quality. Truly impressive work!",
  },
];

const Testimonialssection = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: { opacity: 0, y: -20 },
            show: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5, once: false }}
        >
          Testimonials
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}  // 🔥 key trick = always re-render → repeat animation
              initial="hidden"
              whileInView="show"
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: false, amount: 0.3 }} // 🔥 ensures re-trigger
              className="p-6 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 bg-white/5 backdrop-blur-md "
            >
              <p className="italic mb-4">“{item.message}”</p>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm opacity-70">{item.role}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonialssection;
