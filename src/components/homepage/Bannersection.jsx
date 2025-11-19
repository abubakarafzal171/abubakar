import React from 'react'
import banner_img from '../../assets/images/banner_img.webp'
import { motion } from 'framer-motion'

const Bannersection = () => {
  return (
    <motion.div
      className="relative w-full h-[40vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner_img})` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      {/* Dark Layer */}
      <motion.div
        className="absolute inset-0 bg-black/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Text */}
      <motion.h1
        className="relative text-white text-4xl md:text-6xl font-serif text-center px-6 leading-snug"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Every client brief is <span className="italic">a story</span><br />
        waiting to be told.
      </motion.h1>
    </motion.div>
  )
}

export default Bannersection
