import React from 'react'
import project1 from '../assets/images/project1.JPG'
import project2 from '../assets/images/project2.JPG'
import project3 from '../assets/images/project3.JPG'
import project4 from '../assets/images/project4.JPG'
const Projects = () => {
  return (
   <div className='container h-full w-full mb-10'>
<h1 className='fontbold text-5xl font-sans mt-10 ml-10 md:mt-20 md:ml-20'>Projects</h1>

<div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-40 lg:gap-50 mt-20 lg:ml-30'>
<div className="left flex flex-col gap-2 md:ml-10">
  <h2 className='fontbold text-3xl font-serif ml-4 md:ml-1'>Project No 1</h2>
  <p className='text-gray-700 text-justify w-[350px] md:w-[420px]'>The website includes multiple sections: a Hero Section introducing me, an About Section with my background and skills, a Projects Section to highlight my work, a Services Section outlining what I can offer, and a Contact Section for easy communication.</p>
</div>
<div className="right md:ml-10 flex flex-col gap-8">
  <img src={project1} alt=""  className="w-[90vw] md:w-full max-w-md rounded-lg shadow-md object-cover"  />
  <a href='https://portfolio-app-jade-eight.vercel.app/' target='_blank' className='w-30 h-10  flex justify-center items-center bg-gray-800 ml-4 text-white cursor-pointer rounded hover:bg-gray-700'>View Project</a>
</div>
</div>



<div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-40 lg:gap-50 mt-20 lg:ml-30'>
<div className="left flex flex-col gap-2 md:ml-10">
  <h2 className='fontbold text-3xl font-serif ml-4 md:ml-1'>Project No 2</h2>
  <p className='text-gray-700 text-justify w-[350px] md:w-[420px]'>This is a modern real estate web application designed to showcase property listings in a clean, intuitive, and user-friendly way. Built with a focus on simplicity and clarity, the site allows users to easily browse available properties, explore details, and get a feel for different listings.</p>
</div>
<div className="right md:ml-10 flex flex-col gap-8">
  <img src={project2} alt=""  className="w-[90vw] md:w-full max-w-md rounded-lg shadow-md object-cover"  />
  <a href='https://realestate-aa.netlify.app/' target='_blank' className='w-30 h-10  flex justify-center items-center bg-gray-800 ml-4 text-white cursor-pointer rounded hover:bg-gray-700'>View Project</a>
</div>
</div>

<div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-40 lg:gap-50 mt-20 lg:ml-30'>
<div className="left flex flex-col gap-2 md:ml-10">
  <h2 className='fontbold text-3xl font-serif ml-4 md:ml-1'>Project No 3</h2>
  <p className='text-gray-700 text-justify w-[350px] md:w-[420px]'>This is a sleek and modern e-commerce web application designed to provide a smooth shopping experience. Built with contemporary frontend technologies, the site allows users to browse products, view product details, add items to the cart, and navigate through the store with ease.</p>
</div>
<div className="right md:ml-10 flex flex-col gap-8">
  <img src={project3} alt=""  className="w-[90vw] md:w-full max-w-md rounded-lg shadow-md object-cover"  />
  <a href='https://ecommerce-app-virid-phi.vercel.app/' target='_blank' className='w-30 h-10  flex justify-center items-center bg-gray-800 ml-4 text-white cursor-pointer rounded hover:bg-gray-700'>View Project</a>
</div>
</div>

<div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-40 lg:gap-50 mt-20 lg:ml-30'>
<div className="left flex flex-col gap-2 md:ml-10">
  <h2 className='fontbold text-3xl font-serif ml-4 md:ml-1'>Project No 4</h2>
  <p className='text-gray-700 text-justify w-[350px] md:w-[420px]'>The website includes well-structured sections such as About, Products, Services, and Contact, making it easy for visitors to learn about the brand and get in touch. Subtle animations and smooth transitions enhance the user experience, reflecting a polished and professional frontend implementation.</p>
</div>
<div className="right md:ml-10 flex flex-col gap-8">
  <img src={project4} alt=""  className="w-[90vw] md:w-full max-w-md rounded-lg shadow-md object-cover"  />
  <a href='https://www.urbanalfa.store/' target='_blank' className='w-30 h-10  flex justify-center items-center bg-gray-800 ml-4 text-white cursor-pointer rounded hover:bg-gray-700'>View Project</a>
</div>
</div>

</div>
  )
}

export default Projects