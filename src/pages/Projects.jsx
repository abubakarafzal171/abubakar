import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/images/project1.JPG';
import project2 from '../assets/images/project2.JPG';
import project3 from '../assets/images/project3.JPG';
import project4 from '../assets/images/project4.JPG';

const projectsData = [
  {
    title: 'Project No 1',
    description:
      'The website includes multiple sections: a Hero Section introducing me, an About Section with my background and skills, a Projects Section to highlight my work, a Services Section outlining what I can offer, and a Contact Section for easy communication.',
    img: project1,
    link: 'https://portfolio-app-jade-eight.vercel.app/',
  },
  {
    title: 'Project No 2',
    description:
      'This is a modern real estate web application designed to showcase property listings in a clean, intuitive, and user-friendly way. Users can easily browse available properties, explore details, and get a feel for different listings.',
    img: project2,
    link: 'https://realestate-aa.netlify.app/',
  },
  {
    title: 'Project No 3',
    description:
      'A sleek and modern e-commerce web application providing a smooth shopping experience. Users can browse products, view details, add items to the cart, and navigate through the store easily.',
    img: project3,
    link: 'https://ecommerce-app-virid-phi.vercel.app/',
  },
  {
    title: 'Project No 4',
    description:
      'A polished website with sections like About, Products, Services, and Contact. Smooth transitions and subtle animations enhance the user experience and reflect a professional frontend implementation.',
    img: project4,
    link: 'https://www.urbanalfa.store/',
  },
];

const Projects = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen w-full px-4 py-10 md:px-10 ${
        darkMode ? 'bg-gray-950 text-white' : 'bg-white text-black'
      }`}
    >
      <h1 className="font-bold text-5xl font-sans mb-12 text-center md:text-left">
        Projects
      </h1>

      <div className="flex flex-col gap-20">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 ${
              idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="font-bold text-3xl font-serif mb-4">{project.title}</h2>
              <p className={`text-justify mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                className="px-6 py-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
              >
                View Project
              </a>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex flex-col items-center gap-4">
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full max-w-md rounded-lg shadow-lg object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 120 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
