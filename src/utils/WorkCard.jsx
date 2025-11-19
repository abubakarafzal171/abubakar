import React from 'react'
import { motion } from 'framer-motion'

const WorkCard = ({ img, title, link }) => {
  return (
    <motion.div
      className='w-full hover:shadow-2xl'
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" }
        }
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <a
        href={link}
        target='_blank'
        className='flex flex-col items-center justify-center gap-4 mb-8'
      >
        <img src={img} alt="" className='h-50 w-100 rounded p-4' />
        <h2 className='text-md font-semibold'>{title}</h2>
      </a>
    </motion.div>
  )
}

export default WorkCard
