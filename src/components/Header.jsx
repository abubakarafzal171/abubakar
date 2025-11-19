import React from 'react'

const Header = ({darkMode}) => {
  return (
    <div className={` py-2 px-4  z-100 flex items-center justify-center flex-col mb-5 ${darkMode ? 'bg-gray-950 text-white': 'bg-white'}`}>
<div className="text-4xl md:text-6xl lg:text-7xl uppercase font1 cursor-none ">Abubakar Afzal</div>
<div className="tagline font2  text-sm font-semibold text-orange-500 bg-linear-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Front-End Web Developer</div>
<div className="line w-[94vw] h-px bg-gray-400"></div>
    </div>
  )
}

export default Header