import React from 'react'
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    image: "/uber-clone-app.svg", 
    title: "Ride-Booking-App",
    description:
      "A full-stack ride-hailing application inspired by Uber, allowing users to book rides, track drivers in real time, and manage their trips seamlessly. The app features live ride matching and location updates using the Google Maps API, ensuring accurate route visualization and distance calculation. It includes secure user authentication with JWT, a complete login/signup flow, and a dedicated admin dashboard to manage users, rides, and transactions. Built with a scalable architecture, the project delivers a smooth, real-world ride booking experience from request to completion.",
    github: "https://github.com/shriya-aggarwal04/Uber-Ride-Booking-App.git",
    technologies: [
      "MongoDB",
      "React",
      "Node",
      "Socket.IO",
      "Google Maps API",
      "JWT (JSON Web Tokens)",
      "TailwindCSS",
    ],
  },
  {
    image: "/7.png",
    title: "Wanderlust",
    description:
      "A full-stack Airbnb-style property rental application built using the MVC architecture. The project features secure user authentication, property listings, dynamic EJS templates, and complete CRUD operations using MongoDB. Integrated Cloudinary for seamless image uploads and Mapbox API for interactive maps and location tracking. Designed with responsive UI using Bootstrap, the app provides a smooth user experience for browsing, adding, and managing rental properties.",
    github:"https://github.com/shriya-aggarwal04/Wanderlust.git",
    technologies: [
      "MongoDB",
      "Node.js",
      "EJS Templates",
      "Bootstrap",
      "MVC Architecture",
      "Cloudinary",
      "MapBox API",
      "Mongo Atlas",
    ],
  },
  {
    image: "/8.webp",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills and Comntact information",
    github:"https://github.com/shriya-aggarwal04/Portfolio.git",
    technologies:["HTML", "CSS", "React", "Tailwind", "FramerMotion"]
  }
]

const ScrollReveal = ({children}) => {
  return(
  <motion.div
    initial={{opacity: 0, y:100}}
    whileInView={{opacity: 1, y:0}}
    viewport={{amount:0.2}}
    transition={{duration:0.8}}
  >
    {children}
  </motion.div> 
  )
}

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl border-2 
          transition-all duration-300 hover:scale-105 md:w-[350px]"
        />

        {/* Right Section */}
        <div className="flex flex-col gap-5 w-full">

          {/* Top Row → Title + GitHub Icon */}
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">{project.title}</div>

            {/* GitHub icon if link exists */}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white text-2xl hover:text-gray-400 transition"
              >
                <FaGithub />
              </a>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-400">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-lg bg-black px-2 py-2 whitespace-nowrap text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col 
      items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[800px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
