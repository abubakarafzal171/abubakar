import React from "react";
import { Palette, Sparkles, Package } from "lucide-react";

const Servicessection = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Illustration",
      desc: "I create high-quality editorial illustrations and brand-focused visuals.",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Visual Identity",
      desc: "I craft unique and memorable brand identities with precision and creativity.",
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Environmental Design",
      desc: "I bring 2D ideas into 3D spaces  making design physical and tactile.",
    },
  ];

  return (
    <section className="w-full  py-15 px-6 md:px-12 lg:px-20">
      
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-serif mb-20">
        What I Do
      </h2>

      {/* Services Grid */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-14">
        {services.map((service, index) => (
          <div key={index} className="space-y-5">
            <div className="">{service.icon}</div>
            <h3 className="text-2xl font-semibold font-serif">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicessection;

