import React from 'react'
import { Mail, Phone, Facebook, Instagram, Github } from "lucide-react";
const Contact = () => {
  return (
   <div className="w-full px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Section */}
      <div className="flex flex-col gap-6">
        <p className="text-lg text-gray-600">Get in touch</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Let's Connect & Work Together</h1>

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-lg">
            <Mail />
            <a href='mailto:itx.abubakar777@gmail.com'>itx.abubakar777@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <Phone />
            <a href='tel:+923028629392'>+92 302 8629392</a>
          </div>

          <div className="flex gap-5 mt-4">
            <a href="#" className="hover:text-blue-600"><Facebook /></a>
            <a href="#" className="hover:text-pink-600"><Instagram /></a>
            <a href="#" className="hover:text-gray-800"><Github /></a>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="flex justify-center">
        <img
          src="/profile_img.webp"
          alt="Profile"
          className="w-94 h-94 object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  )
}

export default Contact