import React from 'react'
import { Link } from 'react-router-dom'
import WorkCard from '../../utils/WorkCard'
import project1 from '../../assets/images/project1.JPG'
import project2 from '../../assets/images/project2.JPG'
import project3 from '../../assets/images/project3.JPG'
import { motion } from 'framer-motion'

const Projectsection = () => {
  return (
    <motion.div
      className='flex flex-col justify-center items-center md:py-15 pb-10 px-4 mt-10 gap-10'
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h1 className='text-4xl font2 font-bold text-orange-500 lg:text-5xl'>
        My Work
      </h1>

      {/* Stagger effect */}
      <motion.div
        className='flex gap-5 flex-col md:flex-row w-[95%] px-2 py-3'
        initial="hidden"
        whileInView="show"
        viewport={{ once: false , amount: 0.2}}
        transition={{ staggerChildren: 0.25 }}
      >
        <WorkCard img={project1} title="Portfolio Website" link={'https://portfolio-app-jade-eight.vercel.app/'} />

        <WorkCard img={project2} title="Real Estate Website" link={'https://realestate-aa.netlify.app/'} />

        <WorkCard img={project3} title="Ecommerce App" link={'https://ecommerce-app-virid-phi.vercel.app/'} />
      </motion.div>

      <Link
        to={'/projects'}
        className='border px-3 py-1.5 rounded hover:bg-[#1E1E1E] hover:text-white transition-all duration-300 font2'
      >
        Explore More
      </Link>
    </motion.div>
  )
}

export default Projectsection
