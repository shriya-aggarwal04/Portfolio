
import React from 'react'
import { BiLogoAws, BiLogoBootstrap, BiLogoCss3, BiLogoGit, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { motion } from 'framer-motion';

const Tech = () => {

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const floatTransition = {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <div id='tech' className='flex min-h-[70vh] w-full flex-col 
    items-center justify-center gap-16 md:gap-32'>
      
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-4xl font-light text-white md:text-6xl'
      >
        Technologies
      </motion.h1>

      <div className='flex flex-wrap items-center justify-center gap-10 p-5'>

        {/* React */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ ...floatTransition, delay: Math.random() * 1.5 }}
            className="p-5 rounded-full border border-white/30 backdrop-blur-sm"
          >
            <BiLogoReact className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          </motion.div>
        </motion.div>

        {/* JavaScript */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ ...floatTransition, delay: Math.random() * 1.5 }}
            className="p-5 rounded-full border border-white/30 backdrop-blur-sm"
          >
            <BiLogoJavascript className='cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          </motion.div>
        </motion.div>

        {/* NodeJS */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ ...floatTransition, delay: Math.random() * 1.5 }}
            className="p-5 rounded-full border border-white/30 backdrop-blur-sm"
          >
            <BiLogoNodejs className='cursor-pointer text-[80px] text-green-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          </motion.div>
        </motion.div>

        {/* CSS */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ ...floatTransition, delay: Math.random() * 1.5 }}
            className="p-5 rounded-full border border-white/30 backdrop-blur-sm"
          >
            <BiLogoCss3 className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          </motion.div>
        </motion.div>

        {/* Tailwind */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ ...floatTransition, delay: Math.random() * 1.5 }}
            className="p-5 rounded-full border border-white/30 backdrop-blur-sm"
          >
            <BiLogoTailwindCss className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          </motion.div>
        </motion.div>

        {/* MongoDB */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ ...floatTransition, delay: Math.random() * 1.5 }}
            className="p-5 rounded-full border border-white/30 backdrop-blur-sm"
          >
            <BiLogoMongodb className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          </motion.div>
        </motion.div>

        {/* Git */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ ...floatTransition, delay: Math.random() * 1.5 }}
            className="p-5 rounded-full border border-white/30 backdrop-blur-sm"
          >
            <BiLogoGit className='cursor-pointer text-[80px] text-orange-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          </motion.div>
        </motion.div>

        {/* Bootstrap */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ ...floatTransition, delay: Math.random() * 1.5 }}
            className="p-5 rounded-full border border-white/30 backdrop-blur-sm"
          >
            <BiLogoBootstrap className='cursor-pointer text-[80px] text-indigo-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          </motion.div>
        </motion.div>

        {/* AWS */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ ...floatTransition, delay: Math.random() * 1.5 }}
            className="p-5 rounded-full border border-white/30 backdrop-blur-sm"
          >
            <BiLogoAws className='cursor-pointer text-[80px] text-amber-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          </motion.div>
        </motion.div>

        {/* HTML5 */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ ...floatTransition, delay: Math.random() * 1.5 }}
            className="p-5 rounded-full border border-white/30 backdrop-blur-sm"
          >
            <BiLogoHtml5 className='cursor-pointer text-[80px] text-orange-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}

export default Tech;

