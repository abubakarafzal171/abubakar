import React from 'react'
import Header from './Header'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<>
  <Header/>
  <nav className='flex items-center justify-between px-6 md:px-10 lg:px-12 md:mt-2 font2  bg-white z-100 h-[8vh] sticky top-0'>
    <div className="flex gap-4 md:gap-6 lg:gap-9">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/projects'}>Projects</NavLink>
      <NavLink to={'/about'}>About</NavLink>
    </div>
    <div className="right">
         <Link to={'/contact'} className= 'border px-3 py-1.5 rounded hover:bg-[#1E1E1E] hover:text-white transition-all duration-300 font2'>Contact</Link>
    </div>
  </nav>
</>
  
  )
}

export default Navbar