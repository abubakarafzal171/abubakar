import React from 'react';
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
      'This is a modern real estate web application designed to showcase property listings in a clean, intuitive, and user-friendly way. Built with a focus on simplicity and clarity, the site allows users to easily browse available properties, explore details, and get a feel for different listings.',
    img: project2,
    link: 'https://realestate-aa.netlify.app/',
  },
  {
    title: 'Project No 3',
    description:
      'This is a sleek and modern e-commerce web application designed to provide a smooth shopping experience. Built with contemporary frontend technologies, the site allows users to browse products, view product details, add items to the cart, and navigate through the store with ease.',
    img: project3,
    link: 'https://ecommerce-app-virid-phi.vercel.app/',
  },
  {
    title: 'Project No 4',
    description:
      'The website includes well-structured sections such as About, Products, Services, and Contact, making it easy for visitors to learn about the brand and get in touch. Subtle animations and smooth transitions enhance the user experience, reflecting a polished and professional frontend implementation.',
    img: project4,
    link: 'https://www.urbanalfa.store/',
  },
];

const Projects = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen w-full px-4 py-10 md:px-10 ${
        darkMode ? 'bg-linear-to-b from-gray-950 via-gray-950 to-gray-950 text-white' : 'bg-white text-black'
      }`}
    >
      <h1 className="font-bold text-5xl font-sans mb-12 text-center md:text-left">Projects</h1>

      <div className="flex flex-col gap-20">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 ${
              idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="font-bold text-3xl font-serif mb-4">{project.title}</h2>
              <p className={`text-justify ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex flex-col items-center gap-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full max-w-md rounded-lg shadow-lg object-cover"
              />
              <a
                href={project.link}
                target="_blank"
                className="px-6 py-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
