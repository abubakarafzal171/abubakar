import React from 'react'
import { Link } from 'react-router-dom'
import WorkCard from '../../utils/WorkCard'
import project1 from '../../assets/images/project1.JPG'
import project2 from '../../assets/images/project2.JPG'
import project3 from '../../assets/images/project3.JPG'
const Projectsection = () => {
  return (
    <div className='flex flex-col justify-center items-center py-15 px-4 mt-10 gap-10'>
      <h1 className='text-4xl font2 font-bold text-orange-500 lg:text-5xl '>My Work</h1>
      <div className='flex gap-5  flex-col md:flex-row w-[95%]  px-2 py-5'>
        <WorkCard img={project1} title="Ecommerce Website" link={'https://ecommerce-app-virid-phi.vercel.app/'} />
        <WorkCard img={project2} title="Portfolio Website" link={'https://portfolio-app-jade-eight.vercel.app/'}/>
        <WorkCard img={project3} title="Real Estate Website" link={'https://realestate-aa.netlify.app/'}/>
      </div>
      <Link to={'/project'} className='border px-3 py-1.5 rounded hover:bg-[#1E1E1E] hover:text-white transition-all duration-300 font2'>Explore More</Link>
    </div>
  )
}

export default Projectsection