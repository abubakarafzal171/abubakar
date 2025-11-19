import React from 'react'
import Header from './Header'
import { Link, NavLink } from 'react-router-dom'
import { Sun, Moon } from "lucide-react";   // 👉 Icons import

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Header darkMode={darkMode}/>

      <nav className={`flex items-center justify-between px-6 md:px-10 lg:px-12 md:mt-2 font2  z-100 h-[8vh] sticky top-0 ${darkMode ? 'bg-gray-950 text-white': 'bg-white shadow-md'}`}>
        <div className="flex gap-4 md:gap-6 lg:gap-9 text-xs md:text-lg">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/projects'}>Projects</NavLink>
          <NavLink to={'/about'}>About</NavLink>
        </div>

        <div className="right flex items-center">
          
          {/* 🔥 ICON Toggle Button */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className=' px-2 py-1 mx-3 cursor-pointer rounded'
          >
            {darkMode ? <Sun size={24} /> : <Moon size={28} />}
          </button>

          <Link
        
            to={'/contact'} 
            className='border px-1.5 py-1.25 rounded hover:bg-[#1E1E1E] hover:text-white transition-all duration-300 font2'
          >
            Contact
          </Link>
        </div>

      </nav>
    </>
  )
}

export default Navbar
