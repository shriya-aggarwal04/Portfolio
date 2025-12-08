import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
      <div className='flex flex-col md:flex-row items-center md:justify-between justify-center gap-10 text-white '>
        
        

          <motion.div className='flex max-w-[600px] flex-col items-center 
          justify-center gap-3 text-center md:items-start md:text-left' initial={{y: -50, opacity: 0}}
          animate={{y: 0, opacity:1}}
          transition={{duration: 0.8, delay: 0.2}} >
            <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text 
            text-transparent text-5xl font-light md:text-7xl pb-2'>Shriya Aggarwal</h1>

            <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text 
            text-transparent text-2xl font-light md:text-3xl'>Web Developer</h3>

            <p className='md:text-base text-pretty text-sm text-gray-400 '>
            I am a web developer skilled in React, TailwindCSS and JavaScript, focused
            on building clean, scalable applications. From front-end design to seamless database integration
            with MongoDB, I create efficient solutions for dynamic user experiences. Let's build 
            something great together!
            </p> 

            <a href='https://drive.google.com/file/d/1IHA2uwuZI5IKfqNxJacC3NqNL03g42z9/view?usp=sharing' className='bg-gradient-to-r from-blue-500 to-pink-500 text-white border-black px-4 py-4 rounded-full mt-4'>Download Resume</a>
          </motion.div>

          <motion.div
         initial={{y: 50, opacity: 0}}
         animate={{y: 0, opacity:1}}
         transition={{duration: 0.8, delay: 0.2}} 
        >
          <img src="/6.jpg" alt="image" className='w-[300px] cursor-pointer rounded-full shadow-indigo-900 transition-all
          duration-300  hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600
          md:w-[350px] '/>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
