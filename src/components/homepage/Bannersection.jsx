import React from 'react'
import banner_img from '../../assets/images/banner_img.webp'

const Bannersection = () => {
  return (
    <div
      className="relative w-full h-[40vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner_img})` }}
    >
      {/* Dark Layer */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Text */}
      <h1 className="relative text-white text-4xl md:text-6xl font-serif text-center px-6 leading-snug">
        Every client brief is <span className="italic">a story</span><br />
        waiting to be told.
      </h1>
    </div>
  )
}

export default Bannersection
