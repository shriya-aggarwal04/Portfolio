import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='fixed top-0 z-10 flex w-full 
      items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-4
      text-white backdrop-blur-md md:justify-evenly'
      >
        
          <img src="s.png" alt="logo" className='w-16 h-16'/>
        

        <ul className='hidden md:flex gap-10'>
            <a href="#home" className=' bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-xl 
            font-semibold cursor-pointer opacity-80 transition-all duration-300
            hover:opacity-100'>
              <li>Home</li>
            </a>

            <a href="#tech" className='cursor-pointer opacity-70 transition-all duration-300
            hover:opacity-100'>
              <li>Skills</li>
            </a>

            <a href="#projects" className='cursor-pointer opacity-70 transition-all duration-300
            hover:opacity-100'>
              <li>Projects</li>
            </a>

            <a href="#contact" className='cursor-pointer opacity-70 transition-all duration-300
            hover:opacity-100'>
              <li>Contact</li>
            </a>
        </ul>

        <ul className='hidden md:flex gap-5'>

          <a href="https://github.com/shriya-aggarwal04" className='cursor-pointer text-2xl opacity-70
          transition-all duration-300 hover:text-gray-500 hover:opacity-100'>
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/shriya-aggarwal408' className='cursor-pointer text-2xl opacity-70
          transition-all duration-300 hover:text-blue-700 hover:opacity-100'>
            <FaLinkedin />
          </a>
          <a href='/' className='cursor-pointer text-2xl opacity-70
          transition-all duration-300 hover:text-pink-500 hover:opacity-100'>
            <FiInstagram />
          </a>

        </ul>

        {
          isOpen ? (
            <IoCloseSharp className='block md:hidden text-4xl' onClick={menuOpen}/>
          ) : (
            <BiMenu className='block md:hidden text-4xl' onClick={menuOpen}/>
          )
        }

        {isOpen && (
          <div className={`fixed right-0 top-[84px] flex h-screen
          w-1/2 flex-col itemsstart justify-start gap-10 border-l
           border-gray-800 bg-black/70 p-12 ${isOpen ?  "block" : "hidden"}`}>

            <ul className='flex flex-col gap-8'>
            <a href="#home" className=' bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-xl 
            font-semibold cursor-pointer opacity-80 transition-all duration-300
            hover:opacity-100'>
              <li>Home</li>
            </a>

            <a href="#tech" className='cursor-pointer opacity-70 transition-all duration-300
            hover:opacity-100'>
              <li>Skills</li>
            </a>

            <a href="#projects" className='cursor-pointer opacity-70 transition-all duration-300
            hover:opacity-100'>
              <li>Projects</li>
            </a>

            <a href="#contact" className='cursor-pointer opacity-70 transition-all duration-300
            hover:opacity-100'>
              <li>Contact</li>
            </a>
          </ul>

          <ul className='flex flex-wrap gap-5'>

          <a href="https://github.com/shriya-aggarwal04" className='cursor-pointer text-2xl opacity-70
          transition-all duration-300 hover:text-gray-500 hover:opacity-100'>
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/shriya-aggarwal408' className='cursor-pointer text-2xl opacity-70
          transition-all duration-300 hover:text-blue-700 hover:opacity-100'>
            <FaLinkedin />
          </a>
          <a href='/' className='cursor-pointer text-2xl opacity-70
          transition-all duration-300 hover:text-pink-500 hover:opacity-100'>
            <FiInstagram />
          </a>
          
          </ul>
          </div>
        )}
    </nav>
  )
}

export default Navbar
